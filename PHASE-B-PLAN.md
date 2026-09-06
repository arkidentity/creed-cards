# Creed Cards — Phase B Plan (storage re-key)

**Status:** BUILT 2026-09-06 · **Depends on:** Phase A (`6aae40e`, shipped)

**Scope decisions (2026-09-06):** ship B **and start C** in this effort; **keep +
fix** the legacy `progress.ts::syncToSupabase()` (there is a standalone
`creed-cards.html` build embedded by ark-identity — RLS is `account_id =
auth.uid()`, so the fix is just `disciple_id` → `account_id` + `decks_progress`);
`focus_deck_id` **and** per-deck `last_studied` both land now.

**What shipped for B:** migration `230_creed_decks_progress.sql` (dna-hub);
`creed-cards/lib/progress.ts` per-deck re-key (`creedcards_learned_v2`,
`runDeckMigrationOnce`, deckId optional-last-arg, `getAllLearned` /
`getTotalLearnedCount` / `resetDeckProgress` / `get|setFocusDeck`, fixed
`syncToSupabase`); `daily-dna/lib/creedSync.ts` writes `decks_progress` +
`focus_deck_id`, mirrors `cards_mastered`. Sections below are the as-built spec.

Phase B makes card-mastery storage per-deck: `int[]` → `{ [deckId]: int[] }` in
both localStorage and Supabase. **Internal only** — Essentials is still the only
`live` deck, so there is no visible change. Routes and dashboard are Phase C.

Deck 1 was already frozen at 50 + renumbered (migration `229`), so **this
migration carries no id remap** — it only wraps the existing array under key
`"1"`.

---

## 0. What's on the ground today

| Piece | Where | Shape |
|---|---|---|
| localStorage mastery | `creed-cards/lib/progress.ts` — `creedcards_learned` | `number[]` (new 1–50 ids after `runIdMigrationOnce`) |
| localStorage "continue" | same — `creedcards_last_studied` | single `number` |
| Supabase table | `disciple_creed_progress` (dna-hub `034`, `176`) | `account_id` UNIQUE · `cards_mastered int[]` · `last_studied_at` · `total_study_sessions` · `quiz_results jsonb` |
| **Live sync path** | `daily-dna/lib/creedSync.ts` — `syncCreedProgress(accountId)` | push-only upsert `onConflict: 'account_id'`; writes `cards_mastered`, `total_study_sessions`, `quiz_results` |
| Legacy sync path | `creed-cards/lib/progress.ts` — `syncToSupabase()` | upsert `onConflict: 'disciple_id'` — **column does not exist in the schema**; see Open Questions |
| Hub reads (all COUNT) | `dna-hub` `157_unified_user_stats` view (`array_length`), `api/groups/[id]`, `api/groups/[id]/disciples/[discipleId]`, `api/admin/disciples[/network]`, `NetworkDisciplesTab`, `DisciplesTab` | every one is `cards_mastered.length` or `array_length(...)` |

**Consequence:** if we keep `cards_mastered` mirrored to Deck 1, **zero Hub
changes are needed in Phase B.** The Hub cutover + column drop is a later,
separate migration.

---

## 1. Supabase — migration `230_creed_decks_progress.sql` (dna-hub `database/`)

Next free number is **230** (229 is the last).

```sql
-- 230_creed_decks_progress.sql
-- 2026-09-__  Phase B: per-deck creed mastery.
-- Adds decks_progress (jsonb map deckId -> int[] of mastered card ids) and
-- focus_deck_id. Backfills decks_progress."1" from the existing cards_mastered
-- array. cards_mastered stays mirrored to Deck 1 until the Hub reads cut over
-- (separate migration), so nothing in the Hub breaks on deploy.
--
-- Additive only. No RPC drop, no new RPC -> no GRANT lines needed
-- (disciple_creed_progress is a grandfathered table).

BEGIN;

ALTER TABLE disciple_creed_progress
  ADD COLUMN IF NOT EXISTS decks_progress JSONB NOT NULL DEFAULT '{}'::jsonb,
  ADD COLUMN IF NOT EXISTS focus_deck_id  SMALLINT;

-- Wrap the current Deck 1 array under key "1". Idempotent: only touches rows
-- still at the default '{}'.
UPDATE disciple_creed_progress
SET decks_progress = jsonb_build_object(
      '1', to_jsonb(COALESCE(cards_mastered, ARRAY[]::int[]))
    ),
    updated_at = now()
WHERE decks_progress = '{}'::jsonb
  AND cards_mastered IS NOT NULL
  AND cards_mastered <> ARRAY[]::int[];

COMMENT ON COLUMN disciple_creed_progress.decks_progress IS
  'Per-deck mastered card ids: {"1":[1,4,7],"2":[2,3]}. cards_mastered is kept mirrored to key "1" until Hub reads cut over, then this becomes the source of truth.';
COMMENT ON COLUMN disciple_creed_progress.focus_deck_id IS
  'User-chosen Focus deck for Card of the Day. NULL = global rotation across owned decks.';

COMMIT;
```

Notes:
- **RLS:** `disciple_creed_progress` has RLS enabled (`034:791`). RLS is
  row-level; new columns need no new policy. Confirm the existing
  INSERT/UPDATE policy is `WITH CHECK (account_id = auth.uid())`-style and not
  column-restricted (it isn't today).
- **`157_unified_user_stats`** keeps using `array_length(dcp.cards_mastered,1)` —
  untouched, correct as long as the mirror holds.
- **Re-run safety:** the `WHERE decks_progress = '{}'` guard makes the backfill a
  no-op on re-run. Take a snapshot anyway per house rule.

### Later (NOT Phase B) — migration `231+`, Hub cutover

1. Repoint `157_unified_user_stats` (and the two direct `.select('cards_mastered')`
   reads) at `decks_progress` totals:
   `SELECT COALESCE(SUM(jsonb_array_length(v)), 0) FROM jsonb_each(decks_progress)`.
2. Ship one release with both in place.
3. Drop `cards_mastered`; stop mirroring it in `creedSync.ts`.

---

## 2. `creed-cards/lib/progress.ts` — localStorage re-key

### 2.1 New keys

```ts
export const STORAGE_KEYS = {
  // ...existing...
  LEARNED: "creedcards_learned",              // KEPT — mirrors Deck 1 for one release
  LEARNED_V2: "creedcards_learned_v2",        // NEW — Record<deckId, number[]>
  LAST_STUDIED: "creedcards_last_studied",    // KEPT — mirrors Deck 1
  LAST_STUDIED_V2: "creedcards_last_studied_v2", // NEW — Record<deckId, number>
  FOCUS_DECK: "creedcards_focus_deck",        // NEW — "" | number  (mirrors focus_deck_id)
  DECKS_MIGRATION: "creedcards_decks_v2",     // NEW — one-time gate
  ID_MIGRATION: "creedcards_idmap_v2",        // existing
} as const;
```

### 2.2 One-time migration on read

`runDeckMigrationOnce()` runs **after** `runIdMigrationOnce()` (so the seed holds
new 1–50 ids), gated by `DECKS_MIGRATION`:

```
if DECKS_MIGRATION set -> return
runIdMigrationOnce()                      // ensure flat key is new-numbered first
if LEARNED_V2 absent:
    flat = parse(LEARNED) or []
    write LEARNED_V2 = { "1": dedupe(flat) }
if LAST_STUDIED_V2 absent and LAST_STUDIED present:
    write LAST_STUDIED_V2 = { "1": int(LAST_STUDIED) }
set DECKS_MIGRATION = "1"
```

All reads/writes stay wrapped in the existing `safeGet/safeSet` + `try/catch`
(SSR guard, private-mode, parse failure -> `{}` / `[]`).

### 2.3 API surface — deckId is an **optional last arg** (default `1`)

Minimal churn: every current call site (`toggleCardLearned(id)`,
`getLearnedCards()`, …) keeps compiling and behaving identically. Phase C threads
the real `deckId` through.

| Today | Phase B |
|---|---|
| `getLearnedCards(): number[]` | `getLearnedCards(deckId = 1): number[]` |
| `isCardLearned(cardId): boolean` | `isCardLearned(cardId, deckId = 1): boolean` |
| `toggleCardLearned(cardId): boolean` | `toggleCardLearned(cardId, deckId = 1): boolean` |
| `getLastStudiedCard(): number \| null` | `getLastStudiedCard(deckId = 1): number \| null` |
| `setLastStudiedCard(cardId)` | `setLastStudiedCard(cardId, deckId = 1)` |
| `undoLastToggle()` | unchanged signature; undo record gains `deckId` |
| `resetAllProgress()` | also clears `*_V2` + `FOCUS_DECK`; keeps clearing legacy keys |
| — | `getAllLearned(): Record<number, number[]>` (new) |
| — | `getTotalLearnedCount(): number` (new — sum of all decks) |
| — | `resetDeckProgress(deckId)` (new) |
| — | `getFocusDeck(): number \| null` / `setFocusDeck(deckId \| null)` (new; localStorage only in B) |

### 2.4 Internals

- `readV2(): Record<number, number[]>` / `writeV2(map)` — central accessors.
- `toggleCardLearned` writes `LEARNED_V2[deckId]`, and **if `deckId === 1`** also
  rewrites the flat `LEARNED` key (rollback + un-migrated `creedSync` safety).
  Drop the mirror when §1's "Later" step lands.
- `undoLastToggle` reads `deckId` from `LAST_UNDO` (default `1` for old records).
- Supabase push: `progress.ts::syncToSupabase()` is the **legacy** path
  (`onConflict:'disciple_id'`). Do **not** extend it. Real push is `creedSync.ts`
  (§3). Decide its fate in Open Questions.

---

## 3. `daily-dna/lib/creedSync.ts` — Supabase push

```
learnedV2 = parse(creedcards_learned_v2) or { "1": parse(creedcards_learned) or [] }
decksProgress = learnedV2                       // { "1": [...], "2": [...] }
cardsMastered = learnedV2["1"] ?? []            // mirror for Hub

upsert disciple_creed_progress (onConflict: 'account_id'):
  account_id, decks_progress: decksProgress,
  cards_mastered: cardsMastered,                // keep until Hub cutover
  total_study_sessions, last_studied_at, updated_at,
  ...(focusDeck != null && { focus_deck_id: focusDeck }),
  ...(quizResults non-empty && { quiz_results: quizResults })
```

- `signature` (dedupe key) gains `JSON.stringify(decksProgress)` and `focusDeck`.
- `QUIZ_DECK_IDS` / `QUIZ_LEVELS` unchanged — quiz is Phase E.
- Still push-only, still fire-and-forget.
- Submodule pointer bump in `daily-dna` + `ark-identity` as usual; `dna-hub` gets
  only the migration.

---

## 4. Rollout order

1. dna-hub: add & run migration `230` (additive; safe with old app still live).
2. creed-cards: `progress.ts` re-key (§2) — commit, push, bump submodules.
3. daily-dna: `creedSync.ts` (§3) — same commit or the next.
4. Bake one release. Verify Hub counts unchanged (mirror working).
5. **Later / Phase-B-tail:** migration `231` Hub cutover, then drop
   `cards_mastered` + the localStorage flat-key mirror.

## 5. Test checklist

- Existing user, flat `creedcards_learned` present → first load seeds
  `_v2 = {"1":[...]}`, count identical on `/` and `/progress`.
- `toggleCardLearned(id)` (no deckId) → updates `_v2["1"]` **and** flat key;
  `syncCreedProgress` writes `decks_progress` + mirrored `cards_mastered`.
- `toggleCardLearned(id, 2)` → `_v2["2"]` only, flat key untouched, Hub count
  (Deck 1) unchanged.
- SSR / private mode / corrupt JSON → no throw, treated as empty.
- Re-open after migration flag set → no re-seed.
- `resetAllProgress()` clears v2 + legacy + focus.
- Migration `230` re-run → no-op.
- Hub: group drawer, disciple detail, admin + network disciple lists, unified
  stats view — all still show the same mastery number.

## 6. Open questions for Travis

1. **Legacy `progress.ts::syncToSupabase()`** (`onConflict:'disciple_id'`) — is
   there still a standalone (non-embedded) creed-cards deployment that relies on
   it? If not, **delete it** in Phase B. If yes, it needs fixing to `account_id`
   + `decks_progress` and a real `disciple_id`/`account_id` reconciliation.
2. **`focus_deck_id`** — land the column in migration `230` now (cheap, unused
   until Phase C), or hold it for Phase C? Plan assumes **now**.
3. **`last_studied` per-deck** — re-key it too (plan assumes yes,
   `creedcards_last_studied_v2`), or leave "Continue where you left off" flat
   until Phase C wires deck routes?
4. **Ship B alone or fold into C?** Handoff notes B usually ships with C so the
   dashboard isn't half-migrated. B-alone is safe here (defaults keep the UI
   identical) but it's a judgment call.
5. **Hub cutover timing** — is one release of `cards_mastered` mirroring enough
   before the `231` drop, or hold longer?

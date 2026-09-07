# Creed Cards — Phase D Plan (cross-surface)

**Status:** DRAFT for scope decisions · **Written:** 2026-09-06 · **After:** Phases A–C shipped

Phase D makes the Hub/app surfaces that reference a creed card carry a **deck**,
and kills the hand-maintained title lists that drift. `DECK-STRATEGY.md` Part 1.3.

---

## What's on the ground

### 1. Live Service `creed_card` block
- Config type `CreedCardBlockConfig = { card_id: number }`
  (`daily-dna/lib/conductorTypes.ts:107`).
- `blockTypeConfig.ts` — `defaultConfig: { card_id: 1 }`; summary `Card #{card_id}`.
- `BlockConfigModal.tsx` `CreedCardForm` — `<select>` over a **hardcoded**
  `CREED_CARD_TITLES` map (its own copy, 3rd drift source).
- Render: `CreedCardBlock.tsx` + `DisplayCreedCard.tsx` both
  `<iframe src={/creed-cards.html?card=${config.card_id}} />`.
- **`public/creed-cards.html`** (daily-dna) is a 145 KB self-contained static file
  from **March 2026** — a legacy implementation that predates this Next submodule,
  Essentials-only, its own inline `?card=` handling, pre-renumber card text. The
  native deck-aware app is **not** in this path.

### 2. Creed push
- Table `church_creed_pushes (card_id INT CHECK 1..50, church_id, pushed_by,
  pushed_at, expires_at)` — migration `096`. Auto-expires 24 h; old rows = history.
- RPC `get_active_creed_push(p_church_id)` → `(card_id, pushed_at, expires_at)`.
- API `POST /api/admin/creed-push { churchId, cardId }` — validates `1..50`.
- Hub UI `CreedCardPushTab.tsx` — `<select>` grouped by category from
  `@/lib/creedCardsList` (`CREED_CARDS`).
- App: `creedPushData.ts` (`ActiveCreedPush`, RPC call) → `CreedPushBanner.tsx`
  → `getCreedCardTitle(push.card_id)`; "View" → `router.push('/creed-cards?card='
  + card_id)` — **the native route ignores `?card`** (regressed further in Phase C;
  it's the shelf now).

### 3. Drift-prone title lists (3 copies of the same data)
| File | Shape | Consumers |
|---|---|---|
| `dna-hub/src/lib/creedCardsList.ts` | `CREED_CARDS: {id,title,category}[]` (+`getCreedCard`,`CREED_CATEGORIES`) | `CreedCardPushTab` |
| `daily-dna/lib/creedCardTitles.ts` | `Record<number,string>` + `getCreedCardTitle(id)` | `CreedCardBlock`, `DisplayCreedCard`, `CreedPushBanner` |
| `BlockConfigModal.tsx` `CREED_CARD_TITLES` | inline `Record<number,string>` | that form only |

### 4. Renumber staleness (from `229`)
`229` remapped `disciple_creed_progress.cards_mastered` + on-device progress. It
did **not** touch:
- saved `service_blocks` rows with a `creed_card` config → any saved before
  2026-09-06 now points at a different card.
- `church_creed_pushes` rows → self-heal in 24 h, ignore.

---

## Proposed slices

### D1 — data model + generated index (no visible change)

**creed-cards:**
- `scripts/gen-card-index.mjs` → writes `card-index.json` (committed, not just
  `dist/`) — `[{ deckId, deckSlug, id, title, category, categorySlug }]` across
  **all** decks. Wire as `prebuild` + a `npm run gen:index`.
- Export a tiny helper `lib/cardIndex.ts` re-exporting the JSON typed.

**dna-hub:**
- Migration `231_creed_push_deck.sql`:
  - `ALTER TABLE church_creed_pushes ADD COLUMN deck_id SMALLINT NOT NULL DEFAULT 1;`
  - keep `card_id` check (every deck is ≤ 50) — or relax to `card_id >= 1`.
  - `CREATE OR REPLACE FUNCTION get_active_creed_push` → add `deck_id` to the
    RETURNS TABLE and SELECT. Re-`GRANT EXECUTE ... TO anon, authenticated`
    (dropped on replace).
  - *(This is the number the Phase B plan reserved for the Hub-reads cutover —
    that cutover is now separate/later; take the next free number, likely `231`.)*
- `creed-push/route.ts` — accept optional `deckId` (default 1), insert, return.
- `src/lib/creedCardsList.ts` — regenerate from `card-index.json` (via a
  submodule path or a copy step); becomes deck-aware
  (`getCreedCard(deckId, cardId)`, `CREED_DECKS`).

**daily-dna:**
- `lib/creedCardTitles.ts` — regenerate from the index; `getCreedCardTitle(deckId,
  cardId)` (keep a 1-arg overload defaulting deck 1 for a release).
- `lib/conductorTypes.ts` — `CreedCardBlockConfig` gains `deck_id?: number`.
- `lib/creedPushData.ts` — `ActiveCreedPush` gains `deck_id`.
- Renderers read `config.deck_id ?? 1` / `push.deck_id ?? 1` — **iframe URL
  unchanged for now** (see Decision 1).

### D2 — Hub deck pickers (visible, additive)
- `CreedCardPushTab.tsx` — deck `<select>` (live decks only) before the card
  select; POST `deckId`; show deck on active/history rows.
- `BlockConfigModal.tsx` `CreedCardForm` — deck `<select>`; drop the inline
  `CREED_CARD_TITLES`, use the index.
- `blockTypeConfig.ts` — `defaultConfig: { deck_id: 1, card_id: 1 }`; summary
  `{DeckShort} #{card_id}`.
- `CreedPushBanner.tsx` `handleView` → `/creed-cards/deck/{slug}/study?start=
  {card_id}&mode=sequential` (fixes the ignored-`?card` bug regardless).

### D3 — stale saved-block sweep (optional — see Decision 3)
- One-shot migration remapping `service_blocks` `creed_card` configs' `card_id`
  through the `229` old→new map, setting `deck_id = 1`.

---

## Decisions needed

1. **Live Service iframe target.** The block iframes the frozen legacy
   `creed-cards.html`, which can't render Foundations/Fulfilled.
   - **(a) Minimal (recommended):** plumb `deck_id` through config/table/API/types
     defaulting to 1, but leave the iframe on `creed-cards.html?card=N`. `deck_id`
     is stored, inert until a 2nd deck goes live *and* the iframe is modernized.
   - (b) **Modernize now:** point the block iframe at the native app
     (`/creed-cards/deck/[slug]/study?start=N&mode=sequential`, or a new minimal
     single-card route). Bigger; changes what churches see mid-service; needs a
     display-friendly single-card view.
2. **Card index generation.** Build `card-index.json` in creed-cards as the single
   source (new build step, ~30 lines) vs. just hand-rewrite the two lists
   deck-aware now and keep the manual-sync note.
3. **Stale saved-block sweep (D3).** Are there saved Live Service `service_blocks`
   with `creed_card` configs from before 2026-09-06 that matter? If unknown/rare,
   skip — churches re-pick the card and it's fine. If we want correctness, it's a
   ~15-line one-shot migration.
4. **`getCreedCardTitle` signature churn.** Add `deckId` as the first arg (touch
   3 call sites) or keep 1-arg + a new `getCreedCardTitleForDeck`? Recommend first
   arg with a default.

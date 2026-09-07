# Creed Cards — Multi-Deck + Dashboard Handoff

**Written:** 2026-09-07 · for a fresh session. Read `DECK-STRATEGY.md` and
`project_creed_cards_quiz.md` (memory) for the long history. This doc is the
current state.

---

## Where everything is (all pushed to `origin/main`)

| Repo | HEAD | Notes |
|---|---|---|
| `arkidentity/creed-cards` | `141fb09` | the deck app (this repo) |
| `arkidentity/daily-dna` | `ae80f2b` | submodule `shared/creed-cards` → `141fb09` |
| `arkidentity/arkidentity` | `51a240c` | submodule `shared/creed-cards` → `141fb09` |
| `arkidentity/dna-hub` | `442b424` | no submodule; has copies (see Gotchas) |

**Supabase migrations run:** `229` (Deck 1 renumber), `230` (`decks_progress`
jsonb + `focus_deck_id`), `231` (`church_creed_pushes.deck_id` + RPC).

---

## What shipped this arc

- **Phase B** — per-deck storage. `lib/progress.ts`: `creedcards_learned` (flat
  `number[]`) → `creedcards_learned_v2` (`Record<deckId, number[]>`) via
  `runDeckMigrationOnce()`. `deckId` is an optional LAST arg (default 1) on every
  mastery fn. `creedcards_last_studied_v2`, `creedcards_focus_deck`. Migration
  `230` on `disciple_creed_progress`. `daily-dna/lib/creedSync.ts` writes
  `decks_progress` + mirrors `cards_mastered` for the Hub's COUNT reads.
- **Phase C** — dashboard. Global shelf at `/`, `/deck/[slug]` scoped home,
  `/deck/[slug]/study` + `/deck/[slug]/quiz[/level]` (old `/study`,
  `/quiz/[deckId]` are client redirects). `ActiveDeckContext` from
  `app/deck/[slug]/layout.tsx`. Screens moved to `components/study/StudyScreen.tsx`
  and `components/quiz/QuizSession.tsx`.
- **Phase D** — cross-surface. Generated **`card-index.json`** (`npm run gen:index`,
  also `prebuild`) — the single source for reference data, consumed by the Hub
  (`creedCardsList.ts`) and Daily DNA (`creedCardTitles.ts`). `deck_id` plumbed
  through the Live Service `creed_card` block + `church_creed_pushes` + the push
  banner (whose "View" now deep-links correctly). The Live Service **iframe still
  targets legacy `public/creed-cards.html`** (Essentials-only) by decision —
  `dna-hub` `CREED_DECKS` is deliberately gated to `id===1` so the picker doesn't
  expose decks that iframe can't render.
- **Foundations + Fulfilled made live** — `status: "live"` in `lib/decks.ts`.
  New **fulfillment card renderer** (`components/cards/FulfillmentCard{Front,Back}.tsx`);
  `CreedCard.tsx` branches on `deck.schema`; `CardDeck.tsx` takes a `schema` prop.
  Quiz is gated to Essentials (`deckHasQuiz(deckId)` = `id===1`); other decks hide
  the Quiz tile / show a "not ready" panel / 404 the level route.
- **Dashboard redesign** (user-driven, several passes):
  - **Shelf** (`app/page.tsx`): "CARD OF THE DAY" label above a tall card-coloured
    box (card's own `colors`, +shortDesc line, "Study now" pill). Deck tiles are a
    2-up **portrait** grid — full cover gradient, accent border, inset hairline,
    the deck's `CategoryIcon` mark. `Deck` gained **`icon`** (categoryIcons slug:
    essentials=trinity, foundations=creeds, promises=covenant, fulfilled=prophecy)
    and retuned `cover` colours. Optional **Focus deck**: `getFocusDeck()` set →
    that deck renders as a wide featured card, rest as "Other decks".
  - **Per-deck home** (`app/deck/[slug]/page.tsx`): a deck-coloured **hero** box
    (same treatment as the shelf featured card) with icon/name/kind/ring/orientation
    + the white **Continue / Start** button inside it; **Study** and **Test**
    sections with elevated bordered rows (icon in a tinted chip); focus toggle is
    a bordered pill. Progress bar card, per-deck card-of-the-day, and the
    browse-by-category list were removed.
  - **Study screen**: the centre header label is a **topic picker** — tap → menu
    of the deck's categories (+ per-cat learned counts) + "All topics". `category`
    is state; `rebuild(filter, category)` is the shared path; still honours
    `?category=`.
  - **Fulfilled card face**: the empty term slot is a **two-witnesses panel** —
    `otRef ──→ ntRef` + a caption (`kind · basis · dating`), dimmed for
    `basis: "traditional"`.

---

## Known rough edges (small)

- `app/deck/[slug]/page.tsx` header ring text is `%` inside a 46px ring — fine but
  tight for "100%".
- Shelf portrait tiles have an intentional gap between the kind line and the
  bottom stat cluster (`marginTop: auto`) — reads as spacious; revisit if it
  bugs someone.
- Fulfilled card front still sits slightly low vertically (portrait card, modest
  content); icon is 118px.
- `components/ui/BottomNav.tsx` is dead code (never mounted) with a stale
  `/study` guard.
- `lib/quizData.ts` `getDeckMeta` / `DECK_META` unused since the quiz-selector
  rewrite.

---

## Roadmap left

- **E — quiz redesign** (`QUIZ-REDESIGN.md`): 4 levels, ~120 authored questions
  for Deck 1; `lib/quizEngine.ts` currently ignores `deckId` and always pulls
  `CARD_DATA` (Essentials). Two pre-freeze L3 questions (`l3-x-06`, `l3-x-12`)
  are about Foundations topics — fix here. Also sweep the dead `BottomNav` /
  `getDeckMeta`.
- **F — Promises deck**: design the `promise` schema (`DECK-LINEUP.md`), write
  ~50 cards + a promise card renderer + category icons; flip `status: "live"`.
- **Migration `232+` — Hub `cards_mastered` cutover**: repoint
  `dna-hub/database/157_unified_user_stats.sql` + the direct `.select('cards_mastered')`
  reads at `decks_progress` totals, then drop the column and the localStorage
  flat-key mirror in `progress.ts` / `creedSync.ts`.
- **Live Service iframe**: modernise off `creed-cards.html` so non-Essentials
  decks can be pushed / shown; then widen `dna-hub` `CREED_DECKS`.
- **Deck colour tuning**: Foundations gold was brightened to `#f5c56a`; the
  others (`#5b9bff`, `#a5b4fc`, `#5eead4`) are fine. Deck `icon`s are provisional
  categoryIcons slugs — bespoke deck glyphs would be more premium.

---

## Gotchas

- **Embedder re-export debt.** BOTH `daily-dna` AND `ark-identity` mount the
  creed-cards routes natively via hand-written re-export files under
  `app/creed-cards/*` (daily-dna: webpack alias in `next.config.ts`; ark-identity:
  tsconfig path `@creed-cards/*`). **Every new/moved/renamed route needs a
  matching re-export in BOTH**, and moving a shared component breaks any host
  re-export that imported the old path. This broke the ark-identity Vercel build
  once. `spark` embeds via iframe only.
- **`card-index.json` sync.** When card copy or the deck list changes:
  `npm run gen:index` in creed-cards, then
  `cp card-index.json ../dna-hub/src/lib/creed-card-index.json`, and bump the
  daily-dna submodule. The file has no timestamp so it's byte-stable — a dirty
  `card-index.json` after a build means "commit the regen". Worth a CI check.
- **`dna-hub` package.json.** It has its own `report` / `dossier` scripts. Do NOT
  add creed-cards' `gen:index` / `prebuild` there (happened once by running an
  edit in the wrong cwd; `prebuild` would break the Hub build).
- **Shell cwd escaping.** Long `Bash` sessions here have repeatedly lost the
  working dir mid-task — always `cd /Users/docgrfx/Documents/GitHub/creed-cards`
  (or the target repo) at the start of each command.
- **Ship dance.** creed-cards commit → push → `git -C shared/creed-cards fetch &&
  checkout <sha>` + commit the pointer in daily-dna AND ark-identity → push each.
  dna-hub only when its own files changed. Run `next build` in daily-dna +
  ark-identity for any structural (route/import) change; cosmetic-only changes
  can rely on creed-cards `tsc` + `next build`.

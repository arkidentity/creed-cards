# Creed Cards — Phase A Handoff

**Written:** 2026-09-06 · **For:** a fresh session picking up the multi-deck build.

Read this, then `DECK-STRATEGY.md` (Part 1 especially). Everything else below is
the short version.

---

## Where things stand (all committed + pushed to `origin/main`)

| Repo | HEAD | State |
|---|---|---|
| `arkidentity/creed-cards` | `1021a05` | Deck 1 frozen at 50 + renumbered 1–50; per-category icons; all planning docs. |
| `arkidentity/daily-dna` | `b54d6bd` | submodule → `1021a05`; `lib/creedCardTitles.ts` synced. |
| `arkidentity/arkidentity` | `c619882` | submodule → `1021a05`. |
| `arkidentity/dna-hub` | `45961a8` | `src/lib/creedCardsList.ts` synced; migration `229_creed_deck1_id_remap.sql` **RUN in Supabase**. |

**All 4 deck rosters are approved.** Full card copy exists and has been
reviewed/fixed for two of them:

- **Deck 1 Essentials** — 50 cards, live in `lib/cardData.ts` (`CARD_DATA`, ids 1–50).
- **Deck 2 Foundations** — 50 cards written in `DECK2-FOUNDATIONS-CARDS.md`
  (`FOUNDATIONS_CARDS` array, `doctrine` schema). Not in code.
- **Deck 4 Fulfilled** — 50 cards written in `DECK4-FULFILLED-CARDS.md`
  (`FULFILLED_CARDS` array, `fulfillment` schema). Not in code.
- **Deck 3 Promises** — roster sketch only (`DECK-LINEUP.md`); no cards, no schema.

Category icons: `lib/categoryIcons.tsx` (`CategoryIcon({ slug, accentColor, stroke })`),
15 marks. `lib/cardIcons.tsx` is a shim. Spec + colours in `CATEGORY-ICONS.md`.
Travis still owes feedback on 3 marks (church / persons / events).

---

## THE TASK: Phase A — `lib/decks.ts` registry

**Goal:** one place that knows all four decks. **Internal only — no visible change,
no route changes, no storage changes.** (Storage re-key is Phase B; dashboard is
Phase C.)

### 1. Types

```ts
// lib/decks.ts (or split: lib/decks/index.ts + one file per deck's cards)

export interface DeckCategory {
  slug: string;      // e.g. "trinity", "creeds", "prophecy"
  name: string;      // display, e.g. "Trinity & Nature of God"
  dark: string;      // hex
  accent: string;    // hex
}

export interface Deck {
  id: number;                 // 1 essentials, 2 foundations, 3 promises, 4 fulfilled
  slug: string;               // "essentials" | "foundations" | "promises" | "fulfilled"
  name: string;               // "Creed Cards (Essentials)"
  shortName: string;          // "Essentials"
  tagline: string;
  schema: "doctrine" | "promise" | "fulfillment";
  status: "live" | "coming-soon";
  cover: { dark: string; accent: string };
  categories: DeckCategory[];
  cards: CreedCard[] | FulfillmentCard[] | PromiseCard[];
}

export const DECKS: Deck[];
export function getDeck(idOrSlug: number | string): Deck | undefined;
export function getCard(deckId: number, cardId: number): unknown | undefined;
export function cardKey(deckId: number, cardId: number): string; // `${deckId}:${cardId}`
```

- `CreedCard` already lives in `lib/cardData.ts` — reuse it for `doctrine`.
- **`FulfillmentCard`** — new interface. Fields (from `DECK4-FULFILLED-CARDS.md`):
  `id, deckId, category, categorySlug, kind: "prophecy"|"type", basis: "stated"|"traditional",
  title, shortDesc, otText, otRef, centuriesBefore, ntText, ntRef, significance, reflection,
  colors: {dark, accent}`.
- **`PromiseCard`** — stub it now (schema not designed): fields sketched in
  `DECK-LINEUP.md` (promise, verse, reference, context, condition?, speaksTo, reflection).

### 2. The four deck entries

**essentials** — `status: "live"`, `schema: "doctrine"`, `cards: CARD_DATA`.
8 categories (colours are the current `CATEGORY_INFO` in `cardData.ts`):

| slug | name | dark | accent |
|---|---|---|---|
| trinity | Trinity & Nature of God | `#0f172a` | `#3b82f6` |
| christ | Jesus Christ | `#7f1d1d` | `#fca5a5` |
| spirit | Holy Spirit | `#713f12` | `#fbbf24` |
| salvation | Salvation & Gospel | `#14532d` | `#86efac` |
| scripture | Holy Scripture | `#4c1d95` | `#c084fc` |
| church | Church & Sacraments | `#7c2d12` | `#fdba74` |
| life | Christian Life | `#134e4a` | `#5eead4` |
| eschatology | Last Things | `#1e293b` | `#94a3b8` |

**foundations** — `status: "coming-soon"`, `schema: "doctrine"`,
`cards: FOUNDATIONS_CARDS` (move the array out of `DECK2-FOUNDATIONS-CARDS.md`
into a `.ts` file). 9 categories — 7 reuse Essentials' slugs/colours + 2 new:

| slug | name | dark | accent |
|---|---|---|---|
| creeds | The Creeds & Councils | `#44403c` | `#e8b562` |
| scripture | Holy Scripture, Deeper | `#4c1d95` | `#c084fc` *(reuses Essentials — settled)* |
| christ | Deeper Christology | `#7f1d1d` | `#fca5a5` |
| covenant | Covenant & Redemptive History | `#3f2d1a` | `#d8b48a` |
| salvation | Deeper Soteriology | `#14532d` | `#86efac` |
| spirit | Deeper Pneumatology | `#713f12` | `#fbbf24` |
| church | Deeper Ecclesiology | `#7c2d12` | `#fdba74` |
| eschatology | Deeper Last Things | `#1e293b` | `#94a3b8` |
| life | The Christian Life, Deeper | `#134e4a` | `#5eead4` |

**fulfilled** — `status: "coming-soon"`, `schema: "fulfillment"`,
`cards: FULFILLED_CARDS` (move out of `DECK4-FULFILLED-CARDS.md`). 5 categories:

| slug | name | dark | accent |
|---|---|---|---|
| prophecy | Messianic Prophecies | `#1e1b4b` | `#a5b4fc` |
| feasts | The Feasts & Sacred Calendar | `#713f12` | `#fbbf24` |
| persons | Persons as Types | `#7c2d12` | `#fdba74` |
| objects | Objects & Institutions | `#292524` | `#d6d3d1` |
| events | Shadow Events | `#134e4a` | `#5eead4` |

**promises** — `status: "coming-soon"`, `schema: "promise"`, `cards: []`,
`categories: []`. Placeholder only.

### 3. Don't break the current app

- Keep `export const CARD_DATA` in `lib/cardData.ts` working — the home page,
  study screen, quiz, `getCardOfTheDay`, `getCardsByCategory` all import it.
  Simplest: `lib/decks.ts` imports `CARD_DATA` from `cardData.ts` for the
  essentials deck. Do **not** move `CARD_DATA` yet.
- `CATEGORY_INFO` in `cardData.ts` stays as-is (Essentials' 8). Optionally have
  `lib/decks.ts` re-derive it from `getDeck(1).categories` later; not required now.
- `lib/categoryIcons.tsx` already switches on raw slug — all 15 slugs above are
  covered. No icon work needed for Phase A.

### 4. Verify

- `npx tsc --noEmit -p .` clean.
- Parse-check the two moved card arrays: 50 each, ids 1–50, all fields present.
- App still builds and the existing `/`, `/study`, `/quiz`, `/progress` routes
  behave identically (they only see the essentials deck).

### 5. Commit

Single commit to `creed-cards` `main`, push, then bump the submodule pointer in
`daily-dna` + `ark-identity` (same dance as `1021a05` — see
`DECK1-FINALIZE.md` "What shipped" for the pattern). `dna-hub` is unaffected by
Phase A.

---

## After Phase A (do NOT start without Travis aligning on scope)

- **B — storage re-key.** `decks_progress jsonb` on `disciple_creed_progress`;
  per-deck localStorage in `lib/progress.ts`; migration. `DECK-STRATEGY.md` Part 1.2.
- **C — dashboard relook.** Global home / deck shelf → `/deck/[slug]` deck home →
  Study vs Test split; Progress page consolidation + deck switcher; Focus-deck
  setting. `DECK-STRATEGY.md` Part 2. **This is the original ask.** B usually
  ships with C.
- **D — cross-surface.** Live Service `creed_card` block gets `deckId`; Hub creed
  push `deck_id`; one generated card index (also sweeps stale stored card numbers
  from the Deck 1 renumber). `DECK-STRATEGY.md` Part 1.3.
- **E — quiz redesign.** `QUIZ-REDESIGN.md`. 4 levels, ~120 authored questions
  for Deck 1. Independent of B/C/D. Also: `lib/quizData.ts` `DECK1_L3_QUESTIONS`
  still uses pre-freeze `cardId`s and has 2 questions (`l3-x-06`, `l3-x-12`) about
  Foundations topics — fix here.
- **F — Promises deck.** Design the `promise` schema, write ~50 cards, its
  category icons, wire the pathway (`promises-deck` slug already in
  `dna-app/daily-dna/lib/pathwayData.ts`).

### Loose ends
- Reconcile `DECK_META.deckName` in `lib/quizData.ts` ("Core Christian Doctrines")
  → "Creed Cards (Essentials)".
- Travis owes icon feedback (church / persons / events in `CATEGORY-ICONS.md`).
- Route shape decided: `/deck/[slug]` (global home stays `/`).
- Card of the Day decided: global rotation across owned decks + optional per-user
  Focus deck (`focus_deck_id` on `disciple_creed_progress`).

---

## Key files

| File | What |
|---|---|
| `DECK-STRATEGY.md` | The whole multi-deck architecture, Phases A–I. Read first. |
| `DECK-LINEUP.md` | All 4 decks: identity, schemas, 50-card rule, Promises/Fulfilled roster. |
| `DECK1-FINALIZE.md` | What Deck 1's freeze/renumber actually did + the old→new id map + submodule-bump pattern. |
| `DECK2-FOUNDATIONS-CARDS.md` | `FOUNDATIONS_CARDS` — 50 written cards (reviewed). |
| `DECK4-FULFILLED-CARDS.md` | `FULFILLED_CARDS` — 50 written cards (reviewed). |
| `QUIZ-REDESIGN.md` | 4-level authored quiz plan. |
| `CATEGORY-ICONS.md` | 15 icons, slugs, colours, how to add a deck's categories. |
| `lib/cardData.ts` | Essentials cards (ids 1–50) + `CreedCard` type + `CATEGORY_INFO`. |
| `lib/progress.ts` | localStorage + Supabase push; has the Deck 1 id-remap (`runIdMigrationOnce`). |
| `lib/categoryIcons.tsx` | `CategoryIcon` — the 15 marks. |

# Creed Cards — Multi-Deck Strategy & Dashboard Relook

**Status:** Planning · **Created:** 2026-09-05
**Companion doc:** `QUIZ-REDESIGN.md`

This doc covers three things that have to move together:

1. Turning Creed Cards from a single hardcoded deck into a **deck library**.
2. **Redesigning the dashboard** around that library.
3. The **deck roadmap** — what ships next (a second doctrinal deck), then Promises.

---

## Part 0 — Where things actually stand

### The app is single-deck at every layer

| Layer | Current reality | Blocks a 2nd deck? |
|---|---|---|
| `lib/cardData.ts` | One flat `CARD_DATA: CreedCard[]` (IDs 1–55, 51 live). One `CATEGORY_INFO` taxonomy. | Yes |
| Home (`app/page.tsx`) | No deck concept. Quiz tile hardcodes `/quiz/1`. "Card 1 to 51" is a literal string. | Yes |
| Progress (`app/progress/page.tsx`) | `getQuizResult(1, …)` hardcoded. | Yes |
| Card mastery (`lib/progress.ts`) | `creedcards_learned` = one `int[]` in localStorage. Supabase `disciple_creed_progress.cards_mastered` = one `int[]`. | **Yes — needs migration** |
| Quiz progress (`lib/quizProgress.ts`) | Key is `creedcards_quiz_deck_{deckId}_lvl_{level}` — already deck-scoped. | No |
| `lib/quizData.ts` | `DECK_META` array exists (only Deck 1). `DECK1_L3_QUESTIONS` hardcoded. | Partly |
| Live Service `creed_card` block | Stores a raw card number (1–50). Config UI is a flat number picker. | Yes, if Deck 2 reuses low IDs |
| Hub creed push (`creed_push_notifications`, `CreedPushBanner`) | Raw card number. | Same |
| `daily-dna/lib/creedCardTitles.ts`, `dna-hub/src/lib/creedCardsList.ts` | Flat id→title maps, must be kept in sync by hand. | Same |

### There are three copies of this repo

`/creed-cards` (source, remote `arkidentity/creed-cards`) · `dna-app/daily-dna/shared/creed-cards` · `ark-identity/shared/creed-cards`. All identical today. Edits happen in the source repo; each host commits its submodule pointer.

### A "Promises" deck is already half-wired

- `dna-app/daily-dna/lib/pathwayData.ts:517` — `LEADER_GUIDE_MAP` entry, slug `promises-deck`, keywords `creed cards (promises)` / `promises deck`.
- `dna-hub/docs/leader-guide-coverage.md` — lists `promises-deck` as a mapped slug with **no PDF and no content**.

So "Creed Cards (Promises)" is a named, expected future — just empty. See Part 3 for why it should still ship *after* a second doctrinal deck.

### Naming is inconsistent across surfaces

| Surface | Calls Deck 1… |
|---|---|
| App `DECK_META.deckName` | "Core Christian Doctrines" |
| Pathway (`pathwayData.ts:33`) | "Creed Cards (Essentials)" |
| Home header | "CREED CARDS / Theological Foundations" |

**Decision needed (see Part 4):** pick one convention — recommended is themed parenthetical names (`Creed Cards (Essentials)`, `Creed Cards (Promises)`, …), not "Vol. 1 / Vol. 2".

---

## Part 1 — Target data model

### 1.1 Deck registry

Replace the bare `CARD_DATA` export with a deck registry. Keep card `id` local to its deck (1..N); identify a card globally by `(deckId, id)`.

```ts
// lib/decks.ts
export interface DeckCategory {
  slug: string;
  name: string;
  color: string;
  accent: string;
  icon: string;
}

export interface Deck {
  id: number;
  slug: string;                 // "essentials", "promises", ...
  name: string;                 // "Creed Cards (Essentials)"
  shortName: string;            // "Essentials"
  tagline: string;              // "Theological Foundations"
  schema: "doctrine" | "promise" | "fulfillment";  // card shape family — see Part 3
  status: "live" | "coming-soon";
  cover: { dark: string; accent: string };
  categories: DeckCategory[];
  cards: CreedCard[];
}

export const DECKS: Deck[] = [ESSENTIALS_DECK /*, DECK_2 … */];

export const getDeck = (idOrSlug: number | string) => /* … */;
export const getCard = (deckId: number, cardId: number) => /* … */;
export function cardKey(deckId: number, cardId: number) {
  return `${deckId}:${cardId}`;
}
```

`CreedCard` gains `deckId` (denormalized for convenience) and the category fields stay, but `categorySlug` now resolves against **that deck's** `categories`, not a global enum. Deck 1's eight categories move onto the Essentials deck unchanged.

### 1.2 Card-mastery storage — the migration

**localStorage:** `creedcards_learned` (`number[]`) → `creedcards_learned_v2` (`Record<deckId, number[]>`). One-time migrate on read: if `_v2` absent and `creedcards_learned` present, seed `{ "1": [...old] }`.

**Supabase (`disciple_creed_progress`):** DECIDED — a **JSONB column**, not a normalized `disciple_creed_deck_progress` table. It matches the existing `quiz_results` JSONB pattern on the same table and keeps the sync path a single upsert. Hub analytics read totals by summing array lengths per key.

- Add `decks_progress jsonb NOT NULL DEFAULT '{}'::jsonb` — shape `{ "1": [1,4,7], "2": [2,3] }`.
- Add `focus_deck_id smallint` (nullable) — the user's chosen Focus deck for Card-of-the-Day; `NULL` = global rotation.
- If Deck 1's roster is re-finalized first (Phase E), this migration also carries the old-global-ID → new-`(deckId, id)` remap for any card that changed decks.
- Migration wraps the existing array: `UPDATE disciple_creed_progress SET decks_progress = jsonb_build_object('1', to_jsonb(cards_mastered)) WHERE cards_mastered IS NOT NULL;`
- Keep `cards_mastered` populated for Deck 1 for one release so Hub reads (`creed cards mastered` stat on disciple lists, group drawer, profile) don't break; cut over Hub reads to `decks_progress` totals, then drop the column.
- **Grants:** new column is on an existing table (grandfathered), but the migration file must still re-`GRANT` if it does a DROP/recreate of any RPC that reads it. Add `GRANT` lines per the Oct 30 2026 rule if any new RPC is introduced.

New migration number: next free in `dna-hub/database/` (176 was the quiz one; check the current max).

### 1.3 Cross-surface card references

Anywhere a bare card number is stored or picked, it becomes `{ deckId, cardId }`:

- **Live Service `creed_card` block** — `blockTypeConfig.ts` / `BlockConfigModal.tsx`: add a deck dropdown before the card picker. Stored config gains `deckId` (default `1` for existing rows). `DisplayCreedCard.tsx` / `CreedCardBlock.tsx` pass `deckId` into the iframe URL.
- **Hub creed push** — `creed-push/route.ts`, `CreedCardPushTab.tsx`, `creed_push_notifications` table: add `deck_id smallint DEFAULT 1`. `CreedPushBanner.tsx` reads it.
- **`daily-dna/lib/creedCardTitles.ts` & `dna-hub/src/lib/creedCardsList.ts`** — regenerate as `{ deckId, id, title, category }[]`. Better: generate both from a single exported JSON in this repo (`dist/card-index.json`) at build time so they can't drift.

---

## Part 2 — Dashboard relook

### 2.1 Current screens

**Home (`app/page.tsx`)** — header · Card of the Day banner · Overall Progress bar · Continue where you left off · Study Modes 2×2 (Sequential / Random / Unlearned / Quiz) · Browse by Category (8 rows w/ progress rings).

**Progress (`app/progress/page.tsx`)** — 56px % number · progress bar · By Category · Test Your Knowledge (3 level rows) · Settings (flip sound, reset).

**Problems**

1. No way to represent more than one deck. Everything is Deck 1.
2. Progress lives in two places (home bar + progress page hero) that don't quite agree.
3. "Study Modes" lumps Quiz — a test — in with three study traversals.
4. Category browse assumes one taxonomy forever; a promise deck may group differently ("when afraid", "when weary") or be flat.
5. Card of the Day draws from one global pool with no deck attribution.

### 2.2 New information architecture

```
┌─ GLOBAL HOME ─────────────────────────────┐
│  CREED CARDS                               │
│  ┌─────────────────────────────────────┐  │
│  │ Card of the Day  ·  from Essentials │  │   one rotating card across owned decks
│  │ ATONEMENT — "At One with God"       │  │
│  └─────────────────────────────────────┘  │
│  Streak 4 · 37 cards mastered · 2 decks    │   cross-deck totals
│                                            │
│  YOUR DECKS                                │
│  ┌───────────┐ ┌───────────┐               │
│  │ Essentials│ │ (Deck 2)  │               │   deck tiles: cover color, ring,
│  │ ◐ 51 cards│ │ ◔ 40 cards│               │   "X / N learned", quiz-best chip
│  │ 63% · Q82%│ │ 12% · —   │               │
│  └───────────┘ └───────────┘               │
│  ┌───────────┐                             │
│  │ Promises  │  COMING SOON                │   greyed, no ring
│  └───────────┘                             │
└────────────────────────────────────────────┘
        │ tap a deck
        ▼
┌─ DECK HOME (scoped to one deck) ──────────┐
│  ← Essentials                              │
│  Card of the Day (this deck)              │
│  Overall Progress  37 / 51                │
│  Continue → JUSTIFICATION                 │
│                                           │
│  STUDY            TEST                    │   two peers, not one grid
│  → Sequential     Level 1 · Vocabulary    │
│  ⚡ Random         Level 2 · Scripture     │
│  ○ Unlearned      Level 3 · History       │
│                   Level 4 · Connections   │
│                                           │
│  BROWSE BY CATEGORY  (this deck's         │
│  taxonomy; a deck may omit this)          │
└────────────────────────────────────────────┘
```

- **Global home** = default route (`/`). Deck shelf + a thin cross-deck "today" strip. `coming-soon` decks render as flat greyed tiles.
- **Deck home** = `/deck/[slug]` — essentially today's home page, scoped. Card of the Day, progress, continue, study, test, categories all filter to the deck. Study/quiz nest under it: `/deck/[slug]/study`, `/deck/[slug]/quiz/[level]` (the current `/quiz/[deckId]/[level]` route moves here; keep a redirect for any saved Hub/Live Service deep links).
- **Study vs Test split** — "Study" holds the three traversals; "Test" links into the quiz level menu (see `QUIZ-REDESIGN.md`). They read as siblings.
- **Category browse is per-deck and optional** — driven by `deck.categories`. A deck with `categories: []` hides the section (Promises may do this, or use situational groupings).

### 2.3 Progress page

Collapse to **one** surface. From the global home, a single "Progress" screen with a deck switcher at the top:

- Cross-deck summary (total mastered, decks in progress, current streak).
- Per selected deck: the % hero, category bars, and the "Test Your Knowledge" rows (now 3–4 levels — see quiz doc).
- Settings (sound, reset) move to their own row / screen; "Reset" becomes per-deck **and** an "all decks" option.

Kill the duplicate progress bar on deck home, or keep it minimal (just the ring + "X / N"), with the full breakdown only on Progress.

### 2.4 Component-level changes

| File | Change |
|---|---|
| `app/page.tsx` | Becomes the **global home / deck shelf**. New `DeckTile` component. |
| `app/deck/[slug]/page.tsx` | **New** — the scoped deck home (most of today's `page.tsx` logic, parameterized by deck). |
| `app/deck/[slug]/study/…` | Move of `app/study/…`; reads `slug` from the route, traverses that deck's `cards`. |
| `app/deck/[slug]/quiz/[level]/…` | Move of `app/quiz/[deckId]/[level]/…`; keep a redirect from the old path for saved deep links. |
| `app/progress/page.tsx` | Add deck switcher; render cross-deck summary + per-deck detail. |
| `lib/progress.ts` | `getLearnedCards(deckId)`, `toggleCardLearned(deckId, cardId)`, migration shim, `decks_progress` sync. |
| `lib/cardData.ts` → `lib/decks.ts` | Registry (Part 1). Keep a `CARD_DATA` alias = `getDeck(1).cards` during transition. |
| `components/ui/BottomNav.tsx` | "Home" now = global home; consider a "Decks" vs "Progress" split. |
| `CreedCardsProvider.tsx` | Hold `activeDeckId` in context so study/card components don't each parse the route. |

### 2.5 Non-goals for v1

- No per-deck theming beyond a cover color + its own category palette.
- No deck store / purchase / unlock flow — `status: "coming-soon"` is a static flag.
- No reordering decks in the UI.

---

## Part 3 — Deck roadmap

**The lineup, card lists, and the Deck 1 re-finalization now live in `DECK-LINEUP.md`.** Summary for this doc:

### 3.1 Three card schemas

| Schema | Card shape | Decks |
|---|---|---|
| `doctrine` | term (Greek/Hebrew) · translation · englishMeaning · definition · scripture + reference · historicalContext · reflection | Essentials, Deck 2 |
| `promise` | promise (short form) · verse · reference · covenant context · condition (if any) · **speaksTo** (the situation) · reflection | Promises |
| `fulfillment` | kind (`prophecy`\|`type`) · basis (`stated`\|`traditional`) · otText · otRef · ~centuries before · ntText · ntRef · significance · reflection | Fulfilled |

`schema` on the `Deck` type becomes `"doctrine" | "promise" | "fulfillment"`. `promise` and `fulfillment` each need their own quiz question types — that's why they come after the second `doctrine` deck.

### 3.2 Order

1. **Deck 2** — second `doctrine` deck (theme name TBD). Reuses the whole schema + quiz pipeline; ~half its content already scoped. Proves the multi-deck architecture with zero schema risk.
2. **Deck 3 — Promises** — new `promise` schema + quiz types. Slug `promises` (note: pathway currently wires `promises-deck` — align on one). Update `LEADER_GUIDE_MAP` + drop the leader guide in both locations. **Confirm pathway placement with Travis before any checkpoint.**
3. **Deck 4 — Fulfilled** — new `fulfillment` schema. 50 OT prophecies Jesus fulfilled.

### 3.3 Pathway touch-ups (independent of new decks)

- `pathwayData.ts:39` — "browse 50 foundational truths" → the real number.
- Reconcile the app `DECK_META.deckName` ("Core Christian Doctrines") with the pathway's "Creed Cards (Essentials)".

---

## Part 4 — Build sequence

| Phase | Work | Ships |
|---|---|---|
| **A. Deck framework** | `lib/decks.ts` registry; wrap Deck 1 as `ESSENTIALS_DECK`; `CARD_DATA` alias; context `activeDeckId`. No visible change. | Internal |
| **B. Storage re-key** | localStorage `_v2` map + migration shim; Supabase `decks_progress` column + migration; keep `cards_mastered` mirrored. | Internal |
| **C. Dashboard** | Global home / deck shelf; `/deck/[slug]` deck home; Study/Test split; per-deck category browse; Progress page consolidation + deck switcher; Focus-deck setting. | User-visible |
| **D. Cross-surface** | Live Service block `deckId`; creed push `deck_id`; single generated card index for `creedCardTitles` / `creedCardsList`. | Hub + app |
| **E. Deck 1 re-finalize** | Sort to exactly 50 (`DECK-LINEUP.md`); freeze IDs; old-ID → `(deck,id)` map folded into the Phase B migration. | Content |
| **F. Quiz redesign** | Per `QUIZ-REDESIGN.md`. Can run parallel to C/D. | User-visible |
| **G. Deck 2 content** | 50 `doctrine` cards + its quiz bank. | New deck |
| **H. Promises** | `promise` schema, quiz types, 50 cards, pathway wiring. | New deck |
| **I. Fulfilled** | `fulfillment` schema, quiz types, 50 cards. | New deck |

Phases A–D are the "make it a library" work and should land as one release so the dashboard isn't half-migrated. E should settle before B's migration is written (or B ships with a follow-up remap). F can run in parallel. G depends on A–F. H and I are later.

---

## Decisions (2026-09-05)

- **Deck 2 name** — theme name in the `Creed Cards (____)` style; specific theme TBD with the card list. Rename Deck 1 → `Creed Cards (Essentials)`. Full lineup in `DECK-LINEUP.md`.
- **Supabase** — `decks_progress jsonb` column on `disciple_creed_progress`, not a normalized table. (Part 1.2)
- **Quiz** — 4 levels. (See `QUIZ-REDESIGN.md`.)
- **Route shape** — `/deck/[slug]` (see Part 2.2). Long-term namespace safety: no collision risk between a deck slug and a reserved route, and `/deck` can be its own index. Global home stays at `/`.
- **Card of the Day** — **global rotation by default across owned decks**, plus an optional per-user **Focus deck** setting. When a focus deck is set, Card of the Day is drawn from it and the global home leads with that deck; clearing returns to global rotation. The deck shelf always lets a user open any deck regardless of focus. Store focus in `creedcards_focus_deck` (localStorage) mirrored to `disciple_creed_progress` (`focus_deck_id smallint`).
- **Deck 1 is being re-finalized to exactly 50 cards** before the storage re-key — cards may move between Deck 1 and Deck 2. See `DECK-LINEUP.md`.

## Still open

1. **Does Deck 2 reclaim the 4 cards pulled from Deck 1** — tracked in `DECK-LINEUP.md` (Divine Dance is proposed *back into Deck 1*; High Priest → Deck 2; Triune God/Living Word TBD).
2. **Live Service / creed push** — do churches need to push from Deck 2 on day one, or is Deck 1-only acceptable for the first release of Phase D?

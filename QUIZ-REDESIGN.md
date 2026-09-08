# Creed Cards — Quiz Redesign

**Status:** Planning · **Created:** 2026-09-05 · **Revised:** 2026-09-07 (4 levels → 3)
**Companion doc:** `DECK-STRATEGY.md`

The current 3-level quiz tests whether you can *recognize a card object* — not
whether you understand the doctrine. This doc tears down what runs today and
specifies a replacement built around what each card actually teaches: the
biblical language, the Scripture, the history, and the councils and theologians
behind it.

---

## Part 1 — What runs today

### Levels 1 & 2 are 100% programmatic string-matching

Every question in `generateLevel1Questions` / `generateLevel2Questions`
(`lib/quizEngine.ts`) is built by string-slicing a card field and asking the user
to pick the matching **card title** from four options — three of which are random
sibling titles.

| Generator | Question it makes | What it tests |
|---|---|---|
| `genL1_ShortDescToTitle` | "Which card is described as '{shortDesc}'?" | Recognizing the short label |
| `genL1_TermToTitle` | "Which card uses the {lang} term '{translation}'?" | — |
| `genL1_EnglishMeaning` | "What does '{translation}' mean in English?" | Actually useful (word → meaning) |
| `genL1_CategorySort` | "Which category does '{title}' belong to?" | **Taxonomy filing — the "silly" one** |
| `genL2_ScriptureToTitle` | "Which card's key verse begins: '{first 14 words}'?" | Verse → card label |
| `genL2_ReferenceToTitle` | "{reference} is the key verse for which card?" | Reference → card label |
| `genL2_DefinitionToTitle` | "Which card's definition begins: '{first sentence}'?" | Matching prose to a title |
| `genL2_TermMeaning` | "'{translation}' means:" | Useful (word → meaning) |

Distractors everywhere are `pickOtherCards(card.id).map(c => c.title)` — random,
often absurdly far from the answer, which makes the quiz feel elementary.

### Level 3 is half category filler, half genuinely good

`generateLevel3Questions` mixes:

- **20 hand-authored questions** in `lib/quizData.ts` (`DECK1_L3_QUESTIONS`) —
  Chalcedon, `homoousios` vs Arianism, Augustine vs Pelagius, Luther &
  justification, `theopneustos` / 2 Tim 3:16, Maranatha, the four marks at
  Constantinople 381. **This is roughly the target quality** — but most still ask
  "which card…" with card-title options (see Part 2, failure mode 2).
- **Programmatic category logic** — `genL3_NotInCategory` ("which does NOT belong
  to category X"), `genL3_SameCategory` ("which shares a category with Y"). These
  are the questions Travis flagged as silly. They test filing, not theology.

The level is **capped at 20 questions drawn**, and the authored pool is only 20,
so a retake reshuffles the same 20 plus category noise.

### Storage / scoring (keep)

`lib/quizProgress.ts` — key `creedcards_quiz_deck_{deckId}_lvl_{level}`, tracks
`bestScore` / `bestPct` / `attempts`. `getScoreBadge()`: Master ≥90, Proficient
≥75, Learning ≥50. Synced to `disciple_creed_progress.quiz_results` JSONB
(Migration 176). All of this stays. The app already has **three** level slots
wired end to end (`app/deck/[slug]/quiz/page.tsx`, `components/quiz/QuizSession.tsx`
`LEVEL_LABELS`, `app/progress/page.tsx`) — the redesign renames and re-contents
them, no route or schema change.

---

## Part 2 — What's wrong, stated as principles

1. **It tests the card, not the concept.** "Which card says X" is recognition of
   an app object. We want "what is X, where is it, who defended it."
2. **Taxonomy questions don't teach doctrine.** Delete every "which category" /
   "which doesn't belong" / "which shares a category" question.
3. **Distractors must be plausible.** Wrong answers should be *real* other
   doctrines, *real* other councils, *real* heresies — not a random card title.
   Implausible distractors are why it feels like a children's quiz.
4. **The good questions are authored, not generated.** Programmatic generation is
   fine as *augmentation*; it can't carry a level.
5. **Every question should leave the user knowing something.** The `explanation`
   field already exists — expand it, always show it.
6. **The `historicalContext` field is an unused goldmine.** Nearly every card
   names a council, a date, a heresy, or a theologian. Today only the 20 authored
   L3s use it.

### Authoring rules (write against this checklist)

**Failure modes to avoid:**

1. **Taxonomy / filing** — "which category does X belong to," "which doesn't
   belong," "which shares a category with Y." Delete outright.
2. **Card-title-as-answer** — "Which card describes X?" with four ALL-CAPS card
   titles as options. Even today's *good* L3s do this. Ask about the *concept* in
   plain prose; never say "which card."
3. **Implausible distractors** — random sibling titles nowhere near the answer.
4. **First-N-words text matching** — "Which card's verse begins '{…}'?" Tests rote
   text recall, nothing else.
5. **Trivia with no payoff** — a date or a name with no "so what."

**Acceptable question types:**

- Term → meaning and meaning → term (distractors = other *real* biblical-language
  concepts).
- Doctrine → anchor verse / verse → doctrine (distractors = other real
  references; only for verses that genuinely *are* the anchor).
- "Which statement best states what X means" — distractors are **common
  misunderstandings** (e.g. justification = "God declares the sinner righteous"
  vs. "God makes the sinner gradually holy" — that's sanctification, a real,
  useful confusion to correct).
- Heresy / council / figure — "Augustine developed original sin against —" →
  Pelagius / Arius / Nestorius / Marcion (all real).
- **Distinguishing two doctrines people conflate** — justification vs.
  sanctification, regeneration vs. adoption, the Trinity vs. the two natures.
  The most useful category.
- "This doctrine answers which problem" cross-card logic — but only where the
  logic is *real* (fall → grace), kept rare.

**Hard rules:**

- No "which card…" phrasing; no CARD-TITLE options — state real positions in
  normal prose.
- No category / filing / "which doesn't belong" questions.
- No "verse begins with…" string matching.
- Every distractor is a *real* thing someone could believe or confuse — no
  invented heresies, fake councils, nonsense terms.
- Max ~1 pure date-recall question per level, and only when the date itself is
  the teaching point.
- No double-negative "which is NOT" unless the contrast *is* the lesson.
- Nothing answerable by test-taking instinct (longest option, oddly specific
  option, "all of the above").
- Every `explanation` must leave the learner with one portable fact or
  distinction — if it doesn't teach, cut the item.
- **Application questions must have a defensible single answer.** If it's
  genuinely open, it's a reflection prompt, not a scored item — the `reflection`
  field stays a prompt and never becomes quiz fodder.
- Review the finished bank against the `ark-identity-theology` skill for
  doctrinal voice (grace-centered, Trinitarian, Christ-focused).

---

## Part 3 — New level model

**Three levels** (revised 2026-09-07 — the earlier 4-level split quarantined
"History & Councils" from Scripture, which is how the material is actually
taught, and stretched a thin "Connections & Application" level to 25 manufactured
items). Each level is a **curated bank** drawn down per attempt; programmatic
questions only fill specific, well-behaved slots.

| Level | Name | Focus | Distractor rule | Source |
|---|---|---|---|---|
| **1** | **Words & Meaning** | The Greek/Hebrew word ↔ its meaning ↔ the core definition. Real biblical-language learning. | Other *real terms* from the deck (never card titles). | Authored + generated from `term` / `translation` / `englishMeaning`. |
| **2** | **Scripture & History** | Where a doctrine is anchored; what the passage says; and the council, heresy, or figure behind it (Nicaea 325 · Constantinople 381 · Ephesus 431 · Chalcedon 451; the creeds; Athanasius, Augustine, Luther, Calvin; Arianism, Pelagianism, Nestorianism, Docetism…). | Other *real references* / real councils / real figures / real heresies / true-sounding but wrong doctrinal statements. | Mostly authored; some generated reference↔doctrine pairs. |
| **3** | **Connections** | How the doctrines fit together — cross-card logic ("which doctrine makes grace necessary"), the redemptive arc, distinguishing doctrines people conflate. The hardest tier; stays small and high-quality. | Other real doctrines from the deck. | **Fully authored.** Absorbs the *keeper* cross-card items from today's L3. |

Deleting the category generators outright is unblocked by this model.

Naming on the level-select screen (`app/deck/[slug]/quiz/page.tsx`, and
`LEVEL_LABELS` in `components/quiz/QuizSession.tsx`, and the `LEVELS` array in
`app/deck/[slug]/page.tsx`) changes from "Surface Recognition / Content Mastery /
Deep Understanding" to "Words & Meaning / Scripture & History / Connections."

### Sample items (Deck 1) — the feel check

**L1 — Words & Meaning**
- "*Hamartia*, the New Testament word for sin, literally means —" → *missing the
  mark* / lawlessness / a debt owed / open rebellion
- "Which term names the doctrine that the Son is *of the same being* as the
  Father?" → *homoousios* / hypostasis / perichōrēsis / kenōsis
- "Paul's word for the Lord's Supper in 1 Corinthians 10:16, *koinōnia*, carries
  the sense of —" → *a sharing / participation in* / a remembrance of / a
  thanksgiving for / a covenant meal with

**L2 — Scripture & History**
- "Paul says that without this, 'your faith is worthless; you are still in your
  sins' (1 Cor 15:17) —" → *the resurrection* / the incarnation / the atonement /
  justification
- "The word *homoousios* was written into the Nicene Creed (325) to rule out —" →
  *Arianism* / Pelagianism / Nestorianism / Docetism
- "Augustine defended the doctrine of original sin against —" → *Pelagius* /
  Arius / Nestorius / Marcion
- "Chalcedon (451) confessed Christ in 'two natures, without confusion, without
  change, without division, without separation.' It condemned Nestorianism and
  also —" → *Eutychianism (the natures mixed into one)* / Arianism (the Son
  created) / Docetism (the body an illusion) / Modalism (one Person in three
  modes)

**L3 — Connections**
- "Which doctrine describes the condition that makes *grace* necessary?" → *sin
  and the fall* / repentance / suffering / spiritual warfare
- "Justification *declares* us righteous. Which doctrine names the *relationship*
  we are brought into?" → *adoption* / regeneration / sanctification / salvation
- "A believer says, 'I was justified the day I believed, and I'm being sanctified
  every day since.' This correctly distinguishes —" → *a finished verdict from an
  ongoing work* / a legal act from a relational one / God's part from our part /
  the Father's work from the Spirit's
- "Which doctrine corrects the idea that God's final plan is to evacuate earth
  for heaven?" → *new heaven and new earth* / the second coming / eternal life /
  final judgment

---

## Part 4 — Question bank format

Generalize the current `L3Question` into one authored item type, deck-scoped,
tag-rich so we can filter, balance, and validate.

```ts
// lib/quiz/bank.ts
export type QuizLevel = 1 | 2 | 3;

export interface QuizItem {
  id: string;                       // "d1-l2-nicaea-homoousios"
  deckId: number;
  level: QuizLevel;
  cardIds: number[];                // primary card(s) this reinforces
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;              // always shown; teaches
  tags: {
    type: "term" | "meaning" | "scripture" | "definition"
        | "council" | "figure" | "heresy" | "creed" | "connection";
    scriptureRef?: string;          // "1 Corinthians 15:17"
    council?: "Nicaea 325" | "Constantinople 381" | "Ephesus 431" | "Chalcedon 451";
    figure?: string;                // "Augustine", "Athanasius", "Luther"
    heresy?: string;                // "Arianism"
  };
}

export const DECK_BANKS: Record<number, QuizItem[]>;  // { 1: [...] }
```

### Bank sizes (Deck 1 target)

| Level | Authored | Programmatic augment | Drawn per attempt |
|---|---|---|---|
| 1 | 25 | up to 15 (term↔meaning from card fields) | 12 |
| 2 | 35 | up to 8 (reference↔doctrine) | 12 |
| 3 | 25 | 0 | 12 |

Draw rule: shuffle authored first, then top up from programmatic only if authored
is short. Never repeat a `cardId` more than twice in one attempt. Retake =
fresh shuffle, different subset. No level gating (matches today; don't punish a
user who wants to jump to history).

---

## Part 5 — Card-data additions

**Skipped (2026-09-07).** The earlier plan added an optional `history` struct
(`{ council, figures, heresyRefuted, creed }`) to `CreedCard` as a
machine-readable index. Decided not worth it — 50 Essentials cards is small
enough to author the L2 bank straight from the prose `historicalContext`.
Revisit only if a later deck's history bank gets big enough to need validation
tooling.

---

## Part 6 — Engine changes

`lib/quizEngine.ts`:

- **Keep** the public signature: `generateQuestions(deckId, level, count)` and
  the `QuizQuestion` shape (so `QuizSession.tsx` is untouched).
- **Replace** the body: `bank = DECK_BANKS[deckId].filter(i => i.level === level)`
  → shuffle → draw, with programmatic augment for L1/L2 only.
- **Delete** `genL1_CategorySort`, `genL3_NotInCategory`, `genL3_SameCategory`.
- **Keep & reuse** `genL1_EnglishMeaning` / `genL2_TermMeaning` logic — but change
  distractors to other **terms/meanings**, and only emit when ≥3 real distractors
  exist.
- `l3ToQuizQuestion` generalizes to `bankItemToQuizQuestion`.

`lib/quizData.ts`: `DECK1_L3_QUESTIONS` migrates into `DECK_BANKS[1]`. Split by
new level:
- **`l3-x-06` and `l3-x-12` are DELETED** — they cover Four Marks and Communion
  of Saints, which moved to Foundations in the freeze. Cut, not refiled.
- Most of the rest move to **L2** (`l3-x-03` Luther, `-04`/`-19` Chalcedon,
  `-08` 1 Cor 15:17, `-13` homoousios/Arianism, `-14` Augustine/Pelagius,
  `-15` 2 Cor 3:18, `-18` theopneustos) with `tags` filled in — after being
  rewritten off card-title options (failure mode 2).
- The cross-card items go to **L3** (`l3-x-01` fall→grace, `-07`
  justification→adoption, `-20` new-earth).
- `DECK_META` / `getDeckMeta` are now unused — delete (Phase E cleanup).

`app/deck/[slug]/quiz/page.tsx` + `app/deck/[slug]/page.tsx` `LEVELS` +
`components/quiz/QuizSession.tsx` `LEVEL_LABELS` + `app/progress/page.tsx`:
rename the three levels; no count change from 3.

`lib/quizProgress.ts`: no change (already `(deckId, level)` keyed).

`components/ui/BottomNav.tsx`: dead code with a stale `/study` guard — delete in
the same sweep.

---

## Part 7 — Authoring plan for Deck 1

The real work — ~85 authored items, sourced entirely from the 50 existing cards'
own fields.

- [x] Level model settled (3, above).
- [ ] **15-item sample** (5 / 5 / 5) for a feel check — in progress.
- [ ] **L1 (25):** one term-nuance item per card that has a Greek/Hebrew term
      (~45 cards) → pick the 25 richest. Distractors = other real terms/meanings.
- [ ] **L2 (35):** for each doctrine, "where is it anchored" + (where the card
      has real history) "which council / figure / heresy." Prioritize the four
      anchor doctrines (Gospel, Identity, Spirit, Scripture — per
      `dna-tools-reference`) and the Salvation & Gospel category. Fold in the
      rewritten keepers from today's L3.
- [ ] **L3 (25):** the redemptive arc (fall → atonement → justification →
      adoption → sanctification → glorification), the "distinguish these two"
      pairs, and the keeper cross-card items from today's L3 (`l3-x-01`, `-07`,
      `-20`, …).
- [ ] Distractor audit: no card-title distractors anywhere; every wrong option is
      a real term / reference / council / figure / doctrine.
- [ ] Theology review pass (`ark-identity-theology` skill).

Deck 2's bank follows the same recipe once its cards are reviewed
(`DECK-STRATEGY.md` Phase F).

---

## Decisions

**2026-09-05**
- Quiz rebuilt around doctrine, not card-object recognition. Authored banks,
  plausible distractors, delete taxonomy generators.

**2026-09-07**
- **3 levels, not 4.** L1 Words & Meaning · L2 Scripture & History · L3
  Connections. (4-level split reverted — see Part 3.)
- **No `history` struct on cards.** Author L2 from prose `historicalContext`.
- **`l3-x-06` / `l3-x-12` deleted outright** (Foundations topics, not Essentials).
- Per-attempt count: **12** at every level (down from 20).
- **No level gating** (unchanged).

## Still open

1. **Group-facing use** — should a leader be able to assign "Deck 1, Level 2" as
   a pathway checkpoint or a Live Service block? Would need Hub wiring; out of
   scope here but affects whether scores need to sync more richly.
2. **Category-scoped quizzes** — `DECK1-PLAN.md` floated "test this category"
   after a filtered study session. Doable once the bank is tagged by `cardIds`
   (filter bank by category membership). Phase 2.

# Creed Cards — Quiz Redesign

**Status:** Planning · **Created:** 2026-09-05
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
  Constantinople 381. **This is the target quality.**
- **Programmatic category logic** — `genL3_NotInCategory` ("which does NOT belong
  to category X"), `genL3_SameCategory` ("which shares a category with Y"). These
  are the questions Travis flagged as silly. They test filing, not theology.

The level is **capped at 20 questions drawn**, and the authored pool is only 20,
so a retake reshuffles the same 20 plus category noise.

### Storage / scoring (keep)

`lib/quizProgress.ts` — key `creedcards_quiz_deck_{deckId}_lvl_{level}`, tracks
`bestScore` / `bestPct` / `attempts`. `getScoreBadge()`: Master ≥90, Proficient
≥75, Learning ≥50. Synced to `disciple_creed_progress.quiz_results` JSONB
(Migration 176). All of this stays.

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

---

## Part 3 — New level model

**Four levels** (DECIDED 2026-09-05 — not folded into three). Each is a **curated
bank** drawn down per attempt; programmatic questions only fill specific,
well-behaved slots.

| Level | Name | Focus | Distractor rule | Source |
|---|---|---|---|---|
| **1** | **Language & Vocabulary** | The Greek/Hebrew word ↔ its meaning ↔ the doctrine it names. Real biblical-language learning. | Other *real terms* from the deck (never card titles). | Generated from `term` / `translation` / `englishMeaning`, + authored nuance items. |
| **2** | **Scripture & Definition** | Where a doctrine is anchored; what the passage says; what the doctrine claims (and doesn't). | Other *real references* / other *true-sounding but wrong doctrinal statements*. | Mostly authored; some generated reference↔doctrine pairs. |
| **3** | **History, Councils & Theologians** | Nicaea 325 · Constantinople 381 · Ephesus 431 · Chalcedon 451; the creeds; Athanasius, Augustine, Luther, Calvin; the heresies each doctrine answered (Arianism, Pelagianism, Nestorianism, Docetism, Marcionism…). | Other real councils / figures / heresies. | **Fully authored.** Extends today's 20. |
| **4** | **Connections & Application** | Cross-card logic ("which doctrine makes grace necessary"), the redemptive arc, "so what" reflection framing. | Other real doctrines from the deck. | Authored + the *keeper* cross-card items from today's L3. |

Level 4 absorbs the worthwhile half of the current L3 and lets us **delete the
category generators outright**.

Naming on the level-select screen (`app/quiz/[deckId]/page.tsx`) changes from
"Surface Recognition / Content Mastery / Deep Understanding" to the four above.

### Sample items (Deck 1)

**L1 — Language & Vocabulary**
- "The Greek word Scripture uses for *God-breathed*, in 2 Timothy 3:16, is —" → *theopneustos* / *logos* / *rhema* / *graphē*
- "*Hamartia* literally means —" → *missing the mark* / *lawlessness* / *debt* / *rebellion*
- "Paul's word for the Lord's Supper as a *sharing* in Christ's body (1 Cor 10:16) is —" → *koinōnia* / *agapē* / *eucharistia* / *anamnēsis*

**L2 — Scripture & Definition**
- "Paul says that without this, 'your faith is futile and you are still in your sins' (1 Cor 15:17):" → *the resurrection* / the incarnation / the atonement / justification
- "Which best states what *justification* means?" → *God declares the sinner righteous on the basis of Christ* / God makes the sinner gradually holy / God overlooks sin for Christ's sake / God rewards faith with righteousness
- "Romans 5:1 is the anchor verse for —" → *justification* / grace / faith / the gospel

**L3 — History, Councils & Theologians**
- "The term *homoousios* was written into the Nicene Creed (325) to refute —" → *Arianism* / Pelagianism / Nestorianism / Docetism
- "Augustine developed the doctrine of original sin defending it against —" → *Pelagius* / Arius / Nestorius / Marcion
- "The four marks of the Church — one, holy, catholic, apostolic — were added to the Nicene Creed at —" → *Constantinople, 381* / Nicaea, 325 / Ephesus, 431 / Chalcedon, 451
- "Chalcedon (451) confessed Christ 'made known in two natures, without confusion, without change, without division, without separation.' This defines —" → *the hypostatic union* / the Trinity / the communion of natures / the incarnation's timing

**L4 — Connections & Application**
- "Which doctrine describes the condition that makes *grace* necessary?" → *sin and the fall* / repentance / suffering / spiritual warfare
- "Justification *declares* us righteous; which doctrine *names the relationship* we're brought into?" → *adoption* / regeneration / sanctification / salvation
- "Which card corrects the idea that God's final plan is to evacuate earth for heaven?" → *new heaven and new earth* / the second coming / eternal life / final judgment

---

## Part 4 — Question bank format

Generalize the current `L3Question` into one authored item type, deck-scoped,
tag-rich so we can filter, balance, and validate.

```ts
// lib/quiz/bank.ts
export type QuizLevel = 1 | 2 | 3 | 4;

export interface QuizItem {
  id: string;                       // "d1-l3-nicaea-homoousios"
  deckId: number;
  level: QuizLevel;
  cardIds: number[];                // primary card(s) this reinforces
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;              // always shown; teaches
  tags: {
    type: "term" | "meaning" | "scripture" | "definition"
        | "council" | "figure" | "heresy" | "creed" | "connection" | "application";
    scriptureRef?: string;          // "1 Corinthians 15:17"
    council?: "Nicaea 325" | "Constantinople 381" | "Ephesus 431" | "Chalcedon 451";
    figure?: string;                // "Augustine", "Athanasius", "Luther"
    heresy?: string;                // "Arianism"
  };
}

export const DECK_BANKS: Record<number, QuizItem[]>;  // { 1: [...], 2: [...] }
```

### Bank sizes (Deck 1 target)

| Level | Authored | Programmatic augment | Drawn per attempt |
|---|---|---|---|
| 1 | 20 | up to 20 (term↔meaning from card fields) | 12 |
| 2 | 30 | up to 10 (reference↔doctrine) | 12 |
| 3 | 45 | 0 | 15 |
| 4 | 25 | 0 | 12 |

Draw rule: shuffle authored first, then top up from programmatic only if authored
is short. Never repeat a `cardId` more than twice in one attempt. Retake =
fresh shuffle, different subset.

---

## Part 5 — Card-data additions

To let L1/L2 augmentation be *generated safely* and to let L3 items be
*validated*, add optional structured fields to `CreedCard` (mining what's already
prose in `historicalContext`):

```ts
history?: {
  council?: "Nicaea 325" | "Constantinople 381" | "Ephesus 431" | "Chalcedon 451";
  figures?: string[];      // ["Augustine", "Pelagius"]  (Pelagius = the foil)
  heresyRefuted?: string;  // "Pelagianism"
  creed?: "Apostles'" | "Nicene" | "Athanasian";
};
```

`historicalContext` prose stays as the card's readable copy; `history` is the
machine-usable index. Populating it for the 51 Essentials cards is a one-pass
job and doubles as a fact-check of the existing prose.

No new required fields — `history` is optional, absent on cards with no council
/ figure (most of the Christian Life category).

---

## Part 6 — Engine changes

`lib/quizEngine.ts`:

- **Keep** the public signature: `generateQuestions(deckId, level, count)` and
  `QuizQuestion` shape (so `QuizSession.tsx` is untouched).
- **Replace** the body: `bank = DECK_BANKS[deckId].filter(i => i.level === level)`
  → shuffle → draw, with programmatic augment for L1/L2 only.
- **Delete** `genL1_CategorySort`, `genL3_NotInCategory`, `genL3_SameCategory`.
- **Keep & reuse** `genL1_EnglishMeaning` / `genL2_TermMeaning` logic — but change
  distractors to other **terms/meanings**, and only emit when ≥3 real distractors
  exist.
- `l3ToQuizQuestion` generalizes to `bankItemToQuizQuestion`.

`lib/quizData.ts`: `DECK1_L3_QUESTIONS` migrates into `DECK_BANKS[1]` at
`level: 3` with `tags` filled in. Its 20 items are the seed of the L3 bank.

`app/quiz/[deckId]/page.tsx`: 3 level cards → 4; new names/descriptions;
`getQuizResult(deckId, 4)` added. `app/progress/page.tsx` "Test Your Knowledge":
same, 3 rows → 4.

`lib/quizProgress.ts`: no change (already `(deckId, level)` keyed; `level` was
already `number`). Optionally add per-level mastery flags for a future
"deck completed" state.

---

## Part 7 — Authoring plan for Deck 1

This is the real work — ~120 authored items. Sourced entirely from the 51
existing cards' own fields.

- [ ] Populate `history` on all 51 cards from `historicalContext` (fact-check pass).
- [ ] **L1 (20):** one term-nuance item per card that has a Greek/Hebrew term
      (~35 cards) → pick the 20 richest. Distractors = other real terms.
- [ ] **L2 (30):** for each doctrine, one "where is it anchored" + one "which
      statement is the true definition" (with a wrong-but-plausible distractor
      set). Prioritize the four anchor doctrines (Gospel, Identity, Spirit,
      Scripture — per `dna-tools-reference`) and the Salvation & Gospel category.
- [ ] **L3 (45):** keep the 20; add 25 across — every council/date, each major
      heresy, Athanasius / Augustine / Luther / Calvin / the Cappadocians,
      the three creeds, `theopneustos` / `homoousios` / `perichoresis` /
      `hypostasis` term-history items.
- [ ] **L4 (25):** the redemptive arc (fall → atonement → justification →
      adoption → sanctification → glorification), plus the *keeper* cross-card
      items from today's L3 (`l3-x-01`, `-07`, `-20`, etc.).
- [ ] Review pass against the `ark-identity-theology` skill for doctrinal voice
      (grace-centered, Trinitarian, Christ-focused).
- [ ] Distractor audit: no card-title distractors anywhere; every wrong option is
      a real term / reference / council / figure / doctrine.

Deck 2's bank follows the same recipe once its cards exist (`DECK-STRATEGY.md`
Phase F).

---

## Decisions (2026-09-05)

- **4 levels** — L1 Language, L2 Scripture & Definition, L3 History/Councils/
  Theologians, L4 Connections & Application. Not folded into three.

## Still open

1. **Per-attempt count** — 12–15 vs the current 20. Shorter = more retakes, less
   fatigue; longer = better coverage. Leaning 12 (L1/L2/L4), 15 (L3).
2. **Do we gate levels?** Today there's no gating. Keep it open, or require
   L1 ≥ 75% to unlock L3/L4?
3. **Group-facing use** — should a leader be able to assign "Deck 1, Level 3" as a
   pathway checkpoint or a Live Service block? (Would need Hub wiring; out of
   scope here but affects whether scores need to sync more richly.)
4. **Category-scoped quizzes** — `DECK1-PLAN.md` floated "test this category"
   after a filtered study session. Worth doing once banks are tagged by `cardIds`
   (filter bank by category membership). Phase 2.

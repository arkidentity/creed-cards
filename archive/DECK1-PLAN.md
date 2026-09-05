# Deck 1 Revision + Quiz System Plan

## Summary of Changes

| Type | Count |
|------|-------|
| Cards removed (to future decks) | 4 |
| Cards reworked | 2 |
| Cards added | 5 |
| **Final deck size** | **51 cards** |

---

## Part 1: Deck 1 Card Changes

### Cards to Remove (move to a future deck)

| ID | Title | Reason |
|----|-------|--------|
| 1 | THE TRIUNE GOD | Overlaps with card 2; "Trinity" is extra-biblical terminology — both together are redundant |
| 6 | THE DIVINE DANCE (Perichoresis) | Advanced/nuanced concept; not foundational for new disciples |
| 15 | CHRIST OUR HIGH PRIEST | Deeper Christology; belongs in an intermediate deck |
| 32 | THE LIVING WORD | Uses Hebrew term (Davar Chai) but cites a Greek NT verse — inconsistent; rework properly in a future deck |

Cards 3, 4, 5 (God the Father, God the Son, God the Holy Spirit) remain and carry the doctrine of God's triunity through the individual persons without relying on the extra-biblical umbrella term.

---

### Cards to Rework

#### Card 25 — FAITH
Merge "Believe" into this card. `pistis` (faith, noun) and `pisteuō` (believe, verb) are the same Greek root — they are not two separate concepts. Keep the card concise.

**Updated definition:**
> Faith — or belief — is wholehearted trust in Jesus Christ for salvation. It goes beyond intellectual agreement to complete reliance on Christ and His finished work. It looks away from ourselves and rests in His righteousness alone. Faith is the empty hand that receives what God freely gives in Christ — and even faith itself is His gift.

All other fields (term, scripture, reference) remain the same.

---

#### Card 36 — THE LORD'S SUPPER
Keep the title. Rework the term and definition to center on `koinōnia` — the word Paul uses in 1 Corinthians 10:16 for the cup and bread. Change the key scripture to that verse.

**Updated fields:**

```
term: "Κοινωνία"
termLabel: "Greek"
translation: "Koinōnia"
englishMeaning: "Communion / Sharing"

scripture: "Is not the cup of blessing which we bless a sharing in the blood of Christ? Is not the bread which we break a sharing in the body of Christ?"
reference: "1 Corinthians 10:16"

definition: "The Lord's Supper is the sacred meal where the Church remembers Christ's sacrifice and experiences real communion with Him and with one another. The cup and bread are a koinōnia — a sharing — in Christ's body and blood. We eat together as His family, proclaiming His death until He returns."

historicalContext: "Jesus instituted this meal at the Last Supper, commanding His followers to 'do this in remembrance of Me' (Luke 22:19). Paul uses koinōnia — meaning fellowship, participation, and sharing — to describe what happens at the table: genuine union with Christ and with one another."
```

---

### New Cards to Add

> IDs start at 51 to avoid disrupting existing localStorage progress keys.

---

#### Card 51 — SIN AND THE FALL

```typescript
{
  id: 51,
  category: "Salvation & Gospel",
  categorySlug: "salvation",
  title: "SIN AND THE FALL",
  shortDesc: "Missing the Mark",
  term: "Ἁμαρτία",
  termLabel: "Greek",
  translation: "Hamartia",
  englishMeaning: "Missing the Mark",
  definition:
    "Sin is any thought, word, or action that falls short of God's holy standard — and the Fall is where it began. When Adam and Eve chose their own way over God's, sin and death entered the world. Every person since is born with a broken nature. We don't just commit sins; we are sinners who need rescue.",
  scripture: "For all have sinned and fall short of the glory of God.",
  reference: "Romans 3:23",
  historicalContext:
    "Augustine's doctrine of original sin — that Adam's rebellion brought spiritual death to all humanity — was upheld against Pelagius, who taught that humans could choose good without divine help. Understanding the depth of the Fall is what makes the grace of the gospel so remarkable.",
  reflection:
    "How does seeing sin as a fundamental broken condition — not just bad choices — change how you understand your need for God?",
  colors: { dark: "#14532d", accent: "#86efac" },
}
```

---

#### Card 52 — SALVATION

```typescript
{
  id: 52,
  category: "Salvation & Gospel",
  categorySlug: "salvation",
  title: "SALVATION",
  shortDesc: "Rescued and Restored",
  term: "Σωτηρία",
  termLabel: "Greek",
  translation: "Sōtēria",
  englishMeaning: "Deliverance",
  definition:
    "Salvation is God's complete rescue of humanity from sin, death, and judgment through Jesus Christ. It is past (saved from sin's penalty), present (being saved from sin's power), and future (will be saved from sin's presence). Salvation is entirely God's gift — received by faith, never earned.",
  scripture:
    "For the Son of Man has come to seek and to save that which was lost.",
  reference: "Luke 19:10",
  historicalContext:
    "The Greek word 'sōtēria' was used in the ancient world for deliverance from enemies, disease, or danger. The New Testament applies it to God's total rescue of humanity — body, soul, and spirit — through Christ's life, death, and resurrection.",
  reflection:
    "What does it mean to you personally that God came to seek and save you?",
  colors: { dark: "#14532d", accent: "#86efac" },
}
```

---

#### Card 53 — ATONEMENT

> Placed in the Jesus Christ category since it is about what Christ accomplished. Distinct from Card 12 (CHRIST'S SACRIFICE / Hilasmos), which focuses specifically on propitiation. This card covers the broader doctrine — what the cross accomplished and why — rooted in the OT sacrificial background.

```typescript
{
  id: 53,
  category: "Jesus Christ",
  categorySlug: "christ",
  title: "ATONEMENT",
  shortDesc: "At One with God",
  term: "כִּפֻּר",
  termLabel: "Hebrew",
  translation: "Kippur",
  englishMeaning: "Covering",
  definition:
    "Atonement is what Christ accomplished on the cross to restore our broken relationship with God. His death fulfilled everything the Old Testament sacrificial system foreshadowed — a complete covering for sin. Through the cross, God's justice is satisfied, our sins are forgiven, and we are fully reconciled to God.",
  scripture:
    "God was in Christ reconciling the world to Himself, not counting their trespasses against them.",
  reference: "2 Corinthians 5:19",
  historicalContext:
    "The Day of Atonement (Yom Kippur) was Israel's most sacred annual ritual — the high priest entered the Holy of Holies to make atonement for the nation's sins. Jesus fulfilled this as the final and complete sacrifice, entering the true holy place once for all with His own blood (Hebrews 9:12).",
  reflection:
    "What does it mean that God did not just forgive your debt but paid it Himself?",
  colors: { dark: "#7f1d1d", accent: "#fca5a5" },
}
```

---

#### Card 54 — THE KINGDOM OF GOD

```typescript
{
  id: 54,
  category: "Salvation & Gospel",
  categorySlug: "salvation",
  title: "THE KINGDOM OF GOD",
  shortDesc: "Here and Coming",
  term: "Βασιλεία τοῦ Θεοῦ",
  termLabel: "Greek",
  translation: "Basileia tou Theou",
  englishMeaning: "Reign of God",
  definition:
    "The Kingdom of God is God's reign breaking into human history through Jesus Christ. Jesus' first words in ministry were 'The Kingdom of God is at hand.' The Kingdom is both present — Christ reigns now in the hearts of His people — and coming — fully established when He returns. To follow Jesus is to live as a citizen of this Kingdom today.",
  scripture: "Repent, for the kingdom of heaven is at hand.",
  reference: "Matthew 4:17",
  historicalContext:
    "The Kingdom of God was Jesus' primary and most repeated message. The Jewish people expected a political kingdom; Jesus revealed a reign that transforms from the inside out. The early church understood themselves as living between two ages — the Kingdom inaugurated at Christ's first coming and consummated at His return.",
  reflection:
    "What would change in your daily life if you took seriously that you are a citizen of God's Kingdom, not this world's?",
  colors: { dark: "#14532d", accent: "#86efac" },
}
```

---

#### Card 55 — ETERNAL LIFE

```typescript
{
  id: 55,
  category: "Last Things",
  categorySlug: "eschatology",
  title: "ETERNAL LIFE",
  shortDesc: "Knowing God Forever",
  term: "Ζωὴ Αἰώνιος",
  termLabel: "Greek",
  translation: "Zōē Aiōnios",
  englishMeaning: "Eternal Life",
  definition:
    "Eternal life is not simply living forever — it is a new quality of life in relationship with God that begins the moment we trust Christ. Jesus defined it as knowing the Father and the Son. It cannot be ended by death; Christ's resurrection is its guarantee. The life that starts now continues into the new creation without end.",
  scripture:
    "And this is eternal life, that they may know You, the only true God, and Jesus Christ whom You have sent.",
  reference: "John 17:3",
  historicalContext:
    "Greek philosophy promised immortality of the soul — escape from the physical body. The Bible promises something far greater: resurrection of the body into eternal life in a renewed creation. This distinction shaped early Christian hope and changed how believers faced death throughout history.",
  reflection:
    "If your eternal life has already begun, how should that change the way you face fear, failure, or loss today?",
  colors: { dark: "#1e293b", accent: "#94a3b8" },
}
```

---

### Final Deck 1 Card List (51 cards)

| ID | Title | Category | Status |
|----|-------|----------|--------|
| 1 | ~~THE TRIUNE GOD~~ | Trinity | **REMOVED** |
| 2 | ONE GOD IN THREE PERSONS | Trinity | ✓ |
| 3 | GOD THE FATHER | Trinity | ✓ |
| 4 | GOD THE SON | Trinity | ✓ |
| 5 | GOD THE HOLY SPIRIT | Trinity | ✓ |
| 6 | ~~THE DIVINE DANCE~~ | Trinity | **REMOVED** |
| 7 | THE CREATOR GOD | Trinity | ✓ |
| 8 | GOD'S SOVEREIGNTY | Trinity | ✓ |
| 9 | THE INCARNATION | Jesus Christ | ✓ |
| 10 | THE VIRGIN BIRTH | Jesus Christ | ✓ |
| 11 | FULLY GOD AND FULLY HUMAN | Jesus Christ | ✓ |
| 12 | CHRIST'S SACRIFICE | Jesus Christ | ✓ |
| 13 | THE RESURRECTION | Jesus Christ | ✓ |
| 14 | THE ASCENSION | Jesus Christ | ✓ |
| 15 | ~~CHRIST OUR HIGH PRIEST~~ | Jesus Christ | **REMOVED** |
| 16 | CHRIST THE HEAD | Jesus Christ | ✓ |
| 17 | THE COMFORTER | Holy Spirit | ✓ |
| 18 | REGENERATION | Holy Spirit | ✓ |
| 19 | SANCTIFICATION | Holy Spirit | ✓ |
| 20 | THE FRUIT OF THE SPIRIT | Holy Spirit | ✓ |
| 21 | GIFTS OF THE SPIRIT | Holy Spirit | ✓ |
| 22 | THE SPIRIT'S INDWELLING | Holy Spirit | ✓ |
| 23 | THE GOSPEL | Salvation & Gospel | ✓ |
| 24 | GRACE | Salvation & Gospel | ✓ |
| 25 | FAITH | Salvation & Gospel | **REWORKED** (Believe merged in) |
| 26 | JUSTIFICATION | Salvation & Gospel | ✓ |
| 27 | REPENTANCE | Salvation & Gospel | ✓ |
| 28 | ADOPTION | Salvation & Gospel | ✓ |
| 29 | INSPIRATION OF SCRIPTURE | Holy Scripture | ✓ |
| 30 | AUTHORITY OF SCRIPTURE | Holy Scripture | ✓ |
| 31 | CHRIST IN SCRIPTURE | Holy Scripture | ✓ |
| 32 | ~~THE LIVING WORD~~ | Holy Scripture | **REMOVED** |
| 33 | THE CHURCH | Church & Sacraments | ✓ |
| 34 | THE BODY OF CHRIST | Church & Sacraments | ✓ |
| 35 | BAPTISM | Church & Sacraments | ✓ |
| 36 | THE LORD'S SUPPER | Church & Sacraments | **REWORKED** (Koinōnia term + 1 Cor 10:16) |
| 37 | COMMUNION OF SAINTS | Church & Sacraments | ✓ |
| 38 | ONE, HOLY, CATHOLIC, APOSTOLIC | Church & Sacraments | ✓ |
| 39 | DISCIPLESHIP | Christian Life | ✓ |
| 40 | LOVE | Christian Life | ✓ |
| 41 | PRAYER | Christian Life | ✓ |
| 42 | SPIRITUAL WARFARE | Christian Life | ✓ |
| 43 | PERSEVERANCE | Christian Life | ✓ |
| 44 | GOOD WORKS | Christian Life | ✓ |
| 45 | SUFFERING | Christian Life | ✓ |
| 46 | WITNESS | Christian Life | ✓ |
| 47 | THE SECOND COMING | Last Things | ✓ |
| 48 | RESURRECTION OF THE DEAD | Last Things | ✓ |
| 49 | FINAL JUDGMENT | Last Things | ✓ |
| 50 | NEW HEAVEN AND NEW EARTH | Last Things | ✓ |
| 51 | SIN AND THE FALL | Salvation & Gospel | **NEW** |
| 52 | SALVATION | Salvation & Gospel | **NEW** |
| 53 | ATONEMENT | Jesus Christ | **NEW** |
| 54 | THE KINGDOM OF GOD | Salvation & Gospel | **NEW** |
| 55 | ETERNAL LIFE | Last Things | **NEW** |

---

## Part 2: Quiz System Design

### Overview

Each deck has three leveled quizzes. No level gating — disciples can take any level in any order.

| Level | Focus | Bank Size | Questions Per Attempt |
|-------|-------|-----------|----------------------|
| 1 | Surface recognition | ~40 | 20 |
| 2 | Content mastery | ~40 | 20 |
| 3 | Deep understanding | ~40 | 20 |

Questions are drawn randomly from the bank each attempt, so no two runs are identical. All questions are multiple choice (4 options) — one correct, three distractors pulled from other cards in the deck.

---

### Level 1 — Surface Recognition

**Goal:** Can the disciple identify cards by their basic labels? Tests awareness built from simply browsing the deck.

**Question types:**

**Type A — ShortDesc to Title**
Show the `shortDesc`, pick the card `title` from 4 options.
> *"Which card is described as 'Missing the Mark'?"*
> A) REPENTANCE  B) SIN AND THE FALL  C) JUSTIFICATION  D) THE FALL

**Type B — Term to Card**
Show the Greek/Hebrew/Latin term, pick the card title.
> *"Which card uses the term 'Hamartia'?"*
> A) GRACE  B) SIN AND THE FALL  C) REPENTANCE  D) JUSTIFICATION

**Type C — English Meaning**
Show the English meaning, pick the correct term.
> *"Which term means 'Good News' in Greek?"*
> A) Sōtēria  B) Pistis  C) Euangelion  D) Charis

**Type D — Category Sort**
Show the card title, pick the correct category.
> *"Which category does ADOPTION belong to?"*
> A) Christian Life  B) Holy Spirit  C) Salvation & Gospel  D) Last Things

---

### Level 2 — Content Mastery

**Goal:** Does the disciple know what the card actually teaches? Tests reading and retention of definitions and scriptures.

**Question types:**

**Type A — Scripture Attribution**
Show a verse excerpt (no reference), pick the card it belongs to.
> *"Which card's key verse is: 'For all have sinned and fall short of the glory of God'?"*
> A) REPENTANCE  B) GRACE  C) SIN AND THE FALL  D) JUSTIFICATION

**Type B — Reference Match**
Show a scripture reference, pick the card.
> *"Romans 5:1 is the key verse for which card?"*
> A) GRACE  B) JUSTIFICATION  C) FAITH  D) THE GOSPEL

**Type C — Definition Fragment**
Show an excerpt from the `definition`, pick the card title.
> *"Which card teaches that God's rescue is 'past, present, and future — from sin's penalty, power, and presence'?"*
> A) GRACE  B) SALVATION  C) JUSTIFICATION  D) REPENTANCE

**Type D — Term Translation**
Show the term with its language label, pick the correct English meaning.
> *"The Greek term 'Koinōnia' (used on THE LORD'S SUPPER card) means:"*
> A) Breaking of Bread  B) Sacrifice  C) Communion / Sharing  D) Holy Gathering

---

### Level 3 — Deep Understanding

**Goal:** Can the disciple connect the theology, history, and cross-card relationships? Tests whether the content has truly landed.

**Question types:**

**Type A — Historical Context**
Draw from the `historicalContext` field to form a question.
> *"Which council affirmed the full deity of the Holy Spirit, declaring the Spirit is 'worshiped and glorified together with the Father and the Son'?"*
> A) Council of Nicaea (325 AD)  B) Council of Chalcedon (451 AD)  C) Council of Constantinople (381 AD)  D) Council of Ephesus (431 AD)

> *"The term 'homoousios' was affirmed at Nicaea to counter which heresy?"*
> A) Docetism  B) Gnosticism  C) Arianism  D) Pelagianism

**Type B — Heresy / Contrast**
Test the "defended against" logic in historical contexts.
> *"Which teaching did Augustine defend against when he developed the doctrine of original sin?"*
> A) Arianism  B) Pelagianism  C) Nestorianism  D) Marcionism

**Type C — Cross-Card Connection**
Show a statement that links two cards; pick the card being described.
> *"This card explains the problem that makes GRACE necessary."*
> A) REPENTANCE  B) SPIRITUAL WARFARE  C) SIN AND THE FALL  D) SUFFERING

> *"This card fulfills what the Day of Atonement (Yom Kippur) foreshadowed."*
> A) THE GOSPEL  B) ATONEMENT  C) CHRIST'S SACRIFICE  D) SALVATION

**Type D — Term Origin / Language**
> *"Which card is the only one in Deck 1 to use a Hebrew term rooted in the Old Testament sacrificial system?"*
> A) THE CREATOR GOD  B) THE LIVING WORD  C) ATONEMENT  D) SIN AND THE FALL

---

### Results & Storage

**localStorage key:** `creedcards_quiz_deck_{deckId}_lvl_{level}`

**Shape:**
```typescript
interface QuizResult {
  score: number;        // correct answers
  total: number;        // questions shown (20)
  pct: number;          // percentage
  date: string;         // ISO date of last attempt
  bestScore: number;    // highest score ever for this level
  bestPct: number;
  attempts: number;     // total times taken
}
```

**Supabase sync:** Fold into `disciple_creed_progress` as a JSONB column `quiz_results` — no new table needed. Sync on quiz completion (same pattern as `cards_mastered` sync).

---

### Access Points

**1. Home page — new "Quiz" study mode tile**
Add a 4th tile alongside Sequential / Random / Unlearned.
- Shows "Level 1 · 2 · 3" sub-labels
- If any level has been attempted, show best score badge on the tile

**2. Progress page — "Test Your Knowledge" section**
Add between the category breakdown and Settings.
- Shows a row for each level: name, best score, last date, "Start" / "Retake" button
- If not attempted: shows "Take Level 1" CTA with a short description of what it tests

**3. Future: post-category-study CTA**
After completing the last card in a category-filtered study session, show:
> "Ready to test this category? Try the quiz →"
Requires category-scoped quiz banks (Phase 2).

---

### Implementation Notes

- All question generation is **programmatic** — questions are built from `CARD_DATA` fields at runtime, not hand-authored. Distractors are randomly sampled from other cards in the deck at question generation time.
- **Excluded cards from questions:** IDs 1, 6, 15, 32 (removed from deck — don't appear as correct answers or distractors once the card data is updated).
- The `QuizQuestion` interface in `lib/quizData.ts` is already in place. The `DeckQuiz` interface and `getQuizForDeck()` helper are also there. The main work is:
  1. Writing the question-generation functions per level
  2. Building the quiz session UI in `app/quiz/[deckId]/page.tsx`
  3. Adding the results storage functions to `lib/progress.ts`
  4. Wiring the access points on home + progress pages
- The quiz route already exists at `/quiz/[deckId]` — extend it with level routing: `/quiz/[deckId]/[level]` (1, 2, or 3), or use a query param `?level=1`.

---

## Part 3: Cards Left on the Table (Future Decks)

These concepts were raised during Deck 1 planning but deferred. They belong in future decks once Deck 1 is complete.

### From Deck 1 Removals

| Card | Title | Term | Why Deferred |
|------|-------|------|--------------|
| 1 | THE TRIUNE GOD | Trias (Greek) | Overlaps with Card 2; "Trinity" is extra-biblical terminology — better suited to a deeper theological vocabulary deck |
| 6 | THE DIVINE DANCE | Perichoresis (Greek) | Advanced Trinitarian concept; not foundational for new disciples |
| 15 | CHRIST OUR HIGH PRIEST | Archiereus (Greek) | Deeper Christology from Hebrews; belongs in an intermediate deck |
| 32 | THE LIVING WORD | Davar Chai (Hebrew) | Needs a proper rework — use an OT scripture with the Hebrew term, not a NT verse. Good card once corrected. |

### Concepts Not Yet in Any Deck

| Concept | Suggested Term | Notes |
|---------|---------------|-------|
| IMAGO DEI (Image of God) | Imago Dei (Latin) | Foundational to Christian anthropology and identity — strong candidate for Deck 2 |
| HYPOSTATIC UNION | Henōsis Hypostatikē (Greek) | Already have Card 11 (Fully God and Fully Human) which covers this — the term itself could be a separate card for an advanced Christology deck |
| COVENANT | Berith / Diathēkē (Hebrew/Greek) | The organizing principle of the entire biblical narrative; critical for any deck on Scripture or salvation history |
| ELECTION / PREDESTINATION | Eklogē (Greek) | Significant NT doctrine; intentionally left out of Deck 1 to avoid doctrinal controversy at the foundational level |
| GLORIFICATION | Doxaō (Greek) | The final stage of salvation (past/present/future arc); completes what the SALVATION card introduces |
| THE GREAT COMMISSION | Mathēteuō (Greek) | Jesus' final command; strong candidate for a Mission or Discipleship deck |
| SABBATH / REST | Shabbat (Hebrew) | God's pattern of rest; connects creation, covenant, and eschatological hope |
| KENOSIS | Kenōsis (Greek) | Christ "emptying Himself" in the Incarnation (Philippians 2:7); advanced Christology |
| PROPITIATION vs. EXPIATION | Hilastērion / Exilaskomai | Card 12 already covers propitiation; the distinction between the two could be its own intermediate card |
| ESCHATOLOGICAL HOPE / SHALOM | Shalom (Hebrew) | The peace and wholeness of God's restored Kingdom; bridges Last Things and Christian Life |

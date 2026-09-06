# Creed Cards — Deck Lineup

**Status:** Planning / brainstorm · **Created:** 2026-09-05
**Companions:** `DECK-STRATEGY.md` (architecture), `QUIZ-REDESIGN.md` (quiz), `DECK1-PLAN.md` (original Deck 1 revision)

The canonical map of every Creed Cards deck: what each one *is*, its card list,
and the decisions still owed. This doc supersedes the roadmap section of
`DECK-STRATEGY.md`.

---

## Rules for every deck

1. **50 cards. Exactly.** Not 40, not 51. A deck is finalized when it has 50.
2. **Name:** `Creed Cards (____)` — a theme word in parentheses. Never "Vol. 2".
   Deck 1's label becomes `Creed Cards (Essentials)` everywhere (app `DECK_META`,
   pathway, home header — currently inconsistent).
3. **Stable IDs.** Within a deck, cards are `1..50`. A card's identity is
   `(deckId, id)`. Once a deck ships, its IDs are frozen (progress data keys off
   them — see `DECK-STRATEGY.md` Part 1.2).
4. **Schema** — three card shapes across the lineup:

   | Schema | Fields | Decks |
   |---|---|---|
   | `doctrine` | term (Greek/Hebrew) · translation · englishMeaning · definition · scripture + ref · historicalContext · reflection | Essentials, Deck 2 |
   | `promise` | promise (short form) · verse · ref · covenant context · condition (if any) · speaksTo (the situation) · reflection | Promises |
   | `fulfillment` | kind (prophecy\|type) · basis (stated\|traditional) · otText · otRef · ~centuries before · ntText · ntRef · significance · reflection | Fulfilled |

5. **Finalize the roster before the storage re-key.** Moving a card between decks
   after users have progress means remapping keys. Do the Deck 1 / Deck 2 sort
   *first*, freeze IDs, then ship the `decks_progress` migration with an
   old-global-ID → new-`(deck,id)` map.

---

## The lineup

| # | Name | Slug | Schema | Status | Identity — one line |
|---|---|---|---|---|---|
| 1 | Creed Cards (Essentials) | `essentials` | doctrine | **Live, re-finalizing** | The non-negotiables a disciple needs in month one. |
| 2 | Creed Cards (Foundations) | `foundations` | doctrine | Building — `DECK2-FOUNDATIONS.md` | The doctrine you build on next — councils, covenant, deeper Christology & last things. |
| 3 | Creed Cards (Promises) | `promises` | promise | Planned (slug already wired) | God's promises, sorted by the situation they speak to. |
| 4 | Creed Cards (Fulfilled) | `fulfilled` | fulfillment | Brainstorm | 50 Old Testament prophecies Jesus fulfilled. |
| — | *Bench* | — | — | Ideas | See "Decks beyond" below. |

---

## Deck 1 — Creed Cards (Essentials)

**Finalized roster + new-card copy: `DECK1-FINALIZE.md`.**

In brief: 51 → 50. Five cards move to Foundations (Christ the Head, Communion of
Saints, Four Marks + proposed: Salvation, Good Works). Four cards added, grounded
in the `ark-identity-theology` voice: **The Divine Dance (Perichoresis)** back in,
**Union with Christ**, **The New Covenant**, **Imago Dei**. One slot open
(recommended: **Freedom in Christ**). Then freeze and assign IDs 1–50.

---

## Deck 2 — Creed Cards (Foundations)

**Full roster + written cards: `DECK2-FOUNDATIONS.md` (Roster v2).** Name confirmed
(`foundations`). 50 cards across 9 groups / 9 category slugs — 6 shared with
Essentials + 3 new (`creeds`, `scripture`, `covenant`). Two scrutiny passes done;
v2 roster is the current proposal, pending Travis's approval. Creeds & Councils
batch (10 cards) written.

**No "Identity" deck** (decided 2026-09-06). Identity-cluster candidates
(New Creation, Righteousness/The Great Exchange) are benched, not spun off.
Bench list lives in `DECK2-FOUNDATIONS.md` → Scrutiny round 2.

---

## Deck 3 — Creed Cards (Promises)

**Identity:** not doctrine to master — promises to stand on. Each card is a
promise of God, tagged by the **situation it speaks to**, so a disciple in a hard
moment can find the word they need. Already referenced as `promises-deck` in
`dna-app/daily-dna/lib/pathwayData.ts` and `dna-hub/docs/leader-guide-coverage.md`.

**Schema `promise`:** promise (short form) · verse (quoted) · reference ·
covenant context (who/when it was given) · condition (if any — many are
unconditional "in Christ"; 2 Cor 1:20, "all the promises of God are Yes in him")
· **speaksTo** (fear, weariness, guilt, provision, guidance, loneliness,
waiting, death…) · reflection.

**Groupings (~50 across):** God's Presence · Provision · Guidance · Peace & Rest
· Forgiveness & Cleansing · Strength in Weakness · Protection · Hope in Suffering
· Answered Prayer · The Spirit's Help · Eternal Security · Christ's Return.

**Sample cards:**
- "I will never leave you nor forsake you" — Heb 13:5 / Deut 31:6 — *loneliness, fear*
- "Come to me… and I will give you rest" — Matt 11:28 — *weariness*
- "My grace is sufficient for you" — 2 Cor 12:9 — *weakness, limitation*
- "In this world you will have trouble. But take heart! I have overcome the world" — John 16:33 — *suffering*
- "He who began a good work in you will carry it on to completion" — Phil 1:6 — *doubt about growth*
- "If we confess our sins, he is faithful and just to forgive" — 1 John 1:9 — *guilt*
- "My God will supply every need of yours" — Phil 4:19 — *provision*
- "I will instruct you and teach you in the way you should go" — Ps 32:8 — *decisions*
- "The peace of God… will guard your hearts and minds" — Phil 4:7 — *anxiety*
- "Nothing… will be able to separate us from the love of God" — Rom 8:38–39 — *security*
- "Those who wait on the LORD shall renew their strength" — Isa 40:31 — *waiting*
- "Because I live, you also will live" — John 14:19 — *facing death*
- "I am with you always, to the end of the age" — Matt 28:20 — *feeling alone in mission*
- "The Helper… will teach you all things" — John 14:26 — *needing wisdom*
- "I go to prepare a place for you… I will come again" — John 14:2–3 — *homesickness for heaven*

**Wiring when it ships:** point `LEADER_GUIDE_MAP` slug `promises-deck` at the
real leader guide; drop the PDF in both leader-guide locations
(`leader-guide-coverage.md` process). Confirm pathway placement with Travis
before adding any checkpoint.

---

## Deck 4 — Creed Cards (Fulfilled)

**Full roster + schema: `DECK4-FULFILLED.md`.** 50 cards: an OT shadow and how
Jesus is the substance. The deck is an apologetic by accumulation.

**Scope expanded 2026-09-06 (Travis):** not only verbal predictions but **types** —
persons, feasts, objects, and events that prefigure Christ. Schema `fulfillment`
gains `kind` (`prophecy` | `type`) and `basis` (`stated` = the NT draws the line ·
`traditional` = a long-held reading the NT doesn't spell out; labeled on the card).

**5 groups:** Messianic Prophecies (20) · The Feasts & Sacred Calendar (6) ·
Persons as Types (9 — Adam, Melchizedek, Moses, Joshua, David, Jonah, Isaac,
Joseph, Boaz) · Objects & Institutions (11 — the mercy seat & the two angels at
the tomb, the bronze serpent, the manna, the torn veil, the scapegoat…) · Shadow
Events (4 — the Exodus, through the water, the wilderness testing, Sinai/Pentecost
and the two 3,000s).

**Theophany / the Angel of the LORD** — Travis's idea for OT appearances of God —
is too debated for a *fulfillment* card; it goes to **Foundations** as one card on
how the church has read those appearances.

---

## Decks beyond (bench — not scheduled)

- **Creed Cards (Sent)** — mission & multiplication: the Great Commission, witness, disciple-making, the kingdom advancing, sending. Ties straight to the DNA pathway.
- **Creed Cards (Free)** — from the *Freedom* workbook: orphan → heir, shame vs. guilt, the new wineskin, sacred-cow tipping, partial vs. full freedom.
- **Creed Cards (Rest)** — the *Sabbath* workbook as a deck: New Covenant rest, work and rest blending, the garden life.
- **Creed Cards (Table)** — *Come to the Table*: koinōnia, hospitality as evangelism, the table of your heart, heaven invading earth.
- **The Names of God** · **The I AM Sayings** · **The Attributes of God** · **The Parables** · **The Armor of God (Eph 6)** — classic memorization sets; `doctrine`-ish or their own light schema.

---

## Open questions

1. **Deck 2 name** — Foundations / Rooted / Deeper / The Councils.
2. **Deck 1 overlaps** — 12 vs 53 (Sacrifice/Atonement), 23 vs 52 vs 54 (Gospel/Salvation/Kingdom): keep all, or thin to Deck 2?
3. **Where does Union with Christ land** — Deck 1 (as an add) or Deck 2 (deeper soteriology)?
4. **Fulfilled schema** — is the Suffering Servant one card or several? Does each card show the *time gap* as a headline number (apologetic punch) or keep it low-key?
5. **Promises conditions** — do we mark conditional promises explicitly, or frame every promise as "Yes in Christ" (2 Cor 1:20) and note conditions in the body only?
6. **Deck order in the shelf** — Essentials → Deck 2 → Promises → Fulfilled, or surface Promises second (broadest appeal)?

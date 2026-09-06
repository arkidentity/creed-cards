# Creed Cards (Fulfilled) — Deck 4 Build

**Status:** Roster draft for Travis's review · **Created:** 2026-09-06
**Companions:** `DECK-LINEUP.md`, `DECK-STRATEGY.md`

50 cards. Each one shows an Old Testament shadow and how Jesus is the substance.
The deck is an apologetic by accumulation — the specificity, the spread of
centuries, the faithfulness of God, the unity of the two Testaments.

---

## Scope — two kinds of card

Travis's expansion (2026-09-06): Fulfilled is not only *verbal predictions*. It
also holds *types* — OT people, feasts, objects, and events that prefigure Christ.

| `kind` | What it is | Example |
|---|---|---|
| `prophecy` | A spoken prediction, later fulfilled | Micah 5:2 → born in Bethlehem |
| `type` | A person / feast / object / event that patterns Christ ahead of time | The Passover lamb → "Christ our Passover" (1 Cor 5:7) |

### The honesty principle

Types come with different weights. Every card carries a `basis` tag:

| `basis` | Meaning | On the card |
|---|---|---|
| `stated` | The New Testament itself makes the connection | quoted NT verse that draws the line |
| `traditional` | A reading the church has long held, but the NT does not spell out | a plain label: *"a connection Christians have long seen"* |

We do not dress a `traditional` reading up as a `stated` one. Travis flagged this:
"some of those can be left up to interpretation." The tag is how we stay honest.

---

## Schema `fulfillment`

```ts
{
  id: number;
  deckId: 4;
  category: "prophecy" | "feasts" | "persons" | "objects" | "events";
  kind: "prophecy" | "type";
  basis: "stated" | "traditional";
  title: string;              // "BORN IN BETHLEHEM"
  shortDesc: string;          // "The Prophet Named the Town"
  otText: string;             // the OT quote
  otRef: string;              // "Micah 5:2"
  centuriesBefore: string;    // "~700 BC"  (omit/blank for types with no date)
  ntText: string;             // the NT quote that fulfills / draws the line
  ntRef: string;              // "Matthew 2:5-6"
  significance: string;       // what it proves / why it matters
  reflection: string;         // one question
  colors: { dark: string; accent: string };
}
```

`definition` from the doctrine schema becomes `significance` here; `historicalContext`
becomes the `otText`/`ntText` pairing plus `basis`. Every card still has a
scripture (two, in fact) and a "how this has been understood" — the `basis` field
supplies it.

---

## Categories

| Slug | Name | dark | accent |
|---|---|---|---|
| `prophecy` | Messianic Prophecies | `#1e1b4b` | `#a5b4fc` |
| `feasts` | The Feasts & Sacred Calendar | `#713f12` | `#fbbf24` |
| `persons` | Persons as Types | `#7c2d12` | `#fdba74` |
| `objects` | Objects & Institutions | `#292524` | `#d6d3d1` |
| `events` | Shadow Events | `#134e4a` | `#5eead4` |

---

> **Full card data: `DECK4-FULFILLED-CARDS.md`** — all 50 written 2026-09-06,
> awaiting Travis review. Card 15 folds Ps 34:20 + Ex 12:46 into one; the
> Suffering Servant (20) is one summary card (see open question 1).

## Roster (50) — for approval

`S` = basis **stated** (NT draws the line) · `T` = basis **traditional** (long-held reading).

### Messianic Prophecies — 20  *(`prophecy`)*
| # | Title | OT | NT | Basis |
|---|---|---|---|---|
| 1 | Born of a Virgin | Isaiah 7:14 | Matthew 1:22-23 | S |
| 2 | Born in Bethlehem | Micah 5:2 | Matthew 2:5-6 | S |
| 3 | Out of Egypt I Called My Son | Hosea 11:1 | Matthew 2:15 | S |
| 4 | A Voice Preparing the Way | Isaiah 40:3 / Malachi 3:1 | Matthew 3:3 | S |
| 5 | Light Dawns in Galilee | Isaiah 9:1-2 | Matthew 4:14-16 | S |
| 6 | He Taught in Parables | Psalm 78:2 | Matthew 13:34-35 | S |
| 7 | Righteous King on a Donkey | Zechariah 9:9 | Matthew 21:4-5 | S |
| 8 | Betrayed by a Friend | Psalm 41:9 | John 13:18 | S |
| 9 | Thirty Pieces of Silver | Zechariah 11:12-13 | Matthew 27:9-10 | S |
| 10 | Silent Before His Accusers | Isaiah 53:7 | Matthew 27:12-14 | S |
| 11 | "Why Have You Forsaken Me?" | Psalm 22:1 | Matthew 27:46 | S |
| 12 | Pierced Hands and Feet | Psalm 22:16 | John 20:25-27 | T |
| 13 | Lots Cast for His Clothing | Psalm 22:18 | John 19:23-24 | S |
| 14 | Given Vinegar and Gall | Psalm 69:21 | Matthew 27:34 | S |
| 15 | Not One Bone Broken | Psalm 34:20 / Exodus 12:46 | John 19:33-36 | S |
| 16 | They Will Look on the One They Pierced | Zechariah 12:10 | John 19:34, 37 | S |
| 17 | Buried with the Rich | Isaiah 53:9 | Matthew 27:57-60 | S |
| 18 | You Will Not Abandon Me to the Grave | Psalm 16:10 | Acts 2:27-31 | S |
| 19 | Sit at My Right Hand | Psalm 110:1 | Acts 2:34-35 | S |
| 20 | The Suffering Servant | Isaiah 52:13–53:12 | Acts 8:32-35 | S |

### The Feasts & Sacred Calendar — 6  *(`feasts`)*
| # | Title | OT | NT | Basis |
|---|---|---|---|---|
| 21 | Passover — the Lamb Whose Blood Turns Away Death | Exodus 12 | 1 Corinthians 5:7; John 1:29 | S |
| 22 | Unleavened Bread — the Old Leaven Swept Out | Exodus 12:15 | 1 Corinthians 5:7-8 | S |
| 23 | Firstfruits — the First Sheaf of the Resurrection | Leviticus 23:10-11 | 1 Corinthians 15:20-23 | S |
| 24 | Pentecost — Law on Tablets, Then Law on Hearts | Leviticus 23:15-21 | Acts 2:1-4 | S / T |
| 25 | Day of Atonement — the Priest Enters the True Holy Place | Leviticus 16 | Hebrews 9:11-12 | S |
| 26 | Tabernacles — God Pitches His Tent Among Us | Leviticus 23:42-43 | John 1:14; 7:37-39 | S |

### Persons as Types — 9  *(`persons`)*
| # | Title | OT | NT | Basis |
|---|---|---|---|---|
| 27 | Adam — the First Man and the Last | Genesis 3 | Romans 5:14-19; 1 Corinthians 15:45 | S |
| 28 | Melchizedek — King and Priest Together | Genesis 14:18-20 | Hebrews 7 | S |
| 29 | Moses — Mediator and the Prophet to Come | Deuteronomy 18:15 | Acts 3:22; Hebrews 3:1-6 | S |
| 30 | Joshua — He Leads the People into Rest | Joshua 1 | Hebrews 4:8-10 | S |
| 31 | David — the Anointed King, Rejected Before He Reigns | 2 Samuel 7 | Luke 1:32-33; Acts 13:22-23 | S |
| 32 | Jonah — Three Days, Then Sent to the Nations | Jonah 1:17 | Matthew 12:39-41 | S |
| 33 | Isaac — the Beloved Son Who Carried the Wood | Genesis 22 | Hebrews 11:17-19 | S (implied) |
| 34 | Joseph — Betrayed by His Brothers, Raised Up to Save Them | Genesis 37–50 | — | T |
| 35 | Boaz — the Kinsman Who Redeems | Ruth 3–4 | — | T |

### Objects & Institutions — 11  *(`objects`)*
| # | Title | OT | NT | Basis |
|---|---|---|---|---|
| 36 | The Tabernacle — God Dwelling with His People | Exodus 25:8 | John 2:19-21 | S |
| 37 | The Mercy Seat — Blood Between the Cherubim | Exodus 25:17-22 | Romans 3:25 | S |
| 38 | The Empty Mercy Seat — Where the Ark's Story Ends | Exodus 25:20; Numbers 10:33 | John 20:12 | T |
| 39 | The Bronze Serpent — Lifted Up So the Dying Would Live | Numbers 21:8 | John 3:14-15 | S |
| 40 | The Manna — Bread Come Down from Heaven | Exodus 16:4 | John 6:48-50 | S |
| 41 | The Scapegoat — Sin Carried Away | Leviticus 16:22 | Hebrews 13:12 | S |
| 42 | The Torn Veil — the Way Now Open | Exodus 26:33 | Matthew 27:51; Hebrews 10:19-20 | S |
| 43 | The Rock in the Wilderness — Struck Once, and Water Flowed | Exodus 17:6 | 1 Corinthians 10:4 | S |
| 44 | The Sabbath — Shadow, and the Substance | Genesis 2:3 | Colossians 2:16-17; Hebrews 4:9 | S |
| 45 | Circumcision — the Sign Moves to the Heart | Deuteronomy 10:16 | Colossians 2:11 | S |
| 46 | The Cities of Refuge — Free When the High Priest Dies | Numbers 35:25-28 | Hebrews 6:18 | T |

### Shadow Events — 4  *(`events`)*
| # | Title | OT | NT | Basis |
|---|---|---|---|---|
| 47 | The Exodus — Redeemed Out of Slavery by Blood | Exodus 6:6 | Luke 9:31; 1 Corinthians 10:1-2 | S |
| 48 | Through the Water — the Sea and the Flood | Exodus 14:29 / Genesis 7 | 1 Corinthians 10:1-2; 1 Peter 3:20-21 | S |
| 49 | The Wilderness Testing — 40 Years, 40 Days | Deuteronomy 8:2-3 | Matthew 4:1-4 | S |
| 50 | Jacob's Ladder — the Stairway Between Heaven and Earth | Genesis 28:12 | John 1:51 | S |

**Count:** 20 + 6 + 9 + 11 + 4 = **50.** ✓
**Basis mix:** 44 `stated`, 6 `traditional` (12, 24, 34, 35, 38, 46) — the traditional element is labeled in each card's `significance`.

---

## Notes on the debated ones

- **#38 The Empty Mercy Seat** — merges two review-pass casualties: the old
  "Two Angels Where the Body Lay" card and the diffuse "Ark of the Covenant"
  card. The mercy seat's two cherubim faced the blood-place; John frames two
  angels around the empty stone where the body lay; the ark itself vanished from
  history. `basis: traditional` — John doesn't say "like the mercy seat," but the
  picture is deliberate and old.
- **#12 Pierced Hands and Feet** — moved to `traditional` in review pass 1: the
  New Testament never quotes Ps 22:16 for the crucifixion, and the Hebrew wording
  is contested (the Dead Sea copies read "pierced"). The apologetic force — a
  Roman-cross detail written a millennium early — is unchanged.
- **Sinai / Pentecost (dropped from slot 50)** — its 3,000 / 3,000 parallel was
  ~70% the same card as #24 Pentecost, so slot 50 is now **Jacob's Ladder**
  (Gen 28:12 → John 1:51, `stated`). Card #24 still carries the numeric mirror.
- **Theophany / the Angel of the LORD** — Travis raised OT appearances of God
  (the burning bush, the fourth man in the furnace, the commander of the LORD's
  army). These are genuinely debated (pre-incarnate Christ? a created angel?), so
  they do **not** go in Fulfilled as fulfillment cards. Better home: a single
  **Foundations** card on *how the church has read God's OT appearances* (Justin
  Martyr and many fathers saw the Logos; Augustine was cautious). See
  `DECK2-FOUNDATIONS.md`.
- **Typology as a concept** already has a Foundations card (`covenant` group).
  Fulfilled is where the concrete types live; Foundations explains the method.

---

## Open questions

1. **Suffering Servant (#20)** — one summary card, or split (the silence, the
   stripes, the grave, the intercession) across several? One, for now.
2. **`basis: traditional` display** — a small tag, a distinct card tint, or a line
   in the significance text? Recommend a tag + a sentence.
3. **Feasts overlap** — Passover (#21) vs the Passover Lamb object: keep as one
   feast card, or also a lamb card in `objects`? Currently one.
4. **Deck 4 vs Deck 2 overlap** — Adam (#27) and Melchizedek (#28) echo
   Foundations' "The Second Adam" and "Christ Our High Priest." Fine — different
   deck, different angle (Fulfilled = the OT figure; Foundations = the doctrine) —
   but write them so they don't read as duplicates.
5. **Date field** — show `centuriesBefore` as a headline number on `prophecy`
   cards (apologetic punch), blank on `type` cards?

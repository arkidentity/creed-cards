# Creed Cards (Fulfilled) — Full Card Data

**Status:** 50 / 50 written · review pass 1 applied 2026-09-06 · **Started:** 2026-09-06
**Roster + schema:** `DECK4-FULFILLED.md`

The 50 `fulfillment` cards for Deck 4. Schema per `DECK4-FULFILLED.md`:
`kind` (`prophecy` | `type`), `basis` (`stated` = the NT draws the line ·
`traditional` = a long-held reading, labeled on the card face), `otText` / `otRef`,
`centuriesBefore` (blank for undatable types), `ntText` / `ntRef`, `significance`
(replaces `definition`), `reflection`. `category` is the display name;
`categorySlug` is one of `prophecy` / `feasts` / `persons` / `objects` / `events`.

Category colours:

| slug | dark | accent |
|---|---|---|
| `prophecy` | `#1e1b4b` | `#a5b4fc` |
| `feasts` | `#713f12` | `#fbbf24` |
| `persons` | `#7c2d12` | `#fdba74` |
| `objects` | `#292524` | `#d6d3d1` |
| `events` | `#134e4a` | `#5eead4` |

Basis mix: 44 `stated`, 6 `traditional` (12, 24, 34, 35, 38, 46 — the traditional
element is spelled out in each card's `significance`, e.g. "a pattern the church
has long seen, not a stated one").

**Review pass 1 applied 2026-09-06:** card 12 → `traditional` (NT never cites
Ps 22:16; text-variant noted); cards 1, 6, 9, 23 softened where they implied
prediction over typology; card 33 `ntRef` gains Heb 11:19; card 48 quotes
1 Pet 3:21 in full. **Structural:** old card 38 (Two Angels) + old card 43 (Ark)
merged into **THE EMPTY MERCY SEAT** at slot 38; slot 43 is now **THE ROCK IN THE
WILDERNESS** (1 Cor 10:4, a stated type that was missing); slot 50 replaced
Sinai/Pentecost (redundant with card 24) with **JACOB'S LADDER** (John 1:51,
stated). Card 44 (Sabbath) re-angled to shadow → substance (Col 2:16-17) so it no
longer overlaps Foundations' Sabbath card. Needs Travis sign-off.

```ts
export const FULFILLED_CARDS: FulfillmentCard[] = [

  // ─── MESSIANIC PROPHECIES (1–20) ──────────────────────────────────────────

  {
    id: 1, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "BORN OF A VIRGIN",
    shortDesc: "The Sign Named in Advance",
    otText: "Behold, a virgin will be with child and bear a son, and she will call His name Immanuel.",
    otRef: "Isaiah 7:14",
    centuriesBefore: "~700 BC",
    ntText: "Now all this took place to fulfill what was spoken by the Lord through the prophet: \"Behold, the virgin shall be with child and shall bear a son, and they shall call His name Immanuel.\"",
    ntRef: "Matthew 1:22-23",
    significance:
      "Isaiah first spoke these words as a sign to a king in his own day; Matthew, quoting the Greek Old Testament, saw their full weight in Jesus and said so plainly. \"Immanuel\" — God with us — is the whole gospel folded into one name.",
    reflection:
      "The rescue began with a promise made long before anyone alive could see it. Where are you waiting on God to keep a word He gave long ago?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 2, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "BORN IN BETHLEHEM",
    shortDesc: "The Prophet Named the Town",
    otText: "But as for you, Bethlehem Ephrathah, too little to be among the clans of Judah, from you One will go forth for Me to be ruler in Israel.",
    otRef: "Micah 5:2",
    centuriesBefore: "~700 BC",
    ntText: "\"And you, Bethlehem, land of Judah, are by no means least among the leaders of Judah; for out of you shall come forth a Ruler who will shepherd My people Israel.\"",
    ntRef: "Matthew 2:5-6",
    significance:
      "A specific village, named centuries ahead. Herod's scribes gave the answer instantly — the prophecy was not obscure — and it still came true under a king trying to kill the child.",
    reflection:
      "God moved an empire's census to get a poor couple to the right town. What \"coincidences\" in your own story might be that kind of quiet faithfulness?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 3, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "OUT OF EGYPT I CALLED MY SON",
    shortDesc: "Reliving Israel's Story",
    otText: "When Israel was a youth I loved him, and out of Egypt I called My son.",
    otRef: "Hosea 11:1",
    centuriesBefore: "~750 BC",
    ntText: "He remained there until the death of Herod. This was to fulfill what had been spoken by the Lord through the prophet: \"Out of Egypt I called My Son.\"",
    ntRef: "Matthew 2:15",
    significance:
      "Hosea was describing Israel's exodus; Matthew sees Jesus reliving it. Jesus is the true Israel — going down into Egypt and being called out, succeeding where the nation failed.",
    reflection:
      "Jesus retraces Israel's road and gets it right. How does it help to know He has already walked — faithfully — the path you keep stumbling on?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 4, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "A VOICE PREPARING THE WAY",
    shortDesc: "The Herald Foretold",
    otText: "A voice is calling, \"Clear the way for the LORD in the wilderness; make smooth in the desert a highway for our God.\"",
    otRef: "Isaiah 40:3",
    centuriesBefore: "~700 BC",
    ntText: "This is the one referred to by Isaiah the prophet when he said, \"The voice of one crying in the wilderness, Make ready the way of the Lord.\"",
    ntRef: "Matthew 3:3",
    significance:
      "The Messiah would have a herald going ahead of Him. John the Baptist knew himself to be that voice — not the light, but the one sent in front of it.",
    reflection:
      "John's whole calling was to point away from himself to Christ. Whose attention could you turn toward Jesus this week rather than toward yourself?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 5, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "LIGHT DAWNS IN GALILEE",
    shortDesc: "Where the Darkness Was Thickest",
    otText: "The people who walk in darkness will see a great light; those who live in a dark land, the light will shine on them.",
    otRef: "Isaiah 9:1-2",
    centuriesBefore: "~700 BC",
    ntText: "\"The land of Zebulun and the land of Naphtali... the people who were sitting in darkness saw a great Light.\"",
    ntRef: "Matthew 4:14-16",
    significance:
      "The Messiah's ministry would begin in a despised, half-pagan northern region, not in Jerusalem. God's light rises first where the dark is deepest.",
    reflection:
      "Christ started His work among the overlooked. What \"unlikely\" place — or person — might He be planning to start something in?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 6, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "HE TAUGHT IN PARABLES",
    shortDesc: "Even the Method Was Written",
    otText: "I will open my mouth in a parable; I will utter dark sayings of old.",
    otRef: "Psalm 78:2",
    centuriesBefore: "~1000 BC",
    ntText: "All these things Jesus spoke to the crowds in parables... so that what was spoken through the prophet would be fulfilled: \"I will open My mouth in parables.\"",
    ntRef: "Matthew 13:34-35",
    significance:
      "Matthew even saw Jesus' way of teaching written into the Psalms. Parables both reveal and conceal — they reward the hungry and pass over the merely curious.",
    reflection:
      "A parable asks you to lean in. Which of Jesus' stories have you heard so often that you've stopped actually listening?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 7, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "RIGHTEOUS KING ON A DONKEY",
    shortDesc: "The Animal of Peace",
    otText: "Rejoice greatly, O daughter of Zion!... your king is coming to you; He is just and endowed with salvation, humble, and mounted on a donkey.",
    otRef: "Zechariah 9:9",
    centuriesBefore: "~520 BC",
    ntText: "This took place to fulfill what was spoken through the prophet: \"...your King is coming to you, gentle, and mounted on a donkey.\"",
    ntRef: "Matthew 21:4-5",
    significance:
      "A conqueror rode a warhorse; Jesus chose the animal of peace. He entered His capital as the king Zechariah described — humble, bringing salvation rather than the sword.",
    reflection:
      "The King you follow came gentle and lowly. Where are you still hoping He'll show up with force instead?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 8, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "BETRAYED BY A FRIEND",
    shortDesc: "A Wound From Inside the Circle",
    otText: "Even my close friend in whom I trusted, who ate my bread, has lifted up his heel against me.",
    otRef: "Psalm 41:9",
    centuriesBefore: "~1000 BC",
    ntText: "\"I do not speak of all of you... but it is that the Scripture may be fulfilled, 'He who eats My bread has lifted up his heel against Me.'\"",
    ntRef: "John 13:18",
    significance:
      "The betrayal came from someone who shared the table. Jesus quoted this psalm at the Last Supper, with Judas still in the room.",
    reflection:
      "Jesus kept loving and serving Judas to the very end, knowing. Is there someone you're being asked to keep loving without a guarantee of return?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 9, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "THIRTY PIECES OF SILVER",
    shortDesc: "The Price of a Slave",
    otText: "They weighed out thirty shekels of silver as my wages. Then the LORD said to me, \"Throw it to the potter.\"",
    otRef: "Zechariah 11:12-13",
    centuriesBefore: "~520 BC",
    ntText: "Then that which was spoken through Jeremiah the prophet was fulfilled: \"And they took the thirty pieces of silver... and gave them for the Potter's Field.\"",
    ntRef: "Matthew 27:9-10",
    significance:
      "The exact sum, the exact use — silver flung down in the temple and spent on a potter's field. (Matthew names Jeremiah, likely blending Zechariah's thirty shekels with Jeremiah's potter and field.) In the law, thirty shekels was the price of a slave gored by an ox (Exodus 21:32).",
    reflection:
      "The Son of God was valued at the price of a dead slave. What does that say about how the world weighs worth — and how God does?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 10, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "SILENT BEFORE HIS ACCUSERS",
    shortDesc: "The Lamb Does Not Argue",
    otText: "He was oppressed and He was afflicted, yet He did not open His mouth; like a lamb that is led to slaughter... so He did not open His mouth.",
    otRef: "Isaiah 53:7",
    centuriesBefore: "~700 BC",
    ntText: "And while He was being accused by the chief priests and elders, He did not answer... so the governor was quite amazed.",
    ntRef: "Matthew 27:12-14",
    significance:
      "Innocent, He could have defended Himself and did not. The silence was not weakness but resolve — a lamb does not argue with the knife.",
    reflection:
      "When you are wrongly accused, what would it look like to entrust yourself to God rather than to win the argument?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 11, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "WHY HAVE YOU FORSAKEN ME?",
    shortDesc: "He Prayed the Whole Psalm",
    otText: "My God, my God, why have You forsaken me? Far from my deliverance are the words of my groaning.",
    otRef: "Psalm 22:1",
    centuriesBefore: "~1000 BC",
    ntText: "About the ninth hour Jesus cried out with a loud voice... \"My God, My God, why have You forsaken Me?\"",
    ntRef: "Matthew 27:46",
    significance:
      "Jesus prayed the opening line of Psalm 22 from the cross — a psalm that goes on to describe pierced hands, a mocking crowd, and soldiers gambling for clothes, then ends in vindication and worldwide worship. He was pointing to the whole thing.",
    reflection:
      "Even Jesus voiced the feeling of being abandoned by God — with a Scripture. What psalm could become your words the next time God feels far?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 12, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "traditional",
    title: "PIERCED HANDS AND FEET",
    shortDesc: "A Detail That Waited for Rome",
    otText: "A band of evildoers has encompassed me; they pierced my hands and my feet.",
    otRef: "Psalm 22:16",
    centuriesBefore: "~1000 BC",
    ntText: "\"Unless I see in His hands the imprint of the nails... I will not believe.\"... Then He said to Thomas, \"Reach here your finger, and see My hands.\"",
    ntRef: "John 20:25-27",
    significance:
      "The New Testament never quotes this verse for the crucifixion, and the ancient Hebrew wording is contested — though the oldest copies, found at the Dead Sea, read \"pierced.\" Either way: crucifixion was not a Jewish practice and did not exist when the psalm was written. The detail waited a thousand years for a Roman cross.",
    reflection:
      "The risen Jesus kept His scars and showed them. What wounds might God not erase but redeem?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 13, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "LOTS CAST FOR HIS CLOTHING",
    shortDesc: "Acting Out a Script They Couldn't See",
    otText: "They divide my garments among them, and for my clothing they cast lots.",
    otRef: "Psalm 22:18",
    centuriesBefore: "~1000 BC",
    ntText: "\"Let us not tear it, but cast lots for it, to decide whose it shall be\"; this was to fulfill the Scripture: \"They divided My outer garments among them, and for My clothing they cast lots.\"",
    ntRef: "John 19:23-24",
    significance:
      "Soldiers gambling at the foot of the cross had no idea they were following a script. Even the small, careless details had been written down.",
    reflection:
      "People fulfilled prophecy without meaning to. Where might God be working through ordinary decisions that look like nothing?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 14, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "GIVEN VINEGAR AND GALL",
    shortDesc: "He Refused the Numbing Cup",
    otText: "They also gave me gall for my food and for my thirst they gave me vinegar to drink.",
    otRef: "Psalm 69:21",
    centuriesBefore: "~1000 BC",
    ntText: "they gave Him wine to drink mixed with gall; and after tasting it, He was unwilling to drink.",
    ntRef: "Matthew 27:34",
    significance:
      "Even the drink offered to the dying man was foretold. He refused the numbing draught — He would meet the cup the Father gave Him fully awake.",
    reflection:
      "Jesus chose not to dull the pain of obedience. Where are you tempted to numb something God is asking you to feel all the way through?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 15, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "NOT ONE BONE BROKEN",
    shortDesc: "The Passover Lamb's Rule",
    otText: "He keeps all his bones, not one of them is broken. (Ps 34:20) ... nor are you to break any bone of it. (Ex 12:46)",
    otRef: "Psalm 34:20; Exodus 12:46",
    centuriesBefore: "~1000 BC / ~1400 BC",
    ntText: "when they saw that He was already dead, they did not break His legs... For these things came to pass to fulfill the Scripture, \"Not a bone of Him shall be broken.\"",
    ntRef: "John 19:33-36",
    significance:
      "The soldiers broke the other two men's legs to hasten death; Jesus was already dead, so they didn't. The Passover lamb's bones were to stay whole — and so were His.",
    reflection:
      "A Roman soldier's split-second decision kept a fifteen-hundred-year-old rule. What does that do to your sense of how carefully God tends the details?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 16, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "THEY WILL LOOK ON THE ONE THEY PIERCED",
    shortDesc: "The Spear, and What Comes After",
    otText: "they will look on Me whom they have pierced; and they will mourn for Him, as one mourns for an only son.",
    otRef: "Zechariah 12:10",
    centuriesBefore: "~520 BC",
    ntText: "one of the soldiers pierced His side with a spear, and immediately blood and water came out... And again another Scripture says, \"They shall look on Him whom they pierced.\"",
    ntRef: "John 19:34, 37",
    significance:
      "The spear thrust was only meant to confirm death; it also confirmed a prophecy — and Zechariah adds that the piercing leads, one day, to repentance and grief that turns into grace.",
    reflection:
      "Looking honestly at what our sin cost Him is meant to melt us, not crush us. When did the cross last actually move you?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 17, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "BURIED WITH THE RICH",
    shortDesc: "The Unlikeliest Line Came True",
    otText: "His grave was assigned with wicked men, yet He was with a rich man in His death.",
    otRef: "Isaiah 53:9",
    centuriesBefore: "~700 BC",
    ntText: "Joseph of Arimathea... a rich man... asked for the body of Jesus... and laid it in his own new tomb.",
    ntRef: "Matthew 27:57-60",
    significance:
      "Executed criminals were dumped in disgrace. Instead a wealthy man gave Jesus his own unused tomb — the line of the prophecy that seemed least likely came true through one quiet act of courage.",
    reflection:
      "Joseph risked his standing to honor Jesus openly at the worst possible moment. What would that kind of courage cost you right now?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 18, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "YOU WILL NOT ABANDON ME TO THE GRAVE",
    shortDesc: "The Resurrection in a Song",
    otText: "For You will not abandon my soul to Sheol; nor will You allow Your Holy One to undergo decay.",
    otRef: "Psalm 16:10",
    centuriesBefore: "~1000 BC",
    ntText: "\"He looked ahead and spoke of the resurrection of the Christ, that He was neither abandoned to Hades, nor did His flesh suffer decay.\" This Jesus God raised up again.",
    ntRef: "Acts 2:27-31",
    significance:
      "Peter's argument at Pentecost: David died and his tomb was right there, so David must have been singing about someone else — someone whose body would not decay. The empty tomb was promised in Israel's worship.",
    reflection:
      "The resurrection was written into Israel's songbook a thousand years early. How does that steady your confidence that it really happened?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 19, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "SIT AT MY RIGHT HAND",
    shortDesc: "David Calls His Son \"Lord\"",
    otText: "The LORD says to my Lord: \"Sit at My right hand until I make Your enemies a footstool for Your feet.\"",
    otRef: "Psalm 110:1",
    centuriesBefore: "~1000 BC",
    ntText: "\"For it was not David who ascended into heaven, but he himself says: The Lord said to my Lord, Sit at My right hand.\"",
    ntRef: "Acts 2:34-35",
    significance:
      "The most-quoted Old Testament verse in the New. David calls his own descendant \"my Lord\" — the Messiah is greater than David, and now reigns at God's right hand until every enemy is subdued.",
    reflection:
      "Christ is not anxiously waiting to see how history turns out — He is seated, reigning. How would today feel different if you believed that all the way down?",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },
  {
    id: 20, deckId: 4, category: "Messianic Prophecies", categorySlug: "prophecy",
    kind: "prophecy", basis: "stated",
    title: "THE SUFFERING SERVANT",
    shortDesc: "An Eyewitness Account, Written Early",
    otText: "He was pierced through for our transgressions, He was crushed for our iniquities; the chastening for our well-being fell upon Him, and by His scourging we are healed.",
    otRef: "Isaiah 52:13–53:12",
    centuriesBefore: "~700 BC",
    ntText: "the eunuch said, \"Please tell me, of whom does the prophet say this?\"... Philip... beginning from this Scripture he preached Jesus to him.",
    ntRef: "Acts 8:32-35",
    significance:
      "Seven centuries before the cross, Isaiah described a servant who suffers in the place of the guilty, is numbered with criminals, dies, is buried with the rich, and then \"sees His offspring\" and is satisfied. It reads like an eyewitness report written in advance.",
    reflection:
      "Isaiah 53 keeps saying \"for us,\" \"for our,\" \"in his place.\" Sit with one of those phrases today and let it be personal.",
    colors: { dark: "#1e1b4b", accent: "#a5b4fc" },
  },

  // ─── THE FEASTS & SACRED CALENDAR (21–26) ──────────────────────────────────

  {
    id: 21, deckId: 4, category: "The Feasts & Sacred Calendar", categorySlug: "feasts",
    kind: "type", basis: "stated",
    title: "PASSOVER",
    shortDesc: "The Lamb in the Doorway",
    otText: "The blood shall be a sign for you on the houses where you live; and when I see the blood I will pass over you.",
    otRef: "Exodus 12:13",
    centuriesBefore: "~1400 BC",
    ntText: "Clean out the old leaven... For Christ our Passover also has been sacrificed. (1 Cor 5:7) ... Behold, the Lamb of God who takes away the sin of the world! (John 1:29)",
    ntRef: "1 Corinthians 5:7; John 1:29",
    significance:
      "On the night Israel left Egypt, a lamb died so the firstborn could live, its blood marking the door. Jesus was crucified at Passover — the Lamb whose blood marks us, so that judgment passes over.",
    reflection:
      "The Israelites had to actually put the blood on their own doorframes. What does it look like to personally take shelter under what Christ has done?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 22, deckId: 4, category: "The Feasts & Sacred Calendar", categorySlug: "feasts",
    kind: "type", basis: "stated",
    title: "UNLEAVENED BREAD",
    shortDesc: "The Old Leaven Swept Out",
    otText: "Seven days you shall eat unleavened bread... you shall remove leaven from your houses.",
    otRef: "Exodus 12:15",
    centuriesBefore: "~1400 BC",
    ntText: "Clean out the old leaven so that you may be a new lump... let us celebrate the feast... with the unleavened bread of sincerity and truth.",
    ntRef: "1 Corinthians 5:7-8",
    significance:
      "Leaven — a little of it working through the whole batch — became Scripture's picture of sin and hypocrisy. Christ, the sinless bread, calls His people to a life swept clean.",
    reflection:
      "What small, tolerated thing is quietly working its way through more of your life than you've admitted?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 23, deckId: 4, category: "The Feasts & Sacred Calendar", categorySlug: "feasts",
    kind: "type", basis: "stated",
    title: "FIRSTFRUITS",
    shortDesc: "The First Sheaf of the Harvest",
    otText: "you shall bring in the sheaf of the first fruits of your harvest to the priest. He shall wave the sheaf before the LORD for you to be accepted.",
    otRef: "Leviticus 23:10-11",
    centuriesBefore: "~1400 BC",
    ntText: "But now Christ has been raised from the dead, the first fruits of those who are asleep... Christ the first fruits, after that those who are Christ's at His coming.",
    ntRef: "1 Corinthians 15:20-23",
    significance:
      "The first sheaf of grain was offered as a promise that the whole field was coming. Jesus rose on the first day of the week — by the reckoning many follow, the very day of Firstfruits — and Paul calls His resurrection exactly that: the firstfruits, the down payment on ours.",
    reflection:
      "His resurrection guarantees yours. How does a certain future change the way you face a hard present?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 24, deckId: 4, category: "The Feasts & Sacred Calendar", categorySlug: "feasts",
    kind: "type", basis: "traditional",
    title: "PENTECOST",
    shortDesc: "Law on Tablets, Then Law on Hearts",
    otText: "You shall count fifty days... then you shall present a new grain offering to the LORD. (Lev 23:16) ... about three thousand men of the people fell that day. (Ex 32:28)",
    otRef: "Leviticus 23:15-21; Exodus 32:28",
    centuriesBefore: "~1400 BC",
    ntText: "When the day of Pentecost had come... they were all filled with the Holy Spirit... that day there were added about three thousand souls.",
    ntRef: "Acts 2:1-4, 41",
    significance:
      "The Feast of Weeks came fifty days after Passover, and Jewish tradition tied it to the giving of the law at Sinai — where three thousand died. Fifty days after Jesus' death, the Spirit was poured out and three thousand were saved. \"The letter kills, but the Spirit gives life\" (2 Cor 3:6). The date and feast are stated in Scripture; the 3,000 / 3,000 mirror is a long-noticed parallel.",
    reflection:
      "The same God who wrote the law on stone now writes it on hearts. Where do you still feel you're under stone?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 25, deckId: 4, category: "The Feasts & Sacred Calendar", categorySlug: "feasts",
    kind: "type", basis: "stated",
    title: "THE DAY OF ATONEMENT",
    shortDesc: "The Priest Enters the Holy Place",
    otText: "he shall bring the blood inside the veil... and make atonement for the holy place, because of the impurities of the sons of Israel.",
    otRef: "Leviticus 16:15-16",
    centuriesBefore: "~1400 BC",
    ntText: "when Christ appeared as a high priest... He entered through the greater and more perfect tabernacle... and not through the blood of goats and calves, but through His own blood, He entered the holy place once for all.",
    ntRef: "Hebrews 9:11-12",
    significance:
      "Once a year the high priest went behind the veil with blood, for the nation's sin. Jesus went into the true sanctuary — heaven itself — with His own blood, once, and the work was finished.",
    reflection:
      "You are not waiting for a priest to go in on your behalf next year. The door is open now. When did you last simply walk in?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },
  {
    id: 26, deckId: 4, category: "The Feasts & Sacred Calendar", categorySlug: "feasts",
    kind: "type", basis: "stated",
    title: "TABERNACLES",
    shortDesc: "God Pitches His Tent Among Us",
    otText: "You shall live in booths for seven days... so that your generations may know that I had the sons of Israel live in booths when I brought them out of the land of Egypt.",
    otRef: "Leviticus 23:42-43",
    centuriesBefore: "~1400 BC",
    ntText: "And the Word became flesh, and dwelt [tabernacled] among us. (John 1:14) ... On the last day, the great day of the feast, Jesus stood and cried out, \"If anyone is thirsty, let him come to Me and drink.\" (John 7:37)",
    ntRef: "John 1:14; 7:37-38",
    significance:
      "Israel camped in flimsy shelters to remember that God traveled with them. In Jesus, God \"tabernacled\" in human flesh — and at that very feast He offered the living water it pointed to.",
    reflection:
      "God's instinct across the whole Bible is to come near and stay. Where have you been keeping Him at tent's-length?",
    colors: { dark: "#713f12", accent: "#fbbf24" },
  },

  // ─── PERSONS AS TYPES (27–35) ─────────────────────────────────────────────

  {
    id: 27, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "stated",
    title: "ADAM — THE FIRST MAN AND THE LAST",
    shortDesc: "Two Heads of the Race",
    otText: "then the LORD God formed man of dust from the ground, and breathed into his nostrils the breath of life; and man became a living being.",
    otRef: "Genesis 2:7",
    centuriesBefore: "",
    ntText: "So also it is written, \"The first man, Adam, became a living soul.\" The last Adam became a life-giving spirit... Adam, who is a type of Him who was to come.",
    ntRef: "1 Corinthians 15:45; Romans 5:14",
    significance:
      "Paul calls Adam \"a type of Him who was to come.\" One man's disobedience sank the race; one Man's obedience raises a new one. You are born into the first and can be reborn into the last.",
    reflection:
      "Which \"Adam\" do you instinctively feel defines you on a bad day — the fallen one, or the risen one?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 28, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "stated",
    title: "MELCHIZEDEK",
    shortDesc: "King and Priest Together",
    otText: "And Melchizedek king of Salem brought out bread and wine; now he was a priest of God Most High. He blessed him.",
    otRef: "Genesis 14:18-19",
    centuriesBefore: "~2000 BC",
    ntText: "having been designated by God as a high priest according to the order of Melchizedek... he remains a priest perpetually.",
    ntRef: "Hebrews 5:10; 7:3",
    significance:
      "A mysterious king-priest blesses Abraham and vanishes from the record — no genealogy, no death noted. Hebrews sees a pattern: a priesthood not based on ancestry and not ended by death, fulfilled in Jesus.",
    reflection:
      "Jesus is both the King who rules you and the Priest who prays for you. Which do you lean on less?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 29, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "stated",
    title: "MOSES",
    shortDesc: "Mediator, and the Prophet to Come",
    otText: "The LORD your God will raise up for you a prophet like me from among you, from your countrymen; you shall listen to him.",
    otRef: "Deuteronomy 18:15",
    centuriesBefore: "~1400 BC",
    ntText: "Moses said, \"The Lord God will raise up for you a prophet like me from your brethren; to Him you shall give heed.\"",
    ntRef: "Acts 3:22",
    significance:
      "Moses led a people out of slavery, stood between them and God, and delivered God's word. He himself said a greater prophet was coming. Jesus leads a greater exodus and speaks not merely for God but as God.",
    reflection:
      "Moses got the people out of Egypt but not himself into the land. Where do you need a leader who can finish what Moses couldn't?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 30, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "stated",
    title: "JOSHUA — HE LEADS THE PEOPLE INTO REST",
    shortDesc: "The Same Name as Jesus",
    otText: "Moses my servant is dead; now therefore arise, cross this Jordan, you and all this people, to the land which I am giving to them.",
    otRef: "Joshua 1:2",
    centuriesBefore: "~1400 BC",
    ntText: "For if Joshua had given them rest, He would not have spoken of another day after that. So there remains a Sabbath rest for the people of God.",
    ntRef: "Hebrews 4:8-9",
    significance:
      "\"Joshua\" and \"Jesus\" are the same name — \"the LORD saves.\" Joshua brought Israel into the land but not into true rest; Jesus, the greater Joshua, leads His people into the rest the land only pictured.",
    reflection:
      "You can arrive somewhere and still not be at rest. What \"promised land\" have you reached that didn't deliver the peace you hoped for?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 31, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "stated",
    title: "DAVID",
    shortDesc: "Anointed King, Rejected Before He Reigns",
    otText: "I will raise up your descendant after you... and I will establish his kingdom... and I will establish the throne of his kingdom forever.",
    otRef: "2 Samuel 7:12-13",
    centuriesBefore: "~1000 BC",
    ntText: "the Lord God will give Him the throne of His father David; and He will reign over the house of Jacob forever, and His kingdom will have no end.",
    ntRef: "Luke 1:32-33",
    significance:
      "A shepherd, anointed king years before he took the throne, hunted and homeless in the meantime. God promised his line an everlasting throne — a promise too big for any son of David but One.",
    reflection:
      "David lived anointed but not yet reigning, for years. How do you live faithfully in the gap between a promise and its arrival?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 32, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "stated",
    title: "JONAH",
    shortDesc: "Three Days, Then Sent to the Nations",
    otText: "So the LORD appointed a great fish to swallow Jonah, and Jonah was in the stomach of the fish three days and three nights.",
    otRef: "Jonah 1:17",
    centuriesBefore: "~760 BC",
    ntText: "for just as Jonah was three days and three nights in the belly of the sea monster, so will the Son of Man be three days and three nights in the heart of the earth.",
    ntRef: "Matthew 12:40",
    significance:
      "Jesus named this one Himself: a reluctant prophet swallowed by death, brought up on the third day, then sent to preach repentance to pagans. The pattern is the gospel, right down to the nations.",
    reflection:
      "Jonah obeyed and still resented the mercy God showed his enemies. Whose repentance would you struggle to celebrate?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 33, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "stated",
    title: "ISAAC — THE BELOVED SON WHO CARRIED THE WOOD",
    shortDesc: "The Son on the Mountain",
    otText: "Take now your son, your only son, whom you love, Isaac... and offer him there as a burnt offering. ... God will provide for Himself the lamb.",
    otRef: "Genesis 22:2, 8",
    centuriesBefore: "~2000 BC",
    ntText: "He who did not spare His own Son, but delivered Him over for us all, how will He not also with Him freely give us all things? (Rom 8:32) ... [Abraham] considered that God is able to raise people even from the dead, from which he also received him back as a type. (Heb 11:19)",
    ntRef: "Romans 8:32; Hebrews 11:19",
    significance:
      "A father, a beloved only son, a three-day journey, the wood carried up the mountain by the son himself, and a substitute in his place. Hebrews says Abraham received Isaac back \"as a type.\" On that same range of hills, centuries later, the Father did not withhold His Son.",
    reflection:
      "God stopped Abraham's hand — and did not stop His own. What does it mean to you that He went through with what He spared Abraham?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 34, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "traditional",
    title: "JOSEPH",
    shortDesc: "Betrayed by His Brothers, Raised to Save Them",
    otText: "As for you, you meant evil against me, but God meant it for good in order to bring about this present result, to preserve many people alive.",
    otRef: "Genesis 50:20",
    centuriesBefore: "~1800 BC",
    ntText: "this Man, delivered over by the predetermined plan and foreknowledge of God, you nailed to a cross by the hands of godless men and put Him to death. But God raised Him up again.",
    ntRef: "Acts 2:23-24",
    significance:
      "The New Testament never says \"Joseph was a type of Christ,\" but the shape is hard to miss: rejected by his own, sold for silver, condemned though innocent, exalted — and then the very ones who betrayed him come to him for bread and are forgiven. A pattern the church has long seen, not a stated one.",
    reflection:
      "Joseph could have crushed his brothers and chose to feed them. Is there a betrayal you're being invited to answer with grace?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },
  {
    id: 35, deckId: 4, category: "Persons as Types", categorySlug: "persons",
    kind: "type", basis: "traditional",
    title: "BOAZ",
    shortDesc: "The Kinsman Who Redeems",
    otText: "\"I will redeem it\"... So Boaz took Ruth, and she became his wife... the LORD enabled her to conceive, and she gave birth to a son.",
    otRef: "Ruth 4:6, 13",
    centuriesBefore: "~1100 BC",
    ntText: "knowing that you were not redeemed with perishable things like silver or gold... but with precious blood, as of a lamb unblemished and spotless, the blood of Christ.",
    ntRef: "1 Peter 1:18-19",
    significance:
      "The law let a near relative \"redeem\" a destitute widow — pay her debt, take her as his own, restore her future. Boaz did it for Ruth, an outsider, at cost to himself; their great-grandson was David. A long-recognized picture of Christ the redeemer, not a stated one.",
    reflection:
      "Christ became your relative in order to redeem you. What debt has He paid that you sometimes still try to pay yourself?",
    colors: { dark: "#7c2d12", accent: "#fdba74" },
  },

  // ─── OBJECTS & INSTITUTIONS (36–46) ───────────────────────────────────────

  {
    id: 36, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE TABERNACLE",
    shortDesc: "A Tent for Glory",
    otText: "Let them construct a sanctuary for Me, that I may dwell among them.",
    otRef: "Exodus 25:8",
    centuriesBefore: "~1400 BC",
    ntText: "\"Destroy this temple, and in three days I will raise it up.\"... But He was speaking of the temple of His body.",
    ntRef: "John 2:19-21",
    significance:
      "God gave detailed plans for a tent so He could live in the middle of the camp. Every part — veil, lamp, bread, altar — pointed forward. Then the true meeting place of God and man turned out to be a body.",
    reflection:
      "The whole elaborate system existed so God could be near His people. What would it change to believe He wants nearness with you that much?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 37, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE MERCY SEAT",
    shortDesc: "Where Wrath and Mercy Meet",
    otText: "You shall make a mercy seat of pure gold... The cherubim shall have their wings spread upward... There I will meet with you.",
    otRef: "Exodus 25:17-22",
    centuriesBefore: "~1400 BC",
    ntText: "God displayed [Christ] publicly as a propitiation [mercy seat] in His blood through faith.",
    ntRef: "Romans 3:25",
    significance:
      "The lid of the ark, where the high priest sprinkled blood once a year, was the one place God promised to meet sinners without destroying them. Paul uses that exact word for Jesus — He is now the place where a holy God and guilty people meet in peace.",
    reflection:
      "The meeting place is no longer a golden lid in a hidden room. It's a Person. Have you actually met Him there?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 38, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "traditional",
    title: "THE EMPTY MERCY SEAT",
    shortDesc: "Where the Ark's Story Ends",
    otText: "The cherubim... shall be facing one another, their faces toward the mercy seat. ... The ark of the covenant of the LORD set out before them... to seek out a resting place for them.",
    otRef: "Exodus 25:20; Numbers 10:33",
    centuriesBefore: "~1400 BC",
    ntText: "and she saw two angels in white sitting, one at the head and one at the feet, where the body of Jesus had been lying.",
    ntRef: "John 20:12",
    significance:
      "The ark held the broken law; its golden lid was the mercy seat, where blood was sprinkled once a year; two cherubim faced each other across that bloodied gold. The ark itself vanished from history before the exile, and no one has found it since. Then John, at the empty tomb, carefully notes two angels — one at the head, one at the feet — framing the bare stone where the body had lain. He never says \"like the mercy seat.\" But the picture is the same, and now it is empty: the blood has been given, the law answered, the work done. A connection the church has long seen, not one Scripture states.",
    reflection:
      "The cherubim now look down on an empty space, because there is nothing left to atone for. What are you still trying to add to a finished thing?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 39, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE BRONZE SERPENT",
    shortDesc: "Lifted Up So the Dying Would Live",
    otText: "Make a fiery serpent, and set it on a standard; and everyone who is bitten, when he looks at it, he will live.",
    otRef: "Numbers 21:8",
    centuriesBefore: "~1400 BC",
    ntText: "As Moses lifted up the serpent in the wilderness, even so must the Son of Man be lifted up; so that whoever believes will in Him have eternal life.",
    ntRef: "John 3:14-15",
    significance:
      "Snake-bitten Israelites were healed not by fighting the snakes but by looking at a bronze one on a pole. Jesus said that is a picture of the cross: the thing that killed us, made harmless and lifted up — and we simply look, and live.",
    reflection:
      "Healing came by looking, not striving. What would it mean today to just look to Christ instead of trying harder?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 40, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE MANNA",
    shortDesc: "Daily Bread From the Sky",
    otText: "Behold, I will rain bread from heaven for you; and the people shall go out and gather a day's portion every day.",
    otRef: "Exodus 16:4",
    centuriesBefore: "~1400 BC",
    ntText: "I am the bread of life... This is the bread which comes down out of heaven, so that one may eat of it and not die.",
    ntRef: "John 6:48-50",
    significance:
      "For forty years God fed a nation with bread that appeared each morning and spoiled if hoarded. Jesus said that was about Him: the true bread, given daily, meant to be taken and not stored.",
    reflection:
      "Manna trained Israel to depend on God one day at a time. What are you trying to stockpile that God wants to give you daily?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 41, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE SCAPEGOAT",
    shortDesc: "Sin Carried Away",
    otText: "the goat shall bear on itself all their iniquities to a solitary land; and he shall release the goat in the wilderness.",
    otRef: "Leviticus 16:22",
    centuriesBefore: "~1400 BC",
    ntText: "So Jesus also, that He might sanctify the people through His own blood, suffered outside the gate.",
    ntRef: "Hebrews 13:12",
    significance:
      "On the Day of Atonement, one goat was killed and another sent away alive into the desert, carrying the nation's sin out of the camp. Jesus is both — the blood that cleanses and the one who bears the guilt away, suffering \"outside the gate.\"",
    reflection:
      "Your sin has been carried off into a \"solitary land.\" Why do you keep hiking out to visit it?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 42, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE TORN VEIL",
    shortDesc: "The Way Now Open",
    otText: "The veil shall serve for you to separate the holy place from the holy of holies.",
    otRef: "Exodus 26:33",
    centuriesBefore: "~1400 BC",
    ntText: "And behold, the veil of the temple was torn in two from top to bottom. (Matt 27:51) ... a new and living way which He inaugurated for us through the veil, that is, His flesh. (Heb 10:20)",
    ntRef: "Matthew 27:51; Hebrews 10:19-20",
    significance:
      "A heavy curtain kept everyone but the high priest out of God's immediate presence. At the moment Jesus died it ripped — from the top, God's end — and the way in was open to anyone who comes through Him.",
    reflection:
      "The barrier is gone, and has been for two thousand years. What still makes you hesitate at the door?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 43, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE ROCK IN THE WILDERNESS",
    shortDesc: "Struck Once, and Water Flowed",
    otText: "Behold, I will stand before you there on the rock at Horeb; and you shall strike the rock, and water will come out of it, that the people may drink.",
    otRef: "Exodus 17:6",
    centuriesBefore: "~1400 BC",
    ntText: "and all drank the same spiritual drink, for they were drinking from a spiritual rock which followed them; and the rock was Christ.",
    ntRef: "1 Corinthians 10:4",
    significance:
      "In the desert, God told Moses to strike a rock and water poured out for a nation dying of thirst. Paul says it plainly: \"the rock was Christ.\" Struck once, He becomes the source everyone drinks from. When Moses later struck the rock a second time in anger, God was severe about it — the Rock is struck once, and after that you speak to it.",
    reflection:
      "You do not have to strike the Rock again to get what you need from Him. What are you still trying to earn that He is already pouring out?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 44, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "THE SABBATH",
    shortDesc: "Shadow, and the Substance",
    otText: "then God blessed the seventh day and sanctified it, because in it He rested from all His work.",
    otRef: "Genesis 2:3",
    centuriesBefore: "",
    ntText: "...a festival or a new moon or a Sabbath day — things which are a mere shadow of what is to come; but the substance belongs to Christ. (Col 2:16-17) ... So there remains a Sabbath rest for the people of God. (Heb 4:9)",
    ntRef: "Colossians 2:16-17; Hebrews 4:9",
    significance:
      "From the seventh day of creation, one day in seven declared the world finished and held — so people could stop. Paul names the Sabbath command outright as \"a shadow of what is to come,\" and says the substance \"belongs to Christ.\" The rest it always pointed toward is a Person, entered by trusting rather than trying.",
    reflection:
      "If the true Sabbath is Christ Himself, what would it look like to actually rest in Him this week — not just to take a day off?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 45, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "stated",
    title: "CIRCUMCISION",
    shortDesc: "The Sign Moves to the Heart",
    otText: "circumcise... your heart, and stiffen your neck no longer.",
    otRef: "Deuteronomy 10:16",
    centuriesBefore: "~1400 BC",
    ntText: "in Him you were also circumcised with a circumcision made without hands, in the removal of the body of the flesh by the circumcision of Christ.",
    ntRef: "Colossians 2:11",
    significance:
      "The covenant sign was a cut in the flesh, marking a set-apart people. Even Moses said the real point was a \"circumcised heart\" — and Paul says that inward cutting-away of the old self is what happens to everyone united to Christ.",
    reflection:
      "The outward marker was always meant to signal an inward change. Where is your faith still mostly on the surface?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },
  {
    id: 46, deckId: 4, category: "Objects & Institutions", categorySlug: "objects",
    kind: "type", basis: "traditional",
    title: "THE CITIES OF REFUGE",
    shortDesc: "Free When the High Priest Dies",
    otText: "The manslayer... shall remain in his city of refuge until the death of the high priest; but after the death of the high priest the manslayer shall return to his own land.",
    otRef: "Numbers 35:25-28",
    centuriesBefore: "~1400 BC",
    ntText: "we who have taken refuge would have strong encouragement to take hold of the hope set before us.",
    ntRef: "Hebrews 6:18",
    significance:
      "Six towns were set aside where someone who had killed by accident could flee from the avenger and be safe — but only inside the walls, and only until the high priest died. Then the refugee could go home free. Hebrews echoes the language of fleeing \"for refuge\" to Christ, where the safety never runs out — and it is the death of our High Priest that sets us free to go home. A picture the church has long drawn, not one Scripture states.",
    reflection:
      "When guilt or accusation is chasing you, where do you run first? What would it look like to run to Christ instead?",
    colors: { dark: "#292524", accent: "#d6d3d1" },
  },

  // ─── SHADOW EVENTS (47–50) ────────────────────────────────────────────────

  {
    id: 47, deckId: 4, category: "Shadow Events", categorySlug: "events",
    kind: "type", basis: "stated",
    title: "THE EXODUS",
    shortDesc: "The Rescue Story Under All the Others",
    otText: "I will bring you out from under the burdens of the Egyptians, and I will deliver you from their bondage. I will also redeem you with an outstretched arm.",
    otRef: "Exodus 6:6",
    centuriesBefore: "~1400 BC",
    ntText: "Moses and Elijah... were speaking of His departure [exodus] which He was about to accomplish at Jerusalem.",
    ntRef: "Luke 9:31",
    significance:
      "Israel's founding story — slaves freed by a lamb's blood and a sea crossing — became the template for salvation itself. Luke literally calls the cross Jesus' \"exodus\": a greater deliverance, out of a deeper bondage.",
    reflection:
      "The exodus generation kept wanting to go back to Egypt. What old slavery still looks strangely comfortable to you?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 48, deckId: 4, category: "Shadow Events", categorySlug: "events",
    kind: "type", basis: "stated",
    title: "THROUGH THE WATER",
    shortDesc: "The Sea and the Flood",
    otText: "the sons of Israel walked on dry land through the midst of the sea, and the waters were like a wall to them.",
    otRef: "Exodus 14:29",
    centuriesBefore: "~1400 BC",
    ntText: "all were baptized into Moses in the cloud and in the sea. (1 Cor 10:2) ... corresponding to that, baptism now saves you — not the removal of dirt from the flesh, but an appeal to God for a good conscience. (1 Pet 3:21)",
    ntRef: "1 Corinthians 10:1-2; 1 Peter 3:20-21",
    significance:
      "The flood and the Red Sea are the Bible's two great \"through the water\" events — judgment on one side, a rescued people walking out the other. The New Testament calls both a picture of baptism: you go down, and you come up into a new life.",
    reflection:
      "Baptism says the old life was buried and a new one raised. Which are you still living out of?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 49, deckId: 4, category: "Shadow Events", categorySlug: "events",
    kind: "type", basis: "stated",
    title: "THE WILDERNESS TESTING",
    shortDesc: "Forty Years, Forty Days",
    otText: "He led you through the great and terrible wilderness... that He might humble you, testing you, to know what was in your heart.",
    otRef: "Deuteronomy 8:2-3",
    centuriesBefore: "~1400 BC",
    ntText: "Jesus was led up by the Spirit into the wilderness to be tempted by the devil... \"Man shall not live on bread alone.\"",
    ntRef: "Matthew 4:1-4",
    significance:
      "Israel spent forty years in the desert grumbling, doubting, and failing the test. Jesus spent forty days in the same desert and met every temptation by quoting the very book — Deuteronomy — that recorded Israel's failure. He is the faithful Son Israel never was.",
    reflection:
      "Jesus fought temptation with Scripture He clearly knew by heart. What is your go-to when you're hungry, tired, and tested?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },
  {
    id: 50, deckId: 4, category: "Shadow Events", categorySlug: "events",
    kind: "type", basis: "stated",
    title: "JACOB'S LADDER",
    shortDesc: "The Stairway Between Heaven and Earth",
    otText: "he had a dream, and behold, a ladder was set on the earth with its top reaching to heaven; and behold, the angels of God were ascending and descending on it.",
    otRef: "Genesis 28:12",
    centuriesBefore: "~1900 BC",
    ntText: "\"Truly, truly, I say to you, you will see the heavens opened and the angels of God ascending and descending on the Son of Man.\"",
    ntRef: "John 1:51",
    significance:
      "Jacob, running for his life from a brother he had cheated, with a stone for a pillow, dreamed of a stairway crowded with angels joining heaven to earth — and woke saying, \"This is the gate of heaven.\" Jesus took that image and put Himself in the middle of it: He is the stairway. All the traffic between God and humanity now runs through one Person.",
    reflection:
      "Jacob found the gate of heaven in the last place he would have looked — on the run, sleeping rough. Where might God be nearer than your circumstances suggest?",
    colors: { dark: "#134e4a", accent: "#5eead4" },
  },

];
```

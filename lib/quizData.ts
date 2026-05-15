export interface QuizQuestion {
  id: string;
  cardId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DeckMeta {
  deckId: number;
  deckName: string;
  totalCards: number;
}

export const DECK_META: DeckMeta[] = [
  { deckId: 1, deckName: "Core Christian Doctrines", totalCards: 51 },
];

export function getDeckMeta(deckId: number): DeckMeta | undefined {
  return DECK_META.find((d) => d.deckId === deckId);
}

/** Hand-authored Level 3 questions for Deck 1.
 *  These test historical context and cross-card theological connections
 *  that cannot be generated programmatically from card fields alone.
 *  Options are always exactly 4 strings; correctIndex is 0–3. */
export interface L3Question {
  id: string;
  deckId: number;
  cardId: number; // primary card this question is about
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export const DECK1_L3_QUESTIONS: L3Question[] = [
  {
    id: "l3-x-01",
    deckId: 1,
    cardId: 51,
    question: "Which card describes the condition that makes GRACE necessary?",
    options: ["REPENTANCE", "SIN AND THE FALL", "SUFFERING", "SPIRITUAL WARFARE"],
    correctIndex: 1,
    explanation: "SIN AND THE FALL establishes the broken condition of humanity — the very problem that GRACE addresses through God's unmerited favor.",
  },
  {
    id: "l3-x-02",
    deckId: 1,
    cardId: 53,
    question: "Which card describes what the Old Testament Day of Atonement (Yom Kippur) pointed toward?",
    options: ["CHRIST'S SACRIFICE", "THE GOSPEL", "ATONEMENT", "SALVATION"],
    correctIndex: 2,
    explanation: "ATONEMENT (Kippur) is rooted in the OT sacrificial system. Yom Kippur foreshadowed Christ entering the true Holy of Holies with His own blood (Hebrews 9:12).",
  },
  {
    id: "l3-x-03",
    deckId: 1,
    cardId: 26,
    question: "Martin Luther's discovery that sparked the Protestant Reformation is described on which card?",
    options: ["GRACE", "FAITH", "JUSTIFICATION", "REPENTANCE"],
    correctIndex: 2,
    explanation: "Luther's rediscovery of JUSTIFICATION by faith alone — that sinners are declared righteous by God's grace through faith — lit the fire of the Reformation.",
  },
  {
    id: "l3-x-04",
    deckId: 1,
    cardId: 11,
    question: "The Council of Chalcedon (451 AD) directly defined which card's doctrine?",
    options: ["THE INCARNATION", "FULLY GOD AND FULLY HUMAN", "THE VIRGIN BIRTH", "CHRIST'S SACRIFICE"],
    correctIndex: 1,
    explanation: "Chalcedon defined the Hypostatic Union — that Christ is 'truly God and truly man' with two natures in one Person — the doctrine on the FULLY GOD AND FULLY HUMAN card.",
  },
  {
    id: "l3-x-05",
    deckId: 1,
    cardId: 47,
    question: "'Maranatha' — the earliest Christian prayer, meaning 'Come, Lord!' — expresses the hope described on which card?",
    options: ["ETERNAL LIFE", "RESURRECTION OF THE DEAD", "THE SECOND COMING", "NEW HEAVEN AND NEW EARTH"],
    correctIndex: 2,
    explanation: "Maranatha (1 Cor 16:22) was the early church's longing for Christ's return — the hope central to THE SECOND COMING (Parousia) card.",
  },
  {
    id: "l3-x-06",
    deckId: 1,
    cardId: 38,
    question: "The four marks of the Church — one, holy, catholic, apostolic — were added to which creed, at which council?",
    options: [
      "Apostles' Creed — Council of Nicaea (325 AD)",
      "Nicene Creed — Council of Constantinople (381 AD)",
      "Nicene Creed — Council of Chalcedon (451 AD)",
      "Athanasian Creed — Council of Ephesus (431 AD)",
    ],
    correctIndex: 1,
    explanation: "The Council of Constantinople (381 AD) expanded the Nicene Creed to include the four marks of the Church described on the ONE, HOLY, CATHOLIC, APOSTOLIC card.",
  },
  {
    id: "l3-x-07",
    deckId: 1,
    cardId: 28,
    question: "Which card describes the relational identity believers receive as a result of JUSTIFICATION?",
    options: ["REGENERATION", "ADOPTION", "SALVATION", "GRACE"],
    correctIndex: 1,
    explanation: "JUSTIFICATION declares us righteous; ADOPTION names the relationship — we become God's children, with Christ as our elder brother and the Spirit crying 'Abba, Father.'",
  },
  {
    id: "l3-x-08",
    deckId: 1,
    cardId: 13,
    question: "Paul says that without which truth 'our faith is futile and we are still in our sins' (1 Cor 15:17)?",
    options: ["THE INCARNATION", "ATONEMENT", "THE RESURRECTION", "THE GOSPEL"],
    correctIndex: 2,
    explanation: "Paul stakes everything on THE RESURRECTION — without it, Christian faith collapses. It proves Christ is the Son of God and guarantees our own resurrection.",
  },
  {
    id: "l3-x-09",
    deckId: 1,
    cardId: 36,
    question: "Paul uses the word 'koinōnia' in 1 Corinthians 10:16 to describe which practice?",
    options: ["COMMUNION OF SAINTS", "BAPTISM", "THE LORD'S SUPPER", "THE CHURCH"],
    correctIndex: 2,
    explanation: "'Is not the cup of blessing a koinōnia in the blood of Christ?' — Paul uses koinōnia specifically for THE LORD'S SUPPER, describing it as a real sharing in Christ's body and blood.",
  },
  {
    id: "l3-x-10",
    deckId: 1,
    cardId: 14,
    question: "Which card teaches that our humanity — in Christ's resurrected body — now reigns in heaven?",
    options: ["THE RESURRECTION", "FULLY GOD AND FULLY HUMAN", "CHRIST THE HEAD", "THE ASCENSION"],
    correctIndex: 3,
    explanation: "THE ASCENSION: Christ ascended bodily into heaven and sits at the Father's right hand. Our human nature, in His person, now rules all creation — an astonishing truth.",
  },
  {
    id: "l3-x-11",
    deckId: 1,
    cardId: 18,
    question: "Jesus told Nicodemus that entering God's kingdom requires the experience described on which card?",
    options: ["REPENTANCE", "FAITH", "REGENERATION", "ADOPTION"],
    correctIndex: 2,
    explanation: "'You must be born again' (John 3) — Jesus tells Nicodemus that entrance into the Kingdom requires REGENERATION, the new birth by the Spirit.",
  },
  {
    id: "l3-x-12",
    deckId: 1,
    cardId: 37,
    question: "Which card is directly confessed in the Apostles' Creed with the phrase 'the communion of saints'?",
    options: ["THE BODY OF CHRIST", "THE CHURCH", "COMMUNION OF SAINTS", "ONE, HOLY, CATHOLIC, APOSTOLIC"],
    correctIndex: 2,
    explanation: "The Apostles' Creed specifically uses 'the communion of saints' (communio sanctorum) — the exact term and concept on the COMMUNION OF SAINTS card.",
  },
  {
    id: "l3-x-13",
    deckId: 1,
    cardId: 2,
    question: "The term 'homoousios' was affirmed at Nicaea to counter which heresy?",
    options: ["Gnosticism", "Arianism", "Pelagianism", "Docetism"],
    correctIndex: 1,
    explanation: "Arianism taught that Jesus was a created being. Nicaea countered this with 'homoousios' — the Son is of the same being as the Father, eternally God.",
  },
  {
    id: "l3-x-14",
    deckId: 1,
    cardId: 51,
    question: "Augustine defended which doctrine against Pelagius, who taught that humans could choose good without divine help?",
    options: ["Justification by faith alone", "The deity of Christ", "Original sin and the Fall", "The authority of Scripture"],
    correctIndex: 2,
    explanation: "Augustine vs. Pelagius is the defining debate on SIN AND THE FALL. Augustine insisted that Adam's sin broke all humanity and that we need grace even to will what is good.",
  },
  {
    id: "l3-x-15",
    deckId: 1,
    cardId: 19,
    question: "Which card describes the Spirit's ongoing work referenced in 2 Corinthians 3:18 as transformation 'from glory to glory'?",
    options: ["REGENERATION", "THE FRUIT OF THE SPIRIT", "SANCTIFICATION", "GIFTS OF THE SPIRIT"],
    correctIndex: 2,
    explanation: "2 Corinthians 3:18 is the key verse for SANCTIFICATION — the Spirit progressively transforms believers into Christ's likeness from one degree of glory to another.",
  },
  {
    id: "l3-x-16",
    deckId: 1,
    cardId: 54,
    question: "Jesus' first recorded words in Mark's Gospel are 'The time is fulfilled, and the kingdom of God is at hand.' This is most directly about which card?",
    options: ["THE GOSPEL", "SALVATION", "THE KINGDOM OF GOD", "ETERNAL LIFE"],
    correctIndex: 2,
    explanation: "THE KINGDOM OF GOD was Jesus' opening proclamation and primary message — God's reign breaking into history through His ministry, death, and resurrection.",
  },
  {
    id: "l3-x-17",
    deckId: 1,
    cardId: 55,
    question: "Jesus defines eternal life in John 17:3 not as endless duration but as:",
    options: [
      "Living in heaven after death",
      "Knowing the only true God and Jesus Christ",
      "Having your sins forgiven",
      "Being sealed by the Holy Spirit",
    ],
    correctIndex: 1,
    explanation: "ETERNAL LIFE is relational, not just durational. Jesus defines it as knowing God — a quality of life in relationship with the Father and Son that begins now.",
  },
  {
    id: "l3-x-18",
    deckId: 1,
    cardId: 29,
    question: "The Greek word 'theopneustos' (God-breathed) appears in which verse, and describes which card's doctrine?",
    options: [
      "John 1:1 — CHRIST IN SCRIPTURE",
      "2 Timothy 3:16 — INSPIRATION OF SCRIPTURE",
      "Hebrews 4:12 — AUTHORITY OF SCRIPTURE",
      "2 Peter 1:20 — THE LIVING WORD",
    ],
    correctIndex: 1,
    explanation: "'All Scripture is theopneustos' (2 Tim 3:16) — God-breathed. This is the key term and verse for INSPIRATION OF SCRIPTURE.",
  },
  {
    id: "l3-x-19",
    deckId: 1,
    cardId: 9,
    question: "Chalcedon's formula — 'without confusion, without change, without division, without separation' — describes which relationship?",
    options: [
      "The three Persons of the Trinity",
      "Christ's two natures in one Person",
      "The Church's relationship to Christ",
      "Scripture's divine and human authorship",
    ],
    correctIndex: 1,
    explanation: "Chalcedon's four 'withouts' describe how the divine and human natures relate in Christ's one Person — the doctrine central to THE INCARNATION (and FULLY GOD AND FULLY HUMAN).",
  },
  {
    id: "l3-x-20",
    deckId: 1,
    cardId: 50,
    question: "Which card corrects the idea that God's final plan is to evacuate earth for heaven?",
    options: ["ETERNAL LIFE", "THE SECOND COMING", "FINAL JUDGMENT", "NEW HEAVEN AND NEW EARTH"],
    correctIndex: 3,
    explanation: "NEW HEAVEN AND NEW EARTH: the Bible's vision is not escape from creation but its renewal. Heaven and earth will merge, and God will dwell with His people forever.",
  },
];

/**
 * Go Deeper — optional extra layer for a Creed Card, opened from the card back.
 *
 * Kept deliberately small: how to say it, where Scripture uses the word (or
 * teaches the idea), the story and people behind it, and a few questions.
 * Written with the `scripture-context` skill: plain words, no church jargon,
 * no application, middle path where Christians differ, every claim checked.
 *
 * Keyed by `${deckId}:${cardId}`. Cards without an entry show no Go Deeper
 * button, so entries can ship a few at a time.
 */

import type { CreedCard } from "./cardData";

export interface GoDeeperVerse {
  ref: string;
  note: string;
  /** true = this verse uses the card's word; false = it teaches the idea */
  usesWord: boolean;
}

export interface GoDeeperPerson {
  name: string;
  say: string; // pronunciation
  who: string;
}

export interface CreedGoDeeper {
  pronunciation: string;
  meaning: string;
  /** One careful line about the word itself: its roots, or how it was used. */
  wordNote?: string;
  verses: GoDeeperVerse[];
  story: string[];
  people?: GoDeeperPerson[];
  questions?: { q: string; a: string }[];
}

const ENTRIES: Record<string, CreedGoDeeper> = {
  // ── Essentials #1 · One God in Three Persons · echad ─────────────────
  "1:1": {
    pronunciation: "eh-KHAHD",
    meaning: "One. Israel's most basic confession: there is one God, and only one.",
    wordNote:
      "Echad is the ordinary Hebrew word for \"one.\" It can count a single thing (\"one day,\" Genesis 1:5) or describe things made one (\"one flesh,\" Genesis 2:24).",
    verses: [
      { ref: "Deuteronomy 6:4", note: "The Shema: \"The Lord our God, the Lord is one.\"", usesWord: true },
      { ref: "Genesis 2:24", note: "A man and his wife become \"one flesh.\"", usesWord: true },
      { ref: "Mark 12:29", note: "Jesus quotes the Shema as the first and greatest commandment.", usesWord: false },
      { ref: "1 Corinthians 8:6", note: "\"One God, the Father… and one Lord, Jesus Christ.\" Paul seems to echo the Shema, with Jesus included in its one Lord.", usesWord: false },
    ],
    story: [
      "The Shema, named for its first word, \"Hear,\" is Israel's central confession. Faithful Jews have prayed it every morning and evening for more than two thousand years. In a world full of gods, it said there is one.",
      "The first Christians were Jews who kept praying the Shema while worshiping Jesus. Paul even seems to echo its words to include Jesus within the one Lord (1 Corinthians 8:6).",
      "Centuries later, a church leader named Arius taught that the Son was a created being. In AD 325 the Council of Nicaea chose the word homoousios, \"same being,\" to say clearly that the Son shares the one being of God.",
    ],
    people: [
      { name: "Arius", say: "AIR-ee-us", who: "A church leader in Alexandria, Egypt, who taught that the Son was created. His teaching is what the Council of Nicaea answered." },
      { name: "Athanasius", say: "ath-uh-NAY-shus", who: "A young assistant at Nicaea who later became bishop of Alexandria. He defended the Son's full divinity for decades and was sent into exile five times for it." },
    ],
    questions: [
      {
        q: "Does echad mean God is more than one person?",
        a: "Not by itself. It's the ordinary word for \"one,\" and Jewish readers have always read the Shema as confessing that God is one and unique. The word can describe a unity made of parts, as in \"one flesh,\" so it leaves room for what Christians later confessed. But Christians base their belief in the Trinity on how the whole Bible speaks of the Father, Son, and Spirit, not on this one word.",
      },
      {
        q: "Where do \"Trinity\" and homoousios come from, if they aren't Bible words?",
        a: "They're church words that sum up what many verses teach together. \"Trinity\" names the one God who is Father, Son, and Spirit. Homoousios, chosen at Nicaea in AD 325, says the Son is of the same being as the Father. Neither adds to Scripture. They put a fence around what it already says.",
      },
      {
        q: "Do all Christians believe this?",
        a: "Catholic, Orthodox, and Protestant churches all confess the Nicene Creed. It's one of the few statements of faith that nearly every Christian tradition shares.",
      },
    ],
  },

  // ── Essentials #5 · The Divine Dance · perichōrēsis ─────────────────────
  "1:5": {
    pronunciation: "peh-ree-koh-REE-sis",
    meaning: "Mutual indwelling. The Father, Son, and Spirit are each fully \"in\" the others.",
    wordNote:
      "Not a Bible word. It sounds like the Greek word for dancing, but the two come from different roots. The \"dance\" is a modern picture, not what the word meant.",
    verses: [
      { ref: "John 14:10-11", note: "Jesus: \"I am in the Father, and the Father is in Me.\"", usesWord: false },
      { ref: "John 17:21", note: "Jesus prays that His people will share in that same oneness.", usesWord: false },
      { ref: "John 10:38", note: "\"The Father is in Me, and I in the Father.\"", usesWord: false },
      { ref: "1 Corinthians 2:10-11", note: "The Spirit knows the deep things of God from the inside.", usesWord: false },
    ],
    story: [
      "Christians believed God is one and also Father, Son, and Spirit. They needed a way to say how three can be truly distinct without being three separate gods.",
      "In the 300s, Gregory of Nazianzus used a related word to describe how Jesus' divine and human natures belong together. Centuries later, John of Damascus, a monk writing near Jerusalem in the 700s, used perichōrēsis for the Trinity itself. Each Person is completely in the others, and none of them blurs into another.",
    ],
    people: [
      { name: "Gregory of Nazianzus", say: "nah-zee-AN-zus", who: "A bishop and theologian in the 300s, in what's now Turkey. He helped shape how the church talks about the Trinity." },
      { name: "John of Damascus", say: "duh-MASS-kus", who: "A monk and teacher in the 700s whose summary of Christian belief made this word well known." },
    ],
    questions: [
      {
        q: "So is the Trinity really a \"dance\"?",
        a: "The dance picture became popular in modern times because perichōrēsis sounds like the Greek word for dancing. The two words aren't related, and early Christians didn't describe the Trinity as a dance. The picture can still help, as long as it points to what the word does mean: the Father, Son, and Spirit living fully in one another, in love.",
      },
      {
        q: "How is this different from three gods working together?",
        a: "Three gods working together would be three separate beings who cooperate. Perichōrēsis says something much closer than that. Each Person is fully in the others, sharing one life and one being. That's why Christians say God is one, not three gods on the same team.",
      },
    ],
  },

  // ── Essentials #22 · Sin and the Fall · hamartia ──────────────────────
  "1:22": {
    pronunciation: "hah-mar-TEE-ah",
    meaning: "Sin. Wrongdoing against God and against His good design.",
    wordNote:
      "Centuries before the New Testament, the related verb could mean missing a target. By Paul's time, the word simply meant sin.",
    verses: [
      { ref: "Romans 5:12", note: "Sin entered the world through one man, and death through sin.", usesWord: true },
      { ref: "Romans 6:23", note: "\"The wages of sin is death, but the gift of God is eternal life.\"", usesWord: true },
      { ref: "John 1:29", note: "Jesus is \"the Lamb of God, who takes away the sin of the world.\"", usesWord: true },
      { ref: "1 John 1:8-9", note: "If we confess our sins, He is faithful to forgive.", usesWord: true },
    ],
    story: [
      "The story of the Fall is in Genesis 3. Adam and Eve trusted the serpent instead of God, and everything after that is affected: their relationship with God, with each other, and with the world.",
      "In the early 400s, a monk named Pelagius taught that people are born able to choose good on their own, without God's help first. Augustine, a bishop in North Africa, argued that sin runs so deep we need God's grace from the very start. Church councils rejected Pelagius's teaching. Catholic, Orthodox, and Protestant Christians all still agree with that.",
    ],
    people: [
      { name: "Pelagius", say: "peh-LAY-jee-us", who: "A monk, probably from Britain, who taught that people can choose good without God's grace first." },
      { name: "Augustine", say: "AW-gus-teen", who: "A bishop in North Africa in the 400s, one of the most influential Christian writers ever. He argued we need grace from the start." },
    ],
    questions: [
      {
        q: "Are we born guilty of Adam's sin?",
        a: "Christians agree on the heart of this: everyone is born into a broken world with a nature bent away from God, and everyone needs God's grace. Where they differ is on guilt. Some believe every person inherits Adam's guilt as well as his brokenness. Others believe we inherit the brokenness and death, but not the guilt of his particular sin. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Does \"missing the mark\" explain what sin is?",
        a: "It's a popular picture, and it's based on how a related word was used in much older Greek. By the time of the New Testament, the word just meant sin. The Bible's own descriptions go deeper than a missed target: sin is rebellion (Genesis 3), breaking God's law (1 John 3:4), and turning from God to go our own way (Isaiah 53:6).",
      },
    ],
  },

  // ── Essentials #36 · The Church · ekklēsia ────────────────────────────
  "1:36": {
    pronunciation: "ek-klay-SEE-ah",
    meaning: "An assembly. A gathering of people.",
    wordNote:
      "The word is built from \"out\" and \"call,\" so some teach it means \"called-out ones.\" In everyday Greek it just meant an assembly, like a town meeting.",
    verses: [
      { ref: "Matthew 16:18", note: "Jesus: \"I will build My church.\"", usesWord: true },
      { ref: "Acts 19:32, 39", note: "The same word for an angry crowd and a legal town assembly in Ephesus.", usesWord: true },
      { ref: "Ephesians 5:25", note: "\"Christ loved the church and gave Himself up for her.\"", usesWord: true },
      { ref: "Colossians 1:18", note: "Christ is the head of the body, the church.", usesWord: true },
    ],
    story: [
      "Long before Jesus, the Greek translation of the Old Testament used ekklēsia for the assembly of Israel gathered before God (Deuteronomy 9:10). So when the first believers called themselves the ekklēsia, they were saying they were God's people, gathered.",
      "It was never a word for a building. In its early years, the church mostly met in homes (Romans 16:5).",
      "The creed finished at Constantinople in AD 381, the one usually called the Nicene Creed, describes the church as \"one, holy, catholic, and apostolic.\" Here \"catholic\" means universal, the whole church everywhere. A bishop named Ignatius was already using the phrase \"the catholic church\" around AD 110.",
    ],
    people: [
      { name: "Ignatius of Antioch", say: "ig-NAY-shus", who: "A bishop who wrote letters to churches on his way to martyrdom in Rome, around AD 110. He's the first known writer to call it \"the catholic church.\"" },
    ],
    questions: [
      {
        q: "Why does the creed say \"catholic\"?",
        a: "Because the word means universal, the whole church in every place and time. It was in use long before the church divided into the traditions we know today. When Christians of many traditions say it in the creed, they mean the one worldwide family of believers.",
      },
      {
        q: "Is the church a building?",
        a: "Not in the Bible. Every time the New Testament uses the word, it means people. Paul greets \"the church that meets at their house\" (Romans 16:5). Buildings came later, as places for the church to gather.",
      },
    ],
  },

  // ── Essentials #40 · Discipleship · mathētēs ──────────────────────────
  "1:40": {
    pronunciation: "mah-thay-TAYS",
    meaning: "A disciple. A learner, a student, a follower.",
    wordNote:
      "The word was used for anyone learning under a teacher. The Gospels use it for Jesus' followers, and also for John the Baptist's and the Pharisees' followers (Mark 2:18).",
    verses: [
      { ref: "Matthew 28:19", note: "\"Go and make disciples of all nations\" uses the related verb.", usesWord: false },
      { ref: "John 8:31", note: "\"If you hold to My teaching, you are really My disciples.\"", usesWord: true },
      { ref: "Luke 14:27", note: "Whoever doesn't carry their cross \"cannot be My disciple.\"", usesWord: true },
      { ref: "Acts 11:26", note: "\"The disciples were called Christians first at Antioch.\"", usesWord: true },
    ],
    story: [
      "In Jesus' world, a disciple didn't just take notes. Disciples traveled with their teacher, ate with them, watched how they lived, and learned to do what they did.",
      "The word shows up over 250 times in the Gospels and Acts. In Acts, \"disciples\" is one of the main names for all believers. Then something surprising happens. The New Testament letters never use it. They say \"brothers and sisters,\" \"saints,\" and \"believers\" instead.",
    ],
    questions: [
      {
        q: "Is the word \"discipleship\" in the Bible?",
        a: "The English word isn't. The Bible uses \"disciple\" (mathētēs) and the verb \"make disciples\" (Matthew 28:19). \"Discipleship\" is a helpful word Christians use for the whole life of following Jesus as His disciple.",
      },
      {
        q: "Why do the letters stop using \"disciple\"?",
        a: "The New Testament doesn't say. Some think the letters simply use family words, like \"brothers and sisters,\" because they're written to churches that already know each other. What's clear is that the idea doesn't disappear. Paul still writes, \"Follow my example, as I follow the example of Christ\" (1 Corinthians 11:1).",
      },
    ],
  },
};

export function getCreedGoDeeper(card: Pick<CreedCard, "id" | "deckId">): CreedGoDeeper | null {
  return ENTRIES[`${card.deckId ?? 1}:${card.id}`] ?? null;
}

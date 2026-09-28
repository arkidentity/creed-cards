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
      { ref: "Mark 12:29", note: "Asked which commandment is most important, Jesus starts with the Shema.", usesWord: false },
      { ref: "1 Corinthians 8:6", note: "\"One God, the Father… and one Lord, Jesus Christ.\" Paul seems to echo the Shema, with Jesus included in its one Lord.", usesWord: false },
    ],
    story: [
      "The Shema, named for its first word, \"Hear,\" is Israel's central confession. By the first century, Jews were praying it every morning and evening, and faithful Jews still do. In a world full of gods, it said there is one.",
      "The first Christians were Jews who kept praying the Shema while worshiping Jesus. Paul even seems to echo its words to include Jesus within the one Lord (1 Corinthians 8:6).",
      "Centuries later, a church leader named Arius taught that the Son was a created being. In AD 325 the Council of Nicaea chose the word homoousios, \"same being,\" to say clearly that the Son shares the one being of God.",
    ],
    people: [
      { name: "Arius", say: "AIR-ee-us", who: "A church leader in Alexandria, Egypt, who taught that the Son was created. His teaching is what the Council of Nicaea answered." },
      { name: "Athanasius", say: "ath-uh-NAY-shus", who: "A young deacon who went to Nicaea with his bishop and later became bishop of Alexandria himself. He defended the Son's full divinity for decades and was sent into exile five times for it." },
    ],
    questions: [
      {
        q: "Does echad mean God is more than one person?",
        a: "Not by itself. It's the ordinary word for \"one,\" and Jewish readers have long read the Shema as confessing that God is one and unique. The word can describe a unity made of parts, as in \"one flesh,\" so it leaves room for what Christians later confessed. But Christians base their belief in the Trinity on how the whole Bible speaks of the Father, Son, and Spirit, not on this one word.",
      },
      {
        q: "Where do \"Trinity\" and homoousios come from, if they aren't Bible words?",
        a: "They're church words that sum up what many verses teach together. \"Trinity\" names the one God who is Father, Son, and Spirit. Homoousios, chosen at Nicaea in AD 325, says the Son is of the same being as the Father. Neither adds to Scripture. They put a fence around what it already says.",
      },
      {
        q: "Do all Christians believe this?",
        a: "Catholic, Orthodox, and Protestant churches all accept the Nicene Creed. It's one of the few statements of faith that nearly every Christian tradition shares.",
      },
    ],
  },

  // ── Essentials #2 · God the Father · patēr ────────────────────────────
  "1:2": {
    pronunciation: "pah-TAIR",
    meaning: "Father. The name Jesus used most for God.",
    wordNote:
      "Patēr is the everyday Greek word for a father. In Gethsemane, Jesus prays with the Aramaic word Abba, and Mark gives it as \"Abba! Father!\" (Mark 14:36).",
    verses: [
      { ref: "Ephesians 1:3", note: "\"The God and Father of our Lord Jesus Christ.\"", usesWord: true },
      { ref: "Matthew 6:9", note: "Jesus teaches His followers to pray \"Our Father.\"", usesWord: true },
      { ref: "Romans 8:15", note: "The Spirit leads believers to cry out, \"Abba! Father!\"", usesWord: true },
      { ref: "Isaiah 63:16", note: "\"You, O Lord, are our Father.\" The Old Testament uses the name only now and then.", usesWord: false },
    ],
    story: [
      "The Old Testament calls God Father only occasionally, usually as the Father of the whole nation of Israel (Deuteronomy 32:6; Malachi 2:10). Jesus speaks of God as His Father all the time. John's Gospel alone uses the word for God more than a hundred times.",
      "Jesus then shared that name with His followers. He taught them to pray \"Our Father,\" and after He rose He said, \"I ascend to My Father and your Father\" (John 20:17).",
      "The earliest creeds open with the same name. The Apostles' Creed begins, \"I believe in God, the Father Almighty.\"",
    ],
    questions: [
      {
        q: "Does Abba mean \"Daddy\"?",
        a: "Not quite. It's a popular picture, but Abba was the word both children and grown adults used for their father in Aramaic, the language Jesus usually spoke. It's warm and close, but it isn't baby talk. Each of the three times it appears in the New Testament, it comes paired with the ordinary word for \"Father\" (Mark 14:36; Romans 8:15; Galatians 4:6).",
      },
      {
        q: "Is God male?",
        a: "No. Christians agree that God is spirit (John 4:24) and isn't male or female. The Bible also uses a mother's love to picture God's care (Isaiah 49:15; Isaiah 66:13), and Jesus compares Himself to a hen gathering her chicks (Matthew 23:37). \"Father\" is the name Jesus used and taught, and it describes a relationship rather than a gender.",
      },
      {
        q: "What if my own father hurt me?",
        a: "Then \"Father\" may be a hard word, and that's not a failure of faith. God isn't a copy of any human father. The Bible pictures Him as a Father who has compassion on His children (Psalm 103:13). If that pain is still with you, please talk with someone you trust, like a pastor, your group leader, or a counselor.",
      },
    ],
  },

  // ── Essentials #3 · God the Son · huios tou Theou ─────────────────────
  "1:3": {
    pronunciation: "hwee-OSS too theh-OO",
    meaning: "Son of God. It names Jesus' unique relationship with the Father.",
    wordNote:
      "In the Old Testament, \"son of God\" could be used for angels (Job 1:6), for Israel (Exodus 4:22), and for Israel's king (Psalm 2:7). The New Testament uses it of Jesus in a way no one else shares.",
    verses: [
      { ref: "John 20:31", note: "John wrote so readers would believe Jesus is \"the Christ, the Son of God.\"", usesWord: true },
      { ref: "Matthew 16:16", note: "Peter: \"You are the Christ, the Son of the living God.\"", usesWord: true },
      { ref: "Luke 1:35", note: "The angel tells Mary her child \"shall be called the Son of God.\"", usesWord: true },
      { ref: "Hebrews 1:5", note: "Quotes Psalm 2:7 and 2 Samuel 7:14, promises about David's line, and applies them to Jesus.", usesWord: false },
    ],
    story: [
      "God promised King David a son whose throne would last forever: \"I will be a father to him and he will be a son to Me\" (2 Samuel 7:14). The kings from David's line were called God's sons in that sense. The New Testament says Jesus fulfills that promise and goes beyond it (Hebrews 1:5).",
      "In the 300s, Arius taught that the Son was created, so there was a time when He didn't exist. The Council of Nicaea answered in AD 325 that the Son is \"begotten, not made.\" The creed finished at Constantinople in AD 381 adds that He is begotten \"before all ages.\" The Son is God's Son forever. He had no starting point.",
    ],
    questions: [
      {
        q: "Does \"firstborn of all creation\" mean Jesus was created?",
        a: "Christians across traditions answer no. In the Bible, \"firstborn\" can mean first in rank. God calls David His \"firstborn, the highest of the kings of the earth\" (Psalm 89:27), and David was the youngest son in his family. The very next verse says all things were created by the Son (Colossians 1:16), so He can't be one of the things created.",
      },
      {
        q: "What does \"begotten\" mean?",
        a: "To beget is to father a child. It means the child shares the father's nature. A person begets a person, and God's Son is God. The creed says the Son is \"begotten, not made\" because what you make can be different from you, like a carpenter and a chair. Some Bibles translate John 3:16 as \"only begotten Son,\" and others as \"one and only Son.\" Both say He is Son in a way no one else is.",
      },
    ],
  },

  // ── Essentials #4 · God the Holy Spirit · pneuma hagion ───────────────
  "1:4": {
    pronunciation: "PNYOO-mah HAH-gee-on",
    meaning: "Holy Spirit. God Himself, present and at work.",
    wordNote:
      "Pneuma can mean spirit, wind, or breath, like the Hebrew ruach. Jesus plays on both senses in John 3:8: \"The wind blows where it wishes… so is everyone who is born of the Spirit.\"",
    verses: [
      { ref: "John 14:26", note: "Jesus promises the Helper, the Holy Spirit, whom the Father will send.", usesWord: true },
      { ref: "Acts 2:4", note: "At Pentecost, \"they were all filled with the Holy Spirit.\"", usesWord: true },
      { ref: "Matthew 28:19", note: "Baptism \"in the name of the Father and the Son and the Holy Spirit.\"", usesWord: true },
      { ref: "Acts 5:3-4", note: "Lying to the Holy Spirit is called lying to God.", usesWord: true },
    ],
    story: [
      "The Spirit is there from the first page: the Spirit of God was \"moving over the surface of the waters\" (Genesis 1:2). But the exact phrase \"Holy Spirit\" appears only in Psalm 51:11 and Isaiah 63:10-11 in the Old Testament.",
      "The prophet Joel promised a day when God would \"pour out My Spirit on all mankind\" (Joel 2:28). At Pentecost, a Jewish harvest festival about fifty days after Passover, Peter stood up and said that day had come (Acts 2:16-17).",
      "In the 300s, some Christians who accepted that Jesus was God still said the Spirit was something less. Basil of Caesarea wrote a book defending the Spirit's full divinity. Two years after he died, the council at Constantinople in AD 381 agreed: the Spirit is \"worshiped and glorified together with the Father and the Son.\"",
    ],
    people: [
      { name: "Basil of Caesarea", say: "BAZ-il of sess-uh-REE-uh", who: "A bishop in the 300s in what's now Turkey. His book On the Holy Spirit shaped what the council at Constantinople said." },
    ],
    questions: [
      {
        q: "Is the Holy Spirit a person or a force?",
        a: "Christians across traditions confess the Spirit as a person. The Bible says the Spirit teaches (John 14:26), can be grieved (Ephesians 4:30), and can be lied to (Acts 5:3-4). Those are things you say about someone, not something. The pictures of wind, fire, and breath show what the Spirit does. They don't turn the Spirit into a thing.",
      },
      {
        q: "Does the Spirit come from the Father, or from the Father and the Son?",
        a: "Christians agree on the heart of this: the Spirit is fully God, and Jesus says He will send the Spirit \"from the Father\" (John 15:26). The creed of AD 381 says the Spirit \"proceeds from the Father.\" Centuries later, churches in western Europe added \"and the Son,\" and churches in the east objected. Some Christians believe the Spirit's eternal origin is in the Father alone, and others believe it is in the Father and the Son together. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #6 · The Creator God · bara Elohim ─────────────────────
  "1:6": {
    pronunciation: "bah-RAH eh-loh-HEEM",
    meaning: "God created. The first words of the Bible after \"In the beginning.\"",
    wordNote:
      "When bara means \"create,\" God is always the one doing it. People make things in the Bible, but they never bara. Elohim is plural in form, yet here it takes a singular verb, because it names the one God of Israel.",
    verses: [
      { ref: "Genesis 1:1", note: "\"In the beginning God created the heavens and the earth.\"", usesWord: true },
      { ref: "Genesis 1:27", note: "Bara appears three times in one verse, for the making of humans.", usesWord: true },
      { ref: "John 1:3", note: "\"All things came into being through Him,\" the Word who became flesh.", usesWord: false },
      { ref: "Hebrews 11:3", note: "\"What is seen was not made out of things which are visible.\"", usesWord: false },
    ],
    story: [
      "Again and again in Genesis 1, God sees that what He made is good. At the end of the sixth day, it's \"very good\" (Genesis 1:31). Matter, bodies, and the physical world are His good work.",
      "By the 100s, some teachers said the opposite. A set of groups later called Gnostics, from the Greek word for \"knowledge,\" taught, in different ways, that the physical world was made by a lesser god. A teacher named Marcion said the God of the Old Testament was a different god from the Father of Jesus.",
      "Irenaeus, a bishop in what is now France, answered them around AD 180. The one true God made everything, and the same God is the Father of Jesus. The Nicene Creed later put it in one line: \"maker of heaven and earth, of all things visible and invisible.\"",
    ],
    people: [
      { name: "Marcion", say: "MAR-see-on", who: "A teacher in Rome in the mid-100s who rejected the Old Testament and its God. The church sent him away." },
      { name: "Irenaeus", say: "eye-ruh-NAY-us", who: "A bishop of Lyon, in what is now France, around AD 180. His long book against the Gnostics is one of our best windows into the early church." },
    ],
    questions: [
      {
        q: "Did God make everything from nothing?",
        a: "Christians across traditions believe so. Genesis 1:1 is read that way by most Bibles, though a few translate it \"When God began to create.\" Other passages say it more plainly. The visible world wasn't made from visible things (Hebrews 11:3), and God \"calls into being that which does not exist\" (Romans 4:17). Nothing existed alongside God for Him to work with.",
      },
      {
        q: "How long did creation take? How old is the earth?",
        a: "Christians agree on the heart of this: God made everything, He made it good, and He made people in His image. Where they differ is on how to read the days of Genesis 1. Some read them as six ordinary days, not long ago. Others read them as long ages, or as a way of arranging the story in a pattern that isn't meant to be a timeline. Many hold that God worked through long natural processes. Faithful Christians hold each of these views. It's a good one to talk through with your group.",
      },
    ],
  },

  // ── Essentials #7 · Imago Dei · tselem Elohim ─────────────────────────
  "1:7": {
    pronunciation: "ih-MAH-go DAY-ee",
    meaning: "The image of God. What every human being was made to be and to show.",
    wordNote:
      "Imago Dei is the Latin Bible's wording of Genesis 1:27. The Hebrew is tselem Elohim (TSEH-lem eh-loh-HEEM). Elsewhere tselem often means a statue, like the gold image in Daniel 3:1.",
    verses: [
      { ref: "Genesis 1:26-27", note: "God makes people \"in Our image, according to Our likeness,\" male and female.", usesWord: true },
      { ref: "Genesis 9:6", note: "After the flood, murder is wrong because people are still made in God's image.", usesWord: true },
      { ref: "James 3:9", note: "We curse people \"who have been made in the likeness of God.\"", usesWord: false },
      { ref: "Colossians 1:15", note: "Jesus is \"the image of the invisible God.\"", usesWord: false },
    ],
    story: [
      "In the ancient world, kings set up statues of themselves in the lands they ruled. Many scholars think Genesis draws on that picture. God put living images of Himself in His world to show who it belongs to and to care for it (Genesis 1:28).",
      "The New Testament calls Jesus the image of God (Colossians 1:15; 2 Corinthians 4:4). It says God's people are being shaped into His image (Romans 8:29; 2 Corinthians 3:18).",
    ],
    people: [
      { name: "Irenaeus", say: "eye-ruh-NAY-us", who: "A bishop in what is now France around AD 180. He taught that people kept the image of God after the Fall but lost the likeness, and that Christ restores it." },
    ],
    questions: [
      {
        q: "Are \"image\" and \"likeness\" two different things?",
        a: "Christians agree that every person bears God's image. They read the two words in different ways. Some early teachers, like Irenaeus, saw two things: the image we keep, and a likeness to God that was lost and is restored in Christ. Many others read them as Hebrew poetry saying one thing twice. Genesis 5:1-3 uses them in both orders. Both readings have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "What exactly is the image of God in us?",
        a: "The Bible doesn't give a one-line definition. Christians have pointed to three things, and many hold all of them together. First, what we're able to do: think, love, choose, and know God. Second, the job we were given: to care for the world on God's behalf (Genesis 1:28). Third, how we were made: for relationship, as \"male and female\" (Genesis 1:27).",
      },
      {
        q: "Did sin destroy the image?",
        a: "No. After the Fall and the flood, Genesis 9:6 still says people are made in God's image, and James 3:9 says the same about people in his day. Sin damages how we reflect God, but every person still bears His image.",
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
      "In the 300s, Gregory of Nazianzus used a related word to describe how Jesus' divine and human natures belong together. Centuries later, John of Damascus, a monk writing near Jerusalem in the 700s, made perichōrēsis the well-known word for the Trinity itself. Each Person is completely in the others, and none of them blurs into another.",
    ],
    people: [
      { name: "Gregory of Nazianzus", say: "nah-zee-AN-zus", who: "A bishop and theologian in the 300s, in what's now Turkey. He helped shape how the church talks about the Trinity." },
      { name: "John of Damascus", say: "duh-MASS-kus", who: "A monk and teacher in the 700s whose summary of Christian belief made this word well known." },
    ],
    questions: [
      {
        q: "So is the Trinity really a \"dance\"?",
        a: "The dance picture became popular in modern times because perichōrēsis sounds like the Greek word for dancing. The two words aren't related, and no early Christian writer we know of pictured the Trinity as a dance. The picture can still help, as long as it points to what the word does mean: the Father, Son, and Spirit living fully in one another, in love.",
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
      "The story of the Fall is in Genesis 3. Eve listened to the serpent instead of God, Adam ate with her, and everything after that is affected: their relationship with God, with each other, and with the world.",
      "In the early 400s, a monk named Pelagius taught that people are born able to choose good on their own. He believed God helps through His law and Jesus' example, but not with an inner grace we need first. Augustine, a bishop in North Africa, argued that sin runs so deep we need God's grace from the very start. Church councils rejected Pelagius's teaching, and Christians across traditions still do.",
    ],
    people: [
      { name: "Pelagius", say: "peh-LAY-jee-us", who: "A monk, probably from Britain, who taught that people can choose good without God's grace first." },
      { name: "Augustine", say: "AW-gus-teen", who: "A bishop in North Africa from the 390s until 430, one of the most influential Christian writers ever. He argued we need grace from the start." },
    ],
    questions: [
      {
        q: "Are we born guilty of Adam's sin?",
        a: "Christians agree on the heart of this: everyone is born into a broken world with a nature bent away from God, and everyone needs God's grace. Where they differ is on guilt. Some believe every person inherits Adam's guilt as well as his brokenness. Others believe we inherit the brokenness and death, but not the guilt of his particular sin. Both views have deep roots in church history. It's a good one to talk through with your group.",
      },
      {
        q: "Does \"missing the mark\" explain what sin is?",
        a: "It's a popular picture, and it's based on how a related word was used in much older Greek. By the time of the New Testament, the word just meant sin. The Bible's own descriptions go deeper than a missed target: sin is distrusting God and doing what He said not to (Genesis 3), breaking God's law (1 John 3:4), and turning from God to go our own way (Isaiah 53:6).",
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
      "It was never a word for a building. In its early years, the church mostly met in homes (Romans 16:5). In Jerusalem, believers also gathered in the temple courts (Acts 2:46).",
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
      { ref: "John 8:31", note: "\"If you continue in My word, then you are truly disciples of Mine.\"", usesWord: true },
      { ref: "Luke 14:27", note: "Whoever doesn't carry their cross \"cannot be My disciple.\"", usesWord: true },
      { ref: "Acts 11:26", note: "\"The disciples were called Christians first at Antioch.\"", usesWord: true },
    ],
    story: [
      "Jesus' disciples didn't just take notes. They traveled with Him, ate with Him, watched how He lived, and were sent out to do what He did (Mark 3:14; Luke 9:1-2).",
      "The word shows up over 250 times in the Gospels and Acts. In Acts, \"disciples\" is one of the main names for all believers. Then something surprising happens. The New Testament letters, and Revelation, never use it. They say \"brothers and sisters,\" \"saints,\" and \"believers\" instead.",
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

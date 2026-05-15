import { CARD_DATA, type CreedCard } from "./cardData";
import { type QuizQuestion, type L3Question, DECK1_L3_QUESTIONS } from "./quizData";

const QUESTIONS_PER_QUIZ = 20;

// ─── Utilities ────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick `count` random cards from the deck, excluding `excludeId`. */
function pickOtherCards(excludeId: number, count = 3): CreedCard[] {
  return shuffle(CARD_DATA.filter((c) => c.id !== excludeId)).slice(0, count);
}

/** Shuffle correct answer into 4 options, return options array + correct index. */
function buildOptions(
  correct: string,
  distractors: string[]
): { options: string[]; correctIndex: number } {
  const all = shuffle([correct, ...distractors.slice(0, 3)]);
  return { options: all, correctIndex: all.indexOf(correct) };
}

// ─── Level 1 Generators ───────────────────────────────────────────────────────
// Surface recognition: titles, terms, categories

function genL1_ShortDescToTitle(card: CreedCard): QuizQuestion {
  const distractors = pickOtherCards(card.id).map((c) => c.title);
  const { options, correctIndex } = buildOptions(card.title, distractors);
  return {
    id: `l1-a-${card.id}`,
    cardId: card.id,
    question: `Which card is described as "${card.shortDesc}"?`,
    options,
    correctIndex,
    explanation: `"${card.shortDesc}" is the short description for the ${card.title} card.`,
  };
}

function genL1_TermToTitle(card: CreedCard): QuizQuestion | null {
  if (!card.translation) return null;
  const distractors = pickOtherCards(card.id).map((c) => c.title);
  const { options, correctIndex } = buildOptions(card.title, distractors);
  return {
    id: `l1-b-${card.id}`,
    cardId: card.id,
    question: `Which card uses the ${card.termLabel} term "${card.translation}"?`,
    options,
    correctIndex,
    explanation: `"${card.translation}" is the term on the ${card.title} card.`,
  };
}

function genL1_EnglishMeaning(card: CreedCard): QuizQuestion | null {
  if (!card.englishMeaning || !card.translation) return null;
  const distractorCards = shuffle(
    CARD_DATA.filter((c) => c.id !== card.id && c.englishMeaning && c.englishMeaning !== card.englishMeaning)
  ).slice(0, 3);
  if (distractorCards.length < 3) return null;
  const { options, correctIndex } = buildOptions(
    card.englishMeaning,
    distractorCards.map((c) => c.englishMeaning!)
  );
  return {
    id: `l1-c-${card.id}`,
    cardId: card.id,
    question: `What does the term "${card.translation}" mean in English?`,
    options,
    correctIndex,
    explanation: `"${card.translation}" means "${card.englishMeaning}" — the term on the ${card.title} card.`,
  };
}

function genL1_CategorySort(card: CreedCard): QuizQuestion {
  const allCategories = [...new Set(CARD_DATA.map((c) => c.category))];
  const otherCategories = shuffle(
    allCategories.filter((cat) => cat !== card.category)
  ).slice(0, 3);
  const { options, correctIndex } = buildOptions(card.category, otherCategories);
  return {
    id: `l1-d-${card.id}`,
    cardId: card.id,
    question: `Which category does "${card.title}" belong to?`,
    options,
    correctIndex,
    explanation: `${card.title} belongs to the "${card.category}" category.`,
  };
}

// ─── Level 2 Generators ───────────────────────────────────────────────────────
// Content mastery: definitions, scriptures, references

function genL2_ScriptureToTitle(card: CreedCard): QuizQuestion {
  const words = card.scripture.split(" ").slice(0, 14).join(" ");
  const excerpt = words + (card.scripture.split(" ").length > 14 ? "…" : "");
  const distractors = pickOtherCards(card.id).map((c) => c.title);
  const { options, correctIndex } = buildOptions(card.title, distractors);
  return {
    id: `l2-a-${card.id}`,
    cardId: card.id,
    question: `Which card's key verse begins: "${excerpt}"`,
    options,
    correctIndex,
    explanation: `This verse (${card.reference}) is the key scripture for the ${card.title} card.`,
  };
}

function genL2_ReferenceToTitle(card: CreedCard): QuizQuestion {
  const distractors = pickOtherCards(card.id).map((c) => c.title);
  const { options, correctIndex } = buildOptions(card.title, distractors);
  return {
    id: `l2-b-${card.id}`,
    cardId: card.id,
    question: `${card.reference} is the key verse for which card?`,
    options,
    correctIndex,
    explanation: `${card.reference} is the key scripture on the ${card.title} card.`,
  };
}

function genL2_DefinitionToTitle(card: CreedCard): QuizQuestion {
  const sentences = card.definition.split(/(?<=[.!?])\s+/);
  const excerpt = sentences[0].trim();
  const distractors = pickOtherCards(card.id).map((c) => c.title);
  const { options, correctIndex } = buildOptions(card.title, distractors);
  return {
    id: `l2-c-${card.id}`,
    cardId: card.id,
    question: `Which card's definition begins: "${excerpt}"`,
    options,
    correctIndex,
    explanation: `This opening line is from the definition of the ${card.title} card.`,
  };
}

function genL2_TermMeaning(card: CreedCard): QuizQuestion | null {
  if (!card.englishMeaning || !card.translation) return null;
  const distractorCards = shuffle(
    CARD_DATA.filter((c) => c.id !== card.id && c.englishMeaning && c.englishMeaning !== card.englishMeaning)
  ).slice(0, 3);
  if (distractorCards.length < 3) return null;
  const { options, correctIndex } = buildOptions(
    card.englishMeaning,
    distractorCards.map((c) => c.englishMeaning!)
  );
  return {
    id: `l2-d-${card.id}`,
    cardId: card.id,
    question: `On the ${card.title} card, the ${card.termLabel} term "${card.translation}" means:`,
    options,
    correctIndex,
    explanation: `"${card.translation}" translates to "${card.englishMeaning}" on the ${card.title} card.`,
  };
}

// ─── Level 3 Generators ───────────────────────────────────────────────────────
// Deep understanding: historical context and cross-card connections

function genL3_NotInCategory(card: CreedCard): QuizQuestion {
  // Show 3 cards from card's category + 1 outsider; ask which doesn't belong
  const sameCategory = shuffle(
    CARD_DATA.filter((c) => c.categorySlug === card.categorySlug && c.id !== card.id)
  ).slice(0, 2);
  const outsider = shuffle(
    CARD_DATA.filter((c) => c.categorySlug !== card.categorySlug)
  )[0];
  const allOptions = shuffle([...sameCategory.map((c) => c.title), outsider.title, card.title]);
  return {
    id: `l3-p-${card.id}`,
    cardId: card.id,
    question: `Which of these cards does NOT belong to the "${card.category}" category?`,
    options: allOptions,
    correctIndex: allOptions.indexOf(outsider.title),
    explanation: `${outsider.title} belongs to a different category. The others — including ${card.title} — are all in "${card.category}."`,
  };
}

function genL3_SameCategory(card: CreedCard): QuizQuestion | null {
  const sameCategory = CARD_DATA.filter(
    (c) => c.categorySlug === card.categorySlug && c.id !== card.id
  );
  if (sameCategory.length < 1) return null;
  const partner = shuffle(sameCategory)[0];
  const outsiders = shuffle(
    CARD_DATA.filter((c) => c.categorySlug !== card.categorySlug)
  ).slice(0, 3);
  if (outsiders.length < 3) return null;
  const { options, correctIndex } = buildOptions(
    partner.title,
    outsiders.map((c) => c.title)
  );
  return {
    id: `l3-q-${card.id}`,
    cardId: card.id,
    question: `Which card shares a category with "${card.title}"?`,
    options,
    correctIndex,
    explanation: `${card.title} and ${partner.title} are both in the "${card.category}" category.`,
  };
}

// Convert an L3Question (hand-authored) into QuizQuestion shape
function l3ToQuizQuestion(q: L3Question): QuizQuestion {
  return {
    id: q.id,
    cardId: q.cardId,
    question: q.question,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
  };
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Generate a randomized bank of Level 1 questions for a deck, then draw `count`. */
export function generateLevel1Questions(
  deckId: number,
  count = QUESTIONS_PER_QUIZ
): QuizQuestion[] {
  const cards = shuffle([...CARD_DATA]);
  const bank: QuizQuestion[] = [];

  for (const card of cards) {
    bank.push(genL1_ShortDescToTitle(card));

    const term = genL1_TermToTitle(card);
    if (term) bank.push(term);

    const meaning = genL1_EnglishMeaning(card);
    if (meaning) bank.push(meaning);

    bank.push(genL1_CategorySort(card));
  }

  return shuffle(bank).slice(0, count);
}

/** Generate a randomized bank of Level 2 questions for a deck, then draw `count`. */
export function generateLevel2Questions(
  deckId: number,
  count = QUESTIONS_PER_QUIZ
): QuizQuestion[] {
  const cards = shuffle([...CARD_DATA]);
  const bank: QuizQuestion[] = [];

  for (const card of cards) {
    bank.push(genL2_ScriptureToTitle(card));
    bank.push(genL2_ReferenceToTitle(card));
    bank.push(genL2_DefinitionToTitle(card));

    const termQ = genL2_TermMeaning(card);
    if (termQ) bank.push(termQ);
  }

  return shuffle(bank).slice(0, count);
}

/** Generate a randomized bank of Level 3 questions for a deck, then draw `count`.
 *  Mixes programmatic (category logic) + hand-authored (historical/cross-card) questions. */
export function generateLevel3Questions(
  deckId: number,
  count = QUESTIONS_PER_QUIZ
): QuizQuestion[] {
  const authored = deckId === 1 ? DECK1_L3_QUESTIONS.map(l3ToQuizQuestion) : [];
  const cards = shuffle([...CARD_DATA]);
  const programmatic: QuizQuestion[] = [];

  for (const card of cards) {
    programmatic.push(genL3_NotInCategory(card));
    const same = genL3_SameCategory(card);
    if (same) programmatic.push(same);
  }

  // Prefer authored questions; fill remainder with programmatic
  const combined = shuffle([...shuffle(authored), ...shuffle(programmatic)]);
  // Deduplicate by question id prefix to avoid repeating same card twice
  const seen = new Set<number>();
  const deduped: QuizQuestion[] = [];
  for (const q of combined) {
    if (!seen.has(q.cardId) || deduped.length < authored.length) {
      deduped.push(q);
      seen.add(q.cardId);
    }
    if (deduped.length >= count * 3) break; // large enough pool
  }

  return shuffle(deduped).slice(0, count);
}

export function generateQuestions(
  deckId: number,
  level: 1 | 2 | 3,
  count = QUESTIONS_PER_QUIZ
): QuizQuestion[] {
  if (level === 1) return generateLevel1Questions(deckId, count);
  if (level === 2) return generateLevel2Questions(deckId, count);
  return generateLevel3Questions(deckId, count);
}

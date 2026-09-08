// Quiz engine — draws questions from the authored bank (`lib/quiz/`).
// Design + rationale: `QUIZ-REDESIGN.md`.
//
// Public API is unchanged: `generateQuestions(deckId, level, count)` returning
// `QuizQuestion[]`, so `components/quiz/QuizSession.tsx` is untouched.

import { type QuizQuestion } from "./quizData";
import { getBank, type QuizItem, type QuizLevel } from "./quiz/bank";

const QUESTIONS_PER_QUIZ = 12;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Shuffle an authored item's four options, tracking where the answer lands. */
function shuffleOptions(options: string[], correctIndex: number) {
  const order = shuffle(options.map((_, i) => i));
  return {
    options: order.map((i) => options[i]),
    correctIndex: order.indexOf(correctIndex),
  };
}

function toQuizQuestion(item: QuizItem): QuizQuestion {
  const { options, correctIndex } = shuffleOptions(item.options, item.correctIndex);
  return {
    id: item.id,
    cardId: item.cardIds[0],
    question: item.question,
    options,
    correctIndex,
    explanation: item.explanation,
  };
}

/**
 * Draw `count` questions from deck `deckId`'s authored bank for `level`.
 * - fresh shuffle each call, so a retake is a different subset
 * - options are re-shuffled per attempt (answer isn't always in slot A)
 * - no primary card appears more than twice in one attempt, while the bank
 *   still has room to honour that
 */
export function generateQuestions(
  deckId: number,
  level: QuizLevel,
  count = QUESTIONS_PER_QUIZ
): QuizQuestion[] {
  const bank = shuffle(getBank(deckId, level));
  const picked: QuizItem[] = [];
  const pickedIds = new Set<string>();
  const perCard = new Map<number, number>();

  const take = (respectCap: boolean) => {
    for (const item of bank) {
      if (picked.length >= count) return;
      if (pickedIds.has(item.id)) continue;
      const primary = item.cardIds[0];
      if (respectCap && (perCard.get(primary) ?? 0) >= 2) continue;
      pickedIds.add(item.id);
      picked.push(item);
      perCard.set(primary, (perCard.get(primary) ?? 0) + 1);
    }
  };

  take(true);
  if (picked.length < count) take(false); // tiny bank fallback

  return picked.slice(0, count).map(toQuizQuestion);
}

export interface QuizQuestion {
  id: string;
  cardId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DeckQuiz {
  deckId: number;
  deckName: string;
  questions: QuizQuestion[];
}

export const DECK_QUIZZES: DeckQuiz[] = [
  {
    deckId: 1,
    deckName: "Core Christian Doctrines",
    questions: [],
  },
];

export function getQuizForDeck(deckId: number): DeckQuiz | undefined {
  return DECK_QUIZZES.find((d) => d.deckId === deckId);
}

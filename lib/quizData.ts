/** Shape consumed by the quiz UI (`components/quiz/QuizSession.tsx`).
 *  The engine (`lib/quizEngine.ts`) builds these from the authored bank in
 *  `lib/quiz/`. Options are always exactly 4; `correctIndex` is 0–3. */
export interface QuizQuestion {
  id: string;
  cardId: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

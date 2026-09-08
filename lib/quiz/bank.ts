// Authored quiz banks, per deck. The Deck 1 items live in `deck1Bank.ts`,
// generated from `QUIZ-BANK-DECK1.md` by `scripts/gen-quiz-bank.ts`.
//
// Design: `QUIZ-REDESIGN.md`. Three levels —
//   1  Words & Meaning
//   2  Scripture & History
//   3  Connections

export type QuizLevel = 1 | 2 | 3;

export interface QuizItem {
  id: string;
  deckId: number;
  level: QuizLevel;
  /** Card(s) this item reinforces. First entry is the primary card. */
  cardIds: number[];
  question: string;
  /** Exactly four, in authored order. */
  options: string[];
  correctIndex: number;
  /** Always shown after answering; teaches. */
  explanation: string;
}

import { DECK1_BANK } from "./deck1Bank";

/** deckId → authored items. Only decks with a written bank appear here. */
export const DECK_BANKS: Record<number, QuizItem[]> = {
  1: DECK1_BANK,
};

export function getBank(deckId: number, level: QuizLevel): QuizItem[] {
  return (DECK_BANKS[deckId] ?? []).filter((it) => it.level === level);
}

/** Whether a deck has an authored bank for every level (1–3). */
export function deckBankReady(deckId: number): boolean {
  const bank = DECK_BANKS[deckId];
  if (!bank) return false;
  return [1, 2, 3].every((lvl) => bank.some((it) => it.level === lvl));
}

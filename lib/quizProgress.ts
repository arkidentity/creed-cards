export interface QuizResult {
  score: number;
  total: number;
  pct: number;
  date: string;       // ISO date of last attempt (YYYY-MM-DD)
  bestScore: number;
  bestPct: number;
  attempts: number;
}

function storageKey(deckId: number, level: number): string {
  return `creedcards_quiz_deck_${deckId}_lvl_${level}`;
}

function safeGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
}

function safeSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
}

export function getQuizResult(deckId: number, level: number): QuizResult | null {
  const raw = safeGet(storageKey(deckId, level));
  if (!raw) return null;
  try {
    return JSON.parse(raw) as QuizResult;
  } catch {
    return null;
  }
}

export function saveQuizResult(
  deckId: number,
  level: number,
  score: number,
  total: number
): QuizResult {
  const pct = Math.round((score / total) * 100);
  const existing = getQuizResult(deckId, level);
  const result: QuizResult = {
    score,
    total,
    pct,
    date: new Date().toISOString().split("T")[0],
    bestScore: Math.max(score, existing?.bestScore ?? 0),
    bestPct: Math.max(pct, existing?.bestPct ?? 0),
    attempts: (existing?.attempts ?? 0) + 1,
  };
  safeSet(storageKey(deckId, level), JSON.stringify(result));
  return result;
}

export function hasAttemptedQuiz(deckId: number, level: number): boolean {
  return getQuizResult(deckId, level) !== null;
}

export function getScoreBadge(pct: number): { label: string; color: string } {
  if (pct >= 90) return { label: "Master", color: "#e8b562" };
  if (pct >= 75) return { label: "Proficient", color: "#22c55e" };
  if (pct >= 50) return { label: "Learning", color: "#60a5fa" };
  return { label: "Keep Going", color: "#8b95a8" };
}

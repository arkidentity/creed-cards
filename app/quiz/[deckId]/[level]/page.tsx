import { QuizSession } from "./QuizSession";

export default async function QuizLevelPage({
  params,
}: {
  params: Promise<{ deckId: string; level: string }>;
}) {
  const { deckId, level } = await params;
  const numericLevel = parseInt(level) as 1 | 2 | 3;
  const validLevel = [1, 2, 3].includes(numericLevel) ? numericLevel : 1;

  return <QuizSession deckId={parseInt(deckId)} level={validLevel} />;
}

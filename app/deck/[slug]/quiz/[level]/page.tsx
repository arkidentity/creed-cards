import { notFound } from "next/navigation";
import { getDeck } from "../../../../../lib/decks";
import { QuizSession } from "../../../../../components/quiz/QuizSession";

export default async function DeckQuizLevelPage({
  params,
}: {
  params: Promise<{ slug: string; level: string }>;
}) {
  const { slug, level } = await params;
  const deck = getDeck(slug);
  if (!deck) notFound();

  const numericLevel = parseInt(level) as 1 | 2 | 3;
  const validLevel = [1, 2, 3].includes(numericLevel) ? numericLevel : 1;

  return <QuizSession deckId={deck.id} level={validLevel} />;
}

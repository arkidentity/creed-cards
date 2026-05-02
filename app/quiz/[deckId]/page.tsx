import Link from "next/link";
import { DECK_QUIZZES } from "@/lib/quizData";

export default async function QuizPage({ params }: { params: Promise<{ deckId: string }> }) {
  const { deckId } = await params;
  const deck = DECK_QUIZZES.find((d) => d.deckId === parseInt(deckId));
  const title = deck?.deckName ?? `Deck ${deckId}`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        background: "var(--background)",
        padding: 32,
        gap: 16,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 40 }}>📖</div>
      <h1 style={{ fontSize: 20, fontWeight: 800, color: "var(--foreground)", margin: 0 }}>
        {title}
      </h1>
      <p style={{ fontSize: 14, color: "var(--muted)", margin: 0 }}>
        Quiz coming soon
      </p>
      <Link
        href="/"
        style={{
          marginTop: 8,
          padding: "10px 24px",
          background: "var(--accent)",
          color: "#000",
          borderRadius: 10,
          fontWeight: 700,
          fontSize: 14,
          textDecoration: "none",
        }}
      >
        Back Home
      </Link>
    </div>
  );
}

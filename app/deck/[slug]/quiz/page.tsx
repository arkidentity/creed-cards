"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDeck } from "../../../../lib/decks";
import { getQuizResult, type QuizResult } from "../../../../lib/quizProgress";
import { useBasePath } from "../../../../lib/basePathContext";

const LEVELS = [
  {
    level: 1,
    name: "Level 1",
    subtitle: "Surface Recognition",
    desc: "Match cards by their titles, terms, and categories.",
    icon: "○",
  },
  {
    level: 2,
    name: "Level 2",
    subtitle: "Content Mastery",
    desc: "Identify cards from their key verses and definitions.",
    icon: "◑",
  },
  {
    level: 3,
    name: "Level 3",
    subtitle: "Deep Understanding",
    desc: "Historical context, heresies, and cross-card theology.",
    icon: "●",
  },
] as const;

function ScoreBadge({ result }: { result: QuizResult }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
      <span style={{ fontSize: 12, color: "var(--muted)" }}>Best</span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: result.bestPct >= 75 ? "var(--success)" : "var(--accent)",
        }}
      >
        {result.bestPct}%
      </span>
      <span style={{ fontSize: 11, color: "var(--muted)" }}>
        · {result.attempts} {result.attempts === 1 ? "attempt" : "attempts"}
      </span>
    </div>
  );
}

export default function DeckQuizLevelsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const base = useBasePath();
  const deck = getDeck(slug);
  if (!deck) notFound();

  const [results, setResults] = useState<(QuizResult | null)[]>([null, null, null]);

  useEffect(() => {
    setResults([
      getQuizResult(deck.id, 1),
      getQuizResult(deck.id, 2),
      getQuizResult(deck.id, 3),
    ]);
  }, [deck.id]);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--background)",
        paddingBottom: "calc(80px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "20px 20px 16px",
          paddingTop: "calc(20px + env(safe-area-inset-top, 0px))",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Link
          href={`${base}/deck/${deck.slug}`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--surface-elevated)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          ←
        </Link>
        <div>
          <h1
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: "var(--foreground)",
              margin: 0,
              letterSpacing: "0.04em",
            }}
          >
            QUIZ
          </h1>
          <p style={{ fontSize: 11, color: "var(--muted)", margin: "2px 0 0" }}>
            {deck.name} · 20 questions
          </p>
        </div>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 10 }}>
        <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 6px" }}>
          Choose a level. Each attempt draws 20 questions from a rotating bank — no two runs are the same.
        </p>

        {LEVELS.map(({ level, name, subtitle, desc, icon }, i) => {
          const result = results[i];
          const href = `${base}/deck/${deck.slug}/quiz/${level}`;

          return (
            <Link
              key={level}
              href={href}
              style={{
                display: "block",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius-card)",
                padding: "18px 18px",
                textDecoration: "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "var(--surface-elevated)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 20,
                    color: "var(--accent)",
                    flexShrink: 0,
                    fontWeight: 800,
                  }}
                >
                  {icon}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ fontSize: 15, fontWeight: 700, color: "var(--foreground)" }}>
                      {name} — {subtitle}
                    </span>
                    <span style={{ fontSize: 16, color: "var(--muted)", flexShrink: 0 }}>›</span>
                  </div>
                  <p style={{ fontSize: 12, color: "var(--muted)", margin: "0 0 8px", lineHeight: 1.5 }}>
                    {desc}
                  </p>
                  {result ? (
                    <ScoreBadge result={result} />
                  ) : (
                    <span
                      style={{
                        fontSize: 11,
                        color: "var(--accent)",
                        fontWeight: 600,
                        letterSpacing: "0.04em",
                      }}
                    >
                      NOT ATTEMPTED
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

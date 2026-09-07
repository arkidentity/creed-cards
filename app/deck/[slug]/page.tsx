"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  getDeck,
  deckHasQuiz,
  deckKindLabel,
  type AnyCard,
} from "../../../lib/decks";
import {
  getLearnedCards,
  getLastStudiedCard,
  getFocusDeck,
  setFocusDeck,
} from "../../../lib/progress";
import { getQuizResult, type QuizResult } from "../../../lib/quizProgress";
import { useBasePath } from "../../../lib/basePathContext";

const QUIZ_LEVELS = [
  { level: 1, name: "Level 1", sub: "Vocabulary" },
  { level: 2, name: "Level 2", sub: "Scripture" },
  { level: 3, name: "Level 3", sub: "History" },
] as const;

export default function DeckHomePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const base = useBasePath();
  const deck = getDeck(slug);

  const [learnedIds, setLearnedIds] = useState<number[]>([]);
  const [lastStudied, setLastStudied] = useState<number | null>(null);
  const [quizResults, setQuizResults] = useState<(QuizResult | null)[]>([null, null, null]);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (!deck) return;
    setLearnedIds(getLearnedCards(deck.id));
    setLastStudied(getLastStudiedCard(deck.id));
    setQuizResults([
      getQuizResult(deck.id, 1),
      getQuizResult(deck.id, 2),
      getQuizResult(deck.id, 3),
    ]);
    setIsFocus(getFocusDeck() === deck.id);
  }, [deck]);

  if (!deck) return null; // layout calls notFound() first

  const cards = deck.cards as AnyCard[];
  const total = cards.length;
  const learned = learnedIds.length;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  const isLive = deck.status === "live";
  const hasQuiz = deckHasQuiz(deck.id);

  const resumeCard = lastStudied != null ? cards.find((c) => c.id === lastStudied) : undefined;
  const studyBase = `${base}/deck/${deck.slug}/study`;
  const primaryHref = resumeCard
    ? `${studyBase}?mode=sequential&start=${resumeCard.id}`
    : `${studyBase}?mode=sequential`;

  const toggleFocus = () => {
    const next = !isFocus;
    setFocusDeck(next ? deck.id : null);
    setIsFocus(next);
  };

  const RING = 2 * Math.PI * 16;

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
          padding: "20px 20px 12px",
          paddingTop: "calc(20px + env(safe-area-inset-top, 0px))",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Link
          href={base || "/"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--surface-2)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontSize: 18,
            flexShrink: 0,
          }}
          title="All decks"
        >
          ←
        </Link>
        <div style={{ minWidth: 0, flex: 1 }}>
          <h1
            style={{
              fontSize: 23,
              fontWeight: 800,
              letterSpacing: "0.04em",
              color: "var(--foreground)",
              margin: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {deck.shortName.toUpperCase()}
          </h1>
          <p style={{ fontSize: 11.5, color: "var(--muted)", margin: "4px 0 0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {deckKindLabel(deck)}{isLive && ` · ${total} cards`}
          </p>
        </div>
        {isLive && (
          <svg width="42" height="42" viewBox="0 0 40 40" style={{ flexShrink: 0 }}>
            <circle cx="20" cy="20" r="16" fill="none" stroke="var(--border)" strokeWidth="3.5" />
            <circle
              cx="20" cy="20" r="16"
              fill="none"
              stroke={deck.cover.accent}
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray={RING}
              strokeDashoffset={RING * (1 - pct / 100)}
              transform="rotate(-90 20 20)"
            />
            <text x="20" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--foreground)">
              {pct}
            </text>
          </svg>
        )}
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 22 }}>

        {/* Orientation line for non-doctrine decks */}
        {isLive && deck.schema !== "doctrine" && (
          <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55, margin: "-6px 0 0" }}>
            {deck.tagline}.
          </p>
        )}

        {!isLive && (
          <div
            style={{
              background: `linear-gradient(145deg, ${deck.cover.dark}, ${deck.cover.dark}cc)`,
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 18,
              padding: "18px 16px",
              marginTop: 4,
            }}
          >
            <div style={{ fontSize: 11, color: deck.cover.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Coming Soon
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
              {total} cards are written and in review. This deck isn&apos;t open for study yet.
            </div>
          </div>
        )}

        {isLive && (
          <>
            {/* Primary action */}
            <Link
              href={primaryHref}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                borderRadius: 14,
                padding: "16px 18px",
                background: deck.cover.accent,
                color: "#10131c",
                textDecoration: "none",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.09em", textTransform: "uppercase", opacity: 0.75 }}>
                  {resumeCard ? "Continue" : "Get started"}
                </div>
                <div style={{ fontSize: 17, fontWeight: 800, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>
                  {resumeCard ? resumeCard.title : "Start studying"}
                </div>
              </div>
              <span style={{ marginLeft: "auto", fontWeight: 800, flexShrink: 0 }}>→</span>
            </Link>

            {/* Study */}
            <div>
              <SectionLabel>Study</SectionLabel>
              <Row href={`${studyBase}?mode=sequential`} icon="→" title="In order" desc={`Card 1 to ${total}`} />
              <Row href={`${studyBase}?mode=random`} icon="⇄" title="Shuffle" desc="Whole deck, random" />
              <Row href={`${studyBase}?mode=sequential&filter=unlearned`} icon="○" title="Unlearned only" desc={`${total - learned} left`} />
            </div>

            {/* Test */}
            {hasQuiz && (
              <div>
                <SectionLabel>Test</SectionLabel>
                {QUIZ_LEVELS.map(({ level, name, sub }, i) => {
                  const r = quizResults[i];
                  return (
                    <Row
                      key={level}
                      href={`${base}/deck/${deck.slug}/quiz/${level}`}
                      icon={["①", "②", "③"][i]}
                      title={`${name} — ${sub}`}
                      trailing={
                        r ? (
                          <span style={{ fontSize: 12.5, color: "var(--muted)" }}>
                            Best <b style={{ color: "var(--accent)" }}>{r.bestPct}%</b>
                          </span>
                        ) : (
                          <span style={{ fontSize: 12.5, color: "var(--muted)" }}>Not tried</span>
                        )
                      }
                    />
                  );
                })}
              </div>
            )}

            {/* Focus toggle */}
            <button
              onClick={toggleFocus}
              style={{
                alignSelf: "center",
                background: "transparent",
                border: "none",
                color: isFocus ? "var(--accent)" : "var(--muted)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.04em",
                cursor: "pointer",
                padding: "4px 8px",
              }}
            >
              {isFocus ? "★ Focused deck" : "☆ Make this my focus"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 12px" }}>
      {children}
    </h2>
  );
}

function Row({
  href,
  icon,
  title,
  desc,
  trailing,
}: {
  href: string;
  icon: string;
  title: string;
  desc?: string;
  trailing?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 15px",
        border: "1px solid var(--border)",
        borderRadius: 13,
        background: "var(--surface)",
        marginBottom: 8,
        textDecoration: "none",
      }}
    >
      <span style={{ width: 22, textAlign: "center", color: "var(--muted)", fontSize: 17, flexShrink: 0 }}>{icon}</span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 650, color: "var(--foreground)" }}>{title}</div>
        {desc && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 1 }}>{desc}</div>}
      </div>
      <span style={{ marginLeft: "auto", flexShrink: 0 }}>
        {trailing ?? <span style={{ color: "var(--muted)", fontSize: 13 }}>›</span>}
      </span>
    </Link>
  );
}

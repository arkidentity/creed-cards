"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DECKS,
  globalCardOfTheDay,
  type Deck,
} from "../lib/decks";
import { getAllLearned, getTotalLearnedCount } from "../lib/progress";
import { getQuizResult } from "../lib/quizProgress";
import { useBasePath } from "../lib/basePathContext";

export default function HomePage() {
  const base = useBasePath();
  const [learnedByDeck, setLearnedByDeck] = useState<Record<number, number[]>>({});
  const [totalLearned, setTotalLearned] = useState(0);

  useEffect(() => {
    setLearnedByDeck(getAllLearned());
    setTotalLearned(getTotalLearnedCount());
  }, []);

  const today = globalCardOfTheDay();
  const liveCount = DECKS.filter((d) => d.status === "live").length;

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
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, letterSpacing: "0.06em", color: "var(--foreground)", margin: 0 }}>
            CREED CARDS
          </h1>
          <p style={{ fontSize: 12, color: "var(--muted)", margin: "2px 0 0", letterSpacing: "0.04em" }}>
            {totalLearned} mastered · {liveCount} {liveCount === 1 ? "deck" : "decks"}
          </p>
        </div>
        <Link
          href={`${base}/progress`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 38,
            height: 38,
            borderRadius: 12,
            background: "var(--surface-2)",
            color: "var(--muted)",
            textDecoration: "none",
          }}
          title="Progress"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </Link>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Cross-deck Card of the Day */}
        {today && (
          <Link
            href={`${base}/deck/${today.deck.slug}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              borderRadius: 18,
              overflow: "hidden",
              textDecoration: "none",
              background: `linear-gradient(145deg, ${today.card.colors.dark}, ${today.card.colors.dark}cc)`,
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 16px",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, color: today.card.colors.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                Card of the Day · {today.deck.shortName}
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "0.03em", marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {today.card.title}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {today.card.shortDesc}
              </div>
            </div>
            <span style={{ flexShrink: 0, fontSize: 18, color: today.card.colors.accent }}>→</span>
          </Link>
        )}

        {/* Deck shelf */}
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Your Decks
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {DECKS.map((deck) => (
              <DeckTile
                key={deck.id}
                deck={deck}
                base={base}
                learned={learnedByDeck[deck.id]?.length ?? 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeckTile({ deck, base, learned }: { deck: Deck; base: string; learned: number }) {
  const total = deck.cards.length;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  const isLive = deck.status === "live";

  const quizBest = isLive
    ? [1, 2, 3]
        .map((l) => getQuizResult(deck.id, l)?.bestPct ?? null)
        .filter((p): p is number => p !== null)
    : [];
  const bestPct = quizBest.length > 0 ? Math.max(...quizBest) : null;

  return (
    <Link
      href={`${base}/deck/${deck.slug}`}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        borderRadius: 16,
        textDecoration: "none",
        background: isLive
          ? `linear-gradient(145deg, ${deck.cover.accent}22, ${deck.cover.dark} 60%)`
          : "var(--surface)",
        border: isLive
          ? `1px solid ${deck.cover.accent}66`
          : "1px solid var(--border)",
        boxShadow: isLive ? `inset 4px 0 0 ${deck.cover.accent}` : undefined,
        padding: "16px 16px 16px 20px",
        opacity: isLive ? 1 : 0.7,
      }}
    >
      {/* Progress ring */}
      <div style={{ position: "relative", width: 40, height: 40, flexShrink: 0 }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" fill="none" stroke={isLive ? "rgba(255,255,255,0.18)" : "var(--border)"} strokeWidth="3" />
          {isLive && (
            <circle
              cx="20" cy="20" r="16"
              fill="none"
              stroke={deck.cover.accent}
              strokeWidth="3"
              strokeDasharray={`${2 * Math.PI * 16}`}
              strokeDashoffset={`${2 * Math.PI * 16 * (1 - pct / 100)}`}
              strokeLinecap="round"
              transform="rotate(-90 20 20)"
              style={{ transition: "stroke-dashoffset 0.4s ease" }}
            />
          )}
        </svg>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 800, color: isLive ? "#fff" : "var(--foreground)", letterSpacing: "0.02em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
          {deck.shortName}
        </div>
        <div style={{ fontSize: 11, color: isLive ? "rgba(255,255,255,0.6)" : "var(--muted)", marginTop: 2 }}>
          {isLive ? (
            <>
              {learned} / {total} learned{bestPct !== null && ` · Quiz ${bestPct}%`}
            </>
          ) : (
            <>Coming soon · {total} cards</>
          )}
        </div>
      </div>

      <span style={{ flexShrink: 0, fontSize: 16, color: isLive ? "rgba(255,255,255,0.65)" : "var(--muted)" }}>›</span>
    </Link>
  );
}

"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import {
  getDeck,
  deckCardOfTheDay,
  deckCategoryCards,
  deckHasQuiz,
  type AnyCard,
} from "../../../lib/decks";
import {
  getLearnedCards,
  getLastStudiedCard,
  getTodaySessionCount,
} from "../../../lib/progress";
import { getQuizResult } from "../../../lib/quizProgress";
import { CardIcon } from "../../../lib/cardIcons";
import { useBasePath } from "../../../lib/basePathContext";

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
  const [todayCount, setTodayCount] = useState(0);
  const [quizBestPct, setQuizBestPct] = useState<number | null>(null);

  useEffect(() => {
    if (!deck) return;
    setLearnedIds(getLearnedCards(deck.id));
    setLastStudied(getLastStudiedCard(deck.id));
    setTodayCount(getTodaySessionCount());
    const best = [1, 2, 3]
      .map((l) => getQuizResult(deck.id, l)?.bestPct ?? null)
      .filter((p): p is number => p !== null);
    if (best.length > 0) setQuizBestPct(Math.max(...best));
  }, [deck]);

  if (!deck) return null; // layout calls notFound() first

  const cards = deck.cards as AnyCard[];
  const totalCount = cards.length;
  const learnedCount = learnedIds.length;
  const learnedPct = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;
  const isLive = deck.status === "live";

  const todayCard = isLive ? deckCardOfTheDay(deck.id) : undefined;
  const lastCard =
    lastStudied != null
      ? cards.find((c) => c.id === lastStudied)
      : undefined;

  const STUDY_MODES = [
    { label: "Sequential", icon: "→", href: `${base}/deck/${deck.slug}/study?mode=sequential`, desc: `Card 1 to ${totalCount}` },
    { label: "Random", icon: "⚡", href: `${base}/deck/${deck.slug}/study?mode=random`, desc: "Shuffled deck" },
    { label: "Unlearned", icon: "○", href: `${base}/deck/${deck.slug}/study?mode=sequential&filter=unlearned`, desc: `${totalCount - learnedCount} remaining` },
    ...(deckHasQuiz(deck.id)
      ? [{
          label: "Quiz",
          icon: "✦",
          href: `${base}/deck/${deck.slug}/quiz`,
          desc: quizBestPct !== null ? `Best: ${quizBestPct}%` : "3 levels",
        }]
      : []),
  ];

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
        <div style={{ minWidth: 0 }}>
          <h1
            style={{
              fontSize: 20,
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
          <p style={{ fontSize: 12, color: "var(--muted)", margin: "2px 0 0", letterSpacing: "0.03em" }}>
            {deck.tagline}
          </p>
        </div>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 16 }}>

        {!isLive && (
          <div
            style={{
              background: `linear-gradient(145deg, ${deck.cover.dark}, ${deck.cover.dark}cc)`,
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 18,
              padding: "18px 16px",
            }}
          >
            <div style={{ fontSize: 10, color: deck.cover.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Coming Soon
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.5 }}>
              {totalCount} cards are written and in review. This deck isn&apos;t open for study yet.
            </div>
          </div>
        )}

        {/* Card of the Day (this deck) */}
        {isLive && todayCard && (
          <Link
            href={`${base}/deck/${deck.slug}/study?mode=daily`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              borderRadius: 18,
              overflow: "hidden",
              textDecoration: "none",
              background: `linear-gradient(145deg, ${todayCard.colors.dark}, ${todayCard.colors.dark}cc)`,
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "16px 16px",
            }}
          >
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, color: todayCard.colors.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 4 }}>
                Card of the Day
              </div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", letterSpacing: "0.03em", marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {todayCard.title}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {todayCard.shortDesc}
              </div>
            </div>
            <div style={{
              flexShrink: 0,
              display: "flex", alignItems: "center", gap: 5,
              background: todayCard.colors.accent,
              color: "#000",
              padding: "8px 13px",
              borderRadius: 10,
              fontSize: 12,
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}>
              Study Now →
            </div>
          </Link>
        )}

        {/* Progress bar */}
        {isLive && (
          <div
            style={{
              background: "var(--surface)",
              borderRadius: 14,
              padding: "14px 16px",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
                Overall Progress
              </span>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>
                {learnedCount} / {totalCount}
              </span>
            </div>
            <div style={{ background: "var(--border)", borderRadius: 99, height: 6, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${learnedPct}%`,
                  background: "var(--accent)",
                  borderRadius: 99,
                  transition: "width 0.6s ease",
                }}
              />
            </div>
            <div style={{ marginTop: 6, fontSize: 11, color: "var(--muted)" }}>
              {learnedPct}% learned{todayCount > 0 && ` · ${todayCount} studied today`}
            </div>
          </div>
        )}

        {/* Continue where you left off */}
        {isLive && lastCard && (
          <Link
            href={`${base}/deck/${deck.slug}/study?mode=sequential&start=${lastCard.id}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: "14px 16px",
              textDecoration: "none",
            }}
          >
            <div style={{
              width: 44, height: 44, borderRadius: 10, flexShrink: 0,
              background: lastCard.colors.dark,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <CardIcon categorySlug={String(lastCard.categorySlug)} accentColor={lastCard.colors.accent} stroke="rgba(255,255,255,0.85)" />
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 10, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
                Continue
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--foreground)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {lastCard.title}
              </div>
            </div>
            <span style={{ fontSize: 16, color: "var(--muted)" }}>→</span>
          </Link>
        )}

        {/* Study modes grid */}
        {isLive && (
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              Study Modes
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {STUDY_MODES.map((m) => (
                <Link
                  key={m.href}
                  href={m.href}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: "14px 14px",
                    textDecoration: "none",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{m.icon}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: "var(--foreground)" }}>{m.label}</span>
                  <span style={{ fontSize: 11, color: "var(--muted)" }}>{m.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Browse by Category */}
        {deck.categories.length > 0 && (
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              Browse by Category
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {deck.categories.map((cat) => {
                const categoryCards = deckCategoryCards(deck.id, cat.slug);
                const catLearned = categoryCards.filter((c) => learnedIds.includes(c.id)).length;
                const pct = categoryCards.length > 0 ? (catLearned / categoryCards.length) * 100 : 0;

                const inner = (
                  <>
                    <div style={{ position: "relative", width: 32, height: 32, flexShrink: 0 }}>
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="13" fill="none" stroke="var(--border)" strokeWidth="2.5" />
                        <circle
                          cx="16" cy="16" r="13"
                          fill="none"
                          stroke={cat.accent}
                          strokeWidth="2.5"
                          strokeDasharray={`${2 * Math.PI * 13}`}
                          strokeDashoffset={`${2 * Math.PI * 13 * (1 - pct / 100)}`}
                          strokeLinecap="round"
                          transform="rotate(-90 16 16)"
                          style={{ transition: "stroke-dashoffset 0.4s ease" }}
                        />
                        <circle cx="16" cy="16" r="9" fill={cat.dark} />
                      </svg>
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {cat.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>
                        {isLive ? `${catLearned} / ${categoryCards.length} learned` : `${categoryCards.length} cards`}
                      </div>
                    </div>
                    {isLive && <span style={{ fontSize: 14, color: "var(--muted)" }}>›</span>}
                  </>
                );

                const boxStyle: React.CSSProperties = {
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: "11px 14px",
                  textDecoration: "none",
                };

                return isLive ? (
                  <Link key={cat.slug} href={`${base}/deck/${deck.slug}/study?mode=sequential&category=${cat.slug}`} style={boxStyle}>
                    {inner}
                  </Link>
                ) : (
                  <div key={cat.slug} style={{ ...boxStyle, opacity: 0.7 }}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

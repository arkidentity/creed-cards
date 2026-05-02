"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CARD_DATA,
  CATEGORY_INFO,
  getCardOfTheDay,
  getCardsByCategory,
  type CategorySlug,
} from "../lib/cardData";
import {
  getLearnedCards,
  getLastStudiedCard,
  getTodaySessionCount,
} from "../lib/progress";
import { BottomNav } from "../components/ui/BottomNav";
import { CardIcon } from "../lib/cardIcons";

export default function HomePage() {
  const [learnedIds, setLearnedIds] = useState<number[]>([]);
  const [lastStudied, setLastStudied] = useState<number | null>(null);
  const [todayCount, setTodayCount] = useState(0);

  useEffect(() => {
    setLearnedIds(getLearnedCards());
    setLastStudied(getLastStudiedCard());
    setTodayCount(getTodaySessionCount());
  }, []);

  const todayCard = getCardOfTheDay();
  const learnedCount = learnedIds.length;
  const totalCount = CARD_DATA.length;
  const learnedPct = Math.round((learnedCount / totalCount) * 100);

  const lastCard = lastStudied ? CARD_DATA.find((c) => c.id === lastStudied) : null;

  const STUDY_MODES = [
    { label: "Sequential", icon: "→", href: "/study?mode=sequential", desc: "Card 1 to 50" },
    { label: "Random", icon: "⚡", href: "/study?mode=random", desc: "Shuffled deck" },
    { label: "Daily Card", icon: "☀", href: "/study?mode=daily", desc: "One card a day" },
    { label: "Unlearned", icon: "○", href: "/study?mode=sequential&filter=unlearned", desc: `${totalCount - learnedCount} remaining` },
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
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: 22,
              fontWeight: 800,
              letterSpacing: "0.06em",
              color: "var(--foreground)",
              margin: 0,
            }}
          >
            CREED CARDS
          </h1>
          <p style={{ fontSize: 12, color: "var(--muted)", margin: "2px 0 0", letterSpacing: "0.04em" }}>
            Theological Foundations
          </p>
        </div>
        <Link
          href="/progress"
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

        {/* Card of the Day */}
        <Link
          href="/study?mode=daily"
          style={{
            display: "block",
            borderRadius: 18,
            overflow: "hidden",
            textDecoration: "none",
            background: `linear-gradient(145deg, ${todayCard.colors.dark}, ${todayCard.colors.dark}cc)`,
            border: "1px solid rgba(255,255,255,0.07)",
            position: "relative",
          }}
        >
          {/* Ghost cards fan */}
          <div style={{ position: "absolute", top: 12, right: 16, width: 56, height: 76 }}>
            <div style={{
              position: "absolute", inset: 0, background: todayCard.colors.dark,
              borderRadius: 8, transform: "rotate(8deg)", opacity: 0.4,
              border: "1px solid rgba(255,255,255,0.1)",
            }} />
            <div style={{
              position: "absolute", inset: 0, background: todayCard.colors.dark,
              borderRadius: 8, transform: "rotate(4deg)", opacity: 0.6,
              border: "1px solid rgba(255,255,255,0.1)",
            }} />
            <div style={{
              position: "absolute", inset: 0, background: todayCard.colors.dark,
              borderRadius: 8, border: "1px solid rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <CardIcon cardId={todayCard.id} accentColor={todayCard.colors.accent} stroke="rgba(255,255,255,0.8)" />
            </div>
          </div>

          <div style={{ padding: "20px 20px 20px" }}>
            <div style={{ fontSize: 10, color: todayCard.colors.accent, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>
              Card of the Day
            </div>
            <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", letterSpacing: "0.04em", marginBottom: 4, paddingRight: 80 }}>
              {todayCard.title}
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 14 }}>
              {todayCard.shortDesc}
            </div>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              background: todayCard.colors.accent,
              color: "#000",
              padding: "7px 14px",
              borderRadius: 8,
              fontSize: 12,
              fontWeight: 700,
            }}>
              Study Now →
            </div>
          </div>
        </Link>

        {/* Progress bar */}
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

        {/* Continue where you left off */}
        {lastCard && (
          <Link
            href={`/study?mode=sequential&start=${lastCard.id}`}
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
              <CardIcon cardId={lastCard.id} accentColor={lastCard.colors.accent} stroke="rgba(255,255,255,0.85)" />
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

        {/* Browse by Category */}
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Browse by Category
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {(Object.entries(CATEGORY_INFO) as [CategorySlug, typeof CATEGORY_INFO[CategorySlug]][]).map(
              ([slug, info]) => {
                const categoryCards = getCardsByCategory(slug);
                const catLearned = categoryCards.filter((c) => learnedIds.includes(c.id)).length;
                const pct = categoryCards.length > 0 ? (catLearned / categoryCards.length) * 100 : 0;

                return (
                  <Link
                    key={slug}
                    href={`/study?mode=sequential&category=${slug}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      padding: "11px 14px",
                      textDecoration: "none",
                    }}
                  >
                    {/* Progress ring */}
                    <div style={{ position: "relative", width: 32, height: 32, flexShrink: 0 }}>
                      <svg width="32" height="32" viewBox="0 0 32 32">
                        <circle cx="16" cy="16" r="13" fill="none" stroke="var(--border)" strokeWidth="2.5" />
                        <circle
                          cx="16" cy="16" r="13"
                          fill="none"
                          stroke={info.accent}
                          strokeWidth="2.5"
                          strokeDasharray={`${2 * Math.PI * 13}`}
                          strokeDashoffset={`${2 * Math.PI * 13 * (1 - pct / 100)}`}
                          strokeLinecap="round"
                          transform="rotate(-90 16 16)"
                          style={{ transition: "stroke-dashoffset 0.4s ease" }}
                        />
                        <circle cx="16" cy="16" r="9" fill={info.color} />
                      </svg>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {info.name}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>
                        {catLearned} / {categoryCards.length} learned
                      </div>
                    </div>

                    <span style={{ fontSize: 14, color: "var(--muted)" }}>›</span>
                  </Link>
                );
              }
            )}
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

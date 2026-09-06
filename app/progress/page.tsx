"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { DECKS, getDeck, deckCategoryCards } from "../../lib/decks";
import {
  getAllLearned,
  getTotalLearnedCount,
  getTodaySessionCount,
  getSoundEnabled,
  toggleSound,
  resetDeckProgress,
  resetAllProgress,
} from "../../lib/progress";
import { getQuizResult, type QuizResult } from "../../lib/quizProgress";
import { useBasePath } from "../../lib/basePathContext";

const QUIZ_LEVELS = [
  { level: 1, name: "Level 1", subtitle: "Surface Recognition" },
  { level: 2, name: "Level 2", subtitle: "Content Mastery" },
  { level: 3, name: "Level 3", subtitle: "Deep Understanding" },
] as const;

export default function ProgressPage() {
  const base = useBasePath();

  const firstLive = DECKS.find((d) => d.status === "live") ?? DECKS[0];
  const [selectedDeckId, setSelectedDeckId] = useState(firstLive.id);
  const [learnedByDeck, setLearnedByDeck] = useState<Record<number, number[]>>({});
  const [totalLearned, setTotalLearned] = useState(0);
  const [todayCount, setTodayCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [quizResults, setQuizResults] = useState<(QuizResult | null)[]>([null, null, null]);
  const [confirmReset, setConfirmReset] = useState<"deck" | "all" | null>(null);

  const refresh = () => {
    setLearnedByDeck(getAllLearned());
    setTotalLearned(getTotalLearnedCount());
    setTodayCount(getTodaySessionCount());
  };

  useEffect(() => {
    refresh();
    setSoundEnabled(getSoundEnabled());
  }, []);

  useEffect(() => {
    setQuizResults([
      getQuizResult(selectedDeckId, 1),
      getQuizResult(selectedDeckId, 2),
      getQuizResult(selectedDeckId, 3),
    ]);
  }, [selectedDeckId]);

  const deck = getDeck(selectedDeckId)!;
  const learnedIds = learnedByDeck[selectedDeckId] ?? [];
  const totalCount = deck.cards.length;
  const learnedCount = learnedIds.length;
  const learnedPct = totalCount > 0 ? Math.round((learnedCount / totalCount) * 100) : 0;

  const decksInProgress = useMemo(
    () => Object.values(learnedByDeck).filter((arr) => arr.length > 0).length,
    [learnedByDeck]
  );

  const handleToggleSound = () => setSoundEnabled(toggleSound());

  const handleReset = (scope: "deck" | "all") => {
    if (confirmReset !== scope) {
      setConfirmReset(scope);
      return;
    }
    if (scope === "deck") resetDeckProgress(selectedDeckId);
    else resetAllProgress();
    setConfirmReset(null);
    refresh();
  };

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
        >
          ←
        </Link>
        <h1 style={{ fontSize: 18, fontWeight: 800, color: "var(--foreground)", margin: 0, letterSpacing: "0.04em" }}>
          Progress
        </h1>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Cross-deck summary */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 14,
            padding: "14px 16px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 8,
          }}
        >
          {[
            { label: "Mastered", value: totalLearned },
            { label: "Decks Started", value: decksInProgress },
            { label: "Today", value: todayCount },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: "var(--foreground)" }}>{s.value}</div>
              <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2, letterSpacing: "0.04em" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Deck switcher */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {DECKS.map((d) => {
            const isLive = d.status === "live";
            const active = d.id === selectedDeckId;
            return (
              <button
                key={d.id}
                onClick={() => isLive && setSelectedDeckId(d.id)}
                disabled={!isLive}
                style={{
                  flexShrink: 0,
                  padding: "8px 14px",
                  borderRadius: 999,
                  border: `1px solid ${active ? "var(--accent)" : "var(--border-strong)"}`,
                  background: active ? "var(--accent)" : "var(--surface-2)",
                  color: active ? "#000" : isLive ? "var(--foreground)" : "var(--muted)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                  cursor: isLive ? "pointer" : "default",
                  opacity: isLive ? 1 : 0.5,
                  whiteSpace: "nowrap",
                }}
              >
                {d.shortName}
              </button>
            );
          })}
        </div>

        {/* Selected-deck hero */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 18, padding: "20px" }}>
          <div style={{ fontSize: 56, fontWeight: 800, color: "var(--accent)", lineHeight: 1, marginBottom: 4 }}>
            {learnedPct}%
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
            {deck.shortName} · {learnedCount} / {totalCount} learned
          </div>
          <div style={{ background: "var(--border)", borderRadius: 99, height: 8, overflow: "hidden" }}>
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
        </div>

        {/* Category breakdown */}
        {deck.categories.length > 0 && (
          <div>
            <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
              By Category
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {deck.categories.map((cat) => {
                const categoryCards = deckCategoryCards(deck.id, cat.slug);
                const catLearned = categoryCards.filter((c) => learnedIds.includes(c.id)).length;
                const pct = categoryCards.length > 0 ? (catLearned / categoryCards.length) * 100 : 0;

                return (
                  <Link
                    key={cat.slug}
                    href={`${base}/deck/${deck.slug}/study?mode=sequential&category=${cat.slug}`}
                    style={{
                      display: "block",
                      background: "var(--surface)",
                      border: "1px solid var(--border)",
                      borderRadius: 12,
                      padding: "12px 14px",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ width: 10, height: 10, borderRadius: 99, background: cat.accent, flexShrink: 0 }} />
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>{cat.name}</span>
                      </div>
                      <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>
                        {catLearned} / {categoryCards.length}
                      </span>
                    </div>
                    <div style={{ background: "var(--border)", borderRadius: 99, height: 4, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: cat.accent, borderRadius: 99, transition: "width 0.4s ease" }} />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {/* Test Your Knowledge */}
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Test Your Knowledge
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {QUIZ_LEVELS.map(({ level, name, subtitle }, i) => {
              const result = quizResults[i];
              return (
                <Link
                  key={level}
                  href={`${base}/deck/${deck.slug}/quiz/${level}`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "12px 14px",
                    textDecoration: "none",
                  }}
                >
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
                      {name} — {subtitle}
                    </div>
                    {result ? (
                      <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>
                        Best: <span style={{ color: result.bestPct >= 75 ? "var(--success)" : "var(--accent)", fontWeight: 700 }}>{result.bestPct}%</span>
                        {" "}· {result.attempts} {result.attempts === 1 ? "attempt" : "attempts"}
                      </div>
                    ) : (
                      <div style={{ fontSize: 11, color: "var(--accent)", marginTop: 2, fontWeight: 600 }}>
                        Not attempted
                      </div>
                    )}
                  </div>
                  <span style={{ fontSize: 14, color: "var(--muted)" }}>›</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Settings */}
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            Settings
          </h2>
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
            {/* Flip Sound */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 16px",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)" }}>Flip Sound</div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 1 }}>Play sound when flipping cards</div>
              </div>
              <button
                onClick={handleToggleSound}
                style={{
                  width: 44,
                  height: 26,
                  borderRadius: 99,
                  background: soundEnabled ? "var(--accent)" : "var(--surface-2)",
                  border: "none",
                  cursor: "pointer",
                  position: "relative",
                  transition: "background 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 3,
                    left: soundEnabled ? 21 : 3,
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: soundEnabled ? "#000" : "var(--muted)",
                    transition: "left 0.2s ease",
                  }}
                />
              </button>
            </div>

            {/* Reset */}
            <div style={{ padding: "14px 16px", display: "flex", flexDirection: "column", gap: 10 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", marginBottom: 2 }}>
                  Reset Progress
                </div>
                <div style={{ fontSize: 11, color: "var(--muted)" }}>
                  Clears learned cards. Session data is cleared only by &ldquo;all decks&rdquo;.
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button
                  onClick={() => handleReset("deck")}
                  onBlur={() => setConfirmReset(null)}
                  style={resetBtnStyle(confirmReset === "deck")}
                >
                  {confirmReset === "deck" ? "Tap to confirm" : `Reset ${deck.shortName}`}
                </button>
                <button
                  onClick={() => handleReset("all")}
                  onBlur={() => setConfirmReset(null)}
                  style={resetBtnStyle(confirmReset === "all")}
                >
                  {confirmReset === "all" ? "Tap to confirm" : "Reset all decks"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function resetBtnStyle(confirming: boolean): React.CSSProperties {
  return {
    padding: "9px 16px",
    borderRadius: 9,
    border: "1px solid var(--error, #ef4444)",
    background: confirming ? "var(--error, #ef4444)" : "transparent",
    color: confirming ? "#fff" : "var(--error, #ef4444)",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    transition: "all 0.15s ease",
  };
}

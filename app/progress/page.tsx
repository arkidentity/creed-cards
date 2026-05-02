"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  CARD_DATA,
  CATEGORY_INFO,
  getCardsByCategory,
  type CategorySlug,
} from "@/lib/cardData";
import {
  getLearnedCards,
  getTodaySessionCount,
  getSoundEnabled,
  toggleSound,
  resetAllProgress,
} from "@/lib/progress";
import { BottomNav } from "@/components/ui/BottomNav";

export default function ProgressPage() {
  const [learnedIds, setLearnedIds] = useState<number[]>([]);
  const [todayCount, setTodayCount] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [confirmReset, setConfirmReset] = useState(false);

  useEffect(() => {
    setLearnedIds(getLearnedCards());
    setTodayCount(getTodaySessionCount());
    setSoundEnabled(getSoundEnabled());
  }, []);

  const learnedCount = learnedIds.length;
  const totalCount = CARD_DATA.length;
  const learnedPct = Math.round((learnedCount / totalCount) * 100);

  const handleToggleSound = () => {
    const next = toggleSound();
    setSoundEnabled(next);
  };

  const handleReset = () => {
    if (!confirmReset) {
      setConfirmReset(true);
      return;
    }
    resetAllProgress();
    setLearnedIds([]);
    setTodayCount(0);
    setConfirmReset(false);
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
          href="/"
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

        {/* Overall stats */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 18,
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: "var(--accent)",
              lineHeight: 1,
              marginBottom: 4,
            }}
          >
            {learnedPct}%
          </div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>
            Overall completion
          </div>

          <div style={{ background: "var(--border)", borderRadius: 99, height: 8, overflow: "hidden", marginBottom: 16 }}>
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

          {/* Stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
            {[
              { label: "Total Cards", value: totalCount },
              { label: "Learned", value: learnedCount },
              { label: "Today", value: todayCount },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: "var(--surface-2)",
                  borderRadius: 10,
                  padding: "10px 8px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 20, fontWeight: 800, color: "var(--foreground)" }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 10, color: "var(--muted)", marginTop: 2, letterSpacing: "0.04em" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category breakdown */}
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            By Category
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
                        <div
                          style={{
                            width: 10, height: 10, borderRadius: 99,
                            background: info.accent,
                            flexShrink: 0,
                          }}
                        />
                        <span style={{ fontSize: 13, fontWeight: 600, color: "var(--foreground)" }}>
                          {info.name}
                        </span>
                      </div>
                      <span style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>
                        {catLearned} / {categoryCards.length}
                      </span>
                    </div>
                    <div style={{ background: "var(--border)", borderRadius: 99, height: 4, overflow: "hidden" }}>
                      <div
                        style={{
                          height: "100%",
                          width: `${pct}%`,
                          background: info.accent,
                          borderRadius: 99,
                          transition: "width 0.4s ease",
                        }}
                      />
                    </div>
                  </Link>
                );
              }
            )}
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

            {/* Reset Progress */}
            <div style={{ padding: "14px 16px" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", marginBottom: 2 }}>
                Reset All Progress
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 10 }}>
                Clears all learned cards and session data
              </div>
              <button
                onClick={handleReset}
                onBlur={() => setConfirmReset(false)}
                style={{
                  padding: "9px 18px",
                  borderRadius: 9,
                  border: "1px solid var(--error, #ef4444)",
                  background: confirmReset ? "var(--error, #ef4444)" : "transparent",
                  color: confirmReset ? "#fff" : "var(--error, #ef4444)",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {confirmReset ? "Tap again to confirm" : "Reset Progress"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

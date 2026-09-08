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
import { CategoryIcon } from "../../../lib/categoryIcons";
import { useBasePath } from "../../../lib/basePathContext";

const QUIZ_LEVELS = [
  { level: 1, name: "Level 1", sub: "Words & Meaning" },
  { level: 2, name: "Level 2", sub: "Scripture & History" },
  { level: 3, name: "Level 3", sub: "Connections" },
] as const;

const RING = 2 * Math.PI * 16;

/** Blend two hex colours; t=0 → a, t=1 → b. */
function mix(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (s: number) => {
    const ca = (pa >> s) & 0xff;
    const cb = (pb >> s) & 0xff;
    return Math.round(ca + (cb - ca) * t);
  };
  return `#${((ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).padStart(6, "0")}`;
}

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
  const accent = deck.cover.accent;

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

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--background)",
        paddingBottom: "calc(90px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <div
        style={{
          padding: "16px 16px 0",
          paddingTop: "calc(16px + env(safe-area-inset-top, 0px))",
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {/* Deck hero */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 22,
            border: `1px solid ${accent}66`,
            background: isLive
              ? `linear-gradient(160deg, ${mix(deck.cover.dark, accent, 0.34)} 0%, ${deck.cover.dark} 68%)`
              : "var(--surface)",
            boxShadow: isLive ? `inset 0 1px 0 ${accent}45` : undefined,
            padding: "16px 18px 20px",
          }}
        >
          {/* top row: back + ring */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link
              href={base || "/"}
              title="All decks"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 36,
                height: 36,
                borderRadius: 11,
                background: isLive ? "rgba(0,0,0,0.28)" : "var(--surface-2)",
                color: isLive ? "#fff" : "var(--foreground)",
                textDecoration: "none",
                fontSize: 18,
                flexShrink: 0,
              }}
            >
              ←
            </Link>
            <span style={{ marginLeft: "auto", flexShrink: 0 }}>
              {isLive && (
                <svg width="46" height="46" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="3.5" />
                  {pct > 0 && (
                    <circle
                      cx="20" cy="20" r="16"
                      fill="none"
                      stroke="#fff"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray={RING}
                      strokeDashoffset={RING * (1 - pct / 100)}
                      transform="rotate(-90 20 20)"
                    />
                  )}
                  <text x="20" y="24" textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#fff">
                    {pct}%
                  </text>
                </svg>
              )}
            </span>
          </div>

          {/* identity */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 14 }}>
            <span style={{ width: 46, height: 46, flexShrink: 0, display: "block", opacity: isLive ? 1 : 0.6 }}>
              <CategoryIcon
                slug={deck.icon}
                accentColor={isLive ? accent : "var(--muted)"}
                stroke={isLive ? "rgba(255,255,255,0.92)" : "var(--muted)"}
              />
            </span>
            <div style={{ minWidth: 0 }}>
              <h1
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  letterSpacing: "0.03em",
                  color: isLive ? "#fff" : "var(--foreground)",
                  margin: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {deck.shortName.toUpperCase()}
              </h1>
              <p style={{ fontSize: 11.5, color: isLive ? "rgba(255,255,255,0.6)" : "var(--muted)", margin: "4px 0 0", letterSpacing: "0.07em", textTransform: "uppercase" }}>
                {deckKindLabel(deck)}{isLive && ` · ${total} cards`}
              </p>
            </div>
          </div>

          {isLive && deck.schema !== "doctrine" && (
            <p style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: "14px 0 0" }}>
              {deck.tagline}.
            </p>
          )}

          {isLive ? (
            <Link
              href={primaryHref}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginTop: 18,
                borderRadius: 13,
                padding: "14px 16px",
                background: "#fff",
                color: "#10131c",
                textDecoration: "none",
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 10.5, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", opacity: 0.6 }}>
                  {resumeCard ? "Continue" : "Get started"}
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginTop: 2 }}>
                  {resumeCard ? resumeCard.title : "Start studying"}
                </div>
              </div>
              <span style={{ marginLeft: "auto", fontWeight: 800, flexShrink: 0 }}>→</span>
            </Link>
          ) : (
            <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.55, margin: "16px 0 0" }}>
              {total} cards are written and in review. This deck isn&apos;t open for study yet.
            </p>
          )}
        </div>

        {isLive && (
          <>
            {/* Study */}
            <section>
              <SectionLabel>Study</SectionLabel>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Row href={`${studyBase}?mode=sequential`} accent={accent} icon="→" title="In order" desc={`Card 1 to ${total}`} />
                <Row href={`${studyBase}?mode=random`} accent={accent} icon="⇄" title="Shuffle" desc="Whole deck, random" />
                <Row href={`${studyBase}?mode=sequential&filter=unlearned`} accent={accent} icon="○" title="Unlearned only" desc={`${total - learned} left`} />
              </div>
            </section>

            {/* Test */}
            {hasQuiz && (
              <section>
                <SectionLabel>Test</SectionLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {QUIZ_LEVELS.map(({ level, name, sub }, i) => {
                    const r = quizResults[i];
                    return (
                      <Row
                        key={level}
                        href={`${base}/deck/${deck.slug}/quiz/${level}`}
                        accent={accent}
                        icon={["①", "②", "③"][i]}
                        title={`${name} — ${sub}`}
                        trailing={
                          r ? (
                            <span style={{ fontSize: 12.5, color: "var(--muted)" }}>
                              Best <b style={{ color: accent }}>{r.bestPct}%</b>
                            </span>
                          ) : (
                            <span style={{ fontSize: 12.5, color: "var(--muted)" }}>Not tried</span>
                          )
                        }
                      />
                    );
                  })}
                </div>
              </section>
            )}

            {/* Focus toggle */}
            <button
              onClick={toggleFocus}
              style={{
                alignSelf: "center",
                background: isFocus ? `${accent}1a` : "transparent",
                border: `1px solid ${isFocus ? accent + "66" : "var(--border-strong)"}`,
                color: isFocus ? accent : "var(--muted)",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.04em",
                cursor: "pointer",
                padding: "9px 18px",
                borderRadius: 99,
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
    <h2 style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 12px" }}>
      {children}
    </h2>
  );
}

function Row({
  href,
  icon,
  title,
  desc,
  accent,
  trailing,
}: {
  href: string;
  icon: string;
  title: string;
  desc?: string;
  accent: string;
  trailing?: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 13,
        padding: "14px 15px",
        border: "1px solid var(--border-strong)",
        borderRadius: 14,
        background: "var(--surface-elevated)",
        textDecoration: "none",
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          background: "var(--surface-2)",
          color: accent,
          fontSize: 16,
        }}
      >
        {icon}
      </span>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 15, fontWeight: 650, color: "var(--foreground)" }}>{title}</div>
        {desc && <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 2 }}>{desc}</div>}
      </div>
      <span style={{ marginLeft: "auto", flexShrink: 0 }}>
        {trailing ?? <span style={{ color: "var(--muted)", fontSize: 15 }}>›</span>}
      </span>
    </Link>
  );
}

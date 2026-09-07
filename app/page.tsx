"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DECKS,
  globalCardOfTheDay,
  deckKindLabel,
  deckResumeCard,
  type Deck,
} from "../lib/decks";
import {
  getAllLearned,
  getTotalLearnedCount,
  getLastStudiedCard,
  getFocusDeck,
} from "../lib/progress";
import { CategoryIcon } from "../lib/categoryIcons";
import { useBasePath } from "../lib/basePathContext";

const RING = 2 * Math.PI * 16;

export default function HomePage() {
  const base = useBasePath();
  const [learnedByDeck, setLearnedByDeck] = useState<Record<number, number[]>>({});
  const [lastByDeck, setLastByDeck] = useState<Record<number, number | null>>({});
  const [totalLearned, setTotalLearned] = useState(0);
  const [focusId, setFocusId] = useState<number | null>(null);

  useEffect(() => {
    setLearnedByDeck(getAllLearned());
    setTotalLearned(getTotalLearnedCount());
    setFocusId(getFocusDeck());
    const last: Record<number, number | null> = {};
    for (const d of DECKS) if (d.status === "live") last[d.id] = getLastStudiedCard(d.id);
    setLastByDeck(last);
  }, []);

  const today = globalCardOfTheDay();
  const decksInProgress = Object.values(learnedByDeck).filter((a) => a.length > 0).length;

  const focusDeck =
    focusId != null ? DECKS.find((d) => d.id === focusId && d.status === "live") : undefined;
  const gridDecks = focusDeck ? DECKS.filter((d) => d.id !== focusDeck.id) : DECKS;

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--background)",
        paddingBottom: "calc(90px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "24px 20px 8px",
          paddingTop: "calc(24px + env(safe-area-inset-top, 0px))",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ fontSize: 25, fontWeight: 800, letterSpacing: "0.06em", color: "var(--foreground)", margin: 0 }}>
            CREED CARDS
          </h1>
          <p style={{ fontSize: 13.5, color: "var(--muted)", margin: "5px 0 0", letterSpacing: "0.02em" }}>
            {totalLearned} mastered
            {decksInProgress > 0 && ` · ${decksInProgress} ${decksInProgress === 1 ? "deck" : "decks"} in progress`}
          </p>
        </div>
        <Link
          href={`${base}/progress`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 13,
            background: "var(--surface-2)",
            color: "var(--muted)",
            textDecoration: "none",
          }}
          title="Progress"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <line x1="18" y1="20" x2="18" y2="10" />
            <line x1="12" y1="20" x2="12" y2="4" />
            <line x1="6" y1="20" x2="6" y2="14" />
          </svg>
        </Link>
      </div>

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 30 }}>

        {/* Card of the day */}
        {today && (
          <section style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 14 }}>
            <h2 style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", margin: 0 }}>
              Card of the Day
            </h2>
            <Link
              href={`${base}/deck/${today.deck.slug}/study?mode=daily`}
              style={{
                display: "block",
                borderRadius: 20,
                textDecoration: "none",
                background: `linear-gradient(155deg, ${today.card.colors.dark} 0%, ${mix(today.card.colors.dark, today.card.colors.accent, 0.22)} 100%)`,
                border: `1px solid ${today.card.colors.accent}55`,
                boxShadow: `0 18px 44px -22px ${today.card.colors.accent}66`,
                padding: "20px 20px 18px",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: today.card.colors.accent, marginBottom: 8 }}>
                From {today.deck.shortName}
              </div>
              <div style={{ fontSize: 23, fontWeight: 800, color: "#fff", letterSpacing: "0.02em", lineHeight: 1.2 }}>
                {today.card.title}
              </div>
              <div style={{ fontSize: 14.5, color: "rgba(255,255,255,0.62)", marginTop: 6, lineHeight: 1.45 }}>
                {today.card.shortDesc}
              </div>
              <div style={{ marginTop: 16, display: "flex" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: today.card.colors.accent,
                    color: "#10131c",
                    fontSize: 13,
                    fontWeight: 800,
                    padding: "9px 16px",
                    borderRadius: 11,
                  }}
                >
                  Study now →
                </span>
              </div>
            </Link>
          </section>
        )}

        {/* Focus deck — featured */}
        {focusDeck && (
          <FeaturedDeck
            deck={focusDeck}
            base={base}
            learned={learnedByDeck[focusDeck.id]?.length ?? 0}
            resumeId={lastByDeck[focusDeck.id] ?? null}
          />
        )}

        {/* Deck grid */}
        <section style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", margin: 0 }}>
            {focusDeck ? "Other Decks" : "Your Decks"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {gridDecks.map((deck) => (
              <DeckTile
                key={deck.id}
                deck={deck}
                base={base}
                learned={learnedByDeck[deck.id]?.length ?? 0}
                resumeId={lastByDeck[deck.id] ?? null}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function FeaturedDeck({
  deck,
  base,
  learned,
  resumeId,
}: {
  deck: Deck;
  base: string;
  learned: number;
  resumeId: number | null;
}) {
  const total = deck.cards.length;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  const resume = deckResumeCard(deck.id, resumeId);
  const href = resume
    ? `${base}/deck/${deck.slug}/study?mode=sequential&start=${resume.id}`
    : `${base}/deck/${deck.slug}/study?mode=sequential`;

  return (
    <section style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <h2 style={{ fontSize: 13, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.14em", textTransform: "uppercase", margin: 0 }}>
        Focus Deck
      </h2>
      <div
        style={{
          borderRadius: 20,
          border: `1px solid ${deck.cover.accent}55`,
          background: `linear-gradient(155deg, ${deck.cover.dark}, ${mix(deck.cover.dark, deck.cover.accent, 0.2)})`,
          padding: 20,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span style={{ width: 44, height: 44, flexShrink: 0, display: "block" }}>
            <CategoryIcon slug={deck.icon} accentColor={deck.cover.accent} stroke="rgba(255,255,255,0.92)" />
          </span>
          <div style={{ minWidth: 0 }}>
            <Link
              href={`${base}/deck/${deck.slug}`}
              style={{ fontSize: 22, fontWeight: 800, color: "#fff", textDecoration: "none", display: "block" }}
            >
              {deck.shortName}
            </Link>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", letterSpacing: "0.02em", marginTop: 2 }}>
              {deckKindLabel(deck)} · {learned} / {total}
            </div>
          </div>
          <span style={{ marginLeft: "auto", flexShrink: 0 }}>
            <Ring pct={pct} stroke="#fff" track="rgba(255,255,255,0.3)" size={42} label={`${pct}%`} labelColor="#fff" />
          </span>
        </div>
        <Link
          href={href}
          style={{
            marginTop: 16,
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#fff",
            color: "#10131c",
            fontSize: 14,
            fontWeight: 800,
            padding: "12px 16px",
            borderRadius: 12,
            textDecoration: "none",
          }}
        >
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {resume ? `Continue · ${resume.title}` : "Start studying"}
          </span>
          <span style={{ marginLeft: "auto", flexShrink: 0 }}>→</span>
        </Link>
      </div>
    </section>
  );
}

function DeckTile({
  deck,
  base,
  learned,
  resumeId,
}: {
  deck: Deck;
  base: string;
  learned: number;
  resumeId: number | null;
}) {
  const total = deck.cards.length;
  const pct = total > 0 ? Math.round((learned / total) * 100) : 0;
  const isLive = deck.status === "live";
  const resume = isLive ? deckResumeCard(deck.id, resumeId) : undefined;

  return (
    <Link
      href={`${base}/deck/${deck.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        minHeight: 208,
        padding: 16,
        borderRadius: 18,
        border: `1px solid ${isLive ? deck.cover.accent + "66" : "var(--border)"}`,
        background: isLive
          ? `linear-gradient(160deg, ${mix(deck.cover.dark, deck.cover.accent, 0.3)} 0%, ${deck.cover.dark} 62%)`
          : "var(--surface)",
        boxShadow: isLive ? `inset 0 1px 0 ${deck.cover.accent}40` : undefined,
        textDecoration: "none",
        opacity: isLive ? 1 : 0.72,
      }}
    >
      <span style={{ width: 40, height: 40, display: "block", opacity: isLive ? 1 : 0.6 }}>
        <CategoryIcon
          slug={deck.icon}
          accentColor={isLive ? deck.cover.accent : "var(--muted)"}
          stroke={isLive ? "rgba(255,255,255,0.9)" : "var(--muted)"}
        />
      </span>

      <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "0.01em", color: isLive ? "#fff" : "var(--foreground)" }}>
        {deck.shortName}
      </span>
      {isLive && (
        <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {deckKindLabel(deck, true)} · {total}
        </span>
      )}

      {isLive ? (
        <>
          <span
            style={{
              marginTop: "auto",
              fontSize: 12,
              color: resume ? deck.cover.accent : "rgba(255,255,255,0.5)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {resume ? `▶ ${resume.title}` : "Not started"}
          </span>
          <span style={{ height: 5, borderRadius: 99, background: "rgba(255,255,255,0.14)", overflow: "hidden" }}>
            <span style={{ display: "block", height: "100%", width: `${pct}%`, borderRadius: 99, background: deck.cover.accent }} />
          </span>
          <span style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
            <span>{learned} / {total}</span>
            <span>{pct}%</span>
          </span>
        </>
      ) : (
        <>
          <span
            style={{
              fontSize: 12.5,
              lineHeight: 1.5,
              color: "var(--muted)",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {deck.tagline}
          </span>
          <span
            style={{
              marginTop: "auto",
              alignSelf: "flex-start",
              fontSize: 11,
              color: "var(--muted)",
              border: "1px solid var(--border)",
              borderRadius: 99,
              padding: "3px 10px",
            }}
          >
            In the works
          </span>
        </>
      )}
    </Link>
  );
}

function Ring({
  pct,
  size = 40,
  stroke = "var(--accent)",
  track = "var(--border)",
  label,
  labelColor = "var(--foreground)",
}: {
  pct: number;
  size?: number;
  stroke?: string;
  track?: string;
  label?: string;
  labelColor?: string;
}) {
  const r = 16;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r={r} fill="none" stroke={track} strokeWidth="3" />
      {pct > 0 && (
        <circle
          cx="20"
          cy="20"
          r={r}
          fill="none"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={RING}
          strokeDashoffset={RING * (1 - pct / 100)}
          transform="rotate(-90 20 20)"
        />
      )}
      {label && (
        <text
          x="20"
          y="23.5"
          textAnchor="middle"
          fontSize={label.length > 3 ? "9" : "10.5"}
          fontWeight="700"
          fill={labelColor}
        >
          {label}
        </text>
      )}
    </svg>
  );
}

/** Blend two hex colours; t=0 → a, t=1 → b. */
function mix(a: string, b: string, t: number): string {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const ch = (shift: number) => {
    const ca = (pa >> shift) & 0xff;
    const cb = (pb >> shift) & 0xff;
    return Math.round(ca + (cb - ca) * t);
  };
  return `#${((ch(16) << 16) | (ch(8) << 8) | ch(0)).toString(16).padStart(6, "0")}`;
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  DECKS,
  getDeck,
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

      <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: 14 }}>

        {/* Cross-deck card of the day — slim strip */}
        {today && (
          <Link
            href={`${base}/deck/${today.deck.slug}/study?mode=daily`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "11px 13px",
              borderRadius: 12,
              border: "1px solid var(--border)",
              background: "var(--surface)",
              textDecoration: "none",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: 99, flexShrink: 0, background: today.card.colors.accent }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)" }}>
                Card of the day · {today.deck.shortName}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--foreground)", marginTop: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {today.card.title}
              </div>
            </div>
            <span style={{ marginLeft: "auto", color: "var(--muted)", flexShrink: 0 }}>→</span>
          </Link>
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
        <div>
          <h2 style={{ fontSize: 12, fontWeight: 700, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
            {focusDeck ? "Other decks" : "Your decks"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
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
        </div>
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
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.12)",
        padding: 16,
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(150deg, ${deck.cover.accent}, transparent 72%)`,
          opacity: 0.22,
        }}
      />
      <div style={{ position: "relative" }}>
        <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>
          Focus deck · {deckKindLabel(deck)}
        </div>
        <Link
          href={`${base}/deck/${deck.slug}`}
          style={{ fontSize: 22, fontWeight: 800, color: "#fff", margin: "3px 0 12px", display: "inline-block", textDecoration: "none" }}
        >
          {deck.shortName}
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link
            href={href}
            style={{
              background: "#fff",
              color: "#10131c",
              fontSize: 12,
              fontWeight: 800,
              padding: "9px 15px",
              borderRadius: 10,
              textDecoration: "none",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: 190,
            }}
          >
            {resume ? `Continue → ${resume.title}` : "Start studying"}
          </Link>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.65)" }}>{learned} / {total}</span>
          <span style={{ marginLeft: "auto", flexShrink: 0 }}>
            <Ring pct={pct} stroke="#fff" track="rgba(255,255,255,0.18)" size={38} />
          </span>
        </div>
      </div>
    </div>
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
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 9,
        minHeight: 134,
        padding: 14,
        borderRadius: 16,
        border: isLive ? "1px solid var(--border-strong)" : "1px solid var(--border)",
        background: "var(--surface)",
        textDecoration: "none",
        opacity: isLive ? 1 : 0.6,
      }}
    >
      {isLive && (
        <span
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(120% 90% at 0% 0%, ${deck.cover.accent}, transparent 60%)`,
            opacity: 0.16,
          }}
        />
      )}
      <span style={{ position: "relative", fontSize: 9, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {deckKindLabel(deck, true)}{isLive && ` · ${total}`}
      </span>
      <span style={{ position: "relative", fontSize: 16, fontWeight: 800, letterSpacing: "0.01em", color: "var(--foreground)" }}>
        {deck.shortName}
      </span>

      {isLive ? (
        <>
          <span
            style={{
              position: "relative",
              fontSize: 10.5,
              color: resume ? "var(--accent)" : "var(--muted)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {resume ? `▶ ${resume.title}` : "Not started"}
          </span>
          <span style={{ position: "relative", marginTop: "auto", height: 4, borderRadius: 99, background: "rgba(255,255,255,0.12)", overflow: "hidden" }}>
            <span style={{ display: "block", height: "100%", width: `${pct}%`, borderRadius: 99, background: deck.cover.accent }} />
          </span>
          <span style={{ position: "relative", display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--muted)" }}>
            <span>{learned} / {total}</span>
            <span>{pct}%</span>
          </span>
        </>
      ) : (
        <span
          style={{
            position: "relative",
            marginTop: "auto",
            alignSelf: "flex-start",
            fontSize: 10,
            color: "var(--muted)",
            border: "1px solid var(--border)",
            borderRadius: 99,
            padding: "2px 8px",
          }}
        >
          In the works
        </span>
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
}: {
  pct: number;
  size?: number;
  stroke?: string;
  track?: string;
  label?: string;
}) {
  const r = 16;
  return (
    <svg width={size} height={size} viewBox="0 0 40 40">
      <circle cx="20" cy="20" r={r} fill="none" stroke={track} strokeWidth="3" />
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
      {label && (
        <text x="20" y="24" textAnchor="middle" fontSize="11" fontWeight="700" fill="var(--foreground)">
          {label}
        </text>
      )}
    </svg>
  );
}

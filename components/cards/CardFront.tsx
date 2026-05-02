"use client";

import { CardIcon } from "@/lib/cardIcons";
import type { CreedCard } from "@/lib/cardData";

interface CardFrontProps {
  card: CreedCard;
  cardNumber: number;
  totalCards: number;
}

export function CardFront({ card, cardNumber, totalCards }: CardFrontProps) {
  const gradient = `linear-gradient(145deg, ${card.colors.dark} 0%, ${adjustBrightness(card.colors.dark, 20)} 100%)`;

  return (
    <div
      className="card-face card-shimmer"
      style={{
        background: gradient,
        display: "flex",
        flexDirection: "column",
        padding: "28px 24px 20px",
        boxShadow: `inset 0 0 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.07)`,
      }}
    >
      {/* Category badge + card counter */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexShrink: 0 }}>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: "0.08em",
            color: card.colors.accent,
            opacity: 0.9,
            textTransform: "uppercase",
            background: `${card.colors.accent}1a`,
            padding: "4px 10px",
            borderRadius: 20,
            border: `1px solid ${card.colors.accent}33`,
          }}
        >
          {card.category}
        </span>
        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
          {cardNumber} / {totalCards}
        </span>
      </div>

      {/* Middle zone: fills remaining space and vertically centers the content block */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        {/* Icon */}
        <div style={{ width: 108, height: 108, marginBottom: 18, flexShrink: 0 }}>
          <CardIcon cardId={card.id} accentColor={card.colors.accent} stroke="rgba(255,255,255,0.9)" />
        </div>

        {/* Title */}
        <h2
          style={{
            fontSize: 26,
            fontWeight: 800,
            letterSpacing: "0.04em",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: 8,
            lineHeight: 1.15,
            textShadow: "0 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          {card.title}
        </h2>

        {/* Short description */}
        <p
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            letterSpacing: "0.03em",
            marginBottom: card.term ? 20 : 0,
          }}
        >
          {card.shortDesc}
        </p>

        {/* Greek / Hebrew / Latin term */}
        {card.term && (
          <div
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "rgba(0,0,0,0.25)",
              borderRadius: 12,
              border: `1px solid rgba(255,255,255,0.08)`,
              textAlign: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: 10 }}>
              <span
                style={{
                  fontSize: 20,
                  fontWeight: 300,
                  color: card.colors.accent,
                  letterSpacing: "0.02em",
                  lineHeight: 1.3,
                }}
              >
                {card.term}
              </span>
              {card.termLabel && (
                <span style={{ fontSize: 10, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {card.termLabel}
                </span>
              )}
            </div>
            {card.translation && (
              <div style={{ marginTop: 4, display: "flex", justifyContent: "center", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{card.translation}</span>
                {card.englishMeaning && (
                  <>
                    <span style={{ fontSize: 10, color: "rgba(255,255,255,0.25)" }}>·</span>
                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{card.englishMeaning}</span>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Tap hint */}
      <div
        style={{
          textAlign: "center",
          fontSize: 11,
          color: "rgba(255,255,255,0.3)",
          letterSpacing: "0.04em",
          flexShrink: 0,
        }}
      >
        TAP TO FLIP
      </div>
    </div>
  );
}

function adjustBrightness(hex: string, amount: number): string {
  const num = parseInt(hex.replace("#", ""), 16);
  const r = Math.min(255, (num >> 16) + amount);
  const g = Math.min(255, ((num >> 8) & 0xff) + amount);
  const b = Math.min(255, (num & 0xff) + amount);
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

"use client";

import { CardIcon } from "../../lib/cardIcons";
import type { FulfillmentCard } from "../../lib/decks/fulfilledCards";

function adjustBrightness(hex: string, amount: number): string {
  const n = parseInt(hex.replace("#", ""), 16);
  const clamp = (v: number) => Math.max(0, Math.min(255, v));
  const r = clamp((n >> 16) + amount);
  const g = clamp(((n >> 8) & 0xff) + amount);
  const b = clamp((n & 0xff) + amount);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

export function FulfillmentCardFront({
  card,
  cardNumber,
  totalCards,
}: {
  card: FulfillmentCard;
  cardNumber: number;
  totalCards: number;
}) {
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

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 136, height: 136, marginBottom: 18, flexShrink: 0 }}>
          <CardIcon categorySlug={card.categorySlug} accentColor={card.colors.accent} stroke="rgba(255,255,255,0.9)" />
        </div>

        <h2
          style={{
            fontSize: 30,
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

        <p
          style={{
            fontSize: 17,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            letterSpacing: "0.02em",
            lineHeight: 1.5,
            marginBottom: 24,
          }}
        >
          {card.shortDesc}
        </p>

        {/* kind + dating chip */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#000",
              background: card.colors.accent,
              padding: "5px 12px",
              borderRadius: 20,
            }}
          >
            {card.kind === "prophecy" ? "Prophecy" : "Type / Shadow"}
          </span>
          {card.centuriesBefore && (
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.55)",
                background: "rgba(0,0,0,0.25)",
                padding: "5px 12px",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {card.centuriesBefore}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

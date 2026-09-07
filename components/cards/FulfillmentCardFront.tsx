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

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
        <div style={{ width: 118, height: 118, marginBottom: 10, flexShrink: 0 }}>
          <CardIcon categorySlug={card.categorySlug} accentColor={card.colors.accent} stroke="rgba(255,255,255,0.9)" />
        </div>

        <h2
          style={{
            fontSize: 29,
            fontWeight: 800,
            letterSpacing: "0.04em",
            color: "#ffffff",
            textAlign: "center",
            marginBottom: 6,
            lineHeight: 1.15,
            textShadow: "0 1px 3px rgba(0,0,0,0.4)",
          }}
        >
          {card.title}
        </h2>

        <p
          style={{
            fontSize: 16.5,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center",
            letterSpacing: "0.02em",
            lineHeight: 1.5,
            marginBottom: 20,
          }}
        >
          {card.shortDesc}
        </p>

        {/* Two witnesses: OT ref → NT ref, with kind / basis / dating */}
        <div
          style={{
            width: "100%",
            background: "rgba(0,0,0,0.28)",
            border: "1px solid rgba(255,255,255,0.09)",
            borderRadius: 13,
            padding: "12px 14px",
            opacity: card.basis === "traditional" ? 0.82 : 1,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: "rgba(255,255,255,0.5)", whiteSpace: "nowrap" }}>
              {card.otRef}
            </span>
            <span
              style={{
                flex: 1,
                maxWidth: 44,
                height: 1,
                position: "relative",
                background: `linear-gradient(to right, ${card.colors.accent}33, ${card.colors.accent})`,
              }}
            >
              <span
                style={{
                  position: "absolute",
                  right: 0,
                  top: -3,
                  borderTop: "3.5px solid transparent",
                  borderBottom: "3.5px solid transparent",
                  borderLeft: `5px solid ${card.colors.accent}`,
                }}
              />
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 700, color: card.colors.accent, whiteSpace: "nowrap" }}>
              {card.ntRef}
            </span>
          </div>
          <div
            style={{
              marginTop: 8,
              fontSize: 10,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              textAlign: "center",
              color: "rgba(255,255,255,0.42)",
            }}
          >
            {card.kind === "prophecy" ? "Prophecy" : "Type"}
            {" · "}
            {card.basis === "stated" ? "stated in the NT" : "a traditional reading"}
            {" · "}
            {card.centuriesBefore
              ? card.centuriesBefore.replace(/\s*BC$/, " yrs before Christ")
              : "undated"}
          </div>
        </div>
      </div>
    </div>
  );
}

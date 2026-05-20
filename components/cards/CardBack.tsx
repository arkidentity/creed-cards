"use client";

import { forwardRef } from "react";
import type { CreedCard } from "../../lib/cardData";

interface CardBackProps {
  card: CreedCard;
  isLearned: boolean;
  onToggleLearned: () => void;
}

export const CardBack = forwardRef<HTMLDivElement, CardBackProps>(
  function CardBack({ card, isLearned, onToggleLearned }, ref) {
    return (
      <div
        ref={ref}
        className="card-face card-face-back"
        style={{
          background: "var(--surface)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header strip matching category color */}
        <div
          style={{
            background: card.colors.dark,
            padding: "14px 20px",
            flexShrink: 0,
            borderBottom: `1px solid rgba(255,255,255,0.06)`,
          }}
        >
          <div style={{ fontSize: 11, color: card.colors.accent, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 2 }}>
            {card.category}
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "0.03em" }}>
            {card.title}
          </div>
        </div>

        {/* Scrollable content — minHeight:0 lets this flex child shrink so overflow-y kicks in */}
        <div style={{ padding: "18px 20px 24px", display: "flex", flexDirection: "column", gap: 16, flex: 1, minHeight: 0, overflowY: "auto", WebkitOverflowScrolling: "touch", overscrollBehavior: "contain", touchAction: "pan-y" }}>
          {/* Definition */}
          <Section label="Definition">
            <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--foreground)" }}>
              {card.definition}
            </p>
          </Section>

          {/* Scripture */}
          <div
            style={{
              background: card.colors.dark,
              borderRadius: 12,
              padding: "14px 16px",
              borderLeft: `3px solid ${card.colors.accent}`,
            }}
          >
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#fff", fontStyle: "italic", marginBottom: 8 }}>
              &ldquo;{card.scripture}&rdquo;
            </p>
            <p style={{ fontSize: 12, fontWeight: 700, color: card.colors.accent, letterSpacing: "0.05em" }}>
              {card.reference}
            </p>
          </div>

          {/* Historical Context */}
          <Section label="Historical Context">
            <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--muted)" }}>
              {card.historicalContext}
            </p>
          </Section>

          {/* Reflection */}
          <Section label="Reflection">
            <p
              style={{
                fontSize: 15.5,
                lineHeight: 1.6,
                color: card.colors.accent,
                fontStyle: "italic",
              }}
            >
              {card.reflection}
            </p>
          </Section>
        </div>

        {/* Mark as Learned button */}
        <div
          style={{
            padding: "12px 20px 20px",
            paddingBottom: "calc(12px + var(--safe-bottom, 0px))",
            flexShrink: 0,
            borderTop: "1px solid var(--border)",
            background: "var(--surface)",
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleLearned();
            }}
            style={{
              width: "100%",
              padding: "13px 20px",
              borderRadius: 12,
              border: isLearned ? `1.5px solid var(--success)` : `1.5px solid var(--border-strong)`,
              background: isLearned ? "var(--success-dim)" : "transparent",
              color: isLearned ? "var(--success)" : "var(--muted)",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "all 0.2s ease",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                display: "inline-block",
                ...(isLearned ? { className: "learned-animate" } : {}),
              }}
            >
              {isLearned ? "✓" : "○"}
            </span>
            {isLearned ? "Learned" : "Mark as Learned"}
          </button>
        </div>
      </div>
    );
  }
);

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 6,
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

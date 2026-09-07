"use client";

import { forwardRef } from "react";
import type { FulfillmentCard } from "../../lib/decks/fulfilledCards";

interface Props {
  card: FulfillmentCard;
  isLearned: boolean;
  onToggleLearned: () => void;
}

export const FulfillmentCardBack = forwardRef<HTMLDivElement, Props>(
  function FulfillmentCardBack({ card, isLearned, onToggleLearned }, ref) {
    return (
      <div
        ref={ref}
        className="card-face card-face-back"
        style={{ background: "var(--surface)", display: "flex", flexDirection: "column" }}
      >
        {/* Header strip */}
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

        <div
          style={{
            padding: "18px 20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
            overscrollBehavior: "contain",
            touchAction: "pan-y",
          }}
        >
          {/* Shadow — Old Testament */}
          <div>
            <SectionLabel>
              The Shadow{card.centuriesBefore ? ` · ${card.centuriesBefore}` : ""}
            </SectionLabel>
            <div
              style={{
                background: card.colors.dark,
                borderRadius: 12,
                padding: "14px 16px",
                borderLeft: `3px solid ${card.colors.accent}`,
              }}
            >
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#fff", fontStyle: "italic", marginBottom: 8 }}>
                &ldquo;{card.otText}&rdquo;
              </p>
              <p style={{ fontSize: 12, fontWeight: 700, color: card.colors.accent, letterSpacing: "0.05em" }}>
                {card.otRef}
              </p>
            </div>
          </div>

          {/* Substance — fulfilled in Christ */}
          <div>
            <SectionLabel>Fulfilled in Christ</SectionLabel>
            <div
              style={{
                background: card.colors.dark,
                borderRadius: 12,
                padding: "14px 16px",
                borderLeft: `3px solid ${card.colors.accent}`,
              }}
            >
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#fff", fontStyle: "italic", marginBottom: 8 }}>
                &ldquo;{card.ntText}&rdquo;
              </p>
              <p style={{ fontSize: 12, fontWeight: 700, color: card.colors.accent, letterSpacing: "0.05em" }}>
                {card.ntRef}
              </p>
            </div>
          </div>

          {/* Why it matters */}
          <div>
            <SectionLabel>Why It Matters</SectionLabel>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: "var(--foreground)" }}>{card.significance}</p>
          </div>

          {card.basis === "traditional" && (
            <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "var(--muted)", fontStyle: "italic" }}>
              A long-held reading of the church, not a connection the New Testament states outright.
            </p>
          )}

          {/* Reflection */}
          <div>
            <SectionLabel>Reflection</SectionLabel>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: card.colors.accent, fontStyle: "italic" }}>
              {card.reflection}
            </p>
          </div>
        </div>

        {/* Mark as Learned */}
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
            <span style={{ display: "inline-block" }}>{isLearned ? "✓" : "○"}</span>
            {isLearned ? "Learned" : "Mark as Learned"}
          </button>
        </div>
      </div>
    );
  }
);

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}

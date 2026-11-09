"use client";

import { usePrintOffer } from "../../lib/printOfferContext";

const SITE = "https://www.creedcards.com";

/** One quiet line under the decks. `spot` tells the shop where the tap came from (shelf, deck). */
export function PrintOfferLine({ spot }: { spot: "shelf" | "deck" }) {
  const offer = usePrintOffer();
  if (!offer) return null;
  const href = `${SITE}/?src=${encodeURIComponent(`${offer.src}-${spot}`)}#gift`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 4px",
        minHeight: 44,
        borderTop: "1px solid var(--border)",
        color: "var(--muted)",
        fontSize: 14,
        textDecoration: "none",
      }}
    >
      <DeckPicture />
      <span>
        Who would this bless? <b style={{ color: "var(--foreground)", fontWeight: 650 }}>Give the printed deck</b>
      </span>
    </a>
  );
}

/** Two stacked cards, so the line reads as "a real deck" at a glance. */
function DeckPicture() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden style={{ flexShrink: 0 }}>
      <rect x="8" y="3" width="17" height="23" rx="2.5" transform="rotate(8 16 15)" fill="var(--surface-2)" stroke="var(--border-strong)" />
      <rect x="5" y="4" width="17" height="23" rx="2.5" fill="#7f1d1d" />
      <path d="M13.5 10v11M10 14h7" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

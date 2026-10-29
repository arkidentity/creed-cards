"use client";

/**
 * GoDeeperPage — where a printed card's QR code lands (`/cc/<deck>-<card>`,
 * e.g. /cc/1-25; a bare card number means the Essentials deck). Shows the
 * card's front text with Go Deeper already open, plus a way into the deck.
 * Public: no sign-in, since most people scanning won't have an account.
 */

import { useEffect } from "react";
import type { CreedCard } from "../../lib/cardData";
import { getCard, getDeck } from "../../lib/decks";
import { getCreedGoDeeper } from "../../lib/goDeeper";
import { useBasePath } from "../../lib/basePathContext";
import { useCreedTracker } from "../../lib/trackingContext";
import { GoDeeperBody, sheetVars } from "./GoDeeperSheet";

export function parseCardCode(code: string): { deckId: number; cardId: number } | null {
  const m = /^(?:(\d+)-)?(\d+)$/.exec(code.trim());
  if (!m) return null;
  return { deckId: m[1] ? parseInt(m[1]) : 1, cardId: parseInt(m[2]) };
}

export function GoDeeperPage({ code }: { code: string }) {
  const basePath = useBasePath();
  const track = useCreedTracker();
  const parsed = parseCardCode(code);
  const deck = parsed ? getDeck(parsed.deckId) : undefined;
  const card = parsed ? (getCard(parsed.deckId, parsed.cardId) as CreedCard | undefined) : undefined;
  const entry = card ? getCreedGoDeeper({ id: card.id, deckId: parsed!.deckId }) : null;

  useEffect(() => {
    if (card && entry) track({ deckId: card.deckId ?? 1, cardId: card.id, title: card.title, event: "open" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  const deckHref = deck ? `${basePath}/deck/${deck.slug}/study?start=${card?.id ?? ""}` : `${basePath || "/"}`;

  if (!card || !entry || !deck) {
    return (
      <main style={{ ...shell, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 24 }}>
        <div>
          <p style={{ fontSize: 16, marginBottom: 16 }}>We couldn&apos;t find that card.</p>
          <a href={basePath || "/"} style={{ color: "#e8b65c", fontWeight: 600 }}>See all Creed Cards</a>
        </div>
      </main>
    );
  }

  const accent = card.colors.accent;

  return (
    <main style={shell}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <header style={{ background: card.colors.dark, padding: "28px 20px 20px" }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, marginBottom: 6 }}>
            {deck.name} · #{card.id}
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 700, color: "#fff", margin: 0 }}>{card.title}</h1>
          <div style={{ fontSize: 26, fontWeight: 300, color: "#fff", marginTop: 8 }}>{card.term}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
            {card.translation} · say it <span style={{ color: "#fff" }}>{entry.pronunciation}</span>
          </div>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", marginTop: 14 }}>{card.definition}</p>
        </header>

        <div style={{ padding: "22px 20px 40px", display: "flex", flexDirection: "column", gap: 22 }}>
          <GoDeeperBody card={card} entry={entry} />
          <div style={{ display: "flex", justifyContent: "flex-end", paddingTop: 8 }}>
            <a
              href={deckHref}
              style={{ padding: "12px 18px", borderRadius: 12, border: `1.5px solid ${accent}`, color: accent, fontSize: 14, fontWeight: 600, textDecoration: "none" }}
            >
              Study the whole deck
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

const shell: React.CSSProperties = { ...sheetVars, minHeight: "100dvh", background: "#111827" };

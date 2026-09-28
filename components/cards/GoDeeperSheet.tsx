"use client";

/**
 * GoDeeperSheet — bottom sheet with the optional extra layer for a Creed Card.
 *
 * Rendered in a portal on document.body: the card lives inside a 3D-transformed
 * parent, which would otherwise trap a position:fixed sheet. React still bubbles
 * synthetic events through portals to the card (whose onClick flips it), so the
 * sheet stops click/pointer/touch propagation at its root.
 */

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { CreedCard } from "../../lib/cardData";
import type { CreedGoDeeper } from "../../lib/goDeeper";

interface GoDeeperSheetProps {
  card: CreedCard;
  entry: CreedGoDeeper;
  open: boolean;
  onClose: () => void;
}

const stop = (e: React.SyntheticEvent) => e.stopPropagation();

export function GoDeeperSheet({ card, entry, open, onClose }: GoDeeperSheetProps) {
  const [mounted, setMounted] = useState(false);
  const [openQ, setOpenQ] = useState<number | null>(null);
  const dragStartY = useRef<number | null>(null);

  useEffect(() => setMounted(true), []);

  // Lock page scroll + close on Escape while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!mounted) return null;

  const accent = card.colors.accent;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div
          key="go-deeper-sheet"
          onClick={stop}
          onPointerDown={stop}
          onTouchStart={stop}
          style={{ position: "fixed", inset: 0, zIndex: 1000, display: "flex", alignItems: "flex-end", justifyContent: "center", ...sheetVars }}
          role="dialog"
          aria-modal="true"
          aria-label={`Go deeper: ${card.title}`}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.7)" }}
          />

          {/* Sheet */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
              height: "calc(100dvh - 56px - env(safe-area-inset-top, 0px))",
              maxHeight: 820,
              background: "#111827",
              borderRadius: "20px 20px 0 0",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 -8px 30px rgba(0,0,0,0.35)",
            }}
          >
            {/* Header — drag down here to close */}
            <div
              onTouchStart={(e) => { dragStartY.current = e.touches[0].clientY; }}
              onTouchMove={(e) => {
                if (dragStartY.current !== null && e.touches[0].clientY - dragStartY.current > 80) {
                  dragStartY.current = null;
                  onClose();
                }
              }}
              onTouchEnd={() => { dragStartY.current = null; }}
              style={{
                background: card.colors.dark,
                borderRadius: "20px 20px 0 0",
                padding: "10px 20px 16px",
                flexShrink: 0,
              }}
            >
              <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.25)", margin: "0 auto 12px" }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: accent, marginBottom: 4 }}>
                    Go Deeper · {card.title}
                  </div>
                  <div style={{ fontSize: 24, fontWeight: 300, color: "#fff", lineHeight: 1.25 }}>{card.term}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
                    {card.translation} · say it <span style={{ color: "#fff" }}>{entry.pronunciation}</span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close"
                  style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 16, border: "none", background: "rgba(255,255,255,0.1)", color: "#fff", fontSize: 18, lineHeight: "32px", cursor: "pointer" }}
                >
                  ×
                </button>
              </div>
            </div>

            {/* Body */}
            <div
              style={{
                padding: "18px 20px",
                paddingBottom: "calc(24px + var(--safe-bottom, 0px))",
                overflowY: "auto",
                overscrollBehavior: "contain",
                WebkitOverflowScrolling: "touch",
                display: "flex",
                flexDirection: "column",
                gap: 22,
              }}
            >
              <Section label="What It Means">
                <p style={body}>{entry.meaning}</p>
                {entry.wordNote && <p style={{ ...muted, marginTop: 8 }}>{entry.wordNote}</p>}
              </Section>

              <Section label="Where It Shows Up">
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entry.verses.map((v) => (
                    <div key={v.ref} style={{ borderLeft: `2px solid ${v.usesWord ? accent : "var(--border-strong)"}`, paddingLeft: 12 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 13, fontWeight: 700, color: "var(--foreground)" }}>{v.ref}</span>
                        <span style={{ fontSize: 10, letterSpacing: "0.06em", textTransform: "uppercase", color: v.usesWord ? accent : "var(--muted)" }}>
                          {v.usesWord ? "uses this word" : "teaches this idea"}
                        </span>
                      </div>
                      <p style={{ ...muted, marginTop: 2 }}>{v.note}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section label="The Story Behind It">
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entry.story.map((para, i) => <p key={i} style={body}>{para}</p>)}
                </div>
              </Section>

              {entry.people && entry.people.length > 0 && (
                <Section label="The People">
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {entry.people.map((p) => (
                      <div key={p.name}>
                        <span style={{ fontSize: 14, fontWeight: 700, color: "var(--foreground)" }}>{p.name}</span>
                        <span style={{ fontSize: 12, color: accent, marginLeft: 8 }}>{p.say}</span>
                        <p style={{ ...muted, marginTop: 2 }}>{p.who}</p>
                      </div>
                    ))}
                  </div>
                </Section>
              )}

              {entry.questions && entry.questions.length > 0 && (
                <Section label="Questions People Ask">
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {entry.questions.map((item, i) => {
                      const isOpen = openQ === i;
                      return (
                        <div key={item.q} style={{ border: "1px solid var(--border)", borderRadius: 10, overflow: "hidden" }}>
                          <button
                            onClick={() => setOpenQ(isOpen ? null : i)}
                            aria-expanded={isOpen}
                            style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: "transparent", border: "none", textAlign: "left", cursor: "pointer", color: "var(--foreground)", fontSize: 14, fontWeight: 600 }}
                          >
                            <span style={{ flex: 1 }}>{item.q}</span>
                            <span style={{ color: "var(--muted)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>⌄</span>
                          </button>
                          {isOpen && <p style={{ ...muted, padding: "0 14px 14px" }}>{item.a}</p>}
                        </div>
                      );
                    })}
                  </div>
                </Section>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}

// The host app (Daily DNA / ARK Identity) doesn't define the creed-cards theme
// vars, and the sheet is portaled to document.body — so it carries its own.
const sheetVars = {
  "--surface": "#111827",
  "--foreground": "#f5f5f5",
  "--muted": "#a3adbf",
  "--border": "rgba(255, 255, 255, 0.1)",
  "--border-strong": "rgba(255, 255, 255, 0.18)",
  color: "#f5f5f5",
} as React.CSSProperties;

const body: React.CSSProperties = { fontSize: 15, lineHeight: 1.6, color: "var(--foreground)" };
const muted: React.CSSProperties = { fontSize: 14, lineHeight: 1.55, color: "var(--muted)" };

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
        {label}
      </div>
      {children}
    </div>
  );
}

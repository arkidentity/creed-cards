// Deck registry — the one place that knows about all four Creed Cards decks.
//
// Phase A (DECK-STRATEGY.md Part 4): internal only. No routes, no storage, and
// no visible change — the app still reads Essentials via `CARD_DATA` in
// `lib/cardData.ts`. This registry just makes the other decks addressable so
// Phases B (storage re-key) and C (dashboard) have something to build on.

import { CARD_DATA, CATEGORY_INFO, type CreedCard } from "./cardData";
import { FOUNDATIONS_CARDS } from "./decks/foundationsCards";
import { FULFILLED_CARDS, type FulfillmentCard } from "./decks/fulfilledCards";

export type { CreedCard, FulfillmentCard };

/**
 * `promise`-schema card. Stub only — the schema is not designed yet
 * (DECK-LINEUP.md "Deck 3 — Creed Cards (Promises)"). Fields will firm up when
 * the deck is authored; nothing consumes this type today.
 */
export interface PromiseCard {
  id: number;
  deckId: number;
  category: string;
  categorySlug: string;
  title: string;
  shortDesc: string;
  promise: string; // short form
  verse: string; // quoted
  reference: string;
  context: string; // covenant context — who / when it was given
  condition?: string; // many are unconditional "in Christ" (2 Cor 1:20)
  speaksTo: string[]; // the situations: fear, weariness, guilt, provision, ...
  reflection: string;
  colors: { dark: string; accent: string };
}

export type DeckSchema = "doctrine" | "promise" | "fulfillment";
export type DeckStatus = "live" | "coming-soon";
export type AnyCard = CreedCard | FulfillmentCard | PromiseCard;

export interface DeckCategory {
  slug: string; // e.g. "trinity", "creeds", "prophecy"
  name: string; // display, e.g. "Trinity & Nature of God"
  dark: string; // hex
  accent: string; // hex
}

export interface Deck {
  id: number; // 1 essentials, 2 foundations, 3 promises, 4 fulfilled
  slug: "essentials" | "foundations" | "promises" | "fulfilled";
  name: string; // "Creed Cards (Essentials)"
  shortName: string; // "Essentials"
  tagline: string;
  schema: DeckSchema;
  status: DeckStatus;
  // Provisional deck-shelf cover (Phase C). Not rendered yet.
  cover: { dark: string; accent: string };
  categories: DeckCategory[];
  cards: CreedCard[] | FulfillmentCard[] | PromiseCard[];
}

// ─── Deck 1 — Essentials ────────────────────────────────────────────────────
// Categories mirror `CATEGORY_INFO` in cardData.ts (kept as-is for the current
// Essentials UI); re-expressed here with the DeckCategory shape (`dark`, no `icon`).

const ESSENTIALS_CATEGORIES: DeckCategory[] = (
  ["trinity", "christ", "spirit", "salvation", "scripture", "church", "life", "eschatology"] as const
).map((slug) => ({
  slug,
  name: CATEGORY_INFO[slug].name,
  dark: CATEGORY_INFO[slug].color,
  accent: CATEGORY_INFO[slug].accent,
}));

const ESSENTIALS_DECK: Deck = {
  id: 1,
  slug: "essentials",
  name: "Creed Cards (Essentials)",
  shortName: "Essentials",
  tagline: "Theological Foundations",
  schema: "doctrine",
  status: "live",
  cover: { dark: "#0f172a", accent: "#3b82f6" },
  categories: ESSENTIALS_CATEGORIES,
  cards: CARD_DATA,
};

// ─── Deck 2 — Foundations ───────────────────────────────────────────────────
// 7 slugs reused from Essentials + `creeds` and `covenant`. Names/colours per
// PHASE-A-HANDOFF.md (scripture reuses Essentials' purple — settled 2026-09-06).

const FOUNDATIONS_CATEGORIES: DeckCategory[] = [
  { slug: "creeds", name: "The Creeds & Councils", dark: "#44403c", accent: "#e8b562" },
  { slug: "scripture", name: "Holy Scripture, Deeper", dark: "#4c1d95", accent: "#c084fc" },
  { slug: "christ", name: "Deeper Christology", dark: "#7f1d1d", accent: "#fca5a5" },
  { slug: "covenant", name: "Covenant & Redemptive History", dark: "#3f2d1a", accent: "#d8b48a" },
  { slug: "salvation", name: "Deeper Soteriology", dark: "#14532d", accent: "#86efac" },
  { slug: "spirit", name: "Deeper Pneumatology", dark: "#713f12", accent: "#fbbf24" },
  { slug: "church", name: "Deeper Ecclesiology", dark: "#7c2d12", accent: "#fdba74" },
  { slug: "eschatology", name: "Deeper Last Things", dark: "#1e293b", accent: "#94a3b8" },
  { slug: "life", name: "The Christian Life, Deeper", dark: "#134e4a", accent: "#5eead4" },
];

const FOUNDATIONS_DECK: Deck = {
  id: 2,
  slug: "foundations",
  name: "Creed Cards (Foundations)",
  shortName: "Foundations",
  tagline: "Creeds, councils, and the deeper cuts of doctrine",
  schema: "doctrine",
  status: "coming-soon",
  cover: { dark: "#44403c", accent: "#e8b562" },
  categories: FOUNDATIONS_CATEGORIES,
  cards: FOUNDATIONS_CARDS,
};

// ─── Deck 3 — Promises ──────────────────────────────────────────────────────
// Placeholder. Schema + cards + category icons are Phase H.

const PROMISES_DECK: Deck = {
  id: 3,
  slug: "promises",
  name: "Creed Cards (Promises)",
  shortName: "Promises",
  tagline: "God's promises, sorted by the situation they speak to",
  schema: "promise",
  status: "coming-soon",
  cover: { dark: "#134e4a", accent: "#5eead4" },
  categories: [],
  cards: [],
};

// ─── Deck 4 — Fulfilled ─────────────────────────────────────────────────────

const FULFILLED_CATEGORIES: DeckCategory[] = [
  { slug: "prophecy", name: "Messianic Prophecies", dark: "#1e1b4b", accent: "#a5b4fc" },
  { slug: "feasts", name: "The Feasts & Sacred Calendar", dark: "#713f12", accent: "#fbbf24" },
  { slug: "persons", name: "Persons as Types", dark: "#7c2d12", accent: "#fdba74" },
  { slug: "objects", name: "Objects & Institutions", dark: "#292524", accent: "#d6d3d1" },
  { slug: "events", name: "Shadow Events", dark: "#134e4a", accent: "#5eead4" },
];

const FULFILLED_DECK: Deck = {
  id: 4,
  slug: "fulfilled",
  name: "Creed Cards (Fulfilled)",
  shortName: "Fulfilled",
  tagline: "Old Testament prophecies and types fulfilled in Jesus",
  schema: "fulfillment",
  status: "coming-soon",
  cover: { dark: "#1e1b4b", accent: "#a5b4fc" },
  categories: FULFILLED_CATEGORIES,
  cards: FULFILLED_CARDS,
};

// ─── Registry + accessors ──────────────────────────────────────────────────

export const DECKS: Deck[] = [
  ESSENTIALS_DECK,
  FOUNDATIONS_DECK,
  PROMISES_DECK,
  FULFILLED_DECK,
];

export function getDeck(idOrSlug: number | string): Deck | undefined {
  return typeof idOrSlug === "number"
    ? DECKS.find((d) => d.id === idOrSlug)
    : DECKS.find((d) => d.slug === idOrSlug);
}

export function getCard(deckId: number, cardId: number): AnyCard | undefined {
  const cards = getDeck(deckId)?.cards as AnyCard[] | undefined;
  return cards?.find((c) => c.id === cardId);
}

/** Global card key: `${deckId}:${cardId}`. */
export function cardKey(deckId: number, cardId: number): string {
  return `${deckId}:${cardId}`;
}

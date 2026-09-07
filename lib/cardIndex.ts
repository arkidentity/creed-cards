/**
 * Typed access to card-index.json — the generated single source for creed card
 * reference data (see scripts/gen-card-index.ts). Regenerate with
 * `npm run gen:index` (also runs on prebuild) whenever card copy or the deck
 * list changes, and commit card-index.json.
 */
import indexJson from "../card-index.json";

export interface CardIndexEntry {
  deckId: number;
  id: number;
  title: string;
  category: string;
  categorySlug: string;
}

export interface CardIndexDeck {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  status: "live" | "coming-soon";
  schema: "doctrine" | "promise" | "fulfillment";
  categories: { slug: string; name: string }[];
}

export interface CardIndex {
  decks: CardIndexDeck[];
  cards: CardIndexEntry[];
}

export const CARD_INDEX = indexJson as CardIndex;

export function indexCardTitle(deckId: number, cardId: number): string | undefined {
  return CARD_INDEX.cards.find((c) => c.deckId === deckId && c.id === cardId)?.title;
}

export function indexDeckCards(deckId: number): CardIndexEntry[] {
  return CARD_INDEX.cards.filter((c) => c.deckId === deckId);
}

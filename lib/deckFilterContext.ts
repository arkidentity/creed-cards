"use client";

import { createContext, useContext, useMemo } from "react";
import { DECKS, type Deck } from "./decks";

/**
 * Which decks a host app shows. null = every deck (Daily DNA, ark-identity).
 * creedcards.com passes ["essentials"] so the unprinted decks stay private until they launch.
 * Set it with <CreedCardsProvider decks={[...]}>.
 */
export const DeckFilterContext = createContext<Deck["slug"][] | null>(null);

/** The decks this host shows, in registry order. */
export function useVisibleDecks(): Deck[] {
  const only = useContext(DeckFilterContext);
  const key = only?.join(",") ?? "";
  // Keyed on the slugs, so a host passing a fresh array each render doesn't re-run effects that depend on this.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => (only ? DECKS.filter((d) => only.includes(d.slug)) : DECKS), [key]);
}

/** Is this deck shown in this host? */
export function useDeckAllowed(): (deck: Deck | undefined) => boolean {
  const only = useContext(DeckFilterContext);
  return (deck) => !!deck && (!only || only.includes(deck.slug));
}

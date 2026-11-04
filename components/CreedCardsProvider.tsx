"use client";
import { BasePathContext } from "../lib/basePathContext";
import { DeckFilterContext } from "../lib/deckFilterContext";
import type { Deck } from "../lib/decks";
import { TrackingContext, type CreedTracker } from "../lib/trackingContext";

export function CreedCardsProvider({
  basePath = "",
  onTrack,
  decks,
  children,
}: {
  basePath?: string;
  onTrack?: CreedTracker;
  /** Show only these decks (e.g. ["essentials"]). Omit for every deck. */
  decks?: Deck["slug"][];
  children: React.ReactNode;
}) {
  return (
    <BasePathContext.Provider value={basePath}>
      <TrackingContext.Provider value={onTrack ?? null}>
        <DeckFilterContext.Provider value={decks ?? null}>{children}</DeckFilterContext.Provider>
      </TrackingContext.Provider>
    </BasePathContext.Provider>
  );
}

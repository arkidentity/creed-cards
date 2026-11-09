"use client";
import { BasePathContext } from "../lib/basePathContext";
import { DeckFilterContext } from "../lib/deckFilterContext";
import type { Deck } from "../lib/decks";
import { PrintOfferContext, type PrintOffer } from "../lib/printOfferContext";
import { TrackingContext, type CreedTracker } from "../lib/trackingContext";

export function CreedCardsProvider({
  basePath = "",
  onTrack,
  decks,
  printOffer,
  children,
}: {
  basePath?: string;
  onTrack?: CreedTracker;
  /** Show only these decks (e.g. ["essentials"]). Omit for every deck. */
  decks?: Deck["slug"][];
  /** Show the "Give the printed deck" line; src names the host app (dailydna, arkidentity). Omit to hide it. */
  printOffer?: PrintOffer;
  children: React.ReactNode;
}) {
  return (
    <BasePathContext.Provider value={basePath}>
      <TrackingContext.Provider value={onTrack ?? null}>
        <DeckFilterContext.Provider value={decks ?? null}>
          <PrintOfferContext.Provider value={printOffer ?? null}>{children}</PrintOfferContext.Provider>
        </DeckFilterContext.Provider>
      </TrackingContext.Provider>
    </BasePathContext.Provider>
  );
}

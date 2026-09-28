"use client";

import { createContext, useContext } from "react";

/**
 * Optional usage tracking, supplied by the host app (Daily DNA passes one;
 * ARK Identity doesn't). creed-cards has no database of its own, so it only
 * reports events upward. Handlers must be fire-and-forget and never throw.
 *
 *   back_view — the back of a card that HAS a Go Deeper entry was shown
 *               (the denominator: how many people could have tapped it)
 *   open      — Go Deeper sheet opened
 *   question  — one of the "Questions People Ask" was expanded
 */
export type CreedTrackEvent = "back_view" | "open" | "question";

export type CreedTracker = (e: {
  deckId: number;
  cardId: number;
  title: string;
  event: CreedTrackEvent;
  question?: string;
}) => void;

export const TrackingContext = createContext<CreedTracker | null>(null);

/** Returns a safe tracker: a no-op when the host app didn't supply one. */
export function useCreedTracker(): CreedTracker {
  const track = useContext(TrackingContext);
  return (e) => {
    try {
      track?.(e);
    } catch {
      // Tracking must never affect the reader.
    }
  };
}

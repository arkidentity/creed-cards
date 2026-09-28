"use client";
import { BasePathContext } from "../lib/basePathContext";
import { TrackingContext, type CreedTracker } from "../lib/trackingContext";

export function CreedCardsProvider({
  basePath = "",
  onTrack,
  children,
}: {
  basePath?: string;
  onTrack?: CreedTracker;
  children: React.ReactNode;
}) {
  return (
    <BasePathContext.Provider value={basePath}>
      <TrackingContext.Provider value={onTrack ?? null}>{children}</TrackingContext.Provider>
    </BasePathContext.Provider>
  );
}

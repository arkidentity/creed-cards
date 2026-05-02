"use client";
import { BasePathContext } from "../lib/basePathContext";

export function CreedCardsProvider({ basePath = "", children }: { basePath?: string; children: React.ReactNode }) {
  return <BasePathContext.Provider value={basePath}>{children}</BasePathContext.Provider>;
}

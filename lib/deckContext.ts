"use client";

import { createContext, useContext } from "react";

/**
 * The deck the current route is scoped to. `/deck/[slug]` sets it; the global
 * home (`/`) leaves it null. Lets study/card components read the active deck
 * without each re-parsing the route.
 */
export const ActiveDeckContext = createContext<number | null>(null);

export function useActiveDeckId(): number | null {
  return useContext(ActiveDeckContext);
}

"use client";

import { createContext, useContext } from "react";

export const BasePathContext = createContext("");

export function useBasePath() {
  return useContext(BasePathContext);
}

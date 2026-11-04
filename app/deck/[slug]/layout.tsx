"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getDeck } from "../../../lib/decks";
import { ActiveDeckContext } from "../../../lib/deckContext";
import { useDeckAllowed } from "../../../lib/deckFilterContext";

export default function DeckLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const allowed = useDeckAllowed();
  const deck = getDeck(slug);
  if (!deck || !allowed(deck)) notFound();

  return (
    <ActiveDeckContext.Provider value={deck.id}>
      {children}
    </ActiveDeckContext.Provider>
  );
}

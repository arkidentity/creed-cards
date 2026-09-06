"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import { getDeck } from "../../../lib/decks";
import { ActiveDeckContext } from "../../../lib/deckContext";

export default function DeckLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const deck = getDeck(slug);
  if (!deck) notFound();

  return (
    <ActiveDeckContext.Provider value={deck.id}>
      {children}
    </ActiveDeckContext.Provider>
  );
}

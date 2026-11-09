"use client";

import { createContext, useContext } from "react";

/**
 * The printed-deck line ("Who would this bless? Give the printed deck") at the bottom of the shelf and each deck home.
 * Opt-in per host: <CreedCardsProvider printOffer={{ src: "dailydna" }}>. Daily DNA (every church) and ark-identity
 * turn it on; creedcards.com leaves it off (the site already sells the deck). Just a link: no prices or store code here.
 */
export type PrintOffer = { src: string };
export const PrintOfferContext = createContext<PrintOffer | null>(null);
export const usePrintOffer = () => useContext(PrintOfferContext);

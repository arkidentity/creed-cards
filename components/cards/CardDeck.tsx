"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { CreedCard } from "@/lib/cardData";
import { CATEGORY_INFO } from "@/lib/cardData";
import { CreedCard as CreedCardComponent } from "./CreedCard";

interface CardDeckProps {
  cards: CreedCard[];
  currentIndex: number;
  onNavigate: (direction: "next" | "prev") => void;
  isFlipped: boolean;
  onFlip: () => void;
  learnedCards: number[];
  onToggleLearned: (id: number) => void;
}

const variants = {
  enterFromRight: {
    x: "60%",
    scale: 0.92,
    opacity: 0,
  },
  enterFromLeft: {
    x: "-60%",
    scale: 0.92,
    opacity: 0,
  },
  center: {
    x: 0,
    scale: 1,
    opacity: 1,
  },
  exitLeft: {
    x: "-120%",
    rotate: -8,
    opacity: 0,
    transition: { duration: 0.3 },
  },
  exitRight: {
    x: "120%",
    rotate: 8,
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export function CardDeck({
  cards,
  currentIndex,
  onNavigate,
  isFlipped,
  onFlip,
  learnedCards,
  onToggleLearned,
}: CardDeckProps) {
  const directionRef = useRef<"next" | "prev">("next");
  const backRef = useRef<HTMLDivElement | null>(null);
  const card = cards[currentIndex];
  const nextCard = cards[(currentIndex + 1) % cards.length];
  const prevCard = cards[(currentIndex - 1 + cards.length) % cards.length];

  const getCategoryBg = (c: CreedCard) =>
    CATEGORY_INFO[c.categorySlug]?.color ?? "#0f172a";

  const handleNavigate = (dir: "next" | "prev") => {
    directionRef.current = dir;
    onNavigate(dir);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNavigate("next");
      else if (e.key === "ArrowLeft") handleNavigate("prev");
      else if (e.key === " ") {
        e.preventDefault();
        onFlip();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  if (!card) return null;

  return (
    <div style={{ position: "relative", height: "100%", userSelect: "none" }}>
      {/* Ghost card 2 (furthest back) */}
      <div
        className="card-ghost-2"
        style={{
          position: "absolute",
          inset: 0,
          background: getCategoryBg(prevCard),
          borderRadius: 20,
        }}
      />
      {/* Ghost card 1 (one behind) */}
      <div
        className="card-ghost-1"
        style={{
          position: "absolute",
          inset: 0,
          background: getCategoryBg(nextCard),
          borderRadius: 20,
        }}
      />

      {/* Active card with drag */}
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={card.id + "-" + directionRef.current}
          variants={variants}
          initial={directionRef.current === "next" ? "enterFromRight" : "enterFromLeft"}
          animate="center"
          exit={directionRef.current === "next" ? "exitLeft" : "exitRight"}
          transition={{ type: "spring", stiffness: 350, damping: 35 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
          onDragEnd={(_, info) => {
            const { offset, velocity } = info;
            if (offset.x < -80 || velocity.x < -300) handleNavigate("next");
            else if (offset.x > 80 || velocity.x > 300) handleNavigate("prev");
          }}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          <CreedCardComponent
            card={card}
            cardNumber={currentIndex + 1}
            totalCards={cards.length}
            isFlipped={isFlipped}
            onFlip={onFlip}
            isLearned={learnedCards.includes(card.id)}
            onToggleLearned={() => onToggleLearned(card.id)}
            backRef={backRef}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

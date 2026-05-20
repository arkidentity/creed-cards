"use client";

import { useRef, type RefObject } from "react";
import { motion } from "framer-motion";
import type { CreedCard as CreedCardType } from "../../lib/cardData";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { playFlipSound } from "../../lib/progress";

interface CreedCardProps {
  card: CreedCardType;
  cardNumber: number;
  totalCards: number;
  isFlipped: boolean;
  onFlip: () => void;
  isLearned: boolean;
  onToggleLearned: () => void;
  backRef: RefObject<HTMLDivElement | null>;
}

export function CreedCard({
  card,
  cardNumber,
  totalCards,
  isFlipped,
  onFlip,
  isLearned,
  onToggleLearned,
  backRef,
}: CreedCardProps) {
  const handleClick = () => {
    playFlipSound();
    if (typeof navigator !== "undefined" && navigator.vibrate) {
      navigator.vibrate(8);
    }
    onFlip();
  };

  return (
    <div className="card-perspective" style={{ height: "100%" }}>
      <motion.div
        className="card-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <CardFront card={card} cardNumber={cardNumber} totalCards={totalCards} />
        <CardBack ref={backRef} card={card} isLearned={isLearned} onToggleLearned={onToggleLearned} />
      </motion.div>
    </div>
  );
}

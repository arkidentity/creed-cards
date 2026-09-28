"use client";

import { type RefObject, useEffect } from "react";
import { motion } from "framer-motion";
import type { CreedCard as CreedCardType } from "../../lib/cardData";
import type { FulfillmentCard } from "../../lib/decks/fulfilledCards";
import type { DeckSchema, AnyCard } from "../../lib/decks";
import { CardFront } from "./CardFront";
import { CardBack } from "./CardBack";
import { FulfillmentCardFront } from "./FulfillmentCardFront";
import { FulfillmentCardBack } from "./FulfillmentCardBack";
import { playFlipSound } from "../../lib/progress";
import { getCreedGoDeeper } from "../../lib/goDeeper";
import { useCreedTracker } from "../../lib/trackingContext";

interface CreedCardProps {
  card: AnyCard;
  schema?: DeckSchema;
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
  schema = "doctrine",
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

  const isFulfillment = schema === "fulfillment";

  // Count back views only for cards with Go Deeper: it's the denominator for open rate.
  const track = useCreedTracker();
  const hasGoDeeper = !isFulfillment && !!getCreedGoDeeper(card as CreedCardType);
  useEffect(() => {
    if (isFlipped && hasGoDeeper) {
      track({ deckId: card.deckId ?? 1, cardId: card.id, title: card.title, event: "back_view" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFlipped, hasGoDeeper, card.id]);

  return (
    <div className="card-perspective" style={{ height: "100%" }}>
      <motion.div
        className="card-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        {isFulfillment ? (
          <>
            <FulfillmentCardFront
              card={card as FulfillmentCard}
              cardNumber={cardNumber}
              totalCards={totalCards}
            />
            <FulfillmentCardBack
              ref={backRef}
              card={card as FulfillmentCard}
              isLearned={isLearned}
              onToggleLearned={onToggleLearned}
            />
          </>
        ) : (
          <>
            <CardFront card={card as CreedCardType} cardNumber={cardNumber} totalCards={totalCards} />
            <CardBack
              ref={backRef}
              card={card as CreedCardType}
              isLearned={isLearned}
              onToggleLearned={onToggleLearned}
            />
          </>
        )}
      </motion.div>
    </div>
  );
}

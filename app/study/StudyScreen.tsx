"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  CARD_DATA,
  CATEGORY_INFO,
  getCardOfTheDay,
  type CreedCard,
  type CategorySlug,
} from "@/lib/cardData";
import {
  getLearnedCards,
  isCardLearned,
  toggleCardLearned,
  undoLastToggle,
  setLastStudiedCard,
  incrementTapHintCount,
  getTapHintCount,
} from "@/lib/progress";
import { CardDeck } from "@/components/cards/CardDeck";
import { Toast } from "@/components/ui/Toast";

type FilterMode = "all" | "unlearned" | "learned";
type StudyMode = "sequential" | "random" | "category" | "daily";

interface UndoToast {
  message: string;
  cardId: number;
}

function buildCardList(
  mode: StudyMode,
  filter: FilterMode,
  startId: number | null,
  category: string | null,
  learnedIds: number[]
): { cards: CreedCard[]; startIndex: number } {
  let cards: CreedCard[] = [...CARD_DATA];

  if (mode === "daily") {
    const today = getCardOfTheDay();
    return { cards: [today], startIndex: 0 };
  }

  if (category) {
    cards = cards.filter((c) => c.categorySlug === category);
  }

  if (filter === "unlearned") {
    cards = cards.filter((c) => !learnedIds.includes(c.id));
  } else if (filter === "learned") {
    cards = cards.filter((c) => learnedIds.includes(c.id));
  }

  if (mode === "random") {
    cards = [...cards].sort(() => Math.random() - 0.5);
  }

  let startIndex = 0;
  if (startId !== null) {
    const idx = cards.findIndex((c) => c.id === startId);
    if (idx > -1) startIndex = idx;
  }

  return { cards, startIndex };
}

export function StudyScreen() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const mode = (searchParams.get("mode") ?? "sequential") as StudyMode;
  const startParam = searchParams.get("start");
  const filterParam = (searchParams.get("filter") ?? "all") as FilterMode;
  const categoryParam = searchParams.get("category");

  const [learnedIds, setLearnedIds] = useState<number[]>([]);
  const [cards, setCards] = useState<CreedCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<FilterMode>(filterParam);
  const [undoToast, setUndoToast] = useState<UndoToast | null>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const learned = getLearnedCards();
    setLearnedIds(learned);
    const startId = startParam ? parseInt(startParam) : null;
    const { cards: builtCards, startIndex } = buildCardList(
      mode,
      filterParam,
      startId,
      categoryParam,
      learned
    );
    setCards(builtCards);
    setCurrentIndex(startIndex);
    setShowHint(getTapHintCount() < 3);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setIsFlipped(false);
    if (cards[currentIndex]) {
      setLastStudiedCard(cards[currentIndex].id);
    }
  }, [currentIndex, cards]);

  const handleNavigate = useCallback((direction: "next" | "prev") => {
    setCurrentIndex((prev) => {
      if (direction === "next") return (prev + 1) % cards.length;
      return (prev - 1 + cards.length) % cards.length;
    });
  }, [cards.length]);

  const handleFlip = useCallback(() => {
    setIsFlipped((prev) => !prev);
    if (!isFlipped) {
      incrementTapHintCount();
      if (getTapHintCount() >= 3) setShowHint(false);
    }
  }, [isFlipped]);

  const handleToggleLearned = useCallback((cardId: number) => {
    const nowLearned = toggleCardLearned(cardId);
    setLearnedIds(getLearnedCards());
    const card = CARD_DATA.find((c) => c.id === cardId);
    if (card) {
      setUndoToast({
        cardId,
        message: nowLearned ? `"${card.title}" marked as learned` : `"${card.title}" unmarked`,
      });
    }
  }, []);

  const handleUndo = useCallback(() => {
    const result = undoLastToggle();
    if (result) {
      setLearnedIds(getLearnedCards());
    }
    setUndoToast(null);
  }, []);

  const toggleFilter = () => {
    const next: FilterMode = filter === "all" ? "unlearned" : filter === "unlearned" ? "learned" : "all";
    setFilter(next);
    const learned = getLearnedCards();
    const startId = cards[currentIndex]?.id ?? null;
    const { cards: builtCards, startIndex } = buildCardList(mode, next, startId, categoryParam, learned);
    setCards(builtCards);
    setCurrentIndex(startIndex);
    setIsFlipped(false);
  };

  const handleShare = async () => {
    const card = cards[currentIndex];
    if (!card) return;
    const url = `${window.location.origin}/study?mode=sequential&start=${card.id}`;
    const shareData = {
      title: `Creed Cards — ${card.title}`,
      text: card.shortDesc,
      url,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(url);
      }
    } catch {
      // User cancelled or clipboard unavailable
    }
  };

  const categoryName = categoryParam
    ? (CATEGORY_INFO[categoryParam as CategorySlug]?.name ?? categoryParam)
    : null;

  const filterLabel: Record<FilterMode, string> = {
    all: "All",
    unlearned: "New",
    learned: "Learned",
  };

  if (cards.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100dvh",
          gap: 16,
          background: "var(--background)",
          padding: 24,
        }}
      >
        <p style={{ color: "var(--muted)", fontSize: 15, textAlign: "center" }}>
          No cards match this filter.
        </p>
        <button
          onClick={() => router.push("/")}
          style={{
            padding: "10px 24px",
            background: "var(--accent)",
            color: "#000",
            border: "none",
            borderRadius: 10,
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100dvh",
        background: "var(--background)",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          paddingTop: "calc(12px + env(safe-area-inset-top, 0px))",
          flexShrink: 0,
          gap: 8,
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--surface-2)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontSize: 18,
            flexShrink: 0,
          }}
        >
          ←
        </Link>

        <div style={{ flex: 1, textAlign: "center" }}>
          {categoryName ? (
            <div style={{ fontSize: 11, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {categoryName}
            </div>
          ) : (
            <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              {mode === "daily" ? "Daily Card" : mode === "random" ? "Random" : "Study"}
            </div>
          )}
          <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 1 }}>
            {currentIndex + 1} / {cards.length}
          </div>
        </div>

        {/* Filter toggle */}
        <button
          onClick={toggleFilter}
          style={{
            padding: "6px 12px",
            borderRadius: 8,
            border: "1px solid var(--border-strong)",
            background: filter !== "all" ? "var(--accent)" : "var(--surface-2)",
            color: filter !== "all" ? "#000" : "var(--muted)",
            fontSize: 11,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.04em",
          }}
        >
          {filterLabel[filter]}
        </button>

        {/* Share */}
        <button
          onClick={handleShare}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "var(--surface-2)",
            border: "none",
            color: "var(--muted)",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      </div>

      {/* Hint */}
      {showHint && !isFlipped && (
        <div style={{ textAlign: "center", fontSize: 11, color: "var(--muted)", paddingBottom: 4, flexShrink: 0 }}>
          Tap card to flip • Swipe to navigate
        </div>
      )}

      {/* Card area */}
      <div style={{ flex: 1, padding: "0 16px 16px", minHeight: 0 }}>
        <CardDeck
          cards={cards}
          currentIndex={currentIndex}
          onNavigate={handleNavigate}
          isFlipped={isFlipped}
          onFlip={handleFlip}
          learnedCards={learnedIds}
          onToggleLearned={handleToggleLearned}
        />
      </div>

      {/* Undo toast */}
      {undoToast && (
        <Toast
          message={undoToast.message}
          onUndo={handleUndo}
          onDismiss={() => setUndoToast(null)}
        />
      )}
    </div>
  );
}

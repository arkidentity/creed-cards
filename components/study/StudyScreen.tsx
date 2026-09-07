"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getDeck, deckCardOfTheDay, type AnyCard } from "../../lib/decks";
import { useActiveDeckId } from "../../lib/deckContext";
import {
  getLearnedCards,
  toggleCardLearned,
  undoLastToggle,
  setLastStudiedCard,
  incrementTapHintCount,
  getTapHintCount,
} from "../../lib/progress";
import { CardDeck } from "../cards/CardDeck";
import { Toast } from "../ui/Toast";
import { useBasePath } from "../../lib/basePathContext";

type FilterMode = "all" | "unlearned" | "learned";
type StudyMode = "sequential" | "random" | "category" | "daily";

interface UndoToast {
  message: string;
  cardId: number;
}

function buildCardList(
  allCards: AnyCard[],
  mode: StudyMode,
  filter: FilterMode,
  startId: number | null,
  category: string | null,
  learnedIds: number[],
  todayId: number | null
): { cards: AnyCard[]; startIndex: number } {
  let cards: AnyCard[] = [...allCards];

  if (mode === "daily") {
    const startIndex = todayId != null ? cards.findIndex((c) => c.id === todayId) : -1;
    return { cards, startIndex: startIndex > -1 ? startIndex : 0 };
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
  const base = useBasePath();

  const deckId = useActiveDeckId() ?? 1;
  const deck = getDeck(deckId);
  const deckSlug = deck?.slug ?? "essentials";
  const deckCards = (deck?.cards ?? []) as AnyCard[];

  const mode = (searchParams.get("mode") ?? "sequential") as StudyMode;
  const startParam = searchParams.get("start");
  const filterParam = (searchParams.get("filter") ?? "all") as FilterMode;
  const categoryParam = searchParams.get("category");

  const [learnedIds, setLearnedIds] = useState<number[]>([]);
  const [cards, setCards] = useState<AnyCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [filter, setFilter] = useState<FilterMode>(filterParam);
  const [category, setCategory] = useState<string | null>(categoryParam);
  const [topicMenu, setTopicMenu] = useState(false);
  const [undoToast, setUndoToast] = useState<UndoToast | null>(null);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const learned = getLearnedCards(deckId);
    setLearnedIds(learned);
    const startId = startParam ? parseInt(startParam) : null;
    const { cards: builtCards, startIndex } = buildCardList(
      deckCards,
      mode,
      filterParam,
      startId,
      categoryParam,
      learned,
      deckCardOfTheDay(deckId)?.id ?? null
    );
    setCards(builtCards);
    setCurrentIndex(startIndex);
    setShowHint(getTapHintCount() < 3);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deckId]);

  useEffect(() => {
    setIsFlipped(false);
    if (cards[currentIndex]) {
      setLastStudiedCard(cards[currentIndex].id, deckId);
    }
  }, [currentIndex, cards, deckId]);

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
    const nowLearned = toggleCardLearned(cardId, deckId);
    setLearnedIds(getLearnedCards(deckId));
    const card = deckCards.find((c) => c.id === cardId);
    if (card) {
      setUndoToast({
        cardId,
        message: nowLearned ? `"${card.title}" marked as learned` : `"${card.title}" unmarked`,
      });
    }
  }, [deckId, deckCards]);

  const handleUndo = useCallback(() => {
    const result = undoLastToggle();
    if (result) {
      setLearnedIds(getLearnedCards(deckId));
    }
    setUndoToast(null);
  }, [deckId]);

  const rebuild = (nextFilter: FilterMode, nextCategory: string | null) => {
    const learned = getLearnedCards(deckId);
    const startId = cards[currentIndex]?.id ?? null;
    // once traversing, category/filter changes shouldn't snap back to a "daily" pin
    const traversalMode: StudyMode = mode === "daily" ? "sequential" : mode;
    const { cards: builtCards, startIndex } = buildCardList(
      deckCards,
      traversalMode,
      nextFilter,
      startId,
      nextCategory,
      learned,
      null
    );
    setCards(builtCards);
    setCurrentIndex(startIndex);
    setIsFlipped(false);
  };

  const toggleFilter = () => {
    const next: FilterMode = filter === "all" ? "unlearned" : filter === "unlearned" ? "learned" : "all";
    setFilter(next);
    rebuild(next, category);
  };

  const changeCategory = (slug: string | null) => {
    setCategory(slug);
    setTopicMenu(false);
    rebuild(filter, slug);
  };

  const handleShare = async () => {
    const card = cards[currentIndex];
    if (!card) return;
    const url = `${window.location.origin}${base}/deck/${deckSlug}/study?mode=sequential&start=${card.id}`;
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

  const categories = deck?.categories ?? [];
  const categoryName = category
    ? (categories.find((c) => c.slug === category)?.name ?? category)
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
          onClick={() => router.push(`${base}/deck/${deckSlug}`)}
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
        paddingBottom: "calc(var(--pwa-nav-height, 80px) + env(safe-area-inset-bottom, 0px))",
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
          href={`${base}/deck/${deckSlug}`}
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

        <div style={{ flex: 1, textAlign: "center", position: "relative" }}>
          <button
            onClick={() => categories.length > 0 && setTopicMenu((v) => !v)}
            disabled={categories.length === 0}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: categories.length > 0 ? "pointer" : "default",
              display: "inline-flex",
              alignItems: "center",
              gap: 5,
              color: categoryName ? "var(--accent)" : "var(--muted)",
              fontSize: 11,
              fontWeight: categoryName ? 700 : 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              maxWidth: "100%",
            }}
          >
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {categoryName ?? (mode === "daily" ? "Daily Card" : mode === "random" ? "Random" : "All Topics")}
            </span>
            {categories.length > 0 && <span style={{ fontSize: 9, opacity: 0.7 }}>▾</span>}
          </button>
          <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 1 }}>
            {currentIndex + 1} / {cards.length}
          </div>

          {topicMenu && (
            <>
              <div
                onClick={() => setTopicMenu(false)}
                style={{ position: "fixed", inset: 0, zIndex: 40 }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 41,
                  width: 240,
                  maxHeight: 320,
                  overflowY: "auto",
                  background: "var(--surface-elevated)",
                  border: "1px solid var(--border-strong)",
                  borderRadius: 12,
                  padding: 6,
                  boxShadow: "0 12px 40px rgba(0,0,0,0.5)",
                  textAlign: "left",
                }}
              >
                <TopicItem active={!category} label="All topics" onClick={() => changeCategory(null)} />
                {categories.map((c) => {
                  const catCards = deckCards.filter((x) => x.categorySlug === c.slug);
                  const done = catCards.filter((x) => learnedIds.includes(x.id)).length;
                  return (
                    <TopicItem
                      key={c.slug}
                      active={category === c.slug}
                      label={c.name}
                      meta={`${done}/${catCards.length}`}
                      accent={c.accent}
                      onClick={() => changeCategory(c.slug)}
                    />
                  );
                })}
              </div>
            </>
          )}
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
          schema={deck?.schema}
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

function TopicItem({
  active,
  label,
  meta,
  accent,
  onClick,
}: {
  active: boolean;
  label: string;
  meta?: string;
  accent?: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        width: "100%",
        padding: "9px 10px",
        borderRadius: 8,
        border: "none",
        background: active ? "var(--surface-2)" : "transparent",
        color: "var(--foreground)",
        cursor: "pointer",
        textAlign: "left",
      }}
    >
      {accent ? (
        <span style={{ width: 7, height: 7, borderRadius: 99, background: accent, flexShrink: 0 }} />
      ) : (
        <span style={{ width: 7, flexShrink: 0 }} />
      )}
      <span style={{ flex: 1, fontSize: 12.5, fontWeight: active ? 700 : 500, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {label}
      </span>
      {meta && <span style={{ fontSize: 11, color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>{meta}</span>}
    </button>
  );
}

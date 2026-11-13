"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { generateQuestions } from "../../lib/quizEngine";
import { saveQuizResult, getScoreBadge } from "../../lib/quizProgress";
import { type QuizQuestion } from "../../lib/quizData";
import { useBasePath } from "../../lib/basePathContext";
import { getDeck } from "../../lib/decks";
import { indexCardTitle } from "../../lib/cardIndex";

// Card titles are stored in caps ("ONE GOD IN THREE PERSONS"); read better as a sentence link.
const SMALL = new Set(["a", "an", "and", "as", "at", "by", "for", "in", "of", "on", "or", "the", "to"]);
const titleCase = (t: string) =>
  t.toLowerCase().replace(/\S+/g, (w, i) => (i > 0 && SMALL.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)));

const deckSlug = (deckId: number) => getDeck(deckId)?.slug ?? "essentials";

const LEVEL_LABELS = {
  1: "Words & Meaning",
  2: "Scripture & History",
  3: "Connections",
};

interface QuizSessionProps {
  deckId: number;
  level: 1 | 2 | 3;
}

// ─── Results Screen ────────────────────────────────────────────────────────────

function ResultsScreen({
  score,
  total,
  deckId,
  level,
  onRetake,
  missed,
}: {
  score: number;
  total: number;
  deckId: number;
  level: 1 | 2 | 3;
  onRetake: () => void;
  missed: QuizQuestion[];
}) {
  const base = useBasePath();
  const pct = Math.round((score / total) * 100);
  const badge = getScoreBadge(pct);
  const circumference = 2 * Math.PI * 40;

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 24px",
        paddingTop: "calc(48px + env(safe-area-inset-top, 0px))",
        paddingBottom: "calc(40px + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Score ring */}
      <div style={{ position: "relative", width: 120, height: 120, marginBottom: 20 }}>
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="40" fill="none" stroke="var(--border)" strokeWidth="6" />
          <circle
            cx="60"
            cy="60"
            r="40"
            fill="none"
            stroke={badge.color}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - pct / 100)}
            transform="rotate(-90 60 60)"
            style={{ transition: "stroke-dashoffset 0.8s ease" }}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: 26, fontWeight: 800, color: badge.color, lineHeight: 1 }}>
            {pct}%
          </span>
          <span style={{ fontSize: 10, color: "var(--muted)", marginTop: 2 }}>
            {score}/{total}
          </span>
        </div>
      </div>

      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: badge.color,
          marginBottom: 6,
        }}
      >
        {badge.label}
      </div>

      <h2
        style={{
          fontSize: 22,
          fontWeight: 800,
          color: "var(--foreground)",
          margin: "0 0 6px",
          textAlign: "center",
        }}
      >
        Level {level} Complete
      </h2>
      <p style={{ fontSize: 13, color: "var(--muted)", margin: "0 0 36px", textAlign: "center" }}>
        {LEVEL_LABELS[level]}
      </p>

      {/* Result message */}
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius-card)",
          padding: "16px 20px",
          width: "100%",
          maxWidth: 360,
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: 14, color: "var(--foreground)", margin: 0, lineHeight: 1.6 }}>
          {pct >= 90
            ? "Outstanding — you know this material deeply."
            : pct >= 75
            ? "Strong work. A few more passes and you'll own it."
            : pct >= 50
            ? "Good start. Keep studying and try again."
            : "Don't stop — every attempt builds familiarity. Keep going."}
        </p>
      </div>

      {/* What you missed: the right answer, why, and the card to study */}
      {missed.length > 0 && (
        <div style={{ width: "100%", maxWidth: 360, marginBottom: 24 }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
            To review ({missed.length})
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {missed.map((q) => {
              const title = indexCardTitle(deckId, q.cardId);
              return (
                <div key={q.id} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", padding: "14px 16px" }}>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "var(--foreground)", margin: "0 0 6px", lineHeight: 1.45 }}>{q.question}</p>
                  <p style={{ fontSize: 13, color: "var(--success)", margin: "0 0 6px", lineHeight: 1.45 }}>{q.options[q.correctIndex]}</p>
                  <p style={{ fontSize: 13, color: "var(--muted)", margin: 0, lineHeight: 1.5 }}>{q.explanation}</p>
                  {title && (
                    <Link
                      href={`${base}/deck/${deckSlug(deckId)}/study?mode=sequential&start=${q.cardId}`}
                      style={{ display: "inline-block", marginTop: 10, fontSize: 13, fontWeight: 700, color: "var(--accent)", textDecoration: "none" }}
                    >
                      Study {titleCase(title)} →
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CTAs */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%", maxWidth: 360 }}>
        <button
          onClick={onRetake}
          style={{
            padding: "14px",
            background: "var(--accent)",
            color: "#000",
            border: "none",
            borderRadius: "var(--radius-sm)",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            width: "100%",
          }}
        >
          Retake Level {level}
        </button>

        {level < 3 && (
          <Link
            href={`${base}/deck/${deckSlug(deckId)}/quiz/${level + 1}`}
            style={{
              display: "block",
              padding: "14px",
              background: "var(--surface)",
              color: "var(--foreground)",
              border: "1px solid var(--border-strong)",
              borderRadius: "var(--radius-sm)",
              fontSize: 15,
              fontWeight: 600,
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            Try Level {level + 1} →
          </Link>
        )}

        <Link
          href={`${base}/deck/${deckSlug(deckId)}/quiz`}
          style={{
            display: "block",
            padding: "14px",
            color: "var(--muted)",
            textAlign: "center",
            textDecoration: "none",
            fontSize: 14,
          }}
        >
          Back to Quiz Levels
        </Link>
      </div>
    </div>
  );
}

// ─── Quiz Session ──────────────────────────────────────────────────────────────

export function QuizSession({ deckId, level }: QuizSessionProps) {
  const base = useBasePath();
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [missed, setMissed] = useState<QuizQuestion[]>([]);

  const loadQuestions = useCallback(() => {
    setQuestions(generateQuestions(deckId, level));
    setCurrentIdx(0);
    setSelectedIdx(null);
    setScore(0);
    setMissed([]);
    setIsComplete(false);
  }, [deckId, level]);

  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  const current = questions[currentIdx];
  const total = questions.length;

  // Answer, then read the explanation, then tap Next (no auto-advance: the explanation is the lesson).
  const handleSelect = useCallback(
    (optionIdx: number) => {
      if (selectedIdx !== null || !current) return;
      setSelectedIdx(optionIdx);
      if (optionIdx === current.correctIndex) setScore((s) => s + 1);
      else setMissed((m) => [...m, current]);
    },
    [selectedIdx, current]
  );

  const handleNext = useCallback(() => {
    const nextIdx = currentIdx + 1;
    if (nextIdx >= total) {
      saveQuizResult(deckId, level, score, total);
      setIsComplete(true);
    } else {
      setCurrentIdx(nextIdx);
      setSelectedIdx(null);
    }
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  }, [currentIdx, total, deckId, level, score]);

  if (isComplete) {
    return (
      <ResultsScreen
        score={score}
        total={total}
        deckId={deckId}
        level={level}
        onRetake={loadQuestions}
        missed={missed}
      />
    );
  }

  if (!current) {
    return (
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--background)",
        }}
      >
        <div style={{ fontSize: 13, color: "var(--muted)" }}>Loading…</div>
      </div>
    );
  }

  const pct = ((currentIdx + 1) / total) * 100;

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "var(--background)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "16px 16px 12px",
          paddingTop: "calc(16px + env(safe-area-inset-top, 0px))",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Link
          href={`${base}/deck/${deckSlug(deckId)}/quiz`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 34,
            height: 34,
            borderRadius: 9,
            background: "var(--surface-elevated)",
            color: "var(--foreground)",
            textDecoration: "none",
            fontSize: 16,
            flexShrink: 0,
          }}
        >
          ←
        </Link>

        {/* Progress bar */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: 4,
              background: "var(--border)",
              borderRadius: 99,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                background: "var(--accent)",
                borderRadius: 99,
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>

        <span
          style={{
            fontSize: 12,
            color: "var(--muted)",
            fontWeight: 600,
            flexShrink: 0,
            minWidth: 40,
            textAlign: "right",
          }}
        >
          {currentIdx + 1}/{total}
        </span>

        {/* Level badge */}
        <div
          style={{
            padding: "3px 8px",
            background: "var(--surface-elevated)",
            borderRadius: 6,
            fontSize: 10,
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.06em",
            flexShrink: 0,
          }}
        >
          L{level}
        </div>
      </div>

      {/* Question + Options */}
      <div
        style={{
          flex: 1,
          padding: "12px 16px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          overflowY: "auto",
        }}
      >
        {/* Question card */}
        <div
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-card)",
            padding: "22px 20px",
          }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: 600,
              color: "var(--foreground)",
              margin: 0,
              lineHeight: 1.55,
            }}
          >
            {current.question}
          </p>
        </div>

        {/* Option buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {current.options.map((option, idx) => {
            const isSelected = selectedIdx === idx;
            const isCorrect = idx === current.correctIndex;
            const hasAnswered = selectedIdx !== null;

            let bg = "var(--surface)";
            let border = "1px solid var(--border)";
            let color = "var(--foreground)";

            if (hasAnswered) {
              if (isCorrect) {
                bg = "rgba(34,197,94,0.15)";
                border = "1px solid var(--success)";
                color = "var(--success)";
              } else if (isSelected) {
                bg = "rgba(239,68,68,0.12)";
                border = "1px solid #ef4444";
                color = "#ef4444";
              } else {
                color = "var(--muted)";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={hasAnswered}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  background: bg,
                  border,
                  borderRadius: "var(--radius-sm)",
                  cursor: hasAnswered ? "default" : "pointer",
                  textAlign: "left",
                  width: "100%",
                  transition: "background 0.15s ease, border-color 0.15s ease",
                }}
              >
                {/* Option letter */}
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 7,
                    background: hasAnswered
                      ? isCorrect
                        ? "var(--success)"
                        : isSelected
                        ? "#ef4444"
                        : "var(--surface-elevated)"
                      : "var(--surface-elevated)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 11,
                    fontWeight: 700,
                    color: hasAnswered && (isCorrect || isSelected) ? "#fff" : "var(--muted)",
                    flexShrink: 0,
                    transition: "background 0.15s ease",
                  }}
                >
                  {["A", "B", "C", "D"][idx]}
                </div>
                <span style={{ fontSize: 14, fontWeight: 500, color, lineHeight: 1.4 }}>
                  {option}
                </span>
              </button>
            );
          })}
        </div>

        {/* Explanation (shown after answer) */}
        {selectedIdx !== null && (
          <div
            style={{
              background:
                selectedIdx === current.correctIndex
                  ? "rgba(34,197,94,0.08)"
                  : "rgba(239,68,68,0.07)",
              border: `1px solid ${
                selectedIdx === current.correctIndex ? "rgba(34,197,94,0.3)" : "rgba(239,68,68,0.25)"
              }`,
              borderRadius: "var(--radius-sm)",
              padding: "12px 14px",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color:
                  selectedIdx === current.correctIndex ? "var(--success)" : "#ef4444",
                marginBottom: 5,
                textTransform: "uppercase",
              }}
            >
              {selectedIdx === current.correctIndex ? "Correct" : "Incorrect"}
            </div>
            <p
              style={{
                fontSize: 13,
                color: "var(--foreground)",
                margin: 0,
                lineHeight: 1.55,
              }}
            >
              {current.explanation}
            </p>
          </div>
        )}

        {selectedIdx !== null && (
          <button
            onClick={handleNext}
            autoFocus
            style={{
              alignSelf: "flex-end",
              padding: "13px 22px",
              background: "var(--accent)",
              color: "#000",
              border: "none",
              borderRadius: "var(--radius-sm)",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            {currentIdx + 1 >= total ? "See results" : "Next question →"}
          </button>
        )}
      </div>
    </div>
  );
}

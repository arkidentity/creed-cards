"use client";

import { useEffect, useRef, useState } from "react";

interface ToastProps {
  message: string;
  onUndo: () => void;
  onDismiss: () => void;
}

export function Toast({ message, onUndo, onDismiss }: ToastProps) {
  const [progress, setProgress] = useState(100);
  const startTime = useRef(Date.now());
  const rafRef = useRef<number>(0);
  const DURATION = 10000;

  useEffect(() => {
    const tick = () => {
      const elapsed = Date.now() - startTime.current;
      const remaining = Math.max(0, 100 - (elapsed / DURATION) * 100);
      setProgress(remaining);
      if (remaining > 0) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        onDismiss();
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onDismiss]);

  return (
    <div
      className="toast-enter"
      style={{
        position: "fixed",
        bottom: "calc(90px + env(safe-area-inset-bottom, 0px))",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 200,
        background: "var(--surface-2)",
        border: "1px solid var(--border-strong)",
        borderRadius: 14,
        overflow: "hidden",
        minWidth: 260,
        maxWidth: "calc(100vw - 40px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 16px",
          gap: 12,
        }}
      >
        <span style={{ fontSize: 13, color: "var(--foreground)", flex: 1 }}>
          {message}
        </span>
        <button
          onClick={onUndo}
          style={{
            background: "var(--accent)",
            color: "#000",
            border: "none",
            borderRadius: 8,
            padding: "6px 14px",
            fontSize: 12,
            fontWeight: 700,
            cursor: "pointer",
            letterSpacing: "0.04em",
            flexShrink: 0,
          }}
        >
          UNDO
        </button>
        <button
          onClick={onDismiss}
          style={{
            background: "none",
            border: "none",
            color: "var(--muted)",
            fontSize: 18,
            cursor: "pointer",
            padding: "0 2px",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          ×
        </button>
      </div>
      {/* Countdown bar */}
      <div
        style={{
          height: 2,
          background: "var(--border)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${progress}%`,
            background: "var(--accent)",
            transition: "width 0.1s linear",
          }}
        />
      </div>
    </div>
  );
}

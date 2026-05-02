import { Suspense } from "react";
import { StudyScreen } from "./StudyScreen";

export default function StudyPage() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100dvh", background: "var(--background)" }}>
        <div style={{ color: "var(--muted)", fontSize: 14 }}>Loading…</div>
      </div>
    }>
      <StudyScreen />
    </Suspense>
  );
}

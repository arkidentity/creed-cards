import { Suspense } from "react";
import { StudyScreen } from "../../../../components/study/StudyScreen";

export default function DeckStudyPage() {
  return (
    <Suspense
      fallback={
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100dvh", background: "var(--background)" }}>
          <div style={{ color: "var(--muted)", fontSize: 14 }}>Loading…</div>
        </div>
      }
    >
      <StudyScreen />
    </Suspense>
  );
}

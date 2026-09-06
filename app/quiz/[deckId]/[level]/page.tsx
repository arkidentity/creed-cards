"use client";

// Legacy path. `/quiz/[deckId]/[level]` moved to `/deck/[slug]/quiz/[level]` in
// Phase C. Forward saved deep links, preserving basePath.

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDeck } from "../../../../lib/decks";
import { useBasePath } from "../../../../lib/basePathContext";

export default function LegacyQuizLevelRedirect({
  params,
}: {
  params: Promise<{ deckId: string; level: string }>;
}) {
  const { deckId, level } = use(params);
  const router = useRouter();
  const base = useBasePath();
  useEffect(() => {
    const slug = getDeck(Number(deckId))?.slug ?? "essentials";
    router.replace(`${base}/deck/${slug}/quiz/${level}`);
  }, [deckId, level, router, base]);
  return null;
}

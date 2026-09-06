"use client";

// Legacy path. `/quiz/[deckId]` moved to `/deck/[slug]/quiz` in Phase C.
// Forward saved/pushed deep links (Hub creed push, Live Service) to the
// deck-scoped route, preserving basePath.

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getDeck } from "../../../lib/decks";
import { useBasePath } from "../../../lib/basePathContext";

export default function LegacyQuizRedirect({
  params,
}: {
  params: Promise<{ deckId: string }>;
}) {
  const { deckId } = use(params);
  const router = useRouter();
  const base = useBasePath();
  useEffect(() => {
    const slug = getDeck(Number(deckId))?.slug ?? "essentials";
    router.replace(`${base}/deck/${slug}/quiz`);
  }, [deckId, router, base]);
  return null;
}

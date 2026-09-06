"use client";

// Legacy path. `/study` moved to `/deck/[slug]/study` in Phase C. Forward any
// saved/shared links (they carry mode/start/filter/category query params) to the
// Essentials deck, preserving basePath.

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useBasePath } from "../../lib/basePathContext";

function Redirect() {
  const router = useRouter();
  const sp = useSearchParams();
  const base = useBasePath();
  useEffect(() => {
    const qs = sp.toString();
    router.replace(`${base}/deck/essentials/study${qs ? `?${qs}` : ""}`);
  }, [router, sp, base]);
  return null;
}

export default function LegacyStudyRedirect() {
  return (
    <Suspense fallback={null}>
      <Redirect />
    </Suspense>
  );
}

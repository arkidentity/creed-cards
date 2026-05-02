"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useBasePath } from "../../lib/basePathContext";

export function BottomNav() {
  const pathname = usePathname();
  const base = useBasePath();

  if (pathname.startsWith(base + "/quiz") || pathname === base + "/quiz") return null;
  if (pathname.startsWith(base + "/study") || pathname === base + "/study") return null;

  const TABS = [
    {
      href: base || "/",
      label: "Home",
      icon: (active: boolean) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke="currentColor" strokeWidth={active ? 0 : 1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
          <path d="M9 21V12h6v9" />
        </svg>
      ),
    },
    {
      href: base + "/study",
      label: "Study",
      icon: (active: boolean) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <rect x="5" y="2" width="14" height="14" rx="2" />
        </svg>
      ),
    },
    {
      href: base + "/progress",
      label: "Progress",
      icon: (active: boolean) => (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={active ? 2.2 : 1.8} strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      ),
    },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "calc(64px + env(safe-area-inset-bottom, 0px))",
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        display: "flex",
        zIndex: 100,
      }}
    >
      {TABS.map((tab) => {
        const homeHref = base || "/";
        const active = tab.href === homeHref
          ? pathname === homeHref || pathname === homeHref + "/"
          : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
              color: active ? "var(--accent)" : "var(--muted)",
              textDecoration: "none",
              paddingBottom: "env(safe-area-inset-bottom, 0px)",
            }}
          >
            {tab.icon(active)}
            <span style={{ fontSize: 10, fontWeight: active ? 700 : 500, letterSpacing: "0.04em" }}>
              {tab.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}

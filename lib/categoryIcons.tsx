/**
 * Category icons — one abstract line-art mark per category slug, shared across
 * every Creed Cards deck. A card shows its category's icon (previously each of the
 * 50 cards had its own hand-drawn icon).
 *
 * Style: viewBox 0 0 120 120, `stroke` for outlines (2px), `accentColor` for the
 * single highlight. Monochrome + one accent — deck-agnostic.
 *
 * Slugs covered: Essentials (trinity, christ, spirit, salvation, scripture,
 * church, life, eschatology) · Foundations adds (creeds, covenant) · Fulfilled
 * (prophecy, feasts, persons, objects, events). Promises' groupings are still
 * TBD — add them here when that deck's structure is locked. See CATEGORY-ICONS.md.
 */

interface Props {
  slug: string;
  accentColor: string;
  stroke?: string;
}

const svg = { width: "100%", height: "100%" } as const;

export function CategoryIcon({ slug, accentColor, stroke = "#ffffff" }: Props) {
  const s = stroke;
  const a = accentColor;
  const line = { fill: "none", stroke: s, strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (slug) {
    // ─── Essentials ──────────────────────────────────────────────────────────
    case "trinity":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <circle cx="60" cy="42" r="22" {...line} />
          <circle cx="44" cy="70" r="22" {...line} opacity="0.85" />
          <circle cx="76" cy="70" r="22" {...line} opacity="0.7" />
          <circle cx="60" cy="61" r="5" fill={a} />
        </svg>
      );
    case "christ":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <circle cx="60" cy="52" r="30" {...line} opacity="0.35" />
          <line x1="60" y1="22" x2="60" y2="98" {...line} strokeWidth="3" />
          <line x1="37" y1="50" x2="83" y2="50" {...line} strokeWidth="3" />
          <circle cx="60" cy="50" r="4.5" fill={a} />
        </svg>
      );
    case "spirit":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path d="M60 24 C 80 46, 86 66, 60 96 C 34 66, 40 46, 60 24 Z" {...line} />
          <path d="M60 52 C 68 62, 68 74, 60 88 C 52 74, 52 62, 60 52 Z" fill={a} />
        </svg>
      );
    case "salvation":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path d="M30 62 q 30 36 60 0" {...line} />
          <line x1="40" y1="52" x2="40" y2="66" {...line} />
          <line x1="52" y1="47" x2="52" y2="68" {...line} />
          <line x1="64" y1="47" x2="64" y2="68" {...line} />
          <line x1="76" y1="52" x2="76" y2="66" {...line} />
          <circle cx="60" cy="32" r="5" fill={a} />
        </svg>
      );
    case "scripture":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path
            d="M60 34 C 48 26, 30 26, 22 30 L 22 84 C 30 80, 48 80, 60 88 C 72 80, 90 80, 98 84 L 98 30 C 90 26, 72 26, 60 34 Z"
            {...line}
          />
          <line x1="60" y1="34" x2="60" y2="88" {...line} />
          <circle cx="40" cy="56" r="4" fill={a} />
        </svg>
      );
    case "church":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path d="M34 94 L 34 54 Q 34 28 60 28 Q 86 28 86 54 L 86 94" {...line} />
          <line x1="24" y1="94" x2="96" y2="94" {...line} strokeWidth="3" />
          <circle cx="60" cy="42" r="4.5" fill={a} />
        </svg>
      );
    case "life":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path d="M60 96 L 60 48" {...line} />
          <path d="M60 64 C 44 64, 36 52, 36 40 C 50 40, 60 50, 60 62" {...line} />
          <path d="M60 56 C 76 56, 84 44, 84 32 C 70 32, 60 42, 60 54" {...line} />
          <circle cx="60" cy="42" r="5" fill={a} />
        </svg>
      );
    case "eschatology":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <line x1="22" y1="82" x2="98" y2="82" {...line} strokeWidth="3" />
          <path d="M36 82 A 24 24 0 0 1 84 82" {...line} />
          <line x1="60" y1="40" x2="60" y2="30" {...line} />
          <line x1="86" y1="52" x2="94" y2="46" {...line} />
          <line x1="34" y1="52" x2="26" y2="46" {...line} />
          <circle cx="60" cy="82" r="5" fill={a} />
        </svg>
      );

    // ─── Foundations (new) ───────────────────────────────────────────────────
    case "creeds":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path
            d="M60 24 L 94 38 L 94 62 C 94 84, 78 96, 60 102 C 42 96, 26 84, 26 62 L 26 38 Z"
            {...line}
          />
          <line x1="60" y1="44" x2="60" y2="78" {...line} />
          <line x1="47" y1="57" x2="73" y2="57" {...line} />
          <circle cx="60" cy="57" r="4" fill={a} />
        </svg>
      );
    case "covenant":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <circle cx="49" cy="60" r="22" {...line} />
          <circle cx="71" cy="60" r="22" {...line} />
          <circle cx="60" cy="60" r="4.5" fill={a} />
        </svg>
      );

    // ─── Fulfilled ───────────────────────────────────────────────────────────
    case "prophecy":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path d="M26 86 C 46 86, 78 72, 92 38" {...line} />
          <path d="M92 38 L 79 42 M92 38 L 87 51" {...line} />
          <circle cx="26" cy="86" r="5" fill={a} />
        </svg>
      );
    case "feasts":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <line x1="42" y1="96" x2="78" y2="96" {...line} strokeWidth="3" />
          <line x1="60" y1="96" x2="60" y2="66" {...line} />
          <path d="M42 66 Q 60 52 78 66" {...line} />
          <path d="M60 64 C 67 55, 67 46, 60 36 C 53 46, 53 55, 60 64 Z" fill={a} />
        </svg>
      );
    case "persons":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <circle cx="60" cy="42" r="16" {...line} />
          <path d="M28 98 C 28 74, 42 62, 60 62 C 78 62, 92 74, 92 98" {...line} />
          <circle cx="60" cy="82" r="4.5" fill={a} />
        </svg>
      );
    case "objects":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path d="M60 22 L 98 94 L 22 94 Z" {...line} />
          <path d="M60 94 L 60 60 M52 94 Q 60 76 68 94" {...line} />
          <circle cx="60" cy="42" r="4.5" fill={a} />
        </svg>
      );
    case "events":
      return (
        <svg viewBox="0 0 120 120" style={svg}>
          <path d="M22 58 q 12 -12 24 0 t 24 0 t 24 0" {...line} />
          <path d="M22 76 q 12 -12 24 0 t 24 0 t 24 0" {...line} />
          <path d="M22 94 q 12 -12 24 0 t 24 0 t 24 0" {...line} opacity="0.5" />
          <circle cx="60" cy="44" r="5" fill={a} />
        </svg>
      );

    default:
      return null;
  }
}

/**
 * Card icons are now per-category, not per-card. This is a thin compatibility
 * shim over `CategoryIcon` (see lib/categoryIcons.tsx). Pass the card's
 * `categorySlug`.
 */
import { CategoryIcon } from "./categoryIcons";

export function CardIcon({
  categorySlug,
  accentColor,
  stroke = "#ffffff",
}: {
  categorySlug: string;
  accentColor: string;
  stroke?: string;
}) {
  return <CategoryIcon slug={categorySlug} accentColor={accentColor} stroke={stroke} />;
}

export { CategoryIcon };

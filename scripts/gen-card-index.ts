/**
 * Generates card-index.json — the single source of truth for creed card
 * reference data (deck list + every card's id / title / category) consumed by
 * the Hub (dna-hub/src/lib/creedCardsList.ts) and Daily DNA
 * (daily-dna/lib/creedCardTitles.ts) so those hand-maintained copies stop
 * drifting.
 *
 * Run: npm run gen:index   (also runs on prebuild)
 * Commit the resulting card-index.json.
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { DECKS, type AnyCard } from "../lib/decks";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// No timestamp: the file must be byte-stable so `prebuild` only dirties it when
// card data actually changed (a dirty card-index.json after build = "commit the
// regen").
const index = {
  decks: DECKS.map((d) => ({
    id: d.id,
    slug: d.slug,
    name: d.name,
    shortName: d.shortName,
    status: d.status,
    schema: d.schema,
    categories: d.categories.map((c) => ({ slug: c.slug, name: c.name })),
  })),
  cards: DECKS.flatMap((d) =>
    (d.cards as AnyCard[]).map((c) => ({
      deckId: d.id,
      id: c.id,
      title: c.title,
      category: c.category,
      categorySlug: String(c.categorySlug),
    }))
  ),
};

writeFileSync(join(root, "card-index.json"), JSON.stringify(index, null, 2) + "\n");
console.log(
  `card-index.json — ${index.cards.length} cards across ${index.decks.length} decks ` +
    `(${index.decks.filter((d) => d.status === "live").length} live)`
);

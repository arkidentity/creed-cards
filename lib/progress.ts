import { getSupabase } from "./supabase";

export const STORAGE_KEYS = {
  LEARNED: "creedcards_learned", // legacy flat number[] — kept mirrored to Deck 1
  LEARNED_V2: "creedcards_learned_v2", // Record<deckId, number[]>
  LAST_STUDIED: "creedcards_last_studied", // legacy flat number — kept mirrored to Deck 1
  LAST_STUDIED_V2: "creedcards_last_studied_v2", // Record<deckId, number>
  FOCUS_DECK: "creedcards_focus_deck", // "" | numeric string — mirrors focus_deck_id
  SESSION_DATE: "creedcards_session_date",
  SESSION_COUNT: "creedcards_session_count",
  TAP_HINT_COUNT: "creedcards_tap_hint_count",
  SOUND_ENABLED: "creedcards_sound_enabled",
  LAST_UNDO: "creedcards_last_undo",
  ID_MIGRATION: "creedcards_idmap_v2",
  DECKS_MIGRATION: "creedcards_decks_v2",
} as const;

/** Default deck for the deck-less legacy call sites (Essentials). */
export const DEFAULT_DECK_ID = 1;

/**
 * 2026-09-06 — Deck 1 (Essentials) was frozen at 50 cards and renumbered 1–50.
 * This maps every pre-freeze card id to its new id. Old ids not present here
 * (1, 6, 15, 32 — long-retired; 16, 37, 38, 42, 44 — removed at the freeze) are
 * dropped from a viewer's progress. Runs once per device, gated by ID_MIGRATION.
 */
const ID_REMAP_V2: Record<number, number> = {
  2: 1, 3: 2, 4: 3, 5: 4, 7: 6, 8: 8,
  9: 9, 10: 10, 11: 11, 12: 12, 53: 13, 13: 14, 14: 15,
  17: 16, 18: 17, 19: 18, 20: 19, 21: 20, 22: 21,
  51: 22, 23: 23, 24: 24, 25: 25, 27: 26, 26: 27, 28: 29,
  52: 31, 54: 32,
  29: 33, 30: 34, 31: 35,
  33: 36, 34: 37, 35: 38, 36: 39,
  39: 40, 40: 41, 41: 42, 43: 43, 45: 44, 46: 45,
  47: 46, 48: 47, 49: 48, 50: 49, 55: 50,
};

function safeGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, value);
  } catch {
    /* private mode / quota — ignore */
  }
}

function safeRemove(key: string) {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(key);
  } catch {
    /* ignore */
  }
}

function runIdMigrationOnce(): void {
  if (typeof window === "undefined") return;
  if (safeGet(STORAGE_KEYS.ID_MIGRATION)) return;

  const rawLearned = safeGet(STORAGE_KEYS.LEARNED);
  if (rawLearned) {
    try {
      const remapped = (JSON.parse(rawLearned) as number[])
        .map((id) => ID_REMAP_V2[id])
        .filter((id): id is number => id !== undefined);
      safeSet(STORAGE_KEYS.LEARNED, JSON.stringify([...new Set(remapped)]));
    } catch {
      /* leave as-is on parse failure */
    }
  }

  const rawLast = safeGet(STORAGE_KEYS.LAST_STUDIED);
  if (rawLast) {
    const next = ID_REMAP_V2[parseInt(rawLast)];
    if (next) safeSet(STORAGE_KEYS.LAST_STUDIED, String(next));
    else safeRemove(STORAGE_KEYS.LAST_STUDIED);
  }

  safeRemove(STORAGE_KEYS.LAST_UNDO);
  safeSet(STORAGE_KEYS.ID_MIGRATION, "1");
}

/**
 * 2026-09-06 — Phase B: mastery goes per-deck. Seeds the v2 maps from the legacy
 * flat keys under deck 1. Runs once per device, gated by DECKS_MIGRATION, and
 * always after runIdMigrationOnce() so the seeded ids are already the new 1–50.
 */
function runDeckMigrationOnce(): void {
  if (typeof window === "undefined") return;
  runIdMigrationOnce();
  if (safeGet(STORAGE_KEYS.DECKS_MIGRATION)) return;

  if (!safeGet(STORAGE_KEYS.LEARNED_V2)) {
    let flat: number[] = [];
    const raw = safeGet(STORAGE_KEYS.LEARNED);
    if (raw) {
      try {
        flat = [...new Set(JSON.parse(raw) as number[])];
      } catch {
        flat = [];
      }
    }
    safeSet(STORAGE_KEYS.LEARNED_V2, JSON.stringify({ [DEFAULT_DECK_ID]: flat }));
  }

  if (!safeGet(STORAGE_KEYS.LAST_STUDIED_V2)) {
    const rawLast = safeGet(STORAGE_KEYS.LAST_STUDIED);
    if (rawLast) {
      const n = parseInt(rawLast);
      if (!Number.isNaN(n)) {
        safeSet(STORAGE_KEYS.LAST_STUDIED_V2, JSON.stringify({ [DEFAULT_DECK_ID]: n }));
      }
    }
  }

  safeSet(STORAGE_KEYS.DECKS_MIGRATION, "1");
}

// ─── per-deck learned map ──────────────────────────────────────────────────

function readLearnedMap(): Record<string, number[]> {
  const raw = safeGet(STORAGE_KEYS.LEARNED_V2);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, number[]>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function writeLearnedMap(map: Record<string, number[]>) {
  safeSet(STORAGE_KEYS.LEARNED_V2, JSON.stringify(map));
  // Mirror Deck 1 to the legacy flat key for one release (rollback + any
  // consumer still reading `creedcards_learned` directly).
  safeSet(
    STORAGE_KEYS.LEARNED,
    JSON.stringify(map[String(DEFAULT_DECK_ID)] ?? [])
  );
}

export function getLearnedCards(deckId: number = DEFAULT_DECK_ID): number[] {
  runDeckMigrationOnce();
  return readLearnedMap()[String(deckId)] ?? [];
}

/** All decks' learned ids, keyed by numeric deckId. */
export function getAllLearned(): Record<number, number[]> {
  runDeckMigrationOnce();
  const out: Record<number, number[]> = {};
  for (const [k, v] of Object.entries(readLearnedMap())) {
    const n = Number(k);
    if (!Number.isNaN(n) && Array.isArray(v)) out[n] = v;
  }
  return out;
}

/** Total mastered cards across every deck. */
export function getTotalLearnedCount(): number {
  return Object.values(getAllLearned()).reduce((sum, arr) => sum + arr.length, 0);
}

export function isCardLearned(
  cardId: number,
  deckId: number = DEFAULT_DECK_ID
): boolean {
  return getLearnedCards(deckId).includes(cardId);
}

export function toggleCardLearned(
  cardId: number,
  deckId: number = DEFAULT_DECK_ID
): boolean {
  runDeckMigrationOnce();
  const map = readLearnedMap();
  const key = String(deckId);
  const learned = map[key] ?? [];
  const idx = learned.indexOf(cardId);
  const wasLearned = idx > -1;

  if (wasLearned) learned.splice(idx, 1);
  else learned.push(cardId);

  map[key] = learned;
  writeLearnedMap(map);
  safeSet(
    STORAGE_KEYS.LAST_UNDO,
    JSON.stringify({
      cardId,
      deckId,
      action: wasLearned ? "unmarked" : "marked",
      timestamp: Date.now(),
    })
  );

  void syncToSupabase();
  return !wasLearned;
}

export function undoLastToggle():
  | { cardId: number; deckId: number; action: string }
  | null {
  const raw = safeGet(STORAGE_KEYS.LAST_UNDO);
  if (!raw) return null;
  const { cardId, deckId, action, timestamp } = JSON.parse(raw) as {
    cardId: number;
    deckId?: number;
    action: string;
    timestamp: number;
  };
  if (Date.now() - timestamp > 10000) return null;

  const dk = deckId ?? DEFAULT_DECK_ID;
  toggleCardLearned(cardId, dk);
  safeRemove(STORAGE_KEYS.LAST_UNDO);
  return { cardId, deckId: dk, action };
}

// ─── last studied (per deck) ──────────────────────────────────────────────

function readLastStudiedMap(): Record<string, number> {
  const raw = safeGet(STORAGE_KEYS.LAST_STUDIED_V2);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as Record<string, number>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function getLastStudiedCard(
  deckId: number = DEFAULT_DECK_ID
): number | null {
  runDeckMigrationOnce();
  const val = readLastStudiedMap()[String(deckId)];
  return typeof val === "number" && !Number.isNaN(val) ? val : null;
}

export function setLastStudiedCard(
  cardId: number,
  deckId: number = DEFAULT_DECK_ID
) {
  runDeckMigrationOnce();
  const map = readLastStudiedMap();
  map[String(deckId)] = cardId;
  safeSet(STORAGE_KEYS.LAST_STUDIED_V2, JSON.stringify(map));
  if (deckId === DEFAULT_DECK_ID) safeSet(STORAGE_KEYS.LAST_STUDIED, String(cardId));
  incrementSessionCount();
}

// ─── focus deck ───────────────────────────────────────────────────────────

export function getFocusDeck(): number | null {
  const raw = safeGet(STORAGE_KEYS.FOCUS_DECK);
  if (!raw) return null;
  const n = parseInt(raw);
  return Number.isNaN(n) ? null : n;
}

export function setFocusDeck(deckId: number | null) {
  if (deckId == null) safeRemove(STORAGE_KEYS.FOCUS_DECK);
  else safeSet(STORAGE_KEYS.FOCUS_DECK, String(deckId));
  void syncToSupabase();
}

// ─── sessions / misc (unchanged) ─────────────────────────────────────────

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

function incrementSessionCount() {
  const today = getTodayString();
  const lastDate = safeGet(STORAGE_KEYS.SESSION_DATE);
  if (lastDate !== today) {
    safeSet(STORAGE_KEYS.SESSION_DATE, today);
    safeSet(STORAGE_KEYS.SESSION_COUNT, "1");
  } else {
    const count = parseInt(safeGet(STORAGE_KEYS.SESSION_COUNT) || "0");
    safeSet(STORAGE_KEYS.SESSION_COUNT, String(count + 1));
  }
}

export function getTodaySessionCount(): number {
  const today = getTodayString();
  if (safeGet(STORAGE_KEYS.SESSION_DATE) !== today) return 0;
  return parseInt(safeGet(STORAGE_KEYS.SESSION_COUNT) || "0");
}

export function getTapHintCount(): number {
  return parseInt(safeGet(STORAGE_KEYS.TAP_HINT_COUNT) || "0");
}

export function incrementTapHintCount() {
  safeSet(STORAGE_KEYS.TAP_HINT_COUNT, String(getTapHintCount() + 1));
}

export function getSoundEnabled(): boolean {
  const val = safeGet(STORAGE_KEYS.SOUND_ENABLED);
  return val === null ? true : val === "true";
}

export function toggleSound(): boolean {
  const next = !getSoundEnabled();
  safeSet(STORAGE_KEYS.SOUND_ENABLED, String(next));
  return next;
}

/** Wipe one deck's mastery + "continue" pointer; leaves other decks intact. */
export function resetDeckProgress(deckId: number): void {
  runDeckMigrationOnce();
  const learned = readLearnedMap();
  delete learned[String(deckId)];
  writeLearnedMap(learned);

  const last = readLastStudiedMap();
  delete last[String(deckId)];
  safeSet(STORAGE_KEYS.LAST_STUDIED_V2, JSON.stringify(last));

  void syncToSupabase();
}

export function resetAllProgress(): void {
  Object.values(STORAGE_KEYS).forEach(safeRemove);
}

export function playFlipSound() {
  if (!getSoundEnabled()) return;
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const duration = 0.06;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    // Bandpass filter gives a papery card quality
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 1400;
    filter.Q.value = 0.7;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    source.start(ctx.currentTime);
  } catch {
    // Web Audio not available
  }
}

// ─── Supabase push (standalone builds only) ──────────────────────────────
//
// The embedded builds (daily-dna) push through daily-dna/lib/creedSync.ts, which
// is passed the disciple's account id. This path is for the standalone
// creed-cards deployment (creed-cards.html, embedded by ark-identity), where the
// signed-in Supabase user id IS the account id (RLS: account_id = auth.uid()).

async function syncToSupabase() {
  const client = getSupabase();
  if (!client) return;

  const {
    data: { session },
  } = await client.auth.getSession();
  if (!session?.user) return;

  const decksProgress = readLearnedMap();
  const focusDeck = getFocusDeck();

  await client.from("disciple_creed_progress").upsert(
    {
      account_id: session.user.id,
      decks_progress: decksProgress,
      // Mirror Deck 1 to the legacy column until Hub reads cut over.
      cards_mastered: decksProgress[String(DEFAULT_DECK_ID)] ?? [],
      total_study_sessions: getTodaySessionCount(),
      updated_at: new Date().toISOString(),
      ...(focusDeck != null && { focus_deck_id: focusDeck }),
    },
    { onConflict: "account_id" }
  );
}

import { getSupabase } from "./supabase";

export const STORAGE_KEYS = {
  LEARNED: "creedcards_learned",
  LAST_STUDIED: "creedcards_last_studied",
  SESSION_DATE: "creedcards_session_date",
  SESSION_COUNT: "creedcards_session_count",
  TAP_HINT_COUNT: "creedcards_tap_hint_count",
  SOUND_ENABLED: "creedcards_sound_enabled",
  LAST_UNDO: "creedcards_last_undo",
} as const;

function safeGet(key: string): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(key);
}

function safeSet(key: string, value: string) {
  if (typeof window === "undefined") return;
  localStorage.setItem(key, value);
}

function safeRemove(key: string) {
  if (typeof window === "undefined") return;
  localStorage.removeItem(key);
}

export function getLearnedCards(): number[] {
  const raw = safeGet(STORAGE_KEYS.LEARNED);
  return raw ? (JSON.parse(raw) as number[]) : [];
}

export function isCardLearned(cardId: number): boolean {
  return getLearnedCards().includes(cardId);
}

export function toggleCardLearned(cardId: number): boolean {
  const learned = getLearnedCards();
  const idx = learned.indexOf(cardId);
  const wasLearned = idx > -1;

  if (wasLearned) {
    learned.splice(idx, 1);
  } else {
    learned.push(cardId);
  }

  safeSet(STORAGE_KEYS.LEARNED, JSON.stringify(learned));
  safeSet(
    STORAGE_KEYS.LAST_UNDO,
    JSON.stringify({ cardId, action: wasLearned ? "unmarked" : "marked", timestamp: Date.now() })
  );

  void syncToSupabase(learned);
  return !wasLearned;
}

export function undoLastToggle(): { cardId: number; action: string } | null {
  const raw = safeGet(STORAGE_KEYS.LAST_UNDO);
  if (!raw) return null;
  const { cardId, action, timestamp } = JSON.parse(raw) as {
    cardId: number;
    action: string;
    timestamp: number;
  };
  if (Date.now() - timestamp > 10000) return null;

  toggleCardLearned(cardId);
  safeRemove(STORAGE_KEYS.LAST_UNDO);
  return { cardId, action };
}

export function getLastStudiedCard(): number | null {
  const val = safeGet(STORAGE_KEYS.LAST_STUDIED);
  return val ? parseInt(val) : null;
}

export function setLastStudiedCard(cardId: number) {
  safeSet(STORAGE_KEYS.LAST_STUDIED, String(cardId));
  incrementSessionCount();
}

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

async function syncToSupabase(learnedIds: number[]) {
  const client = getSupabase();
  if (!client) return;

  const {
    data: { session },
  } = await client.auth.getSession();
  if (!session?.user) return;

  await client.from("disciple_creed_progress").upsert(
    {
      disciple_id: session.user.id,
      cards_mastered: learnedIds,
      total_study_sessions: getTodaySessionCount(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "disciple_id" }
  );
}

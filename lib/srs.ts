// A small SM-2-style spaced-repetition scheduler. One card per reviewable item
// (keyed elsewhere by vocab id). Times are epoch milliseconds so the whole thing
// stays pure and testable — pass `now` in, get a new card out.

export type SrsCard = {
  reps: number; // consecutive successful reviews
  ease: number; // ease factor (SM-2), starts at 2.5
  intervalDays: number; // current spacing interval in days
  due: number; // epoch ms when the card next becomes due
  lapses: number; // number of times it was forgotten
};

export const DAY_MS = 86_400_000;
const RELEARN_MS = 10 * 60_000; // 10 minutes — bring a lapsed card back same session

export function newCard(now: number): SrsCard {
  return { reps: 0, ease: 2.5, intervalDays: 0, due: now, lapses: 0 };
}

export function isDue(card: SrsCard, now: number): boolean {
  return card.due <= now;
}

// Reschedule a card after a review. `correct` grades it pass/fail.
export function schedule(card: SrsCard, correct: boolean, now: number): SrsCard {
  if (!correct) {
    return {
      ...card,
      reps: 0,
      lapses: card.lapses + 1,
      ease: Math.max(1.3, card.ease - 0.2),
      intervalDays: 0,
      due: now + RELEARN_MS,
    };
  }
  const reps = card.reps + 1;
  const intervalDays =
    reps === 1 ? 1 : reps === 2 ? 3 : Math.max(1, Math.round(card.intervalDays * card.ease));
  return { ...card, reps, intervalDays, due: now + intervalDays * DAY_MS };
}

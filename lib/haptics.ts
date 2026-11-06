// Tiny haptic vocabulary: a light tick when choosing, a double tick when right.
// No-ops where the Vibration API is missing (iOS Safari, desktop) or when the user prefers reduced motion.

function vibrate(pattern: number | number[]): void {
  try {
    if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return;
    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;
    navigator.vibrate(pattern);
  } catch {
    /* blocked by the browser — haptics are a nicety, never an error */
  }
}

export const haptics = {
  select: () => vibrate(8),
  success: () => vibrate([10, 40, 10]),
};

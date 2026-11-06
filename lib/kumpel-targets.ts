export type Rect = { top: number; left: number; width: number; height: number };

const OUTSET = 8;

/**
 * The element a tour stop points at. The rail and the tab bar both exist in the DOM and one is always
 * `display: none`, so the first match with a real size wins; no visible match means the stop is skipped.
 */
export function findTarget(id: string): HTMLElement | null {
  const matches = document.querySelectorAll<HTMLElement>(`[data-kumpel="${id}"]`);
  for (const el of Array.from(matches)) {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && r.height > 0) return el;
  }
  return null;
}

/** The spotlight rect: the target's box, 8px bigger on every side. */
export function targetRect(el: HTMLElement): Rect {
  const r = el.getBoundingClientRect();
  return { top: r.top - OUTSET, left: r.left - OUTSET, width: r.width + OUTSET * 2, height: r.height + OUTSET * 2 };
}

/**
 * Where the step card goes on a desktop viewport: beside a narrow target, below a wide one, falling back
 * to the other sides, and finally clamped on screen. Phones do not use this (the card docks top or bottom).
 */
export function placeCard(rect: Rect, vw: number, vh: number, cw: number, ch: number, margin = 16): { top: number; left: number } {
  const clampX = (x: number) => Math.min(Math.max(x, margin), Math.max(margin, vw - cw - margin));
  const clampY = (y: number) => Math.min(Math.max(y, margin), Math.max(margin, vh - ch - margin));

  const right = { left: rect.left + rect.width + margin, top: clampY(rect.top) };
  const left = { left: rect.left - margin - cw, top: clampY(rect.top + rect.height / 2 - ch / 2) };
  const below = { left: clampX(rect.left), top: rect.top + rect.height + margin };
  const above = { left: clampX(rect.left), top: rect.top - margin - ch };

  const fits = {
    right: right.left + cw <= vw - margin,
    left: left.left >= margin,
    below: below.top + ch <= vh - margin,
    above: above.top >= margin,
  };
  const spots = { right, left, below, above };
  const order: (keyof typeof spots)[] = rect.width > vw * 0.4 ? ['below', 'above', 'right', 'left'] : ['right', 'left', 'below', 'above'];
  for (const k of order) if (fits[k]) return spots[k];
  return { left: clampX(rect.left), top: clampY(rect.top + rect.height + margin) };
}

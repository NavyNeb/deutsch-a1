import { afterEach, describe, expect, it } from 'vitest';
import { findTarget, placeCard, targetRect } from './kumpel-targets';

function add(id: string, rect: { top?: number; left?: number; width: number; height: number }) {
  const el = document.createElement('div');
  el.setAttribute('data-kumpel', id);
  el.getBoundingClientRect = () => ({ top: 0, left: 0, ...rect, right: 0, bottom: 0, x: 0, y: 0, toJSON: () => ({}) }) as DOMRect;
  document.body.appendChild(el);
  return el;
}

afterEach(() => { document.body.innerHTML = ''; });

describe('findTarget', () => {
  it('returns the visible element when a hidden twin comes first', () => {
    add('nav', { width: 0, height: 0 });
    const shown = add('nav', { width: 200, height: 300, top: 10, left: 20 });
    expect(findTarget('nav')).toBe(shown);
  });

  it('returns null when every match has no size', () => {
    add('nav', { width: 0, height: 0 });
    expect(findTarget('nav')).toBeNull();
  });

  it('returns null when nothing matches', () => {
    expect(findTarget('nope')).toBeNull();
  });
});

describe('targetRect', () => {
  it('outsets the rect by 8px on every side', () => {
    const el = add('goal', { top: 100, left: 50, width: 200, height: 100 });
    expect(targetRect(el)).toEqual({ top: 92, left: 42, width: 216, height: 116 });
  });
});

describe('placeCard', () => {
  const card = { w: 360, h: 240 };

  it('puts the card to the right of a narrow target, aligned with it', () => {
    const rail = { top: 152, left: 10, width: 244, height: 270 };
    expect(placeCard(rail, 1440, 900, card.w, card.h)).toEqual({ left: 270, top: 152 });
  });

  it('puts the card below a wide target', () => {
    const hero = { top: 192, left: 312, width: 716, height: 436 };
    const p = placeCard(hero, 1440, 900, card.w, card.h);
    expect(p.top).toBe(192 + 436 + 16);
  });

  it('falls back to the left of a target in the bottom-right corner, clamped on screen', () => {
    const buddy = { top: 792, left: 1332, width: 88, height: 88 };
    const p = placeCard(buddy, 1440, 900, card.w, card.h);
    expect(p.left).toBe(1332 - 16 - 360);
    expect(p.top).toBeLessThanOrEqual(900 - 240 - 16);
    expect(p.top).toBeGreaterThanOrEqual(16);
  });

  it('always stays inside a small viewport', () => {
    const p = placeCard({ top: 100, left: 100, width: 300, height: 300 }, 500, 400, card.w, card.h);
    expect(p.left).toBeGreaterThanOrEqual(16);
    expect(p.left + card.w).toBeLessThanOrEqual(500);
    expect(p.top).toBeGreaterThanOrEqual(16);
  });
});

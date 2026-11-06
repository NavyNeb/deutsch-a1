import { describe, it, expect } from 'vitest';
import { fitSize } from './fit-size';

// "min(176px, calc(700px / 2.08), calc((100vw - 48px) / 2.08))" -> the pixel bound the word is capped at
const bound = (css: string) => {
  const m = /calc\((\d+)px \/ ([\d.]+)\)/.exec(css)!;
  return Number(m[1]) / Number(m[2]);
};

describe('fitSize', () => {
  it('short words get the full display size', () => {
    expect(fitSize('Haus', 176, 700)).toMatch(/^min\(176px,/);
    expect(bound(fitSize('Haus', 176, 700))).toBeGreaterThan(176);
  });

  it('longer words get a smaller bound than shorter ones', () => {
    expect(bound(fitSize('Verabredungsvorschlag', 176, 700))).toBeLessThan(bound(fitSize('Haus', 176, 700)));
  });

  it('is bounded by the viewport on narrow screens', () => {
    expect(fitSize('Haus', 176, 700)).toContain('100vw');
  });

  it('never divides by zero for an empty string', () => {
    expect(fitSize('', 176, 700)).not.toMatch(/\/ 0(\.0+)?\)/);
  });
});

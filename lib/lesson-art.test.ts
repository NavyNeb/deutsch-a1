import { describe, it, expect } from 'vitest';
import { lessons } from '@/content';
import { lessonArt } from './lesson-art';

const l = (id: string, number = 1) => ({ id, level: 'A1' as const, number });

describe('lessonArt', () => {
  it('is deterministic for the same lesson', () => {
    expect(lessonArt(l('l5', 5))).toEqual(lessonArt(l('l5', 5)));
  });

  it('returns exactly one square, one circle and one triangle', () => {
    const kinds = lessonArt(l('l3', 3)).map((s) => s.kind).sort();
    expect(kinds).toEqual(['circle', 'square', 'triangle']);
  });

  it('ties each shape to its gender', () => {
    for (const s of lessonArt(l('l7', 7))) {
      expect(s.gender).toBe(s.kind === 'square' ? 'der' : s.kind === 'circle' ? 'die' : 'das');
    }
  });

  it('all shapes fit inside the 0–100 box', () => {
    for (const lesson of lessons) {
      for (const s of lessonArt(lesson)) {
        expect(s.x).toBeGreaterThanOrEqual(0);
        expect(s.y).toBeGreaterThanOrEqual(0);
        expect(s.x + s.size).toBeLessThanOrEqual(100);
        expect(s.y + s.size).toBeLessThanOrEqual(100);
      }
    }
  });

  it('different lessons produce different compositions', () => {
    const a = JSON.stringify(lessonArt(l('l1', 1)));
    const b = JSON.stringify(lessonArt(l('l2', 2)));
    const c = JSON.stringify(lessonArt({ id: 'a2-lektion-1', level: 'A2', number: 1 }));
    expect(new Set([a, b, c]).size).toBe(3);
  });

  it('works for every lesson in content without throwing', () => {
    expect(lessons.length).toBeGreaterThan(0);
    for (const lesson of lessons) expect(lessonArt(lesson)).toHaveLength(3);
  });
});

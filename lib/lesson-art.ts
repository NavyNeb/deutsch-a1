import type { Lesson } from '@/content/types';
import { fnv1a } from './audio-names.mjs';
import type { ArticleGender, GenderShapeKind } from './gender';

/** One shape of a lesson's generated artwork, in a 0–100 box (x/y = top-left, size = width). */
export type ArtShape = { kind: GenderShapeKind; gender: ArticleGender; x: number; y: number; size: number };

const GENDER_OF: Record<GenderShapeKind, ArticleGender> = { square: 'der', circle: 'die', triangle: 'das' };

type Slot = { kind: GenderShapeKind; x: number; y: number; size: number };

// Four Bauhaus-style arrangements (back to front). Seeded jitter makes every lesson unique.
const TEMPLATES: Slot[][] = [
  [{ kind: 'square', x: 4, y: 38, size: 52 }, { kind: 'circle', x: 40, y: 4, size: 52 }, { kind: 'triangle', x: 46, y: 44, size: 50 }],
  [{ kind: 'circle', x: 6, y: 8, size: 50 }, { kind: 'triangle', x: 44, y: 10, size: 50 }, { kind: 'square', x: 28, y: 44, size: 48 }],
  [{ kind: 'triangle', x: 4, y: 30, size: 48 }, { kind: 'square', x: 44, y: 6, size: 46 }, { kind: 'circle', x: 36, y: 42, size: 54 }],
  [{ kind: 'square', x: 46, y: 40, size: 50 }, { kind: 'triangle', x: 6, y: 6, size: 50 }, { kind: 'circle', x: 20, y: 36, size: 52 }],
];

const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

/** Deterministic generated artwork for a lesson: one square (der), one circle (die), one triangle (das). */
export function lessonArt(lesson: Pick<Lesson, 'id' | 'level' | 'number'>): ArtShape[] {
  let seed = parseInt(fnv1a(`${lesson.level}|${lesson.id}|${lesson.number}`), 16) >>> 0;
  const next = () => { seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0; return seed / 4294967296; };
  const template = TEMPLATES[Math.floor(next() * TEMPLATES.length)];
  const jitter = () => Math.round((next() - 0.5) * 10); // −5 … +5
  return template.map((slot) => {
    const size = clamp(slot.size + jitter(), 40, 60);
    return {
      kind: slot.kind,
      gender: GENDER_OF[slot.kind],
      size,
      x: clamp(slot.x + jitter(), 0, 100 - size),
      y: clamp(slot.y + jitter(), 0, 100 - size),
    };
  });
}

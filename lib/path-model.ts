import type { Lesson, Level, VocabItem } from '@/content/types';
import { fnv1a } from './audio-names.mjs';
import { lessonCompletion, type ProgressState } from './progress';

type Tri = { de: string; en: string; fr: string };

export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

/** Placeholder chapter names for A1 (the content model only has module numbers). */
export const CHAPTER_NAMES: Record<string, Tri> = {
  'A1-1': { de: 'Kennenlernen', en: 'Getting to know each other', fr: 'Faire connaissance' },
  'A1-2': { de: 'Alltag & Dinge', en: 'Daily life & things', fr: 'Quotidien et objets' },
  'A1-3': { de: 'Freizeit & Essen', en: 'Free time & food', fr: 'Loisirs et repas' },
  'A1-4': { de: 'Zuhause', en: 'At home', fr: 'Chez soi' },
  'A1-5': { de: 'Unterwegs', en: 'On the go', fr: 'En chemin' },
  'A1-6': { de: 'Jahreslauf', en: 'The year', fr: 'L’année' },
  'A1-7': { de: 'Mehr zu üben', en: 'More to practise', fr: 'Pour s’exercer' },
};

export type Chapter = { key: string; level: Level; module: number; name: Tri; lessons: Lesson[] };

export function lessonModule(lesson: Pick<Lesson, 'module' | 'number'>): number {
  return lesson.module ?? Math.ceil(lesson.number / 3);
}

const byLevelThenNumber = (a: Lesson, b: Lesson) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) || a.number - b.number;

export function chaptersForLevel(all: Lesson[], level: Level): Chapter[] {
  const map = new Map<number, Lesson[]>();
  for (const l of all.filter((x) => x.level === level).sort(byLevelThenNumber)) {
    const m = lessonModule(l);
    map.set(m, [...(map.get(m) ?? []), l]);
  }
  return [...map.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([module, lessons]) => ({
      key: `${level}-${module}`,
      level,
      module,
      name: CHAPTER_NAMES[`${level}-${module}`] ?? { de: `Kapitel ${module}`, en: `Chapter ${module}`, fr: `Chapitre ${module}` },
      lessons,
    }));
}

/** First lesson (ordered by level, then number) that is not yet complete. */
export function nextLesson(state: ProgressState, all: Lesson[]): Lesson | undefined {
  return [...all].sort(byLevelThenNumber).find((l) => lessonCompletion(state, l) < 1);
}

export function stepProgress(state: ProgressState, lesson: Lesson): { done: number; total: number; minutesLeft: number } {
  const total = lesson.steps.length;
  const done = Math.min(state.lessons[lesson.id]?.steps.length ?? 0, total);
  return { done, total, minutesLeft: done >= total ? 0 : Math.max(1, Math.ceil((total - done) * 0.5)) };
}

export function levelStats(state: ProgressState, all: Lesson[], level: Level): { done: number; total: number; fraction: number } {
  const inLevel = all.filter((l) => l.level === level);
  const done = inLevel.filter((l) => lessonCompletion(state, l) >= 1).length;
  return { done, total: inLevel.length, fraction: inLevel.length ? done / inLevel.length : 0 };
}

/** A stable pick per calendar day among words that have a gender (so the card can show its shape). */
export function wordOfDay(vocab: VocabItem[], dayKey: string): VocabItem | null {
  const pool = vocab.filter((v) => v.gender);
  if (!pool.length) return null;
  return pool[parseInt(fnv1a(dayKey), 16) % pool.length];
}

/** The "Ich kann …" line for a lesson: authored `canDo`, else its first grammar point, else nothing. */
export function canDoFor(lesson: Lesson): { de: string; en: string; fr?: string } | null {
  if (lesson.canDo) return lesson.canDo;
  const g = lesson.steps.find((s) => s.kind === 'grammar');
  return g && g.kind === 'grammar' ? { de: g.note.title, en: g.note.title, fr: g.note.titleFr } : null;
}

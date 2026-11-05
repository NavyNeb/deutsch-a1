import { describe, it, expect } from 'vitest';
import type { Lesson, LessonStep, Level, VocabItem } from '@/content/types';
import { emptyProgress, type ProgressState } from './progress';
import { CHAPTER_NAMES, canDoFor, chaptersForLevel, lessonModule, levelStats, nextLesson, stepProgress, wordOfDay } from './path-model';

const steps = (n: number): LessonStep[] =>
  Array.from({ length: n }, (_, i) => ({ kind: 'wrapup', summary: `s${i}` }) as LessonStep);

function lesson(id: string, level: Level, number: number, stepCount = 4, extra: Partial<Lesson> = {}): Lesson {
  return { id, level, number, title: { de: id, en: id }, theme: 't', goals: [], steps: steps(stepCount), ...extra };
}

function withDone(lessonId: string, ids: string[]): ProgressState {
  const s = emptyProgress();
  s.lessons[lessonId] = { steps: ids, exercises: {} };
  return s;
}

const vocab = (id: string, gender: VocabItem['gender']): VocabItem => ({
  id, german: gender ? `${gender} X${id}` : `x${id}`, english: 'x', gender, syllables: ['X'], example: { de: 'x', en: 'x' },
});

describe('lessonModule', () => {
  it('uses the explicit module, else groups by three', () => {
    expect(lessonModule(lesson('a', 'A1', 4, 1, { module: 9 }))).toBe(9);
    expect(lessonModule(lesson('b', 'A1', 4))).toBe(2);
    expect(lessonModule(lesson('c', 'A1', 3))).toBe(1);
  });
});

describe('chaptersForLevel', () => {
  const all = [7, 1, 2, 3, 4, 5, 6].map((n) => lesson(`l${n}`, 'A1', n));

  it('groups lessons into chapters of three, ordered by number', () => {
    const ch = chaptersForLevel(all, 'A1');
    expect(ch.map((c) => c.lessons.map((l) => l.number))).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    expect(ch[0].name.de).toBe(CHAPTER_NAMES['A1-1'].de);
    expect(ch[1].module).toBe(2);
  });

  it('returns [] for a level with no lessons', () => {
    expect(chaptersForLevel(all, 'B2')).toEqual([]);
  });

  it('names chapters of other levels "Kapitel N"', () => {
    const ch = chaptersForLevel([lesson('a2-1', 'A2', 1)], 'A2');
    expect(ch[0].name).toEqual({ de: 'Kapitel 1', en: 'Chapter 1', fr: 'Chapitre 1' });
  });
});

describe('nextLesson', () => {
  const all = [lesson('b', 'A1', 2), lesson('a2', 'A2', 1), lesson('a', 'A1', 1)];

  it('returns the first lesson for empty progress, ignoring input order', () => {
    expect(nextLesson(emptyProgress(), all)?.id).toBe('a');
  });

  it('skips completed lessons', () => {
    const s = withDone('a', ['0', '1', '2', '3']);
    expect(nextLesson(s, all)?.id).toBe('b');
  });

  it('moves on to the next level', () => {
    const s = emptyProgress();
    s.lessons.a = { steps: ['0', '1', '2', '3'], exercises: {} };
    s.lessons.b = { steps: ['0', '1', '2', '3'], exercises: {} };
    expect(nextLesson(s, all)?.id).toBe('a2');
  });

  it('is undefined when every lesson is complete or there are none', () => {
    const s = emptyProgress();
    for (const l of all) s.lessons[l.id] = { steps: ['0', '1', '2', '3'], exercises: {} };
    expect(nextLesson(s, all)).toBeUndefined();
    expect(nextLesson(emptyProgress(), [])).toBeUndefined();
  });
});

describe('stepProgress', () => {
  const l = lesson('p', 'A1', 1, 10);
  it('untouched lesson', () => expect(stepProgress(emptyProgress(), l)).toEqual({ done: 0, total: 10, minutesLeft: 5 }));
  it('partial lesson', () => expect(stepProgress(withDone('p', ['0', '1', '2', '3']), l)).toEqual({ done: 4, total: 10, minutesLeft: 3 }));
  it('one step left still shows 1 minute', () => expect(stepProgress(withDone('p', Array.from({ length: 9 }, (_, i) => String(i))), l).minutesLeft).toBe(1));
  it('complete lesson has 0 minutes left', () => expect(stepProgress(withDone('p', Array.from({ length: 10 }, (_, i) => String(i))), l)).toEqual({ done: 10, total: 10, minutesLeft: 0 }));
  it('never reports more done than total', () => expect(stepProgress(withDone('p', Array.from({ length: 14 }, (_, i) => String(i))), l).done).toBe(10));
});

describe('levelStats', () => {
  it('fraction is 0 when the level has no lessons', () => {
    expect(levelStats(emptyProgress(), [], 'B2')).toEqual({ done: 0, total: 0, fraction: 0 });
  });
  it('counts completed lessons', () => {
    const all = ['a', 'b', 'c', 'd'].map((id, i) => lesson(id, 'A1', i + 1));
    const s = emptyProgress();
    for (const id of ['a', 'b']) s.lessons[id] = { steps: ['0', '1', '2', '3'], exercises: {} };
    expect(levelStats(s, all, 'A1')).toEqual({ done: 2, total: 4, fraction: 0.5 });
  });
});

describe('wordOfDay', () => {
  const pool = [...Array.from({ length: 20 }, (_, i) => vocab(String(i), (['der', 'die', 'das'] as const)[i % 3])), vocab('verb', null)];

  it('is stable for the same day', () => {
    expect(wordOfDay(pool, '2026-11-05')).toEqual(wordOfDay(pool, '2026-11-05'));
  });
  it('changes across days', () => {
    const days = Array.from({ length: 10 }, (_, i) => `2026-11-${String(i + 1).padStart(2, '0')}`);
    expect(new Set(days.map((d) => wordOfDay(pool, d)?.id)).size).toBeGreaterThan(1);
  });
  it('is null for an empty list or a list with no gendered words', () => {
    expect(wordOfDay([], '2026-11-05')).toBeNull();
    expect(wordOfDay([vocab('v', null)], '2026-11-05')).toBeNull();
  });
  it('never picks a word without gender', () => {
    for (let d = 1; d <= 28; d++) expect(wordOfDay(pool, `2026-02-${String(d).padStart(2, '0')}`)?.gender).not.toBeNull();
  });
});

describe('canDoFor', () => {
  it('uses canDo when authored', () => {
    const l = lesson('c', 'A1', 1, 2, { canDo: { de: 'Ich kann grüßen.', en: 'I can greet.', fr: 'Je peux saluer.' } });
    expect(canDoFor(l)).toEqual({ de: 'Ich kann grüßen.', en: 'I can greet.', fr: 'Je peux saluer.' });
  });
  it('falls back to the first grammar note title', () => {
    const l = lesson('g', 'A1', 1, 0, {
      steps: [{ kind: 'grammar', note: { id: 'n', title: 'Plural forms', titleFr: 'Les pluriels', explanationMd: '', examples: [] } }],
    });
    expect(canDoFor(l)).toEqual({ de: 'Plural forms', en: 'Plural forms', fr: 'Les pluriels' });
  });
  it('is null when there is neither', () => {
    expect(canDoFor(lesson('n', 'A1', 1))).toBeNull();
  });
});

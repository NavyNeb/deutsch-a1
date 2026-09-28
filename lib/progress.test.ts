import { describe, it, expect } from 'vitest';
import {
  emptyProgress, withStepDone, withExerciseResult, withHardWord, lessonCompletion,
  withXp, withNewCard, withoutCard, withCardReview, withCompletedLesson,
  dueVocabIds, currentStreak, levelForXp, levelProgress, dateKey, addDaysKey,
  mergeProgress,
} from './progress';

const T0 = Date.parse('2026-01-15T12:00:00Z');

const lesson = { id: 'l1', number: 1, title: { de: '', en: '' }, theme: '', goals: [],
  steps: [{ kind: 'intro', title: 'x', goals: [] }, { kind: 'wrapup', summary: 'y' }] } as any;

describe('progress reducers', () => {
  it('marks steps done without duplicates', () => {
    let s = emptyProgress();
    s = withStepDone(s, 'l1', 'intro-0');
    s = withStepDone(s, 'l1', 'intro-0');
    expect(s.lessons.l1.steps).toEqual(['intro-0']);
  });
  it('records exercise results', () => {
    const s = withExerciseResult(emptyProgress(), 'l1', 'e1', true);
    expect(s.lessons.l1.exercises.e1).toBe(true);
  });
  it('adds hard words once', () => {
    let s = withHardWord(emptyProgress(), 'v1');
    s = withHardWord(s, 'v1');
    expect(s.hardWords).toEqual(['v1']);
  });
  it('computes completion as done/total steps', () => {
    let s = emptyProgress();
    expect(lessonCompletion(s, lesson)).toBe(0);
    s = withStepDone(s, 'l1', 's0');
    expect(lessonCompletion(s, lesson)).toBe(0.5);
  });
});

describe('gamification', () => {
  it('accumulates XP and logs it under the day', () => {
    const day = dateKey(T0);
    let s = withXp(emptyProgress(), 10, day);
    s = withXp(s, 5, day);
    expect(s.xp).toBe(15);
    expect(s.activity[day]).toBe(15);
  });

  it('derives levels from XP with a growing curve', () => {
    expect(levelForXp(0)).toBe(1);
    expect(levelForXp(50)).toBe(2);
    expect(levelForXp(200)).toBe(3);
    const p = levelProgress(60);
    expect(p.level).toBe(2);
    expect(p.into).toBe(10); // 60 - 50
    expect(p.span).toBe(150); // 200 - 50
  });

  it('counts a streak of consecutive active days up to today', () => {
    const today = dateKey(T0);
    let s = emptyProgress();
    s = withXp(s, 10, today);
    s = withXp(s, 10, addDaysKey(today, -1));
    s = withXp(s, 10, addDaysKey(today, -2));
    // a gap two days further back should not extend the streak
    s = withXp(s, 10, addDaysKey(today, -4));
    expect(currentStreak(s, today)).toBe(3);
  });

  it('still counts the streak when today has no activity yet but yesterday did', () => {
    const today = dateKey(T0);
    let s = emptyProgress();
    s = withXp(s, 10, addDaysKey(today, -1));
    expect(currentStreak(s, today)).toBe(1);
  });

  it('awards a one-time completed-lesson flag', () => {
    let s = withCompletedLesson(emptyProgress(), 'l1');
    s = withCompletedLesson(s, 'l1');
    expect(s.completedLessons).toEqual(['l1']);
  });
});

describe('SRS cards', () => {
  it('creates a card due now and lists it as due', () => {
    const s = withNewCard(emptyProgress(), 'v1', T0);
    expect(dueVocabIds(s, T0)).toEqual(['v1']);
  });

  it('a correct review pushes the card out of the due set', () => {
    let s = withNewCard(emptyProgress(), 'v1', T0);
    s = withCardReview(s, 'v1', true, T0);
    expect(dueVocabIds(s, T0)).toEqual([]);
    expect(dueVocabIds(s, T0 + 2 * 86_400_000)).toEqual(['v1']); // due again later
  });

  it('removes a card', () => {
    let s = withNewCard(emptyProgress(), 'v1', T0);
    s = withoutCard(s, 'v1');
    expect(s.cards.v1).toBeUndefined();
  });
});

describe('mergeProgress (local + cloud)', () => {
  it('combines toward more progress and never loses data', () => {
    const day = dateKey(T0);
    const local = {
      lessons: { l1: { steps: ['a'], exercises: { e1: false, e2: true } } },
      hardWords: ['v1'],
      cards: { v1: { reps: 1, ease: 2.5, intervalDays: 1, due: T0, lapses: 0 } },
      xp: 40,
      activity: { [day]: 40 },
      completedLessons: ['l1'],
    };
    const cloud = {
      lessons: { l1: { steps: ['b'], exercises: { e1: true } }, l2: { steps: ['c'], exercises: {} } },
      hardWords: ['v2'],
      cards: { v1: { reps: 3, ease: 2.5, intervalDays: 8, due: T0 + 999, lapses: 0 } },
      xp: 25,
      activity: { [day]: 30 },
      completedLessons: ['l2'],
    };
    const m = mergeProgress(local, cloud);
    expect(m.lessons.l1.steps.sort()).toEqual(['a', 'b']);
    expect(m.lessons.l1.exercises.e1).toBe(true); // truthy wins
    expect(m.lessons.l1.exercises.e2).toBe(true);
    expect(m.lessons.l2.steps).toEqual(['c']);
    expect(m.hardWords.sort()).toEqual(['v1', 'v2']);
    expect(m.cards.v1.reps).toBe(3); // more-reviewed card wins
    expect(m.xp).toBe(40); // higher XP
    expect(m.activity[day]).toBe(40); // per-day max, not summed
    expect(m.completedLessons.sort()).toEqual(['l1', 'l2']);
  });

  it('handles empty/partial inputs', () => {
    expect(mergeProgress(null, undefined)).toEqual(emptyProgress());
  });
});

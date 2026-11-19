import { describe, it, expect, beforeEach } from 'vitest';
import type { VocabItem } from '@/content/types';
import type { Answer, Question } from './game';
import {
  dailyStreak, emptyStats, isMastered, levelProgress, loadStats, recordAnswers, recordDaily, saveStats,
} from './sprint-stats';

const w = (id: string): VocabItem => ({ id, german: id, english: id, gender: null, syllables: [id], example: { de: '', en: '' } });
const ans = (id: string, correct: boolean): Answer => {
  const prompt = w(id);
  const question: Question = { prompt, choices: [prompt, w('x'), w('y'), w('z')], answer: 0 };
  return { question, picked: correct ? 0 : 1, correct };
};

beforeEach(() => localStorage.clear());

describe('recordAnswers', () => {
  it('counts rights and wrongs per word without touching the old stats object', () => {
    const s0 = emptyStats();
    const s1 = recordAnswers(s0, [ans('a', true), ans('a', false), ans('b', true)]);
    expect(s1.words).toEqual({ a: { r: 1, w: 1 }, b: { r: 1, w: 0 } });
    expect(s0.words).toEqual({});
    expect(recordAnswers(s1, [ans('a', true)]).words.a).toEqual({ r: 2, w: 1 });
  });
});

describe('mastery and progress', () => {
  it('needs two rights and more rights than wrongs', () => {
    expect(isMastered({ r: 1, w: 0 })).toBe(false);
    expect(isMastered({ r: 2, w: 0 })).toBe(true);
    expect(isMastered({ r: 2, w: 2 })).toBe(false);
    expect(isMastered({ r: 3, w: 1 })).toBe(true);
    expect(isMastered(undefined)).toBe(false);
  });

  it('counts the words met and mastered within a level', () => {
    let s = emptyStats();
    s = recordAnswers(s, [ans('a', true), ans('a', true), ans('b', false), ans('c', true)]);
    expect(levelProgress(s, ['a', 'b', 'c', 'd'])).toEqual({ total: 4, seen: 3, mastered: 1 });
    expect(levelProgress(s, [])).toEqual({ total: 0, seen: 0, mastered: 0 });
  });
});

describe('daily challenge', () => {
  it('keeps the better result when the day is played again', () => {
    let s = recordDaily(emptyStats(), '2026-11-19', { level: 'A2', score: 9, total: 15 });
    s = recordDaily(s, '2026-11-19', { level: 'A2', score: 6, total: 15 });
    expect(s.daily['2026-11-19'].score).toBe(9);
    s = recordDaily(s, '2026-11-19', { level: 'A2', score: 12, total: 15 });
    expect(s.daily['2026-11-19'].score).toBe(12);
  });

  it('counts consecutive days, still alive until the end of the next day', () => {
    let s = emptyStats();
    for (const d of ['2026-11-17', '2026-11-18', '2026-11-19']) s = recordDaily(s, d, { level: 'A1', score: 1, total: 1 });
    expect(dailyStreak(s, '2026-11-19')).toBe(3);
    expect(dailyStreak(s, '2026-11-20')).toBe(3); // today still open
    expect(dailyStreak(s, '2026-11-21')).toBe(0); // a day was missed
  });

  it('crosses month and year ends', () => {
    let s = emptyStats();
    for (const d of ['2026-12-31', '2027-01-01']) s = recordDaily(s, d, { level: 'B1', score: 1, total: 1 });
    expect(dailyStreak(s, '2027-01-01')).toBe(2);
  });

  it('is 0 with nothing played', () => {
    expect(dailyStreak(emptyStats(), '2026-11-19')).toBe(0);
  });
});

describe('storage', () => {
  it('round-trips and survives broken data', () => {
    const s = recordAnswers({ ...emptyStats(), level: 'B2' }, [ans('a', true)]);
    saveStats(s);
    expect(loadStats()).toEqual(s);
    localStorage.setItem('deutsch-a1-sprint-stats', '{not json');
    expect(loadStats()).toEqual(emptyStats());
  });
});

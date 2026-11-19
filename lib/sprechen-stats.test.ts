import { describe, it, expect, beforeEach } from 'vitest';
import {
  AI_DAILY_FEEDBACKS, AI_DAILY_TURNS, addWeakWords, aiUsage, emptySprechen, lastDays, loadSprechen, recordAi,
  recordSpeaking, saveSprechen, speakingStreak, topWeakWords, weeklyMinutes,
} from './sprechen-stats';

beforeEach(() => localStorage.clear());

describe('recordSpeaking', () => {
  it('adds up a day and keeps the best pace, without touching the old object', () => {
    const s0 = emptySprechen();
    let s = recordSpeaking(s0, '2026-11-19', { seconds: 90, words: 120, wordsPerMinute: 80 });
    s = recordSpeaking(s, '2026-11-19', { seconds: 30, words: 40, wordsPerMinute: 95 });
    expect(s.days['2026-11-19']).toEqual({ seconds: 120, talks: 2, words: 160 });
    expect(s.bestWpm).toBe(95);
    expect(s0.days).toEqual({});
  });
});

describe('weekly minutes, streak and chart', () => {
  it('sums the 7 days ending today and ignores older days', () => {
    let s = emptySprechen();
    s = recordSpeaking(s, '2026-11-19', { seconds: 600, words: 1 });
    s = recordSpeaking(s, '2026-11-13', { seconds: 300, words: 1 }); // 6 days earlier: counts
    s = recordSpeaking(s, '2026-11-12', { seconds: 900, words: 1 }); // 7 days earlier: does not
    expect(weeklyMinutes(s, '2026-11-19')).toBe(15);
  });

  it('counts consecutive days, alive until the end of the next day', () => {
    let s = emptySprechen();
    for (const d of ['2026-11-17', '2026-11-18', '2026-11-19']) s = recordSpeaking(s, d, { seconds: 60, words: 1 });
    expect(speakingStreak(s, '2026-11-19')).toBe(3);
    expect(speakingStreak(s, '2026-11-20')).toBe(3);
    expect(speakingStreak(s, '2026-11-21')).toBe(0);
    expect(speakingStreak(emptySprechen(), '2026-11-19')).toBe(0);
  });

  it('lists the last days oldest first, crossing a month end', () => {
    const s = recordSpeaking(emptySprechen(), '2026-12-01', { seconds: 90, words: 1 });
    const days = lastDays(s, '2026-12-02', 3);
    expect(days.map((d) => d.day)).toEqual(['2026-11-30', '2026-12-01', '2026-12-02']);
    expect(days.map((d) => d.minutes)).toEqual([0, 1.5, 0]);
  });
});

describe('weak words', () => {
  it('counts and ranks them, case-insensitively', () => {
    const s = addWeakWords(addWeakWords(emptySprechen(), ['Straße', 'schön']), ['straße']);
    expect(topWeakWords(s)).toEqual([{ word: 'straße', count: 2 }, { word: 'schön', count: 1 }]);
    expect(addWeakWords(s, [])).toBe(s);
  });
});

describe('AI usage caps', () => {
  it('counts turns and feedbacks per day and reports what is left', () => {
    let s = emptySprechen();
    for (let i = 0; i < 3; i++) s = recordAi(s, '2026-11-19', 'turn');
    s = recordAi(s, '2026-11-19', 'feedback');
    expect(aiUsage(s, '2026-11-19')).toMatchObject({ turns: 3, feedbacks: 1, turnsLeft: AI_DAILY_TURNS - 3, feedbacksLeft: AI_DAILY_FEEDBACKS - 1 });
    expect(aiUsage(s, '2026-11-20').turnsLeft).toBe(AI_DAILY_TURNS);
  });

  it('never reports a negative number left and forgets old days', () => {
    let s = emptySprechen();
    for (let i = 0; i < AI_DAILY_TURNS + 5; i++) s = recordAi(s, '2026-11-01', 'turn');
    expect(aiUsage(s, '2026-11-01').turnsLeft).toBe(0);
    s = recordAi(s, '2026-11-19', 'turn');
    expect(Object.keys(s.ai)).toEqual(['2026-11-19']);
  });
});

describe('storage', () => {
  it('round-trips and survives broken data', () => {
    const s = recordSpeaking(emptySprechen(), '2026-11-19', { seconds: 60, words: 50, wordsPerMinute: 50 });
    saveSprechen(s);
    expect(loadSprechen()).toEqual(s);
    localStorage.setItem('deutsch-a1-sprechen-stats', 'nope');
    expect(loadSprechen()).toEqual(emptySprechen());
  });
});

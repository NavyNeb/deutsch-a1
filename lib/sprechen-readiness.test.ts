import { describe, it, expect } from 'vitest';
import { emptySprechen, recordSpeaking } from './sprechen-stats';
import { readiness, totalMinutes } from './sprechen-readiness';

describe('readiness', () => {
  it('starts with nothing ticked', () => {
    expect(readiness(emptySprechen(), [])).toEqual({ mock: false, score: false, minutes: false, days: false });
  });

  it('ticks a mock exam, and a rating only from 60%', () => {
    expect(readiness(emptySprechen(), [45])).toMatchObject({ mock: true, score: false });
    expect(readiness(emptySprechen(), [45, 60])).toMatchObject({ mock: true, score: true });
  });

  it('needs an hour of speaking and five different days', () => {
    let s = emptySprechen();
    for (let d = 1; d <= 4; d++) s = recordSpeaking(s, `2026-11-0${d}`, { seconds: 1000, words: 1 });
    expect(readiness(s, [])).toMatchObject({ minutes: true, days: false });
    s = recordSpeaking(s, '2026-11-05', { seconds: 10, words: 1 });
    expect(readiness(s, [])).toMatchObject({ minutes: true, days: true });
    expect(totalMinutes(s)).toBe(66);
  });

  it('does not count days with no speaking', () => {
    const s = recordSpeaking(emptySprechen(), '2026-11-01', { seconds: 0, words: 0 });
    expect(readiness(s, []).days).toBe(false);
  });
});

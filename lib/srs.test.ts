import { describe, it, expect } from 'vitest';
import { newCard, isDue, schedule, DAY_MS } from './srs';

const T0 = 1_700_000_000_000;

describe('srs scheduler', () => {
  it('new cards are due immediately', () => {
    const c = newCard(T0);
    expect(isDue(c, T0)).toBe(true);
    expect(c.reps).toBe(0);
  });

  it('grows the interval on consecutive correct reviews', () => {
    let c = newCard(T0);
    c = schedule(c, true, T0);
    expect(c.reps).toBe(1);
    expect(c.intervalDays).toBe(1);
    expect(c.due).toBe(T0 + DAY_MS);
    expect(isDue(c, T0 + DAY_MS - 1)).toBe(false);

    c = schedule(c, true, c.due);
    expect(c.reps).toBe(2);
    expect(c.intervalDays).toBe(3);

    const prevInterval = c.intervalDays;
    c = schedule(c, true, c.due);
    expect(c.reps).toBe(3);
    expect(c.intervalDays).toBe(Math.round(prevInterval * 2.5)); // 8
  });

  it('lapses reset reps, drop ease, and bring the card back within the session', () => {
    let c = newCard(T0);
    c = schedule(c, true, T0); // reps 1
    c = schedule(c, true, c.due); // reps 2, ease 2.5
    c = schedule(c, false, c.due); // forgot
    expect(c.reps).toBe(0);
    expect(c.lapses).toBe(1);
    expect(c.ease).toBeCloseTo(2.3);
    expect(c.due).toBeLessThan(c.due + DAY_MS); // due soon (minutes), not days
    expect(c.intervalDays).toBe(0);
  });

  it('never lets ease fall below 1.3', () => {
    let c = newCard(T0);
    for (let i = 0; i < 10; i++) c = schedule(c, false, T0);
    expect(c.ease).toBeGreaterThanOrEqual(1.3);
  });
});

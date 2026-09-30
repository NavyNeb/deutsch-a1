import { describe, it, expect } from 'vitest';
import { claimPracticeXp, hasClaimedToday } from './daily-xp';

function mem() {
  const m = new Map<string, string>();
  return { getItem: (k: string) => m.get(k) ?? null, setItem: (k: string, v: string) => void m.set(k, v) };
}

describe('claimPracticeXp', () => {
  it('pays once per id per day', () => {
    const storage = mem();
    expect(claimPracticeXp('s1', 5, 40, { storage, today: '2026-09-30' })).toBe(5);
    expect(claimPracticeXp('s1', 5, 40, { storage, today: '2026-09-30' })).toBe(0);
    expect(hasClaimedToday('s1', { storage, today: '2026-09-30' })).toBe(true);
  });

  it('resets on a new day', () => {
    const storage = mem();
    claimPracticeXp('s1', 5, 40, { storage, today: '2026-09-30' });
    expect(claimPracticeXp('s1', 5, 40, { storage, today: '2026-10-01' })).toBe(5);
  });

  it('stops at the daily cap and pays the remainder once', () => {
    const storage = mem();
    expect(claimPracticeXp('a', 30, 40, { storage, today: 'd' })).toBe(30);
    expect(claimPracticeXp('b', 30, 40, { storage, today: 'd' })).toBe(10);
    expect(claimPracticeXp('c', 30, 40, { storage, today: 'd' })).toBe(0);
  });

  it('survives corrupt storage', () => {
    const storage = { getItem: () => '{not json', setItem: () => {} };
    expect(claimPracticeXp('a', 5, 40, { storage, today: 'd' })).toBe(5);
  });

  it('still works without storage', () => {
    expect(claimPracticeXp('a', 5, 40, { storage: undefined, today: 'd' })).toBe(5);
  });
});

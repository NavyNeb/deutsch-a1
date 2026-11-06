import { describe, it, expect } from 'vitest';
import { emptyProgress } from './progress';
import { isFreshVisitor } from './visitor';

describe('isFreshVisitor', () => {
  it('true for empty progress and no account', () => {
    expect(isFreshVisitor(emptyProgress(), false)).toBe(true);
  });
  it('false when signed in', () => {
    expect(isFreshVisitor(emptyProgress(), true)).toBe(false);
  });
  it('false once XP has been earned', () => {
    expect(isFreshVisitor({ ...emptyProgress(), xp: 5 }, false)).toBe(false);
  });
  it('false once any lesson step was completed', () => {
    const s = emptyProgress();
    s.lessons.l1 = { steps: ['intro'], exercises: {} };
    expect(isFreshVisitor(s, false)).toBe(false);
  });
  it('a lesson record with no completed steps still counts as fresh', () => {
    const s = emptyProgress();
    s.lessons.l1 = { steps: [], exercises: {} };
    expect(isFreshVisitor(s, false)).toBe(true);
  });
});

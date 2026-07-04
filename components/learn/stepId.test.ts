import { describe, it, expect } from 'vitest';
import { stepId } from './stepId';

describe('stepId', () => {
  it('uses ids where available', () => {
    expect(stepId({ kind: 'vocab', item: { id: 'v1' } } as any, 0)).toBe('v1');
    expect(stepId({ kind: 'intro' } as any, 0)).toBe('intro-0');
  });
});

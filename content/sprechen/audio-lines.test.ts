import { describe, it, expect } from 'vitest';
import { sprechenAudioLines } from './audio-lines.mjs';
import { EXAMINER, PLAN_SCENARIOS } from './exam-lines.mjs';

describe('speaking audio lines', () => {
  const lines: string[] = sprechenAudioLines();

  it('collects every spoken line once, none empty', () => {
    expect(lines.length).toBeGreaterThan(150);
    expect(new Set(lines).size).toBe(lines.length);
    for (const l of lines) expect(l.trim().length).toBeGreaterThan(0);
  });

  it('includes the examiner’s lines, planning openers, phrases and sound pairs', () => {
    expect(lines).toContain(EXAMINER.welcome);
    expect(lines).toContain(PLAN_SCENARIOS[0].opener);
    expect(lines).toContain('Da stimme ich Ihnen zu.');
    expect(lines).toContain('Staat');
  });
});

import { describe, it, expect } from 'vitest';
import { officialTrackName, ttsFileName, officialSrc, ttsSrc } from './audio';

describe('audio naming', () => {
  it('normalizes official track names', () => {
    expect(officialTrackName(1, '2a')).toBe('l1-2a.mp3');
    expect(officialTrackName(10, '6c')).toBe('l10-6c.mp3');
  });
  it('derives a stable tts filename', () => {
    const a = ttsFileName('Guten Tag');
    expect(a).toMatch(/^tts-[0-9a-f]+\.mp3$/);
    expect(ttsFileName('Guten Tag')).toBe(a);            // deterministic
    expect(ttsFileName('Tschüss')).not.toBe(a);          // distinct
  });
  it('builds public srcs', () => {
    expect(officialSrc(1, '2a')).toBe('/audio/l1-2a.mp3');
    expect(ttsSrc('Guten Tag')).toBe(`/audio/${ttsFileName('Guten Tag')}`);
  });
});

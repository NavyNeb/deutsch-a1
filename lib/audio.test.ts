import { describe, it, expect, vi } from 'vitest';
import { officialTrackName, ttsFileName, officialSrc, ttsSrc, playAudio } from './audio';

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

describe('playAudio', () => {
  it('reuses one audio element across taps (mobile-safe) and plays each src', async () => {
    const contexts: unknown[] = [];
    const play = vi.fn(function (this: HTMLAudioElement) { contexts.push(this); return Promise.resolve(); });
    // jsdom has no real media implementation, so stub play on the prototype.
    (window.HTMLMediaElement.prototype as unknown as { play: () => Promise<void> }).play = play;

    await playAudio('/audio/a.mp3');
    await playAudio('/audio/b.mp3');

    expect(play).toHaveBeenCalledTimes(2);
    expect(contexts[0]).toBe(contexts[1]); // same element reused, not a fresh one per tap
  });
});

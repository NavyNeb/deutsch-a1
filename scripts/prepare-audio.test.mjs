import { describe, it, expect } from 'vitest';
import { collectAudioJobs } from './prepare-audio.mjs';

const lessons = [{
  number: 1,
  steps: [
    { kind: 'vocab', item: { german: 'Guten Tag', example: { de: 'Guten Tag!' } } },
    { kind: 'exercise', exercise: { type: 'listenChoose', audio: { official: { lesson: 1, activity: '2a' } } } },
    { kind: 'exercise', exercise: { type: 'listenChoose', audio: { ttsText: 'Wie heißt du?' } } },
  ],
}];

describe('collectAudioJobs', () => {
  it('separates official copies from tts generations', () => {
    const { official, tts } = collectAudioJobs(lessons);
    expect(official).toContainEqual({ lesson: 1, activity: '2a' });
    expect(tts).toContain('Guten Tag');
    expect(tts).toContain('Guten Tag!');
    expect(tts).toContain('Wie heißt du?');
  });
});

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

const special = {
  id: 'sp-demo',
  steps: [
    { kind: 'chapter', title: 'Kapitel' },
    { kind: 'grammar', note: { examples: [{ de: 'Ich muss gehen.' }] } },
    { kind: 'pronunciation', items: [{ german: 'können', example: { de: 'Ich kann schwimmen.' } }] },
    { kind: 'quiz', title: 'Quiz', passMark: 0.8 },
    { kind: 'exercise', exercise: { type: 'listenChoose', audio: { ttsText: 'Sie darf nicht kommen.' } } },
  ],
};

describe('collectAudioJobs', () => {
  it('walks specials, ignoring chapter and quiz markers', () => {
    const { official, tts } = collectAudioJobs([special]);
    expect(official).toEqual([]);
    expect(tts.sort()).toEqual(['Ich kann schwimmen.', 'Ich muss gehen.', 'Sie darf nicht kommen.', 'können']);
  });
  it('separates official copies from tts generations', () => {
    const { official, tts } = collectAudioJobs(lessons);
    expect(official).toContainEqual({ lesson: 1, activity: '2a' });
    expect(tts).toContain('Guten Tag');
    expect(tts).toContain('Guten Tag!');
    expect(tts).toContain('Wie heißt du?');
  });
});

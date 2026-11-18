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

const redesigned = {
  id: 'new',
  steps: [
    { kind: 'situation', title: 'Im Café', lines: [{ who: 'A', de: 'Hallo!' }, { who: 'B', de: 'Einen Kaffee, bitte.' }], words: [{ german: 'der Kaffee', example: { de: 'Ich trinke Kaffee.' } }] },
    { kind: 'wordgroup', title: 'Getränke', items: [{ german: 'der Tee', example: { de: 'Der Tee ist heiß.' } }, { german: 'trinken', example: { de: 'Wir trinken Wasser.' } }] },
    { kind: 'grammar', note: {
      examples: [{ de: 'Ich lerne Deutsch.' }],
      anatomy: [{ parts: [{ text: 'Heute', role: 'time' }, { text: 'lerne', role: 'verb' }, { text: 'ich.', role: 'subject' }], en: 'x' }],
      contrast: { a: { examples: [{ de: 'Obwohl es regnet, gehe ich.' }] }, b: { examples: [{ de: 'Es regnet. Trotzdem gehe ich.' }] } },
      mistakes: [{ wrong: 'Heute ich lerne.', right: 'Heute lerne ich.', why: 'x' }],
    } },
    { kind: 'wrapup', summary: 's', card: { title: 't', sections: [{ heading: 'h', rows: [{ de: 'ich bin', en: 'I am' }] }] } },
  ],
};

describe('collectAudioJobs', () => {
  it('collects every German string of the redesigned steps, but not the wrong half of a mistake', () => {
    const { tts } = collectAudioJobs([redesigned]);
    // 'Heute lerne ich.' is both the joined breakdown parts and the right half of the mistake, so it appears once.
    expect(tts.sort()).toEqual([
      'Der Tee ist heiß.', 'Einen Kaffee, bitte.', 'Es regnet. Trotzdem gehe ich.', 'Hallo!', 'Heute lerne ich.',
      'Ich lerne Deutsch.', 'Ich trinke Kaffee.', 'Obwohl es regnet, gehe ich.', 'Wir trinken Wasser.',
      'der Kaffee', 'der Tee', 'ich bin', 'trinken',
    ].sort());
    expect(tts).not.toContain('Heute ich lerne.');
  });
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

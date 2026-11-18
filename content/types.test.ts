import { describe, it, expect } from 'vitest';
import { parseLesson } from './types';

const valid = {
  id: 'l1', number: 1, title: { de: 'Hallo!', en: 'Hello!' }, theme: 'greetings', goals: ['greet'],
  steps: [
    { kind: 'intro', title: 'Willkommen', goals: ['greet'] },
    { kind: 'vocab', item: { id: 'v1', german: 'Guten Tag', english: 'Hello', gender: null, syllables: ['GU','ten','TAG'], example: { de: 'Guten Tag!', en: 'Hello!' } } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'e1', word: 'Fenster', answer: 'das' } },
  ],
};

describe('parseLesson', () => {
  it('accepts a valid lesson', () => { expect(parseLesson(valid).id).toBe('l1'); });
  it('accepts an optional canDo line', () => {
    expect(parseLesson({ ...valid, canDo: { de: 'Ich kann grüßen.', en: 'I can greet.' } }).canDo?.en).toBe('I can greet.');
  });
  it('rejects an unknown exercise type', () => {
    const bad = structuredClone(valid);
    (bad.steps[2] as any).exercise.type = 'nope';
    expect(() => parseLesson(bad)).toThrow();
  });
  it('rejects an invalid gender', () => {
    const bad = structuredClone(valid);
    (bad.steps[1] as any).item.gender = 'los';
    expect(() => parseLesson(bad)).toThrow();
  });
});

import { LessonStepSchema, SpecialSchema, parseSpecial } from './types';

const specialBase = {
  id: 'sp-modalverben', number: 1, level: 'A2', title: { de: 'Modalverben', en: 'Modal verbs', fr: 'Verbes modaux' },
  theme: 'verbs', goals: ['g'],
  special: { slug: 'modalverben', group: 'verbs', levels: ['A1', 'B1'], related: ['l7'] },
  steps: [{ kind: 'intro', title: 'x', goals: [] }],
};

describe('special-course schema', () => {
  it('parses chapter and quiz steps, defaulting passMark to 0.8', () => {
    expect(LessonStepSchema.parse({ kind: 'chapter', title: 'Kapitel' }).kind).toBe('chapter');
    const q = LessonStepSchema.parse({ kind: 'quiz', title: 'Quiz' });
    expect(q.kind === 'quiz' && q.passMark).toBe(0.8);
  });
  it('accepts sp- ids and rejects lesson ids', () => {
    expect(parseSpecial(specialBase).id).toBe('sp-modalverben');
    expect(() => parseSpecial({ ...specialBase, id: 'lesson-1' })).toThrow();
    expect(SpecialSchema.safeParse({ ...specialBase, special: { ...specialBase.special, group: 'nope' } }).success).toBe(false);
  });
  it('defaults bookRefs to empty and allows a ref without lektion', () => {
    expect(parseSpecial(specialBase).special.bookRefs).toEqual([]);
    const p = parseSpecial({ ...specialBase, special: { ...specialBase.special, bookRefs: [{ book: 'daf-grammatiktrainer', start: 206, end: 210 }] } });
    expect(p.special.bookRefs[0].lektion).toBeUndefined();
  });
});

const vi1 = { id: 'w1', german: 'der Kaffee', english: 'coffee', gender: 'der', syllables: ['kaf', 'FEE'], example: { de: 'Ich trinke Kaffee.', en: 'I drink coffee.' } };

describe('lesson redesign step types', () => {
  it('parses a situation step with dialogue lines and key words', () => {
    const s = LessonStepSchema.parse({
      kind: 'situation', title: 'Im Café', setting: 'Two friends order drinks.',
      lines: [{ who: 'Ana', de: 'Hallo!', en: 'Hi!' }, { who: 'Ben', de: 'Ein Kaffee, bitte.', en: 'A coffee, please.', fr: 'Un café, s’il vous plaît.' }],
      words: [vi1],
    });
    expect(s.kind === 'situation' && s.lines).toHaveLength(2);
    expect(s.kind === 'situation' && s.words[0].id).toBe('w1');
  });
  it('rejects a situation with fewer than two lines', () => {
    expect(LessonStepSchema.safeParse({ kind: 'situation', title: 't', setting: 's', lines: [{ who: 'A', de: 'Hi', en: 'Hi' }], words: [] }).success).toBe(false);
  });
  it('parses a wordgroup step and rejects a single word', () => {
    const ok = LessonStepSchema.safeParse({ kind: 'wordgroup', title: 'Drinks', items: [vi1, { ...vi1, id: 'w2' }] });
    expect(ok.success).toBe(true);
    expect(LessonStepSchema.safeParse({ kind: 'wordgroup', title: 'Drinks', items: [vi1] }).success).toBe(false);
  });
  it('parses a rich grammar note with table, anatomy, contrast and mistakes', () => {
    const s = LessonStepSchema.parse({
      kind: 'grammar',
      note: {
        id: 'n1', title: 'Verb second', explanationMd: 'x', examples: [{ de: 'Ich lerne.', en: 'I learn.' }],
        lead: 'Use it for every statement.',
        tables: [{ title: 'sein', headers: ['ich', 'du'], rows: [['bin', 'bist']], highlightCol: 0 }],
        anatomy: [{ parts: [{ text: 'Ich', role: 'subject' }, { text: 'lerne', role: 'verb' }], en: 'I learn.' }],
        contrast: { a: { label: 'obwohl', examples: [{ de: 'Obwohl es regnet, gehe ich.', en: 'Although it rains, I go.' }] }, b: { label: 'trotzdem', examples: [{ de: 'Es regnet. Trotzdem gehe ich.', en: 'It rains. Still I go.' }] } },
        mistakes: [{ wrong: 'Ich lerne Deutsch gern.', right: 'Ich lerne gern Deutsch.', why: 'gern comes before the object.' }],
      },
    });
    expect(s.kind === 'grammar' && s.note.tables?.[0].rows[0]).toEqual(['bin', 'bist']);
    expect(s.kind === 'grammar' && s.note.anatomy?.[0].parts[1].role).toBe('verb');
  });
  it('accepts French headers and cells on a table', () => {
    const s = LessonStepSchema.parse({ kind: 'grammar', note: { id: 'n', title: 't', explanationMd: 'x', examples: [], tables: [{ title: 't', headers: ['When'], headersFr: ['Quand'], rows: [['morning']], rowsFr: [['matin']] }] } });
    expect(s.kind === 'grammar' && s.note.tables?.[0].rowsFr?.[0][0]).toBe('matin');
  });
  it('rejects an unknown anatomy role', () => {
    const bad = { kind: 'grammar', note: { id: 'n', title: 't', explanationMd: 'x', examples: [], anatomy: [{ parts: [{ text: 'a', role: 'banana' }], en: 'a' }] } };
    expect(LessonStepSchema.safeParse(bad).success).toBe(false);
  });
  it('parses a wrapup with a summary card', () => {
    const s = LessonStepSchema.parse({ kind: 'wrapup', summary: 'Done', card: { title: 'Cheat sheet', sections: [{ heading: 'sein', rows: [{ de: 'ich bin', en: 'I am', fr: 'je suis' }] }] } });
    expect(s.kind === 'wrapup' && s.card?.sections[0].rows[0].de).toBe('ich bin');
  });
});

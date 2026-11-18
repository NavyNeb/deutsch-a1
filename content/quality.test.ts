import { describe, it, expect } from 'vitest';
import { lessons } from './index';
import { lessonQualityIssues, isRedesigned } from './quality';
import { parseLesson, type Lesson } from './types';

const vocab = (id: string) => ({ id, german: id, english: id, french: `${id}-fr`, gender: null, syllables: [id], example: { de: id, en: id, fr: `${id}-fr` } });
const ex = (id: string) => ({ kind: 'exercise', exercise: { type: 'fillBlank', id, prompt: 'p', promptFr: 'pf', answer: 'a' } });
const ex6 = Array.from({ length: 6 }, (_, i) => ({ de: `Satz ${i}.`, en: `Sentence ${i}.`, fr: `Phrase ${i}.` }));

const good = {
  id: 'q1', level: 'A1', number: 1, title: { de: 'T', en: 'T', fr: 'T' }, theme: 't', themeFr: 'tf', goals: ['g'], goalsFr: ['gf'],
  canDo: { de: 'Ich kann.', en: 'I can.', fr: 'Je peux.' },
  steps: [
    { kind: 'intro', title: 'x', titleFr: 'x', goals: ['g'], goalsFr: ['gf'] },
    { kind: 'situation', title: 'S', titleFr: 'S', setting: 's', settingFr: 'sf', lines: [{ who: 'A', de: 'Hi', en: 'Hi', fr: 'Salut' }, { who: 'B', de: 'Ho', en: 'Ho', fr: 'Ho' }], words: [vocab('w1')] },
    ex('e1'),
    { kind: 'wordgroup', title: 'W', titleFr: 'W', items: [vocab('w2'), vocab('w3')] },
    { kind: 'grammar', note: { id: 'n1', title: 'N', titleFr: 'N', explanationMd: 'x', explanationMdFr: 'x', examples: ex6, tables: [{ title: 't', titleFr: 't', headers: ['a'], headersFr: ['a'], rows: [['b']], rowsFr: [['b']] }] } },
    ex('e2'), ex('e3'),
    { kind: 'wrapup', summary: 's', summaryFr: 'sf', card: { title: 'c', titleFr: 'c', sections: [{ heading: 'h', headingFr: 'h', rows: [{ de: 'd', en: 'e', fr: 'f' }] }] } },
  ],
} as unknown as Lesson;

const clone = () => structuredClone(good) as any;

describe('lessonQualityIssues', () => {
  it('passes a well-formed redesigned lesson', () => {
    expect(lessonQualityIssues(parseLesson(good))).toEqual([]);
  });

  it('only checks lessons that use the new format', () => {
    const old = clone();
    old.steps = old.steps.filter((s: any) => s.kind !== 'situation');
    expect(isRedesigned(parseLesson(good))).toBe(true);
    expect(isRedesigned(parseLesson(old))).toBe(false);
  });

  it('flags more than two single word cards in a row', () => {
    const l = clone();
    l.steps.splice(2, 0, ...['a', 'b', 'c'].map((id) => ({ kind: 'vocab', item: vocab(id) })));
    expect(lessonQualityIssues(parseLesson(l)).join('\n')).toMatch(/single word cards in a row/);
  });

  it('flags a rule block with no table or sentence breakdown', () => {
    const l = clone();
    delete l.steps[4].note.tables;
    expect(lessonQualityIssues(parseLesson(l)).join('\n')).toMatch(/table or a sentence breakdown/);
  });

  it('flags a rule block with fewer than six examples', () => {
    const l = clone();
    l.steps[4].note.examples = l.steps[4].note.examples.slice(0, 3);
    expect(lessonQualityIssues(parseLesson(l)).join('\n')).toMatch(/at least 6 examples/);
  });

  it('flags five exercises in a row before more teaching', () => {
    const l = clone();
    l.steps.splice(3, 0, ...['x1', 'x2', 'x3', 'x4'].map(ex));
    expect(lessonQualityIssues(parseLesson(l)).join('\n')).toMatch(/exercises in a row/);
  });

  it('flags missing French', () => {
    const l = clone();
    delete l.steps[1].lines[0].fr;
    expect(lessonQualityIssues(parseLesson(l)).join('\n')).toMatch(/French/);
  });

  it('flags a table without French headers or cells', () => {
    const l = clone();
    delete l.steps[4].note.tables[0].rowsFr;
    expect(lessonQualityIssues(parseLesson(l)).join(' | ')).toMatch(/French for step 5 \(grammar\) table 1 cells/);
  });

  it('flags a lesson without a summary card or can-do line', () => {
    const l = clone();
    delete l.steps[l.steps.length - 1].card;
    delete l.canDo;
    const issues = lessonQualityIssues(parseLesson(l)).join('\n');
    expect(issues).toMatch(/summary card/);
    expect(issues).toMatch(/can-do/);
  });
});

describe('the lessons in the app', () => {
  it('every lesson written in the new format meets the quality bar', () => {
    const report = lessons.filter(isRedesigned).flatMap((l) => lessonQualityIssues(l).map((i) => `${l.id}: ${i}`));
    expect(report).toEqual([]);
  });
});

import type { Exercise, Gender, Level, LessonStep, Special, SpecialGroup } from '../types';

// Authoring helpers for special courses. EN + FR are required by the signatures, so a special cannot be written without both.

/** [de, en, fr] */
export type Ex = readonly [string, string, string];

const example = ([de, en, fr]: Ex) => ({ de, en, fr });

export const intro = (title: string, titleFr: string, scene: string, sceneFr: string, goals: string[], goalsFr: string[]): LessonStep =>
  ({ kind: 'intro', title, titleFr, scene, sceneFr, goals, goalsFr });

export const chapter = (title: string, titleFr: string, blurb: string, blurbFr: string): LessonStep =>
  ({ kind: 'chapter', title, titleFr, blurb, blurbFr });

export const wrapup = (summary: string, summaryFr: string): LessonStep => ({ kind: 'wrapup', summary, summaryFr });

export const quiz = (title: string, titleFr: string, passMark = 0.8): LessonStep => ({ kind: 'quiz', title, titleFr, passMark });

/** syllables: 'MO-dal' (stressed syllable uppercase), pron: English respelling */
export const vocab = (
  id: string, german: string, english: string, french: string, gender: Gender,
  syllables: string, pron: string, ex: Ex,
): LessonStep => ({
  kind: 'vocab',
  item: { id, german, english, french, gender, syllables: syllables.split('-'), pronunciation: pron, example: example(ex) },
});

export const grammar = (
  id: string, title: readonly [string, string], md: readonly [string, string], examples: Ex[],
  diagram?: 'verb-second' | 'satzklammer' | 'conjugation-table',
): LessonStep => ({
  kind: 'grammar',
  note: { id, title: title[0], titleFr: title[1], explanationMd: md[0], explanationMdFr: md[1], examples: examples.map(example), ...(diagram ? { diagram } : {}) },
});

const step = (exercise: Exercise): LessonStep => ({ kind: 'exercise', exercise });

type Bi = readonly [string, string]; // [en, fr]

export const mc = (id: string, prompt: Bi, options: readonly string[], optionsFr: readonly string[], answer: number, why: Bi, hint?: Bi): LessonStep =>
  step({
    type: 'multipleChoice', id, prompt: prompt[0], promptFr: prompt[1],
    options: [...options], optionsFr: [...optionsFr], answer,
    explain: why[0], explainFr: why[1],
    ...(hint ? { hint: hint[0], hintFr: hint[1] } : {}),
  });

export const fb = (id: string, prompt: Bi, answer: string, hint: Bi): LessonStep =>
  step({ type: 'fillBlank', id, prompt: prompt[0], promptFr: prompt[1], answer, hint: hint[0], hintFr: hint[1] });

export const wo = (id: string, tokens: string[], answer: string[], hint: Bi): LessonStep =>
  step({ type: 'wordOrder', id, tokens, answer, hint: hint[0], hintFr: hint[1] });

export const match = (id: string, pairs: Ex[], hint: Bi): LessonStep =>
  step({ type: 'match', id, pairs: pairs.map(example), hint: hint[0], hintFr: hint[1] });

export const ap = (id: string, word: string, answer: 'der' | 'die' | 'das', hint: Bi): LessonStep =>
  step({ type: 'articlePicker', id, word, answer, hint: hint[0], hintFr: hint[1] });

export const lc = (id: string, prompt: Bi, ttsText: string, options: readonly string[], optionsFr: readonly string[], answer: number, hint: Bi): LessonStep =>
  step({
    type: 'listenChoose', id, prompt: prompt[0], promptFr: prompt[1], audio: { ttsText },
    options: [...options], optionsFr: [...optionsFr], answer, hint: hint[0], hintFr: hint[1],
  });

export interface SpecialInput {
  slug: string;
  number: number;
  group: SpecialGroup;
  levels: [Level, Level];
  related: string[];
  bookRefs?: { book: string; start: number; end: number }[];
  title: readonly [string, string, string]; // de, en, fr
  theme: Bi;
  goals: string[];
  goalsFr: string[];
  steps: LessonStep[];
}

export function defineSpecial(i: SpecialInput): Special {
  return {
    id: `sp-${i.slug}`,
    level: i.levels[0],
    number: i.number,
    title: { de: i.title[0], en: i.title[1], fr: i.title[2] },
    theme: i.theme[0],
    themeFr: i.theme[1],
    goals: i.goals,
    goalsFr: i.goalsFr,
    steps: i.steps,
    special: { slug: i.slug, group: i.group, levels: i.levels, related: i.related, bookRefs: i.bookRefs ?? [] },
  };
}

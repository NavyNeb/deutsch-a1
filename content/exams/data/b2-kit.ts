import type { ExamSetInput } from '../types';

// Authoring helpers for the B2 practice sets. They only cut boilerplate: the output is the
// plain ExamSetInput shape validated by ExamSetSchema, so nothing here changes the data model.

type Tr = { en: string; fr: string };
type LesenPart = ExamSetInput['lesen'][number];
type SchreibenTask = ExamSetInput['schreiben'][number];
type SprechenPart = ExamSetInput['sprechen'][number];

export const tr = (en: string, fr: string): Tr => ({ en, fr });

/** A German text with its translation. If a title is given, it is prepended to the translations as on the real data files. */
export const txt = (id: string, title: string | undefined, de: string, en: string, fr: string, label?: string) => ({
  id,
  ...(label ? { label } : {}),
  ...(title ? { title } : {}),
  de,
  tr: { en: title ? `${title}\n\n${en}` : en, fr: title ? `${title}\n\n${fr}` : fr },
});

/** Word box / gap entry: a single word with its meanings. */
export const word = (label: string, de: string, en: string, fr: string) => ({ id: label, label, de, tr: { en, fr } });

type Expl = [string, string];

/** true/false (or Ja/Nein) item */
export const tf = (id: string, q: string, qEn: string, qFr: string, answer: boolean, expl: Expl, textId?: string) => ({
  id, ...(textId ? { textId } : {}), q, qTr: tr(qEn, qFr), answer, explain: tr(expl[0], expl[1]),
});

/** multiple-choice item; each option is [de, en, fr] */
export const mc = (
  id: string, q: string, qEn: string, qFr: string,
  options: [string, string, string][], answer: number, expl: Expl, textId?: string,
) => ({
  id, ...(textId ? { textId } : {}), q, qTr: tr(qEn, qFr),
  options: options.map((o) => o[0]),
  optionsTr: options.map((o) => tr(o[1], o[2])),
  answer, explain: tr(expl[0], expl[1]),
});

/** matching item; answer is a text id (or 'x') */
export const mt = (id: string, q: string, qEn: string, qFr: string, answer: string, expl: Expl, textId?: string) => ({
  id, ...(textId ? { textId } : {}), q, qTr: tr(qEn, qFr), answer, explain: tr(expl[0], expl[1]),
});

/** gap item: options are plain words (no translation needed) */
export const gap = (id: string, n: number, options: [string, string, string], answer: number, expl: Expl) => ({
  id, q: `Lücke ${n}`, qTr: tr(`Gap ${n}`, `Lacune ${n}`), options, answer, explain: tr(expl[0], expl[1]),
});

type PartHead = { id: string; teil: number; title: string; instruction: string; instructionTr: Tr };
const head = (id: string, teil: number, title: string, instruction: string, en: string, fr: string): PartHead => ({
  id, teil, title, instruction, instructionTr: tr(en, fr),
});

export const lesenTF = (
  id: string, teil: number, title: string, instruction: [string, string, string],
  labels: 'rf' | 'jn', texts: ReturnType<typeof txt>[], items: ReturnType<typeof tf>[],
): LesenPart => ({
  ...head(id, teil, title, ...instruction), kind: 'trueFalse', labels, texts, items,
} as LesenPart);

export const lesenMC = (
  id: string, teil: number, title: string, instruction: [string, string, string],
  texts: ReturnType<typeof txt>[], items: (ReturnType<typeof mc> | ReturnType<typeof gap>)[],
): LesenPart => ({
  ...head(id, teil, title, ...instruction), kind: 'multipleChoice', texts, items,
} as LesenPart);

export const lesenMatch = (
  id: string, teil: number, title: string, instruction: [string, string, string],
  allowNone: boolean, texts: ReturnType<typeof txt>[], items: ReturnType<typeof mt>[],
): LesenPart => ({
  ...head(id, teil, title, ...instruction), kind: 'matching', allowNone, texts, items,
} as LesenPart);

export type Point = { id: string; de: string; en: string; fr: string; keywords: string[] };

export const message = (
  id: string, teil: number, register: 'informal' | 'formal', title: string,
  instruction: [string, string, string], source: ReturnType<typeof txt> | undefined,
  points: Point[], words: [number, number], model: { de: string; en: string; fr: string },
): SchreibenTask => ({
  id, teil, kind: 'message', title, register,
  instruction: instruction[0], instructionTr: tr(instruction[1], instruction[2]),
  ...(source ? { source } : {}),
  points: points.map((p) => ({ id: p.id, de: p.de, tr: tr(p.en, p.fr), keywords: p.keywords })),
  minWords: words[0], maxWords: words[1],
  model: { de: model.de, tr: tr(model.en, model.fr) },
});

export type Prompt = { id: string; cue: string; cueEn: string; cueFr: string; sample: string; sampleEn: string; sampleFr: string; tipEn?: string; tipFr?: string };

export const speak = (
  id: string, teil: number, title: string, minutes: number, instruction: [string, string, string], prompts: Prompt[],
): SprechenPart => ({
  id, teil, title, instruction: instruction[0], instructionTr: tr(instruction[1], instruction[2]), minutes,
  prompts: prompts.map((p) => ({
    id: p.id, cue: p.cue, cueTr: tr(p.cueEn, p.cueFr), sample: p.sample, sampleTr: tr(p.sampleEn, p.sampleFr),
    ...(p.tipEn && p.tipFr ? { tip: tr(p.tipEn, p.tipFr) } : {}),
  })),
});

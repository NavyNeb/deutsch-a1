import { z } from 'zod';

export const TrSchema = z.object({ en: z.string().min(1), fr: z.string().min(1) });
export type Tr = z.infer<typeof TrSchema>;

export const BoardSchema = z.enum(['goethe', 'telc']);
export type Board = z.infer<typeof BoardSchema>;
export const ExamLevelSchema = z.enum(['A1', 'A2', 'B1']);
export type ExamLevel = z.infer<typeof ExamLevelSchema>;
export const SkillSchema = z.enum(['lesen', 'schreiben', 'sprechen']);
export type Skill = z.infer<typeof SkillSchema>;

// A German source text (notice, ad, e-mail, article…). `tr` translates title + body together.
export const ExamTextSchema = z.object({
  id: z.string().min(1),
  label: z.string().optional(), // "a", "b"… for ads that items are matched to
  title: z.string().optional(),
  de: z.string().min(1),
  tr: TrSchema.optional(),
});
export type ExamText = z.infer<typeof ExamTextSchema>;

const partBase = {
  id: z.string().min(1),
  teil: z.number().int().min(1),
  title: z.string().min(1), // German, e.g. "Teil 1"
  instruction: z.string().min(1), // German task instruction, as on the real paper
  instructionTr: TrSchema,
  texts: z.array(ExamTextSchema),
};
const itemBase = {
  id: z.string().min(1),
  q: z.string().min(1),
  qTr: TrSchema,
  textId: z.string().optional(), // the text this item refers to; omitted = shared text(s) of the part
  explain: TrSchema.optional(), // why the answer is right, shown after checking
};

export const LesenPartSchema = z.discriminatedUnion('kind', [
  z.object({
    ...partBase,
    kind: z.literal('trueFalse'),
    labels: z.enum(['rf', 'jn']).default('rf'), // richtig/falsch or Ja/Nein
    items: z.array(z.object({ ...itemBase, answer: z.boolean() })).min(1),
  }),
  z.object({
    ...partBase,
    kind: z.literal('multipleChoice'),
    items: z.array(z.object({
      ...itemBase,
      options: z.array(z.string().min(1)).min(2).max(4),
      optionsTr: z.array(TrSchema).optional(),
      answer: z.number().int().min(0),
    })).min(1),
  }),
  z.object({
    ...partBase,
    kind: z.literal('matching'), // answer = id of a text, or 'x' (no text fits; only if allowNone)
    allowNone: z.boolean().default(false),
    items: z.array(z.object({ ...itemBase, answer: z.string().min(1) })).min(1),
  }),
]);
export type LesenPart = z.infer<typeof LesenPartSchema>;

export const SchreibenTaskSchema = z.discriminatedUnion('kind', [
  z.object({
    id: z.string().min(1),
    teil: z.number().int().min(1),
    kind: z.literal('form'),
    title: z.string().min(1),
    instruction: z.string().min(1),
    instructionTr: TrSchema,
    source: ExamTextSchema, // the information the form is filled in from
    fields: z.array(z.object({
      id: z.string().min(1),
      label: z.string().min(1),
      labelTr: TrSchema.optional(),
      accept: z.array(z.string().min(1)).min(1), // accepted answers (compared case/spacing-insensitively)
    })).min(1),
  }),
  z.object({
    id: z.string().min(1),
    teil: z.number().int().min(1),
    kind: z.literal('message'),
    title: z.string().min(1),
    register: z.enum(['informal', 'formal']),
    instruction: z.string().min(1),
    instructionTr: TrSchema,
    source: ExamTextSchema.optional(), // message/ad being answered, if any
    points: z.array(z.object({
      id: z.string().min(1),
      de: z.string().min(1),
      tr: TrSchema,
      keywords: z.array(z.string().min(1)).min(1), // lowercase stems; any hit counts as "covered"
    })).min(1),
    minWords: z.number().int().min(1),
    maxWords: z.number().int().min(1),
    model: z.object({ de: z.string().min(1), tr: TrSchema }),
  }),
]);
export type SchreibenTask = z.infer<typeof SchreibenTaskSchema>;

export const SprechenPartSchema = z.object({
  id: z.string().min(1),
  teil: z.number().int().min(1),
  title: z.string().min(1),
  instruction: z.string().min(1),
  instructionTr: TrSchema,
  minutes: z.number().min(1),
  prompts: z.array(z.object({
    id: z.string().min(1),
    cue: z.string().min(1), // what the card / examiner gives you
    cueTr: TrSchema,
    sample: z.string().min(1), // a model answer in German
    sampleTr: TrSchema,
    tip: TrSchema.optional(),
  })).min(1),
});
export type SprechenPart = z.infer<typeof SprechenPartSchema>;

export const ExamSetSchema = z.object({
  id: z.string().min(1),
  board: BoardSchema,
  level: ExamLevelSchema,
  number: z.number().int().min(1),
  lesen: z.array(LesenPartSchema).min(1),
  schreiben: z.array(SchreibenTaskSchema).min(1),
  sprechen: z.array(SprechenPartSchema).min(1),
});
export type ExamSet = z.infer<typeof ExamSetSchema>;

// Authoring type: schema defaults (labels, allowNone) may be omitted in data files.
export type ExamSetInput = z.input<typeof ExamSetSchema>;

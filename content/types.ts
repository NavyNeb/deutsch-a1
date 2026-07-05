import { z } from 'zod';

export const GenderSchema = z.enum(['der', 'die', 'das']).nullable();
export type Gender = z.infer<typeof GenderSchema>;

export const VocabItemSchema = z.object({
  id: z.string(),
  german: z.string(),
  english: z.string(),
  french: z.string().optional(),           // French meaning, parallel to `english`
  gender: GenderSchema,
  syllables: z.array(z.string()).min(1),   // stressed syllable is UPPERCASE
  pronunciation: z.string().optional(),    // English-reader respelling, e.g. "GOO-ten tahk"
  example: z.object({ de: z.string(), en: z.string(), fr: z.string().optional() }),
  image: z.string().optional(),
});
export type VocabItem = z.infer<typeof VocabItemSchema>;

export const GrammarNoteSchema = z.object({
  id: z.string(),
  title: z.string(),
  titleFr: z.string().optional(),
  explanationMd: z.string(),
  explanationMdFr: z.string().optional(),
  examples: z.array(z.object({ de: z.string(), en: z.string(), fr: z.string().optional() })),
  diagram: z.enum(['verb-second', 'satzklammer', 'conjugation-table']).optional(),
});
export type GrammarNote = z.infer<typeof GrammarNoteSchema>;

const AudioSourceSchema = z.union([
  z.object({ official: z.object({ lesson: z.number(), activity: z.string() }) }),
  z.object({ ttsText: z.string() }),
]);

export const ExerciseSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('multipleChoice'), id: z.string(), prompt: z.string(), promptFr: z.string().optional(), options: z.array(z.string()), optionsFr: z.array(z.string()).optional(), answer: z.number(), explain: z.string().optional(), explainFr: z.string().optional() }),
  z.object({ type: z.literal('fillBlank'), id: z.string(), prompt: z.string(), promptFr: z.string().optional(), answer: z.string(), hint: z.string().optional(), hintFr: z.string().optional() }),
  z.object({ type: z.literal('articlePicker'), id: z.string(), word: z.string(), answer: z.enum(['der', 'die', 'das']) }),
  z.object({ type: z.literal('match'), id: z.string(), pairs: z.array(z.object({ de: z.string(), en: z.string(), fr: z.string().optional() })).min(2) }),
  z.object({ type: z.literal('wordOrder'), id: z.string(), tokens: z.array(z.string()), answer: z.array(z.string()) }),
  z.object({ type: z.literal('listenChoose'), id: z.string(), prompt: z.string(), promptFr: z.string().optional(), audio: AudioSourceSchema, options: z.array(z.string()), optionsFr: z.array(z.string()).optional(), answer: z.number() }),
]);
export type Exercise = z.infer<typeof ExerciseSchema>;

export const LessonStepSchema = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('intro'), title: z.string(), titleFr: z.string().optional(), scene: z.string().optional(), sceneFr: z.string().optional(), goals: z.array(z.string()), goalsFr: z.array(z.string()).optional() }),
  z.object({ kind: z.literal('vocab'), item: VocabItemSchema }),
  z.object({ kind: z.literal('grammar'), note: GrammarNoteSchema }),
  z.object({ kind: z.literal('exercise'), exercise: ExerciseSchema }),
  z.object({ kind: z.literal('pronunciation'), focus: z.string(), focusFr: z.string().optional(), items: z.array(VocabItemSchema) }),
  z.object({ kind: z.literal('wrapup'), summary: z.string(), summaryFr: z.string().optional() }),
]);
export type LessonStep = z.infer<typeof LessonStepSchema>;

export const LessonSchema = z.object({
  id: z.string(),
  number: z.number(),
  title: z.object({ de: z.string(), en: z.string(), fr: z.string().optional() }),
  theme: z.string(),
  themeFr: z.string().optional(),
  goals: z.array(z.string()),
  goalsFr: z.array(z.string()).optional(),
  steps: z.array(LessonStepSchema).min(1),
});
export type Lesson = z.infer<typeof LessonSchema>;

export function parseLesson(data: unknown): Lesson { return LessonSchema.parse(data); }

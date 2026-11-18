import type { Gender, VocabItem } from './types';

// Small helpers that keep lesson files in the redesigned format short and uniform.
// See docs/superpowers/specs/2026-11-18-lesson-redesign-design.md for the lesson anatomy.

export type Gloss = { de: string; en: string; fr: string };

/** One German sentence or phrase with its English and French. */
export const g = (de: string, en: string, fr: string): Gloss => ({ de, en, fr });

/** One line of a dialogue. */
export const line = (who: string, de: string, en: string, fr: string) => ({ who, de, en, fr });

/**
 * A vocabulary item. `syllables` marks the stressed syllable in UPPERCASE; `pronunciation` is an
 * English-reader respelling (leave it null when unsure rather than guessing).
 */
export function word(
  id: string, german: string, gender: Gender, english: string, french: string,
  syllables: string[], pronunciation: string | null, example: Gloss,
): VocabItem {
  return { id, german, english, french, gender, syllables, ...(pronunciation ? { pronunciation } : {}), example };
}

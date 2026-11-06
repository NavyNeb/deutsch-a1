import type { VocabItem } from '@/content/types';
import { splitArticle, type ArticleGender } from './gender';

export type ExampleSegment = { text: string; gender: ArticleGender | null };

const WORD = /([A-Za-zÄÖÜäöüß]+)/;

/**
 * Splits a German sentence into segments, marking whole-word matches of the vocabulary's nouns with
 * their gender. Matching is exact and case-sensitive (German nouns are capitalised), so a verb or a
 * longer compound never takes a shorter noun's colour. Concatenating the segments gives back the input.
 */
export function highlightExample(text: string, vocab: VocabItem[]): ExampleSegment[] {
  const nouns = new Map<string, ArticleGender>();
  for (const v of vocab) {
    if (!v.gender) continue;
    nouns.set(splitArticle(v.german, v.gender).noun, v.gender);
  }
  const out: ExampleSegment[] = [];
  for (const part of text.split(WORD)) {
    if (!part) continue;
    const gender = nouns.get(part) ?? null;
    const prev = out[out.length - 1];
    if (!gender && prev && prev.gender === null) prev.text += part;
    else out.push({ text: part, gender });
  }
  return out;
}

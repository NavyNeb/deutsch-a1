import type { Gender, VocabItem } from '@/content/types';
import type { DictEntry } from '@/lib/dictionary';
import type { UIKey } from '@/lib/ui-strings';

export const POS_KEY: Record<string, UIKey> = {
  noun: 'posNoun', verb: 'posVerb', adj: 'posAdj', adv: 'posAdv', prep: 'posPrep',
  conj: 'posConj', pron: 'posPron', num: 'posNum', intj: 'posIntj', det: 'posDet', article: 'posDet', particle: 'posPart', part: 'posPart',
};

const GENDER_ARTICLE: Record<string, Gender> = { m: 'der', f: 'die', n: 'das' };

export function articlesOf(g?: string): Gender[] {
  if (!g) return [];
  return g.split('/').map((x) => GENDER_ARTICLE[x.trim()]).filter((x): x is NonNullable<Gender> => Boolean(x));
}

// A lesson word rendered with the same shape as dictionary entries.
export function lessonToEntry(v: VocabItem): DictEntry {
  const g = v.gender === 'der' ? 'm' : v.gender === 'die' ? 'f' : v.gender === 'das' ? 'n' : undefined;
  return { w: v.german, p: v.gender ? 'noun' : '', g, s: [v.english], x: [v.example.de, v.example.en] };
}

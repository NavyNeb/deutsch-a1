import { entriesFor, loadMeta, type DictEntry } from './dictionary';
import type { Issue } from './languagetool';

type Gender = 'm' | 'f' | 'n';
const ARTICLE_FOR: Record<Gender, string> = { m: 'der', f: 'die', n: 'das' };
const GENDER_NAME = {
  m: { en: 'masculine', fr: 'masculin' },
  f: { en: 'feminine', fr: 'féminin' },
  n: { en: 'neuter', fr: 'neutre' },
} as const;

// Only forms whose gender is unambiguous in the singular. "der/den/dem/des" carry
// case information too, so they are left to LanguageTool.
const ALLOWED: Record<string, Gender[]> = {
  das: ['n'],
  ein: ['m', 'n'],
  eine: ['f'],
  die: ['f'], // plus plurals, handled below
};

const WORD = /\p{L}+/gu;

export type NounLookup = (word: string) => DictEntry[] | undefined;

function gendersOf(entries: DictEntry[]): Gender[] | null {
  const nouns = entries.filter((e) => e.p === 'noun');
  if (nouns.length === 0 || nouns.some((e) => !e.g)) return null;
  const set = new Set<Gender>();
  for (const e of nouns) for (const g of e.g!.split('/')) if (g === 'm' || g === 'f' || g === 'n') set.add(g);
  return set.size ? [...set] : null;
}

const matchCase = (src: string, word: string) => (src[0] === src[0].toUpperCase() ? word[0].toUpperCase() + word.slice(1) : word);

// Pure core: flag "article + noun" pairs whose gender disagrees with the dictionary.
export function findArticleIssues(text: string, lookup: NounLookup, locale: 'en' | 'fr' = 'en'): Issue[] {
  const tokens = [...text.matchAll(WORD)].map((m) => ({ w: m[0], start: m.index!, end: m.index! + m[0].length }));
  const out: Issue[] = [];
  for (let i = 0; i + 1 < tokens.length; i++) {
    const art = tokens[i];
    const noun = tokens[i + 1];
    const key = art.w.toLowerCase();
    const allowed = ALLOWED[key];
    if (!allowed) continue;
    if (!/^[ \t]+$/.test(text.slice(art.end, noun.start))) continue;
    if (noun.w[0] !== noun.w[0].toUpperCase() || noun.w === noun.w.toUpperCase()) continue;

    const entries = lookup(noun.w);
    if (!entries) continue;
    const genders = gendersOf(entries);
    if (!genders) continue;
    if (genders.some((g) => allowed.includes(g))) continue;
    // "die Lehrer": plural identical to the singular
    if (key === 'die' && entries.some((e) => e.pl === e.w)) continue;

    const wanted = genders.map((g) => ARTICLE_FOR[g]);
    const replacements =
      key === 'eine'
        ? genders.map((g) => matchCase(art.w, g === 'f' ? 'eine' : 'ein'))
        : key === 'ein'
          ? [matchCase(art.w, 'eine')]
          : wanted.map((a) => matchCase(art.w, a));
    const names = genders.map((g) => GENDER_NAME[g][locale]).join(' / ');
    const hint = key === 'ein' || key === 'eine' ? '' : ` (${wanted.join(' / ')} ${noun.w})`;
    const message =
      locale === 'fr'
        ? `« ${noun.w} » est ${names}${hint} : « ${art.w} » ne convient pas.`
        : `“${noun.w}” is ${names}${hint}, so “${art.w}” doesn't fit.`;
    out.push({
      id: `local-${art.start}-${key}`,
      offset: art.start,
      length: art.w.length,
      message,
      replacements: [...new Set(replacements)],
      ruleId: 'ARTICLE_GENDER',
      kind: 'grammar',
      source: 'local',
    });
  }
  return out;
}

// Nouns that follow a checked article, without duplicates.
export function candidateNouns(text: string): string[] {
  const tokens = [...text.matchAll(WORD)].map((m) => ({ w: m[0], start: m.index!, end: m.index! + m[0].length }));
  const set = new Set<string>();
  for (let i = 0; i + 1 < tokens.length; i++) {
    if (!ALLOWED[tokens[i].w.toLowerCase()]) continue;
    const n = tokens[i + 1];
    if (/^[ \t]+$/.test(text.slice(tokens[i].end, n.start)) && n.w[0] === n.w[0].toUpperCase() && n.w !== n.w.toUpperCase()) set.add(n.w);
  }
  return [...set].slice(0, 40);
}

export async function checkArticles(text: string, locale: 'en' | 'fr'): Promise<Issue[]> {
  const nouns = candidateNouns(text);
  if (nouns.length === 0) return [];
  try {
    const meta = await loadMeta();
    const found = new Map<string, DictEntry[]>();
    await Promise.all(nouns.map(async (n) => found.set(n, await entriesFor(meta, n))));
    return findArticleIssues(text, (w) => found.get(w), locale);
  } catch {
    return [];
  }
}

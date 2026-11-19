import type { Gender, Level, VocabItem } from '../types';
import a1 from './a1';
import a2 from './a2';
import b1 from './b1';
import b2 from './b2';

// The Word Sprint word bank: extra words per CEFR level on top of the lesson vocabulary.
// Level choice follows the official Goethe word lists (A1, A2, B1; headwords only) and the B2 exam topics.
// Meanings are our own. A line is "German | English | French"; nouns carry their article.

const SOURCES: Record<Level, string> = { A1: a1, A2: a2, B1: b1, B2: b2 };

const ARTICLE = /^(der|die|das)\s+/;

const fold = (s: string) =>
  s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function genderOf(german: string): Gender {
  const m = german.match(ARTICLE);
  return m ? (m[1] as 'der' | 'die' | 'das') : null;
}

/** Parses one level's text into vocabulary items (no examples: the dictionary supplies those). */
export function parseBank(level: Level, text: string): VocabItem[] {
  const out: VocabItem[] = [];
  const seen = new Set<string>();
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    const [german, english, french] = line.split('|').map((p) => p.trim());
    if (!german || !english) continue;
    const slug = fold(german.replace(ARTICLE, ''));
    const id = `wb-${level.toLowerCase()}-${slug}`;
    if (seen.has(id)) continue;
    seen.add(id);
    out.push({
      id, german, english, ...(french ? { french } : {}),
      gender: genderOf(german),
      syllables: [german.replace(ARTICLE, '')],
      example: { de: '', en: '' },
    });
  }
  return out;
}

let cache: Record<Level, VocabItem[]> | null = null;

/** Bank words per level, as written (a word listed at two levels stays in the lower one when pools are built). */
export function bankByLevel(): Record<Level, VocabItem[]> {
  if (!cache) {
    cache = { A1: parseBank('A1', SOURCES.A1), A2: parseBank('A2', SOURCES.A2), B1: parseBank('B1', SOURCES.B1), B2: parseBank('B2', SOURCES.B2) };
  }
  return cache;
}

export function allBankWords(): VocabItem[] {
  const b = bankByLevel();
  return [...b.A1, ...b.A2, ...b.B1, ...b.B2];
}

/** Raw sources, for the audio script. */
export const BANK_SOURCES = SOURCES;

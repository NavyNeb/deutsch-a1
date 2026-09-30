import { fold, letters, shardKey } from './dict-shared.mjs';

// Compact entry as written by scripts/build-dictionary.mjs.
export type DictEntry = {
  w: string;                 // headword
  p: string;                 // part of speech (noun, verb, adj, adv, prep, ...)
  g?: string;                // gender: m | f | n (or "m/n")
  pl?: string;               // plural
  gen?: string;              // genitive singular
  v?: string;                // verb principal parts, e.g. "geht, ging, ist gegangen"
  ipa?: string;
  s: string[];               // English glosses
  x?: [string, string];      // example [German, English]
};

export type DictHitKind = 'exact' | 'form' | 'english' | 'prefix' | 'fuzzy';
export type DictHit = { entry: DictEntry; kind: DictHitKind; via?: string };

type Namespace = 'de' | 'fm' | 'en';
type NsMeta = { shards: string[]; split: string[] };
export type DictMeta = { generated: string; counts: Record<Namespace, number> } & Record<Namespace, NsMeta>;

const BASE = '/dict';
const cache = new Map<string, Promise<unknown>>();

function fetchJson<T>(path: string): Promise<T> {
  let p = cache.get(path) as Promise<T> | undefined;
  if (!p) {
    p = fetch(`${BASE}/${path}`).then((r) => {
      if (!r.ok) throw new Error(`dictionary fetch failed: ${path} (${r.status})`);
      return r.json() as Promise<T>;
    });
    p.catch(() => cache.delete(path));
    cache.set(path, p);
  }
  return p;
}

export function loadMeta(): Promise<DictMeta> {
  return fetchJson<DictMeta>('meta.json');
}

// Which shard file holds this (folded) key, or null if no such shard exists.
// A 2-letter query under a split prefix maps to the "xx_" shard that holds the
// short words of that prefix (er, es, ab, ...).
export function shardFor(meta: NsMeta, foldedKey: string): string | null {
  const l = letters(foldedKey);
  if (l.length < 2) return null;
  const key = shardKey(foldedKey, new Set(meta.split));
  return meta.shards.includes(key) ? key : null;
}

const loadDe = (key: string) => fetchJson<DictEntry[]>(`de/${key}.json`);
const loadFm = (key: string) => fetchJson<Record<string, string[]>>(`fm/${key}.json`);
const loadEn = (key: string) => fetchJson<Record<string, string[]>>(`en/${key}.json`);

// All entries for an exact headword (there may be several parts of speech).
export async function entriesFor(meta: DictMeta, word: string): Promise<DictEntry[]> {
  const key = shardKey(word, new Set(meta.de.split));
  if (!meta.de.shards.includes(key)) return [];
  return (await loadDe(key)).filter((e) => e.w === word);
}

function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (cur[j] < rowMin) rowMin = cur[j];
    }
    if (rowMin > max) return max + 1;
    prev = cur;
  }
  return prev[b.length];
}

export const MIN_QUERY_LETTERS = 2;
const LIMIT = 40;

export type SearchResult = { hits: DictHit[]; needsMoreLetters: boolean };

export async function searchDictionary(query: string): Promise<SearchResult> {
  const q = fold(query);
  if (letters(q).length < MIN_QUERY_LETTERS) return { hits: [], needsMoreLetters: false };
  const meta = await loadMeta();

  const deKey = shardFor(meta.de, q);
  const fmKey = shardFor(meta.fm, q);
  const enKey = shardFor(meta.en, q);
  const splitTooShort =
    meta.de.split.includes(letters(q).slice(0, 2)) && letters(q).length < 3;

  const [deShard, fmShard, enShard] = await Promise.all([
    deKey ? loadDe(deKey) : Promise.resolve([] as DictEntry[]),
    fmKey ? loadFm(fmKey) : Promise.resolve({} as Record<string, string[]>),
    enKey ? loadEn(enKey) : Promise.resolve({} as Record<string, string[]>),
  ]);

  const out: DictHit[] = [];
  const seen = new Set<string>();
  const push = (entry: DictEntry, kind: DictHitKind, via?: string) => {
    const id = `${entry.w}|${entry.p}|${entry.g ?? ''}|${entry.s[0] ?? ''}`;
    if (seen.has(id) || out.length >= LIMIT) return;
    seen.add(id);
    out.push({ entry, kind, via });
  };

  // 1. exact headword
  for (const e of deShard) if (fold(e.w) === q) push(e, 'exact');

  // 2. inflected form -> lemma (skipped when the word is itself a headword, so
  // "Haus" doesn't lead with "form of hausen")
  const lemmas = out.length ? [] : fmShard[q] ?? [];
  for (const lemma of lemmas) for (const e of await entriesFor(meta, lemma)) push(e, 'form', query.trim());

  // 3. English -> German
  for (const lemma of (enShard[q] ?? []).slice(0, 12)) for (const e of await entriesFor(meta, lemma)) push(e, 'english', query.trim());

  // 4. prefix matches: shards are ordered by usefulness, so a stable sort by
  // length surfaces short, common words first.
  const prefixed = deShard.filter((e) => fold(e.w).startsWith(q));
  prefixed.sort((a, b) => a.w.length - b.w.length);
  for (const e of prefixed) push(e, 'prefix');

  // 5. typo tolerance only when nothing matched
  if (out.length === 0 && deShard.length) {
    const max = q.length > 6 ? 2 : 1;
    const scored: { e: DictEntry; d: number }[] = [];
    for (const e of deShard) {
      const d = editDistance(fold(e.w), q, max);
      if (d <= max) scored.push({ e, d });
    }
    scored.sort((a, b) => a.d - b.d);
    for (const { e } of scored.slice(0, 10)) push(e, 'fuzzy');
  }

  return { hits: out, needsMoreLetters: splitTooShort };
}

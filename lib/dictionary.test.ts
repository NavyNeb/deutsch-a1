import { describe, it, expect, beforeEach, vi } from 'vitest';
import { fold, letters, shardKey } from './dict-shared.mjs';
import { searchDictionary, shardFor, type DictEntry } from './dictionary';

describe('fold / letters / shardKey', () => {
  it('folds case, umlauts and ß', () => {
    expect(fold('Häuser')).toBe('hauser');
    expect(fold('Straße')).toBe('strasse');
    expect(fold('  Schön ')).toBe('schon');
  });
  it('keeps letters only for shard keys', () => {
    expect(letters('Über-all')).toBe('uberall');
    expect(shardKey('Haus', null)).toBe('ha');
    expect(shardKey('Ärger', null)).toBe('ar');
    expect(shardKey('er', new Set(['er']))).toBe('er_');
    expect(shardKey('Verkehr', new Set(['ve']))).toBe('ver');
    expect(shardKey('auxiliar', new Set(['au']))).toBe('aux_');
    expect(shardKey('Kondition', new Set(['ko']))).toBe('kon');
  });
});

const E = (w: string, p: string, s: string[], extra: Partial<DictEntry> = {}): DictEntry => ({ w, p, s, ...extra });

const FILES: Record<string, unknown> = {
  'meta.json': {
    generated: 'test',
    counts: { de: 5, fm: 1, en: 1 },
    de: { shards: ['ha', 'ge', 'ba', 'sc', 've_', 'ver'], split: ['ve'] },
    fm: { shards: ['ha'], split: [] },
    en: { shards: ['ho'], split: [] },
  },
  'de/ha.json': [
    E('Haus', 'noun', ['house'], { g: 'n', pl: 'Häuser' }),
    E('Hauptstadt', 'noun', ['capital'], { g: 'f' }),
    E('Hausaufgabe', 'noun', ['homework'], { g: 'f' }),
    E('Hand', 'noun', ['hand'], { g: 'f' }),
  ],
  'de/ge.json': [E('gehen', 'verb', ['to go'], { v: 'geht, ging, ist gegangen' })],
  'de/ba.json': [E('Bahn', 'noun', ['railway'])],
  'fm/ha.json': { hauser: ['Haus'] },
  'en/ho.json': { house: ['Haus'] },
};

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn(async (url: string) => {
    const key = String(url).replace('/dict/', '');
    if (key in FILES) return { ok: true, status: 200, json: async () => FILES[key] };
    return { ok: false, status: 404, json: async () => ({}) };
  }));
});

describe('searchDictionary', () => {
  it('finds an exact headword first', async () => {
    const { hits } = await searchDictionary('Haus');
    expect(hits[0].entry.w).toBe('Haus');
    expect(hits[0].kind).toBe('exact');
  });

  it('is case- and umlaut-insensitive', async () => {
    const { hits } = await searchDictionary('haus');
    expect(hits[0].entry.w).toBe('Haus');
  });

  it('maps an inflected form back to its lemma', async () => {
    const { hits } = await searchDictionary('Häuser');
    expect(hits[0]).toMatchObject({ kind: 'form', via: 'Häuser' });
    expect(hits[0].entry.w).toBe('Haus');
  });

  it('finds German words from an English query', async () => {
    const { hits } = await searchDictionary('house');
    expect(hits.some((h) => h.kind === 'english' && h.entry.w === 'Haus')).toBe(true);
  });

  it('lists prefix matches, shortest first', async () => {
    const { hits } = await searchDictionary('ha');
    const words = hits.filter((h) => h.kind === 'prefix').map((h) => h.entry.w);
    expect(words).toEqual(['Haus', 'Hand', 'Hauptstadt', 'Hausaufgabe']);
  });

  it('suggests close spellings only when nothing else matched', async () => {
    const { hits } = await searchDictionary('Hauss');
    expect(hits.length).toBeGreaterThan(0);
    expect(hits.every((h) => h.kind === 'fuzzy' || h.kind === 'prefix' || h.kind === 'exact')).toBe(true);
    expect(hits.some((h) => h.entry.w === 'Haus')).toBe(true);
  });

  it('returns nothing for queries under 2 letters without fetching', async () => {
    const r = await searchDictionary('h');
    expect(r.hits).toEqual([]);
    expect(fetch).not.toHaveBeenCalled();
  });

  it('reports no hits for an unknown word', async () => {
    const r = await searchDictionary('qqqq');
    expect(r.hits).toEqual([]);
  });

  it('loads only the shard for the query (lazy)', async () => {
    await searchDictionary('gehen');
    const urls = (fetch as unknown as ReturnType<typeof vi.fn>).mock.calls.map((c) => c[0]);
    expect(urls).not.toContain('/dict/de/ba.json');
  });
});

describe('shardFor', () => {
  const meta = { shards: ['ha', 've_', 'ver'], split: ['ve'] };
  it('maps normal prefixes', () => expect(shardFor(meta, 'haus')).toBe('ha'));
  it('maps split prefixes to 3 letters', () => expect(shardFor(meta, 'verkehr')).toBe('ver'));
  it('maps 2-letter queries under a split prefix to the short-word shard', () => expect(shardFor(meta, 've')).toBe('ve_'));
  it('returns null when no shard exists', () => expect(shardFor(meta, 'zz')).toBeNull());
});

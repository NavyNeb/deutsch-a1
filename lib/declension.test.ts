import { describe, it, expect } from 'vitest';
import { nounCases, comparison } from './declension';

const row = (r: ReturnType<typeof nounCases>, c: string) => r.rows.find((x) => x.case === c)!;

describe('nounCases', () => {
  it('declines Haus', () => {
    const r = nounCases({ w: 'Haus', g: 'n', pl: 'Häuser', gen: 'Hauses' });
    expect(row(r, 'nom')).toMatchObject({ sing: 'das Haus', plur: 'die Häuser' });
    expect(row(r, 'acc')).toMatchObject({ sing: 'das Haus', plur: 'die Häuser' });
    expect(row(r, 'dat')).toMatchObject({ sing: 'dem Haus', plur: 'den Häusern' });
    expect(row(r, 'gen')).toMatchObject({ sing: 'des Hauses', plur: 'der Häuser' });
    expect(r.note).toBeUndefined();
  });

  it('keeps weak masculines and adds no extra dative -n', () => {
    const r = nounCases({ w: 'Student', g: 'm', pl: 'Studenten', gen: 'Studenten' });
    expect(row(r, 'nom').sing).toBe('der Student');
    expect(row(r, 'acc').sing).toBe('den Studenten');
    expect(row(r, 'dat').sing).toBe('dem Studenten');
    expect(row(r, 'dat').plur).toBe('den Studenten');
  });

  it('adds no dative -n after plural -s', () => {
    expect(row(nounCases({ w: 'Auto', g: 'n', pl: 'Autos', gen: 'Autos' }), 'dat').plur).toBe('den Autos');
  });

  it('falls back for a missing genitive', () => {
    const f = nounCases({ w: 'Frau', g: 'f', pl: 'Frauen' });
    expect(row(f, 'gen').sing).toBe('der Frau');
    const m = nounCases({ w: 'Tisch', g: 'm', pl: 'Tische' });
    expect(row(m, 'gen').sing).toBe('des Tisches');
    const n = nounCases({ w: 'Buch', g: 'n', pl: 'Bücher' });
    expect(row(n, 'gen').sing).toBe('des Buchs');
  });

  it('shows a dash when the plural is missing', () => {
    const r = nounCases({ w: 'Wasser', g: 'n', gen: 'Wassers' });
    expect(r.note).toBe('plural-missing');
    for (const c of r.rows) expect(c.plur).toBe('—');
  });

  it('uses the first gender when ambiguous', () => {
    const r = nounCases({ w: 'Nachbar', g: 'm/n', pl: 'Nachbarn', gen: 'Nachbars' });
    expect(r.note).toBe('gender-ambiguous');
    expect(row(r, 'nom').sing).toBe('der Nachbar');
  });

  it('does not crash without gender', () => {
    const r = nounCases({ w: 'Ding' });
    expect(r.rows).toHaveLength(4);
    expect(JSON.stringify(r)).not.toContain('undefined');
  });
});

describe('comparison', () => {
  it('reads the data when present', () => {
    expect(comparison({ w: 'schön', v: 'schöner, am schönsten' })).toEqual({ positive: 'schön', comparative: 'schöner', superlative: 'am schönsten', irregular: false, check: false });
    expect(comparison({ w: 'alt', v: 'älter, am ältesten' })).toMatchObject({ comparative: 'älter', superlative: 'am ältesten', irregular: true });
    expect(comparison({ w: 'groß', v: 'größer, am größten' })).toMatchObject({ comparative: 'größer', superlative: 'am größten' });
  });

  it('knows irregular adjectives', () => {
    expect(comparison({ w: 'gut' })).toMatchObject({ comparative: 'besser', superlative: 'am besten', irregular: true, check: false });
  });

  it('drops the e in -el and -euer', () => {
    expect(comparison({ w: 'teuer', v: 'teurer, am teuersten' }).comparative).toBe('teurer');
    expect(comparison({ w: 'dunkel', v: 'dunkler, am dunkelsten' }).comparative).toBe('dunkler');
    expect(comparison({ w: 'dunkel' })).toMatchObject({ comparative: 'dunkler', check: true });
  });

  it('applies the regular rule with a check flag when v is missing', () => {
    expect(comparison({ w: 'klein' })).toMatchObject({ comparative: 'kleiner', superlative: 'am kleinsten', check: true });
    expect(comparison({ w: 'laut' })).toMatchObject({ superlative: 'am lautesten', check: true });
  });
});

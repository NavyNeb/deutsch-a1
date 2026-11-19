import { describe, it, expect } from 'vitest';
import { BANK_SOURCES, bankByLevel, parseBank, allBankWords } from './index';
import type { Level } from '../types';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

describe('word bank', () => {
  it('parses German | English | French lines, skipping comments and blanks', () => {
    const items = parseBank('A1', '# comment\n## section\n\nder Baum|tree|l’arbre\nlaufen|to run|courir\n');
    expect(items.map((i) => i.id)).toEqual(['wb-a1-baum', 'wb-a1-laufen']);
    expect(items[0]).toMatchObject({ german: 'der Baum', english: 'tree', french: 'l’arbre', gender: 'der' });
    expect(items[1].gender).toBeNull();
  });

  it('ignores a word listed twice at one level', () => {
    expect(parseBank('A2', 'der Ball|ball|le ballon\nder Ball|ball|le ballon')).toHaveLength(1);
  });

  it('has a solid number of words at every level', () => {
    const b = bankByLevel();
    expect(b.A1.length).toBeGreaterThanOrEqual(200);
    expect(b.A2.length).toBeGreaterThanOrEqual(200);
    expect(b.B1.length).toBeGreaterThanOrEqual(250);
    expect(b.B2.length).toBeGreaterThanOrEqual(190);
  });

  for (const level of LEVELS) {
    describe(level, () => {
      const lines = BANK_SOURCES[level].split('\n').filter((l) => l.trim() && !l.startsWith('#'));

      it('has exactly three non-empty parts on every line', () => {
        for (const l of lines) {
          const parts = l.split('|').map((p) => p.trim());
          expect(parts, l).toHaveLength(3);
          for (const p of parts) expect(p.length, l).toBeGreaterThan(0);
        }
      });

      it('gives every noun its article (a capitalised word without der/die/das is a mistake)', () => {
        for (const l of lines) {
          const de = l.split('|')[0].trim();
          if (/^(der|die|das)\s/.test(de)) continue;
          expect(/^[A-ZÄÖÜ]/.test(de), `${de} looks like a noun without an article`).toBe(false);
        }
      });

      it('has unique ids', () => {
        const ids = bankByLevel()[level].map((w) => w.id);
        expect(new Set(ids).size).toBe(ids.length);
      });
    });
  }

  it('has every word as a string the game can show (meaning and French present)', () => {
    for (const w of allBankWords()) {
      expect(w.english).toBeTruthy();
      expect(w.french).toBeTruthy();
      expect(w.german).toBeTruthy();
    }
  });
});

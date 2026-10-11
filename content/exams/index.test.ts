import { describe, expect, it } from 'vitest';
import { ALL_EXAM_SETS } from './index';
import { FORMATS } from './formats';
import { countWords, coveredPoints } from '@/lib/exam-score';

describe('exam sets', () => {
  it('has unique set ids that match board-level-number', () => {
    const ids = ALL_EXAM_SETS.map((s) => s.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const s of ALL_EXAM_SETS) expect(s.id).toBe(`${s.board}-${s.level.toLowerCase()}-${s.number}`);
  });

  it('has globally unique ids for parts, items and tasks', () => {
    const seen = new Set<string>();
    const add = (id: string) => {
      expect(seen.has(id), `duplicate id ${id}`).toBe(false);
      seen.add(id);
    };
    for (const s of ALL_EXAM_SETS) {
      for (const p of s.lesen) {
        add(p.id);
        p.items.forEach((i) => add(`${s.id}/${i.id}`));
      }
      for (const t of s.schreiben) add(t.id);
      for (const p of s.sprechen) add(p.id);
    }
  });

  for (const s of ALL_EXAM_SETS) {
    const fmt = FORMATS[s.board][s.level];

    describe(s.id, () => {
      it('follows the format table', () => {
        expect(s.lesen.map((p) => [p.teil, p.kind, p.items.length])).toEqual(
          fmt.lesen.parts.map((p) => [p.teil, p.kind, p.items]),
        );
        expect(s.schreiben.map((t) => [t.teil, t.kind])).toEqual(fmt.schreiben.tasks.map((t) => [t.teil, t.kind]));
        expect(s.sprechen.map((p) => p.teil)).toEqual(fmt.sprechen.parts.map((p) => p.teil));
      });

      it('has consistent Lesen answers and references', () => {
        for (const p of s.lesen) {
          const textIds = new Set(p.texts.map((t) => t.id));
          expect(textIds.size, `${p.id} text ids`).toBe(p.texts.length);
          expect(p.texts.length, `${p.id} needs texts`).toBeGreaterThan(0);
          for (const i of p.items) {
            if (i.textId) expect(textIds.has(i.textId), `${i.id} textId`).toBe(true);
            if (p.kind === 'multipleChoice') {
              const mc = i as { options: string[]; optionsTr?: unknown[]; answer: number };
              expect(mc.answer, `${i.id} answer index`).toBeLessThan(mc.options.length);
              if (mc.optionsTr) expect(mc.optionsTr.length, `${i.id} optionsTr`).toBe(mc.options.length);
            }
            if (p.kind === 'matching') {
              const a = i.answer as string;
              expect(textIds.has(a) || (p.allowNone && a === 'x'), `${i.id} answer ${a}`).toBe(true);
            }
          }
          if (p.kind === 'matching') {
            expect(p.texts.every((t) => !!t.label), `${p.id} labels`).toBe(true);
          }
        }
      });

      it('has usable Schreiben tasks', () => {
        for (const t of s.schreiben) {
          if (t.kind === 'form') {
            for (const f of t.fields) expect(f.accept.length).toBeGreaterThan(0);
          } else {
            expect(t.minWords).toBeLessThanOrEqual(t.maxWords);
            for (const p of t.points) {
              expect(p.keywords.every((k) => k === k.toLowerCase()), `${p.id} keywords lowercase`).toBe(true);
            }
            const words = countWords(t.model.de);
            expect(words, `${t.id} model too short`).toBeGreaterThanOrEqual(Math.floor(t.minWords * 0.8));
            expect(words, `${t.id} model too long`).toBeLessThanOrEqual(Math.ceil(t.maxWords * 1.2));
            const covered = coveredPoints(t, t.model.de);
            for (const p of t.points) expect(covered[p.id], `${t.id} model must cover ${p.id}`).toBe(true);
          }
        }
      });

      it('has Sprechen prompts with samples', () => {
        for (const p of s.sprechen) expect(p.prompts.length, `${p.id} prompts`).toBeGreaterThanOrEqual(3);
      });
    });
  }
});

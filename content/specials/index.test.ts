import { describe, it, expect } from 'vitest';
import { specials, getSpecial } from './index';
import { lessons } from '../index';
import { BOOKS } from '@/lib/books';
// @ts-ignore -- plain .mjs script without type declarations
import { collectAudioJobs } from '../../scripts/prepare-audio.mjs';

const MIN_SPECIALS = 32;

describe('special courses', () => {
  it('registers the expected number of specials with unique ids and matching slugs', () => {
    expect(specials.length).toBeGreaterThanOrEqual(MIN_SPECIALS);
    expect(new Set(specials.map((s) => s.id)).size).toBe(specials.length);
    expect(new Set(specials.map((s) => s.number)).size).toBe(specials.length);
    for (const s of specials) {
      expect(s.id).toBe(`sp-${s.special.slug}`);
      expect(getSpecial(s.special.slug)).toBe(s);
    }
  });

  for (const sp of specials) {
    describe(sp.id, () => {
      const kinds = sp.steps.map((s) => s.kind);
      const quizIdx = kinds.indexOf('quiz');
      const exercises = sp.steps.flatMap((s) => (s.kind === 'exercise' ? [s.exercise] : []));
      const quizExercises = sp.steps.slice(quizIdx + 1).flatMap((s) => (s.kind === 'exercise' ? [s.exercise] : []));

      it('has 4-6 chapters, one wrap-up and one quiz marker', () => {
        const chapters = kinds.filter((k) => k === 'chapter').length;
        expect(chapters).toBeGreaterThanOrEqual(4);
        expect(chapters).toBeLessThanOrEqual(6);
        expect(kinds.filter((k) => k === 'wrapup')).toHaveLength(1);
        expect(kinds.filter((k) => k === 'quiz')).toHaveLength(1);
        expect(kinds[0]).toBe('intro');
        expect(kinds.indexOf('wrapup')).toBeLessThan(quizIdx);
      });

      it('has at least 12 quiz exercises of at least 3 types', () => {
        expect(quizExercises.length).toBeGreaterThanOrEqual(12);
        expect(new Set(quizExercises.map((e) => e.type)).size).toBeGreaterThanOrEqual(3);
      });

      it('has French for every English string', () => {
        expect(sp.title.fr).toBeTruthy();
        expect(sp.themeFr).toBeTruthy();
        expect(sp.goalsFr?.length).toBe(sp.goals.length);
        for (const step of sp.steps) {
          if (step.kind === 'intro') { expect(step.titleFr).toBeTruthy(); expect(step.sceneFr).toBeTruthy(); expect(step.goalsFr?.length).toBe(step.goals.length); }
          if (step.kind === 'chapter') { expect(step.titleFr).toBeTruthy(); expect(step.blurbFr).toBeTruthy(); }
          if (step.kind === 'wrapup') expect(step.summaryFr).toBeTruthy();
          if (step.kind === 'quiz') expect(step.titleFr).toBeTruthy();
          if (step.kind === 'vocab') { expect(step.item.french).toBeTruthy(); expect(step.item.example.fr).toBeTruthy(); }
          if (step.kind === 'grammar') {
            expect(step.note.titleFr).toBeTruthy();
            expect(step.note.explanationMdFr).toBeTruthy();
            for (const e of step.note.examples) expect(e.fr).toBeTruthy();
          }
          if (step.kind === 'exercise') {
            const e = step.exercise;
            if ('promptFr' in e) expect(e.promptFr).toBeTruthy();
            if (e.type === 'multipleChoice' || e.type === 'listenChoose') expect(e.optionsFr?.length).toBe(e.options.length);
          }
        }
      });

      it('has unique exercise ids and valid answers', () => {
        const ids = exercises.map((e) => e.id);
        expect(new Set(ids).size).toBe(ids.length);
        for (const e of exercises) {
          if (e.type === 'multipleChoice' || e.type === 'listenChoose') {
            expect(Number.isInteger(e.answer) && e.answer >= 0 && e.answer < e.options.length).toBe(true);
          }
          if (e.type === 'fillBlank') expect(e.answer.trim().length).toBeGreaterThan(0);
          if (e.type === 'wordOrder') expect([...e.tokens].sort()).toEqual([...e.answer].sort());
        }
      });

      it('explains or hints every graded exercise', () => {
        for (const e of exercises) {
          const text = ('explain' in e && e.explain) || ('hint' in e && e.hint);
          expect(text, e.id).toBeTruthy();
        }
      });

      it('prefixes vocab ids with its own slug and keeps them unique', () => {
        const ids = sp.steps.flatMap((s) => (s.kind === 'vocab' ? [s.item.id] : []));
        for (const id of ids) expect(id.startsWith(`sp-${sp.special.slug}-`), id).toBe(true);
        expect(new Set(ids).size).toBe(ids.length);
      });

      it('references only existing lessons and books', () => {
        const lessonIds = new Set(lessons.map((l) => l.id));
        for (const id of sp.special.related) expect(lessonIds.has(id), id).toBe(true);
        const bookIds = new Set(BOOKS.map((b) => b.id));
        for (const ref of sp.special.bookRefs) {
          expect(bookIds.has(ref.book), ref.book).toBe(true);
          expect(ref.end).toBeGreaterThanOrEqual(ref.start);
        }
      });

      it('has audio jobs for every spoken text', () => {
        const { tts } = collectAudioJobs([sp]);
        for (const s of sp.steps) {
          if (s.kind === 'vocab') { expect(tts).toContain(s.item.german); expect(tts).toContain(s.item.example.de); }
          if (s.kind === 'exercise' && s.exercise.type === 'listenChoose' && 'ttsText' in s.exercise.audio) {
            expect(tts).toContain(s.exercise.audio.ttsText);
          }
        }
      });
    });
  }
});

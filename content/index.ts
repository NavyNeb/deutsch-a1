import { parseLesson, type Lesson, type VocabItem, type Level } from './types';
import { lektion1 } from './lessons/lektion-1';
import { lektion2 } from './lessons/lektion-2';
import { lektion3 } from './lessons/lektion-3';
import { lektion4 } from './lessons/lektion-4';
import { lektion5 } from './lessons/lektion-5';
import { lektion6 } from './lessons/lektion-6';
import { lektion7 } from './lessons/lektion-7';
import { lektion8 } from './lessons/lektion-8';
import { lektion9 } from './lessons/lektion-9';
import { lektion10 } from './lessons/lektion-10';
import { lektion11 } from './lessons/lektion-11';
import { lektion12 } from './lessons/lektion-12';
import { a2lektion1 } from './lessons/a2-lektion-1';
import { a2lektion2 } from './lessons/a2-lektion-2';
import { a2lektion3 } from './lessons/a2-lektion-3';
import { a2lektion4 } from './lessons/a2-lektion-4';
import { a2lektion5 } from './lessons/a2-lektion-5';
import { a2lektion6 } from './lessons/a2-lektion-6';
import { a2lektion7 } from './lessons/a2-lektion-7';
import { a2lektion8 } from './lessons/a2-lektion-8';
import { a2lektion9 } from './lessons/a2-lektion-9';
import { a2lektion10 } from './lessons/a2-lektion-10';
import { a2lektion11 } from './lessons/a2-lektion-11';
import { a2lektion12 } from './lessons/a2-lektion-12';
import { b1lektion1 } from './lessons/b1-lektion-1';
import { b1lektion2 } from './lessons/b1-lektion-2';
import { b1lektion3 } from './lessons/b1-lektion-3';
import { b1lektion4 } from './lessons/b1-lektion-4';
import { b1lektion5 } from './lessons/b1-lektion-5';
import { b1lektion6 } from './lessons/b1-lektion-6';
import { b1lektion7 } from './lessons/b1-lektion-7';
import { b1lektion8 } from './lessons/b1-lektion-8';
import { b1lektion9 } from './lessons/b1-lektion-9';
import { b1lektion10 } from './lessons/b1-lektion-10';
import { b1lektion11 } from './lessons/b1-lektion-11';
import { b1lektion12 } from './lessons/b1-lektion-12';
import { lektion13 } from './lessons/lektion-13';
import { lektion14 } from './lessons/lektion-14';
import { lektion15 } from './lessons/lektion-15';
import { lektion16 } from './lessons/lektion-16';
import { lektion17 } from './lessons/lektion-17';
import { lektion18 } from './lessons/lektion-18';
import { lektion19 } from './lessons/lektion-19';
import { a2lektion13 } from './lessons/a2-lektion-13';
import { a2lektion14 } from './lessons/a2-lektion-14';
import { a2lektion15 } from './lessons/a2-lektion-15';
import { a2lektion16 } from './lessons/a2-lektion-16';
import { a2lektion17 } from './lessons/a2-lektion-17';
import { a2lektion18 } from './lessons/a2-lektion-18';
import { a2lektion19 } from './lessons/a2-lektion-19';
import { a2lektion20 } from './lessons/a2-lektion-20';
import { a2lektion21 } from './lessons/a2-lektion-21';
import { a2lektion22 } from './lessons/a2-lektion-22';
import { a2lektion23 } from './lessons/a2-lektion-23';
import { a2lektion24 } from './lessons/a2-lektion-24';
import { b1lektion13 } from './lessons/b1-lektion-13';
import { b1lektion14 } from './lessons/b1-lektion-14';
import { b1lektion15 } from './lessons/b1-lektion-15';
import { b1lektion16 } from './lessons/b1-lektion-16';
import { b1lektion17 } from './lessons/b1-lektion-17';
import { b1lektion18 } from './lessons/b1-lektion-18';
import { b1lektion19 } from './lessons/b1-lektion-19';
import { b1lektion20 } from './lessons/b1-lektion-20';
import { b1lektion21 } from './lessons/b1-lektion-21';
import { b1lektion22 } from './lessons/b1-lektion-22';
import { b1lektion23 } from './lessons/b1-lektion-23';
import { b1lektion24 } from './lessons/b1-lektion-24';
import { b1lektion25 } from './lessons/b1-lektion-25';
import { b1lektion26 } from './lessons/b1-lektion-26';

// parseLesson validates at module load — a malformed lesson throws immediately.
export const lessons: Lesson[] = [
  lektion1, lektion2, lektion3, lektion4, lektion5, lektion6,
  lektion7, lektion8, lektion9, lektion10, lektion11, lektion12,
  a2lektion1, a2lektion2, a2lektion3, a2lektion4, a2lektion5, a2lektion6,
  a2lektion7, a2lektion8, a2lektion9, a2lektion10, a2lektion11, a2lektion12,
  b1lektion1, b1lektion2, b1lektion3, b1lektion4, b1lektion5, b1lektion6,
  b1lektion7, b1lektion8, b1lektion9, b1lektion10, b1lektion11, b1lektion12,
  lektion13, lektion14, lektion15, lektion16, lektion17, lektion18, lektion19,
  a2lektion13, a2lektion14, a2lektion15, a2lektion16, a2lektion17, a2lektion18,
  a2lektion19, a2lektion20, a2lektion21, a2lektion22, a2lektion23, a2lektion24,
  b1lektion13, b1lektion14, b1lektion15, b1lektion16, b1lektion17, b1lektion18, b1lektion19,
  b1lektion20, b1lektion21, b1lektion22, b1lektion23, b1lektion24, b1lektion25, b1lektion26,
].map(parseLesson);
export function getLesson(id: string): Lesson | undefined { return lessons.find((l) => l.id === id); }

// Flattens every vocab item across all lessons — from `vocab` steps and `pronunciation` step items —
// so features like hard-word lookup can resolve a vocab id without knowing which lesson it lives in.
export function allVocab(): VocabItem[] {
  return lessons.flatMap((l) =>
    l.steps.flatMap((s) => {
      if (s.kind === 'vocab') return [s.item];
      if (s.kind === 'pronunciation') return s.items;
      return [];
    })
  );
}

// Vocabulary grouped by CEFR level (deduped by German word within a level) —
// powers the Textbook word grid.
export function vocabByLevel(): Record<Level, VocabItem[]> {
  const out: Record<Level, VocabItem[]> = { A1: [], A2: [], B1: [], B2: [] };
  for (const l of lessons) {
    const seen = new Set(out[l.level].map((v) => v.german));
    for (const s of l.steps) {
      const items = s.kind === 'vocab' ? [s.item] : s.kind === 'pronunciation' ? s.items : [];
      for (const it of items) {
        if (!seen.has(it.german)) { seen.add(it.german); out[l.level].push(it); }
      }
    }
  }
  return out;
}

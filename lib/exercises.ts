import type { Exercise } from '@/content/types';

const norm = (s: string) => s.trim().toLowerCase();

export function checkAnswer(ex: Exercise, response: unknown): { correct: boolean; explanation?: string } {
  switch (ex.type) {
    case 'multipleChoice':
    case 'listenChoose':
      return { correct: response === ex.answer, explanation: 'explain' in ex ? ex.explain : undefined };
    case 'fillBlank':
      return { correct: norm(String(response)) === norm(ex.answer), explanation: ex.hint };
    case 'articlePicker':
      return { correct: response === ex.answer, explanation: `${ex.answer} ${ex.word}` };
    case 'wordOrder': {
      const r = response as string[];
      return { correct: Array.isArray(r) && r.length === ex.answer.length && r.every((t, i) => t === ex.answer[i]) };
    }
    case 'match': {
      const r = (response ?? {}) as Record<string, string>;
      return { correct: ex.pairs.every((p) => r[p.de] === p.en) };
    }
  }
}

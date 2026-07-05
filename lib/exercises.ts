import type { Exercise } from '@/content/types';
import type { Locale } from './locale-store';
import { pick } from './i18n';

const norm = (s: string) => s.trim().toLowerCase();

export function checkAnswer(ex: Exercise, response: unknown, locale: Locale = 'en'): { correct: boolean; explanation?: string } {
  switch (ex.type) {
    case 'multipleChoice':
      return { correct: response === ex.answer, explanation: ex.explain ? pick(ex.explain, ex.explainFr, locale) : undefined };
    case 'listenChoose':
      return { correct: response === ex.answer, explanation: undefined };
    case 'fillBlank':
      return { correct: norm(String(response)) === norm(ex.answer), explanation: ex.hint ? pick(ex.hint, ex.hintFr, locale) : undefined };
    case 'articlePicker':
      return { correct: response === ex.answer, explanation: `${ex.answer} ${ex.word}` };
    case 'wordOrder': {
      const r = response as string[];
      return { correct: Array.isArray(r) && r.length === ex.answer.length && r.every((t, i) => t === ex.answer[i]) };
    }
    case 'match': {
      const r = (response ?? {}) as Record<string, string>;
      return { correct: ex.pairs.every((p) => r[p.de] === pick(p.en, p.fr, locale)) };
    }
  }
}

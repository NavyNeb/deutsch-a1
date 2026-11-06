import type { Gender } from '@/content/types';

export type ArticleGender = 'der' | 'die' | 'das';
export type GenderShapeKind = 'square' | 'circle' | 'triangle';

export interface GenderMeta {
  gender: ArticleGender;
  shape: GenderShapeKind;
  /** CSS colour for shapes and fills. */
  fill: string;
  /** CSS colour for text on the page background (contrast-safe in both themes). */
  text: string;
}

const META: Record<ArticleGender, GenderMeta> = {
  der: { gender: 'der', shape: 'square', fill: 'var(--der)', text: 'var(--der-t)' },
  die: { gender: 'die', shape: 'circle', fill: 'var(--die)', text: 'var(--die-t)' },
  das: { gender: 'das', shape: 'triangle', fill: 'var(--das)', text: 'var(--das-t)' },
};

export function genderMeta(g: Gender): GenderMeta | null {
  return g ? META[g] : null;
}

/** Splits "die Uhr" into article + noun. Only strips an article that matches the declared gender. */
export function splitArticle(german: string, gender: Gender): { article: ArticleGender | null; noun: string } {
  if (!gender) return { article: null, noun: german };
  const prefix = `${gender} `;
  return german.startsWith(prefix) ? { article: gender, noun: german.slice(prefix.length) } : { article: null, noun: german };
}

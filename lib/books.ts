import type { Level } from '@/content/types';

export interface Book {
  id: string;
  title: string;
  subtitle: { en: string; fr: string };
  publisher: string;
  level: Level | 'A1–B2';
  kind: 'course' | 'grammar' | 'reader';
  file: string;
}

// Files live in /private/books (never in /public) and are only streamed by /api/books/[id].
export const BOOKS: Book[] = [
  { id: 'menschen-a1-1', title: 'Menschen A1.1', subtitle: { en: 'Coursebook · Lektionen 1–12', fr: 'Livre de l’élève · Leçons 1–12' }, publisher: 'Hueber', level: 'A1', kind: 'course', file: 'menschen-a1-1.pdf' },
  { id: 'menschen-a1-2', title: 'Menschen A1.2', subtitle: { en: 'Coursebook · Lektionen 13–24', fr: 'Livre de l’élève · Leçons 13–24' }, publisher: 'Hueber', level: 'A1', kind: 'course', file: 'menschen-a1-2.pdf' },
  { id: 'menschen-a2-1', title: 'Menschen A2.1', subtitle: { en: 'Coursebook · Lektionen 1–12', fr: 'Livre de l’élève · Leçons 1–12' }, publisher: 'Hueber', level: 'A2', kind: 'course', file: 'menschen-a2-1.pdf' },
  { id: 'menschen-a2-2', title: 'Menschen A2.2', subtitle: { en: 'Coursebook · Lektionen 13–24', fr: 'Livre de l’élève · Leçons 13–24' }, publisher: 'Hueber', level: 'A2', kind: 'course', file: 'menschen-a2-2.pdf' },
  { id: 'menschen-b1-1', title: 'Menschen B1.1', subtitle: { en: 'Coursebook · Lektionen 1–12', fr: 'Livre de l’élève · Leçons 1–12' }, publisher: 'Hueber', level: 'B1', kind: 'course', file: 'menschen-b1-1.pdf' },
  { id: 'menschen-b1-2', title: 'Menschen B1.2', subtitle: { en: 'Coursebook · Lektionen 13–24', fr: 'Livre de l’élève · Leçons 13–24' }, publisher: 'Hueber', level: 'B1', kind: 'course', file: 'menschen-b1-2.pdf' },
  { id: 'daf-grammatiktrainer', title: 'DaF Grammatiktrainer', subtitle: { en: '300 grammar exercises', fr: '300 exercices de grammaire' }, publisher: '', level: 'A1–B2', kind: 'grammar', file: 'daf-grammatiktrainer.pdf' },
  { id: 'pons-grammatik', title: 'PONS Grammatik in Bildern', subtitle: { en: 'Illustrated grammar', fr: 'Grammaire illustrée' }, publisher: 'PONS', level: 'A1–B2', kind: 'grammar', file: 'pons-grammatik.pdf' },
  { id: 'easy-german', title: 'Easy German Step by Step', subtitle: { en: 'Self-study book', fr: 'Livre d’auto-apprentissage' }, publisher: 'Easy German', level: 'A1–B2', kind: 'reader', file: 'easy-german.pdf' },
];

export function getBook(id: string): Book | undefined {
  return BOOKS.find((b) => b.id === id);
}

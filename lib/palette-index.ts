import type { Lesson } from '@/content/types';
import { fold } from './dict-shared.mjs';
import type { Locale } from './locale-store';
import { pick } from './i18n';
import { NAV_ITEMS } from './nav';
import { t, type UIKey } from './ui-strings';

export type PaletteItem = {
  id: string;
  group: 'lesson' | 'practice' | 'page';
  title: string;
  subtitle?: string;
  href: string;
};

const TOOLS: { id: string; title: string; key: UIKey; href: string }[] = [
  { id: 'sprint', title: 'Word Sprint', key: 'navSprint', href: '/games/sprint' },
  { id: 'audio', title: 'Audio-Call', key: 'navAudioCall', href: '/games/audio' },
  { id: 'review', title: 'Wiederholen', key: 'navReview', href: '/practice/review' },
  { id: 'speak', title: 'Sprechen', key: 'navSpeak', href: '/speak' },
  { id: 'write', title: 'Schreiben', key: 'navWrite', href: '/write' },
];

export function buildPaletteIndex(lessons: Lesson[], locale: Locale): PaletteItem[] {
  const pages: PaletteItem[] = NAV_ITEMS.map((n) => ({
    id: `page:${n.id}`, group: 'page', title: n.de, subtitle: t(n.labelKey, locale), href: n.href,
  }));
  const tools: PaletteItem[] = TOOLS.map((x) => ({
    id: `practice:${x.id}`, group: 'practice', title: x.title, subtitle: t(x.key, locale), href: x.href,
  }));
  const lessonItems: PaletteItem[] = lessons.map((l) => ({
    id: `lesson:${l.id}`,
    group: 'lesson',
    title: l.title.de,
    subtitle: `${l.level} · Lektion ${l.number} · ${pick(l.title.en, l.title.fr, locale)}`,
    href: `/lesson/${l.id}/learn`,
  }));
  return [...lessonItems, ...pages, ...tools];
}

function score(item: PaletteItem, q: string): number {
  const title = fold(item.title);
  if (title.startsWith(q)) return 0;
  if (title.split(/[\s-]+/).some((w) => w.startsWith(q))) return 1;
  if (title.includes(q)) return 2;
  if (item.subtitle && fold(item.subtitle).includes(q)) return 3;
  return -1;
}

/** Diacritic-insensitive ranking: title prefix > word prefix > title substring > subtitle substring. */
export function searchPalette(query: string, index: PaletteItem[], limit = 6): PaletteItem[] {
  const q = fold(query);
  if (!q) return [];
  return index
    .map((item, i) => ({ item, i, s: score(item, q) }))
    .filter((x) => x.s >= 0)
    .sort((a, b) => a.s - b.s || a.i - b.i)
    .slice(0, limit)
    .map((x) => x.item);
}

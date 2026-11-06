import { readFileSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { PAGE_GROUPS, type PageGroupId } from './kumpel-pages';
import { PAGE_HELP, pickL, type L } from './kumpel-copy';

// The component files that render each page. Help parts must name labels that really appear there,
// so the help cannot silently drift away from the UI it describes.
const SOURCES: Record<PageGroupId, string[]> = {
  today: ['components/home/TodayView.tsx', 'components/home/NextUpCard.tsx', 'components/home/DueCard.tsx', 'components/home/WordOfDayCard.tsx', 'components/home/GoalCard.tsx'],
  path: ['components/path/PathView.tsx', 'components/path/LessonDetail.tsx', 'components/path/ChapterList.tsx'],
  practice: ['components/games/GamesHub.tsx', 'lib/ui-strings.ts'],
  library: ['components/library/LibraryView.tsx'],
  me: ['components/me/MeView.tsx'],
};

const read = (rel: string) => readFileSync(path.resolve(__dirname, '..', rel), 'utf8');
const allLs = (g: PageGroupId): L[] => {
  const h = PAGE_HELP[g];
  return [h.purpose, ...h.parts.map((p) => p.text), ...h.questions.flatMap((q) => [q.q, q.a])];
};

describe('PAGE_HELP', () => {
  it.each(PAGE_GROUPS)('%s has the right amount of content', (g) => {
    const h = PAGE_HELP[g];
    expect(h.de.trim()).not.toBe('');
    expect(h.parts.length).toBeGreaterThanOrEqual(1);
    expect(h.parts.length).toBeLessThanOrEqual(3);
    expect(h.questions.length).toBeGreaterThanOrEqual(4);
    expect(h.questions.length).toBeLessThanOrEqual(6);
  });

  it.each(PAGE_GROUPS)('%s has non-empty EN and FR everywhere', (g) => {
    for (const l of allLs(g)) {
      expect(l.en.trim()).not.toBe('');
      expect(l.fr.trim()).not.toBe('');
    }
  });

  it.each(PAGE_GROUPS)('%s keeps a calm tone: no exclamation marks', (g) => {
    for (const l of allLs(g)) {
      expect(l.en).not.toContain('!');
      expect(l.fr).not.toContain('!');
    }
  });

  it.each(PAGE_GROUPS)('%s question chips fit (28 characters or fewer)', (g) => {
    for (const { q } of PAGE_HELP[g].questions) {
      expect(q.en.length, q.en).toBeLessThanOrEqual(28);
      expect(q.fr.length, q.fr).toBeLessThanOrEqual(28);
    }
  });

  it.each(PAGE_GROUPS)('%s part labels exist on the page (drift guard)', (g) => {
    const source = SOURCES[g].map(read).join('\n');
    for (const part of PAGE_HELP[g].parts) {
      expect(source, `"${part.de}" not found in ${g} sources`).toContain(part.de);
    }
  });

  it('pickL chooses by locale', () => {
    expect(pickL({ en: 'a', fr: 'b' }, 'en')).toBe('a');
    expect(pickL({ en: 'a', fr: 'b' }, 'fr')).toBe('b');
  });
});

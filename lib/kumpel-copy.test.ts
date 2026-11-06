import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { PAGE_GROUPS, type PageGroupId } from './kumpel-pages';
import { PAGE_HELP, pickL, type L } from './kumpel-copy';

// The component files that render each page. A step may name a `find` string (a label, usually German);
// it must still appear in the page's source, so the guide cannot silently drift away from the UI it describes.
const S = 'lib/ui-strings.ts';
const SOURCES: Record<PageGroupId, string[]> = {
  today: ['components/home/TodayView.tsx', 'components/home/NextUpCard.tsx', 'components/home/DueCard.tsx', 'components/home/WordOfDayCard.tsx', 'components/home/GoalCard.tsx'],
  path: ['components/path/PathView.tsx', 'components/path/LessonDetail.tsx', 'components/path/ChapterList.tsx'],
  practice: ['components/games/GamesHub.tsx', S],
  games: ['components/games/QuizGame.tsx', S],
  review: ['components/review/ReviewSession.tsx', S],
  speak: ['components/speak/SpeakStudio.tsx', S],
  write: ['components/write/WriteEditor.tsx', S],
  specials: ['components/specials/SpecialsHub.tsx', S],
  special: ['components/specials/SpecialOverview.tsx', 'components/specials/SpecialReview.tsx', S],
  library: ['components/library/LibraryView.tsx'],
  dictionary: ['components/dictionary/DictionaryView.tsx', S],
  word: ['components/dictionary/WordDetail.tsx', S],
  textbook: ['components/textbook/TextbookView.tsx', S],
  exams: ['components/exams/ExamsHub.tsx', S],
  examLevel: ['components/exams/LevelView.tsx', 'components/exams/PartDrillView.tsx', S],
  examTask: ['components/exams/LesenRunner.tsx', 'components/exams/SchreibenRunner.tsx', 'components/exams/SprechenRunner.tsx', S],
  me: ['components/me/MeView.tsx'],
  statistics: ['components/stats/StatisticsView.tsx', S],
  account: ['components/auth/AccountView.tsx', S],
  settings: ['components/settings/SettingsView.tsx', 'components/kumpel/KumpelSettings.tsx'],
  chapter: ['components/review/ChapterView.tsx'],
};

const ROOT = path.resolve(__dirname, '..');
const read = (rel: string) => readFileSync(path.resolve(ROOT, rel), 'utf8');
const allLs = (g: PageGroupId): L[] => {
  const h = PAGE_HELP[g];
  return [h.purpose, ...h.steps.flatMap((s) => [s.title, s.text]), ...h.questions.flatMap((q) => [q.q, q.a])];
};

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.tsx$/.test(name) && !/\.test\.tsx$/.test(name)) out.push(full);
  }
  return out;
}

describe('PAGE_HELP', () => {
  it('has a guide for every page group', () => {
    expect(Object.keys(PAGE_HELP).sort()).toEqual([...PAGE_GROUPS].sort());
  });

  it.each(PAGE_GROUPS)('%s has the right amount of content', (g) => {
    const h = PAGE_HELP[g];
    expect(h.de.trim()).not.toBe('');
    expect(h.steps.length).toBeGreaterThanOrEqual(1);
    expect(h.steps.length).toBeLessThanOrEqual(4);
    expect(h.questions.length).toBeGreaterThanOrEqual(3);
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

  it.each(PAGE_GROUPS)('%s step titles are short enough for a tour card', (g) => {
    for (const s of PAGE_HELP[g].steps) {
      expect(s.title.en.length, s.title.en).toBeLessThanOrEqual(30);
      expect(s.title.fr.length, s.title.fr).toBeLessThanOrEqual(34);
    }
  });

  it.each(PAGE_GROUPS)('%s step labels exist on the page (drift guard)', (g) => {
    const source = SOURCES[g].map(read).join('\n');
    for (const step of PAGE_HELP[g].steps) {
      if (step.find) expect(source, `"${step.find}" not found in ${g} sources`).toContain(step.find);
    }
  });

  it('every step anchor is rendered by some component (drift guard)', () => {
    const source = walk(path.join(ROOT, 'components')).map((f) => readFileSync(f, 'utf8')).join('\n');
    for (const g of PAGE_GROUPS) {
      for (const step of PAGE_HELP[g].steps) {
        if (step.target) expect(source, `${g}: data-kumpel="${step.target}" is missing`).toMatch(new RegExp(`data-kumpel=(?:"|\\{[^}]*['"])${step.target}["']`));
      }
    }
  });

  it('pickL chooses by locale', () => {
    expect(pickL({ en: 'a', fr: 'b' }, 'en')).toBe('a');
    expect(pickL({ en: 'a', fr: 'b' }, 'fr')).toBe('b');
  });
});

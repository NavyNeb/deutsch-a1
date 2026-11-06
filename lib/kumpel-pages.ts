export type PageGroupId =
  | 'today' | 'path' | 'practice' | 'games' | 'review' | 'speak' | 'write'
  | 'specials' | 'special'
  | 'library' | 'dictionary' | 'word' | 'textbook'
  | 'exams' | 'examLevel' | 'examTask'
  | 'me' | 'statistics' | 'account' | 'settings'
  | 'chapter';

export const PAGE_GROUPS: PageGroupId[] = [
  'today', 'path', 'practice', 'games', 'review', 'speak', 'write',
  'specials', 'special',
  'library', 'dictionary', 'word', 'textbook',
  'exams', 'examLevel', 'examTask',
  'me', 'statistics', 'account', 'settings',
  'chapter',
];

const EXACT: Record<string, PageGroupId> = {
  '/': 'today',
  '/path': 'path',
  '/practice': 'practice',
  '/practice/review': 'review',
  '/games/sprint': 'games',
  '/games/audio': 'games',
  '/speak': 'speak',
  '/write': 'write',
  '/specials': 'specials',
  '/library': 'library',
  '/dictionary': 'dictionary',
  '/textbook': 'textbook',
  '/exams': 'exams',
  '/me': 'me',
  '/statistics': 'statistics',
  '/account': 'account',
  '/settings': 'settings',
};

const PATTERNS: [RegExp, PageGroupId][] = [
  [/^\/specials\/[^/]+$/, 'special'],
  [/^\/specials\/[^/]+\/review$/, 'special'],
  [/^\/dictionary\/[^/]+$/, 'word'],
  [/^\/exams\/[^/]+\/[^/]+$/, 'examLevel'], // a level's page
  [/^\/exams\/[^/]+\/[^/]+\/part\/[^/]+\/[^/]+$/, 'examLevel'], // drilling one part
  [/^\/exams\/[^/]+\/[^/]+\/[^/]+\/[^/]+$/, 'examTask'], // a full set, one skill
  [/^\/exams\/[^/]+\/[^/]+\/part\/[^/]+\/[^/]+\/[^/]+$/, 'examTask'], // one part, one set
  [/^\/lesson\/[^/]+\/review$/, 'chapter'],
];

/**
 * Which pages get Kumpel, and which guide they use. An allow-list on purpose: a page nobody has thought about
 * gets no buddy until it is added here. The lesson and special players (they have their own "?"), the book reader,
 * /welcome and /offline are left out.
 */
export function pageGroupFor(pathname: string): PageGroupId | null {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (EXACT[p]) return EXACT[p];
  for (const [re, group] of PATTERNS) if (re.test(p)) return group;
  return null;
}

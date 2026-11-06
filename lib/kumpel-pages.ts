export type PageGroupId = 'today' | 'path' | 'practice' | 'library' | 'me';

export const PAGE_GROUPS: PageGroupId[] = ['today', 'path', 'practice', 'library', 'me'];

const EXACT: Record<string, PageGroupId> = {
  '/': 'today',
  '/path': 'path',
  '/practice': 'practice',
  '/specials': 'practice',
  '/library': 'library',
  '/dictionary': 'library',
  '/textbook': 'library',
  '/exams': 'library',
  '/me': 'me',
  '/statistics': 'me',
  '/account': 'me',
  '/settings': 'me',
};

/**
 * Which pages get Kumpel. This is an allow-list on purpose: a page nobody has thought about
 * (lessons, exam tasks, drills, the textbook reader, /welcome) gets no buddy until it is added here.
 */
export function pageGroupFor(pathname: string): PageGroupId | null {
  const p = pathname.replace(/\/+$/, '') || '/';
  if (EXACT[p]) return EXACT[p];
  if (/^\/dictionary\/[^/]+$/.test(p)) return 'library';
  if (/^\/exams\/[^/]+\/[^/]+$/.test(p)) return 'library';
  return null;
}

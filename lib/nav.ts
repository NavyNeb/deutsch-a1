import { Home, Library, Route, Target, User, type LucideIcon } from 'lucide-react';
import type { UIKey } from './ui-strings';

export type NavId = 'today' | 'path' | 'practice' | 'library' | 'me';

export type NavItem = {
  id: NavId;
  href: string;
  /** Fixed German label; the UI-language gloss comes from `labelKey`. */
  de: string;
  labelKey: UIKey;
  icon: LucideIcon;
  /** Path prefixes (or the exact path for '/') that make this tab active. */
  match: string[];
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'today', href: '/', de: 'Heute', labelKey: 'navToday', icon: Home, match: ['/'] },
  { id: 'path', href: '/path', de: 'Weg', labelKey: 'navPath', icon: Route, match: ['/path'] },
  { id: 'practice', href: '/practice', de: 'Üben', labelKey: 'navPractice', icon: Target, match: ['/practice', '/games', '/speak', '/write', '/specials'] },
  { id: 'library', href: '/library', de: 'Bibliothek', labelKey: 'navLibrary', icon: Library, match: ['/library', '/dictionary', '/textbook', '/exams'] },
  { id: 'me', href: '/me', de: 'Du', labelKey: 'navMe', icon: User, match: ['/me', '/statistics', '/account', '/settings'] },
];

/** The focused lesson players hide all global chrome. */
export function isImmersive(pathname: string): boolean {
  return /^\/lesson\/[^/]+\/learn$/.test(pathname) || /^\/specials\/[^/]+\/learn$/.test(pathname);
}

export function activeNavId(pathname: string): NavId | null {
  if (isImmersive(pathname)) return null;
  if (pathname === '/') return 'today';
  for (const item of NAV_ITEMS) {
    if (item.id === 'today') continue;
    if (item.match.some((m) => pathname === m || pathname.startsWith(m + '/'))) return item.id;
  }
  return null;
}

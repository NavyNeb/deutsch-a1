'use client';
import { useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { isVisible, useKumpel } from './kumpel-store';
import { pageGroupFor, type PageGroupId } from './kumpel-pages';
import { useProgress } from './progress-store';
import { useUser } from './useUser';
import { isFreshVisitor } from './visitor';

const subscribeNever = () => () => {};

/**
 * Whether Kumpel is actually there on this page right now: on the allow-list, switched on, and not sitting on
 * the welcome page a brand-new visitor gets at `/`. False on the server and during hydration, so nothing
 * that depends on it (the buddy, the palette command, the page padding) can mismatch or flash.
 */
export function useKumpelAvailable(): { group: PageGroupId | null; on: boolean } {
  const pathname = usePathname();
  const { state } = useKumpel();
  const { state: progress } = useProgress();
  const user = useUser();
  const mounted = useSyncExternalStore(subscribeNever, () => true, () => false);
  const group = pageGroupFor(pathname);
  const welcomePage = group === 'today' && isFreshVisitor(progress, user !== null);
  return { group, on: mounted && group !== null && isVisible(state) && !welcomePage };
}

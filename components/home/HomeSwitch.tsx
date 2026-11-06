'use client';
import { useEffect, useState } from 'react';
import { useProgress } from '@/lib/progress-store';
import { useUser } from '@/lib/useUser';
import { isFreshVisitor } from '@/lib/visitor';
import { TodayView } from './TodayView';
import { Welcome } from './Welcome';

/** Brand-new visitors (no progress, no account) see the welcome page; everyone else lands on Heute. */
export function HomeSwitch() {
  const { state } = useProgress();
  const user = useUser();
  // Progress hydrates from localStorage after mount; wait so a returning learner never flashes the welcome page.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="min-h-[60vh]" aria-hidden="true" />;
  return isFreshVisitor(state, user !== null) ? <Welcome /> : <TodayView />;
}

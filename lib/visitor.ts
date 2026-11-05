import type { ProgressState } from './progress';

/** True for someone who has never studied here and has no account: they get the welcome page, not Heute. */
export function isFreshVisitor(state: ProgressState, signedIn: boolean): boolean {
  if (signedIn || state.xp > 0) return false;
  return Object.values(state.lessons).every((l) => l.steps.length === 0);
}

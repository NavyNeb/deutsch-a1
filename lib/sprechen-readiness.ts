import type { SprechenStats } from './sprechen-stats';

// A short, honest checklist of what a learner has done towards the oral exam (not a prediction of the result).

export type Readiness = { mock: boolean; score: boolean; minutes: boolean; days: boolean };

export const READY_MINUTES = 60;
export const READY_DAYS = 5;
export const READY_SCORE = 60;

/** `examScores` are the learner's mock-exam ratings in percent (best per exam). */
export function readiness(stats: SprechenStats, examScores: number[]): Readiness {
  const totalSeconds = Object.values(stats.days).reduce((n, d) => n + d.seconds, 0);
  return {
    mock: examScores.length > 0,
    score: examScores.some((s) => s >= READY_SCORE),
    minutes: totalSeconds >= READY_MINUTES * 60,
    days: Object.values(stats.days).filter((d) => d.seconds > 0).length >= READY_DAYS,
  };
}

export const totalMinutes = (stats: SprechenStats): number =>
  Math.floor(Object.values(stats.days).reduce((n, d) => n + d.seconds, 0) / 60);

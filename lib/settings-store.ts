'use client';
import { useSyncExternalStore } from 'react';

export type Settings = {
  dailyGoal: number; // target XP per day
  onboarded: boolean; // has the learner completed first-run setup
};

export const DAILY_GOAL_OPTIONS = [20, 30, 50, 100] as const;

const DEFAULTS: Settings = { dailyGoal: 30, onboarded: false };
const KEY = 'deutsch-a1-settings';

function load(): Settings {
  if (typeof window === 'undefined') return DEFAULTS;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) } : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
}

let state: Settings = DEFAULTS;
let hydrated = false;
const listeners = new Set<() => void>();
function set(next: Settings) {
  state = next;
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* quota */ }
  listeners.forEach((l) => l());
}
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function getSnapshot() {
  if (!hydrated && typeof window !== 'undefined') { state = load(); hydrated = true; }
  return state;
}
function getServerSnapshot() { return DEFAULTS; }

// Low-level accessors for the sync layer (outside React).
export function getSettingsState(): Settings {
  if (!hydrated && typeof window !== 'undefined') { state = load(); hydrated = true; }
  return state;
}
export function replaceSettings(next: Partial<Settings>) { set({ ...state, ...next }); }
export function subscribeSettings(l: () => void) { return subscribe(l); }

export function useSettings() {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    settings: s,
    setDailyGoal: (dailyGoal: number) => set({ ...state, dailyGoal }),
    completeOnboarding: (dailyGoal: number) => set({ ...state, dailyGoal, onboarded: true }),
  };
}

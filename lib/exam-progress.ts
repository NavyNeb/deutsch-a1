'use client';
import { useSyncExternalStore } from 'react';
import type { Skill } from '@/content/exams/types';

const KEY = 'deutsch-a1-exam-progress';

export type ExamResult = { best: number; last: number; at: number };
type Store = Record<string, ExamResult>; // keyed by `${setId}:${skill}`

const EMPTY: Store = {};
let state: Store = EMPTY;
let hydrated = false;
const listeners = new Set<() => void>();

function load(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Store) : EMPTY;
  } catch {
    return EMPTY;
  }
}

function getSnapshot() {
  if (!hydrated && typeof window !== 'undefined') { state = load(); hydrated = true; }
  return state;
}

export const resultKey = (setId: string, skill: Skill) => `${setId}:${skill}`;

// Stores the best and the latest percentage (0-100) for one set and skill.
export function recordExamResult(setId: string, skill: Skill, percent: number) {
  const cur = getSnapshot();
  const key = resultKey(setId, skill);
  const prev = cur[key];
  state = { ...cur, [key]: { best: Math.max(prev?.best ?? 0, percent), last: percent, at: Date.now() } };
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* quota */ }
  listeners.forEach((l) => l());
}

export function useExamProgress() {
  return useSyncExternalStore(
    (l) => { listeners.add(l); return () => listeners.delete(l); },
    getSnapshot,
    () => EMPTY,
  );
}

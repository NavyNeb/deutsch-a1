'use client';
import { useSyncExternalStore } from 'react';

export type Locale = 'en' | 'fr';

const KEY = 'deutsch-a1-locale';

// Cached as a singleton so getServerSnapshot always returns the same
// reference/value across renders — returning a fresh literal each call is
// harmless for a primitive, but caching keeps this consistent with the
// progress-store pattern and avoids any accidental getServerSnapshot loop.
const SERVER_SNAPSHOT: Locale = 'en';

let state: Locale = SERVER_SNAPSHOT;
let hydrated = false;
const listeners = new Set<() => void>();

function detectDefault(): Locale {
  if (typeof navigator !== 'undefined' && navigator.language?.toLowerCase().startsWith('fr')) return 'fr';
  return 'en';
}

function load(): Locale {
  if (typeof window === 'undefined') return SERVER_SNAPSHOT;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === 'en' || raw === 'fr') return raw;
  } catch { /* ignore */ }
  return detectDefault();
}

function save(l: Locale): void {
  if (typeof window === 'undefined') return;
  try { window.localStorage.setItem(KEY, l); } catch { /* quota — ignore */ }
}

function set(next: Locale) {
  state = next;
  save(state);
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

function getSnapshot(): Locale {
  if (!hydrated && typeof window !== 'undefined') {
    state = load();
    hydrated = true;
  }
  return state;
}

function getServerSnapshot(): Locale {
  return SERVER_SNAPSHOT;
}

export function useLocale() {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    locale,
    setLocale: (l: Locale) => set(l),
  };
}

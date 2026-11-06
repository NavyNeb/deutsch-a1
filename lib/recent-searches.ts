'use client';
import { useSyncExternalStore } from 'react';

export type RecentItem = { title: string; subtitle?: string; href: string };

const KEY = 'deutsch-a1-recent-searches';
const MAX = 8;
const EMPTY: RecentItem[] = [];

// Parsed value is cached per raw string so useSyncExternalStore sees a stable reference between changes.
let cacheRaw: string | null | undefined;
let cacheVal: RecentItem[] = EMPTY;
// Fallback when storage is blocked (private mode, quota): recents still work for the session.
let memory: RecentItem[] = EMPTY;
let storageFailed = false;
const listeners = new Set<() => void>();

const valid = (x: unknown): x is RecentItem =>
  !!x && typeof x === 'object' && typeof (x as RecentItem).title === 'string' && typeof (x as RecentItem).href === 'string';

export function getRecents(): RecentItem[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw === null) return storageFailed ? memory : EMPTY;
    if (raw === cacheRaw) return cacheVal;
    const parsed: unknown = JSON.parse(raw);
    cacheRaw = raw;
    cacheVal = Array.isArray(parsed) ? parsed.filter(valid).slice(0, MAX) : EMPTY;
    return cacheVal;
  } catch {
    return storageFailed ? memory : EMPTY;
  }
}

function write(next: RecentItem[]) {
  memory = next;
  cacheRaw = undefined;
  try { localStorage.setItem(KEY, JSON.stringify(next)); storageFailed = false; } catch { storageFailed = true; }
  listeners.forEach((l) => l());
}

/** Newest first; the same destination is moved to the front rather than repeated. */
export function addRecent(item: RecentItem): void {
  write([item, ...getRecents().filter((r) => r.href !== item.href)].slice(0, MAX));
}

export function clearRecents(): void {
  write(EMPTY);
}

function subscribe(l: () => void) { listeners.add(l); return () => { listeners.delete(l); }; }

export function useRecents(): [RecentItem[], () => void] {
  const recents = useSyncExternalStore(subscribe, getRecents, () => EMPTY);
  return [recents, clearRecents];
}

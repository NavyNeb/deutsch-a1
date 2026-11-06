'use client';
import { useSyncExternalStore } from 'react';

const KEY = 'deutsch-a1-show-translation';

// In-memory fallback so the toggle keeps working when storage is unavailable (private mode, quota).
let memory = true;
let storageFailed = false;
const listeners = new Set<() => void>();

function read(): boolean {
  try {
    const v = localStorage.getItem(KEY);
    if (v !== null) return v !== 'false';
    return storageFailed ? memory : true;
  } catch {
    return memory;
  }
}

function write(v: boolean) {
  memory = v;
  try { localStorage.setItem(KEY, String(v)); } catch { storageFailed = true; }
  listeners.forEach((l) => l());
}

function subscribe(l: () => void) { listeners.add(l); return () => { listeners.delete(l); }; }

/** Whether lesson steps show the learner's-language translation. Defaults to on; persisted. */
export function useShowTranslation(): [boolean, (v: boolean) => void] {
  const show = useSyncExternalStore(subscribe, read, () => true);
  return [show, write];
}

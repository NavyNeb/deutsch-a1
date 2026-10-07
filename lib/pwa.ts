'use client';
import { useSyncExternalStore } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export type InstallState = 'prompt' | 'ios' | 'none';

let deferred: BeforeInstallPromptEvent | null = null;
let installed = false;
let captureStarted = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

export function isStandalone(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(display-mode: standalone)').matches || (navigator as Navigator & { standalone?: boolean }).standalone === true;
}

export function isIOS(): boolean {
  if (typeof navigator === 'undefined') return false;
  // iPadOS reports as a Mac but has a touch screen.
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

/** Starts listening for the browser's install offer. Safe to call repeatedly. */
export function startInstallCapture() {
  if (typeof window === 'undefined' || captureStarted) return;
  captureStarted = true;
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferred = e as BeforeInstallPromptEvent;
    emit();
  });
  window.addEventListener('appinstalled', () => {
    installed = true;
    deferred = null;
    emit();
  });
}

export async function promptInstall(): Promise<'accepted' | 'dismissed' | 'unavailable'> {
  if (!deferred) return 'unavailable';
  const evt = deferred;
  deferred = null; // a prompt event can only be used once
  emit();
  await evt.prompt();
  const { outcome } = await evt.userChoice;
  return outcome;
}

function snapshot(): InstallState {
  if (installed || isStandalone()) return 'none';
  if (deferred) return 'prompt';
  if (isIOS()) return 'ios';
  return 'none';
}

function subscribe(cb: () => void) {
  startInstallCapture();
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

export function useInstallState(): InstallState {
  return useSyncExternalStore(subscribe, snapshot, () => 'none');
}

function subscribeOnline(cb: () => void) {
  window.addEventListener('online', cb);
  window.addEventListener('offline', cb);
  return () => {
    window.removeEventListener('online', cb);
    window.removeEventListener('offline', cb);
  };
}

export function useOnline(): boolean {
  return useSyncExternalStore(subscribeOnline, () => navigator.onLine, () => true);
}

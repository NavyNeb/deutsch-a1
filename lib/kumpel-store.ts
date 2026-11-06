'use client';
import { useCallback, useMemo } from 'react';
import { getSettingsState, replaceSettings, useSettings } from './settings-store';

/**
 * Kumpel's preferences and "what has it already told me" state. It is stored inside the
 * existing `Settings` object (`settings.kumpel`), so it persists locally and rides the
 * account sync for free. Nothing outside `resolveKumpel` should read the raw value.
 */
export type KumpelState = {
  enabled: boolean;
  side: 'left' | 'right';
  hints: boolean;
  motion: 'auto' | 'calm';
  muted: boolean; // "Ruhe, bitte"
  welcomed: boolean; // the one-time hello has been dealt with
  snoozeUntil: string | null; // local day (YYYY-MM-DD) before which the hello stays quiet
  tourDone: boolean;
  seen: string[]; // page groups whose hint has already been shown
  /** When the learner last changed something on purpose (ISO). Last write wins when devices sync; markSeen never stamps it. */
  updatedAt: string | null;
};

export const KUMPEL_DEFAULTS: KumpelState = {
  enabled: true,
  side: 'right',
  hints: true,
  motion: 'auto',
  muted: false,
  welcomed: false,
  snoozeUntil: null,
  tourDone: false,
  seen: [],
  updatedAt: null,
};

const DAY = /^\d{4}-\d{2}-\d{2}$/;

/** Validates untrusted input (storage, cloud sync) field by field over the defaults. Never throws. */
export function resolveKumpel(raw: unknown): KumpelState {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return KUMPEL_DEFAULTS;
  const r = raw as Record<string, unknown>;
  const bool = (k: 'enabled' | 'hints' | 'muted' | 'welcomed' | 'tourDone') =>
    typeof r[k] === 'boolean' ? (r[k] as boolean) : KUMPEL_DEFAULTS[k];
  return {
    enabled: bool('enabled'),
    side: r.side === 'left' || r.side === 'right' ? r.side : KUMPEL_DEFAULTS.side,
    hints: bool('hints'),
    motion: r.motion === 'auto' || r.motion === 'calm' ? r.motion : KUMPEL_DEFAULTS.motion,
    muted: bool('muted'),
    welcomed: bool('welcomed'),
    snoozeUntil: typeof r.snoozeUntil === 'string' && DAY.test(r.snoozeUntil) ? r.snoozeUntil : null,
    tourDone: bool('tourDone'),
    seen: Array.isArray(r.seen) ? r.seen.filter((x): x is string => typeof x === 'string') : [],
    updatedAt: typeof r.updatedAt === 'string' && !Number.isNaN(Date.parse(r.updatedAt)) ? r.updatedAt : null,
  };
}

const pad = (n: number) => String(n).padStart(2, '0');

/** The learner's local calendar day, `YYYY-MM-DD`. */
export function localDay(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

export function nextLocalDay(d: Date): string {
  return localDay(new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1));
}

export function isVisible(s: KumpelState): boolean {
  return s.enabled && !s.muted;
}

export function isHelloDue(s: KumpelState, today: string): boolean {
  if (!isVisible(s) || s.welcomed) return false;
  return !(s.snoozeUntil && today < s.snoozeUntil);
}

function current(): KumpelState {
  return resolveKumpel(getSettingsState().kumpel);
}

/** An explicit change stamps `updatedAt`; automatic bookkeeping (a hint was shown) passes `stamp = false`. */
function patch(next: Partial<KumpelState>, stamp = true) {
  replaceSettings({ kumpel: { ...getSettingsState().kumpel, ...next, ...(stamp ? { updatedAt: new Date().toISOString() } : {}) } });
}

/**
 * Reconciles this device's Kumpel state with the account's copy: the newer deliberate write wins as a whole
 * (so a mute or an un-mute made anywhere sticks), and `welcomed` / `tourDone` only ever turn on.
 */
export function mergeKumpel(local: unknown, cloud: unknown): KumpelState {
  const c = resolveKumpel(cloud);
  if (local === undefined || local === null) return c;
  const l = resolveKumpel(local);
  const winner = (c.updatedAt ?? '') > (l.updatedAt ?? '') ? c : l;
  return { ...winner, welcomed: l.welcomed || c.welcomed, tourDone: l.tourDone || c.tourDone };
}

export function useKumpel() {
  const { settings } = useSettings();
  const raw = settings.kumpel;
  const state = useMemo(() => resolveKumpel(raw), [raw]);

  const update = useCallback((next: Partial<KumpelState>) => patch(next), []);
  const markSeen = useCallback((id: string) => {
    const seen = current().seen;
    if (!seen.includes(id)) patch({ seen: [...seen, id] }, false);
  }, []);
  const resetHints = useCallback(() => patch({ seen: [] }), []);
  // `explicit = false` is the automatic snooze when the hello first appears (showing it counts as "later").
  const snoozeHello = useCallback((explicit = true) => patch({ snoozeUntil: nextLocalDay(new Date()) }, explicit), []);
  const muteForever = useCallback(() => patch({ muted: true, welcomed: true }), []);
  const finishHello = useCallback(() => patch({ welcomed: true, snoozeUntil: null }), []);

  return { state, update, markSeen, resetHints, snoozeHello, muteForever, finishHello };
}

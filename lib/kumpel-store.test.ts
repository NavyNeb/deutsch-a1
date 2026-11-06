import { act, renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { replaceSettings } from './settings-store';
import {
  KUMPEL_DEFAULTS,
  isHelloDue,
  isVisible,
  mergeKumpel,
  localDay,
  nextLocalDay,
  resolveKumpel,
  useKumpel,
} from './kumpel-store';

describe('resolveKumpel', () => {
  it.each([undefined, null, [], 'x', 7])('falls back to the defaults for %j', (raw) => {
    expect(resolveKumpel(raw)).toEqual(KUMPEL_DEFAULTS);
  });

  it('falls back field by field when every value has the wrong type', () => {
    const raw = { enabled: 'yes', side: 'up', hints: 1, motion: 'x', muted: 'no', welcomed: 3, snoozeUntil: 5, tourDone: null, seen: 'a' };
    expect(resolveKumpel(raw)).toEqual(KUMPEL_DEFAULTS);
  });

  it('keeps valid fields and drops invalid array entries', () => {
    const s = resolveKumpel({ side: 'left', seen: ['today', 7, 'path'] });
    expect(s.side).toBe('left');
    expect(s.seen).toEqual(['today', 'path']);
    expect(s.enabled).toBe(true);
  });

  it('accepts a YYYY-MM-DD snooze day and rejects anything else', () => {
    expect(resolveKumpel({ snoozeUntil: '2026-11-07' }).snoozeUntil).toBe('2026-11-07');
    expect(resolveKumpel({ snoozeUntil: 'garbage' }).snoozeUntil).toBeNull();
  });

  it('ignores unknown keys', () => {
    expect(resolveKumpel({ extra: true })).toEqual(KUMPEL_DEFAULTS);
  });
});

describe('local days', () => {
  it('formats the local day', () => {
    expect(localDay(new Date(2026, 0, 5))).toBe('2026-01-05');
  });
  it('rolls over month ends', () => {
    expect(nextLocalDay(new Date(2026, 10, 30, 23, 30))).toBe('2026-12-01');
  });
});

describe('isHelloDue / isVisible', () => {
  const today = '2026-11-06';
  it('is due for a fresh state', () => {
    expect(isHelloDue({ ...KUMPEL_DEFAULTS }, today)).toBe(true);
  });
  it('is not due when muted, disabled or already welcomed', () => {
    expect(isHelloDue({ ...KUMPEL_DEFAULTS, muted: true }, today)).toBe(false);
    expect(isHelloDue({ ...KUMPEL_DEFAULTS, enabled: false }, today)).toBe(false);
    expect(isHelloDue({ ...KUMPEL_DEFAULTS, welcomed: true }, today)).toBe(false);
  });
  it('is snoozed until the snooze day, then due again', () => {
    const s = { ...KUMPEL_DEFAULTS, snoozeUntil: '2026-11-07' };
    expect(isHelloDue(s, today)).toBe(false);
    expect(isHelloDue(s, '2026-11-07')).toBe(true);
  });
  it('isVisible needs enabled and not muted', () => {
    expect(isVisible(KUMPEL_DEFAULTS)).toBe(true);
    expect(isVisible({ ...KUMPEL_DEFAULTS, enabled: false })).toBe(false);
    expect(isVisible({ ...KUMPEL_DEFAULTS, muted: true })).toBe(false);
  });
});

describe('updatedAt', () => {
  it('keeps a valid timestamp and drops a bad one', () => {
    expect(resolveKumpel({ updatedAt: '2026-11-06T10:00:00.000Z' }).updatedAt).toBe('2026-11-06T10:00:00.000Z');
    expect(resolveKumpel({ updatedAt: 'yesterday' }).updatedAt).toBeNull();
    expect(resolveKumpel({ updatedAt: 5 }).updatedAt).toBeNull();
  });
});

describe('mergeKumpel', () => {
  const OLD = '2026-11-06T09:00:00.000Z';
  const NEW = '2026-11-06T10:00:00.000Z';

  it('takes the cloud copy when this device has never touched Kumpel', () => {
    expect(mergeKumpel(undefined, { side: 'left', updatedAt: OLD }).side).toBe('left');
  });

  it('the newer write wins as a whole', () => {
    const cloudNewer = mergeKumpel({ muted: true, updatedAt: OLD }, { muted: false, updatedAt: NEW });
    expect(cloudNewer.muted).toBe(false);
    const localNewer = mergeKumpel({ muted: true, updatedAt: NEW }, { muted: false, updatedAt: OLD });
    expect(localNewer.muted).toBe(true);
  });

  it('welcomed and tourDone only ever turn on', () => {
    const merged = mergeKumpel({ welcomed: true, updatedAt: OLD }, { tourDone: true, updatedAt: NEW });
    expect(merged.welcomed).toBe(true);
    expect(merged.tourDone).toBe(true);
  });

  it('a junk cloud value never beats a real local state', () => {
    expect(mergeKumpel({ muted: true, updatedAt: OLD }, 'garbage').muted).toBe(true);
    expect(mergeKumpel({ muted: true }, [1, 2]).muted).toBe(true);
  });
});

describe('useKumpel', () => {
  beforeEach(() => {
    localStorage.clear();
    replaceSettings({ kumpel: undefined });
  });

  it('starts from the defaults', () => {
    const { result } = renderHook(() => useKumpel());
    expect(result.current.state).toEqual(KUMPEL_DEFAULTS);
  });

  it('snoozeHello sets a later local day', () => {
    const { result } = renderHook(() => useKumpel());
    act(() => result.current.snoozeHello());
    const day = result.current.state.snoozeUntil!;
    expect(day).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(day > localDay(new Date())).toBe(true);
  });

  it('muteForever mutes and marks welcomed', () => {
    const { result } = renderHook(() => useKumpel());
    act(() => result.current.muteForever());
    expect(result.current.state.muted).toBe(true);
    expect(result.current.state.welcomed).toBe(true);
  });

  it('finishHello marks welcomed and clears the snooze', () => {
    const { result } = renderHook(() => useKumpel());
    act(() => result.current.snoozeHello());
    act(() => result.current.finishHello());
    expect(result.current.state.welcomed).toBe(true);
    expect(result.current.state.snoozeUntil).toBeNull();
  });

  it('explicit actions stamp updatedAt but markSeen does not', () => {
    const { result } = renderHook(() => useKumpel());
    act(() => result.current.markSeen('today'));
    expect(result.current.state.updatedAt).toBeNull();
    act(() => result.current.update({ side: 'left' }));
    expect(result.current.state.updatedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });

  it('markSeen is idempotent and resetHints empties the list', () => {
    const { result } = renderHook(() => useKumpel());
    act(() => result.current.markSeen('today'));
    act(() => result.current.markSeen('today'));
    expect(result.current.state.seen).toEqual(['today']);
    act(() => result.current.resetHints());
    expect(result.current.state.seen).toEqual([]);
  });

  it('persists inside the synced settings object', () => {
    const { result } = renderHook(() => useKumpel());
    act(() => result.current.update({ side: 'left' }));
    const saved = JSON.parse(localStorage.getItem('deutsch-a1-settings')!);
    expect(saved.kumpel.side).toBe('left');
  });

  it('keeps the same state reference between unrelated renders', () => {
    const { result, rerender } = renderHook(() => useKumpel());
    const first = result.current.state;
    rerender();
    expect(result.current.state).toBe(first);
  });
});

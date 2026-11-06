import { describe, expect, it } from 'vitest';
import { mergeCloudSettings } from './settings-sync';
import type { Settings } from './settings-store';

const local = (over: Partial<Settings> = {}): Settings => ({ dailyGoal: 30, onboarded: true, examTranslations: false, ...over });

describe('mergeCloudSettings', () => {
  it('passes other settings through untouched', () => {
    expect(mergeCloudSettings(local(), { dailyGoal: 50 })).toEqual({ dailyGoal: 50 });
  });

  it('keeps the local Kumpel state when the cloud has none', () => {
    const merged = mergeCloudSettings(local({ kumpel: { muted: true } }), { dailyGoal: 50 });
    expect('kumpel' in merged).toBe(false);
  });

  it('merges Kumpel by last write, so a recent mute survives an older cloud copy', () => {
    const merged = mergeCloudSettings(
      local({ kumpel: { muted: true, updatedAt: '2026-11-06T10:00:00.000Z' } }),
      { kumpel: { muted: false, updatedAt: '2026-11-06T09:00:00.000Z' } },
    );
    expect((merged.kumpel as { muted: boolean }).muted).toBe(true);
  });
});

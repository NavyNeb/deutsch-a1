import { beforeEach, describe, expect, it, vi } from 'vitest';
import { getSettingsState, replaceSettings, subscribeSettings } from './settings-store';

const KEY = 'deutsch-a1-settings';

beforeEach(() => {
  localStorage.clear();
  replaceSettings({ dailyGoal: 30, kumpel: undefined });
});

describe('settings across tabs', () => {
  it('re-reads the saved settings when another tab changes them, and tells subscribers', () => {
    const listener = vi.fn();
    const stop = subscribeSettings(listener);
    localStorage.setItem(KEY, JSON.stringify({ dailyGoal: 50, onboarded: true, examTranslations: false, kumpel: { muted: true } }));
    window.dispatchEvent(new StorageEvent('storage', { key: KEY }));
    expect(getSettingsState().dailyGoal).toBe(50);
    expect(getSettingsState().kumpel).toEqual({ muted: true });
    expect(listener).toHaveBeenCalled();
    stop();
  });

  it('ignores storage events for other keys', () => {
    replaceSettings({ dailyGoal: 40 });
    window.dispatchEvent(new StorageEvent('storage', { key: 'something-else' }));
    expect(getSettingsState().dailyGoal).toBe(40);
  });
});

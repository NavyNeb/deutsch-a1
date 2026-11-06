import { describe, it, expect } from 'vitest';
import { UI, t } from './ui-strings';

describe('ui strings', () => {
  it('every UI key has non-empty en and fr', () => {
    for (const [key, v] of Object.entries(UI)) {
      expect(v.en.trim(), `${key}.en`).not.toBe('');
      expect(v.fr.trim(), `${key}.fr`).not.toBe('');
    }
  });

  it('has the five navigation keys', () => {
    for (const k of ['navToday', 'navPath', 'navPractice', 'navLibrary', 'navMe'] as const) {
      expect(t(k, 'en')).toBeTruthy();
      expect(t(k, 'fr')).toBeTruthy();
    }
  });

  it('French nav glosses stay short enough for the rail and tab bar', () => {
    for (const k of ['navToday', 'navPath', 'navPractice', 'navLibrary', 'navMe'] as const) {
      expect(t(k, 'fr').length, k).toBeLessThanOrEqual(14);
    }
  });
});

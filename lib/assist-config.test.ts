import { describe, it, expect, afterEach } from 'vitest';
import { assistEnabledServer } from './assist-config';

describe('assistEnabledServer', () => {
  afterEach(() => {
    delete process.env.ANTHROPIC_API_KEY;
  });

  it('is off without a key', () => {
    expect(assistEnabledServer()).toBe(false);
  });

  it('is on with a key', () => {
    process.env.ANTHROPIC_API_KEY = 'sk-x';
    expect(assistEnabledServer()).toBe(true);
  });
});

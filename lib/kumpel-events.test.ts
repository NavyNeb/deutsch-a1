import { afterEach, describe, expect, it, vi } from 'vitest';
import { KUMPEL_EVENT, openKumpel } from './kumpel-events';

describe('openKumpel', () => {
  const spy = vi.fn();
  afterEach(() => { window.removeEventListener(KUMPEL_EVENT, spy); spy.mockReset(); });

  it('dispatches open-kumpel with the detail', () => {
    window.addEventListener(KUMPEL_EVENT, spy);
    openKumpel({ tour: true });
    expect(KUMPEL_EVENT).toBe('open-kumpel');
    expect((spy.mock.calls[0][0] as CustomEvent).detail).toEqual({ tour: true });
  });

  it('works without a detail', () => {
    window.addEventListener(KUMPEL_EVENT, spy);
    openKumpel();
    expect((spy.mock.calls[0][0] as CustomEvent).detail).toBeNull();
  });
});

import { afterEach, describe, it, expect, vi } from 'vitest';
import { haptics } from './haptics';

function stubVibrate(fn: unknown) {
  Object.defineProperty(navigator, 'vibrate', { value: fn, configurable: true, writable: true });
}
function stubReducedMotion(matches: boolean) {
  window.matchMedia = ((q: string) => ({ matches: matches && q.includes('reduce'), media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {}, onchange: null, dispatchEvent: () => false })) as typeof window.matchMedia;
}

afterEach(() => {
  // @ts-expect-error cleanup of the stub
  delete navigator.vibrate;
  // @ts-expect-error cleanup of the stub
  delete window.matchMedia;
});

describe('haptics', () => {
  it('select vibrates 8ms', () => {
    const v = vi.fn();
    stubVibrate(v);
    haptics.select();
    expect(v).toHaveBeenCalledWith(8);
  });

  it('success vibrates the double pattern', () => {
    const v = vi.fn();
    stubVibrate(v);
    haptics.success();
    expect(v).toHaveBeenCalledWith([10, 40, 10]);
  });

  it('does nothing and does not throw without vibration support', () => {
    expect(() => { haptics.select(); haptics.success(); }).not.toThrow();
  });

  it('stays silent under prefers-reduced-motion', () => {
    const v = vi.fn();
    stubVibrate(v);
    stubReducedMotion(true);
    haptics.select();
    haptics.success();
    expect(v).not.toHaveBeenCalled();
  });

  it('vibrates when reduced motion is not requested', () => {
    const v = vi.fn();
    stubVibrate(v);
    stubReducedMotion(false);
    haptics.select();
    expect(v).toHaveBeenCalledTimes(1);
  });

  it('swallows an error thrown by the browser', () => {
    stubVibrate(() => { throw new Error('blocked'); });
    expect(() => haptics.select()).not.toThrow();
  });
});

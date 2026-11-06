import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { useShowTranslation } from './lesson-prefs';

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

describe('useShowTranslation', () => {
  it('defaults to showing translations', () => {
    const { result } = renderHook(() => useShowTranslation());
    expect(result.current[0]).toBe(true);
  });

  it('persists a change to localStorage and across hook instances', () => {
    const a = renderHook(() => useShowTranslation());
    act(() => a.result.current[1](false));
    expect(localStorage.getItem('deutsch-a1-show-translation')).toBe('false');
    const b = renderHook(() => useShowTranslation());
    expect(b.result.current[0]).toBe(false);
    act(() => b.result.current[1](true));
    expect(a.result.current[0]).toBe(true);
  });

  it('keeps working in memory when storage throws', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('quota'); });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
    const { result } = renderHook(() => useShowTranslation());
    expect(() => act(() => result.current[1](false))).not.toThrow();
    expect(result.current[0]).toBe(false);
  });
});

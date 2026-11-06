import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { addRecent, clearRecents, getRecents, useRecents } from './recent-searches';

const item = (n: number) => ({ title: `Wort ${n}`, subtitle: `word ${n}`, href: `/dictionary/Wort${n}` });

beforeEach(() => localStorage.clear());
afterEach(() => vi.restoreAllMocks());

describe('recent searches', () => {
  it('starts empty', () => {
    expect(getRecents()).toEqual([]);
  });

  it('keeps the newest first', () => {
    addRecent(item(1));
    addRecent(item(2));
    expect(getRecents().map((r) => r.title)).toEqual(['Wort 2', 'Wort 1']);
  });

  it('moves a repeated destination to the front instead of duplicating it', () => {
    addRecent(item(1));
    addRecent(item(2));
    addRecent({ ...item(1), subtitle: 'again' });
    const r = getRecents();
    expect(r.map((x) => x.href)).toEqual(['/dictionary/Wort1', '/dictionary/Wort2']);
    expect(r[0].subtitle).toBe('again');
  });

  it('remembers at most 8', () => {
    for (let i = 1; i <= 12; i++) addRecent(item(i));
    expect(getRecents()).toHaveLength(8);
    expect(getRecents()[0].title).toBe('Wort 12');
  });

  it('clears', () => {
    addRecent(item(1));
    clearRecents();
    expect(getRecents()).toEqual([]);
  });

  it('survives corrupt storage', () => {
    localStorage.setItem('deutsch-a1-recent-searches', '{not json');
    expect(getRecents()).toEqual([]);
    localStorage.setItem('deutsch-a1-recent-searches', JSON.stringify([{ nope: 1 }, item(3)]));
    expect(getRecents().map((r) => r.title)).toEqual(['Wort 3']);
  });

  it('never throws when storage is blocked', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('quota'); });
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
    expect(() => addRecent(item(1))).not.toThrow();
    expect(() => getRecents()).not.toThrow();
    expect(() => clearRecents()).not.toThrow();
  });

  it('the hook follows changes made elsewhere', () => {
    const { result } = renderHook(() => useRecents());
    expect(result.current[0]).toEqual([]);
    act(() => addRecent(item(1)));
    expect(result.current[0].map((r) => r.title)).toEqual(['Wort 1']);
    act(() => result.current[1]());
    expect(result.current[0]).toEqual([]);
  });
});

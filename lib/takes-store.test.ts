import { describe, it, expect } from 'vitest';
import { MAX_TAKES, deleteTake, getTake, listTakes, memoryBackend, saveTake, type Take } from './takes-store';

const take = (n: number): Take => ({
  id: `t${n}`, at: n, kind: 'talk', label: `Thema ${n}`, seconds: 60, words: 80, wordsPerMinute: 80, blob: new Blob([`audio${n}`]),
});

describe('takes store', () => {
  it('saves a take and gets the recording back', async () => {
    const b = memoryBackend();
    await saveTake(take(1), b);
    const got = await getTake('t1', b);
    expect(got?.label).toBe('Thema 1');
    expect(got?.blob.size).toBeGreaterThan(0);
  });

  it('lists newest first without the audio data', async () => {
    const b = memoryBackend();
    for (const n of [1, 3, 2]) await saveTake(take(n), b);
    const list = await listTakes(b);
    expect(list.map((t) => t.id)).toEqual(['t3', 't2', 't1']);
    expect('blob' in list[0]).toBe(false);
  });

  it('keeps only the newest takes', async () => {
    const b = memoryBackend();
    for (let n = 1; n <= MAX_TAKES + 5; n++) await saveTake(take(n), b);
    const list = await listTakes(b);
    expect(list).toHaveLength(MAX_TAKES);
    expect(list[list.length - 1].id).toBe('t6');
    expect(await getTake('t1', b)).toBeUndefined();
  });

  it('deletes a take', async () => {
    const b = memoryBackend();
    await saveTake(take(1), b);
    await deleteTake('t1', b);
    expect(await listTakes(b)).toEqual([]);
  });

  it('never throws when storage fails', async () => {
    const broken = { put: async () => { throw new Error('full'); }, get: async () => { throw new Error('x'); }, all: async () => { throw new Error('x'); }, remove: async () => { throw new Error('x'); } };
    await expect(saveTake(take(1), broken)).resolves.toBeUndefined();
    expect(await listTakes(broken)).toEqual([]);
    expect(await getTake('t1', broken)).toBeUndefined();
    await expect(deleteTake('t1', broken)).resolves.toBeUndefined();
  });
});

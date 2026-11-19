import { act, renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, it, expect, vi } from 'vitest';
import { useContinuousSpeech } from './useContinuousSpeech';

type Handler = { onresult: ((e: unknown) => void) | null; onerror: ((e: unknown) => void) | null; onend: (() => void) | null };

let instances: (Handler & { start: ReturnType<typeof vi.fn>; stop: ReturnType<typeof vi.fn>; abort: ReturnType<typeof vi.fn>; continuous: boolean; interimResults: boolean; lang: string })[] = [];

class FakeRecognition {
  lang = ''; continuous = false; interimResults = false; maxAlternatives = 1;
  onresult: Handler['onresult'] = null; onerror: Handler['onerror'] = null; onend: Handler['onend'] = null;
  start = vi.fn(); stop = vi.fn(); abort = vi.fn();
  constructor() { instances.push(this); }
}

const result = (text: string, isFinal: boolean) => Object.assign([{ transcript: text }], { isFinal });

beforeEach(() => { instances = []; (window as unknown as { webkitSpeechRecognition: unknown }).webkitSpeechRecognition = FakeRecognition; });
afterEach(() => { delete (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition; });

describe('useContinuousSpeech', () => {
  it('is unsupported without a recogniser', () => {
    delete (window as unknown as { webkitSpeechRecognition?: unknown }).webkitSpeechRecognition;
    const { result: r } = renderHook(() => useContinuousSpeech());
    expect(r.current.supported).toBe(false);
    act(() => r.current.start());
    expect(r.current.listening).toBe(false);
  });

  it('listens continuously in German with live text', () => {
    const { result: r } = renderHook(() => useContinuousSpeech());
    expect(r.current.supported).toBe(true);
    act(() => r.current.start());
    const rec = instances[0];
    expect(rec).toMatchObject({ lang: 'de-DE', continuous: true, interimResults: true });
    expect(rec.start).toHaveBeenCalled();
    expect(r.current.listening).toBe(true);
  });

  it('keeps final text and shows the unfinished words as interim', () => {
    const { result: r } = renderHook(() => useContinuousSpeech());
    act(() => r.current.start());
    const rec = instances[0];
    act(() => rec.onresult!({ resultIndex: 0, results: [result('Ich gehe', true), result('nach Haus', false)] }));
    expect(r.current.finalText).toBe('Ich gehe');
    expect(r.current.interim).toBe('nach Haus');
    expect(r.current.text).toBe('Ich gehe nach Haus');
    act(() => rec.onresult!({ resultIndex: 1, results: [result('Ich gehe', true), result('nach Hause', true)] }));
    expect(r.current.text).toBe('Ich gehe nach Hause');
  });

  it('restarts after the browser ends the session while the learner is still talking', () => {
    const { result: r } = renderHook(() => useContinuousSpeech());
    act(() => r.current.start());
    act(() => instances[0].onend!());
    expect(instances).toHaveLength(2);
    expect(instances[1].start).toHaveBeenCalled();
    expect(r.current.listening).toBe(true);
  });

  it('does not restart after stop, and keeps the text', () => {
    const { result: r } = renderHook(() => useContinuousSpeech());
    act(() => r.current.start());
    act(() => instances[0].onresult!({ resultIndex: 0, results: [result('Hallo', true)] }));
    act(() => r.current.stop());
    act(() => instances[0].onend!());
    expect(instances).toHaveLength(1);
    expect(r.current.listening).toBe(false);
    expect(r.current.text).toBe('Hallo');
  });

  it('ignores silence but stops for a blocked microphone', () => {
    const { result: r } = renderHook(() => useContinuousSpeech());
    act(() => r.current.start());
    act(() => instances[0].onerror!({ error: 'no-speech' }));
    expect(r.current.error).toBeNull();
    expect(r.current.listening).toBe(true);
    act(() => instances[0].onerror!({ error: 'not-allowed' }));
    expect(r.current.error).toBe('denied');
    expect(r.current.listening).toBe(false);
    act(() => instances[0].onend!());
    expect(instances).toHaveLength(1);
  });

  it('starts a new talk from an empty transcript', () => {
    const { result: r } = renderHook(() => useContinuousSpeech());
    act(() => r.current.start());
    act(() => instances[0].onresult!({ resultIndex: 0, results: [result('alt', true)] }));
    act(() => r.current.start());
    expect(r.current.text).toBe('');
  });
});

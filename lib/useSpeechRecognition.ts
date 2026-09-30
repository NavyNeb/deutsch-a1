'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export type SpeechError = 'denied' | 'no-speech' | 'network' | 'other';

// Minimal typings for the Web Speech API (not in lib.dom for all TS targets).
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

function getRecognitionCtor(): (new () => SpeechRecognitionLike) | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as {
    SpeechRecognition?: new () => SpeechRecognitionLike;
    webkitSpeechRecognition?: new () => SpeechRecognitionLike;
  };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

function toError(code?: string): SpeechError {
  if (code === 'not-allowed' || code === 'service-not-allowed') return 'denied';
  if (code === 'no-speech' || code === 'aborted') return 'no-speech';
  if (code === 'network') return 'network';
  return 'other';
}

// Thin wrapper over the Web Speech API. `supported` is false where the browser
// lacks it (e.g. Firefox) so callers can hide speaking UI gracefully.
// `alternatives` holds the recogniser's ranked hypotheses; `transcript` is the top one.
export function useSpeechRecognition(lang = 'de-DE', maxAlternatives = 3) {
  const [supported, setSupported] = useState(false);
  const [ready, setReady] = useState(false);
  const [listening, setListening] = useState(false);
  const [alternatives, setAlternatives] = useState<string[] | null>(null);
  const [error, setError] = useState<SpeechError | null>(null);
  const recRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    setSupported(getRecognitionCtor() !== null);
    setReady(true);
    return () => { try { recRef.current?.abort(); } catch { /* ignore */ } };
  }, []);

  const listen = useCallback(() => {
    const Ctor = getRecognitionCtor();
    if (!Ctor) return;
    try { recRef.current?.abort(); } catch { /* ignore */ }
    const rec = new Ctor();
    recRef.current = rec;
    rec.lang = lang;
    rec.interimResults = false;
    rec.maxAlternatives = maxAlternatives;
    setAlternatives(null);
    setError(null);
    setListening(true);
    rec.onresult = (e) => {
      const first = e.results[0];
      const alts = first ? Array.from(first, (a) => a.transcript).filter(Boolean) : [];
      setAlternatives(alts);
    };
    rec.onerror = (e) => { setError(toError(e?.error)); setListening(false); };
    rec.onend = () => setListening(false);
    try { rec.start(); } catch { setListening(false); setError('other'); }
  }, [lang, maxAlternatives]);

  const stop = useCallback(() => { try { recRef.current?.stop(); } catch { /* ignore */ } }, []);
  const reset = useCallback(() => { setAlternatives(null); setError(null); }, []);

  return { supported, ready, listening, transcript: alternatives ? alternatives[0] ?? '' : null, alternatives, error, listen, stop, reset };
}

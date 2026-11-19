'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import type { SpeechError } from './useSpeechRecognition';

// Recognition for long talks: keeps listening through pauses (browsers stop after a few seconds of silence),
// gives live text, and keeps everything said so far. Where the browser has no recogniser `supported` is false.

type ResultLike = { isFinal: boolean; 0: { transcript: string } };
type RecLike = {
  lang: string; continuous: boolean; interimResults: boolean; maxAlternatives: number;
  start: () => void; stop: () => void; abort: () => void;
  onresult: ((e: { resultIndex: number; results: ArrayLike<ResultLike> }) => void) | null;
  onerror: ((e: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

function ctor(): (new () => RecLike) | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as { SpeechRecognition?: new () => RecLike; webkitSpeechRecognition?: new () => RecLike };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

function toError(code?: string): SpeechError {
  if (code === 'not-allowed' || code === 'service-not-allowed') return 'denied';
  if (code === 'no-speech' || code === 'aborted') return 'no-speech';
  if (code === 'network') return 'network';
  return 'other';
}

export function useContinuousSpeech(lang = 'de-DE') {
  const [supported, setSupported] = useState(false);
  const [ready, setReady] = useState(false);
  const [listening, setListening] = useState(false);
  const [finalText, setFinalText] = useState('');
  const [interim, setInterim] = useState('');
  const [error, setError] = useState<SpeechError | null>(null);
  const recRef = useRef<RecLike | null>(null);
  const wantRef = useRef(false);   // the learner has not pressed stop
  const finalRef = useRef('');

  useEffect(() => {
    setSupported(ctor() !== null);
    setReady(true);
    return () => { wantRef.current = false; try { recRef.current?.abort(); } catch { /* ignore */ } };
  }, []);

  const begin = useCallback(() => {
    const C = ctor();
    if (!C) return;
    const rec = new C();
    recRef.current = rec;
    rec.lang = lang;
    rec.continuous = true;
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.onresult = (e) => {
      let live = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const r = e.results[i];
        const text = r[0]?.transcript ?? '';
        if (r.isFinal) { finalRef.current = (finalRef.current + ' ' + text).trim(); setFinalText(finalRef.current); }
        else live += text;
      }
      setInterim(live.trim());
    };
    rec.onerror = (e) => {
      const code = toError(e?.error);
      // Silence is normal in a talk; only a blocked microphone or a network failure ends the session.
      if (code === 'denied' || code === 'network') { wantRef.current = false; setError(code); setListening(false); }
    };
    rec.onend = () => {
      setInterim('');
      if (wantRef.current) { try { begin(); } catch { setListening(false); } } else setListening(false);
    };
    try { rec.start(); } catch { wantRef.current = false; setListening(false); setError('other'); }
  }, [lang]);

  const start = useCallback(() => {
    if (!ctor()) return;
    try { recRef.current?.abort(); } catch { /* ignore */ }
    finalRef.current = '';
    setFinalText(''); setInterim(''); setError(null);
    wantRef.current = true;
    setListening(true);
    begin();
  }, [begin]);

  const stop = useCallback(() => {
    wantRef.current = false;
    setListening(false);
    try { recRef.current?.stop(); } catch { /* ignore */ }
  }, []);

  const reset = useCallback(() => { finalRef.current = ''; setFinalText(''); setInterim(''); setError(null); }, []);

  /** Everything said so far, including words the recogniser has not finalised yet. */
  const text = (finalText + (interim ? ' ' + interim : '')).trim();

  return { supported, ready, listening, text, finalText, interim, error, start, stop, reset };
}

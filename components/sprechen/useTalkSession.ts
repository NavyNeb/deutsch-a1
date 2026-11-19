'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useContinuousSpeech } from '@/lib/useContinuousSpeech';
import { useRecorder } from '@/lib/useRecorder';

export type TalkResult = { text: string; seconds: number; blob: Blob | null };

// One spoken talk: starts the recogniser and the recorder together, counts the seconds, and hands back the
// text, the length and the recording when it ends. Either part may be missing in a browser; the other still works.
export function useTalkSession() {
  const speech = useContinuousSpeech();
  const recorder = useRecorder();
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const startedAt = useRef(0);
  const speechRef = useRef(speech);
  speechRef.current = speech;

  useEffect(() => {
    if (!running) return;
    const h = setInterval(() => setElapsed((Date.now() - startedAt.current) / 1000), 250);
    return () => clearInterval(h);
  }, [running]);

  const start = useCallback(async () => {
    setElapsed(0);
    startedAt.current = Date.now();
    setRunning(true);
    speechRef.current.start();
    await recorder.start();
  }, [recorder]);

  const finish = useCallback(async (): Promise<TalkResult> => {
    const seconds = (Date.now() - startedAt.current) / 1000;
    speechRef.current.stop();
    const blob = await recorder.stop();
    setRunning(false);
    setElapsed(seconds);
    return { text: speechRef.current.text, seconds, blob };
  }, [recorder]);

  return {
    running, elapsed,
    text: speech.text, listening: speech.listening,
    speechSupported: speech.supported, speechReady: speech.ready, speechError: speech.error,
    recorderSupported: recorder.supported, recorderError: recorder.error,
    start, finish, resetText: speech.reset,
  };
}

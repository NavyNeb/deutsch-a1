'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

// Records the microphone with MediaRecorder so the learner can hear themselves. `supported` is false where
// the browser cannot record (then the exercises still work, just without replay).

export type RecorderError = 'denied' | 'unsupported' | 'other';

export function useRecorder() {
  const [supported, setSupported] = useState(false);
  const [recording, setRecording] = useState(false);
  const [error, setError] = useState<RecorderError | null>(null);
  const recRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    setSupported(typeof navigator !== 'undefined' && !!navigator.mediaDevices?.getUserMedia && typeof MediaRecorder !== 'undefined');
    return () => { try { recRef.current?.stop(); } catch { /* ignore */ } streamRef.current?.getTracks().forEach((t) => t.stop()); };
  }, []);

  const start = useCallback(async () => {
    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') { setError('unsupported'); return false; }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      chunksRef.current = [];
      const rec = new MediaRecorder(stream);
      rec.ondataavailable = (e) => { if (e.data && e.data.size > 0) chunksRef.current.push(e.data); };
      recRef.current = rec;
      rec.start();
      setError(null);
      setRecording(true);
      return true;
    } catch (e) {
      setError((e as { name?: string })?.name === 'NotAllowedError' ? 'denied' : 'other');
      return false;
    }
  }, []);

  /** Stops and resolves with the recording (null if nothing was recorded). */
  const stop = useCallback((): Promise<Blob | null> => new Promise((resolve) => {
    const rec = recRef.current;
    const release = () => { streamRef.current?.getTracks().forEach((t) => t.stop()); streamRef.current = null; setRecording(false); };
    if (!rec || rec.state === 'inactive') { release(); resolve(null); return; }
    rec.onstop = () => {
      const blob = chunksRef.current.length ? new Blob(chunksRef.current, { type: rec.mimeType || 'audio/webm' }) : null;
      release();
      resolve(blob);
    };
    try { rec.stop(); } catch { release(); resolve(null); }
  }), []);

  return { supported, recording, error, start, stop };
}

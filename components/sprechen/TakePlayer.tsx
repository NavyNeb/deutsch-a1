'use client';
import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';

// Plays back a recording the learner made (a Blob kept on this device).
export function TakePlayer({ blob, label }: { blob: Blob; label?: string }) {
  const { locale } = useLocale();
  const [url, setUrl] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const u = URL.createObjectURL(blob);
    setUrl(u);
    return () => { audio.current?.pause(); URL.revokeObjectURL(u); };
  }, [blob]);

  const toggle = () => {
    const a = audio.current;
    if (!a) return;
    if (a.paused) { a.currentTime = 0; void a.play(); } else a.pause();
  };

  return (
    <span className="inline-flex items-center">
      {url && <audio ref={audio} src={url} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onEnded={() => setPlaying(false)} />}
      <button
        type="button" onClick={toggle} disabled={!url}
        className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-4 py-2.5 font-display font-bold text-[14px] text-text hover:brightness-105 active:scale-[.98] transition"
      >
        {playing ? <Pause size={16} strokeWidth={2.5} /> : <Play size={16} strokeWidth={2.5} />}
        {label ?? sc('playMine', locale)}
      </button>
    </span>
  );
}

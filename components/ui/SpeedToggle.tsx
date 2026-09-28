'use client';
import { useEffect, useState } from 'react';
import { Gauge } from 'lucide-react';
import { getPlaybackRate, setPlaybackRate } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

// Toggles TTS playback between normal and slow-listening speed. Starts at 1×
// to match the server render, then syncs to the persisted value on mount.
export function SpeedToggle() {
  const { locale } = useLocale();
  const [rate, setRate] = useState(1);

  useEffect(() => { setRate(getPlaybackRate()); }, []);

  function cycle() {
    const next = rate === 1 ? 0.75 : 1;
    setRate(next);
    setPlaybackRate(next);
  }

  const slow = rate !== 1;
  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={slow ? t('speedSlow', locale) : t('speedNormal', locale)}
      title={t('playbackSpeed', locale)}
      className={
        'inline-flex items-center gap-1.5 h-9 px-2.5 rounded-full border shadow-sm text-[13px] font-rounded font-bold ' +
        'tabular-nums transition-[border-color,background,transform] duration-150 active:scale-95 cursor-pointer ' +
        (slow ? 'border-primary text-primary bg-[var(--primary-wash)]' : 'border-border text-text-2 bg-card hover:border-border-strong')
      }
    >
      <Gauge size={15} strokeWidth={2.2} aria-hidden="true" />
      {rate}×
    </button>
  );
}

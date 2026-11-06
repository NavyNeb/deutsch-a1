'use client';
import { useEffect, useState } from 'react';
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
        'grid place-items-center shrink-0 w-11 h-11 rounded-full border bg-transparent text-[14px] font-semibold tabular-nums ' +
        'transition-[border-color,background,transform] duration-150 active:scale-95 cursor-pointer hover:bg-surface-2 ' +
        (slow ? 'border-text text-text' : 'border-border-strong text-text')
      }
    >
      {rate}×
    </button>
  );
}

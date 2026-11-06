'use client';
import { useEffect, useId, useRef } from 'react';
import { Play } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

type Props = {
  onTour: () => void;
  onLater: () => void;
  onMute: () => void;
  /** Placement classes decided by the shell (side, offset above the buddy). */
  className: string;
};

/** The one time Kumpel speaks first. Not modal: the page behind stays usable. */
export function Hello({ onTour, onLater, onMute, className }: Props) {
  const { locale } = useLocale();
  const titleId = useId();
  const primary = useRef<HTMLButtonElement>(null);
  const laterRef = useRef(onLater);
  laterRef.current = onLater;

  useEffect(() => { primary.current?.focus(); }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); laterRef.current(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      role="dialog"
      aria-labelledby={titleId}
      className={
        'kumpel-fade fixed z-[45] rounded-[30px_30px_8px_30px] border border-border-strong bg-card shadow-pop px-[26px] pt-6 pb-[22px] ' + className
      }
    >
      <div className="eyebrow mb-3">{t('kumpelHelloEyebrow', locale)}</div>
      <h2 id={titleId} className="m-0 font-display font-semibold text-[34px] leading-none tracking-[-0.03em]">Hallo! Ich bin Kumpel.</h2>
      <p className="mt-3.5 mb-5 text-[15px] leading-[1.55] text-text-2">{t('kumpelHelloBody', locale)}</p>
      <div className="flex flex-wrap items-center gap-3">
        <button
          ref={primary}
          type="button"
          onClick={onTour}
          className="inline-flex items-center justify-center gap-2.5 h-[52px] px-6 rounded-full border-0 bg-cta text-cta-ink text-[16px] font-semibold cursor-pointer"
        >
          <Play size={18} strokeWidth={1.8} aria-hidden="true" fill="currentColor" />
          Tour starten
        </button>
        <button
          type="button"
          onClick={onLater}
          className="inline-flex items-center justify-center h-[52px] px-[22px] rounded-full border border-border-strong bg-transparent text-text text-[16px] font-semibold cursor-pointer hover:bg-surface-2"
        >
          Später
        </button>
      </div>
      <p className="mt-4 mb-0 text-[13px] text-muted">
        {t('kumpelHelloMute', locale)}{' '}
        <button
          type="button"
          onClick={onMute}
          className="min-h-11 px-1 bg-transparent border-0 p-0 text-text-2 underline underline-offset-[3px] cursor-pointer text-[13px]"
        >
          Ruhe, bitte
        </button>{' '}
        — {t('kumpelHelloMuteNote', locale)}
      </p>
    </div>
  );
}

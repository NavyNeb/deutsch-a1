'use client';
import { ListTree, X } from 'lucide-react';
import type { Lesson } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { useShowTranslation } from '@/lib/lesson-prefs';
import { SpeedToggle } from '@/components/ui/SpeedToggle';
import type { LessonSegment } from './segments';

const circle = 'grid place-items-center w-11 h-11 rounded-full border border-border-strong bg-transparent text-text cursor-pointer transition hover:bg-surface-2';

export function LessonTopBar({ lesson, segments, onClose, onOpenContents, onOpenHelp }: { lesson: Lesson; segments: LessonSegment[]; onClose: () => void; onOpenContents: () => void; onOpenHelp: () => void }) {
  const { locale } = useLocale();
  const [show, setShow] = useShowTranslation();
  const partial = segments.findIndex((s) => s.fraction > 0 && s.fraction < 1);
  let activeIdx = partial;
  if (activeIdx < 0) segments.forEach((s, idx) => { if (s.fraction >= 1) activeIdx = idx; });

  return (
    <header className="relative z-20 flex flex-wrap items-start gap-x-6 gap-y-3 px-4 sm:px-10 pt-4 sm:pt-6">
      <div className="flex items-center gap-4 sm:min-w-[230px]">
        <button type="button" onClick={onClose} aria-label={t('closeLesson', locale)} className={circle}><X size={20} strokeWidth={1.8} aria-hidden="true" /></button>
        <div className="min-w-0">
          <div className="eyebrow mb-1.5">Lektion {lesson.number}</div>
          <div className="font-display font-semibold text-[18px] truncate">{lesson.title.de}</div>
        </div>
      </div>

      <div className="order-last sm:order-none basis-full sm:basis-0 sm:flex-1 min-w-0 pt-1 sm:pt-2" role="group" aria-label={t('lessonStepsNav', locale)}>
        <div className="grid gap-1.5" style={{ gridTemplateColumns: segments.map((s) => `${s.weight}fr`).join(' ') }}>
          {segments.map((s, i) => (
            <div key={s.key} className="min-w-0">
              <div className="h-1.5 rounded-[3px] bg-surface-3 overflow-hidden"><i className="block h-full bg-text transition-[width] duration-300" style={{ width: `${Math.round(s.fraction * 100)}%` }} /></div>
              <div className={'hidden sm:block mt-2.5 text-[12px] truncate ' + (i === activeIdx ? 'font-semibold text-text' : 'text-muted')}>{pick(s.label, s.labelFr, locale)}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="ml-auto flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => setShow(!show)}
          aria-pressed={show}
          aria-label={t('translationToggle', locale)}
          className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full border border-border-strong bg-transparent text-text text-[13px] font-semibold cursor-pointer transition hover:bg-surface-2"
        >
          {locale.toUpperCase()} <span className="text-muted">· {show ? t('transOn', locale) : t('transOff', locale)}</span>
        </button>
        <SpeedToggle />
        <button type="button" onClick={onOpenContents} aria-label={t('openLessonNav', locale)} className={circle}><ListTree size={20} strokeWidth={1.8} aria-hidden="true" /></button>
        <button
          type="button"
          onClick={onOpenHelp}
          aria-label={t('lessonHelpOpen', locale)}
          aria-haspopup="dialog"
          className="grid place-items-center w-11 h-11 rounded-full border border-cta bg-cta text-cta-ink font-display font-semibold text-[18px] cursor-pointer transition hover:opacity-90"
        >
          ?
        </button>
      </div>
    </header>
  );
}

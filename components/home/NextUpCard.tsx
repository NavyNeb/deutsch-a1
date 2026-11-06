'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lessons } from '@/content';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { nextLesson, stepProgress } from '@/lib/path-model';
import { LessonArt } from '@/components/ui/LessonArt';
import { ProgressTicks } from '@/components/ui/ProgressTicks';

const cta = 'inline-flex items-center justify-center gap-2.5 h-[52px] px-7 rounded-full bg-cta text-cta-ink font-semibold text-[16px] no-underline transition hover:opacity-90 active:scale-[.98]';
const ghost = 'inline-flex items-center justify-center h-[52px] px-6 rounded-full border border-border-strong text-text font-semibold text-[16px] no-underline transition hover:bg-surface-2';

export function NextUpCard() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const next = nextLesson(state, lessons);

  if (!next) {
    return (
      <section data-testid="today-next-up" className="rounded-[32px] border border-border bg-card p-8 sm:p-10 min-h-[260px] flex flex-col justify-center">
        <div className="eyebrow mb-5">Weiter</div>
        <h2 className="font-display font-semibold text-[44px] leading-none tracking-[-0.03em] m-0">Alles geschafft</h2>
        <p className="text-[17px] text-text-2 mt-3 mb-7 max-w-[44ch]">{t('allLessonsDone', locale)}</p>
        <div><Link href="/path" className={ghost}>{t('navPath', locale)}</Link></div>
      </section>
    );
  }

  const p = stepProgress(state, next);
  const started = p.done > 0;
  return (
    <section data-testid="today-next-up" className="relative overflow-hidden rounded-[32px] border border-border bg-card p-6 sm:p-10 min-h-[340px] sm:min-h-[400px]">
      <div aria-hidden="true" className="absolute -right-8 -top-5 w-[170px] h-[170px] sm:right-[-48px] sm:top-[56px] sm:w-[270px] sm:h-[310px]">
        <LessonArt lesson={next} />
      </div>
      <div className="relative z-10 max-w-[430px]">
        <div className="eyebrow mb-5">Weiter · Lektion {next.number} · {next.level}</div>
        <h2 className="font-display font-semibold text-[clamp(36px,5vw,60px)] leading-none tracking-[-0.03em] m-0 mt-14 sm:mt-0">{next.title.de}</h2>
        <p className="text-[17px] text-text-2 mt-3.5 mb-0">{pick(next.title.en, next.title.fr, locale)}</p>

        <div className="mt-8 max-w-[330px]">
        <ProgressTicks total={p.total} done={p.done} current={started} label={`${t('stepWord', locale)} ${p.done} ${t('ofWord', locale)} ${p.total}`} />
        <div className="flex justify-between text-[13px] text-muted mt-2.5">
          <span>{t('stepWord', locale)} {p.done} {t('ofWord', locale)} {p.total}</span>
          <span>~{p.minutesLeft} {t('minLeft', locale)}</span>
        </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-7">
          <Link href={`/lesson/${next.id}/learn`} className={cta}>
            {started ? t('continue', locale) : t('start', locale)} <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />
          </Link>
          <Link href="/path" className={ghost}>{t('contents', locale)}</Link>
        </div>
      </div>
    </section>
  );
}

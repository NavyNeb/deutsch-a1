'use client';
import Link from 'next/link';
import { ArrowLeft, Play } from 'lucide-react';
import type { Special } from '@/content/types';
import { getLesson } from '@/content';
import { specialProgress } from '@/lib/specials-progress';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { lessonGlyph } from '@/lib/lesson-visuals';
import { GROUP_BAND } from '@/lib/special-visuals';
import { GROUP_LABEL } from '@/content/specials/meta';
import { BookRefLinks } from '@/components/learn/BookRefLinks';
import { stepId } from '@/components/learn/stepId';
import { levelRange } from './SpecialCard';

export function SpecialOverview({ special }: { special: Special }) {
  const { locale } = useLocale();
  const { state } = useProgress();
  const p = specialProgress(state, special);
  const band = GROUP_BAND[special.special.group];
  const rec = state.lessons[special.id];
  const done = new Set(rec?.steps ?? []);
  const started = p.stepsDone > 0 || p.quizAnswered > 0;

  const chapters = special.steps.flatMap((s, i) => (s.kind === 'chapter' ? [{ step: s, id: stepId(s, i) }] : []));
  const words = special.steps.filter((s) => s.kind === 'vocab').length;
  const quizAt = special.steps.findIndex((s) => s.kind === 'quiz');
  const exercises = special.steps.filter((s, i) => s.kind === 'exercise' && (quizAt < 0 || i < quizAt)).length;
  const related = special.special.related.flatMap((id) => { const l = getLesson(id); return l ? [l] : []; });
  const goals = locale === 'fr' && special.goalsFr ? special.goalsFr : special.goals;
  const group = GROUP_LABEL[special.special.group];

  return (
    <main className="mx-auto w-full max-w-[880px] px-4 py-5 pb-24 grid gap-6">
      <Link href="/specials" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-primary hover:underline">
        <ArrowLeft size={16} strokeWidth={2.4} /> {t('specialsBackToHub', locale)}
      </Link>

      <header className="rounded-[24px] p-6 md:p-8 text-white" style={{ background: band.grad }}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="font-rounded font-extrabold text-[11px] tracking-wide rounded-full px-2.5 py-1 bg-white/25">{levelRange(special)}</span>
          <span className="font-rounded font-bold text-[12px] opacity-90">{pick(group.en, group.fr, locale)}</span>
        </div>
        <div className="flex items-start gap-4">
          <span aria-hidden="true" className="text-[52px] leading-none drop-shadow-[0_3px_5px_rgba(0,0,0,0.2)]">{lessonGlyph(special)}</span>
          <div className="min-w-0">
            <h1 className="font-rounded font-extrabold text-[clamp(28px,5vw,40px)] leading-tight m-0 break-words">{special.title.de}</h1>
            <p className="m-0 mt-1 text-[16px] opacity-90">{pick(special.title.en, special.title.fr, locale)}</p>
          </div>
        </div>
        <ul className="m-0 mt-5 pl-5 grid gap-1 text-[15px] marker:text-white/70">
          {goals.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href={`/specials/${special.special.slug}/learn`}
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#1c3d46] font-rounded font-extrabold text-[15px] px-6 py-3 no-underline shadow-md hover:brightness-95 active:scale-[.98] transition"
          >
            <Play size={16} strokeWidth={2.6} fill="currentColor" /> {started ? t('specialsContinue', locale) : t('specialsStart', locale)}
          </Link>
          <Link
            href={`/specials/${special.special.slug}/review`}
            className="inline-flex items-center rounded-full border border-white/50 text-white font-rounded font-bold text-[14px] px-5 py-3 no-underline hover:bg-white/15 transition"
          >
            {t('specialsReviewCta', locale)}
          </Link>
          {p.quizPassed && <span role="status" className="font-rounded font-extrabold text-[13px] rounded-full bg-white/25 px-3 py-1.5">{t('quizPassed', locale)}</span>}
        </div>
      </header>

      <section aria-labelledby="inside" className="grid gap-3">
        <h2 id="inside" className="label text-muted m-0">{t('specialsInside', locale)}</h2>
        <p className="m-0 text-[14px] text-muted">
          {p.chaptersTotal} {t('specialsChapters', locale)} · {words} {t('specialsWords', locale)} · {exercises} {t('specialsExercises', locale)} · {t('quizLabel', locale)}: {p.quizTotal} {t('quizQuestions', locale)}
        </p>
        <ol className="m-0 p-0 list-none grid gap-2.5">
          {chapters.map(({ step, id }, i) => (
            <li key={id} className="flex gap-3 rounded-[16px] border border-border bg-card px-4 py-3.5">
              <span className={'grid place-items-center shrink-0 w-8 h-8 rounded-full font-rounded font-extrabold text-[14px] ' + (done.has(id) ? 'bg-[var(--good-wash)] text-[var(--good)]' : 'bg-[var(--primary-wash)] text-primary')}>{i + 1}</span>
              <div className="min-w-0">
                <h3 className="font-rounded font-bold text-[16px] text-text m-0">{pick(step.title, step.titleFr ?? step.title, locale)}</h3>
                {(step.blurb || step.blurbFr) && <p className="m-0 mt-0.5 text-[14px] text-muted leading-relaxed">{pick(step.blurb ?? '', step.blurbFr ?? step.blurb ?? '', locale)}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {related.length > 0 && (
        <section aria-labelledby="builds-on" className="grid gap-2">
          <h2 id="builds-on" className="label text-muted m-0">{t('specialsBuildsOn', locale)}</h2>
          <div className="flex flex-wrap gap-2">
            {related.map((l) => (
              <Link
                key={l.id}
                href={`/lesson/${l.id}/learn`}
                className="tap-area inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1.5 text-[13px] font-rounded font-bold text-text-2 no-underline hover:border-primary hover:text-primary"
              >
                {l.level} · L{l.number} · {l.title.de}
              </Link>
            ))}
          </div>
        </section>
      )}

      <BookRefLinks refs={special.special.bookRefs} />
    </main>
  );
}

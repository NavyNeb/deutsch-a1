'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Lesson } from '@/content/types';
import { canDoFor, stepProgress } from '@/lib/path-model';
import { genderMeta } from '@/lib/gender';
import type { ProgressState } from '@/lib/progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { GenderShape } from '@/components/ui/GenderShape';
import { LessonArt } from '@/components/ui/LessonArt';

const MAX_WORDS = 5;

export function LessonDetail({ lesson, state }: { lesson: Lesson; state: ProgressState }) {
  const { locale } = useLocale();
  const canDo = canDoFor(lesson);
  const vocab = lesson.steps.flatMap((s) => (s.kind === 'vocab' ? [s.item] : []));
  const grammar = lesson.steps.flatMap((s) => (s.kind === 'grammar' ? [s.note] : []));
  const exercises = lesson.steps.filter((s) => s.kind === 'exercise').length;
  const p = stepProgress(state, lesson);
  const started = p.done > 0 && p.done < p.total;

  return (
    <article className="relative overflow-hidden rounded-[28px] border border-border bg-card p-8">
      <div className="absolute -right-6 -top-6 w-[150px] h-[150px]"><LessonArt lesson={lesson} /></div>
      <div className="eyebrow relative">Lektion {lesson.number} · {lesson.level}</div>
      <h2 className="relative font-display font-semibold text-[40px] leading-[1.02] tracking-[-0.03em] mt-[90px] mb-1.5">{lesson.title.de}</h2>
      <p className="relative text-[15px] text-text-2 m-0">{pick(lesson.title.en, lesson.title.fr, locale)}</p>

      {canDo && (
        <div className="relative my-6 rounded-2xl bg-surface-2 px-5 py-[18px]">
          <div className="eyebrow mb-2.5">{lesson.canDo ? 'Ich kann …' : 'Schwerpunkt'}</div>
          <div className="font-display font-medium text-[20px] leading-snug">{canDo.de}</div>
          <div className="text-[13px] text-muted mt-2">{pick(canDo.en, canDo.fr, locale)}</div>
        </div>
      )}

      <div className="relative flex gap-6 my-6">
        {[
          [vocab.length, 'Wörter'],
          [grammar.length, 'Grammatik'],
          [exercises, 'Übungen'],
          [`${Math.max(1, Math.ceil(p.total * 0.5))}′`, 'Zeit'],
        ].map(([n, label]) => (
          <div key={label as string}>
            <div className="font-display font-semibold text-[30px] leading-none">{n}</div>
            <div className="text-[13px] text-muted mt-1">{label}</div>
          </div>
        ))}
      </div>

      {vocab.length > 0 && (
        <>
          <div className="eyebrow relative mb-3">Neue Wörter</div>
          <div className="relative flex flex-wrap gap-2 mb-6">
            {vocab.slice(0, MAX_WORDS).map((v) => {
              const meta = genderMeta(v.gender);
              return (
                <span
                  key={v.id}
                  className="inline-flex items-center gap-2 h-9 px-3.5 rounded-xl font-display font-medium text-[15px]"
                  style={{ background: meta ? `color-mix(in srgb, ${meta.fill} 16%, var(--s1))` : 'var(--s2)' }}
                >
                  <GenderShape gender={v.gender} size={10} />
                  {v.german}
                </span>
              );
            })}
            {vocab.length > MAX_WORDS && <span className="inline-flex items-center h-9 px-3.5 rounded-full border border-border-strong text-[13px] text-text-2">+{vocab.length - MAX_WORDS}</span>}
          </div>
        </>
      )}

      {grammar.length > 0 && (
        <>
          <div className="eyebrow relative mb-3">Grammatik</div>
          <div className="relative flex flex-wrap gap-2 mb-7">
            {grammar.map((g) => (
              <span key={g.id} className="inline-flex items-center h-[34px] px-3.5 rounded-full border border-border-strong text-[13px] text-text-2">{pick(g.title, g.titleFr, locale)}</span>
            ))}
          </div>
        </>
      )}

      <Link href={`/lesson/${lesson.id}/learn`} className="relative flex items-center justify-center gap-2.5 w-full h-[52px] rounded-full bg-cta text-cta-ink font-semibold text-[16px] no-underline transition hover:opacity-90 active:scale-[.98]">
        {started ? `${t('continue', locale)} · ${t('stepWord', locale)} ${p.done}` : t('start', locale)} <ArrowRight size={18} aria-hidden="true" />
      </Link>
    </article>
  );
}

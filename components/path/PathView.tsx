'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { lessons } from '@/content';
import type { Level } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { lessonCompletion } from '@/lib/progress';
import { LEVELS, LEVEL_NAME, chaptersForLevel, levelStats, nextLesson } from '@/lib/path-model';
import { Staircase } from './Staircase';
import { ChapterList } from './ChapterList';
import { LessonDetail } from './LessonDetail';

export function PathView() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const upNext = nextLesson(state, lessons);
  const [level, setLevel] = useState<Level>(upNext?.level ?? 'A1');
  const [picked, setPicked] = useState<string | null>(null);

  const summaries = LEVELS.map((lv) => ({ level: lv, ...levelStats(state, lessons, lv) }));
  const chapters = useMemo(() => chaptersForLevel(lessons, level), [level]);
  const inLevel = chapters.flatMap((c) => c.lessons);
  const fallback = inLevel.find((l) => lessonCompletion(state, l) < 1) ?? inLevel[0];
  const selected = inLevel.find((l) => l.id === picked) ?? fallback;
  const gloss = LEVEL_NAME[level][locale === 'fr' ? 'fr' : 'en'];

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 md:px-14 md:py-12 pb-40 lg:pb-12">
      <div className="eyebrow mb-4">Weg · {t('navPath', locale)}</div>
      <h1 className="font-display font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.03em] m-0 mb-9">Von A1 bis B2.</h1>

      <Staircase levels={summaries} selected={level} onSelect={(lv) => { setLevel(lv); setPicked(null); }} />

      <div className="flex flex-wrap lg:flex-nowrap gap-7 items-start">
        <section className="flex-[1.5_1_520px] min-w-0">
          <div className="flex justify-between items-baseline mb-4 gap-4">
            <div className="eyebrow">{level} · {gloss} · {chapters.length} {t('chaptersWord', locale)}</div>
            <div className="text-[13px] text-muted text-right">{t('pathOpenNote', locale)}</div>
          </div>
          <ChapterList chapters={chapters} state={state} selectedId={selected?.id ?? null} onSelect={setPicked} />
        </section>

        {selected && (
          <aside className="hidden lg:block flex-[1_1_340px] min-w-0 lg:sticky lg:top-8">
            <LessonDetail lesson={selected} state={state} />
          </aside>
        )}
      </div>

      {/* Phones and tablets: the selected lesson's CTA sits above the tab bar */}
      {selected && (
        <div className="lg:hidden fixed inset-x-0 bottom-[calc(68px+env(safe-area-inset-bottom))] z-30 px-4 py-3 bg-bg/90 backdrop-blur border-t border-border">
          <Link href={`/lesson/${selected.id}/learn`} className="flex items-center justify-center gap-2.5 h-[52px] rounded-full bg-cta text-cta-ink font-semibold text-[16px] no-underline">
            {t('start', locale)} · Lektion {selected.number} <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}

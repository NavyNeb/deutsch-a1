'use client';
import { Lock } from 'lucide-react';
import { lessons } from '@/content';
import type { Level } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { lessonCompletion } from '@/lib/progress';
import { LessonCard } from './LessonCard';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];

const LEVEL_NAME: Record<Level, { en: string; fr: string }> = {
  A1: { en: 'Beginner', fr: 'Débutant' },
  A2: { en: 'Elementary', fr: 'Élémentaire' },
  B1: { en: 'Intermediate', fr: 'Intermédiaire' },
  B2: { en: 'Upper intermediate', fr: 'Intermédiaire supérieur' },
};

export function LearningPath() {
  const { state } = useProgress();
  const { locale } = useLocale();

  const activeLevels = LEVELS.filter((lv) => lessons.some((l) => l.level === lv));
  const firstEmpty = LEVELS.find((lv) => !lessons.some((l) => l.level === lv));
  const shownLevels = firstEmpty && !activeLevels.includes(firstEmpty) ? [...activeLevels, firstEmpty] : activeLevels;

  return (
    <section className="mt-2">
      <h2 className="font-rounded font-extrabold text-[22px] text-text m-0 mb-5">{t('yourCourse', locale)}</h2>
      <div className="grid gap-9">
        {shownLevels.map((lv) => {
          const levelLessons = lessons.filter((l) => l.level === lv).sort((a, b) => a.number - b.number);
          const done = levelLessons.filter((l) => lessonCompletion(state, l) >= 1).length;

          return (
            <div key={lv}>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="font-rounded font-extrabold text-[13px] text-primary-ink bg-primary rounded-[10px] px-2.5 py-1">{lv}</span>
                <span className="font-rounded font-bold text-[16px] text-text">{LEVEL_NAME[lv][locale === 'fr' ? 'fr' : 'en']}</span>
                {levelLessons.length > 0 && (
                  <span className="label text-muted ml-auto tabular-nums">
                    {done}/{levelLessons.length} {t('lektionen', locale)}
                  </span>
                )}
              </div>

              {levelLessons.length > 0 ? (
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {levelLessons.map((lesson) => (
                    <LessonCard key={lesson.id} lesson={lesson} completion={lessonCompletion(state, lesson)} />
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-4 p-5 bg-card/60 border border-border border-dashed rounded-[20px] opacity-70">
                  <span className="grid place-items-center shrink-0 w-12 h-12 rounded-full bg-surface-2 text-faint">
                    <Lock size={18} strokeWidth={2.2} />
                  </span>
                  <div>
                    <span className="label">{lv}</span>
                    <p className="m-0 text-muted text-sm">{t('comingSoon', locale)}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

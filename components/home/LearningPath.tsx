'use client';
import { Lock } from 'lucide-react';
import { lessons } from '@/content';
import type { Level } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { lessonCompletion } from '@/lib/progress';
import { LessonNode } from './LessonNode';

const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2'];
const SLOTS_PER_LEVEL = 12;

const LEVEL_NAME: Record<Level, { en: string; fr: string }> = {
  A1: { en: 'Beginner', fr: 'Débutant' },
  A2: { en: 'Elementary', fr: 'Élémentaire' },
  B1: { en: 'Intermediate', fr: 'Intermédiaire' },
  B2: { en: 'Upper intermediate', fr: 'Intermédiaire supérieur' },
};

export function LearningPath() {
  const { state } = useProgress();
  const { locale } = useLocale();

  // Show every level that has authored lessons, plus the next empty level as a teaser.
  const activeLevels = LEVELS.filter((lv) => lessons.some((l) => l.level === lv));
  const firstEmpty = LEVELS.find((lv) => !lessons.some((l) => l.level === lv));
  const shownLevels = firstEmpty && !activeLevels.includes(firstEmpty) ? [...activeLevels, firstEmpty] : activeLevels;

  return (
    <div className="grid gap-9">
      {shownLevels.map((lv) => {
        const levelLessons = lessons.filter((l) => l.level === lv).sort((a, b) => a.number - b.number);
        const full = levelLessons.length >= SLOTS_PER_LEVEL;
        return (
          <div key={lv} className="grid gap-3">
            <div className="flex items-center gap-2.5 mb-0.5">
              <span className="font-rounded font-extrabold text-[13px] text-primary bg-[var(--primary-wash)] rounded-[9px] px-2.5 py-1">
                {lv}
              </span>
              <span className="font-rounded font-bold text-[15px]">{LEVEL_NAME[lv][locale === 'fr' ? 'fr' : 'en']}</span>
              {levelLessons.length > 0 && (
                <span className="label text-muted ml-auto">
                  {levelLessons.length}{full ? '' : '+'} Lektionen
                </span>
              )}
            </div>

            {levelLessons.map((lesson) => (
              <LessonNode key={lesson.id} lesson={lesson} completion={lessonCompletion(state, lesson)} />
            ))}

            {!full && (
              <div className="flex items-center gap-4 p-4 bg-card/60 border border-border border-dashed rounded-[18px] opacity-60">
                <span className="grid place-items-center shrink-0 rounded-full bg-surface-2 text-faint" style={{ width: 48, height: 48 }}>
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
  );
}

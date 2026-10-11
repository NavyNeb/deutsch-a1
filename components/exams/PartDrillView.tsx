'use client';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Board, ExamLevel, Skill } from '@/content/exams/types';
import { BOARD_LABEL, FORMATS } from '@/content/exams/formats';
import { resultKey, useExamProgress } from '@/lib/exam-progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { ExamTopBar, TranslationToggle } from './shared';

const SKILL_LABEL = { lesen: 'examLesen', schreiben: 'examSchreiben', sprechen: 'examSprechen' } as const;

export function PartDrillView({ board, level, skill, teil, sets }: {
  board: Board;
  level: ExamLevel;
  skill: Skill;
  teil: number;
  sets: number[];
}) {
  const { locale } = useLocale();
  const progress = useExamProgress();
  const fmt = FORMATS[board][level];
  const parts = skill === 'lesen' ? fmt.lesen.parts : skill === 'schreiben' ? fmt.schreiben.tasks : fmt.sprechen.parts;
  const what = parts.find((p) => p.teil === teil)?.what ?? '';
  const base = `/exams/${board}/${level.toLowerCase()}`;

  return (
    <div className="mx-auto max-w-[900px] px-5 py-8 md:py-12">
      <ExamTopBar backHref={base} backLabel={`${BOARD_LABEL[board]} ${level}`} title={`${t(SKILL_LABEL[skill], locale)} · Teil ${teil}`}>
        <TranslationToggle />
      </ExamTopBar>
      <p lang="de" className="m-0 mb-6 text-[15px] text-text-2">{what}</p>

      <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-3 md:grid-cols-4">
        {sets.map((n) => {
          const r = progress[resultKey(`${board}-${level.toLowerCase()}-${n}#${teil}`, skill)];
          return (
            <li key={n}>
              <Link
                href={`${base}/part/${skill}/${teil}/${n}`}
                className="flex min-h-[72px] flex-col justify-center rounded-[14px] border border-border bg-card px-4 py-3 no-underline text-text transition hover:border-border-strong hover:bg-surface-2"
              >
                <b className="font-rounded text-[16px]">{t('examSet', locale)} {n}</b>
                <span className="text-[12.5px] text-muted">
                  {!r ? t('examNotTried', locale)
                    : skill === 'lesen' ? `${t('examBest', locale)} ${r.best}%`
                    : <span className="inline-flex items-center gap-1"><Check size={13} />{t('examPractised', locale)}</span>}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

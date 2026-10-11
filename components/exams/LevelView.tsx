'use client';
import Link from 'next/link';
import { BookOpen, Check, Mic, PenLine } from 'lucide-react';
import type { Board, ExamLevel, ExamSet, Skill } from '@/content/exams/types';
import { BOARD_LABEL, FORMATS } from '@/content/exams/formats';
import { resultKey, useExamProgress } from '@/lib/exam-progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Card } from '@/components/ui/Card';
import { ExamTopBar, TranslationToggle } from './shared';

const SKILLS: { skill: Skill; icon: typeof BookOpen; label: 'examLesen' | 'examSchreiben' | 'examSprechen' }[] = [
  { skill: 'lesen', icon: BookOpen, label: 'examLesen' },
  { skill: 'schreiben', icon: PenLine, label: 'examSchreiben' },
  { skill: 'sprechen', icon: Mic, label: 'examSprechen' },
];

export function LevelView({ board, level, sets }: { board: Board; level: ExamLevel; sets: ExamSet[] }) {
  const { locale } = useLocale();
  const progress = useExamProgress();
  const fmt = FORMATS[board][level];

  return (
    <div className="mx-auto max-w-[900px] px-5 py-8 md:py-12">
      <ExamTopBar backHref="/exams" backLabel={t('navExams', locale)} title={`${BOARD_LABEL[board]} ${level}`}>
        <TranslationToggle />
      </ExamTopBar>

      <Card className="mb-8">
        <h2 className="font-rounded font-extrabold text-[18px] m-0 mb-1">{t('examFormat', locale)}</h2>
        <p className="m-0 mb-4 text-[14px] text-muted">{fmt.name} · {t('examPassMark', locale)} {fmt.passPercent}%</p>
        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <p className="m-0 mb-1.5 font-rounded font-bold text-[14px]">{t('examLesen', locale)} · {fmt.lesen.minutes} {t('examMinutes', locale)}</p>
            <ul className="m-0 list-none p-0 text-[13.5px] leading-relaxed text-text-2">
              {fmt.lesen.parts.map((p) => <li key={p.teil} lang="de">Teil {p.teil}: {p.what} ({p.items})</li>)}
            </ul>
          </div>
          <div>
            <p className="m-0 mb-1.5 font-rounded font-bold text-[14px]">{t('examSchreiben', locale)} · {fmt.schreiben.minutes} {t('examMinutes', locale)}</p>
            <ul className="m-0 list-none p-0 text-[13.5px] leading-relaxed text-text-2">
              {fmt.schreiben.tasks.map((p) => <li key={p.teil} lang="de">Teil {p.teil}: {p.what}{p.words ? ` (${p.words})` : ''}</li>)}
            </ul>
          </div>
          <div>
            <p className="m-0 mb-1.5 font-rounded font-bold text-[14px]">{t('examSprechen', locale)} · {fmt.sprechen.minutes} {t('examMinutes', locale)}</p>
            <ul className="m-0 list-none p-0 text-[13.5px] leading-relaxed text-text-2">
              {fmt.sprechen.parts.map((p) => <li key={p.teil} lang="de">Teil {p.teil}: {p.what}</li>)}
            </ul>
          </div>
        </div>
        <p className="m-0 mt-4 text-[12.5px] leading-relaxed text-faint">
          {t(fmt.verified ? 'examsDisclaimer' : 'examsDisclaimerSoft', locale)}
        </p>
      </Card>

      {sets.length > 0 && (
        <section className="mb-10">
          <h2 className="font-rounded font-extrabold text-[20px] m-0 mb-1">{t('examDrillTitle', locale)}</h2>
          <p className="m-0 mb-4 text-[14px] text-muted">{t('examDrillHint', locale)}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {SKILLS.map(({ skill, icon: Icon, label }) => {
              const parts = skill === 'lesen' ? fmt.lesen.parts : skill === 'schreiben' ? fmt.schreiben.tasks : fmt.sprechen.parts;
              return (
                <Card key={skill}>
                  <p className="m-0 mb-3 flex items-center gap-2 font-rounded font-extrabold text-[16px]">
                    <Icon size={18} className="text-primary" />{t(label, locale)}
                  </p>
                  <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {parts.map((p) => (
                      <li key={p.teil}>
                        <Link
                          href={`/exams/${board}/${level.toLowerCase()}/part/${skill}/${p.teil}`}
                          className="flex min-h-[44px] items-center justify-between gap-3 rounded-[12px] border border-border bg-surface-2 px-3.5 py-2 no-underline text-text transition hover:border-border-strong hover:bg-card"
                        >
                          <span lang="de" className="min-w-0 truncate text-[14px]"><b className="mr-1.5 font-rounded">Teil {p.teil}</b><span className="text-muted">{p.what}</span></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </section>
      )}

      <h2 className="font-rounded font-extrabold text-[20px] m-0 mb-4">{t('examFullSets', locale)}</h2>
      {sets.length === 0 ? (
        <p className="text-text-2">{t('examComingSoon', locale)}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {sets.map((set) => (
            <Card key={set.id}>
              <h3 className="font-rounded font-extrabold text-[20px] m-0 mb-4">{t('examSet', locale)} {set.number}</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {SKILLS.map(({ skill, icon: Icon, label }) => {
                  const r = progress[resultKey(set.id, skill)];
                  return (
                    <Link
                      key={skill}
                      href={`/exams/${board}/${level.toLowerCase()}/${set.number}/${skill}`}
                      className="flex min-h-[64px] items-center gap-3 rounded-[14px] border border-border bg-surface-2 px-4 py-3 no-underline text-text transition hover:border-border-strong hover:bg-card"
                    >
                      <Icon size={20} className="shrink-0 text-primary" />
                      <span className="min-w-0">
                        <b className="block font-rounded text-[15px]">{t(label, locale)}</b>
                        <span className="block text-[12.5px] text-muted">
                          {!r ? t('examNotTried', locale)
                            : skill === 'lesen' ? `${t('examBest', locale)} ${r.best}%`
                            : <span className="inline-flex items-center gap-1"><Check size={13} />{t('examPractised', locale)}</span>}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

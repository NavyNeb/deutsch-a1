'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BOARD_LABEL, BOARDS, EXAM_LEVELS, FORMATS } from '@/content/exams/formats';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Card } from '@/components/ui/Card';

export function ExamsHub({ counts }: { counts: Record<string, number> }) {
  const { locale } = useLocale();
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-8 md:py-12">
      <header className="mb-8 max-w-[64ch]">
        <h1 className="font-rounded font-extrabold text-[clamp(30px,5vw,44px)] leading-[1.05] tracking-[-0.02em] m-0">{t('examsTitle', locale)}</h1>
        <p className="text-text-2 text-[17px] leading-relaxed mt-3 mb-0">{t('examsSubtitle', locale)}</p>
      </header>

      {BOARDS.map((board) => (
        <section key={board} className="mb-10">
          <h2 className="font-rounded font-extrabold text-[24px] m-0 mb-4">{BOARD_LABEL[board]}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXAM_LEVELS.map((level) => {
              const fmt = FORMATS[board][level];
              const count = counts[`${board}-${level}`] ?? 0;
              return (
                <Link key={level} href={`/exams/${board}/${level.toLowerCase()}`} className="no-underline text-text">
                  <Card interactive className="h-full">
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-rounded font-extrabold text-[34px] leading-none text-primary">{level}</span>
                      <ArrowRight size={18} className="mt-1 text-muted" />
                    </div>
                    <p className="m-0 mt-3 font-rounded font-bold text-[16px]">{fmt.name}</p>
                    <p className="m-0 mt-2 text-[14px] text-muted">
                      {t('examLesen', locale)} {fmt.lesen.minutes} · {t('examSchreiben', locale)} {fmt.schreiben.minutes} · {t('examSprechen', locale)} {fmt.sprechen.minutes} {t('examMinutes', locale)}
                    </p>
                    <p className="m-0 mt-3 text-[13.5px] font-rounded font-bold text-text-2">
                      {count > 0 ? `${count} ${t('examSets', locale)}` : t('examComingSoon', locale)}
                    </p>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      ))}

      <p className="m-0 max-w-[70ch] text-[13px] leading-relaxed text-faint">{t('examsDisclaimer', locale)}</p>
    </div>
  );
}

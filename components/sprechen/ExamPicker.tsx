'use client';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BadgeCheck } from 'lucide-react';
import { BOARD_NAMES, SPEAK_EXAMS } from '@/content/sprechen/exam-formats';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { useExamProgress } from '@/lib/exam-progress';
import { Card } from '@/components/ui/Card';

export function ExamPicker() {
  const { locale } = useLocale();
  const progress = useExamProgress();
  return (
    <div className="mx-auto max-w-[860px] px-5 py-8 md:py-12">
      <Link href="/speak" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('backToHub', locale)}</Link>
      <h1 className="font-display font-extrabold text-[30px] md:text-[40px] m-0 mt-2">{sc('examTitle', locale)}</h1>
      <p className="text-text-2 text-[16px] leading-relaxed mt-2 mb-2 max-w-[60ch]">{sc('examTag', locale)}</p>
      <p className="text-muted text-[13.5px] mb-6 max-w-[64ch]">{sc('examAlone', locale)}</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {SPEAK_EXAMS.map((e) => {
          const r = progress[`sim-${e.id}:sprechen`];
          return (
            <Link key={e.id} href={`/speak/exam/${e.id}`} className="no-underline text-text">
              <Card interactive className="h-full !p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="label text-muted m-0">{BOARD_NAMES[e.board]} · {e.level}</p>
                    <h2 className="font-display font-extrabold text-[19px] m-0 mt-1">{e.name}</h2>
                  </div>
                  <span className="text-muted text-[13px] shrink-0">~{e.minutes} {sc('examMinutes', locale)}</span>
                </div>
                <ol className="m-0 pl-5 text-[14.5px] text-text-2 grid gap-1">
                  {e.parts.map((p) => <li key={p.id}>{p.title.de}<span className="text-muted"> — {pick(p.title.en, p.title.fr, locale)}</span></li>)}
                </ol>
                <p className="text-muted text-[12.5px] m-0 flex items-start gap-1.5">
                  {e.verified && <BadgeCheck size={14} className="mt-0.5 shrink-0 text-[var(--ok-t)]" />}
                  <span>{e.verified ? sc('examVerified', locale) : sc('examUnverified', locale)}</span>
                </p>
                <div className="flex items-center justify-between mt-auto text-[14px] font-display font-bold">
                  <span>{r ? `${sc('examSelfScore', locale)}: ${r.last}% (${r.best}%)` : sc('examStart', locale)}</span>
                  <ArrowRight size={16} strokeWidth={2.5} />
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

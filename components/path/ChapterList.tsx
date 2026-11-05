'use client';
import { useEffect, useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import type { Lesson } from '@/content/types';
import type { Chapter } from '@/lib/path-model';
import { stepProgress } from '@/lib/path-model';
import { lessonCompletion, type ProgressState } from '@/lib/progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

type Status = 'done' | 'current' | 'todo';
const statusOf = (state: ProgressState, l: Lesson): Status => {
  const c = lessonCompletion(state, l);
  return c >= 1 ? 'done' : c > 0 ? 'current' : 'todo';
};

function Ring({ status, number }: { status: Status; number: number }) {
  if (status === 'done') {
    return <span aria-hidden="true" className="grid place-items-center shrink-0 w-9 h-9 rounded-full bg-text text-bg"><Check size={16} strokeWidth={2.6} /></span>;
  }
  return (
    <span aria-hidden="true" className={'grid place-items-center shrink-0 w-9 h-9 rounded-full border-2 text-[12px] font-semibold ' + (status === 'current' ? 'border-text text-text' : 'border-border-strong text-muted')}>
      {number}
    </span>
  );
}

export function ChapterList({ chapters, state, selectedId, onSelect }: { chapters: Chapter[]; state: ProgressState; selectedId: string | null; onSelect: (lessonId: string) => void }) {
  const { locale } = useLocale();
  const containing = chapters.find((c) => c.lessons.some((l) => l.id === selectedId))?.key ?? chapters[0]?.key ?? null;
  const [open, setOpen] = useState<string | null>(containing);
  useEffect(() => { setOpen(containing); }, [containing]);

  return (
    <div className="flex flex-col gap-3">
      {chapters.map((c) => {
        const done = c.lessons.filter((l) => lessonCompletion(state, l) >= 1).length;
        const complete = done === c.lessons.length;
        const expanded = open === c.key;
        const first = c.lessons[0].number;
        const last = c.lessons[c.lessons.length - 1].number;
        return (
          <section key={c.key} className={'rounded-[20px] border bg-card ' + (expanded ? 'border-border-strong p-3' : 'border-border')}>
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? null : c.key)}
              className="w-full flex items-center gap-[18px] px-3 py-4 bg-transparent border-0 text-left cursor-pointer text-text"
            >
              {complete ? <Ring status="done" number={c.module} /> : <Ring status="todo" number={c.module} />}
              <span className="flex-1 min-w-0">
                <span className="block font-display font-semibold text-[24px] leading-tight">{c.name.de}</span>
                <span className="block text-[13px] text-muted">{pick(c.name.en, c.name.fr, locale)} · L{first}{last !== first ? `–${last}` : ''}</span>
              </span>
              <span className="text-[13px] text-muted tabular-nums">{done} / {c.lessons.length}</span>
              <ChevronDown size={18} aria-hidden="true" className={'text-muted transition-transform ' + (expanded ? 'rotate-180' : '')} />
            </button>

            {expanded && (
              <div className="flex flex-col">
                {c.lessons.map((l) => {
                  const status = statusOf(state, l);
                  const p = stepProgress(state, l);
                  const sel = l.id === selectedId;
                  return (
                    <button
                      key={l.id}
                      type="button"
                      data-status={status}
                      aria-current={sel ? 'true' : undefined}
                      onClick={() => onSelect(l.id)}
                      className={'flex items-center gap-[18px] px-6 py-4 rounded-2xl border-0 text-left cursor-pointer text-text transition-colors ' + (sel ? 'bg-surface-2 outline outline-1 outline-border-strong' : 'bg-transparent hover:bg-surface-2')}
                    >
                      <Ring status={status} number={l.number} />
                      <span className="flex-1 min-w-0">
                        <span className={'block font-display text-[22px] leading-tight ' + (status === 'todo' ? 'font-medium' : 'font-semibold')}>{l.title.de}</span>
                        <span className="block text-[13px] text-muted">
                          {pick(l.title.en, l.title.fr, locale)}{status === 'current' ? ` · ${t('stepWord', locale)} ${p.done} ${t('ofWord', locale)} ${p.total}` : ''}
                        </span>
                      </span>
                      <span className="text-[13px] font-semibold text-text-2 shrink-0">
                        {status === 'done' ? t('review', locale) : status === 'current' ? t('continue', locale) : `~${p.minutesLeft} min`}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

'use client';
import { useEffect, useRef } from 'react';
import { ArrowRight, Gauge, Languages, ListTree, Mic, PenLine, Play, Star, X, type LucideIcon } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pickL } from '@/lib/kumpel-copy';
import { lessonHelpFor, type HelpItemKey, type StepKind } from '@/lib/lesson-help';
import { GenderShape } from '@/components/ui/GenderShape';
import { KumpelFace } from './KumpelFace';

const ICON: Record<HelpItemKey, LucideIcon> = {
  play: Play, speak: Mic, save: Star, move: ArrowRight, translate: Languages, contents: ListTree, speed: Gauge, answer: PenLine,
};

/**
 * Help written for the exact kind of card the learner is on. Opened by the "?" in the lesson top bar.
 * It opens over a scrim, beside the bar, so it never sits on top of the word.
 */
export function LessonHelp({ kind, onClose }: { kind: StepKind; onClose: () => void }) {
  const { locale } = useLocale();
  const help = lessonHelpFor(kind);
  const ref = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; });

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    return () => { previous?.focus?.(); };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onCloseRef.current(); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !ref.current) return;
    const items = Array.from(ref.current.querySelectorAll<HTMLElement>('button:not([disabled])'));
    if (!items.length) { e.preventDefault(); return; }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === ref.current)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  };

  return (
    <div className="fixed inset-0 z-[45]">
      <button
        type="button"
        data-testid="lesson-help-scrim"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 w-full border-0 cursor-default bg-black/45"
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={t('lessonHelpOpen', locale)}
        tabIndex={-1}
        onKeyDown={trapTab}
        className={
          'kumpel-fade absolute inset-x-0 bottom-0 max-h-[88dvh] overflow-y-auto outline-none ' +
          'rounded-t-[28px] border border-b-0 border-border-strong bg-card shadow-pop px-6 pt-[22px] pb-[calc(20px+env(safe-area-inset-bottom))] ' +
          'sm:inset-x-auto sm:bottom-auto sm:right-10 sm:top-[84px] sm:w-[420px] sm:rounded-[28px] sm:border-b sm:pb-5'
        }
      >
        <div className="flex items-center gap-3 mb-1.5">
          <KumpelFace mood="point" size={38} />
          <div className="eyebrow flex-1">Kumpel · Hilfe</div>
          <kbd className="hidden sm:inline text-[12px] text-muted border border-border-strong rounded-md px-2 py-0.5">esc</kbd>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('kumpelClose', locale)}
            className="grid place-items-center w-11 h-11 rounded-full border border-border-strong bg-transparent text-text cursor-pointer hover:bg-surface-2"
          >
            <X size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>
        <h2 className="mt-2.5 mb-3 font-display font-semibold text-[26px] leading-[1.1] tracking-[-0.02em]">{pickL(help.title, locale)}</h2>

        <ul className="m-0 p-0 list-none">
          {help.items.map((item) => {
            const Icon = ICON[item.key];
            return (
              <li key={item.key} className="flex items-center gap-3.5 py-[11px] border-b border-border last:border-b-0">
                <span className="grid place-items-center w-9 h-9 shrink-0 rounded-full border border-border-strong text-text">
                  <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-semibold text-[15px]">{item.de}</span>
                  <span className="block text-[13px] text-text-2 mt-0.5">{pickL(item.text, locale)}</span>
                </span>
                {item.shortcut && (
                  <span className="shrink-0">
                    {item.shortcut.map((k) => (
                      <kbd key={k} className="ml-1.5 text-[12px] text-text-2 border border-border-strong rounded-md px-2 py-0.5">{k}</kbd>
                    ))}
                  </span>
                )}
              </li>
            );
          })}
        </ul>

        <div className="mt-3.5 flex items-center gap-4 rounded-2xl bg-surface-2 px-4 py-3.5">
          <span className="flex items-end gap-2" aria-hidden="true">
            <GenderShape gender="der" size={16} />
            <GenderShape gender="die" size={16} />
            <GenderShape gender="das" size={16} />
          </span>
          <p className="m-0 text-[13px] leading-[1.45] text-text-2">
            <b className="text-text">{t('lessonHelpGrammarLead', locale)}</b> {t('lessonHelpGrammarNote', locale)}
          </p>
        </div>

        <p className="mt-3.5 mb-0 text-[12px] text-muted">{t('lessonHelpFooter', locale)}</p>
      </div>
    </div>
  );
}

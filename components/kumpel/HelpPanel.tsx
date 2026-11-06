'use client';
import { useEffect, useRef, useState } from 'react';
import { Play, X } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { PAGE_HELP, pickL } from '@/lib/kumpel-copy';
import type { PageGroupId } from '@/lib/kumpel-pages';
import { useKumpel } from '@/lib/kumpel-store';
import { KumpelFace } from './KumpelFace';

type Props = {
  group: PageGroupId;
  tab: 'here' | 'ask';
  onTab: (tab: 'here' | 'ask') => void;
  onClose: () => void;
  onStartTour: () => void;
};

/** Help for the current page: a popover beside the buddy on desktop, a bottom sheet on phones. */
export function HelpPanel({ group, tab, onTab, onClose, onStartTour }: Props) {
  const { locale } = useLocale();
  const { state } = useKumpel();
  const help = PAGE_HELP[group];
  const ref = useRef<HTMLDivElement>(null);
  const [openQ, setOpenQ] = useState<number | null>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; });

  // Move focus in, and hand it back to whatever opened the panel.
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
    const items = Array.from(ref.current.querySelectorAll<HTMLElement>('button:not([disabled]), [tabindex="0"]'));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === ref.current)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  };

  const side = state.side === 'left' ? 'md:left-[288px]' : 'md:right-6';
  const chips = help.questions.slice(0, 3);

  return (
    <div className="fixed inset-0 z-[45]">
      <button
        type="button"
        data-testid="kumpel-scrim"
        aria-hidden="true"
        tabIndex={-1}
        onClick={onClose}
        className="absolute inset-0 w-full border-0 cursor-default bg-black/55 md:bg-transparent"
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        aria-label={t('kumpelHelpLabel', locale)}
        tabIndex={-1}
        onKeyDown={trapTab}
        className={
          'kumpel-panel absolute inset-x-0 bottom-0 flex flex-col outline-none ' +
          'max-h-[min(610px,88dvh)] rounded-t-[30px] border border-b-0 border-border-strong bg-card shadow-pop ' +
          'pb-[env(safe-area-inset-bottom)] ' +
          `md:inset-x-auto md:bottom-[100px] md:w-[400px] md:h-[552px] md:max-h-[calc(100dvh-124px)] md:rounded-[28px] md:border-b md:pb-0 ${side}`
        }
      >
        <div className="md:hidden mx-auto mt-2.5 h-[5px] w-10 rounded-[3px] bg-surface-3" aria-hidden="true" />

        <div className="flex items-center gap-3 px-5 pt-3.5 pb-2.5">
          <KumpelFace mood="point" size={40} />
          <div className="flex-1 min-w-0">
            <div className="font-display font-semibold text-[22px] leading-none">Kumpel</div>
            <div className="text-[12px] text-muted mt-1">{t('kumpelYourBuddyOn', locale)} {help.de}</div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t('kumpelClose', locale)}
            className="grid place-items-center w-11 h-11 rounded-full border border-border-strong bg-transparent text-text cursor-pointer hover:bg-surface-2"
          >
            <X size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <div role="tablist" className="flex gap-1 mx-5 p-1 rounded-full bg-surface-2">
          {(['here', 'ask'] as const).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={tab === k}
              onClick={() => onTab(k)}
              className={
                'flex-1 h-11 rounded-full border-0 text-[14px] font-semibold cursor-pointer transition-colors ' +
                (tab === k ? 'bg-surface-3 text-text' : 'bg-transparent text-text-2 hover:text-text')
              }
            >
              {t(k === 'here' ? 'kumpelThisPage' : 'kumpelQuestions', locale)}
            </button>
          ))}
        </div>

        <div role="tabpanel" className="flex-1 min-h-0 overflow-y-auto px-[22px] pt-[18px] pb-3">
          {tab === 'here' ? (
            <>
              <div className="eyebrow mb-2.5">Diese Seite · {help.de}</div>
              <p className="m-0 mb-[18px] text-[15px] leading-[1.55] text-text-2">{pickL(help.purpose, locale)}</p>
              <ol className="m-0 p-0 list-none grid gap-3.5">
                {help.steps.map((p, i) => (
                  <li key={p.title.en} className="flex gap-3.5">
                    <span className="grid place-items-center w-7 h-7 shrink-0 rounded-full border-[1.5px] border-border-strong font-display font-semibold text-[13px] text-text-2" aria-hidden="true">{i + 1}</span>
                    <div>
                      <div className="font-display font-semibold text-[18px] leading-tight">{pickL(p.title, locale)}</div>
                      <div className="text-[14px] leading-[1.5] text-text-2 mt-0.5">{pickL(p.text, locale)}</div>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          ) : (
            <ul className="m-0 p-0 list-none">
              {help.questions.map((item, i) => {
                const on = openQ === i;
                return (
                  <li key={item.q.en} className="border-b border-border last:border-b-0">
                    <button
                      type="button"
                      aria-expanded={on}
                      onClick={() => setOpenQ(on ? null : i)}
                      className="w-full min-h-12 py-3 text-left bg-transparent border-0 cursor-pointer text-text font-display font-semibold text-[18px]"
                    >
                      {pickL(item.q, locale)}
                    </button>
                    {on && <p className="m-0 pb-4 text-[14px] leading-[1.55] text-text-2">{pickL(item.a, locale)}</p>}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="px-5 pt-3.5 pb-6 md:pb-5 border-t border-border">
          {tab === 'here' && (
            <div className="flex flex-wrap gap-2 mb-3.5">
              {chips.map((c, i) => (
                <button
                  key={c.q.en}
                  type="button"
                  data-testid="kumpel-chip"
                  onClick={() => { setOpenQ(i); onTab('ask'); }}
                  className="inline-flex items-center min-h-11 px-4 rounded-full border border-border-strong bg-transparent text-text text-[14px] font-medium cursor-pointer hover:bg-surface-2"
                >
                  {pickL(c.q, locale)}
                </button>
              ))}
            </div>
          )}
          <button
            type="button"
            onClick={onStartTour}
            className="w-full h-14 inline-flex items-center justify-center gap-2.5 rounded-full border-0 bg-cta text-cta-ink font-semibold text-[16px] cursor-pointer"
          >
            <Play size={18} strokeWidth={1.8} aria-hidden="true" fill="currentColor" />
            Tour starten · {help.de}
          </button>
        </div>
      </div>
    </div>
  );
}

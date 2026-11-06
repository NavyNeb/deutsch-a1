'use client';
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useReducedMotion } from 'framer-motion';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pickL } from '@/lib/kumpel-copy';
import { useKumpel } from '@/lib/kumpel-store';
import { availableStops, lastStop, stopLabel, type TourStop } from '@/lib/kumpel-tour';
import { findTarget, placeCard, targetRect, type Rect } from '@/lib/kumpel-targets';
import { KumpelFace } from './KumpelFace';

const WAIT_MS = 1500;
const POLL_MS = 50;

/**
 * The spotlight tour. It always runs on Heute: from any other page it navigates there first and waits
 * (up to 1.5s) for the targets. Stops whose target is absent or hidden are skipped, never an error.
 */
export function Tour({ onClose }: { onClose: (reason: 'done' | 'skip') => void }) {
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = useLocale();
  const { state } = useKumpel();
  const calm = useReducedMotion() || state.motion === 'calm';

  const [stops, setStops] = useState<TourStop[] | null>(null);
  const [index, setIndex] = useState(0);
  const [rect, setRect] = useState<Rect | null>(null);
  const [view, setView] = useState({ w: 1280, h: 800 });
  const cardRef = useRef<HTMLDivElement>(null);
  const onCloseRef = useRef(onClose);
  const routerRef = useRef(router);
  useEffect(() => { onCloseRef.current = onClose; routerRef.current = router; });
  const startPath = useRef(pathname);

  // Remember who had focus so it can go back when the tour ends.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    return () => { previous?.focus?.(); };
  }, []);

  // Find the stops: straight away on Heute, or after navigating there.
  useEffect(() => {
    const needsNav = startPath.current !== '/';
    if (needsNav) routerRef.current.push('/');
    const present = (target: string) => findTarget(target) !== null;
    const attempt = (final: boolean): boolean => {
      const ready = !needsNav || (present('continue') && present('goal'));
      if (!ready && !final) return false;
      const list = availableStops(present);
      if (list.length === 0) onCloseRef.current('skip');
      else setStops(list);
      return true;
    };
    if (attempt(false)) return;
    const started = Date.now();
    const timer = setInterval(() => {
      if (attempt(Date.now() - started >= WAIT_MS)) clearInterval(timer);
    }, POLL_MS);
    return () => clearInterval(timer);
  }, []);

  const total = stops?.length ?? 0;
  const i = Math.min(index, Math.max(total - 1, 0));
  const stop = stops ? stops[i] : undefined;

  // Every stop vanished (for example the window shrank to a phone): nothing left to show.
  useEffect(() => {
    if (stops && stops.length === 0) onCloseRef.current('skip');
  }, [stops]);

  const measure = useCallback(() => {
    if (!stop) return;
    const el = findTarget(stop.target);
    if (!el) { setStops((s) => (s ? s.filter((x) => x.id !== stop.id) : s)); return; }
    setRect(targetRect(el));
    setView({ w: window.innerWidth, h: window.innerHeight });
  }, [stop]);

  useLayoutEffect(() => {
    if (!stop) return;
    findTarget(stop.target)?.scrollIntoView?.({ block: 'nearest' });
    // Reading the target's layout is syncing with the DOM, which is what effects are for.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('scroll', measure, true);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', measure, true);
    };
  }, [stop, measure]);

  const phone = view.w < 768;
  // The card is about 360×260 on desktop; placing it from that estimate avoids a measure-then-move flicker.
  const cardPos = rect && !phone ? placeCard(rect, view.w, view.h, 360, 260) : null;

  const shown = !!(stop && rect);
  useEffect(() => {
    if (shown) cardRef.current?.focus();
  }, [shown, i]);

  const goNext = useCallback(() => {
    if (lastStop(i, total)) onCloseRef.current('done');
    else setIndex(i + 1);
  }, [i, total]);
  const goPrev = useCallback(() => { if (i > 0) setIndex(i - 1); }, [i]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onCloseRef.current('skip'); return; }
      if (!shown) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); goPrev(); }
      else if (e.key === 'Enter') {
        // A focused button handles Enter itself; do not also advance.
        if (e.target instanceof HTMLElement && e.target.closest('button, a')) return;
        e.preventDefault();
        goNext();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [shown, goNext, goPrev]);

  const trapTab = (e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !cardRef.current) return;
    const items = Array.from(cardRef.current.querySelectorAll<HTMLElement>('button:not([disabled])'));
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || active === cardRef.current)) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
  };

  if (!stop || !rect || !stops) return null;

  // On phones the card docks where it hides the least: above the target, or below it (clear of the 84px tab bar).
  const dockTop = rect.top - 16 > view.h - (rect.top + rect.height) - 84;
  const isLast = lastStop(i, total);

  return (
    <div className="fixed inset-0 z-[45]">
      {/* blocks the page underneath so a stray tap cannot navigate away mid-tour */}
      <div aria-hidden="true" className="absolute inset-0" />
      <div
        data-testid="kumpel-spotlight"
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
          borderRadius: stop.id === 'kumpel' ? 9999 : 28,
          boxShadow: '0 0 0 2000px rgba(0,0,0,0.68), 0 0 0 2px var(--t1)',
          transition: calm ? undefined : 'top .25s ease, left .25s ease, width .25s ease, height .25s ease',
        }}
      />
      <div
        ref={cardRef}
        role="dialog"
        aria-label={t('kumpelTourLabel', locale)}
        tabIndex={-1}
        onKeyDown={trapTab}
        style={!phone && cardPos ? { top: cardPos.top, left: cardPos.left } : undefined}
        className={
          'absolute outline-none rounded-[26px] border border-border-strong bg-card shadow-pop px-[22px] pt-5 pb-[18px] ' +
          (phone
            ? 'inset-x-4 ' + (dockTop ? 'top-[calc(16px+env(safe-area-inset-top))]' : 'bottom-[calc(84px+env(safe-area-inset-bottom))]')
            : 'w-[360px]')
        }
      >
        <div className="flex items-center gap-3 mb-3">
          <KumpelFace mood="point" size={36} />
          <div className="eyebrow flex-1">{stopLabel(i, total)}</div>
          <button
            type="button"
            onClick={() => onClose('skip')}
            className="min-h-11 px-2 bg-transparent border-0 text-[13px] font-medium text-muted cursor-pointer hover:text-text"
          >
            Überspringen
          </button>
        </div>
        <h2 className="m-0 font-display font-semibold text-[26px] leading-[1.1] tracking-[-0.02em]">{stop.de}</h2>
        <p className="mt-2 mb-4 text-[14.5px] leading-[1.5] text-text-2">{pickL(stop.body, locale)}</p>
        <div className="flex items-center gap-3">
          <ol className="flex flex-1 gap-1.5 m-0 p-0 list-none">
            {stops.map((s, k) => (
              <li
                key={s.id}
                aria-current={k === i ? 'step' : undefined}
                className={'w-[7px] h-[7px] rounded-full ' + (k === i ? 'bg-text' : 'bg-surface-3')}
              />
            ))}
          </ol>
          {i > 0 && (
            <button
              type="button"
              onClick={goPrev}
              className="h-11 px-5 rounded-full border border-border-strong bg-transparent text-text text-[15px] font-semibold cursor-pointer hover:bg-surface-2"
            >
              Zurück
            </button>
          )}
          <button
            type="button"
            onClick={goNext}
            className="h-11 px-[22px] rounded-full border-0 bg-cta text-cta-ink text-[15px] font-semibold cursor-pointer"
          >
            {isLast ? 'Fertig' : 'Weiter'}
          </button>
        </div>
      </div>
    </div>
  );
}

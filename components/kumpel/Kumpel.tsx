'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from 'framer-motion';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { PAGE_HELP } from '@/lib/kumpel-copy';
import { isHelloDue, localDay, useKumpel } from '@/lib/kumpel-store';
import type { PageGroupId } from '@/lib/kumpel-pages';
import type { TourScope } from '@/lib/kumpel-tour';
import { useKumpelAvailable } from '@/lib/kumpel-available';
import { useSettings } from '@/lib/settings-store';
import { KUMPEL_EVENT, openKumpel, type KumpelOpenDetail } from '@/lib/kumpel-events';
import { KumpelFace } from './KumpelFace';
import { HelpPanel } from './HelpPanel';
import { Tour } from './Tour';
import { Hello } from './Hello';
import { Offer } from './Offer';

type Panel = 'closed' | 'here' | 'ask';

// Phones: above the tab bar. Some pages have their own fixed or sticky bottom bar there (the path's start-lesson bar,
// the editor's and the exam task's action bar), so on those the buddy sits above it.
const BOTTOM = 'bottom-[calc(88px+env(safe-area-inset-bottom))] md:bottom-6';
const BOTTOM_PATH = 'bottom-[calc(168px+env(safe-area-inset-bottom))] md:bottom-[calc(160px+env(safe-area-inset-bottom))] lg:bottom-6';
const BOTTOM_RAISED = 'bottom-[calc(168px+env(safe-area-inset-bottom))] md:bottom-24';
const RAISED_GROUPS: PageGroupId[] = ['write', 'examTask'];

export function Kumpel() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const { state, update, markSeen, finishHello, snoozeHello, muteForever } = useKumpel();
  const { settings } = useSettings();
  const { group, on } = useKumpelAvailable();
  const calm = useReducedMotion() || state.motion === 'calm';
  const [panel, setPanel] = useState<Panel>('closed');
  const [tour, setTour] = useState<TourScope | null>(null);
  const [announce, setAnnounce] = useState('');
  const [offer, setOffer] = useState<PageGroupId | null>(null);
  const [helloOpen, setHelloOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const groupRef = useRef(group);
  useEffect(() => { groupRef.current = group; });

  // A new page starts with the panel closed (adjusting state while rendering, as React recommends).
  const [panelPath, setPanelPath] = useState(pathname);
  if (panelPath !== pathname) { setPanelPath(pathname); setPanel('closed'); }

  const onOpen = useCallback((e: Event) => {
    if (!groupRef.current) return;
    const detail = (e as CustomEvent<KumpelOpenDetail | null>).detail;
    if (detail?.tour) { setPanel('closed'); setAnnounce(''); setTour(detail.tour === 'app' ? 'app' : 'page'); return; }
    setPanel(detail?.tab === 'ask' ? 'ask' : 'here');
  }, []);
  useEffect(() => {
    window.addEventListener(KUMPEL_EVENT, onOpen);
    return () => window.removeEventListener(KUMPEL_EVENT, onOpen);
  }, [onOpen]);

  const closePanel = useCallback(() => {
    setPanel('closed');
    btnRef.current?.focus();
  }, []);

  const closeTour = useCallback((reason: 'done' | 'skip') => {
    // Meeting Kumpel at all counts as the hello; only finishing the app tour counts as a completed tour.
    update(reason === 'done' && tour === 'app' ? { tourDone: true, welcomed: true } : { welcomed: true });
    setTour(null);
    if (reason === 'done') setAnnounce(t('kumpelTourEnd', locale));
    btnRef.current?.focus();
  }, [update, locale, tour]);

  // The hello: once, on Heute, for someone who has started learning and answered the pace question.
  // It stays open for this visit once it has appeared, and showing it counts as "Später" so it never returns by itself today.
  const helloDue = on && group === 'today' && settings.onboarded && isHelloDue(state, localDay(new Date()));
  if (helloDue && !helloOpen && panel === 'closed' && !tour) setHelloOpen(true);
  if (helloOpen && (!on || group !== 'today' || panel !== 'closed' || tour)) setHelloOpen(false);
  useEffect(() => {
    if (helloOpen) snoozeHello(false);
  }, [helloOpen, snoozeHello]);
  const helloShown = helloOpen;

  // The first time each kind of page is visited, offer its tour. Heute has the hello instead.
  const offerWanted =
    on && !!group && group !== 'today' && state.hints &&
    panel === 'closed' && !tour && !helloShown && !state.seen.includes(group);
  if (offerWanted && offer !== group) { setOffer(group); setAnnounce(t('kumpelOfferBody', locale)); }
  if (offer && offer !== group && !offerWanted) setOffer(null);
  // It is remembered the moment it shows, so a reload or a second tab never repeats it.
  useEffect(() => {
    if (offer && offer === group) markSeen(offer);
  }, [offer, group, markSeen]);

  if (!on || !group) return null;

  // On the left the buddy and its cards clear the 264px rail (288px = rail + a 24px gutter).
  const left = state.side === 'left';
  const side = left ? 'md:left-[288px]' : 'md:right-6';
  const bottom = group === 'path' ? BOTTOM_PATH : RAISED_GROUPS.includes(group) ? BOTTOM_RAISED : BOTTOM;
  const offerSide = left ? 'md:right-auto md:left-[368px]' : 'md:right-[104px]';
  const helloSide = left ? 'md:right-auto md:left-[288px]' : 'md:left-auto md:right-6';
  const showOffer = offer === group && panel === 'closed' && !tour && !helloShown;
  return (
    <>
    <button
      ref={btnRef}
      type="button"
      data-kumpel="kumpel"
      aria-label={t('kumpelOpen', locale)}
      aria-expanded={panel !== 'closed'}
      aria-haspopup="dialog"
      onClick={() => setPanel((p) => (p === 'closed' ? 'here' : 'closed'))}
      className={
        `fixed z-30 right-4 ${side} ${bottom} ` +
        'grid place-items-center w-[52px] h-[52px] md:w-16 md:h-16 rounded-full border-0 bg-transparent p-0 cursor-pointer ' +
        'drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-transform ' + (calm ? '' : 'hover:-translate-y-0.5')
      }
    >
      {!calm && <span data-testid="kumpel-ring" aria-hidden="true" className="kumpel-ring absolute inset-0 rounded-full border-2 border-text pointer-events-none" />}
      <KumpelFace mood={helloShown ? 'smile' : 'rest'} size={64} className={'relative w-full h-full ' + (helloShown && !calm ? 'kumpel-bob' : '')} />
    </button>
    <div data-testid="kumpel-announce" role="status" aria-live="polite" className="sr-only">{announce}</div>
    {tour && <Tour group={group} scope={tour} onClose={closeTour} />}
    {helloShown && (
      <Hello
        className={`left-4 right-4 bottom-[calc(160px+env(safe-area-inset-bottom))] md:w-[420px] md:bottom-[100px] ${helloSide}`}
        onTour={() => { finishHello(); openKumpel({ tour: 'app' }); }}
        onLater={() => { snoozeHello(); setHelloOpen(false); }}
        onMute={muteForever}
      />
    )}
    {showOffer && (
      <Offer
        name={PAGE_HELP[group].de}
        className={`right-[76px] ${offerSide} ${bottom}`}
        onTour={() => { setOffer(null); openKumpel({ tour: true }); }}
        onLater={() => setOffer(null)}
      />
    )}
    {panel !== 'closed' && !tour && (
      <HelpPanel
        group={group}
        tab={panel}
        onTab={setPanel}
        onClose={closePanel}
        onStartTour={() => { setPanel('closed'); openKumpel({ tour: true }); }}
      />
    )}
    </>
  );
}

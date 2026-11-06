'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useReducedMotion } from 'framer-motion';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { isVisible, useKumpel } from '@/lib/kumpel-store';
import { pageGroupFor } from '@/lib/kumpel-pages';
import { KUMPEL_EVENT, type KumpelOpenDetail } from '@/lib/kumpel-events';
import { KumpelFace } from './KumpelFace';

type Panel = 'closed' | 'here' | 'ask';

// Phones: above the tab bar. The path page also has a fixed "start lesson" bar there, so the buddy sits above that too.
const BOTTOM = 'bottom-[calc(88px+env(safe-area-inset-bottom))] md:bottom-6';
const BOTTOM_PATH = 'bottom-[calc(168px+env(safe-area-inset-bottom))] md:bottom-[calc(160px+env(safe-area-inset-bottom))] lg:bottom-6';

export function Kumpel() {
  const pathname = usePathname();
  const { locale } = useLocale();
  const { state } = useKumpel();
  const calm = useReducedMotion() || state.motion === 'calm';
  const [mounted, setMounted] = useState(false);
  const [panel, setPanel] = useState<Panel>('closed');
  const group = pageGroupFor(pathname);
  const groupRef = useRef(group);
  groupRef.current = group;

  // Server and first client render agree (nothing); the buddy appears after mount so a muted learner never sees a flash.
  useEffect(() => setMounted(true), []);

  // A new page starts with the panel closed.
  useEffect(() => setPanel('closed'), [pathname]);

  const onOpen = useCallback((e: Event) => {
    if (!groupRef.current) return;
    const detail = (e as CustomEvent<KumpelOpenDetail | null>).detail;
    setPanel(detail?.tab === 'ask' ? 'ask' : 'here');
  }, []);
  useEffect(() => {
    window.addEventListener(KUMPEL_EVENT, onOpen);
    return () => window.removeEventListener(KUMPEL_EVENT, onOpen);
  }, [onOpen]);

  if (!mounted || !group || !isVisible(state)) return null;

  const side = state.side === 'left' ? 'md:left-6' : 'md:right-6';
  return (
    <button
      type="button"
      data-kumpel="kumpel"
      aria-label={t('kumpelOpen', locale)}
      aria-expanded={panel !== 'closed'}
      aria-haspopup="dialog"
      onClick={() => setPanel((p) => (p === 'closed' ? 'here' : 'closed'))}
      className={
        `fixed z-30 right-4 ${side} ${group === 'path' ? BOTTOM_PATH : BOTTOM} ` +
        'grid place-items-center w-[52px] h-[52px] md:w-16 md:h-16 rounded-full border-0 bg-transparent p-0 cursor-pointer ' +
        'drop-shadow-[0_6px_14px_rgba(0,0,0,0.45)] transition-transform ' + (calm ? '' : 'hover:-translate-y-0.5')
      }
    >
      {!calm && <span data-testid="kumpel-ring" aria-hidden="true" className="kumpel-ring absolute inset-0 rounded-full border-2 border-text pointer-events-none" />}
      <KumpelFace mood="rest" size={64} className="relative w-full h-full" />
    </button>
  );
}

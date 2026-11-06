'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { LessonArt } from '@/components/ui/LessonArt';

const COPY = {
  en: {
    eyebrow: 'A1 → B2 · CEFR German course',
    h: 'Colour is grammar.',
    sub: 'Der, die, das — three shapes, three colours. Guided lessons, a smart word trainer and exam practice, from your very first Hallo to confident B2.',
  },
  fr: {
    eyebrow: 'A1 → B2 · cours d’allemand CECR',
    h: 'La couleur, c’est la grammaire.',
    sub: 'Der, die, das — trois formes, trois couleurs. Des leçons guidées, un entraîneur de vocabulaire intelligent et des examens blancs, de ton premier Hallo au B2.',
  },
};

export function Welcome() {
  const { locale } = useLocale();
  const c = COPY[locale === 'fr' ? 'fr' : 'en'];
  return (
    <section className="mx-auto max-w-[1100px] px-5 py-10 md:px-14 md:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
      <div className="order-2 md:order-1">
        <p className="eyebrow m-0 mb-6">{c.eyebrow}</p>
        <h1 className="font-display font-bold text-[clamp(48px,8vw,104px)] leading-[0.92] tracking-[-0.035em] m-0">{c.h}</h1>
        <p className="text-text-2 text-[19px] leading-relaxed mt-8 mb-9 max-w-[46ch]">{c.sub}</p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/lesson/l1/learn" className="inline-flex items-center justify-center gap-2.5 h-[56px] px-8 rounded-full bg-cta text-cta-ink font-semibold text-[17px] no-underline transition hover:opacity-90 active:scale-[.98]">
            {t('welcomeCta', locale)} <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link href="/library" className="inline-flex items-center justify-center h-[56px] px-6 rounded-full border border-border-strong text-text font-semibold text-[16px] no-underline hover:bg-surface-2">
            {t('welcomeSecondary', locale)}
          </Link>
        </div>
      </div>
      <div className="order-1 md:order-2 relative mx-auto w-full max-w-[420px] aspect-square">
        <LessonArt lesson={{ id: 'welcome', level: 'A1', number: 1 }} />
      </div>
    </section>
  );
}

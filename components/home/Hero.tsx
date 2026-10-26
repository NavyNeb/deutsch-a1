'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';

const HEAD = {
  en: { eyebrow: 'A1 → B2 · CEFR course', h: ['Learn German the way', 'that actually sticks.'], sub: 'Guided lessons, a smart word trainer, and games — from your very first Hallo to confident B2.', start: 'Start learning', browse: 'Browse the textbook' },
  fr: { eyebrow: 'A1 → B2 · cours CECR', h: ['Apprends l’allemand', 'pour de bon.'], sub: 'Des leçons guidées, un entraîneur de vocabulaire intelligent et des jeux — de ton premier Hallo au B2.', start: 'Commencer', browse: 'Ouvrir le manuel' },
};

export function Hero() {
  const { locale } = useLocale();
  const c = HEAD[locale === 'fr' ? 'fr' : 'en'];
  return (
    <section className="mx-auto max-w-[1200px] px-5 pt-5 pb-4 md:pt-14 md:pb-8 grid md:grid-cols-[1.02fr_0.98fr] gap-6 md:gap-10 items-center">
      <div className="order-2 md:order-1">
        <p className="font-rounded font-bold text-[13px] tracking-[0.14em] uppercase text-primary m-0 mb-4">{c.eyebrow}</p>
        <h1 className="font-rounded font-extrabold text-text m-0 leading-[1.05] tracking-[-0.03em] text-[clamp(32px,5.4vw,56px)]">
          {c.h[0]}<br />{c.h[1]}
        </h1>
        <p className="text-text-2 text-[17px] leading-relaxed mt-4 sm:mt-5 mb-6 sm:mb-8 max-w-[46ch]">{c.sub}</p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-1 sm:gap-4">
          <Link
            href="/lesson/l1/learn"
            className="inline-flex items-center justify-center gap-2 font-rounded font-bold text-[15px] text-primary-ink bg-primary rounded-full px-6 py-3.5 no-underline shadow-primary hover:brightness-105 active:scale-[.98] transition"
          >
            {c.start} <ArrowRight size={17} strokeWidth={2.5} />
          </Link>
          <Link href="/textbook" className="inline-flex items-center justify-center gap-1.5 font-rounded font-bold text-[15px] text-text no-underline hover:text-primary transition py-3">
            {c.browse} <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>
      </div>

      {/* Hero illustration: recolored 3D characters on a soft brand blob, with gamy floating badges */}
      <div className="order-1 md:order-2 relative">
        <div className="relative mx-auto w-full max-w-[250px] sm:max-w-[440px] aspect-square">
          {/* soft blob backdrop */}
          <div className="absolute inset-[6%] rounded-[46%_54%_58%_42%/48%_44%_56%_52%] bg-[radial-gradient(120%_120%_at_65%_25%,var(--soft),var(--primary-wash)_55%,transparent_78%)]" />
          <div className="absolute inset-x-[10%] bottom-[8%] h-[14%] rounded-full bg-black/[0.06] blur-xl" />

          <img
            src="/illustrations/hero-couple.png"
            alt=""
            width={786}
            height={912}
            className="relative z-10 w-[82%] mx-auto block select-none pointer-events-none drop-shadow-[0_18px_28px_rgba(0,0,0,0.14)]"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
}

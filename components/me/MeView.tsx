'use client';
import Link from 'next/link';
import { ArrowRight, BarChart3, Cloud, SlidersHorizontal, type LucideIcon } from 'lucide-react';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { currentStreak, dateKey, levelForXp } from '@/lib/progress';

const CARDS: { href: string; de: string; descKey: UIKey; icon: LucideIcon }[] = [
  { href: '/statistics', de: 'Statistik', descKey: 'navStatistics', icon: BarChart3 },
  { href: '/account', de: 'Konto', descKey: 'account', icon: Cloud },
  { href: '/settings', de: 'Einstellungen', descKey: 'settings', icon: SlidersHorizontal },
];

export function MeView() {
  const { state } = useProgress();
  const { locale } = useLocale();
  const streak = currentStreak(state, dateKey(Date.now()));

  const stats = [
    { v: String(streak), label: t('dayStreak', locale), aria: t('dayStreak', locale) },
    { v: String(state.xp), label: t('totalXp', locale), aria: undefined },
    { v: String(levelForXp(state.xp)), label: t('level', locale), aria: undefined },
  ];

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 md:px-14 md:py-12">
      <div className="eyebrow mb-4">Du · {t('navMe', locale)}</div>
      <h1 className="font-display font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.03em] m-0 mb-9">Du.</h1>

      <div className="flex flex-wrap gap-5 mb-10">
        {stats.map((s) => (
          <div key={s.label} className="flex-1 basis-[200px] rounded-[24px] border border-border bg-card px-7 py-6">
            <div className="font-display font-semibold text-[48px] leading-none tabular-nums" aria-label={s.aria}>{s.v}</div>
            <div className="text-[13px] text-muted mt-2">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {CARDS.map(({ href, de, descKey, icon: Icon }) => (
          <Link key={href} href={href} className="group flex items-center gap-5 rounded-3xl border border-border bg-card px-7 py-6 no-underline text-text transition hover:bg-surface-2 hover:border-border-strong">
            <span className="grid place-items-center w-12 h-12 rounded-full border border-border-strong text-text-2 shrink-0"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
            <span className="flex-1 min-w-0">
              <span className="block font-display font-semibold text-[26px] leading-tight">{de}</span>
              <span className="block text-[14px] text-muted mt-1">{t(descKey, locale)}</span>
            </span>
            <ArrowRight size={20} aria-hidden="true" className="text-muted transition-transform group-hover:translate-x-0.5" />
          </Link>
        ))}
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Flame, Search } from 'lucide-react';
import { NAV_ITEMS, activeNavId } from '@/lib/nav';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { useUser } from '@/lib/useUser';
import { supabaseConfigured } from '@/lib/supabase/config';
import { useProgress } from '@/lib/progress-store';
import { currentStreak, dateKey } from '@/lib/progress';
import { GenderShape } from '@/components/ui/GenderShape';

export function BrandMark() {
  return (
    <span className="inline-flex items-center gap-3 font-display font-semibold text-[22px] tracking-tight text-text">
      <span className="flex items-end gap-1" aria-hidden="true">
        <GenderShape gender="der" size={12} />
        <GenderShape gender="die" size={12} />
        <GenderShape gender="das" size={12} />
      </span>
      Deutsch
    </span>
  );
}

export function AppRail() {
  const pathname = usePathname();
  const active = activeNavId(pathname);
  const { locale } = useLocale();
  const user = useUser();
  const { state } = useProgress();
  const streak = currentStreak(state, dateKey(Date.now()));

  return (
    <aside className="hidden md:flex flex-col shrink-0 w-[264px] h-[100dvh] sticky top-0 border-r border-border px-[18px] py-7 gap-1.5 bg-bg">
      <Link href="/" className="px-3.5 pb-5 pt-1 no-underline"><BrandMark /></Link>

      <button
        type="button"
        onClick={() => window.dispatchEvent(new Event('open-palette'))}
        className="flex items-center gap-2.5 h-11 px-3.5 mb-3 rounded-xl border border-border-strong bg-transparent text-muted text-[14px] cursor-pointer hover:text-text"
      >
        <Search size={18} strokeWidth={1.8} aria-hidden="true" />
        <span className="flex-1 text-left">{t('searchAnything', locale)}</span>
        <kbd className="font-sans text-[12px] border border-border-strong rounded-md px-1.5 py-0.5">⌘K</kbd>
      </button>

      <nav aria-label={t('navMain', locale)} className="flex flex-col gap-1.5">
        {NAV_ITEMS.map((item) => {
          const on = active === item.id;
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={on ? 'page' : undefined}
              className={
                'flex items-center gap-3 min-h-[46px] px-3.5 rounded-xl no-underline font-medium text-[15px] transition-colors ' +
                (on ? 'bg-surface-2 text-text' : 'text-text-2 hover:bg-surface-2 hover:text-text')
              }
            >
              <Icon size={20} strokeWidth={1.8} aria-hidden="true" />
              <span>{item.de}</span>
              <span className="ml-auto text-[12px] text-muted truncate max-w-[88px]">{t(item.labelKey, locale)}</span>
            </Link>
          );
        })}
      </nav>

      <div className="flex-1" />

      <div className="rounded-[18px] border border-border bg-card p-[18px]">
        <div className="flex items-center gap-2.5">
          <Flame size={18} strokeWidth={1.8} aria-hidden="true" className="text-text" />
          <span className="font-display font-semibold text-[22px]">{streak} {streak === 1 ? 'Tag' : 'Tage'}</span>
        </div>
        <div className="text-[13px] text-muted mt-1.5">{t('streakDays', locale)}</div>
      </div>

      <Link href="/me" className="flex items-center gap-3 px-2 pt-3.5 no-underline text-text">
        <span className="grid place-items-center w-9 h-9 rounded-full bg-surface-3 font-display font-semibold">
          {(user?.email?.[0] ?? 'D').toUpperCase()}
        </span>
        <span className="min-w-0">
          <span className="block text-[14px] font-semibold truncate">
            {user?.email?.split('@')[0] ?? (supabaseConfigured ? t('login', locale) : 'Deutsch')}
          </span>
          <span className="block text-[12px] text-muted">A1 · {t('navMe', locale)}</span>
        </span>
      </Link>
    </aside>
  );
}

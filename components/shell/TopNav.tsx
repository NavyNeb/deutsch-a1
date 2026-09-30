'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { useUser } from '@/lib/useUser';
import { supabaseConfigured } from '@/lib/supabase/config';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

const MAIN: { href: string; key: UIKey }[] = [
  { href: '/', key: 'navHome' },
  { href: '/textbook', key: 'navTextbook' },
  { href: '/statistics', key: 'navStatistics' },
];
const GAMES: { href: string; key: UIKey }[] = [
  { href: '/games/sprint', key: 'navSprint' },
  { href: '/games/audio', key: 'navAudioCall' },
  { href: '/practice', key: 'navReview' },
];

function useActive() {
  const p = usePathname();
  return (href: string) => (href === '/' ? p === '/' : p.startsWith(href));
}

export function TopNav() {
  const { locale } = useLocale();
  const user = useUser();
  const isActive = useActive();
  const [gamesOpen, setGamesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const linkCls = (active: boolean) =>
    'text-[15px] font-rounded font-semibold transition-colors ' +
    (active ? 'text-text' : 'text-muted hover:text-text');

  return (
    <header className="sticky top-0 z-40 bg-bg/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1200px] px-5 h-[68px] flex items-center gap-6">
        {/* Brand */}
        <Link href="/" className="font-rounded font-extrabold text-[20px] tracking-tight text-text no-underline shrink-0">
          Deutsch<span className="text-primary">.</span>
        </Link>
        <span className="hidden md:block w-px h-6 bg-border" />

        {/* Primary links */}
        <nav className="hidden md:flex items-center gap-6">
          {MAIN.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls(isActive(l.href))}>
              {t(l.key, locale)}
            </Link>
          ))}
          {/* Games dropdown */}
          <div className="relative" onMouseEnter={() => setGamesOpen(true)} onMouseLeave={() => setGamesOpen(false)}>
            <button
              className={linkCls(isActive('/games') || isActive('/practice')) + ' inline-flex items-center gap-1'}
              onClick={() => setGamesOpen((o) => !o)}
              aria-haspopup="true"
              aria-expanded={gamesOpen}
            >
              {t('navGames', locale)} <ChevronDown size={15} strokeWidth={2.4} />
            </button>
            {gamesOpen && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[180px] bg-card border border-border rounded-[16px] shadow-pop p-1.5">
                  {GAMES.map((g) => (
                    <Link
                      key={g.href}
                      href={g.href}
                      onClick={() => setGamesOpen(false)}
                      className="block rounded-[11px] px-3 py-2 text-[14px] font-rounded font-semibold text-text-2 hover:bg-surface-2 hover:text-text no-underline"
                    >
                      {t(g.key, locale)}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="flex-1" />

        {/* Right controls */}
        <div className="hidden md:flex items-center gap-2.5">
          <LanguageToggle />
          <ThemeToggle />
          <AccountArea user={user} configured={supabaseConfigured} locale={locale} />
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-full border border-border text-text"
          aria-label={t('openMenu', locale)}
          onClick={() => setMobileOpen((o) => !o)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="mx-auto max-w-[1200px] px-5 py-3 grid gap-1">
            {[...MAIN, ...GAMES].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={'rounded-[12px] px-3 py-2.5 font-rounded font-semibold no-underline ' + (isActive(l.href) ? 'bg-[var(--primary-wash)] text-primary' : 'text-text-2 hover:bg-surface-2')}
              >
                {t(l.key, locale)}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              <LanguageToggle />
              <ThemeToggle />
              <div className="flex-1" />
              <AccountArea user={user} configured={supabaseConfigured} locale={locale} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function AccountArea({ user, configured, locale }: { user: MinimalUserOrNull; configured: boolean; locale: 'en' | 'fr' }) {
  if (!configured) return null;
  if (user) {
    const name = user.email?.split('@')[0] ?? 'You';
    const initial = (user.email?.[0] ?? 'U').toUpperCase();
    return (
      <Link href="/account" className="inline-flex items-center gap-2 no-underline text-text">
        <span className="grid place-items-center w-8 h-8 rounded-full bg-[var(--primary-wash)] text-primary font-rounded font-bold text-[13px]">
          {initial}
        </span>
        <span className="font-rounded font-semibold text-[14px] max-w-[110px] truncate">{name}</span>
      </Link>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <Link href="/account" className="font-rounded font-semibold text-[14px] text-text no-underline hover:text-primary py-2.5 px-1">
        {t('login', locale)}
      </Link>
      <Link
        href="/account"
        className="font-rounded font-bold text-[14px] text-primary-ink bg-primary rounded-full px-4 py-2 no-underline shadow-primary hover:brightness-105 transition"
      >
        {t('signUpNav', locale)}
      </Link>
    </div>
  );
}

type MinimalUserOrNull = { id: string; email?: string } | null;

'use client';
import Link from 'next/link';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';

const LINKS: { href: string; key: UIKey }[] = [
  { href: '/', key: 'navHome' },
  { href: '/textbook', key: 'navTextbook' },
  { href: '/statistics', key: 'navStatistics' },
  { href: '/games/sprint', key: 'navSprint' },
  { href: '/games/audio', key: 'navAudioCall' },
];

export function SiteFooter() {
  const { locale } = useLocale();
  return (
    <footer className="border-t border-border mt-20">
      <div className="mx-auto max-w-[1200px] px-5 py-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href="/" className="font-rounded font-extrabold text-[17px] text-text no-underline shrink-0">
          Deutsch<span className="text-primary">.</span>
        </Link>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[14px] text-muted hover:text-text no-underline">
              {t(l.key, locale)}
            </Link>
          ))}
        </nav>
        <div className="flex-1" />
        <p className="text-[13px] text-faint m-0">© Deutsch — a CEFR A1–B2 German course</p>
      </div>
    </footer>
  );
}

'use client';
import Link from 'next/link';
import { Headphones, Mic, PenLine, Timer, type LucideIcon } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';

const TILES: { href: string; title: string; key: UIKey; icon: LucideIcon }[] = [
  { href: '/games/sprint', title: 'Word Sprint', key: 'qpSprint', icon: Timer },
  { href: '/games/audio', title: 'Audio-Call', key: 'qpAudio', icon: Headphones },
  { href: '/speak', title: 'Sprechen', key: 'qpSpeak', icon: Mic },
  { href: '/write', title: 'Schreiben', key: 'qpWrite', icon: PenLine },
];

export function QuickPractice() {
  const { locale } = useLocale();
  return (
    <div className="flex flex-wrap gap-5">
      {TILES.map(({ href, title, key, icon: Icon }) => (
        <Link
          key={href}
          href={href}
          className="flex-1 basis-[220px] flex items-center gap-4 p-5 rounded-[20px] bg-card border border-border text-text no-underline transition hover:bg-surface-2 hover:border-border-strong"
        >
          <Icon size={26} strokeWidth={1.8} aria-hidden="true" className="text-text-2 shrink-0" />
          <span>
            <span className="block font-display font-semibold text-[20px]">{title}</span>
            <span className="block text-[13px] text-muted">{t(key, locale)}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

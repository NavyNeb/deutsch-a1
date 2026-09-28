'use client';
import Link from 'next/link';
import { Settings } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Mascot } from '@/components/ui/Mascot';

// Small client wrapper so the home page's subtitle can be locale-aware
// without turning the whole page into a client component.
export function HomeHeader() {
  const { locale } = useLocale();
  return (
    <header className="mb-8 flex items-start justify-between gap-4">
      <div className="flex items-center gap-3">
        <Mascot size={48} expression="happy" className="shrink-0" />
        <div>
          <h1 className="text-[34px] font-extrabold m-0">Deutsch A1</h1>
          <p className="text-muted text-[15px] m-0 mt-1 max-w-[42ch]">{t('homeSubtitle', locale)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <LanguageToggle />
        <ThemeToggle />
        <Link
          href="/settings"
          aria-label={t('openSettings', locale)}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full text-text-2 bg-card border border-border shadow-sm
            transition-[transform,border-color] duration-150 hover:border-border-strong active:scale-95"
        >
          <Settings size={16} strokeWidth={2.2} />
        </Link>
      </div>
    </header>
  );
}

'use client';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { LanguageToggle } from '@/components/ui/LanguageToggle';

// Small client wrapper so the home page's subtitle can be locale-aware
// without turning the whole page into a client component.
export function HomeHeader() {
  const { locale } = useLocale();
  return (
    <header style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
      <div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 40, margin: '0 0 8px' }}>Deutsch A1</h1>
        <p style={{ color: 'var(--muted)' }}>{t('homeSubtitle', locale)}</p>
      </div>
      <LanguageToggle />
    </header>
  );
}

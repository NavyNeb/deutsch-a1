'use client';
import type { CSSProperties } from 'react';
import { useLocale, type Locale } from '@/lib/locale-store';

// Small segmented EN | FR switch, styled with the Editorial theme vars.
// Mounted wherever a learner might want to change languages — home header,
// the in-lesson step player, and the review/chapter view.
export function LanguageToggle({ style }: { style?: CSSProperties }) {
  const { locale, setLocale } = useLocale();

  const optionStyle = (active: boolean): CSSProperties => ({
    border: 'none',
    background: active ? 'var(--accent)' : 'transparent',
    color: active ? '#FFFFFF' : 'var(--muted)',
    borderRadius: 999,
    padding: '10px 14px',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    lineHeight: 1.4,
  });

  const option = (l: Locale, label: string) => (
    <button
      key={l}
      type="button"
      onClick={() => setLocale(l)}
      aria-pressed={locale === l}
      style={optionStyle(locale === l)}
    >
      {label}
    </button>
  );

  return (
    <div
      role="group"
      aria-label="Language"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 2,
        border: '1px solid var(--border)',
        borderRadius: 999,
        padding: 2,
        background: 'var(--card)',
        flexShrink: 0,
        ...style,
      }}
    >
      {option('en', 'EN')}
      {option('fr', 'FR')}
    </div>
  );
}

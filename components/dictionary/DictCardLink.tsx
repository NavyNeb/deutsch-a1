'use client';
import Link from 'next/link';
import { wordHref } from '@/lib/word-links';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

// Stretched link: covers the whole card; interactive siblings must sit above it with `relative z-10`.
export function DictCardLink({ headword, q }: { headword: string; q?: string }) {
  const { locale } = useLocale();
  return (
    <Link
      href={wordHref(headword, q)}
      aria-label={`${t('dictOpenWord', locale)}: ${headword}`}
      className="absolute inset-0 z-0 rounded-[20px] outline-none focus-visible:ring-2 focus-visible:ring-primary"
    />
  );
}

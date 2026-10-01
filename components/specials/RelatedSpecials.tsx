'use client';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import type { Special } from '@/content/types';
import { relatedSpecials } from '@/content/specials';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';

// "Go further" chips on a lesson, pointing at special courses that build on it.
export function RelatedSpecials({ lessonId, items }: { lessonId: string; items?: Special[] }) {
  const { locale } = useLocale();
  const list = items ?? relatedSpecials(lessonId);
  if (!list.length) return null;
  return (
    <div className="mt-3 rounded-[16px] border border-border bg-card px-4 py-3 shadow-card">
      <p className="label m-0 mb-2 inline-flex items-center gap-1.5"><Sparkles size={13} strokeWidth={2.4} />{t('specialsRelatedHeading', locale)}</p>
      <div className="flex flex-wrap gap-2">
        {list.map((sp) => (
          <Link
            key={sp.id}
            href={`/specials/${sp.special.slug}`}
            className="tap-area inline-flex items-center rounded-full border border-border bg-surface-2 px-3 py-1.5 text-[13px] font-rounded font-bold text-text-2 no-underline hover:border-primary hover:text-primary"
          >
            {sp.title.de} · {pick(sp.title.en, sp.title.fr, locale)}
          </Link>
        ))}
      </div>
    </div>
  );
}

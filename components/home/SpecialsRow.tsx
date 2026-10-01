'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { specials } from '@/content/specials';
import { specialProgress } from '@/lib/specials-progress';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { SpecialCard } from '@/components/specials/SpecialCard';

// Home teaser: the specials in progress first, then the first few untouched ones.
export function SpecialsRow() {
  const { state } = useProgress();
  const { locale } = useLocale();
  if (!specials.length) return null;

  const rows = specials.map((sp) => ({ sp, progress: specialProgress(state, sp) }));
  const rank = (r: (typeof rows)[number]) => (r.progress.quizPassed ? 2 : r.progress.stepsDone > 0 ? 0 : 1);
  const shown = [...rows].sort((a, b) => rank(a) - rank(b) || a.sp.number - b.sp.number).slice(0, 4);

  return (
    <section className="mt-8 mb-2" aria-labelledby="home-specials">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <h2 id="home-specials" className="font-rounded font-extrabold text-[22px] text-text m-0">{t('specialsRowTitle', locale)}</h2>
        <Link href="/specials" className="inline-flex items-center gap-1 font-rounded font-bold text-[14px] text-primary no-underline hover:underline">
          {t('specialsSeeAll', locale)} <ArrowRight size={15} strokeWidth={2.5} />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {shown.map(({ sp, progress }) => <SpecialCard key={sp.id} special={sp} progress={progress} />)}
      </div>
    </section>
  );
}

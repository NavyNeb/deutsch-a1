'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { lessons } from '@/content';
import type { Level } from '@/content/types';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { buildDialogues } from '@/lib/roleplay';
import { Segmented } from '@/components/ui/Segmented';

export function RoleplayList() {
  const { locale } = useLocale();
  const [level, setLevel] = useState<Level>('A1');
  const all = useMemo(() => buildDialogues(lessons), []);
  const list = all.filter((d) => d.level === level);

  return (
    <div className="mx-auto max-w-[860px] px-5 py-8 md:py-12">
      <Link href="/speak" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('backToHub', locale)}</Link>
      <h1 className="font-display font-extrabold text-[30px] md:text-[40px] m-0 mt-2">{sc('roleplayTitle', locale)}</h1>
      <p className="text-text-2 text-[16px] leading-relaxed mt-2 mb-5 max-w-[60ch]">{sc('roleplayTag', locale)}</p>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <Segmented label={sc('level', locale)} value={level} onChange={setLevel} options={(['A1', 'A2', 'B1', 'B2'] as Level[]).map((l) => ({ value: l, label: l }))} />
        <span className="text-muted text-[13.5px]">{list.length} {sc('roleplayCount', locale)}</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {list.map((d) => (
          <Link key={d.id} href={`/speak/roleplay/${d.id}`} className="no-underline text-text rounded-[18px] border border-border bg-card p-4 hover:-translate-y-0.5 hover:border-text transition-[transform,border-color]">
            <span lang="de" className="font-display font-bold text-[17px] block">{d.title.de}</span>
            <span className="text-muted text-[13.5px] block mt-0.5">{pick(d.title.en, d.title.fr ?? d.title.en, locale)}</span>
            <span className="flex items-center justify-between mt-3 text-[13px] text-text-2"><span>{d.roles.join(' · ')}</span><ArrowRight size={15} strokeWidth={2.5} /></span>
          </Link>
        ))}
      </div>
    </div>
  );
}

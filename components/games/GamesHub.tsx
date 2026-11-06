'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Headphones, Mic, PenLine, Repeat, Sparkles, Timer, Trophy, type LucideIcon } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { loadBest } from '@/lib/game';
import { useProgress } from '@/lib/progress-store';
import { dueVocabIds } from '@/lib/progress';

type Tool = {
  href: string;
  mode?: 'text' | 'audio';
  review?: boolean;
  icon: LucideIcon;
  titleKey: UIKey;
  taglineKey: UIKey;
  ctaKey: UIKey;
};

const TOOLS: Tool[] = [
  { href: '/games/sprint', mode: 'text', icon: Timer, titleKey: 'sprintTitle', taglineKey: 'sprintTagline', ctaKey: 'playNow' },
  { href: '/games/audio', mode: 'audio', icon: Headphones, titleKey: 'audioTitle', taglineKey: 'audioTagline', ctaKey: 'playNow' },
  { href: '/practice/review', review: true, icon: Repeat, titleKey: 'reviewGameTitle', taglineKey: 'reviewGameTagline', ctaKey: 'startReview' },
  { href: '/speak', icon: Mic, titleKey: 'navSpeak', taglineKey: 'practiceSpeakTagline', ctaKey: 'openCta' },
  { href: '/write', icon: PenLine, titleKey: 'navWrite', taglineKey: 'practiceWriteTagline', ctaKey: 'openCta' },
  { href: '/specials', icon: Sparkles, titleKey: 'navSpecials', taglineKey: 'practiceSpecialsTagline', ctaKey: 'openCta' },
];

export function GamesHub() {
  const { locale } = useLocale();
  const { state } = useProgress();
  const [best, setBest] = useState<Record<string, number>>({});
  useEffect(() => { setBest({ text: loadBest('text'), audio: loadBest('audio') }); }, []);
  const due = dueVocabIds(state, Date.now()).length;

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 md:px-14 md:py-12">
      <div className="eyebrow mb-4">Üben · {t('gamesHubTitle', locale)}</div>
      <h1 className="font-display font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.03em] m-0">Üben.</h1>
      <p className="text-text-2 text-[17px] leading-relaxed mt-4 mb-10 max-w-[56ch]">{t('gamesHubSubtitle', locale)}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {TOOLS.map((tool) => {
          const score = tool.mode ? best[tool.mode] ?? 0 : 0;
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group relative flex flex-col min-h-[240px] rounded-[24px] border border-border bg-card p-7 no-underline text-text transition hover:bg-surface-2 hover:border-border-strong"
            >
              <div className="flex items-start justify-between">
                <span className="grid place-items-center w-12 h-12 rounded-full border border-border-strong text-text-2">
                  <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                </span>
                {tool.review && (
                  <span className="font-display font-semibold text-[44px] leading-none tabular-nums">{due}</span>
                )}
                {score > 0 && (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border-strong text-[12px] font-semibold px-2.5 py-1 text-text-2">
                    <Trophy size={13} strokeWidth={2} aria-hidden="true" /> {t('best', locale)} {score}
                  </span>
                )}
              </div>
              <h2 className="font-display font-semibold text-[26px] leading-tight m-0 mt-6">{t(tool.titleKey, locale)}</h2>
              <p className="text-muted text-[15px] leading-relaxed m-0 mt-2">
                {tool.review ? (due === 0 ? t('nothingDue', locale) : `${due} ${t('wordsDue', locale)} — ${t(tool.taglineKey, locale)}`) : t(tool.taglineKey, locale)}
              </p>
              <span className="mt-auto pt-5 inline-flex items-center gap-1.5 font-semibold text-[14px] text-text">
                {t(tool.ctaKey, locale)} <ArrowRight size={16} strokeWidth={2} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Trophy, Repeat } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { loadBest } from '@/lib/game';

type Game = {
  href: string;
  mode?: 'text' | 'audio';
  gradient: string;
  illustration?: string;
  titleKey: UIKey;
  taglineKey: UIKey;
  ctaKey: UIKey;
};

const GAMES: Game[] = [
  {
    href: '/games/sprint', mode: 'text',
    gradient: 'linear-gradient(135deg,#2B788B,#57A9BC)',
    illustration: '/illustrations/runner.png',
    titleKey: 'sprintTitle', taglineKey: 'sprintTagline', ctaKey: 'playNow',
  },
  {
    href: '/games/audio', mode: 'audio',
    gradient: 'linear-gradient(135deg,#7A6BC4,#A99BE4)',
    illustration: '/illustrations/greeter.png',
    titleKey: 'audioTitle', taglineKey: 'audioTagline', ctaKey: 'playNow',
  },
  {
    href: '/practice',
    gradient: 'linear-gradient(135deg,#C9822B,#E8B05C)',
    titleKey: 'reviewGameTitle', taglineKey: 'reviewGameTagline', ctaKey: 'startReview',
  },
];

export function GamesHub() {
  const { locale } = useLocale();
  const [best, setBest] = useState<Record<string, number>>({});
  useEffect(() => { setBest({ text: loadBest('text'), audio: loadBest('audio') }); }, []);

  return (
    <div className="mx-auto max-w-[1200px] px-5 py-8 md:py-12">
      <header className="mb-8 max-w-[56ch]">
        <h1 className="font-rounded font-extrabold text-[clamp(30px,5vw,44px)] leading-[1.05] tracking-[-0.02em] text-text m-0">
          {t('gamesHubTitle', locale)}
        </h1>
        <p className="text-text-2 text-[17px] leading-relaxed mt-3 mb-0">{t('gamesHubSubtitle', locale)}</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {GAMES.map((g) => {
          const score = g.mode ? best[g.mode] ?? 0 : 0;
          return (
            <Link
              key={g.href}
              href={g.href}
              className="group relative flex flex-col bg-card border border-border rounded-[22px] shadow-card overflow-hidden no-underline text-inherit
                transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-1 hover:shadow-pop hover:border-border-strong"
            >
              <div className="relative h-[168px] flex items-end justify-center overflow-hidden" style={{ background: g.gradient }}>
                {g.illustration ? (
                  <img
                    src={g.illustration} alt="" draggable={false}
                    className="h-[152px] w-auto select-none pointer-events-none drop-shadow-[0_10px_16px_rgba(0,0,0,0.22)] transition-transform duration-200 group-hover:scale-105"
                  />
                ) : (
                  <span className="grid place-items-center self-center w-20 h-20 rounded-full bg-white/25 text-white backdrop-blur-sm transition-transform duration-200 group-hover:rotate-180">
                    <Repeat size={38} strokeWidth={2.3} />
                  </span>
                )}
                {score > 0 && (
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white/90 text-[color:var(--amber)] font-rounded font-extrabold text-[12px] px-2.5 py-1">
                    <Trophy size={13} strokeWidth={2.6} /> {t('best', locale)} {score}
                  </span>
                )}
              </div>
              <div className="flex-1 flex flex-col p-5">
                <h2 className="font-rounded font-extrabold text-[20px] leading-tight text-text m-0">{t(g.titleKey, locale)}</h2>
                <p className="text-muted text-[14px] leading-relaxed m-0 mt-1.5">{t(g.taglineKey, locale)}</p>
                <span className="mt-auto pt-4 inline-flex items-center gap-1.5 font-rounded font-bold text-[14px] text-primary">
                  {t(g.ctaKey, locale)} <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Bot, ClipboardCheck, Drama, MessageSquareQuote, Mic, Timer, Waves, type LucideIcon } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { sc, type SprechenKey } from '@/lib/sprechen-copy';
import { dateKey } from '@/lib/progress';
import { emptySprechen, loadSprechen, speakingStreak, weeklyMinutes } from '@/lib/sprechen-stats';
import { Card } from '@/components/ui/Card';

type Tool = { href: string; icon: LucideIcon; title: SprechenKey; tag: SprechenKey };

const TOOLS: Tool[] = [
  { href: '/speak/repeat', icon: Mic, title: 'repeatTitle', tag: 'repeatTag' },
  { href: '/speak/roleplay', icon: Drama, title: 'roleplayTitle', tag: 'roleplayTag' },
  { href: '/speak/phrases', icon: MessageSquareQuote, title: 'phrasesTitle', tag: 'phrasesTag' },
  { href: '/speak/talk', icon: Timer, title: 'talkTitle', tag: 'talkTag' },
  { href: '/speak/exam', icon: ClipboardCheck, title: 'examTitle', tag: 'examTag' },
  { href: '/speak/sounds', icon: Waves, title: 'soundsTitle', tag: 'soundsTag' },
];

const PARTNER: Tool = { href: '/speak/partner', icon: Bot, title: 'partnerTitle', tag: 'partnerTag' };

export function SpeakHub() {
  const { locale } = useLocale();
  const [stats, setStats] = useState(emptySprechen);
  const [hydrated, setHydrated] = useState(false);
  const [aiOn, setAiOn] = useState(false);

  useEffect(() => { setStats(loadSprechen()); setHydrated(true); }, []);

  // The AI partner only shows when the server has a key and the switch is on.
  useEffect(() => {
    let alive = true;
    fetch('/api/sprechen')
      .then((r) => (r.ok ? r.json() : { enabled: false }))
      .then((j: { enabled?: boolean }) => { if (alive) setAiOn(!!j.enabled); })
      .catch(() => { /* offline or no route: keep it hidden */ });
    return () => { alive = false; };
  }, []);

  const today = dateKey(Date.now());
  const minutes = hydrated ? weeklyMinutes(stats, today) : 0;
  const streak = hydrated ? speakingStreak(stats, today) : 0;
  const pct = Math.min(100, Math.round((minutes / stats.goalMinutes) * 100));
  const tools = aiOn ? [PARTNER, ...TOOLS] : TOOLS;

  return (
    <div className="mx-auto max-w-[900px] px-5 py-8 md:py-12">
      <h1 className="font-display font-extrabold text-[34px] md:text-[44px] tracking-tight m-0">{sc('hubTitle', locale)}</h1>
      <p className="text-text-2 text-[17px] leading-relaxed mt-2 mb-6 max-w-[60ch]">{sc('hubSubtitle', locale)}</p>

      <Card className="mb-6 !p-5 flex flex-col sm:flex-row sm:items-center gap-4" >
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-extrabold text-[34px] leading-none text-text tabular-nums">{minutes}</span>
            <span className="text-muted text-[14px]">{sc('weekMinutes', locale)} · {sc('weekGoal', locale)} {stats.goalMinutes}</span>
          </div>
          <div className="h-2 rounded-full bg-surface-3 overflow-hidden mt-3" role="progressbar" aria-valuenow={minutes} aria-valuemin={0} aria-valuemax={stats.goalMinutes}>
            <div className="h-full rounded-full bg-cta" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div className="flex items-center gap-4 text-[14px] text-text-2">
          {streak > 0 && <span className="font-display font-bold">🔥 {streak} {sc('streakDays', locale)}</span>}
          <Link href="/speak/progress" className="font-display font-bold text-text underline-offset-2 hover:underline">{sc('progressLink', locale)}</Link>
        </div>
      </Card>

      <div data-kumpel="speak-modes" className="grid gap-4 sm:grid-cols-2">
        {tools.map((tool) => (
          <Link key={tool.href} href={tool.href} className="no-underline text-text group">
            <Card interactive className="h-full !p-5 flex flex-col gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-surface-2"><tool.icon size={22} strokeWidth={2.2} /></span>
              <div className="flex-1">
                <h2 className="font-display font-extrabold text-[20px] m-0">{sc(tool.title, locale)}</h2>
                <p className="text-text-2 text-[14.5px] leading-relaxed mt-1 mb-0">{sc(tool.tag, locale)}</p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-display font-bold text-[14px]">{sc('open', locale)} <ArrowRight size={15} strokeWidth={2.5} /></span>
            </Card>
          </Link>
        ))}
      </div>

      <p className="mt-8 text-[12.5px] text-muted leading-relaxed max-w-[70ch]">{sc('privacy', locale)}</p>
    </div>
  );
}

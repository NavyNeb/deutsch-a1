'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Sun, Moon, Cloud, ChevronRight } from 'lucide-react';
import { useProgress } from '@/lib/progress-store';
import { useSettings, DAILY_GOAL_OPTIONS } from '@/lib/settings-store';
import { supabaseConfigured } from '@/lib/supabase/config';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { levelForXp, currentStreak, dateKey } from '@/lib/progress';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { SpeedToggle } from '@/components/ui/SpeedToggle';
import { Card } from '@/components/ui/Card';
import { ActivityCalendar } from '@/components/home/ActivityCalendar';

const GOAL_LABEL: Record<number, UIKey> = { 20: 'goalRelaxed', 30: 'goalRegular', 50: 'goalSerious', 100: 'goalIntense' };

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 border-b border-border last:border-b-0">
      <span className="font-rounded font-semibold text-[15px]">{label}</span>
      {children}
    </div>
  );
}

function ThemeChoice() {
  const { locale } = useLocale();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  useEffect(() => {
    setTheme(document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
  }, []);
  const choose = (next: 'light' | 'dark') => {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('deutsch-a1-theme', next); } catch { /* ignore */ }
  };
  const opt = (val: 'light' | 'dark', icon: React.ReactNode, label: string) => (
    <button
      onClick={() => choose(val)}
      aria-pressed={theme === val}
      className={
        'inline-flex items-center gap-1.5 px-3.5 py-2.5 sm:px-3 sm:py-1.5 rounded-full text-[13px] font-rounded font-bold transition-colors ' +
        (theme === val ? 'bg-primary text-primary-ink' : 'text-text-2 hover:bg-surface-2')
      }
    >
      {icon} {label}
    </button>
  );
  return (
    <div className="inline-flex items-center gap-1 border border-border rounded-full p-1 bg-card">
      {opt('light', <Sun size={14} strokeWidth={2.2} />, t('themeLight', locale))}
      {opt('dark', <Moon size={14} strokeWidth={2.2} />, t('themeDark', locale))}
    </div>
  );
}

export function SettingsView() {
  const { state } = useProgress();
  const { settings, setDailyGoal } = useSettings();
  const { locale } = useLocale();
  const streak = currentStreak(state, dateKey(Date.now()));
  const wordsSaved = state.hardWords.length;

  return (
    <div className="max-w-[640px] mx-auto p-6">
      <header className="flex items-center gap-3 mb-6">
        <Link href="/" aria-label={t('backToHome', locale)} className="grid place-items-center w-9 h-9 rounded-[10px] border border-border bg-card text-text-2 hover:border-border-strong transition-colors">
          <ArrowLeft size={18} strokeWidth={2.2} />
        </Link>
        <h1 className="text-[30px] font-extrabold m-0">{t('settings', locale)}</h1>
      </header>

      <div className="grid gap-4">
        {supabaseConfigured && (
          <Link
            href="/account"
            className="flex items-center gap-3 bg-card border border-border rounded-[18px] shadow-card p-4 no-underline text-inherit
              transition-[transform,box-shadow,border-color] duration-150 hover:-translate-y-0.5 hover:shadow-pop hover:border-border-strong"
          >
            <span className="grid place-items-center w-11 h-11 rounded-[13px] bg-[var(--primary-wash)] text-primary shrink-0">
              <Cloud size={20} strokeWidth={2.2} />
            </span>
            <div className="min-w-0 flex-1">
              <b className="font-rounded font-bold block">{t('account', locale)}</b>
              <p className="m-0 text-[13px] text-muted">{t('signInToSync', locale)}</p>
            </div>
            <ChevronRight size={18} className="text-faint shrink-0" />
          </Link>
        )}

        <Card>
          <Row label={t('theme', locale)}><ThemeChoice /></Row>
          <Row label={t('language', locale)}><LanguageToggle /></Row>
          <Row label={t('playbackSpeed', locale)}><SpeedToggle /></Row>
        </Card>

        <Card>
          <p className="label mb-3">{t('dailyGoal', locale)}</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {DAILY_GOAL_OPTIONS.map((g) => (
              <button
                key={g}
                onClick={() => setDailyGoal(g)}
                aria-pressed={settings.dailyGoal === g}
                className={
                  'rounded-[12px] border px-3 py-3 text-center transition-[border-color,background] duration-150 ' +
                  (settings.dailyGoal === g ? 'border-primary bg-[var(--primary-wash)]' : 'border-border bg-card hover:border-border-strong')
                }
              >
                <div className="font-rounded font-extrabold text-[18px] tabular-nums">{g}</div>
                <div className="label text-muted mt-0.5">{t(GOAL_LABEL[g], locale)}</div>
              </button>
            ))}
          </div>
          <p className="text-muted text-[13px] mt-2 mb-0">{t('xpPerDay', locale)}</p>
        </Card>

        <Card>
          <div className="flex justify-between text-center mb-5">
            <div className="flex-1">
              <div className="font-rounded font-extrabold text-[24px] tabular-nums text-primary">{state.xp}</div>
              <div className="label text-muted">{t('totalXp', locale)}</div>
            </div>
            <div className="flex-1">
              <div className="font-rounded font-extrabold text-[24px] tabular-nums">{levelForXp(state.xp)}</div>
              <div className="label text-muted">{t('level', locale)}</div>
            </div>
            <div className="flex-1">
              <div className="font-rounded font-extrabold text-[24px] tabular-nums text-[var(--amber)]">{streak}</div>
              <div className="label text-muted">{t('dayStreak', locale)}</div>
            </div>
            <div className="flex-1">
              <div className="font-rounded font-extrabold text-[24px] tabular-nums">{wordsSaved}</div>
              <div className="label text-muted">{t('wordsSaved', locale)}</div>
            </div>
          </div>
          <ActivityCalendar />
        </Card>
      </div>
    </div>
  );
}

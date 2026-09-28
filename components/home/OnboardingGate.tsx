'use client';
import { useEffect, useState } from 'react';
import { useSettings, DAILY_GOAL_OPTIONS } from '@/lib/settings-store';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { Mascot } from '@/components/ui/Mascot';

const GOAL_LABEL: Record<number, UIKey> = { 20: 'goalRelaxed', 30: 'goalRegular', 50: 'goalSerious', 100: 'goalIntense' };

export function OnboardingGate() {
  const { settings, completeOnboarding } = useSettings();
  const { locale } = useLocale();
  const [mounted, setMounted] = useState(false);
  const [goal, setGoal] = useState(30);

  // Gate on mount so server and first client render agree (both null), then the
  // overlay appears only for a genuinely un-onboarded learner — no SSR flash.
  useEffect(() => setMounted(true), []);
  if (!mounted || settings.onboarded) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-6 bg-[color:color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-sm">
      <div className="w-full max-w-[440px] text-center">
        <Mascot size={72} expression="happy" className="mx-auto" />
        <h1 className="text-[28px] font-extrabold mt-4 mb-2">{t('onboardingTitle', locale)}</h1>
        <p className="text-muted m-0 mb-6">{t('onboardingSubtitle', locale)}</p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          {DAILY_GOAL_OPTIONS.map((g) => (
            <button
              key={g}
              onClick={() => setGoal(g)}
              aria-pressed={goal === g}
              className={
                'rounded-[14px] border px-3 py-4 text-center transition-[border-color,background] duration-150 ' +
                (goal === g ? 'border-primary bg-[var(--primary-wash)]' : 'border-border bg-card hover:border-border-strong')
              }
            >
              <div className="font-rounded font-extrabold text-[20px] tabular-nums">{g}</div>
              <div className="label text-muted mt-0.5">{t(GOAL_LABEL[g], locale)} · {t('xpPerDay', locale)}</div>
            </button>
          ))}
        </div>

        <Button onClick={() => completeOnboarding(goal)} className="w-full justify-center">
          {t('startLearning', locale)}
        </Button>
      </div>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { useSettings, DAILY_GOAL_OPTIONS } from '@/lib/settings-store';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { GenderShape } from '@/components/ui/GenderShape';

const GOAL_LABEL: Record<number, UIKey> = { 20: 'goalRelaxed', 30: 'goalRegular', 50: 'goalSerious', 100: 'goalIntense' };
// Plain-language gloss for each XP goal (a lesson is roughly 20 XP of exercises plus a bonus).
const GOAL_MINUTES: Record<number, number> = { 20: 5, 30: 10, 50: 20, 100: 40 };

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
    <div role="dialog" aria-modal="true" aria-labelledby="onboarding-title" className="fixed inset-0 z-50 grid place-items-center p-6 bg-bg/90 backdrop-blur-[7px]">
      <div className="w-full max-w-[460px] text-center">
        <div className="flex justify-center items-end gap-1.5 mb-5" aria-hidden="true">
          <GenderShape gender="der" size={22} /><GenderShape gender="die" size={22} /><GenderShape gender="das" size={22} />
        </div>
        <h1 id="onboarding-title" className="font-display text-[34px] font-semibold tracking-[-0.02em] mt-0 mb-2">{t('onboardingTitle', locale)}</h1>
        <p className="text-text-2 m-0 mb-7">{t('onboardingSubtitle', locale)}</p>

        <div className="grid grid-cols-2 gap-3 mb-7">
          {DAILY_GOAL_OPTIONS.map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => setGoal(g)}
              aria-pressed={goal === g}
              className={
                'rounded-[20px] border px-3 py-5 text-center cursor-pointer transition-[border-color,background] duration-150 ' +
                (goal === g ? 'border-text bg-surface-2' : 'border-border bg-card hover:border-border-strong')
              }
            >
              <div className="font-display font-semibold text-[28px] tabular-nums leading-none">{g} <span className="text-[14px] text-muted font-medium">XP</span></div>
              <div className="text-[13px] text-text-2 mt-2">{t(GOAL_LABEL[g], locale)} · ≈ {GOAL_MINUTES[g]} min</div>
            </button>
          ))}
        </div>

        <Button size="lg" onClick={() => completeOnboarding(goal)} className="w-full">
          {t('startLearning', locale)}
        </Button>
      </div>
    </div>
  );
}

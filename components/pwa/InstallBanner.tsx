'use client';
import { useState, useSyncExternalStore } from 'react';
import { Share, Smartphone, X } from 'lucide-react';
import { promptInstall, useInstallState } from '@/lib/pwa';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';

const DISMISS_KEY = 'deutsch-a1-install-dismissed';
const SNOOZE_MS = 14 * 24 * 60 * 60 * 1000;

function recentlyDismissed(): boolean {
  try {
    const at = Number(localStorage.getItem(DISMISS_KEY));
    return at > 0 && Date.now() - at < SNOOZE_MS;
  } catch {
    return false;
  }
}

const noopSubscribe = () => () => {};

export function InstallBanner() {
  const state = useInstallState();
  const { locale } = useLocale();
  // Server snapshot is 'snoozed' so SSR and first paint agree; the real value is read on the client.
  const snoozed = useSyncExternalStore(noopSubscribe, recentlyDismissed, () => true);
  const [closed, setClosed] = useState(false);

  if (state === 'none' || snoozed || closed) return null;

  const dismiss = () => {
    try {
      localStorage.setItem(DISMISS_KEY, String(Date.now()));
    } catch {}
    setClosed(true);
  };

  return (
    <div
      role="region"
      aria-label={t('installTitle', locale)}
      className="relative grid grid-cols-[auto_1fr] sm:grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-3 mb-6 p-4 pr-11 rounded-[18px] border border-[color:color-mix(in_srgb,var(--primary)_35%,transparent)] bg-[linear-gradient(120deg,var(--primary-wash),transparent)]"
    >
      <span className="grid place-items-center shrink-0 w-11 h-11 rounded-[13px] bg-[var(--primary-wash)] text-primary">
        <Smartphone size={20} strokeWidth={2.2} />
      </span>
      <div className="min-w-0">
        <b className="font-rounded font-bold text-[15px] block">{t('installTitle', locale)}</b>
        {state === 'ios' ? (
          <p className="m-0 text-[13px] text-text-2">
            <Share size={14} className="inline -mt-0.5 mr-1 text-primary" aria-hidden="true" />
            {t('installIos', locale)}
          </p>
        ) : (
          <p className="m-0 text-[13px] text-text-2">{t('installBody', locale)}</p>
        )}
      </div>
      {state === 'prompt' && (
        <Button size="sm" className="col-span-2 sm:col-span-1 w-full sm:w-auto" onClick={() => void promptInstall()}>
          {t('installButton', locale)}
        </Button>
      )}
      <button
        type="button"
        onClick={dismiss}
        aria-label={t('installDismiss', locale)}
        className="absolute top-1.5 right-1.5 grid place-items-center w-9 h-9 rounded-full text-muted hover:text-text hover:bg-surface-2"
      >
        <X size={16} />
      </button>
    </div>
  );
}

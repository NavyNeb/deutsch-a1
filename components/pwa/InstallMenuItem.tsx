'use client';
import { Download, Share } from 'lucide-react';
import { promptInstall, useInstallState } from '@/lib/pwa';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

export function InstallMenuItem({ onDone }: { onDone?: () => void }) {
  const state = useInstallState();
  const { locale } = useLocale();
  if (state === 'none') return null;

  if (state === 'ios') {
    return (
      <p className="m-0 flex items-start gap-2 rounded-[12px] px-3 py-2.5 text-[13px] text-text-2 bg-surface-2">
        <Share size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
        {t('installIos', locale)}
      </p>
    );
  }
  return (
    <button
      type="button"
      onClick={() => {
        void promptInstall();
        onDone?.();
      }}
      className="flex items-center gap-2 rounded-[12px] px-3 py-2.5 text-left font-rounded font-semibold text-primary hover:bg-surface-2"
    >
      <Download size={18} aria-hidden="true" />
      {t('installMenu', locale)}
    </button>
  );
}

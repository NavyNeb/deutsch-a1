'use client';
import { WifiOff } from 'lucide-react';
import { useOnline } from '@/lib/pwa';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

export function OfflineBar() {
  const online = useOnline();
  const { locale } = useLocale();
  if (online) return null;
  return (
    <div role="status" className="flex items-center justify-center gap-2 px-4 pb-1.5 pt-[max(0.375rem,env(safe-area-inset-top))] bg-amber text-[13px] font-rounded font-semibold text-[#14140F] text-center">
      <WifiOff size={14} aria-hidden="true" className="shrink-0" />
      {t('offlineBar', locale)}
    </div>
  );
}

'use client';
import Link from 'next/link';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { Mascot } from '@/components/ui/Mascot';

export function OfflineScreen() {
  const { locale } = useLocale();
  return (
    <div className="mx-auto max-w-[440px] px-5 py-20 text-center">
      <Mascot size={72} expression="think" className="mx-auto" />
      <h1 className="text-[28px] font-extrabold mt-4 mb-2">{t('offlineTitle', locale)}</h1>
      <p className="text-muted m-0 mb-6">{t('offlineBody', locale)}</p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button onClick={() => window.location.reload()}>{t('offlineRetry', locale)}</Button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-5 py-3 text-[15px] font-rounded font-bold no-underline bg-[var(--soft)] text-[var(--soft-ink)] hover:brightness-[1.03]"
        >
          {t('offlineHome', locale)}
        </Link>
      </div>
    </div>
  );
}

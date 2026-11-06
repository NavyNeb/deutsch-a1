'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV_ITEMS, activeNavId } from '@/lib/nav';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';

export function MobileTabBar() {
  const pathname = usePathname();
  const active = activeNavId(pathname);
  const { locale } = useLocale();

  return (
    <nav
      aria-label={t('navTabs', locale)}
      className="md:hidden fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-bg/90 backdrop-blur px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      {NAV_ITEMS.map((item) => {
        const on = active === item.id;
        const Icon = item.icon;
        return (
          <Link
            key={item.id}
            href={item.href}
            aria-current={on ? 'page' : undefined}
            className={'flex-1 min-w-0 flex flex-col items-center gap-1 min-h-[56px] pt-1.5 no-underline text-[12px] font-medium ' + (on ? 'text-text' : 'text-muted')}
          >
            <span className={'grid place-items-center w-14 h-[30px] rounded-full transition-colors ' + (on ? 'bg-surface-3' : '')}>
              <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
            </span>
            <span className="truncate max-w-full">{item.de}</span>
          </Link>
        );
      })}
    </nav>
  );
}

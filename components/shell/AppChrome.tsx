'use client';
import { usePathname } from 'next/navigation';
import { isImmersive } from '@/lib/nav';
import { AppRail } from './AppRail';
import { MobileTabBar } from './MobileTabBar';
import { OfflineBar } from '@/components/pwa/OfflineBar';
import { CommandPalette } from './CommandPalette';

// The guided lesson players are focused, full-screen modes with their own chrome.
// Everything else gets the app shell: a left rail on desktop, a tab bar on phones.
export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isImmersive(pathname)) return <>{children}</>;
  return (
    <div className="flex min-h-[100dvh]">
      <AppRail />
      <div className="flex-1 min-w-0 flex flex-col">
        <OfflineBar />
        <main className="flex-1 w-full pb-[calc(76px+env(safe-area-inset-bottom))] md:pb-0">{children}</main>
      </div>
      <MobileTabBar />
      <CommandPalette />
    </div>
  );
}

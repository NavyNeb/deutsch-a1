'use client';
import { usePathname } from 'next/navigation';
import { TopNav } from './TopNav';
import { SiteFooter } from './SiteFooter';

// The guided lesson player is a focused, full-screen mode with its own chrome,
// so it opts out of the global nav/footer. Everything else gets the app shell.
const isImmersive = (p: string) => /^\/lesson\/[^/]+\/learn$/.test(p);

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isImmersive(pathname)) return <>{children}</>;
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <TopNav />
      <main className="flex-1 w-full">{children}</main>
      <SiteFooter />
    </div>
  );
}

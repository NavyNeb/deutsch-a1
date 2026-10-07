'use client';
import { useEffect } from 'react';
import { startInstallCapture } from '@/lib/pwa';

// Registers the offline service worker in production only: in dev a caching worker
// fights hot reload, so any worker left over from a prod build is removed instead.
export function ServiceWorkerRegister() {
  useEffect(() => {
    startInstallCapture();
    if (!('serviceWorker' in navigator)) return;
    if (process.env.NODE_ENV !== 'production') {
      navigator.serviceWorker.getRegistrations().then((rs) => rs.forEach((r) => r.unregister())).catch(() => {});
      return;
    }
    navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' }).catch(() => {});
  }, []);
  return null;
}

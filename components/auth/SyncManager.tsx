'use client';
import { useEffect } from 'react';
import { supabaseConfigured } from '@/lib/supabase/config';
import { createClient } from '@/lib/supabase/client';
import { getProgressState, replaceProgress, subscribeProgress } from '@/lib/progress-store';
import { getSettingsState, replaceSettings, subscribeSettings } from '@/lib/settings-store';
import { mergeProgress, type ProgressState } from '@/lib/progress';
import type { Settings } from '@/lib/settings-store';

// Mounted once in the layout. When a user is signed in, it pulls their cloud
// state, merges it with whatever is local (so nothing is lost), writes the merged
// result back to both the local stores and the cloud, then debounce-pushes every
// subsequent change up. No-ops entirely when Supabase isn't configured.
export function SyncManager() {
  useEffect(() => {
    if (!supabaseConfigured) return;
    const supabase = createClient();
    let stopChangeSub: (() => void) | undefined;
    let pushTimer: ReturnType<typeof setTimeout> | undefined;

    const push = async (uid: string) => {
      await supabase.from('user_state').upsert({
        user_id: uid,
        progress: getProgressState(),
        settings: getSettingsState(),
        updated_at: new Date().toISOString(),
      });
    };
    const schedulePush = (uid: string) => {
      if (pushTimer) clearTimeout(pushTimer);
      pushTimer = setTimeout(() => void push(uid), 1200);
    };

    const onUser = async (uid: string | null) => {
      stopChangeSub?.();
      stopChangeSub = undefined;
      if (!uid) return;

      const { data } = await supabase
        .from('user_state')
        .select('progress, settings')
        .eq('user_id', uid)
        .maybeSingle();

      const cloudProgress = data?.progress as Partial<ProgressState> | undefined;
      if (cloudProgress && Object.keys(cloudProgress).length) {
        replaceProgress(mergeProgress(getProgressState(), cloudProgress));
      }
      const cloudSettings = data?.settings as Partial<Settings> | undefined;
      if (cloudSettings && Object.keys(cloudSettings).length) {
        replaceSettings(cloudSettings);
      }

      await push(uid); // seed/merge cloud with the reconciled state
      const p = subscribeProgress(() => schedulePush(uid));
      const s = subscribeSettings(() => schedulePush(uid));
      stopChangeSub = () => { p(); s(); };
    };

    void supabase.auth.getUser().then(({ data }) => onUser(data.user?.id ?? null));
    const { data: authSub } = supabase.auth.onAuthStateChange((_e, session) =>
      onUser(session?.user?.id ?? null),
    );

    return () => {
      authSub.subscription.unsubscribe();
      stopChangeSub?.();
      if (pushTimer) clearTimeout(pushTimer);
    };
  }, []);

  return null;
}

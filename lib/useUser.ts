'use client';
import { useEffect, useState } from 'react';
import { supabaseConfigured } from '@/lib/supabase/config';
import { createClient } from '@/lib/supabase/client';

export type MinimalUser = { id: string; email?: string };

// Current signed-in Supabase user (or null). Null when auth isn't configured.
export function useUser(): MinimalUser | null {
  const [user, setUser] = useState<MinimalUser | null>(null);
  useEffect(() => {
    if (!supabaseConfigured) return;
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser((data.user as MinimalUser) ?? null));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setUser((s?.user as MinimalUser) ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);
  return user;
}

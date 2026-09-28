'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, LogOut, Cloud, Trash2 } from 'lucide-react';
import { supabaseConfigured } from '@/lib/supabase/config';
import { createClient } from '@/lib/supabase/client';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Mascot } from '@/components/ui/Mascot';

type MinimalUser = { id: string; email?: string };

export function AccountView() {
  const { locale } = useLocale();
  const supabase = useMemo(() => (supabaseConfigured ? createClient() : null), []);
  const [user, setUser] = useState<MinimalUser | null>(null);
  const [ready, setReady] = useState(false);
  const [mode, setMode] = useState<'in' | 'up'>('in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!supabase) { setReady(true); return; }
    supabase.auth.getUser().then(({ data }) => { setUser((data.user as MinimalUser) ?? null); setReady(true); });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => setUser((session?.user as MinimalUser) ?? null));
    return () => sub.subscription.unsubscribe();
  }, [supabase]);

  const back = (
    <Link href="/settings" aria-label={t('settings', locale)} className="grid place-items-center w-9 h-9 rounded-[10px] border border-border bg-card text-text-2 hover:border-border-strong transition-colors">
      <ArrowLeft size={18} strokeWidth={2.2} />
    </Link>
  );

  const shell = (children: React.ReactNode) => (
    <div className="max-w-[440px] mx-auto p-6">
      <header className="flex items-center gap-3 mb-6">{back}<h1 className="text-[30px] font-extrabold m-0">{t('account', locale)}</h1></header>
      {children}
    </div>
  );

  if (!supabase) {
    return shell(<Card><p className="text-muted m-0">Cloud sync isn’t configured in this environment.</p></Card>);
  }
  if (!ready) return shell(<Card><p className="text-muted m-0">…</p></Card>);

  if (user) {
    return shell(
      <div className="grid gap-4">
        <Card>
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-11 h-11 rounded-[13px] bg-[var(--good-wash)] text-[var(--good)] shrink-0">
              <Cloud size={20} strokeWidth={2.2} />
            </span>
            <div className="min-w-0">
              <b className="font-rounded font-bold block truncate">{user.email}</b>
              <p className="m-0 text-[13px] text-muted">{t('syncOn', locale)}</p>
            </div>
          </div>
        </Card>
        <Button variant="secondary" onClick={async () => { await supabase.auth.signOut(); }} className="justify-center">
          <LogOut size={16} strokeWidth={2.2} /> {t('signOut', locale)}
        </Button>
        <button
          onClick={async () => {
            if (!window.confirm(t('deleteDataConfirm', locale))) return;
            await supabase.from('user_state').delete().eq('user_id', user.id);
            await supabase.auth.signOut();
          }}
          className="inline-flex items-center justify-center gap-1.5 text-[var(--bad)] text-sm font-rounded font-semibold py-2 hover:underline"
        >
          <Trash2 size={15} strokeWidth={2.2} /> {t('deleteData', locale)}
        </button>
      </div>,
    );
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;
    setBusy(true);
    setMsg(null);
    const { error } =
      mode === 'in'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });
    setBusy(false);
    if (error) setMsg(error.message);
    else if (mode === 'up') setMsg(t('checkEmailConfirm', locale));
  };

  const field = 'w-full rounded-[12px] border border-border bg-card px-4 py-3 text-[15px] outline-none focus:border-primary transition-colors';

  return shell(
    <Card>
      <div className="text-center mb-5">
        <Mascot size={56} expression="happy" className="mx-auto" />
        <p className="text-muted mt-3 mb-0 text-[15px]">{t('signInToSync', locale)}</p>
      </div>
      <form onSubmit={submit} className="grid gap-3">
        <input className={field} type="email" required autoComplete="email" placeholder={t('emailLabel', locale)} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={field} type="password" required autoComplete={mode === 'in' ? 'current-password' : 'new-password'} minLength={6} placeholder={t('passwordLabel', locale)} value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" disabled={busy} className="w-full justify-center">
          {mode === 'in' ? t('signIn', locale) : t('signUp', locale)}
        </Button>
      </form>
      {msg && <p className="text-[13px] text-text-2 mt-3 mb-0">{msg}</p>}
      <button
        onClick={() => { setMode(mode === 'in' ? 'up' : 'in'); setMsg(null); }}
        className="w-full text-center text-[13px] text-primary font-rounded font-semibold mt-4 hover:underline"
      >
        {mode === 'in' ? t('toggleToSignUp', locale) : t('toggleToSignIn', locale)}
      </button>
    </Card>,
  );
}

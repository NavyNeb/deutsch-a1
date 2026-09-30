import { dateKey } from './progress';

const KEY = 'deutsch-a1-practice-xp';

type Ledger = { date: string; claimed: string[]; earned: number };

type Opts = { storage?: Pick<Storage, 'getItem' | 'setItem'>; today?: string };

function read(storage: Opts['storage'], today: string): Ledger {
  try {
    const raw = storage?.getItem(KEY);
    if (raw) {
      const l = JSON.parse(raw) as Ledger;
      if (l.date === today && Array.isArray(l.claimed)) return l;
    }
  } catch { /* corrupt or unavailable — start fresh */ }
  return { date: today, claimed: [], earned: 0 };
}

function defaultStorage(): Opts['storage'] {
  try { return typeof window === 'undefined' ? undefined : window.localStorage; } catch { return undefined; }
}

// XP a learner can still earn for `id` today. Each id pays once per day, and all
// speak/write practice together pays at most `dailyCap`, so retrying one sentence
// cannot be farmed. Returns the amount to award (0 when already claimed or capped).
export function claimPracticeXp(id: string, amount: number, dailyCap: number, opts: Opts = {}): number {
  const storage = 'storage' in opts ? opts.storage : defaultStorage();
  const today = opts.today ?? dateKey(Date.now());
  const ledger = read(storage, today);
  if (ledger.claimed.includes(id)) return 0;
  const granted = Math.max(0, Math.min(amount, dailyCap - ledger.earned));
  if (granted === 0) return 0;
  ledger.claimed.push(id);
  ledger.earned += granted;
  try { storage?.setItem(KEY, JSON.stringify(ledger)); } catch { /* ignore */ }
  return granted;
}

export function hasClaimedToday(id: string, opts: Opts = {}): boolean {
  const storage = 'storage' in opts ? opts.storage : defaultStorage();
  return read(storage, opts.today ?? dateKey(Date.now())).claimed.includes(id);
}

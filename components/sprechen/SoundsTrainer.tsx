'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Mic, RotateCcw, Square, Volume2, X } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { dateKey } from '@/lib/progress';
import { useProgress } from '@/lib/progress-store';
import { claimPracticeXp } from '@/lib/daily-xp';
import { playOrSpeak } from '@/lib/audio';
import { useSpeechRecognition } from '@/lib/useSpeechRecognition';
import { bestAlternative } from '@/lib/speech-score';
import { MINIMAL_PAIRS, SOUND_GROUPS, type MinimalPair } from '@/content/sprechen';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const ROUND = 10;

type Q = { pair: MinimalPair; heard: 'a' | 'b' };

function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

export function buildRound(pairs: MinimalPair[], n = ROUND): Q[] {
  const out: Q[] = [];
  const pool = shuffle(pairs);
  for (let i = 0; i < n && pool.length; i++) out.push({ pair: pool[i % pool.length], heard: Math.random() < 0.5 ? 'a' : 'b' });
  return out;
}

export function SoundsTrainer() {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const sr = useSpeechRecognition('de-DE', 3);
  const [group, setGroup] = useState('all');
  const [round, setRound] = useState<Q[]>(() => []);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<'a' | 'b' | null>(null);
  const [right, setRight] = useState(0);
  const [xp, setXp] = useState(0);

  const pairs = useMemo(() => MINIMAL_PAIRS.filter((p) => group === 'all' || p.group === group), [group]);
  const q = round[idx];
  const finished = round.length > 0 && idx >= round.length;
  const g = SOUND_GROUPS.find((x) => x.id === (q?.pair.group ?? ''));

  const begin = () => { setRound(buildRound(pairs)); setIdx(0); setPicked(null); setRight(0); setXp(0); sr.reset(); };

  const answer = (side: 'a' | 'b') => {
    if (!q || picked) return;
    setPicked(side);
    if (side === q.heard) setRight((r) => r + 1);
  };

  const advance = () => {
    sr.reset(); setPicked(null);
    const next = idx + 1;
    setIdx(next);
    if (next >= round.length && right >= 7) {
      const granted = claimPracticeXp(`sounds:${dateKey(Date.now())}`, 10, 60);
      if (granted > 0) { awardXp(granted); setXp(granted); }
    }
  };

  const both = q ? `${q.pair.a} ${q.pair.b}` : '';
  const best = q && picked && sr.alternatives && !sr.listening ? bestAlternative(sr.alternatives, both) : null;

  return (
    <div className="mx-auto max-w-[720px] px-5 py-8 md:py-12">
      <Link href="/speak" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('backToHub', locale)}</Link>
      <h1 className="font-display font-extrabold text-[30px] md:text-[40px] m-0 mt-2">{sc('soundsTitle', locale)}</h1>
      <p className="text-text-2 text-[16px] leading-relaxed mt-2 mb-5 max-w-[60ch]">{sc('soundsTag', locale)}</p>

      {round.length === 0 || finished ? (
        <Card>
          {finished && <p className="font-display font-extrabold text-[40px] leading-none m-0 mb-1">{right} / {round.length} <span className="text-muted text-[16px] font-bold">{sc('soundsScore', locale)}</span>{xp > 0 && <span className="text-muted text-[15px] font-bold"> · +{xp} XP</span>}</p>}
          <div className="flex flex-wrap gap-2 my-4" role="radiogroup" aria-label={sc('soundsTitle', locale)}>
            {[{ id: 'all', en: 'All', fr: 'Tout' }, ...SOUND_GROUPS].map((s) => (
              <button key={s.id} type="button" role="radio" aria-checked={group === s.id} onClick={() => setGroup(s.id)}
                className={'rounded-full px-3.5 py-1.5 text-[13.5px] font-display font-bold border transition ' + (group === s.id ? 'bg-cta text-cta-ink border-transparent' : 'bg-card text-text-2 border-border hover:border-text')}>{pick(s.en, s.fr, locale)}</button>
            ))}
          </div>
          <Button onClick={begin}>{finished ? <RotateCcw size={17} /> : null}{finished ? sc('again', locale) : sc('start', locale)}</Button>
        </Card>
      ) : q ? (
        <>
          <p className="text-muted text-[13.5px] m-0 mb-3">{idx + 1} / {round.length}</p>
          <Card className="!p-6 text-center">
            <p className="label text-muted m-0 mb-4">{sc('soundsPair', locale)}</p>
            <Button variant="secondary" onClick={() => void playOrSpeak(q.pair[q.heard])}><Volume2 size={18} />{sc('listen', locale)}</Button>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {(['a', 'b'] as const).map((side) => {
                const isHeard = q.heard === side;
                const cls = !picked ? 'bg-card border-border hover:border-text' : isHeard ? 'bg-[var(--ok-wash)] border-[var(--ok)] text-[var(--ok-t)]' : picked === side ? 'bg-[var(--ember-wash)] border-[var(--ember)] text-[var(--ember-t)]' : 'bg-card border-border opacity-55';
                return (
                  <button key={side} type="button" onClick={() => answer(side)} disabled={!!picked} lang="de"
                    className={'rounded-[16px] border-2 px-4 py-5 font-display font-extrabold text-[24px] transition ' + cls}>
                    {q.pair[side]}
                    {picked && isHeard && <Check size={18} strokeWidth={3} className="inline ml-2" />}
                    {picked && picked === side && !isHeard && <X size={18} strokeWidth={3} className="inline ml-2" />}
                  </button>
                );
              })}
            </div>
            {picked && (
              <div className="mt-6 text-left border-t border-border pt-4">
                <p className="m-0 text-[15px]"><b lang="de">{q.pair.a}</b> = {pick(q.pair.ea, q.pair.fa, locale)} · <b lang="de">{q.pair.b}</b> = {pick(q.pair.eb, q.pair.fb, locale)}</p>
                {g && <p className="text-muted text-[13.5px] mt-2 mb-0">{g.en === g.fr ? g.en : pick(g.en, g.fr, locale)}: {pick(g.tip.en, g.tip.fr, locale)}</p>}
                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <Button variant="secondary" size="sm" onClick={() => void playOrSpeak(q.pair[q.heard === 'a' ? 'b' : 'a'])}><Volume2 size={16} />{sc('listen', locale)} ({q.pair[q.heard === 'a' ? 'b' : 'a']})</Button>
                  {sr.supported && (
                    <button type="button" onClick={sr.listening ? sr.stop : sr.listen}
                      className={'inline-flex items-center gap-2 rounded-full px-4 py-2 font-display font-bold text-[14px] transition ' + (sr.listening ? 'bg-[var(--ember)] text-[#1A0C02] animate-pulse' : 'bg-cta text-cta-ink')}>
                      {sr.listening ? <Square size={15} fill="currentColor" /> : <Mic size={15} />}{sc('soundsSay', locale)}
                    </button>
                  )}
                </div>
                {best && <p className="text-muted text-[14px] mt-3 mb-0">{best.score.percent}% · {sc('heardYou', locale)} „{best.text}“</p>}
                <div className="flex justify-end mt-4"><Button onClick={advance}>{idx + 1 >= round.length ? sc('done', locale) : sc('next', locale)}</Button></div>
              </div>
            )}
          </Card>
        </>
      ) : null}
      <p className="mt-8 text-[12.5px] text-muted leading-relaxed max-w-[70ch]">{sc('honestNote', locale)}</p>
    </div>
  );
}

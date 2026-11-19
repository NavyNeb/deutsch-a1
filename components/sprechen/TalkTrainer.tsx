'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Mic, RotateCcw, Shuffle, Square } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { sc, type SprechenKey } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { dateKey } from '@/lib/progress';
import { useProgress } from '@/lib/progress-store';
import { claimPracticeXp } from '@/lib/daily-xp';
import { TALK_TOPICS, type SpeakLevelBX, type TalkTopic } from '@/content/sprechen';
import { analyzeTalk, talkTips, type TalkMetrics, type TalkTip } from '@/lib/sprechen-metrics';
import { TALK_STRUCTURE } from '@/lib/sprechen-structure';
import { loadSprechen, recordSpeaking, saveSprechen } from '@/lib/sprechen-stats';
import { saveTake } from '@/lib/takes-store';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Segmented } from '@/components/ui/Segmented';
import { TakePlayer } from './TakePlayer';
import { useTalkSession } from './useTalkSession';

const LENGTHS: Record<SpeakLevelBX, number[]> = { B1: [60, 90], B2: [120, 180, 240] };
const XP_PER_TALK = 15;
const XP_DAILY_CAP = 60;

const TIP_KEY: Record<TalkTip, SprechenKey> = {
  speakMore: 'tipSpeakMore', slowPace: 'tipSlowPace', fastPace: 'tipFastPace', moreConnectors: 'tipMoreConnectors',
  tryKonjunktiv: 'tipTryKonjunktiv', moreVariety: 'tipMoreVariety', great: 'tipGreat',
};

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

type Done = { metrics: TalkMetrics; text: string; blob: Blob | null; topic: TalkTopic; level: SpeakLevelBX };

export function TalkTrainer() {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const session = useTalkSession();
  const [level, setLevel] = useState<SpeakLevelBX>('B1');
  const [length, setLength] = useState(60);
  const [topic, setTopic] = useState<TalkTopic | null>(null);
  const [done, setDone] = useState<Done | null>(null);
  const [xp, setXp] = useState(0);
  const finishing = useRef(false);

  const topics = useMemo(() => TALK_TOPICS.filter((t) => t.level === level), [level]);
  const chooseLevel = (l: SpeakLevelBX) => { setLevel(l); setLength(LENGTHS[l][0]); setTopic(null); };

  const begin = async (t: TalkTopic) => { setTopic(t); setDone(null); setXp(0); finishing.current = false; await session.start(); };

  const finish = async () => {
    if (finishing.current || !topic) return;
    finishing.current = true;
    const r = await session.finish();
    const metrics = analyzeTalk(r.text, r.seconds, { structure: TALK_STRUCTURE });
    setDone({ metrics, text: r.text, blob: r.blob, topic, level });
    const today = dateKey(Date.now());
    saveSprechen(recordSpeaking(loadSprechen(), today, { seconds: r.seconds, words: metrics.words, wordsPerMinute: metrics.wordsPerMinute }));
    if (r.blob) {
      void saveTake({ id: `talk-${Date.now()}`, at: Date.now(), kind: 'talk', label: topic.de, seconds: Math.round(r.seconds), words: metrics.words, wordsPerMinute: metrics.wordsPerMinute, blob: r.blob });
    }
    if (r.seconds >= length * 0.5) {
      const granted = claimPracticeXp(`talk:${topic.id}`, XP_PER_TALK, XP_DAILY_CAP);
      if (granted > 0) { awardXp(granted); setXp(granted); }
    }
  };

  const remaining = Math.max(0, length - session.elapsed);
  // The talk ends by itself when the time is up.
  const timeUp = session.running && remaining <= 0;
  useEffect(() => { if (timeUp && !finishing.current) void finish(); }, [timeUp]); // eslint-disable-line react-hooks/exhaustive-deps

  // ---- speaking ----
  if (session.running && topic) {
    const metricsNow = analyzeTalk(session.text, session.elapsed, { structure: TALK_STRUCTURE });
    return (
      <Shell>
        <div className="flex items-center justify-between gap-4 mb-5">
          <h1 className="font-display font-extrabold text-[26px] md:text-[32px] m-0 leading-tight">{topic.de}</h1>
          <span className="font-display font-extrabold text-[30px] tabular-nums shrink-0" aria-label={sc('talkTime', locale)}>{mmss(remaining)}</span>
        </div>
        <div className="h-2 rounded-full bg-surface-3 overflow-hidden mb-6"><div className="h-full rounded-full bg-cta transition-[width] duration-300" style={{ width: `${Math.min(100, (session.elapsed / length) * 100)}%` }} /></div>

        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <p className="label text-muted m-0 mb-2">{sc('talkIdeas', locale)}</p>
            <ul className="m-0 pl-5 grid gap-2 text-[16px] text-text-2">{topic.points.map((p) => <li key={p} lang="de">{p}</li>)}</ul>
            <p className="label text-muted mt-4 mb-2">{sc('talkWords', locale)}</p>
            <p className="m-0 flex flex-wrap gap-2">{topic.words.map((w) => <span key={w} lang="de" className="rounded-full bg-surface-2 px-3 py-1 text-[14px]">{w}</span>)}</p>
          </Card>
          <Card>
            <p className="label text-muted m-0 mb-2">{sc('talkLive', locale)}</p>
            <p lang="de" className="m-0 text-[16px] leading-relaxed min-h-[120px]">{session.text || '…'}</p>
            <ul className="list-none m-0 mt-4 p-0 grid grid-cols-2 gap-x-3 gap-y-1.5 text-[13.5px]">
              {TALK_STRUCTURE.map((s) => {
                const ok = metricsNow.structureDone.includes(s.id);
                return <li key={s.id} className={'flex items-center gap-1.5 ' + (ok ? 'text-[var(--ok-t)] font-semibold' : 'text-muted')}><Check size={14} strokeWidth={3} className={ok ? '' : 'opacity-30'} />{pick(s.en, s.fr, locale)}</li>;
              })}
            </ul>
          </Card>
        </div>

        <div className="flex justify-center mt-7">
          <button type="button" onClick={() => void finish()} aria-label={sc('stop', locale)}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--ember)] text-[#1A0C02] px-7 py-4 font-display font-bold text-[16px] animate-pulse">
            <Square size={20} fill="currentColor" /> {sc('stop', locale)}
          </button>
        </div>
        {session.speechReady && !session.speechSupported && <p className="text-center text-muted text-[13.5px] mt-4">{sc('noRecognition', locale)}</p>}
      </Shell>
    );
  }

  // ---- result ----
  if (done) {
    const m = done.metrics;
    const tips = talkTips(m, done.level);
    return (
      <Shell>
        <h1 className="font-display font-extrabold text-[26px] md:text-[32px] m-0 mb-1">{sc('talkResult', locale)}</h1>
        <p lang="de" className="text-muted mt-0 mb-5">{done.topic.de}</p>
        {session.speechSupported ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
            <Stat value={mmss(m.seconds)} label={sc('talkTime', locale)} />
            <Stat value={String(m.words)} label={sc('talkWordsStat', locale)} />
            <Stat value={String(m.wordsPerMinute)} label={sc('talkWpm', locale)} />
            <Stat value={String(m.distinctWords)} label={sc('talkVariety', locale)} />
            <Stat value={String(m.connectors.length)} label={sc('talkConnectors', locale)} />
            <Stat value={String(m.konjunktivII)} label={sc('talkKonj', locale)} />
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-5"><Stat value={mmss(m.seconds)} label={sc('talkTime', locale)} /></div>
        )}

        {session.speechSupported && (
          <>
            <Card className="mb-4">
              <ul className="list-none m-0 p-0 grid sm:grid-cols-2 gap-x-3 gap-y-1.5 text-[14px]">
                {TALK_STRUCTURE.map((s) => {
                  const ok = m.structureDone.includes(s.id);
                  return <li key={s.id} className={'flex items-center gap-1.5 ' + (ok ? 'text-[var(--ok-t)] font-semibold' : 'text-muted')}><Check size={14} strokeWidth={3} className={ok ? '' : 'opacity-30'} />{pick(s.en, s.fr, locale)}</li>;
                })}
              </ul>
              {m.connectors.length > 0 && <p className="m-0 mt-3 text-[14px] text-text-2" lang="de">{m.connectors.join(' · ')}</p>}
            </Card>
            <Card className="mb-4">
              <p className="label text-muted m-0 mb-2">{sc('talkTips', locale)}</p>
              <ul className="m-0 pl-5 grid gap-1.5 text-[15px] text-text-2">{tips.map((tip) => <li key={tip}>{sc(TIP_KEY[tip], locale)}</li>)}</ul>
            </Card>
            <Card className="mb-4">
              <p className="label text-muted m-0 mb-2">{sc('talkLive', locale)}</p>
              <p lang="de" className="m-0 text-[15px] leading-relaxed text-text-2">{done.text || '—'}</p>
            </Card>
          </>
        )}

        <div className="flex flex-wrap items-center gap-3">
          {done.blob && <TakePlayer blob={done.blob} />}
          <Button onClick={() => void begin(done.topic)}><RotateCcw size={17} />{sc('again', locale)}</Button>
          <Button variant="secondary" onClick={() => { setDone(null); setTopic(null); }}>{sc('talkPick', locale)}</Button>
          {xp > 0 && <span className="text-muted text-[14px]">+{xp} XP</span>}
        </div>
        {done.blob && <p className="text-[12.5px] text-muted mt-3">{sc('talkSaved', locale)}</p>}
        <p className="mt-6 text-[12.5px] text-muted max-w-[70ch]">{sc('honestNote', locale)}</p>
      </Shell>
    );
  }

  // ---- pick a topic ----
  return (
    <Shell>
      <h1 className="font-display font-extrabold text-[30px] md:text-[40px] m-0">{sc('talkTitle', locale)}</h1>
      <p className="text-text-2 text-[16px] leading-relaxed mt-2 mb-5 max-w-[60ch]">{sc('talkTag', locale)}</p>
      <div className="flex flex-wrap items-center gap-3 mb-5">
        <Segmented label={sc('level', locale)} value={level} onChange={chooseLevel} options={[{ value: 'B1', label: 'B1' }, { value: 'B2', label: 'B2' }]} />
        <Segmented label={sc('talkLength', locale)} value={String(length)} onChange={(v) => setLength(Number(v))} options={LENGTHS[level].map((s) => ({ value: String(s), label: `${s} ${sc('talkSeconds', locale)}` }))} />
        <Button variant="secondary" size="sm" onClick={() => void begin(topics[Math.floor(Math.random() * topics.length)])}><Shuffle size={16} />{sc('talkRandom', locale)}</Button>
      </div>
      {session.speechReady && !session.speechSupported && <p className="rounded-[14px] border border-border bg-[var(--ember-wash)] px-4 py-3 text-[14.5px] text-text-2 mb-5">{sc('noRecognition', locale)}</p>}
      {session.recorderError === 'denied' && <p role="alert" className="text-[14.5px] text-[var(--ember-t)] mb-4">{sc('micDenied', locale)}</p>}
      <p className="label text-muted m-0 mb-3">{sc('talkPick', locale)}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {topics.map((t) => (
          <button key={t.id} type="button" onClick={() => void begin(t)} className="text-left rounded-[18px] border border-border bg-card p-4 hover:-translate-y-0.5 hover:border-text transition-[transform,border-color]">
            <span lang="de" className="font-display font-bold text-[17px] text-text block">{t.de}</span>
            <span className="text-muted text-[13.5px] block mt-0.5">{pick(t.en, t.fr, locale)}</span>
            <span className="inline-flex items-center gap-1.5 mt-3 text-[13.5px] font-display font-bold text-text"><Mic size={14} strokeWidth={2.5} />{sc('talkStartSpeaking', locale)}</span>
          </button>
        ))}
      </div>
      <p className="mt-8 text-[12.5px] text-muted leading-relaxed max-w-[70ch]">{sc('privacy', locale)}</p>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  return (
    <div className="mx-auto max-w-[860px] px-5 py-8 md:py-12">
      <Link href="/speak" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('backToHub', locale)}</Link>
      <div className="mt-3">{children}</div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[18px] border border-border bg-card p-4">
      <div className="font-display font-extrabold text-[30px] leading-none text-text tabular-nums">{value}</div>
      <div className="text-muted text-[13px] mt-1.5">{label}</div>
    </div>
  );
}

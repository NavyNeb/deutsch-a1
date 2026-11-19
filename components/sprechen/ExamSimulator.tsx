'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Mic, Square, Volume2 } from 'lucide-react';
import { getSpeakExam, RUBRIC, BOARD_NAMES } from '@/content/sprechen/exam-formats';
import { TALK_STRUCTURE } from '@/lib/sprechen-structure';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { dateKey } from '@/lib/progress';
import { useProgress } from '@/lib/progress-store';
import { claimPracticeXp } from '@/lib/daily-xp';
import { playUntilEnd } from '@/lib/audio';
import { recordExamResult } from '@/lib/exam-progress';
import { analyzeTalk } from '@/lib/sprechen-metrics';
import { loadSprechen, recordSpeaking, saveSprechen } from '@/lib/sprechen-stats';
import { saveTake } from '@/lib/takes-store';
import { buildExamPlan, discussionOpener, discussionStatement, plannedSpeaking, rubricPercent, usedPercent, type Card as TaskCard, type ExamStep } from '@/lib/sprechen-exam';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { TakePlayer } from './TakePlayer';
import { useTalkSession } from './useTalkSession';

const mmss = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

type PartResult = { text: string; seconds: number; best: Blob | null; bestSeconds: number };
type Screen = 'intro' | 'run' | 'rate' | 'result';

export function ExamSimulator({ formatId }: { formatId: string }) {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const format = getSpeakExam(formatId);
  const session = useTalkSession();

  const [screen, setScreen] = useState<Screen>('intro');
  const [plan, setPlan] = useState<ExamStep[]>([]);
  const [pos, setPos] = useState(0);
  const [stance, setStance] = useState<'for' | 'against' | null>(null);
  const [prepLeft, setPrepLeft] = useState(0);
  const [showText, setShowText] = useState(true);
  const [results, setResults] = useState<Record<string, PartResult>>({});
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [final, setFinal] = useState<{ percent: number; xp: number } | null>(null);
  const resultsRef = useRef<Record<string, PartResult>>({});
  const finishing = useRef(false);

  const step: ExamStep | undefined = plan[pos];
  const advance = () => setPos((p) => p + 1);

  const start = () => {
    if (!format) return;
    resultsRef.current = {}; setResults({}); setRatings({}); setFinal(null); setStance(null); finishing.current = false;
    setPlan(buildExamPlan(format)); setPos(0); setScreen('run');
  };

  // Walk through the plan: voices play, preparation counts down, and the end moves on to rating.
  useEffect(() => {
    if (screen !== 'run') return;
    if (!step) { setScreen('rate'); return; }
    let alive = true;
    if (step.type === 'say') { void playUntilEnd(step.de).then(() => { if (alive) advance(); }); }
    else if (step.type === 'partnerReply') { void playUntilEnd(discussionOpener(step.statementId, stance ?? 'for')).then(() => { if (alive) advance(); }); }
    else if (step.type === 'prep') setPrepLeft(step.seconds);
    return () => { alive = false; };
  }, [screen, pos]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (screen !== 'run' || step?.type !== 'prep') return;
    const h = setInterval(() => setPrepLeft((s) => s - 1), 1000);
    return () => clearInterval(h);
  }, [screen, step]);
  useEffect(() => { if (screen === 'run' && step?.type === 'prep' && prepLeft <= 0) advance(); }, [prepLeft]); // eslint-disable-line react-hooks/exhaustive-deps

  const endTurn = async () => {
    if (step?.type !== 'speak' || finishing.current) return;
    finishing.current = true;
    const r = await session.finish();
    const prev = resultsRef.current[step.partId] ?? { text: '', seconds: 0, best: null, bestSeconds: 0 };
    resultsRef.current[step.partId] = {
      text: (prev.text + ' ' + r.text).trim(), seconds: prev.seconds + r.seconds,
      best: r.blob && r.seconds >= prev.bestSeconds ? r.blob : prev.best, bestSeconds: Math.max(prev.bestSeconds, r.seconds),
    };
    setResults({ ...resultsRef.current });
    finishing.current = false;
    advance();
  };

  const speakLeft = step?.type === 'speak' ? Math.max(0, step.seconds - session.elapsed) : 0;
  const timeUp = session.running && step?.type === 'speak' && speakLeft <= 0;
  useEffect(() => { if (timeUp) void endTurn(); }, [timeUp]); // eslint-disable-line react-hooks/exhaustive-deps

  const partTitle = (id: string) => format?.parts.find((p) => p.id === id)?.title;

  const finishRating = () => {
    if (!format) return;
    const percent = rubricPercent(ratings, RUBRIC.map((r) => r.id));
    const today = dateKey(Date.now());
    recordExamResult(`sim-${format.id}`, 'sprechen', percent);
    const total = Object.values(results).reduce((n, r) => n + r.seconds, 0);
    const words = Object.values(results).reduce((n, r) => n + analyzeTalk(r.text, r.seconds).words, 0);
    saveSprechen(recordSpeaking(loadSprechen(), today, { seconds: total, words, wordsPerMinute: total ? Math.round((words / total) * 60) : 0 }));
    for (const [partId, r] of Object.entries(results)) {
      if (r.best) void saveTake({ id: `exam-${format.id}-${partId}-${Date.now()}`, at: Date.now(), kind: 'exam', label: `${format.name}: ${partTitle(partId)?.de ?? partId}`, seconds: Math.round(r.seconds), words: analyzeTalk(r.text, r.seconds).words, wordsPerMinute: analyzeTalk(r.text, r.seconds).wordsPerMinute, blob: r.best });
    }
    const granted = claimPracticeXp(`simexam:${format.id}`, 20, 60);
    if (granted > 0) awardXp(granted);
    setFinal({ percent, xp: granted });
    setScreen('result');
  };

  const metrics = useMemo(() => Object.fromEntries(Object.entries(results).map(([id, r]) => [id, analyzeTalk(r.text, r.seconds, { structure: TALK_STRUCTURE })])), [results]);

  if (!format) return <Frame><p className="text-muted">?</p></Frame>;

  // ---- intro ----
  if (screen === 'intro') {
    return (
      <Frame>
        <p className="label text-muted m-0">{BOARD_NAMES[format.board]} · {format.level}</p>
        <h1 className="font-display font-extrabold text-[30px] md:text-[38px] m-0 mt-1">{format.name}</h1>
        <p className="text-muted text-[14px] mt-2 mb-5">~{format.minutes} {sc('examMinutes', locale)} · {sc('examAlone', locale)}</p>
        <Card className="mb-5">
          <p className="label text-muted m-0 mb-3">{sc('examParts', locale)}</p>
          <ol className="m-0 pl-5 grid gap-2 text-[16px]">
            {format.parts.map((p) => (
              <li key={p.id}><b lang="de">{p.title.de}</b> <span className="text-muted">— {pick(p.title.en, p.title.fr, locale)} · {p.prepSeconds ? `${Math.round(p.prepSeconds / 60)} ${sc('examMinutes', locale)} ${sc('examPrep', locale).toLowerCase()} + ` : ''}{Math.round(p.speakSeconds / 60)} {sc('examMinutes', locale)}</span></li>
            ))}
          </ol>
        </Card>
        {session.speechReady && !session.speechSupported && <p className="rounded-[14px] border border-border bg-[var(--ember-wash)] px-4 py-3 text-[14.5px] text-text-2 mb-4">{sc('noRecognition', locale)}</p>}
        {session.recorderError === 'denied' && <p role="alert" className="text-[14.5px] text-[var(--ember-t)] mb-4">{sc('micDenied', locale)}</p>}
        <Button onClick={start}><Mic size={18} />{sc('examStart', locale)}</Button>
        <p className="mt-6 text-[12.5px] text-muted max-w-[70ch]">{sc('privacy', locale)}</p>
      </Frame>
    );
  }

  // ---- running ----
  if (screen === 'run' && step) {
    const part = 'partId' in step ? partTitle(step.partId) : undefined;
    const card: TaskCard | undefined = step.type === 'prep' || step.type === 'speak' ? step.card : undefined;
    return (
      <Frame>
        <div className="flex items-center justify-between gap-3 mb-4">
          <p className="label text-muted m-0">{part ? `${part.de} — ${pick(part.en, part.fr, locale)}` : format.name}</p>
          <label className="text-[13px] text-muted inline-flex items-center gap-1.5 cursor-pointer"><input type="checkbox" checked={showText} onChange={(e) => setShowText(e.target.checked)} className="accent-[var(--text)]" />{sc('examShowText', locale)}</label>
        </div>
        <div className="h-1.5 rounded-full bg-surface-3 overflow-hidden mb-6"><div className="h-full rounded-full bg-cta" style={{ width: `${Math.round((pos / plan.length) * 100)}%` }} /></div>

        {card && card.title && (
          <Card className="mb-5">
            <h2 lang="de" className="font-display font-extrabold text-[22px] m-0">{card.title}</h2>
            {card.lines.length > 0 && <ul className="m-0 mt-3 pl-5 grid gap-1.5 text-[15.5px] text-text-2">{card.lines.map((l) => <li key={l} lang="de">{l}</li>)}</ul>}
            {card.words && <p className="m-0 mt-4 flex flex-wrap gap-2">{card.words.map((w) => <span key={w} lang="de" className="rounded-full bg-surface-2 px-3 py-1 text-[14px]">{w}</span>)}</p>}
          </Card>
        )}

        {(step.type === 'say' || step.type === 'partnerReply') && (
          <Card className="!p-6 text-center">
            <p className="text-muted m-0 flex items-center justify-center gap-2"><Volume2 size={18} className="animate-pulse" />{step.type === 'say' && step.who === 'examiner' ? sc('examExaminer', locale) : sc('examPartner', locale)}</p>
            {showText && <p lang="de" className="font-display font-bold text-[21px] leading-snug mt-3 mb-0">{step.type === 'say' ? step.de : discussionOpener(step.statementId, stance ?? 'for')}</p>}
          </Card>
        )}

        {step.type === 'prep' && (
          <div className="text-center mt-2">
            <p className="label text-muted m-0">{sc('examPrep', locale)}</p>
            <p className="font-display font-extrabold text-[56px] leading-none m-0 tabular-nums">{mmss(Math.max(0, prepLeft))}</p>
            <Button className="mt-4" onClick={advance}>{sc('examPrepNow', locale)}</Button>
          </div>
        )}

        {step.type === 'stance' && (
          <Card className="text-center">
            <p lang="de" className="font-display font-bold text-[20px] m-0">„{discussionStatement(step.statementId)}“</p>
            <p className="text-muted mt-3 mb-4">{sc('examStance', locale)}</p>
            <div className="flex justify-center gap-3">
              <Button onClick={() => { setStance('for'); advance(); }}>{sc('examFor', locale)}</Button>
              <Button variant="secondary" onClick={() => { setStance('against'); advance(); }}>{sc('examAgainst', locale)}</Button>
            </div>
          </Card>
        )}

        {step.type === 'speak' && (
          <div className="text-center mt-2">
            <p className="label text-muted m-0">{sc('examSpeakNow', locale)}</p>
            <p className="font-display font-extrabold text-[56px] leading-none m-0 tabular-nums">{mmss(session.running ? speakLeft : step.seconds)}</p>
            {session.running ? (
              <>
                {showText && session.text && <p lang="de" className="text-text-2 text-[15px] leading-relaxed max-w-[60ch] mx-auto mt-4 mb-0">{session.text}</p>}
                <button type="button" onClick={() => void endTurn()} className="inline-flex items-center gap-2 rounded-full bg-[var(--ember)] text-[#1A0C02] px-7 py-3.5 mt-5 font-display font-bold text-[16px] animate-pulse"><Square size={18} fill="currentColor" />{sc('examDoneTurn', locale)}</button>
              </>
            ) : (
              <Button className="mt-5" onClick={() => void session.start()}><Mic size={18} />{sc('examSpeak', locale)}</Button>
            )}
          </div>
        )}
      </Frame>
    );
  }

  // ---- rate yourself ----
  if (screen === 'rate') {
    return (
      <Frame>
        <h1 className="font-display font-extrabold text-[28px] md:text-[34px] m-0">{sc('examRate', locale)}</h1>
        <p className="text-text-2 text-[15.5px] mt-2 mb-5 max-w-[60ch]">{sc('examRateIntro', locale)}</p>
        <div className="grid gap-4 mb-6">
          {format.parts.map((p) => {
            const r = results[p.id];
            const m = metrics[p.id];
            const planned = plannedSpeaking(plan, p.id);
            return (
              <Card key={p.id}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 lang="de" className="font-display font-bold text-[18px] m-0">{p.title.de}</h2>
                  {r?.best && <TakePlayer blob={r.best} label={sc('examListenBack', locale)} />}
                </div>
                <p className="text-muted text-[14px] mt-2 mb-0">
                  {sc('examTimeUsed', locale)}: {usedPercent(r?.seconds ?? 0, planned)}% ({mmss(r?.seconds ?? 0)})
                  {session.speechSupported && m ? ` · ${m.words} ${sc('talkWordsStat', locale)} · ${m.wordsPerMinute} ${sc('talkWpm', locale)} · ${m.connectors.length} ${sc('talkConnectors', locale)}` : ''}
                </p>
                {p.kind === 'talk' && session.speechSupported && m && (
                  <ul className="list-none m-0 mt-3 p-0 grid sm:grid-cols-2 gap-x-3 gap-y-1 text-[13.5px]">
                    {TALK_STRUCTURE.map((s) => { const ok = m.structureDone.includes(s.id); return <li key={s.id} className={'flex items-center gap-1.5 ' + (ok ? 'text-[var(--ok-t)] font-semibold' : 'text-muted')}><Check size={14} strokeWidth={3} className={ok ? '' : 'opacity-30'} />{pick(s.en, s.fr, locale)}</li>; })}
                  </ul>
                )}
              </Card>
            );
          })}
        </div>
        <div className="grid gap-3 mb-6">
          {RUBRIC.map((c) => (
            <Card key={c.id} className="!p-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="min-w-0"><p className="font-display font-bold m-0">{pick(c.en, c.fr, locale)}</p><p className="text-muted text-[13px] m-0 mt-0.5">{pick(c.hint.en, c.hint.fr, locale)}</p></div>
                <div role="radiogroup" aria-label={pick(c.en, c.fr, locale)} className="inline-flex gap-1.5">
                  {[1, 2, 3, 4].map((n) => (
                    <button key={n} type="button" role="radio" aria-checked={ratings[c.id] === n} onClick={() => setRatings((r) => ({ ...r, [c.id]: n }))}
                      className={'w-10 h-10 rounded-full font-display font-bold border transition ' + (ratings[c.id] === n ? 'bg-cta text-cta-ink border-transparent' : 'bg-card text-text-2 border-border hover:border-text')}>{n}</button>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Button onClick={finishRating} disabled={RUBRIC.some((c) => !ratings[c.id])}>{sc('examFinish', locale)}</Button>
      </Frame>
    );
  }

  // ---- result ----
  return (
    <Frame>
      <h1 className="font-display font-extrabold text-[28px] md:text-[34px] m-0">{sc('examResult', locale)}</h1>
      <p className="text-muted mt-1 mb-4">{format.name}</p>
      <Card className="text-center mb-4">
        <p className="label text-muted m-0">{sc('examSelfScore', locale)}</p>
        <p className="font-display font-extrabold text-[64px] leading-none m-0 mt-1">{final?.percent ?? 0}%</p>
        {final && final.xp > 0 && <p className="text-muted mt-2 mb-0">+{final.xp} XP</p>}
      </Card>
      <p className="text-text-2 text-[15px] max-w-[62ch]">{sc('examAdvice', locale)}</p>
      <div className="flex flex-wrap gap-3 mt-5">
        <Button onClick={start}>{sc('examAnother', locale)}</Button>
        <Link href="/speak/exam" className="inline-flex items-center px-4 py-3 font-display font-bold text-text no-underline hover:underline">{sc('examPick', locale)}</Link>
      </div>
    </Frame>
  );
}

function Frame({ children }: { children: React.ReactNode }) {
  const { locale } = useLocale();
  return (
    <div className="mx-auto max-w-[760px] px-5 py-8 md:py-12">
      <Link href="/speak/exam" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('examTitle', locale)}</Link>
      <div className="mt-3">{children}</div>
    </div>
  );
}

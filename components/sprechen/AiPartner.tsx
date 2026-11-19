'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Bot, Mic, RotateCcw, Search, Send, Square } from 'lucide-react';
import { AI_SCENARIOS, type AiScenario, type SpeakLevelBX } from '@/content/sprechen';
import { RUBRIC } from '@/content/sprechen/exam-formats';
import { useLocale } from '@/lib/locale-store';
import { sc, type SprechenKey } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { dateKey } from '@/lib/progress';
import { useProgress } from '@/lib/progress-store';
import { claimPracticeXp } from '@/lib/daily-xp';
import { playOrSpeak, speakText } from '@/lib/audio';
import { useContinuousSpeech } from '@/lib/useContinuousSpeech';
import type { Feedback, Turn } from '@/lib/sprechen-ai';
import { aiFeedback, aiTurn, type AiError } from '@/lib/sprechen-ai-client';
import { aiUsage, loadSprechen, recordAi, recordSpeaking, saveSprechen } from '@/lib/sprechen-stats';
import { dictSearchHref } from '@/lib/word-links';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Segmented } from '@/components/ui/Segmented';

const ERROR_KEY: Record<AiError, SprechenKey> = { off: 'aiOff', limit: 'aiLimit', timeout: 'aiError', upstream: 'aiError', network: 'aiError', invalid: 'aiError' };

export function AiPartner() {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const speech = useContinuousSpeech();
  const [level, setLevel] = useState<SpeakLevelBX>('B1');
  const [scenario, setScenario] = useState<AiScenario | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [draft, setDraft] = useState('');
  const [typing, setTyping] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<AiError | 'noTurns' | 'noFeedbacks' | null>(null);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [turnsLeft, setTurnsLeft] = useState(0);
  const startedAt = useRef(0);
  const endRef = useRef<HTMLDivElement | null>(null);

  const today = dateKey(Date.now());
  const refreshUsage = () => { const u = aiUsage(loadSprechen(), today); setTurnsLeft(u.turnsLeft); };
  useEffect(refreshUsage, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { endRef.current?.scrollIntoView?.({ block: 'end' }); }, [turns, busy, feedback]);

  const scenarios = useMemo(() => AI_SCENARIOS.filter((s) => s.level === level), [level]);
  const learnerTurns = turns.filter((t) => t.role === 'learner').length;
  const showTyping = typing || (speech.ready && !speech.supported);

  const begin = (s: AiScenario) => {
    setScenario(s); setTurns([{ role: 'partner', text: s.opener }]); setFeedback(null); setError(null); setDraft(''); setTyping(false);
    speech.reset(); refreshUsage();
    void playOrSpeak(s.opener);
  };

  const send = async (text: string, spokenSeconds = 0) => {
    const clean = text.trim();
    if (!scenario || !clean || busy) return;
    if (aiUsage(loadSprechen(), today).turnsLeft <= 0) { setError('noTurns'); return; }
    const next: Turn[] = [...turns, { role: 'learner', text: clean.slice(0, 600) }];
    setTurns(next); setDraft(''); setError(null); setBusy(true); speech.reset();
    saveSprechen(recordAi(spokenSeconds > 0 ? recordSpeaking(loadSprechen(), today, { seconds: spokenSeconds, words: clean.split(/\s+/).length }) : loadSprechen(), today, 'turn'));
    refreshUsage();
    const r = await aiTurn(scenario.id, next);
    setBusy(false);
    if (!r.ok) { setError(r.error); return; }
    setTurns((t) => [...t, { role: 'partner', text: r.data }]);
    speakText(r.data);
  };

  const stopAndSend = () => {
    const seconds = startedAt.current ? (Date.now() - startedAt.current) / 1000 : 0;
    speech.stop();
    void send(speech.text, seconds);
  };

  const finish = async () => {
    if (!scenario) return;
    if (aiUsage(loadSprechen(), today).feedbacksLeft <= 0) { setError('noFeedbacks'); return; }
    setBusy(true); setError(null);
    saveSprechen(recordAi(loadSprechen(), today, 'feedback'));
    refreshUsage();
    const r = await aiFeedback(scenario.id, turns, locale);
    setBusy(false);
    if (!r.ok) { setError(r.error); return; }
    setFeedback(r.data);
    const granted = claimPracticeXp(`ai:${scenario.id}`, 10, 60);
    if (granted > 0) awardXp(granted);
  };

  const reset = () => { setScenario(null); setTurns([]); setFeedback(null); setError(null); speech.reset(); };

  return (
    <div className="mx-auto max-w-[760px] px-5 py-8 md:py-12">
      <Link href="/speak" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('backToHub', locale)}</Link>
      <h1 className="font-display font-extrabold text-[30px] md:text-[40px] m-0 mt-2 flex items-center gap-3"><Bot size={30} />{sc('partnerTitle', locale)}</h1>
      <p className="text-muted text-[13.5px] mt-2 mb-5 max-w-[64ch]">{sc('aiLabel', locale)} {sc('aiPrivacy', locale)}</p>

      {!scenario ? (
        <>
          <div className="mb-4"><Segmented label={sc('level', locale)} value={level} onChange={setLevel} options={[{ value: 'B1', label: 'B1' }, { value: 'B2', label: 'B2' }]} /></div>
          <p className="label text-muted m-0 mb-3">{sc('aiPick', locale)}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {scenarios.map((s) => (
              <button key={s.id} type="button" onClick={() => begin(s)} className="text-left rounded-[18px] border border-border bg-card p-4 hover:-translate-y-0.5 hover:border-text transition-[transform,border-color]">
                <span lang="de" className="font-display font-bold text-[17px] text-text block">{s.de}</span>
                <span className="text-muted text-[13.5px] block mt-0.5">{pick(s.en, s.fr, locale)}</span>
                <span className="text-text-2 text-[13.5px] block mt-2">{pick(s.situation.en, s.situation.fr, locale)}</span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between gap-3 mb-4">
            <p className="m-0 text-[14px] text-text-2"><b lang="de">{scenario.de}</b> · {turnsLeft} {sc('aiTurnsLeft', locale)}</p>
            <Button variant="secondary" size="sm" onClick={reset}><RotateCcw size={15} />{sc('aiRestart', locale)}</Button>
          </div>
          <p className="text-muted text-[13.5px] m-0 mb-4">{sc('aiSituation', locale)}: {pick(scenario.situation.en, scenario.situation.fr, locale)}</p>

          <div className="grid gap-2.5 mb-4" aria-live="polite">
            {turns.map((t, i) => (
              <p key={i} className={'m-0 rounded-[14px] px-4 py-2.5 text-[15.5px] ' + (t.role === 'learner' ? 'bg-surface-2 ml-8' : 'bg-card border border-border mr-8')}>
                <span className="label text-muted block">{t.role === 'learner' ? sc('aiYou', locale) : sc('aiPartnerName', locale)}</span>
                <span lang="de">{t.text}</span>
              </p>
            ))}
            {busy && <p className="m-0 text-muted text-[14px]">{sc('aiThinking', locale)}</p>}
            <div ref={endRef} />
          </div>

          {error && <p role="alert" className="text-[14.5px] text-[var(--ember-t)] mb-3">{error === 'noTurns' ? sc('aiNoTurns', locale) : error === 'noFeedbacks' ? sc('aiNoFeedbacks', locale) : sc(ERROR_KEY[error], locale)}</p>}

          {feedback ? <FeedbackView fb={feedback} /> : (
            <Card className="!p-4">
              {showTyping ? (
                <form onSubmit={(e) => { e.preventDefault(); void send(draft); }} className="flex gap-2">
                  <input value={draft} onChange={(e) => setDraft(e.target.value)} placeholder={sc('aiTypePlaceholder', locale)} lang="de" maxLength={500}
                    className="flex-1 min-w-0 rounded-full border border-border bg-bg px-4 py-2.5 text-[15.5px]" />
                  <Button type="submit" disabled={busy || !draft.trim()}><Send size={16} />{sc('aiSend', locale)}</Button>
                </form>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  {speech.listening ? (
                    <>
                      <p lang="de" className="m-0 text-text-2 text-[15px] min-h-[24px] text-center">{speech.text || '…'}</p>
                      <button type="button" onClick={stopAndSend} className="inline-flex items-center gap-2 rounded-full bg-[var(--ember)] text-[#1A0C02] px-6 py-3 font-display font-bold animate-pulse"><Square size={17} fill="currentColor" />{sc('aiStopSend', locale)}</button>
                    </>
                  ) : (
                    <button type="button" disabled={busy} onClick={() => { startedAt.current = Date.now(); speech.start(); }} className="inline-flex items-center gap-2 rounded-full bg-cta text-cta-ink px-6 py-3 font-display font-bold disabled:opacity-50"><Mic size={18} />{sc('aiSpeak', locale)}</button>
                  )}
                </div>
              )}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-3">
                {speech.supported && <button type="button" onClick={() => setTyping((v) => !v)} className="text-[13px] text-muted underline bg-transparent border-none cursor-pointer">{sc('aiTypeInstead', locale)}</button>}
                {learnerTurns >= 2 && <Button variant="secondary" size="sm" onClick={() => void finish()} disabled={busy}>{sc('aiGetFeedback', locale)}</Button>}
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
}

function FeedbackView({ fb }: { fb: Feedback }) {
  const { locale } = useLocale();
  const labels: [keyof Feedback['scores'], (typeof RUBRIC)[number]['id']][] = [['task', 'task'], ['interaction', 'interaction'], ['vocabulary', 'vocabulary'], ['grammar', 'grammar']];
  return (
    <div className="grid gap-4">
      <h2 className="font-display font-extrabold text-[22px] m-0">{sc('aiFeedbackTitle', locale)}</h2>
      {fb.summary && <Card><p className="m-0 text-[16px] leading-relaxed">{fb.summary}</p></Card>}
      <div className="grid grid-cols-2 gap-3">
        {labels.map(([k, id]) => {
          const r = RUBRIC.find((x) => x.id === id)!;
          return (
            <div key={k} className="rounded-[16px] border border-border bg-card p-3.5">
              <div className="font-display font-extrabold text-[26px] leading-none">{fb.scores[k]}<span className="text-muted text-[13px] font-bold"> {sc('aiScoreOf', locale)}</span></div>
              <div className="text-muted text-[13px] mt-1">{pick(r.en, r.fr, locale)}</div>
            </div>
          );
        })}
      </div>
      {fb.corrections.length > 0 && (
        <Card>
          <p className="label text-muted m-0 mb-3">{sc('aiCorrections', locale)}</p>
          <ul className="list-none m-0 p-0 grid gap-4">
            {fb.corrections.map((c, i) => (
              <li key={i} className="text-[15px]">
                <p className="m-0 text-muted">{sc('aiSaid', locale)}: <span lang="de" className="text-text-2 line-through decoration-[var(--ember)]">{c.said}</span></p>
                <p className="m-0 mt-0.5 font-semibold">{sc('aiBetter', locale)}: <span lang="de" className="text-[var(--ok-t)]">{c.better}</span></p>
                {c.why && <p className="m-0 mt-0.5 text-text-2 text-[14px]">{c.why}</p>}
              </li>
            ))}
          </ul>
        </Card>
      )}
      {fb.phrases.length > 0 && (
        <Card>
          <p className="label text-muted m-0 mb-3">{sc('aiPhrases', locale)}</p>
          <ul className="list-none m-0 p-0 grid gap-2">{fb.phrases.map((p, i) => <li key={i} className="text-[15px]"><span lang="de" className="font-semibold">{p.de}</span>{p.meaning && <span className="text-muted"> — {p.meaning}</span>}</li>)}</ul>
        </Card>
      )}
      {fb.vocab.length > 0 && (
        <Card>
          <p className="label text-muted m-0 mb-3">{sc('aiVocab', locale)}</p>
          <p className="m-0 flex flex-wrap gap-2">{fb.vocab.map((w) => (
            <Link key={w} href={dictSearchHref(w.replace(/^(der|die|das)\s+/i, ''))} lang="de" className="inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1.5 text-[14px] no-underline text-text hover:brightness-105"><Search size={13} />{w}</Link>
          ))}</p>
        </Card>
      )}
      <p className="text-muted text-[12.5px] m-0">{sc('aiNoPronunciation', locale)}</p>
    </div>
  );
}

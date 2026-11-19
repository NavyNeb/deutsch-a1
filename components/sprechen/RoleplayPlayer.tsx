'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Eye, EyeOff, Mic, RotateCcw, Square, Volume2 } from 'lucide-react';
import { lessons } from '@/content';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { dateKey } from '@/lib/progress';
import { useProgress } from '@/lib/progress-store';
import { claimPracticeXp } from '@/lib/daily-xp';
import { playOrSpeak, playUntilEnd } from '@/lib/audio';
import { useSpeechRecognition } from '@/lib/useSpeechRecognition';
import { bestAlternative, PASS_PERCENT, type WordStatus } from '@/lib/speech-score';
import { buildDialogues, learnerLineIndexes } from '@/lib/roleplay';
import { loadSprechen, recordSpeaking, saveSprechen } from '@/lib/sprechen-stats';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const STATUS_CLS: Record<WordStatus, string> = {
  ok: 'bg-[var(--ok-wash)] text-[var(--ok-t)]',
  near: 'bg-[var(--ember-wash)] text-[var(--ember-t)]',
  missed: 'bg-[var(--ember-wash)] text-[var(--ember-t)]',
};

export function RoleplayPlayer({ id }: { id: string }) {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const dialogue = useMemo(() => buildDialogues(lessons).find((d) => d.id === id) ?? null, [id]);
  const sr = useSpeechRecognition('de-DE', 3);
  const [role, setRole] = useState<string | null>(null);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState<Record<number, number>>({});
  const [hideLine, setHideLine] = useState(false);
  const [xp, setXp] = useState(0);
  const heard = useRef<string[] | null>(null);
  const startedAt = useRef(0);
  const secondsSpoken = useRef(0);

  const mine = dialogue && role ? learnerLineIndexes(dialogue, role) : [];
  const finished = !!dialogue && idx >= dialogue.lines.length;
  const line = dialogue && !finished ? dialogue.lines[idx] : null;
  const myTurn = !!line && line.who === role;
  const best = myTurn && line && sr.alternatives && !sr.listening ? bestAlternative(sr.alternatives, line.de) : null;

  // The partner's lines play by themselves, then it is the next turn.
  useEffect(() => {
    if (!dialogue || !role || !line || myTurn) return;
    let alive = true;
    void playUntilEnd(line.de).then(() => { if (alive) setIdx((i) => i + 1); });
    return () => { alive = false; };
  }, [dialogue, role, line, myTurn]);

  // Remember the score of my line, and how long I spoke.
  useEffect(() => {
    if (sr.listening) { startedAt.current = Date.now(); return; }
    if (!myTurn || !best || !sr.alternatives || heard.current === sr.alternatives) return;
    heard.current = sr.alternatives;
    if (startedAt.current) secondsSpoken.current += (Date.now() - startedAt.current) / 1000;
    setScores((s) => ({ ...s, [idx]: Math.max(s[idx] ?? 0, best.score.percent) }));
  }, [sr.listening, sr.alternatives, myTurn, best, idx]);

  const average = mine.length ? Math.round(mine.reduce((a, i) => a + (scores[i] ?? 0), 0) / mine.length) : 0;

  // Once the dialogue is done: time goes into the speaking stats, and a decent run earns XP once a day.
  const finalised = useRef(false);
  useEffect(() => {
    if (!finished || !dialogue || finalised.current) return;
    finalised.current = true;
    if (secondsSpoken.current > 0) saveSprechen(recordSpeaking(loadSprechen(), dateKey(Date.now()), { seconds: secondsSpoken.current, words: mine.reduce((n, i) => n + dialogue.lines[i].de.split(/\s+/).length, 0) }));
    if (average >= PASS_PERCENT - 20) {
      const granted = claimPracticeXp(`roleplay:${dialogue.id}`, 10, 60);
      if (granted > 0) { awardXp(granted); setXp(granted); }
    }
  }, [finished, dialogue, average, mine, awardXp]);

  const next = () => { sr.reset(); heard.current = null; setIdx((i) => i + 1); };
  const restart = () => { sr.reset(); heard.current = null; finalised.current = false; secondsSpoken.current = 0; setScores({}); setXp(0); setIdx(0); };

  if (!dialogue) {
    return <div className="mx-auto max-w-[760px] px-5 py-12"><Link href="/speak/roleplay" className="font-display font-bold text-text">{sc('back', locale)}</Link></div>;
  }

  return (
    <div className="mx-auto max-w-[760px] px-5 py-8 md:py-12">
      <Link href="/speak/roleplay" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('roleplayTitle', locale)}</Link>
      <h1 lang="de" className="font-display font-extrabold text-[28px] md:text-[36px] m-0 mt-2">{dialogue.title.de}</h1>
      <p className="text-muted mt-1 mb-5">{pick(dialogue.title.en, dialogue.title.fr ?? dialogue.title.en, locale)} · {dialogue.level}</p>

      {!role ? (
        <Card>
          <p className="label text-muted m-0 mb-3">{sc('roleplayPlayAs', locale)}</p>
          <div className="flex flex-wrap gap-3">
            {dialogue.roles.map((r) => <Button key={r} onClick={() => { setRole(r); setIdx(0); }}>{r}</Button>)}
          </div>
          <p className="text-muted text-[13px] mt-4 mb-0">{sc('honestNote', locale)}</p>
        </Card>
      ) : finished ? (
        <Card className="text-center">
          <p className="font-display font-extrabold text-[26px] m-0">{sc('roleplayDone', locale)}</p>
          <p className="text-muted mt-3 mb-1">{sc('roleplayAverage', locale)}</p>
          <p className="font-display font-extrabold text-[52px] leading-none m-0">{average}%</p>
          {xp > 0 && <p className="text-muted mt-3 mb-0">+{xp} XP</p>}
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            <Button onClick={restart}><RotateCcw size={17} />{sc('again', locale)}</Button>
            <Button variant="secondary" onClick={() => { restart(); setRole(null); }}>{sc('roleplayPlayAs', locale)}</Button>
          </div>
        </Card>
      ) : (
        <>
          <div className="grid gap-2.5 mb-5">
            {dialogue.lines.slice(0, idx).map((l, i) => (
              <p key={i} className={'m-0 rounded-[14px] px-4 py-2.5 text-[15.5px] ' + (l.who === role ? 'bg-surface-2 ml-8' : 'bg-card border border-border mr-8')}>
                <span className="label text-muted block">{l.who === role ? sc('roleplayYou', locale) : l.who}</span>
                <span lang="de">{l.de}</span>
              </p>
            ))}
          </div>

          {myTurn && line ? (
            <Card className="!p-6">
              <p className="label text-muted m-0 mb-3">{sc('roleplayYourTurn', locale)}</p>
              {best ? (
                <p className="font-display font-bold text-[24px] leading-[1.6] m-0 flex flex-wrap gap-x-2 gap-y-1">
                  {best.score.words.map((w, i) => <span key={i} className={'rounded-[8px] px-1.5 ' + STATUS_CLS[w.status]}>{w.word}</span>)}
                </p>
              ) : hideLine ? (
                <p className="font-display font-bold text-[22px] text-muted m-0">…</p>
              ) : (
                <p lang="de" className="font-display font-bold text-[24px] leading-[1.4] m-0">{line.de}</p>
              )}
              <p className="text-text-2 text-[15px] mt-2 mb-0">{pick(line.en, line.fr ?? line.en, locale)}</p>
              <div className="flex flex-wrap items-center gap-3 mt-5">
                <Button variant="secondary" size="sm" onClick={() => void playOrSpeak(line.de)}><Volume2 size={16} />{sc('listen', locale)}</Button>
                <Button variant="secondary" size="sm" onClick={() => setHideLine((h) => !h)}>{hideLine ? <Eye size={16} /> : <EyeOff size={16} />}{hideLine ? sc('roleplayShowLine', locale) : sc('roleplayHideLine', locale)}</Button>
                {sr.supported && (
                  <button type="button" onClick={sr.listening ? sr.stop : sr.listen}
                    className={'inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display font-bold text-[14px] transition active:scale-95 ' + (sr.listening ? 'bg-[var(--ember)] text-[#1A0C02] animate-pulse' : 'bg-cta text-cta-ink')}>
                    {sr.listening ? <Square size={16} fill="currentColor" /> : <Mic size={16} />}{sr.listening ? sc('stop', locale) : sc('start', locale)}
                  </button>
                )}
              </div>
              {best && <p className="text-muted text-[14px] mt-4 mb-0">{sc('roleplayHeard', locale)}: {best.score.percent}% · {sc('heardYou', locale)} <span lang="de" className="text-text-2">„{best.text}“</span></p>}
              {sr.ready && !sr.supported && <p className="text-muted text-[13px] mt-3 mb-0">{sc('noRecognition', locale)}</p>}
              <div className="flex justify-end mt-5"><Button onClick={next} disabled={sr.supported && !best}>{sc('next', locale)}<ChevronRight size={18} /></Button></div>
            </Card>
          ) : (
            <Card className="!p-6 text-center"><p className="m-0 text-text-2 flex items-center justify-center gap-2"><Volume2 size={18} /> {line?.who}</p><p lang="de" className="font-display font-bold text-[20px] mt-3 mb-0">{line?.de}</p></Card>
          )}
        </>
      )}
    </div>
  );
}

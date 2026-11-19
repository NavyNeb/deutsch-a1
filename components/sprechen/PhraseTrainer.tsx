'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Eye, Mic, Square, Volume2 } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { sc } from '@/lib/sprechen-copy';
import { pick } from '@/lib/i18n';
import { dateKey } from '@/lib/progress';
import { useProgress } from '@/lib/progress-store';
import { claimPracticeXp } from '@/lib/daily-xp';
import { playOrSpeak } from '@/lib/audio';
import { useSpeechRecognition } from '@/lib/useSpeechRecognition';
import { bestAlternative, PASS_PERCENT } from '@/lib/speech-score';
import { loadSprechen, recordSpeaking, saveSprechen } from '@/lib/sprechen-stats';
import { PHRASES, PHRASE_FUNCTIONS, type Phrase } from '@/content/sprechen';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Segmented } from '@/components/ui/Segmented';

const KNOWN_KEY = 'deutsch-a1-phrases-known';
const XP_PER_PHRASE = 3;
const XP_DAILY_CAP = 60;

function loadKnown(): string[] {
  try { const r = JSON.parse(localStorage.getItem(KNOWN_KEY) ?? '[]'); return Array.isArray(r) ? r.filter((x) => typeof x === 'string') : []; } catch { return []; }
}

/** The sentence with its gap word replaced by a blank. */
export function withGap(p: Pick<Phrase, 'de' | 'gap'>): string {
  return p.de.replace(p.gap, '_____');
}

export function PhraseTrainer() {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const sr = useSpeechRecognition('de-DE', 3);
  const [level, setLevel] = useState<'all' | 'B1' | 'B2'>('all');
  const [fn, setFn] = useState<string>('all');
  const [idx, setIdx] = useState(0);
  const [known, setKnown] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [gapMode, setGapMode] = useState(true);
  const [xp, setXp] = useState(0);
  const heardRef = useRef<string[] | null>(null);
  const startedAt = useRef(0);

  useEffect(() => { setKnown(loadKnown()); }, []);

  const list = useMemo(() => PHRASES.filter((p) => (level === 'all' || p.level === level) && (fn === 'all' || p.fn === fn)), [level, fn]);
  const phrase = list[Math.min(idx, Math.max(0, list.length - 1))];
  const best = phrase && sr.alternatives && !sr.listening ? bestAlternative(sr.alternatives, phrase.de) : null;

  useEffect(() => { setIdx(0); setRevealed(false); sr.reset(); }, [level, fn]); // eslint-disable-line react-hooks/exhaustive-deps

  // Time spoken and XP when a recognition ends.
  useEffect(() => {
    if (sr.listening) { startedAt.current = Date.now(); return; }
    if (!phrase || !sr.alternatives || heardRef.current === sr.alternatives) return;
    heardRef.current = sr.alternatives;
    const seconds = startedAt.current ? (Date.now() - startedAt.current) / 1000 : 4;
    saveSprechen(recordSpeaking(loadSprechen(), dateKey(Date.now()), { seconds, words: phrase.de.split(/\s+/).length }));
    if (best?.score.passed) {
      const granted = claimPracticeXp(`phrase:${phrase.id}`, XP_PER_PHRASE, XP_DAILY_CAP);
      if (granted > 0) { awardXp(granted); setXp((x) => x + granted); }
    }
  }, [sr.listening, sr.alternatives, phrase, best, awardXp]);

  const go = (step: number, markKnown?: boolean) => {
    if (phrase && markKnown !== undefined) {
      const next = markKnown ? [...new Set([...known, phrase.id])] : known.filter((k) => k !== phrase.id);
      setKnown(next);
      try { localStorage.setItem(KNOWN_KEY, JSON.stringify(next)); } catch { /* ignore */ }
    }
    heardRef.current = null; sr.reset(); setRevealed(false);
    setIdx((i) => (list.length ? (i + step + list.length) % list.length : 0));
  };

  const knownInList = list.filter((p) => known.includes(p.id)).length;

  return (
    <div className="mx-auto max-w-[760px] px-5 py-8 md:py-12">
      <Link href="/speak" className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text no-underline hover:underline"><ArrowLeft size={16} strokeWidth={2.4} /> {sc('backToHub', locale)}</Link>
      <h1 className="font-display font-extrabold text-[30px] md:text-[40px] m-0 mt-2">{sc('phrasesTitle', locale)}</h1>
      <p className="text-text-2 text-[16px] leading-relaxed mt-2 mb-5 max-w-[60ch]">{sc('phrasesTag', locale)}</p>

      <div className="flex flex-wrap items-center gap-3 mb-3">
        <Segmented label={sc('level', locale)} value={level} onChange={setLevel} options={[{ value: 'all', label: 'B1 + B2' }, { value: 'B1', label: 'B1' }, { value: 'B2', label: 'B2' }]} />
        <Segmented label="Mode" value={gapMode ? 'gap' : 'full'} onChange={(v) => setGapMode(v === 'gap')} options={[{ value: 'gap', label: sc('phrasesFill', locale).split(',')[0] }, { value: 'full', label: sc('phrasesSayIt', locale) }]} />
      </div>
      <div className="flex flex-wrap gap-2 mb-5" role="radiogroup" aria-label={sc('phrasesPick', locale)}>
        {[{ id: 'all', en: 'All', fr: 'Tout' }, ...PHRASE_FUNCTIONS].map((f) => (
          <button key={f.id} type="button" role="radio" aria-checked={fn === f.id} onClick={() => setFn(f.id)}
            className={'rounded-full px-3.5 py-1.5 text-[13.5px] font-display font-bold border transition ' + (fn === f.id ? 'bg-cta text-cta-ink border-transparent' : 'bg-card text-text-2 border-border hover:border-text')}>
            {pick(f.en, f.fr, locale)}
          </button>
        ))}
      </div>

      {phrase ? (
        <>
          <p className="text-muted text-[13.5px] m-0 mb-3">{idx + 1} / {list.length} · {knownInList} {sc('phrasesKnown', locale)}</p>
          <Card className="!p-6 md:!p-8">
            <p className="label text-muted m-0 mb-3">{pick(PHRASE_FUNCTIONS.find((f) => f.id === phrase.fn)?.en ?? '', PHRASE_FUNCTIONS.find((f) => f.id === phrase.fn)?.fr ?? '', locale)} · {phrase.level}</p>
            <p lang="de" className="font-display font-bold text-[24px] md:text-[30px] leading-[1.4] m-0">{gapMode && !best ? withGap(phrase) : phrase.de}</p>
            <div className="mt-3 min-h-[26px]">
              {revealed ? <p className="m-0 text-text-2 text-[16px]">{pick(phrase.en, phrase.fr, locale)}</p>
                : <button type="button" onClick={() => setRevealed(true)} className="inline-flex items-center gap-1.5 text-text font-display font-bold text-[14px] py-1"><Eye size={16} />{sc('phrasesFlip', locale)}</button>}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button variant="secondary" size="sm" onClick={() => void playOrSpeak(phrase.de)}><Volume2 size={16} />{sc('listen', locale)}</Button>
              {sr.supported && (
                <button type="button" onClick={sr.listening ? sr.stop : sr.listen} aria-label={sr.listening ? sc('stop', locale) : sc('phrasesSayIt', locale)}
                  className={'inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display font-bold text-[14px] transition active:scale-95 ' + (sr.listening ? 'bg-[var(--ember)] text-[#1A0C02] animate-pulse' : 'bg-cta text-cta-ink')}>
                  {sr.listening ? <Square size={16} fill="currentColor" /> : <Mic size={16} />}{sr.listening ? sc('stop', locale) : sc('phrasesSayIt', locale)}
                </button>
              )}
            </div>
            {sr.ready && !sr.supported && <p className="text-muted text-[13px] mt-3">{sc('noRecognition', locale)}</p>}

            {best && (
              <div className="mt-5 border-t border-border pt-4">
                <p className="m-0 flex items-baseline gap-3"><span className="font-display font-extrabold text-[30px] leading-none">{best.score.percent}%</span>
                  <span className={'font-display font-bold ' + (best.score.percent >= PASS_PERCENT ? 'text-[var(--ok-t)]' : 'text-[var(--ember-t)]')}>{best.score.percent >= PASS_PERCENT ? <Check size={18} strokeWidth={3} className="inline" /> : null}</span></p>
                <p className="text-muted text-[14px] mt-2 mb-0">{sc('heardYou', locale)}: <span lang="de" className="text-text-2">„{best.text}“</span></p>
              </div>
            )}
          </Card>

          <div className="flex items-center justify-between gap-3 mt-5">
            <Button variant="secondary" onClick={() => go(1, false)}>{sc('phrasesAgain', locale)}</Button>
            <Button onClick={() => go(1, true)}><Check size={17} />{sc('phrasesMine', locale)}</Button>
          </div>
          {xp > 0 && <p className="text-muted text-[13.5px] mt-3">+{xp} XP</p>}
        </>
      ) : null}
      <p className="mt-8 text-[12.5px] text-muted leading-relaxed max-w-[70ch]">{sc('honestNote', locale)}</p>
    </div>
  );
}

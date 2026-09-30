'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Mic, Square, Volume2, ChevronRight, RotateCcw, Eye } from 'lucide-react';
import { useLocale } from '@/lib/locale-store';
import { t, type UIKey } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { playAudio, ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { useSpeechRecognition, type SpeechError } from '@/lib/useSpeechRecognition';
import { bestAlternative, PASS_PERCENT, type WordStatus } from '@/lib/speech-score';
import { claimPracticeXp } from '@/lib/daily-xp';
import { pickSet, SPEAK_LEVELS, type SpeakItem, type SpeakLevel } from '@/lib/speak-pool';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Segmented } from '@/components/ui/Segmented';

const SET_SIZE = 8;
const XP_PER_SENTENCE = 5;
const XP_DAILY_CAP = 60;

type Mode = 'repeat' | 'read';

const ERROR_KEY: Record<SpeechError, UIKey> = {
  denied: 'speakDenied',
  'no-speech': 'speakNoSpeech',
  network: 'speakNetwork',
  other: 'speakOther',
};

const STATUS_CLS: Record<WordStatus, string> = {
  ok: 'bg-[var(--good-wash)] text-[var(--good)]',
  near: 'bg-[var(--amber-wash)] text-[var(--amber)]',
  missed: 'bg-[var(--bad-wash)] text-[var(--bad)]',
};

export function SpeakStudio() {
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const awardRef = useRef(awardXp);
  awardRef.current = awardXp;

  const [level, setLevel] = useState<SpeakLevel>('A1');
  const [mode, setMode] = useState<Mode>('repeat');
  const [set, setSet] = useState<SpeakItem[]>([]);
  const [idx, setIdx] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [attempted, setAttempted] = useState<Record<string, boolean>>({});
  const [xpEarned, setXpEarned] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [finished, setFinished] = useState(false);

  const sr = useSpeechRecognition('de-DE', 3);
  const { reset: srReset } = sr;
  const processed = useRef<string[] | null>(null);

  const newSet = useCallback((lv: SpeakLevel) => {
    setSet(pickSet(lv, SET_SIZE));
    setIdx(0); setScores({}); setAttempted({}); setXpEarned(0); setShowMeaning(false); setFinished(false);
    processed.current = null;
    srReset();
  }, [srReset]);

  useEffect(() => { newSet(level); }, [level, newSet]);

  const item = set[idx];
  const best = item && sr.alternatives && !sr.listening ? bestAlternative(sr.alternatives, item.de) : null;

  // Record the score (and XP, once per sentence per day) when a recognition finishes.
  useEffect(() => {
    if (!item || !best || sr.listening || !sr.alternatives || processed.current === sr.alternatives) return;
    processed.current = sr.alternatives;
    setAttempted((a) => ({ ...a, [item.id]: true }));
    setScores((s) => ({ ...s, [item.id]: Math.max(s[item.id] ?? 0, best.score.percent) }));
    if (best.score.passed) {
      const granted = claimPracticeXp(`speak:${item.id}`, XP_PER_SENTENCE, XP_DAILY_CAP);
      if (granted > 0) { awardRef.current(granted); setXpEarned((x) => x + granted); }
    }
  }, [item, best, sr.listening, sr.alternatives]);

  const go = (next: number) => {
    srReset(); processed.current = null; setShowMeaning(false);
    if (next >= set.length) setFinished(true); else setIdx(next);
  };

  const scored = Object.values(scores);
  const average = scored.length ? Math.round(scored.reduce((a, b) => a + b, 0) / scored.length) : 0;
  const canHear = mode === 'repeat' || (item ? attempted[item.id] : false);
  const meaning = item ? pick(item.en, item.fr, locale) : '';

  return (
    <div className="mx-auto max-w-[760px] px-5 py-8 md:py-12">
      <h1 className="font-rounded font-extrabold text-[34px] md:text-[44px] tracking-tight m-0">{t('speakTitle', locale)}</h1>
      <p className="text-text-2 text-[17px] leading-relaxed mt-2 mb-6 max-w-[56ch]">{t('speakSubtitle', locale)}</p>

      <div className="flex flex-wrap items-center gap-3 mb-6">
        <Segmented
          label={t('level', locale)}
          value={level}
          onChange={setLevel}
          options={SPEAK_LEVELS.map((l) => ({ value: l, label: l }))}
        />
        <Segmented
          label="Mode"
          value={mode}
          onChange={setMode}
          options={[
            { value: 'repeat', label: t('speakModeRepeat', locale) },
            { value: 'read', label: t('speakModeRead', locale) },
          ]}
        />
      </div>

      {sr.ready && !sr.supported && (
        <div className="rounded-[14px] border border-border bg-[var(--amber-wash)] px-4 py-3 text-[14.5px] text-text-2 mb-6">
          {t('speakUnsupported', locale)}
        </div>
      )}

      {finished ? (
        <Card className="text-center">
          <p className="font-rounded font-extrabold text-[28px] m-0">{t('speakSetDone', locale)}</p>
          <p className="text-muted mt-3 mb-1">{t('speakAverage', locale)}</p>
          <p className="font-rounded font-extrabold text-[56px] leading-none m-0 text-primary">{average}%</p>
          <p className="text-muted mt-3">{xpEarned > 0 ? `+${xpEarned} ${t('xpEarned', locale)}` : ' '}</p>
          <Button onClick={() => newSet(level)} className="mt-4"><RotateCcw size={18} />{t('speakNewSet', locale)}</Button>
        </Card>
      ) : item ? (
        <>
          <div className="flex items-center gap-1.5 mb-4" aria-label={`${idx + 1} / ${set.length}`}>
            {set.map((s, i) => (
              <span
                key={s.id}
                className={
                  'h-2 flex-1 rounded-full ' +
                  (i === idx ? 'bg-primary' : (scores[s.id] ?? -1) >= PASS_PERCENT ? 'bg-[var(--good)]' : s.id in scores ? 'bg-[var(--amber)]' : 'bg-border')
                }
              />
            ))}
          </div>

          <Card className="!p-6 md:!p-8">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[12px] font-rounded font-bold tracking-wider text-muted">{item.level} · {idx + 1} / {set.length}</span>
              {canHear && (
                <Button variant="secondary" size="sm" onClick={() => playAudio(ttsSrc(item.de))}>
                  <Volume2 size={16} />{t(mode === 'repeat' ? 'speakListen' : 'speakListenAfter', locale)}
                </Button>
              )}
            </div>

            {best ? (
              <p className="font-rounded font-bold text-[26px] md:text-[32px] leading-[1.6] m-0 flex flex-wrap gap-x-2 gap-y-1">
                {best.score.words.map((w, i) => (
                  <span key={i} title={w.heard ? `${t('speakYouSaid', locale)}: ${w.heard}` : undefined} className={'rounded-[8px] px-1.5 ' + STATUS_CLS[w.status]}>
                    {w.word}
                  </span>
                ))}
              </p>
            ) : (
              <p lang="de" className="font-rounded font-bold text-[26px] md:text-[32px] leading-[1.35] m-0">{item.de}</p>
            )}

            <div className="mt-3 min-h-[28px]">
              {showMeaning ? (
                <p className="text-text-2 text-[16px] m-0">{meaning}</p>
              ) : (
                <button onClick={() => setShowMeaning(true)} className="inline-flex items-center gap-1.5 text-primary font-rounded font-bold text-[14px] py-1">
                  <Eye size={16} />{t('speakShowMeaning', locale)}
                </button>
              )}
            </div>

            {sr.supported && (
              <div className="mt-6 flex flex-col items-center gap-3">
                <button
                  type="button"
                  onClick={sr.listening ? sr.stop : sr.listen}
                  aria-label={t(sr.listening ? 'speakStop' : 'speakTap', locale)}
                  className={
                    'grid place-items-center w-[76px] h-[76px] rounded-full text-white shadow-primary transition active:scale-95 ' +
                    (sr.listening ? 'bg-[var(--bad)] animate-pulse' : 'bg-primary')
                  }
                >
                  {sr.listening ? <Square size={28} fill="currentColor" /> : <Mic size={32} />}
                </button>
                <span className="text-muted text-[14px]">
                  {sr.listening ? t('listening', locale) : t('speakTap', locale)}
                </span>
              </div>
            )}

            {sr.error && !sr.listening && (
              <p role="alert" className="mt-4 text-center text-[14.5px] text-[var(--bad)]">{t(ERROR_KEY[sr.error], locale)}</p>
            )}

            {best && (
              <div className="mt-6 border-t border-border pt-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-rounded font-extrabold text-[36px] leading-none text-primary">{best.score.percent}%</span>
                  <span className="font-rounded font-bold text-[17px]">
                    {t(best.score.percent >= PASS_PERCENT ? 'speakGreat' : best.score.percent >= 50 ? 'speakAlmost' : 'speakRetry', locale)}
                  </span>
                </div>
                <p className="text-muted text-[14px] mt-3 mb-0">
                  {t('speakYouSaid', locale)}: <span lang="de" className="text-text-2">„{best.text}“</span>
                </p>
                {best.score.extra.length > 0 && (
                  <p className="text-muted text-[14px] mt-1 mb-0">{t('speakExtra', locale)}: {best.score.extra.join(', ')}</p>
                )}
                <p className="text-faint text-[12.5px] mt-3 mb-0">{t('speakLegend', locale)}</p>
              </div>
            )}
          </Card>

          <div className="flex items-center justify-between mt-5">
            <button onClick={() => go(idx + 1)} className="text-muted font-rounded font-bold text-[14px] px-2 py-3">{t('speakSkip', locale)}</button>
            <Button onClick={() => go(idx + 1)} disabled={!attempted[item.id] && sr.supported}>
              {t(idx + 1 >= set.length ? 'done' : 'next', locale)}<ChevronRight size={18} />
            </Button>
          </div>
        </>
      ) : null}

      <p className="mt-10 text-[12.5px] text-faint leading-relaxed max-w-[70ch]">{t('speakPrivacy', locale)}</p>
    </div>
  );
}

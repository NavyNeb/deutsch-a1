'use client';
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Check, X } from 'lucide-react';
import { allVocab } from '@/content';
import { ttsSrc } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { dueVocabIds } from '@/lib/progress';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Mascot } from '@/components/ui/Mascot';
import { Confetti } from '@/components/ui/Confetti';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { GenderTag } from '@/components/ui/GenderTag';

// Deterministic-per-render shuffle is fine here: options are memoized per word.
function shuffle<T>(a: T[]): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [r[i], r[j]] = [r[j], r[i]];
  }
  return r;
}

export function ReviewSession() {
  const router = useRouter();
  const { state, reviewCard } = useProgress();
  const { locale } = useLocale();
  const vocab = useMemo(() => allVocab(), []);
  const byId = useMemo(() => new Map(vocab.map((v) => [v.id, v])), [vocab]);

  // Freeze the due queue once, after hydration, so grading doesn't reshuffle it mid-session.
  const [queue, setQueue] = useState<string[] | null>(null);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [reviewed, setReviewed] = useState(0);

  useEffect(() => { if (queue === null) setQueue(dueVocabIds(state, Date.now())); }, [state, queue]);

  const currentId = queue && idx < queue.length ? queue[idx] : null;
  const item = currentId ? byId.get(currentId) ?? null : null;
  const meaning = item ? pick(item.english, item.french, locale) : '';

  const options = useMemo(() => {
    if (!item) return [];
    const others = vocab
      .filter((v) => v.id !== item.id)
      .map((v) => pick(v.english, v.french, locale))
      .filter((m) => m !== meaning);
    const distractors = shuffle(Array.from(new Set(others))).slice(0, 3);
    return shuffle([meaning, ...distractors]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item?.id, locale]);

  if (queue === null) return null; // hydrating

  if (queue.length === 0) {
    return (
      <Centered>
        <Mascot size={72} expression="think" className="mx-auto" />
        <h1 className="text-[28px] font-extrabold mt-4 mb-1">{t('nothingDue', locale)}</h1>
        <p className="text-muted m-0 mb-6 max-w-[38ch] mx-auto">{t('comeBackLater', locale)}</p>
        <Button onClick={() => router.push('/')} className="justify-center">{t('backToHome', locale)}</Button>
      </Centered>
    );
  }

  if (idx >= queue.length) {
    return (
      <Centered>
        <Confetti />
        <Mascot size={72} expression="celebrate" className="mx-auto" />
        <h1 className="text-[30px] font-extrabold mt-4 mb-1">{t('reviewComplete', locale)}</h1>
        <div className="inline-flex items-baseline gap-2 mb-6">
          <span className="font-rounded font-extrabold text-[28px] tabular-nums text-primary">{reviewed}</span>
          <span className="label text-muted">{t('wordsReviewed', locale)}</span>
        </div>
        <div className="flex flex-col gap-2.5 w-full max-w-[320px] mx-auto">
          <Button onClick={() => router.push('/')} className="w-full justify-center">{t('backToHome', locale)}</Button>
        </div>
      </Centered>
    );
  }

  const answered = picked !== null;
  const choose = (opt: string) => {
    if (answered || !item) return;
    setPicked(opt);
    reviewCard(item.id, opt === meaning);
    setReviewed((n) => n + 1);
  };
  const next = () => { setPicked(null); setIdx((i) => i + 1); };

  return (
    <div className="min-h-[100dvh] max-w-[640px] mx-auto px-6 py-8 flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <span className="label shrink-0">{t('reviewHeading', locale)}</span>
        <div className="flex-1"><ProgressBar value={(idx) / queue.length} /></div>
        <span className="label tabular-nums shrink-0">{idx + 1} / {queue.length}</span>
      </div>

      <Card>
        <div className="flex flex-col items-center text-center gap-2">
          {item && <GenderTag gender={item.gender} />}
          <div className="flex items-center gap-2.5">
            <span className="font-rounded font-extrabold text-[40px] leading-none">{item?.german}</span>
            {item && <AudioButton src={ttsSrc(item.german)} label={`Anhören: ${item.german}`} size={38} />}
          </div>
          <p className="text-muted mt-1 mb-2">{t('whatDoesItMean', locale)}</p>
        </div>

        <div className="grid gap-2.5 mt-2">
          {options.map((o) => {
            const isCorrect = o === meaning;
            const variant =
              !answered ? 'idle' : isCorrect ? 'correct' : o === picked ? 'wrong' : 'muted';
            return (
              <button
                key={o}
                onClick={() => choose(o)}
                disabled={answered}
                className={
                  'flex items-center gap-2 text-left rounded-[12px] px-4 py-3 border font-rounded font-semibold transition-[border-color,background] duration-150 ' +
                  (variant === 'idle' ? 'border-border bg-card hover:border-primary cursor-pointer ' : '') +
                  (variant === 'correct' ? 'border-[var(--good)] bg-[var(--good-wash)] ' : '') +
                  (variant === 'wrong' ? 'border-[var(--bad)] bg-[var(--bad-wash)] ' : '') +
                  (variant === 'muted' ? 'border-border opacity-55 ' : '')
                }
              >
                <span className="flex-1">{o}</span>
                {variant === 'correct' && <Check size={17} strokeWidth={2.6} className="text-[var(--good)]" aria-hidden="true" />}
                {variant === 'wrong' && <X size={17} strokeWidth={2.6} className="text-[var(--bad)]" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
      </Card>

      <div className="mt-6 flex justify-end">
        <Button onClick={next} disabled={!answered}>
          {idx + 1 >= queue.length ? t('done', locale) : t('next', locale)}
        </Button>
      </div>
    </div>
  );
}

function Centered({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] grid place-items-center p-6 relative overflow-hidden">
      <div className="w-full max-w-[440px] text-center relative">{children}</div>
    </div>
  );
}

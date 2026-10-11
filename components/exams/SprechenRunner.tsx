'use client';
import { useState } from 'react';
import { Check, Eye, EyeOff, Mic, Square, Volume2 } from 'lucide-react';
import type { ExamSet, SprechenPart } from '@/content/exams/types';
import { BOARD_LABEL } from '@/content/exams/formats';
import { recordExamResult } from '@/lib/exam-progress';
import { claimPracticeXp } from '@/lib/daily-xp';
import { speakText } from '@/lib/audio';
import { bestAlternative } from '@/lib/speech-score';
import { useSpeechRecognition } from '@/lib/useSpeechRecognition';
import { useProgress } from '@/lib/progress-store';
import { useLocale, type Locale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { ExamTopBar, PartHeading, partScope, TranslationToggle, TrLine } from './shared';

const XP_DAILY_CAP = 60;

function PromptCard({ prompt, index, total, locale }: { prompt: SprechenPart['prompts'][number]; index: number; total: number; locale: Locale }) {
  const sr = useSpeechRecognition('de-DE', 3);
  const [showSample, setShowSample] = useState(false);
  const best = sr.alternatives && !sr.listening ? bestAlternative(sr.alternatives, prompt.sample) : null;

  return (
    <li className="rounded-[18px] border border-border bg-card p-4 md:p-5">
      <p className="m-0 text-[12px] font-rounded font-bold uppercase tracking-wider text-muted">{t('examPromptOf', locale)} {index + 1} / {total}</p>
      <p lang="de" className="m-0 mt-1 whitespace-pre-line font-rounded text-[19px] font-bold leading-snug">{prompt.cue}</p>
      <TrLine tr={prompt.cueTr} />

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <Button size="sm" variant="secondary" onClick={() => speakText(prompt.sample)}>
          <Volume2 size={16} />{t('examListen', locale)}
        </Button>
        {sr.supported && (
          <Button size="sm" variant={sr.listening ? 'danger' : 'primary'} onClick={sr.listening ? sr.stop : sr.listen}>
            {sr.listening ? <Square size={15} fill="currentColor" /> : <Mic size={16} />}
            {sr.listening ? t('examStopRecord', locale) : t('examRecord', locale)}
          </Button>
        )}
        <Button size="sm" variant="ghost" onClick={() => setShowSample((v) => !v)}>
          {showSample ? <EyeOff size={16} /> : <Eye size={16} />}{t(showSample ? 'examHideSample' : 'examShowSample', locale)}
        </Button>
      </div>

      {sr.ready && !sr.supported && <p className="m-0 mt-3 text-[13.5px] text-[var(--amber)]">{t('examSpeakUnsupported', locale)}</p>}
      {sr.error && !sr.listening && <p className="m-0 mt-3 text-[13.5px] text-[var(--amber)]">{t(sr.error === 'denied' ? 'speakDenied' : 'speakNoSpeech', locale)}</p>}

      {best && (
        <p className="m-0 mt-3 text-[14.5px]">
          <span className="text-muted">{t('examHeard', locale)}: </span>
          <span lang="de" className="italic">{best.text}</span>
        </p>
      )}

      {showSample && (
        <div className="mt-3 rounded-[14px] bg-[var(--primary-wash)] p-4">
          <p className="m-0 mb-1 text-[12px] font-rounded font-bold uppercase tracking-wider text-muted">{t('examSample', locale)}</p>
          <p lang="de" className="m-0 whitespace-pre-line text-[16px] leading-[1.6]">{prompt.sample}</p>
          <TrLine tr={prompt.sampleTr} />
          {prompt.tip && <p className="m-0 mt-2 text-[13.5px] text-text-2"><b>{t('examTip', locale)}:</b> {prompt.tip[locale]}</p>}
        </div>
      )}
    </li>
  );
}

export function SprechenRunner({ set, teil }: { set: ExamSet; teil?: number }) {
  const scope = partScope(set, 'sprechen', teil);
  const parts = teil ? set.sprechen.filter((p) => p.teil === teil) : set.sprechen;
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const [done, setDone] = useState<Set<string>>(new Set());

  const markDone = (part: SprechenPart) => {
    const granted = claimPracticeXp(`exam:${part.id}`, 10, XP_DAILY_CAP);
    if (granted > 0) awardXp(granted);
    const next = new Set(done).add(part.id);
    setDone(next);
    if (next.size === parts.length) recordExamResult(scope.progressId, 'sprechen', 100);
  };

  return (
    <div className="mx-auto max-w-[820px] px-5 py-8 md:py-12">
      <ExamTopBar
        backHref={scope.backHref}
        backLabel={t('examBack', locale)}
        title={`${BOARD_LABEL[set.board]} ${set.level} · ${t('examSet', locale)} ${set.number} · ${t('examSprechen', locale)}${scope.titleTail}`}
      >
        <TranslationToggle />
      </ExamTopBar>
      <p className="m-0 mb-8 max-w-[64ch] text-[14px] leading-relaxed text-muted">{t('examSpeakNote', locale)}</p>

      {parts.map((part) => (
        <section key={part.id} className="mb-12">
          <PartHeading teil={part.teil} title={part.title} instruction={part.instruction} instructionTr={part.instructionTr} />
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {part.prompts.map((p, i) => <PromptCard key={p.id} prompt={p} index={i} total={part.prompts.length} locale={locale} />)}
          </ul>
          <div className="mt-4">
            <Button size="sm" variant={done.has(part.id) ? 'secondary' : 'primary'} onClick={() => markDone(part)} disabled={done.has(part.id)}>
              <Check size={16} />{done.has(part.id) ? t('examPractised', locale) : t('examMarkPractised', locale)}
            </Button>
          </div>
        </section>
      ))}
    </div>
  );
}

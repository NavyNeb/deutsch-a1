'use client';
import { useState } from 'react';
import { Check, CheckCircle2, Eye, EyeOff, Loader2, XCircle } from 'lucide-react';
import type { ExamSet, SchreibenTask } from '@/content/exams/types';
import { BOARD_LABEL } from '@/content/exams/formats';
import { countWords, coveredPoints, hasGreetingAndClosing, lengthState, scoreForm } from '@/lib/exam-score';
import { recordExamResult } from '@/lib/exam-progress';
import { claimPracticeXp } from '@/lib/daily-xp';
import { useProgress } from '@/lib/progress-store';
import { useLocale, type Locale } from '@/lib/locale-store';
import { useGrammarCheck } from '@/lib/useGrammarCheck';
import { MAX_CHARS } from '@/lib/languagetool';
import { t } from '@/lib/ui-strings';
import { Button } from '@/components/ui/Button';
import { ExamTopBar, PartHeading, partScope, TextCard, TranslationToggle, TrLine } from './shared';

const XP_DAILY_CAP = 60;

type FormTask = Extract<SchreibenTask, { kind: 'form' }>;
type MessageTask = Extract<SchreibenTask, { kind: 'message' }>;

function FormTaskView({ task, locale, onDone }: { task: FormTask; locale: Locale; onDone: (xpKey: string, amount: number) => number }) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ReturnType<typeof scoreForm> | null>(null);
  const [xp, setXp] = useState(0);

  const check = () => {
    const r = scoreForm(task, values);
    setResult(r);
    setXp(onDone(task.id, 10));
  };

  return (
    <section className="mb-12">
      <PartHeading teil={task.teil} title={task.title} instruction={task.instruction} instructionTr={task.instructionTr} />
      <div className="mb-4"><TextCard text={task.source} /></div>
      <div className="rounded-[18px] border border-border bg-card p-4 md:p-5">
        <div className="flex flex-col gap-4">
          {task.fields.map((f) => {
            const ok = result?.perField[f.id];
            return (
              <label key={f.id} className="block">
                <span lang="de" className="mb-1 block font-rounded font-bold text-[14px]">{f.label}</span>
                <TrLine tr={f.labelTr} className="mb-1" />
                <input
                  value={values[f.id] ?? ''}
                  onChange={(e) => { setValues((v) => ({ ...v, [f.id]: e.target.value })); setResult(null); }}
                  lang="de" autoComplete="off" autoCapitalize="off" spellCheck={false}
                  className={'w-full rounded-[12px] border bg-transparent px-3.5 py-3 text-[16px] outline-none transition-colors focus:border-primary ' +
                    (result ? (ok ? 'border-[var(--good)]' : 'border-[var(--bad)]') : 'border-border')}
                />
                {result && !ok && <span lang="de" className="mt-1 block text-[13.5px] text-[var(--good)]">{t('examCorrectIs', locale)}: {f.accept[0]}</span>}
              </label>
            );
          })}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button size="sm" onClick={check} disabled={Object.values(values).every((v) => !v.trim())}>
            <Check size={16} />{t('examCheckForm', locale)}
          </Button>
          {result && (
            <span className="text-[14px] font-rounded font-bold text-text-2" role="status">
              {result.correct} / {result.total} {t('examFormResult', locale)}
              {xp > 0 && ` · +${xp} ${t('examXpEarned', locale)}`}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}

function MessageTaskView({ task, locale, onDone }: { task: MessageTask; locale: Locale; onDone: (xpKey: string, amount: number) => number }) {
  const [text, setText] = useState('');
  const [grammar, setGrammar] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [finished, setFinished] = useState(false);
  const [xp, setXp] = useState(0);
  const check = useGrammarCheck(text, locale, grammar);

  const words = countWords(text);
  const length = lengthState(words, task.minWords, task.maxWords);
  const covered = coveredPoints(task, text);
  const frame = hasGreetingAndClosing(text, task.register);
  const lengthLabel = length === 'short' ? 'examLengthShort' : length === 'long' ? 'examLengthLong' : 'examLengthOk';

  const finish = () => { setFinished(true); setXp(onDone(task.id, 15)); };

  return (
    <section className="mb-12">
      <PartHeading teil={task.teil} title={task.title} instruction={task.instruction} instructionTr={task.instructionTr} />
      {task.source && <div className="mb-4"><TextCard text={task.source} /></div>}

      <ul className="m-0 mb-4 flex list-none flex-col gap-2 p-0">
        {task.points.map((p) => (
          <li key={p.id} className="flex items-start gap-2.5 rounded-[14px] border border-border bg-card px-4 py-3">
            {text.trim() ? (
              covered[p.id] ? <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--good)]" /> : <XCircle size={18} className="mt-0.5 shrink-0 text-faint" />
            ) : <span className="mt-0.5 h-[18px] w-[18px] shrink-0 rounded-full border border-border" />}
            <span><span lang="de" className="text-[15.5px]">{p.de}</span><TrLine tr={p.tr} /></span>
          </li>
        ))}
      </ul>

      <div className="rounded-[20px] border border-border bg-card p-4 transition-colors focus-within:border-primary md:p-5">
        <textarea
          lang="de" value={text} maxLength={MAX_CHARS * 2}
          onChange={(e) => setText(e.target.value)}
          placeholder={t('examWritePlaceholder', locale)}
          spellCheck={false} autoCapitalize="sentences"
          aria-label={task.title}
          rows={8}
          className="block w-full resize-y border-0 bg-transparent p-0 text-[17px] leading-[1.7] outline-none placeholder:text-faint"
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-[14px]">
        <span className="font-rounded font-bold text-text-2">
          {words} {t('examWords', locale)}
          <span className="font-normal text-muted"> · {t('examTarget', locale)} {task.minWords}–{task.maxWords}</span>
        </span>
        {words > 0 && (
          <span className={length === 'ok' ? 'text-[var(--good)]' : 'text-[var(--amber)]'}>{t(lengthLabel, locale)}</span>
        )}
        {words > 0 && (
          <>
            <span className={frame.greeting ? 'text-[var(--good)]' : 'text-faint'}>{frame.greeting ? '✓' : '○'} {t('examGreeting', locale)}</span>
            <span className={frame.closing ? 'text-[var(--good)]' : 'text-faint'}>{frame.closing ? '✓' : '○'} {t('examClosing', locale)}</span>
          </>
        )}
      </div>

      <label className="mt-4 flex items-start gap-2.5 text-[14.5px]">
        <input type="checkbox" checked={grammar} onChange={(e) => setGrammar(e.target.checked)} className="mt-1 h-4 w-4 accent-[var(--primary)]" />
        <span><b className="font-rounded">{t('examGrammarCheck', locale)}</b> <span className="text-muted">· {t('examGrammarHint', locale)}</span></span>
      </label>
      {grammar && words > 0 && (
        <div className="mt-3 rounded-[16px] border border-border bg-card p-4" aria-live="polite">
          {check.status === 'checking' && <p className="m-0 flex items-center gap-2 text-[14px] text-muted"><Loader2 size={14} className="animate-spin" />{t('writeChecking', locale)}</p>}
          {check.status === 'paused' && <p className="m-0 text-[14px] text-[var(--amber)]">{t('writePaused', locale)}</p>}
          {check.status === 'error' && <p className="m-0 text-[14px] text-[var(--amber)]">{t('writeCheckError', locale)}</p>}
          {check.status === 'done' && check.issues.length === 0 && <p className="m-0 text-[14px] text-[var(--good)]">{t('writeAllGood', locale)}</p>}
          {check.issues.length > 0 && (
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {check.issues.slice(0, 8).map((i) => (
                <li key={i.id} className="text-[14.5px]">
                  <span lang="de" className="rounded-[6px] bg-[var(--bad-wash)] px-1.5 text-[var(--bad)] line-through">{check.checkedText.slice(i.offset, i.offset + i.length)}</span>
                  {i.replacements[0] && <span lang="de" className="ml-2 rounded-[6px] bg-[var(--good-wash)] px-1.5 text-[var(--good)]">{i.replacements[0]}</span>}
                  {i.message && <span className="mt-0.5 block text-[13.5px] text-muted">{i.message}</span>}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Button size="sm" onClick={finish} disabled={words < task.minWords || finished}>
          <Check size={16} />{t('examFinishTask', locale)}
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setShowModel((v) => !v)}>
          {showModel ? <EyeOff size={16} /> : <Eye size={16} />}{t(showModel ? 'examHideModel' : 'examShowModel', locale)}
        </Button>
        {finished && <span role="status" className="text-[14px] font-rounded font-bold text-[var(--good)]">{xp > 0 ? `+${xp} ${t('examXpEarned', locale)}` : t('writeXpAlready', locale)}</span>}
      </div>
      <p className="m-0 mt-3 max-w-[64ch] text-[13px] leading-relaxed text-faint">{t('examSelfCheckNote', locale)}</p>

      {showModel && (
        <div className="mt-4 rounded-[18px] border border-border bg-[var(--primary-wash)] p-4 md:p-5">
          <p className="m-0 mb-2 text-[12px] font-rounded font-bold uppercase tracking-wider text-muted">{t('examModelAnswer', locale)}</p>
          <p lang="de" className="m-0 whitespace-pre-line text-[16px] leading-[1.65]">{task.model.de}</p>
          <TrLine tr={task.model.tr} />
        </div>
      )}
    </section>
  );
}

export function SchreibenRunner({ set, teil }: { set: ExamSet; teil?: number }) {
  const scope = partScope(set, 'schreiben', teil);
  const tasks = teil ? set.schreiben.filter((t) => t.teil === teil) : set.schreiben;
  const { locale } = useLocale();
  const { awardXp } = useProgress();
  const [done, setDone] = useState<Set<string>>(new Set());

  const onDone = (taskId: string, amount: number) => {
    const granted = claimPracticeXp(`exam:${taskId}`, amount, XP_DAILY_CAP);
    if (granted > 0) awardXp(granted);
    const next = new Set(done).add(taskId);
    setDone(next);
    if (next.size === tasks.length) recordExamResult(scope.progressId, 'schreiben', 100);
    return granted;
  };

  return (
    <div className="mx-auto max-w-[820px] px-5 py-8 md:py-12">
      <ExamTopBar
        backHref={scope.backHref}
        backLabel={t('examBack', locale)}
        title={`${BOARD_LABEL[set.board]} ${set.level} · ${t('examSet', locale)} ${set.number} · ${t('examSchreiben', locale)}${scope.titleTail}`}
      >
        <TranslationToggle />
      </ExamTopBar>
      {tasks.map((task) =>
        task.kind === 'form'
          ? <FormTaskView key={task.id} task={task} locale={locale} onDone={onDone} />
          : <MessageTaskView key={task.id} task={task} locale={locale} onDone={onDone} />,
      )}
    </div>
  );
}

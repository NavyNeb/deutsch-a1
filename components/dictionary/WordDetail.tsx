'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, BookOpen, Loader2, Volume2 } from 'lucide-react';
import { allVocab } from '@/content';
import { entriesFor, loadMeta, type DictEntry } from '@/lib/dictionary';
import { fold } from '@/lib/dict-shared.mjs';
import { conjugate, TENSE_IDS } from '@/lib/conjugate';
import { lessonSentences } from '@/lib/word-links';
import { ttsSrc, playAudio, speakText } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { GenderTag } from '@/components/ui/GenderTag';
import { POS_KEY, articlesOf, lessonToEntry } from './entry-utils';
import { VerbPanel } from './VerbPanel';
import { NounPanel } from './NounPanel';
import { AdjectivePanel } from './AdjectivePanel';

type Loaded = { entries: DictEntry[]; fromLesson: boolean };
type State = { status: 'loading' } | { status: 'error' } | { status: 'done'; data: Loaded };

function variants(word: string): string[] {
  const lower = word.toLowerCase();
  const cap = lower.charAt(0).toUpperCase() + lower.slice(1);
  return [...new Set([word, cap, lower])];
}

async function resolveWord(word: string): Promise<Loaded> {
  const meta = await loadMeta();
  for (const v of variants(word)) {
    const entries = await entriesFor(meta, v);
    if (entries.length) return { entries, fromLesson: false };
  }
  const key = fold(word);
  const hit = allVocab().find((v) => fold(v.german) === key);
  if (hit) return { entries: [lessonToEntry(hit)], fromLesson: true };
  return { entries: [], fromLesson: false };
}

function formsOf(entry: DictEntry): string[] {
  const forms = new Set<string>([entry.w]);
  if (entry.p === 'verb') {
    const c = conjugate({ lemma: entry.w, v: entry.v });
    for (const id of TENSE_IDS) for (const r of c.tenses[id] ?? []) {
      r.text.split(/\s+/).forEach((tok) => tok.length > 2 && forms.add(tok));
    }
  } else {
    if (entry.pl) forms.add(entry.pl);
    if (entry.gen) forms.add(entry.gen);
  }
  return [...forms];
}

function Credit() {
  const { locale } = useLocale();
  return <p className="text-[12.5px] text-muted m-0 leading-relaxed">{t('dictAttribution', locale)}</p>;
}

export function WordDetail({ word }: { word: string }) {
  const { locale } = useLocale();
  const search = useSearchParams();
  const q = search.get('q');
  const backHref = q ? `/dictionary?q=${encodeURIComponent(q)}` : '/dictionary';
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    let alive = true;
    setState({ status: 'loading' });
    resolveWord(word).then(
      (data) => alive && setState({ status: 'done', data }),
      () => alive && setState({ status: 'error' }),
    );
    return () => { alive = false; };
  }, [word]);

  const back = (
    <Link href={backHref} className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-primary hover:underline">
      <ArrowLeft size={16} strokeWidth={2.4} /> {t('dictBackToSearch', locale)}
    </Link>
  );

  return (
    <main className="mx-auto w-full max-w-[880px] px-4 py-5 pb-24 grid gap-5">
      {back}
      {state.status === 'loading' && (
        <p role="status" className="inline-flex items-center gap-2 text-muted m-0"><Loader2 size={16} className="animate-spin" /> {t('dictLoadingWord', locale)}</p>
      )}
      {state.status === 'error' && <p role="alert" className="text-text-2 m-0">{t('dictLoadError', locale)}</p>}
      {state.status === 'done' && state.data.entries.length === 0 && (
        <section className="grid gap-3 rounded-[20px] border border-border bg-card p-6">
          <h1 className="font-rounded font-extrabold text-[24px] text-text m-0 break-words">{word}</h1>
          <p className="m-0 text-text-2">{t('dictWordNotFound', locale)}</p>
          <div><Link href="/dictionary" className="font-semibold text-primary hover:underline">{t('dictSearchAnother', locale)}</Link></div>
        </section>
      )}
      {state.status === 'done' && state.data.entries.map((entry, i) => (
        <EntrySection key={`${entry.w}-${entry.p}-${i}`} entry={entry} fromLesson={state.data.fromLesson} first={i === 0} />
      ))}
      {state.status === 'done' && state.data.entries.length > 0 && <Credit />}
    </main>
  );
}

function EntrySection({ entry, fromLesson, first }: { entry: DictEntry; fromLesson: boolean; first: boolean }) {
  const { locale } = useLocale();
  const arts = articlesOf(entry.g);
  const posKey = POS_KEY[entry.p];
  const lessonVocab = useMemo(() => allVocab().find((v) => v.german === entry.w), [entry.w]);
  const sentences = useMemo(() => lessonSentences(formsOf(entry)), [entry]);
  const bandBg = arts[0] ? `color-mix(in srgb, var(--${arts[0]}) 13%, var(--card))` : 'var(--primary-wash)';
  const listen = () => (lessonVocab ? playAudio(ttsSrc(lessonVocab.german)) : speakText(entry.w));
  const Heading = first ? 'h1' : 'h2';

  return (
    <article className="grid gap-5">
      <header className="rounded-[20px] border border-border p-5" style={{ background: bandBg }}>
        <div className="flex flex-wrap items-center gap-1.5 mb-2 min-h-[20px]">
          {arts.map((a) => <GenderTag key={a} gender={a} />)}
          {posKey && <span className="label text-muted">{t(posKey, locale)}</span>}
        </div>
        <div className="flex items-center justify-between gap-3">
          <Heading className="font-rounded font-extrabold text-[32px] leading-tight text-text m-0 break-words min-w-0">{entry.w}</Heading>
          <button
            type="button"
            onClick={listen}
            aria-label={`${t('dictListen', locale)}: ${entry.w}`}
            className="grid place-items-center shrink-0 w-11 h-11 rounded-full bg-card text-primary shadow-sm hover:brightness-105 active:scale-90 transition"
          >
            <Volume2 size={19} strokeWidth={2.2} />
          </button>
        </div>
        {entry.ipa && <div className="font-mono text-[14px] text-primary mt-1">/{entry.ipa}/</div>}
        {(entry.pl || entry.gen) && (
          <dl className="m-0 mt-3 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[14px]">
            {entry.pl && <><dt className="text-muted">{t('dictPlural', locale)}</dt><dd className="m-0 text-text font-semibold">{entry.pl}</dd></>}
            {entry.gen && <><dt className="text-muted">{t('dictGenitive', locale)}</dt><dd className="m-0 text-text font-semibold">{entry.gen}</dd></>}
          </dl>
        )}
      </header>

      {fromLesson && <p className="m-0 text-[13.5px] text-muted">{t('dictFromLessonsOnly', locale)}</p>}

      <section aria-labelledby={`meanings-${entry.p}-${entry.w}`} className="grid gap-2">
        <h2 id={`meanings-${entry.p}-${entry.w}`} className="label text-muted m-0">{t('dictMeanings', locale)}</h2>
        <ol className="m-0 pl-5 list-decimal marker:text-faint grid gap-1.5 text-text-2 text-[15.5px]">
          {(lessonVocab ? [pick(lessonVocab.english, lessonVocab.french, locale), ...entry.s.filter((g) => g !== lessonVocab.english)] : entry.s).map((m, i) => <li key={i}>{m}</li>)}
        </ol>
        {entry.x && (
          <p className="m-0 mt-1 text-[14px] text-muted leading-relaxed">
            <span className="label mr-2">{t('dictExample', locale)}</span>
            <span className="text-text">{entry.x[0]}</span>{entry.x[1] && <> — {entry.x[1]}</>}
          </p>
        )}
      </section>

      {sentences.length > 0 && (
        <section aria-labelledby={`lessons-${entry.p}-${entry.w}`} className="grid gap-2">
          <h2 id={`lessons-${entry.p}-${entry.w}`} className="label text-muted m-0 inline-flex items-center gap-1.5"><BookOpen size={13} strokeWidth={2.6} /> {t('dictInOurLessons', locale)}</h2>
          <ul className="m-0 p-0 list-none grid gap-2">
            {sentences.map((s) => (
              <li key={s.de} className="rounded-[14px] border border-border bg-card px-4 py-3 text-[14.5px]">
                <div className="text-text font-semibold">{s.de}</div>
                <div className="text-muted">{pick(s.en, s.fr, locale)}</div>
                <Link href={`/lesson/${s.lessonId}/learn`} className="text-[13px] font-semibold text-primary hover:underline inline-flex items-center min-h-[32px]">
                  {t('dictOpenLessonLink', locale)}: {pick(s.lessonTitle.en, s.lessonTitle.fr, locale)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {entry.p === 'verb' && <VerbPanel entry={entry} />}
      {entry.p === 'noun' && <NounPanel entry={entry} />}
      {entry.p === 'adj' && <AdjectivePanel entry={entry} />}
    </article>
  );
}

'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, BookOpen, Loader2, Play } from 'lucide-react';
import { allVocab } from '@/content';
import { entriesFor, loadMeta, type DictEntry } from '@/lib/dictionary';
import { fold } from '@/lib/dict-shared.mjs';
import { conjugate, TENSE_IDS } from '@/lib/conjugate';
import { lessonSentences } from '@/lib/word-links';
import { ttsSrc, playAudio, speakText } from '@/lib/audio';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { genderMeta } from '@/lib/gender';
import { fitSize } from '@/lib/fit-size';
import { addRecent } from '@/lib/recent-searches';
import { SearchTrigger } from './SearchTrigger';
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
      (data) => {
        if (!alive) return;
        setState({ status: 'done', data });
        const first = data.entries[0];
        if (first) {
          const art = articlesOf(first.g);
          addRecent({
            title: art.length === 1 ? `${art[0]} ${first.w}` : first.w,
            subtitle: first.s[0],
            href: `/dictionary/${encodeURIComponent(first.w)}`,
          });
        }
      },
      () => alive && setState({ status: 'error' }),
    );
    return () => { alive = false; };
  }, [word]);

  const back = (
    <Link href={backHref} className="inline-flex items-center gap-1.5 h-10 text-[14px] font-semibold text-text hover:underline">
      <ArrowLeft size={16} strokeWidth={2.4} /> {t('dictBackToSearch', locale)}
    </Link>
  );

  return (
    <main className="mx-auto w-full max-w-[960px] px-5 md:px-10 py-6 md:py-10 pb-24 grid gap-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        {back}
        <div className="flex-1 basis-[260px] max-w-[460px] ml-auto"><SearchTrigger compact query={q ?? ''} /></div>
      </div>
      {state.status === 'loading' && (
        <p role="status" className="inline-flex items-center gap-2 text-muted m-0"><Loader2 size={16} className="animate-spin" /> {t('dictLoadingWord', locale)}</p>
      )}
      {state.status === 'error' && <p role="alert" className="text-text-2 m-0">{t('dictLoadError', locale)}</p>}
      {state.status === 'done' && state.data.entries.length === 0 && (
        <section className="grid gap-3 rounded-[20px] border border-border bg-card p-6">
          <h1 className="font-display font-extrabold text-[24px] text-text m-0 break-words">{word}</h1>
          <p className="m-0 text-text-2">{t('dictWordNotFound', locale)}</p>
          <div><Link href="/dictionary" className="font-semibold text-text hover:underline">{t('dictSearchAnother', locale)}</Link></div>
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
  const meta = arts.length === 1 ? genderMeta(arts[0]) : null;
  const bandBg = meta ? `color-mix(in srgb, ${meta.fill} 11%, var(--s1))` : 'var(--s1)';
  const bandBorder = meta ? `color-mix(in srgb, ${meta.fill} 28%, transparent)` : 'var(--line)';
  const listen = () => (lessonVocab ? playAudio(ttsSrc(lessonVocab.german)) : speakText(entry.w));
  const Heading = first ? 'h1' : 'h2';

  return (
    <article className="grid gap-5">
      <header data-kumpel="word-header" className="relative overflow-hidden rounded-[32px] border p-7 md:p-10" style={{ background: bandBg, borderColor: bandBorder }}>
        {meta && (
          <span
            aria-hidden="true"
            className="absolute -right-12 -bottom-20 opacity-[0.09] pointer-events-none"
            style={{
              width: 300, height: 300, background: meta.fill,
              borderRadius: meta.shape === 'circle' ? '50%' : undefined,
              clipPath: meta.shape === 'triangle' ? 'polygon(50% 0, 100% 100%, 0 100%)' : undefined,
            }}
          />
        )}
        <div className="relative flex flex-wrap items-center gap-2.5 mb-5 min-h-[20px]">
          {posKey && <span className="eyebrow">{t(posKey, locale)}</span>}
        </div>
        {arts.length > 0 && (
          <div
            data-article={meta ? meta.gender : 'multi'}
            className="relative font-display font-light leading-none tracking-[-0.02em] text-[clamp(30px,6vw,52px)] -mb-1"
            style={{ color: meta ? meta.text : 'var(--t2)' }}
          >
            {arts.join(' / ')}
          </div>
        )}
        <div className="relative flex items-start justify-between gap-4">
          <Heading
            className="font-display font-bold leading-[0.95] tracking-[-0.045em] text-text m-0 break-words min-w-0"
            style={{ fontSize: fitSize(entry.w, 112, 760, 140) }}
          >
            {entry.w}
          </Heading>
          <button
            type="button"
            onClick={listen}
            aria-label={`${t('dictListen', locale)}: ${entry.w}`}
            className="grid place-items-center shrink-0 w-14 h-14 rounded-full border-0 bg-cta text-cta-ink cursor-pointer active:scale-95 transition"
          >
            <Play size={22} fill="currentColor" aria-hidden="true" />
          </button>
        </div>
        {entry.ipa && <div className="relative font-mono text-[15px] text-text-2 mt-3">/{entry.ipa}/</div>}
        {(entry.pl || entry.gen) && (
          <dl className="relative m-0 mt-6 flex flex-wrap gap-3">
            {entry.pl && <div className="rounded-full border border-border-strong bg-bg/40 px-4 py-2 flex items-baseline gap-2.5"><dt className="eyebrow">{t('dictPlural', locale)}</dt><dd className="m-0 font-display font-semibold text-[18px] text-text">{entry.pl}</dd></div>}
            {entry.gen && <div className="rounded-full border border-border-strong bg-bg/40 px-4 py-2 flex items-baseline gap-2.5"><dt className="eyebrow">{t('dictGenitive', locale)}</dt><dd className="m-0 font-display font-semibold text-[18px] text-text">{entry.gen}</dd></div>}
          </dl>
        )}
      </header>

      {fromLesson && <p className="m-0 text-[13.5px] text-muted">{t('dictFromLessonsOnly', locale)}</p>}

      <section data-kumpel="word-meanings" aria-labelledby={`meanings-${entry.p}-${entry.w}`} className="grid gap-2">
        <h2 id={`meanings-${entry.p}-${entry.w}`} className="eyebrow m-0 mb-1">{t('dictMeanings', locale)}</h2>
        <ol className="m-0 pl-6 list-decimal marker:text-muted grid gap-2 text-text-2 text-[17px]">
          {(lessonVocab ? [pick(lessonVocab.english, lessonVocab.french, locale), ...entry.s.filter((g) => g !== lessonVocab.english)] : entry.s).map((m, i) => (
            <li key={i} className={i === 0 ? 'font-display font-medium text-[26px] leading-snug text-text' : undefined}>{m}</li>
          ))}
        </ol>
        {entry.x && (
          <p className="m-0 mt-3 rounded-[22px] border border-border bg-card px-6 py-5 text-[15px] text-muted leading-relaxed">
            <span className="eyebrow block mb-2">{t('dictExample', locale)}</span>
            <span className="font-display font-medium text-[22px] leading-snug text-text">{entry.x[0]}</span>{entry.x[1] && <span className="block mt-1">{entry.x[1]}</span>}
          </p>
        )}
      </section>

      {sentences.length > 0 && (
        <section data-kumpel="word-lessons" aria-labelledby={`lessons-${entry.p}-${entry.w}`} className="grid gap-2">
          <h2 id={`lessons-${entry.p}-${entry.w}`} className="eyebrow m-0 inline-flex items-center gap-1.5"><BookOpen size={13} strokeWidth={2.6} /> {t('dictInOurLessons', locale)}</h2>
          <ul className="m-0 p-0 list-none grid gap-2">
            {sentences.map((s) => (
              <li key={s.de} className="rounded-[14px] border border-border bg-card px-4 py-3 text-[14.5px]">
                <div className="text-text font-semibold">{s.de}</div>
                <div className="text-muted">{pick(s.en, s.fr, locale)}</div>
                <Link href={`/lesson/${s.lessonId}/learn`} className="text-[13px] font-semibold text-text hover:underline inline-flex items-center min-h-[32px]">
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

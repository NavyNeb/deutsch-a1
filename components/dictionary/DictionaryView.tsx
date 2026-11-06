'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Volume2, Star, BookOpen } from 'lucide-react';
import { allVocab } from '@/content';
import type { VocabItem } from '@/content/types';
import { searchDictionary, MIN_QUERY_LETTERS, type DictEntry, type DictHit, type DictHitKind } from '@/lib/dictionary';
import { fold, letters } from '@/lib/dict-shared.mjs';
import { ttsSrc, playAudio, speakText } from '@/lib/audio';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { GenderTag } from '@/components/ui/GenderTag';
import { useRecents } from '@/lib/recent-searches';
import { DictCardLink } from './DictCardLink';
import { SearchTrigger } from './SearchTrigger';
import { POS_KEY, articlesOf, lessonToEntry } from './entry-utils';

const SUGGESTIONS = ['Haus', 'gehen', 'schön', 'house', 'Mädchen', 'Straße'];

type Card = { entry: DictEntry; kind: DictHitKind; via?: string; lesson?: VocabItem };

export function DictionaryView() {
  const { locale } = useLocale();
  const urlQ = (useSearchParams().get('q') ?? '').slice(0, 60);
  const [query, setQuery] = useState(urlQ);
  const [recents] = useRecents();
  const [hits, setHits] = useState<DictHit[]>([]);
  const [needsMore, setNeedsMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searched, setSearched] = useState('');
  const reqId = useRef(0);

  const vocab = useMemo(() => allVocab(), []);
  const lessonByWord = useMemo(() => {
    const m = new Map<string, VocabItem>();
    for (const v of vocab) if (!m.has(fold(v.german))) m.set(fold(v.german), v);
    return m;
  }, [vocab]);

  // The URL is the source of truth: /dictionary?q=haus, or a new ?q= pushed by the search modal's "all results".
  useEffect(() => { setQuery(urlQ); }, [urlQ]);

  useEffect(() => {
    const q = query.trim();
    const url = new URL(window.location.href);
    if (q) url.searchParams.set('q', q); else url.searchParams.delete('q');
    window.history.replaceState(null, '', url);

    if (letters(q).length < MIN_QUERY_LETTERS) {
      reqId.current++;
      setHits([]); setNeedsMore(false); setLoading(false); setError(false); setSearched('');
      return;
    }
    const id = ++reqId.current;
    setLoading(true);
    const timer = setTimeout(() => {
      searchDictionary(q)
        .then((r) => {
          if (id !== reqId.current) return;
          setHits(r.hits); setNeedsMore(r.needsMoreLetters); setError(false); setSearched(q);
        })
        .catch(() => { if (id === reqId.current) { setError(true); setHits([]); } })
        .finally(() => { if (id === reqId.current) setLoading(false); });
    }, 180);
    return () => clearTimeout(timer);
  }, [query]);

  const cards = useMemo<Card[]>(() => {
    if (!searched) return [];
    const q = fold(searched);
    const out: Card[] = hits.map((h) => ({ ...h, lesson: lessonByWord.get(fold(h.entry.w)) }));
    const covered = new Set(out.map((c) => fold(c.entry.w)));
    // Lesson words (incl. phrases) that the dictionary data doesn't have.
    const extra: Card[] = [];
    for (const v of vocab) {
      const key = fold(v.german);
      if (covered.has(key) || extra.some((c) => c.lesson === v)) continue;
      const hit = key === q || key.startsWith(q) || fold(v.english) === q || (v.french ? fold(v.french) === q : false);
      if (hit) extra.push({ entry: lessonToEntry(v), kind: key === q ? 'exact' : 'prefix', lesson: v });
    }
    return [...extra, ...out];
  }, [hits, searched, vocab, lessonByWord]);

  const trimmed = query.trim();
  const tooShort = letters(trimmed).length < MIN_QUERY_LETTERS;

  const dictRecents = recents.filter((r) => r.href.startsWith('/dictionary/')).slice(0, 6);

  return (
    <div className="mx-auto max-w-[1100px] px-5 py-8 md:px-14 md:py-12">
      <div className="eyebrow mb-4">Wörterbuch · {t('navDictionary', locale)}</div>
      <h1 className="font-display font-semibold text-[clamp(40px,6vw,64px)] leading-none tracking-[-0.03em] text-text m-0">Wörterbuch.</h1>
      <p className="text-text-2 text-[17px] leading-relaxed mt-4 mb-8 max-w-[60ch]">{t('dictSubtitle', locale)}</p>

      <div data-kumpel="dict-search" className="max-w-[760px] mb-3">
        <SearchTrigger query={query} loading={loading} onClear={() => setQuery('')} />
      </div>

      <div className="min-h-[24px] mb-6 text-[13px] text-muted" aria-live="polite">
        {!tooShort && !loading && !error && cards.length > 0 && <span>{cards.length} {t('dictResultsCount', locale)}</span>}
        {locale === 'fr' && cards.some((c) => !c.lesson) && <span className="ml-3">{t('dictEnglishOnly', locale)}</span>}
      </div>

      {error ? (
        <Notice tone="bad">
          <span>{t('dictLoadError', locale)}</span>
          <button onClick={() => { const q = query; setQuery(''); setTimeout(() => setQuery(q), 0); }} className="font-display font-bold text-text underline underline-offset-4 ml-2 py-2">
            {t('tryAgain', locale)}
          </button>
        </Notice>
      ) : tooShort ? (
        <div>
          {dictRecents.length > 0 && (
            <section data-kumpel="dict-recent" className="mb-8" aria-labelledby="recent-lookups">
              <h2 id="recent-lookups" className="eyebrow m-0 mb-3">{t('recentSearches', locale)}</h2>
              <div className="flex flex-wrap gap-2">
                {dictRecents.map((r) => (
                  <Link key={r.href} href={r.href} className="rounded-full border border-border-strong bg-card px-4 py-2.5 font-display font-medium text-[16px] text-text no-underline hover:bg-surface-2 transition">
                    {r.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
          <Notice>{t('dictTypeMin', locale)}</Notice>
          <div className="flex flex-wrap gap-2 mt-5">
            {SUGGESTIONS.map((s) => (
              <button key={s} onClick={() => setQuery(s)} className="rounded-full border border-border bg-card px-4 py-2.5 font-display font-semibold text-[15px] text-text-2 hover:border-text hover:text-text transition cursor-pointer">
                {s}
              </button>
            ))}
          </div>
        </div>
      ) : cards.length > 0 ? (
        <div>
          {needsMore && <p className="mb-4 text-[13.5px] text-muted">{t('dictTypeMore', locale)}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {cards.map((c) => <ResultCard key={`${c.entry.w}|${c.entry.p}|${c.kind}`} card={c} query={searched} />)}
          </div>
        </div>
      ) : !loading && searched === trimmed ? (
        <Notice>{needsMore ? t('dictTypeMore', locale) : t('dictNoResults', locale)}</Notice>
      ) : null}

      <p className="mt-12 text-[12.5px] text-muted leading-relaxed max-w-[70ch]">
        {t('dictAttribution', locale)}{' '}
        <a href="https://en.wiktionary.org" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-text">Wiktionary</a>
        {' · '}
        <a href="https://kaikki.org" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-text">kaikki.org</a>
        {' · '}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-text">CC BY-SA 4.0</a>
      </p>
    </div>
  );
}

function Notice({ children, tone }: { children: React.ReactNode; tone?: 'bad' }) {
  return (
    <div className={'rounded-[18px] border px-5 py-4 text-[15px] flex flex-wrap items-center ' + (tone === 'bad' ? 'border-[var(--ember)] bg-[var(--ember-wash)] text-[var(--ember-t)]' : 'border-border bg-card text-text-2')}>
      {children}
    </div>
  );
}

function ResultCard({ card, query }: { card: Card; query: string }) {
  const { entry, kind, via, lesson } = card;
  const { locale } = useLocale();
  const { state, toggleHardWord } = useProgress();
  const arts = articlesOf(entry.g);
  const saved = lesson ? state.hardWords.includes(lesson.id) : false;
  const bandBg = arts[0] ? `color-mix(in srgb, var(--${arts[0]}) 13%, var(--card))` : 'var(--s2)';
  const posKey = POS_KEY[entry.p];
  const meanings = lesson ? [pick(lesson.english, lesson.french, locale), ...entry.s.filter((g) => g !== lesson.english)] : entry.s;
  const listen = () => (lesson ? playAudio(ttsSrc(lesson.german)) : speakText(entry.w));

  const label =
    kind === 'form' ? `“${via}” ${t('dictFormOf', locale)}`
    : kind === 'english' ? `${t('dictEnglishMatch', locale)}: “${via}”`
    : kind === 'fuzzy' ? t('dictDidYouMean', locale)
    : null;

  return (
    <article className="relative bg-card border border-border rounded-[20px] shadow-card overflow-hidden flex flex-col transition hover:border-text hover:shadow-pop">
      <DictCardLink headword={entry.w} q={query} />
      <div className="p-4 pb-3.5 relative pointer-events-none" style={{ background: bandBg }}>
        {lesson && (
          <button
            onClick={() => toggleHardWord(lesson.id)}
            aria-label={saved ? t('savedToReview', locale) : t('addToLearned', locale)}
            title={t('dictStarHint', locale)}
            className={'absolute top-2 right-2 z-10 pointer-events-auto grid place-items-center w-10 h-10 rounded-full transition-colors ' + (saved ? 'text-ember-text' : 'text-muted hover:text-ember-text')}
          >
            <Star size={17} strokeWidth={2.2} fill={saved ? 'currentColor' : 'none'} />
          </button>
        )}
        {label && <div className="label text-muted mb-1.5">{label}</div>}
        <div className="flex flex-wrap items-center gap-1.5 mb-1.5 min-h-[20px]">
          {arts.map((a) => <GenderTag key={a} gender={a} />)}
          {posKey && <span className="label text-muted">{t(posKey, locale)}</span>}
          {lesson && (
            <span className="label inline-flex items-center gap-1 rounded-full bg-surface-2 text-text px-2 py-0.5">
              <BookOpen size={11} strokeWidth={2.6} /> {t('dictInLessons', locale)}
            </span>
          )}
        </div>
        <div className="flex items-end justify-between gap-2 pr-10">
          <h2 className="font-display font-extrabold text-[24px] leading-tight text-text m-0 break-words min-w-0">{entry.w}</h2>
          <button
            onClick={listen}
            aria-label={`${t('dictListen', locale)}: ${entry.w}`}
            className="relative z-10 pointer-events-auto grid place-items-center shrink-0 w-10 h-10 rounded-full bg-card text-text shadow-sm hover:brightness-105 active:scale-90 transition"
          >
            <Volume2 size={17} strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col gap-2.5">
        {entry.ipa && <span className="font-mono text-[13px] text-text">/{entry.ipa}/</span>}

        <ol className="m-0 pl-5 list-decimal marker:text-muted grid gap-1 text-text-2 text-[15px] font-display font-semibold">
          {meanings.map((m, i) => <li key={i}>{m}</li>)}
        </ol>

        {(entry.pl || entry.gen || entry.v) && (
          <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[13.5px]">
            {entry.pl && <><dt className="text-muted">{t('dictPlural', locale)}</dt><dd className="m-0 text-text font-semibold">{entry.pl}</dd></>}
            {entry.gen && <><dt className="text-muted">{t('dictGenitive', locale)}</dt><dd className="m-0 text-text font-semibold">{entry.gen}</dd></>}
            {entry.v && <><dt className="text-muted">{t('dictForms', locale)}</dt><dd className="m-0 text-text font-semibold">{entry.v}</dd></>}
          </dl>
        )}

        {entry.x && (
          <div className="border-t border-border pt-2.5 mt-auto">
            <p className="text-[13px] text-muted m-0 leading-relaxed">
              <span className="text-text">{entry.x[0]}</span>
              {entry.x[1] && <> — {lesson ? pick(lesson.example.en, lesson.example.fr, locale) : entry.x[1]}</>}
            </p>
          </div>
        )}
      </div>
    </article>
  );
}

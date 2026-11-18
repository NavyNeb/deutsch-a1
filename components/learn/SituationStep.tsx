'use client';
import type { LessonStep, VocabItem } from '@/content/types';
import { ttsSrc, playAudio } from '@/lib/audio';
import { genderMeta, splitArticle } from '@/lib/gender';
import { useShowTranslation } from '@/lib/lesson-prefs';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { pick } from '@/lib/i18n';
import { AudioButton } from '@/components/ui/AudioButton';

type Situation = Extract<LessonStep, { kind: 'situation' }>;

const norm = (s: string) => s.toLocaleLowerCase('de');

/** Does this word of the line belong to one of the lesson's key words? Nouns match whole; verbs and others also match their stem. */
function isKeyword(token: string, words: VocabItem[]): boolean {
  const tok = norm(token);
  return words.some((w) => {
    const { noun } = splitArticle(w.german, w.gender);
    const base = norm(noun);
    if (tok === base) return true;
    if (w.gender) return false;
    const stem = base.replace(/(en|n)$/, '');
    return stem.length >= 4 && tok.startsWith(stem) && tok.length <= stem.length + 3;
  });
}

function Line({ text, words }: { text: string; words: VocabItem[] }) {
  const parts = text.split(/(\p{L}+)/u);
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 && isKeyword(p, words)
          ? <span key={i} data-keyword="true" className="underline decoration-2 underline-offset-4 decoration-[var(--line2)] font-bold">{p}</span>
          : <span key={i}>{p}</span>,
      )}
    </>
  );
}

export function SituationStep({ step }: { step: Situation }) {
  const { locale } = useLocale();
  const [showTranslation] = useShowTranslation();
  const speakers = [...new Set(step.lines.map((l) => l.who))];

  return (
    <div className="flex flex-col gap-5">
      <header>
        <div className="eyebrow mb-2">Dialog</div>
        <h2 className="font-display font-semibold text-[30px] leading-[1.05] tracking-[-0.03em] m-0">{pick(step.title, step.titleFr, locale)}</h2>
        <p className="text-[15px] text-text-2 mt-2 mb-0">{pick(step.setting, step.settingFr, locale)}</p>
      </header>

      <ol className="list-none m-0 p-0 grid gap-3">
        {step.lines.map((line, i) => {
          const right = speakers.indexOf(line.who) % 2 === 1;
          return (
            <li key={i} className={'flex flex-col max-w-[88%] ' + (right ? 'self-end items-end' : 'self-start items-start')}>
              <span className="text-[12px] uppercase tracking-[0.06em] text-muted mb-1 px-1">{line.who}</span>
              <div className="flex items-start gap-3 rounded-[20px] bg-card border border-border px-5 py-3.5">
                <div className="min-w-0">
                  <div className="font-display font-medium text-[clamp(19px,2.6vw,24px)] leading-[1.25] tracking-[-0.01em]">
                    <Line text={line.de} words={step.words} />
                  </div>
                  {showTranslation && <div className="text-[14px] text-muted mt-1">{pick(line.en, line.fr, locale)}</div>}
                </div>
                <AudioButton src={ttsSrc(line.de)} label={`Anhören: ${line.de}`} size={32} />
              </div>
            </li>
          );
        })}
      </ol>

      {step.words.length > 0 && (
        <section aria-labelledby="situation-keywords">
          <h3 id="situation-keywords" className="eyebrow m-0 mb-3">{t('keyWords', locale)}</h3>
          <ul className="list-none m-0 p-0 flex flex-wrap gap-2">
            {step.words.map((w) => {
              const meta = genderMeta(w.gender);
              const { noun } = splitArticle(w.german, w.gender);
              return (
                <li key={w.id}>
                  <button
                    type="button"
                    aria-label={`${w.german} anhören`}
                    onClick={() => playAudio(ttsSrc(w.german))}
                    className="flex items-baseline gap-2 rounded-full border border-border-strong bg-transparent px-4 py-2 text-text cursor-pointer transition hover:bg-surface-2 active:scale-95"
                  >
                    {meta && <span data-chip-article={meta.gender} className="font-display" style={{ color: meta.text }}>{meta.gender}</span>}
                    <span className="font-display font-semibold">{noun}</span>
                    {showTranslation && <span className="text-[13px] text-muted">{pick(w.english, w.french, locale)}</span>}
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </div>
  );
}

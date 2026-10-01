'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, ChevronRight, ListTree } from 'lucide-react';
import type { Lesson, Special } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { pick } from '@/lib/i18n';
import { t } from '@/lib/ui-strings';
import { ttsSrc } from '@/lib/audio';
import { stepId } from './stepId';
import { LessonStepNav } from './LessonStepNav';
import { buildSections, sectionIndexOf } from './sections';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SpeedToggle } from '@/components/ui/SpeedToggle';
import { LessonResults } from './LessonResults';
import { BookRefLinks } from './BookRefLinks';
import { RelatedSpecials } from '@/components/specials/RelatedSpecials';
import { IntroStep } from './IntroStep';
import { VocabStep } from './VocabStep';
import { GrammarStep } from './GrammarStep';
import { PronunciationStep } from './PronunciationStep';
import { WrapupStep } from './WrapupStep';
import { ChapterDivider } from './ChapterDivider';
import { QuizIntro } from './QuizIntro';
import { ExerciseView } from '@/components/exercises/ExerciseView';

export function StepPlayer({ lesson, exitHref = '/', reviewHref }: { lesson: Lesson; exitHref?: string; reviewHref?: string }) {
  const router = useRouter();
  const { state, markStepDone, answerExercise, completeLesson } = useProgress();
  const { locale } = useLocale();
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [tocOpen, setTocOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [finished, setFinished] = useState(false);
  const [retaking, setRetaking] = useState(false);
  const step = lesson.steps[i];
  const isExercise = step.kind === 'exercise';
  const last = i === lesson.steps.length - 1;

  // Jump to any step (used by both the back button and the contents). If that
  // step was already completed, the exercise gate is pre-satisfied so the
  // learner is never stuck re-answering something to move on again.
  const goTo = (target: number) => {
    const targetStep = lesson.steps[target];
    const alreadyDone = state.lessons[lesson.id]?.steps.includes(stepId(targetStep, target)) ?? false;
    // A quiz retake must be answered afresh; everything else stays skippable once done.
    setAnswered(alreadyDone && !(retaking && targetStep.kind === 'exercise'));
    setI(target);
  };

  const advance = () => {
    markStepDone(lesson.id, stepId(step, i));
    if (last) { completeLesson(lesson.id); setFinished(true); return; }
    goTo(i + 1);
  };
  const goBack = () => { if (i > 0) goTo(i - 1); };
  const jumpFromNav = (target: number) => {
    goTo(target);
    setDrawerOpen(false);
  };

  const quizAt = lesson.steps.findIndex((s) => s.kind === 'quiz');
  const retakeQuiz = () => { setRetaking(true); setFinished(false); setAnswered(false); setI(quizAt); };
  const isSpecial = lesson.id.startsWith('sp-');
  const specialRefs = (lesson as Partial<Special>).special?.bookRefs;

  if (finished) {
    return (
      <LessonResults
        lesson={lesson}
        onHome={() => router.push(exitHref)}
        homeLabel={isSpecial ? t('backToSpecial', locale) : undefined}
        reviewHref={reviewHref}
        onRetakeQuiz={quizAt >= 0 ? retakeQuiz : undefined}
      />
    );
  }

  const sections = buildSections(lesson);
  const section = sections[sectionIndexOf(sections, i)];

  return (
    <div className="min-h-[100dvh] bg-bg">
      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 pt-[max(1rem,env(safe-area-inset-top))] sm:pt-8 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
        {/* Title row */}
        <header className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="font-rounded font-extrabold text-[24px] sm:text-[32px] leading-tight text-text m-0">{lesson.title.de}</h1>
            <p className="text-muted text-[14px] sm:text-[15px] m-0 mt-1">{pick(lesson.title.en, lesson.title.fr, locale)}</p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <SpeedToggle />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </header>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 min-w-0"><ProgressBar value={(i + 1) / lesson.steps.length} /></div>
          <span className="label tabular-nums">{i + 1} / {lesson.steps.length}</span>
        </div>

        {/* Phones: collapsed contents bar that opens the drawer */}
        <div className="md:hidden sticky top-[68px] z-30 -mx-4 px-4 pt-3 pb-2 bg-bg/92 backdrop-blur">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label={t('openLessonNav', locale)}
            className="w-full flex items-center gap-2.5 px-3.5 py-3 rounded-xl border border-border bg-card text-left cursor-pointer"
          >
            <ListTree size={16} strokeWidth={2.2} className="text-primary shrink-0" aria-hidden="true" />
            <span className="label shrink-0">{t('contents', locale)}</span>
            <span className="flex-1 min-w-0 truncate text-[13.5px] font-rounded text-text">{pick(section.label, section.labelFr, locale)}</span>
            <ChevronRight size={16} strokeWidth={2.2} className="text-muted shrink-0" aria-hidden="true" />
          </button>
        </div>

        {drawerOpen && (
          <div className="md:hidden fixed inset-0 z-50">
            <button
              type="button"
              aria-label={t('closeLessonNav', locale)}
              onClick={() => setDrawerOpen(false)}
              className="absolute inset-0 bg-black/45 border-none cursor-default"
            />
            <div className="absolute inset-y-0 left-0 w-[min(320px,88vw)] bg-card shadow-pop border-r border-border overflow-y-auto overscroll-contain pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
              <LessonStepNav lesson={lesson} current={i} onJump={jumpFromNav} onClose={() => setDrawerOpen(false)} />
            </div>
          </div>
        )}

        {/* One wide panel: sticky contents on the left, the step on the right */}
        <div className="mt-2 md:mt-5 flex rounded-2xl border border-border bg-card">
          <aside className={'hidden md:block shrink-0 border-r border-border transition-[width] duration-200 ' + (tocOpen ? 'w-[280px]' : 'w-[52px]')}>
            <div className="sticky top-[84px] max-h-[calc(100dvh-100px)] overflow-y-auto overscroll-contain">
              {tocOpen ? (
                <LessonStepNav lesson={lesson} current={i} onJump={jumpFromNav} onCollapse={() => setTocOpen(false)} />
              ) : (
                <button
                  type="button"
                  onClick={() => setTocOpen(true)}
                  aria-label={t('showContents', locale)}
                  className="w-full grid place-items-center h-12 border-none bg-transparent text-muted hover:text-text cursor-pointer"
                >
                  <ChevronRight size={18} strokeWidth={2.2} />
                </button>
              )}
            </div>
          </aside>

          <div className="flex-1 min-w-0 flex flex-col px-4 pt-5 sm:px-8 sm:pt-8 md:px-10 md:pt-10">
            <div className="w-full max-w-[720px] mx-auto flex-1 flex flex-col">
              <div className="flex-1 min-w-0 pb-5">
                <AnimatePresence mode="wait">
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                    {step.kind === 'intro' && <><IntroStep step={step} /><BookRefLinks lessonId={lesson.id} refs={specialRefs} />{!isSpecial && <RelatedSpecials lessonId={lesson.id} />}</>}
                    {step.kind === 'vocab' && <VocabStep item={step.item} />}
                    {step.kind === 'grammar' && <GrammarStep note={step.note} />}
                    {step.kind === 'pronunciation' && <PronunciationStep focus={step.focus} focusFr={step.focusFr} items={step.items} />}
                    {step.kind === 'wrapup' && <><WrapupStep summary={step.summary} summaryFr={step.summaryFr} /><BookRefLinks lessonId={lesson.id} refs={specialRefs} />{!isSpecial && <RelatedSpecials lessonId={lesson.id} />}</>}
                    {step.kind === 'chapter' && (
                      <ChapterDivider step={step} number={lesson.steps.slice(0, i + 1).filter((x) => x.kind === 'chapter').length} total={lesson.steps.filter((x) => x.kind === 'chapter').length} />
                    )}
                    {step.kind === 'quiz' && <QuizIntro step={step} questions={lesson.steps.slice(i + 1).filter((x) => x.kind === 'exercise').length} />}
                    {step.kind === 'exercise' && (
                      <ExerciseView
                        exercise={step.exercise}
                        onResult={(c) => answerExercise(lesson.id, step.exercise.id, c)}
                        onPass={() => setAnswered(true)}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="sticky bottom-0 z-20 -mx-4 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-card/95 backdrop-blur border-t border-border
                sm:-mx-8 sm:px-8 md:-mx-10 md:px-10 md:static md:pt-5 md:pb-8 md:bg-transparent md:backdrop-blur-none
                flex justify-between items-start gap-3">
                {/* Back — secondary; German on the button, translated caption below, small speaker alongside */}
                <div className="flex flex-col items-start gap-1.5">
                  <div className="flex items-center gap-2">
                    <Button variant="secondary" onClick={goBack} disabled={i === 0}>
                      <ArrowLeft size={16} strokeWidth={2.4} aria-hidden="true" /> Zurück
                    </Button>
                    <span className="max-[420px]:hidden"><AudioButton src={ttsSrc('Zurück')} label="Anhören: Zurück" size={36} /></span>
                  </div>
                  <span className="label pl-1 text-muted">{t('back', locale)}</span>
                </div>

                {/* Next / Finish — primary */}
                <div className="flex flex-col items-end gap-1.5">
                  <div className="flex items-center gap-2">
                    <span className="max-[420px]:hidden"><AudioButton src={ttsSrc(last ? 'Fertig' : 'Weiter')} label={`Anhören: ${last ? 'Fertig' : 'Weiter'}`} size={36} /></span>
                    <Button onClick={advance} disabled={isExercise && !answered}>
                      {last ? <>Fertig <Check size={16} strokeWidth={2.6} aria-hidden="true" /></> : <>Weiter <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" /></>}
                    </Button>
                  </div>
                  <span className="label pr-1 text-muted">{last ? t('done', locale) : t('next', locale)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { PanelLeft, ArrowLeft, ArrowRight, Check } from 'lucide-react';
import type { Lesson } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { ttsSrc } from '@/lib/audio';
import { stepId } from './stepId';
import { LessonStepNav } from './LessonStepNav';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { AudioButton } from '@/components/ui/AudioButton';
import { LanguageToggle } from '@/components/ui/LanguageToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { SpeedToggle } from '@/components/ui/SpeedToggle';
import { LessonResults } from './LessonResults';
import { BookRefLinks } from './BookRefLinks';
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
  const [navOpen, setNavOpen] = useState(true);
  const [finished, setFinished] = useState(false);
  const [retaking, setRetaking] = useState(false);
  const step = lesson.steps[i];
  const isExercise = step.kind === 'exercise';
  const last = i === lesson.steps.length - 1;

  // Default the panel open on wide screens, collapsed on narrow ones. Only
  // checked once on mount to keep this simple — the toggle handles the rest.
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) setNavOpen(false);
  }, []);

  // Jump to any step (used by both the back button and the side nav). If that
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
    // On phones the step list is a drawer — close it once a step is chosen.
    if (window.innerWidth < 768) setNavOpen(false);
  };

  const quizAt = lesson.steps.findIndex((s) => s.kind === 'quiz');
  const retakeQuiz = () => { setRetaking(true); setFinished(false); setAnswered(false); setI(quizAt); };
  const isSpecial = lesson.id.startsWith('sp-');

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

  return (
    <div className="min-h-[100dvh] flex">
      {navOpen && (
        <button
          type="button"
          aria-label={t('closeLessonNav', locale)}
          onClick={() => setNavOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/45 border-none cursor-default"
        />
      )}
      <LessonStepNav lesson={lesson} current={i} onJump={jumpFromNav} open={navOpen} />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Progress indicator pinned at the top */}
        <div className="sticky top-0 z-30 bg-bg/90 backdrop-blur pt-[env(safe-area-inset-top)]">
          <div className="w-full max-w-[640px] mx-auto px-4 sm:px-6 pt-3 sm:pt-6 pb-2 sm:pb-0 flex flex-wrap items-center gap-x-2 gap-y-2.5 sm:gap-3">
            <button
              type="button"
              onClick={() => setNavOpen((o) => !o)}
              aria-label={navOpen ? t('closeLessonNav', locale) : t('openLessonNav', locale)}
              className="grid place-items-center shrink-0 w-10 h-10 sm:w-9 sm:h-9 rounded-[10px] border border-border bg-card text-text-2
                transition-[border-color,background] duration-150 hover:border-border-strong cursor-pointer"
            >
              <PanelLeft size={17} strokeWidth={2.2} />
            </button>
            <div className="order-last basis-full sm:order-none sm:basis-0 sm:flex-1 min-w-0"><ProgressBar value={(i + 1) / lesson.steps.length} /></div>
            <span className="label tabular-nums mr-auto sm:mr-0">{i + 1} / {lesson.steps.length}</span>
            <SpeedToggle />
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>

        {/* Card + controls: top-aligned with a pinned action bar on phones, centered on larger screens */}
        <div className="flex-1 flex items-stretch sm:items-center justify-center px-4 sm:px-6 pt-4 pb-0 sm:py-8">
          <div className="w-full max-w-[640px] flex flex-col sm:block">
            <div className="flex-1 min-w-0 pb-5 sm:pb-0 sm:flex-none">
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                {step.kind === 'intro' && <><IntroStep step={step} /><BookRefLinks lessonId={lesson.id} /></>}
                {step.kind === 'vocab' && <VocabStep item={step.item} />}
                {step.kind === 'grammar' && <GrammarStep note={step.note} />}
                {step.kind === 'pronunciation' && <PronunciationStep focus={step.focus} focusFr={step.focusFr} items={step.items} />}
                {step.kind === 'wrapup' && <><WrapupStep summary={step.summary} summaryFr={step.summaryFr} /><BookRefLinks lessonId={lesson.id} /></>}
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

            <div className="sticky bottom-0 z-20 -mx-4 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-bg/92 backdrop-blur border-t border-border
              sm:static sm:mx-0 sm:px-0 sm:pt-0 sm:pb-0 sm:mt-7 sm:bg-transparent sm:backdrop-blur-none sm:border-t-0
              flex justify-between items-start gap-3">
              {/* Back — secondary; German on the button, translated caption below, small speaker alongside */}
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex items-center gap-2">
                  <Button variant="secondary" onClick={goBack} disabled={i === 0}>
                    <ArrowLeft size={16} strokeWidth={2.4} aria-hidden="true" /> Zurück
                  </Button>
                  <AudioButton src={ttsSrc('Zurück')} label="Anhören: Zurück" size={36} />
                </div>
                <span className="label pl-1 text-muted">{t('back', locale)}</span>
              </div>

              {/* Next / Finish — primary */}
              <div className="flex flex-col items-end gap-1.5">
                <div className="flex items-center gap-2">
                  <AudioButton src={ttsSrc(last ? 'Fertig' : 'Weiter')} label={`Anhören: ${last ? 'Fertig' : 'Weiter'}`} size={36} />
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
  );
}

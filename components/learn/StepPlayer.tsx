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
import { IntroStep } from './IntroStep';
import { VocabStep } from './VocabStep';
import { GrammarStep } from './GrammarStep';
import { PronunciationStep } from './PronunciationStep';
import { WrapupStep } from './WrapupStep';
import { ExerciseView } from '@/components/exercises/ExerciseView';

export function StepPlayer({ lesson }: { lesson: Lesson }) {
  const router = useRouter();
  const { state, markStepDone, answerExercise, completeLesson } = useProgress();
  const { locale } = useLocale();
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const [finished, setFinished] = useState(false);
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
    setAnswered(alreadyDone);
    setI(target);
  };

  const advance = () => {
    markStepDone(lesson.id, stepId(step, i));
    if (last) { completeLesson(lesson.id); setFinished(true); return; }
    goTo(i + 1);
  };
  const goBack = () => { if (i > 0) goTo(i - 1); };

  if (finished) return <LessonResults lesson={lesson} onHome={() => router.push('/')} />;

  return (
    <div className="min-h-[100dvh] flex">
      <LessonStepNav lesson={lesson} current={i} onJump={goTo} open={navOpen} />

      <div className="flex-1 min-w-0 flex flex-col">
        {/* Progress indicator pinned at the top */}
        <div className="w-full max-w-[640px] mx-auto px-6 pt-6 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setNavOpen((o) => !o)}
            aria-label={navOpen ? t('closeLessonNav', locale) : t('openLessonNav', locale)}
            className="grid place-items-center shrink-0 w-9 h-9 rounded-[10px] border border-border bg-card text-text-2
              transition-[border-color,background] duration-150 hover:border-border-strong cursor-pointer"
          >
            <PanelLeft size={17} strokeWidth={2.2} />
          </button>
          <div className="flex-1"><ProgressBar value={(i + 1) / lesson.steps.length} /></div>
          <span className="label tabular-nums">{i + 1} / {lesson.steps.length}</span>
          <SpeedToggle />
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Card + controls, centered in the remaining space */}
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <div className="w-full max-w-[640px]">
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                {step.kind === 'intro' && <IntroStep step={step} />}
                {step.kind === 'vocab' && <VocabStep item={step.item} />}
                {step.kind === 'grammar' && <GrammarStep note={step.note} />}
                {step.kind === 'pronunciation' && <PronunciationStep focus={step.focus} focusFr={step.focusFr} items={step.items} />}
                {step.kind === 'wrapup' && <WrapupStep summary={step.summary} summaryFr={step.summaryFr} />}
                {step.kind === 'exercise' && (
                  <ExerciseView
                    exercise={step.exercise}
                    onResult={(c) => answerExercise(lesson.id, step.exercise.id, c)}
                    onPass={() => setAnswered(true)}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <div className="mt-7 flex justify-between items-start gap-3">
              {/* Back — secondary; German on the button, translated caption below, small speaker alongside */}
              <div className="flex flex-col items-start gap-1.5">
                <div className="flex items-center gap-2">
                  <Button variant="secondary" onClick={goBack} disabled={i === 0}>
                    <ArrowLeft size={16} strokeWidth={2.4} aria-hidden="true" /> Zurück
                  </Button>
                  <AudioButton src={ttsSrc('Zurück')} label="Anhören: Zurück" size={22} />
                </div>
                <span className="label pl-1 text-muted">{t('back', locale)}</span>
              </div>

              {/* Next / Finish — primary */}
              <div className="flex flex-col items-end gap-1.5">
                <div className="flex items-center gap-2">
                  <AudioButton src={ttsSrc(last ? 'Fertig' : 'Weiter')} label={`Anhören: ${last ? 'Fertig' : 'Weiter'}`} size={22} />
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

'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import type { Lesson, Special } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { useLocale } from '@/lib/locale-store';
import { t } from '@/lib/ui-strings';
import { stepId } from './stepId';
import { LessonStepNav } from './LessonStepNav';
import { LessonTopBar } from './LessonTopBar';
import { segmentsFor } from './segments';
import { Button } from '@/components/ui/Button';
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

const isTextField = (el: EventTarget | null) =>
  el instanceof HTMLElement && (['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName) || el.closest('[contenteditable="true"]') !== null);
const isInteractive = (el: EventTarget | null) => el instanceof HTMLElement && el.closest('button, a, [role="button"]') !== null;

export function StepPlayer({ lesson, exitHref = '/', reviewHref }: { lesson: Lesson; exitHref?: string; reviewHref?: string }) {
  const router = useRouter();
  const { state, markStepDone, answerExercise, completeLesson } = useProgress();
  const { locale } = useLocale();
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState(false);
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

  const canAdvance = !(isExercise && !answered);
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

  // Keyboard: Space / → advance, ← goes back. Never while typing in a field (answers contain spaces),
  // never while the contents drawer is open, and Space is left to buttons/links (it activates them).
  useEffect(() => {
    if (finished) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.altKey || drawerOpen || isTextField(e.target)) return;
      if (e.key === ' ' || e.key === 'ArrowRight') {
        if (e.key === ' ' && isInteractive(e.target)) return;
        if (!canAdvance) return;
        e.preventDefault();
        advance();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goBack();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

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

  return (
    <div className="min-h-[100dvh] bg-bg flex flex-col">
      <LessonTopBar lesson={lesson} segments={segmentsFor(lesson, i)} onClose={() => router.push(exitHref)} onOpenContents={() => setDrawerOpen(true)} />

      {drawerOpen && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label={t('closeLessonNav', locale)}
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 w-full border-0 cursor-default bg-black/55"
          />
          <div
            role="dialog"
            aria-label={t('lessonStepsNav', locale)}
            onKeyDown={(e) => { if (e.key === 'Escape') setDrawerOpen(false); }}
            className="absolute inset-y-0 left-0 w-[min(360px,90vw)] bg-card border-r border-border-strong overflow-y-auto overscroll-contain pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
          >
            <LessonStepNav lesson={lesson} current={i} onJump={jumpFromNav} onClose={() => setDrawerOpen(false)} />
          </div>
        </div>
      )}

      <main className="flex-1 w-full max-w-[760px] mx-auto px-5 sm:px-6 py-4 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="flex-1 flex flex-col justify-center">
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
      </main>

      <footer className="sticky bottom-0 z-20 bg-bg/90 backdrop-blur border-t border-border pb-[env(safe-area-inset-bottom)]">
        <div className="w-full max-w-[760px] mx-auto px-5 sm:px-6 py-4 flex items-center justify-between gap-4">
          <Button variant="secondary" onClick={goBack} disabled={i === 0} aria-label="Zurück" title={t('back', locale)} className="w-14 !px-0">
            <ArrowLeft size={20} strokeWidth={1.8} aria-hidden="true" />
          </Button>
          <div className="hidden sm:block text-[13px] text-muted">
            <kbd className="border border-border-strong rounded-md px-2 py-0.5 mr-2">Space</kbd>Weiter
            <span className="mx-3">·</span>
            <kbd className="border border-border-strong rounded-md px-2 py-0.5 mr-1">←</kbd><kbd className="border border-border-strong rounded-md px-2 py-0.5">→</kbd>
          </div>
          <Button size="lg" onClick={advance} disabled={!canAdvance}>
            {last ? <>Fertig <Check size={18} strokeWidth={2} aria-hidden="true" /></> : <>Weiter <ArrowRight size={18} strokeWidth={2} aria-hidden="true" /></>}
          </Button>
        </div>
      </footer>
    </div>
  );
}

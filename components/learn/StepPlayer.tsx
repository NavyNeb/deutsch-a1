'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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
import { IntroStep } from './IntroStep';
import { VocabStep } from './VocabStep';
import { GrammarStep } from './GrammarStep';
import { PronunciationStep } from './PronunciationStep';
import { WrapupStep } from './WrapupStep';
import { ExerciseView } from '@/components/exercises/ExerciseView';

export function StepPlayer({ lesson }: { lesson: Lesson }) {
  const router = useRouter();
  const { state, markStepDone, recordExercise } = useProgress();
  const { locale } = useLocale();
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [navOpen, setNavOpen] = useState(true);
  const step = lesson.steps[i];
  const isExercise = step.kind === 'exercise';
  const last = i === lesson.steps.length - 1;

  // Default the panel open on wide screens, collapsed on narrow ones. Only
  // checked once on mount to keep this simple — the ☰ toggle handles the rest.
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
    if (last) { router.push('/'); return; }
    goTo(i + 1);
  };
  const goBack = () => { if (i > 0) goTo(i - 1); };

  return (
    <div style={{ minHeight: '100dvh', display: 'flex' }}>
      <LessonStepNav lesson={lesson} current={i} onJump={goTo} open={navOpen} />

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        {/* Progress indicator pinned at the top */}
        <div style={{ width: '100%', maxWidth: 640, margin: '0 auto', padding: '24px 24px 0', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            type="button"
            onClick={() => setNavOpen((o) => !o)}
            aria-label={navOpen ? t('closeLessonNav', locale) : t('openLessonNav', locale)}
            style={{ background: 'none', border: '1px solid var(--border)', borderRadius: 6, width: 36, height: 36, cursor: 'pointer', color: 'var(--ink)', flexShrink: 0 }}
          >
            ☰
          </button>
          <div style={{ flex: 1 }}><ProgressBar value={(i + 1) / lesson.steps.length} /></div>
          <span className="label">{i + 1} / {lesson.steps.length}</span>
          <LanguageToggle />
        </div>

        {/* Card + controls, centered in the remaining space */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px 24px' }}>
          <div style={{ width: '100%', maxWidth: 640 }}>
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                {step.kind === 'intro' && <IntroStep step={step} />}
                {step.kind === 'vocab' && <VocabStep item={step.item} />}
                {step.kind === 'grammar' && <GrammarStep note={step.note} />}
                {step.kind === 'pronunciation' && <PronunciationStep focus={step.focus} focusFr={step.focusFr} items={step.items} />}
                {step.kind === 'wrapup' && <WrapupStep summary={step.summary} summaryFr={step.summaryFr} />}
                {step.kind === 'exercise' && <ExerciseView exercise={step.exercise} onResult={(c) => { setAnswered(true); recordExercise(lesson.id, step.exercise.id, c); }} />}
              </motion.div>
            </AnimatePresence>
            <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
              {/* Back — secondary/ghost; German on the button, English as a quiet caption, small speaker alongside */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Button
                    onClick={goBack}
                    disabled={i === 0}
                    style={{ background: 'var(--card)', color: 'var(--ink)', border: '1px solid var(--border)' }}
                  >
                    ← Zurück
                  </Button>
                  <AudioButton src={ttsSrc('Zurück')} label="Say Zurück" size={22} />
                </div>
                <span className="label" style={{ paddingLeft: 4, color: 'var(--muted)' }}>{t('back', locale)}</span>
              </div>

              {/* Next / Finish — primary */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <AudioButton src={ttsSrc(last ? 'Fertig' : 'Weiter')} label={`Say ${last ? 'Fertig' : 'Weiter'}`} size={22} />
                  <Button onClick={advance} disabled={isExercise && !answered}>
                    {last ? 'Fertig ✓' : 'Weiter →'}
                  </Button>
                </div>
                <span className="label" style={{ paddingRight: 4, color: 'var(--muted)' }}>{last ? t('done', locale) : t('next', locale)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

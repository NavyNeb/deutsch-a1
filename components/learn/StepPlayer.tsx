'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import type { Lesson } from '@/content/types';
import { useProgress } from '@/lib/progress-store';
import { stepId } from './stepId';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { IntroStep } from './IntroStep';
import { VocabStep } from './VocabStep';
import { GrammarStep } from './GrammarStep';
import { PronunciationStep } from './PronunciationStep';
import { WrapupStep } from './WrapupStep';
import { ExerciseView } from '@/components/exercises/ExerciseView';

export function StepPlayer({ lesson }: { lesson: Lesson }) {
  const router = useRouter();
  const { markStepDone, recordExercise } = useProgress();
  const [i, setI] = useState(0);
  const [answered, setAnswered] = useState(false);
  const step = lesson.steps[i];
  const isExercise = step.kind === 'exercise';
  const last = i === lesson.steps.length - 1;

  const advance = () => {
    markStepDone(lesson.id, stepId(step, i));
    if (last) { router.push('/'); return; }
    setAnswered(false); setI(i + 1);
  };

  return (
    <div style={{ maxWidth: 640, margin: '0 auto', padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
        <div style={{ flex: 1 }}><ProgressBar value={(i) / lesson.steps.length} /></div>
        <span className="label">{i + 1} / {lesson.steps.length}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
          {step.kind === 'intro' && <IntroStep step={step} />}
          {step.kind === 'vocab' && <VocabStep item={step.item} />}
          {step.kind === 'grammar' && <GrammarStep note={step.note} />}
          {step.kind === 'pronunciation' && <PronunciationStep focus={step.focus} items={step.items} />}
          {step.kind === 'wrapup' && <WrapupStep summary={step.summary} />}
          {step.kind === 'exercise' && <ExerciseView exercise={step.exercise} onResult={(c) => { setAnswered(true); recordExercise(lesson.id, step.exercise.id, c); }} />}
        </motion.div>
      </AnimatePresence>
      <div style={{ marginTop: 24 }}>
        <Button onClick={advance} disabled={isExercise && !answered}>{last ? 'Fertig ✓' : 'Weiter →'}</Button>
      </div>
    </div>
  );
}

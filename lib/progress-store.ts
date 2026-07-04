'use client';
import { useSyncExternalStore } from 'react';
import { ProgressState, loadProgress, saveProgress, withStepDone, withExerciseResult, withHardWord, withoutHardWord, emptyProgress } from './progress';

let state: ProgressState = emptyProgress();
let hydrated = false;
const listeners = new Set<() => void>();
function set(next: ProgressState) { state = next; saveProgress(state); listeners.forEach((l) => l()); }
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function getSnapshot() {
  if (!hydrated && typeof window !== 'undefined') { state = loadProgress(); hydrated = true; }
  return state;
}
function getServerSnapshot() { return emptyProgress(); }

export function useProgress() {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    state: s,
    markStepDone: (lessonId: string, stepId: string) => set(withStepDone(state, lessonId, stepId)),
    recordExercise: (lessonId: string, exId: string, correct: boolean) => set(withExerciseResult(state, lessonId, exId, correct)),
    toggleHardWord: (vocabId: string) => set(state.hardWords.includes(vocabId) ? withoutHardWord(state, vocabId) : withHardWord(state, vocabId)),
  };
}

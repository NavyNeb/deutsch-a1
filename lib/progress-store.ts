'use client';
import { useSyncExternalStore } from 'react';
import {
  ProgressState, loadProgress, saveProgress, emptyProgress,
  withStepDone, withExerciseResult, withHardWord, withoutHardWord,
  withNewCard, withoutCard, withCardReview, withXp, withCompletedLesson,
  dateKey, XP_EXERCISE, XP_REVIEW, XP_LESSON,
} from './progress';

let state: ProgressState = emptyProgress();
let hydrated = false;
const SERVER_SNAPSHOT = emptyProgress();
const listeners = new Set<() => void>();
function set(next: ProgressState) { state = next; saveProgress(state); listeners.forEach((l) => l()); }
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }
function getSnapshot() {
  if (!hydrated && typeof window !== 'undefined') { state = loadProgress(); hydrated = true; }
  return state;
}
function getServerSnapshot() { return SERVER_SNAPSHOT; }

// Low-level accessors for the sync layer (outside React).
export function getProgressState(): ProgressState {
  if (!hydrated && typeof window !== 'undefined') { state = loadProgress(); hydrated = true; }
  return state;
}
export function replaceProgress(next: ProgressState) { set(next); }
export function subscribeProgress(l: () => void) { return subscribe(l); }

export function useProgress() {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return {
    state: s,
    markStepDone: (lessonId: string, stepId: string) => set(withStepDone(state, lessonId, stepId)),

    // Records the result and, the first time an exercise is answered correctly,
    // awards XP (logged under today so it feeds streaks and the daily goal).
    answerExercise: (lessonId: string, exId: string, correct: boolean) => {
      const already = state.lessons[lessonId]?.exercises[exId] === true;
      let next = withExerciseResult(state, lessonId, exId, correct);
      if (correct && !already) next = withXp(next, XP_EXERCISE, dateKey(Date.now()));
      set(next);
    },

    // One-time bonus for finishing a lesson.
    completeLesson: (lessonId: string) => {
      if (state.completedLessons.includes(lessonId)) { set(withCompletedLesson(state, lessonId)); return; }
      set(withXp(withCompletedLesson(state, lessonId), XP_LESSON, dateKey(Date.now())));
    },

    // Marking a word difficult creates its SRS card; un-marking removes it.
    toggleHardWord: (vocabId: string) => {
      if (state.hardWords.includes(vocabId)) set(withoutCard(withoutHardWord(state, vocabId), vocabId));
      else set(withNewCard(withHardWord(state, vocabId), vocabId, Date.now()));
    },

    // A spaced-repetition review: reschedule the card, award XP on success.
    reviewCard: (vocabId: string, correct: boolean) => {
      const now = Date.now();
      let next = withCardReview(state, vocabId, correct, now);
      if (correct) next = withXp(next, XP_REVIEW, dateKey(now));
      set(next);
    },

    // Generic XP award (games) — logged under today so it feeds streak + daily goal.
    awardXp: (amount: number) => { if (amount > 0) set(withXp(state, amount, dateKey(Date.now()))); },
  };
}

import type { ExamPart, SpeakExamFormat } from '@/content/sprechen/exam-formats';
import { DISCUSSION_CLOSE, DISCUSSION_STATEMENTS, EXAMINER, FOLLOWUP_QUESTIONS, INTRO_QUESTIONS, PLAN_PARTNER, PLAN_SCENARIOS } from '@/content/sprechen/exam-lines.mjs';
import { TALK_TOPICS } from '@/content/sprechen';

// The running order of a mock oral exam, built from a format: lines the examiner and the partner say,
// preparation time, and the learner's speaking turns. Pure, so it can be tested without a browser.

export type Card = { title: string; lines: string[]; words?: string[]; note?: string };

export type ExamStep =
  | { type: 'say'; who: 'examiner' | 'partner'; de: string; partId: string }
  | { type: 'prep'; seconds: number; partId: string; card: Card }
  | { type: 'speak'; seconds: number; partId: string; card?: Card }
  | { type: 'stance'; partId: string; statementId: string }                    // learner picks for or against
  | { type: 'partnerReply'; partId: string; statementId: string };            // partner opens against the learner's side

type Rng = () => number;
const pickOne = <T,>(a: readonly T[], rnd: Rng): T => a[Math.floor(rnd() * a.length)];
function pickSome<T>(a: readonly T[], n: number, rnd: Rng): T[] {
  const c = [...a];
  const out: T[] = [];
  while (out.length < n && c.length) out.push(c.splice(Math.floor(rnd() * c.length), 1)[0]);
  return out;
}

const say = (who: 'examiner' | 'partner', de: string, partId: string): ExamStep => ({ type: 'say', who, de, partId });

function partSteps(format: SpeakExamFormat, part: ExamPart, rnd: Rng): ExamStep[] {
  const level = part.level ?? format.level;
  const steps: ExamStep[] = [];
  switch (part.kind) {
    case 'intro': {
      const qs = pickSome(INTRO_QUESTIONS, 4, rnd);
      steps.push(say('examiner', EXAMINER.introIntro, part.id));
      for (const q of qs) { steps.push(say('examiner', q, part.id)); steps.push({ type: 'speak', seconds: Math.round(part.speakSeconds / qs.length), partId: part.id }); }
      break;
    }
    case 'plan': {
      const sc = pickOne(PLAN_SCENARIOS.filter((s) => s.level === level), rnd);
      const turns = [sc.opener, ...PLAN_PARTNER];
      steps.push(say('examiner', EXAMINER.planIntro, part.id));
      if (part.prepSeconds) steps.push({ type: 'prep', seconds: part.prepSeconds, partId: part.id, card: { title: sc.title, lines: [sc.task, ...sc.points] } });
      const card: Card = { title: sc.title, lines: [sc.task, ...sc.points] };
      for (const line of turns) { steps.push(say('partner', line, part.id)); steps.push({ type: 'speak', seconds: Math.round(part.speakSeconds / turns.length), partId: part.id, card }); }
      break;
    }
    case 'talk': {
      const topic = pickOne(TALK_TOPICS.filter((t) => t.level === level), rnd);
      const card: Card = { title: topic.de, lines: topic.points, words: topic.words };
      steps.push(say('examiner', EXAMINER.talkIntro, part.id));
      if (part.prepSeconds) steps.push({ type: 'prep', seconds: part.prepSeconds, partId: part.id, card });
      steps.push(say('examiner', EXAMINER.begin, part.id));
      steps.push({ type: 'speak', seconds: part.speakSeconds, partId: part.id, card });
      break;
    }
    case 'questions': {
      const qs = pickSome(FOLLOWUP_QUESTIONS, 2, rnd);
      const each = Math.round(part.speakSeconds * 0.3);
      steps.push(say('examiner', EXAMINER.questionsIntro, part.id));
      for (const q of qs) { steps.push(say('examiner', q, part.id)); steps.push({ type: 'speak', seconds: each, partId: part.id }); }
      steps.push(say('examiner', EXAMINER.feedbackIntro, part.id));
      steps.push({ type: 'speak', seconds: Math.round(part.speakSeconds * 0.4), partId: part.id });
      break;
    }
    case 'discussion': {
      const st = pickOne(DISCUSSION_STATEMENTS, rnd);
      const card: Card = { title: st.statement, lines: [], note: st.statement };
      steps.push(say('examiner', EXAMINER.discussionIntro, part.id));
      steps.push(say('examiner', st.statement, part.id));
      if (part.prepSeconds) steps.push({ type: 'prep', seconds: part.prepSeconds, partId: part.id, card });
      steps.push({ type: 'stance', partId: part.id, statementId: st.id });
      steps.push({ type: 'speak', seconds: 60, partId: part.id, card });
      steps.push({ type: 'partnerReply', partId: part.id, statementId: st.id });
      steps.push({ type: 'speak', seconds: 60, partId: part.id, card });
      steps.push(say('partner', DISCUSSION_CLOSE[0], part.id)); steps.push({ type: 'speak', seconds: 45, partId: part.id, card });
      steps.push(say('partner', DISCUSSION_CLOSE[1], part.id)); steps.push({ type: 'speak', seconds: 45, partId: part.id, card });
      steps.push(say('partner', DISCUSSION_CLOSE[3], part.id));
      break;
    }
  }
  return steps;
}

export function buildExamPlan(format: SpeakExamFormat, rnd: Rng = Math.random): ExamStep[] {
  const steps: ExamStep[] = [say('examiner', EXAMINER.welcome, format.parts[0].id)];
  format.parts.forEach((p, i) => {
    if (i > 0) steps.push(say('examiner', EXAMINER.next, p.id));
    steps.push(...partSteps(format, p, rnd));
  });
  steps.push(say('examiner', EXAMINER.end, format.parts[format.parts.length - 1].id));
  return steps;
}

/** The partner's opening line against a statement, given the side the learner took. */
export function discussionOpener(statementId: string, learnerSide: 'for' | 'against'): string {
  const st = DISCUSSION_STATEMENTS.find((s) => s.id === statementId);
  if (!st) return DISCUSSION_CLOSE[0];
  return learnerSide === 'for' ? st.againstOpener : st.forOpener;
}

export const discussionStatement = (statementId: string): string => DISCUSSION_STATEMENTS.find((s) => s.id === statementId)?.statement ?? '';

/** Seconds the learner is expected to speak in a part (the planned turns added up). */
export function plannedSpeaking(steps: ExamStep[], partId: string): number {
  return steps.reduce((n, s) => (s.type === 'speak' && s.partId === partId ? n + s.seconds : n), 0);
}

/** Share (0–100) of the planned speaking time the learner used, capped at 100. */
export function usedPercent(spokenSeconds: number, plannedSeconds: number): number {
  return plannedSeconds > 0 ? Math.min(100, Math.round((spokenSeconds / plannedSeconds) * 100)) : 0;
}

/** Self-rating (five criteria, 1–4 each) as a percentage, 0 when nothing is rated. */
export function rubricPercent(ratings: Record<string, number>, ids: readonly string[]): number {
  if (!ids.length) return 0;
  const sum = ids.reduce((n, id) => n + Math.max(0, Math.min(4, ratings[id] ?? 0)), 0);
  return Math.round((sum / (ids.length * 4)) * 100);
}

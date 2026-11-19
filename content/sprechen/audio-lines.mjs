// Every German line the speaking trainer plays that is not already in a lesson, so the audio script can
// generate a recording of each. Plain .mjs: scripts/prepare-audio.mjs imports it.
import { PHRASES } from './redemittel.mjs';
import { MINIMAL_PAIRS } from './minimal-pairs.mjs';
import {
  DISCUSSION_CLOSE, DISCUSSION_STATEMENTS, EXAMINER, FOLLOWUP_QUESTIONS, INTRO_QUESTIONS, PLAN_PARTNER, PLAN_SCENARIOS,
} from './exam-lines.mjs';

export function sprechenAudioLines() {
  return [...new Set([
    ...PHRASES.map((p) => p.de),
    ...MINIMAL_PAIRS.flatMap((p) => [p.a, p.b]),
    ...Object.values(EXAMINER),
    ...INTRO_QUESTIONS,
    ...FOLLOWUP_QUESTIONS,
    ...PLAN_PARTNER,
    ...PLAN_SCENARIOS.map((s) => s.opener),
    ...DISCUSSION_CLOSE,
    ...DISCUSSION_STATEMENTS.flatMap((d) => [d.statement, d.againstOpener, d.forOpener]),
  ])].filter((t) => typeof t === 'string' && t.trim().length > 0);
}

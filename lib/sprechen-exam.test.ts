import { describe, it, expect } from 'vitest';
import { RUBRIC, SPEAK_EXAMS, getSpeakExam } from '@/content/sprechen/exam-formats';
import { DISCUSSION_STATEMENTS, EXAMINER, PLAN_PARTNER, PLAN_SCENARIOS } from '@/content/sprechen/exam-lines.mjs';
import { buildExamPlan, discussionOpener, discussionStatement, plannedSpeaking, rubricPercent, usedPercent } from './sprechen-exam';

const rnd = () => 0; // always the first choice, so plans are predictable

describe('exam formats', () => {
  it('have unique ids, parts and times', () => {
    expect(new Set(SPEAK_EXAMS.map((e) => e.id)).size).toBe(SPEAK_EXAMS.length);
    for (const e of SPEAK_EXAMS) {
      expect(e.id).toBe(`${e.board}-${e.level}`);
      expect(e.parts.length).toBeGreaterThanOrEqual(2);
      expect(new Set(e.parts.map((p) => p.id)).size).toBe(e.parts.length);
      for (const p of e.parts) {
        expect(p.speakSeconds).toBeGreaterThan(0);
        expect(p.title.de && p.title.en && p.title.fr).toBeTruthy();
      }
    }
  });

  it('cover Goethe, telc, ÖSD and DTZ at the levels the trainer is for', () => {
    expect(new Set(SPEAK_EXAMS.map((e) => e.board))).toEqual(new Set(['goethe', 'telc', 'osd', 'dtz']));
    expect(getSpeakExam('goethe-B2')?.parts.map((p) => p.kind)).toEqual(['talk', 'discussion']);
    expect(getSpeakExam('goethe-B1')?.parts.map((p) => p.kind)).toEqual(['plan', 'talk', 'questions']);
    expect(getSpeakExam('nope')).toBeUndefined();
  });

  it('only mark a format verified when its parts follow the provider’s own order', () => {
    for (const e of SPEAK_EXAMS.filter((x) => x.verified)) expect(['goethe', 'telc']).toContain(e.board);
  });

  it('has a rubric of five criteria with both languages', () => {
    expect(RUBRIC).toHaveLength(5);
    for (const r of RUBRIC) { expect(r.en && r.fr && r.hint.en && r.hint.fr).toBeTruthy(); }
  });
});

describe('exam content', () => {
  it('has planning tasks for both levels and discussion statements', () => {
    expect(PLAN_SCENARIOS.some((s) => s.level === 'B1')).toBe(true);
    expect(PLAN_SCENARIOS.some((s) => s.level === 'B2')).toBe(true);
    for (const s of PLAN_SCENARIOS) { expect(s.points).toHaveLength(4); expect(s.opener.length).toBeGreaterThan(20); }
    for (const d of DISCUSSION_STATEMENTS) { expect(d.againstOpener && d.forOpener && d.statement).toBeTruthy(); }
    expect(new Set([...PLAN_SCENARIOS, ...DISCUSSION_STATEMENTS].map((x) => x.id)).size).toBe(PLAN_SCENARIOS.length + DISCUSSION_STATEMENTS.length);
  });
});

describe('buildExamPlan', () => {
  it('opens with the examiner’s welcome and ends with the examiner’s goodbye', () => {
    for (const e of SPEAK_EXAMS) {
      const plan = buildExamPlan(e, rnd);
      expect(plan[0]).toMatchObject({ type: 'say', who: 'examiner', de: EXAMINER.welcome });
      expect(plan[plan.length - 1]).toMatchObject({ type: 'say', who: 'examiner', de: EXAMINER.end });
    }
  });

  it('gives every part some speaking time, close to its planned length', () => {
    for (const e of SPEAK_EXAMS) {
      const plan = buildExamPlan(e, rnd);
      for (const p of e.parts) {
        const planned = plannedSpeaking(plan, p.id);
        expect(planned, `${e.id}/${p.id}`).toBeGreaterThan(0);
        expect(planned, `${e.id}/${p.id}`).toBeLessThanOrEqual(p.speakSeconds + 10);
      }
    }
  });

  it('puts preparation before the speaking in parts that have it, and shows the topic on the card', () => {
    const plan = buildExamPlan(getSpeakExam('goethe-B2')!, rnd);
    const prep = plan.findIndex((s) => s.type === 'prep');
    const firstSpeak = plan.findIndex((s) => s.type === 'speak');
    expect(prep).toBeGreaterThan(-1);
    expect(prep).toBeLessThan(firstSpeak);
    const step = plan[prep];
    expect(step.type === 'prep' && step.card.lines.length).toBeGreaterThanOrEqual(4);
  });

  it('plays a planning task as alternating partner lines and learner turns', () => {
    const plan = buildExamPlan(getSpeakExam('goethe-B1')!, rnd);
    const partner = plan.filter((s) => s.type === 'say' && s.who === 'partner').map((s) => (s.type === 'say' ? s.de : ''));
    expect(partner).toHaveLength(1 + PLAN_PARTNER.length);
    expect(partner[0]).toBe(PLAN_SCENARIOS.filter((s) => s.level === 'B1')[0].opener);
    const planPart = plan.filter((s) => s.type === 'speak' || s.type === 'say');
    const i = planPart.findIndex((s) => s.type === 'say' && s.who === 'partner');
    expect(planPart[i + 1].type).toBe('speak');
  });

  it('asks the learner to pick a side before a discussion, then has the partner argue the other side', () => {
    const plan = buildExamPlan(getSpeakExam('goethe-B2')!, rnd);
    const stance = plan.findIndex((s) => s.type === 'stance');
    const reply = plan.findIndex((s) => s.type === 'partnerReply');
    expect(stance).toBeGreaterThan(-1);
    expect(reply).toBeGreaterThan(stance);
    const st = DISCUSSION_STATEMENTS[0];
    expect(discussionOpener(st.id, 'for')).toBe(st.againstOpener);
    expect(discussionOpener(st.id, 'against')).toBe(st.forOpener);
    expect(discussionStatement(st.id)).toBe(st.statement);
  });

  it('uses the level of the exam for topics and tasks', () => {
    const plan = buildExamPlan(getSpeakExam('telc-B2')!, rnd);
    const opener = plan.find((s) => s.type === 'say' && s.who === 'partner' && s.partId === 'plan');
    const b2 = PLAN_SCENARIOS.filter((x) => x.level === 'B2').map((x) => x.opener);
    expect(opener && opener.type === 'say' ? b2.includes(opener.de) : false).toBe(true);
  });

  it('varies with the random source', () => {
    const a = JSON.stringify(buildExamPlan(getSpeakExam('goethe-B2')!, () => 0));
    const b = JSON.stringify(buildExamPlan(getSpeakExam('goethe-B2')!, () => 0.99));
    expect(a).not.toBe(b);
  });
});

describe('scoring helpers', () => {
  it('rates the time used, capped at 100', () => {
    expect(usedPercent(90, 180)).toBe(50);
    expect(usedPercent(400, 180)).toBe(100);
    expect(usedPercent(10, 0)).toBe(0);
  });

  it('turns five 1–4 ratings into a percentage and ignores out-of-range values', () => {
    const ids = RUBRIC.map((r) => r.id);
    expect(rubricPercent(Object.fromEntries(ids.map((i) => [i, 4])), ids)).toBe(100);
    expect(rubricPercent(Object.fromEntries(ids.map((i) => [i, 2])), ids)).toBe(50);
    expect(rubricPercent({}, ids)).toBe(0);
    expect(rubricPercent(Object.fromEntries(ids.map((i) => [i, 9])), ids)).toBe(100);
  });
});

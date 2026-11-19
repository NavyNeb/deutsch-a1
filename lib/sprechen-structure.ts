import type { StructureStep } from './sprechen-metrics';

// The shape of a good exam talk (Goethe B1 "Thema präsentieren", B2 "Vortrag"): five steps, each recognised by
// the typical phrases a speaker uses. The learner sees a checklist that ticks off as these are heard.

export type TalkStep = StructureStep & { en: string; fr: string };

export const TALK_STRUCTURE: TalkStep[] = [
  { id: 'intro', en: 'Introduce the topic', fr: 'Présenter le thème', patterns: ['ich möchte heute über', 'ich spreche heute über', 'mein thema ist', 'mein thema lautet', 'ich möchte ihnen', 'es geht um'] },
  { id: 'experience', en: 'Your own experience', fr: 'Ton expérience', patterns: ['meine erfahrung', 'meinen erfahrungen', 'ich habe selbst', 'bei mir', 'ich persönlich', 'in meinem leben', 'aus eigener erfahrung'] },
  { id: 'home', en: 'Situation in your country', fr: 'La situation dans ton pays', patterns: ['in meinem heimatland', 'in meinem land', 'bei uns', 'in kamerun', 'in meiner heimat', 'in meiner heimatstadt'] },
  { id: 'proscons', en: 'Advantages and disadvantages', fr: 'Avantages et inconvénients', patterns: ['vorteil', 'nachteil', 'einerseits', 'andererseits', 'zum einen', 'zum anderen', 'dafür spricht', 'dagegen spricht'] },
  { id: 'opinion', en: 'Your opinion', fr: 'Ton opinion', patterns: ['meiner meinung nach', 'ich finde', 'ich denke', 'ich glaube', 'meiner ansicht nach', 'ich bin der meinung', 'aus meiner sicht'] },
  { id: 'close', en: 'Conclusion and thanks', fr: 'Conclusion et remerciement', patterns: ['zum schluss', 'zusammenfassend', 'abschließend', 'abschliessend', 'ich danke', 'danke für ihre aufmerksamkeit', 'vielen dank', 'alles in allem'] },
];

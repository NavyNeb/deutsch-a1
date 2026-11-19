// The oral exams the trainer can simulate: their parts, in order, with preparation and speaking times.
// `verified` means the part structure was checked against the exam provider's own material; timings are
// the usual ones for a pair exam, and the trainer lets the learner work alone against a scripted partner.

export type ExamBoard = 'goethe' | 'telc' | 'osd' | 'dtz';
export type PartKind = 'intro' | 'plan' | 'talk' | 'questions' | 'discussion';

export type ExamPart = {
  id: string;
  kind: PartKind;
  title: { de: string; en: string; fr: string };
  prepSeconds: number;   // 0 = none
  speakSeconds: number;  // for one speaker, in total for this part
  level?: 'B1' | 'B2';   // content level used for tasks and topics (defaults to the exam level)
};

export type SpeakExamFormat = {
  id: string;            // e.g. goethe-B1
  board: ExamBoard;
  level: 'B1' | 'B2';
  name: string;
  minutes: number;       // about, for the whole pair exam
  verified: boolean;
  parts: ExamPart[];
};

export const BOARD_NAMES: Record<ExamBoard, string> = { goethe: 'Goethe', telc: 'telc', osd: 'ÖSD', dtz: 'DTZ' };

const part = (id: string, kind: PartKind, de: string, en: string, fr: string, prepSeconds: number, speakSeconds: number): ExamPart =>
  ({ id, kind, title: { de, en, fr }, prepSeconds, speakSeconds });

export const SPEAK_EXAMS: SpeakExamFormat[] = [
  {
    id: 'goethe-B1', board: 'goethe', level: 'B1', name: 'Goethe-Zertifikat B1', minutes: 15, verified: true,
    parts: [
      part('plan', 'plan', 'Gemeinsam etwas planen', 'Plan something together', 'Planifier quelque chose ensemble', 60, 180),
      part('talk', 'talk', 'Ein Thema präsentieren', 'Present a topic', 'Présenter un thème', 120, 180),
      part('questions', 'questions', 'Fragen und Rückmeldung', 'Questions and feedback', 'Questions et retour', 0, 120),
    ],
  },
  {
    id: 'goethe-B2', board: 'goethe', level: 'B2', name: 'Goethe-Zertifikat B2', minutes: 15, verified: true,
    parts: [
      part('talk', 'talk', 'Vortrag halten', 'Give a talk', 'Faire un exposé', 300, 240),
      part('discussion', 'discussion', 'Diskussion führen', 'Hold a discussion', 'Mener une discussion', 60, 300),
    ],
  },
  {
    id: 'telc-B1', board: 'telc', level: 'B1', name: 'telc Deutsch B1', minutes: 15, verified: true,
    parts: [
      part('intro', 'intro', 'Kontaktaufnahme', 'Getting to know each other', 'Faire connaissance', 0, 120),
      part('talk', 'talk', 'Gespräch über ein Thema', 'Talk about a topic', 'Parler d’un thème', 120, 180),
      part('plan', 'plan', 'Gemeinsam etwas planen', 'Plan something together', 'Planifier quelque chose ensemble', 60, 180),
    ],
  },
  {
    id: 'telc-B2', board: 'telc', level: 'B2', name: 'telc Deutsch B2', minutes: 15, verified: false,
    parts: [
      part('talk', 'talk', 'Präsentation', 'Presentation', 'Présentation', 300, 240),
      part('discussion', 'discussion', 'Diskussion', 'Discussion', 'Discussion', 60, 300),
      part('plan', 'plan', 'Problemlösung', 'Solving a problem together', 'Résoudre un problème ensemble', 60, 300),
    ],
  },
  {
    id: 'osd-B1', board: 'osd', level: 'B1', name: 'ÖSD Zertifikat B1', minutes: 15, verified: false,
    parts: [
      part('intro', 'intro', 'Kontaktaufnahme', 'Getting to know each other', 'Faire connaissance', 0, 180),
      part('talk', 'talk', 'Gespräch über ein Thema', 'Talk about a topic', 'Parler d’un thème', 120, 300),
      part('plan', 'plan', 'Gemeinsam etwas planen', 'Plan something together', 'Planifier quelque chose ensemble', 60, 300),
    ],
  },
  {
    id: 'osd-B2', board: 'osd', level: 'B2', name: 'ÖSD Zertifikat B2', minutes: 15, verified: false,
    parts: [
      part('talk', 'talk', 'Präsentation', 'Presentation', 'Présentation', 300, 240),
      part('discussion', 'discussion', 'Diskussion', 'Discussion', 'Discussion', 60, 300),
    ],
  },
  {
    id: 'dtz-B1', board: 'dtz', level: 'B1', name: 'Deutsch-Test für Zuwanderer (DTZ)', minutes: 16, verified: false,
    parts: [
      part('intro', 'intro', 'Kontaktaufnahme', 'Getting to know each other', 'Faire connaissance', 0, 120),
      part('talk', 'talk', 'Über ein Thema sprechen', 'Talk about a topic', 'Parler d’un thème', 60, 180),
      part('plan', 'plan', 'Gemeinsam etwas planen', 'Plan something together', 'Planifier quelque chose ensemble', 60, 240),
    ],
  },
];

export const getSpeakExam = (id: string) => SPEAK_EXAMS.find((e) => e.id === id);

/** The five things an examiner marks, each rated 1–4 by the learner after the mock exam. */
export const RUBRIC = [
  { id: 'task', en: 'Doing the task', fr: 'Réaliser la tâche', hint: { en: 'Did you cover every point and speak for the whole time?', fr: 'As-tu traité tous les points et parlé pendant tout le temps ?' } },
  { id: 'interaction', en: 'Reacting to your partner', fr: 'Réagir à son partenaire', hint: { en: 'Did you answer, agree, disagree and ask back?', fr: 'As-tu répondu, approuvé, contredit et relancé ?' } },
  { id: 'vocabulary', en: 'Vocabulary', fr: 'Vocabulaire', hint: { en: 'Did you use varied and exact words?', fr: 'As-tu utilisé des mots variés et précis ?' } },
  { id: 'grammar', en: 'Grammar', fr: 'Grammaire', hint: { en: 'Were your sentences correct and varied (connectors, subordinate clauses)?', fr: 'Tes phrases étaient-elles correctes et variées (connecteurs, subordonnées) ?' } },
  { id: 'pronunciation', en: 'Pronunciation and fluency', fr: 'Prononciation et fluidité', hint: { en: 'Listen to your recording: clear, steady, understandable?', fr: 'Écoute ton enregistrement : clair, régulier, compréhensible ?' } },
] as const;

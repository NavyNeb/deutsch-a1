import type { Lesson } from '../types';

export const a2lektion9: Lesson = {
  id: 'a2-l9', level: 'A2', module: 3, number: 9,
  title: { de: 'Reflexive Verben', en: 'Reflexive verbs', fr: 'Les verbes pronominaux' },
  theme: 'Reflexive verbs, reflexive pronouns, and verbs with fixed prepositions',
  themeFr: 'Les verbes pronominaux, les pronoms réfléchis et les verbes à préposition fixe',
  goals: ['Use reflexive verbs like "sich freuen"', 'Use the reflexive pronouns (mich, dich, sich …)', 'Talk about feelings and daily routine', 'Use "sich freuen auf" and "sich interessieren für"'],
  goalsFr: ['Utiliser les verbes pronominaux comme « sich freuen »', 'Utiliser les pronoms réfléchis (mich, dich, sich …)', 'Parler des sentiments et de la routine', 'Utiliser « sich freuen auf » et « sich interessieren für »'],
  steps: [
    { kind: 'intro', title: 'Wie fühlst du dich? 😊', titleFr: 'Comment te sens-tu ? 😊',
      scene: 'Talking about feelings, routines, and interests.', sceneFr: 'On parle de sentiments, de routines et d’intérêts.',
      goals: ['Use reflexive pronouns', 'Use common reflexive verbs', 'Say how you feel', 'Use reflexive verbs with prepositions'],
      goalsFr: ['Utiliser les pronoms réfléchis', 'Utiliser les verbes pronominaux courants', 'Dire comment tu te sens', 'Utiliser les verbes pronominaux avec préposition'] },

    { kind: 'vocab', item: { id: 'a2l9-sich-freuen', german: 'sich freuen', english: 'to be glad / look forward', french: 'se réjouir', gender: null, syllables: ['sich', 'FREU', 'en'], pronunciation: 'zikh FROY-en', example: { de: 'Ich freue mich.', en: 'I am glad.', fr: 'Je me réjouis.' } } },
    { kind: 'vocab', item: { id: 'a2l9-sich-fuehlen', german: 'sich fühlen', english: 'to feel', french: 'se sentir', gender: null, syllables: ['sich', 'FÜH', 'len'], pronunciation: 'zikh FUE-len', example: { de: 'Ich fühle mich gut.', en: 'I feel good.', fr: 'Je me sens bien.' } } },
    { kind: 'vocab', item: { id: 'a2l9-sich-waschen', german: 'sich waschen', english: 'to wash (oneself)', french: 'se laver', gender: null, syllables: ['sich', 'WA', 'schen'], pronunciation: 'zikh VAH-shen', example: { de: 'Ich wasche mich.', en: 'I wash myself.', fr: 'Je me lave.' } } },
    { kind: 'vocab', item: { id: 'a2l9-sich-treffen', german: 'sich treffen', english: 'to meet (each other)', french: 'se rencontrer', gender: null, syllables: ['sich', 'TREF', 'fen'], pronunciation: 'zikh TREF-fen', example: { de: 'Wir treffen uns um acht.', en: 'We meet at eight.', fr: 'On se retrouve à huit heures.' } } },
    { kind: 'vocab', item: { id: 'a2l9-sich-entspannen', german: 'sich entspannen', english: 'to relax', french: 'se détendre', gender: null, syllables: ['sich', 'ent', 'SPAN', 'nen'], pronunciation: 'zikh ent-SHPAHN-en', example: { de: 'Am Sonntag entspanne ich mich.', en: 'On Sunday I relax.', fr: 'Le dimanche, je me détends.' } } },
    { kind: 'vocab', item: { id: 'a2l9-sich-interessieren', german: 'sich interessieren für', english: 'to be interested in', french: 's’intéresser à', gender: null, syllables: ['in', 'te', 'res', 'SIE', 'ren'], pronunciation: 'in-te-res-SEE-ren', example: { de: 'Ich interessiere mich für Musik.', en: 'I am interested in music.', fr: 'Je m’intéresse à la musique.' } } },
    { kind: 'vocab', item: { id: 'a2l9-sich-erinnern', german: 'sich erinnern an', english: 'to remember', french: 'se souvenir de', gender: null, syllables: ['er', 'IN', 'nern'], pronunciation: 'air-IN-nern', example: { de: 'Ich erinnere mich an dich.', en: 'I remember you.', fr: 'Je me souviens de toi.' } } },
    { kind: 'vocab', item: { id: 'a2l9-mich', german: 'mich', english: 'myself (reflexive)', french: 'me (réfléchi)', gender: null, syllables: ['MICH'], pronunciation: 'mikh', example: { de: 'Ich freue mich.', en: 'I am glad.', fr: 'Je me réjouis.' } } },
    { kind: 'vocab', item: { id: 'a2l9-dich', german: 'dich', english: 'yourself (reflexive)', french: 'te (réfléchi)', gender: null, syllables: ['DICH'], pronunciation: 'dikh', example: { de: 'Wie fühlst du dich?', en: 'How do you feel?', fr: 'Comment te sens-tu ?' } } },
    { kind: 'vocab', item: { id: 'a2l9-sich', german: 'sich', english: 'himself / herself / themselves', french: 'se (réfléchi)', gender: null, syllables: ['SICH'], pronunciation: 'zikh', example: { de: 'Er wäscht sich.', en: 'He washes himself.', fr: 'Il se lave.' } } },

    { kind: 'grammar', note: {
      id: 'a2l9-reflexiv', title: 'Reflexive verbs and pronouns', titleFr: 'Verbes pronominaux et pronoms réfléchis',
      explanationMd: 'A reflexive verb needs a **reflexive pronoun** (accusative) that matches the subject:\n\n- ich → **mich** · du → **dich** · er/sie/es → **sich**\n- wir → **uns** · ihr → **euch** · sie/Sie → **sich**\n\nIch freue **mich**. · Wie fühlst du **dich**? · Er wäscht **sich**.',
      explanationMdFr: 'Un verbe pronominal a besoin d’un **pronom réfléchi** (accusatif) qui s’accorde avec le sujet :\n\n- ich → **mich** · du → **dich** · er/sie/es → **sich**\n- wir → **uns** · ihr → **euch** · sie/Sie → **sich**\n\nIch freue **mich**. · Wie fühlst du **dich** ? · Er wäscht **sich**.',
      examples: [
        { de: 'Ich fühle mich gut.', en: 'I feel good.', fr: 'Je me sens bien.' },
        { de: 'Wir treffen uns später.', en: 'We meet later.', fr: 'On se retrouve plus tard.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l9-alltag', title: 'Reflexive verbs in daily life', titleFr: 'Les verbes pronominaux au quotidien',
      explanationMd: 'Many everyday actions are reflexive:\n\n- **sich waschen** — to wash · **sich anziehen** — to get dressed\n- **sich fühlen** — to feel · **sich entspannen** — to relax\n\nThe reflexive pronoun usually comes **right after the verb**: Ich entspanne **mich**.',
      explanationMdFr: 'Beaucoup d’actions du quotidien sont pronominales :\n\n- **sich waschen** — se laver · **sich anziehen** — s’habiller\n- **sich fühlen** — se sentir · **sich entspannen** — se détendre\n\nLe pronom réfléchi vient généralement **juste après le verbe** : Ich entspanne **mich**.',
      examples: [
        { de: 'Am Morgen wasche ich mich.', en: 'In the morning I wash.', fr: 'Le matin, je me lave.' },
        { de: 'Am Wochenende entspanne ich mich.', en: 'At the weekend I relax.', fr: 'Le week-end, je me détends.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l9-praeposition', title: 'Reflexive verbs with fixed prepositions', titleFr: 'Verbes pronominaux à préposition fixe',
      explanationMd: 'Some reflexive verbs come with a fixed preposition:\n\n- **sich freuen auf** (+ acc) — to look forward to\n- **sich interessieren für** (+ acc) — to be interested in\n- **sich erinnern an** (+ acc) — to remember\n\nIch freue mich **auf** das Wochenende.',
      explanationMdFr: 'Certains verbes pronominaux ont une préposition fixe :\n\n- **sich freuen auf** (+ acc) — attendre avec impatience\n- **sich interessieren für** (+ acc) — s’intéresser à\n- **sich erinnern an** (+ acc) — se souvenir de\n\nIch freue mich **auf** das Wochenende.',
      examples: [
        { de: 'Ich freue mich auf den Urlaub.', en: 'I look forward to the holiday.', fr: 'J’ai hâte des vacances.' },
        { de: 'Sie interessiert sich für Kunst.', en: 'She is interested in art.', fr: 'Elle s’intéresse à l’art.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e1', prompt: 'Ich freue ___. (reflexive pronoun for ich)', answer: 'mich', hint: 'ich → mich', hintFr: 'ich → mich' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e2', prompt: 'Wie fühlst du ___? (reflexive pronoun for du)', answer: 'dich', hint: 'du → dich', hintFr: 'du → dich' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l9-e3', prompt: 'Which reflexive pronoun goes with "er"?', promptFr: 'Quel pronom réfléchi va avec « er » ?', options: ['mich', 'sich', 'dich'], answer: 1, explain: 'er/sie/es → sich.', explainFr: 'er/sie/es → sich.', hint: 'Third person uses "sich".', hintFr: 'La troisième personne utilise « sich ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l9-e4', pairs: [ { de: 'ich', en: 'mich', fr: 'mich' }, { de: 'du', en: 'dich', fr: 'dich' }, { de: 'wir', en: 'uns', fr: 'uns' } ], hint: 'Match each subject to its reflexive pronoun.', hintFr: 'Associe chaque sujet à son pronom réfléchi.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l9-e5', prompt: 'Listen. How does Lea feel?', promptFr: 'Écoute. Comment se sent Lea ?', audio: { ttsText: 'Heute fühle ich mich sehr gut.' }, options: ['Very good', 'Tired', 'Ill'], optionsFr: ['Très bien', 'Fatiguée', 'Malade'], answer: 0, hint: 'Listen after "fühle ich mich".', hintFr: 'Écoute après « fühle ich mich ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l9-e6', tokens: ['mich', 'entspanne', 'Ich', 'am', 'Sonntag'], answer: ['Ich', 'entspanne', 'mich', 'am', 'Sonntag'], hint: 'The reflexive pronoun comes right after the verb.', hintFr: 'Le pronom réfléchi vient juste après le verbe.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e7', prompt: 'Ich interessiere mich ___ Musik. (fixed preposition)', answer: 'für', hint: 'sich interessieren + für', hintFr: 'sich interessieren + für' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l9-e8', prompt: 'Which preposition goes with "sich freuen" (to look forward)?', promptFr: 'Quelle préposition va avec « sich freuen » (attendre avec impatience) ?', options: ['für', 'auf', 'an'], answer: 1, explain: '"sich freuen auf" (+ accusative) = to look forward to.', explainFr: '« sich freuen auf » (+ accusatif) = attendre avec impatience.', hint: 'Ich freue mich … das Wochenende.', hintFr: 'Ich freue mich … das Wochenende.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l9-e9', prompt: 'Er wäscht ___. (reflexive pronoun for er)', answer: 'sich', hint: 'er → sich', hintFr: 'er → sich' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l9-e10', prompt: 'Listen. What is Max interested in?', promptFr: 'Écoute. À quoi Max s’intéresse-t-il ?', audio: { ttsText: 'Ich interessiere mich sehr für Sport und Musik.' }, options: ['Sport and music', 'Art and film', 'Cooking'], optionsFr: ['Le sport et la musique', 'L’art et le cinéma', 'La cuisine'], answer: 0, hint: 'Listen after "für".', hintFr: 'Écoute après « für ».' } },

    { kind: 'pronunciation', focus: 'The reflexive "sich" is "zikh"; "eu" in freuen is "oy" and "ü" in fühlen is rounded', focusFr: 'Le réfléchi « sich » se dit « zikh » ; « eu » de freuen est « oï » et « ü » de fühlen est arrondi', items: [
      { id: 'a2l9-freuen-pron', german: 'sich freuen', english: 'to be glad', french: 'se réjouir', gender: null, syllables: ['sich', 'FREU', 'en'], pronunciation: 'zikh FROY-en', example: { de: 'Ich freue mich sehr.', en: 'I am very glad.', fr: 'Je me réjouis beaucoup.' } },
      { id: 'a2l9-fuehlen-pron', german: 'sich fühlen', english: 'to feel', french: 'se sentir', gender: null, syllables: ['sich', 'FÜH', 'len'], pronunciation: 'zikh FUE-len', example: { de: 'Ich fühle mich wohl.', en: 'I feel comfortable.', fr: 'Je me sens bien.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now use reflexive verbs with their pronouns (**mich, dich, sich, uns, euch, sich**), talk about feelings and routine (Ich fühle mich gut), and use fixed-preposition verbs like **sich freuen auf** and **sich interessieren für**. 🎉',
      summaryFr: 'Tu sais maintenant utiliser les verbes pronominaux avec leurs pronoms (**mich, dich, sich, uns, euch, sich**), parler des sentiments et de la routine (Ich fühle mich gut), et utiliser les verbes à préposition fixe comme **sich freuen auf** et **sich interessieren für**. 🎉' },
  ],
};

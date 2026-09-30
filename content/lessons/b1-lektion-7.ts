import type { Lesson } from '../types';

export const b1lektion7: Lesson = {
  id: 'b1-l7', level: 'B1', module: 2, number: 7,
  title: { de: 'Infinitiv mit „zu"', en: 'Infinitive with "zu"', fr: 'L’infinitif avec « zu »' },
  theme: 'Infinitive clauses with "zu" and purpose with "um … zu"',
  themeFr: 'Les propositions infinitives avec « zu » et le but avec « um … zu »',
  goals: ['Use "zu" + infinitive after certain verbs', 'Use "es ist wichtig, … zu …"', 'Express purpose with "um … zu"', 'Tell "um … zu" from "damit"'],
  goalsFr: ['Utiliser « zu » + infinitif après certains verbes', 'Utiliser « es ist wichtig, … zu … »', 'Exprimer le but avec « um … zu »', 'Distinguer « um … zu » de « damit »'],
  steps: [
    { kind: 'intro', title: 'Ich versuche, zu … 🎯', titleFr: 'J’essaie de … 🎯',
      scene: 'Talking about intentions, plans, and reasons.', sceneFr: 'On parle d’intentions, de projets et de raisons.',
      goals: ['Use "zu" + infinitive', 'Use it after impersonal expressions', 'Express purpose with "um … zu"', 'Compare "um … zu" and "damit"'],
      goalsFr: ['Utiliser « zu » + infinitif', 'L’utiliser après des expressions impersonnelles', 'Exprimer le but avec « um … zu »', 'Comparer « um … zu » et « damit »'] },

    { kind: 'vocab', item: { id: 'b1l7-versuchen', german: 'versuchen', english: 'to try', french: 'essayer', gender: null, syllables: ['ver', 'SU', 'chen'], pronunciation: 'fair-ZOO-khen', example: { de: 'Ich versuche, jeden Tag zu lernen.', en: 'I try to study every day.', fr: 'J’essaie d’étudier chaque jour.' } } },
    { kind: 'vocab', item: { id: 'b1l7-vergessen', german: 'vergessen', english: 'to forget', french: 'oublier', gender: null, syllables: ['ver', 'GES', 'sen'], pronunciation: 'fair-GESS-en', example: { de: 'Vergiss nicht, mich anzurufen.', en: 'Don’t forget to call me.', fr: 'N’oublie pas de m’appeler.' } } },
    { kind: 'vocab', item: { id: 'b1l7-anfangen', german: 'anfangen', english: 'to begin', french: 'commencer', gender: null, syllables: ['AN', 'fan', 'gen'], pronunciation: 'AHN-fahng-en', example: { de: 'Ich fange an, Deutsch zu lernen.', en: 'I begin to learn German.', fr: 'Je commence à apprendre l’allemand.' } } },
    { kind: 'vocab', item: { id: 'b1l7-aufhoeren', german: 'aufhören', english: 'to stop', french: 'arrêter', gender: null, syllables: ['AUF', 'hö', 'ren'], pronunciation: 'OWF-hoe-ren', example: { de: 'Hör auf zu rauchen!', en: 'Stop smoking!', fr: 'Arrête de fumer !' } } },
    { kind: 'vocab', item: { id: 'b1l7-vorhaben', german: 'vorhaben', english: 'to plan / intend', french: 'avoir l’intention', gender: null, syllables: ['VOR', 'ha', 'ben'], pronunciation: 'FOR-hah-ben', example: { de: 'Was hast du vor?', en: 'What are you planning?', fr: 'Qu’as-tu prévu ?' } } },
    { kind: 'vocab', item: { id: 'b1l7-absicht', german: 'die Absicht', english: 'the intention', french: 'l’intention', gender: 'die', syllables: ['AB', 'sicht'], pronunciation: 'dee AHP-zikht', example: { de: 'Ich habe die Absicht, umzuziehen.', en: 'I intend to move.', fr: 'J’ai l’intention de déménager.' } } },
    { kind: 'vocab', item: { id: 'b1l7-schaffen', german: 'schaffen', english: 'to manage (to do)', french: 'réussir / arriver à', gender: null, syllables: ['SCHAF', 'fen'], pronunciation: 'SHAHF-fen', example: { de: 'Ich schaffe es, pünktlich zu sein.', en: 'I manage to be on time.', fr: 'J’arrive à être à l’heure.' } } },
    { kind: 'vocab', item: { id: 'b1l7-lust-haben', german: 'Lust haben', english: 'to feel like', french: 'avoir envie', gender: null, syllables: ['LUST', 'ha', 'ben'], pronunciation: 'LOOST HAH-ben', example: { de: 'Ich habe Lust, ins Kino zu gehen.', en: 'I feel like going to the cinema.', fr: 'J’ai envie d’aller au cinéma.' } } },
    { kind: 'vocab', item: { id: 'b1l7-gesund2', german: 'gesund', english: 'healthy', french: 'sain', gender: null, syllables: ['ge', 'SUND'], pronunciation: 'ge-ZOONT', example: { de: 'Es ist wichtig, gesund zu essen.', en: 'It is important to eat healthily.', fr: 'Il est important de manger sainement.' } } },
    { kind: 'vocab', item: { id: 'b1l7-sparen2', german: 'sparen', english: 'to save (money)', french: 'économiser', gender: null, syllables: ['SPA', 'ren'], pronunciation: 'SHPAH-ren', example: { de: 'Ich spare, um zu reisen.', en: 'I save in order to travel.', fr: 'J’économise pour voyager.' } } },

    { kind: 'grammar', note: {
      id: 'b1l7-zu-note', title: '"zu" + infinitive after verbs', titleFr: '« zu » + infinitif après un verbe',
      explanationMd: 'After many verbs, use **zu** + infinitive at the **end**:\n\n- Ich **versuche**, Deutsch **zu lernen**.\n- Ich **vergesse** oft, Wasser **zu trinken**.\n\nCommon triggers: versuchen, vergessen, anfangen, aufhören, Lust haben, vorhaben. With **separable** verbs, zu goes in the middle: an**zu**rufen, ein**zu**kaufen.',
      explanationMdFr: 'Après de nombreux verbes, utilise **zu** + infinitif à la **fin** :\n\n- Ich **versuche**, Deutsch **zu lernen**.\n- Ich **vergesse** oft, Wasser **zu trinken**.\n\nDéclencheurs courants : versuchen, vergessen, anfangen, aufhören, Lust haben, vorhaben. Avec les verbes **séparables**, zu va au milieu : an**zu**rufen, ein**zu**kaufen.',
      examples: [
        { de: 'Er hat Lust, ins Kino zu gehen.', en: 'He feels like going to the cinema.', fr: 'Il a envie d’aller au cinéma.' },
        { de: 'Vergiss nicht, mich anzurufen.', en: 'Don’t forget to call me.', fr: 'N’oublie pas de m’appeler.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l7-es-ist', title: '"Es ist wichtig, … zu …"', titleFr: '« Es ist wichtig, … zu … »',
      explanationMd: 'Impersonal expressions also take **zu** + infinitive:\n\n- **Es ist wichtig**, gesund **zu essen**.\n- **Es ist schön**, dich **zu sehen**.\n- **Es macht Spaß**, Deutsch **zu lernen**.',
      explanationMdFr: 'Les expressions impersonnelles prennent aussi **zu** + infinitif :\n\n- **Es ist wichtig**, gesund **zu essen**.\n- **Es ist schön**, dich **zu sehen**.\n- **Es macht Spaß**, Deutsch **zu lernen**.',
      examples: [
        { de: 'Es ist nicht leicht, eine Sprache zu lernen.', en: 'It is not easy to learn a language.', fr: 'Ce n’est pas facile d’apprendre une langue.' },
        { de: 'Es ist Zeit, nach Hause zu gehen.', en: 'It is time to go home.', fr: 'Il est temps de rentrer.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l7-um-zu', title: 'Purpose with "um … zu"', titleFr: 'Le but avec « um … zu »',
      explanationMd: '**um … zu** + infinitive expresses a **purpose** ("in order to"), when both clauses have the **same subject**:\n\n- Ich lerne Deutsch, **um** in Wien **zu arbeiten**.\n- Ich spare, **um** ein Auto **zu kaufen**.\n\nIf the subjects are **different**, use **damit** instead.',
      explanationMdFr: '**um … zu** + infinitif exprime un **but** (« pour »), quand les deux propositions ont le **même sujet** :\n\n- Ich lerne Deutsch, **um** in Wien **zu arbeiten**.\n- Ich spare, **um** ein Auto **zu kaufen**.\n\nSi les sujets sont **différents**, utilise **damit**.',
      examples: [
        { de: 'Ich stehe früh auf, um Sport zu machen.', en: 'I get up early to do sport.', fr: 'Je me lève tôt pour faire du sport.' },
        { de: 'Sie geht zum Arzt, um gesund zu werden.', en: 'She goes to the doctor to get healthy.', fr: 'Elle va chez le médecin pour se rétablir.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l7-e1', prompt: 'Ich versuche, Deutsch ___ lernen. (zu-particle)', answer: 'zu', hint: 'infinitive clause needs "zu"', hintFr: 'la proposition infinitive a besoin de « zu »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l7-e2', tokens: ['zu', 'gesund', 'essen', 'Es ist wichtig'], answer: ['Es ist wichtig', 'gesund', 'zu', 'essen'], hint: '"zu" + infinitive at the end.', hintFr: '« zu » + infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l7-e3', prompt: 'Which uses "um … zu" correctly?', promptFr: 'Laquelle utilise « um … zu » correctement ?', options: ['Ich lerne Deutsch, um ich arbeite.', 'Ich lerne Deutsch, um zu arbeiten.', 'Ich lerne Deutsch um arbeiten.'], answer: 1, explain: '"um" + … + "zu" + infinitive: um zu arbeiten.', explainFr: '« um » + … + « zu » + infinitif : um zu arbeiten.', hint: 'Need both "um" and "zu".', hintFr: 'Il faut « um » et « zu ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l7-e4', prompt: 'Vergiss nicht, mich an___rufen. (separable verb + zu)', answer: 'zu', hint: 'with separable verbs, zu goes between prefix and stem: anzurufen', hintFr: 'avec les verbes séparables, zu va entre la particule et le radical : anzurufen' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l7-e5', pairs: [ { de: 'versuchen', en: 'to try', fr: 'essayer' }, { de: 'aufhören', en: 'to stop', fr: 'arrêter' }, { de: 'vorhaben', en: 'to plan', fr: 'prévoir' } ], hint: 'Match each verb to its meaning.', hintFr: 'Associe chaque verbe à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l7-e6', prompt: 'Listen. Why does Sara save money?', promptFr: 'Écoute. Pourquoi Sara économise-t-elle ?', audio: { ttsText: 'Ich spare Geld, um eine Weltreise zu machen.' }, options: ['To travel the world', 'To buy a house', 'To study'], optionsFr: ['Pour faire le tour du monde', 'Pour acheter une maison', 'Pour étudier'], answer: 0, hint: 'Listen after "um".', hintFr: 'Écoute après « um ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l7-e7', prompt: 'Same subject in both clauses — which do you use?', promptFr: 'Même sujet dans les deux propositions — laquelle utilises-tu ?', options: ['damit', 'um … zu', 'weil'], answer: 1, explain: 'Same subject → "um … zu"; different subjects → "damit".', explainFr: 'Même sujet → « um … zu » ; sujets différents → « damit ».', hint: 'The infinitive construction.', hintFr: 'La construction à l’infinitif.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l7-e8', tokens: ['zu', 'arbeiten', 'um', 'Wien', 'in'], answer: ['um', 'in', 'Wien', 'zu', 'arbeiten'], hint: 'um … zu + infinitive at the end.', hintFr: 'um … zu + infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l7-e9', prompt: 'Ich habe Lust, ins Kino ___ gehen. (zu-particle)', answer: 'zu', hint: '"Lust haben, … zu …"', hintFr: '« Lust haben, … zu … »' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l7-e10', prompt: 'Listen. What is important according to the speaker?', promptFr: 'Écoute. Qu’est-ce qui est important selon le locuteur ?', audio: { ttsText: 'Es ist wichtig, jeden Tag ein bisschen zu üben.' }, options: ['To practise a little every day', 'To sleep more', 'To travel'], optionsFr: ['S’entraîner un peu chaque jour', 'Dormir plus', 'Voyager'], answer: 0, hint: 'Listen after "Es ist wichtig".', hintFr: 'Écoute après « Es ist wichtig ».' } },

    { kind: 'pronunciation', focus: 'The "zu" is short and unstressed; with separable verbs it hides inside the word (AN-zu-rufen)', focusFr: 'Le « zu » est court et non accentué ; avec les verbes séparables, il se glisse dans le mot (AN-zu-rufen)', items: [
      { id: 'b1l7-anzurufen-pron', german: 'anzurufen', english: 'to call (inf. + zu)', french: 'appeler (inf. + zu)', gender: null, syllables: ['AN', 'zu', 'ru', 'fen'], pronunciation: 'AHN-tsoo-roo-fen', example: { de: 'Vergiss nicht, anzurufen.', en: 'Don’t forget to call.', fr: 'N’oublie pas d’appeler.' } },
      { id: 'b1l7-umzu-pron', german: 'um … zu', english: 'in order to', french: 'pour', gender: null, syllables: ['um', 'zu'], pronunciation: 'oom … tsoo', example: { de: 'um zu lernen', en: 'in order to learn', fr: 'pour apprendre' } },
    ] },

    { kind: 'wrapup', summary: 'You can now use **zu + infinitive** after verbs (Ich versuche, zu lernen) and impersonal expressions (Es ist wichtig, … zu …), and express purpose with **um … zu** (same subject) vs. **damit** (different subjects). With separable verbs, "zu" goes inside: anzurufen. 🎉',
      summaryFr: 'Tu sais maintenant utiliser **zu + infinitif** après un verbe (Ich versuche, zu lernen) et des expressions impersonnelles (Es ist wichtig, … zu …), et exprimer le but avec **um … zu** (même sujet) vs. **damit** (sujets différents). Avec les verbes séparables, « zu » se glisse à l’intérieur : anzurufen. 🎉' },
  ],
};

import type { Lesson } from '../types';

export const b1lektion1: Lesson = {
  id: 'b1-l1', level: 'B1', module: 1, number: 1,
  title: { de: 'Höflich und hypothetisch', en: 'Polite and hypothetical', fr: 'Poli et hypothétique' },
  theme: 'Konjunktiv II for polite requests and wishes (würde, hätte, wäre, könnte)',
  themeFr: 'Le Konjunktiv II pour les demandes polies et les souhaits (würde, hätte, wäre, könnte)',
  goals: ['Make polite requests with "könnten" and "würden"', 'Express wishes with "Ich hätte gern / Ich würde gern"', 'Use "wäre" and "hätte"', 'Soften statements with the Konjunktiv II'],
  goalsFr: ['Faire des demandes polies avec « könnten » et « würden »', 'Exprimer des souhaits avec « Ich hätte gern / Ich würde gern »', 'Utiliser « wäre » et « hätte »', 'Adoucir des affirmations avec le Konjunktiv II'],
  steps: [
    { kind: 'intro', title: 'Könnten Sie …? 🙏', titleFr: 'Pourriez-vous … ? 🙏',
      scene: 'Being polite in a café, an office, and with friends.', sceneFr: 'Être poli dans un café, un bureau et avec des amis.',
      goals: ['Use "würde" for politeness and hypotheticals', 'Use "hätte" and "wäre"', 'Ask politely with "könnten Sie"', 'Express wishes'],
      goalsFr: ['Utiliser « würde » pour la politesse et l’hypothèse', 'Utiliser « hätte » et « wäre »', 'Demander poliment avec « könnten Sie »', 'Exprimer des souhaits'] },

    { kind: 'vocab', item: { id: 'b1l1-wuerde', german: 'würde', english: 'would', french: 'conditionnel (je ferais)', gender: null, syllables: ['WÜR', 'de'], pronunciation: 'VUER-de', example: { de: 'Ich würde gern kommen.', en: 'I would like to come.', fr: 'Je viendrais volontiers.' } } },
    { kind: 'vocab', item: { id: 'b1l1-koennte', german: 'könnte', english: 'could', french: 'pourrait', gender: null, syllables: ['KÖNN', 'te'], pronunciation: 'KOEN-te', example: { de: 'Könntest du mir helfen?', en: 'Could you help me?', fr: 'Pourrais-tu m’aider ?' } } },
    { kind: 'vocab', item: { id: 'b1l1-haette', german: 'hätte', english: 'would have', french: 'aurait', gender: null, syllables: ['HÄT', 'te'], pronunciation: 'HET-te', example: { de: 'Ich hätte gern einen Kaffee.', en: 'I would like a coffee.', fr: 'Je voudrais un café.' } } },
    { kind: 'vocab', item: { id: 'b1l1-waere', german: 'wäre', english: 'would be', french: 'serait', gender: null, syllables: ['WÄ', 're'], pronunciation: 'VAY-re', example: { de: 'Das wäre schön.', en: 'That would be nice.', fr: 'Ce serait bien.' } } },
    { kind: 'vocab', item: { id: 'b1l1-wunsch', german: 'der Wunsch', english: 'the wish', french: 'le souhait', gender: 'der', syllables: ['WUNSCH'], pronunciation: 'dair VOONSH', example: { de: 'Haben Sie einen Wunsch?', en: 'Do you have a wish/request?', fr: 'Avez-vous un souhait ?' } } },
    { kind: 'vocab', item: { id: 'b1l1-hoeflich', german: 'höflich', english: 'polite', french: 'poli', gender: null, syllables: ['HÖF', 'lich'], pronunciation: 'HOEF-likh', example: { de: 'Sei bitte höflich.', en: 'Please be polite.', fr: 'Sois poli, s’il te plaît.' } } },
    { kind: 'vocab', item: { id: 'b1l1-bitte-n', german: 'die Bitte', english: 'the request', french: 'la demande', gender: 'die', syllables: ['BIT', 'te'], pronunciation: 'dee BIT-te', example: { de: 'Ich habe eine Bitte.', en: 'I have a request.', fr: 'J’ai une demande.' } } },
    { kind: 'vocab', item: { id: 'b1l1-vorschlagen', german: 'vorschlagen', english: 'to suggest', french: 'proposer', gender: null, syllables: ['VOR', 'schla', 'gen'], pronunciation: 'FOR-shlah-gen', example: { de: 'Ich würde vorschlagen, wir treffen uns um acht.', en: 'I would suggest we meet at eight.', fr: 'Je proposerais qu’on se retrouve à huit heures.' } } },
    { kind: 'vocab', item: { id: 'b1l1-moeglich', german: 'möglich', english: 'possible', french: 'possible', gender: null, syllables: ['MÖG', 'lich'], pronunciation: 'MOEG-likh', example: { de: 'Wäre das möglich?', en: 'Would that be possible?', fr: 'Serait-ce possible ?' } } },
    { kind: 'vocab', item: { id: 'b1l1-lieber2', german: 'am liebsten', english: 'most of all / would prefer', french: 'de préférence', gender: null, syllables: ['am', 'LIEB', 'sten'], pronunciation: 'am LEEP-sten', example: { de: 'Am liebsten würde ich reisen.', en: 'Most of all I would like to travel.', fr: 'Je préférerais voyager.' } } },

    { kind: 'grammar', note: {
      id: 'b1l1-wuerde-note', title: 'Konjunktiv II with "würde"', titleFr: 'Le Konjunktiv II avec « würde »',
      explanationMd: 'For most verbs, form the Konjunktiv II with **würde** + infinitive (at the end). It expresses politeness or something hypothetical:\n\n- ich **würde**, du **würdest**, er/sie/es **würde**, wir **würden**\n\nIch **würde** gern **kommen**. · **Würdest** du das **machen**?',
      explanationMdFr: 'Pour la plupart des verbes, forme le Konjunktiv II avec **würde** + infinitif (à la fin). Il exprime la politesse ou l’hypothèse :\n\n- ich **würde**, du **würdest**, er/sie/es **würde**, wir **würden**\n\nIch **würde** gern **kommen**. · **Würdest** du das **machen** ?',
      examples: [
        { de: 'Ich würde gern mehr reisen.', en: 'I would like to travel more.', fr: 'J’aimerais voyager davantage.' },
        { de: 'Würden Sie bitte warten?', en: 'Would you please wait?', fr: 'Voudriez-vous patienter ?' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'grammar', note: {
      id: 'b1l1-haette-waere', title: 'hätte, wäre, könnte', titleFr: 'hätte, wäre, könnte',
      explanationMd: '**haben, sein** and the modals prefer their own Konjunktiv II form (not "würde"):\n\n- haben → **hätte** · sein → **wäre** · können → **könnte** · mögen → **möchte**\n\nIch **hätte** gern einen Tee. · Das **wäre** toll. · **Könntest** du mir helfen?',
      explanationMdFr: '**haben, sein** et les modaux préfèrent leur propre forme au Konjunktiv II (pas « würde ») :\n\n- haben → **hätte** · sein → **wäre** · können → **könnte** · mögen → **möchte**\n\nIch **hätte** gern einen Tee. · Das **wäre** toll. · **Könntest** du mir helfen ?',
      examples: [
        { de: 'Ich hätte eine Frage.', en: 'I would have a question.', fr: 'J’aurais une question.' },
        { de: 'Es wäre schön, dich zu sehen.', en: 'It would be nice to see you.', fr: 'Ce serait bien de te voir.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l1-hoeflich-note', title: 'Polite requests', titleFr: 'Les demandes polies',
      explanationMd: 'The Konjunktiv II makes requests softer and more polite:\n\n- Direct: **Hilf** mir! → Polite: **Könntest** du mir **helfen**?\n- Direct: Ich **will** einen Kaffee. → Polite: Ich **hätte** gern einen Kaffee.\n\nUse it in shops, offices, and with people you don’t know.',
      explanationMdFr: 'Le Konjunktiv II rend les demandes plus douces et plus polies :\n\n- Direct : **Hilf** mir ! → Poli : **Könntest** du mir **helfen** ?\n- Direct : Ich **will** einen Kaffee. → Poli : Ich **hätte** gern einen Kaffee.\n\nUtilise-le dans les magasins, les bureaux et avec les inconnus.',
      examples: [
        { de: 'Könnten Sie mir das erklären?', en: 'Could you explain that to me?', fr: 'Pourriez-vous m’expliquer cela ?' },
        { de: 'Ich würde gern einen Termin machen.', en: 'I would like to make an appointment.', fr: 'Je voudrais prendre rendez-vous.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l1-e1', prompt: 'Ich ___ gern einen Kaffee. (haben — Konjunktiv II)', answer: 'hätte', hint: 'haben → hätte', hintFr: 'haben → hätte' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l1-e2', prompt: '___ du mir helfen? (können — Konjunktiv II, du)', answer: 'Könntest', hint: 'können → könntest', hintFr: 'können → könntest' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l1-e3', prompt: 'Which is the most polite?', promptFr: 'Quelle est la plus polie ?', options: ['Gib mir das Salz!', 'Ich will das Salz.', 'Könntest du mir bitte das Salz geben?'], answer: 2, explain: 'The Konjunktiv II ("könntest … bitte") is the most polite.', explainFr: 'Le Konjunktiv II (« könntest … bitte ») est le plus poli.', hint: 'Look for "könntest" and "bitte".', hintFr: 'Cherche « könntest » et « bitte ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l1-e4', tokens: ['kommen', 'würde', 'gern', 'Ich'], answer: ['Ich', 'würde', 'gern', 'kommen'], hint: 'würde in position 2, infinitive at the end.', hintFr: 'würde en position 2, infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l1-e5', pairs: [ { de: 'haben', en: 'hätte', fr: 'hätte' }, { de: 'sein', en: 'wäre', fr: 'wäre' }, { de: 'können', en: 'könnte', fr: 'könnte' } ], hint: 'Match each verb to its Konjunktiv II form.', hintFr: 'Associe chaque verbe à sa forme au Konjunktiv II.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l1-e6', prompt: 'Listen. What would the guest like?', promptFr: 'Écoute. Que voudrait le client ?', audio: { ttsText: 'Guten Tag. Ich hätte gern einen Tee mit Zitrone.' }, options: ['A tea with lemon', 'A coffee', 'A glass of water'], optionsFr: ['Un thé au citron', 'Un café', 'Un verre d’eau'], answer: 0, hint: 'Listen after "Ich hätte gern".', hintFr: 'Écoute après « Ich hätte gern ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l1-e7', prompt: 'Das ___ wirklich schön. (sein — Konjunktiv II)', answer: 'wäre', hint: 'sein → wäre', hintFr: 'sein → wäre' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l1-e8', prompt: 'Which verb usually forms Konjunktiv II WITHOUT "würde"?', promptFr: 'Quel verbe forme le Konjunktiv II SANS « würde » ?', options: ['spielen', 'haben', 'arbeiten'], answer: 1, explain: 'haben/sein/modals have their own forms (hätte, wäre, könnte).', explainFr: 'haben/sein/modaux ont leurs propres formes (hätte, wäre, könnte).', hint: 'Not a normal action verb.', hintFr: 'Pas un verbe d’action ordinaire.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l1-e9', tokens: ['Sie', 'warten', 'Würden', 'bitte'], answer: ['Würden', 'Sie', 'bitte', 'warten'], hint: 'Polite question: Würden Sie bitte …?', hintFr: 'Question polie : Würden Sie bitte … ?' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l1-e10', prompt: 'Listen. What does the caller want to do?', promptFr: 'Écoute. Que veut faire la personne au téléphone ?', audio: { ttsText: 'Guten Tag, ich würde gern einen Termin machen.' }, options: ['Make an appointment', 'Cancel a meeting', 'Order food'], optionsFr: ['Prendre rendez-vous', 'Annuler une réunion', 'Commander à manger'], answer: 0, hint: 'Listen after "ich würde gern".', hintFr: 'Écoute après « ich würde gern ».' } },

    { kind: 'pronunciation', focus: 'The umlauts drive the Konjunktiv II: hätte, wäre, würde, könnte (all rounded/fronted)', focusFr: 'Les trémas marquent le Konjunktiv II : hätte, wäre, würde, könnte (arrondis/antérieurs)', items: [
      { id: 'b1l1-haette-pron', german: 'hätte', english: 'would have', french: 'aurait', gender: null, syllables: ['HÄT', 'te'], pronunciation: 'HET-te', example: { de: 'Ich hätte gern Wasser.', en: 'I would like water.', fr: 'Je voudrais de l’eau.' } },
      { id: 'b1l1-wuerde-pron', german: 'würde', english: 'would', french: 'ferais', gender: null, syllables: ['WÜR', 'de'], pronunciation: 'VUER-de', example: { de: 'Ich würde gern gehen.', en: 'I would like to go.', fr: 'J’aimerais partir.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now be polite and hypothetical with the **Konjunktiv II**: **würde** + infinitive for most verbs, and the special forms **hätte** (haben), **wäre** (sein), **könnte** (können). Use them for polite requests and wishes: Könntest du …? / Ich hätte gern … 🎉',
      summaryFr: 'Tu sais maintenant être poli et hypothétique avec le **Konjunktiv II** : **würde** + infinitif pour la plupart des verbes, et les formes spéciales **hätte** (haben), **wäre** (sein), **könnte** (können). Utilise-les pour des demandes polies et des souhaits : Könntest du … ? / Ich hätte gern … 🎉' },
  ],
};

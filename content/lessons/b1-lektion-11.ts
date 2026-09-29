import type { Lesson } from '../types';

export const b1lektion11: Lesson = {
  id: 'b1-l11', level: 'B1', module: 4, number: 11,
  title: { de: 'Hätte, wäre, wenn …', en: 'Would have, if only …', fr: 'J’aurais, si seulement …' },
  theme: 'The past Konjunktiv II: regrets and unreal situations in the past',
  themeFr: 'Le Konjunktiv II du passé : regrets et situations irréelles au passé',
  goals: ['Form the past Konjunktiv II (hätte/wäre + participle)', 'Express regret ("I would have …")', 'Build unreal past conditions', 'Use "hätte … sollen/können"'],
  goalsFr: ['Former le Konjunktiv II du passé (hätte/wäre + participe)', 'Exprimer le regret (« j’aurais … »)', 'Construire des conditions irréelles au passé', 'Utiliser « hätte … sollen/können »'],
  steps: [
    { kind: 'intro', title: 'Ich hätte … 😅', titleFr: 'J’aurais … 😅',
      scene: 'Looking back with "if only I had …".', sceneFr: 'On regarde en arrière avec « si seulement j’avais … ».',
      goals: ['Build hätte/wäre + participle', 'Express regrets', 'Make unreal past conditions', 'Use modal regrets (hätte … sollen)'],
      goalsFr: ['Construire hätte/wäre + participe', 'Exprimer des regrets', 'Faire des conditions irréelles au passé', 'Exprimer des regrets modaux (hätte … sollen)'] },

    { kind: 'vocab', item: { id: 'b1l11-bereuen', german: 'bereuen', english: 'to regret', french: 'regretter', gender: null, syllables: ['be', 'REU', 'en'], pronunciation: 'be-ROY-en', example: { de: 'Ich bereue nichts.', en: 'I regret nothing.', fr: 'Je ne regrette rien.' } } },
    { kind: 'vocab', item: { id: 'b1l11-fehler', german: 'der Fehler', english: 'the mistake', french: 'l’erreur', gender: 'der', syllables: ['FEH', 'ler'], pronunciation: 'dair FAY-ler', example: { de: 'Das war ein Fehler.', en: 'That was a mistake.', fr: 'C’était une erreur.' } } },
    { kind: 'vocab', item: { id: 'b1l11-anders', german: 'anders', english: 'differently', french: 'différemment', gender: null, syllables: ['AN', 'ders'], pronunciation: 'AHN-ders', example: { de: 'Ich hätte es anders gemacht.', en: 'I would have done it differently.', fr: 'Je l’aurais fait différemment.' } } },
    { kind: 'vocab', item: { id: 'b1l11-fast', german: 'fast', english: 'almost', french: 'presque', gender: null, syllables: ['FAST'], pronunciation: 'fahst', example: { de: 'Ich hätte fast den Zug verpasst.', en: 'I almost missed the train.', fr: 'J’ai failli rater le train.' } } },
    { kind: 'vocab', item: { id: 'b1l11-verpassen', german: 'verpassen', english: 'to miss (a train/chance)', french: 'rater / manquer', gender: null, syllables: ['ver', 'PAS', 'sen'], pronunciation: 'fair-PASS-en', example: { de: 'Ich habe den Bus verpasst.', en: 'I missed the bus.', fr: 'J’ai raté le bus.' } } },
    { kind: 'vocab', item: { id: 'b1l11-chance', german: 'die Chance', english: 'the chance', french: 'la chance / opportunité', gender: 'die', syllables: ['CHAN', 'ce'], pronunciation: 'dee SHAHNG-se', example: { de: 'Das war eine gute Chance.', en: 'That was a good chance.', fr: 'C’était une bonne occasion.' } } },
    { kind: 'vocab', item: { id: 'b1l11-entscheiden', german: 'sich entscheiden', english: 'to decide', french: 'décider', gender: null, syllables: ['ent', 'SCHEI', 'den'], pronunciation: 'ent-SHY-den', example: { de: 'Ich habe mich entschieden.', en: 'I have decided.', fr: 'Je me suis décidé.' } } },
    { kind: 'vocab', item: { id: 'b1l11-aufpassen', german: 'aufpassen', english: 'to pay attention', french: 'faire attention', gender: null, syllables: ['AUF', 'pas', 'sen'], pronunciation: 'OWF-pass-en', example: { de: 'Du hättest aufpassen sollen.', en: 'You should have paid attention.', fr: 'Tu aurais dû faire attention.' } } },
    { kind: 'vocab', item: { id: 'b1l11-schade', german: 'schade', english: 'a pity / too bad', french: 'dommage', gender: null, syllables: ['SCHA', 'de'], pronunciation: 'SHAH-de', example: { de: 'Schade, dass du nicht da warst.', en: 'Too bad you weren’t there.', fr: 'Dommage que tu n’aies pas été là.' } } },
    { kind: 'vocab', item: { id: 'b1l11-eigentlich', german: 'eigentlich', english: 'actually', french: 'en fait', gender: null, syllables: ['EI', 'gent', 'lich'], pronunciation: 'EYE-gent-likh', example: { de: 'Eigentlich hätte ich mehr lernen sollen.', en: 'Actually I should have studied more.', fr: 'En fait, j’aurais dû étudier plus.' } } },

    { kind: 'grammar', note: {
      id: 'b1l11-vergangenheit', title: 'Past Konjunktiv II', titleFr: 'Le Konjunktiv II du passé',
      explanationMd: 'To say what **would have** happened, use **hätte/wäre** + the **participle** (at the end):\n\n- Ich **hätte** das anders **gemacht**. — I would have done it differently.\n- Ich **wäre** gern **gekommen**. — I would have liked to come.\n\nChoose **hätte** or **wäre** the same way as the Perfekt (movement/change → wäre).',
      explanationMdFr: 'Pour dire ce qui **serait arrivé**, utilise **hätte/wäre** + le **participe** (à la fin) :\n\n- Ich **hätte** das anders **gemacht**. — Je l’aurais fait différemment.\n- Ich **wäre** gern **gekommen**. — J’aurais aimé venir.\n\nChoisis **hätte** ou **wäre** comme pour le Perfekt (mouvement/changement → wäre).',
      examples: [
        { de: 'Das hätte ich nicht gesagt.', en: 'I wouldn’t have said that.', fr: 'Je n’aurais pas dit ça.' },
        { de: 'Wir wären fast zu spät gekommen.', en: 'We almost arrived too late.', fr: 'Nous avons failli arriver trop tard.' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'grammar', note: {
      id: 'b1l11-irreal-vergangenheit', title: 'Unreal past conditions', titleFr: 'Conditions irréelles au passé',
      explanationMd: 'Both clauses use the past Konjunktiv II (**hätte/wäre** + participle):\n\n- **Wenn** ich mehr **gelernt hätte**, **hätte** ich die Prüfung **bestanden**.\n- **Wenn** du früher **gegangen wärst**, **wärst** du pünktlich **gewesen**.',
      explanationMdFr: 'Les deux propositions utilisent le Konjunktiv II du passé (**hätte/wäre** + participe) :\n\n- **Wenn** ich mehr **gelernt hätte**, **hätte** ich die Prüfung **bestanden**.\n- **Wenn** du früher **gegangen wärst**, **wärst** du pünktlich **gewesen**.',
      examples: [
        { de: 'Wenn ich Zeit gehabt hätte, wäre ich gekommen.', en: 'If I had had time, I would have come.', fr: 'Si j’avais eu le temps, je serais venu.' },
        { de: 'Wenn es nicht geregnet hätte, hätten wir gegrillt.', en: 'If it hadn’t rained, we would have barbecued.', fr: 'S’il n’avait pas plu, nous aurions fait un barbecue.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l11-modal-regret', title: 'Regrets with "hätte … sollen/können"', titleFr: 'Regrets avec « hätte … sollen/können »',
      explanationMd: 'For modal regrets, use **hätte** + infinitive + **sollen/können** (a double infinitive at the very end):\n\n- Ich **hätte** mehr **lernen sollen**. — I should have studied more.\n- Du **hättest** früher **anrufen können**. — You could have called earlier.',
      explanationMdFr: 'Pour les regrets modaux, utilise **hätte** + infinitif + **sollen/können** (double infinitif tout à la fin) :\n\n- Ich **hätte** mehr **lernen sollen**. — J’aurais dû étudier plus.\n- Du **hättest** früher **anrufen können**. — Tu aurais pu appeler plus tôt.',
      examples: [
        { de: 'Ich hätte das wissen müssen.', en: 'I should have known that.', fr: 'J’aurais dû le savoir.' },
        { de: 'Du hättest aufpassen sollen.', en: 'You should have paid attention.', fr: 'Tu aurais dû faire attention.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l11-e1', prompt: 'Ich ___ das anders gemacht. (haben — Konjunktiv II)', answer: 'hätte', hint: 'past Konjunktiv II uses hätte + participle', hintFr: 'le Konjunktiv II du passé utilise hätte + participe' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l11-e2', prompt: 'Ich ___ gern gekommen. (sein — Konjunktiv II)', answer: 'wäre', hint: 'kommen → wäre gekommen', hintFr: 'kommen → wäre gekommen' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l11-e3', tokens: ['gesagt', 'hätte', 'nicht', 'Das', 'ich'], answer: ['Das', 'hätte', 'ich', 'nicht', 'gesagt'], hint: 'hätte in position 2, participle at the end.', hintFr: 'hätte en position 2, participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l11-e4', prompt: 'How do you say "I should have studied more"?', promptFr: 'Comment dit-on « j’aurais dû étudier plus » ?', options: ['Ich hätte mehr lernen sollen.', 'Ich habe mehr lernen sollen.', 'Ich würde mehr lernen.'], answer: 0, explain: 'hätte + infinitive + sollen (double infinitive).', explainFr: 'hätte + infinitif + sollen (double infinitif).', hint: 'Look for hätte … lernen sollen.', hintFr: 'Cherche hätte … lernen sollen.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l11-e5', pairs: [ { de: 'bereuen', en: 'to regret', fr: 'regretter' }, { de: 'verpassen', en: 'to miss', fr: 'rater' }, { de: 'der Fehler', en: 'mistake', fr: 'erreur' } ], hint: 'Match each item to its meaning.', hintFr: 'Associe chaque élément à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l11-e6', prompt: 'Listen. What does the speaker regret?', promptFr: 'Écoute. Que regrette le locuteur ?', audio: { ttsText: 'Ich hätte mehr lernen sollen. Dann hätte ich die Prüfung bestanden.' }, options: ['Not studying more', 'Missing the bus', 'Being late'], optionsFr: ['Ne pas avoir étudié plus', 'Avoir raté le bus', 'Être en retard'], answer: 0, hint: 'Listen for "hätte mehr lernen sollen".', hintFr: 'Écoute « hätte mehr lernen sollen ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l11-e7', prompt: 'Wenn ich Zeit gehabt hätte, ___ ich gekommen. (sein — Konjunktiv II)', answer: 'wäre', hint: 'main clause: wäre + gekommen', hintFr: 'principale : wäre + gekommen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l11-e8', prompt: 'Complete: "Du hättest früher anrufen ___."', promptFr: 'Complète : « Du hättest früher anrufen ___. »', options: ['gekonnt', 'können', 'kannst'], answer: 1, explain: 'Modal regret → infinitive "können" at the end (double infinitive).', explainFr: 'Regret modal → infinitif « können » à la fin (double infinitif).', hint: 'It’s a double infinitive: anrufen können.', hintFr: 'C’est un double infinitif : anrufen können.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l11-e9', tokens: ['gehabt', 'ich', 'Wenn', 'Zeit', 'hätte'], answer: ['Wenn', 'ich', 'Zeit', 'gehabt', 'hätte'], hint: 'wenn-clause: participle + hätte at the end.', hintFr: 'subordonnée wenn : participe + hätte à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l11-e10', prompt: 'Listen. What almost happened?', promptFr: 'Écoute. Qu’a-t-il failli se passer ?', audio: { ttsText: 'Ich hätte fast den Zug verpasst, aber ich bin noch rechtzeitig angekommen.' }, options: ['Almost missed the train', 'Missed the meeting', 'Forgot the tickets'], optionsFr: ['Failli rater le train', 'Raté la réunion', 'Oublié les billets'], answer: 0, hint: 'Listen for "fast … verpasst".', hintFr: 'Écoute « fast … verpasst ».' } },

    { kind: 'pronunciation', focus: 'The double infinitive ending stacks two verbs: "lernen sollen", "anrufen können"', focusFr: 'Le double infinitif empile deux verbes : « lernen sollen », « anrufen können »', items: [
      { id: 'b1l11-haette-pron', german: 'hätte gemacht', english: 'would have done', french: 'aurait fait', gender: null, syllables: ['HÄT', 'te', 'ge', 'MACHT'], pronunciation: 'HET-te ge-MAHKHT', example: { de: 'Ich hätte es gemacht.', en: 'I would have done it.', fr: 'Je l’aurais fait.' } },
      { id: 'b1l11-waere-pron', german: 'wäre gekommen', english: 'would have come', french: 'serait venu', gender: null, syllables: ['WÄ', 're', 'ge', 'KOM', 'men'], pronunciation: 'VAY-re ge-KOM-men', example: { de: 'Ich wäre gekommen.', en: 'I would have come.', fr: 'Je serais venu.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now talk about the **unreal past**: **hätte/wäre** + participle for "would have" (Ich hätte das anders gemacht), unreal past conditions (Wenn ich gelernt hätte, hätte ich bestanden), and modal regrets with a double infinitive (Ich hätte mehr lernen sollen). 🎉',
      summaryFr: 'Tu sais maintenant parler du **passé irréel** : **hätte/wäre** + participe pour « aurais » (Ich hätte das anders gemacht), les conditions irréelles au passé (Wenn ich gelernt hätte, hätte ich bestanden), et les regrets modaux avec un double infinitif (Ich hätte mehr lernen sollen). 🎉' },
  ],
};

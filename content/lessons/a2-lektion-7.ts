import type { Lesson } from '../types';

export const a2lektion7: Lesson = {
  id: 'a2-l7', level: 'A2', module: 3, number: 7,
  title: { de: 'Warum? — weil und dass', en: 'Why? — weil and dass', fr: 'Pourquoi ? — weil et dass' },
  theme: 'Giving reasons and opinions with subordinate clauses (weil, dass)',
  themeFr: 'Donner des raisons et des opinions avec les subordonnées (weil, dass)',
  goals: ['Give reasons with "weil" (because)', 'Report opinions with "dass" (that)', 'Send the verb to the end of a subordinate clause', 'Use the verb "wissen" (to know)'],
  goalsFr: ['Donner des raisons avec « weil » (parce que)', 'Rapporter des opinions avec « dass » (que)', 'Envoyer le verbe à la fin de la subordonnée', 'Utiliser le verbe « wissen » (savoir)'],
  steps: [
    { kind: 'intro', title: 'Warum lernst du Deutsch? 🤔', titleFr: 'Pourquoi apprends-tu l’allemand ? 🤔',
      scene: 'Explaining reasons and sharing opinions.', sceneFr: 'On explique des raisons et on partage des opinions.',
      goals: ['Answer "Warum?" with "weil"', 'Use "dass" to report what you think', 'Put the verb at the end of the clause', 'Use "wissen" correctly'],
      goalsFr: ['Répondre à « Warum? » avec « weil »', 'Utiliser « dass » pour rapporter ce que tu penses', 'Mettre le verbe à la fin de la subordonnée', 'Utiliser « wissen » correctement'] },

    { kind: 'vocab', item: { id: 'a2l7-weil', german: 'weil', english: 'because', french: 'parce que', gender: null, syllables: ['WEIL'], pronunciation: 'vile', example: { de: 'Ich lerne Deutsch, weil es wichtig ist.', en: 'I learn German because it is important.', fr: 'J’apprends l’allemand parce que c’est important.' } } },
    { kind: 'vocab', item: { id: 'a2l7-dass', german: 'dass', english: 'that (conjunction)', french: 'que (conjonction)', gender: null, syllables: ['DASS'], pronunciation: 'dahss', example: { de: 'Ich glaube, dass er recht hat.', en: 'I think that he is right.', fr: 'Je crois qu’il a raison.' } } },
    { kind: 'vocab', item: { id: 'a2l7-grund', german: 'der Grund', english: 'the reason', french: 'la raison', gender: 'der', syllables: ['GRUND'], pronunciation: 'dair GROONT', example: { de: 'Was ist der Grund?', en: 'What is the reason?', fr: 'Quelle est la raison ?' } } },
    { kind: 'vocab', item: { id: 'a2l7-glauben', german: 'glauben', english: 'to believe / think', french: 'croire', gender: null, syllables: ['GLAU', 'ben'], pronunciation: 'GLOW-ben', example: { de: 'Ich glaube, das ist richtig.', en: 'I believe that is right.', fr: 'Je crois que c’est juste.' } } },
    { kind: 'vocab', item: { id: 'a2l7-denken', german: 'denken', english: 'to think', french: 'penser', gender: null, syllables: ['DEN', 'ken'], pronunciation: 'DENK-en', example: { de: 'Ich denke oft an dich.', en: 'I often think of you.', fr: 'Je pense souvent à toi.' } } },
    { kind: 'vocab', item: { id: 'a2l7-wissen', german: 'wissen', english: 'to know (a fact)', french: 'savoir', gender: null, syllables: ['WIS', 'sen'], pronunciation: 'VISS-en', example: { de: 'Ich weiß, dass du kommst.', en: 'I know that you are coming.', fr: 'Je sais que tu viens.' } } },
    { kind: 'vocab', item: { id: 'a2l7-muede', german: 'müde', english: 'tired', french: 'fatigué', gender: null, syllables: ['MÜ', 'de'], pronunciation: 'MUE-de', example: { de: 'Ich bin müde.', en: 'I am tired.', fr: 'Je suis fatigué.' } } },
    { kind: 'vocab', item: { id: 'a2l7-wichtig', german: 'wichtig', english: 'important', french: 'important', gender: null, syllables: ['WICH', 'tig'], pronunciation: 'VIKH-tikh', example: { de: 'Deutsch ist wichtig für die Arbeit.', en: 'German is important for work.', fr: 'L’allemand est important pour le travail.' } } },
    { kind: 'vocab', item: { id: 'a2l7-verstehen', german: 'verstehen', english: 'to understand', french: 'comprendre', gender: null, syllables: ['ver', 'STE', 'hen'], pronunciation: 'fair-SHTAY-en', example: { de: 'Ich verstehe das nicht.', en: 'I don’t understand that.', fr: 'Je ne comprends pas ça.' } } },
    { kind: 'vocab', item: { id: 'a2l7-warum', german: 'warum', english: 'why', french: 'pourquoi', gender: null, syllables: ['wa', 'RUM'], pronunciation: 'vah-ROOM', example: { de: 'Warum lernst du Deutsch?', en: 'Why do you learn German?', fr: 'Pourquoi apprends-tu l’allemand ?' } } },

    { kind: 'grammar', note: {
      id: 'a2l7-weil-note', title: 'Reasons with "weil" (verb to the end)', titleFr: 'Les raisons avec « weil » (verbe à la fin)',
      explanationMd: '**weil** (because) starts a subordinate clause, and the **conjugated verb moves to the very end**:\n\n- Ich bleibe zu Hause, **weil** ich müde **bin**.\n- Ich lerne Deutsch, **weil** ich in Deutschland **arbeite**.\n\nNote the **comma** before weil.',
      explanationMdFr: '**weil** (parce que) introduit une subordonnée, et le **verbe conjugué va tout à la fin** :\n\n- Ich bleibe zu Hause, **weil** ich müde **bin**.\n- Ich lerne Deutsch, **weil** ich in Deutschland **arbeite**.\n\nNote la **virgule** avant weil.',
      examples: [
        { de: 'Ich trinke Kaffee, weil ich müde bin.', en: 'I drink coffee because I am tired.', fr: 'Je bois du café parce que je suis fatigué.' },
        { de: 'Warum? — Weil es wichtig ist.', en: 'Why? — Because it is important.', fr: 'Pourquoi ? — Parce que c’est important.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l7-dass-note', title: 'Opinions with "dass" (verb to the end)', titleFr: 'Les opinions avec « dass » (verbe à la fin)',
      explanationMd: '**dass** (that) works the same way — the verb goes to the **end**. Use it after verbs like **glauben, denken, wissen, hoffen**:\n\n- Ich glaube, **dass** er recht **hat**.\n- Ich weiß, **dass** du morgen **kommst**.',
      explanationMdFr: '**dass** (que) fonctionne pareil — le verbe va à la **fin**. On l’utilise après des verbes comme **glauben, denken, wissen, hoffen** :\n\n- Ich glaube, **dass** er recht **hat**.\n- Ich weiß, **dass** du morgen **kommst**.',
      examples: [
        { de: 'Ich denke, dass Deutsch schön ist.', en: 'I think that German is beautiful.', fr: 'Je pense que l’allemand est beau.' },
        { de: 'Ich hoffe, dass du bald kommst.', en: 'I hope that you come soon.', fr: 'J’espère que tu viendras bientôt.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l7-wissen-note', title: 'The verb "wissen" (to know)', titleFr: 'Le verbe « wissen » (savoir)',
      explanationMd: '**wissen** is irregular in the singular:\n\n- ich **weiß** — I know\n- du **weißt** — you know\n- er/sie/es **weiß** — he/she/it knows\n- wir/sie **wissen** — we/they know',
      explanationMdFr: '**wissen** est irrégulier au singulier :\n\n- ich **weiß** — je sais\n- du **weißt** — tu sais\n- er/sie/es **weiß** — il/elle/on sait\n- wir/sie **wissen** — nous/ils savons',
      examples: [
        { de: 'Ich weiß es nicht.', en: 'I don’t know.', fr: 'Je ne sais pas.' },
        { de: 'Weißt du, wo der Bahnhof ist?', en: 'Do you know where the station is?', fr: 'Sais-tu où est la gare ?' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l7-e1', tokens: ['müde', 'weil', 'bin', 'ich'], answer: ['weil', 'ich', 'müde', 'bin'], hint: 'In a "weil" clause the verb goes to the end.', hintFr: 'Dans une subordonnée « weil », le verbe va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l7-e2', prompt: 'Ich glaube, ___ er recht hat. (that)', answer: 'dass', hint: 'the conjunction meaning "that"', hintFr: 'la conjonction qui signifie « que »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l7-e3', prompt: 'Which sentence has correct word order?', promptFr: 'Quelle phrase a le bon ordre des mots ?', options: ['Ich bleibe zu Hause, weil ich bin müde.', 'Ich bleibe zu Hause, weil ich müde bin.', 'Ich bleibe zu Hause, weil bin ich müde.'], answer: 1, explain: 'After "weil", the verb goes to the end: … weil ich müde bin.', explainFr: 'Après « weil », le verbe va à la fin : … weil ich müde bin.', hint: 'The verb must be last.', hintFr: 'Le verbe doit être en dernier.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l7-e4', prompt: 'Ich ___ es nicht. (wissen — ich-form)', answer: 'weiß', hint: 'wissen is irregular: ich weiß', hintFr: 'wissen est irrégulier : ich weiß' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l7-e5', pairs: [ { de: 'weil', en: 'because', fr: 'parce que' }, { de: 'dass', en: 'that', fr: 'que' }, { de: 'warum', en: 'why', fr: 'pourquoi' } ], hint: 'Match each connector to its meaning.', hintFr: 'Associe chaque connecteur à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l7-e6', prompt: 'Listen. Why is Ana learning German?', promptFr: 'Écoute. Pourquoi Ana apprend-elle l’allemand ?', audio: { ttsText: 'Ich lerne Deutsch, weil ich in Deutschland arbeiten will.' }, options: ['To work in Germany', 'For a holiday', 'For a friend'], optionsFr: ['Pour travailler en Allemagne', 'Pour les vacances', 'Pour un ami'], answer: 0, hint: 'Listen after "weil".', hintFr: 'Écoute après « weil ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l7-e7', tokens: ['dass', 'kommst', 'du', 'weiß', 'Ich'], answer: ['Ich', 'weiß', 'dass', 'du', 'kommst'], hint: 'Main clause, comma, then "dass" with the verb at the end.', hintFr: 'Principale, virgule, puis « dass » avec le verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l7-e8', prompt: 'Ich lerne Deutsch, ___ es wichtig ist. (because)', answer: 'weil', hint: 'gives the reason', hintFr: 'donne la raison' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l7-e9', prompt: 'Which verb usually introduces a "dass" clause?', promptFr: 'Quel verbe introduit souvent une subordonnée « dass » ?', options: ['fahren', 'glauben', 'kaufen'], answer: 1, explain: '"glauben, denken, wissen …" introduce dass-clauses.', explainFr: '« glauben, denken, wissen … » introduisent des subordonnées en dass.', hint: 'A verb of thinking/opinion.', hintFr: 'Un verbe d’opinion.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l7-e10', prompt: 'Listen. What does Ben believe?', promptFr: 'Écoute. Que croit Ben ?', audio: { ttsText: 'Ich glaube, dass das Wetter morgen besser wird.' }, options: ['The weather will be better tomorrow', 'It will rain', 'He is tired'], optionsFr: ['Le temps sera meilleur demain', 'Il va pleuvoir', 'Il est fatigué'], answer: 0, hint: 'Listen after "dass".', hintFr: 'Écoute après « dass ».' } },

    { kind: 'pronunciation', focus: 'The "ei" in weil is "eye", and "ß" in dass/weiß is a sharp "s"', focusFr: 'Le « ei » de weil est « aï », et « ß » dans dass/weiß est un « s » net', items: [
      { id: 'a2l7-weil-pron', german: 'weil', english: 'because', french: 'parce que', gender: null, syllables: ['WEIL'], pronunciation: 'vile', example: { de: 'Weil ich müde bin.', en: 'Because I am tired.', fr: 'Parce que je suis fatigué.' } },
      { id: 'a2l7-weiss-pron', german: 'weiß', english: '(I) know', french: '(je) sais', gender: null, syllables: ['WEISS'], pronunciation: 'vice', example: { de: 'Ich weiß es nicht.', en: 'I don’t know.', fr: 'Je ne sais pas.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now give reasons with **weil** and report opinions with **dass** — in both, the conjugated verb goes to the **end** of the clause. You also learned the irregular verb **wissen** (ich weiß). 🎉',
      summaryFr: 'Tu sais maintenant donner des raisons avec **weil** et rapporter des opinions avec **dass** — dans les deux cas, le verbe conjugué va à la **fin** de la subordonnée. Tu as aussi appris le verbe irrégulier **wissen** (ich weiß). 🎉' },
  ],
};

import type { Lesson } from '../types';

export const b1lektion6: Lesson = {
  id: 'b1-l6', level: 'B1', module: 2, number: 6,
  title: { de: 'Konnektoren', en: 'Connectors', fr: 'Les connecteurs' },
  theme: 'Linking ideas: obwohl, deshalb, trotzdem, damit',
  themeFr: 'Relier les idées : obwohl, deshalb, trotzdem, damit',
  goals: ['Concede with "obwohl" (verb to the end)', 'Give consequences with "deshalb"', 'Contrast with "trotzdem"', 'Express purpose with "damit"'],
  goalsFr: ['Concéder avec « obwohl » (verbe à la fin)', 'Donner une conséquence avec « deshalb »', 'Opposer avec « trotzdem »', 'Exprimer le but avec « damit »'],
  steps: [
    { kind: 'intro', title: 'Ideen verbinden 🔗', titleFr: 'Relier les idées 🔗',
      scene: 'Explaining reasons, results, contrasts, and goals.', sceneFr: 'On explique des raisons, des résultats, des oppositions et des buts.',
      goals: ['Use "obwohl" for concession', 'Use "deshalb" for consequence', 'Use "trotzdem" for contrast', 'Use "damit" for purpose'],
      goalsFr: ['Utiliser « obwohl » pour la concession', 'Utiliser « deshalb » pour la conséquence', 'Utiliser « trotzdem » pour l’opposition', 'Utiliser « damit » pour le but'] },

    { kind: 'vocab', item: { id: 'b1l6-obwohl', german: 'obwohl', english: 'although', french: 'bien que', gender: null, syllables: ['ob', 'WOHL'], pronunciation: 'op-VOHL', example: { de: 'Obwohl es regnet, gehe ich raus.', en: 'Although it’s raining, I go out.', fr: 'Bien qu’il pleuve, je sors.' } } },
    { kind: 'vocab', item: { id: 'b1l6-deshalb', german: 'deshalb', english: 'therefore', french: 'c’est pourquoi', gender: null, syllables: ['DES', 'halb'], pronunciation: 'DES-halp', example: { de: 'Es regnet, deshalb bleibe ich zu Hause.', en: 'It’s raining, therefore I stay home.', fr: 'Il pleut, c’est pourquoi je reste à la maison.' } } },
    { kind: 'vocab', item: { id: 'b1l6-trotzdem', german: 'trotzdem', english: 'nevertheless', french: 'malgré tout', gender: null, syllables: ['TROTZ', 'dem'], pronunciation: 'TROTS-dem', example: { de: 'Es regnet. Trotzdem gehe ich raus.', en: 'It’s raining. Nevertheless I go out.', fr: 'Il pleut. Malgré tout, je sors.' } } },
    { kind: 'vocab', item: { id: 'b1l6-damit', german: 'damit', english: 'so that', french: 'pour que', gender: null, syllables: ['da', 'MIT'], pronunciation: 'dah-MIT', example: { de: 'Ich spare, damit ich reisen kann.', en: 'I save so that I can travel.', fr: 'J’économise pour pouvoir voyager.' } } },
    { kind: 'vocab', item: { id: 'b1l6-ergebnis', german: 'das Ergebnis', english: 'the result', french: 'le résultat', gender: 'das', syllables: ['er', 'GEB', 'nis'], pronunciation: 'dahs air-GAYP-nis', example: { de: 'Das Ergebnis ist gut.', en: 'The result is good.', fr: 'Le résultat est bon.' } } },
    { kind: 'vocab', item: { id: 'b1l6-zweck', german: 'der Zweck', english: 'the purpose', french: 'le but', gender: 'der', syllables: ['ZWECK'], pronunciation: 'dair TSVEK', example: { de: 'Was ist der Zweck?', en: 'What is the purpose?', fr: 'Quel est le but ?' } } },
    { kind: 'vocab', item: { id: 'b1l6-ursache', german: 'die Ursache', english: 'the cause', french: 'la cause', gender: 'die', syllables: ['UR', 'sa', 'che'], pronunciation: 'dee OOR-zah-khe', example: { de: 'Die Ursache ist unklar.', en: 'The cause is unclear.', fr: 'La cause n’est pas claire.' } } },
    { kind: 'vocab', item: { id: 'b1l6-erklaeren', german: 'erklären', english: 'to explain', french: 'expliquer', gender: null, syllables: ['er', 'KLÄ', 'ren'], pronunciation: 'air-KLAY-ren', example: { de: 'Kannst du das erklären?', en: 'Can you explain that?', fr: 'Peux-tu expliquer cela ?' } } },
    { kind: 'vocab', item: { id: 'b1l6-sparen', german: 'sparen', english: 'to save (money)', french: 'économiser', gender: null, syllables: ['SPA', 'ren'], pronunciation: 'SHPAH-ren', example: { de: 'Ich spare für ein Auto.', en: 'I’m saving for a car.', fr: 'J’économise pour une voiture.' } } },
    { kind: 'vocab', item: { id: 'b1l6-müde2', german: 'müde', english: 'tired', french: 'fatigué', gender: null, syllables: ['MÜ', 'de'], pronunciation: 'MUE-de', example: { de: 'Obwohl ich müde bin, arbeite ich.', en: 'Although I’m tired, I work.', fr: 'Bien que je sois fatigué, je travaille.' } } },

    { kind: 'grammar', note: {
      id: 'b1l6-obwohl-note', title: 'Concession with "obwohl"', titleFr: 'La concession avec « obwohl »',
      explanationMd: '**obwohl** (although) introduces a subordinate clause — the **verb goes to the end**:\n\n- **Obwohl** es **regnet**, gehe ich spazieren.\n- Ich gehe spazieren, **obwohl** es **regnet**.\n\nIt expresses a contrast/concession.',
      explanationMdFr: '**obwohl** (bien que) introduit une subordonnée — le **verbe va à la fin** :\n\n- **Obwohl** es **regnet**, gehe ich spazieren.\n- Ich gehe spazieren, **obwohl** es **regnet**.\n\nIl exprime un contraste/une concession.',
      examples: [
        { de: 'Obwohl ich müde bin, lerne ich weiter.', en: 'Although I’m tired, I keep studying.', fr: 'Bien que je sois fatigué, je continue d’étudier.' },
        { de: 'Er kam, obwohl er krank war.', en: 'He came although he was ill.', fr: 'Il est venu bien qu’il fût malade.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l6-deshalb-note', title: 'Consequence: deshalb / trotzdem', titleFr: 'Conséquence : deshalb / trotzdem',
      explanationMd: '**deshalb** (therefore) and **trotzdem** (nevertheless) are **adverbs**: they take **position 1**, so the verb comes **second**:\n\n- Es regnet. **Deshalb bleibe** ich zu Hause.\n- Es regnet. **Trotzdem gehe** ich raus.\n\n(Different from obwohl, which sends the verb to the end.)',
      explanationMdFr: '**deshalb** (c’est pourquoi) et **trotzdem** (malgré tout) sont des **adverbes** : ils occupent la **position 1**, donc le verbe vient **en deuxième** :\n\n- Es regnet. **Deshalb bleibe** ich zu Hause.\n- Es regnet. **Trotzdem gehe** ich raus.\n\n(À la différence de obwohl, qui envoie le verbe à la fin.)',
      examples: [
        { de: 'Ich habe keine Zeit, deshalb komme ich nicht.', en: 'I have no time, therefore I’m not coming.', fr: 'Je n’ai pas le temps, c’est pourquoi je ne viens pas.' },
        { de: 'Es war teuer. Trotzdem habe ich es gekauft.', en: 'It was expensive. Nevertheless I bought it.', fr: 'C’était cher. Malgré tout, je l’ai acheté.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l6-damit-note', title: 'Purpose with "damit"', titleFr: 'Le but avec « damit »',
      explanationMd: '**damit** (so that) gives a purpose and is a **subordinate** conjunction — the **verb goes to the end**:\n\n- Ich spare Geld, **damit** ich reisen **kann**.\n- Ich erkläre es langsam, **damit** du es **verstehst**.\n\nUse **damit** when the two clauses have **different** subjects.',
      explanationMdFr: '**damit** (pour que) donne un but et est une conjonction **subordonnée** — le **verbe va à la fin** :\n\n- Ich spare Geld, **damit** ich reisen **kann**.\n- Ich erkläre es langsam, **damit** du es **verstehst**.\n\nUtilise **damit** quand les deux propositions ont des sujets **différents**.',
      examples: [
        { de: 'Ich lerne Deutsch, damit ich in Wien arbeiten kann.', en: 'I learn German so that I can work in Vienna.', fr: 'J’apprends l’allemand pour pouvoir travailler à Vienne.' },
        { de: 'Sie spricht langsam, damit alle sie verstehen.', en: 'She speaks slowly so that everyone understands her.', fr: 'Elle parle lentement pour que tout le monde la comprenne.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l6-e1', tokens: ['regnet', 'es', 'Obwohl'], answer: ['Obwohl', 'es', 'regnet'], hint: 'obwohl-clause: verb goes to the end.', hintFr: 'subordonnée obwohl : le verbe va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l6-e2', prompt: 'Which sentence has correct word order?', promptFr: 'Quelle phrase a le bon ordre des mots ?', options: ['Deshalb ich bleibe zu Hause.', 'Deshalb bleibe ich zu Hause.', 'Deshalb zu Hause ich bleibe.'], answer: 1, explain: '"deshalb" is position 1, so the verb comes second.', explainFr: '« deshalb » est en position 1, donc le verbe vient en deuxième.', hint: 'Verb second after "deshalb".', hintFr: 'Verbe en deuxième après « deshalb ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l6-e3', prompt: 'Ich spare, ___ ich reisen kann. (so that)', answer: 'damit', hint: 'purpose conjunction', hintFr: 'conjonction de but' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l6-e4', pairs: [ { de: 'obwohl', en: 'although', fr: 'bien que' }, { de: 'deshalb', en: 'therefore', fr: 'c’est pourquoi' }, { de: 'damit', en: 'so that', fr: 'pour que' } ], hint: 'Match each connector to its meaning.', hintFr: 'Associe chaque connecteur à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l6-e5', prompt: 'Listen. Why is Ben staying home?', promptFr: 'Écoute. Pourquoi Ben reste-t-il à la maison ?', audio: { ttsText: 'Ich bin sehr müde, deshalb bleibe ich heute zu Hause.' }, options: ['Because he is tired', 'Because it rains', 'Because he has no money'], optionsFr: ['Parce qu’il est fatigué', 'Parce qu’il pleut', 'Parce qu’il n’a pas d’argent'], answer: 0, hint: 'Listen before "deshalb".', hintFr: 'Écoute avant « deshalb ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l6-e6', tokens: ['ich', 'gehe', 'Trotzdem', 'raus'], answer: ['Trotzdem', 'gehe', 'ich', 'raus'], hint: '"Trotzdem" in position 1 → verb second.', hintFr: '« Trotzdem » en position 1 → verbe en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l6-e7', prompt: 'Which connector sends the verb to the END?', promptFr: 'Quel connecteur envoie le verbe à la FIN ?', options: ['deshalb', 'trotzdem', 'obwohl'], answer: 2, explain: '"obwohl" is subordinating → verb at the end.', explainFr: '« obwohl » est subordonnant → verbe à la fin.', hint: 'The concession one is subordinating.', hintFr: 'Celui de concession est subordonnant.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l6-e8', prompt: '___ es teuer war, habe ich es gekauft. (although)', answer: 'Obwohl', hint: 'concession, verb to the end', hintFr: 'concession, verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l6-e9', tokens: ['verstehst', 'du', 'es', 'damit'], answer: ['damit', 'du', 'es', 'verstehst'], hint: 'damit-clause: verb at the end.', hintFr: 'subordonnée damit : verbe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l6-e10', prompt: 'Listen. Why does Ana learn German?', promptFr: 'Écoute. Pourquoi Ana apprend-elle l’allemand ?', audio: { ttsText: 'Ich lerne Deutsch, damit ich in Deutschland studieren kann.' }, options: ['So she can study in Germany', 'Because it is easy', 'Although it is hard'], optionsFr: ['Pour pouvoir étudier en Allemagne', 'Parce que c’est facile', 'Bien que ce soit difficile'], answer: 0, hint: 'Listen after "damit".', hintFr: 'Écoute après « damit ».' } },

    { kind: 'pronunciation', focus: 'Stress: obWOHL and daMIT stress the second syllable; DEShalb and TROTZdem the first', focusFr: 'Accent : obWOHL et daMIT accentuent la deuxième syllabe ; DEShalb et TROTZdem la première', items: [
      { id: 'b1l6-obwohl-pron', german: 'obwohl', english: 'although', french: 'bien que', gender: null, syllables: ['ob', 'WOHL'], pronunciation: 'op-VOHL', example: { de: 'Obwohl es spät ist.', en: 'Although it is late.', fr: 'Bien qu’il soit tard.' } },
      { id: 'b1l6-damit-pron', german: 'damit', english: 'so that', french: 'pour que', gender: null, syllables: ['da', 'MIT'], pronunciation: 'dah-MIT', example: { de: 'Damit du es weißt.', en: 'So that you know.', fr: 'Pour que tu le saches.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now connect ideas: **obwohl** (although) and **damit** (so that) send the verb to the **end**, while **deshalb** (therefore) and **trotzdem** (nevertheless) sit in position 1 with the verb **second**. 🎉',
      summaryFr: 'Tu sais maintenant relier les idées : **obwohl** (bien que) et **damit** (pour que) envoient le verbe à la **fin**, tandis que **deshalb** (c’est pourquoi) et **trotzdem** (malgré tout) sont en position 1 avec le verbe **en deuxième**. 🎉' },
  ],
};

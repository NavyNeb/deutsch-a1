import type { Lesson } from '../types';

export const b2lektion3: Lesson = {
  id: 'b2-l3', level: 'B2', module: 1, number: 3,
  title: { de: 'Nominalisierung', en: 'Nominalisation', fr: 'La nominalisation' },
  theme: 'Turning verbs and adjectives into nouns (-ung, -heit, -keit, das + infinitive) and the nominal style of formal texts',
  themeFr: 'Transformer verbes et adjectifs en noms (-ung, -heit, -keit, das + infinitif) et le style nominal des textes formels',
  goals: ['Form nouns with -ung, -heit/-keit and the infinitive', 'Know the gender of derived nouns', 'Recognise nominal style in news and official texts', 'Rewrite a clause as a noun phrase'],
  goalsFr: ['Former des noms avec -ung, -heit/-keit et l’infinitif', 'Connaître le genre des noms dérivés', 'Reconnaître le style nominal dans les articles et textes officiels', 'Réécrire une proposition sous forme de groupe nominal'],
  steps: [
    { kind: 'intro', title: 'Aus Verben werden Nomen 🔄', titleFr: 'Des verbes deviennent des noms 🔄',
      scene: 'Reading a newspaper article full of long noun phrases.', sceneFr: 'Lire un article de journal plein de longs groupes nominaux.',
      goals: ['Spot noun endings that signal gender', 'Turn verbs into nouns', 'Understand dense formal sentences', 'Write in a more formal style'],
      goalsFr: ['Repérer les terminaisons qui indiquent le genre', 'Transformer des verbes en noms', 'Comprendre des phrases formelles denses', 'Écrire dans un style plus formel'] },

    { kind: 'vocab', item: { id: 'b2l3-entwicklung', german: 'die Entwicklung', english: 'the development', french: 'le développement', gender: 'die', syllables: ['ent', 'WICK', 'lung'], pronunciation: 'dee ent-VIK-loong', example: { de: 'Die Entwicklung der Preise ist besorgniserregend.', en: 'The development of prices is worrying.', fr: 'L’évolution des prix est inquiétante.' } } },
    { kind: 'vocab', item: { id: 'b2l3-veraenderung', german: 'die Veränderung', english: 'the change', french: 'le changement', gender: 'die', syllables: ['ver', 'ÄN', 'de', 'rung'], pronunciation: 'dee fer-EN-de-roong', example: { de: 'Die Veränderung kam schnell.', en: 'The change came quickly.', fr: 'Le changement est venu vite.' } } },
    { kind: 'vocab', item: { id: 'b2l3-moeglichkeit', german: 'die Möglichkeit', english: 'the possibility', french: 'la possibilité', gender: 'die', syllables: ['MÖG', 'lich', 'keit'], pronunciation: 'dee MOEG-likh-kite', example: { de: 'Es gibt mehrere Möglichkeiten.', en: 'There are several possibilities.', fr: 'Il y a plusieurs possibilités.' } } },
    { kind: 'vocab', item: { id: 'b2l3-schwierigkeit', german: 'die Schwierigkeit', english: 'the difficulty', french: 'la difficulté', gender: 'die', syllables: ['SCHWIE', 'rig', 'keit'], pronunciation: 'dee SHVEE-rikh-kite', example: { de: 'Wir haben Schwierigkeiten mit dem Projekt.', en: 'We have difficulties with the project.', fr: 'Nous avons des difficultés avec le projet.' } } },
    { kind: 'vocab', item: { id: 'b2l3-gesundheit', german: 'die Gesundheit', english: 'health', french: 'la santé', gender: 'die', syllables: ['ge', 'SUND', 'heit'], pronunciation: 'dee ge-ZOONT-hite', example: { de: 'Gesundheit ist wichtiger als Geld.', en: 'Health is more important than money.', fr: 'La santé est plus importante que l’argent.' } } },
    { kind: 'vocab', item: { id: 'b2l3-ankunft', german: 'die Ankunft', english: 'the arrival', french: 'l’arrivée', gender: 'die', syllables: ['AN', 'kunft'], pronunciation: 'dee AHN-koonft', example: { de: 'Nach der Ankunft rufe ich an.', en: 'After arrival I will call.', fr: 'Après l’arrivée, j’appellerai.' } } },
    { kind: 'vocab', item: { id: 'b2l3-erhoehung', german: 'die Erhöhung', english: 'the increase', french: 'l’augmentation', gender: 'die', syllables: ['er', 'HÖ', 'hung'], pronunciation: 'dee er-HOE-oong', example: { de: 'Die Erhöhung der Mieten ärgert viele.', en: 'The rent increase annoys many.', fr: 'L’augmentation des loyers énerve beaucoup de gens.' } } },
    { kind: 'vocab', item: { id: 'b2l3-das-lesen', german: 'das Lesen', english: 'reading', french: 'la lecture', gender: 'das', syllables: ['das', 'LE', 'sen'], pronunciation: 'das LAY-zen', example: { de: 'Beim Lesen vergesse ich die Zeit.', en: 'While reading I forget the time.', fr: 'En lisant, j’oublie le temps.' } } },
    { kind: 'vocab', item: { id: 'b2l3-begruessung', german: 'die Begrüßung', english: 'the greeting', french: 'l’accueil', gender: 'die', syllables: ['be', 'GRÜ', 'ßung'], pronunciation: 'dee be-GRUE-soong', example: { de: 'Die Begrüßung war herzlich.', en: 'The greeting was warm.', fr: 'L’accueil était chaleureux.' } } },
    { kind: 'vocab', item: { id: 'b2l3-verbesserung', german: 'die Verbesserung', english: 'the improvement', french: 'l’amélioration', gender: 'die', syllables: ['ver', 'BES', 'se', 'rung'], pronunciation: 'dee fer-BES-se-roong', example: { de: 'Wir wünschen eine Verbesserung der Lage.', en: 'We wish for an improvement of the situation.', fr: 'Nous souhaitons une amélioration de la situation.' } } },

    { kind: 'grammar', note: {
      id: 'b2l3-forms-note', title: 'Building nouns: endings tell you the gender', titleFr: 'Former des noms : la terminaison indique le genre',
      explanationMd: 'Common patterns:\n\n- **verb stem + -ung** → **die**: entwickeln → die Entwicklung, ändern → die Änderung\n- **adjective + -heit / -keit** → **die**: gesund → die Gesundheit, möglich → die Möglichkeit\n- **stem-only nouns** (often **die**, learn them as they come): ankommen → die Ankunft, abfahren → die Abfahrt\n- **infinitive → noun** → **das**: lesen → das Lesen (often after *beim*, *zum*)\n\nAlmost all **-ung, -heit, -keit** nouns are **feminine**.',
      explanationMdFr: 'Schémas courants :\n\n- **radical du verbe + -ung** → **die** : entwickeln → die Entwicklung, ändern → die Änderung\n- **adjectif + -heit / -keit** → **die** : gesund → die Gesundheit, möglich → die Möglichkeit\n- **noms formés sur le radical** (souvent **die**, à apprendre au fur et à mesure) : ankommen → die Ankunft, abfahren → die Abfahrt\n- **infinitif → nom** → **das** : lesen → das Lesen (souvent après *beim*, *zum*)\n\nPresque tous les noms en **-ung, -heit, -keit** sont **féminins**.',
      examples: [
        { de: 'Die Entwicklung der Technik geht schnell.', en: 'The development of technology is fast.', fr: 'Le développement de la technique est rapide.' },
        { de: 'Beim Lesen entspanne ich mich.', en: 'When reading I relax.', fr: 'En lisant, je me détends.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b2l3-style-note', title: 'Nominal style: clause → noun phrase', titleFr: 'Style nominal : proposition → groupe nominal',
      explanationMd: 'Formal texts replace **clauses** with **noun phrases** (the subject often goes into the genitive or after **von**):\n\n- *Weil die Preise steigen, …* → **Wegen der Preissteigerung** …\n- *Nachdem er angekommen war, …* → **Nach seiner Ankunft** …\n- *Wenn man das Gesetz ändert, …* → **Bei einer Änderung des Gesetzes** …\n\nNominal style is compact; spoken German prefers verbs. Learn to **read** it (B2) and to **use** it in formal writing.',
      explanationMdFr: 'Les textes formels remplacent les **propositions** par des **groupes nominaux** (le sujet passe souvent au génitif ou après **von**) :\n\n- *Weil die Preise steigen, …* → **Wegen der Preissteigerung** …\n- *Nachdem er angekommen war, …* → **Nach seiner Ankunft** …\n- *Wenn man das Gesetz ändert, …* → **Bei einer Änderung des Gesetzes** …\n\nLe style nominal est compact ; l’oral préfère les verbes. Apprends à le **lire** (B2) et à l’**utiliser** à l’écrit formel.',
      examples: [
        { de: 'Nach seiner Ankunft rief er sofort an.', en: 'After his arrival he called immediately.', fr: 'Après son arrivée, il a appelé aussitôt.' },
        { de: 'Wegen der Erhöhung der Mieten protestieren viele.', en: 'Because of the rent increase many protest.', fr: 'À cause de l’augmentation des loyers, beaucoup protestent.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b2l3-e1', word: 'Entwicklung', answer: 'die', hint: '-ung → die', hintFr: '-ung → die' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b2l3-e2', word: 'Möglichkeit', answer: 'die', hint: '-keit → die', hintFr: '-keit → die' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b2l3-e3', word: 'Lesen (reading)', answer: 'das', hint: 'infinitive as noun → das', hintFr: 'infinitif substantivé → das' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l3-e4', prompt: 'gesund → die ___ (health)', answer: 'Gesundheit', hint: 'adjective + -heit', hintFr: 'adjectif + -heit' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l3-e5', prompt: 'Rewrite as a noun phrase: "Nachdem er angekommen war, …"', promptFr: 'Réécris en groupe nominal : « Nachdem er angekommen war, … »', options: ['Nach seiner Ankunft …', 'Wegen seiner Ankunft …', 'Bei seiner Ankunft sein …'], answer: 0, explain: '"nachdem" → "nach" + noun (Ankunft).', explainFr: '« nachdem » → « nach » + nom (Ankunft).', hint: 'nachdem → nach', hintFr: 'nachdem → nach' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l3-e6', prompt: 'ändern → die ___ (change)', answer: 'Änderung', hint: 'stem + -ung', hintFr: 'radical + -ung' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l3-e7', pairs: [ { de: 'die Entwicklung', en: 'development', fr: 'développement' }, { de: 'die Erhöhung', en: 'increase', fr: 'augmentation' }, { de: 'die Verbesserung', en: 'improvement', fr: 'amélioration' }, { de: 'die Begrüßung', en: 'greeting', fr: 'accueil' } ], hint: 'Match each noun to its meaning.', hintFr: 'Associe chaque nom à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l3-e8', prompt: 'Listen. What does the sentence say?', promptFr: 'Écoute. Que dit la phrase ?', audio: { ttsText: 'Wegen der Erhöhung der Mieten protestieren viele Menschen.' }, options: ['People protest because rents are going up', 'Rents are going down', 'People are moving'], optionsFr: ['Les gens protestent car les loyers montent', 'Les loyers baissent', 'Les gens déménagent'], answer: 0, hint: 'Erhöhung = increase.', hintFr: 'Erhöhung = augmentation.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l3-e9', tokens: ['rief', 'Nach', 'seiner', 'Ankunft', 'er', 'an'], answer: ['Nach', 'seiner', 'Ankunft', 'rief', 'er', 'an'], hint: 'Noun phrase first, then verb in position 2.', hintFr: 'Groupe nominal d’abord, puis verbe en 2e position.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l3-e10', prompt: 'Which noun is NOT feminine?', promptFr: 'Quel nom n’est PAS féminin ?', options: ['die Schwierigkeit', 'das Lesen', 'die Begrüßung'], answer: 1, explain: 'Infinitives used as nouns are neuter (das).', explainFr: 'Les infinitifs substantivés sont neutres (das).', hint: '-keit and -ung are feminine.', hintFr: '-keit et -ung sont féminins.' } },

    { kind: 'pronunciation', focus: 'The endings -ung, -heit, -keit are unstressed; stress the stem: "EntWICKlung", "GeSUNDheit", "MÖGlichkeit"', focusFr: 'Les terminaisons -ung, -heit, -keit sont atones ; accentue le radical : « EntWICKlung », « GeSUNDheit », « MÖGlichkeit »', items: [
      { id: 'b2l3-entwicklung-pron', german: 'Entwicklung', english: 'development', french: 'développement', gender: null, syllables: ['ent', 'WICK', 'lung'], pronunciation: 'ent-VIK-loong', example: { de: 'Die Entwicklung ist positiv.', en: 'The development is positive.', fr: 'Le développement est positif.' } },
      { id: 'b2l3-moeglichkeit-pron', german: 'Möglichkeit', english: 'possibility', french: 'possibilité', gender: null, syllables: ['MÖG', 'lich', 'keit'], pronunciation: 'MOEG-likh-kite', example: { de: 'Das ist eine Möglichkeit.', en: 'That is one possibility.', fr: 'C’est une possibilité.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now form nouns with **-ung, -heit/-keit** (always **die**) and the nominalised infinitive (**das Lesen**), and read formal **nominal style**: *Weil die Preise steigen* → *Wegen der Preissteigerung*. 🎉',
      summaryFr: 'Tu sais maintenant former des noms en **-ung, -heit/-keit** (toujours **die**) et l’infinitif substantivé (**das Lesen**), et lire le **style nominal** : *Weil die Preise steigen* → *Wegen der Preissteigerung*. 🎉' },
  ],
};

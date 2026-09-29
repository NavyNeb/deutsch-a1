import type { Lesson } from '../types';

export const b1lektion4: Lesson = {
  id: 'b1-l4', level: 'B1', module: 2, number: 4,
  title: { de: 'Der Genitiv', en: 'The genitive case', fr: 'Le génitif' },
  theme: 'Possession and genitive prepositions (wegen, während, trotz)',
  themeFr: 'La possession et les prépositions au génitif (wegen, während, trotz)',
  goals: ['Show possession with the genitive (des/der)', 'Add -(e)s to masculine/neuter nouns', 'Use names in the genitive (Annas Buch)', 'Use wegen, während and trotz'],
  goalsFr: ['Exprimer la possession avec le génitif (des/der)', 'Ajouter -(e)s aux noms masculins/neutres', 'Utiliser les noms propres au génitif (Annas Buch)', 'Utiliser wegen, während et trotz'],
  steps: [
    { kind: 'intro', title: 'Das Auto des Mannes 🚗', titleFr: 'La voiture de l’homme 🚗',
      scene: 'Talking about who owns what and giving reasons.', sceneFr: 'On parle de ce qui appartient à qui et on donne des raisons.',
      goals: ['Use the genitive articles des/der', 'Add -(e)s to nouns', 'Use the genitive with names', 'Use genitive prepositions'],
      goalsFr: ['Utiliser les articles du génitif des/der', 'Ajouter -(e)s aux noms', 'Utiliser le génitif avec les noms propres', 'Utiliser les prépositions au génitif'] },

    { kind: 'vocab', item: { id: 'b1l4-titel', german: 'der Titel', english: 'the title', french: 'le titre', gender: 'der', syllables: ['TI', 'tel'], pronunciation: 'dair TEE-tel', example: { de: 'der Titel des Buches', en: 'the title of the book', fr: 'le titre du livre' } } },
    { kind: 'vocab', item: { id: 'b1l4-ende', german: 'das Ende', english: 'the end', french: 'la fin', gender: 'das', syllables: ['EN', 'de'], pronunciation: 'dahs EN-de', example: { de: 'das Ende des Films', en: 'the end of the film', fr: 'la fin du film' } } },
    { kind: 'vocab', item: { id: 'b1l4-anfang', german: 'der Anfang', english: 'the beginning', french: 'le début', gender: 'der', syllables: ['AN', 'fang'], pronunciation: 'dair AHN-fahng', example: { de: 'am Anfang des Jahres', en: 'at the beginning of the year', fr: 'au début de l’année' } } },
    { kind: 'vocab', item: { id: 'b1l4-wegen', german: 'wegen', english: 'because of', french: 'à cause de', gender: null, syllables: ['WE', 'gen'], pronunciation: 'VAY-gen', example: { de: 'wegen des Wetters', en: 'because of the weather', fr: 'à cause du temps' } } },
    { kind: 'vocab', item: { id: 'b1l4-waehrend', german: 'während', english: 'during', french: 'pendant', gender: null, syllables: ['WÄH', 'rend'], pronunciation: 'VAY-rent', example: { de: 'während der Woche', en: 'during the week', fr: 'pendant la semaine' } } },
    { kind: 'vocab', item: { id: 'b1l4-trotz', german: 'trotz', english: 'despite', french: 'malgré', gender: null, syllables: ['TROTZ'], pronunciation: 'trots', example: { de: 'trotz des Regens', en: 'despite the rain', fr: 'malgré la pluie' } } },
    { kind: 'vocab', item: { id: 'b1l4-chef', german: 'der Chef', english: 'the boss', french: 'le chef / patron', gender: 'der', syllables: ['CHEF'], pronunciation: 'dair SHEF', example: { de: 'das Büro des Chefs', en: 'the boss’s office', fr: 'le bureau du chef' } } },
    { kind: 'vocab', item: { id: 'b1l4-meinung', german: 'die Meinung', english: 'the opinion', french: 'l’avis / opinion', gender: 'die', syllables: ['MEI', 'nung'], pronunciation: 'dee MY-noong', example: { de: 'die Meinung der Leute', en: 'the opinion of the people', fr: 'l’avis des gens' } } },
    { kind: 'vocab', item: { id: 'b1l4-datum', german: 'das Datum', english: 'the date', french: 'la date', gender: 'das', syllables: ['DA', 'tum'], pronunciation: 'dahs DAH-toom', example: { de: 'das Datum der Prüfung', en: 'the date of the exam', fr: 'la date de l’examen' } } },
    { kind: 'vocab', item: { id: 'b1l4-farbe2', german: 'die Farbe', english: 'the colour', french: 'la couleur', gender: 'die', syllables: ['FAR', 'be'], pronunciation: 'dee FAR-be', example: { de: 'die Farbe des Autos', en: 'the colour of the car', fr: 'la couleur de la voiture' } } },

    { kind: 'grammar', note: {
      id: 'b1l4-genitiv-artikel', title: 'The genitive articles', titleFr: 'Les articles du génitif',
      explanationMd: 'The genitive shows possession ("of the …"):\n\n- masc/neut → **des** + noun **-(e)s**: das Auto **des Mannes**, der Titel **des Buches**\n- fem/plural → **der** (noun unchanged): die Farbe **der Blume**, die Meinung **der Leute**\n\nShort masculine/neuter nouns often take **-es** (des Mann**es**), longer ones just **-s** (des Chef**s**).',
      explanationMdFr: 'Le génitif exprime la possession (« de … ») :\n\n- masc/neutre → **des** + nom **-(e)s** : das Auto **des Mannes**, der Titel **des Buches**\n- fém/pluriel → **der** (nom inchangé) : die Farbe **der Blume**, die Meinung **der Leute**\n\nLes noms masc/neutres courts prennent souvent **-es** (des Mann**es**), les plus longs juste **-s** (des Chef**s**).',
      examples: [
        { de: 'Das ist das Haus meiner Eltern.', en: 'That is my parents’ house.', fr: 'C’est la maison de mes parents.' },
        { de: 'Die Farbe des Autos ist rot.', en: 'The colour of the car is red.', fr: 'La couleur de la voiture est rouge.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l4-namen', title: 'Names in the genitive', titleFr: 'Les noms propres au génitif',
      explanationMd: 'With names, add **-s** (no apostrophe in standard German) and put it **before** the noun — like English "’s":\n\n- **Annas** Auto — Anna’s car\n- **Toms** Idee — Tom’s idea\n\nThis is the most common genitive in everyday speech.',
      explanationMdFr: 'Avec les noms propres, ajoute **-s** (sans apostrophe en allemand standard) et place-le **avant** le nom — comme le « ’s » anglais :\n\n- **Annas** Auto — la voiture d’Anna\n- **Toms** Idee — l’idée de Tom\n\nC’est le génitif le plus courant à l’oral.',
      examples: [
        { de: 'Das ist Peters Fahrrad.', en: 'That is Peter’s bike.', fr: 'C’est le vélo de Peter.' },
        { de: 'Marias Wohnung ist groß.', en: 'Maria’s flat is big.', fr: 'L’appartement de Maria est grand.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l4-praepositionen', title: 'Genitive prepositions', titleFr: 'Les prépositions au génitif',
      explanationMd: 'A few common prepositions take the genitive:\n\n- **wegen** (because of) — wegen **des** Wetters\n- **während** (during) — während **der** Woche\n- **trotz** (despite) — trotz **des** Regens',
      explanationMdFr: 'Quelques prépositions courantes régissent le génitif :\n\n- **wegen** (à cause de) — wegen **des** Wetters\n- **während** (pendant) — während **der** Woche\n- **trotz** (malgré) — trotz **des** Regens',
      examples: [
        { de: 'Wegen des Streiks fährt kein Bus.', en: 'Because of the strike, no bus is running.', fr: 'À cause de la grève, aucun bus ne circule.' },
        { de: 'Trotz des Regens gehen wir spazieren.', en: 'Despite the rain, we go for a walk.', fr: 'Malgré la pluie, nous allons nous promener.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e1', prompt: 'das Auto ___ Mannes (genitive: der → ?)', answer: 'des', hint: 'masculine genitive article → des', hintFr: 'article génitif masculin → des' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e2', prompt: 'die Farbe ___ Blume (genitive: die → ?)', answer: 'der', hint: 'feminine genitive article → der', hintFr: 'article génitif féminin → der' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l4-e3', prompt: 'Which is correct?', promptFr: 'Quelle forme est correcte ?', options: ['der Titel des Buch', 'der Titel des Buches', 'der Titel der Buch'], answer: 1, explain: 'Neuter genitive: des + Buch + es → des Buches.', explainFr: 'Génitif neutre : des + Buch + es → des Buches.', hint: 'Add -es to the noun.', hintFr: 'Ajoute -es au nom.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e4', prompt: '___ Auto ist neu. (Anna, genitive with a name)', answer: 'Annas', hint: 'add -s to the name', hintFr: 'ajoute -s au nom propre' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l4-e5', pairs: [ { de: 'wegen', en: 'because of', fr: 'à cause de' }, { de: 'während', en: 'during', fr: 'pendant' }, { de: 'trotz', en: 'despite', fr: 'malgré' } ], hint: 'Match each genitive preposition to its meaning.', hintFr: 'Associe chaque préposition au génitif à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l4-e6', prompt: 'Listen. Why is no bus running?', promptFr: 'Écoute. Pourquoi aucun bus ne circule ?', audio: { ttsText: 'Wegen des Streiks fährt heute kein Bus.' }, options: ['Because of a strike', 'Because of the weather', 'Because of a holiday'], optionsFr: ['À cause d’une grève', 'À cause du temps', 'À cause d’un jour férié'], answer: 0, hint: 'Listen after "wegen des".', hintFr: 'Écoute après « wegen des ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l4-e7', prompt: 'während ___ Woche (genitive: die → ?)', answer: 'der', hint: 'feminine genitive → der', hintFr: 'génitif féminin → der' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l4-e8', prompt: 'What does "trotz des Regens" mean?', promptFr: 'Que signifie « trotz des Regens » ?', options: ['because of the rain', 'despite the rain', 'during the rain'], optionsFr: ['à cause de la pluie', 'malgré la pluie', 'pendant la pluie'], answer: 1, explain: '"trotz" = despite.', explainFr: '« trotz » = malgré.', hint: 'Concession, not cause.', hintFr: 'Concession, pas cause.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l4-e9', tokens: ['des', 'ist', 'Das Ende', 'traurig', 'Films'], answer: ['Das Ende', 'des', 'Films', 'ist', 'traurig'], hint: 'Genitive phrase "des Films", then verb + adjective.', hintFr: 'Groupe au génitif « des Films », puis verbe + adjectif.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l4-e10', prompt: 'Listen. Whose flat is big?', promptFr: 'Écoute. L’appartement de qui est grand ?', audio: { ttsText: 'Marias Wohnung ist wirklich groß und hell.' }, options: ['Maria’s', 'Peter’s', 'The boss’s'], optionsFr: ['De Maria', 'De Peter', 'Du chef'], answer: 0, hint: 'Listen for the name + s.', hintFr: 'Écoute le nom propre + s.' } },

    { kind: 'pronunciation', focus: 'The genitive -s/-es is a light ending; "während" has a long ä ("VAY-rent")', focusFr: 'Le -s/-es du génitif est une terminaison légère ; « während » a un ä long (« VAY-rent »)', items: [
      { id: 'b1l4-waehrend-pron', german: 'während', english: 'during', french: 'pendant', gender: null, syllables: ['WÄH', 'rend'], pronunciation: 'VAY-rent', example: { de: 'während des Tages', en: 'during the day', fr: 'pendant la journée' } },
      { id: 'b1l4-wegen-pron', german: 'wegen', english: 'because of', french: 'à cause de', gender: null, syllables: ['WE', 'gen'], pronunciation: 'VAY-gen', example: { de: 'wegen der Arbeit', en: 'because of work', fr: 'à cause du travail' } },
    ] },

    { kind: 'wrapup', summary: 'You can now show possession with the **genitive**: **des** + noun-(e)s (masc/neut) and **der** (fem/plural), names take **-s** (Annas Auto), and the prepositions **wegen, während, trotz** take the genitive. 🎉',
      summaryFr: 'Tu sais maintenant exprimer la possession avec le **génitif** : **des** + nom-(e)s (masc/neutre) et **der** (fém/pluriel), les noms propres prennent **-s** (Annas Auto), et les prépositions **wegen, während, trotz** régissent le génitif. 🎉' },
  ],
};

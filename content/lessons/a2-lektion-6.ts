import type { Lesson } from '../types';

export const a2lektion6: Lesson = {
  id: 'a2-l6', level: 'A2', module: 3, number: 12,
  title: { de: 'Kleidung und Aussehen', en: 'Clothes and appearance', fr: 'Les vêtements et l’apparence' },
  theme: 'Clothing, colours, and describing how people look',
  themeFr: 'Les vêtements, les couleurs et décrire l’apparence des gens',
  goals: ['Name clothes and colours', 'Use the verb "tragen" (to wear)', 'Say what you put on with "anziehen"', 'Describe how someone looks with "aussehen"'],
  goalsFr: ['Nommer les vêtements et les couleurs', 'Utiliser le verbe « tragen » (porter)', 'Dire ce qu’on met avec « anziehen »', 'Décrire l’apparence avec « aussehen »'],
  steps: [
    { kind: 'intro', title: 'Was trägst du? 👕', titleFr: 'Que portes-tu ? 👕',
      scene: 'Getting dressed and describing an outfit.', sceneFr: 'On s’habille et on décrit une tenue.',
      goals: ['Name clothes and colours', 'Use "tragen"', 'Use the separable verb "anziehen"', 'Describe appearance with "aussehen"'],
      goalsFr: ['Nommer les vêtements et les couleurs', 'Utiliser « tragen »', 'Utiliser le verbe à particule « anziehen »', 'Décrire l’apparence avec « aussehen »'] },

    { kind: 'vocab', item: { id: 'a2l6-kleidung', german: 'die Kleidung', english: 'the clothing', french: 'les vêtements', gender: 'die', syllables: ['KLEI', 'dung'], pronunciation: 'dee KLY-doong', example: { de: 'Die Kleidung ist neu.', en: 'The clothing is new.', fr: 'Les vêtements sont neufs.' } } },
    { kind: 'vocab', item: { id: 'a2l6-hemd', german: 'das Hemd', english: 'the shirt', french: 'la chemise', gender: 'das', syllables: ['HEMD'], pronunciation: 'dahs HEMT', example: { de: 'Das Hemd ist weiß.', en: 'The shirt is white.', fr: 'La chemise est blanche.' } } },
    { kind: 'vocab', item: { id: 'a2l6-hose', german: 'die Hose', english: 'the trousers', french: 'le pantalon', gender: 'die', syllables: ['HO', 'se'], pronunciation: 'dee HOH-ze', example: { de: 'Die Hose ist schwarz.', en: 'The trousers are black.', fr: 'Le pantalon est noir.' } } },
    { kind: 'vocab', item: { id: 'a2l6-jacke', german: 'die Jacke', english: 'the jacket', french: 'la veste', gender: 'die', syllables: ['JA', 'cke'], pronunciation: 'dee YAH-ke', example: { de: 'Die Jacke ist rot.', en: 'The jacket is red.', fr: 'La veste est rouge.' } } },
    { kind: 'vocab', item: { id: 'a2l6-schuhe', german: 'die Schuhe', english: 'the shoes', french: 'les chaussures', gender: 'die', syllables: ['SCHU', 'he'], pronunciation: 'dee SHOO-e', example: { de: 'Die Schuhe sind braun.', en: 'The shoes are brown.', fr: 'Les chaussures sont marron.' } } },
    { kind: 'vocab', item: { id: 'a2l6-tragen', german: 'tragen', english: 'to wear / carry', french: 'porter', gender: null, syllables: ['TRA', 'gen'], pronunciation: 'TRAH-gen', example: { de: 'Ich trage eine Jacke.', en: 'I am wearing a jacket.', fr: 'Je porte une veste.' } } },
    { kind: 'vocab', item: { id: 'a2l6-anziehen', german: 'anziehen', english: 'to put on', french: 'mettre / enfiler', gender: null, syllables: ['AN', 'zie', 'hen'], pronunciation: 'AHN-tsee-en', example: { de: 'Ich ziehe die Schuhe an.', en: 'I put on the shoes.', fr: 'Je mets les chaussures.' } } },
    { kind: 'vocab', item: { id: 'a2l6-farbe', german: 'die Farbe', english: 'the colour', french: 'la couleur', gender: 'die', syllables: ['FAR', 'be'], pronunciation: 'dee FAR-be', example: { de: 'Welche Farbe magst du?', en: 'Which colour do you like?', fr: 'Quelle couleur aimes-tu ?' } } },
    { kind: 'vocab', item: { id: 'a2l6-schoen', german: 'schön', english: 'beautiful / nice', french: 'beau / joli', gender: null, syllables: ['SCHÖN'], pronunciation: 'shoen', example: { de: 'Die Jacke ist schön.', en: 'The jacket is nice.', fr: 'La veste est jolie.' } } },
    { kind: 'vocab', item: { id: 'a2l6-aussehen', german: 'aussehen', english: 'to look / appear', french: 'avoir l’air', gender: null, syllables: ['AUS', 'se', 'hen'], pronunciation: 'OWS-say-en', example: { de: 'Du siehst gut aus!', en: 'You look good!', fr: 'Tu as l’air en forme !' } } },

    { kind: 'grammar', note: {
      id: 'a2l6-tragen-note', title: 'The verb "tragen" (to wear)', titleFr: 'Le verbe « tragen » (porter)',
      explanationMd: '**tragen** changes its vowel in the du/er forms (a → ä):\n\n- ich **trage** — I wear\n- du **trägst** — you wear\n- er/sie/es **trägt** — he/she/it wears',
      explanationMdFr: '**tragen** change de voyelle aux formes du/er (a → ä) :\n\n- ich **trage** — je porte\n- du **trägst** — tu portes\n- er/sie/es **trägt** — il/elle/on porte',
      examples: [
        { de: 'Sie trägt eine rote Jacke.', en: 'She is wearing a red jacket.', fr: 'Elle porte une veste rouge.' },
        { de: 'Was trägst du heute?', en: 'What are you wearing today?', fr: 'Que portes-tu aujourd’hui ?' },
      ],
      diagram: 'conjugation-table' } },

    { kind: 'grammar', note: {
      id: 'a2l6-farben', title: 'Colours', titleFr: 'Les couleurs',
      explanationMd: 'Common colours: **rot** (red), **blau** (blue), **grün** (green), **gelb** (yellow), **schwarz** (black), **weiß** (white), **braun** (brown).\n\nAfter **sein**, the colour has **no ending**:\n\n- Die Jacke **ist rot**. — The jacket is red.',
      explanationMdFr: 'Couleurs courantes : **rot** (rouge), **blau** (bleu), **grün** (vert), **gelb** (jaune), **schwarz** (noir), **weiß** (blanc), **braun** (marron).\n\nAprès **sein**, la couleur n’a **pas de terminaison** :\n\n- Die Jacke **ist rot**. — La veste est rouge.',
      examples: [
        { de: 'Das Hemd ist blau.', en: 'The shirt is blue.', fr: 'La chemise est bleue.' },
        { de: 'Meine Schuhe sind schwarz.', en: 'My shoes are black.', fr: 'Mes chaussures sont noires.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l6-aussehen-note', title: 'Describing looks: "aussehen"', titleFr: 'Décrire l’apparence : « aussehen »',
      explanationMd: '**aussehen** (to look/appear) is separable — the prefix **aus** goes to the end:\n\n- Wie **sieht** er **aus**? — How does he look?\n- Du **siehst** heute gut **aus**. — You look good today.\n\nUse **anziehen** to say what you put on: Ich **ziehe** eine Jacke **an**.',
      explanationMdFr: '**aussehen** (avoir l’air) est séparable — la particule **aus** va à la fin :\n\n- Wie **sieht** er **aus** ? — De quoi a-t-il l’air ?\n- Du **siehst** heute gut **aus**. — Tu as bonne mine aujourd’hui.\n\nUtilise **anziehen** pour dire ce qu’on met : Ich **ziehe** eine Jacke **an**.',
      examples: [
        { de: 'Wie sieht die Jacke aus?', en: 'What does the jacket look like?', fr: 'De quoi a l’air la veste ?' },
        { de: 'Ich ziehe eine warme Jacke an.', en: 'I put on a warm jacket.', fr: 'Je mets une veste chaude.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l6-e1', prompt: 'Ich ___ eine Jacke. (tragen — ich-form)', answer: 'trage', hint: 'first person singular of tragen', hintFr: 'première personne du singulier de tragen' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l6-e2', prompt: 'Du ___ ein blaues Hemd. (tragen — du-form)', answer: 'trägst', hint: 'du-form has an umlaut: a → ä', hintFr: 'la forme « du » a un tréma : a → ä' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l6-e3', word: 'Jacke', answer: 'die', hint: '"Jacke" is feminine.', hintFr: '« Jacke » est féminin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l6-e4', pairs: [ { de: 'rot', en: 'red', fr: 'rouge' }, { de: 'blau', en: 'blue', fr: 'bleu' }, { de: 'schwarz', en: 'black', fr: 'noir' } ], hint: 'Match each colour to its meaning.', hintFr: 'Associe chaque couleur à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l6-e5', prompt: 'Listen. What colour is the jacket?', promptFr: 'Écoute. De quelle couleur est la veste ?', audio: { ttsText: 'Ich trage heute eine rote Jacke und schwarze Schuhe.' }, options: ['Red', 'Blue', 'Green'], optionsFr: ['Rouge', 'Bleue', 'Verte'], answer: 0, hint: 'Listen for the colour before "Jacke".', hintFr: 'Écoute la couleur avant « Jacke ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l6-e6', prompt: 'How do you say "You look good"?', promptFr: 'Comment dit-on « Tu as bonne mine » ?', options: ['Du siehst gut aus.', 'Du bist gut aus.', 'Du aussiehst gut.'], answer: 0, explain: '"aussehen" is separable: Du siehst … aus.', explainFr: '« aussehen » est séparable : Du siehst … aus.', hint: 'The prefix "aus" goes to the end.', hintFr: 'La particule « aus » va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l6-e7', prompt: 'Das Hemd ist ___. (white)', answer: 'weiß', hint: 'the colour "white"', hintFr: 'la couleur « blanc »' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l6-e8', tokens: ['an', 'ziehe', 'eine', 'Jacke', 'Ich'], answer: ['Ich', 'ziehe', 'eine', 'Jacke', 'an'], hint: 'Separable verb: "an" goes to the very end.', hintFr: 'Verbe à particule : « an » va tout à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l6-e9', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Die Schuhe ist braun.', 'Die Schuhe sind braun.', 'Die Schuhe bin braun.'], answer: 1, explain: '"Schuhe" is plural → sind.', explainFr: '« Schuhe » est au pluriel → sind.', hint: 'Shoes are plural.', hintFr: 'Les chaussures sont au pluriel.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l6-e10', prompt: 'Listen. What is Nina putting on?', promptFr: 'Écoute. Que met Nina ?', audio: { ttsText: 'Es ist kalt. Ich ziehe eine warme Jacke an.' }, options: ['A warm jacket', 'Shoes', 'A shirt'], optionsFr: ['Une veste chaude', 'Des chaussures', 'Une chemise'], answer: 0, hint: 'Listen for what comes after "Ich ziehe".', hintFr: 'Écoute ce qui vient après « Ich ziehe ».' } },

    { kind: 'pronunciation', focus: 'The "ö" in schön is rounded, and "ei" in weiß is "eye" with a sharp ß', focusFr: 'Le « ö » de schön est arrondi, et « ei » de weiß est « aï » avec un ß net', items: [
      { id: 'a2l6-schoen-pron', german: 'schön', english: 'nice', french: 'joli', gender: null, syllables: ['SCHÖN'], pronunciation: 'shoen', example: { de: 'Die Jacke ist schön.', en: 'The jacket is nice.', fr: 'La veste est jolie.' } },
      { id: 'a2l6-weiss-pron', german: 'weiß', english: 'white', french: 'blanc', gender: null, syllables: ['WEISS'], pronunciation: 'vice', example: { de: 'Das Hemd ist weiß.', en: 'The shirt is white.', fr: 'La chemise est blanche.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now name clothes and colours, use **tragen** (du trägst) to say what you wear, **anziehen** to say what you put on, and **aussehen** (Du siehst gut aus) to describe how someone looks. 🎉',
      summaryFr: 'Tu sais maintenant nommer les vêtements et les couleurs, utiliser **tragen** (du trägst) pour dire ce que tu portes, **anziehen** pour dire ce que tu mets, et **aussehen** (Du siehst gut aus) pour décrire l’apparence. 🎉' },
  ],
};

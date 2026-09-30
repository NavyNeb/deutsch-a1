import type { Lesson } from '../types';

export const b1lektion5: Lesson = {
  id: 'b1-l5', level: 'B1', module: 5, number: 18,
  title: { de: 'Das Passiv', en: 'The passive voice', fr: 'La voix passive' },
  theme: 'The present passive (werden + participle) and the agent with "von"',
  themeFr: 'Le passif présent (werden + participe) et l’agent avec « von »',
  goals: ['Form the passive with "werden" + participle', 'Focus on the action instead of the doer', 'Turn active sentences into passive', 'Name the doer with "von"'],
  goalsFr: ['Former le passif avec « werden » + participe', 'Se concentrer sur l’action plutôt que sur l’auteur', 'Transformer l’actif en passif', 'Nommer l’auteur avec « von »'],
  steps: [
    { kind: 'intro', title: 'Das Haus wird gebaut 🏗️', titleFr: 'La maison est construite 🏗️',
      scene: 'Describing processes: what is done, not who does it.', sceneFr: 'On décrit des processus : ce qui est fait, pas qui le fait.',
      goals: ['Build the present passive', 'Understand active vs. passive', 'Transform sentences', 'Add the agent with "von"'],
      goalsFr: ['Construire le passif présent', 'Comprendre actif vs. passif', 'Transformer des phrases', 'Ajouter l’agent avec « von »'] },

    { kind: 'vocab', item: { id: 'b1l5-bauen', german: 'bauen', english: 'to build', french: 'construire', gender: null, syllables: ['BAU', 'en'], pronunciation: 'BOW-en', example: { de: 'Hier wird ein Haus gebaut.', en: 'A house is being built here.', fr: 'On construit une maison ici.' } } },
    { kind: 'vocab', item: { id: 'b1l5-reparieren', german: 'reparieren', english: 'to repair', french: 'réparer', gender: null, syllables: ['re', 'pa', 'RIE', 'ren'], pronunciation: 're-pah-REE-ren', example: { de: 'Das Auto wird repariert.', en: 'The car is being repaired.', fr: 'La voiture est réparée.' } } },
    { kind: 'vocab', item: { id: 'b1l5-verkaufen', german: 'verkaufen', english: 'to sell', french: 'vendre', gender: null, syllables: ['ver', 'KAU', 'fen'], pronunciation: 'fair-KOW-fen', example: { de: 'Hier werden Blumen verkauft.', en: 'Flowers are sold here.', fr: 'On vend des fleurs ici.' } } },
    { kind: 'vocab', item: { id: 'b1l5-benutzen', german: 'benutzen', english: 'to use', french: 'utiliser', gender: null, syllables: ['be', 'NUT', 'zen'], pronunciation: 'be-NOOT-sen', example: { de: 'Der Computer wird oft benutzt.', en: 'The computer is often used.', fr: 'L’ordinateur est souvent utilisé.' } } },
    { kind: 'vocab', item: { id: 'b1l5-herstellen', german: 'herstellen', english: 'to produce / make', french: 'produire / fabriquer', gender: null, syllables: ['HER', 'stel', 'len'], pronunciation: 'HAIR-shtel-len', example: { de: 'Autos werden in Deutschland hergestellt.', en: 'Cars are produced in Germany.', fr: 'Les voitures sont fabriquées en Allemagne.' } } },
    { kind: 'vocab', item: { id: 'b1l5-fabrik', german: 'die Fabrik', english: 'the factory', french: 'l’usine', gender: 'die', syllables: ['fa', 'BRIK'], pronunciation: 'dee fah-BREEK', example: { de: 'In der Fabrik werden Autos gebaut.', en: 'Cars are built in the factory.', fr: 'On construit des voitures à l’usine.' } } },
    { kind: 'vocab', item: { id: 'b1l5-produkt', german: 'das Produkt', english: 'the product', french: 'le produit', gender: 'das', syllables: ['pro', 'DUKT'], pronunciation: 'dahs pro-DOOKT', example: { de: 'Das Produkt wird getestet.', en: 'The product is tested.', fr: 'Le produit est testé.' } } },
    { kind: 'vocab', item: { id: 'b1l5-oeffnen', german: 'öffnen', english: 'to open', french: 'ouvrir', gender: null, syllables: ['ÖFF', 'nen'], pronunciation: 'OEF-nen', example: { de: 'Der Laden wird um neun geöffnet.', en: 'The shop is opened at nine.', fr: 'Le magasin est ouvert à neuf heures.' } } },
    { kind: 'vocab', item: { id: 'b1l5-schliessen', german: 'schließen', english: 'to close', french: 'fermer', gender: null, syllables: ['SCHLIE', 'ßen'], pronunciation: 'SHLEE-sen', example: { de: 'Die Bank wird um fünf geschlossen.', en: 'The bank is closed at five.', fr: 'La banque est fermée à cinq heures.' } } },
    { kind: 'vocab', item: { id: 'b1l5-kontrollieren', german: 'kontrollieren', english: 'to check / control', french: 'contrôler', gender: null, syllables: ['kon', 'tro', 'LLIE', 'ren'], pronunciation: 'kon-tro-LEE-ren', example: { de: 'Die Tickets werden kontrolliert.', en: 'The tickets are checked.', fr: 'Les billets sont contrôlés.' } } },

    { kind: 'grammar', note: {
      id: 'b1l5-passiv-form', title: 'The present passive: werden + participle', titleFr: 'Le passif présent : werden + participe',
      explanationMd: 'The passive focuses on the **action**, not the doer. Form it with **werden** (position 2) + the **participle** (end):\n\n- Das Haus **wird gebaut**. — The house is being built.\n- Die Autos **werden verkauft**. — The cars are (being) sold.\n\nSingular → **wird**, plural → **werden**.',
      explanationMdFr: 'Le passif met l’accent sur l’**action**, pas sur l’auteur. Forme-le avec **werden** (position 2) + le **participe** (fin) :\n\n- Das Haus **wird gebaut**. — La maison est construite.\n- Die Autos **werden verkauft**. — Les voitures sont vendues.\n\nSingulier → **wird**, pluriel → **werden**.',
      examples: [
        { de: 'Hier wird Deutsch gesprochen.', en: 'German is spoken here.', fr: 'On parle allemand ici.' },
        { de: 'Die Tickets werden kontrolliert.', en: 'The tickets are checked.', fr: 'Les billets sont contrôlés.' },
      ],
      diagram: 'satzklammer' } },

    { kind: 'grammar', note: {
      id: 'b1l5-aktiv-passiv', title: 'From active to passive', titleFr: 'De l’actif au passif',
      explanationMd: 'The **object** of the active sentence becomes the **subject** of the passive:\n\n- Active: **Man** repariert **das Auto**.\n- Passive: **Das Auto** wird repariert.\n\nThe passive is common for processes and rules, where the doer is unknown or unimportant.',
      explanationMdFr: 'L’**objet** de la phrase active devient le **sujet** du passif :\n\n- Actif : **Man** repariert **das Auto**.\n- Passif : **Das Auto** wird repariert.\n\nLe passif est courant pour les processus et les règles, quand l’auteur est inconnu ou sans importance.',
      examples: [
        { de: 'Man baut ein Haus. → Ein Haus wird gebaut.', en: 'One builds a house. → A house is built.', fr: 'On construit une maison. → Une maison est construite.' },
        { de: 'Man öffnet den Laden. → Der Laden wird geöffnet.', en: 'One opens the shop. → The shop is opened.', fr: 'On ouvre le magasin. → Le magasin est ouvert.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l5-von', title: 'Naming the doer with "von"', titleFr: 'Nommer l’auteur avec « von »',
      explanationMd: 'If you do want to name the doer, add **von** + **dative**:\n\n- Das Auto wird **von dem Mechaniker** repariert.\n- Das Haus wird **von der Firma** gebaut.\n\nBut often the doer is left out — that’s the point of the passive.',
      explanationMdFr: 'Si tu veux nommer l’auteur, ajoute **von** + **datif** :\n\n- Das Auto wird **von dem Mechaniker** repariert.\n- Das Haus wird **von der Firma** gebaut.\n\nMais souvent l’auteur est omis — c’est justement l’intérêt du passif.',
      examples: [
        { de: 'Der Brief wird von der Chefin geschrieben.', en: 'The letter is written by the boss.', fr: 'La lettre est écrite par la cheffe.' },
        { de: 'Das Essen wird von einem Koch gekocht.', en: 'The food is cooked by a cook.', fr: 'Le repas est cuisiné par un cuisinier.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l5-e1', prompt: 'Das Haus ___ gebaut. (werden — singular)', answer: 'wird', hint: 'singular passive → wird', hintFr: 'passif singulier → wird' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l5-e2', prompt: 'Die Autos ___ verkauft. (werden — plural)', answer: 'werden', hint: 'plural passive → werden', hintFr: 'passif pluriel → werden' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l5-e3', prompt: 'Which sentence is passive?', promptFr: 'Quelle phrase est au passif ?', options: ['Man baut ein Haus.', 'Ein Haus wird gebaut.', 'Ich baue ein Haus.'], answer: 1, explain: 'Passive = werden + participle: wird gebaut.', explainFr: 'Passif = werden + participe : wird gebaut.', hint: 'Look for "wird/werden" + participle.', hintFr: 'Cherche « wird/werden » + participe.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l5-e4', tokens: ['repariert', 'wird', 'Das Auto'], answer: ['Das Auto', 'wird', 'repariert'], hint: 'Subject, "wird", participle at the end.', hintFr: 'Sujet, « wird », participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l5-e5', pairs: [ { de: 'bauen', en: 'gebaut', fr: 'gebaut' }, { de: 'verkaufen', en: 'verkauft', fr: 'verkauft' }, { de: 'öffnen', en: 'geöffnet', fr: 'geöffnet' } ], hint: 'Match each verb to its participle.', hintFr: 'Associe chaque verbe à son participe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l5-e6', prompt: 'Listen. What happens in the factory?', promptFr: 'Écoute. Que se passe-t-il à l’usine ?', audio: { ttsText: 'In dieser Fabrik werden jeden Tag hundert Autos hergestellt.' }, options: ['Cars are produced', 'Cars are sold', 'Cars are repaired'], optionsFr: ['On fabrique des voitures', 'On vend des voitures', 'On répare des voitures'], answer: 0, hint: 'Listen for the participle at the end.', hintFr: 'Écoute le participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l5-e7', prompt: 'Der Laden wird um neun ___. (öffnen → participle)', answer: 'geöffnet', hint: 'participle of öffnen', hintFr: 'participe de öffnen' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l5-e8', prompt: 'How do you name the doer in a passive sentence?', promptFr: 'Comment nomme-t-on l’auteur dans une phrase passive ?', options: ['mit + dative', 'von + dative', 'für + accusative'], answer: 1, explain: 'The doer is added with "von" + dative.', explainFr: 'L’auteur s’ajoute avec « von » + datif.', hint: 'Das Auto wird … dem Mechaniker repariert.', hintFr: 'Das Auto wird … dem Mechaniker repariert.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l5-e9', tokens: ['gesprochen', 'wird', 'Hier', 'Deutsch'], answer: ['Hier', 'wird', 'Deutsch', 'gesprochen'], hint: 'Front element, then "wird", participle last.', hintFr: 'Élément en tête, puis « wird », participe en dernier.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l5-e10', prompt: 'Listen. By whom is the letter written?', promptFr: 'Écoute. Par qui la lettre est-elle écrite ?', audio: { ttsText: 'Der Brief wird von der Chefin geschrieben.' }, options: ['By the boss', 'By the secretary', 'By a customer'], optionsFr: ['Par la cheffe', 'Par la secrétaire', 'Par un client'], answer: 0, hint: 'Listen after "von der".', hintFr: 'Écoute après « von der ».' } },

    { kind: 'pronunciation', focus: 'Passive lives in "wird/werden" + a participle; the participle often starts with "ge-"', focusFr: 'Le passif vit dans « wird/werden » + un participe ; le participe commence souvent par « ge- »', items: [
      { id: 'b1l5-wird-pron', german: 'wird gebaut', english: 'is built', french: 'est construit', gender: null, syllables: ['wird', 'ge', 'BAUT'], pronunciation: 'virt ge-BOWT', example: { de: 'Das Haus wird gebaut.', en: 'The house is built.', fr: 'La maison est construite.' } },
      { id: 'b1l5-werden-pron', german: 'werden verkauft', english: 'are sold', french: 'sont vendus', gender: null, syllables: ['wer', 'den', 'ver', 'KAUFT'], pronunciation: 'VAIR-den fair-KOWFT', example: { de: 'Die Blumen werden verkauft.', en: 'The flowers are sold.', fr: 'Les fleurs sont vendues.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now use the **present passive**: **werden** (wird/werden) + **participle** at the end, focusing on the action (Das Haus wird gebaut). Turn active into passive by making the object the subject, and name the doer with **von** + dative. 🎉',
      summaryFr: 'Tu sais maintenant utiliser le **passif présent** : **werden** (wird/werden) + **participe** à la fin, en mettant l’accent sur l’action (Das Haus wird gebaut). Transforme l’actif en passif en faisant de l’objet le sujet, et nomme l’auteur avec **von** + datif. 🎉' },
  ],
};

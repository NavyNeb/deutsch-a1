import type { Lesson } from '../types';

export const a2lektion11: Lesson = {
  id: 'a2-l11', level: 'A2', module: 4, number: 11,
  title: { de: 'Adjektive beschreiben', en: 'Describing with adjectives', fr: 'Décrire avec des adjectifs' },
  theme: 'Adjective endings before a noun (nominative and accusative)',
  themeFr: 'Les terminaisons des adjectifs devant un nom (nominatif et accusatif)',
  goals: ['Know that adjectives after "sein" take no ending', 'Add endings after der/die/das', 'Add endings after ein/eine', 'Handle the masculine accusative (-en)'],
  goalsFr: ['Savoir que les adjectifs après « sein » n’ont pas de terminaison', 'Ajouter les terminaisons après der/die/das', 'Ajouter les terminaisons après ein/eine', 'Gérer l’accusatif masculin (-en)'],
  steps: [
    { kind: 'intro', title: 'Der neue Mantel 🧥', titleFr: 'Le nouveau manteau 🧥',
      scene: 'Describing things in a shop with adjectives.', sceneFr: 'On décrit des objets dans un magasin avec des adjectifs.',
      goals: ['Predicate vs. attributive adjectives', 'Endings after the definite article', 'Endings after the indefinite article', 'The masculine accusative -en'],
      goalsFr: ['Adjectifs attributs vs. épithètes', 'Terminaisons après l’article défini', 'Terminaisons après l’article indéfini', 'L’accusatif masculin -en'] },

    { kind: 'vocab', item: { id: 'a2l11-neu', german: 'neu', english: 'new', french: 'nouveau / neuf', gender: null, syllables: ['NEU'], pronunciation: 'noy', example: { de: 'Ich habe einen neuen Mantel.', en: 'I have a new coat.', fr: 'J’ai un nouveau manteau.' } } },
    { kind: 'vocab', item: { id: 'a2l11-alt', german: 'alt', english: 'old', french: 'vieux / ancien', gender: null, syllables: ['ALT'], pronunciation: 'ahlt', example: { de: 'Das ist ein altes Haus.', en: 'That is an old house.', fr: 'C’est une vieille maison.' } } },
    { kind: 'vocab', item: { id: 'a2l11-interessant', german: 'interessant', english: 'interesting', french: 'intéressant', gender: null, syllables: ['in', 'te', 'res', 'SANT'], pronunciation: 'in-te-res-SAHNT', example: { de: 'Ein interessantes Buch.', en: 'An interesting book.', fr: 'Un livre intéressant.' } } },
    { kind: 'vocab', item: { id: 'a2l11-langweilig', german: 'langweilig', english: 'boring', french: 'ennuyeux', gender: null, syllables: ['LANG', 'wei', 'lig'], pronunciation: 'LAHNG-vy-likh', example: { de: 'Der Film war langweilig.', en: 'The film was boring.', fr: 'Le film était ennuyeux.' } } },
    { kind: 'vocab', item: { id: 'a2l11-freundlich', german: 'freundlich', english: 'friendly', french: 'aimable', gender: null, syllables: ['FREUND', 'lich'], pronunciation: 'FROYNT-likh', example: { de: 'Eine freundliche Frau.', en: 'A friendly woman.', fr: 'Une femme aimable.' } } },
    { kind: 'vocab', item: { id: 'a2l11-nett', german: 'nett', english: 'nice / kind', french: 'gentil', gender: null, syllables: ['NETT'], pronunciation: 'net', example: { de: 'Er ist ein netter Mann.', en: 'He is a nice man.', fr: 'C’est un homme gentil.' } } },
    { kind: 'vocab', item: { id: 'a2l11-wichtig2', german: 'wunderbar', english: 'wonderful', french: 'merveilleux', gender: null, syllables: ['WUN', 'der', 'bar'], pronunciation: 'VOON-der-bar', example: { de: 'Ein wunderbarer Tag!', en: 'A wonderful day!', fr: 'Une journée merveilleuse !' } } },
    { kind: 'vocab', item: { id: 'a2l11-mantel', german: 'der Mantel', english: 'the coat', french: 'le manteau', gender: 'der', syllables: ['MAN', 'tel'], pronunciation: 'dair MAHN-tel', example: { de: 'Der Mantel ist warm.', en: 'The coat is warm.', fr: 'Le manteau est chaud.' } } },
    { kind: 'vocab', item: { id: 'a2l11-tasche', german: 'die Tasche', english: 'the bag', french: 'le sac', gender: 'die', syllables: ['TA', 'sche'], pronunciation: 'dee TAH-she', example: { de: 'Die Tasche ist neu.', en: 'The bag is new.', fr: 'Le sac est neuf.' } } },
    { kind: 'vocab', item: { id: 'a2l11-teuer2', german: 'teuer', english: 'expensive', french: 'cher', gender: null, syllables: ['TEU', 'er'], pronunciation: 'TOY-er', example: { de: 'Ein teures Auto.', en: 'An expensive car.', fr: 'Une voiture chère.' } } },

    { kind: 'grammar', note: {
      id: 'a2l11-praedikativ', title: 'After "sein": no ending', titleFr: 'Après « sein » : pas de terminaison',
      explanationMd: 'When the adjective comes **after the noun** (with sein), it has **no ending**:\n\n- Der Mantel **ist neu**.\n- Die Tasche **ist neu**.\n- Das Auto **ist neu**.\n\nEndings only appear when the adjective stands **before** the noun.',
      explanationMdFr: 'Quand l’adjectif vient **après le nom** (avec sein), il n’a **pas de terminaison** :\n\n- Der Mantel **ist neu**.\n- Die Tasche **ist neu**.\n- Das Auto **ist neu**.\n\nLes terminaisons n’apparaissent que lorsque l’adjectif est **devant** le nom.',
      examples: [
        { de: 'Das Buch ist interessant.', en: 'The book is interesting.', fr: 'Le livre est intéressant.' },
        { de: 'Die Frau ist freundlich.', en: 'The woman is friendly.', fr: 'La femme est aimable.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l11-definit', title: 'After der/die/das: mostly -e', titleFr: 'Après der/die/das : surtout -e',
      explanationMd: 'Before the noun, after **der/die/das** (nominative), add **-e**:\n\n- **der** neu**e** Mantel · **die** neu**e** Tasche · **das** neu**e** Auto\n- plural: **die** neu**en** Autos (**-en**)\n\nIn the **accusative**, masculine becomes **-en**: Ich kaufe **den neuen** Mantel.',
      explanationMdFr: 'Devant le nom, après **der/die/das** (nominatif), ajoute **-e** :\n\n- **der** neu**e** Mantel · **die** neu**e** Tasche · **das** neu**e** Auto\n- pluriel : **die** neu**en** Autos (**-en**)\n\nÀ l’**accusatif**, le masculin devient **-en** : Ich kaufe **den neuen** Mantel.',
      examples: [
        { de: 'Der neue Mantel ist teuer.', en: 'The new coat is expensive.', fr: 'Le nouveau manteau est cher.' },
        { de: 'Ich nehme den blauen Mantel.', en: 'I’ll take the blue coat.', fr: 'Je prends le manteau bleu.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'a2l11-indefinit', title: 'After ein/eine: -er / -e / -es', titleFr: 'Après ein/eine : -er / -e / -es',
      explanationMd: 'After **ein/eine** (nominative), the ending shows the gender:\n\n- masc: **ein** neu**er** Mantel\n- fem: **eine** neu**e** Tasche\n- neut: **ein** neu**es** Auto\n\nIn the accusative, masculine again takes **-en**: Ich habe **einen neuen** Mantel.',
      explanationMdFr: 'Après **ein/eine** (nominatif), la terminaison indique le genre :\n\n- masc : **ein** neu**er** Mantel\n- fém : **eine** neu**e** Tasche\n- neutre : **ein** neu**es** Auto\n\nÀ l’accusatif, le masculin prend encore **-en** : Ich habe **einen neuen** Mantel.',
      examples: [
        { de: 'Das ist ein netter Mann.', en: 'That is a nice man.', fr: 'C’est un homme gentil.' },
        { de: 'Ich kaufe eine neue Tasche.', en: 'I buy a new bag.', fr: 'J’achète un nouveau sac.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e1', prompt: 'Der Mantel ist ___. (new — predicate, no ending)', answer: 'neu', hint: 'after "ist" there is no ending', hintFr: 'après « ist » il n’y a pas de terminaison' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e2', prompt: 'der neu__ Mantel (nominative ending)', answer: 'e', hint: 'after der (nom) add -e', hintFr: 'après der (nom) ajoute -e' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l11-e3', prompt: 'Which is correct (nominative)?', promptFr: 'Quelle forme est correcte (nominatif) ?', options: ['ein neuer Mantel', 'ein neue Mantel', 'ein neues Mantel'], answer: 0, explain: 'Masculine after "ein" (nom) takes -er: ein neuer Mantel.', explainFr: 'Le masculin après « ein » (nom) prend -er : ein neuer Mantel.', hint: 'Mantel is masculine (der).', hintFr: 'Mantel est masculin (der).' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l11-e4', prompt: 'Which is correct?', promptFr: 'Quelle forme est correcte ?', options: ['ein neue Auto', 'ein neues Auto', 'ein neuer Auto'], answer: 1, explain: 'Neuter after "ein" (nom) takes -es: ein neues Auto.', explainFr: 'Le neutre après « ein » (nom) prend -es : ein neues Auto.', hint: 'Auto is neuter (das).', hintFr: 'Auto est neutre (das).' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e5', prompt: 'Ich kaufe einen neu__ Mantel. (accusative, masculine)', answer: 'en', hint: 'masculine accusative → -en', hintFr: 'accusatif masculin → -en' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l11-e6', pairs: [ { de: 'neu', en: 'new', fr: 'nouveau' }, { de: 'alt', en: 'old', fr: 'vieux' }, { de: 'nett', en: 'nice', fr: 'gentil' } ], hint: 'Match each adjective to its meaning.', hintFr: 'Associe chaque adjectif à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l11-e7', prompt: 'Listen. What does Mia buy?', promptFr: 'Écoute. Qu’achète Mia ?', audio: { ttsText: 'Ich kaufe eine neue Tasche und einen warmen Mantel.' }, options: ['A bag and a coat', 'A book and a bag', 'Shoes'], optionsFr: ['Un sac et un manteau', 'Un livre et un sac', 'Des chaussures'], answer: 0, hint: 'Listen for the two nouns.', hintFr: 'Écoute les deux noms.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l11-e8', prompt: 'eine freundlich__ Frau (nominative, feminine)', answer: 'e', hint: 'feminine after eine → -e', hintFr: 'féminin après eine → -e' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l11-e9', prompt: 'Which sentence has NO adjective ending (and is correct)?', promptFr: 'Quelle phrase n’a PAS de terminaison d’adjectif (et est correcte) ?', options: ['Das ist ein neu Auto.', 'Das Auto ist neu.', 'Der neu Mantel.'], answer: 1, explain: 'After "ist", the adjective has no ending: Das Auto ist neu.', explainFr: 'Après « ist », l’adjectif n’a pas de terminaison : Das Auto ist neu.', hint: 'Predicate adjectives (after sein) take no ending.', hintFr: 'Les adjectifs attributs (après sein) n’ont pas de terminaison.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l11-e10', tokens: ['ein', 'ist', 'netter', 'Er', 'Mann'], answer: ['Er', 'ist', 'ein', 'netter', 'Mann'], hint: 'Subject, verb, then "ein netter Mann".', hintFr: 'Sujet, verbe, puis « ein netter Mann ».' } },

    { kind: 'pronunciation', focus: 'The "eu" in neu/freundlich is "oy"; keep endings light and unstressed (neue, neuen)', focusFr: 'Le « eu » de neu/freundlich est « oï » ; garde les terminaisons courtes et non accentuées (neue, neuen)', items: [
      { id: 'a2l11-neu-pron', german: 'neu', english: 'new', french: 'nouveau', gender: null, syllables: ['NEU'], pronunciation: 'noy', example: { de: 'Der Mantel ist neu.', en: 'The coat is new.', fr: 'Le manteau est neuf.' } },
      { id: 'a2l11-freundlich-pron', german: 'freundlich', english: 'friendly', french: 'aimable', gender: null, syllables: ['FREUND', 'lich'], pronunciation: 'FROYNT-likh', example: { de: 'Eine freundliche Frau.', en: 'A friendly woman.', fr: 'Une femme aimable.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now add adjective endings before a noun: **no ending** after sein (ist neu), **-e** after der/die/das (der neue Mantel), and **-er/-e/-es** after ein/eine (ein neuer Mantel, eine neue Tasche, ein neues Auto). Masculine in the accusative takes **-en** (einen neuen Mantel). 🎉',
      summaryFr: 'Tu sais maintenant ajouter les terminaisons d’adjectif devant un nom : **pas de terminaison** après sein (ist neu), **-e** après der/die/das (der neue Mantel), et **-er/-e/-es** après ein/eine (ein neuer Mantel, eine neue Tasche, ein neues Auto). Le masculin à l’accusatif prend **-en** (einen neuen Mantel). 🎉' },
  ],
};

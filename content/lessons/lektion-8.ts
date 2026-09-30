import type { Lesson } from '../types';

export const lektion8: Lesson = {
  id: 'l8', level: 'A1', module: 3, number: 10,
  title: { de: 'Einkaufen', en: 'Shopping', fr: 'Les courses' },
  theme: 'Shopping, prices, numbers to 100, and the accusative',
  themeFr: 'Faire les courses, les prix, les nombres jusqu’à 100 et l’accusatif',
  goals: ['Talk about shopping and money', 'Count to 100 and say prices', 'Ask "Was kostet …?"', 'Use the accusative with "kaufen" and "brauchen"'],
  goalsFr: ['Parler des courses et de l’argent', 'Compter jusqu’à 100 et dire les prix', 'Demander « Was kostet …? »', 'Utiliser l’accusatif avec « kaufen » et « brauchen »'],
  steps: [
    { kind: 'intro', title: 'Im Supermarkt 🛒', titleFr: 'Au supermarché 🛒',
      scene: 'Buying groceries and asking for prices.', sceneFr: 'On achète des courses et on demande les prix.',
      goals: ['Name shopping words', 'Count to 100 and read prices', 'Ask and understand "Was kostet das?"', 'Use the accusative article (einen/eine/ein)'],
      goalsFr: ['Nommer le vocabulaire des courses', 'Compter jusqu’à 100 et lire les prix', 'Demander et comprendre « Was kostet das ? »', 'Utiliser l’article à l’accusatif (einen/eine/ein)'] },

    { kind: 'vocab', item: { id: 'l8-supermarkt', german: 'der Supermarkt', english: 'the supermarket', french: 'le supermarché', gender: 'der', syllables: ['SU', 'per', 'markt'], pronunciation: 'dair ZOO-per-markt', example: { de: 'Ich gehe in den Supermarkt.', en: 'I go to the supermarket.', fr: 'Je vais au supermarché.' } } },
    { kind: 'vocab', item: { id: 'l8-geld', german: 'das Geld', english: 'the money', french: 'l’argent', gender: 'das', syllables: ['GELD'], pronunciation: 'dahs GELT', example: { de: 'Ich habe kein Geld.', en: 'I have no money.', fr: 'Je n’ai pas d’argent.' } } },
    { kind: 'vocab', item: { id: 'l8-euro', german: 'der Euro', english: 'the euro', french: 'l’euro', gender: 'der', syllables: ['EU', 'ro'], pronunciation: 'dair OY-ro', example: { de: 'Das kostet drei Euro.', en: 'That costs three euros.', fr: 'Ça coûte trois euros.' } } },
    { kind: 'vocab', item: { id: 'l8-preis', german: 'der Preis', english: 'the price', french: 'le prix', gender: 'der', syllables: ['PREIS'], pronunciation: 'dair PRICE', example: { de: 'Der Preis ist gut.', en: 'The price is good.', fr: 'Le prix est bon.' } } },
    { kind: 'vocab', item: { id: 'l8-kaufen', german: 'kaufen', english: 'to buy', french: 'acheter', gender: null, syllables: ['KAU', 'fen'], pronunciation: 'KOW-fen', example: { de: 'Ich kaufe einen Apfel.', en: 'I buy an apple.', fr: 'J’achète une pomme.' } } },
    { kind: 'vocab', item: { id: 'l8-kosten', german: 'kosten', english: 'to cost', french: 'coûter', gender: null, syllables: ['KOS', 'ten'], pronunciation: 'KOSS-ten', example: { de: 'Was kostet das Brot?', en: 'What does the bread cost?', fr: 'Combien coûte le pain ?' } } },
    { kind: 'vocab', item: { id: 'l8-brauchen', german: 'brauchen', english: 'to need', french: 'avoir besoin de', gender: null, syllables: ['BRAU', 'chen'], pronunciation: 'BROW-khen', example: { de: 'Ich brauche Milch.', en: 'I need milk.', fr: 'J’ai besoin de lait.' } } },
    { kind: 'vocab', item: { id: 'l8-teuer', german: 'teuer', english: 'expensive', french: 'cher', gender: null, syllables: ['TEU', 'er'], pronunciation: 'TOY-er', example: { de: 'Das ist zu teuer.', en: 'That is too expensive.', fr: 'C’est trop cher.' } } },
    { kind: 'vocab', item: { id: 'l8-billig', german: 'billig', english: 'cheap', french: 'bon marché', gender: null, syllables: ['BIL', 'lig'], pronunciation: 'BIL-likh', example: { de: 'Der Apfel ist billig.', en: 'The apple is cheap.', fr: 'La pomme est bon marché.' } } },
    { kind: 'vocab', item: { id: 'l8-hundert', german: 'hundert', english: 'hundred', french: 'cent', gender: null, syllables: ['HUN', 'dert'], pronunciation: 'HOON-dert', example: { de: 'Das kostet hundert Euro.', en: 'That costs a hundred euros.', fr: 'Ça coûte cent euros.' } } },

    { kind: 'grammar', note: {
      id: 'l8-zahlen100', title: 'Numbers to 100', titleFr: 'Les nombres jusqu’à 100',
      explanationMd: 'Tens: 20 zwanzig · 30 dreißig · 40 vierzig · 50 fünfzig · 60 sechzig · 70 siebzig · 80 achtzig · 90 neunzig · 100 hundert.\n\nFor 21–99, say the **units first**, then **und**, then the tens:\n\n- 21 = **einundzwanzig** (one-and-twenty)\n- 34 = **vierunddreißig** (four-and-thirty)',
      explanationMdFr: 'Dizaines : 20 zwanzig · 30 dreißig · 40 vierzig · 50 fünfzig · 60 sechzig · 70 siebzig · 80 achtzig · 90 neunzig · 100 hundert.\n\nPour 21–99, on dit d’abord les **unités**, puis **und**, puis les dizaines :\n\n- 21 = **einundzwanzig** (un-et-vingt)\n- 34 = **vierunddreißig** (quatre-et-trente)',
      examples: [
        { de: 'einundzwanzig Euro', en: 'twenty-one euros', fr: 'vingt et un euros' },
        { de: 'Das kostet fünfundvierzig Euro.', en: 'That costs forty-five euros.', fr: 'Ça coûte quarante-cinq euros.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l8-preise', title: 'Asking about prices', titleFr: 'Demander les prix',
      explanationMd: 'To ask a price, say **Was kostet …?** or **Wie viel kostet …?**\n\n- **Was kostet** das Brot? — Es **kostet** zwei Euro.\n- **Wie viel kostet** der Kaffee?',
      explanationMdFr: 'Pour demander un prix, dis **Was kostet …?** ou **Wie viel kostet …?**\n\n- **Was kostet** das Brot ? — Es **kostet** zwei Euro.\n- **Wie viel kostet** der Kaffee ?',
      examples: [
        { de: 'Was kostet das?', en: 'What does that cost?', fr: 'Combien ça coûte ?' },
        { de: 'Das kostet drei Euro fünfzig.', en: 'That costs three euros fifty.', fr: 'Ça coûte trois euros cinquante.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l8-akkusativ', title: 'The accusative article', titleFr: 'L’article à l’accusatif',
      explanationMd: 'The **direct object** takes the accusative. Only the masculine article changes:\n\n- der → **den** / ein → **einen**: Ich kaufe **einen** Apfel.\n- die → die / eine → **eine**: Ich kaufe **eine** Milch.\n- das → das / ein → **ein**: Ich kaufe **ein** Brot.\n\nSo remember: **der → einen** in the accusative.',
      explanationMdFr: 'Le **complément d’objet direct** est à l’accusatif. Seul l’article masculin change :\n\n- der → **den** / ein → **einen** : Ich kaufe **einen** Apfel.\n- die → die / eine → **eine** : Ich kaufe **eine** Milch.\n- das → das / ein → **ein** : Ich kaufe **ein** Brot.\n\nRetiens : **der → einen** à l’accusatif.',
      examples: [
        { de: 'Ich brauche einen Kaffee.', en: 'I need a coffee.', fr: 'J’ai besoin d’un café.' },
        { de: 'Ich kaufe eine Milch und ein Brot.', en: 'I buy a milk and a bread.', fr: 'J’achète un lait et un pain.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l8-e1', prompt: 'Ich kaufe ___ Apfel. (a — masculine accusative)', answer: 'einen', hint: 'der → einen in the accusative', hintFr: 'der → einen à l’accusatif' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l8-e2', prompt: 'How do you write 21 in German?', promptFr: 'Comment écrit-on 21 en allemand ?', options: ['zwanzigeins', 'einundzwanzig', 'zwanzigundein'], answer: 1, explain: 'Units first: ein-und-zwanzig.', explainFr: 'Les unités d’abord : ein-und-zwanzig.', hint: 'Say the "one" before the "twenty".', hintFr: 'Dis le « un » avant le « vingt ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l8-e3', tokens: ['kostet', 'das', 'Was'], answer: ['Was', 'kostet', 'das'], hint: 'Question word first, then the verb.', hintFr: 'Mot interrogatif d’abord, puis le verbe.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l8-e4', pairs: [ { de: 'kaufen', en: 'to buy', fr: 'acheter' }, { de: 'kosten', en: 'to cost', fr: 'coûter' }, { de: 'brauchen', en: 'to need', fr: 'avoir besoin' } ], hint: 'Match each shopping verb to its meaning.', hintFr: 'Associe chaque verbe des courses à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l8-e5', prompt: 'Listen. How much does the bread cost?', promptFr: 'Écoute. Combien coûte le pain ?', audio: { ttsText: 'Was kostet das Brot? Das Brot kostet zwei Euro.' }, options: ['2 €', '3 €', '12 €'], answer: 0, hint: 'Listen for the number before "Euro".', hintFr: 'Écoute le nombre avant « Euro ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l8-e6', word: 'Geld', answer: 'das', hint: '"Geld" (money) is neuter.', hintFr: '« Geld » (argent) est neutre.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l8-e7', prompt: 'Der Apfel ist nicht teuer, er ist ___. (cheap)', answer: 'billig', hint: 'the opposite of "teuer"', hintFr: 'le contraire de « teuer »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l8-e8', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich kaufe ein Apfel.', 'Ich kaufe einen Apfel.', 'Ich kaufe eine Apfel.'], answer: 1, explain: '"Apfel" is der → einen in the accusative.', explainFr: '« Apfel » est der → einen à l’accusatif.', hint: 'Masculine nouns take "einen" as a direct object.', hintFr: 'Les noms masculins prennent « einen » comme objet direct.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l8-e9', tokens: ['Milch', 'brauche', 'Ich', 'eine'], answer: ['Ich', 'brauche', 'eine', 'Milch'], hint: 'Subject, verb, then the object with its article.', hintFr: 'Sujet, verbe, puis l’objet avec son article.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l8-e10', prompt: 'Listen. What does the customer need?', promptFr: 'Écoute. De quoi le client a-t-il besoin ?', audio: { ttsText: 'Ich brauche einen Kaffee und ein Brot, bitte.' }, options: ['Coffee and bread', 'Milk and water', 'Apple and money'], optionsFr: ['Café et pain', 'Lait et eau', 'Pomme et argent'], answer: 0, hint: 'Listen after "Ich brauche".', hintFr: 'Écoute après « Ich brauche ».' } },

    { kind: 'pronunciation', focus: 'The "eu" sound is like English "oy" (Euro, teuer), different from "ei" = "eye" (Preis)', focusFr: 'Le son « eu » est comme « oï » (Euro, teuer), différent de « ei » = « aï » (Preis)', items: [
      { id: 'l8-euro-pron', german: 'Euro', english: 'euro', french: 'euro', gender: null, syllables: ['EU', 'ro'], pronunciation: 'OY-ro', example: { de: 'Das kostet zehn Euro.', en: 'That costs ten euros.', fr: 'Ça coûte dix euros.' } },
      { id: 'l8-preis-pron', german: 'Preis', english: 'price', french: 'prix', gender: null, syllables: ['PREIS'], pronunciation: 'PRICE', example: { de: 'Der Preis ist gut.', en: 'The price is good.', fr: 'Le prix est bon.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now talk about shopping, count to 100, ask **Was kostet …?**, and use the accusative article — remember **der → einen** (Ich kaufe **einen** Apfel). 🎉',
      summaryFr: 'Tu sais maintenant parler des courses, compter jusqu’à 100, demander **Was kostet …?**, et utiliser l’article à l’accusatif — retiens **der → einen** (Ich kaufe **einen** Apfel). 🎉' },
  ],
};

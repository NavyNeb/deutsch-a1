import type { Lesson } from '../types';
import { g, line, word } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept; three words about paying are new.

export const lektion8: Lesson = {
  id: 'l8', level: 'A1', module: 3, number: 13,
  title: { de: 'Einkaufen', en: 'Shopping', fr: 'Les courses' },
  theme: 'Shopping, prices, numbers to 100, and the accusative', themeFr: 'Faire les courses, les prix, les nombres jusqu’à 100 et l’accusatif',
  goals: ['Talk about shopping and money', 'Count to 100 and say prices', 'Ask "Was kostet …?"', 'Use the accusative with "kaufen" and "brauchen"'], goalsFr: ['Parler des courses et de l’argent', 'Compter jusqu’à 100 et dire les prix', 'Demander « Was kostet …? »', 'Utiliser l’accusatif avec « kaufen » et « brauchen »'],
  canDo: g('Ich kann einkaufen, nach Preisen fragen, bezahlen und sagen, was ich kaufe oder brauche.', 'I can go shopping, ask about prices, pay, and say what I buy or need.', 'Je sais faire des achats, demander les prix, payer et dire ce que j’achète ou dont j’ai besoin.'),
  steps: [
    { kind: 'intro', title: 'Einkaufen 🛒', titleFr: 'Faire les courses 🛒',
      scene: 'Mia and Jonas go to the supermarket.', sceneFr: 'Mia et Jonas vont au supermarché.',
      goals: ['Ask “Was kostet …?” and say prices', 'Pay in cash or by card', 'Use the accusative with kaufen and brauchen'],
      goalsFr: ['Demander « Was kostet … ? » et dire les prix', 'Payer en espèces ou par carte', 'Utiliser l’accusatif avec kaufen et brauchen'] },

    // ───────────── 1 · Prices ─────────────
    { kind: 'chapter', title: 'Preise', titleFr: 'Les prix', blurb: 'What does it cost?', blurbFr: 'Combien ça coûte ?' },

    { kind: 'situation', title: 'Im Supermarkt', titleFr: 'Au supermarché',
      setting: 'Mia and Jonas shop for breakfast.', settingFr: 'Mia et Jonas font les courses pour le petit-déjeuner.',
      lines: [
        line('Mia', 'Ich brauche Milch und Brot. Gehen wir in den Supermarkt?', 'I need milk and bread. Shall we go to the supermarket?', 'J’ai besoin de lait et de pain. On va au supermarché ?'),
        line('Jonas', 'Gern. Ich kaufe auch einen Apfel.', 'Gladly. I’m also buying an apple.', 'Volontiers. J’achète aussi une pomme.'),
        line('Mia', 'Was kostet der Apfel?', 'What does the apple cost?', 'Combien coûte la pomme ?'),
        line('Jonas', 'Der Apfel kostet fünfzig Cent.', 'The apple costs fifty cents.', 'La pomme coûte cinquante centimes.'),
        line('Mia', 'Das ist billig! Die Milch kostet einen Euro zwanzig.', 'That’s cheap! The milk costs one euro twenty.', 'C’est bon marché ! Le lait coûte un euro vingt.'),
        line('Jonas', 'Und das Brot? Zwei Euro. Das ist teuer!', 'And the bread? Two euros. That’s expensive!', 'Et le pain ? Deux euros. C’est cher !'),
      ],
      words: [{ id: 'l8-supermarkt', german: 'der Supermarkt', english: 'the supermarket', french: 'le supermarché', gender: 'der', syllables: ['SU', 'per', 'markt'], pronunciation: 'dair ZOO-per-markt', example: { de: 'Ich gehe in den Supermarkt.', en: 'I go to the supermarket.', fr: 'Je vais au supermarché.' } }, { id: 'l8-brauchen', german: 'brauchen', english: 'to need', french: 'avoir besoin de', gender: null, syllables: ['BRAU', 'chen'], pronunciation: 'BROW-khen', example: { de: 'Ich brauche Milch.', en: 'I need milk.', fr: 'J’ai besoin de lait.' } }, { id: 'l8-kaufen', german: 'kaufen', english: 'to buy', french: 'acheter', gender: null, syllables: ['KAU', 'fen'], pronunciation: 'KOW-fen', example: { de: 'Ich kaufe einen Apfel.', en: 'I buy an apple.', fr: 'J’achète une pomme.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l8-e11', prompt: 'What does the milk cost?', promptFr: 'Combien coûte le lait ?', options: ['1.20 €', '0.50 €', '2.00 €'], answer: 0, explain: 'Mia says: “Die Milch kostet einen Euro zwanzig.”', explainFr: 'Mia dit : « Die Milch kostet einen Euro zwanzig. »', hint: 'The apple is 0.50 €, the bread is 2 €.', hintFr: 'La pomme coûte 0,50 €, le pain 2 €.' } },

    { kind: 'wordgroup', title: 'Geld und Preise', titleFr: 'L’argent et les prix',
      items: [{ id: 'l8-geld', german: 'das Geld', english: 'the money', french: 'l’argent', gender: 'das', syllables: ['GELD'], pronunciation: 'dahs GELT', example: { de: 'Ich habe kein Geld.', en: 'I have no money.', fr: 'Je n’ai pas d’argent.' } }, { id: 'l8-euro', german: 'der Euro', english: 'the euro', french: 'l’euro', gender: 'der', syllables: ['EU', 'ro'], pronunciation: 'dair OY-ro', example: { de: 'Das kostet drei Euro.', en: 'That costs three euros.', fr: 'Ça coûte trois euros.' } }, { id: 'l8-preis', german: 'der Preis', english: 'the price', french: 'le prix', gender: 'der', syllables: ['PREIS'], pronunciation: 'dair PRICE', example: { de: 'Der Preis ist gut.', en: 'The price is good.', fr: 'Le prix est bon.' } }, { id: 'l8-kosten', german: 'kosten', english: 'to cost', french: 'coûter', gender: null, syllables: ['KOS', 'ten'], pronunciation: 'KOSS-ten', example: { de: 'Was kostet das Brot?', en: 'What does the bread cost?', fr: 'Combien coûte le pain ?' } }, { id: 'l8-teuer', german: 'teuer', english: 'expensive', french: 'cher', gender: null, syllables: ['TEU', 'er'], pronunciation: 'TOY-er', example: { de: 'Das ist zu teuer.', en: 'That is too expensive.', fr: 'C’est trop cher.' } }, { id: 'l8-billig', german: 'billig', english: 'cheap', french: 'bon marché', gender: null, syllables: ['BIL', 'lig'], pronunciation: 'BIL-likh', example: { de: 'Der Apfel ist billig.', en: 'The apple is cheap.', fr: 'La pomme est bon marché.' } }, { id: 'l8-hundert', german: 'hundert', english: 'hundred', french: 'cent', gender: null, syllables: ['HUN', 'dert'], pronunciation: 'HOON-dert', example: { de: 'Das kostet hundert Euro.', en: 'That costs a hundred euros.', fr: 'Ça coûte cent euros.' } }] },

    { kind: 'grammar', note: {
      id: 'l8-preise', title: 'Asking and saying prices', titleFr: 'Demander et dire les prix',
      lead: 'Ask Was kostet …? Say the euros first, then the cents. Euro and Cent never take an -s.',
      leadFr: 'Demande Was kostet … ? Dis les euros d’abord, puis les centimes. Euro et Cent ne prennent jamais de -s.',
      explanationMd: 'Ask **Was kostet …?** or **Wie viel kostet …?** (plural: **Was kosten …?**). Say the **euros first, then the cents**: 3,50 € = **drei Euro fünfzig**. After a number, **Euro** and **Cent** do **not** get an **-s**.\n\nThe tens from 20 to 100 you already know (lesson 5): **zwanzig, dreißig … hundert**, and **units + und + tens** for 21 to 99.',
      explanationMdFr: 'Demande **Was kostet … ?** ou **Wie viel kostet … ?** (pluriel : **Was kosten … ?**). Dis les **euros d’abord, puis les centimes** : 3,50 € = **drei Euro fünfzig**. Après un nombre, **Euro** et **Cent** ne prennent **pas de -s**.\n\nLes dizaines de 20 à 100, tu les connais déjà (leçon 5) : **zwanzig, dreißig … hundert**, et **unités + und + dizaine** de 21 à 99.',
      tables: [
        { title: 'Prices', titleFr: 'Les prix', headers: ['Written', 'You say'], headersFr: ['Écrit', 'On dit'],
          rows: [['0,50 €', 'fünfzig Cent'], ['1,20 €', 'ein Euro zwanzig'], ['3,50 €', 'drei Euro fünfzig'], ['21 €', 'einundzwanzig Euro'], ['100 €', 'hundert Euro']],
          rowsFr: [['0,50 €', 'fünfzig Cent'], ['1,20 €', 'ein Euro zwanzig'], ['3,50 €', 'drei Euro fünfzig'], ['21 €', 'einundzwanzig Euro'], ['100 €', 'hundert Euro']], highlightCol: 1 },
        { title: 'Review: 21 to 99', titleFr: 'Révision : 21 à 99', headers: ['Number', 'German'], headersFr: ['Nombre', 'Allemand'],
          rows: [['21', 'einundzwanzig'], ['34', 'vierunddreißig'], ['45', 'fünfundvierzig'], ['99', 'neunundneunzig']],
          rowsFr: [['21', 'einundzwanzig'], ['34', 'vierunddreißig'], ['45', 'fünfundvierzig'], ['99', 'neunundneunzig']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Was', role: 'other' }, { text: 'kostet', role: 'verb' }, { text: 'das Brot?', role: 'subject' }], en: 'What does the bread cost?', fr: 'Combien coûte le pain ?' },
        { parts: [{ text: 'Das Brot', role: 'subject' }, { text: 'kostet', role: 'verb' }, { text: 'zwei Euro.', role: 'other' }], en: 'The bread costs two euros.', fr: 'Le pain coûte deux euros.' },
      ],
      contrast: {
        a: { label: 'Singular: kostet', labelFr: 'Singulier : kostet', note: 'one thing', noteFr: 'une chose', examples: [g('Was kostet der Kaffee?', 'What does the coffee cost?', 'Combien coûte le café ?'), g('Wie viel kostet das?', 'How much does that cost?', 'Combien ça coûte ?')] },
        b: { label: 'Plural: kosten', labelFr: 'Pluriel : kosten', note: 'several things', noteFr: 'plusieurs choses', examples: [g('Was kosten die Äpfel?', 'What do the apples cost?', 'Combien coûtent les pommes ?'), g('Wie viel kosten die Brötchen?', 'How much do the rolls cost?', 'Combien coûtent les petits pains ?')] },
      },
      examples: [
        g('Was kostet das? – Das kostet drei Euro fünfzig.', 'What does that cost? – That costs three euros fifty.', 'Combien ça coûte ? – Ça coûte trois euros cinquante.'),
        g('Das kostet fünfundvierzig Euro.', 'That costs forty-five euros.', 'Ça coûte quarante-cinq euros.'),
        g('Der Apfel kostet fünfzig Cent.', 'The apple costs fifty cents.', 'La pomme coûte cinquante centimes.'),
        g('Der Preis ist gut.', 'The price is good.', 'Le prix est bon.'),
        g('Das ist zu teuer.', 'That is too expensive.', 'C’est trop cher.'),
        g('Der Apfel ist billig.', 'The apple is cheap.', 'La pomme est bon marché.'),
        g('Das kostet hundert Euro.', 'That costs a hundred euros.', 'Ça coûte cent euros.'),
      ],
      mistakes: [
        { wrong: 'Das kostet drei Euros.', right: 'Das kostet drei Euro.', why: 'After a number, Euro takes no -s.', whyFr: 'Après un nombre, Euro ne prend pas de -s.' },
        { wrong: 'Was kosten das Brot?', right: 'Was kostet das Brot?', why: 'One thing: kostet. Several things: kosten.', whyFr: 'Une chose : kostet. Plusieurs : kosten.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l8-e2', prompt: 'How do you write 21 in German?', promptFr: 'Comment écrit-on 21 en allemand ?', options: ['zwanzigeins', 'einundzwanzig', 'zwanzigundein'], answer: 1, explain: 'Units first: ein-und-zwanzig.', explainFr: 'Les unités d’abord : ein-und-zwanzig.', hint: 'Say the "one" before the "twenty".', hintFr: 'Dis le « un » avant le « vingt ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l8-e3', tokens: ['kostet', 'das', 'Was'], answer: ['Was', 'kostet', 'das'], hint: 'Question word first, then the verb.', hintFr: 'Mot interrogatif d’abord, puis le verbe.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l8-e5', prompt: 'Listen. How much does the bread cost?', promptFr: 'Écoute. Combien coûte le pain ?', audio: { ttsText: 'Was kostet das Brot? Das Brot kostet zwei Euro.' }, options: ['2 €', '3 €', '12 €'], answer: 0, hint: 'Listen for the number before "Euro".', hintFr: 'Écoute le nombre avant « Euro ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l8-e6', word: 'Geld', answer: 'das', hint: '"Geld" (money) is neuter.', hintFr: '« Geld » (argent) est neutre.' } },

    // ───────────── 2 · Paying ─────────────
    { kind: 'chapter', title: 'Bezahlen', titleFr: 'Payer', blurb: 'Cash or card?', blurbFr: 'En espèces ou par carte ?' },

    { kind: 'situation', title: 'An der Kasse', titleFr: 'À la caisse',
      setting: 'Jonas pays at the till.', settingFr: 'Jonas paie à la caisse.',
      lines: [
        line('Kassiererin', 'Das macht vier Euro siebzig.', 'That makes four euros seventy.', 'Cela fait quatre euros soixante-dix.'),
        line('Jonas', 'Kann ich mit Karte bezahlen?', 'Can I pay by card?', 'Puis-je payer par carte ?'),
        line('Kassiererin', 'Leider nein. Nur bar.', 'Unfortunately not. Cash only.', 'Hélas non. Seulement en espèces.'),
        line('Jonas', 'Okay. Hier sind fünf Euro.', 'Okay. Here are five euros.', 'D’accord. Voici cinq euros.'),
        line('Kassiererin', 'Danke. Und dreißig Cent zurück.', 'Thank you. And thirty cents change.', 'Merci. Et trente centimes de monnaie.'),
        line('Jonas', 'Danke, tschüss!', 'Thanks, bye!', 'Merci, au revoir !'),
      ],
      words: [
        word('l8-bezahlen', 'bezahlen', null, 'to pay', 'payer', ['be', 'ZAH', 'len'], 'beh-TSAH-len', g('Ich bezahle mit Karte.', 'I pay by card.', 'Je paie par carte.')),
        word('l8-karte', 'die Karte', 'die', 'the card', 'la carte', ['KAR', 'te'], 'dee KAR-tuh', g('Ich bezahle mit der Karte.', 'I pay with the card.', 'Je paie avec la carte.')),
        word('l8-bar', 'bar', null, 'in cash', 'en espèces', ['BAR'], 'bahr', g('Ich bezahle bar.', 'I pay in cash.', 'Je paie en espèces.')),
      ] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l8-e12', prompt: 'Can Jonas pay by card?', promptFr: 'Jonas peut-il payer par carte ?', options: ['No, cash only', 'Yes, by card', 'No, only by phone'], optionsFr: ['Non, seulement en espèces', 'Oui, par carte', 'Non, seulement par téléphone'], answer: 0, explain: 'The cashier says: “Leider nein. Nur bar.”', explainFr: 'La caissière dit : « Leider nein. Nur bar. »', hint: 'Look for “Nur bar”.', hintFr: 'Cherche « Nur bar ».' } },

    { kind: 'grammar', note: {
      id: 'l8-bezahlen', title: 'Paying: Das macht …, mit Karte or bar', titleFr: 'Payer : Das macht …, mit Karte ou bar',
      lead: 'The cashier says Das macht … The question Kann ich … bezahlen? has the infinitive at the end.',
      leadFr: 'La caissière dit Das macht … La question Kann ich … bezahlen ? a l’infinitif à la fin.',
      explanationMd: 'At the till you hear **Das macht …** (“That makes …”). Ask **Kann ich mit Karte bezahlen?**: **kann** is in position 2 and the infinitive **bezahlen** goes to the **end** (the frame from lesson 10). Say **mit Karte** (by card) or **bar** (in cash).',
      explanationMdFr: 'À la caisse, tu entends **Das macht …** (« Cela fait … »). Demande **Kann ich mit Karte bezahlen ?** : **kann** est en position 2 et l’infinitif **bezahlen** va **à la fin** (le cadre de la leçon 10). Dis **mit Karte** (par carte) ou **bar** (en espèces).',
      tables: [{ title: 'At the till', titleFr: 'À la caisse', headers: ['You hear / say', 'Meaning'], headersFr: ['On entend / on dit', 'Sens'],
        rows: [['Das macht vier Euro siebzig.', 'The total is …'], ['Kann ich mit Karte bezahlen?', 'Can I pay by card?'], ['Nur bar.', 'Cash only.'], ['Hier sind fünf Euro.', 'Here are five euros.'], ['Und dreißig Cent zurück.', 'And thirty cents change.']],
        rowsFr: [['Das macht vier Euro siebzig.', 'Le total est …'], ['Kann ich mit Karte bezahlen?', 'Puis-je payer par carte ?'], ['Nur bar.', 'Espèces seulement.'], ['Hier sind fünf Euro.', 'Voici cinq euros.'], ['Und dreißig Cent zurück.', 'Et trente centimes de monnaie.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Kann', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'mit Karte', role: 'other' }, { text: 'bezahlen?', role: 'verb' }], en: 'Can I pay by card?', fr: 'Puis-je payer par carte ?' },
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'macht', role: 'verb' }, { text: 'vier Euro siebzig.', role: 'accusative' }], en: 'That makes four euros seventy.', fr: 'Cela fait quatre euros soixante-dix.' },
      ],
      contrast: {
        a: { label: 'mit Karte', labelFr: 'mit Karte', note: 'by card', noteFr: 'par carte', examples: [g('Ich bezahle mit Karte.', 'I pay by card.', 'Je paie par carte.'), g('Kann ich mit der Karte bezahlen?', 'Can I pay with the card?', 'Puis-je payer avec la carte ?')] },
        b: { label: 'bar', labelFr: 'bar', note: 'in cash', noteFr: 'en espèces', examples: [g('Ich bezahle bar.', 'I pay in cash.', 'Je paie en espèces.'), g('Nur bar, bitte.', 'Cash only, please.', 'Espèces seulement, s’il vous plaît.')] },
      },
      examples: [
        g('Das macht vier Euro siebzig.', 'That makes four euros seventy.', 'Cela fait quatre euros soixante-dix.'),
        g('Kann ich mit Karte bezahlen?', 'Can I pay by card?', 'Puis-je payer par carte ?'),
        g('Leider nein. Nur bar.', 'Unfortunately not. Cash only.', 'Hélas non. Espèces seulement.'),
        g('Hier sind fünf Euro.', 'Here are five euros.', 'Voici cinq euros.'),
        g('Ich bezahle bar.', 'I pay in cash.', 'Je paie en espèces.'),
        g('Ich habe kein Geld.', 'I have no money.', 'Je n’ai pas d’argent.'),
      ],
      mistakes: [
        { wrong: 'Ich bezahle in Karte.', right: 'Ich bezahle mit Karte.', why: 'Use mit for “by” (a means of payment).', whyFr: 'Utilise mit pour « par » (moyen de paiement).' },
        { wrong: 'Kann ich bezahlen mit Karte?', right: 'Kann ich mit Karte bezahlen?', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'match', id: 'l8-e4', pairs: [{ de: 'kaufen', en: 'to buy', fr: 'acheter' }, { de: 'kosten', en: 'to cost', fr: 'coûter' }, { de: 'brauchen', en: 'to need', fr: 'avoir besoin' }], hint: 'Match each shopping verb to its meaning.', hintFr: 'Associe chaque verbe des courses à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l8-e7', prompt: 'Der Apfel ist nicht teuer, er ist ___. (cheap)', answer: 'billig', hint: 'the opposite of "teuer"', hintFr: 'le contraire de « teuer »' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l8-e14', prompt: 'Das macht vier Euro ___. (70)', promptFr: 'Das macht vier Euro ___. (70)', answer: 'siebzig', hint: 'Careful: siebzig loses -en', hintFr: 'Attention : siebzig perd -en' } },

    // ───────────── 3 · Accusative ─────────────
    { kind: 'chapter', title: 'Was ich kaufe: der Akkusativ', titleFr: 'Ce que j’achète : l’accusatif', blurb: 'kaufen and brauchen take an object.', blurbFr: 'kaufen et brauchen prennent un objet.' },

    { kind: 'situation', title: 'Die Einkaufsliste', titleFr: 'La liste de courses',
      setting: 'Mia and Jonas compare their shopping lists.', settingFr: 'Mia et Jonas comparent leurs listes de courses.',
      lines: [
        line('Jonas', 'Was brauchst du?', 'What do you need?', 'De quoi as-tu besoin ?'),
        line('Mia', 'Ich brauche einen Kaffee, eine Milch und ein Brot.', 'I need a coffee, a milk and a bread.', 'J’ai besoin d’un café, d’un lait et d’un pain.'),
        line('Jonas', 'Ich kaufe einen Apfel und ein Wasser.', 'I’m buying an apple and a water.', 'J’achète une pomme et une eau.'),
        line('Mia', 'Kaufst du auch Äpfel?', 'Are you also buying apples?', 'Achètes-tu aussi des pommes ?'),
        line('Jonas', 'Nein, keine Äpfel. Nur einen Apfel.', 'No, no apples. Just one apple.', 'Non, pas de pommes. Juste une pomme.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l8-e13', prompt: 'What does Jonas buy?', promptFr: 'Qu’achète Jonas ?', options: ['An apple and a water', 'Apples and milk', 'A coffee and bread'], optionsFr: ['Une pomme et une eau', 'Des pommes et du lait', 'Un café et du pain'], answer: 0, explain: 'He says: “Ich kaufe einen Apfel und ein Wasser.”', explainFr: 'Il dit : « Ich kaufe einen Apfel und ein Wasser. »', hint: 'Mia needs the coffee, the milk and the bread.', hintFr: 'Mia a besoin du café, du lait et du pain.' } },

    { kind: 'grammar', note: {
      id: 'l8-akkusativ', title: 'The accusative: only the masculine changes', titleFr: 'L’accusatif : seul le masculin change',
      lead: 'The thing you buy or need is the direct object. der becomes den, ein becomes einen.',
      leadFr: 'La chose que tu achètes ou dont tu as besoin est le complément d’objet direct. der devient den, ein devient einen.',
      explanationMd: 'The **direct object** (what you buy, need, eat) is in the **accusative**. Good news: **only the masculine changes**. **der → den**, **ein → einen**, **kein → keinen**. **die, das, eine, ein** and the plural stay the same.',
      explanationMdFr: 'Le **complément d’objet direct** (ce que tu achètes, dont tu as besoin, ce que tu manges) est à l’**accusatif**. Bonne nouvelle : **seul le masculin change**. **der → den**, **ein → einen**, **kein → keinen**. **die, das, eine, ein** et le pluriel restent identiques.',
      tables: [{ title: 'Subject → object', titleFr: 'Sujet → objet', headers: ['Gender', 'Subject (nominative)', 'Object (accusative)'], headersFr: ['Genre', 'Sujet (nominatif)', 'Objet (accusatif)'],
        rows: [['masculine', 'der Apfel / ein Apfel', 'den Apfel / einen Apfel'], ['feminine', 'die Milch / eine Milch', 'die Milch / eine Milch'], ['neuter', 'das Brot / ein Brot', 'das Brot / ein Brot'], ['plural', 'die Äpfel', 'die Äpfel']],
        rowsFr: [['masculin', 'der Apfel / ein Apfel', 'den Apfel / einen Apfel'], ['féminin', 'die Milch / eine Milch', 'die Milch / eine Milch'], ['neutre', 'das Brot / ein Brot', 'das Brot / ein Brot'], ['pluriel', 'die Äpfel', 'die Äpfel']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'kaufe', role: 'verb' }, { text: 'einen Apfel.', role: 'accusative' }], en: 'I buy an apple.', fr: 'J’achète une pomme.' },
        { parts: [{ text: 'Der Apfel', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'billig.', role: 'other' }], en: 'The apple is cheap. (subject: der, not den)', fr: 'La pomme est bon marché. (sujet : der, pas den)' },
      ],
      contrast: {
        a: { label: 'Subject: der / ein', labelFr: 'Sujet : der / ein', note: 'who or what does something', noteFr: 'qui ou quoi fait l’action', examples: [g('Der Apfel ist billig.', 'The apple is cheap.', 'La pomme est bon marché.'), g('Ein Kaffee kostet drei Euro.', 'A coffee costs three euros.', 'Un café coûte trois euros.')] },
        b: { label: 'Object: den / einen', labelFr: 'Objet : den / einen', note: 'what is bought, needed, eaten', noteFr: 'ce qui est acheté, nécessaire, mangé', examples: [g('Ich kaufe den Apfel.', 'I buy the apple.', 'J’achète la pomme.'), g('Ich brauche einen Kaffee.', 'I need a coffee.', 'J’ai besoin d’un café.')] },
      },
      examples: [
        g('Ich brauche einen Kaffee.', 'I need a coffee.', 'J’ai besoin d’un café.'),
        g('Ich kaufe eine Milch und ein Brot.', 'I buy a milk and a bread.', 'J’achète un lait et un pain.'),
        g('Ich kaufe den Apfel.', 'I buy the apple.', 'J’achète la pomme.'),
        g('Ich gehe in den Supermarkt.', 'I go to the supermarket.', 'Je vais au supermarché.'),
        g('Ich brauche keinen Apfel.', 'I do not need an apple.', 'Je n’ai pas besoin de pomme.'),
        g('Kaufst du die Äpfel?', 'Are you buying the apples?', 'Achètes-tu les pommes ?'),
        g('Ich kaufe ein Wasser.', 'I buy a water.', 'J’achète une eau.'),
      ],
      mistakes: [
        { wrong: 'Ich kaufe der Apfel.', right: 'Ich kaufe den Apfel.', why: 'The object of kaufen is accusative: der becomes den.', whyFr: 'L’objet de kaufen est à l’accusatif : der devient den.' },
        { wrong: 'Ich brauche ein Kaffee.', right: 'Ich brauche einen Kaffee.', why: 'Kaffee is masculine: einen.', whyFr: 'Kaffee est masculin : einen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l8-e1', prompt: 'Ich kaufe ___ Apfel. (a — masculine accusative)', answer: 'einen', hint: 'der → einen in the accusative', hintFr: 'der → einen à l’accusatif' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l8-e8', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Ich kaufe ein Apfel.', 'Ich kaufe einen Apfel.', 'Ich kaufe eine Apfel.'], answer: 1, explain: '"Apfel" is der → einen in the accusative.', explainFr: '« Apfel » est der → einen à l’accusatif.', hint: 'Masculine nouns take "einen" as a direct object.', hintFr: 'Les noms masculins prennent « einen » comme objet direct.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l8-e9', tokens: ['Milch', 'brauche', 'Ich', 'eine'], answer: ['Ich', 'brauche', 'eine', 'Milch'], hint: 'Subject, verb, then the object with its article.', hintFr: 'Sujet, verbe, puis l’objet avec son article.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l8-e10', prompt: 'Listen. What does the customer need?', promptFr: 'Écoute. De quoi le client a-t-il besoin ?', audio: { ttsText: 'Ich brauche einen Kaffee und ein Brot, bitte.' }, options: ['Coffee and bread', 'Milk and water', 'Apple and money'], optionsFr: ['Café et pain', 'Lait et eau', 'Pomme et argent'], answer: 0, hint: 'Listen after "Ich brauche".', hintFr: 'Écoute après « Ich brauche ».' } },

    { kind: 'pronunciation', focus: 'The "eu" sound is like English "oy" (Euro, teuer), different from "ei" = "eye" (Preis)', focusFr: 'Le son « eu » est comme « oï » (Euro, teuer), différent de « ei » = « aï » (Preis)', items: [{ id: 'l8-euro-pron', german: 'Euro', english: 'euro', french: 'euro', gender: null, syllables: ['EU', 'ro'], pronunciation: 'OY-ro', example: { de: 'Das kostet zehn Euro.', en: 'That costs ten euros.', fr: 'Ça coûte dix euros.' } }, { id: 'l8-preis-pron', german: 'Preis', english: 'price', french: 'prix', gender: null, syllables: ['PREIS'], pronunciation: 'PRICE', example: { de: 'Der Preis ist gut.', en: 'The price is good.', fr: 'Le prix est bon.' } }] },

    { kind: 'wrapup',
      summary: 'You can now ask and say **prices**, pay with **mit Karte / bar**, and use the **accusative** (**den, einen**) with **kaufen** and **brauchen**. 🎉',
      summaryFr: 'Tu sais maintenant demander et dire les **prix**, payer **mit Karte / bar**, et utiliser l’**accusatif** (**den, einen**) avec **kaufen** et **brauchen**. 🎉',
      card: { title: 'Lesson 13 on one page', titleFr: 'La leçon 13 en une page', sections: [
        { heading: 'Prices', headingFr: 'Les prix', rows: [g('Was kostet das?', 'What does that cost?', 'Combien ça coûte ?'), g('drei Euro fünfzig', 'euros first, then cents', 'euros d’abord, puis centimes'), g('Euro, Cent: no -s', 'after a number', 'après un nombre')] },
        { heading: 'Paying', headingFr: 'Payer', rows: [g('Das macht vier Euro siebzig.', 'the total', 'le total'), g('Kann ich mit Karte bezahlen?', 'by card?', 'par carte ?'), g('Nur bar.', 'cash only', 'espèces seulement')] },
        { heading: 'Accusative', headingFr: 'Accusatif', rows: [g('der → den, ein → einen', 'masculine only', 'masculin seulement'), g('Ich kaufe einen Apfel.', 'I buy an apple.', 'J’achète une pomme.')] },
      ] } },
  ],
};

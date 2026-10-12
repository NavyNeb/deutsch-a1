import type { Lesson } from '../types';

export const b2lektion6: Lesson = {
  id: 'b2-l6', level: 'B2', module: 2, number: 6,
  title: { de: 'Passiversatzformen', en: 'Alternatives to the passive', fr: 'Les équivalents du passif' },
  theme: 'Saying the same as the passive differently: man, sich lassen + Infinitiv, sein + zu + Infinitiv, -bar/-lich, sich + Verb',
  themeFr: 'Dire la même chose autrement que le passif : man, sich lassen + infinitif, sein + zu + infinitif, -bar/-lich, sich + verbe',
  goals: ['Recognise five common passive substitutes', 'Choose the right one for "can be done" vs "must be done"', 'Rewrite a passive sentence in an active way', 'Vary your style in formal texts'],
  goalsFr: ['Reconnaître cinq équivalents courants du passif', 'Choisir la bonne forme pour « peut être fait » / « doit être fait »', 'Réécrire une phrase passive de façon active', 'Varier le style dans les textes formels'],
  steps: [
    { kind: 'intro', title: 'Das lässt sich lösen 🔧', titleFr: 'Cela peut se résoudre 🔧',
      scene: 'A technician explains what can and cannot be repaired.', sceneFr: 'Un technicien explique ce qui peut ou non être réparé.',
      goals: ['Express possibility and necessity without "werden"', 'Understand instructions and manuals', 'Avoid repeating the passive', 'Write more elegantly'],
      goalsFr: ['Exprimer possibilité et nécessité sans « werden »', 'Comprendre modes d’emploi et consignes', 'Éviter la répétition du passif', 'Écrire plus élégamment'] },

    { kind: 'vocab', item: { id: 'b2l6-reparieren', german: 'reparieren', english: 'to repair', french: 'réparer', gender: null, syllables: ['re', 'pa', 'RIE', 'ren'], pronunciation: 're-pah-REE-ren', example: { de: 'Der Fernseher lässt sich nicht mehr reparieren.', en: 'The TV can no longer be repaired.', fr: 'La télé ne peut plus être réparée.' } } },
    { kind: 'vocab', item: { id: 'b2l6-machbar', german: 'machbar', english: 'feasible', french: 'faisable', gender: null, syllables: ['MACH', 'bar'], pronunciation: 'MAHKH-bar', example: { de: 'Das Projekt ist machbar.', en: 'The project is feasible.', fr: 'Le projet est faisable.' } } },
    { kind: 'vocab', item: { id: 'b2l6-erreichbar', german: 'erreichbar', english: 'reachable', french: 'joignable', gender: null, syllables: ['er', 'REICH', 'bar'], pronunciation: 'er-RYKH-bar', example: { de: 'Ich bin telefonisch erreichbar.', en: 'I can be reached by phone.', fr: 'Je suis joignable par téléphone.' } } },
    { kind: 'vocab', item: { id: 'b2l6-vermeiden', german: 'vermeiden', english: 'to avoid', french: 'éviter', gender: null, syllables: ['ver', 'MEI', 'den'], pronunciation: 'fer-MY-den', example: { de: 'Fehler sind zu vermeiden.', en: 'Mistakes must be avoided.', fr: 'Les erreurs doivent être évitées.' } } },
    { kind: 'vocab', item: { id: 'b2l6-beweisen', german: 'beweisen', english: 'to prove', french: 'prouver', gender: null, syllables: ['be', 'WEI', 'sen'], pronunciation: 'be-VY-zen', example: { de: 'Das lässt sich leicht beweisen.', en: 'That can easily be proved.', fr: 'Cela se prouve facilement.' } } },
    { kind: 'vocab', item: { id: 'b2l6-loesbar', german: 'lösbar', english: 'solvable', french: 'soluble', gender: null, syllables: ['LÖS', 'bar'], pronunciation: 'LOES-bar', example: { de: 'Das Problem ist lösbar.', en: 'The problem is solvable.', fr: 'Le problème est soluble.' } } },
    { kind: 'vocab', item: { id: 'b2l6-verstaendlich', german: 'verständlich', english: 'understandable', french: 'compréhensible', gender: null, syllables: ['ver', 'STÄND', 'lich'], pronunciation: 'fer-SHTEND-likh', example: { de: 'Der Text ist gut verständlich.', en: 'The text is easy to understand.', fr: 'Le texte est facile à comprendre.' } } },
    { kind: 'vocab', item: { id: 'b2l6-zu-erledigen', german: 'erledigen', english: 'to take care of', french: 'régler', gender: null, syllables: ['er', 'LE', 'di', 'gen'], pronunciation: 'er-LAY-di-gen', example: { de: 'Das ist noch zu erledigen.', en: 'That still has to be done.', fr: 'Cela reste à faire.' } } },
    { kind: 'vocab', item: { id: 'b2l6-verkaufen', german: 'verkaufen', english: 'to sell', french: 'vendre', gender: null, syllables: ['ver', 'KAU', 'fen'], pronunciation: 'fer-KOW-fen', example: { de: 'Das Buch verkauft sich gut.', en: 'The book sells well.', fr: 'Le livre se vend bien.' } } },
    { kind: 'vocab', item: { id: 'b2l6-erkennen', german: 'erkennen', english: 'to recognise', french: 'reconnaître', gender: null, syllables: ['er', 'KEN', 'nen'], pronunciation: 'er-KEN-nen', example: { de: 'Der Fehler ist leicht zu erkennen.', en: 'The mistake is easy to spot.', fr: 'L’erreur est facile à repérer.' } } },

    { kind: 'grammar', note: {
      id: 'b2l6-forms-note', title: 'Five ways to avoid "werden + Partizip II"', titleFr: 'Cinq façons d’éviter « werden + Partizip II »',
      explanationMd: '1. **man** + active verb: *Man kann das reparieren.* = Das kann repariert werden.\n2. **sich lassen + Infinitiv** (= **can** be done): *Das lässt sich reparieren.*\n3. **sein + zu + Infinitiv** (**can** or **must** be done): *Der Fehler ist leicht zu erkennen.* / *Das ist bis morgen zu erledigen.*\n4. **-bar / -lich / -fähig adjectives** (= can be …): *erreichbar, lösbar, verständlich*\n5. **sich + Verb** for things that "do themselves": *Das Buch verkauft sich gut.*\n\nAll five describe **what happens to something** without naming who does it.',
      explanationMdFr: '1. **man** + verbe actif : *Man kann das reparieren.* = Das kann repariert werden.\n2. **sich lassen + infinitif** (= **peut** être fait) : *Das lässt sich reparieren.*\n3. **sein + zu + infinitif** (**peut** ou **doit** être fait) : *Der Fehler ist leicht zu erkennen.* / *Das ist bis morgen zu erledigen.*\n4. **adjectifs en -bar / -lich / -fähig** (= qui peut être …) : *erreichbar, lösbar, verständlich*\n5. **sich + verbe** pour ce qui « se fait tout seul » : *Das Buch verkauft sich gut.*\n\nLes cinq décrivent **ce qui arrive à quelque chose** sans nommer qui agit.',
      examples: [
        { de: 'Das Problem lässt sich schnell lösen.', en: 'The problem can be solved quickly.', fr: 'Le problème peut se résoudre vite.' },
        { de: 'Die Unterlagen sind bis Freitag einzureichen.', en: 'The documents must be submitted by Friday.', fr: 'Les documents doivent être remis d’ici vendredi.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b2l6-choose-note', title: 'Which one fits? Possibility vs. necessity', titleFr: 'Laquelle choisir ? Possibilité ou nécessité',
      explanationMd: '- **Possibility** (can be done): **sich lassen**, **-bar/-lich**, **sein + zu** (*leicht zu erkennen*)\n- **Necessity** (must be done): **sein + zu** (*ist zu erledigen*), also *muss … werden*\n- **Neutral, no agent**: **man**, **sich + Verb**\n\nWatch the **word order**: **sein + zu + Infinitiv** puts **zu + infinitive at the end**; with separable verbs, **zu goes inside**: *Das Formular ist auszufüllen.*',
      explanationMdFr: '- **Possibilité** (peut être fait) : **sich lassen**, **-bar/-lich**, **sein + zu** (*leicht zu erkennen*)\n- **Nécessité** (doit être fait) : **sein + zu** (*ist zu erledigen*), aussi *muss … werden*\n- **Neutre, sans agent** : **man**, **sich + verbe**\n\nAttention à l’**ordre des mots** : **sein + zu + infinitif** place **zu + infinitif à la fin** ; avec un verbe séparable, **zu s’intercale** : *Das Formular ist auszufüllen.*',
      examples: [
        { de: 'Das lässt sich nicht beweisen.', en: 'That cannot be proved.', fr: 'Cela ne peut pas se prouver.' },
        { de: 'Das Formular ist bis Montag auszufüllen.', en: 'The form must be filled in by Monday.', fr: 'Le formulaire doit être rempli d’ici lundi.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l6-e1', prompt: 'Das Problem ___ sich lösen. (can be solved)', answer: 'lässt', hint: 'sich lassen → lässt sich', hintFr: 'sich lassen → lässt sich' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l6-e2', prompt: '"Der Fehler ist leicht zu erkennen" means …', promptFr: '« Der Fehler ist leicht zu erkennen » signifie …', options: ['The mistake is easy to spot', 'The mistake does not exist', 'Someone recognises the mistake'], answer: 0, explain: 'sein + zu + infinitive = can be done.', explainFr: 'sein + zu + infinitif = peut être fait.', hint: 'sein + zu', hintFr: 'sein + zu' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l6-e3', prompt: 'Ich bin telefonisch ___ . (reachable)', answer: 'erreichbar', hint: '-bar = can be …', hintFr: '-bar = qui peut être …' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l6-e4', prompt: 'Rewrite: "Das kann repariert werden."', promptFr: 'Réécris : « Das kann repariert werden. »', options: ['Das lässt sich reparieren.', 'Das repariert sich muss.', 'Das ist reparieren zu.'], answer: 0, explain: 'können + passive = sich lassen + infinitive.', explainFr: 'können + passif = sich lassen + infinitif.', hint: 'sich lassen', hintFr: 'sich lassen' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l6-e5', tokens: ['schnell', 'lässt', 'Das', 'sich', 'lösen', 'Problem'], answer: ['Das', 'Problem', 'lässt', 'sich', 'schnell', 'lösen'], hint: 'lässt sich + adverb + infinitive at the end.', hintFr: 'lässt sich + adverbe + infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l6-e6', pairs: [ { de: 'lösbar', en: 'solvable', fr: 'soluble' }, { de: 'machbar', en: 'feasible', fr: 'faisable' }, { de: 'verständlich', en: 'understandable', fr: 'compréhensible' }, { de: 'erreichbar', en: 'reachable', fr: 'joignable' } ], hint: 'Match each adjective to its meaning.', hintFr: 'Associe chaque adjectif à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l6-e7', prompt: 'Listen. Can the TV be repaired?', promptFr: 'Écoute. La télé peut-elle être réparée ?', audio: { ttsText: 'Der Fernseher lässt sich leider nicht mehr reparieren.' }, options: ['No', 'Yes', 'Maybe tomorrow'], optionsFr: ['Non', 'Oui', 'Peut-être demain'], answer: 0, hint: 'lässt sich nicht = cannot be.', hintFr: 'lässt sich nicht = ne peut pas être.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l6-e8', prompt: 'Das Formular ist bis Montag ___ . (auszufüllen — fill in)', answer: 'auszufüllen', hint: 'separable verb: zu goes inside', hintFr: 'verbe séparable : zu s’intercale' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l6-e9', prompt: 'Which sentence expresses NECESSITY?', promptFr: 'Quelle phrase exprime la NÉCESSITÉ ?', options: ['Die Aufgabe ist bis morgen zu erledigen.', 'Die Aufgabe lässt sich erledigen.', 'Die Aufgabe ist erledigbar.'], answer: 0, explain: '"ist … zu erledigen" = must be done.', explainFr: '« ist … zu erledigen » = doit être fait.', hint: 'Deadline = necessity.', hintFr: 'Échéance = nécessité.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l6-e10', prompt: 'Listen. How is the book doing?', promptFr: 'Écoute. Comment va le livre ?', audio: { ttsText: 'Das Buch verkauft sich sehr gut.' }, options: ['It sells well', 'It is out of print', 'It is too expensive'], optionsFr: ['Il se vend bien', 'Il est épuisé', 'Il est trop cher'], answer: 0, hint: 'sich verkaufen = to sell.', hintFr: 'sich verkaufen = se vendre.' } },

    { kind: 'pronunciation', focus: 'Stress the verb in "lässt sich LÖsen" and the stem in -bar adjectives: "ERreichbar", "LÖSbar"', focusFr: 'Accentue le verbe dans « lässt sich LÖsen » et le radical des adjectifs en -bar : « ERreichbar », « LÖSbar »', items: [
      { id: 'b2l6-lassen-pron', german: 'lässt sich', english: 'can be', french: 'peut se', gender: null, syllables: ['LÄSST', 'sich'], pronunciation: 'lest zikh', example: { de: 'Das lässt sich machen.', en: 'That can be done.', fr: 'Cela peut se faire.' } },
      { id: 'b2l6-loesbar-pron', german: 'lösbar', english: 'solvable', french: 'soluble', gender: null, syllables: ['LÖS', 'bar'], pronunciation: 'LOES-bar', example: { de: 'Das ist lösbar.', en: 'That is solvable.', fr: 'C’est soluble.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now say "can be done" and "must be done" without **werden**: **man**, **sich lassen + Infinitiv**, **sein + zu + Infinitiv**, **-bar/-lich** and **sich + Verb**. Great for manuals, reports and polished writing. 🎉',
      summaryFr: 'Tu peux maintenant dire « peut être fait » et « doit être fait » sans **werden** : **man**, **sich lassen + infinitif**, **sein + zu + infinitif**, **-bar/-lich** et **sich + verbe**. Idéal pour notices, rapports et textes soignés. 🎉' },
  ],
};

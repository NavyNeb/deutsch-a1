import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion6: Lesson = {
  id: 'b2-l6', level: 'B2', module: 2, number: 6,
  title: { de: 'Passiversatzformen', en: 'Alternatives to the passive', fr: 'Les équivalents du passif' },
  theme: 'Saying the same as the passive differently: man, sich lassen + Infinitiv, sein + zu + Infinitiv, -bar/-lich, sich + Verb', themeFr: 'Dire la même chose autrement que le passif : man, sich lassen + infinitif, sein + zu + infinitif, -bar/-lich, sich + verbe',
  goals: ['Recognise five common passive substitutes', 'Choose the right one for "can be done" vs "must be done"', 'Rewrite a passive sentence in an active way', 'Vary your style in formal texts'], goalsFr: ['Reconnaître cinq équivalents courants du passif', 'Choisir la bonne forme pour « peut être fait » / « doit être fait »', 'Réécrire une phrase passive de façon active', 'Varier le style dans les textes formels'],
  canDo: g('Ich kann Passiv-Ersatzformen wie „man“, „sich lassen“, „sein + zu + Infinitiv“, „-bar“ und „sich + Verb“ erkennen und variabel einsetzen.', 'I can recognise passive substitutes like “man”, “sich lassen”, “sein + zu + infinitive”, “-bar” and “sich + verb” and use them flexibly.', 'Je sais reconnaître des équivalents du passif comme « man », « sich lassen », « sein + zu + infinitif », « -bar » et « sich + verbe » et les employer de façon variée.'),
  steps: [
    { kind: 'intro', title: 'Passiv-Ersatzformen 🔧', titleFr: 'Équivalents du passif 🔧',
      scene: 'An engineer reports on a broken TV, a form to be filled in and a book that sells well — without a single passive sentence.', sceneFr: 'Un ingénieur parle d’un téléviseur en panne, d’un formulaire à remplir et d’un livre qui se vend bien — sans une seule phrase passive.',
      goals: ['Recognise five common passive substitutes', 'Choose the right one for “can be done” vs “must be done”', 'Rewrite a passive sentence in an active way'],
      goalsFr: ['Reconnaître cinq équivalents courants du passif', 'Choisir le bon pour « peut être fait » vs « doit être fait »', 'Réécrire une phrase passive de manière active'] },

    // ───────────── 1 · Five substitutes ─────────────
    { kind: 'chapter', title: 'Fünf Alternativen zum Passiv', titleFr: 'Cinq alternatives au passif', blurb: 'man, sich lassen, sein + zu, -bar, sich + Verb.', blurbFr: 'man, sich lassen, sein + zu, -bar, sich + verbe.' },

    { kind: 'situation', title: 'Der Fernseher lässt sich nicht reparieren', titleFr: 'Le téléviseur ne peut pas être réparé',
      setting: 'A technician explains the situation.', settingFr: 'Un technicien explique la situation.',
      lines: [
        line('Techniker', 'Der Fernseher lässt sich leider nicht mehr reparieren. Man kann das nicht reparieren. Das Problem lässt sich schnell lösen.', 'The TV unfortunately cannot be repaired any more. One cannot repair that. The problem can be solved quickly.', 'Le téléviseur ne peut malheureusement plus être réparé. On ne peut pas réparer cela. Le problème peut être résolu rapidement.'),
        line('Techniker', 'Der Fehler ist leicht zu erkennen. Fehler sind zu vermeiden. Das ist noch zu erledigen. Das lässt sich leicht beweisen.', 'The mistake is easy to spot. Mistakes are to be avoided. That still has to be done. That can be proved easily.', 'L’erreur est facile à repérer. Les erreurs sont à éviter. Cela reste à faire. Cela peut se prouver facilement.'),
        line('Techniker', 'Ich bin telefonisch erreichbar. Das Projekt ist machbar. Das Problem ist lösbar. Der Text ist gut verständlich. Das Buch verkauft sich gut.', 'I can be reached by phone. The project is feasible. The problem is solvable. The text is easily understandable. The book sells well.', 'Je suis joignable par téléphone. Le projet est réalisable. Le problème est soluble. Le texte est bien compréhensible. Le livre se vend bien.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l6-e11', prompt: 'Can the TV be repaired?', promptFr: 'Le téléviseur peut-il être réparé ?', options: ['No', 'Yes, easily', 'Only tomorrow'], optionsFr: ['Non', 'Oui, facilement', 'Seulement demain'], answer: 0, explain: 'He says: “Der Fernseher lässt sich leider nicht mehr reparieren.”', explainFr: 'Il dit : « Der Fernseher lässt sich leider nicht mehr reparieren. »', hint: 'Look for “lässt sich … nicht”.', hintFr: 'Cherche « lässt sich … nicht ».' } },

    { kind: 'wordgroup', title: 'Möglich oder nicht?', titleFr: 'Possible ou non ?',
      items: [{ id: 'b2l6-reparieren', german: 'reparieren', english: 'to repair', french: 'réparer', gender: null, syllables: ['re', 'pa', 'RIE', 'ren'], pronunciation: 're-pah-REE-ren', example: { de: 'Der Fernseher lässt sich nicht mehr reparieren.', en: 'The TV can no longer be repaired.', fr: 'La télé ne peut plus être réparée.' } }, { id: 'b2l6-machbar', german: 'machbar', english: 'feasible', french: 'faisable', gender: null, syllables: ['MACH', 'bar'], pronunciation: 'MAHKH-bar', example: { de: 'Das Projekt ist machbar.', en: 'The project is feasible.', fr: 'Le projet est faisable.' } }, { id: 'b2l6-loesbar', german: 'lösbar', english: 'solvable', french: 'soluble', gender: null, syllables: ['LÖS', 'bar'], pronunciation: 'LOES-bar', example: { de: 'Das Problem ist lösbar.', en: 'The problem is solvable.', fr: 'Le problème est soluble.' } }, { id: 'b2l6-erreichbar', german: 'erreichbar', english: 'reachable', french: 'joignable', gender: null, syllables: ['er', 'REICH', 'bar'], pronunciation: 'er-RYKH-bar', example: { de: 'Ich bin telefonisch erreichbar.', en: 'I can be reached by phone.', fr: 'Je suis joignable par téléphone.' } }, { id: 'b2l6-verstaendlich', german: 'verständlich', english: 'understandable', french: 'compréhensible', gender: null, syllables: ['ver', 'STÄND', 'lich'], pronunciation: 'fer-SHTEND-likh', example: { de: 'Der Text ist gut verständlich.', en: 'The text is easy to understand.', fr: 'Le texte est facile à comprendre.' } }] },

    { kind: 'wordgroup', title: 'Tun und vermeiden', titleFr: 'Faire et éviter',
      items: [{ id: 'b2l6-vermeiden', german: 'vermeiden', english: 'to avoid', french: 'éviter', gender: null, syllables: ['ver', 'MEI', 'den'], pronunciation: 'fer-MY-den', example: { de: 'Fehler sind zu vermeiden.', en: 'Mistakes must be avoided.', fr: 'Les erreurs doivent être évitées.' } }, { id: 'b2l6-beweisen', german: 'beweisen', english: 'to prove', french: 'prouver', gender: null, syllables: ['be', 'WEI', 'sen'], pronunciation: 'be-VY-zen', example: { de: 'Das lässt sich leicht beweisen.', en: 'That can easily be proved.', fr: 'Cela se prouve facilement.' } }, { id: 'b2l6-zu-erledigen', german: 'erledigen', english: 'to take care of', french: 'régler', gender: null, syllables: ['er', 'LE', 'di', 'gen'], pronunciation: 'er-LAY-di-gen', example: { de: 'Das ist noch zu erledigen.', en: 'That still has to be done.', fr: 'Cela reste à faire.' } }, { id: 'b2l6-erkennen', german: 'erkennen', english: 'to recognise', french: 'reconnaître', gender: null, syllables: ['er', 'KEN', 'nen'], pronunciation: 'er-KEN-nen', example: { de: 'Der Fehler ist leicht zu erkennen.', en: 'The mistake is easy to spot.', fr: 'L’erreur est facile à repérer.' } }, { id: 'b2l6-verkaufen', german: 'verkaufen', english: 'to sell', french: 'vendre', gender: null, syllables: ['ver', 'KAU', 'fen'], pronunciation: 'fer-KOW-fen', example: { de: 'Das Buch verkauft sich gut.', en: 'The book sells well.', fr: 'Le livre se vend bien.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l6-ersatzformen', title: 'Five ways to avoid “werden + Partizip II”', titleFr: 'Cinq façons d’éviter « werden + participe II »',
      lead: 'man · sich lassen + infinitive · sein + zu + infinitive · -bar / -lich adjectives · sich + verb.',
      leadFr: 'man · sich lassen + infinitif · sein + zu + infinitif · adjectifs en -bar / -lich · sich + verbe.',
      explanationMd: 'Five substitutes for the passive: **1 · man + active verb**: **Man kann das reparieren.** = **Das kann repariert werden.** **2 · sich lassen + infinitive** (= **can** be done): **Das lässt sich reparieren.** **3 · sein + zu + infinitive** (**can** or **must** be done): **Der Fehler ist leicht zu erkennen. / Das ist bis morgen zu erledigen.** **4 · -bar / -lich / -fähig adjectives** (= can be …): **erreichbar, lösbar, verständlich.** **5 · sich + verb** for things that “do themselves”: **Das Buch verkauft sich gut.** All five describe **what happens to something** without naming **who does it**.',
      explanationMdFr: 'Cinq équivalents du passif : **1 · man + verbe actif** : **Man kann das reparieren.** = **Das kann repariert werden.** **2 · sich lassen + infinitif** (= **peut** être fait) : **Das lässt sich reparieren.** **3 · sein + zu + infinitif** (**peut** ou **doit** être fait) : **Der Fehler ist leicht zu erkennen. / Das ist bis morgen zu erledigen.** **4 · adjectifs en -bar / -lich / -fähig** (= peut être …) : **erreichbar, lösbar, verständlich.** **5 · sich + verbe** pour des choses qui « se font toutes seules » : **Das Buch verkauft sich gut.** Les cinq décrivent **ce qui arrive à quelque chose** sans nommer **qui le fait**.',
      tables: [{ title: 'Five substitutes', titleFr: 'Cinq équivalents', headers: ['Form', 'Meaning', 'Example'], headersFr: ['Forme', 'Sens', 'Exemple'],
        rows: [['man + active', 'neutral', 'Man kann das reparieren.'], ['sich lassen + inf.', 'can be done', 'Das lässt sich reparieren.'], ['sein + zu + inf.', 'can / must be done', 'Das ist bis morgen zu erledigen.'], ['-bar / -lich', 'can be …', 'Das Problem ist lösbar.'], ['sich + verb', 'does itself', 'Das Buch verkauft sich gut.']],
        rowsFr: [['man + actif', 'neutre', 'Man kann das reparieren.'], ['sich lassen + inf.', 'peut être fait', 'Das lässt sich reparieren.'], ['sein + zu + inf.', 'peut / doit être fait', 'Das ist bis morgen zu erledigen.'], ['-bar / -lich', 'peut être …', 'Das Problem ist lösbar.'], ['sich + verbe', 'se fait tout seul', 'Das Buch verkauft sich gut.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Problem', role: 'subject' }, { text: 'lässt', role: 'verb' }, { text: 'sich', role: 'other' }, { text: 'schnell', role: 'other' }, { text: 'lösen.', role: 'verb' }], en: 'The problem can be solved quickly.', fr: 'Le problème peut être résolu rapidement.' },
        { parts: [{ text: 'Der Fehler', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'leicht', role: 'other' }, { text: 'zu erkennen.', role: 'verb' }], en: 'The mistake is easy to spot.', fr: 'L’erreur est facile à repérer.' },
      ],
      contrast: {
        a: { label: 'Passive', labelFr: 'Passif', note: 'werden + Partizip II', noteFr: 'werden + participe II', examples: [g('Das Problem kann schnell gelöst werden.', 'The problem can be solved quickly.', 'Le problème peut être résolu rapidement.'), g('Das Formular muss ausgefüllt werden.', 'The form must be filled in.', 'Le formulaire doit être rempli.')] },
        b: { label: 'Substitute', labelFr: 'Équivalent', note: 'active in form', noteFr: 'actif dans la forme', examples: [g('Das Problem lässt sich schnell lösen.', 'The problem can be solved quickly.', 'Le problème peut être résolu rapidement.'), g('Das Formular ist auszufüllen.', 'The form must be filled in.', 'Le formulaire est à remplir.')] },
      },
      examples: [
        g('Das Problem lässt sich schnell lösen.', 'The problem can be solved quickly.', 'Le problème peut être résolu rapidement.'),
        g('Der Fehler ist leicht zu erkennen.', 'The mistake is easy to spot.', 'L’erreur est facile à repérer.'),
        g('Das Formular ist bis Montag auszufüllen.', 'The form is to be filled in by Monday.', 'Le formulaire est à remplir d’ici lundi.'),
        g('Ich bin telefonisch erreichbar.', 'I can be reached by phone.', 'Je suis joignable par téléphone.'),
        g('Das Buch verkauft sich sehr gut.', 'The book sells very well.', 'Le livre se vend très bien.'),
        g('Man kann das nicht reparieren.', 'One cannot repair that.', 'On ne peut pas réparer cela.'),
      ],
      mistakes: [
        { wrong: 'Das Problem lässt sich schnell gelöst.', right: 'Das Problem lässt sich schnell lösen.', why: 'sich lassen takes the infinitive.', whyFr: 'sich lassen prend l’infinitif.' },
        { wrong: 'Das Formular ist ausfüllen.', right: 'Das Formular ist auszufüllen.', why: 'sein + zu + infinitive; zu goes inside separable verbs.', whyFr: 'sein + zu + infinitif ; zu se glisse dans les verbes séparables.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l6-e1', prompt: 'Das Problem ___ sich lösen. (can be solved)', answer: 'lässt', hint: 'sich lassen → lässt sich', hintFr: 'sich lassen → lässt sich' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l6-e2', prompt: '"Der Fehler ist leicht zu erkennen" means …', promptFr: '« Der Fehler ist leicht zu erkennen » signifie …', options: ['The mistake is easy to spot', 'The mistake does not exist', 'Someone recognises the mistake'], answer: 0, explain: 'sein + zu + infinitive = can be done.', explainFr: 'sein + zu + infinitif = peut être fait.', hint: 'sein + zu', hintFr: 'sein + zu' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l6-e3', prompt: 'Ich bin telefonisch ___ . (reachable)', answer: 'erreichbar', hint: '-bar = can be …', hintFr: '-bar = qui peut être …' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l6-e4', prompt: 'Rewrite: "Das kann repariert werden."', promptFr: 'Réécris : « Das kann repariert werden. »', options: ['Das lässt sich reparieren.', 'Das repariert sich muss.', 'Das ist reparieren zu.'], answer: 0, explain: 'können + passive = sich lassen + infinitive.', explainFr: 'können + passif = sich lassen + infinitif.', hint: 'sich lassen', hintFr: 'sich lassen' } },

    // ───────────── 2 · Possibility or necessity ─────────────
    { kind: 'chapter', title: 'Möglichkeit oder Notwendigkeit?', titleFr: 'Possibilité ou nécessité ?', blurb: 'Choose the right substitute.', blurbFr: 'Choisis le bon équivalent.' },

    { kind: 'situation', title: 'Muss oder kann?', titleFr: 'Doit ou peut ?',
      setting: 'A manager distributes tasks.', settingFr: 'Une cheffe répartit des tâches.',
      lines: [
        line('Chefin', 'Das Formular ist bis Montag auszufüllen. Die Aufgabe ist bis morgen zu erledigen. Die Unterlagen sind bis Freitag einzureichen.', 'The form must be filled in by Monday. The task must be done by tomorrow. The documents must be submitted by Friday.', 'Le formulaire est à remplir d’ici lundi. La tâche est à accomplir d’ici demain. Les documents sont à remettre d’ici vendredi.'),
        line('Mitarbeiter', 'Das lässt sich nicht beweisen. Das lässt sich machen. Das Buch verkauft sich gut.', 'That cannot be proved. That can be done. The book sells well.', 'Cela ne peut pas se prouver. Cela peut se faire. Le livre se vend bien.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b2l6-moeglich-noetig', title: 'Possibility vs necessity', titleFr: 'Possibilité vs nécessité',
      lead: 'Possibility: sich lassen, -bar, sein + zu (leicht zu erkennen). Necessity: sein + zu (ist zu erledigen).',
      leadFr: 'Possibilité : sich lassen, -bar, sein + zu (leicht zu erkennen). Nécessité : sein + zu (ist zu erledigen).',
      explanationMd: '**Possibility** (can be done): **sich lassen**, **-bar / -lich**, **sein + zu** with an adverb like **leicht**: **Das lässt sich lösen. Das Problem ist lösbar. Der Fehler ist leicht zu erkennen.** **Necessity** (must be done): **sein + zu** with a **deadline or duty**: **Das ist bis morgen zu erledigen.** (also **muss … werden**). **Neutral, no agent**: **man**, **sich + verb**: **Man kann das beweisen. Das Buch verkauft sich gut.** Watch the **word order**: **sein + zu + infinitive** puts **zu + infinitive at the end**; with **separable verbs**, **zu goes inside**: **Das Formular ist auszufüllen.**',
      explanationMdFr: '**Possibilité** (peut être fait) : **sich lassen**, **-bar / -lich**, **sein + zu** avec un adverbe comme **leicht** : **Das lässt sich lösen. Das Problem ist lösbar. Der Fehler ist leicht zu erkennen.** **Nécessité** (doit être fait) : **sein + zu** avec une **échéance ou un devoir** : **Das ist bis morgen zu erledigen.** (aussi **muss … werden**). **Neutre, sans agent** : **man**, **sich + verbe** : **Man kann das beweisen. Das Buch verkauft sich gut.** Attention à l’**ordre des mots** : **sein + zu + infinitif** met **zu + infinitif à la fin** ; avec les **verbes séparables**, **zu se glisse à l’intérieur** : **Das Formular ist auszufüllen.**',
      tables: [{ title: 'Possibility or necessity', titleFr: 'Possibilité ou nécessité', headers: ['Meaning', 'Form', 'Example'], headersFr: ['Sens', 'Forme', 'Exemple'],
        rows: [['can', 'sich lassen', 'Das lässt sich nicht beweisen.'], ['can', '-bar / -lich', 'Das Problem ist lösbar.'], ['can', 'sein + zu (leicht)', 'Der Fehler ist leicht zu erkennen.'], ['must', 'sein + zu (deadline)', 'Das Formular ist bis Montag auszufüllen.'], ['neutral', 'man / sich + verb', 'Das Buch verkauft sich gut.']],
        rowsFr: [['peut', 'sich lassen', 'Das lässt sich nicht beweisen.'], ['peut', '-bar / -lich', 'Das Problem ist lösbar.'], ['peut', 'sein + zu (leicht)', 'Der Fehler ist leicht zu erkennen.'], ['doit', 'sein + zu (échéance)', 'Das Formular ist bis Montag auszufüllen.'], ['neutre', 'man / sich + verbe', 'Das Buch verkauft sich gut.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Formular', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'bis Montag', role: 'time' }, { text: 'auszufüllen.', role: 'verb' }], en: 'The form must be filled in by Monday.', fr: 'Le formulaire est à remplir d’ici lundi.' },
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'lässt', role: 'verb' }, { text: 'sich', role: 'other' }, { text: 'nicht', role: 'other' }, { text: 'beweisen.', role: 'verb' }], en: 'That cannot be proved.', fr: 'Cela ne peut pas se prouver.' },
      ],
      contrast: {
        a: { label: 'Possibility', labelFr: 'Possibilité', note: 'can', noteFr: 'peut', examples: [g('Das Problem ist lösbar.', 'The problem is solvable.', 'Le problème est soluble.'), g('Der Text ist gut verständlich.', 'The text is easy to understand.', 'Le texte est bien compréhensible.')] },
        b: { label: 'Necessity', labelFr: 'Nécessité', note: 'must', noteFr: 'doit', examples: [g('Die Aufgabe ist bis morgen zu erledigen.', 'The task must be done by tomorrow.', 'La tâche est à accomplir d’ici demain.'), g('Die Unterlagen sind bis Freitag einzureichen.', 'The documents must be submitted by Friday.', 'Les documents sont à remettre d’ici vendredi.')] },
      },
      examples: [
        g('Das lässt sich nicht beweisen.', 'That cannot be proved.', 'Cela ne peut pas se prouver.'),
        g('Das Formular ist bis Montag auszufüllen.', 'The form must be filled in by Monday.', 'Le formulaire est à remplir d’ici lundi.'),
        g('Die Unterlagen sind bis Freitag einzureichen.', 'The documents must be submitted by Friday.', 'Les documents sont à remettre d’ici vendredi.'),
        g('Fehler sind zu vermeiden.', 'Mistakes are to be avoided.', 'Les erreurs sont à éviter.'),
        g('Der Text ist gut verständlich.', 'The text is easy to understand.', 'Le texte est bien compréhensible.'),
        g('Das Projekt ist machbar.', 'The project is feasible.', 'Le projet est réalisable.'),
      ],
      mistakes: [
        { wrong: 'Die Aufgabe lässt sich bis morgen erledigen. (duty)', right: 'Die Aufgabe ist bis morgen zu erledigen.', why: 'A duty with a deadline uses sein + zu.', whyFr: 'Un devoir avec échéance utilise sein + zu.' },
        { wrong: 'Der Fehler ist leicht erkennen.', right: 'Der Fehler ist leicht zu erkennen.', why: 'sein + zu + infinitive.', whyFr: 'sein + zu + infinitif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l6-e5', tokens: ['schnell', 'lässt', 'Das', 'sich', 'lösen', 'Problem'], answer: ['Das', 'Problem', 'lässt', 'sich', 'schnell', 'lösen'], hint: 'lässt sich + adverb + infinitive at the end.', hintFr: 'lässt sich + adverbe + infinitif à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l6-e6', pairs: [{ de: 'lösbar', en: 'solvable', fr: 'soluble' }, { de: 'machbar', en: 'feasible', fr: 'faisable' }, { de: 'verständlich', en: 'understandable', fr: 'compréhensible' }, { de: 'erreichbar', en: 'reachable', fr: 'joignable' }], hint: 'Match each adjective to its meaning.', hintFr: 'Associe chaque adjectif à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l6-e8', prompt: 'Das Formular ist bis Montag ___ . (auszufüllen — fill in)', answer: 'auszufüllen', hint: 'separable verb: zu goes inside', hintFr: 'verbe séparable : zu s’intercale' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l6-e9', prompt: 'Which sentence expresses NECESSITY?', promptFr: 'Quelle phrase exprime la NÉCESSITÉ ?', options: ['Die Aufgabe ist bis morgen zu erledigen.', 'Die Aufgabe lässt sich erledigen.', 'Die Aufgabe ist erledigbar.'], answer: 0, explain: '"ist … zu erledigen" = must be done.', explainFr: '« ist … zu erledigen » = doit être fait.', hint: 'Deadline = necessity.', hintFr: 'Échéance = nécessité.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l6-e7', prompt: 'Listen. Can the TV be repaired?', promptFr: 'Écoute. La télé peut-elle être réparée ?', audio: { ttsText: 'Der Fernseher lässt sich leider nicht mehr reparieren.' }, options: ['No', 'Yes', 'Maybe tomorrow'], optionsFr: ['Non', 'Oui', 'Peut-être demain'], answer: 0, hint: 'lässt sich nicht = cannot be.', hintFr: 'lässt sich nicht = ne peut pas être.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l6-e10', prompt: 'Listen. How is the book doing?', promptFr: 'Écoute. Comment va le livre ?', audio: { ttsText: 'Das Buch verkauft sich sehr gut.' }, options: ['It sells well', 'It is out of print', 'It is too expensive'], optionsFr: ['Il se vend bien', 'Il est épuisé', 'Il est trop cher'], answer: 0, hint: 'sich verkaufen = to sell.', hintFr: 'sich verkaufen = se vendre.' } },

    { kind: 'pronunciation', focus: 'Stress the verb in "lässt sich LÖsen" and the stem in -bar adjectives: "ERreichbar", "LÖSbar"', focusFr: 'Accentue le verbe dans « lässt sich LÖsen » et le radical des adjectifs en -bar : « ERreichbar », « LÖSbar »', items: [{ id: 'b2l6-lassen-pron', german: 'lässt sich', english: 'can be', french: 'peut se', gender: null, syllables: ['LÄSST', 'sich'], pronunciation: 'lest zikh', example: { de: 'Das lässt sich machen.', en: 'That can be done.', fr: 'Cela peut se faire.' } }, { id: 'b2l6-loesbar-pron', german: 'lösbar', english: 'solvable', french: 'soluble', gender: null, syllables: ['LÖS', 'bar'], pronunciation: 'LOES-bar', example: { de: 'Das ist lösbar.', en: 'That is solvable.', fr: 'C’est soluble.' } }] },

    { kind: 'wrapup',
      summary: 'You can now replace the passive with **man**, **sich lassen**, **sein + zu + infinitive**, **-bar / -lich** and **sich + verb** — for **possibility** and **necessity**. 🎉',
      summaryFr: 'Tu sais maintenant remplacer le passif par **man**, **sich lassen**, **sein + zu + infinitif**, **-bar / -lich** et **sich + verbe** — pour la **possibilité** et la **nécessité**. 🎉',
      card: { title: 'Passive substitutes on one page', titleFr: 'Les équivalents du passif en une page', sections: [
        { heading: 'Can be done', headingFr: 'Peut être fait', rows: [g('sich lassen · -bar · leicht zu + inf.', 'Das lässt sich lösen.', 'Das lässt sich lösen.')] },
        { heading: 'Must be done', headingFr: 'Doit être fait', rows: [g('ist … zu + infinitive', 'Das ist bis morgen zu erledigen.', 'Das ist bis morgen zu erledigen.')] },
        { heading: 'Neutral', headingFr: 'Neutre', rows: [g('man · sich + verb', 'Das Buch verkauft sich gut.', 'Das Buch verkauft sich gut.')] },
      ] } },
  ],
};

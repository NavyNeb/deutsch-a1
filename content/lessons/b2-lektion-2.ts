import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion2: Lesson = {
  id: 'b2-l2', level: 'B2', module: 1, number: 2,
  title: { de: 'Argumentieren', en: 'Building an argument', fr: 'Argumenter' },
  theme: 'Weighing pros and cons, conceding a point and drawing a conclusion (obwohl, trotzdem, dennoch, folglich)', themeFr: 'Peser le pour et le contre, concéder un point et conclure (obwohl, trotzdem, dennoch, folglich)',
  goals: ['Present arguments for and against', 'Concede a point with "obwohl", "trotzdem", "dennoch"', 'Draw a conclusion with "deshalb", "folglich", "also"', 'Structure a short argumentative text'], goalsFr: ['Présenter des arguments pour et contre', 'Concéder un point avec « obwohl », « trotzdem », « dennoch »', 'Conclure avec « deshalb », « folglich », « also »', 'Structurer un court texte argumentatif'],
  canDo: g('Ich kann Argumente für und gegen etwas abwägen, mit „obwohl“, „trotzdem“, „dennoch“ einräumen und mit „folglich“ eine Schlussfolgerung ziehen.', 'I can weigh arguments for and against, concede with “obwohl”, “trotzdem”, “dennoch” and draw a conclusion with “folglich”.', 'Je sais peser des arguments pour et contre, concéder avec « obwohl », « trotzdem », « dennoch » et tirer une conclusion avec « folglich ».'),
  steps: [
    { kind: 'intro', title: 'Ein Argument aufbauen ⚖️', titleFr: 'Construire un argument ⚖️',
      scene: 'A city council debates banning cars from the centre. Speakers weigh pros and cons, concede points and draw a conclusion.', sceneFr: 'Un conseil municipal débat de l’interdiction des voitures dans le centre. Les orateurs pèsent le pour et le contre, concèdent des points et concluent.',
      goals: ['Present arguments for and against', 'Concede a point with obwohl, trotzdem, dennoch', 'Draw a conclusion with deshalb, folglich, also'],
      goalsFr: ['Présenter des arguments pour et contre', 'Concéder un point avec obwohl, trotzdem, dennoch', 'Tirer une conclusion avec deshalb, folglich, also'] },

    // ───────────── 1 · For and against ─────────────
    { kind: 'chapter', title: 'Dafür und dagegen', titleFr: 'Pour et contre', blurb: 'Weighing advantages and disadvantages.', blurbFr: 'Peser avantages et inconvénients.' },

    { kind: 'situation', title: 'Autos aus der Innenstadt?', titleFr: 'Des voitures hors du centre ?',
      setting: 'Councillors put forward their theses.', settingFr: 'Des conseillers avancent leurs thèses.',
      lines: [
        line('Stadträtin', 'Ich vertrete die These, dass Autos in der Innenstadt überflüssig sind. Ein Vorteil ist die saubere Luft. Dafür spricht der Umweltschutz.', 'I put forward the thesis that cars are superfluous in the city centre. An advantage is the clean air. Environmental protection speaks in favour.', 'Je soutiens la thèse que les voitures sont superflues dans le centre-ville. Un avantage est l’air pur. La protection de l’environnement va dans ce sens.'),
        line('Stadtrat', 'Der Nachteil sind die höheren Kosten für Händler. Dagegen spricht der Preis für die Umstellung. Das Gegenteil ist der Fall, sagen die Händler.', 'The disadvantage is the higher costs for traders. The price of the changeover speaks against it. The opposite is the case, say the traders.', 'L’inconvénient, ce sont les coûts plus élevés pour les commerçants. Le prix de la transition s’y oppose. Le contraire est vrai, disent les commerçants.'),
        line('Stadträtin', 'Die Studie belegt diese These: Die Umsätze steigen. Man könnte einwenden, dass nicht alle profitieren.', 'The study backs up this thesis: sales rise. One could object that not everyone benefits.', 'L’étude confirme cette thèse : les chiffres d’affaires augmentent. On pourrait objecter que tous ne profitent pas.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l2-e12', prompt: 'What does the study show?', promptFr: 'Que montre l’étude ?', options: ['Sales rise', 'Sales fall', 'Nothing changes'], optionsFr: ['Les ventes augmentent', 'Les ventes baissent', 'Rien ne change'], answer: 0, explain: 'She says: “Die Studie belegt diese These: Die Umsätze steigen.”', explainFr: 'Elle dit : « Die Studie belegt diese These: Die Umsätze steigen. »', hint: 'Look for “belegt”.', hintFr: 'Cherche « belegt ».' } },

    { kind: 'wordgroup', title: 'Für und wider', titleFr: 'Pour et contre',
      items: [{ id: 'b2l2-vorteil', german: 'der Vorteil', english: 'the advantage', french: 'l’avantage', gender: 'der', syllables: ['VOR', 'teil'], pronunciation: 'dair FOR-tile', example: { de: 'Ein Vorteil ist die saubere Luft.', en: 'One advantage is the clean air.', fr: 'Un avantage est l’air pur.' } }, { id: 'b2l2-nachteil', german: 'der Nachteil', english: 'the disadvantage', french: 'l’inconvénient', gender: 'der', syllables: ['NACH', 'teil'], pronunciation: 'dair NAKH-tile', example: { de: 'Der Nachteil sind die höheren Kosten.', en: 'The disadvantage is the higher cost.', fr: 'L’inconvénient, ce sont les coûts plus élevés.' } }, { id: 'b2l2-dafuer', german: 'dafür sprechen', english: 'to speak in favour', french: 'plaider en faveur', gender: null, syllables: ['da', 'FÜR', 'spre', 'chen'], pronunciation: 'dah-FUER shpre-khen', example: { de: 'Dafür spricht der Umweltschutz.', en: 'Environmental protection speaks in favour.', fr: 'La protection de l’environnement plaide en faveur.' } }, { id: 'b2l2-dagegen', german: 'dagegen sprechen', english: 'to speak against', french: 'plaider contre', gender: null, syllables: ['da', 'GE', 'gen', 'spre', 'chen'], pronunciation: 'dah-GAY-gen shpre-khen', example: { de: 'Dagegen spricht der Preis.', en: 'The price speaks against it.', fr: 'Le prix plaide contre.' } }, { id: 'b2l2-these', german: 'die These', english: 'the thesis / claim', french: 'la thèse', gender: 'die', syllables: ['THE', 'se'], pronunciation: 'dee TAY-ze', example: { de: 'Ich vertrete die These, dass Autos überflüssig sind.', en: 'I argue that cars are unnecessary.', fr: 'Je soutiens que les voitures sont superflues.' } }, { id: 'b2l2-belegen', german: 'belegen', english: 'to prove / back up', french: 'prouver', gender: null, syllables: ['be', 'LE', 'gen'], pronunciation: 'be-LAY-gen', example: { de: 'Die Studie belegt diese These.', en: 'The study backs up this thesis.', fr: 'L’étude confirme cette thèse.' } }, { id: 'b2l2-gegenteil', german: 'das Gegenteil', english: 'the opposite', french: 'le contraire', gender: 'das', syllables: ['GE', 'gen', 'teil'], pronunciation: 'das GAY-gen-tile', example: { de: 'Das Gegenteil ist der Fall.', en: 'The opposite is the case.', fr: 'C’est le contraire.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l2-argumentieren', title: 'Structuring an argument: four moves', titleFr: 'Structurer un argument : quatre étapes',
      lead: 'Thesis → reasons / proof → counter-argument → conclusion.',
      leadFr: 'Thèse → raisons / preuves → contre-argument → conclusion.',
      explanationMd: 'A clear argument has **four moves**: **1 · Thesis**: **Ich vertrete die These, dass …** **2 · Reasons / proof**: **Dafür spricht, dass … / Die Studie belegt, dass …** **3 · Counter-argument**: **Dagegen spricht … / Man könnte einwenden, dass …** **4 · Conclusion**: **Deshalb / Folglich / Also / Zusammenfassend lässt sich sagen, dass …** **dafür spricht** and **dagegen spricht** are **fixed phrases**: the **thing that speaks** is the **subject**: **Dafür spricht der Umweltschutz.** (plural: **Dafür sprechen die Kosten.**). **deshalb, folglich, also** are **adverbs**: **position 1**, **verb second**.',
      explanationMdFr: 'Un argument clair a **quatre étapes** : **1 · Thèse** : **Ich vertrete die These, dass …** **2 · Raisons / preuves** : **Dafür spricht, dass … / Die Studie belegt, dass …** **3 · Contre-argument** : **Dagegen spricht … / Man könnte einwenden, dass …** **4 · Conclusion** : **Deshalb / Folglich / Also / Zusammenfassend lässt sich sagen, dass …** **dafür spricht** et **dagegen spricht** sont des **expressions fixes** : ce **qui plaide** est le **sujet** : **Dafür spricht der Umweltschutz.** (pluriel : **Dafür sprechen die Kosten.**). **deshalb, folglich, also** sont des **adverbes** : **position 1**, **verbe en deuxième**.',
      tables: [{ title: 'Four moves', titleFr: 'Quatre étapes', headers: ['Move', 'German'], headersFr: ['Étape', 'Allemand'],
        rows: [['Thesis', 'Ich vertrete die These, dass Autos überflüssig sind.'], ['Proof', 'Dafür spricht der Umweltschutz. · Die Studie belegt diese These.'], ['Counter-argument', 'Dagegen spricht der Preis. · Man könnte einwenden, dass …'], ['Conclusion', 'Folglich sollten wir den Verkehr reduzieren.']],
        rowsFr: [['Thèse', 'Ich vertrete die These, dass Autos überflüssig sind.'], ['Preuve', 'Dafür spricht der Umweltschutz. · Die Studie belegt diese These.'], ['Contre-argument', 'Dagegen spricht der Preis. · Man könnte einwenden, dass …'], ['Conclusion', 'Folglich sollten wir den Verkehr reduzieren.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Dafür', role: 'other' }, { text: 'spricht', role: 'verb' }, { text: 'der Umweltschutz.', role: 'subject' }], en: 'Environmental protection speaks in favour.', fr: 'La protection de l’environnement plaide en ce sens.' },
        { parts: [{ text: 'Die Studie', role: 'subject' }, { text: 'belegt', role: 'verb' }, { text: 'diese These.', role: 'accusative' }], en: 'The study backs up this thesis.', fr: 'L’étude confirme cette thèse.' },
      ],
      contrast: {
        a: { label: 'Pro', labelFr: 'Pour', note: 'dafür spricht', noteFr: 'dafür spricht', examples: [g('Dafür spricht, dass die Luft sauberer wird.', 'In favour speaks that the air gets cleaner.', 'Ce qui plaide pour, c’est que l’air devient plus pur.'), g('Ein Vorteil ist die saubere Luft.', 'An advantage is the clean air.', 'Un avantage est l’air pur.')] },
        b: { label: 'Contra', labelFr: 'Contre', note: 'dagegen spricht', noteFr: 'dagegen spricht', examples: [g('Dagegen spricht der Preis.', 'The price speaks against it.', 'Le prix plaide contre.'), g('Der Nachteil sind die höheren Kosten.', 'The disadvantage is the higher costs.', 'L’inconvénient, ce sont les coûts plus élevés.')] },
      },
      examples: [
        g('Ich vertrete die These, dass Autos überflüssig sind.', 'I put forward the thesis that cars are superfluous.', 'Je soutiens la thèse que les voitures sont superflues.'),
        g('Dafür spricht der Umweltschutz.', 'Environmental protection speaks in favour.', 'La protection de l’environnement plaide en ce sens.'),
        g('Dagegen spricht der Preis.', 'The price speaks against it.', 'Le prix plaide contre.'),
        g('Die Studie belegt diese These.', 'The study backs up this thesis.', 'L’étude confirme cette thèse.'),
        g('Man könnte einwenden, dass nicht alle profitieren.', 'One could object that not everyone benefits.', 'On pourrait objecter que tous ne profitent pas.'),
        g('Das Gegenteil ist der Fall.', 'The opposite is the case.', 'Le contraire est vrai.'),
      ],
      mistakes: [
        { wrong: 'Dafür der Umweltschutz spricht.', right: 'Dafür spricht der Umweltschutz.', why: 'After dafür the verb is second.', whyFr: 'Après dafür, le verbe est en deuxième.' },
        { wrong: 'Dafür sprechen der Umweltschutz und die Kosten.', right: 'Dafür sprechen der Umweltschutz und die Kosten.', why: 'Correct: two subjects → plural verb.', whyFr: 'Correct : deux sujets → verbe au pluriel.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l2-e5', prompt: 'Der Preis spricht ___. (against it)', answer: 'dagegen', hint: 'dafür = for, dagegen = against', hintFr: 'dafür = pour, dagegen = contre' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b2l2-e6', pairs: [{ de: 'der Vorteil', en: 'advantage', fr: 'avantage' }, { de: 'der Nachteil', en: 'disadvantage', fr: 'inconvénient' }, { de: 'belegen', en: 'to back up', fr: 'prouver' }, { de: 'das Gegenteil', en: 'the opposite', fr: 'le contraire' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l2-e8', prompt: 'Die Studie ___ diese These. (backs up)', answer: 'belegt', hint: 'belegen → belegt', hintFr: 'belegen → belegt' } },

    // ───────────── 2 · Conceding ─────────────
    { kind: 'chapter', title: 'Etwas einräumen: obwohl, trotzdem, dennoch', titleFr: 'Concéder : obwohl, trotzdem, dennoch', blurb: 'Despite that.', blurbFr: 'Malgré cela.' },

    { kind: 'situation', title: 'Obwohl es teuer ist …', titleFr: 'Bien que ce soit cher …',
      setting: 'Councillors admit points and push back.', settingFr: 'Des conseillers reconnaissent des points et contre-attaquent.',
      lines: [
        line('Stadträtin', 'Obwohl der Plan gut ist, gibt es Widerstand. Der Plan ist gut. Dennoch gibt es Widerstand.', 'Although the plan is good there is resistance. The plan is good. Nevertheless there is resistance.', 'Bien que le plan soit bon, il y a de la résistance. Le plan est bon. Pourtant, il y a de la résistance.'),
        line('Stadtrat', 'Obwohl das Auto praktisch ist, spricht der Preis dagegen. Es regnet, dennoch gehen wir zu Fuß. Es ist teuer. Trotzdem kaufe ich es.', 'Although the car is practical the price speaks against it. It is raining, nevertheless we walk. It is expensive. Even so I buy it.', 'Bien que la voiture soit pratique, le prix plaide contre. Il pleut, pourtant nous allons à pied. C’est cher. Je l’achète quand même.'),
        line('Stadträtin', 'Obwohl es teuer ist, kaufe ich es. Es ist zwar teuer, aber ich kaufe es.', 'Although it is expensive I buy it. It is admittedly expensive, but I buy it.', 'Bien que ce soit cher, je l’achète. C’est certes cher, mais je l’achète.'),
      ],
      words: [{ id: 'b2l2-obwohl', german: 'obwohl', english: 'although', french: 'bien que', gender: null, syllables: ['ob', 'WOHL'], pronunciation: 'op-VOHL', example: { de: 'Obwohl es teuer ist, kaufe ich es.', en: 'Although it is expensive, I buy it.', fr: 'Bien que ce soit cher, je l’achète.' } }, { id: 'b2l2-dennoch', german: 'dennoch', english: 'nevertheless', french: 'néanmoins', gender: null, syllables: ['DEN', 'noch'], pronunciation: 'DEN-nokh', example: { de: 'Es regnet, dennoch gehen wir.', en: 'It is raining, nevertheless we go.', fr: 'Il pleut, nous y allons néanmoins.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l2-einraeumen', title: 'Conceding a point: obwohl, trotzdem, dennoch', titleFr: 'Concéder un point : obwohl, trotzdem, dennoch',
      lead: 'obwohl + subordinate clause (verb last). trotzdem / dennoch + main clause (verb second). zwar … aber.',
      leadFr: 'obwohl + subordonnée (verbe à la fin). trotzdem / dennoch + principale (verbe en deuxième). zwar … aber.',
      explanationMd: 'Three ways to say **“despite that”**: **obwohl** + **subordinate clause** (**verb at the end**): **Obwohl es teuer ist, kaufe ich es.** **trotzdem / dennoch** + **main clause** (they take **position 1**, so the **verb is next**): **Es ist teuer. Trotzdem kaufe ich es.** **zwar … aber**: **Es ist zwar teuer, aber ich kaufe es.** **dennoch** is slightly **more formal** than **trotzdem**. The **concession** can come **before** or **after** the main point: **Obwohl der Plan gut ist, gibt es Widerstand.** = **Es gibt Widerstand, obwohl der Plan gut ist.**',
      explanationMdFr: 'Trois façons de dire **« malgré cela »** : **obwohl** + **subordonnée** (**verbe à la fin**) : **Obwohl es teuer ist, kaufe ich es.** **trotzdem / dennoch** + **principale** (ils prennent la **position 1**, donc le **verbe suit**) : **Es ist teuer. Trotzdem kaufe ich es.** **zwar … aber** : **Es ist zwar teuer, aber ich kaufe es.** **dennoch** est un peu **plus formel** que **trotzdem**. La **concession** peut venir **avant** ou **après** l’idée principale : **Obwohl der Plan gut ist, gibt es Widerstand.** = **Es gibt Widerstand, obwohl der Plan gut ist.**',
      tables: [{ title: 'Three ways to concede', titleFr: 'Trois façons de concéder', headers: ['Form', 'Verb', 'Example'], headersFr: ['Forme', 'Verbe', 'Exemple'],
        rows: [['obwohl', 'last', 'Obwohl es teuer ist, kaufe ich es.'], ['trotzdem / dennoch', 'second', 'Es ist teuer. Dennoch kaufe ich es.'], ['zwar … aber', 'second in both', 'Es ist zwar teuer, aber ich kaufe es.']],
        rowsFr: [['obwohl', 'à la fin', 'Obwohl es teuer ist, kaufe ich es.'], ['trotzdem / dennoch', 'en deuxième', 'Es ist teuer. Dennoch kaufe ich es.'], ['zwar … aber', 'en deuxième dans les deux', 'Es ist zwar teuer, aber ich kaufe es.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Obwohl', role: 'connector' }, { text: 'der Plan', role: 'subject' }, { text: 'gut', role: 'other' }, { text: 'ist,', role: 'verb' }, { text: 'gibt', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'Widerstand.', role: 'accusative' }], en: 'Although the plan is good there is resistance.', fr: 'Bien que le plan soit bon, il y a de la résistance.' },
        { parts: [{ text: 'Der Plan', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'gut.', role: 'other' }, { text: 'Dennoch', role: 'connector' }, { text: 'gibt', role: 'verb' }, { text: 'es', role: 'subject' }, { text: 'Widerstand.', role: 'accusative' }], en: 'The plan is good. Nevertheless there is resistance.', fr: 'Le plan est bon. Pourtant, il y a de la résistance.' },
      ],
      contrast: {
        a: { label: 'obwohl: verb last', labelFr: 'obwohl : verbe à la fin', note: 'subordinate', noteFr: 'subordonnée', examples: [g('Obwohl das Auto praktisch ist, spricht der Preis dagegen.', 'Although the car is practical the price speaks against it.', 'Bien que la voiture soit pratique, le prix plaide contre.'), g('Ich bleibe, obwohl es regnet.', 'I stay although it is raining.', 'Je reste bien qu’il pleuve.')] },
        b: { label: 'trotzdem / dennoch: verb second', labelFr: 'trotzdem / dennoch : verbe en deuxième', note: 'adverb', noteFr: 'adverbe', examples: [g('Es regnet, dennoch gehen wir.', 'It is raining, nevertheless we go.', 'Il pleut, pourtant nous y allons.'), g('Es ist teuer. Trotzdem kaufe ich es.', 'It is expensive. Even so I buy it.', 'C’est cher. Je l’achète quand même.')] },
      },
      examples: [
        g('Obwohl es teuer ist, kaufe ich es.', 'Although it is expensive I buy it.', 'Bien que ce soit cher, je l’achète.'),
        g('Obwohl der Plan gut ist, gibt es Widerstand.', 'Although the plan is good there is resistance.', 'Bien que le plan soit bon, il y a de la résistance.'),
        g('Der Plan ist gut. Dennoch gibt es Widerstand.', 'The plan is good. Nevertheless there is resistance.', 'Le plan est bon. Pourtant, il y a de la résistance.'),
        g('Es regnet, dennoch gehen wir.', 'It is raining, nevertheless we go.', 'Il pleut, pourtant nous y allons.'),
        g('Es ist zwar teuer, aber ich kaufe es.', 'It is admittedly expensive, but I buy it.', 'C’est certes cher, mais je l’achète.'),
        g('Obwohl das Auto praktisch ist, spricht der Preis dagegen.', 'Although the car is practical the price speaks against it.', 'Bien que la voiture soit pratique, le prix plaide contre.'),
      ],
      mistakes: [
        { wrong: 'Obwohl es teuer ist, ich kaufe es.', right: 'Obwohl es teuer ist, kaufe ich es.', why: 'After the obwohl-clause the verb comes next.', whyFr: 'Après la proposition en obwohl, le verbe suit.' },
        { wrong: 'Es regnet, dennoch wir gehen.', right: 'Es regnet, dennoch gehen wir.', why: 'After dennoch the verb is second.', whyFr: 'Après dennoch, le verbe est en deuxième.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l2-e1', prompt: '___ es teuer ist, kaufe ich es. (although)', answer: 'Obwohl', hint: 'subordinate clause: verb at the end', hintFr: 'subordonnée : verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l2-e2', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Es regnet, dennoch wir gehen.', 'Es regnet, dennoch gehen wir.', 'Es regnet, dennoch wir gehen nicht.'], answer: 1, explain: '"dennoch" takes position 1; the verb comes right after it.', explainFr: '« dennoch » est en position 1 ; le verbe suit.', hint: 'Verb comes second.', hintFr: 'Le verbe est en 2e position.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l2-e3', tokens: ['teuer', 'er', 'ist', 'Obwohl', 'kaufe', 'ich', 'ihn'], answer: ['Obwohl', 'er', 'teuer', 'ist', 'kaufe', 'ich', 'ihn'], hint: 'obwohl-clause first, then the main clause.', hintFr: 'La subordonnée avec obwohl d’abord, puis la principale.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l2-e7', prompt: 'Listen. What is the speaker doing?', promptFr: 'Écoute. Que fait le locuteur ?', audio: { ttsText: 'Obwohl das Auto praktisch ist, spricht der Preis dagegen.' }, options: ['Weighing a pro and a con', 'Ordering food', 'Giving directions'], optionsFr: ['Il pèse un pour et un contre', 'Il commande à manger', 'Il donne un itinéraire'], answer: 0, hint: 'Listen for "obwohl … dagegen".', hintFr: 'Écoute « obwohl … dagegen ».' } },

    // ───────────── 3 · Conclusion ─────────────
    { kind: 'chapter', title: 'Schlussfolgern: deshalb, folglich, also', titleFr: 'Conclure : deshalb, folglich, also', blurb: 'Drawing the conclusion.', blurbFr: 'Tirer la conclusion.' },

    { kind: 'situation', title: 'Folglich sollten wir handeln', titleFr: 'Par conséquent, nous devrions agir',
      setting: 'The mayor closes the debate.', settingFr: 'Le maire clôt le débat.',
      lines: [
        line('Bürgermeister', 'Er war krank, folglich blieb er zu Hause. Meine Schlussfolgerung ist eindeutig: Folglich sollten wir den Verkehr reduzieren.', 'He was ill, consequently he stayed at home. My conclusion is clear: consequently we should reduce traffic.', 'Il était malade, par conséquent il est resté chez lui. Ma conclusion est claire : par conséquent, nous devrions réduire la circulation.'),
        line('Bürgermeister', 'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen. Deshalb schlage ich einen Testmonat vor. Also: Beginnen wir.', 'To sum up, the advantages outweigh. Therefore I propose a trial month. So: let’s begin.', 'En résumé, les avantages l’emportent. C’est pourquoi je propose un mois d’essai. Donc : commençons.'),
      ],
      words: [{ id: 'b2l2-folglich', german: 'folglich', english: 'consequently', french: 'par conséquent', gender: null, syllables: ['FOLG', 'lich'], pronunciation: 'FOLK-likh', example: { de: 'Er war krank, folglich blieb er zu Hause.', en: 'He was ill, consequently he stayed home.', fr: 'Il était malade, par conséquent il est resté chez lui.' } }, { id: 'b2l2-schlussfolgerung', german: 'die Schlussfolgerung', english: 'the conclusion', french: 'la conclusion', gender: 'die', syllables: ['SCHLUSS', 'fol', 'ge', 'rung'], pronunciation: 'dee SHLOOS-fol-ge-roong', example: { de: 'Meine Schlussfolgerung ist eindeutig.', en: 'My conclusion is clear.', fr: 'Ma conclusion est claire.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l2-schlussfolgern', title: 'Drawing a conclusion: deshalb, folglich, also', titleFr: 'Tirer une conclusion : deshalb, folglich, also',
      lead: 'deshalb / folglich / also stand in position 1, verb second. Zusammenfassend lässt sich sagen, dass … closes the text.',
      leadFr: 'deshalb / folglich / also en position 1, verbe en deuxième. Zusammenfassend lässt sich sagen, dass … clôt le texte.',
      explanationMd: 'To **draw a conclusion**, use **adverbs** that take **position 1**, so the **verb is second**: **deshalb** (therefore), **folglich** (consequently), **also** (so, thus), **daher**, **somit**. **Er war krank, folglich blieb er zu Hause. Folglich sollten wir den Verkehr reduzieren.** For a **final summary**: **Zusammenfassend lässt sich sagen, dass …**, **Insgesamt …**, **Alles in allem …** (**dass-clause**, verb last). **Meine Schlussfolgerung ist eindeutig:** uses a **colon** to introduce the conclusion. **folglich** is more **formal** than **deshalb**.',
      explanationMdFr: 'Pour **tirer une conclusion**, utilise des **adverbes** en **position 1**, donc **verbe en deuxième** : **deshalb** (c’est pourquoi), **folglich** (par conséquent), **also** (donc), **daher**, **somit**. **Er war krank, folglich blieb er zu Hause. Folglich sollten wir den Verkehr reduzieren.** Pour un **résumé final** : **Zusammenfassend lässt sich sagen, dass …**, **Insgesamt …**, **Alles in allem …** (**proposition en dass**, verbe à la fin). **Meine Schlussfolgerung ist eindeutig :** utilise un **deux-points** pour introduire la conclusion. **folglich** est plus **formel** que **deshalb**.',
      tables: [{ title: 'Conclusion words', titleFr: 'Mots de conclusion', headers: ['Word', 'Register', 'Example'], headersFr: ['Mot', 'Registre', 'Exemple'],
        rows: [['deshalb · daher', 'neutral', 'Deshalb schlage ich einen Testmonat vor.'], ['folglich · somit', 'formal', 'Folglich sollten wir den Verkehr reduzieren.'], ['also', 'spoken', 'Also: Beginnen wir.'], ['zusammenfassend', 'writing', 'Zusammenfassend lässt sich sagen, dass …']],
        rowsFr: [['deshalb · daher', 'neutre', 'Deshalb schlage ich einen Testmonat vor.'], ['folglich · somit', 'formel', 'Folglich sollten wir den Verkehr reduzieren.'], ['also', 'oral', 'Also: Beginnen wir.'], ['zusammenfassend', 'écrit', 'Zusammenfassend lässt sich sagen, dass …']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Folglich', role: 'connector' }, { text: 'sollten', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'den Verkehr', role: 'accusative' }, { text: 'reduzieren.', role: 'verb' }], en: 'Consequently we should reduce traffic.', fr: 'Par conséquent, nous devrions réduire la circulation.' },
        { parts: [{ text: 'Zusammenfassend', role: 'connector' }, { text: 'lässt', role: 'verb' }, { text: 'sich', role: 'other' }, { text: 'sagen,', role: 'verb' }, { text: 'dass', role: 'connector' }, { text: 'die Vorteile', role: 'subject' }, { text: 'überwiegen.', role: 'verb' }], en: 'To sum up, the advantages outweigh.', fr: 'En résumé, les avantages l’emportent.' },
      ],
      contrast: {
        a: { label: 'Reason (weil)', labelFr: 'Raison (weil)', note: 'cause first', noteFr: 'cause d’abord', examples: [g('Er blieb zu Hause, weil er krank war.', 'He stayed at home because he was ill.', 'Il est resté chez lui parce qu’il était malade.'), g('Wir handeln, weil die Zahlen eindeutig sind.', 'We act because the figures are clear.', 'Nous agissons parce que les chiffres sont clairs.')] },
        b: { label: 'Conclusion (folglich)', labelFr: 'Conclusion (folglich)', note: 'result after', noteFr: 'résultat après', examples: [g('Er war krank, folglich blieb er zu Hause.', 'He was ill, consequently he stayed at home.', 'Il était malade, par conséquent il est resté chez lui.'), g('Die Zahlen sind eindeutig, folglich handeln wir.', 'The figures are clear, consequently we act.', 'Les chiffres sont clairs, par conséquent nous agissons.')] },
      },
      examples: [
        g('Er war krank, folglich blieb er zu Hause.', 'He was ill, consequently he stayed at home.', 'Il était malade, par conséquent il est resté chez lui.'),
        g('Folglich sollten wir den Verkehr reduzieren.', 'Consequently we should reduce traffic.', 'Par conséquent, nous devrions réduire la circulation.'),
        g('Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.', 'To sum up, the advantages outweigh.', 'En résumé, les avantages l’emportent.'),
        g('Deshalb schlage ich einen Testmonat vor.', 'Therefore I propose a trial month.', 'C’est pourquoi je propose un mois d’essai.'),
        g('Meine Schlussfolgerung ist eindeutig.', 'My conclusion is clear.', 'Ma conclusion est claire.'),
        g('Man könnte einwenden, dass nicht alle profitieren.', 'One could object that not everyone benefits.', 'On pourrait objecter que tous ne profitent pas.'),
      ],
      mistakes: [
        { wrong: 'Folglich wir sollten handeln.', right: 'Folglich sollten wir handeln.', why: 'After folglich the verb is second.', whyFr: 'Après folglich, le verbe est en deuxième.' },
        { wrong: 'Er war krank, folglich er blieb zu Hause.', right: 'Er war krank, folglich blieb er zu Hause.', why: 'The conclusion adverb takes position 1, then the verb.', whyFr: 'L’adverbe de conclusion occupe la position 1, puis le verbe.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l2-e4', prompt: 'Which word introduces a conclusion?', promptFr: 'Quel mot introduit une conclusion ?', options: ['dennoch', 'folglich', 'obwohl'], answer: 1, explain: '"folglich" = consequently.', explainFr: '« folglich » = par conséquent.', hint: 'It draws a result.', hintFr: 'Il tire un résultat.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l2-e9', tokens: ['sollten', 'Folglich', 'wir', 'handeln'], answer: ['Folglich', 'sollten', 'wir', 'handeln'], hint: 'folglich takes position 1; the verb is next.', hintFr: 'folglich est en position 1 ; le verbe suit.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l2-e10', prompt: 'Which phrase introduces a counter-argument?', promptFr: 'Quelle formule introduit un contre-argument ?', options: ['Man könnte einwenden, dass …', 'Ich vertrete die These, dass …', 'Zusammenfassend lässt sich sagen …'], answer: 0, explain: '"einwenden" = to object.', explainFr: '« einwenden » = objecter.', hint: 'Which one raises an objection?', hintFr: 'Laquelle soulève une objection ?' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l2-e11', prompt: 'Listen. Which step of the argument is this?', promptFr: 'Écoute. De quelle étape de l’argument s’agit-il ?', audio: { ttsText: 'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.' }, options: ['Conclusion', 'Thesis', 'Counter-argument'], optionsFr: ['Conclusion', 'Thèse', 'Contre-argument'], answer: 0, hint: '"Zusammenfassend" = in summary.', hintFr: '« Zusammenfassend » = en résumé.' } },

    { kind: 'pronunciation', focus: 'Stress the second syllable in obwohl and dennoch’s first: "obWOHL", "DENnoch" — and let your voice rise on the point you concede, fall on the conclusion', focusFr: 'Accentue la 2e syllabe de obwohl et la 1re de dennoch : « obWOHL », « DENnoch » — la voix monte sur le point concédé, descend sur la conclusion', items: [{ id: 'b2l2-obwohl-pron', german: 'obwohl', english: 'although', french: 'bien que', gender: null, syllables: ['ob', 'WOHL'], pronunciation: 'op-VOHL', example: { de: 'Obwohl es spät ist, arbeite ich.', en: 'Although it is late, I work.', fr: 'Bien qu’il soit tard, je travaille.' } }, { id: 'b2l2-dennoch-pron', german: 'dennoch', english: 'nevertheless', french: 'néanmoins', gender: null, syllables: ['DEN', 'noch'], pronunciation: 'DEN-nokh', example: { de: 'Dennoch bleibe ich.', en: 'Nevertheless I stay.', fr: 'Néanmoins je reste.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **weigh pro and con**, **concede a point** with **obwohl / trotzdem / dennoch** and **draw a conclusion** with **folglich, deshalb, zusammenfassend**. 🎉',
      summaryFr: 'Tu sais maintenant **peser le pour et le contre**, **concéder un point** avec **obwohl / trotzdem / dennoch** et **tirer une conclusion** avec **folglich, deshalb, zusammenfassend**. 🎉',
      card: { title: 'Arguing on one page', titleFr: 'Argumenter en une page', sections: [
        { heading: 'Four moves', headingFr: 'Quatre étapes', rows: [g('These · Beleg · Gegenargument · Schluss', 'thesis · proof · counter · conclusion', 'thèse · preuve · contre-argument · conclusion')] },
        { heading: 'Concession', headingFr: 'Concession', rows: [g('obwohl + verb last', 'trotzdem / dennoch + verb second', 'trotzdem / dennoch + verbe en deuxième')] },
        { heading: 'Conclusion', headingFr: 'Conclusion', rows: [g('folglich · deshalb · also', 'position 1, verb second', 'position 1, verbe en deuxième')] },
      ] } },
  ],
};

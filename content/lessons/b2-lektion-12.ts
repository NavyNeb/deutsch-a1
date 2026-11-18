import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion12: Lesson = {
  id: 'b2-l12', level: 'B2', module: 4, number: 12,
  title: { de: 'Zeit und Abfolge', en: 'Time and sequence', fr: 'Temps et enchaînement' },
  theme: 'Temporal connectors and prepositions: seitdem, solange, sobald, bis, ehe, nachdem, während, binnen, innerhalb', themeFr: 'Connecteurs et prépositions temporels : seitdem, solange, sobald, bis, ehe, nachdem, während, binnen, innerhalb',
  goals: ['Choose between "als", "wenn", "sobald", "solange"', 'Use "nachdem" with Plusquamperfekt/Perfekt', 'Use "seit / seitdem / bis / ehe" correctly', 'Use prepositions of time: binnen, innerhalb, ab, gegen'], goalsFr: ['Choisir entre « als », « wenn », « sobald », « solange »', 'Utiliser « nachdem » avec plus-que-parfait/parfait', 'Utiliser correctement « seit / seitdem / bis / ehe »', 'Employer les prépositions de temps : binnen, innerhalb, ab, gegen'],
  canDo: g('Ich kann zeitliche Abfolgen mit passenden Konjunktionen und Präpositionen ausdrücken, auch im formellen Stil.', 'I can express time sequences with fitting conjunctions and prepositions, also in formal style.', 'Je sais exprimer des enchaînements temporels avec les conjonctions et prépositions adaptées, aussi au registre formel.'),
  steps: [
    { kind: 'intro', title: 'Zeit und Reihenfolge ⏱️', titleFr: 'Temps et enchaînement ⏱️',
      scene: 'A project manager sets deadlines, sequences tasks and writes a formal reply within a week.', sceneFr: 'Une cheffe de projet fixe des délais, ordonne des tâches et écrit une réponse formelle sous une semaine.',
      goals: ['Choose between als, wenn, sobald, solange, seitdem, bis, ehe', 'Use nachdem with Plusquamperfekt', 'Use binnen, innerhalb, ab, gegen in formal style'],
      goalsFr: ['Choisir entre als, wenn, sobald, solange, seitdem, bis, ehe', 'Utiliser nachdem avec le Plusquamperfekt', 'Utiliser binnen, innerhalb, ab, gegen au registre formel'] },

    // ───────────── 1 · Conjunctions ─────────────
    { kind: 'chapter', title: 'Zeitliche Konjunktionen', titleFr: 'Conjonctions temporelles', blurb: 'als · wenn · sobald · nachdem · bis.', blurbFr: 'als · wenn · sobald · nachdem · bis.' },

    { kind: 'situation', title: 'Der Projektplan', titleFr: 'Le plan du projet',
      setting: 'Team meeting at the start of a project.', settingFr: 'Réunion d’équipe au début d’un projet.',
      lines: [
        line('Chefin', 'Sobald ich fertig bin, rufe ich dich an. Solange es regnet, bleiben wir drinnen. Warte, bis ich zurück bin.', 'As soon as I am finished I will call you. As long as it rains we stay inside. Wait until I am back.', 'Dès que j’ai fini, je t’appelle. Tant qu’il pleut, nous restons à l’intérieur. Attends que je sois de retour.'),
        line('Chefin', 'Seitdem er in Berlin wohnt, ist er glücklich. Ehe du gehst, ruf mich an. Nachdem wir gegessen hatten, gingen wir spazieren.', 'Since he has lived in Berlin he is happy. Before you go, call me. After we had eaten we went for a walk.', 'Depuis qu’il habite à Berlin, il est heureux. Avant de partir, appelle-moi. Après avoir mangé, nous sommes allés nous promener.'),
        line('Chefin', 'Wir essen und gehen anschließend ins Kino. Ich hatte ihn zuvor nie gesehen. Die Frist endet am Freitag.', 'We eat and go to the cinema afterwards. I had never seen him before. The deadline ends on Friday.', 'Nous mangeons et allons ensuite au cinéma. Je ne l’avais jamais vu auparavant. Le délai se termine vendredi.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l12-e11', prompt: 'When does the deadline end?', promptFr: 'Quand se termine le délai ?', options: ['On Friday', 'On Monday', 'Next month'], optionsFr: ['Vendredi', 'Lundi', 'Le mois prochain'], answer: 0, explain: 'She says: “Die Frist endet am Freitag.”', explainFr: 'Elle dit : « Die Frist endet am Freitag. »', hint: 'Look for “Frist”.', hintFr: 'Cherche « Frist ».' } },

    { kind: 'wordgroup', title: 'Zeitkonnektoren', titleFr: 'Connecteurs de temps',
      items: [{ id: 'b2l12-sobald', german: 'sobald', english: 'as soon as', french: 'dès que', gender: null, syllables: ['so', 'BALD'], pronunciation: 'zo-BALT', example: { de: 'Sobald ich fertig bin, rufe ich dich an.', en: 'As soon as I am done I will call you.', fr: 'Dès que j’ai fini, je t’appelle.' } }, { id: 'b2l12-solange', german: 'solange', english: 'as long as', french: 'tant que', gender: null, syllables: ['so', 'LAN', 'ge'], pronunciation: 'zo-LAHN-ge', example: { de: 'Solange es regnet, bleiben wir drinnen.', en: 'As long as it rains we stay inside.', fr: 'Tant qu’il pleut, nous restons à l’intérieur.' } }, { id: 'b2l12-seitdem', german: 'seitdem', english: 'since (then)', french: 'depuis que', gender: null, syllables: ['seit', 'DEM'], pronunciation: 'zite-DEM', example: { de: 'Seitdem er in Berlin wohnt, ist er glücklich.', en: 'Since he has lived in Berlin he has been happy.', fr: 'Depuis qu’il habite à Berlin, il est heureux.' } }, { id: 'b2l12-ehe', german: 'ehe', english: 'before', french: 'avant que', gender: null, syllables: ['E', 'he'], pronunciation: 'AY-he', example: { de: 'Ehe du gehst, ruf mich an.', en: 'Before you go, call me.', fr: 'Avant de partir, appelle-moi.' } }, { id: 'b2l12-bis', german: 'bis', english: 'until', french: 'jusqu’à ce que', gender: null, syllables: ['BIS'], pronunciation: 'bis', example: { de: 'Warte, bis ich zurück bin.', en: 'Wait until I am back.', fr: 'Attends que je sois de retour.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l12-e6', pairs: [{ de: 'solange', en: 'as long as', fr: 'tant que' }, { de: 'seitdem', en: 'since then', fr: 'depuis que' }, { de: 'ehe', en: 'before', fr: 'avant que' }, { de: 'die Frist', en: 'deadline', fr: 'délai' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l12-konjunktionen', title: 'Temporal conjunctions: which one?', titleFr: 'Conjonctions temporelles : laquelle ?',
      lead: 'als = single past event, wenn = repeated/future, sobald = immediately after, solange = whole time, seitdem = since, bis = until, ehe/bevor = before, nachdem = after.',
      leadFr: 'als = événement passé unique, wenn = répété/futur, sobald = aussitôt, solange = pendant tout le temps, seitdem = depuis, bis = jusqu’à ce que, ehe/bevor = avant, nachdem = après.',
      explanationMd: '**als** — one-off event in the **past**: **Als ich ankam, regnete es.** **wenn** — **repeated** or **future**: **Wenn ich Zeit habe, rufe ich an.** **sobald** — immediately after: **Sobald ich fertig bin, …** **solange** — during the **whole time**: **Solange du wartest, …** **seit / seitdem** — from a point **until now**: **Seitdem er hier ist …** **bis** — until: **Warte, bis ich komme.** **ehe / bevor** — before: **Ehe du gehst …** **nachdem** — after, with **Plusquamperfekt** (or Perfekt): **Nachdem er gegessen hatte, …** **während** — at the same time: **Während sie kochte, …** All of them send the **verb to the end** of the clause.',
      explanationMdFr: '**als** — événement **unique** dans le **passé** : **Als ich ankam, regnete es.** **wenn** — **répété** ou **futur** : **Wenn ich Zeit habe, rufe ich an.** **sobald** — aussitôt après : **Sobald ich fertig bin, …** **solange** — pendant **tout le temps** : **Solange du wartest, …** **seit / seitdem** — d’un point **jusqu’à maintenant** : **Seitdem er hier ist …** **bis** — jusqu’à ce que : **Warte, bis ich komme.** **ehe / bevor** — avant : **Ehe du gehst …** **nachdem** — après, avec le **Plusquamperfekt** (ou Perfekt) : **Nachdem er gegessen hatte, …** **während** — en même temps : **Während sie kochte, …** Toutes envoient le **verbe à la fin** de la proposition.',
      tables: [{ title: 'Which conjunction?', titleFr: 'Quelle conjonction ?', headers: ['Conjunction', 'Meaning', 'Example'], headersFr: ['Conjonction', 'Sens', 'Exemple'],
        rows: [['als', 'single past event', 'Als ich ankam, regnete es.'], ['wenn', 'repeated / future', 'Wenn ich Zeit habe, rufe ich an.'], ['sobald', 'as soon as', 'Sobald ich fertig bin, rufe ich an.'], ['solange', 'as long as', 'Solange es regnet, bleiben wir drinnen.'], ['seitdem', 'since', 'Seitdem er hier ist, ist er glücklich.'], ['bis', 'until', 'Warte, bis ich komme.'], ['ehe / bevor', 'before', 'Ehe du gehst, ruf mich an.'], ['nachdem', 'after (+ Plusquamperfekt)', 'Nachdem er gegessen hatte, ging er.']],
        rowsFr: [['als', 'événement passé unique', 'Als ich ankam, regnete es.'], ['wenn', 'répété / futur', 'Wenn ich Zeit habe, rufe ich an.'], ['sobald', 'dès que', 'Sobald ich fertig bin, rufe ich an.'], ['solange', 'tant que', 'Solange es regnet, bleiben wir drinnen.'], ['seitdem', 'depuis que', 'Seitdem er hier ist, ist er glücklich.'], ['bis', 'jusqu’à ce que', 'Warte, bis ich komme.'], ['ehe / bevor', 'avant que', 'Ehe du gehst, ruf mich an.'], ['nachdem', 'après (+ Plusquamperfekt)', 'Nachdem er gegessen hatte, ging er.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Nachdem', role: 'connector' }, { text: 'wir', role: 'subject' }, { text: 'gegessen hatten,', role: 'verb' }, { text: 'gingen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'spazieren.', role: 'other' }], en: 'After we had eaten we went for a walk.', fr: 'Après avoir mangé, nous sommes allés nous promener.' },
        { parts: [{ text: 'Warte', role: 'verb' }, { text: 'hier,', role: 'place' }, { text: 'bis', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'zurückkomme.', role: 'verb' }], en: 'Wait here until I come back.', fr: 'Attends ici jusqu’à ce que je revienne.' },
      ],
      contrast: {
        a: { label: 'als (once, past)', labelFr: 'als (une fois, passé)', note: 'single event', noteFr: 'événement unique', examples: [g('Als ich ankam, regnete es.', 'When I arrived it was raining.', 'Quand je suis arrivé, il pleuvait.'), g('Als er jung war, wohnte er in Wien.', 'When he was young he lived in Vienna.', 'Quand il était jeune, il habitait à Vienne.')] },
        b: { label: 'wenn (repeated / future)', labelFr: 'wenn (répété / futur)', note: 'habit or future', noteFr: 'habitude ou futur', examples: [g('Wenn ich Zeit habe, rufe ich an.', 'When I have time I call.', 'Quand j’ai le temps, j’appelle.'), g('Immer wenn es regnet, bleibe ich zu Hause.', 'Whenever it rains I stay home.', 'Chaque fois qu’il pleut, je reste à la maison.')] },
      },
      examples: [
        g('Nachdem wir gegessen hatten, gingen wir spazieren.', 'After we had eaten we went for a walk.', 'Après avoir mangé, nous sommes allés nous promener.'),
        g('Warte hier, bis ich zurückkomme.', 'Wait here until I come back.', 'Attends ici jusqu’à ce que je revienne.'),
        g('Sobald ich fertig bin, rufe ich dich an.', 'As soon as I am finished I will call you.', 'Dès que j’ai fini, je t’appelle.'),
        g('Solange es regnet, bleiben wir drinnen.', 'As long as it rains we stay inside.', 'Tant qu’il pleut, nous restons à l’intérieur.'),
        g('Seitdem er in Berlin wohnt, ist er glücklich.', 'Since he has lived in Berlin he is happy.', 'Depuis qu’il habite à Berlin, il est heureux.'),
        g('Ehe du gehst, ruf mich an.', 'Before you go, call me.', 'Avant de partir, appelle-moi.'),
      ],
      mistakes: [
        { wrong: 'Wenn ich gestern ankam, regnete es.', right: 'Als ich gestern ankam, regnete es.', why: 'One past event needs als, not wenn.', whyFr: 'Un événement passé unique demande als, pas wenn.' },
        { wrong: 'Nachdem er aß, ging er.', right: 'Nachdem er gegessen hatte, ging er.', why: 'nachdem + Plusquamperfekt for the earlier action.', whyFr: 'nachdem + Plusquamperfekt pour l’action antérieure.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l12-e1', prompt: '___ ich fertig bin, rufe ich dich an. (as soon as)', answer: 'Sobald', hint: 'sobald = as soon as', hintFr: 'sobald = dès que' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l12-e2', prompt: 'Which is used for a single past event?', promptFr: 'Lequel s’emploie pour un événement passé unique ?', options: ['wenn', 'als', 'solange'], answer: 1, explain: '"als" = once in the past.', explainFr: '« als » = une fois dans le passé.', hint: 'one-off past', hintFr: 'passé unique' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l12-e3', prompt: 'Warte hier, ___ ich zurückkomme. (until)', answer: 'bis', hint: 'bis = until', hintFr: 'bis = jusqu’à ce que' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l12-e4', prompt: '"Nachdem er gegessen ___, ging er." Which form?', promptFr: '« Nachdem er gegessen ___, ging er. » Quelle forme ?', options: ['hatte', 'hat', 'wird'], answer: 0, explain: 'Präteritum main clause → Plusquamperfekt in the nachdem-clause.', explainFr: 'Principale au Präteritum → plus-que-parfait dans la subordonnée.', hint: 'earlier than the main clause', hintFr: 'antérieur à la principale' } },

    // ───────────── 2 · Prepositions ─────────────
    { kind: 'chapter', title: 'Zeitpräpositionen', titleFr: 'Prépositions de temps', blurb: 'binnen · innerhalb · ab · gegen.', blurbFr: 'binnen · innerhalb · ab · gegen.' },

    { kind: 'situation', title: 'Eine Antwort binnen einer Woche', titleFr: 'Une réponse sous une semaine',
      setting: 'A formal letter and a delivery note.', settingFr: 'Une lettre formelle et un avis de livraison.',
      lines: [
        line('Amt', 'Bitte antworten Sie binnen einer Woche. Binnen einer Woche erhalten Sie eine Antwort von uns. Innerhalb von zwei Tagen ist alles erledigt.', 'Please reply within a week. Within a week you will receive an answer from us. Within two days everything is done.', 'Veuillez répondre sous une semaine. Sous une semaine, vous recevrez une réponse de notre part. En deux jours, tout est réglé.'),
        line('Kurier', 'Das Paket kommt gegen achtzehn Uhr. Ab nächstem Montag liefern wir schneller. Bitte melden Sie sich bis spätestens Freitag.', 'The parcel arrives around six. From next Monday we deliver faster. Please get in touch by Friday at the latest.', 'Le colis arrive vers dix-huit heures. À partir de lundi prochain, nous livrons plus vite. Merci de vous manifester au plus tard vendredi.'),
        line('Kurier', 'Nach seiner Ankunft rufe ich an. Vor dem Essen kommt er. Bei Ankunft bitte klingeln.', 'After his arrival I will call. He comes before the meal. On arrival please ring.', 'Après son arrivée, j’appelle. Il vient avant le repas. À l’arrivée, veuillez sonner.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Fristen und Reihenfolge', titleFr: 'Délais et ordre',
      items: [{ id: 'b2l12-binnen', german: 'binnen', english: 'within (a period)', french: 'dans un délai de', gender: null, syllables: ['BIN', 'nen'], pronunciation: 'BIN-nen', example: { de: 'Binnen einer Woche erhalten Sie Antwort.', en: 'Within a week you will receive an answer.', fr: 'Dans un délai d’une semaine, vous recevrez une réponse.' } }, { id: 'b2l12-innerhalb', german: 'innerhalb', english: 'within', french: 'au cours de', gender: null, syllables: ['IN', 'ner', 'halb'], pronunciation: 'IN-ner-halp', example: { de: 'Innerhalb von zwei Tagen ist alles erledigt.', en: 'Within two days everything is done.', fr: 'En l’espace de deux jours, tout est réglé.' } }, { id: 'b2l12-frist', german: 'die Frist', english: 'the deadline', french: 'le délai', gender: 'die', syllables: ['FRIST'], pronunciation: 'dee frist', example: { de: 'Die Frist endet am Freitag.', en: 'The deadline ends on Friday.', fr: 'Le délai se termine vendredi.' } }, { id: 'b2l12-nachher', german: 'anschließend', english: 'afterwards', french: 'ensuite', gender: null, syllables: ['AN', 'schlie', 'ßend'], pronunciation: 'AHN-shlee-sent', example: { de: 'Wir essen und gehen anschließend ins Kino.', en: 'We eat and afterwards go to the cinema.', fr: 'Nous mangeons et allons ensuite au cinéma.' } }, { id: 'b2l12-zuvor', german: 'zuvor', english: 'beforehand', french: 'auparavant', gender: null, syllables: ['zu', 'VOR'], pronunciation: 'tsoo-FOR', example: { de: 'Ich hatte ihn zuvor nie gesehen.', en: 'I had never seen him before.', fr: 'Je ne l’avais jamais vu auparavant.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l12-praepositionen', title: 'Time prepositions in formal style', titleFr: 'Prépositions de temps au registre formel',
      lead: 'binnen / innerhalb = within; ab = from; bis spätestens = by; gegen = around. A nachdem-clause becomes nach + noun.',
      leadFr: 'binnen / innerhalb = dans un délai de ; ab = à partir de ; bis spätestens = au plus tard ; gegen = vers. Une proposition en nachdem devient nach + nom.',
      explanationMd: '**binnen** + Genitiv/Dativ — deadline: **binnen einer Woche**. **innerhalb** + Genitiv (or **von**) — **innerhalb eines Monats / innerhalb von zwei Tagen**. **ab** + Dativ — from a start point: **ab nächstem Montag**. **bis zu / bis spätestens** — up to: **bis spätestens Freitag**. **gegen** — around (approx.): **gegen 18 Uhr**. **nach / vor / bei** + Dativ — **nach der Sitzung, vor dem Essen, bei Ankunft**. **Nominal style**: **Nachdem er angekommen war** → **Nach seiner Ankunft**; **Bevor sie ging** → **Vor ihrem Weggang**.',
      explanationMdFr: '**binnen** + génitif/datif — délai : **binnen einer Woche**. **innerhalb** + génitif (ou **von**) — **innerhalb eines Monats / innerhalb von zwei Tagen**. **ab** + datif — à partir d’un point de départ : **ab nächstem Montag**. **bis zu / bis spätestens** — jusqu’à : **bis spätestens Freitag**. **gegen** — environ : **gegen 18 Uhr**. **nach / vor / bei** + datif — **nach der Sitzung, vor dem Essen, bei Ankunft**. **Style nominal** : **Nachdem er angekommen war** → **Nach seiner Ankunft** ; **Bevor sie ging** → **Vor ihrem Weggang**.',
      tables: [{ title: 'Time prepositions', titleFr: 'Prépositions de temps', headers: ['Preposition', 'Meaning', 'Example'], headersFr: ['Préposition', 'Sens', 'Exemple'],
        rows: [['binnen', 'within (deadline)', 'binnen einer Woche'], ['innerhalb', 'within', 'innerhalb von zwei Tagen'], ['ab', 'from', 'ab nächstem Montag'], ['bis spätestens', 'by … at the latest', 'bis spätestens Freitag'], ['gegen', 'around', 'gegen 18 Uhr'], ['nach / vor / bei', 'after / before / on', 'nach seiner Ankunft']],
        rowsFr: [['binnen', 'dans un délai de', 'binnen einer Woche'], ['innerhalb', 'dans un délai de', 'innerhalb von zwei Tagen'], ['ab', 'à partir de', 'ab nächstem Montag'], ['bis spätestens', 'au plus tard', 'bis spätestens Freitag'], ['gegen', 'vers', 'gegen 18 Uhr'], ['nach / vor / bei', 'après / avant / à', 'nach seiner Ankunft']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Binnen', role: 'connector' }, { text: 'einer Woche', role: 'time' }, { text: 'erhalten', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'Antwort.', role: 'accusative' }], en: 'Within a week you will receive an answer.', fr: 'Sous une semaine, vous recevrez une réponse.' },
        { parts: [{ text: 'Das Paket', role: 'subject' }, { text: 'kommt', role: 'verb' }, { text: 'gegen', role: 'connector' }, { text: '18 Uhr.', role: 'time' }], en: 'The parcel arrives around 6 pm.', fr: 'Le colis arrive vers 18 heures.' },
      ],
      contrast: {
        a: { label: 'Clause', labelFr: 'Subordonnée', note: 'verb at the end', noteFr: 'verbe à la fin', examples: [g('Nachdem er angekommen war, rief er an.', 'After he had arrived he called.', 'Après être arrivé, il a appelé.'), g('Bevor sie ging, sagte sie Tschüss.', 'Before she left she said goodbye.', 'Avant de partir, elle a dit au revoir.')] },
        b: { label: 'Noun phrase', labelFr: 'Groupe nominal', note: 'nach / vor + dative', noteFr: 'nach / vor + datif', examples: [g('Nach seiner Ankunft rief er an.', 'After his arrival he called.', 'Après son arrivée, il a appelé.'), g('Vor ihrem Weggang sagte sie Tschüss.', 'Before her departure she said goodbye.', 'Avant son départ, elle a dit au revoir.')] },
      },
      examples: [
        g('Bitte antworten Sie binnen einer Woche.', 'Please reply within a week.', 'Veuillez répondre sous une semaine.'),
        g('Das Paket kommt gegen 18 Uhr.', 'The parcel arrives around 6 pm.', 'Le colis arrive vers 18 heures.'),
        g('Innerhalb von zwei Tagen ist alles erledigt.', 'Within two days everything is done.', 'En deux jours, tout est réglé.'),
        g('Ab nächstem Montag liefern wir schneller.', 'From next Monday we deliver faster.', 'À partir de lundi prochain, nous livrons plus vite.'),
        g('Bitte melden Sie sich bis spätestens Freitag.', 'Please get in touch by Friday at the latest.', 'Merci de vous manifester au plus tard vendredi.'),
        g('Bei Ankunft bitte klingeln.', 'On arrival please ring.', 'À l’arrivée, veuillez sonner.'),
      ],
      mistakes: [
        { wrong: 'Binnen eine Woche', right: 'Binnen einer Woche', why: 'binnen takes the dative (or genitive): einer Woche.', whyFr: 'binnen prend le datif (ou génitif) : einer Woche.' },
        { wrong: 'Nach er angekommen war', right: 'Nachdem er angekommen war', why: 'Before a clause use nachdem; nach needs a noun.', whyFr: 'Devant une proposition, utilise nachdem ; nach demande un nom.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l12-e5', tokens: ['Sie', 'binnen', 'Antworten', 'bitte', 'einer Woche'], answer: ['Antworten', 'Sie', 'bitte', 'binnen', 'einer Woche'], hint: 'Imperative: verb – Sie – bitte – time.', hintFr: 'Impératif : verbe – Sie – bitte – délai.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l12-e8', prompt: '___ er in Berlin wohnt, ist er glücklich. (since)', answer: 'Seitdem', hint: 'seitdem + verb at the end', hintFr: 'seitdem + verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l12-e9', prompt: 'Nominal form of "Nachdem er angekommen war"?', promptFr: 'Forme nominale de « Nachdem er angekommen war » ?', options: ['Nach seiner Ankunft', 'Vor seiner Ankunft', 'Seit seiner Ankunft sein'], answer: 0, explain: 'nachdem → nach + noun.', explainFr: 'nachdem → nach + nom.', hint: 'nachdem → nach', hintFr: 'nachdem → nach' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l12-e7', prompt: 'Listen. When will you get an answer?', promptFr: 'Écoute. Quand aurez-vous une réponse ?', audio: { ttsText: 'Binnen einer Woche erhalten Sie eine Antwort von uns.' }, options: ['Within a week', 'Tomorrow', 'Next month'], optionsFr: ['Dans la semaine', 'Demain', 'Le mois prochain'], answer: 0, hint: 'binnen = within.', hintFr: 'binnen = dans un délai de.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l12-e10', prompt: 'Listen. When does the parcel arrive?', promptFr: 'Écoute. Quand arrive le colis ?', audio: { ttsText: 'Das Paket kommt gegen achtzehn Uhr.' }, options: ['Around 6 pm', 'At noon', 'Tomorrow morning'], optionsFr: ['Vers 18 h', 'À midi', 'Demain matin'], answer: 0, hint: 'gegen = around.', hintFr: 'gegen = vers.' } },

    { kind: 'pronunciation', focus: 'Compound conjunctions stress the second part: "soBALD", "soLANge", "seitDEM"', focusFr: 'Les conjonctions composées accentuent la 2e partie : « soBALD », « soLANge », « seitDEM »', items: [{ id: 'b2l12-sobald-pron', german: 'sobald', english: 'as soon as', french: 'dès que', gender: null, syllables: ['so', 'BALD'], pronunciation: 'zo-BALT', example: { de: 'Sobald du kannst.', en: 'As soon as you can.', fr: 'Dès que tu peux.' } }, { id: 'b2l12-seitdem-pron', german: 'seitdem', english: 'since', french: 'depuis', gender: null, syllables: ['seit', 'DEM'], pronunciation: 'zite-DEM', example: { de: 'Seitdem ist alles anders.', en: 'Since then everything is different.', fr: 'Depuis, tout est différent.' } }] },

    { kind: 'wrapup',
      summary: 'You can now pick the right **temporal conjunction** (**als, wenn, sobald, solange, seitdem, bis, ehe, nachdem**) and use **binnen, innerhalb, ab, gegen** in formal style. 🎉',
      summaryFr: 'Tu sais maintenant choisir la bonne **conjonction temporelle** (**als, wenn, sobald, solange, seitdem, bis, ehe, nachdem**) et utiliser **binnen, innerhalb, ab, gegen** au registre formel. 🎉',
      card: { title: 'Time and sequence on one page', titleFr: 'Temps et enchaînement en une page', sections: [
        { heading: 'Conjunctions', headingFr: 'Conjonctions', rows: [g('als = once · wenn = repeated/future', 'Als ich ankam … / Wenn ich Zeit habe …', 'Als ich ankam … / Wenn ich Zeit habe …'), g('nachdem + Plusquamperfekt', 'Nachdem er gegessen hatte …', 'Nachdem er gegessen hatte …')] },
        { heading: 'Duration', headingFr: 'Durée', rows: [g('sobald · solange · seitdem · bis · ehe', 'verb at the end', 'verbe à la fin')] },
        { heading: 'Prepositions', headingFr: 'Prépositions', rows: [g('binnen / innerhalb · ab · gegen', 'binnen einer Woche', 'binnen einer Woche')] },
      ] } },
  ],
};

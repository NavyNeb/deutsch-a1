import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion11: Lesson = {
  id: 'b1-l11', level: 'B1', module: 4, number: 13,
  title: { de: 'Hätte, wäre, wenn …', en: 'Would have, if only …', fr: 'J’aurais, si seulement …' },
  theme: 'The past Konjunktiv II: regrets and unreal situations in the past', themeFr: 'Le Konjunktiv II du passé : regrets et situations irréelles au passé',
  goals: ['Form the past Konjunktiv II (hätte/wäre + participle)', 'Express regret ("I would have …")', 'Build unreal past conditions', 'Use "hätte … sollen/können"'], goalsFr: ['Former le Konjunktiv II du passé (hätte/wäre + participe)', 'Exprimer le regret (« j’aurais … »)', 'Construire des conditions irréelles au passé', 'Utiliser « hätte … sollen/können »'],
  canDo: g('Ich kann Bedauern und irreale Situationen in der Vergangenheit mit „hätte / wäre + Partizip“ und „hätte … sollen / können“ ausdrücken.', 'I can express regret and unreal past situations with “hätte / wäre + participle” and “hätte … sollen / können”.', 'Je sais exprimer le regret et des situations irréelles au passé avec « hätte / wäre + participe » et « hätte … sollen / können ».'),
  steps: [
    { kind: 'intro', title: 'Hätte, hätte … 😔', titleFr: 'Si seulement … 😔',
      scene: 'Tom failed an exam and missed a train. He and a friend talk about what he would have done differently.', sceneFr: 'Tom a raté un examen et un train. Lui et un ami parlent de ce qu’il aurait fait autrement.',
      goals: ['Form the past Konjunktiv II (hätte / wäre + participle)', 'Express regret and build unreal past conditions', 'Use hätte … sollen / können'],
      goalsFr: ['Former le Konjunktiv II passé (hätte / wäre + participe)', 'Exprimer le regret et construire des conditions irréelles au passé', 'Utiliser hätte … sollen / können'] },

    // ───────────── 1 · Past Konjunktiv II ─────────────
    { kind: 'chapter', title: 'Das Konjunktiv II der Vergangenheit', titleFr: 'Le Konjunktiv II du passé', blurb: 'hätte / wäre + participle.', blurbFr: 'hätte / wäre + participe.' },

    { kind: 'situation', title: 'Ich hätte es anders gemacht', titleFr: 'Je l’aurais fait autrement',
      setting: 'Tom and his friend talk after the exam.', settingFr: 'Tom et son ami parlent après l’examen.',
      lines: [
        line('Freund', 'Wie war die Prüfung?', 'How was the exam?', 'Comment était l’examen ?'),
        line('Tom', 'Schlecht. Das war ein Fehler. Ich hätte das anders gemacht. Das hätte ich nicht gesagt.', 'Bad. That was a mistake. I would have done that differently. I wouldn’t have said that.', 'Mauvais. C’était une erreur. Je l’aurais fait autrement. Je n’aurais pas dit cela.'),
        line('Freund', 'Schade, dass du nicht da warst. Ich wäre gern gekommen. Wir wären fast zu spät gekommen.', 'Too bad that you weren’t there. I would have liked to come. We almost arrived too late.', 'Dommage que tu n’aies pas été là. Je serais volontiers venu. Nous sommes presque arrivés trop tard.'),
        line('Tom', 'Ich hätte fast den Zug verpasst, aber ich bin noch rechtzeitig angekommen. Das war eine gute Chance.', 'I almost missed the train, but I arrived in time. That was a good chance.', 'J’ai failli rater le train, mais je suis arrivé à temps. C’était une bonne chance.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l11-e11', prompt: 'What almost happened to Tom?', promptFr: 'Qu’est-ce qui a failli arriver à Tom ?', options: ['He almost missed the train', 'He almost failed the exam', 'He almost lost his keys'], optionsFr: ['Il a failli rater le train', 'Il a failli rater l’examen', 'Il a failli perdre ses clés'], answer: 0, explain: 'He says: “Ich hätte fast den Zug verpasst.”', explainFr: 'Il dit : « Ich hätte fast den Zug verpasst. »', hint: 'Look for “fast”.', hintFr: 'Cherche « fast ».' } },

    { kind: 'wordgroup', title: 'Bedauern und Fehler', titleFr: 'Regret et erreur',
      items: [{ id: 'b1l11-bereuen', german: 'bereuen', english: 'to regret', french: 'regretter', gender: null, syllables: ['be', 'REU', 'en'], pronunciation: 'be-ROY-en', example: { de: 'Ich bereue nichts.', en: 'I regret nothing.', fr: 'Je ne regrette rien.' } }, { id: 'b1l11-fehler', german: 'der Fehler', english: 'the mistake', french: 'l’erreur', gender: 'der', syllables: ['FEH', 'ler'], pronunciation: 'dair FAY-ler', example: { de: 'Das war ein Fehler.', en: 'That was a mistake.', fr: 'C’était une erreur.' } }, { id: 'b1l11-anders', german: 'anders', english: 'differently', french: 'différemment', gender: null, syllables: ['AN', 'ders'], pronunciation: 'AHN-ders', example: { de: 'Ich hätte es anders gemacht.', en: 'I would have done it differently.', fr: 'Je l’aurais fait différemment.' } }, { id: 'b1l11-fast', german: 'fast', english: 'almost', french: 'presque', gender: null, syllables: ['FAST'], pronunciation: 'fahst', example: { de: 'Ich hätte fast den Zug verpasst.', en: 'I almost missed the train.', fr: 'J’ai failli rater le train.' } }, { id: 'b1l11-verpassen', german: 'verpassen', english: 'to miss (a train/chance)', french: 'rater / manquer', gender: null, syllables: ['ver', 'PAS', 'sen'], pronunciation: 'fair-PASS-en', example: { de: 'Ich habe den Bus verpasst.', en: 'I missed the bus.', fr: 'J’ai raté le bus.' } }, { id: 'b1l11-chance', german: 'die Chance', english: 'the chance', french: 'la chance / opportunité', gender: 'die', syllables: ['CHAN', 'ce'], pronunciation: 'dee SHAHNG-se', example: { de: 'Das war eine gute Chance.', en: 'That was a good chance.', fr: 'C’était une bonne occasion.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l11-vergangenheit', title: 'Past Konjunktiv II: hätte / wäre + participle', titleFr: 'Konjunktiv II passé : hätte / wäre + participe',
      lead: 'Konjunktiv II of haben / sein + participle at the end. Choose hätte or wäre as in the Perfekt.',
      leadFr: 'Konjunktiv II de haben / sein + participe à la fin. Choisis hätte ou wäre comme au Perfekt.',
      explanationMd: 'To say what **would have** happened, use the **Konjunktiv II of haben / sein** (**hätte / wäre**) plus the **participle at the end**: **Ich hätte das anders gemacht. Ich wäre gern gekommen.** Choose **hätte or wäre** exactly as in the **Perfekt**: **movement or change of state → wäre** (**wäre gekommen, wäre gefahren**), **all others → hätte** (**hätte gemacht, hätte gesagt**). **hätte** and **wäre** are in **position 2**; the **participle goes to the end**: **Das hätte ich nicht gesagt.** Typical words: **fast** (almost): **Ich hätte fast den Zug verpasst.**',
      explanationMdFr: 'Pour dire ce qui **aurait** eu lieu, utilise le **Konjunktiv II de haben / sein** (**hätte / wäre**) plus le **participe à la fin** : **Ich hätte das anders gemacht. Ich wäre gern gekommen.** Choisis **hätte ou wäre** exactement comme au **Perfekt** : **mouvement ou changement d’état → wäre** (**wäre gekommen, wäre gefahren**), **tous les autres → hätte** (**hätte gemacht, hätte gesagt**). **hätte** et **wäre** sont en **position 2** ; le **participe va à la fin** : **Das hätte ich nicht gesagt.** Mot typique : **fast** (presque) : **Ich hätte fast den Zug verpasst.**',
      tables: [{ title: 'Past Konjunktiv II', titleFr: 'Konjunktiv II passé', headers: ['Person', 'hätte + participle', 'wäre + participle'], headersFr: ['Personne', 'hätte + participe', 'wäre + participe'],
        rows: [['ich', 'hätte gemacht', 'wäre gekommen'], ['du', 'hättest gemacht', 'wärst gekommen'], ['er / sie / es', 'hätte gemacht', 'wäre gekommen'], ['wir', 'hätten gemacht', 'wären gekommen'], ['ihr', 'hättet gemacht', 'wärt gekommen'], ['sie / Sie', 'hätten gemacht', 'wären gekommen']],
        rowsFr: [['ich', 'hätte gemacht', 'wäre gekommen'], ['du', 'hättest gemacht', 'wärst gekommen'], ['er / sie / es', 'hätte gemacht', 'wäre gekommen'], ['wir', 'hätten gemacht', 'wären gekommen'], ['ihr', 'hättet gemacht', 'wärt gekommen'], ['sie / Sie', 'hätten gemacht', 'wären gekommen']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hätte', role: 'verb' }, { text: 'das', role: 'accusative' }, { text: 'anders', role: 'other' }, { text: 'gemacht.', role: 'verb' }], en: 'I would have done that differently.', fr: 'Je l’aurais fait autrement.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'wäre', role: 'verb' }, { text: 'gern', role: 'other' }, { text: 'gekommen.', role: 'verb' }], en: 'I would have liked to come.', fr: 'Je serais volontiers venu.' },
      ],
      contrast: {
        a: { label: 'Perfekt (real)', labelFr: 'Perfekt (réel)', note: 'it happened', noteFr: 'c’est arrivé', examples: [g('Ich habe das anders gemacht.', 'I did that differently.', 'Je l’ai fait autrement.'), g('Ich bin gekommen.', 'I came.', 'Je suis venu.')] },
        b: { label: 'Past Konjunktiv II (unreal)', labelFr: 'Konjunktiv II passé (irréel)', note: 'it did not happen', noteFr: 'cela n’est pas arrivé', examples: [g('Ich hätte das anders gemacht.', 'I would have done that differently.', 'Je l’aurais fait autrement.'), g('Ich wäre gekommen.', 'I would have come.', 'Je serais venu.')] },
      },
      examples: [
        g('Ich hätte das anders gemacht.', 'I would have done that differently.', 'Je l’aurais fait autrement.'),
        g('Ich wäre gern gekommen.', 'I would have liked to come.', 'Je serais volontiers venu.'),
        g('Das hätte ich nicht gesagt.', 'I wouldn’t have said that.', 'Je n’aurais pas dit cela.'),
        g('Wir wären fast zu spät gekommen.', 'We almost arrived too late.', 'Nous sommes presque arrivés trop tard.'),
        g('Ich hätte fast den Zug verpasst.', 'I almost missed the train.', 'J’ai failli rater le train.'),
        g('Schade, dass du nicht da warst.', 'Too bad that you weren’t there.', 'Dommage que tu n’aies pas été là.'),
      ],
      mistakes: [
        { wrong: 'Ich hätte gekommen.', right: 'Ich wäre gekommen.', why: 'kommen is a movement verb: wäre.', whyFr: 'kommen est un verbe de mouvement : wäre.' },
        { wrong: 'Ich hätte gemacht das anders.', right: 'Ich hätte das anders gemacht.', why: 'The participle goes to the end.', whyFr: 'Le participe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l11-e1', prompt: 'Ich ___ das anders gemacht. (haben — Konjunktiv II)', answer: 'hätte', hint: 'past Konjunktiv II uses hätte + participle', hintFr: 'le Konjunktiv II du passé utilise hätte + participe' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l11-e2', prompt: 'Ich ___ gern gekommen. (sein — Konjunktiv II)', answer: 'wäre', hint: 'kommen → wäre gekommen', hintFr: 'kommen → wäre gekommen' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l11-e3', tokens: ['gesagt', 'hätte', 'nicht', 'Das', 'ich'], answer: ['Das', 'hätte', 'ich', 'nicht', 'gesagt'], hint: 'hätte in position 2, participle at the end.', hintFr: 'hätte en position 2, participe à la fin.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l11-e5', pairs: [{ de: 'bereuen', en: 'to regret', fr: 'regretter' }, { de: 'verpassen', en: 'to miss', fr: 'rater' }, { de: 'der Fehler', en: 'mistake', fr: 'erreur' }], hint: 'Match each item to its meaning.', hintFr: 'Associe chaque élément à sa signification.' } },

    // ───────────── 2 · Unreal past conditions ─────────────
    { kind: 'chapter', title: 'Irreale Bedingungen in der Vergangenheit', titleFr: 'Conditions irréelles au passé', blurb: 'Wenn ich gelernt hätte, …', blurbFr: 'Si j’avais étudié, …' },

    { kind: 'situation', title: 'Wenn ich mehr gelernt hätte', titleFr: 'Si j’avais plus étudié',
      setting: 'Tom reflects on the exam and the weekend.', settingFr: 'Tom réfléchit à l’examen et au week-end.',
      lines: [
        line('Tom', 'Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden. Wenn du früher gegangen wärst, wärst du pünktlich gewesen.', 'If I had studied more I would have passed the exam. If you had left earlier you would have been on time.', 'Si j’avais plus étudié, j’aurais réussi l’examen. Si tu étais parti plus tôt, tu aurais été à l’heure.'),
        line('Freund', 'Wenn ich Zeit gehabt hätte, wäre ich gekommen. Wenn es nicht geregnet hätte, hätten wir gegrillt.', 'If I had had time I would have come. If it hadn’t rained we would have barbecued.', 'Si j’avais eu le temps, je serais venu. S’il n’avait pas plu, nous aurions fait un barbecue.'),
        line('Tom', 'Wenn ich mich anders entschieden hätte, wäre alles anders gekommen. Aber ich habe nicht aufgepasst.', 'If I had decided differently everything would have turned out differently. But I wasn’t paying attention.', 'Si j’avais décidé autrement, tout aurait été différent. Mais je n’ai pas fait attention.'),
      ],
      words: [{ id: 'b1l11-entscheiden', german: 'sich entscheiden', english: 'to decide', french: 'décider', gender: null, syllables: ['ent', 'SCHEI', 'den'], pronunciation: 'ent-SHY-den', example: { de: 'Ich habe mich entschieden.', en: 'I have decided.', fr: 'Je me suis décidé.' } }, { id: 'b1l11-aufpassen', german: 'aufpassen', english: 'to pay attention', french: 'faire attention', gender: null, syllables: ['AUF', 'pas', 'sen'], pronunciation: 'OWF-pass-en', example: { de: 'Du hättest aufpassen sollen.', en: 'You should have paid attention.', fr: 'Tu aurais dû faire attention.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l11-bedingung-vergangenheit', title: 'Unreal past conditions', titleFr: 'Conditions irréelles au passé',
      lead: 'Both clauses use hätte / wäre + participle. wenn-clause: verb last.',
      leadFr: 'Les deux propositions utilisent hätte / wäre + participe. Proposition en wenn : verbe à la fin.',
      explanationMd: 'Both clauses of an **unreal past condition** use the **past Konjunktiv II** (**hätte / wäre + participle**): **Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden. Wenn du früher gegangen wärst, wärst du pünktlich gewesen.** In the **wenn-clause** the **verb group** goes to the end (**gelernt hätte**). You can swap the order: **Ich hätte die Prüfung bestanden, wenn ich mehr gelernt hätte.** **No würde** is needed in the past: **Wenn ich Zeit gehabt hätte, wäre ich gekommen.** Compare **present unreal**: **Wenn ich Zeit hätte, würde ich kommen.**',
      explanationMdFr: 'Les deux propositions d’une **condition irréelle au passé** utilisent le **Konjunktiv II passé** (**hätte / wäre + participe**) : **Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden. Wenn du früher gegangen wärst, wärst du pünktlich gewesen.** Dans la **proposition en wenn**, le **groupe verbal** va à la fin (**gelernt hätte**). Tu peux inverser l’ordre : **Ich hätte die Prüfung bestanden, wenn ich mehr gelernt hätte.** **Pas de würde** nécessaire au passé : **Wenn ich Zeit gehabt hätte, wäre ich gekommen.** Compare avec l’**irréel présent** : **Wenn ich Zeit hätte, würde ich kommen.**',
      tables: [{ title: 'Present vs past unreal', titleFr: 'Irréel présent vs passé', headers: ['', 'wenn-clause', 'main clause'], headersFr: ['', 'proposition en wenn', 'principale'],
        rows: [['Present', 'Wenn ich Zeit hätte,', 'würde ich kommen.'], ['Past', 'Wenn ich Zeit gehabt hätte,', 'wäre ich gekommen.'], ['Past', 'Wenn ich mehr gelernt hätte,', 'hätte ich die Prüfung bestanden.']],
        rowsFr: [['Présent', 'Wenn ich Zeit hätte,', 'würde ich kommen.'], ['Passé', 'Wenn ich Zeit gehabt hätte,', 'wäre ich gekommen.'], ['Passé', 'Wenn ich mehr gelernt hätte,', 'hätte ich die Prüfung bestanden.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'Zeit', role: 'accusative' }, { text: 'gehabt hätte,', role: 'verb' }, { text: 'wäre', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'gekommen.', role: 'verb' }], en: 'If I had had time I would have come.', fr: 'Si j’avais eu le temps, je serais venu.' },
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'nicht', role: 'other' }, { text: 'geregnet hätte,', role: 'verb' }, { text: 'hätten', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'gegrillt.', role: 'verb' }], en: 'If it hadn’t rained we would have barbecued.', fr: 'S’il n’avait pas plu, nous aurions fait un barbecue.' },
      ],
      contrast: {
        a: { label: 'Unreal present', labelFr: 'Irréel présent', note: 'würde + infinitive', noteFr: 'würde + infinitif', examples: [g('Wenn ich Zeit hätte, würde ich kommen.', 'If I had time I would come.', 'Si j’avais du temps, je viendrais.'), g('Wenn es nicht regnen würde, würden wir grillen.', 'If it weren’t raining we would barbecue.', 'S’il ne pleuvait pas, nous ferions un barbecue.')] },
        b: { label: 'Unreal past', labelFr: 'Irréel passé', note: 'hätte / wäre + participle', noteFr: 'hätte / wäre + participe', examples: [g('Wenn ich Zeit gehabt hätte, wäre ich gekommen.', 'If I had had time I would have come.', 'Si j’avais eu le temps, je serais venu.'), g('Wenn es nicht geregnet hätte, hätten wir gegrillt.', 'If it hadn’t rained we would have barbecued.', 'S’il n’avait pas plu, nous aurions fait un barbecue.')] },
      },
      examples: [
        g('Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden.', 'If I had studied more I would have passed the exam.', 'Si j’avais plus étudié, j’aurais réussi l’examen.'),
        g('Wenn du früher gegangen wärst, wärst du pünktlich gewesen.', 'If you had left earlier you would have been on time.', 'Si tu étais parti plus tôt, tu aurais été à l’heure.'),
        g('Wenn ich Zeit gehabt hätte, wäre ich gekommen.', 'If I had had time I would have come.', 'Si j’avais eu le temps, je serais venu.'),
        g('Wenn es nicht geregnet hätte, hätten wir gegrillt.', 'If it hadn’t rained we would have barbecued.', 'S’il n’avait pas plu, nous aurions fait un barbecue.'),
        g('Ich hätte die Prüfung bestanden, wenn ich mehr gelernt hätte.', 'I would have passed the exam if I had studied more.', 'J’aurais réussi l’examen si j’avais plus étudié.'),
        g('Wenn ich mich anders entschieden hätte, wäre alles anders gekommen.', 'If I had decided differently everything would have turned out differently.', 'Si j’avais décidé autrement, tout aurait été différent.'),
      ],
      mistakes: [
        { wrong: 'Wenn ich mehr gelernt hätte, würde ich die Prüfung bestehen.', right: 'Wenn ich mehr gelernt hätte, hätte ich die Prüfung bestanden.', why: 'A past condition needs the past form in the main clause too.', whyFr: 'Une condition passée demande aussi la forme passée dans la principale.' },
        { wrong: 'Wenn ich hätte gelernt, …', right: 'Wenn ich gelernt hätte, …', why: 'The participle comes before hätte at the end.', whyFr: 'Le participe vient avant hätte à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l11-e7', prompt: 'Wenn ich Zeit gehabt hätte, ___ ich gekommen. (sein — Konjunktiv II)', answer: 'wäre', hint: 'main clause: wäre + gekommen', hintFr: 'principale : wäre + gekommen' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l11-e9', tokens: ['gehabt', 'ich', 'Wenn', 'Zeit', 'hätte'], answer: ['Wenn', 'ich', 'Zeit', 'gehabt', 'hätte'], hint: 'wenn-clause: participle + hätte at the end.', hintFr: 'subordonnée wenn : participe + hätte à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l11-e10', prompt: 'Listen. What almost happened?', promptFr: 'Écoute. Qu’a-t-il failli se passer ?', audio: { ttsText: 'Ich hätte fast den Zug verpasst, aber ich bin noch rechtzeitig angekommen.' }, options: ['Almost missed the train', 'Missed the meeting', 'Forgot the tickets'], optionsFr: ['Failli rater le train', 'Raté la réunion', 'Oublié les billets'], answer: 0, hint: 'Listen for "fast … verpasst".', hintFr: 'Écoute « fast … verpasst ».' } },

    // ───────────── 3 · hätte … sollen / können ─────────────
    { kind: 'chapter', title: 'Vorwürfe und Ratschläge: hätte … sollen', titleFr: 'Reproches et conseils : hätte … sollen', blurb: 'The double infinitive.', blurbFr: 'Le double infinitif.' },

    { kind: 'situation', title: 'Du hättest aufpassen sollen', titleFr: 'Tu aurais dû faire attention',
      setting: 'Tom and a friend regret what they did not do.', settingFr: 'Tom et un ami regrettent ce qu’ils n’ont pas fait.',
      lines: [
        line('Freund', 'Du hättest aufpassen sollen. Du hättest früher anrufen können. Du hättest das wissen müssen.', 'You should have paid attention. You could have called earlier. You should have known that.', 'Tu aurais dû faire attention. Tu aurais pu appeler plus tôt. Tu aurais dû le savoir.'),
        line('Tom', 'Ich hätte mehr lernen sollen. Dann hätte ich die Prüfung bestanden. Eigentlich hätte ich mehr lernen sollen.', 'I should have studied more. Then I would have passed the exam. Actually I should have studied more.', 'J’aurais dû étudier plus. Alors j’aurais réussi l’examen. En fait, j’aurais dû étudier plus.'),
        line('Freund', 'Ich bereue nichts. Schade, dass es so gekommen ist.', 'I regret nothing. Too bad that it turned out this way.', 'Je ne regrette rien. Dommage que cela se soit passé ainsi.'),
      ],
      words: [{ id: 'b1l11-schade', german: 'schade', english: 'a pity / too bad', french: 'dommage', gender: null, syllables: ['SCHA', 'de'], pronunciation: 'SHAH-de', example: { de: 'Schade, dass du nicht da warst.', en: 'Too bad you weren’t there.', fr: 'Dommage que tu n’aies pas été là.' } }, { id: 'b1l11-eigentlich', german: 'eigentlich', english: 'actually', french: 'en fait', gender: null, syllables: ['EI', 'gent', 'lich'], pronunciation: 'EYE-gent-likh', example: { de: 'Eigentlich hätte ich mehr lernen sollen.', en: 'Actually I should have studied more.', fr: 'En fait, j’aurais dû étudier plus.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l11-hatte-sollen', title: 'hätte … sollen / können / müssen', titleFr: 'hätte … sollen / können / müssen',
      lead: 'hätte + infinitive + sollen / können / müssen: a double infinitive at the very end.',
      leadFr: 'hätte + infinitif + sollen / können / müssen : un double infinitif tout à la fin.',
      explanationMd: 'For **modal regrets and reproaches** use **hätte + infinitive + modal (sollen, können, müssen)** — a **double infinitive at the very end**: **Ich hätte mehr lernen sollen.** (I should have studied more.) **Du hättest früher anrufen können.** (You could have called earlier.) **Ich hätte das wissen müssen.** (I should have known that.) **hätte** stays in **position 2**; the **two infinitives** come **last**, the **modal at the very end**. In **subordinate clauses** the order changes slightly: **…, weil ich mehr hätte lernen sollen.** With **eigentlich** the regret sounds softer: **Eigentlich hätte ich mehr lernen sollen.**',
      explanationMdFr: 'Pour les **regrets et reproches modaux**, utilise **hätte + infinitif + modal (sollen, können, müssen)** — un **double infinitif tout à la fin** : **Ich hätte mehr lernen sollen.** (J’aurais dû étudier plus.) **Du hättest früher anrufen können.** (Tu aurais pu appeler plus tôt.) **Ich hätte das wissen müssen.** (J’aurais dû le savoir.) **hätte** reste en **position 2** ; les **deux infinitifs** viennent **en dernier**, le **modal tout à la fin**. Dans les **subordonnées**, l’ordre change légèrement : **…, weil ich mehr hätte lernen sollen.** Avec **eigentlich**, le regret sonne plus doux : **Eigentlich hätte ich mehr lernen sollen.**',
      tables: [{ title: 'hätte + double infinitive', titleFr: 'hätte + double infinitif', headers: ['Meaning', 'German'], headersFr: ['Sens', 'Allemand'],
        rows: [['should have', 'Ich hätte mehr lernen sollen.'], ['could have', 'Du hättest früher anrufen können.'], ['must have / should have known', 'Ich hätte das wissen müssen.'], ['softer', 'Eigentlich hätte ich mehr lernen sollen.']],
        rowsFr: [['aurait dû', 'Ich hätte mehr lernen sollen.'], ['aurait pu', 'Du hättest früher anrufen können.'], ['aurait dû savoir', 'Ich hätte das wissen müssen.'], ['plus doux', 'Eigentlich hätte ich mehr lernen sollen.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'hätte', role: 'verb' }, { text: 'mehr', role: 'other' }, { text: 'lernen sollen.', role: 'verb' }], en: 'I should have studied more.', fr: 'J’aurais dû étudier plus.' },
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'hättest', role: 'verb' }, { text: 'früher', role: 'time' }, { text: 'anrufen können.', role: 'verb' }], en: 'You could have called earlier.', fr: 'Tu aurais pu appeler plus tôt.' },
      ],
      contrast: {
        a: { label: 'Present advice', labelFr: 'Conseil au présent', note: 'solltest', noteFr: 'solltest', examples: [g('Du solltest mehr lernen.', 'You should study more.', 'Tu devrais étudier plus.'), g('Du könntest früher anrufen.', 'You could call earlier.', 'Tu pourrais appeler plus tôt.')] },
        b: { label: 'Past regret', labelFr: 'Regret au passé', note: 'hätte … sollen / können', noteFr: 'hätte … sollen / können', examples: [g('Du hättest mehr lernen sollen.', 'You should have studied more.', 'Tu aurais dû étudier plus.'), g('Du hättest früher anrufen können.', 'You could have called earlier.', 'Tu aurais pu appeler plus tôt.')] },
      },
      examples: [
        g('Ich hätte mehr lernen sollen.', 'I should have studied more.', 'J’aurais dû étudier plus.'),
        g('Du hättest früher anrufen können.', 'You could have called earlier.', 'Tu aurais pu appeler plus tôt.'),
        g('Ich hätte das wissen müssen.', 'I should have known that.', 'J’aurais dû le savoir.'),
        g('Du hättest aufpassen sollen.', 'You should have paid attention.', 'Tu aurais dû faire attention.'),
        g('Eigentlich hätte ich mehr lernen sollen.', 'Actually I should have studied more.', 'En fait, j’aurais dû étudier plus.'),
        g('Wir hätten früher losfahren sollen.', 'We should have set off earlier.', 'Nous aurions dû partir plus tôt.'),
      ],
      mistakes: [
        { wrong: 'Ich hätte sollen mehr lernen.', right: 'Ich hätte mehr lernen sollen.', why: 'The infinitive comes before the modal at the end.', whyFr: 'L’infinitif vient avant le modal à la fin.' },
        { wrong: 'Ich hätte mehr gelernt sollen.', right: 'Ich hätte mehr lernen sollen.', why: 'With a modal use the infinitive, not the participle.', whyFr: 'Avec un modal, utilise l’infinitif, pas le participe.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l11-e4', prompt: 'How do you say "I should have studied more"?', promptFr: 'Comment dit-on « j’aurais dû étudier plus » ?', options: ['Ich hätte mehr lernen sollen.', 'Ich habe mehr lernen sollen.', 'Ich würde mehr lernen.'], answer: 0, explain: 'hätte + infinitive + sollen (double infinitive).', explainFr: 'hätte + infinitif + sollen (double infinitif).', hint: 'Look for hätte … lernen sollen.', hintFr: 'Cherche hätte … lernen sollen.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l11-e8', prompt: 'Complete: "Du hättest früher anrufen ___."', promptFr: 'Complète : « Du hättest früher anrufen ___. »', options: ['gekonnt', 'können', 'kannst'], answer: 1, explain: 'Modal regret → infinitive "können" at the end (double infinitive).', explainFr: 'Regret modal → infinitif « können » à la fin (double infinitif).', hint: 'It’s a double infinitive: anrufen können.', hintFr: 'C’est un double infinitif : anrufen können.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l11-e6', prompt: 'Listen. What does the speaker regret?', promptFr: 'Écoute. Que regrette le locuteur ?', audio: { ttsText: 'Ich hätte mehr lernen sollen. Dann hätte ich die Prüfung bestanden.' }, options: ['Not studying more', 'Missing the bus', 'Being late'], optionsFr: ['Ne pas avoir étudié plus', 'Avoir raté le bus', 'Être en retard'], answer: 0, hint: 'Listen for "hätte mehr lernen sollen".', hintFr: 'Écoute « hätte mehr lernen sollen ».' } },

    { kind: 'pronunciation', focus: 'The double infinitive ending stacks two verbs: "lernen sollen", "anrufen können"', focusFr: 'Le double infinitif empile deux verbes : « lernen sollen », « anrufen können »', items: [{ id: 'b1l11-haette-pron', german: 'hätte gemacht', english: 'would have done', french: 'aurait fait', gender: null, syllables: ['HÄT', 'te', 'ge', 'MACHT'], pronunciation: 'HET-te ge-MAHKHT', example: { de: 'Ich hätte es gemacht.', en: 'I would have done it.', fr: 'Je l’aurais fait.' } }, { id: 'b1l11-waere-pron', german: 'wäre gekommen', english: 'would have come', french: 'serait venu', gender: null, syllables: ['WÄ', 're', 'ge', 'KOM', 'men'], pronunciation: 'VAY-re ge-KOM-men', example: { de: 'Ich wäre gekommen.', en: 'I would have come.', fr: 'Je serais venu.' } }] },

    { kind: 'wrapup',
      summary: 'You can now express **regrets** and **unreal past situations**: **hätte / wäre + participle**, **Wenn ich … gehabt hätte, wäre ich …** and **hätte … sollen / können**. 🎉',
      summaryFr: 'Tu sais maintenant exprimer des **regrets** et des **situations irréelles au passé** : **hätte / wäre + participe**, **Wenn ich … gehabt hätte, wäre ich …** et **hätte … sollen / können**. 🎉',
      card: { title: 'The past Konjunktiv II on one page', titleFr: 'Le Konjunktiv II passé en une page', sections: [
        { heading: 'Form', headingFr: 'Forme', rows: [g('hätte / wäre + participle', 'as in the Perfekt', 'comme au Perfekt')] },
        { heading: 'Unreal condition', headingFr: 'Condition irréelle', rows: [g('Wenn ich gelernt hätte, hätte ich bestanden.', 'both parts past Konjunktiv II', 'les deux parties au Konjunktiv II passé')] },
        { heading: 'Regret', headingFr: 'Regret', rows: [g('hätte … sollen / können / müssen', 'double infinitive at the end', 'double infinitif à la fin')] },
      ] } },
  ],
};

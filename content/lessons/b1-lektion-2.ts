import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion2: Lesson = {
  id: 'b1-l2', level: 'B1', module: 3, number: 12,
  title: { de: 'Wenn ich könnte …', en: 'If I could …', fr: 'Si je pouvais …' },
  theme: 'Unreal conditions with "wenn" and the Konjunktiv II', themeFr: 'Les conditions irréelles avec « wenn » et le Konjunktiv II',
  goals: ['Form unreal conditions with "wenn"', 'Combine "wenn … hätte/wäre" with "würde"', 'Tell real from unreal conditions', 'Talk about hypothetical situations'], goalsFr: ['Former des conditions irréelles avec « wenn »', 'Combiner « wenn … hätte/wäre » avec « würde »', 'Distinguer conditions réelles et irréelles', 'Parler de situations hypothétiques'],
  canDo: g('Ich kann irreale Bedingungen mit „wenn“ und dem Konjunktiv II bilden und von realen Bedingungen unterscheiden.', 'I can form unreal conditions with “wenn” and the Konjunktiv II and tell them from real ones.', 'Je sais former des conditions irréelles avec « wenn » et le Konjunktiv II et les distinguer des conditions réelles.'),
  steps: [
    { kind: 'intro', title: 'Wenn ich könnte … 💭', titleFr: 'Si je pouvais … 💭',
      scene: 'Lena dreams about winning the lottery — and her friend Jonas brings her back to reality.', sceneFr: 'Lena rêve de gagner au loto — et son ami Jonas la ramène à la réalité.',
      goals: ['Form unreal conditions with wenn + Konjunktiv II', 'Combine wenn … hätte / wäre with würde', 'Tell real from unreal conditions'],
      goalsFr: ['Former des conditions irréelles avec wenn + Konjunktiv II', 'Combiner wenn … hätte / wäre avec würde', 'Distinguer conditions réelles et irréelles'] },

    // ───────────── 1 · Unreal conditions ─────────────
    { kind: 'chapter', title: 'Irreale Bedingungen', titleFr: 'Conditions irréelles', blurb: 'Wenn ich … hätte, würde ich …', blurbFr: 'Si j’avais …, je ferais …' },

    { kind: 'situation', title: 'Wenn ich reich wäre', titleFr: 'Si j’étais riche',
      setting: 'Lena and Jonas daydream over coffee.', settingFr: 'Lena et Jonas rêvassent autour d’un café.',
      lines: [
        line('Lena', 'Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen. Wenn ich reich wäre, würde ich die Welt sehen.', 'If I won the lottery I would travel around the world. If I were rich I would see the world.', 'Si je gagnais au loto, je voyagerais autour du monde. Si j’étais riche, je verrais le monde.'),
        line('Jonas', 'Wenn ich Zeit hätte, würde ich mein Deutsch verbessern. Ich hätte mehr Möglichkeiten.', 'If I had time I would improve my German. I would have more possibilities.', 'Si j’avais du temps, j’améliorerais mon allemand. J’aurais plus de possibilités.'),
        line('Lena', 'Wenn ich könnte, würde ich dir helfen. Wenn wir mehr Zeit hätten, wären wir entspannter.', 'If I could I would help you. If we had more time we would be more relaxed.', 'Si je pouvais, je t’aiderais. Si nous avions plus de temps, nous serions plus détendus.'),
        line('Jonas', 'Das ist kein Problem — wir finden eine Lösung. Unter einer Bedingung: Beeil dich, sonst kommen wir zu spät.', 'That’s no problem — we’ll find a solution. On one condition: hurry up, otherwise we’ll be late.', 'Ce n’est pas un problème — nous trouverons une solution. À une condition : dépêche-toi, sinon nous serons en retard.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l2-e11', prompt: 'What would Lena do if she won the lottery?', promptFr: 'Que ferait Lena si elle gagnait au loto ?', options: ['Travel around the world', 'Buy a house', 'Stop working'], optionsFr: ['Voyager autour du monde', 'Acheter une maison', 'Arrêter de travailler'], answer: 0, explain: 'She says: “…würde ich um die Welt reisen.”', explainFr: 'Elle dit : « …würde ich um die Welt reisen. »', hint: 'Look for “Welt”.', hintFr: 'Cherche « Welt ».' } },

    { kind: 'wordgroup', title: 'Träumen und Lösen', titleFr: 'Rêver et résoudre',
      items: [{ id: 'b1l2-gewinnen', german: 'gewinnen', english: 'to win', french: 'gagner', gender: null, syllables: ['ge', 'WIN', 'nen'], pronunciation: 'ge-VIN-nen', example: { de: 'Wenn ich gewinnen würde …', en: 'If I won …', fr: 'Si je gagnais …' } }, { id: 'b1l2-reich', german: 'reich', english: 'rich', french: 'riche', gender: null, syllables: ['REICH'], pronunciation: 'rye-kh', example: { de: 'Wenn ich reich wäre …', en: 'If I were rich …', fr: 'Si j’étais riche …' } }, { id: 'b1l2-welt', german: 'die Welt', english: 'the world', french: 'le monde', gender: 'die', syllables: ['WELT'], pronunciation: 'dee VELT', example: { de: 'Ich würde die Welt sehen.', en: 'I would see the world.', fr: 'Je verrais le monde.' } }, { id: 'b1l2-verbessern', german: 'verbessern', english: 'to improve', french: 'améliorer', gender: null, syllables: ['ver', 'BES', 'sern'], pronunciation: 'fair-BESS-ern', example: { de: 'Ich würde mein Deutsch verbessern.', en: 'I would improve my German.', fr: 'J’améliorerais mon allemand.' } }, { id: 'b1l2-moeglichkeit', german: 'die Möglichkeit', english: 'the possibility', french: 'la possibilité', gender: 'die', syllables: ['MÖG', 'lich', 'keit'], pronunciation: 'MOEG-likh-kite', example: { de: 'Ich hätte mehr Möglichkeiten.', en: 'I would have more opportunities.', fr: 'J’aurais plus de possibilités.' } }, { id: 'b1l2-bedingung', german: 'die Bedingung', english: 'the condition', french: 'la condition', gender: 'die', syllables: ['be', 'DIN', 'gung'], pronunciation: 'be-DIN-goong', example: { de: 'Unter einer Bedingung.', en: 'On one condition.', fr: 'À une condition.' } }] },

    { kind: 'wordgroup', title: 'Probleme und Lösungen', titleFr: 'Problèmes et solutions',
      items: [{ id: 'b1l2-problem', german: 'das Problem', english: 'the problem', french: 'le problème', gender: 'das', syllables: ['pro', 'BLEM'], pronunciation: 'dahs pro-BLAYM', example: { de: 'Das ist kein Problem.', en: 'That’s no problem.', fr: 'Ce n’est pas un problème.' } }, { id: 'b1l2-loesung', german: 'die Lösung', english: 'the solution', french: 'la solution', gender: 'die', syllables: ['LÖ', 'sung'], pronunciation: 'dee LOE-zoong', example: { de: 'Wir finden eine Lösung.', en: 'We’ll find a solution.', fr: 'Nous trouverons une solution.' } }, { id: 'b1l2-sonst', german: 'sonst', english: 'otherwise', french: 'sinon', gender: null, syllables: ['SONST'], pronunciation: 'zonst', example: { de: 'Beeil dich, sonst kommen wir zu spät.', en: 'Hurry, otherwise we’ll be late.', fr: 'Dépêche-toi, sinon on sera en retard.' } }, { id: 'b1l2-zeit-haben', german: 'Zeit haben', english: 'to have time', french: 'avoir le temps', gender: null, syllables: ['ZEIT', 'ha', 'ben'], pronunciation: 'TSITE HAH-ben', example: { de: 'Wenn ich Zeit hätte …', en: 'If I had time …', fr: 'Si j’avais le temps …' } }] },

    { kind: 'grammar', note: {
      id: 'b1l2-irreal', title: 'Unreal conditions: wenn + Konjunktiv II', titleFr: 'Conditions irréelles : wenn + Konjunktiv II',
      lead: 'Both parts in the Konjunktiv II: wenn-clause hätte / wäre / könnte, main clause würde + infinitive.',
      leadFr: 'Les deux parties au Konjunktiv II : proposition en wenn avec hätte / wäre / könnte, principale avec würde + infinitif.',
      explanationMd: 'An **unreal condition** uses the **Konjunktiv II in both parts**. Typically the **wenn-clause** has **hätte / wäre / könnte** and the **main clause** has **würde + infinitive**: **Wenn ich Zeit hätte, würde ich mehr lernen. Wenn ich reich wäre, würde ich reisen.** **hätte, wäre, könnte** can also stand **in the main clause**: **Wenn wir mehr Zeit hätten, wären wir entspannter.** To avoid **würde … würde** in both parts, use **hätte / wäre** in the **wenn-clause**: **Wenn ich im Lotto gewinnen würde …** is correct, but **Wenn ich gewönne …** sounds written and old-fashioned.',
      explanationMdFr: 'Une **condition irréelle** utilise le **Konjunktiv II dans les deux parties**. Généralement la **proposition en wenn** contient **hätte / wäre / könnte** et la **principale** **würde + infinitif** : **Wenn ich Zeit hätte, würde ich mehr lernen. Wenn ich reich wäre, würde ich reisen.** **hätte, wäre, könnte** peuvent aussi se trouver **dans la principale** : **Wenn wir mehr Zeit hätten, wären wir entspannter.** Pour éviter **würde … würde** dans les deux parties, utilise **hätte / wäre** dans la **proposition en wenn** : **Wenn ich im Lotto gewinnen würde …** est correct, mais **Wenn ich gewönne …** sonne écrit et désuet.',
      tables: [{ title: 'Unreal condition', titleFr: 'Condition irréelle', headers: ['wenn-clause', 'main clause'], headersFr: ['Proposition en wenn', 'Principale'],
        rows: [['Wenn ich Zeit hätte,', 'würde ich mehr lernen.'], ['Wenn ich reich wäre,', 'würde ich reisen.'], ['Wenn ich könnte,', 'würde ich dir helfen.'], ['Wenn wir mehr Zeit hätten,', 'wären wir entspannter.']],
        rowsFr: [['Wenn ich Zeit hätte,', 'würde ich mehr lernen.'], ['Wenn ich reich wäre,', 'würde ich reisen.'], ['Wenn ich könnte,', 'würde ich dir helfen.'], ['Wenn wir mehr Zeit hätten,', 'wären wir entspannter.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'Zeit', role: 'accusative' }, { text: 'hätte,', role: 'verb' }, { text: 'würde', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'mehr', role: 'other' }, { text: 'lernen.', role: 'verb' }], en: 'If I had time I would study more.', fr: 'Si j’avais du temps, j’étudierais davantage.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'dich', role: 'accusative' }, { text: 'besuchen,', role: 'verb' }, { text: 'wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'nicht', role: 'other' }, { text: 'krank wäre.', role: 'verb' }], en: 'I would visit you if I weren’t ill.', fr: 'Je te rendrais visite si je n’étais pas malade.' },
      ],
      contrast: {
        a: { label: 'Real (present)', labelFr: 'Réel (présent)', note: 'it can happen', noteFr: 'cela peut arriver', examples: [g('Wenn ich Zeit habe, lerne ich.', 'When / if I have time, I study.', 'Quand / si j’ai du temps, j’étudie.'), g('Wenn es regnet, bleibe ich zu Hause.', 'If it rains, I stay at home.', 'S’il pleut, je reste à la maison.')] },
        b: { label: 'Unreal (Konjunktiv II)', labelFr: 'Irréel (Konjunktiv II)', note: 'it is not true', noteFr: 'ce n’est pas vrai', examples: [g('Wenn ich Zeit hätte, würde ich lernen.', 'If I had time I would study (but I don’t).', 'Si j’avais du temps, j’étudierais (mais je n’en ai pas).'), g('Wenn es regnen würde, würde ich zu Hause bleiben.', 'If it were to rain I would stay at home.', 'S’il pleuvait, je resterais à la maison.')] },
      },
      examples: [
        g('Wenn ich Zeit hätte, würde ich mehr lernen.', 'If I had time I would study more.', 'Si j’avais du temps, j’étudierais davantage.'),
        g('Wenn ich reich wäre, würde ich reisen.', 'If I were rich I would travel.', 'Si j’étais riche, je voyagerais.'),
        g('Wenn ich könnte, würde ich dir helfen.', 'If I could, I would help you.', 'Si je pouvais, je t’aiderais.'),
        g('Wenn wir mehr Zeit hätten, wären wir entspannter.', 'If we had more time we would be more relaxed.', 'Si nous avions plus de temps, nous serions plus détendus.'),
        g('Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.', 'If I won the lottery I would travel around the world.', 'Si je gagnais au loto, je voyagerais autour du monde.'),
        g('Ich hätte mehr Möglichkeiten.', 'I would have more possibilities.', 'J’aurais plus de possibilités.'),
      ],
      mistakes: [
        { wrong: 'Wenn ich habe Zeit, würde ich lernen.', right: 'Wenn ich Zeit hätte, würde ich lernen.', why: 'An unreal condition needs the Konjunktiv II in the wenn-clause.', whyFr: 'Une condition irréelle demande le Konjunktiv II dans la proposition en wenn.' },
        { wrong: 'Wenn ich Zeit hätte, ich würde lernen.', right: 'Wenn ich Zeit hätte, würde ich lernen.', why: 'After the wenn-clause the verb comes next.', whyFr: 'Après la proposition en wenn, le verbe vient ensuite.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l2-e1', prompt: 'Wenn ich Zeit ___, würde ich mehr lernen. (haben — Konjunktiv II)', answer: 'hätte', hint: 'haben → hätte', hintFr: 'haben → hätte' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l2-e2', prompt: 'Wenn ich reich ___, würde ich reisen. (sein — Konjunktiv II)', answer: 'wäre', hint: 'sein → wäre', hintFr: 'sein → wäre' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l2-e9', prompt: 'Complete: "Ich würde dich besuchen, wenn ich Zeit ___."', promptFr: 'Complète : « Ich würde dich besuchen, wenn ich Zeit ___. »', options: ['habe', 'hätte', 'hatte'], answer: 1, explain: 'Unreal condition → hätte.', explainFr: 'Condition irréelle → hätte.', hint: 'Match the Konjunktiv II of the main clause.', hintFr: 'Accorde avec le Konjunktiv II de la principale.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l2-e8', prompt: 'Wenn ich könnte, ___ ich dir helfen. (würde)', answer: 'würde', hint: 'main clause uses "würde"', hintFr: 'la principale utilise « würde »' } },

    // ───────────── 2 · Word order ─────────────
    { kind: 'chapter', title: 'Satzstellung', titleFr: 'L’ordre des mots', blurb: 'Which clause first?', blurbFr: 'Quelle proposition en premier ?' },

    { kind: 'situation', title: 'Wenn das Wetter besser wäre', titleFr: 'Si le temps était meilleur',
      setting: 'Planning a trip in the rain.', settingFr: 'Planifier une sortie sous la pluie.',
      lines: [
        line('Lena', 'Wenn das Wetter besser wäre, würden wir grillen. Wir würden grillen, wenn das Wetter besser wäre.', 'If the weather were better we would barbecue. We would barbecue if the weather were better.', 'Si le temps était meilleur, nous ferions un barbecue. Nous ferions un barbecue si le temps était meilleur.'),
        line('Jonas', 'Ich würde dich besuchen, wenn ich nicht krank wäre. Wenn das Wetter besser wäre, würden wir einen Ausflug machen.', 'I would visit you if I weren’t ill. If the weather were better we would go on a trip.', 'Je te rendrais visite si je n’étais pas malade. Si le temps était meilleur, nous ferions une excursion.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l2-wortstellung', title: 'Word order in conditions', titleFr: 'L’ordre des mots dans les conditions',
      lead: 'wenn-clause: verb last. You can start with either clause; if the wenn-clause is first, the main clause starts with the verb.',
      leadFr: 'Proposition en wenn : verbe à la fin. Tu peux commencer par l’une ou l’autre ; si la proposition en wenn est première, la principale commence par le verbe.',
      explanationMd: 'The **wenn-clause** sends its **verb to the end**. You can start with **either clause**: **Wenn ich Zeit hätte, würde ich kommen.** or **Ich würde kommen, wenn ich Zeit hätte.** When the sentence starts with the **wenn-clause**, the **main clause begins with the verb** (**würde**). You can add **dann** in the main clause: **Wenn ich Zeit hätte, dann würde ich kommen.** **Negation** goes before the verb at the end: **Ich würde dich besuchen, wenn ich nicht krank wäre.**',
      explanationMdFr: 'La **proposition en wenn** envoie son **verbe à la fin**. Tu peux commencer par **l’une ou l’autre** : **Wenn ich Zeit hätte, würde ich kommen.** ou **Ich würde kommen, wenn ich Zeit hätte.** Quand la phrase commence par la **proposition en wenn**, la **principale commence par le verbe** (**würde**). Tu peux ajouter **dann** dans la principale : **Wenn ich Zeit hätte, dann würde ich kommen.** La **négation** se place avant le verbe final : **Ich würde dich besuchen, wenn ich nicht krank wäre.**',
      tables: [{ title: 'Two orders', titleFr: 'Deux ordres', headers: ['wenn first', 'main clause first'], headersFr: ['wenn en premier', 'principale en premier'],
        rows: [['Wenn ich Zeit hätte, würde ich kommen.', 'Ich würde kommen, wenn ich Zeit hätte.'], ['Wenn das Wetter besser wäre, würden wir grillen.', 'Wir würden grillen, wenn das Wetter besser wäre.'], ['Wenn ich nicht krank wäre, würde ich dich besuchen.', 'Ich würde dich besuchen, wenn ich nicht krank wäre.']],
        rowsFr: [['Wenn ich Zeit hätte, würde ich kommen.', 'Ich würde kommen, wenn ich Zeit hätte.'], ['Wenn das Wetter besser wäre, würden wir grillen.', 'Wir würden grillen, wenn das Wetter besser wäre.'], ['Wenn ich nicht krank wäre, würde ich dich besuchen.', 'Ich würde dich besuchen, wenn ich nicht krank wäre.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'das Wetter', role: 'subject' }, { text: 'besser wäre,', role: 'verb' }, { text: 'würden', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'grillen.', role: 'verb' }], en: 'If the weather were better we would barbecue.', fr: 'Si le temps était meilleur, nous ferions un barbecue.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'würden', role: 'verb' }, { text: 'grillen,', role: 'verb' }, { text: 'wenn', role: 'connector' }, { text: 'das Wetter', role: 'subject' }, { text: 'besser wäre.', role: 'verb' }], en: 'We would barbecue if the weather were better.', fr: 'Nous ferions un barbecue si le temps était meilleur.' },
      ],
      contrast: {
        a: { label: 'wenn-clause first', labelFr: 'wenn en premier', note: 'verb next', noteFr: 'verbe ensuite', examples: [g('Wenn ich Zeit hätte, würde ich kommen.', 'If I had time I would come.', 'Si j’avais du temps, je viendrais.'), g('Wenn das Wetter besser wäre, würden wir einen Ausflug machen.', 'If the weather were better we would go on a trip.', 'Si le temps était meilleur, nous ferions une excursion.')] },
        b: { label: 'main clause first', labelFr: 'principale en premier', note: 'subject, verb …', noteFr: 'sujet, verbe …', examples: [g('Ich würde kommen, wenn ich Zeit hätte.', 'I would come if I had time.', 'Je viendrais si j’avais du temps.'), g('Ich würde dich besuchen, wenn ich nicht krank wäre.', 'I would visit you if I weren’t ill.', 'Je te rendrais visite si je n’étais pas malade.')] },
      },
      examples: [
        g('Wenn das Wetter besser wäre, würden wir grillen.', 'If the weather were better we would barbecue.', 'Si le temps était meilleur, nous ferions un barbecue.'),
        g('Ich würde dich besuchen, wenn ich nicht krank wäre.', 'I would visit you if I weren’t ill.', 'Je te rendrais visite si je n’étais pas malade.'),
        g('Wenn ich Zeit hätte, dann würde ich kommen.', 'If I had time then I would come.', 'Si j’avais du temps, alors je viendrais.'),
        g('Wir würden einen Ausflug machen, wenn es nicht regnen würde.', 'We would go on a trip if it weren’t raining.', 'Nous ferions une excursion s’il ne pleuvait pas.'),
        g('Wenn ich du wäre, würde ich das Angebot annehmen.', 'If I were you I would accept the offer.', 'Si j’étais toi, j’accepterais l’offre.'),
        g('Wenn wir mehr Geld hätten, könnten wir mehr reisen.', 'If we had more money we could travel more.', 'Si nous avions plus d’argent, nous pourrions voyager davantage.'),
      ],
      mistakes: [
        { wrong: 'Wenn das Wetter besser wäre, wir würden grillen.', right: 'Wenn das Wetter besser wäre, würden wir grillen.', why: 'After the wenn-clause the verb is first in the main clause.', whyFr: 'Après la proposition en wenn, le verbe est en premier dans la principale.' },
        { wrong: 'Ich würde kommen, wenn hätte ich Zeit.', right: 'Ich würde kommen, wenn ich Zeit hätte.', why: 'In the wenn-clause the verb goes to the end.', whyFr: 'Dans la proposition en wenn, le verbe va à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l2-e3', tokens: ['hätte', 'ich', 'Wenn', 'Zeit'], answer: ['Wenn', 'ich', 'Zeit', 'hätte'], hint: 'The wenn-clause verb goes to the end.', hintFr: 'Le verbe de la subordonnée wenn va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l2-e7', tokens: ['würde', 'reisen', 'ich', 'Dann'], answer: ['Dann', 'würde', 'ich', 'reisen'], hint: 'After a front element, the verb (würde) comes second.', hintFr: 'Après un élément en tête, le verbe (würde) vient en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l2-e10', prompt: 'Listen. What is the condition?', promptFr: 'Écoute. Quelle est la condition ?', audio: { ttsText: 'Wenn das Wetter besser wäre, würden wir einen Ausflug machen.' }, options: ['If the weather were better', 'If we had money', 'If it were the weekend'], optionsFr: ['Si le temps était meilleur', 'Si on avait de l’argent', 'Si c’était le week-end'], answer: 0, hint: 'Listen to the "wenn"-clause.', hintFr: 'Écoute la subordonnée « wenn ».' } },

    // ───────────── 3 · Real vs unreal ─────────────
    { kind: 'chapter', title: 'Real oder irreal?', titleFr: 'Réel ou irréel ?', blurb: 'Two meanings, two moods.', blurbFr: 'Deux sens, deux modes.' },

    { kind: 'situation', title: 'Das ist möglich — oder nicht', titleFr: 'C’est possible — ou pas',
      setting: 'Jonas compares what is possible and what is only a dream.', settingFr: 'Jonas compare ce qui est possible et ce qui n’est qu’un rêve.',
      lines: [
        line('Jonas', 'Wenn es regnet, bleibe ich zu Hause — das ist real. Wenn es regnen würde, würde ich zu Hause bleiben — das ist nur eine Idee.', 'If it rains, I stay at home — that’s real. If it were to rain I would stay at home — that’s only an idea.', 'S’il pleut, je reste à la maison — c’est réel. S’il pleuvait, je resterais à la maison — ce n’est qu’une idée.'),
        line('Lena', 'Wenn ich Zeit habe, lerne ich. Wenn ich Zeit hätte, würde ich lernen — aber ich habe keine.', 'If I have time I study. If I had time I would study — but I don’t.', 'Si j’ai du temps, j’étudie. Si j’avais du temps, j’étudierais — mais je n’en ai pas.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l2-real-irreal', title: 'Real vs unreal', titleFr: 'Réel vs irréel',
      lead: 'Present tense = it can happen. Konjunktiv II = it is not (yet) true.',
      leadFr: 'Présent = cela peut arriver. Konjunktiv II = ce n’est pas (encore) vrai.',
      explanationMd: 'Compare: **Real** (indicative present): **Wenn ich Zeit habe, lerne ich.** — when / if I have time, I study (**it can happen**). **Unreal** (Konjunktiv II): **Wenn ich Zeit hätte, würde ich lernen.** — if I had time I would study (**but I don’t**). **Real** conditions use the **same tense in both parts**; **unreal** conditions use the **Konjunktiv II in both parts**. The **meaning decides**: ask yourself **“Is this possible?”** — if yes, **indicative**; if it is a **dream, regret or hypothetical**, **Konjunktiv II**.',
      explanationMdFr: 'Compare : **Réel** (indicatif présent) : **Wenn ich Zeit habe, lerne ich.** — quand / si j’ai du temps, j’étudie (**cela peut arriver**). **Irréel** (Konjunktiv II) : **Wenn ich Zeit hätte, würde ich lernen.** — si j’avais du temps, j’étudierais (**mais je n’en ai pas**). Les conditions **réelles** utilisent le **même temps dans les deux parties** ; les conditions **irréelles** utilisent le **Konjunktiv II dans les deux parties**. C’est le **sens** qui décide : demande-toi **« Est-ce possible ? »** — si oui, **indicatif** ; si c’est un **rêve, un regret ou une hypothèse**, **Konjunktiv II**.',
      tables: [{ title: 'Real vs unreal', titleFr: 'Réel vs irréel', headers: ['', 'Real', 'Unreal'], headersFr: ['', 'Réel', 'Irréel'],
        rows: [['Mood', 'indicative', 'Konjunktiv II'], ['Meaning', 'it can happen', 'it is not true / not (yet) possible'], ['Example', 'Wenn es regnet, bleibe ich zu Hause.', 'Wenn es regnen würde, würde ich zu Hause bleiben.']],
        rowsFr: [['Mode', 'indicatif', 'Konjunktiv II'], ['Sens', 'cela peut arriver', 'ce n’est pas vrai / pas (encore) possible'], ['Exemple', 'Wenn es regnet, bleibe ich zu Hause.', 'Wenn es regnen würde, würde ich zu Hause bleiben.']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'Zeit', role: 'accusative' }, { text: 'habe,', role: 'verb' }, { text: 'lerne', role: 'verb' }, { text: 'ich.', role: 'subject' }], en: 'If I have time I study.', fr: 'Si j’ai du temps, j’étudie.' },
        { parts: [{ text: 'Wenn', role: 'connector' }, { text: 'ich', role: 'subject' }, { text: 'Zeit', role: 'accusative' }, { text: 'hätte,', role: 'verb' }, { text: 'würde', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'lernen.', role: 'verb' }], en: 'If I had time I would study.', fr: 'Si j’avais du temps, j’étudierais.' },
      ],
      contrast: {
        a: { label: 'Real', labelFr: 'Réel', note: 'habe → lerne', noteFr: 'habe → lerne', examples: [g('Wenn ich Zeit habe, lerne ich.', 'If I have time I study.', 'Si j’ai du temps, j’étudie.'), g('Wenn es regnet, bleibe ich zu Hause.', 'If it rains I stay at home.', 'S’il pleut, je reste à la maison.')] },
        b: { label: 'Unreal', labelFr: 'Irréel', note: 'hätte → würde lernen', noteFr: 'hätte → würde lernen', examples: [g('Wenn ich Zeit hätte, würde ich lernen.', 'If I had time I would study.', 'Si j’avais du temps, j’étudierais.'), g('Wenn es regnen würde, würde ich zu Hause bleiben.', 'If it were to rain I would stay at home.', 'S’il pleuvait, je resterais à la maison.')] },
      },
      examples: [
        g('Wenn es regnet, bleibe ich zu Hause.', 'If it rains, I stay at home.', 'S’il pleut, je reste à la maison.'),
        g('Wenn es regnen würde, würde ich zu Hause bleiben.', 'If it were to rain I would stay at home.', 'S’il pleuvait, je resterais à la maison.'),
        g('Wenn ich Zeit habe, lerne ich.', 'If I have time I study.', 'Si j’ai du temps, j’étudie.'),
        g('Wenn ich Zeit hätte, würde ich lernen — aber ich habe keine.', 'If I had time I would study — but I don’t.', 'Si j’avais du temps, j’étudierais — mais je n’en ai pas.'),
        g('Wenn du willst, kannst du mitkommen.', 'If you want, you can come along.', 'Si tu veux, tu peux venir.'),
        g('Wenn ich du wäre, würde ich anrufen.', 'If I were you I would call.', 'Si j’étais toi, j’appellerais.'),
      ],
      mistakes: [
        { wrong: 'Wenn ich Zeit hätte, lerne ich. (but I don’t)', right: 'Wenn ich Zeit hätte, würde ich lernen.', why: 'An unreal condition needs the Konjunktiv II in the main clause too.', whyFr: 'Une condition irréelle demande aussi le Konjunktiv II dans la principale.' },
        { wrong: 'Wenn es regnen würde, bleibe ich zu Hause.', right: 'Wenn es regnet, bleibe ich zu Hause.', why: 'For a real possibility use the indicative.', whyFr: 'Pour une possibilité réelle, utilise l’indicatif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l2-e4', prompt: 'Which sentence is an UNREAL condition?', promptFr: 'Quelle phrase est une condition IRRÉELLE ?', options: ['Wenn ich Zeit habe, lerne ich.', 'Wenn ich Zeit hätte, würde ich lernen.', 'Ich lerne jeden Tag.'], answer: 1, explain: 'Konjunktiv II (hätte … würde) marks the unreal condition.', explainFr: 'Le Konjunktiv II (hätte … würde) marque la condition irréelle.', hint: 'Look for hätte/wäre + würde.', hintFr: 'Cherche hätte/wäre + würde.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l2-e5', pairs: [{ de: 'die Bedingung', en: 'condition', fr: 'condition' }, { de: 'die Lösung', en: 'solution', fr: 'solution' }, { de: 'die Möglichkeit', en: 'possibility', fr: 'possibilité' }], hint: 'Match each noun to its meaning.', hintFr: 'Associe chaque nom à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l2-e6', prompt: 'Listen. What would Lena do if she won?', promptFr: 'Écoute. Que ferait Lena si elle gagnait ?', audio: { ttsText: 'Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.' }, options: ['Travel the world', 'Buy a car', 'Stop working'], optionsFr: ['Faire le tour du monde', 'Acheter une voiture', 'Arrêter de travailler'], answer: 0, hint: 'Listen after the second "würde".', hintFr: 'Écoute après le deuxième « würde ».' } },

    { kind: 'pronunciation', focus: 'Contrast hätte/wäre (unreal) with habe/bin (real): the umlaut signals the Konjunktiv II', focusFr: 'Oppose hätte/wäre (irréel) à habe/bin (réel) : le tréma marque le Konjunktiv II', items: [{ id: 'b1l2-waere-pron', german: 'wäre', english: 'were', french: 'était', gender: null, syllables: ['WÄ', 're'], pronunciation: 'VAY-re', example: { de: 'Wenn ich reich wäre.', en: 'If I were rich.', fr: 'Si j’étais riche.' } }, { id: 'b1l2-haette-pron', german: 'hätte', english: 'had', french: 'avait', gender: null, syllables: ['HÄT', 'te'], pronunciation: 'HET-te', example: { de: 'Wenn ich Zeit hätte.', en: 'If I had time.', fr: 'Si j’avais le temps.' } }] },

    { kind: 'wrapup',
      summary: 'You can now form **unreal conditions** (**Wenn ich Zeit hätte, würde ich …**), choose the **word order**, and tell **real from unreal**. 🎉',
      summaryFr: 'Tu sais maintenant former des **conditions irréelles** (**Wenn ich Zeit hätte, würde ich …**), choisir l’**ordre des mots**, et distinguer le **réel de l’irréel**. 🎉',
      card: { title: 'Conditions on one page', titleFr: 'Les conditions en une page', sections: [
        { heading: 'Unreal', headingFr: 'Irréel', rows: [g('Wenn ich Zeit hätte, würde ich lernen.', 'Konjunktiv II in both parts', 'Konjunktiv II dans les deux parties')] },
        { heading: 'Real', headingFr: 'Réel', rows: [g('Wenn ich Zeit habe, lerne ich.', 'indicative', 'indicatif')] },
        { heading: 'Order', headingFr: 'Ordre', rows: [g('wenn-clause: verb last', 'comma, then verb first in the main clause', 'virgule, puis verbe en premier dans la principale')] },
      ] } },
  ],
};

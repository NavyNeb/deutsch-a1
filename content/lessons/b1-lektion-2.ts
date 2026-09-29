import type { Lesson } from '../types';

export const b1lektion2: Lesson = {
  id: 'b1-l2', level: 'B1', module: 1, number: 2,
  title: { de: 'Wenn ich könnte …', en: 'If I could …', fr: 'Si je pouvais …' },
  theme: 'Unreal conditions with "wenn" and the Konjunktiv II',
  themeFr: 'Les conditions irréelles avec « wenn » et le Konjunktiv II',
  goals: ['Form unreal conditions with "wenn"', 'Combine "wenn … hätte/wäre" with "würde"', 'Tell real from unreal conditions', 'Talk about hypothetical situations'],
  goalsFr: ['Former des conditions irréelles avec « wenn »', 'Combiner « wenn … hätte/wäre » avec « würde »', 'Distinguer conditions réelles et irréelles', 'Parler de situations hypothétiques'],
  steps: [
    { kind: 'intro', title: 'Wenn ich reich wäre … 💭', titleFr: 'Si j’étais riche … 💭',
      scene: 'Daydreaming about "what if" situations.', sceneFr: 'On rêve de situations « et si ».',
      goals: ['Build "wenn"-clauses in the Konjunktiv II', 'Use "würde" in the main clause', 'Distinguish real and unreal conditions', 'Express hypotheticals'],
      goalsFr: ['Construire des subordonnées « wenn » au Konjunktiv II', 'Utiliser « würde » dans la principale', 'Distinguer conditions réelles et irréelles', 'Exprimer des hypothèses'] },

    { kind: 'vocab', item: { id: 'b1l2-bedingung', german: 'die Bedingung', english: 'the condition', french: 'la condition', gender: 'die', syllables: ['be', 'DIN', 'gung'], pronunciation: 'be-DIN-goong', example: { de: 'Unter einer Bedingung.', en: 'On one condition.', fr: 'À une condition.' } } },
    { kind: 'vocab', item: { id: 'b1l2-gewinnen', german: 'gewinnen', english: 'to win', french: 'gagner', gender: null, syllables: ['ge', 'WIN', 'nen'], pronunciation: 'ge-VIN-nen', example: { de: 'Wenn ich gewinnen würde …', en: 'If I won …', fr: 'Si je gagnais …' } } },
    { kind: 'vocab', item: { id: 'b1l2-reich', german: 'reich', english: 'rich', french: 'riche', gender: null, syllables: ['REICH'], pronunciation: 'rye-kh', example: { de: 'Wenn ich reich wäre …', en: 'If I were rich …', fr: 'Si j’étais riche …' } } },
    { kind: 'vocab', item: { id: 'b1l2-welt', german: 'die Welt', english: 'the world', french: 'le monde', gender: 'die', syllables: ['WELT'], pronunciation: 'dee VELT', example: { de: 'Ich würde die Welt sehen.', en: 'I would see the world.', fr: 'Je verrais le monde.' } } },
    { kind: 'vocab', item: { id: 'b1l2-verbessern', german: 'verbessern', english: 'to improve', french: 'améliorer', gender: null, syllables: ['ver', 'BES', 'sern'], pronunciation: 'fair-BESS-ern', example: { de: 'Ich würde mein Deutsch verbessern.', en: 'I would improve my German.', fr: 'J’améliorerais mon allemand.' } } },
    { kind: 'vocab', item: { id: 'b1l2-moeglichkeit', german: 'die Möglichkeit', english: 'the possibility', french: 'la possibilité', gender: 'die', syllables: ['MÖG', 'lich', 'keit'], pronunciation: 'MOEG-likh-kite', example: { de: 'Ich hätte mehr Möglichkeiten.', en: 'I would have more opportunities.', fr: 'J’aurais plus de possibilités.' } } },
    { kind: 'vocab', item: { id: 'b1l2-problem', german: 'das Problem', english: 'the problem', french: 'le problème', gender: 'das', syllables: ['pro', 'BLEM'], pronunciation: 'dahs pro-BLAYM', example: { de: 'Das ist kein Problem.', en: 'That’s no problem.', fr: 'Ce n’est pas un problème.' } } },
    { kind: 'vocab', item: { id: 'b1l2-loesung', german: 'die Lösung', english: 'the solution', french: 'la solution', gender: 'die', syllables: ['LÖ', 'sung'], pronunciation: 'dee LOE-zoong', example: { de: 'Wir finden eine Lösung.', en: 'We’ll find a solution.', fr: 'Nous trouverons une solution.' } } },
    { kind: 'vocab', item: { id: 'b1l2-sonst', german: 'sonst', english: 'otherwise', french: 'sinon', gender: null, syllables: ['SONST'], pronunciation: 'zonst', example: { de: 'Beeil dich, sonst kommen wir zu spät.', en: 'Hurry, otherwise we’ll be late.', fr: 'Dépêche-toi, sinon on sera en retard.' } } },
    { kind: 'vocab', item: { id: 'b1l2-zeit-haben', german: 'Zeit haben', english: 'to have time', french: 'avoir le temps', gender: null, syllables: ['ZEIT', 'ha', 'ben'], pronunciation: 'TSITE HAH-ben', example: { de: 'Wenn ich Zeit hätte …', en: 'If I had time …', fr: 'Si j’avais le temps …' } } },

    { kind: 'grammar', note: {
      id: 'b1l2-irreal', title: 'Unreal conditions', titleFr: 'Les conditions irréelles',
      explanationMd: 'An unreal condition uses the **Konjunktiv II** in **both** parts. Typically the **wenn**-clause has **hätte/wäre/könnte**, and the main clause has **würde** + infinitive:\n\n- **Wenn** ich Zeit **hätte**, **würde** ich mehr **lernen**.\n- **Wenn** ich reich **wäre**, **würde** ich reisen.',
      explanationMdFr: 'Une condition irréelle utilise le **Konjunktiv II** dans les **deux** parties. En général, la subordonnée **wenn** a **hätte/wäre/könnte**, et la principale **würde** + infinitif :\n\n- **Wenn** ich Zeit **hätte**, **würde** ich mehr **lernen**.\n- **Wenn** ich reich **wäre**, **würde** ich reisen.',
      examples: [
        { de: 'Wenn ich könnte, würde ich dir helfen.', en: 'If I could, I would help you.', fr: 'Si je pouvais, je t’aiderais.' },
        { de: 'Wenn wir mehr Zeit hätten, wären wir entspannter.', en: 'If we had more time, we’d be more relaxed.', fr: 'Si nous avions plus de temps, nous serions plus détendus.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l2-wortstellung', title: 'Word order in conditions', titleFr: 'L’ordre des mots dans les conditions',
      explanationMd: 'The **wenn**-clause sends its verb to the **end**. You can start with either clause:\n\n- **Wenn** ich Zeit **hätte**, würde ich kommen.\n- Ich würde kommen, **wenn** ich Zeit **hätte**.\n\nWhen the sentence starts with the wenn-clause, the main clause begins with the verb (würde).',
      explanationMdFr: 'La subordonnée **wenn** envoie son verbe à la **fin**. Tu peux commencer par l’une ou l’autre :\n\n- **Wenn** ich Zeit **hätte**, würde ich kommen.\n- Ich würde kommen, **wenn** ich Zeit **hätte**.\n\nQuand la phrase commence par la subordonnée, la principale commence par le verbe (würde).',
      examples: [
        { de: 'Wenn das Wetter besser wäre, würden wir grillen.', en: 'If the weather were better, we would barbecue.', fr: 'Si le temps était meilleur, nous ferions un barbecue.' },
        { de: 'Ich würde dich besuchen, wenn ich nicht krank wäre.', en: 'I would visit you if I weren’t ill.', fr: 'Je te rendrais visite si je n’étais pas malade.' },
      ] } },

    { kind: 'grammar', note: {
      id: 'b1l2-real-irreal', title: 'Real vs. unreal', titleFr: 'Réel vs. irréel',
      explanationMd: 'Compare:\n\n- **Real** (present tense): **Wenn** ich Zeit **habe**, **lerne** ich. — When/if I have time, I study.\n- **Unreal** (Konjunktiv II): **Wenn** ich Zeit **hätte**, **würde** ich lernen. — If I had time, I would study (but I don’t).',
      explanationMdFr: 'Compare :\n\n- **Réel** (présent) : **Wenn** ich Zeit **habe**, **lerne** ich. — Quand/si j’ai le temps, j’étudie.\n- **Irréel** (Konjunktiv II) : **Wenn** ich Zeit **hätte**, **würde** ich lernen. — Si j’avais le temps, j’étudierais (mais je ne l’ai pas).',
      examples: [
        { de: 'Wenn es regnet, bleibe ich zu Hause. (real)', en: 'If it rains, I stay home.', fr: 'S’il pleut, je reste à la maison.' },
        { de: 'Wenn es regnen würde, würde ich zu Hause bleiben. (unreal)', en: 'If it were to rain, I would stay home.', fr: 'S’il pleuvait, je resterais à la maison.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l2-e1', prompt: 'Wenn ich Zeit ___, würde ich mehr lernen. (haben — Konjunktiv II)', answer: 'hätte', hint: 'haben → hätte', hintFr: 'haben → hätte' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l2-e2', prompt: 'Wenn ich reich ___, würde ich reisen. (sein — Konjunktiv II)', answer: 'wäre', hint: 'sein → wäre', hintFr: 'sein → wäre' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l2-e3', tokens: ['hätte', 'ich', 'Wenn', 'Zeit'], answer: ['Wenn', 'ich', 'Zeit', 'hätte'], hint: 'The wenn-clause verb goes to the end.', hintFr: 'Le verbe de la subordonnée wenn va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l2-e4', prompt: 'Which sentence is an UNREAL condition?', promptFr: 'Quelle phrase est une condition IRRÉELLE ?', options: ['Wenn ich Zeit habe, lerne ich.', 'Wenn ich Zeit hätte, würde ich lernen.', 'Ich lerne jeden Tag.'], answer: 1, explain: 'Konjunktiv II (hätte … würde) marks the unreal condition.', explainFr: 'Le Konjunktiv II (hätte … würde) marque la condition irréelle.', hint: 'Look for hätte/wäre + würde.', hintFr: 'Cherche hätte/wäre + würde.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l2-e5', pairs: [ { de: 'die Bedingung', en: 'condition', fr: 'condition' }, { de: 'die Lösung', en: 'solution', fr: 'solution' }, { de: 'die Möglichkeit', en: 'possibility', fr: 'possibilité' } ], hint: 'Match each noun to its meaning.', hintFr: 'Associe chaque nom à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l2-e6', prompt: 'Listen. What would Lena do if she won?', promptFr: 'Écoute. Que ferait Lena si elle gagnait ?', audio: { ttsText: 'Wenn ich im Lotto gewinnen würde, würde ich um die Welt reisen.' }, options: ['Travel the world', 'Buy a car', 'Stop working'], optionsFr: ['Faire le tour du monde', 'Acheter une voiture', 'Arrêter de travailler'], answer: 0, hint: 'Listen after the second "würde".', hintFr: 'Écoute après le deuxième « würde ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l2-e7', tokens: ['würde', 'reisen', 'ich', 'Dann'], answer: ['Dann', 'würde', 'ich', 'reisen'], hint: 'After a front element, the verb (würde) comes second.', hintFr: 'Après un élément en tête, le verbe (würde) vient en deuxième.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l2-e8', prompt: 'Wenn ich könnte, ___ ich dir helfen. (würde)', answer: 'würde', hint: 'main clause uses "würde"', hintFr: 'la principale utilise « würde »' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l2-e9', prompt: 'Complete: "Ich würde dich besuchen, wenn ich Zeit ___."', promptFr: 'Complète : « Ich würde dich besuchen, wenn ich Zeit ___. »', options: ['habe', 'hätte', 'hatte'], answer: 1, explain: 'Unreal condition → hätte.', explainFr: 'Condition irréelle → hätte.', hint: 'Match the Konjunktiv II of the main clause.', hintFr: 'Accorde avec le Konjunktiv II de la principale.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l2-e10', prompt: 'Listen. What is the condition?', promptFr: 'Écoute. Quelle est la condition ?', audio: { ttsText: 'Wenn das Wetter besser wäre, würden wir einen Ausflug machen.' }, options: ['If the weather were better', 'If we had money', 'If it were the weekend'], optionsFr: ['Si le temps était meilleur', 'Si on avait de l’argent', 'Si c’était le week-end'], answer: 0, hint: 'Listen to the "wenn"-clause.', hintFr: 'Écoute la subordonnée « wenn ».' } },

    { kind: 'pronunciation', focus: 'Contrast hätte/wäre (unreal) with habe/bin (real): the umlaut signals the Konjunktiv II', focusFr: 'Oppose hätte/wäre (irréel) à habe/bin (réel) : le tréma marque le Konjunktiv II', items: [
      { id: 'b1l2-waere-pron', german: 'wäre', english: 'were', french: 'était', gender: null, syllables: ['WÄ', 're'], pronunciation: 'VAY-re', example: { de: 'Wenn ich reich wäre.', en: 'If I were rich.', fr: 'Si j’étais riche.' } },
      { id: 'b1l2-haette-pron', german: 'hätte', english: 'had', french: 'avait', gender: null, syllables: ['HÄT', 'te'], pronunciation: 'HET-te', example: { de: 'Wenn ich Zeit hätte.', en: 'If I had time.', fr: 'Si j’avais le temps.' } },
    ] },

    { kind: 'wrapup', summary: 'You can now express unreal conditions: the **wenn**-clause takes the Konjunktiv II (hätte, wäre, könnte) and the main clause usually takes **würde** + infinitive. Wenn ich Zeit **hätte**, **würde** ich mehr reisen. 🎉',
      summaryFr: 'Tu sais maintenant exprimer des conditions irréelles : la subordonnée **wenn** prend le Konjunktiv II (hätte, wäre, könnte) et la principale prend en général **würde** + infinitif. Wenn ich Zeit **hätte**, **würde** ich mehr reisen. 🎉' },
  ],
};

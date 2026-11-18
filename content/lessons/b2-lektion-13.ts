import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion13: Lesson = {
  id: 'b2-l13', level: 'B2', module: 5, number: 13,
  title: { de: 'Bedingungen', en: 'Conditions', fr: 'Les conditions' },
  theme: 'Expressing conditions: falls, sofern, vorausgesetzt dass, andernfalls, ansonsten, conditional clauses without "wenn", and unreal conditions', themeFr: 'Exprimer des conditions : falls, sofern, vorausgesetzt dass, andernfalls, ansonsten, conditionnelles sans « wenn » et conditions irréelles',
  goals: ['Use "falls", "sofern", "vorausgesetzt dass" for real conditions', 'Use "andernfalls / ansonsten / sonst" to state the alternative', 'Form conditionals without "wenn" (Wäre er da, …)', 'Use the past Konjunktiv II for missed chances'], goalsFr: ['Utiliser « falls », « sofern », « vorausgesetzt dass » pour des conditions réelles', 'Utiliser « andernfalls / ansonsten / sonst » pour l’alternative', 'Former des conditionnelles sans « wenn » (Wäre er da, …)', 'Utiliser le Konjunktiv II passé pour des occasions manquées'],
  canDo: g('Ich kann reale und irreale Bedingungen differenziert ausdrücken, auch ohne „wenn“.', 'I can express real and unreal conditions in a nuanced way, also without “wenn”.', 'Je sais exprimer des conditions réelles et irréelles de façon nuancée, même sans « wenn ».'),
  steps: [
    { kind: 'intro', title: 'Bedingungen: falls, sofern, hätte ich … 🔑', titleFr: 'Conditions : falls, sofern, hätte ich … 🔑',
      scene: 'A contract with conditions, a warning letter, and a regret about a missed chance.', sceneFr: 'Un contrat avec conditions, une lettre d’avertissement et le regret d’une occasion manquée.',
      goals: ['Use falls, sofern, vorausgesetzt for real conditions', 'State the alternative with sonst / andernfalls / ansonsten', 'Form conditionals without wenn and past unreal conditions'],
      goalsFr: ['Utiliser falls, sofern, vorausgesetzt pour les conditions réelles', 'Énoncer l’alternative avec sonst / andernfalls / ansonsten', 'Former des conditionnelles sans wenn et des irréels du passé'] },

    // ───────────── 1 · Real conditions ─────────────
    { kind: 'chapter', title: 'Reale Bedingungen', titleFr: 'Conditions réelles', blurb: 'falls · sofern · vorausgesetzt · sonst.', blurbFr: 'falls · sofern · vorausgesetzt · sonst.' },

    { kind: 'situation', title: 'Der Mietvertrag', titleFr: 'Le contrat de location',
      setting: 'A landlord explains the conditions.', settingFr: 'Un propriétaire explique les conditions.',
      lines: [
        line('Vermieter', 'Falls es regnet, bleiben wir drinnen. Sofern Sie Zeit haben, kommen Sie vorbei. Wir kommen, vorausgesetzt, dass es nicht regnet.', 'In case it rains we stay inside. Provided you have time, come by. We will come, provided it does not rain.', 'S’il pleut, nous restons à l’intérieur. Si vous avez le temps, passez. Nous viendrons, à condition qu’il ne pleuve pas.'),
        line('Vermieter', 'Bitte zahlen Sie, andernfalls kündigen wir. Ansonsten ist alles in Ordnung. Deutschkenntnisse sind Voraussetzung. Unter dieser Bedingung stimme ich zu. Ausnahmen bestätigen die Regel.', 'Please pay, otherwise we cancel. Apart from that everything is fine. German skills are a prerequisite. On this condition I agree. Exceptions prove the rule.', 'Payez s’il vous plaît, sinon nous résilions. Pour le reste, tout est en ordre. Des connaissances d’allemand sont une condition. À cette condition, j’accepte. Les exceptions confirment la règle.'),
        line('Vermieter', 'Falls ich es vergesse, erinnere mich bitte. Beeil dich, sonst verpasst du den Zug.', 'In case I forget, please remind me. Hurry up, or else you will miss the train.', 'Au cas où j’oublierais, rappelle-le-moi. Dépêche-toi, sinon tu rates le train.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l13-e11', prompt: 'What happens if the tenant does not pay?', promptFr: 'Que se passe-t-il si le locataire ne paie pas ?', options: ['The landlord cancels', 'Nothing', 'The rent is halved'], optionsFr: ['Le propriétaire résilie', 'Rien', 'Le loyer est réduit de moitié'], answer: 0, explain: 'The text says: “Bitte zahlen Sie, andernfalls kündigen wir.”', explainFr: 'Le texte dit : « Bitte zahlen Sie, andernfalls kündigen wir. »', hint: 'Look for “andernfalls”.', hintFr: 'Cherche « andernfalls ».' } },

    { kind: 'wordgroup', title: 'Bedingungen ausdrücken', titleFr: 'Exprimer des conditions',
      items: [{ id: 'b2l13-falls', german: 'falls', english: 'in case / if', french: 'au cas où', gender: null, syllables: ['FALLS'], pronunciation: 'fals', example: { de: 'Falls es regnet, bleiben wir drinnen.', en: 'In case it rains we stay inside.', fr: 'Au cas où il pleut, nous restons à l’intérieur.' } }, { id: 'b2l13-sofern', german: 'sofern', english: 'provided that', french: 'pour autant que', gender: null, syllables: ['so', 'FERN'], pronunciation: 'zo-FERN', example: { de: 'Sofern Sie Zeit haben, kommen Sie vorbei.', en: 'Provided you have time, drop by.', fr: 'Si vous avez le temps, passez nous voir.' } }, { id: 'b2l13-vorausgesetzt', german: 'vorausgesetzt, dass', english: 'provided that', french: 'à condition que', gender: null, syllables: ['vo', 'RAUS', 'ge', 'setzt'], pronunciation: 'fo-ROWS-ge-zetst', example: { de: 'Wir kommen, vorausgesetzt, dass es nicht regnet.', en: 'We’ll come provided it doesn’t rain.', fr: 'Nous viendrons à condition qu’il ne pleuve pas.' } }, { id: 'b2l13-andernfalls', german: 'andernfalls', english: 'otherwise', french: 'sinon', gender: null, syllables: ['AN', 'dern', 'falls'], pronunciation: 'AHN-dern-fals', example: { de: 'Bitte zahlen Sie, andernfalls kündigen wir.', en: 'Please pay, otherwise we will terminate.', fr: 'Veuillez payer, sinon nous résilierons.' } }, { id: 'b2l13-ansonsten', german: 'ansonsten', english: 'otherwise / apart from that', french: 'à part cela', gender: null, syllables: ['AN', 'sons', 'ten'], pronunciation: 'AHN-zon-sten', example: { de: 'Ansonsten ist alles in Ordnung.', en: 'Apart from that, everything is fine.', fr: 'À part cela, tout va bien.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l13-e6', pairs: [{ de: 'falls', en: 'in case', fr: 'au cas où' }, { de: 'sofern', en: 'provided that', fr: 'pour autant que' }, { de: 'die Voraussetzung', en: 'prerequisite', fr: 'condition préalable' }, { de: 'die Ausnahme', en: 'exception', fr: 'exception' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l13-real', title: 'Real conditions: falls, sofern, vorausgesetzt', titleFr: 'Conditions réelles : falls, sofern, vorausgesetzt',
      lead: 'falls = in case; sofern / soweit = provided; vorausgesetzt (dass) = on condition that; bei + dative = noun form. Alternative: sonst / andernfalls / ansonsten.',
      leadFr: 'falls = au cas où ; sofern / soweit = pourvu que ; vorausgesetzt (dass) = à condition que ; bei + datif = forme nominale. Alternative : sonst / andernfalls / ansonsten.',
      explanationMd: 'Besides **wenn**, B2 uses: **falls** — “in case”: **Falls du kommst, bring Kuchen mit.** **sofern / soweit** — “provided that / as far as”: **Sofern es möglich ist, …** **vorausgesetzt, (dass)** — “on condition that”: **Vorausgesetzt, du bist pünktlich.** **im Fall(e)** (+ Genitiv) — noun form: **im Falle eines Regens**. **bei** + Dativ — **bei Regen** (= wenn es regnet). All subordinating conjunctions send the **verb to the end**. The **alternative** is introduced by **sonst / andernfalls / ansonsten** (position 1, then the verb): **Beeil dich, sonst verpasst du den Zug.**',
      explanationMdFr: 'En plus de **wenn**, le B2 utilise : **falls** — « au cas où » : **Falls du kommst, bring Kuchen mit.** **sofern / soweit** — « pourvu que / dans la mesure où » : **Sofern es möglich ist, …** **vorausgesetzt, (dass)** — « à condition que » : **Vorausgesetzt, du bist pünktlich.** **im Fall(e)** (+ génitif) — forme nominale : **im Falle eines Regens**. **bei** + datif — **bei Regen** (= wenn es regnet). Tous les subordonnants envoient le **verbe à la fin**. L’**alternative** est introduite par **sonst / andernfalls / ansonsten** (position 1, puis le verbe) : **Beeil dich, sonst verpasst du den Zug.**',
      tables: [{ title: 'Ways to say “if”', titleFr: 'Façons de dire « si »', headers: ['Form', 'Nuance', 'Example'], headersFr: ['Forme', 'Nuance', 'Exemple'],
        rows: [['wenn', 'neutral', 'Wenn es regnet, bleiben wir drinnen.'], ['falls', 'in case', 'Falls du kommst, bring Kuchen mit.'], ['sofern / soweit', 'provided that', 'Sofern es möglich ist, kommen wir.'], ['vorausgesetzt, dass', 'on condition', 'Vorausgesetzt, du bist pünktlich.'], ['bei + Dativ', 'noun form', 'Bei Regen bleiben wir drinnen.'], ['sonst / andernfalls', 'alternative', 'Beeil dich, sonst verpasst du den Zug.']],
        rowsFr: [['wenn', 'neutre', 'Wenn es regnet, bleiben wir drinnen.'], ['falls', 'au cas où', 'Falls du kommst, bring Kuchen mit.'], ['sofern / soweit', 'pourvu que', 'Sofern es möglich ist, kommen wir.'], ['vorausgesetzt, dass', 'à condition que', 'Vorausgesetzt, du bist pünktlich.'], ['bei + datif', 'forme nominale', 'Bei Regen bleiben wir drinnen.'], ['sonst / andernfalls', 'alternative', 'Beeil dich, sonst verpasst du den Zug.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Falls', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'regnet,', role: 'verb' }, { text: 'bleiben', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'drinnen.', role: 'place' }], en: 'In case it rains we stay inside.', fr: 'S’il pleut, nous restons à l’intérieur.' },
        { parts: [{ text: 'Bitte zahlen Sie,', role: 'other' }, { text: 'andernfalls', role: 'connector' }, { text: 'kündigen', role: 'verb' }, { text: 'wir.', role: 'subject' }], en: 'Please pay, otherwise we cancel.', fr: 'Payez s’il vous plaît, sinon nous résilions.' },
      ],
      contrast: {
        a: { label: 'Condition', labelFr: 'Condition', note: 'clause with falls / sofern', noteFr: 'proposition avec falls / sofern', examples: [g('Falls ich es vergesse, erinnere mich bitte.', 'In case I forget, please remind me.', 'Au cas où j’oublierais, rappelle-le-moi.'), g('Sofern Sie Zeit haben, kommen Sie vorbei.', 'Provided you have time, come by.', 'Si vous avez le temps, passez.')] },
        b: { label: 'Alternative', labelFr: 'Alternative', note: 'sonst / andernfalls + verb 2nd', noteFr: 'sonst / andernfalls + verbe en 2e', examples: [g('Beeil dich, sonst verpasst du den Zug.', 'Hurry up, or else you will miss the train.', 'Dépêche-toi, sinon tu rates le train.'), g('Bitte bezahlen Sie, andernfalls kündigen wir den Vertrag.', 'Please pay, otherwise we cancel the contract.', 'Payez s’il vous plaît, sinon nous résilions le contrat.')] },
      },
      examples: [
        g('Falls ich es vergesse, erinnere mich bitte.', 'In case I forget, please remind me.', 'Au cas où j’oublierais, rappelle-le-moi.'),
        g('Bitte bezahlen Sie, andernfalls kündigen wir den Vertrag.', 'Please pay, otherwise we cancel the contract.', 'Payez s’il vous plaît, sinon nous résilions le contrat.'),
        g('Sofern es möglich ist, kommen wir vorbei.', 'Provided it is possible we will drop by.', 'Si c’est possible, nous passerons.'),
        g('Wir kommen, vorausgesetzt, dass es nicht regnet.', 'We will come, provided it does not rain.', 'Nous viendrons, à condition qu’il ne pleuve pas.'),
        g('Bei Regen bleiben wir drinnen.', 'In rain we stay inside.', 'En cas de pluie, nous restons à l’intérieur.'),
        g('Ansonsten ist alles in Ordnung.', 'Apart from that everything is fine.', 'Pour le reste, tout est en ordre.'),
      ],
      mistakes: [
        { wrong: 'Falls es regnet, wir bleiben drinnen.', right: 'Falls es regnet, bleiben wir drinnen.', why: 'After the clause the main verb comes first.', whyFr: 'Après la subordonnée, le verbe principal vient en premier.' },
        { wrong: 'Sonst du verpasst den Zug.', right: 'Sonst verpasst du den Zug.', why: 'sonst is an adverb: the verb is in position 2.', whyFr: 'sonst est un adverbe : le verbe est en position 2.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l13-e1', prompt: '___ es regnet, bleiben wir drinnen. (in case)', answer: 'Falls', hint: 'falls + verb at the end', hintFr: 'falls + verbe à la fin' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l13-e2', prompt: 'Which word introduces the ALTERNATIVE?', promptFr: 'Quel mot introduit l’ALTERNATIVE ?', options: ['falls', 'sofern', 'andernfalls'], answer: 2, explain: '"andernfalls" = otherwise.', explainFr: '« andernfalls » = sinon.', hint: 'otherwise', hintFr: 'sinon' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l13-e3', prompt: 'Beeil dich, ___ verpasst du den Zug. (or else)', answer: 'sonst', hint: 'sonst + verb', hintFr: 'sonst + verbe' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l13-e9', prompt: '"Bei Regen" is a short form of …', promptFr: '« Bei Regen » est une forme courte de …', options: ['wenn es regnet', 'obwohl es regnet', 'weil es geregnet hat'], answer: 0, explain: 'bei + noun = wenn-clause.', explainFr: 'bei + nom = proposition en wenn.', hint: 'condition', hintFr: 'condition' } },

    // ───────────── 2 · Unreal conditions ─────────────
    { kind: 'chapter', title: 'Irreale Bedingungen', titleFr: 'Conditions irréelles', blurb: 'Wäre er hier … · Hätte ich nur …', blurbFr: 'Wäre er hier … · Hätte ich nur …' },

    { kind: 'situation', title: 'Verpasste Chancen', titleFr: 'Occasions manquées',
      setting: 'A colleague talks about a missed trip.', settingFr: 'Une collègue parle d’un voyage manqué.',
      lines: [
        line('Mia', 'Hätte ich die Gelegenheit gehabt, wäre ich gefahren. Ich habe den Zug verpasst. Hätte ich nur mehr Zeit!', 'Had I had the opportunity I would have gone. I missed the train. If only I had more time!', 'Si j’en avais eu l’occasion, j’y serais allée. J’ai raté le train. Si seulement j’avais plus de temps !'),
        line('Tom', 'Wäre er pünktlich gewesen, hätte er den Zug erreicht. Wäre er hier, würde er helfen. Wäre er doch hier!', 'Had he been on time he would have caught the train. If he were here he would help. If only he were here!', 'S’il avait été à l’heure, il aurait eu le train. S’il était ici, il aiderait. Si seulement il était ici !'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Chancen und Bedingungen', titleFr: 'Chances et conditions',
      items: [{ id: 'b2l13-gelegenheit', german: 'die Gelegenheit', english: 'the opportunity', french: 'l’occasion', gender: 'die', syllables: ['ge', 'LE', 'gen', 'heit'], pronunciation: 'dee ge-LAY-gen-hite', example: { de: 'Hätte ich die Gelegenheit gehabt, wäre ich gefahren.', en: 'Had I had the chance I would have gone.', fr: 'Si j’en avais eu l’occasion, j’y serais allé.' } }, { id: 'b2l13-verpassen', german: 'verpassen', english: 'to miss', french: 'rater', gender: null, syllables: ['ver', 'PAS', 'sen'], pronunciation: 'fer-PAS-sen', example: { de: 'Ich habe den Zug verpasst.', en: 'I missed the train.', fr: 'J’ai raté le train.' } }, { id: 'b2l13-ausnahme', german: 'die Ausnahme', english: 'the exception', french: 'l’exception', gender: 'die', syllables: ['AUS', 'nah', 'me'], pronunciation: 'dee OWS-nah-me', example: { de: 'Ausnahmen bestätigen die Regel.', en: 'Exceptions prove the rule.', fr: 'Les exceptions confirment la règle.' } }, { id: 'b2l13-bedingung', german: 'die Bedingung', english: 'the condition', french: 'la condition', gender: 'die', syllables: ['be', 'DIN', 'gung'], pronunciation: 'dee be-DING-oong', example: { de: 'Unter dieser Bedingung stimme ich zu.', en: 'On this condition I agree.', fr: 'À cette condition, j’accepte.' } }, { id: 'b2l13-voraussetzung', german: 'die Voraussetzung', english: 'the prerequisite', french: 'la condition préalable', gender: 'die', syllables: ['vo', 'RAUS', 'set', 'zung'], pronunciation: 'dee fo-ROWS-zet-soong', example: { de: 'Deutschkenntnisse sind Voraussetzung.', en: 'German skills are a prerequisite.', fr: 'Les connaissances en allemand sont requises.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l13-irreal', title: 'Unreal conditions without “wenn”', titleFr: 'Conditions irréelles sans « wenn »',
      lead: 'Drop wenn and put the verb first: Wäre er hier, würde er helfen. Past unreal: hätte / wäre + Partizip II in both clauses.',
      leadFr: 'Supprime wenn et mets le verbe en premier : Wäre er hier, würde er helfen. Irréel du passé : hätte / wäre + participe II dans les deux propositions.',
      explanationMd: 'You can **drop wenn** and put the **verb first** (formal, written): **Wenn er hier wäre, …** → **Wäre er hier, würde er helfen.** **Wenn ich Zeit gehabt hätte, …** → **Hätte ich Zeit gehabt, wäre ich gekommen.** **Past unreal** = **hätte / wäre + Partizip II** (in **both** clauses!): **Hätte ich die Gelegenheit gehabt, wäre ich gefahren.** Add **doch / nur** for a **wish**: **Wäre er doch hier!** **Hätte ich nur mehr Zeit!** The **second clause** is introduced without a connector, with **würde / hätte / wäre**.',
      explanationMdFr: 'Tu peux **supprimer wenn** et mettre le **verbe en premier** (formel, écrit) : **Wenn er hier wäre, …** → **Wäre er hier, würde er helfen.** **Wenn ich Zeit gehabt hätte, …** → **Hätte ich Zeit gehabt, wäre ich gekommen.** **Irréel du passé** = **hätte / wäre + participe II** (dans les **deux** propositions !) : **Hätte ich die Gelegenheit gehabt, wäre ich gefahren.** Ajoute **doch / nur** pour un **souhait** : **Wäre er doch hier !** **Hätte ich nur mehr Zeit !** La **seconde proposition** commence sans connecteur, avec **würde / hätte / wäre**.',
      tables: [{ title: 'With and without wenn', titleFr: 'Avec et sans wenn', headers: ['With wenn', 'Without wenn'], headersFr: ['Avec wenn', 'Sans wenn'],
        rows: [['Wenn er hier wäre, würde er helfen.', 'Wäre er hier, würde er helfen.'], ['Wenn ich Zeit hätte, käme ich.', 'Hätte ich Zeit, käme ich.'], ['Wenn er pünktlich gewesen wäre, hätte er den Zug erreicht.', 'Wäre er pünktlich gewesen, hätte er den Zug erreicht.'], ['Wenn ich die Gelegenheit gehabt hätte, wäre ich gefahren.', 'Hätte ich die Gelegenheit gehabt, wäre ich gefahren.']],
        rowsFr: [['Wenn er hier wäre, würde er helfen.', 'Wäre er hier, würde er helfen.'], ['Wenn ich Zeit hätte, käme ich.', 'Hätte ich Zeit, käme ich.'], ['Wenn er pünktlich gewesen wäre, hätte er den Zug erreicht.', 'Wäre er pünktlich gewesen, hätte er den Zug erreicht.'], ['Wenn ich die Gelegenheit gehabt hätte, wäre ich gefahren.', 'Hätte ich die Gelegenheit gehabt, wäre ich gefahren.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wäre', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'hier,', role: 'place' }, { text: 'würde', role: 'verb' }, { text: 'er', role: 'subject' }, { text: 'helfen.', role: 'verb' }], en: 'Were he here, he would help.', fr: 'S’il était ici, il aiderait.' },
        { parts: [{ text: 'Hätte', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'die Gelegenheit', role: 'accusative' }, { text: 'gehabt,', role: 'verb' }, { text: 'wäre', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'gefahren.', role: 'verb' }], en: 'Had I had the chance I would have gone.', fr: 'Si j’en avais eu l’occasion, j’y serais allée.' },
      ],
      contrast: {
        a: { label: 'Present unreal', labelFr: 'Irréel du présent', note: 'wäre / hätte / würde', noteFr: 'wäre / hätte / würde', examples: [g('Wäre er hier, würde er helfen.', 'Were he here, he would help.', 'S’il était ici, il aiderait.'), g('Hätte ich Zeit, käme ich.', 'Had I time, I would come.', 'Si j’avais le temps, je viendrais.')] },
        b: { label: 'Past unreal', labelFr: 'Irréel du passé', note: 'hätte / wäre + Partizip II', noteFr: 'hätte / wäre + participe II', examples: [g('Wäre er pünktlich gewesen, hätte er den Zug erreicht.', 'Had he been on time he would have caught the train.', 'S’il avait été à l’heure, il aurait eu le train.'), g('Hätte ich die Gelegenheit gehabt, wäre ich gefahren.', 'Had I had the chance I would have gone.', 'Si j’en avais eu l’occasion, j’y serais allée.')] },
      },
      examples: [
        g('Wäre er pünktlich gewesen, hätte er den Zug erreicht.', 'Had he been on time he would have caught the train.', 'S’il avait été à l’heure, il aurait eu le train.'),
        g('Hätte ich nur mehr Zeit!', 'If only I had more time!', 'Si seulement j’avais plus de temps !'),
        g('Wäre er doch hier!', 'If only he were here!', 'Si seulement il était ici !'),
        g('Hätte ich die Gelegenheit gehabt, wäre ich gefahren.', 'Had I had the chance I would have gone.', 'Si j’en avais eu l’occasion, j’y serais allée.'),
        g('Hätte ich Zeit, käme ich gern.', 'Had I time I would gladly come.', 'Si j’avais le temps, je viendrais volontiers.'),
        g('Wäre er hier, würde er helfen.', 'Were he here he would help.', 'S’il était ici, il aiderait.'),
      ],
      mistakes: [
        { wrong: 'Wäre er hier, er würde helfen.', right: 'Wäre er hier, würde er helfen.', why: 'In the second clause the verb comes first after the clause.', whyFr: 'Dans la seconde proposition, le verbe vient en premier.' },
        { wrong: 'Hätte ich Zeit gehabt, würde ich gekommen.', right: 'Hätte ich Zeit gehabt, wäre ich gekommen.', why: 'Past unreal: wäre / hätte + Partizip II, not würde + Partizip.', whyFr: 'Irréel du passé : wäre / hätte + participe II, pas würde + participe.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l13-e4', tokens: ['er', 'Wäre', 'hier', 'würde', 'sie', 'helfen'], answer: ['Wäre', 'er', 'hier', 'würde', 'sie', 'helfen'], hint: 'verb first replaces "wenn".', hintFr: 'le verbe en tête remplace « wenn ».' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l13-e5', prompt: 'Rewrite without "wenn": "Wenn ich Zeit hätte, …"', promptFr: 'Réécris sans « wenn » : « Wenn ich Zeit hätte, … »', options: ['Hätte ich Zeit, …', 'Ich hätte Zeit wenn …', 'Zeit hätte ich wenn …'], answer: 0, explain: 'Put the verb first.', explainFr: 'Mets le verbe en tête.', hint: 'verb first', hintFr: 'verbe en tête' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l13-e8', prompt: '___ ich nur mehr Zeit gehabt! (if only I had had)', answer: 'Hätte', hint: 'Hätte + Partizip II', hintFr: 'Hätte + Partizip II' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l13-e7', prompt: 'Listen. What is the warning?', promptFr: 'Écoute. Quel est l’avertissement ?', audio: { ttsText: 'Bitte bezahlen Sie die Rechnung, andernfalls kündigen wir den Vertrag.' }, options: ['Pay or the contract is cancelled', 'The bill is free', 'The contract is renewed'], optionsFr: ['Payer ou le contrat est résilié', 'La facture est gratuite', 'Le contrat est renouvelé'], answer: 0, hint: 'andernfalls = otherwise.', hintFr: 'andernfalls = sinon.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l13-e10', prompt: 'Listen. What does she regret?', promptFr: 'Écoute. Que regrette-t-elle ?', audio: { ttsText: 'Hätte ich die Gelegenheit gehabt, wäre ich gefahren.' }, options: ['Not travelling', 'Travelling too much', 'Being late'], optionsFr: ['Ne pas avoir voyagé', 'Avoir trop voyagé', 'Être en retard'], answer: 0, hint: 'hätte … wäre = unreal past.', hintFr: 'hätte … wäre = irréel du passé.' } },

    { kind: 'pronunciation', focus: 'In verb-first conditionals, raise your voice on the first clause and drop on the second: "WÄre er hier, würde er HELfen."', focusFr: 'Dans les conditionnelles à verbe en tête, la voix monte sur la 1re proposition et descend sur la 2e : « WÄre er hier, würde er HELfen. »', items: [{ id: 'b2l13-andernfalls-pron', german: 'andernfalls', english: 'otherwise', french: 'sinon', gender: null, syllables: ['AN', 'dern', 'falls'], pronunciation: 'AHN-dern-fals', example: { de: 'Andernfalls kündigen wir.', en: 'Otherwise we cancel.', fr: 'Sinon nous résilions.' } }, { id: 'b2l13-gelegenheit-pron', german: 'Gelegenheit', english: 'opportunity', french: 'occasion', gender: null, syllables: ['ge', 'LE', 'gen', 'heit'], pronunciation: 'ge-LAY-gen-hite', example: { de: 'Das ist eine Gelegenheit.', en: 'That is an opportunity.', fr: 'C’est une occasion.' } }] },

    { kind: 'wrapup',
      summary: 'You can now express **real conditions** (**falls, sofern, vorausgesetzt**), name the **alternative** (**sonst, andernfalls**) and form **unreal conditions without wenn** (**Wäre er hier, … / Hätte ich nur …**). 🎉',
      summaryFr: 'Tu sais maintenant exprimer des **conditions réelles** (**falls, sofern, vorausgesetzt**), nommer l’**alternative** (**sonst, andernfalls**) et former des **irréels sans wenn** (**Wäre er hier, … / Hätte ich nur …**). 🎉',
      card: { title: 'Conditions on one page', titleFr: 'Les conditions en une page', sections: [
        { heading: 'Real', headingFr: 'Réel', rows: [g('falls · sofern · vorausgesetzt dass', 'verb at the end', 'verbe à la fin'), g('bei + Dativ', 'bei Regen', 'bei Regen')] },
        { heading: 'Alternative', headingFr: 'Alternative', rows: [g('sonst · andernfalls · ansonsten', 'verb in position 2', 'verbe en position 2')] },
        { heading: 'Unreal', headingFr: 'Irréel', rows: [g('Wäre er hier, würde er helfen.', 'verb first', 'verbe en premier'), g('hätte / wäre + Partizip II', 'past unreal', 'irréel du passé')] },
      ] } },
  ],
};

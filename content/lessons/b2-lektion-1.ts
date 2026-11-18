import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion1: Lesson = {
  id: 'b2-l1', level: 'B2', module: 1, number: 1,
  title: { de: 'Meinungen äußern', en: 'Giving opinions', fr: 'Exprimer son opinion' },
  theme: 'Giving, softening and defending an opinion; agreeing and disagreeing in a discussion', themeFr: 'Donner, nuancer et défendre une opinion ; approuver et contredire dans une discussion',
  goals: ['Introduce an opinion with a range of phrases', 'Agree, partly agree and disagree politely', 'Back up a point with reasons and examples', 'Use discourse markers to structure what you say'], goalsFr: ['Introduire une opinion avec des formules variées', 'Approuver, approuver en partie et contredire poliment', 'Appuyer un point avec des raisons et des exemples', 'Utiliser des connecteurs pour structurer son propos'],
  canDo: g('Ich kann meine Meinung abwechslungsreich einleiten, abschwächen und begründen und in einer Diskussion höflich zustimmen oder widersprechen.', 'I can introduce, soften and justify my opinion in a varied way and politely agree or disagree in a discussion.', 'Je sais introduire, adoucir et justifier mon opinion de façon variée et approuver ou contredire poliment dans une discussion.'),
  steps: [
    { kind: 'intro', title: 'Meinung sagen und vertreten 🗣️', titleFr: 'Donner et défendre son opinion 🗣️',
      scene: 'A radio panel discusses working from home. Each speaker states, softens and defends a point of view.', sceneFr: 'Un débat radio porte sur le télétravail. Chaque intervenant énonce, nuance et défend un point de vue.',
      goals: ['Introduce an opinion with a range of phrases', 'Agree, partly agree and disagree politely', 'Back up a point with reasons and examples and structure what you say'],
      goalsFr: ['Introduire une opinion avec diverses formules', 'Approuver, approuver en partie et contredire poliment', 'Appuyer un point avec des raisons et des exemples et structurer son propos'] },

    // ───────────── 1 · Introducing an opinion ─────────────
    { kind: 'chapter', title: 'Eine Meinung einleiten', titleFr: 'Introduire une opinion', blurb: 'Beyond “ich denke”.', blurbFr: 'Au-delà de « ich denke ».' },

    { kind: 'situation', title: 'Die Radiodiskussion', titleFr: 'Le débat radio',
      setting: 'Three guests give their first statements.', settingFr: 'Trois invités font leur première déclaration.',
      lines: [
        line('Moderatorin', 'Meine Damen und Herren, heute fragen wir: Ist Homeoffice die Zukunft? Frau Berger, bitte.', 'Ladies and gentlemen, today we ask: is working from home the future? Ms Berger, please.', 'Mesdames et Messieurs, aujourd’hui nous demandons : le télétravail est-il l’avenir ? Madame Berger, je vous en prie.'),
        line('Frau Berger', 'Meiner Meinung nach ist Homeoffice sehr effizient. Aus meiner Sicht verlieren die Büros an Bedeutung.', 'In my opinion working from home is very efficient. From my point of view offices are losing importance.', 'À mon avis, le télétravail est très efficace. De mon point de vue, les bureaux perdent de leur importance.'),
        line('Herr Weber', 'Ich bin davon überzeugt, dass Präsenz wichtig bleibt. Ich bin der Ansicht, dass wir mehr tun müssen, damit Teams zusammenhalten.', 'I am convinced that being present stays important. I am of the opinion that we have to do more so that teams stay together.', 'Je suis convaincu que la présence reste importante. Je suis d’avis que nous devons faire plus pour que les équipes restent soudées.'),
        line('Frau Kaya', 'Ich würde sagen, es kommt darauf an. Ich denke eher, dass beides möglich ist. Ich habe den Eindruck, dass viele unsicher sind.', 'I would say it depends. I rather think that both are possible. I have the impression that many are unsure.', 'Je dirais que cela dépend. Je pense plutôt que les deux sont possibles. J’ai l’impression que beaucoup sont incertains.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l1-e12', prompt: 'Who is convinced that presence stays important?', promptFr: 'Qui est convaincu que la présence reste importante ?', options: ['Herr Weber', 'Frau Berger', 'Frau Kaya'], optionsFr: ['Monsieur Weber', 'Madame Berger', 'Madame Kaya'], answer: 0, explain: 'Herr Weber says: “Ich bin davon überzeugt, dass Präsenz wichtig bleibt.”', explainFr: 'Monsieur Weber dit : « Ich bin davon überzeugt, dass Präsenz wichtig bleibt. »', hint: 'Look for “überzeugt”.', hintFr: 'Cherche « überzeugt ».' } },

    { kind: 'wordgroup', title: 'Meinung und Standpunkt', titleFr: 'Opinion et point de vue',
      items: [{ id: 'b2l1-meinung', german: 'die Meinung', english: 'the opinion', french: 'l’opinion', gender: 'die', syllables: ['MEI', 'nung'], pronunciation: 'dee MY-noong', example: { de: 'Meiner Meinung nach ist das falsch.', en: 'In my opinion that is wrong.', fr: 'À mon avis, c’est faux.' } }, { id: 'b2l1-standpunkt', german: 'der Standpunkt', english: 'the point of view', french: 'le point de vue', gender: 'der', syllables: ['STAND', 'punkt'], pronunciation: 'dair SHTAHNT-poonkt', example: { de: 'Ich verstehe deinen Standpunkt.', en: 'I understand your point of view.', fr: 'Je comprends ton point de vue.' } }, { id: 'b2l1-ueberzeugt', german: 'überzeugt sein', english: 'to be convinced', french: 'être convaincu', gender: null, syllables: ['ü', 'ber', 'ZEUGT', 'sein'], pronunciation: 'ue-ber-TSOYKT zine', example: { de: 'Ich bin davon überzeugt, dass es funktioniert.', en: 'I am convinced that it works.', fr: 'Je suis convaincu que ça marche.' } }, { id: 'b2l1-ansicht', german: 'der Ansicht sein', english: 'to be of the opinion', french: 'être d’avis', gender: null, syllables: ['der', 'AN', 'sicht', 'sein'], pronunciation: 'dair AHN-zikht zine', example: { de: 'Ich bin der Ansicht, dass wir mehr tun müssen.', en: 'I am of the opinion that we must do more.', fr: 'Je suis d’avis que nous devons faire plus.' } }, { id: 'b2l1-argument', german: 'das Argument', english: 'the argument', french: 'l’argument', gender: 'das', syllables: ['ar', 'gu', 'MENT'], pronunciation: 'das ar-goo-MENT', example: { de: 'Das ist ein starkes Argument.', en: 'That is a strong argument.', fr: 'C’est un argument fort.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l1-einleiten', title: 'Introducing an opinion — beyond “ich denke”', titleFr: 'Introduire une opinion — au-delà de « ich denke »',
      lead: 'Some openers take a dass-clause (verb last), others a main clause (verb second). Soften with ich würde sagen …',
      leadFr: 'Certaines amorces prennent une proposition en dass (verbe à la fin), d’autres une principale (verbe en deuxième). Adoucis avec ich würde sagen …',
      explanationMd: 'At B2 you **vary how you start**. Some openers take a **dass-clause** (**verb last**): **Ich bin der Ansicht / davon überzeugt, dass …**, **Ich finde / glaube / habe den Eindruck, dass …**. Others take a **main clause** (**verb in position 2**): **Meiner Meinung nach ist …**, **Meines Erachtens …**, **Aus meiner Sicht …**. To **soften**: **Ich würde sagen, …**, **Ich denke eher, …**, **Es kommt darauf an, …**. Avoid repeating **ich denke** — it sounds **basic** at this level.',
      explanationMdFr: 'Au B2, tu **varies ta façon de commencer**. Certaines amorces prennent une **proposition en dass** (**verbe à la fin**) : **Ich bin der Ansicht / davon überzeugt, dass …**, **Ich finde / glaube / habe den Eindruck, dass …**. D’autres prennent une **principale** (**verbe en position 2**) : **Meiner Meinung nach ist …**, **Meines Erachtens …**, **Aus meiner Sicht …**. Pour **adoucir** : **Ich würde sagen, …**, **Ich denke eher, …**, **Es kommt darauf an, …**. Évite de répéter **ich denke** — cela sonne **basique** à ce niveau.',
      tables: [{ title: 'Openers', titleFr: 'Amorces', headers: ['Type', 'Examples', 'Verb'], headersFr: ['Type', 'Exemples', 'Verbe'],
        rows: [['dass-clause', 'Ich bin davon überzeugt, dass … · Ich bin der Ansicht, dass …', 'last'], ['main clause', 'Meiner Meinung nach ist … · Aus meiner Sicht …', 'second'], ['impression', 'Ich habe den Eindruck, dass …', 'last'], ['softening', 'Ich würde sagen, … · Es kommt darauf an, …', 'second']],
        rowsFr: [['proposition en dass', 'Ich bin davon überzeugt, dass … · Ich bin der Ansicht, dass …', 'à la fin'], ['principale', 'Meiner Meinung nach ist … · Aus meiner Sicht …', 'en deuxième'], ['impression', 'Ich habe den Eindruck, dass …', 'à la fin'], ['adoucissement', 'Ich würde sagen, … · Es kommt darauf an, …', 'en deuxième']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Meiner Meinung nach', role: 'other' }, { text: 'ist', role: 'verb' }, { text: 'Homeoffice', role: 'subject' }, { text: 'sehr effizient.', role: 'other' }], en: 'In my opinion working from home is very efficient.', fr: 'À mon avis, le télétravail est très efficace.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'bin', role: 'verb' }, { text: 'davon überzeugt,', role: 'other' }, { text: 'dass', role: 'connector' }, { text: 'Präsenz', role: 'subject' }, { text: 'wichtig', role: 'other' }, { text: 'bleibt.', role: 'verb' }], en: 'I am convinced that being present stays important.', fr: 'Je suis convaincu que la présence reste importante.' },
      ],
      contrast: {
        a: { label: 'Basic', labelFr: 'Basique', note: 'ich denke, …', noteFr: 'ich denke, …', examples: [g('Ich denke, Homeoffice ist gut.', 'I think working from home is good.', 'Je pense que le télétravail est bien.'), g('Ich glaube, das stimmt.', 'I believe that is true.', 'Je crois que c’est vrai.')] },
        b: { label: 'Varied (B2)', labelFr: 'Varié (B2)', note: 'ranges and registers', noteFr: 'gammes et registres', examples: [g('Meiner Meinung nach ist Homeoffice sehr effizient.', 'In my opinion working from home is very efficient.', 'À mon avis, le télétravail est très efficace.'), g('Ich bin davon überzeugt, dass Präsenz wichtig bleibt.', 'I am convinced that being present stays important.', 'Je suis convaincu que la présence reste importante.')] },
      },
      examples: [
        g('Meiner Meinung nach ist Homeoffice sehr effizient.', 'In my opinion working from home is very efficient.', 'À mon avis, le télétravail est très efficace.'),
        g('Ich bin davon überzeugt, dass Präsenz wichtig bleibt.', 'I am convinced that being present stays important.', 'Je suis convaincu que la présence reste importante.'),
        g('Ich bin der Ansicht, dass wir mehr tun müssen.', 'I am of the opinion that we have to do more.', 'Je suis d’avis que nous devons faire plus.'),
        g('Aus meiner Sicht verlieren die Büros an Bedeutung.', 'From my point of view offices are losing importance.', 'De mon point de vue, les bureaux perdent de leur importance.'),
        g('Ich würde sagen, es kommt darauf an.', 'I would say it depends.', 'Je dirais que cela dépend.'),
        g('Ich habe den Eindruck, dass viele unsicher sind.', 'I have the impression that many are unsure.', 'J’ai l’impression que beaucoup sont incertains.'),
      ],
      mistakes: [
        { wrong: 'Meiner Meinung nach Homeoffice ist effizient.', right: 'Meiner Meinung nach ist Homeoffice effizient.', why: 'After the opener the verb stays in position 2.', whyFr: 'Après l’amorce, le verbe reste en position 2.' },
        { wrong: 'Ich bin davon überzeugt, dass Präsenz bleibt wichtig.', right: 'Ich bin davon überzeugt, dass Präsenz wichtig bleibt.', why: 'After dass the verb goes last.', whyFr: 'Après dass, le verbe va en dernier.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l1-e1', prompt: 'Which opener takes a "dass"-clause with the verb at the end?', promptFr: 'Quelle introduction prend une subordonnée en « dass » (verbe à la fin) ?', options: ['Meiner Meinung nach', 'Ich bin davon überzeugt, dass', 'Aus meiner Sicht'], answer: 1, explain: '"davon überzeugt, dass" introduces a subordinate clause.', explainFr: '« davon überzeugt, dass » introduit une subordonnée.', hint: 'Look for "dass".', hintFr: 'Cherche « dass ».' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l1-e3', tokens: ['Meinung', 'nach', 'ist', 'Meiner', 'das', 'falsch'], answer: ['Meiner', 'Meinung', 'nach', 'ist', 'das', 'falsch'], hint: 'After the opener, the verb is in position 2.', hintFr: 'Après l’introduction, le verbe est en 2e position.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l1-e10', tokens: ['davon', 'bin', 'überzeugt', 'ich', 'dass', 'es', 'funktioniert'], answer: ['ich', 'bin', 'davon', 'überzeugt', 'dass', 'es', 'funktioniert'], hint: 'dass-clause: verb at the end.', hintFr: 'subordonnée en dass : verbe à la fin.' } },

    // ───────────── 2 · Reacting ─────────────
    { kind: 'chapter', title: 'Zustimmen, teilweise zustimmen, widersprechen', titleFr: 'Approuver, approuver en partie, contredire', blurb: 'Choose the strength of your reaction.', blurbFr: 'Choisis la force de ta réaction.' },

    { kind: 'situation', title: 'Da muss ich widersprechen', titleFr: 'Là, je dois contredire',
      setting: 'The panel reacts to each other.', settingFr: 'Les intervenants réagissent les uns aux autres.',
      lines: [
        line('Herr Weber', 'Genau! Da stimme ich Ihnen völlig zu. Das sehe ich genauso.', 'Exactly! I completely agree with you. I see it just the same.', 'Exactement ! Je suis tout à fait d’accord avec vous. Je vois les choses de la même manière.'),
        line('Frau Kaya', 'Das stimmt zwar, aber es ist auch teurer. Einerseits ja, andererseits fehlt der Kontakt. Da ist schon etwas dran, aber …', 'That is true, but it is also more expensive. On the one hand yes, on the other hand contact is missing. There is something in that, but …', 'C’est vrai, mais c’est aussi plus cher. D’une part oui, d’autre part le contact manque. Il y a du vrai, mais …'),
        line('Frau Berger', 'Da muss ich dir widersprechen: Die Zahlen zeigen das Gegenteil. Das sehe ich anders. Ich bin da nicht ganz deiner Meinung.', 'I have to disagree with you: the figures show the opposite. I see it differently. I don’t quite share your opinion.', 'Là, je dois te contredire : les chiffres montrent le contraire. Je vois les choses autrement. Je ne suis pas tout à fait de ton avis.'),
        line('Herr Weber', 'Ich verstehe Ihren Standpunkt, aber ich behaupte nicht, dass es leicht ist.', 'I understand your point of view, but I am not claiming it is easy.', 'Je comprends votre point de vue, mais je ne prétends pas que ce soit facile.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Reagieren', titleFr: 'Réagir',
      items: [{ id: 'b2l1-zustimmen', german: 'zustimmen', english: 'to agree', french: 'approuver', gender: null, syllables: ['ZU', 'stim', 'men'], pronunciation: 'TSOO-shtim-men', example: { de: 'Dem stimme ich voll zu.', en: 'I fully agree with that.', fr: 'Je suis tout à fait d’accord.' } }, { id: 'b2l1-widersprechen', german: 'widersprechen', english: 'to contradict', french: 'contredire', gender: null, syllables: ['WI', 'der', 'spre', 'chen'], pronunciation: 'VEE-der-shpre-khen', example: { de: 'Da muss ich dir widersprechen.', en: 'I have to disagree with you there.', fr: 'Là, je dois te contredire.' } }, { id: 'b2l1-behaupten', german: 'behaupten', english: 'to claim', french: 'affirmer', gender: null, syllables: ['be', 'HAUP', 'ten'], pronunciation: 'be-HOWP-ten', example: { de: 'Er behauptet, das sei unmöglich.', en: 'He claims that is impossible.', fr: 'Il affirme que c’est impossible.' } }, { id: 'b2l1-begruenden', german: 'begründen', english: 'to justify / give reasons', french: 'justifier', gender: null, syllables: ['be', 'GRÜN', 'den'], pronunciation: 'be-GRUEN-den', example: { de: 'Kannst du deine Meinung begründen?', en: 'Can you give reasons for your opinion?', fr: 'Peux-tu justifier ton opinion ?' } }, { id: 'b2l1-zwar', german: 'zwar … aber', english: 'it is true … but', french: 'certes … mais', gender: null, syllables: ['ZWAR', 'A', 'ber'], pronunciation: 'tsvahr AH-ber', example: { de: 'Das ist zwar teuer, aber es lohnt sich.', en: 'It is expensive, true, but it is worth it.', fr: 'C’est certes cher, mais ça vaut la peine.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l1-reagieren', title: 'Reacting: agree, partly agree, disagree', titleFr: 'Réagir : approuver, approuver en partie, contredire',
      lead: 'Choose the strength: agree (Genau!), partly agree (zwar … aber, einerseits … andererseits), disagree politely (Da muss ich dir widersprechen).',
      leadFr: 'Choisis la force : approuver (Genau !), approuver en partie (zwar … aber, einerseits … andererseits), contredire poliment (Da muss ich dir widersprechen).',
      explanationMd: 'Choose the **strength of your reaction**. **Agree**: **Genau! / Da stimme ich dir völlig zu. / Das sehe ich genauso.** **Partly agree**: **Das stimmt zwar, aber … / Einerseits ja, andererseits … / Da ist schon etwas dran, aber …** **Disagree politely**: **Da muss ich dir widersprechen. / Das sehe ich anders. / Ich bin da nicht ganz deiner Meinung.** **zwar … aber** admits a point, then pushes back; after **zwar** the second part often starts with **aber** (**position 0**). **zustimmen** and **widersprechen** take the **dative**: **Ich stimme dir zu. Ich widerspreche dir.**',
      explanationMdFr: 'Choisis la **force de ta réaction**. **Approuver** : **Genau! / Da stimme ich dir völlig zu. / Das sehe ich genauso.** **Approuver en partie** : **Das stimmt zwar, aber … / Einerseits ja, andererseits … / Da ist schon etwas dran, aber …** **Contredire poliment** : **Da muss ich dir widersprechen. / Das sehe ich anders. / Ich bin da nicht ganz deiner Meinung.** **zwar … aber** concède un point puis le nuance ; après **zwar**, la seconde partie commence souvent par **aber** (**position 0**). **zustimmen** et **widersprechen** prennent le **datif** : **Ich stimme dir zu. Ich widerspreche dir.**',
      tables: [{ title: 'Strength of reaction', titleFr: 'Force de la réaction', headers: ['Strength', 'German'], headersFr: ['Force', 'Allemand'],
        rows: [['Agree fully', 'Genau! · Da stimme ich dir völlig zu. · Das sehe ich genauso.'], ['Partly agree', 'Das stimmt zwar, aber … · Einerseits ja, andererseits … · Da ist schon etwas dran, aber …'], ['Disagree politely', 'Da muss ich dir widersprechen. · Das sehe ich anders. · Ich bin da nicht ganz deiner Meinung.']],
        rowsFr: [['Approuver pleinement', 'Genau! · Da stimme ich dir völlig zu. · Das sehe ich genauso.'], ['Approuver en partie', 'Das stimmt zwar, aber … · Einerseits ja, andererseits … · Da ist schon etwas dran, aber …'], ['Contredire poliment', 'Da muss ich dir widersprechen. · Das sehe ich anders. · Ich bin da nicht ganz deiner Meinung.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das', role: 'subject' }, { text: 'stimmt', role: 'verb' }, { text: 'zwar,', role: 'connector' }, { text: 'aber', role: 'connector' }, { text: 'es', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'auch teurer.', role: 'other' }], en: 'That is true, but it is also more expensive.', fr: 'C’est vrai, mais c’est aussi plus cher.' },
        { parts: [{ text: 'Da', role: 'other' }, { text: 'muss', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'dir', role: 'dative' }, { text: 'widersprechen.', role: 'verb' }], en: 'I have to disagree with you.', fr: 'Là, je dois te contredire.' },
      ],
      contrast: {
        a: { label: 'Too blunt', labelFr: 'Trop direct', note: 'avoid', noteFr: 'à éviter', examples: [g('Das ist falsch.', 'That is wrong.', 'C’est faux.'), g('Nein, das stimmt nicht.', 'No, that is not true.', 'Non, ce n’est pas vrai.')] },
        b: { label: 'Polite', labelFr: 'Poli', note: 'acknowledge, then differ', noteFr: 'reconnaître, puis différer', examples: [g('Da muss ich dir widersprechen: Die Zahlen zeigen das Gegenteil.', 'I have to disagree: the figures show the opposite.', 'Là, je dois te contredire : les chiffres montrent le contraire.'), g('Ich verstehe deinen Standpunkt, aber ich sehe das anders.', 'I understand your point of view, but I see it differently.', 'Je comprends ton point de vue, mais je vois les choses autrement.')] },
      },
      examples: [
        g('Da stimme ich dir völlig zu.', 'I completely agree with you.', 'Je suis tout à fait d’accord avec toi.'),
        g('Das stimmt zwar, aber es ist auch teurer.', 'That is true, but it is also more expensive.', 'C’est vrai, mais c’est aussi plus cher.'),
        g('Einerseits ja, andererseits fehlt der Kontakt.', 'On the one hand yes, on the other hand contact is missing.', 'D’une part oui, d’autre part le contact manque.'),
        g('Da muss ich dir widersprechen: Die Zahlen zeigen das Gegenteil.', 'I have to disagree: the figures show the opposite.', 'Là, je dois te contredire : les chiffres montrent le contraire.'),
        g('Ich bin da nicht ganz deiner Meinung.', 'I don’t quite share your opinion.', 'Je ne suis pas tout à fait de ton avis.'),
        g('Er behauptet, das sei unmöglich.', 'He claims that is impossible.', 'Il prétend que c’est impossible.'),
      ],
      mistakes: [
        { wrong: 'Ich stimme dich zu.', right: 'Ich stimme dir zu.', why: 'zustimmen takes the dative.', whyFr: 'zustimmen prend le datif.' },
        { wrong: 'Das stimmt zwar, aber ist es teurer.', right: 'Das stimmt zwar, aber es ist teurer.', why: 'aber is position 0: the verb stays after the subject.', whyFr: 'aber est en position 0 : le verbe reste après le sujet.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l1-e2', prompt: 'Das ist ___ teuer, aber es lohnt sich. (it is true)', answer: 'zwar', hint: 'zwar … aber', hintFr: 'zwar … aber' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l1-e4', prompt: 'You partly agree. What do you say?', promptFr: 'Tu es en partie d’accord. Que dis-tu ?', options: ['Das sehe ich genauso.', 'Das stimmt zwar, aber …', 'Das ist völliger Unsinn.'], answer: 1, explain: '"zwar … aber" concedes a point, then adds a "but".', explainFr: '« zwar … aber » concède un point puis nuance.', hint: 'Concede, then "aber".', hintFr: 'Concède, puis « aber ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l1-e5', prompt: 'Da muss ich dir ___. (disagree)', answer: 'widersprechen', hint: 'widersprechen = to contradict', hintFr: 'widersprechen = contredire' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l1-e7', prompt: 'Listen. What is the speaker’s reaction?', promptFr: 'Écoute. Quelle est la réaction du locuteur ?', audio: { ttsText: 'Das stimmt zwar, aber ich sehe das ein bisschen anders.' }, options: ['Partly agrees', 'Fully agrees', 'Does not understand'], optionsFr: ['Approuve en partie', 'Approuve entièrement', 'Ne comprend pas'], answer: 0, hint: 'Listen for "zwar … aber".', hintFr: 'Écoute « zwar … aber ».' } },

    // ───────────── 3 · Structuring ─────────────
    { kind: 'chapter', title: 'Argumente stützen und strukturieren', titleFr: 'Étayer et structurer ses arguments', blurb: 'Reasons, examples, discourse markers.', blurbFr: 'Raisons, exemples, marqueurs du discours.' },

    { kind: 'situation', title: 'Zum Beispiel …', titleFr: 'Par exemple …',
      setting: 'Frau Kaya builds her argument.', settingFr: 'Madame Kaya construit son argument.',
      lines: [
        line('Frau Kaya', 'Einerseits spart man Zeit, andererseits fehlt der Kontakt. Viele Firmen, zum Beispiel Banken, arbeiten so.', 'On the one hand you save time, on the other contact is missing. Many companies, for example banks, work like that.', 'D’une part on gagne du temps, d’autre part le contact manque. Beaucoup d’entreprises, par exemple des banques, fonctionnent ainsi.'),
        line('Moderatorin', 'Können Sie Ihre Meinung begründen? Das ist ein starkes Argument.', 'Can you justify your opinion? That is a strong argument.', 'Pouvez-vous justifier votre opinion ? C’est un argument fort.'),
        line('Frau Kaya', 'Erstens spart es Zeit, zweitens senkt es Kosten, drittens steigert es die Zufriedenheit. Das ist zwar teuer, aber es lohnt sich. Ich bin ja nicht gegen Büros — im Gegenteil.', 'Firstly it saves time, secondly it lowers costs, thirdly it increases satisfaction. That is expensive, but it pays off. I am not against offices — on the contrary.', 'Premièrement cela fait gagner du temps, deuxièmement cela réduit les coûts, troisièmement cela augmente la satisfaction. C’est certes cher, mais cela vaut la peine. Je ne suis pas contre les bureaux — au contraire.'),
      ],
      words: [{ id: 'b2l1-einerseits', german: 'einerseits … andererseits', english: 'on the one hand … on the other', french: 'd’une part … d’autre part', gender: null, syllables: ['EI', 'ner', 'seits', 'AN', 'de', 'rer', 'seits'], pronunciation: 'EYE-ner-zites AHN-de-rer-zites', example: { de: 'Einerseits spart man Zeit, andererseits fehlt der Kontakt.', en: 'On the one hand you save time, on the other contact is missing.', fr: 'D’une part on gagne du temps, d’autre part le contact manque.' } }, { id: 'b2l1-beispiel', german: 'zum Beispiel', english: 'for example', french: 'par exemple', gender: null, syllables: ['zum', 'BEI', 'spiel'], pronunciation: 'tsoom BY-shpeel', example: { de: 'Viele Firmen, zum Beispiel Banken, arbeiten so.', en: 'Many companies, banks for example, work like this.', fr: 'Beaucoup d’entreprises, les banques par exemple, travaillent ainsi.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l1-strukturieren', title: 'Backing up a point and structuring what you say', titleFr: 'Étayer un point et structurer son propos',
      lead: 'Reason (weil, denn, nämlich), example (zum Beispiel), sequence (erstens, zweitens …), contrast (einerseits … andererseits).',
      leadFr: 'Raison (weil, denn, nämlich), exemple (zum Beispiel), ordre (erstens, zweitens …), contraste (einerseits … andererseits).',
      explanationMd: 'A good **point** has **four parts**: **claim**, **reason**, **example**, **link**. **Reason**: **weil, da, denn, nämlich**. **Example**: **zum Beispiel, etwa, beispielsweise**. **Sequence**: **erstens, zweitens, drittens, abschließend**. **Contrast**: **einerseits … andererseits, zwar … aber, im Gegenteil, dagegen**. **Conclusion**: **Zusammenfassend lässt sich sagen, dass …, Insgesamt …**. After **zum Beispiel** in the middle of a sentence the **verb stays in position 2**: **Viele Firmen, zum Beispiel Banken, arbeiten so.**',
      explanationMdFr: 'Un bon **argument** a **quatre parties** : **affirmation**, **raison**, **exemple**, **lien**. **Raison** : **weil, da, denn, nämlich**. **Exemple** : **zum Beispiel, etwa, beispielsweise**. **Ordre** : **erstens, zweitens, drittens, abschließend**. **Contraste** : **einerseits … andererseits, zwar … aber, im Gegenteil, dagegen**. **Conclusion** : **Zusammenfassend lässt sich sagen, dass …, Insgesamt …**. Après **zum Beispiel** au milieu d’une phrase, le **verbe reste en position 2** : **Viele Firmen, zum Beispiel Banken, arbeiten so.**',
      tables: [{ title: 'Structuring words', titleFr: 'Mots de structuration', headers: ['Function', 'Words'], headersFr: ['Fonction', 'Mots'],
        rows: [['Reason', 'weil · da · denn · nämlich'], ['Example', 'zum Beispiel · beispielsweise · etwa'], ['Sequence', 'erstens · zweitens · drittens · abschließend'], ['Contrast', 'einerseits … andererseits · zwar … aber · im Gegenteil'], ['Conclusion', 'zusammenfassend · insgesamt · alles in allem']],
        rowsFr: [['Raison', 'weil · da · denn · nämlich'], ['Exemple', 'zum Beispiel · beispielsweise · etwa'], ['Ordre', 'erstens · zweitens · drittens · abschließend'], ['Contraste', 'einerseits … andererseits · zwar … aber · im Gegenteil'], ['Conclusion', 'zusammenfassend · insgesamt · alles in allem']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Einerseits', role: 'connector' }, { text: 'spart', role: 'verb' }, { text: 'man', role: 'subject' }, { text: 'Zeit,', role: 'accusative' }, { text: 'andererseits', role: 'connector' }, { text: 'fehlt', role: 'verb' }, { text: 'der Kontakt.', role: 'subject' }], en: 'On the one hand you save time, on the other contact is missing.', fr: 'D’une part on gagne du temps, d’autre part le contact manque.' },
        { parts: [{ text: 'Viele Firmen,', role: 'subject' }, { text: 'zum Beispiel Banken,', role: 'other' }, { text: 'arbeiten', role: 'verb' }, { text: 'so.', role: 'other' }], en: 'Many companies, for example banks, work like that.', fr: 'Beaucoup d’entreprises, par exemple des banques, fonctionnent ainsi.' },
      ],
      contrast: {
        a: { label: 'Unstructured', labelFr: 'Non structuré', note: 'list of ideas', noteFr: 'liste d’idées', examples: [g('Homeoffice spart Zeit. Es kostet weniger.', 'Working from home saves time. It costs less.', 'Le télétravail fait gagner du temps. Il coûte moins cher.'), g('Es gibt auch Nachteile.', 'There are also disadvantages.', 'Il y a aussi des inconvénients.')] },
        b: { label: 'Structured', labelFr: 'Structuré', note: 'ordered and linked', noteFr: 'ordonné et relié', examples: [g('Erstens spart es Zeit, zweitens senkt es Kosten.', 'Firstly it saves time, secondly it lowers costs.', 'Premièrement cela fait gagner du temps, deuxièmement cela réduit les coûts.'), g('Einerseits spart man Zeit, andererseits fehlt der Kontakt.', 'On the one hand you save time, on the other contact is missing.', 'D’une part on gagne du temps, d’autre part le contact manque.')] },
      },
      examples: [
        g('Einerseits spart man Zeit, andererseits fehlt der Kontakt.', 'On the one hand you save time, on the other contact is missing.', 'D’une part on gagne du temps, d’autre part le contact manque.'),
        g('Viele Firmen, zum Beispiel Banken, arbeiten so.', 'Many companies, for example banks, work like that.', 'Beaucoup d’entreprises, par exemple des banques, fonctionnent ainsi.'),
        g('Das ist zwar teuer, aber es lohnt sich.', 'That is expensive, but it pays off.', 'C’est certes cher, mais cela vaut la peine.'),
        g('Erstens spart es Zeit, zweitens senkt es Kosten.', 'Firstly it saves time, secondly it lowers costs.', 'Premièrement cela fait gagner du temps, deuxièmement cela réduit les coûts.'),
        g('Kannst du deine Meinung begründen?', 'Can you justify your opinion?', 'Peux-tu justifier ton opinion ?'),
        g('Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.', 'To sum up, the advantages outweigh.', 'En résumé, les avantages l’emportent.'),
      ],
      mistakes: [
        { wrong: 'Einerseits man spart Zeit.', right: 'Einerseits spart man Zeit.', why: 'After einerseits the verb is second.', whyFr: 'Après einerseits, le verbe est en deuxième.' },
        { wrong: 'Viele Firmen, zum Beispiel Banken, arbeiten so Zeit.', right: 'Viele Firmen, zum Beispiel Banken, arbeiten so.', why: 'The example is an interjection: the sentence continues normally.', whyFr: 'L’exemple est une incise : la phrase continue normalement.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l1-e6', pairs: [{ de: 'zustimmen', en: 'to agree', fr: 'approuver' }, { de: 'behaupten', en: 'to claim', fr: 'affirmer' }, { de: 'begründen', en: 'to justify', fr: 'justifier' }, { de: 'der Standpunkt', en: 'point of view', fr: 'point de vue' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à sa signification.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l1-e8', prompt: '___ spart man Zeit, andererseits fehlt der Kontakt. (on the one hand)', answer: 'Einerseits', hint: 'einerseits … andererseits', hintFr: 'einerseits … andererseits' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l1-e9', prompt: 'Which sentence gives an example?', promptFr: 'Quelle phrase donne un exemple ?', options: ['Viele Firmen, zum Beispiel Banken, arbeiten so.', 'Ich bin dagegen.', 'Das war früher anders.'], answer: 0, explain: '"zum Beispiel" introduces an example.', explainFr: '« zum Beispiel » introduit un exemple.', hint: 'Look for "zum Beispiel".', hintFr: 'Cherche « zum Beispiel ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l1-e11', prompt: 'Listen. What does the speaker do?', promptFr: 'Écoute. Que fait le locuteur ?', audio: { ttsText: 'Ich verstehe Ihren Standpunkt, aber ich bin der Ansicht, dass wir mehr Zeit brauchen.' }, options: ['Politely disagrees', 'Says goodbye', 'Asks for directions'], optionsFr: ['Contredit poliment', 'Dit au revoir', 'Demande son chemin'], answer: 0, hint: 'Understands, but has another view.', hintFr: 'Comprend, mais pense autrement.' } },

    { kind: 'pronunciation', focus: 'Stress the key word of the phrase, not the opener: "Das sehe ich ANders", "Da muss ich dir WIdersprechen"', focusFr: 'Accentue le mot-clé de la formule, pas l’introduction : « Das sehe ich ANders », « Da muss ich dir WIdersprechen »', items: [{ id: 'b2l1-widersprechen-pron', german: 'widersprechen', english: 'to contradict', french: 'contredire', gender: null, syllables: ['WI', 'der', 'spre', 'chen'], pronunciation: 'VEE-der-shpre-khen', example: { de: 'Ich muss leider widersprechen.', en: 'I am afraid I have to disagree.', fr: 'Je dois malheureusement contredire.' } }, { id: 'b2l1-ueberzeugt-pron', german: 'überzeugt', english: 'convinced', french: 'convaincu', gender: null, syllables: ['ü', 'ber', 'ZEUGT'], pronunciation: 'ue-ber-TSOYKT', example: { de: 'Ich bin fest überzeugt.', en: 'I am firmly convinced.', fr: 'J’en suis fermement convaincu.' } }] },

    { kind: 'wrapup',
      summary: 'You can now **introduce, soften and defend an opinion**, **agree and disagree politely** and **structure an argument** with **reasons, examples and discourse markers**. 🎉',
      summaryFr: 'Tu sais maintenant **introduire, nuancer et défendre une opinion**, **approuver et contredire poliment** et **structurer un argument** avec **raisons, exemples et marqueurs du discours**. 🎉',
      card: { title: 'Opinions on one page', titleFr: 'Les opinions en une page', sections: [
        { heading: 'Openers', headingFr: 'Amorces', rows: [g('Meiner Meinung nach ist … (verb 2nd)', 'Ich bin überzeugt, dass … (verb last)', 'Ich bin überzeugt, dass … (verbe à la fin)')] },
        { heading: 'Reacting', headingFr: 'Réagir', rows: [g('Da stimme ich dir zu. · Das stimmt zwar, aber … · Da muss ich dir widersprechen.', 'agree · partly · disagree', 'approuver · en partie · contredire')] },
        { heading: 'Structure', headingFr: 'Structure', rows: [g('erstens · zweitens · zum Beispiel · einerseits … andererseits', 'link your points', 'relier tes points')] },
      ] } },
  ],
};

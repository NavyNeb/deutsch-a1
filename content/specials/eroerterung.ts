import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const eroerterung = defineSpecial({
  slug: 'eroerterung',
  number: 40,
  group: 'life',
  levels: ['B1', 'B2'],
  related: ['b2-l1', 'b2-l2', 'b2-l10'],
  title: ['Meinung und Erörterung', 'Opinion and argumentation', 'Opinion et argumentation'],
  theme: [
    'Giving an opinion, building an argument and writing a structured pro–contra text for the B2 exams',
    'Donner son opinion, construire un argument et rédiger un texte pour/contre structuré pour les examens B2',
  ],
  goals: [
    'Introduce and soften an opinion',
    'Agree, partly agree and disagree politely',
    'Structure an argument: thesis, reasons, counter-argument, conclusion',
    'Write a short pro–contra text',
  ],
  goalsFr: [
    'Introduire et nuancer une opinion',
    'Approuver, approuver en partie et contredire poliment',
    'Structurer un argument : thèse, raisons, contre-argument, conclusion',
    'Rédiger un court texte pour/contre',
  ],
  steps: [
    intro(
      'Meiner Meinung nach …', 'À mon avis …',
      'In the B2 exams you are asked: “Schreiben Sie einen Leserbrief” or “Nehmen Sie Stellung zu dieser Aussage.” You must give your opinion, justify it, consider the other side and conclude. This course gives you the phrases and the structure.',
      'Aux examens B2, on te demande : « Schreiben Sie einen Leserbrief » ou « Nehmen Sie Stellung zu dieser Aussage. » Tu dois donner ton opinion, la justifier, considérer l’autre camp et conclure. Ce cours te donne les formules et la structure.',
      [
        'Open with the right phrase',
        'React to other people’s views',
        'Link arguments logically',
        'Close with a conclusion',
      ],
      [
        'Ouvrir avec la bonne formule',
        'Réagir aux opinions des autres',
        'Relier les arguments logiquement',
        'Terminer par une conclusion',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Giving an opinion', 'Donner son opinion',
      'Beyond “ich denke”: openers with and without dass.', 'Au-delà de « ich denke » : formules avec et sans dass.',
    ),
    vocab('sp-eroerterung-meinung', 'die Meinung', 'the opinion', 'l’opinion', 'die', 'MEI-nung', 'MY-noong', ['Meiner Meinung nach ist das falsch.', 'In my opinion that is wrong.', 'À mon avis, c’est faux.']),
    vocab('sp-eroerterung-ueberzeugt', 'überzeugt sein', 'to be convinced', 'être convaincu', null, 'ü-ber-ZEUGT zain', 'ue-ber-TSOYKT zine', ['Ich bin davon überzeugt, dass es funktioniert.', 'I am convinced that it works.', 'Je suis convaincu que ça marche.']),
    grammar(
      'sp-er-opinion',
      ['Openers for your opinion', 'Formules pour ton opinion'],
      [
        '| Opener | Structure | Example |\n|---|---|---|\n| **Meiner Meinung nach** | main clause (verb 2nd) | *Meiner Meinung nach ist das falsch.* |\n| **Ich bin der Ansicht, dass** | dass-clause (verb last) | *Ich bin der Ansicht, dass wir mehr tun müssen.* |\n| **Ich bin davon überzeugt, dass** | dass-clause | *… dass es funktioniert.* |\n| **Aus meiner Sicht** | main clause | *Aus meiner Sicht ist das sinnvoll.* |\n| **Ich habe den Eindruck, dass** | dass-clause | *… dass die Lage sich verbessert.* |\n\n**Soften:** *Ich würde sagen, …* · *Ich denke eher, …* · *Es kommt darauf an …*',
        '| Formule | Structure | Exemple |\n|---|---|---|\n| **Meiner Meinung nach** | principale (verbe 2e) | *Meiner Meinung nach ist das falsch.* |\n| **Ich bin der Ansicht, dass** | subordonnée en dass (verbe final) | *Ich bin der Ansicht, dass wir mehr tun müssen.* |\n| **Ich bin davon überzeugt, dass** | subordonnée en dass | *… dass es funktioniert.* |\n| **Aus meiner Sicht** | principale | *Aus meiner Sicht ist das sinnvoll.* |\n| **Ich habe den Eindruck, dass** | subordonnée en dass | *… dass die Lage sich verbessert.* |\n\n**Nuancer :** *Ich würde sagen, …* · *Ich denke eher, …* · *Es kommt darauf an …*',
      ],
      [
        ['Meiner Meinung nach ist Homeoffice sehr effizient.', 'In my opinion working from home is very efficient.', 'À mon avis, le télétravail est très efficace.'],
        ['Ich bin davon überzeugt, dass Präsenz wichtig bleibt.', 'I am convinced that being present stays important.', 'Je suis convaincu que la présence reste importante.'],
      ],
    ),
    mc(
      'sp-er-e1',
      ['Which opener takes a dass-clause?', 'Quelle formule prend une subordonnée en dass ?'],
      ['Meiner Meinung nach', 'Ich bin davon überzeugt, dass', 'Aus meiner Sicht'], ['Meiner Meinung nach', 'Ich bin davon überzeugt, dass', 'Aus meiner Sicht'], 1,
      ['"dass" sends the verb to the end.', '« dass » envoie le verbe à la fin.'],
    ),
    wo(
      'sp-er-e2',
      ['Meinung', 'nach', 'ist', 'Meiner', 'das', 'falsch'],
      ['Meiner', 'Meinung', 'nach', 'ist', 'das', 'falsch'],
      ['After the opener, the verb is 2nd.', 'Après la formule, le verbe est en 2e position.'],
    ),
    fb(
      'sp-er-e3',
      ['Ich bin der ___ , dass wir mehr tun müssen. (opinion)', 'Ich bin der ___ , dass wir mehr tun müssen. (avis)'],
      'Ansicht',
      ['der Ansicht sein', 'der Ansicht sein'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Reacting to others', 'Réagir aux autres',
      'Agree, partly agree, disagree — politely.', 'Approuver, approuver en partie, contredire — poliment.',
    ),
    vocab('sp-eroerterung-zustimmen', 'zustimmen', 'to agree', 'approuver', null, 'ZU-shtim-men', 'TSOO-shtim-men', ['Dem stimme ich voll zu.', 'I fully agree with that.', 'Je suis tout à fait d’accord.']),
    vocab('sp-eroerterung-widersprechen', 'widersprechen', 'to contradict', 'contredire', null, 'WI-der-shpre-chen', 'VEE-der-shpre-khen', ['Da muss ich dir widersprechen.', 'I have to disagree with you there.', 'Là, je dois te contredire.']),
    grammar(
      'sp-er-react',
      ['Reaction phrases', 'Formules de réaction'],
      [
        '| Reaction | Phrases |\n|---|---|\n| **Agree** | Genau! · Da stimme ich dir völlig zu. · Das sehe ich genauso. |\n| **Partly agree** | Das stimmt zwar, aber … · Einerseits ja, andererseits … · Da ist schon etwas dran, aber … |\n| **Disagree politely** | Da muss ich dir widersprechen. · Das sehe ich anders. · Ich bin da nicht ganz deiner Meinung. |\n\n**zwar … aber** admits a point before pushing back: *Das ist **zwar** teuer, **aber** es lohnt sich.*',
        '| Réaction | Formules |\n|---|---|\n| **Approuver** | Genau ! · Da stimme ich dir völlig zu. · Das sehe ich genauso. |\n| **Approuver en partie** | Das stimmt zwar, aber … · Einerseits ja, andererseits … · Da ist schon etwas dran, aber … |\n| **Contredire poliment** | Da muss ich dir widersprechen. · Das sehe ich anders. · Ich bin da nicht ganz deiner Meinung. |\n\n**zwar … aber** concède un point avant de nuancer : *Das ist **zwar** teuer, **aber** es lohnt sich.*',
      ],
      [
        ['Das stimmt zwar, aber es ist auch teurer.', 'That is true, but it is also more expensive.', 'C’est vrai, mais c’est aussi plus cher.'],
        ['Da muss ich dir widersprechen: Die Zahlen zeigen das Gegenteil.', 'I have to disagree: the figures show the opposite.', 'Là, je dois te contredire : les chiffres montrent le contraire.'],
      ],
    ),
    fb(
      'sp-er-e4',
      ['Das ist ___ teuer, aber es lohnt sich. (it is true)', 'Das ist ___ teuer, aber es lohnt sich. (certes)'],
      'zwar',
      ['zwar … aber', 'zwar … aber'],
    ),
    mc(
      'sp-er-e5',
      ['You partly agree. What do you say?', 'Tu es en partie d’accord. Que dis-tu ?'],
      ['Das stimmt zwar, aber …', 'Das sehe ich genauso.', 'Das ist völliger Unsinn.'], ['Das stimmt zwar, aber …', 'Das sehe ich genauso.', 'Das ist völliger Unsinn.'], 0,
      ['zwar … aber = concession.', 'zwar … aber = concession.'],
    ),
    lc(
      'sp-er-e6',
      ['Listen. What is the speaker’s reaction?', 'Écoute. Quelle est la réaction du locuteur ?'],
      'Das stimmt zwar, aber ich sehe das ein bisschen anders.',
      ['Partly agrees', 'Fully agrees', 'Does not understand'], ['Approuve en partie', 'Approuve entièrement', 'Ne comprend pas'], 0,
      ['zwar … aber.', 'zwar … aber.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Building the argument', 'Construire l’argument',
      'Thesis, reasons, counter-argument, conclusion.', 'Thèse, raisons, contre-argument, conclusion.',
    ),
    vocab('sp-eroerterung-vorteil', 'der Vorteil', 'the advantage', 'l’avantage', 'der', 'FOR-tail', 'dair FOR-tile', ['Ein Vorteil ist die saubere Luft.', 'One advantage is the clean air.', 'Un avantage est l’air pur.']),
    vocab('sp-eroerterung-nachteil', 'der Nachteil', 'the disadvantage', 'l’inconvénient', 'der', 'NACH-tail', 'dair NAKH-tile', ['Der Nachteil sind die höheren Kosten.', 'The disadvantage is the higher cost.', 'L’inconvénient, ce sont les coûts plus élevés.']),
    vocab('sp-eroerterung-fazit', 'das Fazit', 'the conclusion', 'le bilan', 'das', 'FA-tsit', 'das FAH-tsit', ['Das Fazit ist eindeutig.', 'The conclusion is clear.', 'Le bilan est clair.']),
    grammar(
      'sp-er-structure',
      ['Four moves', 'Quatre étapes'],
      [
        '1. **Thesis:** *Ich vertrete die These, dass …* / *Viele Menschen sind der Meinung, dass …*\n2. **Reasons / examples:** *Dafür spricht, dass …* · *Ein Vorteil ist …* · *Zum Beispiel …* · *Die Studie belegt, dass …*\n3. **Counter-argument:** *Dagegen spricht …* · *Man könnte einwenden, dass …* · *Andererseits …*\n4. **Conclusion:** *Zusammenfassend lässt sich sagen, dass …* · *Daher / Deshalb / Folglich …* · *Mein Fazit lautet …*\n\n**Concede a point:** *obwohl* (verb last), *trotzdem / dennoch* (verb 2nd after them), *zwar … aber*.',
        '1. **Thèse :** *Ich vertrete die These, dass …* / *Viele Menschen sind der Meinung, dass …*\n2. **Raisons / exemples :** *Dafür spricht, dass …* · *Ein Vorteil ist …* · *Zum Beispiel …* · *Die Studie belegt, dass …*\n3. **Contre-argument :** *Dagegen spricht …* · *Man könnte einwenden, dass …* · *Andererseits …*\n4. **Conclusion :** *Zusammenfassend lässt sich sagen, dass …* · *Daher / Deshalb / Folglich …* · *Mein Fazit lautet …*\n\n**Concéder un point :** *obwohl* (verbe final), *trotzdem / dennoch* (verbe en 2e position après eux), *zwar … aber*.',
      ],
      [
        ['Dafür spricht, dass die Luft sauberer wird.', 'In favour speaks that the air gets cleaner.', 'Ce qui plaide en faveur, c’est que l’air devient plus propre.'],
        ['Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.', 'In summary the advantages outweigh.', 'En résumé, les avantages l’emportent.'],
      ],
    ),
    mc(
      'sp-er-e7',
      ['Which phrase introduces a counter-argument?', 'Quelle formule introduit un contre-argument ?'],
      ['Man könnte einwenden, dass …', 'Ich vertrete die These, dass …', 'Zusammenfassend lässt sich sagen …'], ['Man könnte einwenden, dass …', 'Ich vertrete die These, dass …', 'Zusammenfassend lässt sich sagen …'], 0,
      ['einwenden = to object.', 'einwenden = objecter.'],
    ),
    fb(
      'sp-er-e8',
      ['___ es teuer ist, kaufe ich es. (although)', '___ es teuer ist, kaufe ich es. (bien que)'],
      'Obwohl',
      ['obwohl = subordinate', 'obwohl = subordonnant'],
    ),
    wo(
      'sp-er-e9',
      ['sollten', 'Folglich', 'wir', 'handeln'],
      ['Folglich', 'sollten', 'wir', 'handeln'],
      ['Folglich takes position 1; verb next.', 'Folglich est en position 1 ; verbe ensuite.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'A short pro–contra text', 'Un court texte pour/contre',
      'Putting the pieces together for the exam.', 'Assembler les éléments pour l’examen.',
    ),
    vocab('sp-eroerterung-stellungnahme', 'die Stellungnahme', 'the position statement', 'la prise de position', 'die', 'SHTEL-lung-nah-me', 'dee SHTEL-loong-nah-me', ['Schreiben Sie eine Stellungnahme zu dem Thema.', 'Write a statement on the topic.', 'Écrivez une prise de position sur le thème.']),
    grammar(
      'sp-er-text',
      ['A model structure', 'Une structure modèle'],
      [
        '**Introduction (2 sentences):** introduce the topic and your position.\n*Immer mehr Menschen arbeiten von zu Hause. Meiner Meinung nach überwiegen die Vorteile.*\n\n**Main part (3–4 sentences):** reasons and one counter-argument.\n*Dafür spricht, dass man Zeit spart. Zwar fehlt der Kontakt zu Kollegen, aber …*\n\n**Conclusion (1–2 sentences):** summary and recommendation.\n*Zusammenfassend lässt sich sagen, dass Homeoffice eine gute Ergänzung ist.*\n\n**Exam tips:** vary your **connectors**, write **complete sentences**, keep a **formal tone**, and stay within the **word limit**.',
        '**Introduction (2 phrases) :** présente le thème et ta position.\n*Immer mehr Menschen arbeiten von zu Hause. Meiner Meinung nach überwiegen die Vorteile.*\n\n**Développement (3–4 phrases) :** raisons et un contre-argument.\n*Dafür spricht, dass man Zeit spart. Zwar fehlt der Kontakt zu Kollegen, aber …*\n\n**Conclusion (1–2 phrases) :** résumé et recommandation.\n*Zusammenfassend lässt sich sagen, dass Homeoffice eine gute Ergänzung ist.*\n\n**Conseils d’examen :** varie tes **connecteurs**, écris des **phrases complètes**, garde un **ton formel** et respecte le **nombre de mots**.',
      ],
      [
        ['Immer mehr Menschen arbeiten von zu Hause.', 'More and more people work from home.', 'De plus en plus de gens travaillent de chez eux.'],
        ['Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.', 'In summary the advantages outweigh.', 'En résumé, les avantages l’emportent.'],
      ],
    ),
    mc(
      'sp-er-e10',
      ['Where does the conclusion go?', 'Où va la conclusion ?'],
      ['At the end', 'At the beginning', 'In the middle'], ['À la fin', 'Au début', 'Au milieu'], 0,
      ['Introduction – main part – conclusion.', 'Introduction – développement – conclusion.'],
    ),

    wrapup(
      '**Opinion:** *Meiner Meinung nach …* · *Ich bin der Ansicht, dass …* · *Ich bin davon überzeugt, dass …*\n\n**React:** *zustimmen · zwar … aber · widersprechen · einerseits … andererseits.*\n\n**Argument:** thesis → *dafür spricht …* → *dagegen spricht …* → *zusammenfassend lässt sich sagen …*\n\n**Concede:** *obwohl · trotzdem · dennoch · zwar … aber.*\n\n**Text:** introduction – main part – conclusion; formal tone; varied connectors.',
      '**Opinion :** *Meiner Meinung nach …* · *Ich bin der Ansicht, dass …* · *Ich bin davon überzeugt, dass …*\n\n**Réagir :** *zustimmen · zwar … aber · widersprechen · einerseits … andererseits.*\n\n**Argument :** thèse → *dafür spricht …* → *dagegen spricht …* → *zusammenfassend lässt sich sagen …*\n\n**Concéder :** *obwohl · trotzdem · dennoch · zwar … aber.*\n\n**Texte :** introduction – développement – conclusion ; ton formel ; connecteurs variés.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Opinion and argumentation', 'Quiz final : opinion et argumentation'),
    match(
      'sp-er-q1',
      [
        ['zustimmen', 'to agree', 'approuver'],
        ['widersprechen', 'to contradict', 'contredire'],
        ['der Vorteil', 'advantage', 'avantage'],
        ['das Fazit', 'conclusion', 'bilan'],
      ],
      ['Match each word with its meaning.', 'Associe chaque mot à sa signification.'],
    ),
    fb(
      'sp-er-q2',
      ['Meiner ___ nach ist das falsch. (opinion)', 'Meiner ___ nach ist das falsch. (avis)'],
      'Meinung',
      ['Meiner Meinung nach', 'Meiner Meinung nach'],
    ),
    fb(
      'sp-er-q3',
      ['Da muss ich dir ___ . (disagree)', 'Da muss ich dir ___ . (contredire)'],
      'widersprechen',
      ['widersprechen', 'widersprechen'],
    ),
    mc(
      'sp-er-q4',
      ['Which phrase introduces a conclusion?', 'Quelle formule introduit une conclusion ?'],
      ['Zusammenfassend lässt sich sagen …', 'Man könnte einwenden …', 'Dafür spricht …'], ['Zusammenfassend lässt sich sagen …', 'Man könnte einwenden …', 'Dafür spricht …'], 0,
      ['zusammenfassend = in summary.', 'zusammenfassend = en résumé.'],
    ),
    mc(
      'sp-er-q5',
      ['Where does the verb go after "Obwohl es regnet,"?', 'Où va le verbe après « Obwohl es regnet, » ?'],
      ['gehen wir', 'wir gehen', 'wir gehen nicht'], ['gehen wir', 'wir gehen', 'wir gehen nicht'], 0,
      ['Verb first in the main clause.', 'Verbe en premier dans la principale.'],
    ),
    wo(
      'sp-er-q6',
      ['davon', 'bin', 'überzeugt', 'ich', 'dass', 'es', 'funktioniert'],
      ['ich', 'bin', 'davon', 'überzeugt', 'dass', 'es', 'funktioniert'],
      ['dass-clause: verb at the end.', 'subordonnée en dass : verbe à la fin.'],
    ),
    mc(
      'sp-er-q7',
      ['Which is a polite way to disagree?', 'Laquelle est une manière polie de contredire ?'],
      ['Das sehe ich anders.', 'Das ist Unsinn!', 'Du hast keine Ahnung.'], ['Das sehe ich anders.', 'Das ist Unsinn !', 'Du hast keine Ahnung.'], 0,
      ['Polite and neutral.', 'Poli et neutre.'],
    ),
    fb(
      'sp-er-q8',
      ['___ spart man Zeit, andererseits fehlt der Kontakt. (on the one hand)', '___ spart man Zeit, andererseits fehlt der Kontakt. (d’une part)'],
      'Einerseits',
      ['einerseits … andererseits', 'einerseits … andererseits'],
    ),
    lc(
      'sp-er-q9',
      ['Listen. What does the speaker do?', 'Écoute. Que fait le locuteur ?'],
      'Ich verstehe Ihren Standpunkt, aber ich bin der Ansicht, dass wir mehr Zeit brauchen.',
      ['Politely disagrees', 'Says goodbye', 'Asks for directions'], ['Contredit poliment', 'Dit au revoir', 'Demande son chemin'], 0,
      ['Understands, but has another view.', 'Comprend, mais pense autrement.'],
    ),
    lc(
      'sp-er-q10',
      ['Listen. Which step is this?', 'Écoute. De quelle étape s’agit-il ?'],
      'Zusammenfassend lässt sich sagen, dass die Vorteile überwiegen.',
      ['Conclusion', 'Thesis', 'Counter-argument'], ['Conclusion', 'Thèse', 'Contre-argument'], 0,
      ['Zusammenfassend = in summary.', 'Zusammenfassend = en résumé.'],
    ),
    mc(
      'sp-er-q11',
      ['"Dagegen spricht …" introduces …', '« Dagegen spricht … » introduit …'],
      ['a counter-argument', 'a thesis', 'a conclusion'], ['un contre-argument', 'une thèse', 'une conclusion'], 0,
      ['dagegen = against.', 'dagegen = contre.'],
    ),
    mc(
      'sp-er-q12',
      ['What should a good exam text avoid?', 'Que doit éviter un bon texte d’examen ?'],
      ['Repeating the same connector', 'Complete sentences', 'A conclusion'], ['Répéter le même connecteur', 'Des phrases complètes', 'Une conclusion'], 0,
      ['Vary your connectors.', 'Varie tes connecteurs.'],
    ),
  ],
});

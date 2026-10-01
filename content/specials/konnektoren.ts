import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const konnektoren = defineSpecial({
  slug: 'konnektoren',
  number: 16,
  group: 'sentences',
  levels: ['A1', 'B1'],
  related: ['a2-l7', 'a2-l19', 'b1-l6', 'b1-l16', 'b1-l18', 'b1-l22'],
  title: ['Konnektoren', 'Connectors', 'Les connecteurs'],
  theme: [
    'und / aber / oder / denn, weil / dass / wenn / obwohl / damit, deshalb / trotzdem — and what each does to the verb',
    'und / aber / oder / denn, weil / dass / wenn / obwohl / damit, deshalb / trotzdem — et ce que chacun fait au verbe',
  ],
  goals: [
    'Join two main clauses with und, aber, oder, denn, sondern',
    'Send the verb to the end with weil, dass, wenn, obwohl, damit',
    'Use deshalb, deswegen, trotzdem and darum with inversion',
    'Start a sentence with the subordinate clause (verb – comma – verb)',
    'Choose the right connector for cause, contrast, condition and purpose',
  ],
  goalsFr: [
    'Relier deux principales avec und, aber, oder, denn, sondern',
    'Envoyer le verbe à la fin avec weil, dass, wenn, obwohl, damit',
    'Utiliser deshalb, deswegen, trotzdem et darum avec inversion',
    'Commencer la phrase par la subordonnée (verbe – virgule – verbe)',
    'Choisir le bon connecteur pour la cause, l’opposition, la condition et le but',
  ],
  steps: [
    intro(
      'Sätze verbinden', 'Relier les phrases',
      'Short sentences sound like a robot. **Connectors** let you give reasons, contrast ideas and set conditions. In German they come in three families — and each family treats the verb differently. Learn the family, and the word order follows automatically.',
      'Les phrases courtes sonnent comme un robot. Les **connecteurs** permettent de donner des raisons, d’opposer des idées et de poser des conditions. En allemand, ils forment trois familles — et chacune traite le verbe différemment. Apprends la famille, l’ordre des mots suit tout seul.',
      [
        'Recognise the three connector families',
        'Place the verb correctly after each one',
        'Build longer, more natural sentences',
        'Avoid the classic weil + verb-second mistake',
      ],
      [
        'Reconnaître les trois familles de connecteurs',
        'Placer correctement le verbe après chacun',
        'Construire des phrases plus longues et plus naturelles',
        'Éviter l’erreur classique weil + verbe en 2e position',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Family 1: und, aber, oder, denn', 'Famille 1 : und, aber, oder, denn',
      'Position 0 — they change nothing in the word order.', 'Position 0 — ils ne changent rien à l’ordre des mots.',
    ),
    grammar(
      'sp-kon-pos0',
      ['Coordinating conjunctions (position 0)', 'Conjonctions de coordination (position 0)'],
      [
        'Five little words join **two complete main clauses**. They stand *outside* the clause (position 0), so each clause keeps its normal order: **verb in position 2**.\n\n- **und** — and: Ich koche, **und** er wäscht ab.\n- **aber** — but: Ich bin müde, **aber** ich lerne weiter.\n- **oder** — or: Gehst du ins Kino, **oder** bleibst du zu Hause?\n- **denn** — because (gives a reason): Ich bleibe zu Hause, **denn** ich bin krank.\n- **sondern** — but rather (after a negation): Ich trinke **nicht** Kaffee, **sondern** Tee.\n\n**Tip:** when both clauses share the same subject, you can drop the second one: Ich koche **und** (ich) wasche ab → Ich koche **und** wasche ab. Before **und / oder** a comma is then **not** needed; before **aber / denn / sondern** it always is.',
        'Cinq petits mots relient **deux principales complètes**. Ils sont *en dehors* de la phrase (position 0), donc chaque proposition garde son ordre normal : **verbe en 2e position**.\n\n- **und** — et : Ich koche, **und** er wäscht ab.\n- **aber** — mais : Ich bin müde, **aber** ich lerne weiter.\n- **oder** — ou : Gehst du ins Kino, **oder** bleibst du zu Hause ?\n- **denn** — car (donne une raison) : Ich bleibe zu Hause, **denn** ich bin krank.\n- **sondern** — mais plutôt (après une négation) : Ich trinke **nicht** Kaffee, **sondern** Tee.\n\n**Astuce :** si les deux propositions ont le même sujet, on peut omettre le second : Ich koche **und** (ich) wasche ab → Ich koche **und** wasche ab. Devant **und / oder** la virgule n’est alors **pas** nécessaire ; devant **aber / denn / sondern** elle l’est toujours.',
      ],
      [
        ['Ich bin müde, aber ich lerne weiter.', 'I am tired, but I keep learning.', 'Je suis fatigué, mais je continue d’apprendre.'],
        ['Wir bleiben zu Hause, denn es regnet.', 'We are staying home because it is raining.', 'Nous restons à la maison car il pleut.'],
        ['Sie arbeitet nicht in Berlin, sondern in Hamburg.', 'She does not work in Berlin but in Hamburg.', 'Elle ne travaille pas à Berlin mais à Hambourg.'],
      ],
      'verb-second',
    ),
    vocab('sp-konnektoren-denn', 'denn', 'because (main clause)', 'car', null, 'DENN', 'DEN', ['Ich bleibe hier, denn ich bin krank.', 'I am staying here because I am ill.', 'Je reste ici car je suis malade.']),
    vocab('sp-konnektoren-aber', 'aber', 'but', 'mais', null, 'A-ber', 'AH-ber', ['Er ist jung, aber sehr klug.', 'He is young but very clever.', 'Il est jeune mais très intelligent.']),
    mc(
      'sp-kon-e1',
      ['"Ich bleibe zu Hause, ___ ich bin krank." (verb is in position 2)', '« Ich bleibe zu Hause, ___ ich bin krank. » (le verbe est en position 2)'],
      ['denn', 'weil', 'dass'], ['denn', 'weil', 'dass'], 0,
      ['"bin" stands in position 2, so the connector is denn. weil would send "bin" to the end.', '« bin » est en position 2, donc le connecteur est denn. weil enverrait « bin » à la fin.'],
    ),
    wo('sp-kon-e2', ['aber', 'Ich', 'müde,', 'bin', 'ich', 'lerne', 'weiter'], ['Ich', 'bin', 'müde,', 'aber', 'ich', 'lerne', 'weiter'], ['Two main clauses joined by aber; each has its verb in position 2.', 'Deux principales reliées par aber ; chacune a son verbe en position 2.']),
    mc(
      'sp-kon-e3',
      ['"Ich trinke nicht Kaffee, ___ Tee."', '« Ich trinke nicht Kaffee, ___ Tee. »'],
      ['aber', 'sondern', 'denn'], ['aber', 'sondern', 'denn'], 1,
      ['After a negation, "not X but Y" = sondern.', 'Après une négation, « pas X mais Y » = sondern.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Family 2: weil, dass, wenn …', 'Famille 2 : weil, dass, wenn …',
      'Subordinating conjunctions send the conjugated verb to the end.', 'Les conjonctions de subordination envoient le verbe conjugué à la fin.',
    ),
    grammar(
      'sp-kon-sub',
      ['Subordinating conjunctions (verb at the end)', 'Conjonctions de subordination (verbe à la fin)'],
      [
        'These connectors introduce a **subordinate clause**: the **conjugated verb goes to the very end**, and a **comma** separates it from the main clause.\n\n- **weil** — because: Ich bleibe hier, **weil** ich krank **bin**.\n- **dass** — that: Ich glaube, **dass** er recht **hat**.\n- **wenn** — if / whenever: **Wenn** es regnet, bleibe ich zu Hause.\n- **obwohl** — although: Er geht, **obwohl** er müde **ist**.\n- **damit** — so that: Ich spreche langsam, **damit** du mich **verstehst**.\n- **ob** — whether: Ich weiß nicht, **ob** er **kommt**.\n\n**Separable and modal verbs:** the whole verb group is at the end, the conjugated verb **last**.\n\n- …, weil ich früh **aufstehen muss**. (modal last)\n- …, weil er morgen **anruft**. (separable verbs stay together at the end)\n- …, dass sie ihn **gesehen hat**. (Perfekt: participle + auxiliary)',
        'Ces connecteurs introduisent une **subordonnée** : le **verbe conjugué va tout à la fin** et une **virgule** la sépare de la principale.\n\n- **weil** — parce que : Ich bleibe hier, **weil** ich krank **bin**.\n- **dass** — que : Ich glaube, **dass** er recht **hat**.\n- **wenn** — si / quand : **Wenn** es regnet, bleibe ich zu Hause.\n- **obwohl** — bien que : Er geht, **obwohl** er müde **ist**.\n- **damit** — pour que : Ich spreche langsam, **damit** du mich **verstehst**.\n- **ob** — si (interrogatif) : Ich weiß nicht, **ob** er **kommt**.\n\n**Verbes séparables et modaux :** tout le groupe verbal est à la fin, le verbe conjugué en **dernier**.\n\n- …, weil ich früh **aufstehen muss**. (modal en dernier)\n- …, weil er morgen **anruft**. (le séparable reste groupé à la fin)\n- …, dass sie ihn **gesehen hat**. (Perfekt : participe + auxiliaire)',
      ],
      [
        ['Ich lerne Deutsch, weil ich in Wien arbeite.', 'I am learning German because I work in Vienna.', 'J’apprends l’allemand parce que je travaille à Vienne.'],
        ['Ich glaube, dass er recht hat.', 'I think that he is right.', 'Je crois qu’il a raison.'],
        ['Er geht zur Arbeit, obwohl er krank ist.', 'He goes to work although he is ill.', 'Il va travailler bien qu’il soit malade.'],
        ['Ich weiß nicht, ob sie heute kommt.', 'I do not know whether she is coming today.', 'Je ne sais pas si elle vient aujourd’hui.'],
      ],
      'satzklammer',
    ),
    vocab('sp-konnektoren-weil', 'weil', 'because (subordinate)', 'parce que', null, 'WEIL', 'VILE', ['Ich lerne, weil ich eine Prüfung habe.', 'I am studying because I have an exam.', 'J’étudie parce que j’ai un examen.']),
    vocab('sp-konnektoren-dass', 'dass', 'that', 'que', null, 'DASS', 'DAHSS', ['Ich weiß, dass du müde bist.', 'I know that you are tired.', 'Je sais que tu es fatigué.']),
    vocab('sp-konnektoren-obwohl', 'obwohl', 'although', 'bien que', null, 'ob-WOHL', 'op-VOHL', ['Er bleibt, obwohl es spät ist.', 'He stays although it is late.', 'Il reste bien qu’il soit tard.']),
    vocab('sp-konnektoren-damit', 'damit', 'so that', 'pour que', null, 'da-MIT', 'dah-MIT', ['Ich schreibe es auf, damit ich es nicht vergesse.', 'I write it down so that I do not forget it.', 'Je le note pour ne pas l’oublier.']),
    fb(
      'sp-kon-e4',
      ['Ich bleibe zu Hause, weil ich krank ___. (sein)', 'Ich bleibe zu Hause, weil ich krank ___. (sein)'],
      'bin',
      ['The conjugated verb stands at the very end: "bin".', 'Le verbe conjugué est tout à la fin : « bin ».'],
    ),
    wo('sp-kon-e5', ['weil', 'ich', 'müde', 'bin', 'Ich', 'gehe', 'schlafen,', 'früh'], ['Ich', 'gehe', 'früh', 'schlafen,', 'weil', 'ich', 'müde', 'bin'], ['Main clause first, then ", weil … verb".', 'Principale d’abord, puis « , weil … verbe ».']),
    mc(
      'sp-kon-e6',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich glaube, dass er recht hat.', 'Ich glaube, dass er hat recht.', 'Ich glaube, dass hat er recht.'],
      ['Ich glaube, dass er recht hat.', 'Ich glaube, dass er hat recht.', 'Ich glaube, dass hat er recht.'], 0,
      ['After dass the conjugated verb goes last.', 'Après dass, le verbe conjugué va en dernier.'],
    ),
    wo('sp-kon-e7', ['aufstehen', 'weil', 'muss', 'Ich', 'bin', 'müde,', 'ich', 'früh'], ['Ich', 'bin', 'müde,', 'weil', 'ich', 'früh', 'aufstehen', 'muss'], ['Modal verb conjugated at the very end, infinitive just before it.', 'Le modal conjugué est tout à la fin, l’infinitif juste avant.']),
    match(
      'sp-kon-e8',
      [
        ['weil', 'because (reason)', 'parce que'],
        ['obwohl', 'although (contrast)', 'bien que'],
        ['damit', 'so that (purpose)', 'pour que'],
        ['wenn', 'if / whenever', 'si / quand'],
        ['dass', 'that', 'que'],
      ],
      ['Match each connector with its meaning.', 'Associe chaque connecteur à son sens.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Family 3: deshalb, trotzdem …', 'Famille 3 : deshalb, trotzdem …',
      'Connecting adverbs take position 1 — the verb comes right after them.', 'Les adverbes de liaison prennent la position 1 — le verbe vient juste après.',
    ),
    grammar(
      'sp-kon-adv',
      ['Connecting adverbs (verb right after)', 'Adverbes de liaison (verbe juste après)'],
      [
        'Adverbs like **deshalb** or **trotzdem** look like conjunctions, but they are **a part of the sentence**: they occupy **position 1**, so the **verb is in position 2** — before the subject.\n\n- **deshalb / deswegen / darum / daher** — therefore\n- **trotzdem** — nevertheless\n- **außerdem** — besides, in addition\n- **dann** — then\n\nIch bin krank. **Deshalb bleibe ich** zu Hause. (verb *bleibe* before subject *ich*)\n\nIch bin krank. **Trotzdem gehe ich** zur Arbeit.\n\nCompare the same idea three ways:\n\n- Ich bleibe zu Hause, **denn** ich bin krank. (position 0)\n- Ich bleibe zu Hause, **weil** ich krank **bin**. (verb final)\n- Ich bin krank, **deshalb bleibe ich** zu Hause. (inversion)',
        'Des adverbes comme **deshalb** ou **trotzdem** ressemblent à des conjonctions, mais ils font **partie de la phrase** : ils occupent la **position 1**, donc le **verbe est en position 2** — avant le sujet.\n\n- **deshalb / deswegen / darum / daher** — c’est pourquoi\n- **trotzdem** — malgré tout\n- **außerdem** — en outre\n- **dann** — ensuite\n\nIch bin krank. **Deshalb bleibe ich** zu Hause. (verbe *bleibe* avant le sujet *ich*)\n\nIch bin krank. **Trotzdem gehe ich** zur Arbeit.\n\nCompare la même idée de trois façons :\n\n- Ich bleibe zu Hause, **denn** ich bin krank. (position 0)\n- Ich bleibe zu Hause, **weil** ich krank **bin**. (verbe final)\n- Ich bin krank, **deshalb bleibe ich** zu Hause. (inversion)',
      ],
      [
        ['Es regnet. Deshalb nehme ich einen Schirm mit.', 'It is raining. Therefore I take an umbrella.', 'Il pleut. C’est pourquoi je prends un parapluie.'],
        ['Er ist müde. Trotzdem arbeitet er weiter.', 'He is tired. Nevertheless he keeps working.', 'Il est fatigué. Malgré tout il continue de travailler.'],
        ['Ich habe kein Geld. Außerdem habe ich keine Zeit.', 'I have no money. Besides, I have no time.', 'Je n’ai pas d’argent. En plus, je n’ai pas le temps.'],
      ],
      'verb-second',
    ),
    vocab('sp-konnektoren-deshalb', 'deshalb', 'therefore', 'c’est pourquoi', null, 'DES-halb', 'DES-halp', ['Ich bin krank, deshalb bleibe ich hier.', 'I am ill, therefore I am staying here.', 'Je suis malade, c’est pourquoi je reste ici.']),
    vocab('sp-konnektoren-trotzdem', 'trotzdem', 'nevertheless', 'malgré tout', null, 'TROTZ-dem', 'TROTS-dem', ['Es regnet, trotzdem gehen wir spazieren.', 'It is raining, nevertheless we go for a walk.', 'Il pleut, malgré tout nous allons nous promener.']),
    fb(
      'sp-kon-e9',
      ['Es regnet. ___ nehme ich einen Schirm mit. (therefore)', 'Es regnet. ___ nehme ich einen Schirm mit. (c’est pourquoi)'],
      'Deshalb',
      ['deshalb / deswegen / darum — then the verb follows.', 'deshalb / deswegen / darum — puis le verbe suit.'],
    ),
    mc(
      'sp-kon-e10',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Er ist müde. Trotzdem arbeitet er weiter.', 'Er ist müde. Trotzdem er arbeitet weiter.', 'Er ist müde. Trotzdem er weiter arbeitet.'],
      ['Er ist müde. Trotzdem arbeitet er weiter.', 'Er ist müde. Trotzdem er arbeitet weiter.', 'Er ist müde. Trotzdem er weiter arbeitet.'], 0,
      ['trotzdem is position 1, so the verb is in position 2 before the subject.', 'trotzdem occupe la position 1, donc le verbe est en 2e position avant le sujet.'],
    ),
    wo('sp-kon-e11', ['ich', 'Ich', 'deshalb', 'bleibe', 'krank,', 'bin'], ['Ich', 'bin', 'krank,', 'deshalb', 'bleibe', 'ich'], ['After deshalb: verb first, then subject.', 'Après deshalb : verbe d’abord, puis sujet.']),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Subordinate clause first', 'La subordonnée en premier',
      'When the weil-/wenn-clause starts the sentence, the verb meets a verb.', 'Quand la subordonnée ouvre la phrase, le verbe rencontre un verbe.',
    ),
    grammar(
      'sp-kon-front',
      ['Verb – comma – verb', 'Verbe – virgule – verbe'],
      [
        'A subordinate clause can take **position 1** of the main clause. The whole clause counts as one block, so the **main clause verb comes next**: two verbs side by side, separated by a comma.\n\n- Ich bleibe zu Hause, **weil ich krank bin**.\n- **Weil ich krank bin, bleibe ich** zu Hause.\n\n- Ich gehe spazieren, **wenn die Sonne scheint**.\n- **Wenn die Sonne scheint, gehe ich** spazieren.\n\nThis is the famous **"verb – comma – verb"** pattern: *…bin, **bleibe** ich…*\n\nIt works the same with **obwohl**, **damit**, **dass** and **ob**. Sentences that start with **wenn** or **weil** are very common in speech because they put the important condition or reason first.',
        'Une subordonnée peut occuper la **position 1** de la principale. Toute la proposition compte comme un bloc, donc le **verbe de la principale vient ensuite** : deux verbes côte à côte, séparés par une virgule.\n\n- Ich bleibe zu Hause, **weil ich krank bin**.\n- **Weil ich krank bin, bleibe ich** zu Hause.\n\n- Ich gehe spazieren, **wenn die Sonne scheint**.\n- **Wenn die Sonne scheint, gehe ich** spazieren.\n\nC’est le fameux schéma **« verbe – virgule – verbe »** : *…bin, **bleibe** ich…*\n\nCela fonctionne de la même façon avec **obwohl**, **damit**, **dass** et **ob**. Les phrases qui commencent par **wenn** ou **weil** sont très courantes à l’oral car elles placent la condition ou la raison importante en premier.',
      ],
      [
        ['Wenn es regnet, bleibe ich zu Hause.', 'If it rains, I stay at home.', 'S’il pleut, je reste à la maison.'],
        ['Obwohl er müde war, arbeitete er weiter.', 'Although he was tired, he kept working.', 'Bien qu’il fût fatigué, il continuait de travailler.'],
        ['Weil ich krank bin, bleibe ich im Bett.', 'Because I am ill, I stay in bed.', 'Comme je suis malade, je reste au lit.'],
      ],
      'verb-second',
    ),
    vocab('sp-konnektoren-wenn', 'wenn', 'if, whenever', 'si, quand', null, 'WENN', 'VEN', ['Wenn du willst, komme ich mit.', 'If you want, I will come along.', 'Si tu veux, je viens avec toi.']),
    mc(
      'sp-kon-e12',
      ['"Wenn es regnet, ___ ich zu Hause." — which verb form?', '« Wenn es regnet, ___ ich zu Hause. » — quelle forme ?'],
      ['bleibe', 'bleibt', 'bleiben'], ['bleibe', 'bleibt', 'bleiben'], 0,
      ['"bleibe" comes right after the comma (position 2), before the subject "ich".', '« bleibe » vient juste après la virgule (position 2), avant le sujet « ich ».'],
    ),
    wo('sp-kon-e13', ['bleibe', 'es', 'ich', 'Wenn', 'regnet,', 'zu', 'Hause'], ['Wenn', 'es', 'regnet,', 'bleibe', 'ich', 'zu', 'Hause'], ['Subordinate clause first, then verb–subject.', 'Subordonnée d’abord, puis verbe–sujet.']),
    wo('sp-kon-e14', ['er', 'Obwohl', 'krank', 'ist,', 'arbeitet', 'er'], ['Obwohl', 'er', 'krank', 'ist,', 'arbeitet', 'er'], ['"ist," ends the subordinate clause; "arbeitet" follows immediately.', '« ist, » termine la subordonnée ; « arbeitet » suit aussitôt.']),
    fb(
      'sp-kon-e15',
      ['Weil ich müde bin, ___ ich früh ins Bett. (gehen)', 'Weil ich müde bin, ___ ich früh ins Bett. (gehen)'],
      'gehe',
      ['Verb – comma – verb: after the comma comes the conjugated verb.', 'Verbe – virgule – verbe : après la virgule vient le verbe conjugué.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Choosing the right connector', 'Choisir le bon connecteur',
      'Cause, contrast, condition, purpose — pick by meaning, then apply the family.', 'Cause, opposition, condition, but — choisis selon le sens, puis applique la famille.',
    ),
    grammar(
      'sp-kon-choose',
      ['Meaning first, family second', 'D’abord le sens, ensuite la famille'],
      [
        'Ask yourself two questions: **What do I want to say?** and **Which family is the connector?**\n\n- **Reason:** **denn** (pos. 0) · **weil** (verb final) · **deshalb** (inversion)\n- **Contrast:** **aber** (pos. 0) · **obwohl** (verb final) · **trotzdem** (inversion)\n- **Condition:** **wenn** (verb final) · **dann** (inversion, "then")\n- **Purpose:** **damit** (verb final) — with the same subject, use **um … zu** instead\n- **Content:** **dass** / **ob** (verb final) after verbs like *glauben, wissen, sagen, fragen*\n\n**Common traps:**\n\n- **weil + verb in position 2** is common in casual speech, but it is **not** correct in written or exam German.\n- **wenn** is "if / whenever", **ob** is "whether": Ich weiß nicht, **ob** er kommt. (not *wenn*)\n- **dass** (that) is the connector; **das** (this / the) is the article or pronoun. Different words, different spelling.',
        'Pose-toi deux questions : **Que veux-je dire ?** et **De quelle famille est le connecteur ?**\n\n- **Raison :** **denn** (pos. 0) · **weil** (verbe final) · **deshalb** (inversion)\n- **Opposition :** **aber** (pos. 0) · **obwohl** (verbe final) · **trotzdem** (inversion)\n- **Condition :** **wenn** (verbe final) · **dann** (inversion, « alors »)\n- **But :** **damit** (verbe final) — avec le même sujet, utilise plutôt **um … zu**\n- **Contenu :** **dass** / **ob** (verbe final) après des verbes comme *glauben, wissen, sagen, fragen*\n\n**Pièges fréquents :**\n\n- **weil + verbe en 2e position** est courant à l’oral familier, mais **incorrect** à l’écrit et à l’examen.\n- **wenn** = « si / quand », **ob** = « si (interrogatif) » : Ich weiß nicht, **ob** er kommt. (pas *wenn*)\n- **dass** (que) est le connecteur ; **das** (ce / le) est l’article ou le pronom. Mots différents, orthographe différente.',
      ],
      [
        ['Ich lerne viel, damit ich die Prüfung bestehe.', 'I study a lot so that I pass the exam.', 'J’étudie beaucoup pour réussir l’examen.'],
        ['Ich weiß nicht, ob er kommt.', 'I do not know whether he is coming.', 'Je ne sais pas s’il vient.'],
        ['Wenn du Zeit hast, dann ruf mich an.', 'If you have time, then call me.', 'Si tu as le temps, alors appelle-moi.'],
      ],
    ),
    mc(
      'sp-kon-e16',
      ['"Ich weiß nicht, ___ er morgen kommt." (whether)', '« Ich weiß nicht, ___ er morgen kommt. » (si — interrogatif)'],
      ['ob', 'wenn', 'dass'], ['ob', 'wenn', 'dass'], 0,
      ['ob = whether (indirect yes/no question).', 'ob = si (question indirecte oui/non).'],
    ),
    mc(
      'sp-kon-e17',
      ['"Er geht zur Arbeit, ___ er krank ist." (contrast)', '« Er geht zur Arbeit, ___ er krank ist. » (opposition)'],
      ['obwohl', 'weil', 'damit'], ['obwohl', 'weil', 'damit'], 0,
      ['Going to work while ill is unexpected: obwohl.', 'Aller travailler malade est inattendu : obwohl.'],
    ),
    mc(
      'sp-kon-e18',
      ['"Ich spreche langsam, ___ du mich verstehst." (purpose)', '« Ich spreche langsam, ___ du mich verstehst. » (but)'],
      ['damit', 'dass', 'denn'], ['damit', 'dass', 'denn'], 0,
      ['A purpose with a different subject: damit.', 'Un but avec un sujet différent : damit.'],
    ),
    lc(
      'sp-kon-e19',
      ['Listen. Which reason does the speaker give?', 'Écoute. Quelle raison la personne donne-t-elle ?'],
      'Ich bleibe zu Hause, weil ich krank bin.',
      ['She is ill', 'It is raining', 'She has no money'],
      ['Elle est malade', 'Il pleut', 'Elle n’a pas d’argent'], 0,
      ['"krank" = ill.', '« krank » = malade.'],
    ),

    wrapup(
      '**Family 1 — position 0:** und, aber, oder, denn, sondern. Verb stays in position 2.\n\n**Family 2 — verb at the end:** weil, dass, wenn, obwohl, damit, ob. Comma before, conjugated verb last.\n\n**Family 3 — adverbs:** deshalb, deswegen, trotzdem, außerdem, dann. Verb right after them (position 2, before the subject).\n\n**Subordinate clause first:** Weil ich krank bin, **bleibe** ich … — verb, comma, verb.\n\n**Traps:** no verb-second after weil in correct German · ob ≠ wenn · dass ≠ das.',
      '**Famille 1 — position 0 :** und, aber, oder, denn, sondern. Le verbe reste en position 2.\n\n**Famille 2 — verbe à la fin :** weil, dass, wenn, obwohl, damit, ob. Virgule avant, verbe conjugué en dernier.\n\n**Famille 3 — adverbes :** deshalb, deswegen, trotzdem, außerdem, dann. Verbe juste après (position 2, avant le sujet).\n\n**Subordonnée en premier :** Weil ich krank bin, **bleibe** ich … — verbe, virgule, verbe.\n\n**Pièges :** pas de verbe en 2e position après weil en allemand correct · ob ≠ wenn · dass ≠ das.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Connectors', 'Quiz final : les connecteurs'),
    mc(
      'sp-kon-q1',
      ['"Ich bleibe zu Hause, ___ ich bin krank." (verb in position 2)', '« Ich bleibe zu Hause, ___ ich bin krank. » (verbe en position 2)'],
      ['denn', 'weil', 'obwohl'], ['denn', 'weil', 'obwohl'], 0,
      ['"bin" is in position 2, so denn.', '« bin » est en position 2, donc denn.'],
    ),
    fb(
      'sp-kon-q2',
      ['Ich lerne Deutsch, weil ich in Berlin ___. (arbeiten)', 'Ich lerne Deutsch, weil ich in Berlin ___. (arbeiten)'],
      'arbeite',
      ['Verb at the very end after weil.', 'Verbe tout à la fin après weil.'],
    ),
    wo('sp-kon-q3', ['hat', 'Ich', 'dass', 'glaube,', 'recht', 'er'], ['Ich', 'glaube,', 'dass', 'er', 'recht', 'hat'], ['dass sends the verb to the end.', 'dass envoie le verbe à la fin.']),
    wo('sp-kon-q4', ['ich', 'Wenn', 'gehe', 'Zeit', 'habe,', 'ins', 'ich', 'Kino'], ['Wenn', 'ich', 'Zeit', 'habe,', 'gehe', 'ich', 'ins', 'Kino'], ['Verb – comma – verb after a wenn-clause.', 'Verbe – virgule – verbe après une subordonnée en wenn.']),
    mc(
      'sp-kon-q5',
      ['Es regnet. ___ nehme ich einen Schirm mit.', 'Es regnet. ___ nehme ich einen Schirm mit.'],
      ['Deshalb', 'Weil', 'Dass'], ['Deshalb', 'Weil', 'Dass'], 0,
      ['The verb follows immediately: deshalb (inversion).', 'Le verbe suit immédiatement : deshalb (inversion).'],
    ),
    mc(
      'sp-kon-q6',
      ['"Er ist müde. ___ arbeitet er weiter." (nevertheless)', '« Er ist müde. ___ arbeitet er weiter. » (malgré tout)'],
      ['Trotzdem', 'Obwohl', 'Denn'], ['Trotzdem', 'Obwohl', 'Denn'], 0,
      ['Adverb + verb in position 2: trotzdem.', 'Adverbe + verbe en position 2 : trotzdem.'],
    ),
    fb(
      'sp-kon-q7',
      ['Ich weiß nicht, ___ er kommt. (whether)', 'Ich weiß nicht, ___ er kommt. (si — interrogatif)'],
      'ob',
      ['Indirect yes/no question: ob.', 'Question indirecte oui/non : ob.'],
    ),
    match(
      'sp-kon-q8',
      [
        ['denn', 'because (verb 2nd)', 'car (verbe en 2e)'],
        ['weil', 'because (verb last)', 'parce que (verbe à la fin)'],
        ['deshalb', 'therefore', 'c’est pourquoi'],
        ['obwohl', 'although', 'bien que'],
        ['damit', 'so that', 'pour que'],
      ],
      ['Match each connector with its meaning.', 'Associe chaque connecteur à son sens.'],
    ),
    mc(
      'sp-kon-q9',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Weil ich müde bin, gehe ich schlafen.', 'Weil ich müde bin, ich gehe schlafen.', 'Weil ich bin müde, gehe ich schlafen.'],
      ['Weil ich müde bin, gehe ich schlafen.', 'Weil ich müde bin, ich gehe schlafen.', 'Weil ich bin müde, gehe ich schlafen.'], 0,
      ['Verb at the end of the weil-clause, then the main verb immediately.', 'Verbe à la fin de la subordonnée, puis le verbe principal aussitôt.'],
    ),
    mc(
      'sp-kon-q10',
      ['"Ich schreibe es auf, ___ ich es nicht vergesse." (purpose)', '« Ich schreibe es auf, ___ ich es nicht vergesse. » (but)'],
      ['damit', 'dass', 'aber'], ['damit', 'dass', 'aber'], 0,
      ['damit = so that.', 'damit = pour que.'],
    ),
    lc(
      'sp-kon-q11',
      ['Listen. What does the speaker do despite the weather?', 'Écoute. Que fait la personne malgré le temps ?'],
      'Es regnet, trotzdem gehen wir spazieren.',
      ['Go for a walk', 'Stay home', 'Go shopping'],
      ['Se promener', 'Rester à la maison', 'Faire les courses'], 0,
      ['"spazieren gehen" = go for a walk.', '« spazieren gehen » = se promener.'],
    ),
    lc(
      'sp-kon-q12',
      ['Listen. Why is the speaker staying?', 'Écoute. Pourquoi la personne reste-t-elle ?'],
      'Ich bleibe hier, denn ich bin krank.',
      ['Because ill', 'Because tired', 'Because of work'],
      ['Parce que malade', 'Parce que fatiguée', 'À cause du travail'], 0,
      ['"krank" = ill.', '« krank » = malade.'],
    ),
    mc(
      'sp-kon-q13',
      ['"Sie arbeitet nicht in Berlin, ___ in Hamburg."', '« Sie arbeitet nicht in Berlin, ___ in Hamburg. »'],
      ['sondern', 'aber', 'denn'], ['sondern', 'aber', 'denn'], 0,
      ['Correcting a negation: sondern.', 'Correction d’une négation : sondern.'],
    ),
    mc(
      'sp-kon-q14',
      ['"Er geht zur Arbeit, ___ er krank ist." (although)', '« Er geht zur Arbeit, ___ er krank ist. » (bien que)'],
      ['obwohl', 'deshalb', 'weil'], ['obwohl', 'deshalb', 'weil'], 0,
      ['obwohl = although.', 'obwohl = bien que.'],
    ),
  ],
});

import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const perfekt = defineSpecial({
  slug: 'perfekt',
  number: 3,
  group: 'verbs',
  levels: ['A2', 'B1'],
  related: ['a2-l1', 'a2-l2', 'a2-l10'],
  title: ['Das Perfekt', 'The Perfekt (present perfect)', 'Le Perfekt (passé composé)'],
  theme: [
    'The everyday past tense: haben or sein, regular and irregular participles, and where everything goes in the sentence',
    'Le passé de tous les jours : haben ou sein, participes réguliers et irréguliers, et la place de chaque élément dans la phrase',
  ],
  goals: [
    'Build the Perfekt with haben or sein plus a participle at the end',
    'Form regular, irregular and mixed participles',
    'Choose between haben and sein with confidence',
    'Handle separable, inseparable and -ieren verbs',
    'Place the participle in questions, negations and subordinate clauses',
  ],
  goalsFr: [
    'Former le Perfekt avec haben ou sein et un participe à la fin',
    'Former les participes réguliers, irréguliers et mixtes',
    'Choisir entre haben et sein avec assurance',
    'Maîtriser les verbes séparables, inséparables et en -ieren',
    'Placer le participe dans les questions, négations et subordonnées',
  ],
  steps: [
    intro(
      'Was hast du gestern gemacht?', 'Qu’as-tu fait hier ?',
      'When Germans talk about yesterday, last weekend or last summer, they almost always use the Perfekt. It is the spoken past tense: two parts, a helper verb in position 2 and a participle at the end. Learn it well and you can tell any story from your life.',
      'Quand les Allemands parlent d’hier, du week-end dernier ou de l’été passé, ils utilisent presque toujours le Perfekt. C’est le passé de l’oral : deux parties, un auxiliaire en 2e position et un participe à la fin. Maîtrise-le et tu peux raconter n’importe quel moment de ta vie.',
      [
        'Build the Perfekt with haben / sein',
        'Form regular and irregular participles',
        'Decide between haben and sein',
        'Place the participle correctly',
      ],
      [
        'Construire le Perfekt avec haben / sein',
        'Former les participes réguliers et irréguliers',
        'Décider entre haben et sein',
        'Placer correctement le participe',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'The frame: helper + participle', 'Le cadre : auxiliaire + participe',
      'Two parts that wrap around the sentence.', 'Deux éléments qui encadrent la phrase.',
    ),
    grammar(
      'sp-pf-frame',
      ['Haben / sein + Partizip II', 'Haben / sein + participe II'],
      [
        'The **Perfekt** has two parts. The auxiliary **haben** or **sein** is conjugated and stands in **position 2**. The **Partizip II** goes to the **end**. Everything else sits in between: this is the **Satzklammer** (sentence frame).\n\n- Ich **habe** gestern einen Film **gesehen**.\n- Wir **sind** am Wochenende nach Köln **gefahren**.\n\nThe Perfekt is the normal past tense in **conversation**, messages and everyday stories.',
        'Le **Perfekt** a deux éléments. L’auxiliaire **haben** ou **sein** est conjugué et se place en **2e position**. Le **participe II** va à la **fin**. Tout le reste se trouve entre les deux : c’est la **Satzklammer** (cadre de phrase).\n\n- Ich **habe** gestern einen Film **gesehen**.\n- Wir **sind** am Wochenende nach Köln **gefahren**.\n\nLe Perfekt est le temps du passé normal à l’**oral**, dans les messages et les récits quotidiens.',
      ],
      [
        ['Ich habe gestern einen Film gesehen.', 'I watched a film yesterday.', 'J’ai regardé un film hier.'],
        ['Wir sind am Wochenende nach Köln gefahren.', 'We went to Cologne at the weekend.', 'Nous sommes allés à Cologne le week-end.'],
        ['Hast du schon gegessen?', 'Have you eaten already?', 'As-tu déjà mangé ?'],
      ],
      'satzklammer',
    ),
    grammar(
      'sp-pf-aux',
      ['The helper verbs in the present', 'Les auxiliaires au présent'],
      [
        'You need the present forms of both helpers perfectly:\n\n- **haben**: ich habe, du hast, er hat, wir haben, ihr habt, sie haben\n- **sein**: ich bin, du bist, er ist, wir sind, ihr seid, sie sind\n\nOnly the helper changes with the person. The participle never changes: **gemacht** for ich, du, er, wir, ihr, sie.',
        'Les formes du présent des deux auxiliaires doivent être parfaites :\n\n- **haben** : ich habe, du hast, er hat, wir haben, ihr habt, sie haben\n- **sein** : ich bin, du bist, er ist, wir sind, ihr seid, sie sind\n\nSeul l’auxiliaire change selon la personne. Le participe ne change jamais : **gemacht** pour ich, du, er, wir, ihr, sie.',
      ],
      [
        ['ich habe gemacht · ich bin gefahren', 'I did · I went', 'j’ai fait · je suis allé'],
        ['du hast gemacht · du bist gefahren', 'you did · you went', 'tu as fait · tu es allé'],
        ['er hat gemacht · er ist gefahren', 'he did · he went', 'il a fait · il est allé'],
        ['wir haben gemacht · wir sind gefahren', 'we did · we went', 'nous avons fait · nous sommes allés'],
        ['ihr habt gemacht · ihr seid gefahren', 'you (pl.) did · went', 'vous avez fait · vous êtes allés'],
        ['sie haben gemacht · sie sind gefahren', 'they did · went', 'ils ont fait · ils sont allés'],
      ],
      'conjugation-table',
    ),
    vocab('sp-perfekt-gestern', 'gestern', 'yesterday', 'hier', null, 'GES-tern', 'GES-tern', ['Gestern habe ich lange geschlafen.', 'Yesterday I slept late.', 'Hier, j’ai dormi tard.']),
    vocab('sp-perfekt-letzte-woche', 'letzte Woche', 'last week', 'la semaine dernière', null, 'LETZ-te WO-che', 'LETS-teh VOKH-eh', ['Letzte Woche bin ich umgezogen.', 'Last week I moved house.', 'La semaine dernière, j’ai déménagé.']),
    vocab('sp-perfekt-schon', 'schon', 'already', 'déjà', null, 'SCHON', 'SHOHN', ['Hast du schon gefrühstückt?', 'Have you had breakfast already?', 'As-tu déjà pris ton petit-déjeuner ?']),
    vocab('sp-perfekt-noch-nie', 'noch nie', 'never (so far)', 'jamais (jusqu’ici)', null, 'NOCH NEE', 'NOKH NEE', ['Ich bin noch nie geflogen.', 'I have never flown.', 'Je n’ai jamais pris l’avion.']),
    mc(
      'sp-pf-e1',
      ['Where does the participle go in a main clause?', 'Où va le participe dans une phrase principale ?'],
      ['Position 2', 'At the very end', 'Directly after the subject'], ['Position 2', 'Tout à la fin', 'Juste après le sujet'], 1,
      ['The conjugated helper is in position 2, the participle closes the frame at the end.', 'L’auxiliaire conjugué est en 2e position, le participe ferme le cadre à la fin.'],
    ),
    fb(
      'sp-pf-e2',
      ['Er ___ gestern Fußball gespielt. (haben)', 'Er ___ gestern Fußball gespielt. (haben)'],
      'hat',
      ['er → hat.', 'er → hat.'],
    ),
    fb(
      'sp-pf-e3',
      ['Wir ___ nach Berlin gefahren. (sein)', 'Wir ___ nach Berlin gefahren. (sein)'],
      'sind',
      ['wir → sind.', 'wir → sind.'],
    ),
    wo('sp-pf-e4', ['gesehen', 'Ich', 'habe', 'Film', 'einen', 'gestern'], ['Ich', 'habe', 'gestern', 'einen', 'Film', 'gesehen'], ['Helper in position 2, participle at the end.', 'Auxiliaire en 2e position, participe à la fin.']),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Forming the participle', 'Former le participe',
      'Regular, irregular and mixed verbs.', 'Verbes réguliers, irréguliers et mixtes.',
    ),
    grammar(
      'sp-pf-regular',
      ['Regular verbs: ge- + stem + -t', 'Verbes réguliers : ge- + radical + -t'],
      [
        '**Regular (weak) verbs** keep their stem and form the participle with **ge- … -t**:\n\n- machen → **gemacht**\n- spielen → **gespielt**\n- lernen → **gelernt**\n- kaufen → **gekauft**\n\nIf the stem ends in **-t** or **-d** (or a consonant cluster like -chn, -tn), add **-et** for pronunciation: arbeiten → **gearbeitet**, baden → **gebadet**, öffnen → **geöffnet**.',
        'Les **verbes réguliers (faibles)** gardent leur radical et forment le participe avec **ge- … -t** :\n\n- machen → **gemacht**\n- spielen → **gespielt**\n- lernen → **gelernt**\n- kaufen → **gekauft**\n\nSi le radical finit par **-t** ou **-d** (ou un groupe consonantique comme -chn, -tn), on ajoute **-et** pour la prononciation : arbeiten → **gearbeitet**, baden → **gebadet**, öffnen → **geöffnet**.',
      ],
      [
        ['Ich habe Deutsch gelernt.', 'I learned German.', 'J’ai appris l’allemand.'],
        ['Sie hat den ganzen Tag gearbeitet.', 'She worked all day.', 'Elle a travaillé toute la journée.'],
        ['Wir haben Brot gekauft.', 'We bought bread.', 'Nous avons acheté du pain.'],
      ],
    ),
    grammar(
      'sp-pf-irregular',
      ['Irregular verbs: ge- + stem(change) + -en', 'Verbes irréguliers : ge- + radical (modifié) + -en'],
      [
        '**Irregular (strong) verbs** end in **-en** and often change their stem vowel. You must **learn them with the verb**:\n\n- sehen → **gesehen** · essen → **gegessen**\n- trinken → **getrunken** · schreiben → **geschrieben**\n- lesen → **gelesen** · fahren → **gefahren**\n- gehen → **gegangen** · kommen → **gekommen**\n\n**Mixed verbs** change the stem like strong verbs but end in **-t**: bringen → **gebracht**, denken → **gedacht**, kennen → **gekannt**, wissen → **gewusst**.',
        'Les **verbes irréguliers (forts)** finissent par **-en** et changent souvent de voyelle. Il faut **les apprendre avec le verbe** :\n\n- sehen → **gesehen** · essen → **gegessen**\n- trinken → **getrunken** · schreiben → **geschrieben**\n- lesen → **gelesen** · fahren → **gefahren**\n- gehen → **gegangen** · kommen → **gekommen**\n\nLes **verbes mixtes** changent de radical comme les forts mais finissent par **-t** : bringen → **gebracht**, denken → **gedacht**, kennen → **gekannt**, wissen → **gewusst**.',
      ],
      [
        ['Er hat ein Buch gelesen.', 'He read a book.', 'Il a lu un livre.'],
        ['Wir haben Pizza gegessen.', 'We ate pizza.', 'Nous avons mangé une pizza.'],
        ['Ich habe dir Blumen gebracht.', 'I brought you flowers.', 'Je t’ai apporté des fleurs.'],
        ['Sie ist spät nach Hause gekommen.', 'She came home late.', 'Elle est rentrée tard.'],
      ],
    ),
    vocab('sp-perfekt-gesehen', 'gesehen', 'seen (participle of sehen)', 'vu (participe de sehen)', null, 'ge-SE-hen', 'geh-ZAY-en', ['Hast du den Film schon gesehen?', 'Have you seen the film yet?', 'As-tu déjà vu le film ?']),
    vocab('sp-perfekt-gegessen', 'gegessen', 'eaten (participle of essen)', 'mangé (participe de essen)', null, 'ge-GES-sen', 'geh-GES-en', ['Wir haben im Restaurant gegessen.', 'We ate at the restaurant.', 'Nous avons mangé au restaurant.']),
    vocab('sp-perfekt-gearbeitet', 'gearbeitet', 'worked (participle of arbeiten)', 'travaillé (participe de arbeiten)', null, 'ge-AR-bei-tet', 'geh-AR-by-tet', ['Er hat heute lange gearbeitet.', 'He worked late today.', 'Il a travaillé tard aujourd’hui.']),
    mc(
      'sp-pf-e5',
      ['Participle of "lernen"?', 'Participe de « lernen » ?'],
      ['gelernt', 'gelernen', 'gelernet'], ['gelernt', 'gelernen', 'gelernet'], 0,
      ['Regular verb: ge- + stem + -t.', 'Verbe régulier : ge- + radical + -t.'],
    ),
    mc(
      'sp-pf-e6',
      ['Participle of "arbeiten"?', 'Participe de « arbeiten » ?'],
      ['gearbeitt', 'gearbeitet', 'gearbeiten'], ['gearbeitt', 'gearbeitet', 'gearbeiten'], 1,
      ['Stem ends in -t: insert an extra e before the ending: -et.', 'Le radical finit par -t : on insère un e avant la terminaison : -et.'],
    ),
    fb(
      'sp-pf-e7',
      ['Ich habe ein Buch ___. (lesen — Partizip)', 'Ich habe ein Buch ___. (lesen — participe)'],
      'gelesen',
      ['Strong verb: ge-les-en.', 'Verbe fort : ge-les-en.'],
    ),
    fb(
      'sp-pf-e8',
      ['Wir haben Wasser ___. (trinken — Partizip)', 'Wir haben Wasser ___. (trinken — participe)'],
      'getrunken',
      ['trinken → getrunken (vowel change i → u).', 'trinken → getrunken (changement i → u).'],
    ),
    fb(
      'sp-pf-e9',
      ['Er hat mir ein Geschenk ___. (bringen — Partizip)', 'Er hat mir ein Geschenk ___. (bringen — participe)'],
      'gebracht',
      ['Mixed verb: bringen → gebracht.', 'Verbe mixte : bringen → gebracht.'],
    ),
    match(
      'sp-pf-e10',
      [
        ['sehen', 'gesehen', 'gesehen'],
        ['schreiben', 'geschrieben', 'geschrieben'],
        ['denken', 'gedacht', 'gedacht'],
        ['spielen', 'gespielt', 'gespielt'],
        ['gehen', 'gegangen', 'gegangen'],
      ],
      ['Match each infinitive with its participle.', 'Associe chaque infinitif à son participe.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Haben or sein?', 'Haben ou sein ?',
      'A simple rule covers the vast majority of verbs.', 'Une règle simple couvre la grande majorité des verbes.',
    ),
    grammar(
      'sp-pf-sein',
      ['Verbs that take sein', 'Les verbes qui prennent sein'],
      [
        'Most verbs use **haben**. **Sein** is used for two groups:\n\n1. **Movement from A to B**: gehen, fahren, fliegen, laufen, kommen, reisen, ankommen, abfahren.\n2. **Change of state**: aufstehen, einschlafen, aufwachen, werden, wachsen, sterben.\n\nPlus three special verbs: **sein** (ich bin gewesen), **bleiben** (ich bin geblieben), **passieren** (es ist passiert).\n\n- Ich **bin** nach Hamburg **gefahren**.\n- Er **ist** um sechs Uhr **aufgewacht**.',
        'La plupart des verbes utilisent **haben**. **Sein** s’emploie pour deux groupes :\n\n1. **Mouvement de A vers B** : gehen, fahren, fliegen, laufen, kommen, reisen, ankommen, abfahren.\n2. **Changement d’état** : aufstehen, einschlafen, aufwachen, werden, wachsen, sterben.\n\nPlus trois verbes particuliers : **sein** (ich bin gewesen), **bleiben** (ich bin geblieben), **passieren** (es ist passiert).\n\n- Ich **bin** nach Hamburg **gefahren**.\n- Er **ist** um sechs Uhr **aufgewacht**.',
      ],
      [
        ['Wir sind nach Spanien geflogen.', 'We flew to Spain.', 'Nous avons pris l’avion pour l’Espagne.'],
        ['Sie ist eingeschlafen.', 'She fell asleep.', 'Elle s’est endormie.'],
        ['Ich bin zu Hause geblieben.', 'I stayed at home.', 'Je suis resté à la maison.'],
        ['Was ist passiert?', 'What happened?', 'Que s’est-il passé ?'],
      ],
    ),
    grammar(
      'sp-pf-trap',
      ['Typical traps', 'Pièges fréquents'],
      [
        '**Same movement, different focus.** With an object (**accusative**), many movement verbs take **haben**: fahren, fliegen.\n\n- Ich **bin** nach Wien **gefahren**. (movement)\n- Ich **habe** das Auto **gefahren**. (I drove the car: accusative)\n\nAlso remember: **schwimmen** is sometimes used with **haben** in the sense of activity (Ich habe lange geschwommen) and with **sein** when a direction is given (Ich bin ans Ufer geschwommen). Standard test: is there a **change of place or state**?\n\nIn **southern Germany, Austria and Switzerland**, **sitzen, stehen, liegen** also take **sein**: Ich **bin** gesessen. In standard German they take **haben**.',
        '**Même mouvement, accent différent.** Avec un complément (**accusatif**), beaucoup de verbes de mouvement prennent **haben** : fahren, fliegen.\n\n- Ich **bin** nach Wien **gefahren**. (mouvement)\n- Ich **habe** das Auto **gefahren**. (j’ai conduit la voiture : accusatif)\n\nRetiens aussi : **schwimmen** s’emploie parfois avec **haben** pour l’activité (Ich habe lange geschwommen) et avec **sein** quand une direction est donnée (Ich bin ans Ufer geschwommen). Test standard : y a-t-il un **changement de lieu ou d’état** ?\n\nDans le **sud de l’Allemagne, en Autriche et en Suisse**, **sitzen, stehen, liegen** prennent aussi **sein** : Ich **bin** gesessen. En allemand standard, ils prennent **haben**.',
      ],
      [
        ['Ich bin nach Wien gefahren.', 'I travelled to Vienna.', 'Je suis allé à Vienne.'],
        ['Ich habe das Auto gefahren.', 'I drove the car.', 'J’ai conduit la voiture.'],
        ['Er hat den ganzen Abend gesessen.', 'He sat the whole evening.', 'Il est resté assis toute la soirée.'],
      ],
    ),
    vocab('sp-perfekt-geblieben', 'geblieben', 'stayed (participle of bleiben)', 'resté (participe de bleiben)', null, 'ge-BLIE-ben', 'geh-BLEE-ben', ['Wir sind zu Hause geblieben.', 'We stayed at home.', 'Nous sommes restés à la maison.']),
    vocab('sp-perfekt-gewesen', 'gewesen', 'been (participle of sein)', 'été (participe de sein)', null, 'ge-WE-sen', 'geh-VAY-zen', ['Ich bin schon in Berlin gewesen.', 'I have already been to Berlin.', 'Je suis déjà allé à Berlin.']),
    mc(
      'sp-pf-e11',
      ['Which helper? "Ich ___ nach Paris geflogen."', 'Quel auxiliaire ? « Ich ___ nach Paris geflogen. »'],
      ['habe', 'bin', 'hat'], ['habe', 'bin', 'hat'], 1,
      ['Movement from A to B → sein.', 'Mouvement de A vers B → sein.'],
    ),
    mc(
      'sp-pf-e12',
      ['Which helper? "Sie ___ den ganzen Tag gearbeitet."', 'Quel auxiliaire ? « Sie ___ den ganzen Tag gearbeitet. »'],
      ['ist', 'hat', 'sind'], ['ist', 'hat', 'sind'], 1,
      ['arbeiten: no movement, no change of state → haben.', 'arbeiten : ni mouvement ni changement d’état → haben.'],
    ),
    mc(
      'sp-pf-e13',
      ['Which helper? "Er ___ um sechs Uhr aufgewacht."', 'Quel auxiliaire ? « Er ___ um sechs Uhr aufgewacht. »'],
      ['hat', 'ist', 'haben'], ['hat', 'ist', 'haben'], 1,
      ['Change of state (asleep → awake) → sein.', 'Changement d’état (endormi → éveillé) → sein.'],
    ),
    fb(
      'sp-pf-e14',
      ['Wir ___ gestern lange im Park geblieben. (sein)', 'Wir ___ gestern lange im Park geblieben. (sein)'],
      'sind',
      ['bleiben takes sein.', 'bleiben prend sein.'],
    ),
    fb(
      'sp-pf-e15',
      ['Was ___ passiert? (sein)', 'Was ___ passiert ? (sein)'],
      'ist',
      ['passieren takes sein.', 'passieren prend sein.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Special participles', 'Participes particuliers',
      'Separable, inseparable and -ieren verbs.', 'Verbes séparables, inséparables et en -ieren.',
    ),
    grammar(
      'sp-pf-prefix',
      ['Prefix verbs and -ieren verbs', 'Verbes à préfixe et verbes en -ieren'],
      [
        'Participles change shape with prefixes:\n\n- **Separable**: ge- goes **in the middle**: aufstehen → **aufgestanden**, einkaufen → **eingekauft**, anrufen → **angerufen**.\n- **Inseparable** (be-, ver-, er-, ent-, ge-, zer-, emp-, miss-): **no ge-**: besuchen → **besucht**, verstehen → **verstanden**, bekommen → **bekommen**.\n- **Verbs in -ieren**: **no ge-**: studieren → **studiert**, telefonieren → **telefoniert**, passieren → **passiert**.',
        'Les participes changent de forme avec les préfixes :\n\n- **Séparables** : ge- se place **au milieu** : aufstehen → **aufgestanden**, einkaufen → **eingekauft**, anrufen → **angerufen**.\n- **Inséparables** (be-, ver-, er-, ent-, ge-, zer-, emp-, miss-) : **pas de ge-** : besuchen → **besucht**, verstehen → **verstanden**, bekommen → **bekommen**.\n- **Verbes en -ieren** : **pas de ge-** : studieren → **studiert**, telefonieren → **telefoniert**, passieren → **passiert**.',
      ],
      [
        ['Ich habe um acht Uhr eingekauft.', 'I did the shopping at eight o’clock.', 'J’ai fait les courses à huit heures.'],
        ['Hast du den Film verstanden?', 'Did you understand the film?', 'As-tu compris le film ?'],
        ['Er hat in Leipzig studiert.', 'He studied in Leipzig.', 'Il a étudié à Leipzig.'],
        ['Ich habe lange mit Anna telefoniert.', 'I talked on the phone with Anna for a long time.', 'J’ai longuement téléphoné avec Anna.'],
      ],
    ),
    vocab('sp-perfekt-eingekauft', 'eingekauft', 'shopped (participle of einkaufen)', 'fait les courses (participe de einkaufen)', null, 'EIN-ge-kauft', 'INE-geh-kowft', ['Wir haben gestern eingekauft.', 'We did the shopping yesterday.', 'Nous avons fait les courses hier.']),
    vocab('sp-perfekt-besucht', 'besucht', 'visited (participle of besuchen)', 'visité (participe de besuchen)', null, 'be-SUCHT', 'beh-ZOOKHT', ['Ich habe meine Oma besucht.', 'I visited my grandmother.', 'J’ai rendu visite à ma grand-mère.']),
    vocab('sp-perfekt-studiert', 'studiert', 'studied (participle of studieren)', 'étudié (participe de studieren)', null, 'stu-DIERT', 'shtoo-DEERT', ['Sie hat Medizin studiert.', 'She studied medicine.', 'Elle a étudié la médecine.']),
    fb(
      'sp-pf-e16',
      ['Ich habe gestern Oma ___. (anrufen — Partizip)', 'Ich habe gestern Oma ___. (anrufen — participe)'],
      'angerufen',
      ['Separable: an + ge + rufen.', 'Séparable : an + ge + rufen.'],
    ),
    fb(
      'sp-pf-e17',
      ['Hast du das ___? (verstehen — Partizip)', 'Hast du das ___ ? (verstehen — participe)'],
      'verstanden',
      ['ver- is inseparable: no ge-.', 'ver- est inséparable : pas de ge-.'],
    ),
    fb(
      'sp-pf-e18',
      ['Sie hat in Wien ___. (studieren — Partizip)', 'Sie hat in Wien ___. (studieren — participe)'],
      'studiert',
      ['-ieren verbs take no ge-.', 'Les verbes en -ieren n’ont pas de ge-.'],
    ),
    mc(
      'sp-pf-e19',
      ['Participle of "aufräumen"?', 'Participe de « aufräumen » ?'],
      ['aufgeräumt', 'geaufräumt', 'aufräumt'], ['aufgeräumt', 'geaufräumt', 'aufräumt'], 0,
      ['Separable verb: ge- in the middle.', 'Verbe séparable : ge- au milieu.'],
    ),
    mc(
      'sp-pf-e20',
      ['Participle of "bekommen"?', 'Participe de « bekommen » ?'],
      ['gebekommen', 'bekommen', 'bekommt'], ['gebekommen', 'bekommen', 'bekommt'], 1,
      ['be- is inseparable: no ge-. The participle looks like the infinitive.', 'be- est inséparable : pas de ge-. Le participe ressemble à l’infinitif.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Word order in the Perfekt', 'L’ordre des mots au Perfekt',
      'Questions, negation, subordinate clauses and modals.', 'Questions, négation, subordonnées et modaux.',
    ),
    grammar(
      'sp-pf-order',
      ['Questions and negation', 'Questions et négation'],
      [
        'In **yes/no questions** the helper comes first, the participle stays at the end: **Hast** du das Buch **gelesen**?\n\nIn **W-questions** the question word comes first, the helper is second: **Wo bist** du gestern **gewesen**?\n\n**Negation:** **nicht** goes before the participle (the second part of the frame): Ich habe das Buch **nicht** gelesen. With **kein**, put it before the noun: Ich habe **keine** Zeit gehabt.',
        'Dans les **questions fermées**, l’auxiliaire vient en premier, le participe reste à la fin : **Hast** du das Buch **gelesen** ?\n\nDans les **questions ouvertes**, le mot interrogatif vient en premier, l’auxiliaire est en 2e position : **Wo bist** du gestern **gewesen** ?\n\n**Négation :** **nicht** se place avant le participe (la seconde partie du cadre) : Ich habe das Buch **nicht** gelesen. Avec **kein**, on le place avant le nom : Ich habe **keine** Zeit gehabt.',
      ],
      [
        ['Hast du das Buch gelesen?', 'Have you read the book?', 'As-tu lu le livre ?'],
        ['Wo bist du gestern gewesen?', 'Where were you yesterday?', 'Où étais-tu hier ?'],
        ['Ich habe das Buch nicht gelesen.', 'I did not read the book.', 'Je n’ai pas lu le livre.'],
        ['Ich habe keine Zeit gehabt.', 'I had no time.', 'Je n’ai pas eu le temps.'],
      ],
    ),
    grammar(
      'sp-pf-sub',
      ['Subordinate clauses and the Perfekt', 'Subordonnées et Perfekt'],
      [
        'In a subordinate clause (weil, dass, wenn, als, obwohl …) the conjugated verb goes to the **very end**. In the Perfekt that means the **helper stands after the participle**: **participle + helper**.\n\n- Ich bin müde, weil ich schlecht **geschlafen habe**.\n- Er sagt, dass er gestern nach Hause **gefahren ist**.\n\n**Modals** are mostly used in the **Präteritum** for the past (ich musste, ich wollte, ich konnte), not in the Perfekt: Gestern **musste** ich arbeiten.',
        'Dans une subordonnée (weil, dass, wenn, als, obwohl …), le verbe conjugué va **tout à la fin**. Au Perfekt, cela signifie que l’**auxiliaire se place après le participe** : **participe + auxiliaire**.\n\n- Ich bin müde, weil ich schlecht **geschlafen habe**.\n- Er sagt, dass er gestern nach Hause **gefahren ist**.\n\nLes **modaux** s’emploient surtout au **Präteritum** pour le passé (ich musste, ich wollte, ich konnte), pas au Perfekt : Gestern **musste** ich arbeiten.',
      ],
      [
        ['Ich bin müde, weil ich schlecht geschlafen habe.', 'I am tired because I slept badly.', 'Je suis fatigué parce que j’ai mal dormi.'],
        ['Er sagt, dass er gestern gefahren ist.', 'He says that he drove yesterday.', 'Il dit qu’il a roulé hier.'],
        ['Gestern musste ich arbeiten.', 'Yesterday I had to work.', 'Hier, j’ai dû travailler.'],
      ],
    ),
    wo('sp-pf-e21', ['das', 'gelesen?', 'Hast', 'Buch', 'du'], ['Hast', 'du', 'das', 'Buch', 'gelesen?'], ['Yes/no question: helper first, participle last.', 'Question fermée : auxiliaire en premier, participe à la fin.']),
    wo('sp-pf-e22', ['gewesen?', 'Wo', 'du', 'bist', 'gestern'], ['Wo', 'bist', 'du', 'gestern', 'gewesen?'], ['W-question: question word, helper, subject … participle.', 'Question ouverte : mot interrogatif, auxiliaire, sujet … participe.']),
    wo('sp-pf-e23', ['habe', 'nicht', 'Ich', 'gesehen', 'den', 'Film'], ['Ich', 'habe', 'den', 'Film', 'nicht', 'gesehen'], ['nicht comes before the participle.', 'nicht se place avant le participe.']),

    wrapup(
      '**Frame** — helper (haben / sein) in position 2, participle at the end: Ich habe einen Film gesehen.\n\n**Participles** — regular: ge-…-t (gemacht); irregular: ge-…-en (gesehen, gegangen); mixed: gebracht, gedacht. Learn the strong ones with the verb.\n\n**Haben or sein?** — sein for movement A→B and change of state, plus sein / bleiben / passieren. Everything else uses haben.\n\n**Prefixes** — separable: ge- in the middle (aufgestanden); inseparable and -ieren: no ge- (besucht, studiert).\n\n**Word order** — questions: helper first; nicht before the participle; in subordinate clauses: participle + helper (…, weil ich geschlafen habe).',
      '**Cadre** — auxiliaire (haben / sein) en 2e position, participe à la fin : Ich habe einen Film gesehen.\n\n**Participes** — réguliers : ge-…-t (gemacht) ; irréguliers : ge-…-en (gesehen, gegangen) ; mixtes : gebracht, gedacht. Apprends les forts avec le verbe.\n\n**Haben ou sein ?** — sein pour le mouvement A→B et le changement d’état, plus sein / bleiben / passieren. Tout le reste prend haben.\n\n**Préfixes** — séparables : ge- au milieu (aufgestanden) ; inséparables et -ieren : pas de ge- (besucht, studiert).\n\n**Ordre des mots** — questions : auxiliaire en premier ; nicht avant le participe ; subordonnées : participe + auxiliaire (…, weil ich geschlafen habe).',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: The Perfekt', 'Quiz final : le Perfekt'),
    mc(
      'sp-pf-q1',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich habe gestern Pizza gegessen.', 'Ich gestern habe Pizza gegessen.', 'Ich habe gegessen gestern Pizza.'],
      ['Ich habe gestern Pizza gegessen.', 'Ich gestern habe Pizza gegessen.', 'Ich habe gegessen gestern Pizza.'], 0,
      ['Helper in position 2, participle at the end.', 'Auxiliaire en 2e position, participe à la fin.'],
    ),
    mc(
      'sp-pf-q2',
      ['Which helper? "Wir ___ nach Italien gefahren."', 'Quel auxiliaire ? « Wir ___ nach Italien gefahren. »'],
      ['haben', 'sind', 'hat'], ['haben', 'sind', 'hat'], 1,
      ['Movement → sein; wir → sind.', 'Mouvement → sein ; wir → sind.'],
    ),
    mc(
      'sp-pf-q3',
      ['Which helper? "Er ___ das Fenster geöffnet."', 'Quel auxiliaire ? « Er ___ das Fenster geöffnet. »'],
      ['ist', 'hat', 'bin'], ['ist', 'hat', 'bin'], 1,
      ['With an accusative object and no movement → haben.', 'Avec un COD et sans mouvement → haben.'],
    ),
    fb(
      'sp-pf-q4',
      ['Ich habe gestern ein Buch ___. (schreiben — Partizip)', 'Ich habe gestern ein Buch ___. (schreiben — participe)'],
      'geschrieben',
      ['schreiben → geschrieben.', 'schreiben → geschrieben.'],
    ),
    fb(
      'sp-pf-q5',
      ['Sie ist spät ___. (aufstehen — Partizip)', 'Sie ist spät ___. (aufstehen — participe)'],
      'aufgestanden',
      ['auf + ge + standen.', 'auf + ge + standen.'],
    ),
    fb(
      'sp-pf-q6',
      ['Ich habe zwei Stunden mit Anna ___. (telefonieren — Partizip)', 'Ich habe zwei Stunden mit Anna ___. (telefonieren — participe)'],
      'telefoniert',
      ['-ieren verbs: no ge-.', 'Verbes en -ieren : pas de ge-.'],
    ),
    wo('sp-pf-q7', ['gesehen?', 'Hast', 'den', 'du', 'Film'], ['Hast', 'du', 'den', 'Film', 'gesehen?'],['Question: helper first, participle last.', 'Question : auxiliaire d’abord, participe à la fin.']),
    wo('sp-pf-q8', ['weil', 'Ich', 'bin', 'müde,', 'schlecht', 'ich', 'geschlafen', 'habe'], ['Ich', 'bin', 'müde,', 'weil', 'ich', 'schlecht', 'geschlafen', 'habe'], ['In the subordinate clause: participle + helper at the end.', 'Dans la subordonnée : participe + auxiliaire à la fin.']),
    wo('sp-pf-q9', ['nicht', 'Ich', 'habe', 'gemacht', 'Hausaufgaben', 'meine'], ['Ich', 'habe', 'meine', 'Hausaufgaben', 'nicht', 'gemacht'], ['nicht before the participle.', 'nicht avant le participe.']),
    mc(
      'sp-pf-q10',
      ['What is the participle of "verstehen"?', 'Quel est le participe de « verstehen » ?'],
      ['verstanden', 'geverstanden', 'verstehen'], ['verstanden', 'geverstanden', 'verstehen'], 0,
      ['ver- is inseparable: no ge-.', 'ver- est inséparable : pas de ge-.'],
    ),
    match(
      'sp-pf-q11',
      [
        ['fahren', 'ist gefahren', 'est allé (en véhicule)'],
        ['essen', 'hat gegessen', 'a mangé'],
        ['bleiben', 'ist geblieben', 'est resté'],
        ['besuchen', 'hat besucht', 'a rendu visite'],
      ],
      ['Match each verb with its Perfekt form.', 'Associe chaque verbe à sa forme du Perfekt.'],
    ),
    mc(
      'sp-pf-q12',
      ['Why "Ich habe das Auto gefahren" with haben?', 'Pourquoi « Ich habe das Auto gefahren » avec haben ?'],
      ['There is an accusative object (das Auto)', 'fahren always takes haben', 'Because of the past tense'], ['Il y a un COD à l’accusatif (das Auto)', 'fahren prend toujours haben', 'À cause du passé'], 0,
      ['With an accusative object, fahren takes haben; for movement alone it takes sein.', 'Avec un COD à l’accusatif, fahren prend haben ; pour le mouvement seul, il prend sein.'],
    ),
    lc(
      'sp-pf-q13',
      ['Listen. What did the speaker do yesterday?', 'Écoute. Qu’a fait la personne hier ?'],
      'Gestern habe ich lange geschlafen.',
      ['Slept for a long time', 'Worked a long time', 'Travelled far'], ['A longuement dormi', 'A longtemps travaillé', 'A voyagé loin'], 0,
      ['geschlafen = slept.', 'geschlafen = dormi.'],
    ),
    lc(
      'sp-pf-q14',
      ['Listen. Where did they go?', 'Écoute. Où sont-ils allés ?'],
      'Wir sind letzten Sommer nach Spanien geflogen.',
      ['To Spain by plane', 'To Italy by car', 'To Spain by train'], ['En Espagne en avion', 'En Italie en voiture', 'En Espagne en train'], 0,
      ['geflogen = flown (fliegen).', 'geflogen = volé, pris l’avion (fliegen).'],
    ),
  ],
});

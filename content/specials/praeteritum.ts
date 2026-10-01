import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const praeteritum = defineSpecial({
  slug: 'praeteritum',
  number: 4,
  group: 'verbs',
  levels: ['A2', 'B1'],
  related: ['a2-l10', 'a2-l24', 'b1-l14'],
  title: ['Das Präteritum', 'The Präteritum (simple past)', 'Le Präteritum (prétérit)'],
  theme: [
    'The written and storytelling past: regular and irregular endings, the must-know verbs, and when to choose it over the Perfekt',
    'Le passé de l’écrit et du récit : terminaisons régulières et irrégulières, les verbes indispensables, et quand le préférer au Perfekt',
  ],
  goals: [
    'Recognise and form the Präteritum of regular verbs (-te)',
    'Learn the irregular stems of the most frequent verbs',
    'Master war, hatte and the modals in the past',
    'Know when to use Präteritum and when Perfekt',
    'Read a simple story or a news report in the Präteritum',
  ],
  goalsFr: [
    'Reconnaître et former le Präteritum des verbes réguliers (-te)',
    'Apprendre les radicaux irréguliers des verbes les plus fréquents',
    'Maîtriser war, hatte et les modaux au passé',
    'Savoir quand employer le Präteritum et quand le Perfekt',
    'Lire un récit simple ou un article d’actualité au Präteritum',
  ],
  steps: [
    intro(
      'Es war einmal …', 'Il était une fois …',
      'Fairy tales, novels, newspaper reports and biographies are written in the Präteritum. In everyday speech it survives with a handful of very frequent verbs: war, hatte, konnte, wollte, musste. Learn those, and you can read almost any German text about the past.',
      'Les contes, romans, articles de presse et biographies sont écrits au Präteritum. Dans la langue parlée, il survit avec une poignée de verbes très fréquents : war, hatte, konnte, wollte, musste. Apprends-les et tu pourras lire presque tous les textes allemands sur le passé.',
      [
        'Form regular and irregular Präteritum',
        'Use war, hatte and the modals',
        'Choose between Präteritum and Perfekt',
        'Read stories and reports',
      ],
      [
        'Former le Präteritum régulier et irrégulier',
        'Employer war, hatte et les modaux',
        'Choisir entre Präteritum et Perfekt',
        'Lire des récits et des articles',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'War, hatte and the modals', 'War, hatte et les modaux',
      'The Präteritum you also hear in conversation.', 'Le Präteritum que l’on entend aussi à l’oral.',
    ),
    grammar(
      'sp-pr-sein-haben',
      ['sein and haben in the Präteritum', 'sein et haben au Präteritum'],
      [
        'These two verbs are used in the Präteritum **even in speech**, instead of the Perfekt:\n\n- **sein** → war, warst, war, waren, wart, waren\n- **haben** → hatte, hattest, hatte, hatten, hattet, hatten\n\n**Note:** the **ich** and **er/sie/es** forms are always **identical** in the Präteritum.',
        'Ces deux verbes s’emploient au Präteritum **même à l’oral**, à la place du Perfekt :\n\n- **sein** → war, warst, war, waren, wart, waren\n- **haben** → hatte, hattest, hatte, hatten, hattet, hatten\n\n**À noter :** les formes **ich** et **er/sie/es** sont toujours **identiques** au Präteritum.',
      ],
      [
        ['ich war · ich hatte', 'I was · I had', 'j’étais · j’avais'],
        ['du warst · du hattest', 'you were · you had', 'tu étais · tu avais'],
        ['er war · er hatte', 'he was · he had', 'il était · il avait'],
        ['wir waren · wir hatten', 'we were · we had', 'nous étions · nous avions'],
        ['ihr wart · ihr hattet', 'you (pl.) were · had', 'vous étiez · vous aviez'],
        ['sie waren · sie hatten', 'they were · had', 'ils étaient · ils avaient'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-pr-modals',
      ['Modal verbs in the past', 'Les verbes modaux au passé'],
      [
        'For modal verbs the Präteritum is the standard past tense in speech as well. They drop the umlaut and add **-te**:\n\n- können → **konnte** · müssen → **musste**\n- wollen → **wollte** · dürfen → **durfte**\n- sollen → **sollte** · mögen → **mochte**\n\nEndings: ich konnte, du konntest, er konnte, wir konnten, ihr konntet, sie konnten.\n\n- Gestern **musste** ich lange arbeiten.\n- Als Kind **konnte** ich nicht schwimmen.',
        'Pour les verbes modaux, le Präteritum est le temps du passé standard, y compris à l’oral. Ils perdent le tréma et ajoutent **-te** :\n\n- können → **konnte** · müssen → **musste**\n- wollen → **wollte** · dürfen → **durfte**\n- sollen → **sollte** · mögen → **mochte**\n\nTerminaisons : ich konnte, du konntest, er konnte, wir konnten, ihr konntet, sie konnten.\n\n- Gestern **musste** ich lange arbeiten.\n- Als Kind **konnte** ich nicht schwimmen.',
      ],
      [
        ['Gestern musste ich lange arbeiten.', 'Yesterday I had to work for a long time.', 'Hier, j’ai dû travailler longtemps.'],
        ['Als Kind konnte ich nicht schwimmen.', 'As a child I could not swim.', 'Enfant, je ne savais pas nager.'],
        ['Wir wollten ins Kino gehen, aber wir hatten keine Zeit.', 'We wanted to go to the cinema, but we had no time.', 'Nous voulions aller au cinéma, mais nous n’avions pas le temps.'],
      ],
    ),
    vocab('sp-praeteritum-war', 'war', 'was (sein)', 'était (sein)', null, 'WAR', 'VAHR', ['Ich war gestern krank.', 'I was ill yesterday.', 'J’étais malade hier.']),
    vocab('sp-praeteritum-hatte', 'hatte', 'had (haben)', 'avait (haben)', null, 'HAT-te', 'HAT-eh', ['Wir hatten ein tolles Wochenende.', 'We had a great weekend.', 'Nous avons passé un super week-end.']),
    vocab('sp-praeteritum-musste', 'musste', 'had to (müssen)', 'devait (müssen)', null, 'MUS-te', 'MOOS-teh', ['Sie musste früh aufstehen.', 'She had to get up early.', 'Elle devait se lever tôt.']),
    vocab('sp-praeteritum-konnte', 'konnte', 'could (können)', 'pouvait (können)', null, 'KON-te', 'KON-teh', ['Er konnte nicht kommen.', 'He could not come.', 'Il n’a pas pu venir.']),
    mc(
      'sp-pr-e1',
      ['Präteritum of "sein" (ich)?', 'Präteritum de « sein » (ich) ?'],
      ['war', 'bin', 'wäre'], ['war', 'bin', 'wäre'], 0,
      ['ich war, er war: identical forms.', 'ich war, er war : formes identiques.'],
    ),
    mc(
      'sp-pr-e2',
      ['"Wir ___ gestern keine Zeit." (haben)', '« Wir ___ gestern keine Zeit. » (haben)'],
      ['haben', 'hatten', 'hatte'], ['haben', 'hatten', 'hatte'], 1,
      ['wir → hatten.', 'wir → hatten.'],
    ),
    fb(
      'sp-pr-e3',
      ['Gestern ___ ich lange arbeiten. (müssen)', 'Gestern ___ ich lange arbeiten. (müssen)'],
      'musste',
      ['Modal in the Präteritum: müssen → musste (no umlaut).', 'Modal au Präteritum : müssen → musste (sans tréma).'],
    ),
    fb(
      'sp-pr-e4',
      ['Als Kind ___ ich nicht schwimmen. (können)', 'Als Kind ___ ich nicht schwimmen. (können)'],
      'konnte',
      ['können → konnte.', 'können → konnte.'],
    ),
    fb(
      'sp-pr-e5',
      ['Ihr ___ gestern im Kino. (sein)', 'Ihr ___ gestern im Kino. (sein)'],
      'wart',
      ['ihr → wart.', 'ihr → wart.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Regular verbs', 'Verbes réguliers',
      'Stem + -te + personal ending.', 'Radical + -te + terminaison personnelle.',
    ),
    grammar(
      'sp-pr-regular',
      ['Regular verbs: stem + -te', 'Verbes réguliers : radical + -te'],
      [
        'Regular verbs keep their stem and add **-te** plus the personal endings:\n\n- ich mach**te**, du mach**test**, er mach**te**\n- wir mach**ten**, ihr mach**tet**, sie mach**ten**\n\nIf the stem ends in **-t**, **-d**, **-chn**, **-ffn**, **-gn**: add **-ete**: arbeiten → er arbeit**ete**, baden → ich bad**ete**, öffnen → sie öffn**ete**.',
        'Les verbes réguliers gardent leur radical et ajoutent **-te** plus les terminaisons personnelles :\n\n- ich mach**te**, du mach**test**, er mach**te**\n- wir mach**ten**, ihr mach**tet**, sie mach**ten**\n\nSi le radical finit par **-t**, **-d**, **-chn**, **-ffn**, **-gn** : ajoute **-ete** : arbeiten → er arbeit**ete**, baden → ich bad**ete**, öffnen → sie öffn**ete**.',
      ],
      [
        ['ich machte · du machtest · er machte', 'I made · you made · he made', 'je faisais · tu faisais · il faisait'],
        ['wir machten · ihr machtet · sie machten', 'we made · you made · they made', 'nous faisions · vous faisiez · ils faisaient'],
        ['Er arbeitete in einer Bank.', 'He worked in a bank.', 'Il travaillait dans une banque.'],
        ['Sie öffnete das Fenster.', 'She opened the window.', 'Elle ouvrit la fenêtre.'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-pr-regular-use',
      ['Regular verbs in a text', 'Verbes réguliers dans un texte'],
      [
        'Typical text: all verbs in the Präteritum, one after the other, with **-te** forms:\n\n- Anna **wohnte** in Hamburg. Sie **arbeitete** in einem Café und **lernte** abends Spanisch. Jeden Samstag **besuchte** sie ihre Oma und **kochte** für sie.\n\nSeparable verbs split just like in the present tense: Er **holte** sie am Bahnhof **ab**. Sie **kaufte** im Supermarkt **ein**.',
        'Texte typique : tous les verbes au Präteritum, l’un après l’autre, avec des formes en **-te** :\n\n- Anna **wohnte** in Hamburg. Sie **arbeitete** in einem Café und **lernte** abends Spanisch. Jeden Samstag **besuchte** sie ihre Oma und **kochte** für sie.\n\nLes verbes séparables se séparent comme au présent : Er **holte** sie am Bahnhof **ab**. Sie **kaufte** im Supermarkt **ein**.',
      ],
      [
        ['Anna wohnte in Hamburg.', 'Anna lived in Hamburg.', 'Anna habitait à Hambourg.'],
        ['Sie kaufte im Supermarkt ein.', 'She shopped at the supermarket.', 'Elle faisait les courses au supermarché.'],
        ['Er holte sie am Bahnhof ab.', 'He picked her up at the station.', 'Il alla la chercher à la gare.'],
      ],
    ),
    vocab('sp-praeteritum-wohnte', 'wohnte', 'lived (wohnen)', 'habitait (wohnen)', null, 'WOHN-te', 'VOHN-teh', ['Er wohnte lange in München.', 'He lived in Munich for a long time.', 'Il a longtemps habité à Munich.']),
    vocab('sp-praeteritum-arbeitete', 'arbeitete', 'worked (arbeiten)', 'travaillait (arbeiten)', null, 'AR-bei-te-te', 'AR-by-teh-teh', ['Sie arbeitete in einem Hotel.', 'She worked in a hotel.', 'Elle travaillait dans un hôtel.']),
    fb(
      'sp-pr-e6',
      ['Er ___ in Berlin. (wohnen)', 'Er ___ in Berlin. (wohnen)'],
      'wohnte',
      ['wohnen → wohnte.', 'wohnen → wohnte.'],
    ),
    fb(
      'sp-pr-e7',
      ['Wir ___ Fußball. (spielen)', 'Wir ___ Fußball. (spielen)'],
      'spielten',
      ['wir → spielten.', 'wir → spielten.'],
    ),
    fb(
      'sp-pr-e8',
      ['Sie ___ in einem Café. (arbeiten)', 'Sie ___ in einem Café. (arbeiten)'],
      'arbeitete',
      ['Stem ends in -t: add -ete.', 'Radical en -t : ajoute -ete.'],
    ),
    mc(
      'sp-pr-e9',
      ['Präteritum of "lernen" (du)?', 'Präteritum de « lernen » (du) ?'],
      ['lerntest', 'lernst', 'lerntet'], ['lerntest', 'lernst', 'lerntet'], 0,
      ['du → -test.', 'du → -test.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Irregular verbs', 'Verbes irréguliers',
      'Change the vowel, add the ending directly.', 'Change la voyelle, ajoute la terminaison directement.',
    ),
    grammar(
      'sp-pr-irregular',
      ['Irregular verbs: new stem, no -te', 'Verbes irréguliers : nouveau radical, pas de -te'],
      [
        '**Irregular (strong) verbs** change their stem vowel and take **no -te**. The **ich** and **er/sie/es** forms have **no ending**:\n\n- gehen → **ging** · kommen → **kam** · sehen → **sah**\n- schreiben → **schrieb** · lesen → **las** · fahren → **fuhr**\n- finden → **fand** · sprechen → **sprach** · essen → **aß**\n- geben → **gab** · nehmen → **nahm** · schlafen → **schlief**\n\nConjugation: ich **ging**, du ging**st**, er **ging**, wir ging**en**, ihr ging**t**, sie ging**en**.',
        'Les **verbes irréguliers (forts)** changent de voyelle et ne prennent **pas de -te**. Les formes **ich** et **er/sie/es** n’ont **aucune terminaison** :\n\n- gehen → **ging** · kommen → **kam** · sehen → **sah**\n- schreiben → **schrieb** · lesen → **las** · fahren → **fuhr**\n- finden → **fand** · sprechen → **sprach** · essen → **aß**\n- geben → **gab** · nehmen → **nahm** · schlafen → **schlief**\n\nConjugaison : ich **ging**, du ging**st**, er **ging**, wir ging**en**, ihr ging**t**, sie ging**en**.',
      ],
      [
        ['Er ging nach Hause.', 'He went home.', 'Il rentra chez lui.'],
        ['Wir sahen einen alten Film.', 'We watched an old film.', 'Nous avons regardé un vieux film.'],
        ['Sie schrieb einen langen Brief.', 'She wrote a long letter.', 'Elle écrivit une longue lettre.'],
        ['Ich fuhr mit dem Zug nach Berlin.', 'I took the train to Berlin.', 'Je suis allé à Berlin en train.'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-pr-mixed',
      ['Mixed verbs', 'Verbes mixtes'],
      [
        '**Mixed verbs** change their stem **and** take **-te**:\n\n- bringen → **brachte** · denken → **dachte**\n- kennen → **kannte** · wissen → **wusste**\n- nennen → **nannte** · rennen → **rannte**\n\nThey are few, but very frequent. Careful: **wissen → wusste** (not "wisste").\n\nTip: learn irregular verbs in groups of three forms: **Infinitiv – Präteritum – Partizip II** (gehen – ging – gegangen, bringen – brachte – gebracht).',
        'Les **verbes mixtes** changent de radical **et** prennent **-te** :\n\n- bringen → **brachte** · denken → **dachte**\n- kennen → **kannte** · wissen → **wusste**\n- nennen → **nannte** · rennen → **rannte**\n\nIls sont peu nombreux, mais très fréquents. Attention : **wissen → wusste** (pas « wisste »).\n\nConseil : apprends les verbes irréguliers par séries de trois formes : **Infinitiv – Präteritum – Partizip II** (gehen – ging – gegangen, bringen – brachte – gebracht).',
      ],
      [
        ['Er brachte mir Blumen.', 'He brought me flowers.', 'Il m’apporta des fleurs.'],
        ['Ich wusste nicht, wo er wohnte.', 'I did not know where he lived.', 'Je ne savais pas où il habitait.'],
        ['Sie kannte den Weg nicht.', 'She did not know the way.', 'Elle ne connaissait pas le chemin.'],
      ],
    ),
    vocab('sp-praeteritum-ging', 'ging', 'went (gehen)', 'allait (gehen)', null, 'GING', 'GING', ['Er ging früh ins Bett.', 'He went to bed early.', 'Il alla se coucher tôt.']),
    vocab('sp-praeteritum-kam', 'kam', 'came (kommen)', 'venait (kommen)', null, 'KAM', 'KAHM', ['Sie kam spät nach Hause.', 'She came home late.', 'Elle rentra tard à la maison.']),
    vocab('sp-praeteritum-sah', 'sah', 'saw (sehen)', 'voyait (sehen)', null, 'SAH', 'ZAH', ['Ich sah ihn im Park.', 'I saw him in the park.', 'Je l’ai vu dans le parc.']),
    vocab('sp-praeteritum-brachte', 'brachte', 'brought (bringen)', 'apportait (bringen)', null, 'BRACH-te', 'BRAKH-teh', ['Er brachte uns Kaffee.', 'He brought us coffee.', 'Il nous apporta du café.']),
    mc(
      'sp-pr-e10',
      ['Präteritum of "gehen" (er)?', 'Präteritum de « gehen » (er) ?'],
      ['ging', 'gehte', 'gegangen'], ['ging', 'gehte', 'gegangen'], 0,
      ['Irregular: gehen – ging – gegangen.', 'Irrégulier : gehen – ging – gegangen.'],
    ),
    mc(
      'sp-pr-e11',
      ['Präteritum of "kommen" (ich)?', 'Präteritum de « kommen » (ich) ?'],
      ['kommte', 'kam', 'gekommen'], ['kommte', 'kam', 'gekommen'], 1,
      ['kommen – kam – gekommen.', 'kommen – kam – gekommen.'],
    ),
    fb(
      'sp-pr-e12',
      ['Er ___ einen langen Brief. (schreiben)', 'Er ___ einen langen Brief. (schreiben)'],
      'schrieb',
      ['schreiben – schrieb – geschrieben.', 'schreiben – schrieb – geschrieben.'],
    ),
    fb(
      'sp-pr-e13',
      ['Wir ___ einen Film. (sehen)', 'Wir ___ einen Film. (sehen)'],
      'sahen',
      ['sehen – sah; wir → sahen.', 'sehen – sah ; wir → sahen.'],
    ),
    fb(
      'sp-pr-e14',
      ['Ich ___ nicht, wo er wohnt. (wissen — Präteritum)', 'Ich ___ nicht, wo er wohnt. (wissen — Präteritum)'],
      'wusste',
      ['Mixed: wissen → wusste.', 'Mixte : wissen → wusste.'],
    ),
    match(
      'sp-pr-e15',
      [
        ['gehen', 'ging', 'ging'],
        ['sehen', 'sah', 'sah'],
        ['fahren', 'fuhr', 'fuhr'],
        ['nehmen', 'nahm', 'nahm'],
        ['finden', 'fand', 'fand'],
      ],
      ['Match each infinitive with its Präteritum form.', 'Associe chaque infinitif à sa forme du Präteritum.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Präteritum or Perfekt?', 'Präteritum ou Perfekt ?',
      'Same meaning, different register.', 'Même sens, registre différent.',
    ),
    grammar(
      'sp-pr-choice',
      ['Which tense in which situation?', 'Quel temps dans quelle situation ?'],
      [
        'Both tenses talk about the past. The choice depends on the situation:\n\n- **Perfekt**: **speaking**, informal writing (messages, e-mails to friends), short everyday reports, in the **south** especially.\n- **Präteritum**: **written** German: novels, fairy tales, newspapers, reports, biographies. Also in speech with **sein, haben and the modals**, and a few frequent verbs (gab, kam, ging, wusste, dachte).\n\n- Spoken: Gestern **bin** ich ins Kino **gegangen**.\n- Written: Am 3. Mai **ging** der Mann zum Bahnhof.',
        'Les deux temps parlent du passé. Le choix dépend de la situation :\n\n- **Perfekt** : à l’**oral**, écrit informel (messages, e-mails à des amis), petits comptes rendus du quotidien, surtout dans le **sud**.\n- **Präteritum** : allemand **écrit** : romans, contes, journaux, rapports, biographies. À l’oral aussi avec **sein, haben et les modaux**, et quelques verbes très fréquents (gab, kam, ging, wusste, dachte).\n\n- Oral : Gestern **bin** ich ins Kino **gegangen**.\n- Écrit : Am 3. Mai **ging** der Mann zum Bahnhof.',
      ],
      [
        ['Ich war gestern im Kino.', 'I was at the cinema yesterday.', 'J’étais au cinéma hier.'],
        ['Gestern bin ich ins Kino gegangen.', 'Yesterday I went to the cinema.', 'Hier, je suis allé au cinéma.'],
        ['Es gab keinen Zug mehr.', 'There was no train any more.', 'Il n’y avait plus de train.'],
      ],
    ),
    grammar(
      'sp-pr-subordinate',
      ['Präteritum in subordinate clauses and with als', 'Präteritum dans les subordonnées et avec als'],
      [
        'In a subordinate clause the conjugated verb goes to the end as usual: ..., weil er krank **war**; ..., dass sie keine Zeit **hatte**.\n\nFor a **single event in the past** use **als**: **Als** ich ein Kind **war**, wohnte ich in Wien. For **repetition**, use **wenn**: **Wenn** ich Zeit hatte, besuchte ich meine Oma.\n\nThe Präteritum is often combined with **dann, danach, plötzlich, später** to tell stories chronologically.',
        'Dans une subordonnée, le verbe conjugué va à la fin comme d’habitude : ..., weil er krank **war** ; ..., dass sie keine Zeit **hatte**.\n\nPour un **événement unique au passé**, on emploie **als** : **Als** ich ein Kind **war**, wohnte ich in Wien. Pour la **répétition**, on emploie **wenn** : **Wenn** ich Zeit hatte, besuchte ich meine Oma.\n\nLe Präteritum se combine souvent avec **dann, danach, plötzlich, später** pour raconter chronologiquement.',
      ],
      [
        ['Als ich ein Kind war, wohnte ich in Wien.', 'When I was a child, I lived in Vienna.', 'Quand j’étais enfant, j’habitais à Vienne.'],
        ['Er blieb zu Hause, weil er krank war.', 'He stayed home because he was ill.', 'Il resta chez lui parce qu’il était malade.'],
        ['Plötzlich klingelte das Telefon.', 'Suddenly the phone rang.', 'Soudain, le téléphone sonna.'],
      ],
    ),
    vocab('sp-praeteritum-damals', 'damals', 'back then', 'à l’époque', null, 'DA-mals', 'DAH-mahls', ['Damals gab es kein Internet.', 'Back then there was no internet.', 'À l’époque, il n’y avait pas d’internet.']),
    vocab('sp-praeteritum-ploetzlich', 'plötzlich', 'suddenly', 'soudain', null, 'PLÖTZ-lich', 'PLÖTS-likh', ['Plötzlich war das Licht aus.', 'Suddenly the light was out.', 'Soudain, la lumière était éteinte.']),
    mc(
      'sp-pr-e16',
      ['Which tense for a message to a friend?', 'Quel temps pour un message à un ami ?'],
      ['Perfekt', 'Präteritum of all verbs', 'Futur'], ['Perfekt', 'Präteritum de tous les verbes', 'Futur'], 0,
      ['Informal speech and writing → Perfekt (except war, hatte, modals).', 'Oral et écrit informel → Perfekt (sauf war, hatte, modaux).'],
    ),
    mc(
      'sp-pr-e17',
      ['Which word fits? "___ ich ein Kind war, wohnte ich in Wien."', 'Quel mot convient ? « ___ ich ein Kind war, wohnte ich in Wien. »'],
      ['Wenn', 'Als', 'Weil'], ['Wenn', 'Als', 'Weil'], 1,
      ['als = a single past period or event.', 'als = une période ou un événement unique au passé.'],
    ),
    mc(
      'sp-pr-e18',
      ['Which tense do you find in a fairy tale?', 'Quel temps trouve-t-on dans un conte ?'],
      ['Präteritum', 'Perfekt', 'Präsens'], ['Präteritum', 'Perfekt', 'Präsens'], 0,
      ['Stories and novels use the Präteritum.', 'Les contes et romans utilisent le Präteritum.'],
    ),
    wo('sp-pr-e19', ['Als', 'war,', 'Kind', 'ich', 'ein', 'wohnte', 'ich', 'in', 'Wien'], ['Als', 'ich', 'ein', 'Kind', 'war,', 'wohnte', 'ich', 'in', 'Wien'], ['After the subordinate clause, the main verb comes first.', 'Après la subordonnée, le verbe principal vient en premier.']),
    wo('sp-pr-e20', ['klingelte', 'Plötzlich', 'das', 'Telefon'], ['Plötzlich', 'klingelte', 'das', 'Telefon'], ['Time word first, verb in position 2.', 'Mot de temps en premier, verbe en 2e position.']),

    wrapup(
      '**sein / haben / modals** — war, hatte, konnte, musste, wollte, durfte, sollte: used even in speech.\n\n**Regular** — stem + -te: machte, wohnte; after -t / -d: -ete (arbeitete).\n\n**Irregular** — new stem, no -te, no ending for ich and er/sie/es: ging, kam, sah, schrieb, fuhr, nahm.\n\n**Mixed** — new stem + -te: brachte, dachte, kannte, wusste.\n\n**Choice** — Perfekt for talking and informal writing; Präteritum for stories, newspapers and formal texts; als (single event) vs wenn (repeated).',
      '**sein / haben / modaux** — war, hatte, konnte, musste, wollte, durfte, sollte : employés même à l’oral.\n\n**Réguliers** — radical + -te : machte, wohnte ; après -t / -d : -ete (arbeitete).\n\n**Irréguliers** — nouveau radical, pas de -te, aucune terminaison pour ich et er/sie/es : ging, kam, sah, schrieb, fuhr, nahm.\n\n**Mixtes** — nouveau radical + -te : brachte, dachte, kannte, wusste.\n\n**Choix** — Perfekt pour parler et écrire de façon informelle ; Präteritum pour les récits, la presse et les textes formels ; als (événement unique) vs wenn (répétition).',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Präteritum', 'Quiz final : le Präteritum'),
    mc(
      'sp-pr-q1',
      ['Präteritum of "haben" (wir)?', 'Präteritum de « haben » (wir) ?'],
      ['hatten', 'hattet', 'habten'], ['hatten', 'hattet', 'habten'], 0,
      ['wir → hatten.', 'wir → hatten.'],
    ),
    mc(
      'sp-pr-q2',
      ['Präteritum of "sehen" (er)?', 'Präteritum de « sehen » (er) ?'],
      ['sah', 'sehte', 'gesehen'], ['sah', 'sehte', 'gesehen'], 0,
      ['sehen – sah – gesehen.', 'sehen – sah – gesehen.'],
    ),
    mc(
      'sp-pr-q3',
      ['Which is the correct Präteritum of "wissen" (ich)?', 'Quel est le Präteritum correct de « wissen » (ich) ?'],
      ['wusste', 'wisste', 'weiß'], ['wusste', 'wisste', 'weiß'], 0,
      ['Mixed verb: wissen – wusste – gewusst.', 'Verbe mixte : wissen – wusste – gewusst.'],
    ),
    fb(
      'sp-pr-q4',
      ['Gestern ___ ich krank. (sein)', 'Gestern ___ ich krank. (sein)'],
      'war',
      ['ich → war.', 'ich → war.'],
    ),
    fb(
      'sp-pr-q5',
      ['Er ___ nach Hause. (gehen)', 'Er ___ nach Hause. (gehen)'],
      'ging',
      ['gehen – ging.', 'gehen – ging.'],
    ),
    fb(
      'sp-pr-q6',
      ['Wir ___ am Wochenende viel Zeit. (haben)', 'Wir ___ am Wochenende viel Zeit. (haben)'],
      'hatten',
      ['wir → hatten.', 'wir → hatten.'],
    ),
    fb(
      'sp-pr-q7',
      ['Sie ___ früh aufstehen. (müssen)', 'Sie ___ früh aufstehen. (müssen)'],
      'musste',
      ['müssen → musste.', 'müssen → musste.'],
    ),
    wo('sp-pr-q8', ['ging', 'Er', 'zum', 'Bahnhof'], ['Er', 'ging', 'zum', 'Bahnhof'], ['Verb in position 2.', 'Verbe en 2e position.']),
    wo('sp-pr-q9', ['weil', 'Er', 'blieb', 'zu', 'Hause,', 'er', 'krank', 'war'], ['Er', 'blieb', 'zu', 'Hause,', 'weil', 'er', 'krank', 'war'], ['After weil the verb goes last.', 'Après weil, le verbe va à la fin.']),
    match(
      'sp-pr-q10',
      [
        ['bringen', 'brachte', 'brachte'],
        ['schreiben', 'schrieb', 'schrieb'],
        ['kommen', 'kam', 'kam'],
        ['arbeiten', 'arbeitete', 'arbeitete'],
      ],
      ['Match each verb with its Präteritum form.', 'Associe chaque verbe à sa forme du Präteritum.'],
    ),
    mc(
      'sp-pr-q11',
      ['Which word? "___ ich zehn Jahre alt war, zog meine Familie nach Köln."', 'Quel mot ? « ___ ich zehn Jahre alt war, zog meine Familie nach Köln. »'],
      ['Als', 'Wenn', 'Dass'], ['Als', 'Wenn', 'Dass'], 0,
      ['als + Präteritum for a single event or period in the past.', 'als + Präteritum pour un événement ou une période unique au passé.'],
    ),
    mc(
      'sp-pr-q12',
      ['In a newspaper you most probably read…', 'Dans un journal, on lit probablement…'],
      ['Der Präsident kam am Montag in Berlin an.', 'Der Präsident ist am Montag in Berlin angekommen.', 'Der Präsident kommt gerade an.'],
      ['Der Präsident kam am Montag in Berlin an.', 'Der Präsident ist am Montag in Berlin angekommen.', 'Der Präsident kommt gerade an.'], 0,
      ['Written reports use the Präteritum.', 'Les articles écrits utilisent le Präteritum.'],
    ),
    lc(
      'sp-pr-q13',
      ['Listen. What was the weather like?', 'Écoute. Quel temps faisait-il ?'],
      'Gestern war das Wetter sehr schlecht.',
      ['Very bad', 'Very good', 'Hot'], ['Très mauvais', 'Très beau', 'Chaud'], 0,
      ['schlecht = bad.', 'schlecht = mauvais.'],
    ),
    lc(
      'sp-pr-q14',
      ['Listen. Why could he not come?', 'Écoute. Pourquoi n’a-t-il pas pu venir ?'],
      'Er konnte nicht kommen, weil er arbeiten musste.',
      ['He had to work', 'He was ill', 'He had no car'], ['Il devait travailler', 'Il était malade', 'Il n’avait pas de voiture'], 0,
      ['arbeiten musste = had to work.', 'arbeiten musste = devait travailler.'],
    ),
  ],
});

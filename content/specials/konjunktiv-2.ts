import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const konjunktiv2 = defineSpecial({
  slug: 'konjunktiv-2',
  number: 5,
  group: 'verbs',
  levels: ['A2', 'B1'],
  related: ['a2-l14', 'a2-l18', 'b1-l1', 'b1-l2', 'b1-l11', 'b1-l26'],
  bookRefs: [{ book: 'daf-grammatiktrainer', start: 235, end: 239 }],
  title: ['Konjunktiv II', 'Subjunctive II', 'Konjunktiv II (le conditionnel)'],
  theme: [
    'Polite requests, wishes, advice and unreal conditions — in the present and the past',
    'Demandes polies, souhaits, conseils et conditions irréelles — au présent et au passé',
  ],
  goals: [
    'Know the four jobs of Konjunktiv II',
    'Form würde + infinitive, and hätte / wäre / könnte / müsste / sollte',
    'Build unreal wenn-sentences and wishes',
    'Talk about the past with hätte / wäre + Partizip II',
    'Give advice and ask politely',
  ],
  goalsFr: [
    'Connaître les quatre emplois du Konjunktiv II',
    'Former würde + infinitif, et hätte / wäre / könnte / müsste / sollte',
    'Construire des phrases en wenn irréelles et des souhaits',
    'Parler du passé avec hätte / wäre + participe II',
    'Donner des conseils et demander poliment',
  ],
  steps: [
    intro(
      'Wenn ich reich wäre …', 'Si j’étais riche …',
      'The Konjunktiv II is German’s "what if" mood. It is the one that makes you sound polite, lets you dream, and gives gentle advice. It looks scary, but in everyday speech you really need only a handful of forms.',
      'Le Konjunktiv II est le mode du « et si… ». C’est lui qui te rend poli, te laisse rêver et donne des conseils en douceur. Il fait peur, mais à l’oral quelques formes suffisent vraiment.',
      [
        'Understand when to use Konjunktiv II',
        'Master würde + infinitive and the "short forms"',
        'Build unreal conditions and wishes',
        'Express regret about the past',
      ],
      [
        'Comprendre quand employer le Konjunktiv II',
        'Maîtriser würde + infinitif et les « formes courtes »',
        'Construire des conditions irréelles et des souhaits',
        'Exprimer un regret sur le passé',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'What is it for?', 'À quoi ça sert ?',
      'Four everyday jobs: politeness, wishes, advice and unreal situations.', 'Quatre usages courants : politesse, souhaits, conseils et situations irréelles.',
    ),
    grammar(
      'sp-k2-uses',
      ['The four jobs of Konjunktiv II', 'Les quatre emplois du Konjunktiv II'],
      [
        'Use Konjunktiv II when something is **not real** or you want to sound **softer**:\n\n- **Polite request** — Könnten Sie mir helfen?\n- **Wish** — Ich wäre gern reich. / Ich hätte gern mehr Zeit.\n- **Advice** — An deiner Stelle würde ich das nicht tun.\n- **Unreal condition** — Wenn ich Zeit hätte, würde ich reisen. (but I don\'t have time)\n\nCompare: *Ich habe Zeit* is a fact; *ich hätte Zeit* is a wish or an "if".',
        'Emploie le Konjunktiv II quand quelque chose est **irréel** ou que tu veux être plus **doux** :\n\n- **Demande polie** — Könnten Sie mir helfen ?\n- **Souhait** — Ich wäre gern reich. / Ich hätte gern mehr Zeit.\n- **Conseil** — An deiner Stelle würde ich das nicht tun.\n- **Condition irréelle** — Wenn ich Zeit hätte, würde ich reisen. (mais je n’ai pas le temps)\n\nComparaison : *Ich habe Zeit* est un fait ; *ich hätte Zeit* est un souhait ou un « si ».',
      ],
      [
        ['Könnten Sie mir bitte helfen?', 'Could you please help me?', 'Pourriez-vous m’aider, s’il vous plaît ?'],
        ['Ich wäre gern reich.', 'I would like to be rich.', 'J’aimerais être riche.'],
        ['An deiner Stelle würde ich warten.', 'If I were you, I would wait.', 'À ta place, j’attendrais.'],
        ['Wenn ich Zeit hätte, würde ich reisen.', 'If I had time, I would travel.', 'Si j’avais le temps, je voyagerais.'],
      ],
    ),
    vocab('sp-konjunktiv-2-wunsch', 'der Wunsch', 'the wish', 'le souhait', 'der', 'WUNSCH', 'dair VOONSH', ['Mein größter Wunsch ist ein Haus am Meer.', 'My greatest wish is a house by the sea.', 'Mon plus grand souhait est une maison au bord de la mer.']),
    vocab('sp-konjunktiv-2-rat', 'der Rat', 'the advice', 'le conseil', 'der', 'RAHT', 'dair RAHT', ['Ich brauche deinen Rat.', 'I need your advice.', 'J’ai besoin de ton conseil.']),
    vocab('sp-konjunktiv-2-vorschlag', 'der Vorschlag', 'the suggestion', 'la proposition', 'der', 'VOR-schlag', 'dair FOR-shlahg', ['Ich habe einen Vorschlag.', 'I have a suggestion.', 'J’ai une proposition.']),
    vocab('sp-konjunktiv-2-hoeflich', 'höflich', 'polite', 'poli', null, 'HÖF-lich', 'HOEF-likh', ['Er ist immer sehr höflich.', 'He is always very polite.', 'Il est toujours très poli.']),
    vocab('sp-konjunktiv-2-wuenschen', 'wünschen', 'to wish', 'souhaiter', null, 'WÜN-schen', 'VUEN-shen', ['Ich wünsche dir viel Glück.', 'I wish you good luck.', 'Je te souhaite bonne chance.']),
    mc(
      'sp-k2-e1',
      ['Which sentence is a polite request?', 'Quelle phrase est une demande polie ?'],
      ['Ich hätte gern einen Kaffee.', 'Gib mir einen Kaffee!', 'Ich will einen Kaffee.'],
      ['Ich hätte gern einen Kaffee.', 'Gib mir einen Kaffee!', 'Ich will einen Kaffee.'], 0,
      ['"Ich hätte gern …" is the softer, polite form.', '« Ich hätte gern … » est la forme douce et polie.'],
    ),
    mc(
      'sp-k2-e2',
      ['"Wenn ich Zeit hätte, würde ich reisen." — what is the reality?', '« Wenn ich Zeit hätte, würde ich reisen. » — quelle est la réalité ?'],
      ['I do not have time.', 'I have a lot of time.', 'I am travelling now.'],
      ['Je n’ai pas le temps.', 'J’ai beaucoup de temps.', 'Je voyage en ce moment.'], 0,
      ['Konjunktiv II marks the situation as unreal: the opposite is true.', 'Le Konjunktiv II marque la situation comme irréelle : c’est le contraire qui est vrai.'],
    ),
    match(
      'sp-k2-e3',
      [
        ['Könnten Sie mir helfen?', 'polite request', 'demande polie'],
        ['An deiner Stelle würde ich warten.', 'advice', 'conseil'],
        ['Ich wäre gern reich.', 'wish', 'souhait'],
        ['Wenn ich fliegen könnte, …', 'unreal condition', 'condition irréelle'],
      ],
      ['Match each sentence with its job.', 'Associe chaque phrase à son emploi.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'The easy way: würde + infinitive', 'La voie facile : würde + infinitif',
      'One helper covers almost every verb.', 'Un seul auxiliaire couvre presque tous les verbes.',
    ),
    grammar(
      'sp-k2-wuerde',
      ['würde + infinitive', 'würde + infinitif'],
      [
        'For nearly every verb, build the Konjunktiv II with **würde** + **infinitive at the end**. It works like a modal verb (same frame):\n\n- ich **würde** … gehen\n- du **würdest** … gehen\n- er/sie/es **würde** … gehen\n- wir **würden** … gehen\n- ihr **würdet** … gehen\n- sie/Sie **würden** … gehen\n\nIt is also the **only** natural option for regular (weak) verbs: *ich machte* looks exactly like the past tense, so Germans say *ich würde machen*.',
        'Pour presque tous les verbes, forme le Konjunktiv II avec **würde** + **infinitif à la fin**. Il fonctionne comme un verbe modal (même cadre) :\n\n- ich **würde** … gehen\n- du **würdest** … gehen\n- er/sie/es **würde** … gehen\n- wir **würden** … gehen\n- ihr **würdet** … gehen\n- sie/Sie **würden** … gehen\n\nC’est aussi la **seule** option naturelle pour les verbes réguliers (faibles) : *ich machte* ressemble au prétérit, donc on dit *ich würde machen*.',
      ],
      [
        ['ich würde gehen', 'I would go', 'j’irais'],
        ['du würdest kommen', 'you would come', 'tu viendrais'],
        ['er würde bleiben', 'he would stay', 'il resterait'],
        ['wir würden kaufen', 'we would buy', 'nous achèterions'],
        ['ihr würdet helfen', 'you (pl.) would help', 'vous aideriez'],
        ['sie würden lernen', 'they would learn', 'ils apprendraient'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-k2-wuerde-use',
      ['Using würde in sentences', 'Employer würde dans les phrases'],
      [
        'Use **würde** for wishes, plans and advice. **gern** makes a wish sound natural:\n\n- Ich **würde** gern ein Auto **kaufen**.\n- **Würdest** du mir bitte das Salz **geben**?\n- Wir **würden** am liebsten am Strand **liegen**.\n\n**Avoid** *würde* with **sein, haben** and the **modal verbs** — they have their own short forms (next chapter): say *ich wäre*, not *ich würde sein*.',
        'Emploie **würde** pour les souhaits, les projets et les conseils. **gern** rend un souhait naturel :\n\n- Ich **würde** gern ein Auto **kaufen**.\n- **Würdest** du mir bitte das Salz **geben** ?\n- Wir **würden** am liebsten am Strand **liegen**.\n\n**Évite** *würde* avec **sein, haben** et les **verbes modaux** — ils ont leurs propres formes courtes (chapitre suivant) : dis *ich wäre*, pas *ich würde sein*.',
      ],
      [
        ['Ich würde gern ein Auto kaufen.', 'I would like to buy a car.', 'J’aimerais acheter une voiture.'],
        ['Würdest du mir bitte das Salz geben?', 'Would you pass me the salt, please?', 'Me passerais-tu le sel, s’il te plaît ?'],
        ['Wir würden am liebsten am Strand liegen.', 'We would most like to lie on the beach.', 'Nous aimerions surtout rester allongés sur la plage.'],
      ],
    ),
    fb(
      'sp-k2-e4',
      ['Ich ___ gern nach Italien fahren. (werden — Konjunktiv II)', 'Ich ___ gern nach Italien fahren. (werden — Konjunktiv II)'],
      'würde',
      ['ich: würde (no ending).', 'ich : würde (sans terminaison).'],
    ),
    fb(
      'sp-k2-e5',
      ['Wir ___ dir gern helfen. (werden — Konjunktiv II)', 'Wir ___ dir gern helfen. (werden — Konjunktiv II)'],
      'würden',
      ['wir takes -n: würden.', 'wir prend -n : würden.'],
    ),
    wo('sp-k2-e6', ['kaufen', 'Ich', 'ein', 'würde', 'Auto', 'gern'], ['Ich', 'würde', 'gern', 'ein', 'Auto', 'kaufen'], ['würde in position 2, infinitive last.', 'würde en 2e position, infinitif en dernier.']),
    mc(
      'sp-k2-e7',
      ['"I would do that." Which is the natural German?', '« Je ferais ça. » Quelle est la formule allemande naturelle ?'],
      ['Ich würde das machen.', 'Ich machte das.', 'Ich machen das.'],
      ['Ich würde das machen.', 'Ich machte das.', 'Ich machen das.'], 0,
      ['"machte" is the past tense. For weak verbs use würde + infinitive.', '« machte » est le prétérit. Pour les verbes faibles, utilise würde + infinitif.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Short forms: hätte, wäre, könnte …', 'Formes courtes : hätte, wäre, könnte …',
      'Seven verbs you should say directly, without würde.', 'Sept verbes à dire directement, sans würde.',
    ),
    grammar(
      'sp-k2-short-1',
      ['hätte and wäre', 'hätte et wäre'],
      [
        '**haben** and **sein** have their own Konjunktiv II forms, formed from the Präteritum (*hatte*, *war*) with an **umlaut** and **-e**:\n\n- haben → ich **hätte**, du **hättest**, er **hätte**, wir **hätten**, ihr **hättet**, sie **hätten**\n- sein → ich **wäre**, du **wärst**, er **wäre**, wir **wären**, ihr **wärt**, sie **wären**\n\nTwo phrases to learn by heart: **Ich hätte gern …** (I would like …) and **Es wäre schön, wenn …** (It would be nice if …).',
        '**haben** et **sein** ont leurs propres formes de Konjunktiv II, construites sur le Präteritum (*hatte*, *war*) avec un **tréma** et **-e** :\n\n- haben → ich **hätte**, du **hättest**, er **hätte**, wir **hätten**, ihr **hättet**, sie **hätten**\n- sein → ich **wäre**, du **wärst**, er **wäre**, wir **wären**, ihr **wärt**, sie **wären**\n\nDeux tournures à apprendre par cœur : **Ich hätte gern …** (je voudrais …) et **Es wäre schön, wenn …** (ce serait bien si …).',
      ],
      [
        ['ich hätte', 'I would have', 'j’aurais'],
        ['du hättest', 'you would have', 'tu aurais'],
        ['wir hätten', 'we would have', 'nous aurions'],
        ['ich wäre', 'I would be', 'je serais'],
        ['du wärst', 'you would be', 'tu serais'],
        ['wir wären', 'we would be', 'nous serions'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-k2-short-2',
      ['Modal verbs and wissen', 'Verbes modaux et wissen'],
      [
        'Modal verbs also have short forms. **sollen** and **wollen** are identical to the Präteritum, while the other three get an **umlaut**:\n\n- können → ich **könnte**\n- müssen → ich **müsste**\n- dürfen → ich **dürfte**\n- sollen → ich **sollte** (advice: *Du solltest mehr schlafen.*)\n- wollen → ich **wollte**\n- wissen → ich **wüsste**\n\n**Käme**, **ginge**, **gäbe** also exist, but you only need to recognise them at this stage.',
        'Les verbes modaux ont aussi des formes courtes. **sollen** et **wollen** sont identiques au Präteritum, les trois autres reçoivent un **tréma** :\n\n- können → ich **könnte**\n- müssen → ich **müsste**\n- dürfen → ich **dürfte**\n- sollen → ich **sollte** (conseil : *Du solltest mehr schlafen.*)\n- wollen → ich **wollte**\n- wissen → ich **wüsste**\n\n**Käme**, **ginge**, **gäbe** existent aussi, mais à ce stade il suffit de les reconnaître.',
      ],
      [
        ['Ich könnte dir morgen helfen.', 'I could help you tomorrow.', 'Je pourrais t’aider demain.'],
        ['Du solltest mehr schlafen.', 'You should sleep more.', 'Tu devrais dormir davantage.'],
        ['Wir müssten früher losgehen.', 'We would have to leave earlier.', 'Nous devrions partir plus tôt.'],
        ['Wenn ich das nur wüsste!', 'If only I knew that!', 'Si seulement je le savais !'],
      ],
    ),
    fb(
      'sp-k2-e8',
      ['Ich ___ gern mehr Zeit. (haben — Konjunktiv II)', 'Ich ___ gern mehr Zeit. (haben — Konjunktiv II)'],
      'hätte',
      ['hatte + umlaut: hätte.', 'hatte + tréma : hätte.'],
    ),
    fb(
      'sp-k2-e9',
      ['Er ___ gern reich. (sein — Konjunktiv II)', 'Er ___ gern reich. (sein — Konjunktiv II)'],
      'wäre',
      ['war + umlaut: wäre.', 'war + tréma : wäre.'],
    ),
    fb(
      'sp-k2-e10',
      ['Du ___ mehr schlafen. (sollen — advice)', 'Du ___ mehr schlafen. (sollen — conseil)'],
      'solltest',
      ['sollen: sollte, with du: solltest.', 'sollen : sollte, avec du : solltest.'],
    ),
    fb(
      'sp-k2-e11',
      ['Wenn ich nur ___, wo mein Schlüssel ist! (wissen)', 'Wenn ich nur ___, wo mein Schlüssel ist ! (wissen)'],
      'wüsste',
      ['wissen: wusste → wüsste.', 'wissen : wusste → wüsste.'],
    ),
    mc(
      'sp-k2-e12',
      ['Ich ___ jetzt gern im Urlaub. (a wish)', 'Ich ___ jetzt gern im Urlaub. (un souhait)'],
      ['wäre', 'bin', 'war'], ['wäre', 'bin', 'war'], 0,
      ['A wish needs Konjunktiv II: wäre.', 'Un souhait demande le Konjunktiv II : wäre.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Unreal conditions and wishes', 'Conditions irréelles et souhaits',
      'Build "if … then …" sentences about things that are not true.', 'Construire des phrases « si … alors … » sur ce qui n’est pas vrai.',
    ),
    grammar(
      'sp-k2-wenn',
      ['The unreal wenn-sentence', 'La phrase irréelle en wenn'],
      [
        'In an unreal condition **both parts** are in Konjunktiv II. The **wenn**-clause sends its verb to the **end**; the main clause starts straight with the verb when it comes second:\n\n- **Wenn** ich viel Geld **hätte**, **würde** ich ein Haus kaufen.\n- Ich **würde** ein Haus kaufen, **wenn** ich viel Geld **hätte**.\n\nA classic: **Wenn ich du wäre, würde ich …** (If I were you, I would …). You can even drop *wenn* and start with the verb: **Hätte** ich viel Geld, **würde** ich …',
        'Dans une condition irréelle, **les deux parties** sont au Konjunktiv II. La proposition en **wenn** envoie son verbe à la **fin** ; la principale commence directement par le verbe quand elle vient en second :\n\n- **Wenn** ich viel Geld **hätte**, **würde** ich ein Haus kaufen.\n- Ich **würde** ein Haus kaufen, **wenn** ich viel Geld **hätte**.\n\nUn classique : **Wenn ich du wäre, würde ich …** (Si j’étais toi, je …). On peut même omettre *wenn* et commencer par le verbe : **Hätte** ich viel Geld, **würde** ich …',
      ],
      [
        ['Wenn ich viel Geld hätte, würde ich reisen.', 'If I had a lot of money, I would travel.', 'Si j’avais beaucoup d’argent, je voyagerais.'],
        ['Wenn ich du wäre, würde ich das Angebot annehmen.', 'If I were you, I would accept the offer.', 'Si j’étais toi, j’accepterais l’offre.'],
        ['Hätte ich Zeit, würde ich kommen.', 'Had I time, I would come.', 'Si j’avais le temps, je viendrais.'],
      ],
    ),
    grammar(
      'sp-k2-wish',
      ['Expressing wishes', 'Exprimer des souhaits'],
      [
        'Three ways to express a wish that is not (yet) real:\n\n- **Ich wünschte, ich …** + Konjunktiv II → Ich wünschte, ich **könnte** fliegen.\n- **Wenn ich nur / doch …** → Wenn ich nur mehr Zeit **hätte**!\n- **Ich wäre gern / hätte gern …** → Ich **wäre** gern Pilot.\n\nThe small words **nur** and **doch** add emotion: *if only!*',
        'Trois façons d’exprimer un souhait qui n’est pas (encore) réel :\n\n- **Ich wünschte, ich …** + Konjunktiv II → Ich wünschte, ich **könnte** fliegen.\n- **Wenn ich nur / doch …** → Wenn ich nur mehr Zeit **hätte** !\n- **Ich wäre gern / hätte gern …** → Ich **wäre** gern Pilot.\n\nLes petits mots **nur** et **doch** ajoutent de l’émotion : *si seulement !*',
      ],
      [
        ['Ich wünschte, ich könnte fliegen.', 'I wish I could fly.', 'J’aimerais pouvoir voler.'],
        ['Wenn ich nur mehr Zeit hätte!', 'If only I had more time!', 'Si seulement j’avais plus de temps !'],
        ['Ich wäre gern Pilot.', 'I would like to be a pilot.', 'J’aimerais être pilote.'],
      ],
    ),
    wo(
      'sp-k2-e13',
      ['würde', 'Wenn', 'reisen', 'ich', 'hätte,', 'Zeit', 'ich'],
      ['Wenn', 'ich', 'Zeit', 'hätte,', 'würde', 'ich', 'reisen'],
      ['wenn-clause first: its verb goes last; then the main verb comes right after the comma.', 'Proposition en wenn d’abord : son verbe va en dernier ; puis le verbe principal suit la virgule.'],
    ),
    mc(
      'sp-k2-e14',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Wenn ich reich wäre, würde ich ein Schiff kaufen.', 'Wenn ich reich wäre, ich würde ein Schiff kaufen.', 'Wenn ich reich bin, würde ich ein Schiff kaufen.'],
      ['Wenn ich reich wäre, würde ich ein Schiff kaufen.', 'Wenn ich reich wäre, ich würde ein Schiff kaufen.', 'Wenn ich reich bin, würde ich ein Schiff kaufen.'], 0,
      ['After a wenn-clause the main clause starts with the verb (position 1 of the 2nd clause), and both parts are Konjunktiv II.', 'Après une proposition en wenn, la principale commence par le verbe, et les deux parties sont au Konjunktiv II.'],
    ),
    fb(
      'sp-k2-e15',
      ['Wenn ich du ___, würde ich das nicht tun. (sein)', 'Wenn ich du ___, würde ich das nicht tun. (sein)'],
      'wäre',
      ['wäre, not war.', 'wäre, pas war.'],
    ),
    mc(
      'sp-k2-e16',
      ['"Ich wünschte, ich ___ fliegen."', '« Ich wünschte, ich ___ fliegen. »'],
      ['könnte', 'kann', 'konnte'], ['könnte', 'kann', 'konnte'], 0,
      ['A wish needs Konjunktiv II: könnte.', 'Un souhait demande le Konjunktiv II : könnte.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'The past and advice', 'Le passé et les conseils',
      'Regret about what did (not) happen, and how to advise gently.', 'Le regret de ce qui s’est (ou non) passé, et comment conseiller en douceur.',
    ),
    grammar(
      'sp-k2-past',
      ['Konjunktiv II in the past', 'Le Konjunktiv II au passé'],
      [
        'To talk about **what could have been**, use **hätte** or **wäre** + **Partizip II**. The auxiliary is the same as in the Perfekt: *haben* verbs take **hätte**, movement/change verbs take **wäre**.\n\n- Wenn ich das gewusst **hätte**, **wäre** ich früher gekommen.\n- Ich **hätte** gern mehr gelernt.\n- Wir **wären** nach Paris gefahren.\n\nWith a modal, the infinitive replaces the participle: **Du hättest mich anrufen sollen.** (You should have called me.)',
        'Pour parler de **ce qui aurait pu être**, emploie **hätte** ou **wäre** + **participe II**. L’auxiliaire est le même qu’au Perfekt : les verbes avec *haben* prennent **hätte**, les verbes de mouvement/changement prennent **wäre**.\n\n- Wenn ich das gewusst **hätte**, **wäre** ich früher gekommen.\n- Ich **hätte** gern mehr gelernt.\n- Wir **wären** nach Paris gefahren.\n\nAvec un modal, l’infinitif remplace le participe : **Du hättest mich anrufen sollen.** (Tu aurais dû m’appeler.)',
      ],
      [
        ['Wenn ich das gewusst hätte, wäre ich früher gekommen.', 'If I had known that, I would have come earlier.', 'Si j’avais su, je serais venu plus tôt.'],
        ['Wir wären nach Paris gefahren.', 'We would have gone to Paris.', 'Nous serions allés à Paris.'],
        ['Du hättest mich anrufen sollen.', 'You should have called me.', 'Tu aurais dû m’appeler.'],
      ],
    ),
    grammar(
      'sp-k2-advice',
      ['Giving advice and polite questions', 'Donner des conseils et poser des questions polies'],
      [
        'Four soft ways to advise:\n\n- **An deiner Stelle würde ich …** — If I were you, I would …\n- **Du solltest …** — You should …\n- **Du könntest …** — You could …\n- **Wie wäre es, wenn …?** — How about …?\n\nAnd to ask politely: **Hätten Sie Zeit?**, **Könnten Sie …?**, **Würden Sie bitte …?**',
        'Quatre façons douces de conseiller :\n\n- **An deiner Stelle würde ich …** — À ta place, je …\n- **Du solltest …** — Tu devrais …\n- **Du könntest …** — Tu pourrais …\n- **Wie wäre es, wenn …?** — Et si on …?\n\nEt pour demander poliment : **Hätten Sie Zeit ?**, **Könnten Sie …?**, **Würden Sie bitte …?**',
      ],
      [
        ['An deiner Stelle würde ich eine Pause machen.', 'If I were you, I would take a break.', 'À ta place, je ferais une pause.'],
        ['Du könntest ihn einfach fragen.', 'You could simply ask him.', 'Tu pourrais simplement lui demander.'],
        ['Wie wäre es, wenn wir ins Kino gehen?', 'How about going to the cinema?', 'Et si on allait au cinéma ?'],
      ],
    ),
    fb(
      'sp-k2-e17',
      ['Wenn ich das gewusst hätte, ___ ich früher gekommen. (sein)', 'Wenn ich das gewusst hätte, ___ ich früher gekommen. (sein)'],
      'wäre',
      ['kommen is a movement verb: wäre + Partizip II.', 'kommen est un verbe de mouvement : wäre + participe II.'],
    ),
    fb(
      'sp-k2-e18',
      ['Du ___ mich anrufen sollen. (haben — you should have called)', 'Du ___ mich anrufen sollen. (haben — tu aurais dû appeler)'],
      'hättest',
      ['du: hättest.', 'du : hättest.'],
    ),
    mc(
      'sp-k2-e19',
      ['"Wir ___ nach Paris gefahren, wenn wir Zeit gehabt hätten."', '« Wir ___ nach Paris gefahren, wenn wir Zeit gehabt hätten. »'],
      ['wären', 'hätten', 'würden'], ['wären', 'hätten', 'würden'], 0,
      ['fahren (movement) takes sein → wären.', 'fahren (mouvement) prend sein → wären.'],
    ),
    mc(
      'sp-k2-e20',
      ['Advice: "An deiner Stelle ___ ich das nicht tun."', 'Conseil : « An deiner Stelle ___ ich das nicht tun. »'],
      ['würde', 'werde', 'wurde'], ['würde', 'werde', 'wurde'], 0,
      ['An deiner Stelle + würde + infinitive.', 'An deiner Stelle + würde + infinitif.'],
    ),
    lc(
      'sp-k2-e21',
      ['Listen. What is the speaker\'s situation?', 'Écoute. Quelle est la situation de la personne ?'],
      'Wenn ich Zeit hätte, würde ich dich besuchen.',
      ['She would like to visit but has no time.', 'She is visiting right now.', 'She already visited yesterday.'],
      ['Elle aimerait rendre visite mais n’a pas le temps.', 'Elle rend visite en ce moment.', 'Elle a déjà rendu visite hier.'], 0,
      ['Listen for "hätte … würde".', 'Écoute « hätte … würde ».'],
    ),

    wrapup(
      '**Four jobs** — polite requests, wishes, advice, unreal conditions.\n\n**würde + infinitive** — the default for most verbs (always for weak verbs).\n\n**Short forms** — hätte, wäre, könnte, müsste, dürfte, sollte, wollte, wüsste: say them directly.\n\n**Unreal wenn** — Wenn ich Zeit hätte, würde ich reisen. Wishes: Ich wünschte, … / Wenn ich nur …!\n\n**Past** — hätte / wäre + Partizip II: Wenn ich das gewusst hätte, wäre ich gekommen.\n\n**Advice** — An deiner Stelle würde ich … / Du solltest … / Du könntest …',
      '**Quatre emplois** — demandes polies, souhaits, conseils, conditions irréelles.\n\n**würde + infinitif** — la voie par défaut pour la plupart des verbes (toujours pour les verbes faibles).\n\n**Formes courtes** — hätte, wäre, könnte, müsste, dürfte, sollte, wollte, wüsste : à dire directement.\n\n**wenn irréel** — Wenn ich Zeit hätte, würde ich reisen. Souhaits : Ich wünschte, … / Wenn ich nur … !\n\n**Passé** — hätte / wäre + participe II : Wenn ich das gewusst hätte, wäre ich gekommen.\n\n**Conseils** — An deiner Stelle würde ich … / Du solltest … / Du könntest …',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Konjunktiv II', 'Quiz final : le Konjunktiv II'),
    mc(
      'sp-k2-q1',
      ['Which sentence expresses an unreal situation?', 'Quelle phrase exprime une situation irréelle ?'],
      ['Wenn ich Flügel hätte, würde ich fliegen.', 'Ich habe Flügel und ich fliege.', 'Ich fliege morgen nach Wien.'],
      ['Wenn ich Flügel hätte, würde ich fliegen.', 'Ich habe Flügel und ich fliege.', 'Ich fliege morgen nach Wien.'], 0,
      ['Konjunktiv II = unreal.', 'Konjunktiv II = irréel.'],
    ),
    fb(
      'sp-k2-q2',
      ['Ich ___ gern ein Eis. (haben — Konjunktiv II)', 'Ich ___ gern ein Eis. (haben — Konjunktiv II)'],
      'hätte',
      ['Polite wish.', 'Souhait poli.'],
    ),
    fb(
      'sp-k2-q3',
      ['Wir ___ gern am Meer wohnen. (werden — Konjunktiv II)', 'Wir ___ gern am Meer wohnen. (werden — Konjunktiv II)'],
      'würden',
      ['würde + wir → würden.', 'würde + wir → würden.'],
    ),
    wo('sp-k2-q4', ['Ich', 'wäre', 'Pilot', 'gern'], ['Ich', 'wäre', 'gern', 'Pilot'], ['gern comes right after the verb.', 'gern vient juste après le verbe.']),
    mc(
      'sp-k2-q5',
      ['Which form of "können" is Konjunktiv II?', 'Quelle forme de « können » est au Konjunktiv II ?'],
      ['könnte', 'kann', 'konnte'], ['könnte', 'kann', 'konnte'], 0,
      ['können → könnte (umlaut kept).', 'können → könnte (tréma conservé).'],
    ),
    match(
      'sp-k2-q6',
      [
        ['ich hätte', 'I would have', 'j’aurais'],
        ['ich wäre', 'I would be', 'je serais'],
        ['ich müsste', 'I would have to', 'je devrais'],
        ['ich würde gehen', 'I would go', 'j’irais'],
      ],
      ['Match each form with its meaning.', 'Associe chaque forme à son sens.'],
    ),
    fb(
      'sp-k2-q7',
      ['Wenn ich du ___, würde ich zum Arzt gehen. (sein)', 'Wenn ich du ___, würde ich zum Arzt gehen. (sein)'],
      'wäre',
      ['Classic phrase: Wenn ich du wäre …', 'Tournure classique : Wenn ich du wäre …'],
    ),
    wo('sp-k2-q8', ['ich', 'Wenn', 'hätte,', 'würde', 'Geld', 'ich', 'reisen', 'viel'], ['Wenn', 'ich', 'viel', 'Geld', 'hätte,', 'würde', 'ich', 'reisen'], ['Verb at the end of the wenn-clause.', 'Verbe à la fin de la proposition en wenn.']),
    mc(
      'sp-k2-q9',
      ['"You should have called me." →', '« Tu aurais dû m’appeler. » →'],
      ['Du hättest mich anrufen sollen.', 'Du sollst mich anrufen.', 'Du hast mich anrufen gesollt.'],
      ['Du hättest mich anrufen sollen.', 'Du sollst mich anrufen.', 'Du hast mich anrufen gesollt.'], 0,
      ['hätte + infinitive of the main verb + infinitive of the modal.', 'hätte + infinitif du verbe + infinitif du modal.'],
    ),
    fb(
      'sp-k2-q10',
      ['Wenn wir Zeit gehabt hätten, ___ wir gekommen. (sein — Konjunktiv II)', 'Wenn wir Zeit gehabt hätten, ___ wir gekommen. (sein — Konjunktiv II)'],
      'wären',
      ['kommen takes sein: wären.', 'kommen prend sein : wären.'],
    ),
    mc(
      'sp-k2-q11',
      ['Which request is the politest?', 'Quelle demande est la plus polie ?'],
      ['Könnten Sie das bitte wiederholen?', 'Wiederholen Sie das!', 'Sie müssen das wiederholen.'],
      ['Könnten Sie das bitte wiederholen?', 'Wiederholen Sie das!', 'Sie müssen das wiederholen.'], 0,
      ['Konjunktiv II softens the request.', 'Le Konjunktiv II adoucit la demande.'],
    ),
    lc(
      'sp-k2-q12',
      ['Listen. What does the speaker wish?', 'Écoute. Que souhaite la personne ?'],
      'Ich wünschte, ich hätte mehr Zeit.',
      ['More time', 'More money', 'A new job'], ['Plus de temps', 'Plus d’argent', 'Un nouveau travail'], 0,
      ['Listen for "Zeit".', 'Écoute « Zeit ».'],
    ),
    mc(
      'sp-k2-q13',
      ['Why do Germans say "ich würde machen" instead of "ich machte"?', 'Pourquoi dit-on « ich würde machen » plutôt que « ich machte » ?'],
      ['Because "machte" looks like the past tense', 'Because "machte" is impolite', 'Because "machen" is irregular'],
      ['Parce que « machte » ressemble au prétérit', 'Parce que « machte » est impoli', 'Parce que « machen » est irrégulier'], 0,
      ['For weak verbs Konjunktiv II = Präteritum, so würde + infinitive avoids confusion.', 'Pour les verbes faibles, Konjunktiv II = Präteritum, donc würde + infinitif évite la confusion.'],
    ),
    fb(
      'sp-k2-q14',
      ['An deiner Stelle ___ ich eine Pause machen. (werden — Konjunktiv II)', 'An deiner Stelle ___ ich eine Pause machen. (werden — Konjunktiv II)'],
      'würde',
      ['Advice with würde.', 'Conseil avec würde.'],
    ),
  ],
});

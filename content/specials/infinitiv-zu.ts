import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const infinitivZu = defineSpecial({
  slug: 'infinitiv-zu',
  number: 18,
  group: 'sentences',
  levels: ['A2', 'B1'],
  related: ['b1-l7', 'b1-l20', 'b1-l25', 'b1-l26'],
  title: ['Infinitiv mit „zu“', 'Infinitive with "zu"', 'L’infinitif avec « zu »'],
  theme: [
    'zu + infinitive, separable verbs (aufzustehen), um … zu, ohne … zu, (an)statt … zu — and when you must not use zu',
    'zu + infinitif, verbes séparables (aufzustehen), um … zu, ohne … zu, (an)statt … zu — et quand ne pas utiliser zu',
  ],
  goals: [
    'Place zu correctly, also with separable verbs',
    'Know which verbs, adjectives and nouns take zu + infinitive',
    'Express purpose with um … zu (and when to use damit)',
    'Use ohne … zu and (an)statt … zu',
    'Know when no zu is needed: modals, gehen, lassen, sehen',
  ],
  goalsFr: [
    'Placer zu correctement, aussi avec les verbes séparables',
    'Savoir quels verbes, adjectifs et noms prennent zu + infinitif',
    'Exprimer le but avec um … zu (et quand utiliser damit)',
    'Utiliser ohne … zu et (an)statt … zu',
    'Savoir quand zu est inutile : modaux, gehen, lassen, sehen',
  ],
  steps: [
    intro(
      'Es ist wichtig, zu üben', 'Il est important de s’entraîner',
      'In English you say "to learn", in French "apprendre". In German, many verbs and phrases need **zu + infinitive** at the **end** of a short clause: *Ich habe vergessen, dich **anzurufen**.* It is one of the most useful B1 structures — and the rules are simple once you see the pattern.',
      'En anglais on dit « to learn », en français « apprendre ». En allemand, beaucoup de verbes et d’expressions demandent **zu + infinitif** à la **fin** d’une courte proposition : *Ich habe vergessen, dich **anzurufen**.* C’est l’une des structures les plus utiles du B1 — et les règles sont simples une fois le schéma compris.',
      [
        'Build infinitive clauses with zu',
        'Insert zu into separable verbs',
        'Choose between um … zu, ohne … zu and (an)statt … zu',
        'Recognise when no zu is allowed',
      ],
      [
        'Construire des propositions infinitives avec zu',
        'Insérer zu dans les verbes séparables',
        'Choisir entre um … zu, ohne … zu et (an)statt … zu',
        'Reconnaître quand zu est interdit',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'The basic pattern', 'Le schéma de base',
      'Main clause, comma, objects, zu + infinitive.', 'Principale, virgule, compléments, zu + infinitif.',
    ),
    grammar(
      'sp-iz-basic',
      ['zu + infinitive at the end', 'zu + infinitif à la fin'],
      [
        'An **infinitive clause** is a short extra clause with **no subject of its own**. The infinitive stands at the **end**, with **zu** in front of it. Anything that belongs to the infinitive (objects, adverbs) goes **before** it.\n\n- Ich habe vergessen**,** dich **anzurufen**.\n- Es ist wichtig**,** jeden Tag **zu üben**.\n- Ich versuche**,** mehr Wasser **zu trinken**.\n\n**Separable verbs:** **zu goes between** the prefix and the verb, written as **one word**.\n\n- aufstehen → **aufzustehen**: Ich versuche, früh **aufzustehen**.\n- anrufen → **anzurufen**: Ich habe vergessen, dich **anzurufen**.\n- mitkommen → **mitzukommen**\n\n**Inseparable and other verbs:** zu stands **separately**: **zu besuchen**, **zu verstehen**, **zu arbeiten**.\n\n**Comma:** with simple verbs the comma is optional, but it is **required** with **um … zu**, **ohne … zu**, **(an)statt … zu** and with **es / da(r)-** words. In exams, **always use the comma** — it never hurts.',
        'Une **proposition infinitive** est une courte proposition supplémentaire **sans sujet propre**. L’infinitif est à la **fin**, précédé de **zu**. Tout ce qui lui appartient (compléments, adverbes) se place **avant**.\n\n- Ich habe vergessen**,** dich **anzurufen**.\n- Es ist wichtig**,** jeden Tag **zu üben**.\n- Ich versuche**,** mehr Wasser **zu trinken**.\n\n**Verbes séparables :** **zu s’intercale** entre le préfixe et le verbe, en **un seul mot**.\n\n- aufstehen → **aufzustehen** : Ich versuche, früh **aufzustehen**.\n- anrufen → **anzurufen** : Ich habe vergessen, dich **anzurufen**.\n- mitkommen → **mitzukommen**\n\n**Verbes inséparables et autres :** zu reste **séparé** : **zu besuchen**, **zu verstehen**, **zu arbeiten**.\n\n**Virgule :** avec les verbes simples elle est facultative, mais **obligatoire** avec **um … zu**, **ohne … zu**, **(an)statt … zu** et avec les mots **es / da(r)-**. À l’examen, **mets toujours la virgule** — elle ne nuit jamais.',
      ],
      [
        ['Ich habe vergessen, dich anzurufen.', 'I forgot to call you.', 'J’ai oublié de t’appeler.'],
        ['Ich versuche, früh aufzustehen.', 'I try to get up early.', 'J’essaie de me lever tôt.'],
        ['Es ist wichtig, jeden Tag zu üben.', 'It is important to practise every day.', 'Il est important de s’entraîner chaque jour.'],
      ],
      'satzklammer',
    ),
    vocab('sp-infinitiv-zu-vergessen', 'vergessen', 'to forget', 'oublier', null, 'ver-GES-sen', 'fer-GES-sen', ['Ich habe vergessen, Brot zu kaufen.', 'I forgot to buy bread.', 'J’ai oublié d’acheter du pain.']),
    vocab('sp-infinitiv-zu-versuchen', 'versuchen', 'to try', 'essayer', null, 'ver-SU-chen', 'fer-ZOO-khen', ['Ich versuche, mehr zu schlafen.', 'I try to sleep more.', 'J’essaie de dormir plus.']),
    mc(
      'sp-iz-e1',
      ['"Ich habe vergessen, dich ___." (anrufen)', '« Ich habe vergessen, dich ___. » (anrufen)'],
      ['zu anrufen', 'anzurufen', 'anrufen zu'], ['zu anrufen', 'anzurufen', 'anrufen zu'], 1,
      ['Separable verb: zu goes between prefix and verb: an-zu-rufen.', 'Verbe séparable : zu s’intercale entre le préfixe et le verbe : an-zu-rufen.'],
    ),
    fb(
      'sp-iz-e2',
      ['Ich versuche, früh ___. (aufstehen)', 'Ich versuche, früh ___. (aufstehen)'],
      'aufzustehen',
      ['auf + zu + stehen, written as one word.', 'auf + zu + stehen, écrit en un seul mot.'],
    ),
    wo('sp-iz-e3', ['anzurufen', 'Ich', 'habe', 'vergessen,', 'dich'], ['Ich', 'habe', 'vergessen,', 'dich', 'anzurufen'], ['Infinitive with zu at the very end.', 'Infinitif avec zu tout à la fin.']),
    mc(
      'sp-iz-e4',
      ['Which form is correct?', 'Quelle forme est correcte ?'],
      ['Ich versuche, Deutsch zu lernen.', 'Ich versuche, Deutsch lernen zu.', 'Ich versuche, zu Deutsch lernen.'],
      ['Ich versuche, Deutsch zu lernen.', 'Ich versuche, Deutsch lernen zu.', 'Ich versuche, zu Deutsch lernen.'], 0,
      ['zu stands directly before the infinitive; the object comes before zu.', 'zu est juste devant l’infinitif ; le complément vient avant zu.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Verbs and phrases with zu', 'Verbes et expressions avec zu',
      'Learn them in groups — by meaning.', 'Apprends-les par groupes — selon le sens.',
    ),
    grammar(
      'sp-iz-verbs',
      ['Which verbs take zu?', 'Quels verbes prennent zu ?'],
      [
        'Many **verbs of beginning, ending, intention and feeling** take zu + infinitive.\n\n- **Beginning / ending:** **anfangen**, **beginnen**, **aufhören** — Es fängt an **zu regnen**. Er hört auf **zu rauchen**.\n- **Trying / planning:** **versuchen**, **planen**, **vorhaben**, **sich entscheiden** — Ich habe vor, nach Wien **zu fahren**.\n- **Forgetting / remembering:** **vergessen**, **sich erinnern** — Vergiss nicht, **zu schreiben**.\n- **Hoping / fearing:** **hoffen**, **befürchten** — Ich hoffe, dich bald **zu sehen**.\n- **Asking / advising:** **bitten**, **raten**, **empfehlen**, **vorschlagen** — Ich bitte dich, **zu kommen**.\n\n**Expressions with haben + noun:**\n- **Lust haben** — Ich habe keine Lust, heute **zu arbeiten**.\n- **Zeit haben** — Hast du Zeit, mir **zu helfen**?\n- **Angst haben** — Sie hat Angst, allein **zu fahren**.\n- **Mühe haben** — Er hat Mühe, früh **aufzustehen**.',
        'Beaucoup de **verbes de début, de fin, d’intention et de sentiment** prennent zu + infinitif.\n\n- **Commencer / finir :** **anfangen**, **beginnen**, **aufhören** — Es fängt an **zu regnen**. Er hört auf **zu rauchen**.\n- **Essayer / planifier :** **versuchen**, **planen**, **vorhaben**, **sich entscheiden** — Ich habe vor, nach Wien **zu fahren**.\n- **Oublier / se souvenir :** **vergessen**, **sich erinnern** — Vergiss nicht, **zu schreiben**.\n- **Espérer / craindre :** **hoffen**, **befürchten** — Ich hoffe, dich bald **zu sehen**.\n- **Demander / conseiller :** **bitten**, **raten**, **empfehlen**, **vorschlagen** — Ich bitte dich, **zu kommen**.\n\n**Expressions avec haben + nom :**\n- **Lust haben** — Ich habe keine Lust, heute **zu arbeiten**.\n- **Zeit haben** — Hast du Zeit, mir **zu helfen** ?\n- **Angst haben** — Sie hat Angst, allein **zu fahren**.\n- **Mühe haben** — Er hat Mühe, früh **aufzustehen**.',
      ],
      [
        ['Es fängt an zu regnen.', 'It is starting to rain.', 'Il commence à pleuvoir.'],
        ['Er hört auf zu rauchen.', 'He is quitting smoking.', 'Il arrête de fumer.'],
        ['Ich habe vor, nach Wien zu fahren.', 'I plan to go to Vienna.', 'J’ai l’intention d’aller à Vienne.'],
        ['Ich habe keine Lust, heute zu arbeiten.', 'I do not feel like working today.', 'Je n’ai pas envie de travailler aujourd’hui.'],
      ],
    ),
    vocab('sp-infinitiv-zu-aufhoeren', 'aufhören', 'to stop', 'arrêter', null, 'AUF-hö-ren', 'OWF-her-en', ['Er hört auf zu rauchen.', 'He is quitting smoking.', 'Il arrête de fumer.']),
    vocab('sp-infinitiv-zu-anfangen', 'anfangen', 'to begin', 'commencer', null, 'AN-fan-gen', 'AN-fang-en', ['Es fängt an zu schneien.', 'It is starting to snow.', 'Il commence à neiger.']),
    vocab('sp-infinitiv-zu-lust', 'die Lust', 'the desire, the mood', 'l’envie', 'die', 'LUST', 'dee LOOST', ['Ich habe keine Lust, zu kochen.', 'I do not feel like cooking.', 'Je n’ai pas envie de cuisiner.']),
    vocab('sp-infinitiv-zu-vorhaben', 'vorhaben', 'to plan, to intend', 'avoir l’intention de', null, 'VOR-ha-ben', 'FOHR-hah-ben', ['Ich habe vor, einen Kurs zu machen.', 'I plan to take a course.', 'J’ai l’intention de suivre un cours.']),
    mc(
      'sp-iz-e5',
      ['"Es fängt an ___ regnen."', '« Es fängt an ___ regnen. »'],
      ['zu', 'um zu', 'ohne zu'], ['zu', 'um zu', 'ohne zu'], 0,
      ['anfangen + zu + infinitive.', 'anfangen + zu + infinitif.'],
    ),
    fb(
      'sp-iz-e6',
      ['Ich habe keine Lust, heute ___ arbeiten. (zu)', 'Ich habe keine Lust, heute ___ arbeiten. (zu)'],
      'zu',
      ['Lust haben + zu + infinitive.', 'Lust haben + zu + infinitif.'],
    ),
    wo('sp-iz-e7', ['zu', 'Er', 'rauchen', 'hört', 'auf'], ['Er', 'hört', 'auf', 'zu', 'rauchen'], ['aufhören + zu + infinitive at the end.', 'aufhören + zu + infinitif à la fin.']),
    match(
      'sp-iz-e8',
      [
        ['anfangen', 'to begin', 'commencer'],
        ['aufhören', 'to stop', 'arrêter'],
        ['versuchen', 'to try', 'essayer'],
        ['vergessen', 'to forget', 'oublier'],
        ['vorhaben', 'to plan', 'avoir l’intention de'],
      ],
      ['Match each verb with its meaning.', 'Associe chaque verbe à son sens.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Es ist … zu …', 'Es ist … zu …',
      'Adjectives and the "es" opener.', 'Les adjectifs et l’amorce « es ».',
    ),
    grammar(
      'sp-iz-adj',
      ['Es ist + adjective + zu + infinitive', 'Es ist + adjectif + zu + infinitif'],
      [
        'To give a **general judgement** about an action, use **Es ist + adjective** and put the action in a **zu-clause**:\n\n- Es ist **wichtig**, jeden Tag Deutsch **zu sprechen**.\n- Es ist **schwer**, früh **aufzustehen**.\n- Es ist **schön**, dich **zu sehen**.\n- Es ist **gefährlich**, im Dunkeln allein **zu gehen**.\n- Es ist **möglich** / **nicht möglich**, das **zu machen**.\n\nSome **nouns** work the same way: **Es ist Zeit**, **zu gehen**. **Ich habe Angst**, **zu fallen**.\n\n**Variation:** the zu-clause can come **first** — then **es** disappears and the main verb follows directly:\n\n- **Jeden Tag Deutsch zu sprechen**, ist wichtig.\n\nThe version with **es** is more natural in speech. The inverted version is more formal.',
        'Pour émettre un **jugement général** sur une action, utilise **Es ist + adjectif** et mets l’action dans une **proposition en zu** :\n\n- Es ist **wichtig**, jeden Tag Deutsch **zu sprechen**.\n- Es ist **schwer**, früh **aufzustehen**.\n- Es ist **schön**, dich **zu sehen**.\n- Es ist **gefährlich**, im Dunkeln allein **zu gehen**.\n- Es ist **möglich** / **nicht möglich**, das **zu machen**.\n\nCertains **noms** fonctionnent de même : **Es ist Zeit**, **zu gehen**. **Ich habe Angst**, **zu fallen**.\n\n**Variante :** la proposition en zu peut venir **en premier** — alors **es** disparaît et le verbe principal suit directement :\n\n- **Jeden Tag Deutsch zu sprechen**, ist wichtig.\n\nLa version avec **es** est plus naturelle à l’oral. La version inversée est plus formelle.',
      ],
      [
        ['Es ist schwer, früh aufzustehen.', 'It is hard to get up early.', 'Il est difficile de se lever tôt.'],
        ['Es ist schön, dich zu sehen.', 'It is nice to see you.', 'C’est agréable de te voir.'],
        ['Es ist gefährlich, im Dunkeln allein zu gehen.', 'It is dangerous to walk alone in the dark.', 'Il est dangereux de marcher seul dans le noir.'],
      ],
    ),
    vocab('sp-infinitiv-zu-wichtig', 'wichtig', 'important', 'important', null, 'WICH-tig', 'VIKH-tikh', ['Es ist wichtig, pünktlich zu sein.', 'It is important to be on time.', 'Il est important d’être à l’heure.']),
    mc(
      'sp-iz-e9',
      ['"Es ist wichtig, jeden Tag ___."', '« Es ist wichtig, jeden Tag ___. »'],
      ['zu üben', 'üben zu', 'zu übt'], ['zu üben', 'üben zu', 'zu übt'], 0,
      ['zu + infinitive at the end.', 'zu + infinitif à la fin.'],
    ),
    wo('sp-iz-e10', ['schwer,', 'Es', 'ist', 'früh', 'aufzustehen'], ['Es', 'ist', 'schwer,', 'früh', 'aufzustehen'], ['Es ist + adjective, then the zu-clause.', 'Es ist + adjectif, puis la proposition en zu.']),
    fb(
      'sp-iz-e11',
      ['Es ist schön, dich ___ sehen. (zu)', 'Es ist schön, dich ___ sehen. (zu)'],
      'zu',
      ['Es ist + adjective + zu + infinitive.', 'Es ist + adjectif + zu + infinitif.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'um … zu, ohne … zu, (an)statt … zu', 'um … zu, ohne … zu, (an)statt … zu',
      'Three small frames that carry big meaning.', 'Trois petits cadres au grand sens.',
    ),
    grammar(
      'sp-iz-frames',
      ['Three useful frames', 'Trois cadres utiles'],
      [
        'These three frames all use **zu + infinitive**, always with a **comma**. The **subject** of both parts must be **the same**.\n\n- **um … zu** — *in order to* (purpose): Er lernt Deutsch, **um** in Wien **zu arbeiten**.\n- **ohne … zu** — *without*: Sie geht aus dem Haus, **ohne** die Tür **zu schließen**.\n- **(an)statt … zu** — *instead of*: **Statt** zu lernen, schläft er.\n\nIf the **subjects differ**, you cannot use these frames:\n\n- **Same subject:** Ich lerne, **um** die Prüfung **zu bestehen**.\n- **Different subjects:** Ich helfe dir, **damit** du die Prüfung bestehst.\n\n**damit** + a full subordinate clause (verb at the end) is the right choice with different subjects.\n\nWith a **separable verb** in the frame: **um** früh **aufzustehen**, **ohne** sich **zu verabschieden**.',
        'Ces trois cadres utilisent **zu + infinitif**, toujours avec une **virgule**. Le **sujet** des deux parties doit être **le même**.\n\n- **um … zu** — *pour* (but) : Er lernt Deutsch, **um** in Wien **zu arbeiten**.\n- **ohne … zu** — *sans* : Sie geht aus dem Haus, **ohne** die Tür **zu schließen**.\n- **(an)statt … zu** — *au lieu de* : **Statt** zu lernen, schläft er.\n\nSi les **sujets diffèrent**, on ne peut pas utiliser ces cadres :\n\n- **Même sujet :** Ich lerne, **um** die Prüfung **zu bestehen**.\n- **Sujets différents :** Ich helfe dir, **damit** du die Prüfung bestehst.\n\n**damit** + une subordonnée complète (verbe à la fin) est le bon choix quand les sujets diffèrent.\n\nAvec un **verbe séparable** dans le cadre : **um** früh **aufzustehen**, **ohne** sich **zu verabschieden**.',
      ],
      [
        ['Ich spare Geld, um ein Auto zu kaufen.', 'I am saving money to buy a car.', 'J’économise de l’argent pour acheter une voiture.'],
        ['Er geht, ohne sich zu verabschieden.', 'He leaves without saying goodbye.', 'Il part sans dire au revoir.'],
        ['Statt zu lernen, spielt er Fußball.', 'Instead of studying, he plays football.', 'Au lieu d’étudier, il joue au football.'],
        ['Ich spreche langsam, damit du mich verstehst.', 'I speak slowly so that you understand me.', 'Je parle lentement pour que tu me comprennes.'],
      ],
    ),
    vocab('sp-infinitiv-zu-um', 'um zu', 'in order to', 'pour', null, 'UM-tsu', 'OOM tsoo', ['Ich lerne, um die Prüfung zu bestehen.', 'I study in order to pass the exam.', 'J’étudie pour réussir l’examen.']),
    vocab('sp-infinitiv-zu-ohne', 'ohne zu', 'without', 'sans', null, 'OH-ne-tsu', 'OH-neh tsoo', ['Er geht, ohne zu grüßen.', 'He leaves without saying hello.', 'Il part sans saluer.']),
    mc(
      'sp-iz-e12',
      ['"Er lernt Deutsch, ___ in Wien zu arbeiten."', '« Er lernt Deutsch, ___ in Wien zu arbeiten. »'],
      ['um', 'ohne', 'damit'], ['um', 'ohne', 'damit'], 0,
      ['Purpose, same subject: um … zu.', 'But, même sujet : um … zu.'],
    ),
    mc(
      'sp-iz-e13',
      ['"Sie geht aus dem Haus, ___ die Tür zu schließen."', '« Sie geht aus dem Haus, ___ die Tür zu schließen. »'],
      ['ohne', 'um', 'statt'], ['ohne', 'um', 'statt'], 0,
      ['She leaves without closing the door: ohne … zu.', 'Elle sort sans fermer la porte : ohne … zu.'],
    ),
    mc(
      'sp-iz-e14',
      ['"Ich spreche langsam, ___ du mich verstehst." (different subjects)', '« Ich spreche langsam, ___ du mich verstehst. » (sujets différents)'],
      ['um', 'damit', 'ohne'], ['um', 'damit', 'ohne'], 1,
      ['Different subjects (ich / du): damit + full clause.', 'Sujets différents (ich / du) : damit + proposition complète.'],
    ),
    wo('sp-iz-e15', ['Auto', 'Ich', 'um', 'spare', 'Geld,', 'ein', 'kaufen', 'zu'], ['Ich', 'spare', 'Geld,', 'um', 'ein', 'Auto', 'zu', 'kaufen'], ['um + object + zu + infinitive.', 'um + complément + zu + infinitif.']),
    wo('sp-iz-e16', ['verabschieden', 'Er', 'geht,', 'sich', 'ohne', 'zu'], ['Er', 'geht,', 'ohne', 'sich', 'zu', 'verabschieden'], ['reflexive pronoun before zu.', 'pronom réfléchi avant zu.']),
    lc(
      'sp-iz-e17',
      ['Listen. Why does the speaker save money?', 'Écoute. Pourquoi la personne économise-t-elle ?'],
      'Ich spare Geld, um ein Auto zu kaufen.',
      ['To buy a car', 'To go on holiday', 'To buy a house'],
      ['Pour acheter une voiture', 'Pour partir en vacances', 'Pour acheter une maison'], 0,
      ['"Auto" = car.', '« Auto » = voiture.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'When there is no zu', 'Quand il n’y a pas de zu',
      'Modals, gehen, lassen, the "pure infinitive" — and zu vs. dass.', 'Modaux, gehen, lassen, l’« infinitif pur » — et zu contre dass.',
    ),
    grammar(
      'sp-iz-nozu',
      ['Infinitive without zu', 'Infinitif sans zu'],
      [
        'Some verbs take a **bare infinitive** — **no zu**:\n\n- **Modal verbs:** Ich **muss** arbeiten. Sie **kann** schwimmen.\n- **werden** (future): Er **wird** kommen.\n- **gehen, fahren, bleiben** + activity: Ich **gehe** einkaufen. Wir **bleiben** sitzen.\n- **lassen:** Ich **lasse** das Auto reparieren.\n- **Perception verbs** (**sehen, hören, spüren**): Ich **höre** ihn singen.\n- **lernen, helfen** (often): Ich **helfe** dir tragen.\n\n**brauchen** is the exception: with a negation it takes **zu**: Du **brauchst** nicht **zu** kommen. (= Du musst nicht kommen.)\n\n**zu-infinitive or dass-clause?** When the **subject is the same**, German strongly prefers **zu + infinitive**; with **different subjects** you need **dass**.\n\n- Ich hoffe, **zu gewinnen**. (I hope that I will win)\n- Ich hoffe, **dass du gewinnst**. (I hope that you win)\n\n**Avoid** *Ich hoffe, dass ich gewinne* when *zu gewinnen* works — it is correct, but sounds heavy.',
        'Certains verbes prennent un **infinitif nu** — **sans zu** :\n\n- **Verbes modaux :** Ich **muss** arbeiten. Sie **kann** schwimmen.\n- **werden** (futur) : Er **wird** kommen.\n- **gehen, fahren, bleiben** + activité : Ich **gehe** einkaufen. Wir **bleiben** sitzen.\n- **lassen :** Ich **lasse** das Auto reparieren.\n- **Verbes de perception** (**sehen, hören, spüren**) : Ich **höre** ihn singen.\n- **lernen, helfen** (souvent) : Ich **helfe** dir tragen.\n\n**brauchen** est l’exception : avec une négation il prend **zu** : Du **brauchst** nicht **zu** kommen. (= Du musst nicht kommen.)\n\n**Infinitif en zu ou subordonnée en dass ?** Quand le **sujet est le même**, l’allemand préfère nettement **zu + infinitif** ; avec des **sujets différents** il faut **dass**.\n\n- Ich hoffe, **zu gewinnen**. (J’espère gagner)\n- Ich hoffe, **dass du gewinnst**. (J’espère que tu gagnes)\n\n**Évite** *Ich hoffe, dass ich gewinne* quand *zu gewinnen* convient — c’est correct, mais cela sonne lourd.',
      ],
      [
        ['Ich gehe heute Abend einkaufen.', 'I am going shopping this evening.', 'Je vais faire les courses ce soir.'],
        ['Ich höre ihn singen.', 'I hear him singing.', 'Je l’entends chanter.'],
        ['Du brauchst nicht zu kommen.', 'You do not need to come.', 'Tu n’as pas besoin de venir.'],
        ['Ich hoffe, dich bald zu sehen.', 'I hope to see you soon.', 'J’espère te voir bientôt.'],
      ],
    ),
    vocab('sp-infinitiv-zu-brauchen', 'brauchen', 'to need', 'avoir besoin de', null, 'BRAU-chen', 'BROW-khen', ['Du brauchst nicht zu kommen.', 'You do not need to come.', 'Tu n’as pas besoin de venir.']),
    mc(
      'sp-iz-e18',
      ['"Ich muss heute ___." — which form?', '« Ich muss heute ___. » — quelle forme ?'],
      ['arbeiten', 'zu arbeiten', 'arbeiten zu'], ['arbeiten', 'zu arbeiten', 'arbeiten zu'], 0,
      ['Modal verbs take the bare infinitive, no zu.', 'Les verbes modaux prennent l’infinitif nu, sans zu.'],
    ),
    mc(
      'sp-iz-e19',
      ['"Ich gehe heute Abend ___."', '« Ich gehe heute Abend ___. »'],
      ['einkaufen', 'einzukaufen', 'zu einkaufen'], ['einkaufen', 'einzukaufen', 'zu einkaufen'], 0,
      ['gehen + infinitive, no zu.', 'gehen + infinitif, sans zu.'],
    ),
    mc(
      'sp-iz-e20',
      ['"Du brauchst nicht ___ kommen."', '« Du brauchst nicht ___ kommen. »'],
      ['zu', 'um zu', 'ohne zu'], ['zu', 'um zu', 'ohne zu'], 0,
      ['brauchen takes zu.', 'brauchen prend zu.'],
    ),

    wrapup(
      '**Pattern:** main clause, comma, objects, **zu + infinitive** at the end.\n\n**Separable verbs:** zu goes in the middle — *aufzustehen, anzurufen, mitzukommen*.\n\n**Verbs with zu:** anfangen, aufhören, versuchen, vergessen, vorhaben, hoffen, bitten … · **Lust / Zeit / Angst haben** · **Es ist wichtig / schwer / schön …**\n\n**Frames:** **um … zu** (purpose) · **ohne … zu** · **(an)statt … zu**. Same subject only; otherwise **damit** or **dass**.\n\n**No zu:** after modal verbs, werden, gehen, lassen, sehen, hören — but **brauchen … zu**.',
      '**Schéma :** principale, virgule, compléments, **zu + infinitif** à la fin.\n\n**Verbes séparables :** zu au milieu — *aufzustehen, anzurufen, mitzukommen*.\n\n**Verbes avec zu :** anfangen, aufhören, versuchen, vergessen, vorhaben, hoffen, bitten … · **Lust / Zeit / Angst haben** · **Es ist wichtig / schwer / schön …**\n\n**Cadres :** **um … zu** (but) · **ohne … zu** · **(an)statt … zu**. Même sujet seulement ; sinon **damit** ou **dass**.\n\n**Sans zu :** après les verbes modaux, werden, gehen, lassen, sehen, hören — mais **brauchen … zu**.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Infinitive with zu', 'Quiz final : l’infinitif avec zu'),
    mc(
      'sp-iz-q1',
      ['"Ich habe vergessen, dich ___."', '« Ich habe vergessen, dich ___. »'],
      ['anzurufen', 'zu anrufen', 'anrufen zu'], ['anzurufen', 'zu anrufen', 'anrufen zu'], 0,
      ['Separable: an-zu-rufen.', 'Séparable : an-zu-rufen.'],
    ),
    fb(
      'sp-iz-q2',
      ['Ich versuche, früh ___. (aufstehen)', 'Ich versuche, früh ___. (aufstehen)'],
      'aufzustehen',
      ['auf + zu + stehen.', 'auf + zu + stehen.'],
    ),
    mc(
      'sp-iz-q3',
      ['"Es fängt an ___ regnen."', '« Es fängt an ___ regnen. »'],
      ['zu', 'um zu', 'ohne zu'], ['zu', 'um zu', 'ohne zu'], 0,
      ['anfangen + zu.', 'anfangen + zu.'],
    ),
    wo('sp-iz-q4', ['üben', 'Es', 'zu', 'ist', 'wichtig,', 'jeden', 'Tag'], ['Es', 'ist', 'wichtig,', 'jeden', 'Tag', 'zu', 'üben'], ['zu + infinitive at the end.', 'zu + infinitif à la fin.']),
    mc(
      'sp-iz-q5',
      ['"Er lernt Deutsch, ___ in Wien zu arbeiten."', '« Er lernt Deutsch, ___ in Wien zu arbeiten. »'],
      ['um', 'ohne', 'damit'], ['um', 'ohne', 'damit'], 0,
      ['Purpose: um … zu.', 'But : um … zu.'],
    ),
    fb(
      'sp-iz-q6',
      ['Sie geht, ___ sich zu verabschieden. (without)', 'Sie geht, ___ sich zu verabschieden. (sans)'],
      'ohne',
      ['ohne … zu = without.', 'ohne … zu = sans.'],
    ),
    wo('sp-iz-q7', ['lernen,', 'spielt', 'Statt', 'zu', 'er', 'Fußball'], ['Statt', 'zu', 'lernen,', 'spielt', 'er', 'Fußball'], ['Statt zu + infinitive, then verb + subject.', 'Statt zu + infinitif, puis verbe + sujet.']),
    mc(
      'sp-iz-q8',
      ['"Ich spreche langsam, ___ du mich verstehst."', '« Ich spreche langsam, ___ du mich verstehst. »'],
      ['um', 'damit', 'ohne'], ['um', 'damit', 'ohne'], 1,
      ['Different subjects → damit.', 'Sujets différents → damit.'],
    ),
    mc(
      'sp-iz-q9',
      ['"Ich muss heute ___."', '« Ich muss heute ___. »'],
      ['arbeiten', 'zu arbeiten', 'um zu arbeiten'], ['arbeiten', 'zu arbeiten', 'um zu arbeiten'], 0,
      ['After a modal verb: no zu.', 'Après un modal : pas de zu.'],
    ),
    mc(
      'sp-iz-q10',
      ['"Du brauchst nicht ___ kommen."', '« Du brauchst nicht ___ kommen. »'],
      ['zu', 'um', 'ohne'], ['zu', 'um', 'ohne'], 0,
      ['brauchen is the exception: it takes zu.', 'brauchen est l’exception : il prend zu.'],
    ),
    match(
      'sp-iz-q11',
      [
        ['in order to', 'um … zu', 'um … zu'],
        ['without', 'ohne … zu', 'ohne … zu'],
        ['instead of', 'statt … zu', 'statt … zu'],
        ['so that (different subject)', 'damit', 'damit'],
        ['to begin to', 'anfangen zu', 'anfangen zu'],
      ],
      ['Match each meaning with its structure.', 'Associe chaque sens à sa structure.'],
    ),
    lc(
      'sp-iz-q12',
      ['Listen. What does the speaker not feel like doing?', 'Écoute. Qu’est-ce que la personne n’a pas envie de faire ?'],
      'Ich habe keine Lust, heute zu arbeiten.',
      ['Working', 'Cooking', 'Studying'],
      ['Travailler', 'Cuisiner', 'Étudier'], 0,
      ['"arbeiten" = to work.', '« arbeiten » = travailler.'],
    ),
    lc(
      'sp-iz-q13',
      ['Listen. What did the speaker forget?', 'Écoute. Qu’est-ce que la personne a oublié ?'],
      'Ich habe vergessen, dich anzurufen.',
      ['To call you', 'To write to you', 'To visit you'],
      ['De t’appeler', 'De t’écrire', 'De te rendre visite'], 0,
      ['"anrufen" = to call.', '« anrufen » = appeler.'],
    ),
    mc(
      'sp-iz-q14',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Es ist schön, dich zu sehen.', 'Es ist schön, dich sehen zu.', 'Es ist schön, zu dich sehen.'],
      ['Es ist schön, dich zu sehen.', 'Es ist schön, dich sehen zu.', 'Es ist schön, zu dich sehen.'], 0,
      ['Object first, then zu + infinitive.', 'Complément d’abord, puis zu + infinitif.'],
    ),
  ],
});

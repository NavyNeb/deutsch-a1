import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const vermutungen = defineSpecial({
  slug: 'vermutungen',
  number: 39,
  group: 'verbs',
  levels: ['B1', 'B2'],
  related: ['b2-l9', 'l7', 'b1-l1'],
  title: ['Vermutungen und Wahrscheinlichkeit', 'Assumptions and probability', 'Suppositions et probabilité'],
  theme: [
    'Saying how sure you are: modal verbs of assumption, Futur I and II, and adverbs of certainty',
    'Dire ton degré de certitude : modaux de supposition, Futur I et II, et adverbes de certitude',
  ],
  goals: [
    'Use müssen, dürfte, können for degrees of certainty',
    'Guess about the past with modal + Partizip II + haben/sein',
    'Use Futur I and II for assumptions',
    'Choose adverbs that match your certainty',
  ],
  goalsFr: [
    'Employer müssen, dürfte, können pour les degrés de certitude',
    'Supposer sur le passé avec modal + Partizip II + haben/sein',
    'Employer le Futur I et II pour les suppositions',
    'Choisir les adverbes selon ta certitude',
  ],
  steps: [
    intro(
      'Das muss er gewesen sein', 'Ce doit être lui',
      'Someone left the lights on. A detective reasons: “Das muss der Hausmeister gewesen sein.” With modal verbs, German can express how sure you are: certain, probable or only possible. This is a key skill at B2.',
      'Quelqu’un a laissé la lumière allumée. Un détective raisonne : « Das muss der Hausmeister gewesen sein. » Avec les verbes modaux, l’allemand exprime ton degré de certitude : certain, probable ou seulement possible. C’est une compétence clé au B2.',
      [
        'Rank certainty: muss > dürfte > könnte',
        'Guess about present and past',
        'Use Futur I and II for assumptions',
        'Add adverbs of certainty',
      ],
      [
        'Classer la certitude : muss > dürfte > könnte',
        'Supposer sur le présent et le passé',
        'Employer le Futur I et II pour les suppositions',
        'Ajouter des adverbes de certitude',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Modal verbs of certainty', 'Modaux de certitude',
      'muss, dürfte, kann, könnte: from sure to possible.', 'muss, dürfte, kann, könnte : du certain au possible.',
    ),
    vocab('sp-vermutungen-vermuten', 'vermuten', 'to assume, to suspect', 'supposer', null, 'fer-MU-ten', 'fer-MOO-ten', ['Ich vermute, dass er verschlafen hat.', 'I suspect he overslept.', 'Je suppose qu’il a dormi trop longtemps.']),
    vocab('sp-vermutungen-wahrscheinlich', 'wahrscheinlich', 'probably', 'probablement', null, 'wahr-SCHEIN-lich', 'vahr-SHINE-likh', ['Er kommt wahrscheinlich später.', 'He will probably come later.', 'Il viendra probablement plus tard.']),
    grammar(
      'sp-vm-modal',
      ['Degrees of certainty', 'Degrés de certitude'],
      [
        '| Modal | Certainty | Example |\n|---|---|---|\n| **muss** | ≈ 95 % sure | *Er **muss** zu Hause sein.* |\n| **dürfte** | ≈ 80 % probable | *Er **dürfte** zu Hause sein.* |\n| **kann / könnte** | ≈ 50 % possible | *Er **könnte** zu Hause sein.* |\n| **kann nicht** | sure it is **not** so | *Er **kann nicht** zu Hause sein.* |\n\nThe **infinitive** gives the **present** meaning. This use is **different** from the normal meaning (*muss* = has to).',
        '| Modal | Certitude | Exemple |\n|---|---|---|\n| **muss** | ≈ 95 % sûr | *Er **muss** zu Hause sein.* |\n| **dürfte** | ≈ 80 % probable | *Er **dürfte** zu Hause sein.* |\n| **kann / könnte** | ≈ 50 % possible | *Er **könnte** zu Hause sein.* |\n| **kann nicht** | sûr que ce n’est **pas** ainsi | *Er **kann nicht** zu Hause sein.* |\n\nL’**infinitif** donne le sens **présent**. Cet emploi **diffère** du sens habituel (*muss* = doit).',
      ],
      [
        ['Sie muss sehr müde sein.', 'She must be very tired.', 'Elle doit être très fatiguée.'],
        ['Das dürfte nicht schwer sein.', 'That probably isn’t hard.', 'Ça ne devrait pas être difficile.'],
      ],
    ),
    mc(
      'sp-vm-e1',
      ['Which modal expresses the HIGHEST certainty?', 'Quel modal exprime la PLUS grande certitude ?'],
      ['könnte', 'dürfte', 'muss'], ['könnte', 'dürfte', 'muss'], 2,
      ['muss > dürfte > könnte', 'muss > dürfte > könnte'],
    ),
    fb(
      'sp-vm-e2',
      ['Er ___ zu Hause sein. (probably — dürfte)', 'Er ___ zu Hause sein. (probablement — dürfte)'],
      'dürfte',
      ['Konjunktiv II of dürfen', 'Konjunktiv II de dürfen'],
    ),
    fb(
      'sp-vm-e3',
      ['Das ___ nicht stimmen! (can’t be true)', 'Das ___ nicht stimmen ! (ne peut pas être vrai)'],
      'kann',
      ['kann nicht = impossible', 'kann nicht = impossible'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Guessing about the past', 'Supposer sur le passé',
      'modal + Partizip II + haben / sein.', 'modal + Partizip II + haben / sein.',
    ),
    vocab('sp-vermutungen-verlieren', 'verlieren', 'to lose', 'perdre', null, 'fer-LIE-ren', 'fer-LEE-ren', ['Er muss den Schlüssel verloren haben.', 'He must have lost the key.', 'Il doit avoir perdu la clé.']),
    vocab('sp-vermutungen-abreisen', 'abreisen', 'to leave (on a trip)', 'partir (en voyage)', null, 'AB-rei-sen', 'AHP-ry-zen', ['Sie dürfte schon abgereist sein.', 'She has probably already left.', 'Elle est probablement déjà partie.']),
    grammar(
      'sp-vm-past',
      ['Modal + Partizip II + haben/sein', 'Modal + Partizip II + haben/sein'],
      [
        'To guess about the **past**, keep the modal in the **present** and use the **perfect infinitive** (**Partizip II + haben/sein**) at the end:\n\n- *Er **muss** den Schlüssel **verloren haben**.* — he must have lost the key.\n- *Sie **dürfte** schon **abgereist sein**.* — she has probably already left.\n- *Das **kann** nicht **stimmen**.* → *Das **kann** nicht **gestimmt haben**.*\n\n**Auxiliary:** **sein** for verbs of movement / change of state, otherwise **haben**.',
        'Pour supposer sur le **passé**, garde le modal au **présent** et emploie l’**infinitif passé** (**Partizip II + haben/sein**) à la fin :\n\n- *Er **muss** den Schlüssel **verloren haben**.* — il doit avoir perdu la clé.\n- *Sie **dürfte** schon **abgereist sein**.* — elle est probablement déjà partie.\n- *Das **kann** nicht **stimmen**.* → *Das **kann** nicht **gestimmt haben**.*\n\n**Auxiliaire :** **sein** pour les verbes de mouvement / changement d’état, sinon **haben**.',
      ],
      [
        ['Er muss das Auto gestohlen haben.', 'He must have stolen the car.', 'Il doit avoir volé la voiture.'],
        ['Sie könnte den Zug verpasst haben.', 'She might have missed the train.', 'Elle a peut-être raté le train.'],
      ],
    ),
    wo(
      'sp-vm-e4',
      ['gestohlen', 'Er', 'das Auto', 'muss', 'haben'],
      ['Er', 'muss', 'das Auto', 'gestohlen', 'haben'],
      ['Modal in position 2, perfect infinitive at the end.', 'Modal en position 2, infinitif passé à la fin.'],
    ),
    mc(
      'sp-vm-e5',
      ['"Sie dürfte schon abgereist sein" means …', '« Sie dürfte schon abgereist sein » signifie …'],
      ['She has probably already left.', 'She is allowed to leave.', 'She must leave now.'], ['Elle est probablement déjà partie.', 'Elle a le droit de partir.', 'Elle doit partir maintenant.'], 0,
      ['dürfte + Partizip II + sein = probable guess about the past.', 'dürfte + Partizip II + sein = supposition probable sur le passé.'],
    ),
    lc(
      'sp-vm-e6',
      ['Listen. How sure is the speaker?', 'Écoute. À quel point le locuteur est-il sûr ?'],
      'Er muss den Schlüssel verloren haben.',
      ['Very sure', 'Not sure at all', 'Asking permission'], ['Très sûr', 'Pas du tout sûr', 'Demande la permission'], 0,
      ['muss = confident guess.', 'muss = supposition assurée.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Futur I and II for assumptions', 'Futur I et II pour les suppositions',
      'werden + infinitive guesses about the present, werden + perfect infinitive about the past.', 'werden + infinitif suppose le présent, werden + infinitif passé le passé.',
    ),
    vocab('sp-vermutungen-wohl', 'wohl', 'probably (particle)', 'sans doute (particule)', null, 'WOHL', 'vohl', ['Sie wird wohl schon schlafen.', 'She is probably asleep already.', 'Elle dort sans doute déjà.']),
    grammar(
      'sp-vm-futur',
      ['Futur I and Futur II', 'Futur I et Futur II'],
      [
        'The **Futur** is often used for **assumptions**, not for the future:\n\n- **Futur I** (*werden + Infinitiv*) = guess about the **present**: *Er **wird** zu Hause **sein**.* — he is probably home.\n- **Futur II** (*werden + Partizip II + haben/sein*) = guess about the **past**: *Er **wird** das **vergessen haben**.* — he has probably forgotten it.\n\nAdd **wohl, wahrscheinlich, sicher** to make it clearer: *Sie **wird wohl** schon **schlafen**.*',
        'Le **Futur** sert souvent aux **suppositions**, pas à l’avenir :\n\n- **Futur I** (*werden + infinitif*) = supposition sur le **présent** : *Er **wird** zu Hause **sein**.* — il est probablement chez lui.\n- **Futur II** (*werden + Partizip II + haben/sein*) = supposition sur le **passé** : *Er **wird** das **vergessen haben**.* — il l’a probablement oublié.\n\nAjoute **wohl, wahrscheinlich, sicher** pour clarifier : *Sie **wird wohl** schon **schlafen**.*',
      ],
      [
        ['Er wird wohl krank sein.', 'He is probably ill.', 'Il est sans doute malade.'],
        ['Sie wird den Termin vergessen haben.', 'She has probably forgotten the appointment.', 'Elle a probablement oublié le rendez-vous.'],
      ],
    ),
    fb(
      'sp-vm-e7',
      ['Er ___ wohl krank sein. (werden)', 'Er ___ wohl krank sein. (werden)'],
      'wird',
      ['er wird', 'er wird'],
    ),
    mc(
      'sp-vm-e8',
      ['Which sentence guesses about the PAST?', 'Quelle phrase suppose sur le PASSÉ ?'],
      ['Er wird das vergessen haben.', 'Er wird zu Hause sein.', 'Er muss zu Hause sein.'], ['Er wird das vergessen haben.', 'Er wird zu Hause sein.', 'Er muss zu Hause sein.'], 0,
      ['Futur II: Partizip II + haben.', 'Futur II : Partizip II + haben.'],
    ),
    lc(
      'sp-vm-e9',
      ['Listen. What does the speaker guess?', 'Écoute. Que suppose le locuteur ?'],
      'Sie wird wohl schon schlafen.',
      ['She is probably asleep', 'She is working', 'She is on holiday'], ['Elle dort probablement', 'Elle travaille', 'Elle est en vacances'], 0,
      ['wohl = probably.', 'wohl = probablement.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Adverbs of certainty', 'Adverbes de certitude',
      'Sicherlich, wahrscheinlich, vielleicht, anscheinend …', 'Sicherlich, wahrscheinlich, vielleicht, anscheinend …',
    ),
    vocab('sp-vermutungen-sicherlich', 'sicherlich', 'surely', 'sûrement', null, 'SI-cher-lich', 'ZI-kher-likh', ['Das war sicherlich ein Missverständnis.', 'That was surely a misunderstanding.', 'C’était sûrement un malentendu.']),
    vocab('sp-vermutungen-anscheinend', 'anscheinend', 'apparently', 'apparemment', null, 'AN-schei-nend', 'AHN-shy-nent', ['Anscheinend ist er krank.', 'Apparently he is ill.', 'Apparemment il est malade.']),
    grammar(
      'sp-vm-adv',
      ['From certain to doubtful', 'Du certain au douteux'],
      [
        '| Certainty | Adverbs |\n|---|---|\n| **very high** | sicherlich · bestimmt · zweifellos · garantiert |\n| **high** | wahrscheinlich · vermutlich · offenbar · anscheinend |\n| **medium** | vielleicht · möglicherweise · eventuell |\n| **low** | kaum · wohl kaum · schwerlich |\n\nCombine with the modal for more nuance: *Er **muss** **sicherlich** krank sein.* Position: usually after the verb: *Er kommt **wahrscheinlich** später.*',
        '| Certitude | Adverbes |\n|---|---|\n| **très élevée** | sicherlich · bestimmt · zweifellos · garantiert |\n| **élevée** | wahrscheinlich · vermutlich · offenbar · anscheinend |\n| **moyenne** | vielleicht · möglicherweise · eventuell |\n| **faible** | kaum · wohl kaum · schwerlich |\n\nCombine avec le modal pour plus de nuance : *Er **muss** **sicherlich** krank sein.* Position : généralement après le verbe : *Er kommt **wahrscheinlich** später.*',
      ],
      [
        ['Er hat es bestimmt vergessen.', 'He has surely forgotten it.', 'Il l’a sûrement oublié.'],
        ['Möglicherweise verspätet sich der Zug.', 'The train may possibly be delayed.', 'Le train sera peut-être en retard.'],
      ],
    ),
    mc(
      'sp-vm-e10',
      ['Which adverb means "possibly"?', 'Quel adverbe signifie « éventuellement » ?'],
      ['möglicherweise', 'zweifellos', 'bestimmt'], ['möglicherweise', 'zweifellos', 'bestimmt'], 0,
      ['möglich = possible.', 'möglich = possible.'],
    ),

    wrapup(
      '**Modal verbs:** *muss* (sure) · *dürfte* (probable) · *kann/könnte* (possible) · *kann nicht* (impossible).\n\n**Past:** modal + **Partizip II + haben/sein** (*Er muss es vergessen haben*).\n\n**Futur:** *Er wird wohl zu Hause sein* (present) · *Er wird es vergessen haben* (past).\n\n**Adverbs:** sicherlich · wahrscheinlich · vielleicht · möglicherweise · kaum.',
      '**Modaux :** *muss* (sûr) · *dürfte* (probable) · *kann/könnte* (possible) · *kann nicht* (impossible).\n\n**Passé :** modal + **Partizip II + haben/sein** (*Er muss es vergessen haben*).\n\n**Futur :** *Er wird wohl zu Hause sein* (présent) · *Er wird es vergessen haben* (passé).\n\n**Adverbes :** sicherlich · wahrscheinlich · vielleicht · möglicherweise · kaum.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Assumptions', 'Quiz final : suppositions'),
    match(
      'sp-vm-q1',
      [
        ['muss', 'very sure', 'très sûr'],
        ['dürfte', 'probably', 'probablement'],
        ['könnte', 'possibly', 'peut-être'],
        ['kann nicht', 'impossible', 'impossible'],
      ],
      ['Match each modal with its certainty.', 'Associe chaque modal à sa certitude.'],
    ),
    fb(
      'sp-vm-q2',
      ['Sie ___ sehr müde sein. (must — sure)', 'Sie ___ sehr müde sein. (doit — sûr)'],
      'muss',
      ['muss = sure', 'muss = sûr'],
    ),
    fb(
      'sp-vm-q3',
      ['Er ___ wohl zu Hause sein. (werden)', 'Er ___ wohl zu Hause sein. (werden)'],
      'wird',
      ['Futur I', 'Futur I'],
    ),
    wo(
      'sp-vm-q4',
      ['verloren', 'Er', 'den Schlüssel', 'muss', 'haben'],
      ['Er', 'muss', 'den Schlüssel', 'verloren', 'haben'],
      ['Modal + Partizip II + haben.', 'Modal + Partizip II + haben.'],
    ),
    mc(
      'sp-vm-q5',
      ['"Das kann nicht stimmen" means …', '« Das kann nicht stimmen » signifie …'],
      ['That cannot be true', 'That does not matter', 'That may be true'], ['Ça ne peut pas être vrai', 'Ça n’a pas d’importance', 'Ça peut être vrai'], 0,
      ['kann nicht = impossible.', 'kann nicht = impossible.'],
    ),
    mc(
      'sp-vm-q6',
      ['Which uses Futur II to guess about the past?', 'Laquelle emploie le Futur II pour supposer sur le passé ?'],
      ['Er wird das vergessen haben.', 'Er wird kommen.', 'Er wird gerade schlafen.'], ['Er wird das vergessen haben.', 'Er wird kommen.', 'Er wird gerade schlafen.'], 0,
      ['werden + Partizip II + haben.', 'werden + Partizip II + haben.'],
    ),
    mc(
      'sp-vm-q7',
      ['Which adverb expresses the LEAST certainty?', 'Quel adverbe exprime la MOINS de certitude ?'],
      ['vielleicht', 'sicherlich', 'bestimmt'], ['vielleicht', 'sicherlich', 'bestimmt'], 0,
      ['vielleicht = maybe.', 'vielleicht = peut-être.'],
    ),
    fb(
      'sp-vm-q8',
      ['Er hat es ___ vergessen. (surely — bestimmt)', 'Er hat es ___ vergessen. (sûrement — bestimmt)'],
      'bestimmt',
      ['bestimmt = surely', 'bestimmt = sûrement'],
    ),
    lc(
      'sp-vm-q9',
      ['Listen. How sure is the speaker?', 'Écoute. À quel point le locuteur est-il sûr ?'],
      'Er könnte zu Hause sein, aber ich weiß es nicht.',
      ['Not sure', 'Very sure', 'He is at work'], ['Pas sûr', 'Très sûr', 'Il est au travail'], 0,
      ['könnte = possibly.', 'könnte = peut-être.'],
    ),
    lc(
      'sp-vm-q10',
      ['Listen. What does the speaker guess?', 'Écoute. Que suppose le locuteur ?'],
      'Sie dürfte schon abgereist sein.',
      ['She has probably left', 'She is about to leave', 'She will never leave'], ['Elle est probablement partie', 'Elle va partir', 'Elle ne partira jamais'], 0,
      ['dürfte + sein = probable.', 'dürfte + sein = probable.'],
    ),
    mc(
      'sp-vm-q11',
      ['"Sie könnte den Zug verpasst haben" means …', '« Sie könnte den Zug verpasst haben » signifie …'],
      ['She might have missed the train', 'She must catch the train', 'She will miss the train'], ['Elle a peut-être raté le train', 'Elle doit prendre le train', 'Elle va rater le train'], 0,
      ['könnte + perfect infinitive = might have.', 'könnte + infinitif passé = a peut-être.'],
    ),
    mc(
      'sp-vm-q12',
      ['Which auxiliary for "abreisen" in the perfect infinitive?', 'Quel auxiliaire pour « abreisen » à l’infinitif passé ?'],
      ['sein', 'haben', 'werden'], ['sein', 'haben', 'werden'], 0,
      ['Verbs of movement take sein.', 'Les verbes de mouvement prennent sein.'],
    ),
  ],
});

import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const wechselpraepositionen = defineSpecial({
  slug: 'wechselpraepositionen',
  number: 13,
  group: 'cases',
  levels: ['A1', 'B1'],
  related: ['l9', 'l11', 'a2-l8', 'a2-l22'],
  title: ['Wechselpräpositionen', 'Two-way prepositions', 'Les prépositions à double régime'],
  theme: [
    'Wo? with the dative, wohin? with the accusative: the nine two-way prepositions and the pairs stellen/stehen, legen/liegen, setzen/sitzen, hängen',
    'Wo ? avec le datif, wohin ? avec l’accusatif : les neuf prépositions à double régime et les paires stellen/stehen, legen/liegen, setzen/sitzen, hängen',
  ],
  goals: [
    'Ask the right question: wo? (location) or wohin? (direction)',
    'Use the nine prepositions an, auf, hinter, in, neben, über, unter, vor, zwischen with the right case',
    'Choose between stellen/stehen, legen/liegen, setzen/sitzen and hängen',
    'Recognise the contractions im, am, ins, ans, aufs and the cases where the rule does not apply',
  ],
  goalsFr: [
    'Poser la bonne question : wo ? (lieu) ou wohin ? (direction)',
    'Utiliser les neuf prépositions an, auf, hinter, in, neben, über, unter, vor, zwischen avec le bon cas',
    'Choisir entre stellen/stehen, legen/liegen, setzen/sitzen et hängen',
    'Reconnaître les contractions im, am, ins, ans, aufs et les cas où la règle ne s’applique pas',
  ],
  steps: [
    intro(
      'Wo steht die Lampe, wohin stelle ich sie?', 'Où est la lampe, où la mets-je ?',
      'Nine small prepositions give German learners trouble because they take two cases. The rule is short: if the sentence answers WO? (where, a fixed place), use the dative; if it answers WOHIN? (where to, a movement towards a place), use the accusative. Add the pairs of verbs that go with them and you can describe any room.',
      'Neuf petites prépositions posent problème car elles prennent deux cas. La règle est courte : si la phrase répond à WO ? (où, lieu fixe), utilise le datif ; si elle répond à WOHIN ? (vers où, mouvement vers un lieu), utilise l’accusatif. Ajoute les paires de verbes qui vont avec et tu peux décrire n’importe quelle pièce.',
      [
        'The wo? / wohin? test',
        'The nine two-way prepositions with their meanings',
        'The verb pairs stellen/stehen, legen/liegen, setzen/sitzen, hängen',
        'Contractions: im, am, ins, ans, aufs',
        'When the rule does not apply: time, nach, zu, idioms',
      ],
      [
        'Le test wo ? / wohin ?',
        'Les neuf prépositions à double régime et leurs sens',
        'Les paires de verbes stellen/stehen, legen/liegen, setzen/sitzen, hängen',
        'Contractions : im, am, ins, ans, aufs',
        'Quand la règle ne s’applique pas : temps, nach, zu, expressions',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Wo or wohin?', 'Wo ou wohin ?',
      'One question decides the case.', 'Une question décide du cas.',
    ),
    grammar(
      'sp-wp-rule',
      ['Dative for position, accusative for direction', 'Datif pour la position, accusatif pour la direction'],
      [
        'These **nine prepositions** can take the dative or the accusative: **an, auf, hinter, in, neben, über, unter, vor, zwischen**.\n\n- **Wo?** — position, no change of place → **dative**: Das Buch liegt **auf dem Tisch**.\n- **Wohin?** — movement towards a place → **accusative**: Ich lege das Buch **auf den Tisch**.\n\nThe verb tells you which one: **sein, stehen, liegen, sitzen, hängen, wohnen, bleiben, arbeiten** answer *wo?*; **gehen, fahren, kommen, legen, stellen, setzen, stecken, fliegen** answer *wohin?*.\n\n**The dative articles:** dem (m), der (f), dem (n), den + -n (pl).\n**The accusative articles:** den (m), die (f), das (n), die (pl).\n\nThe article changes in every gender: **auf dem Tisch / auf den Tisch** (m), **in der Küche / in die Küche** (f), **in dem Haus / in das Haus** (n), **auf den Tischen / auf die Tische** (pl).',
        'Ces **neuf prépositions** peuvent prendre le datif ou l’accusatif : **an, auf, hinter, in, neben, über, unter, vor, zwischen**.\n\n- **Wo ?** — position, sans changement de lieu → **datif** : Das Buch liegt **auf dem Tisch**.\n- **Wohin ?** — mouvement vers un lieu → **accusatif** : Ich lege das Buch **auf den Tisch**.\n\nLe verbe indique lequel : **sein, stehen, liegen, sitzen, hängen, wohnen, bleiben, arbeiten** répondent à *wo ?* ; **gehen, fahren, kommen, legen, stellen, setzen, stecken, fliegen** répondent à *wohin ?*.\n\n**Articles au datif :** dem (m), der (f), dem (n), den + -n (pl).\n**Articles à l’accusatif :** den (m), die (f), das (n), die (pl).\n\nL’article change à tous les genres : **auf dem Tisch / auf den Tisch** (m), **in der Küche / in die Küche** (f), **in dem Haus / in das Haus** (n), **auf den Tischen / auf die Tische** (pl).',
      ],
      [
        ['Ich bin in der Küche.', 'I am in the kitchen.', 'Je suis dans la cuisine.'],
        ['Ich gehe in die Küche.', 'I am going into the kitchen.', 'Je vais dans la cuisine.'],
        ['Die Katze sitzt auf dem Sofa.', 'The cat is sitting on the sofa.', 'Le chat est assis sur le canapé.'],
        ['Die Katze springt auf das Sofa.', 'The cat jumps onto the sofa.', 'Le chat saute sur le canapé.'],
      ],
      'conjugation-table',
    ),
    vocab('sp-wechselpraepositionen-kueche', 'die Küche', 'the kitchen', 'la cuisine', 'die', 'KÜ-che', 'dee KEW-khuh', ['Wir essen in der Küche.', 'We eat in the kitchen.', 'Nous mangeons dans la cuisine.']),
    mc(
      'sp-wp-e1',
      ['"Ich gehe in ___ Küche." Which article?', '« Ich gehe in ___ Küche. » Quel article ?'],
      ['die', 'der', 'dem'], ['die', 'der', 'dem'], 0,
      ['gehen = wohin? → accusative: die Küche.', 'gehen = wohin ? → accusatif : die Küche.'],
    ),
    mc(
      'sp-wp-e2',
      ['"Ich bin in ___ Küche." Which article?', '« Ich bin in ___ Küche. » Quel article ?'],
      ['der', 'die', 'dem'], ['der', 'die', 'dem'], 0,
      ['sein = wo? → dative feminine: der Küche.', 'sein = wo ? → datif féminin : der Küche.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Nine prepositions, nine meanings', 'Neuf prépositions, neuf sens',
      'What each one means in space.', 'Ce que chacune signifie dans l’espace.',
    ),
    grammar(
      'sp-wp-meanings',
      ['The nine prepositions in a room', 'Les neuf prépositions dans une pièce'],
      [
        'Picture a lamp in a room:\n\n- **an** — at, on (touching a vertical surface or edge): **an der Wand**, **am Fenster**, **am See**\n- **auf** — on top of (a horizontal surface): **auf dem Tisch**, **auf der Straße**\n- **in** — inside: **in der Tasche**, **im Zimmer**\n- **vor** — in front of: **vor dem Haus**\n- **hinter** — behind: **hinter dem Schrank**\n- **neben** — next to: **neben dem Bett**\n- **über** — above, over (not touching): **über dem Tisch**\n- **unter** — under, below: **unter dem Bett**\n- **zwischen** — between two things: **zwischen dem Sofa und dem Tisch**\n\n**Tip:** an = touching the side, auf = touching from above, über = no touch.',
        'Imagine une lampe dans une pièce :\n\n- **an** — à, contre (touchant une surface verticale ou un bord) : **an der Wand**, **am Fenster**, **am See**\n- **auf** — sur (une surface horizontale) : **auf dem Tisch**, **auf der Straße**\n- **in** — dans : **in der Tasche**, **im Zimmer**\n- **vor** — devant : **vor dem Haus**\n- **hinter** — derrière : **hinter dem Schrank**\n- **neben** — à côté de : **neben dem Bett**\n- **über** — au-dessus de (sans toucher) : **über dem Tisch**\n- **unter** — sous, en dessous de : **unter dem Bett**\n- **zwischen** — entre deux choses : **zwischen dem Sofa und dem Tisch**\n\n**Astuce :** an = touche le côté, auf = touche par-dessus, über = pas de contact.',
      ],
      [
        ['Das Bild hängt an der Wand.', 'The picture hangs on the wall.', 'Le tableau est accroché au mur.'],
        ['Die Tasche liegt unter dem Bett.', 'The bag is under the bed.', 'Le sac est sous le lit.'],
        ['Der Tisch steht zwischen dem Sofa und dem Regal.', 'The table is between the sofa and the shelf.', 'La table est entre le canapé et l’étagère.'],
        ['Die Lampe hängt über dem Tisch.', 'The lamp hangs above the table.', 'La lampe est suspendue au-dessus de la table.'],
      ],
    ),
    vocab('sp-wechselpraepositionen-wand', 'die Wand', 'the wall', 'le mur', 'die', 'WAND', 'dee VAHNT', ['Das Bild hängt an der Wand.', 'The picture hangs on the wall.', 'Le tableau est accroché au mur.']),
    vocab('sp-wechselpraepositionen-schrank', 'der Schrank', 'the cupboard, wardrobe', 'l’armoire, le placard', 'der', 'SCHRANK', 'dair SHRAHNK', ['Die Jacke hängt im Schrank.', 'The jacket is hanging in the wardrobe.', 'La veste est pendue dans l’armoire.']),
    vocab('sp-wechselpraepositionen-regal', 'das Regal', 'the shelf', 'l’étagère', 'das', 're-GAL', 'dahs ray-GAHL', ['Die Bücher stehen im Regal.', 'The books are on the shelf.', 'Les livres sont sur l’étagère.']),
    match(
      'sp-wp-e3',
      [
        ['an', 'at, on the side', 'contre, à'],
        ['auf', 'on top of', 'sur'],
        ['hinter', 'behind', 'derrière'],
        ['neben', 'next to', 'à côté de'],
        ['zwischen', 'between', 'entre'],
      ],
      ['Match each preposition with its meaning.', 'Associe chaque préposition à son sens.'],
    ),
    fb(
      'sp-wp-e4',
      ['Die Katze schläft ___ dem Bett. (under)', 'Die Katze schläft ___ dem Bett. (sous)'],
      'unter',
      ['unter = under.', 'unter = sous.'],
    ),
    fb(
      'sp-wp-e5',
      ['Das Bild hängt ___ der Wand. (on the wall, touching)', 'Das Bild hängt ___ der Wand. (au mur, contre)'],
      'an',
      ['an = against a vertical surface.', 'an = contre une surface verticale.'],
    ),
    mc(
      'sp-wp-e6',
      ['"Das Auto steht ___ dem Haus." (in front of)', '« Das Auto steht ___ dem Haus. » (devant)'],
      ['vor', 'für', 'hinter'], ['vor', 'für', 'hinter'], 0,
      ['vor = in front of.', 'vor = devant.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Verb pairs: stellen/stehen and co.', 'Paires de verbes : stellen/stehen et cie',
      'The verb already tells you the case.', 'Le verbe indique déjà le cas.',
    ),
    grammar(
      'sp-wp-verbs',
      ['Put and be put', 'Mettre et être mis'],
      [
        'German is more precise than English: it has **separate verbs** for the movement and for the result. The movement verb takes the **accusative** (wohin?), the position verb the **dative** (wo?).\n\n- **stellen** (to put upright) → **stehen** (to stand): Ich **stelle** die Flasche **auf den Tisch**. Die Flasche **steht auf dem Tisch**.\n- **legen** (to lay flat) → **liegen** (to lie): Ich **lege** das Buch **auf den Tisch**. Das Buch **liegt auf dem Tisch**.\n- **setzen** (to seat) → **sitzen** (to sit): Ich **setze** das Kind **auf den Stuhl**. Das Kind **sitzt auf dem Stuhl**.\n- **hängen** (to hang): *hängen (weak, transitive)* → Ich **hänge** das Bild **an die Wand**. *hängen (strong, intransitive)* → Das Bild **hängt an der Wand**.\n- **stecken** (to stick in): Ich **stecke** den Schlüssel **in die Tasche**. Der Schlüssel **steckt in der Tasche**.\n\n**Memory trick:** the **weak** verbs (stellen, legen, setzen) need an object and an accusative; the **strong** verbs (stehen, liegen, sitzen) have no object and a dative. A reflexive form: Ich **setze mich** auf den Stuhl. Ich **sitze** auf dem Stuhl.',
        'L’allemand est plus précis que le français : il a des **verbes distincts** pour le mouvement et pour le résultat. Le verbe de mouvement prend l’**accusatif** (wohin ?), le verbe de position le **datif** (wo ?).\n\n- **stellen** (poser debout) → **stehen** (être debout) : Ich **stelle** die Flasche **auf den Tisch**. Die Flasche **steht auf dem Tisch**.\n- **legen** (poser à plat) → **liegen** (être couché) : Ich **lege** das Buch **auf den Tisch**. Das Buch **liegt auf dem Tisch**.\n- **setzen** (asseoir) → **sitzen** (être assis) : Ich **setze** das Kind **auf den Stuhl**. Das Kind **sitzt auf dem Stuhl**.\n- **hängen** (accrocher) : *hängen (faible, transitif)* → Ich **hänge** das Bild **an die Wand**. *hängen (fort, intransitif)* → Das Bild **hängt an der Wand**.\n- **stecken** (enfoncer) : Ich **stecke** den Schlüssel **in die Tasche**. Der Schlüssel **steckt in der Tasche**.\n\n**Astuce :** les verbes **faibles** (stellen, legen, setzen) ont besoin d’un objet et de l’accusatif ; les verbes **forts** (stehen, liegen, sitzen) n’ont pas d’objet et ont le datif. Forme réfléchie : Ich **setze mich** auf den Stuhl. Ich **sitze** auf dem Stuhl.',
      ],
      [
        ['Ich stelle die Lampe neben das Bett.', 'I put the lamp next to the bed.', 'Je pose la lampe à côté du lit.'],
        ['Die Lampe steht neben dem Bett.', 'The lamp stands next to the bed.', 'La lampe est à côté du lit.'],
        ['Sie legt das Handy auf den Tisch.', 'She puts the phone on the table.', 'Elle pose le téléphone sur la table.'],
        ['Das Handy liegt auf dem Tisch.', 'The phone is lying on the table.', 'Le téléphone est sur la table.'],
      ],
    ),
    vocab('sp-wechselpraepositionen-stellen', 'stellen', 'to put (upright)', 'poser, mettre debout', null, 'STEL-len', 'SHTEL-len', ['Stell die Flasche auf den Tisch!', 'Put the bottle on the table!', 'Pose la bouteille sur la table !']),
    vocab('sp-wechselpraepositionen-legen', 'legen', 'to lay, put (flat)', 'poser à plat, coucher', null, 'LEH-gen', 'LAY-gen', ['Leg das Buch bitte auf den Stuhl.', 'Please put the book on the chair.', 'Pose le livre sur la chaise, s’il te plaît.']),
    fb(
      'sp-wp-e7',
      ['Ich ___ die Flasche auf den Tisch. (put upright)', 'Ich ___ die Flasche auf den Tisch. (poser debout)'],
      'stelle',
      ['Movement verb: stellen (weak).', 'Verbe de mouvement : stellen (faible).'],
    ),
    fb(
      'sp-wp-e8',
      ['Die Flasche ___ auf dem Tisch. (stand)', 'Die Flasche ___ auf dem Tisch. (être debout)'],
      'steht',
      ['Position verb: stehen → steht.', 'Verbe de position : stehen → steht.'],
    ),
    fb(
      'sp-wp-e9',
      ['Das Kind ___ auf dem Stuhl. (sit)', 'Das Kind ___ auf dem Stuhl. (être assis)'],
      'sitzt',
      ['Position verb: sitzen → sitzt.', 'Verbe de position : sitzen → sitzt.'],
    ),
    mc(
      'sp-wp-e10',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich lege das Buch auf den Tisch.', 'Ich liege das Buch auf den Tisch.', 'Ich lege das Buch auf dem Tisch.'],
      ['Ich lege das Buch auf den Tisch.', 'Ich liege das Buch auf den Tisch.', 'Ich lege das Buch auf dem Tisch.'], 0,
      ['legen = movement → accusative (den Tisch).', 'legen = mouvement → accusatif (den Tisch).'],
    ),
    mc(
      'sp-wp-e11',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'Das Bild hängt an den Wand.'],
      ['Das Bild hängt an der Wand.', 'Das Bild hängt an die Wand.', 'Das Bild hängt an den Wand.'], 0,
      ['hängt (intransitive) = position → dative feminine: der Wand.', 'hängt (intransitif) = position → datif féminin : der Wand.'],
    ),
    wo('sp-wp-e12', ['die', 'Ich', 'neben', 'stelle', 'Lampe', 'das', 'Bett'], ['Ich', 'stelle', 'die', 'Lampe', 'neben', 'das', 'Bett'], ['Verb in second position, then object, then place.', 'Verbe en deuxième position, puis objet, puis lieu.']),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Contractions and places', 'Contractions et lieux',
      'im, am, ins, ans — and the small words that fuse.', 'im, am, ins, ans — et les petits mots qui fusionnent.',
    ),
    grammar(
      'sp-wp-contractions',
      ['Contractions and typical pairs', 'Contractions et paires typiques'],
      [
        'The preposition and the article often melt together in speech and in writing:\n\n- **in dem → im** (wo?): **im Kino**, **im Garten**\n- **in das → ins** (wohin?): **ins Kino**, **ins Bett**\n- **an dem → am** (wo?): **am Fenster**, **am Meer**\n- **an das → ans** (wohin?): **ans Fenster**, **ans Meer**\n- **auf das → aufs**: **aufs Land**\n- **hinter dem → hinterm**, **über dem → überm**, **unter dem → unterm** (spoken style)\n\n**Places often seen with wo? and wohin?:**\n\n- **in** + buildings and rooms: **in der Schule / in die Schule**, **im Supermarkt / in den Supermarkt**\n- **auf** + open places and events: **auf der Post / auf die Post**, **auf dem Markt / auf den Markt**, **auf der Party / auf die Party**\n- **an** + water and edges: **am Strand / an den Strand**, **am Fluss / an den Fluss**',
        'La préposition et l’article se fondent souvent à l’oral comme à l’écrit :\n\n- **in dem → im** (wo ?) : **im Kino**, **im Garten**\n- **in das → ins** (wohin ?) : **ins Kino**, **ins Bett**\n- **an dem → am** (wo ?) : **am Fenster**, **am Meer**\n- **an das → ans** (wohin ?) : **ans Fenster**, **ans Meer**\n- **auf das → aufs** : **aufs Land**\n- **hinter dem → hinterm**, **über dem → überm**, **unter dem → unterm** (style oral)\n\n**Lieux souvent vus avec wo ? et wohin ? :**\n\n- **in** + bâtiments et pièces : **in der Schule / in die Schule**, **im Supermarkt / in den Supermarkt**\n- **auf** + lieux ouverts et événements : **auf der Post / auf die Post**, **auf dem Markt / auf den Markt**, **auf der Party / auf die Party**\n- **an** + eau et bords : **am Strand / an den Strand**, **am Fluss / an den Fluss**',
      ],
      [
        ['Wir sind heute im Kino.', 'We are at the cinema today.', 'Nous sommes au cinéma aujourd’hui.'],
        ['Gehen wir morgen ins Kino?', 'Shall we go to the cinema tomorrow?', 'On va au cinéma demain ?'],
        ['Im Sommer liegen wir am Strand.', 'In summer we lie on the beach.', 'En été, nous sommes allongés sur la plage.'],
        ['Ich fahre aufs Land.', 'I am going to the country.', 'Je vais à la campagne.'],
      ],
    ),
    vocab('sp-wechselpraepositionen-kino', 'das Kino', 'the cinema', 'le cinéma', 'das', 'KI-no', 'dahs KEE-noh', ['Wir gehen heute Abend ins Kino.', 'We are going to the cinema tonight.', 'Nous allons au cinéma ce soir.']),
    vocab('sp-wechselpraepositionen-strand', 'der Strand', 'the beach', 'la plage', 'der', 'STRAND', 'dair SHTRAHNT', ['Am Strand ist es heute voll.', 'The beach is crowded today.', 'La plage est bondée aujourd’hui.']),
    fb(
      'sp-wp-e13',
      ['Wir gehen heute Abend ___ Kino. (in das, contracted)', 'Wir gehen heute Abend ___ Kino. (in das, contracté)'],
      'ins',
      ['in das → ins.', 'in das → ins.'],
    ),
    fb(
      'sp-wp-e14',
      ['Die Kinder spielen ___ Garten. (in dem, contracted)', 'Die Kinder spielen ___ Garten. (in dem, contracté)'],
      'im',
      ['in dem → im (wo?).', 'in dem → im (wo ?).'],
    ),
    mc(
      'sp-wp-e15',
      ['"Ich fahre ___ Strand." (wohin?)', '« Ich fahre ___ Strand. » (wohin ?)'],
      ['an den', 'am', 'an dem'], ['an den', 'am', 'an dem'], 0,
      ['Direction → accusative: an den Strand.', 'Direction → accusatif : an den Strand.'],
    ),
    wo('sp-wp-e16', ['liegen', 'Wir', 'am', 'Strand'], ['Wir', 'liegen', 'am', 'Strand'], ['Subject, verb, then am + noun.', 'Sujet, verbe, puis am + nom.']),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Where the rule stops', 'Là où la règle s’arrête',
      'Time expressions, nach, zu and fixed phrases.', 'Expressions de temps, nach, zu et locutions figées.',
    ),
    grammar(
      'sp-wp-limits',
      ['Time, nach / zu, and a quick method', 'Temps, nach / zu et méthode rapide'],
      [
        '**1. Time expressions take the dative:**\n\n- **am** Montag · **im** Juli · **in** einer Woche · **vor** einem Jahr · **zwischen** zwei und drei Uhr\n\n**2. People and many places use zu or nach, not the nine prepositions:**\n\n- **zu + dative** for persons and places: Ich gehe **zum** Arzt, **zur** Schule, **zu** meiner Oma.\n- **nach** for cities, countries without an article, directions: **nach** Berlin, **nach** Hause, **nach** links.\n- Countries **with an article** use in + accusative: **in die** Schweiz, **in die** USA, **in den** Iran.\n\n**3. Fixed phrases** to learn: **auf dem Land / aufs Land**, **an der Ecke**, **vor allem**, **an Ostern**, **in Ordnung**.\n\n**Quick method:**\n\n- 1. Look at the verb: movement or rest?\n- 2. Movement (wohin?) → **accusative**; rest (wo?) → **dative**.\n- 3. Is it a person, a city or a time? Then use zu, nach, or the dative.',
        '**1. Les expressions de temps prennent le datif :**\n\n- **am** Montag · **im** Juli · **in** einer Woche · **vor** einem Jahr · **zwischen** zwei und drei Uhr\n\n**2. Les personnes et beaucoup de lieux utilisent zu ou nach, pas les neuf prépositions :**\n\n- **zu + datif** pour les personnes et les lieux : Ich gehe **zum** Arzt, **zur** Schule, **zu** meiner Oma.\n- **nach** pour les villes, les pays sans article, les directions : **nach** Berlin, **nach** Hause, **nach** links.\n- Les pays **avec article** utilisent in + accusatif : **in die** Schweiz, **in die** USA, **in den** Iran.\n\n**3. Locutions figées** à apprendre : **auf dem Land / aufs Land**, **an der Ecke**, **vor allem**, **an Ostern**, **in Ordnung**.\n\n**Méthode rapide :**\n\n- 1. Regarde le verbe : mouvement ou repos ?\n- 2. Mouvement (wohin ?) → **accusatif** ; repos (wo ?) → **datif**.\n- 3. Est-ce une personne, une ville ou un moment ? Alors utilise zu, nach ou le datif.',
      ],
      [
        ['Wir treffen uns am Montag.', 'We meet on Monday.', 'Nous nous retrouvons lundi.'],
        ['Ich gehe zum Arzt.', 'I am going to the doctor.', 'Je vais chez le médecin.'],
        ['Im Sommer fahren wir nach Italien.', 'In summer we go to Italy.', 'En été, nous allons en Italie.'],
        ['Sie fliegt in die Schweiz.', 'She is flying to Switzerland.', 'Elle prend l’avion pour la Suisse.'],
      ],
    ),
    mc(
      'sp-wp-e17',
      ['"Ich gehe ___ Arzt." Which form?', '« Ich gehe ___ Arzt. » Quelle forme ?'],
      ['zum', 'ins', 'am'], ['zum', 'ins', 'am'], 0,
      ['For people: zu + dative: zum Arzt.', 'Pour les personnes : zu + datif : zum Arzt.'],
    ),
    mc(
      'sp-wp-e18',
      ['"Wir fahren ___ Berlin." Which preposition?', '« Wir fahren ___ Berlin. » Quelle préposition ?'],
      ['nach', 'in', 'zu'], ['nach', 'in', 'zu'], 0,
      ['Cities without an article use nach.', 'Les villes sans article utilisent nach.'],
    ),
    fb(
      'sp-wp-e19',
      ['Wir treffen uns ___ Montag. (am / im)', 'Wir treffen uns ___ Montag. (am / im)'],
      'am',
      ['Days: am (an dem).', 'Jours : am (an dem).'],
    ),
    match(
      'sp-wp-e20',
      [
        ['Wo ist das Buch?', 'Es liegt auf dem Tisch.', 'Il est sur la table.'],
        ['Wohin legst du das Buch?', 'Auf den Tisch.', 'Sur la table.'],
        ['Wo hängt das Bild?', 'An der Wand.', 'Au mur.'],
        ['Wohin gehen wir?', 'Ins Kino.', 'Au cinéma.'],
      ],
      ['Match each question with a fitting answer.', 'Associe chaque question à une réponse qui convient.'],
    ),

    wrapup(
      '**Wo?** (rest) → **dative**. **Wohin?** (movement) → **accusative**.\n\n**The nine:** an, auf, hinter, in, neben, über, unter, vor, zwischen.\n\n**Dative:** dem / der / dem / den + -n · **Accusative:** den / die / das / die.\n\n**Verb pairs:** stellen → stehen · legen → liegen · setzen → sitzen · hängen (weak, transitive) → hängen (strong) · stecken → stecken.\n\n**Contractions:** im (in dem), ins (in das), am (an dem), ans (an das), aufs (auf das).\n\n**Not two-way:** time = dative (am Montag, im Juli) · people → zu + dative · cities → nach · countries with article → in + accusative.',
      '**Wo ?** (repos) → **datif**. **Wohin ?** (mouvement) → **accusatif**.\n\n**Les neuf :** an, auf, hinter, in, neben, über, unter, vor, zwischen.\n\n**Datif :** dem / der / dem / den + -n · **Accusatif :** den / die / das / die.\n\n**Paires de verbes :** stellen → stehen · legen → liegen · setzen → sitzen · hängen (faible, transitif) → hängen (fort) · stecken → stecken.\n\n**Contractions :** im (in dem), ins (in das), am (an dem), ans (an das), aufs (auf das).\n\n**Pas à double régime :** temps = datif (am Montag, im Juli) · personnes → zu + datif · villes → nach · pays avec article → in + accusatif.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: two-way prepositions', 'Quiz final : prépositions à double régime'),
    mc(
      'sp-wp-q1',
      ['"Das Buch liegt auf ___ Tisch." (position)', '« Das Buch liegt auf ___ Tisch. » (position)'],
      ['dem', 'den', 'der'], ['dem', 'den', 'der'], 0,
      ['liegen = wo? → dative masculine: dem Tisch.', 'liegen = wo ? → datif masculin : dem Tisch.'],
    ),
    mc(
      'sp-wp-q2',
      ['"Ich lege das Buch auf ___ Tisch." (movement)', '« Ich lege das Buch auf ___ Tisch. » (mouvement)'],
      ['den', 'dem', 'der'], ['den', 'dem', 'der'], 0,
      ['legen = wohin? → accusative masculine: den Tisch.', 'legen = wohin ? → accusatif masculin : den Tisch.'],
    ),
    mc(
      'sp-wp-q3',
      ['"Die Lampe hängt über ___ Tisch." (position)', '« Die Lampe hängt über ___ Tisch. » (position)'],
      ['dem', 'den', 'das'], ['dem', 'den', 'das'], 0,
      ['hängt = wo? → dative: dem Tisch.', 'hängt = wo ? → datif : dem Tisch.'],
    ),
    mc(
      'sp-wp-q4',
      ['"Wir gehen in ___ Park." (movement)', '« Wir gehen in ___ Park. » (mouvement)'],
      ['den', 'dem', 'der'], ['den', 'dem', 'der'], 0,
      ['gehen = wohin? → accusative masculine: den Park.', 'gehen = wohin ? → accusatif masculin : den Park.'],
    ),
    fb(
      'sp-wp-q5',
      ['Die Katze sitzt ___ dem Sofa. (on top of)', 'Die Katze sitzt ___ dem Sofa. (sur)'],
      'auf',
      ['auf = on top of.', 'auf = sur.'],
    ),
    fb(
      'sp-wp-q6',
      ['Sie ___ das Kind auf den Stuhl. (seat)', 'Sie ___ das Kind auf den Stuhl. (asseoir)'],
      'setzt',
      ['setzen → setzt (movement verb).', 'setzen → setzt (verbe de mouvement).'],
    ),
    fb(
      'sp-wp-q7',
      ['Der Schlüssel ___ in der Tasche. (be, stick)', 'Der Schlüssel ___ in der Tasche. (être enfoncé)'],
      'steckt',
      ['stecken → steckt.', 'stecken → steckt.'],
    ),
    fb(
      'sp-wp-q8',
      ['Ich gehe ___ Arzt. (zu + dem)', 'Ich gehe ___ Arzt. (zu + dem)'],
      'zum',
      ['zu dem → zum.', 'zu dem → zum.'],
    ),
    match(
      'sp-wp-q9',
      [
        ['stellen', 'to put upright', 'poser debout'],
        ['liegen', 'to lie', 'être couché'],
        ['setzen', 'to seat', 'asseoir'],
        ['hängen', 'to hang', 'être suspendu'],
      ],
      ['Match each verb with its meaning.', 'Associe chaque verbe à son sens.'],
    ),
    wo('sp-wp-q10', ['an', 'Das', 'Bild', 'hängt', 'der', 'Wand'], ['Das', 'Bild', 'hängt', 'an', 'der', 'Wand'], ['Subject, verb, then place with dative.', 'Sujet, verbe, puis lieu avec datif.']),
    wo('sp-wp-q11', ['das', 'Sie', 'auf', 'legt', 'Handy', 'den', 'Tisch'], ['Sie', 'legt', 'das', 'Handy', 'auf', 'den', 'Tisch'], ['Verb second, then object, then direction.', 'Verbe en deuxième, puis objet, puis direction.']),
    lc(
      'sp-wp-q12',
      ['Listen. Which article do you hear after "auf"?', 'Écoute. Quel article entends-tu après « auf » ?'],
      'Das Buch liegt auf dem Tisch.',
      ['dem', 'den', 'das'], ['dem', 'den', 'das'], 0,
      ['liegt = position → dative: dem Tisch.', 'liegt = position → datif : dem Tisch.'],
    ),
    mc(
      'sp-wp-q13',
      ['Which phrase uses the dative?', 'Quelle expression utilise le datif ?'],
      ['im Kino', 'ins Kino', 'in das Kino'], ['im Kino', 'ins Kino', 'in das Kino'], 0,
      ['im = in dem (dative, position).', 'im = in dem (datif, position).'],
    ),
    mc(
      'sp-wp-q14',
      ['Which preposition do you use for "to Berlin"?', 'Quelle préposition utilises-tu pour « à Berlin » ?'],
      ['nach', 'in', 'zu'], ['nach', 'in', 'zu'], 0,
      ['Cities without an article: nach.', 'Villes sans article : nach.'],
    ),
  ],
});

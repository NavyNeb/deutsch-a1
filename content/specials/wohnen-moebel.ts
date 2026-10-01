import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const wohnenMoebel = defineSpecial({
  slug: 'wohnen-moebel',
  number: 24,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['l9', 'l15'],
  title: ['Wohnen & Möbel', 'Housing & furniture', 'Logement & meubles'],
  theme: [
    'Rooms, furniture, prepositions of place with the dative, searching for a flat and describing where you live',
    'Pièces, meubles, prépositions de lieu avec le datif, recherche d’un logement et description de son domicile',
  ],
  goals: [
    'Name the rooms of a flat and the most common furniture with article and plural',
    'Say where things are with in, auf, an, unter, neben, vor, hinter, zwischen + dative',
    'Use stehen, liegen and hängen correctly',
    'Understand a flat advertisement and book a viewing',
    'Describe your flat: size, rooms, rent and what you like about it',
  ],
  goalsFr: [
    'Nommer les pièces d’un appartement et les meubles courants avec article et pluriel',
    'Dire où se trouvent les choses avec in, auf, an, unter, neben, vor, hinter, zwischen + datif',
    'Utiliser correctement stehen, liegen et hängen',
    'Comprendre une annonce immobilière et organiser une visite',
    'Décrire son logement : taille, pièces, loyer et ce que l’on apprécie',
  ],
  steps: [
    intro(
      'Meine Wohnung', 'Mon appartement',
      'Finding a flat in Germany starts with an advertisement full of abbreviations and ends with a viewing where you must ask good questions. Before that you need the words for the rooms and the furniture — and the little prepositions that say where everything stands.',
      'Chercher un logement en Allemagne commence par une annonce pleine d’abréviations et se termine par une visite où il faut poser les bonnes questions. Avant cela, il te faut les mots pour les pièces et les meubles — et les petites prépositions qui disent où se trouve chaque chose.',
      [
        'Rooms and furniture with der/die/das and plural',
        'Prepositions of place with the dative',
        'stehen, liegen, hängen',
        'Reading a flat ad and a viewing dialogue',
        'Describing your own flat',
      ],
      [
        'Pièces et meubles avec der/die/das et le pluriel',
        'Prépositions de lieu avec le datif',
        'stehen, liegen, hängen',
        'Lire une annonce et un dialogue de visite',
        'Décrire son propre logement',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Rooms of a flat', 'Les pièces d’un logement',
      'Wohnzimmer, Küche, Bad — and how German builds room words.', 'Wohnzimmer, Küche, Bad — et comment l’allemand construit les noms de pièces.',
    ),
    vocab('sp-wohnen-moebel-zimmer', 'das Zimmer', 'the room', 'la pièce, la chambre', 'das', 'ZIM-mer', 'dahs TSIM-mer', ['Die Wohnung hat drei Zimmer.', 'The flat has three rooms.', 'L’appartement a trois pièces.']),
    vocab('sp-wohnen-moebel-wohnzimmer', 'das Wohnzimmer', 'the living room', 'le salon', 'das', 'WOHN-zim-mer', 'dahs VOHN-tsim-mer', ['Im Wohnzimmer steht ein großes Sofa.', 'There is a big sofa in the living room.', 'Il y a un grand canapé dans le salon.']),
    vocab('sp-wohnen-moebel-schlafzimmer', 'das Schlafzimmer', 'the bedroom', 'la chambre à coucher', 'das', 'SCHLAF-zim-mer', 'dahs SHLAHF-tsim-mer', ['Das Schlafzimmer ist ruhig.', 'The bedroom is quiet.', 'La chambre est calme.']),
    vocab('sp-wohnen-moebel-kueche', 'die Küche', 'the kitchen', 'la cuisine', 'die', 'KÜ-che', 'dee KUE-kheh', ['In der Küche kocht meine Mutter.', 'My mother is cooking in the kitchen.', 'Ma mère cuisine dans la cuisine.']),
    vocab('sp-wohnen-moebel-bad', 'das Bad', 'the bathroom', 'la salle de bain', 'das', 'BAD', 'dahs BAHT', ['Das Bad hat eine Dusche.', 'The bathroom has a shower.', 'La salle de bain a une douche.']),
    vocab('sp-wohnen-moebel-flur', 'der Flur', 'the hallway', 'le couloir, l’entrée', 'der', 'FLUR', 'dair FLOOR', ['Im Flur hängen viele Jacken.', 'Many jackets are hanging in the hallway.', 'Beaucoup de vestes sont accrochées dans l’entrée.']),
    vocab('sp-wohnen-moebel-balkon', 'der Balkon', 'the balcony', 'le balcon', 'der', 'bal-KON', 'dair bahl-KONG', ['Wir frühstücken auf dem Balkon.', 'We have breakfast on the balcony.', 'Nous prenons le petit-déjeuner sur le balcon.']),
    vocab('sp-wohnen-moebel-garten', 'der Garten', 'the garden', 'le jardin', 'der', 'GAR-ten', 'dair GAR-ten', ['Hinter dem Haus ist ein kleiner Garten.', 'There is a small garden behind the house.', 'Il y a un petit jardin derrière la maison.']),
    grammar(
      'sp-wo-zimmer',
      ['Room words and plurals', 'Noms de pièces et pluriels'],
      [
        'Many German room words are **compound nouns**. The **last word decides the gender**:\n\n- **Wohn**zimmer = *wohnen* + das **Zimmer** → **das** Wohnzimmer\n- **Schlaf**zimmer = *schlafen* + das **Zimmer** → **das** Schlafzimmer\n- **Kinder**zimmer = *Kinder* + das Zimmer → **das** Kinderzimmer\n- **Bad**ezimmer = Bad + e + das Zimmer (linking -e-) → **das** Badezimmer (or just **das Bad**)\n\n**Plurals:** das Zimmer → **die Zimmer** (no change) · die Küche → **die Küchen** · das Bad → **die Bäder** · der Flur → **die Flure** · der Balkon → **die Balkone/Balkons** · der Garten → **die Gärten**.\n\nCounting rooms: **eine Drei-Zimmer-Wohnung** (a three-room flat). Note that in Germany the **kitchen and bathroom usually do not count** — a *3-Zimmer-Wohnung* has three rooms **plus** kitchen and bath.',
        'Beaucoup de noms de pièces sont des **noms composés**. Le **dernier mot décide du genre** :\n\n- **Wohn**zimmer = *wohnen* + das **Zimmer** → **das** Wohnzimmer\n- **Schlaf**zimmer = *schlafen* + das **Zimmer** → **das** Schlafzimmer\n- **Kinder**zimmer = *Kinder* + das Zimmer → **das** Kinderzimmer\n- **Bad**ezimmer = Bad + e + das Zimmer (-e- de liaison) → **das** Badezimmer (ou simplement **das Bad**)\n\n**Pluriels :** das Zimmer → **die Zimmer** (inchangé) · die Küche → **die Küchen** · das Bad → **die Bäder** · der Flur → **die Flure** · der Balkon → **die Balkone/Balkons** · der Garten → **die Gärten**.\n\nPour compter les pièces : **eine Drei-Zimmer-Wohnung** (un trois-pièces). En Allemagne, la **cuisine et la salle de bain ne comptent généralement pas** — une *3-Zimmer-Wohnung* a trois pièces **plus** cuisine et salle de bain.',
      ],
      [
        ['Wir haben ein Wohnzimmer, zwei Schlafzimmer und eine Küche.', 'We have a living room, two bedrooms and a kitchen.', 'Nous avons un salon, deux chambres et une cuisine.'],
        ['Meine Wohnung hat nur ein Bad.', 'My flat has only one bathroom.', 'Mon appartement n’a qu’une salle de bain.'],
        ['Sie sucht eine Drei-Zimmer-Wohnung.', 'She is looking for a three-room flat.', 'Elle cherche un trois-pièces.'],
      ],
    ),
    ap('sp-wm-e1', 'Küche', 'die', ['Küche is feminine: die Küche.', 'Küche est féminin : die Küche.']),
    ap('sp-wm-e2', 'Wohnzimmer', 'das', ['Compound nouns take the gender of the last part: das Zimmer.', 'Les composés prennent le genre du dernier mot : das Zimmer.']),
    ap('sp-wm-e3', 'Balkon', 'der', ['Balkon is masculine.', 'Balkon est masculin.']),
    ap('sp-wm-e4', 'Garten', 'der', ['Garten is masculine; the plural is die Gärten.', 'Garten est masculin ; le pluriel est die Gärten.']),
    match(
      'sp-wm-e5',
      [
        ['das Wohnzimmer', 'the living room', 'le salon'],
        ['das Schlafzimmer', 'the bedroom', 'la chambre'],
        ['die Küche', 'the kitchen', 'la cuisine'],
        ['das Bad', 'the bathroom', 'la salle de bain'],
        ['der Flur', 'the hallway', 'le couloir'],
        ['der Balkon', 'the balcony', 'le balcon'],
      ],
      ['Match each room with its translation.', 'Associe chaque pièce à sa traduction.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Furniture', 'Les meubles',
      'What stands in the rooms — and its plural.', 'Ce qu’il y a dans les pièces — et leur pluriel.',
    ),
    vocab('sp-wohnen-moebel-sofa', 'das Sofa', 'the sofa', 'le canapé', 'das', 'SO-fa', 'dahs ZOH-fah', ['Das Sofa ist sehr bequem.', 'The sofa is very comfortable.', 'Le canapé est très confortable.']),
    vocab('sp-wohnen-moebel-tisch', 'der Tisch', 'the table', 'la table', 'der', 'TISCH', 'dair TISH', ['Der Tisch ist aus Holz.', 'The table is made of wood.', 'La table est en bois.']),
    vocab('sp-wohnen-moebel-stuhl', 'der Stuhl', 'the chair', 'la chaise', 'der', 'STUHL', 'dair SHTOOL', ['Wir brauchen noch zwei Stühle.', 'We still need two chairs.', 'Il nous faut encore deux chaises.']),
    vocab('sp-wohnen-moebel-bett', 'das Bett', 'the bed', 'le lit', 'das', 'BETT', 'dahs BET', ['Mein Bett steht am Fenster.', 'My bed is by the window.', 'Mon lit est près de la fenêtre.']),
    vocab('sp-wohnen-moebel-schrank', 'der Schrank', 'the cupboard, wardrobe', 'l’armoire, le placard', 'der', 'SCHRANK', 'dair SHRAHNK', ['Die Kleider hängen im Schrank.', 'The clothes are hanging in the wardrobe.', 'Les vêtements sont dans l’armoire.']),
    vocab('sp-wohnen-moebel-regal', 'das Regal', 'the shelf', 'l’étagère', 'das', 're-GAL', 'dahs reh-GAHL', ['Die Bücher stehen im Regal.', 'The books are on the shelf.', 'Les livres sont sur l’étagère.']),
    vocab('sp-wohnen-moebel-lampe', 'die Lampe', 'the lamp', 'la lampe', 'die', 'LAM-pe', 'dee LAHM-peh', ['Die Lampe hängt über dem Tisch.', 'The lamp hangs over the table.', 'La lampe est suspendue au-dessus de la table.']),
    vocab('sp-wohnen-moebel-teppich', 'der Teppich', 'the carpet, rug', 'le tapis', 'der', 'TEP-pich', 'dair TEP-ikh', ['Der Teppich liegt unter dem Tisch.', 'The rug is lying under the table.', 'Le tapis est sous la table.']),
    vocab('sp-wohnen-moebel-fenster', 'das Fenster', 'the window', 'la fenêtre', 'das', 'FENS-ter', 'dahs FENS-ter', ['Das Fenster ist offen.', 'The window is open.', 'La fenêtre est ouverte.']),
    vocab('sp-wohnen-moebel-tuer', 'die Tür', 'the door', 'la porte', 'die', 'TÜR', 'dee TUER', ['Bitte mach die Tür zu!', 'Please close the door!', 'Ferme la porte, s’il te plaît !']),
    grammar(
      'sp-wo-plural',
      ['Plurals of furniture', 'Pluriels des meubles'],
      [
        'Furniture plurals are very varied — learn the pair **singular → plural** together:\n\n- der Tisch → **die Tische** (-e)\n- der Stuhl → **die Stühle** (umlaut + -e)\n- der Schrank → **die Schränke** (umlaut + -e)\n- der Teppich → **die Teppiche** (-e)\n- das Bett → **die Betten** (-en)\n- das Regal → **die Regale** (-e)\n- die Lampe → **die Lampen** (-n)\n- das Fenster → **die Fenster** (no change)\n- die Tür → **die Türen** (-en)\n- das Sofa → **die Sofas** (-s)\n\n**Tip:** feminine nouns almost always take **-n / -en** in the plural. Masculine and neuter nouns vary, and many masculine ones have an **umlaut** (Stuhl → Stühle, Schrank → Schränke).',
        'Les pluriels des meubles sont très variés — apprends la paire **singulier → pluriel** :\n\n- der Tisch → **die Tische** (-e)\n- der Stuhl → **die Stühle** (tréma + -e)\n- der Schrank → **die Schränke** (tréma + -e)\n- der Teppich → **die Teppiche** (-e)\n- das Bett → **die Betten** (-en)\n- das Regal → **die Regale** (-e)\n- die Lampe → **die Lampen** (-n)\n- das Fenster → **die Fenster** (inchangé)\n- die Tür → **die Türen** (-en)\n- das Sofa → **die Sofas** (-s)\n\n**Astuce :** les noms féminins prennent presque toujours **-n / -en** au pluriel. Les masculins et neutres varient, et beaucoup de masculins ont un **tréma** (Stuhl → Stühle, Schrank → Schränke).',
      ],
      [
        ['Im Esszimmer stehen sechs Stühle.', 'There are six chairs in the dining room.', 'Dans la salle à manger, il y a six chaises.'],
        ['Wir haben zwei Betten im Zimmer.', 'We have two beds in the room.', 'Nous avons deux lits dans la chambre.'],
        ['Die Fenster sind groß.', 'The windows are big.', 'Les fenêtres sont grandes.'],
      ],
    ),
    ap('sp-wm-e6', 'Stuhl', 'der', ['Stuhl is masculine; the plural is die Stühle.', 'Stuhl est masculin ; le pluriel est die Stühle.']),
    ap('sp-wm-e7', 'Bett', 'das', ['Bett is neuter: das Bett.', 'Bett est neutre : das Bett.']),
    ap('sp-wm-e8', 'Lampe', 'die', ['Lampe ends in -e: die Lampe.', 'Lampe finit par -e : die Lampe.']),
    mc(
      'sp-wm-e9',
      ['What is the plural of "der Schrank"?', 'Quel est le pluriel de « der Schrank » ?'],
      ['die Schränke', 'die Schranke', 'die Schränken'], ['die Schränke', 'die Schranke', 'die Schränken'], 0,
      ['Schrank → Schränke (umlaut + -e).', 'Schrank → Schränke (tréma + -e).'],
    ),
    mc(
      'sp-wm-e10',
      ['What is the plural of "das Bett"?', 'Quel est le pluriel de « das Bett » ?'],
      ['die Betten', 'die Bette', 'die Bettes'], ['die Betten', 'die Bette', 'die Bettes'], 0,
      ['Bett → Betten (-en).', 'Bett → Betten (-en).'],
    ),
    match(
      'sp-wm-e11',
      [
        ['das Sofa', 'the sofa', 'le canapé'],
        ['der Tisch', 'the table', 'la table'],
        ['der Stuhl', 'the chair', 'la chaise'],
        ['der Schrank', 'the wardrobe', 'l’armoire'],
        ['das Regal', 'the shelf', 'l’étagère'],
        ['der Teppich', 'the rug', 'le tapis'],
      ],
      ['Match the furniture words.', 'Associe les noms de meubles.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Where is everything?', 'Où se trouve quoi ?',
      'Prepositions of place with the dative, plus stehen, liegen and hängen.', 'Prépositions de lieu avec le datif, plus stehen, liegen et hängen.',
    ),
    grammar(
      'sp-wo-praepositionen',
      ['Prepositions of place + dative', 'Prépositions de lieu + datif'],
      [
        'To answer **Wo?** (where is it?), nine prepositions take the **dative**:\n\n- **in** (in) · **an** (on / at, a vertical surface or edge) · **auf** (on top of)\n- **über** (above) · **unter** (under)\n- **vor** (in front of) · **hinter** (behind)\n- **neben** (next to) · **zwischen** (between)\n\n**Dative articles:**\n\n| | nominative | after the preposition (dative) |\n|---|---|---|\n| masculine | der Tisch | **dem** Tisch |\n| feminine | die Lampe | **der** Lampe |\n| neuter | das Sofa | **dem** Sofa |\n| plural | die Stühle | **den** Stühle**n** |\n\nContractions: **in dem → im**, **an dem → am**. Question: **Wo steht das Sofa?**',
        'Pour répondre à **Wo ?** (où est-ce ?), neuf prépositions se construisent avec le **datif** :\n\n- **in** (dans) · **an** (contre / à, surface verticale ou bord) · **auf** (sur, dessus)\n- **über** (au-dessus) · **unter** (sous)\n- **vor** (devant) · **hinter** (derrière)\n- **neben** (à côté de) · **zwischen** (entre)\n\n**Articles au datif :**\n\n| | nominatif | après la préposition (datif) |\n|---|---|---|\n| masculin | der Tisch | **dem** Tisch |\n| féminin | die Lampe | **der** Lampe |\n| neutre | das Sofa | **dem** Sofa |\n| pluriel | die Stühle | **den** Stühle**n** |\n\nContractions : **in dem → im**, **an dem → am**. Question : **Wo steht das Sofa ?**',
      ],
      [
        ['Das Buch liegt auf dem Tisch.', 'The book is lying on the table.', 'Le livre est sur la table.'],
        ['Die Lampe steht neben dem Sofa.', 'The lamp is next to the sofa.', 'La lampe est à côté du canapé.'],
        ['Der Teppich liegt unter dem Tisch.', 'The rug is lying under the table.', 'Le tapis est sous la table.'],
        ['Der Schrank steht zwischen dem Bett und dem Fenster.', 'The wardrobe stands between the bed and the window.', 'L’armoire est entre le lit et la fenêtre.'],
      ],
    ),
    grammar(
      'sp-wo-stehen',
      ['stehen, liegen, hängen', 'stehen, liegen, hängen'],
      [
        'German does not say “is” for position: it chooses a **verb for how the object is placed**.\n\n- **stehen** — upright objects: *der Tisch, der Stuhl, die Lampe, der Schrank, die Flasche.*\n- **liegen** — flat objects: *das Buch, der Teppich, das Handy, der Schlüssel.*\n- **hängen** — objects fixed on a wall or from the ceiling: *das Bild, die Jacke, die Lampe (ceiling).*\n\nThe verb stays the same with the same preposition + dative:\n\n- Das Bild **hängt** an der Wand.\n- Das Buch **liegt** auf dem Tisch.\n- Die Stühle **stehen** um den Tisch — **um** always takes the accusative.\n\nAlso very common: **sein** → *Die Küche ist neben dem Bad.*',
        'L’allemand ne dit pas simplement « est » pour la position : il choisit un **verbe selon la façon dont l’objet est placé**.\n\n- **stehen** — objets debout : *der Tisch, der Stuhl, die Lampe, der Schrank, die Flasche.*\n- **liegen** — objets à plat : *das Buch, der Teppich, das Handy, der Schlüssel.*\n- **hängen** — objets fixés au mur ou au plafond : *das Bild, die Jacke, die Lampe (plafond).*\n\nLe verbe reste le même avec la même préposition + datif :\n\n- Das Bild **hängt** an der Wand.\n- Das Buch **liegt** auf dem Tisch.\n- Die Stühle **stehen** um den Tisch — **um** prend toujours l’accusatif.\n\nTrès courant aussi : **sein** → *Die Küche ist neben dem Bad.*',
      ],
      [
        ['Das Bild hängt an der Wand.', 'The picture is hanging on the wall.', 'Le tableau est accroché au mur.'],
        ['Die Bücher stehen im Regal.', 'The books are on the shelf.', 'Les livres sont sur l’étagère.'],
        ['Mein Handy liegt auf dem Tisch.', 'My phone is lying on the table.', 'Mon téléphone est posé sur la table.'],
      ],
    ),
    fb(
      'sp-wm-e12',
      ['Das Buch liegt auf ___ Tisch. (der Tisch — dative)', 'Das Buch liegt auf ___ Tisch. (der Tisch — datif)'],
      'dem',
      ['Masculine dative: dem.', 'Datif masculin : dem.'],
    ),
    fb(
      'sp-wm-e13',
      ['Die Lampe steht neben ___ Sofa. (das Sofa — dative)', 'Die Lampe steht neben ___ Sofa. (das Sofa — datif)'],
      'dem',
      ['Neuter dative: dem.', 'Datif neutre : dem.'],
    ),
    fb(
      'sp-wm-e14',
      ['Das Bild hängt an ___ Wand. (die Wand — dative)', 'Das Bild hängt an ___ Wand. (die Wand — datif)'],
      'der',
      ['Feminine dative: der.', 'Datif féminin : der.'],
    ),
    fb(
      'sp-wm-e15',
      ['Der Schlüssel ___ auf dem Tisch. (flat object)', 'Der Schlüssel ___ auf dem Tisch. (objet à plat)'],
      'liegt',
      ['A key lies flat: liegen.', 'Une clé est posée à plat : liegen.'],
    ),
    mc(
      'sp-wm-e16',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Der Teppich liegt unter dem Tisch.', 'Der Teppich steht unter dem Tisch.', 'Der Teppich hängt unter dem Tisch.'],
      ['Der Teppich liegt unter dem Tisch.', 'Der Teppich steht unter dem Tisch.', 'Der Teppich hängt unter dem Tisch.'], 0,
      ['A rug lies flat on the floor: liegen.', 'Un tapis est posé à plat : liegen.'],
    ),
    mc(
      'sp-wm-e17',
      ['Which verb for a picture on the wall?', 'Quel verbe pour un tableau au mur ?'],
      ['hängen', 'stehen', 'liegen'], ['hängen', 'stehen', 'liegen'], 0,
      ['Hanging objects → hängen.', 'Objets suspendus → hängen.'],
    ),
    wo('sp-wm-e18', ['neben', 'Die', 'dem', 'Lampe', 'steht', 'Sofa'], ['Die', 'Lampe', 'steht', 'neben', 'dem', 'Sofa'], ['Subject, verb, preposition + dative.', 'Sujet, verbe, préposition + datif.']),
    wo('sp-wm-e19', ['Das', 'liegt', 'auf', 'Buch', 'dem', 'Tisch'], ['Das', 'Buch', 'liegt', 'auf', 'dem', 'Tisch'], ['Subject, verb, place.', 'Sujet, verbe, lieu.']),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Looking for a flat', 'Chercher un logement',
      'Ads, abbreviations, rent and the viewing.', 'Annonces, abréviations, loyer et visite.',
    ),
    vocab('sp-wohnen-moebel-wohnung', 'die Wohnung', 'the flat, apartment', 'l’appartement', 'die', 'WOH-nung', 'dee VOH-noong', ['Ich suche eine Wohnung in der Stadt.', 'I am looking for a flat in the city.', 'Je cherche un appartement en ville.']),
    vocab('sp-wohnen-moebel-miete', 'die Miete', 'the rent', 'le loyer', 'die', 'MIE-te', 'dee MEE-teh', ['Die Miete beträgt 650 Euro im Monat.', 'The rent is 650 euros per month.', 'Le loyer est de 650 euros par mois.']),
    vocab('sp-wohnen-moebel-vermieter', 'der Vermieter', 'the landlord', 'le propriétaire (bailleur)', 'der', 'ver-MIE-ter', 'dair fair-MEE-ter', ['Der Vermieter wohnt im Erdgeschoss.', 'The landlord lives on the ground floor.', 'Le propriétaire habite au rez-de-chaussée.']),
    vocab('sp-wohnen-moebel-besichtigung', 'die Besichtigung', 'the viewing', 'la visite', 'die', 'be-SICH-ti-gung', 'dee beh-ZIKH-tee-goong', ['Die Besichtigung ist am Samstag um zehn Uhr.', 'The viewing is on Saturday at ten o’clock.', 'La visite a lieu samedi à dix heures.']),
    vocab('sp-wohnen-moebel-anzeige', 'die Anzeige', 'the advertisement', 'l’annonce', 'die', 'AN-zei-ge', 'dee AHN-tsy-geh', ['Ich habe die Anzeige im Internet gefunden.', 'I found the ad on the internet.', 'J’ai trouvé l’annonce sur Internet.']),
    vocab('sp-wohnen-moebel-quadratmeter', 'der Quadratmeter', 'the square metre', 'le mètre carré', 'der', 'qua-DRAT-me-ter', 'dair kvah-DRAHT-may-ter', ['Die Wohnung hat 65 Quadratmeter.', 'The flat has 65 square metres.', 'L’appartement fait 65 mètres carrés.']),
    grammar(
      'sp-wo-anzeige',
      ['Reading a flat ad', 'Lire une annonce immobilière'],
      [
        'German flat ads are full of **abbreviations**. Here is a typical one:\n\n> **2-Zi.-Whg., 55 m², 3. OG, Balkon, EBK, KM 520 €, NK 130 €, ab sofort frei**\n\n| abbreviation | meaning |\n|---|---|\n| **Zi.** / **Whg.** | Zimmer / Wohnung (rooms / flat) |\n| **m²** | Quadratmeter |\n| **OG** | Obergeschoss (upper floor); **EG** = Erdgeschoss (ground floor) |\n| **EBK** | Einbauküche (fitted kitchen) |\n| **KM** | Kaltmiete (rent without heating and charges) |\n| **NK** | Nebenkosten (extra costs: water, heating, rubbish) |\n| **WM** | Warmmiete = KM + NK (the real total) |\n| **ab sofort** | available immediately |\n\nAlways compare the **Warmmiete**: 520 + 130 = **650 Euro**. Many landlords also ask for a **Kaution** (deposit), often three months of Kaltmiete.',
        'Les annonces allemandes regorgent d’**abréviations**. En voici une typique :\n\n> **2-Zi.-Whg., 55 m², 3. OG, Balkon, EBK, KM 520 €, NK 130 €, ab sofort frei**\n\n| abréviation | signification |\n|---|---|\n| **Zi.** / **Whg.** | Zimmer / Wohnung (pièces / appartement) |\n| **m²** | Quadratmeter |\n| **OG** | Obergeschoss (étage) ; **EG** = Erdgeschoss (rez-de-chaussée) |\n| **EBK** | Einbauküche (cuisine équipée) |\n| **KM** | Kaltmiete (loyer sans chauffage ni charges) |\n| **NK** | Nebenkosten (charges : eau, chauffage, ordures) |\n| **WM** | Warmmiete = KM + NK (le vrai total) |\n| **ab sofort** | disponible immédiatement |\n\nCompare toujours la **Warmmiete** : 520 + 130 = **650 Euro**. Beaucoup de propriétaires demandent aussi une **Kaution** (caution), souvent trois mois de Kaltmiete.',
      ],
      [
        ['Die Wohnung kostet 520 Euro kalt.', 'The flat costs 520 euros without heating.', 'L’appartement coûte 520 euros hors charges.'],
        ['Wie hoch sind die Nebenkosten?', 'How high are the extra costs?', 'À combien s’élèvent les charges ?'],
        ['Die Wohnung ist ab sofort frei.', 'The flat is available immediately.', 'L’appartement est libre immédiatement.'],
      ],
    ),
    grammar(
      'sp-wo-dialog',
      ['Dialogue: Besichtigung', 'Dialogue : Besichtigung'],
      [
        '**Lena** visits a flat with the landlord **Herr Braun**:\n\n- **Herr Braun:** Guten Tag, Frau Weber. Kommen Sie herein. Hier ist der **Flur**.\n- **Lena:** Guten Tag. Wie viele **Zimmer** hat die Wohnung?\n- **Herr Braun:** Sie hat **zwei Zimmer**, eine **Küche** und ein **Bad**. Es gibt auch einen **Balkon**.\n- **Lena:** Ist die Küche **eingerichtet**?\n- **Herr Braun:** Ja, da stehen ein **Herd** und ein **Kühlschrank**. Möbel gibt es nicht.\n- **Lena:** Wie hoch ist die **Miete**?\n- **Herr Braun:** **520 Euro kalt**, dazu 130 Euro **Nebenkosten**.\n- **Lena:** Und ab wann ist die Wohnung **frei**?\n- **Herr Braun:** **Ab dem ersten Mai.**\n- **Lena:** Die Wohnung gefällt mir. Ich **nehme** sie!\n\n**Es gibt + accusative:** *Es gibt einen Balkon.* (There is a balcony.)',
        '**Lena** visite un appartement avec le propriétaire **Herr Braun** :\n\n- **Herr Braun :** Guten Tag, Frau Weber. Kommen Sie herein. Hier ist der **Flur**.\n- **Lena :** Guten Tag. Wie viele **Zimmer** hat die Wohnung ?\n- **Herr Braun :** Sie hat **zwei Zimmer**, eine **Küche** und ein **Bad**. Es gibt auch einen **Balkon**.\n- **Lena :** Ist die Küche **eingerichtet** ?\n- **Herr Braun :** Ja, da stehen ein **Herd** und ein **Kühlschrank**. Möbel gibt es nicht.\n- **Lena :** Wie hoch ist die **Miete** ?\n- **Herr Braun :** **520 Euro kalt**, dazu 130 Euro **Nebenkosten**.\n- **Lena :** Und ab wann ist die Wohnung **frei** ?\n- **Herr Braun :** **Ab dem ersten Mai.**\n- **Lena :** Die Wohnung gefällt mir. Ich **nehme** sie !\n\n**Es gibt + accusatif :** *Es gibt einen Balkon.* (Il y a un balcon.)',
      ],
      [
        ['Wie viele Zimmer hat die Wohnung?', 'How many rooms does the flat have?', 'Combien de pièces a l’appartement ?'],
        ['Es gibt auch einen Balkon.', 'There is also a balcony.', 'Il y a aussi un balcon.'],
        ['Wie hoch ist die Miete?', 'How much is the rent?', 'À combien s’élève le loyer ?'],
        ['Die Wohnung gefällt mir. Ich nehme sie!', 'I like the flat. I’ll take it!', 'L’appartement me plaît. Je le prends !'],
      ],
    ),
    fb(
      'sp-wm-e20',
      ['Wie hoch ist die ___? (the rent)', 'Wie hoch ist die ___ ? (le loyer)'],
      'Miete',
      ['die Miete = the rent.', 'die Miete = le loyer.'],
    ),
    fb(
      'sp-wm-e21',
      ['Es gibt ___ Balkon. (ein — accusative masculine)', 'Es gibt ___ Balkon. (ein — accusatif masculin)'],
      'einen',
      ['Es gibt + accusative: einen.', 'Es gibt + accusatif : einen.'],
    ),
    mc(
      'sp-wm-e22',
      ['"520 € KM, 130 € NK" — what is the Warmmiete?', '« 520 € KM, 130 € NK » — quelle est la Warmmiete ?'],
      ['650 €', '520 €', '390 €'], ['650 €', '520 €', '390 €'], 0,
      ['Warmmiete = Kaltmiete + Nebenkosten.', 'Warmmiete = Kaltmiete + Nebenkosten.'],
    ),
    lc(
      'sp-wm-e23',
      ['Listen. How many rooms does the flat have?', 'Écoute. Combien de pièces a l’appartement ?'],
      'Die Wohnung hat zwei Zimmer, eine Küche und ein Bad.',
      ['Two rooms', 'Three rooms', 'One room'], ['Deux pièces', 'Trois pièces', 'Une pièce'], 0,
      ['Listen for “zwei Zimmer”.', 'Écoute « zwei Zimmer ».'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Describing your flat', 'Décrire son logement',
      'Bring it all together: size, rooms, light and atmosphere.', 'Rassemble tout : taille, pièces, lumière et ambiance.',
    ),
    vocab('sp-wohnen-moebel-hell', 'hell', 'bright, light', 'clair, lumineux', null, 'HELL', 'HEL', ['Das Wohnzimmer ist schön hell.', 'The living room is nice and bright.', 'Le salon est agréablement lumineux.']),
    vocab('sp-wohnen-moebel-gemuetlich', 'gemütlich', 'cosy', 'confortable, douillet', null, 'ge-MÜT-lich', 'geh-MUET-likh', ['Mit Kerzen ist es sehr gemütlich.', 'With candles it is very cosy.', 'Avec des bougies, c’est très douillet.']),
    grammar(
      'sp-wo-beschreiben',
      ['Describing where you live', 'Décrire où l’on habite'],
      [
        'To describe a flat, combine three structures:\n\n**1. haben** — *Die Wohnung **hat** drei Zimmer und einen Balkon.*\n**2. es gibt + accusative** — *Es gibt auch einen Keller.*\n**3. sein + adjective** (no ending after *sein*) — *Die Küche **ist** klein, aber **hell**. Das Wohnzimmer **ist** groß und **gemütlich**.*\n\nSize: **Die Wohnung ist 65 Quadratmeter groß.** · Position: **im dritten Stock** (on the 3rd floor), **im Erdgeschoss**, **im Zentrum**, **am Stadtrand** (on the outskirts).\n\nOpinion: **Mir gefällt …** (I like …), **Ich finde die Wohnung zu klein / schön / teuer.** — The adjective stays **without ending** after *finden* too.',
        'Pour décrire un logement, combine trois structures :\n\n**1. haben** — *Die Wohnung **hat** drei Zimmer und einen Balkon.*\n**2. es gibt + accusatif** — *Es gibt auch einen Keller.*\n**3. sein + adjectif** (sans terminaison après *sein*) — *Die Küche **ist** klein, aber **hell**. Das Wohnzimmer **ist** groß und **gemütlich**.*\n\nTaille : **Die Wohnung ist 65 Quadratmeter groß.** · Position : **im dritten Stock** (au 3e étage), **im Erdgeschoss**, **im Zentrum**, **am Stadtrand** (en périphérie).\n\nOpinion : **Mir gefällt …** (j’aime …), **Ich finde die Wohnung zu klein / schön / teuer.** — L’adjectif reste **sans terminaison** aussi après *finden*.',
      ],
      [
        ['Meine Wohnung ist 65 Quadratmeter groß.', 'My flat is 65 square metres.', 'Mon appartement fait 65 mètres carrés.'],
        ['Sie liegt im dritten Stock, mitten im Zentrum.', 'It is on the third floor, right in the centre.', 'Il est au troisième étage, en plein centre.'],
        ['Die Küche ist klein, aber hell und gemütlich.', 'The kitchen is small, but bright and cosy.', 'La cuisine est petite, mais claire et douillette.'],
        ['Ich finde die Wohnung zu teuer.', 'I think the flat is too expensive.', 'Je trouve l’appartement trop cher.'],
      ],
    ),
    wo('sp-wm-e24', ['hat', 'drei', 'Meine', 'Zimmer', 'Wohnung'], ['Meine', 'Wohnung', 'hat', 'drei', 'Zimmer'], ['Possessive + noun, then the verb.', 'Possessif + nom, puis le verbe.']),
    wo('sp-wm-e25', ['gibt', 'Es', 'einen', 'Balkon'], ['Es', 'gibt', 'einen', 'Balkon'], ['Es gibt + accusative.', 'Es gibt + accusatif.']),
    mc(
      'sp-wm-e26',
      ['"Das Wohnzimmer ist hell und gemütlich" — which adjective forms are correct?', '« Das Wohnzimmer ist hell und gemütlich » — les formes d’adjectifs sont-elles correctes ?'],
      ['Yes — adjectives after sein have no ending', 'No — they need -e: helle und gemütliche', 'No — they need -es'],
      ['Oui — après sein, pas de terminaison', 'Non — elles prennent -e : helle und gemütliche', 'Non — elles prennent -es'], 0,
      ['Predicative adjectives never take endings.', 'Les adjectifs attributs ne prennent jamais de terminaison.'],
    ),

    wrapup(
      '**Rooms** — das Wohnzimmer, das Schlafzimmer, die Küche, das Bad, der Flur, der Balkon, der Garten. Compound nouns take the gender of the last word.\n\n**Furniture** — der Tisch, der Stuhl, der Schrank, das Bett, das Regal, das Sofa, die Lampe, der Teppich. Plurals: Tische, Stühle, Schränke, Betten, Regale, Lampen.\n\n**Where?** — in, an, auf, über, unter, vor, hinter, neben, zwischen + dative (dem / der / dem / den + -n). Verbs: stehen (upright), liegen (flat), hängen (hanging).\n\n**Flat search** — die Anzeige, die Miete, die Nebenkosten, Kaltmiete + NK = Warmmiete, die Besichtigung. Es gibt + accusative.\n\n**Describing** — Die Wohnung hat …, Sie ist … Quadratmeter groß, Mir gefällt …, adjectives without ending after sein.',
      '**Pièces** — das Wohnzimmer, das Schlafzimmer, die Küche, das Bad, der Flur, der Balkon, der Garten. Les composés prennent le genre du dernier mot.\n\n**Meubles** — der Tisch, der Stuhl, der Schrank, das Bett, das Regal, das Sofa, die Lampe, der Teppich. Pluriels : Tische, Stühle, Schränke, Betten, Regale, Lampen.\n\n**Où ?** — in, an, auf, über, unter, vor, hinter, neben, zwischen + datif (dem / der / dem / den + -n). Verbes : stehen (debout), liegen (à plat), hängen (suspendu).\n\n**Recherche** — die Anzeige, die Miete, die Nebenkosten, Kaltmiete + NK = Warmmiete, die Besichtigung. Es gibt + accusatif.\n\n**Décrire** — Die Wohnung hat …, Sie ist … Quadratmeter groß, Mir gefällt …, adjectifs sans terminaison après sein.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Housing & furniture', 'Quiz final : logement & meubles'),
    match(
      'sp-wm-q1',
      [
        ['die Miete', 'the rent', 'le loyer'],
        ['der Vermieter', 'the landlord', 'le propriétaire'],
        ['die Besichtigung', 'the viewing', 'la visite'],
        ['hell', 'bright', 'lumineux'],
        ['gemütlich', 'cosy', 'douillet'],
      ],
      ['Match each word with its translation.', 'Associe chaque mot à sa traduction.'],
    ),
    ap('sp-wm-q2', 'Schrank', 'der', ['Schrank is masculine.', 'Schrank est masculin.']),
    ap('sp-wm-q3', 'Küche', 'die', ['Küche is feminine.', 'Küche est féminin.']),
    ap('sp-wm-q4', 'Schlafzimmer', 'das', ['Compound noun: gender of Zimmer.', 'Nom composé : genre de Zimmer.']),
    mc(
      'sp-wm-q5',
      ['What is the plural of "der Stuhl"?', 'Quel est le pluriel de « der Stuhl » ?'],
      ['die Stühle', 'die Stuhle', 'die Stühlen'], ['die Stühle', 'die Stuhle', 'die Stühlen'], 0,
      ['Stuhl → Stühle (umlaut + -e).', 'Stuhl → Stühle (tréma + -e).'],
    ),
    mc(
      'sp-wm-q6',
      ['Which verb fits "Die Flasche ___ auf dem Tisch"? (upright)', 'Quel verbe convient : « Die Flasche ___ auf dem Tisch » ? (debout)'],
      ['steht', 'liegt', 'hängt'], ['steht', 'liegt', 'hängt'], 0,
      ['Upright objects → stehen.', 'Objets debout → stehen.'],
    ),
    fb(
      'sp-wm-q7',
      ['Die Katze schläft auf ___ Sofa. (das Sofa — dative)', 'Die Katze schläft auf ___ Sofa. (das Sofa — datif)'],
      'dem',
      ['Neuter dative: dem.', 'Datif neutre : dem.'],
    ),
    fb(
      'sp-wm-q8',
      ['Der Stuhl steht neben ___ Tisch. (der Tisch — dative)', 'Der Stuhl steht neben ___ Tisch. (der Tisch — datif)'],
      'dem',
      ['Masculine dative: dem.', 'Datif masculin : dem.'],
    ),
    fb(
      'sp-wm-q9',
      ['Die Lampe hängt über ___ Tisch. (der Tisch — dative)', 'Die Lampe hängt über ___ Tisch. (der Tisch — datif)'],
      'dem',
      ['über + dative here (position): dem.', 'über + datif ici (position) : dem.'],
    ),
    fb(
      'sp-wm-q10',
      ['Es ___ einen Balkon. (there is)', 'Es ___ einen Balkon. (il y a)'],
      'gibt',
      ['Es gibt + accusative.', 'Es gibt + accusatif.'],
    ),
    wo('sp-wm-q11', ['Bild', 'Das', 'an', 'hängt', 'der', 'Wand'], ['Das', 'Bild', 'hängt', 'an', 'der', 'Wand'], ['Subject, verb, an + dative.', 'Sujet, verbe, an + datif.']),
    wo('sp-wm-q12', ['Teppich', 'Der', 'unter', 'liegt', 'dem', 'Tisch'], ['Der', 'Teppich', 'liegt', 'unter', 'dem', 'Tisch'], ['Subject, verb, unter + dative.', 'Sujet, verbe, unter + datif.']),
    lc(
      'sp-wm-q13',
      ['Listen. Where is the lamp?', 'Écoute. Où est la lampe ?'],
      'Die Lampe steht neben dem Sofa.',
      ['Next to the sofa', 'On the sofa', 'Under the sofa'], ['À côté du canapé', 'Sur le canapé', 'Sous le canapé'], 0,
      ['neben = next to.', 'neben = à côté de.'],
    ),
    lc(
      'sp-wm-q14',
      ['Listen. How much is the rent?', 'Écoute. Combien coûte le loyer ?'],
      'Die Miete beträgt sechshundertfünfzig Euro im Monat.',
      ['650 euros', '560 euros', '615 euros'], ['650 euros', '560 euros', '615 euros'], 0,
      ['sechshundertfünfzig = 650.', 'sechshundertfünfzig = 650.'],
    ),
  ],
});

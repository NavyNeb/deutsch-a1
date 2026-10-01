import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const farbenKleidung = defineSpecial({
  slug: 'farben-kleidung',
  number: 20,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['a2-l6'],
  title: ['Farben & Kleidung', 'Colours & clothes', 'Couleurs & vêtements'],
  theme: [
    'Colours, clothing, sizes and shopping phrases — with the endings you need to describe them',
    'Couleurs, vêtements, tailles et phrases pour faire les boutiques — avec les terminaisons pour les décrire',
  ],
  goals: [
    'Name the main colours and describe them with endings',
    'Know the clothing vocabulary with its articles',
    'Say what you like, what fits and what something costs',
    'Cope in a clothes shop: sizes, trying on, paying',
  ],
  goalsFr: [
    'Nommer les couleurs principales et les décrire avec les terminaisons',
    'Connaître le vocabulaire des vêtements avec leurs articles',
    'Dire ce qu’on aime, ce qui va bien et ce que ça coûte',
    'Se débrouiller dans une boutique : tailles, essayage, paiement',
  ],
  steps: [
    intro(
      'Welche Farbe hat dein Pullover?', 'De quelle couleur est ton pull ?',
      'Colours and clothes are everywhere in daily life: describing a person, shopping, packing a suitcase. In this special you learn the words, the articles and the little endings that make descriptions sound right.',
      'Couleurs et vêtements sont partout au quotidien : décrire une personne, faire les boutiques, préparer une valise. Dans ce spécial, tu apprends les mots, les articles et les petites terminaisons qui rendent les descriptions justes.',
      [
        'Colours and how to describe with them',
        'Clothing vocabulary with der/die/das',
        'Opinions: gefallen, passen, stehen',
        'A shopping dialogue from start to finish',
      ],
      [
        'Les couleurs et comment décrire avec elles',
        'Le vocabulaire des vêtements avec der/die/das',
        'Les opinions : gefallen, passen, stehen',
        'Un dialogue de shopping du début à la fin',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Colours', 'Les couleurs',
      'Twelve colours you will use every day.', 'Douze couleurs d’usage quotidien.',
    ),
    vocab('sp-farben-kleidung-rot', 'rot', 'red', 'rouge', null, 'ROT', 'ROHT', ['Die Rose ist rot.', 'The rose is red.', 'La rose est rouge.']),
    vocab('sp-farben-kleidung-blau', 'blau', 'blue', 'bleu', null, 'BLAU', 'BLOW', ['Der Himmel ist blau.', 'The sky is blue.', 'Le ciel est bleu.']),
    vocab('sp-farben-kleidung-gelb', 'gelb', 'yellow', 'jaune', null, 'GELB', 'GELP', ['Die Sonne ist gelb.', 'The sun is yellow.', 'Le soleil est jaune.']),
    vocab('sp-farben-kleidung-gruen', 'grün', 'green', 'vert', null, 'GRÜN', 'GROON', ['Das Gras ist grün.', 'The grass is green.', 'L’herbe est verte.']),
    vocab('sp-farben-kleidung-schwarz', 'schwarz', 'black', 'noir', null, 'SCHWARZ', 'SHVARTS', ['Ich trage eine schwarze Hose.', 'I am wearing black trousers.', 'Je porte un pantalon noir.']),
    vocab('sp-farben-kleidung-weiss', 'weiß', 'white', 'blanc', null, 'WEISS', 'VICE', ['Der Schnee ist weiß.', 'The snow is white.', 'La neige est blanche.']),
    vocab('sp-farben-kleidung-grau', 'grau', 'grey', 'gris', null, 'GRAU', 'GROW', ['Heute ist der Himmel grau.', 'Today the sky is grey.', 'Aujourd’hui, le ciel est gris.']),
    vocab('sp-farben-kleidung-braun', 'braun', 'brown', 'marron', null, 'BRAUN', 'BROWN', ['Er hat braune Augen.', 'He has brown eyes.', 'Il a les yeux marron.']),
    vocab('sp-farben-kleidung-orange', 'orange', 'orange', 'orange', null, 'o-RAN-ge', 'oh-RAHN-zheh', ['Ich mag orange Socken.', 'I like orange socks.', 'J’aime les chaussettes orange.']),
    vocab('sp-farben-kleidung-rosa', 'rosa', 'pink', 'rose', null, 'RO-sa', 'ROH-zah', ['Das Kleid ist rosa.', 'The dress is pink.', 'La robe est rose.']),
    vocab('sp-farben-kleidung-lila', 'lila', 'purple', 'violet', null, 'LI-la', 'LEE-lah', ['Sie trägt eine lila Jacke.', 'She is wearing a purple jacket.', 'Elle porte une veste violette.']),
    vocab('sp-farben-kleidung-farbe', 'die Farbe', 'the colour', 'la couleur', 'die', 'FAR-be', 'dee FAR-beh', ['Welche Farbe magst du?', 'Which colour do you like?', 'Quelle couleur aimes-tu ?']),
    grammar(
      'sp-fk-colours-1',
      ['Asking and answering', 'Demander et répondre'],
      [
        'To ask for a colour, use **Welche Farbe …?** and answer with **sein** + the colour. After *sein*, the colour never takes an ending:\n\n- **Welche Farbe** hat dein Auto? — Es **ist** rot.\n- Mein Pullover **ist** blau.\n- Die Wände **sind** weiß.\n\n**Hell-** (light) and **dunkel-** (dark) combine with the colour: **hellblau**, **dunkelgrün**.',
        'Pour demander une couleur, utilise **Welche Farbe …?** et réponds avec **sein** + la couleur. Après *sein*, la couleur ne prend jamais de terminaison :\n\n- **Welche Farbe** hat dein Auto ? — Es **ist** rot.\n- Mein Pullover **ist** blau.\n- Die Wände **sind** weiß.\n\n**Hell-** (clair) et **dunkel-** (foncé) se combinent avec la couleur : **hellblau**, **dunkelgrün**.',
      ],
      [
        ['Welche Farbe hat dein Auto?', 'What colour is your car?', 'De quelle couleur est ta voiture ?'],
        ['Es ist dunkelblau.', 'It is dark blue.', 'Elle est bleu foncé.'],
        ['Die Wände sind weiß.', 'The walls are white.', 'Les murs sont blancs.'],
      ],
    ),
    match(
      'sp-fk-e1',
      [
        ['rot', 'red', 'rouge'],
        ['gelb', 'yellow', 'jaune'],
        ['grün', 'green', 'vert'],
        ['schwarz', 'black', 'noir'],
        ['weiß', 'white', 'blanc'],
        ['grau', 'grey', 'gris'],
      ],
      ['Match each colour with its translation.', 'Associe chaque couleur à sa traduction.'],
    ),
    mc(
      'sp-fk-e2',
      ['What colour is the sky on a clear day? "Der Himmel ist ___."', 'De quelle couleur est le ciel par beau temps ? « Der Himmel ist ___. »'],
      ['blau', 'rot', 'braun'], ['blau', 'rot', 'braun'], 0,
      ['blau = blue.', 'blau = bleu.'],
    ),
    fb(
      'sp-fk-e3',
      ['Der Schnee ist ___. (white)', 'Der Schnee ist ___. (blanc)'],
      'weiß',
      ['The German word for white: weiß (with ß).', 'Le mot allemand pour blanc : weiß (avec ß).'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Clothes and their articles', 'Les vêtements et leurs articles',
      'Learn each word together with der, die or das.', 'Apprends chaque mot avec der, die ou das.',
    ),
    vocab('sp-farben-kleidung-hemd', 'das Hemd', 'the shirt', 'la chemise', 'das', 'HEMD', 'dahs HEMT', ['Das Hemd ist zu groß.', 'The shirt is too big.', 'La chemise est trop grande.']),
    vocab('sp-farben-kleidung-hose', 'die Hose', 'the trousers', 'le pantalon', 'die', 'HO-se', 'dee HOH-zeh', ['Die Hose ist neu.', 'The trousers are new.', 'Le pantalon est neuf.']),
    vocab('sp-farben-kleidung-pullover', 'der Pullover', 'the sweater', 'le pull', 'der', 'pu-LO-ver', 'dair poo-LOH-ver', ['Der Pullover ist warm.', 'The sweater is warm.', 'Le pull est chaud.']),
    vocab('sp-farben-kleidung-kleid', 'das Kleid', 'the dress', 'la robe', 'das', 'KLEID', 'dahs KLITE', ['Das Kleid steht dir gut.', 'The dress suits you.', 'La robe te va bien.']),
    vocab('sp-farben-kleidung-jacke', 'die Jacke', 'the jacket', 'la veste', 'die', 'JA-cke', 'dee YAH-keh', ['Die Jacke ist wasserdicht.', 'The jacket is waterproof.', 'La veste est imperméable.']),
    vocab('sp-farben-kleidung-schuh', 'der Schuh', 'the shoe', 'la chaussure', 'der', 'SCHUH', 'dair SHOO', ['Die Schuhe sind bequem.', 'The shoes are comfortable.', 'Les chaussures sont confortables.']),
    vocab('sp-farben-kleidung-socke', 'die Socke', 'the sock', 'la chaussette', 'die', 'SO-cke', 'dee ZOK-eh', ['Ich brauche neue Socken.', 'I need new socks.', 'J’ai besoin de nouvelles chaussettes.']),
    vocab('sp-farben-kleidung-mantel', 'der Mantel', 'the coat', 'le manteau', 'der', 'MAN-tel', 'dair MAHN-tel', ['Im Winter trage ich einen Mantel.', 'In winter I wear a coat.', 'En hiver, je porte un manteau.']),
    vocab('sp-farben-kleidung-muetze', 'die Mütze', 'the cap, hat', 'le bonnet', 'die', 'MÜT-ze', 'dee MUET-seh', ['Die Mütze ist rot.', 'The hat is red.', 'Le bonnet est rouge.']),
    vocab('sp-farben-kleidung-tshirt', 'das T-Shirt', 'the T-shirt', 'le tee-shirt', 'das', 'TI-schört', 'dahs TEE-shirt', ['Ich trage ein weißes T-Shirt.', 'I am wearing a white T-shirt.', 'Je porte un tee-shirt blanc.']),
    vocab('sp-farben-kleidung-tragen', 'tragen', 'to wear, to carry', 'porter', null, 'TRA-gen', 'TRAH-gen', ['Sie trägt heute ein Kleid.', 'She is wearing a dress today.', 'Elle porte une robe aujourd’hui.']),
    vocab('sp-farben-kleidung-anziehen', 'anziehen', 'to put on', 'mettre, enfiler', null, 'AN-zie-hen', 'AHN-tsee-en', ['Zieh bitte deine Jacke an!', 'Please put your jacket on!', 'Mets ta veste, s’il te plaît !']),
    ap('sp-fk-e4', 'Hemd', 'das', ['Hemd is neuter: das Hemd.', 'Hemd est neutre : das Hemd.']),
    ap('sp-fk-e5', 'Hose', 'die', ['Hose is feminine: die Hose.', 'Hose est féminin : die Hose.']),
    ap('sp-fk-e6', 'Pullover', 'der', ['Pullover is masculine: der Pullover.', 'Pullover est masculin : der Pullover.']),
    ap('sp-fk-e7', 'Mütze', 'die', ['Words ending in -e are mostly feminine.', 'Les mots en -e sont majoritairement féminins.']),
    grammar(
      'sp-fk-plural',
      ['Plural of clothing', 'Pluriel des vêtements'],
      [
        'Some clothes are **always plural** in German: **die Hose** can be singular (one pair), but you also hear **die Hosen**. The most useful plurals:\n\n- das Hemd → **die Hemden**\n- die Hose → **die Hosen**\n- der Schuh → **die Schuhe**\n- die Socke → **die Socken**\n- die Jacke → **die Jacken**\n- das Kleid → **die Kleider**\n- der Mantel → **die Mäntel**\n\nWith **tragen**: *Ich trage eine Hose* (singular) · *Ich trage Schuhe* (plural, no article).',
        'Certains vêtements sont **toujours au pluriel** en allemand : **die Hose** peut être singulier (un pantalon), mais on entend aussi **die Hosen**. Les pluriels les plus utiles :\n\n- das Hemd → **die Hemden**\n- die Hose → **die Hosen**\n- der Schuh → **die Schuhe**\n- die Socke → **die Socken**\n- die Jacke → **die Jacken**\n- das Kleid → **die Kleider**\n- der Mantel → **die Mäntel**\n\nAvec **tragen** : *Ich trage eine Hose* (singulier) · *Ich trage Schuhe* (pluriel, sans article).',
      ],
      [
        ['Ich trage eine Hose.', 'I am wearing trousers.', 'Je porte un pantalon.'],
        ['Die Schuhe sind neu.', 'The shoes are new.', 'Les chaussures sont neuves.'],
        ['Im Schrank hängen fünf Hemden.', 'Five shirts hang in the wardrobe.', 'Cinq chemises sont suspendues dans l’armoire.'],
      ],
    ),
    match(
      'sp-fk-e8',
      [
        ['das Hemd', 'the shirt', 'la chemise'],
        ['die Hose', 'the trousers', 'le pantalon'],
        ['der Mantel', 'the coat', 'le manteau'],
        ['die Socke', 'the sock', 'la chaussette'],
        ['die Mütze', 'the cap', 'le bonnet'],
      ],
      ['Match the clothes with their translation.', 'Associe les vêtements à leur traduction.'],
    ),
    mc(
      'sp-fk-e9',
      ['What is the plural of "der Schuh"?', 'Quel est le pluriel de « der Schuh » ?'],
      ['die Schuhe', 'die Schuhen', 'die Schuhs'], ['die Schuhe', 'die Schuhen', 'die Schuhs'], 0,
      ['Schuh → Schuhe.', 'Schuh → Schuhe.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Describing: colour + noun', 'Décrire : couleur + nom',
      'Before a noun the colour takes an ending — the key step.', 'Devant un nom, la couleur prend une terminaison — l’étape clé.',
    ),
    grammar(
      'sp-fk-endings',
      ['Colour before a noun', 'Couleur devant un nom'],
      [
        'When the colour stands **before the noun**, it needs an ending. With **ein / eine** (indefinite article), the endings (nominative and accusative) are:\n\n- masculine: **ein blau-er** Pullover (nominative) · **einen blau-en** Pullover (accusative)\n- feminine: **eine rot-e** Jacke\n- neuter: **ein grün-es** Hemd\n- plural: **blau-e** Hosen\n\nAfter **der / die / das** the ending is simply **-e** (or **-en** in the accusative masculine and plural): **der blaue** Pullover, **die rote** Jacke, **das grüne** Hemd.',
        'Quand la couleur est **devant le nom**, elle prend une terminaison. Avec **ein / eine** (article indéfini), les terminaisons (nominatif et accusatif) sont :\n\n- masculin : **ein blau-er** Pullover (nominatif) · **einen blau-en** Pullover (accusatif)\n- féminin : **eine rot-e** Jacke\n- neutre : **ein grün-es** Hemd\n- pluriel : **blau-e** Hosen\n\nAprès **der / die / das**, la terminaison est simplement **-e** (ou **-en** à l’accusatif masculin et au pluriel) : **der blaue** Pullover, **die rote** Jacke, **das grüne** Hemd.',
      ],
      [
        ['Ich trage einen blauen Pullover.', 'I am wearing a blue sweater.', 'Je porte un pull bleu.'],
        ['Sie hat eine rote Jacke.', 'She has a red jacket.', 'Elle a une veste rouge.'],
        ['Er kauft ein grünes Hemd.', 'He buys a green shirt.', 'Il achète une chemise verte.'],
        ['Ich mag die schwarzen Schuhe.', 'I like the black shoes.', 'J’aime les chaussures noires.'],
      ],
    ),
    grammar(
      'sp-fk-invariable',
      ['Colours that never change', 'Couleurs invariables'],
      [
        'A few colours **never take an ending**, even before a noun: **rosa**, **lila**, **orange**, **beige**. You simply add them as they are:\n\n- eine **rosa** Bluse\n- ein **lila** Kleid\n- **orange** Socken\n\nThe same applies to **hell-** and **dunkel-** colours: they behave like normal adjectives (*ein dunkelblauer Mantel*).',
        'Quelques couleurs **ne prennent jamais de terminaison**, même devant un nom : **rosa**, **lila**, **orange**, **beige**. On les met telles quelles :\n\n- eine **rosa** Bluse\n- ein **lila** Kleid\n- **orange** Socken\n\nLes couleurs avec **hell-** et **dunkel-** se comportent comme des adjectifs normaux (*ein dunkelblauer Mantel*).',
      ],
      [
        ['Sie trägt eine rosa Bluse.', 'She is wearing a pink blouse.', 'Elle porte un chemisier rose.'],
        ['Ich möchte ein lila Kleid.', 'I would like a purple dress.', 'Je voudrais une robe violette.'],
        ['Er hat einen dunkelblauen Mantel.', 'He has a dark blue coat.', 'Il a un manteau bleu foncé.'],
      ],
    ),
    fb(
      'sp-fk-e10',
      ['Ich trage einen ___ Pullover. (blau — masculine accusative)', 'Ich trage einen ___ Pullover. (blau — accusatif masculin)'],
      'blauen',
      ['einen + masculine accusative → -en.', 'einen + accusatif masculin → -en.'],
    ),
    fb(
      'sp-fk-e11',
      ['Sie hat eine ___ Jacke. (rot)', 'Sie hat eine ___ Jacke. (rot)'],
      'rote',
      ['Feminine after "eine": -e.', 'Féminin après « eine » : -e.'],
    ),
    fb(
      'sp-fk-e12',
      ['Er kauft ein ___ Hemd. (grün)', 'Er kauft ein ___ Hemd. (grün)'],
      'grünes',
      ['Neuter after "ein": -es.', 'Neutre après « ein » : -es.'],
    ),
    mc(
      'sp-fk-e13',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Sie trägt eine rosa Bluse.', 'Sie trägt eine rosane Bluse.', 'Sie trägt eine rosas Bluse.'],
      ['Sie trägt eine rosa Bluse.', 'Sie trägt eine rosane Bluse.', 'Sie trägt eine rosas Bluse.'], 0,
      ['rosa, lila, orange and beige never change.', 'rosa, lila, orange et beige ne changent jamais.'],
    ),
    wo('sp-fk-e14', ['einen', 'Ich', 'trage', 'Pullover', 'blauen'], ['Ich', 'trage', 'einen', 'blauen', 'Pullover'], ['Article, then colour with ending, then noun.', 'Article, puis couleur avec terminaison, puis nom.']),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Opinions and fit', 'Opinions et ajustement',
      'gefallen, passen, stehen — and the dative pronoun.', 'gefallen, passen, stehen — et le pronom au datif.',
    ),
    vocab('sp-farben-kleidung-gefallen', 'gefallen', 'to please, to like (the look)', 'plaire', null, 'ge-FAL-len', 'geh-FAHL-en', ['Der Mantel gefällt mir.', 'I like the coat.', 'Le manteau me plaît.']),
    vocab('sp-farben-kleidung-passen', 'passen', 'to fit, to suit', 'convenir, aller', null, 'PAS-sen', 'PAH-sen', ['Die Hose passt mir nicht.', 'The trousers don’t fit me.', 'Le pantalon ne me va pas.']),
    vocab('sp-farben-kleidung-stehen', 'stehen', 'to suit (look good on)', 'aller (à quelqu’un)', null, 'STE-hen', 'SHTAY-en', ['Blau steht dir gut.', 'Blue suits you.', 'Le bleu te va bien.']),
    vocab('sp-farben-kleidung-bequem', 'bequem', 'comfortable', 'confortable', null, 'be-QUEM', 'beh-KVAYM', ['Die Schuhe sind sehr bequem.', 'The shoes are very comfortable.', 'Les chaussures sont très confortables.']),
    vocab('sp-farben-kleidung-eng', 'eng', 'tight, narrow', 'serré, étroit', null, 'ENG', 'ENG', ['Das Hemd ist zu eng.', 'The shirt is too tight.', 'La chemise est trop serrée.']),
    vocab('sp-farben-kleidung-weit', 'weit', 'wide, loose', 'large, ample', null, 'WEIT', 'VITE', ['Der Pullover ist zu weit.', 'The sweater is too loose.', 'Le pull est trop large.']),
    grammar(
      'sp-fk-dative',
      ['gefallen, passen, stehen take the dative', 'gefallen, passen, stehen prennent le datif'],
      [
        'These three verbs are used with the **dative** of the person — the thing is the subject:\n\n- Der Mantel **gefällt** **mir**. (The coat pleases me → I like it.)\n- Die Hose **passt** **ihm** nicht. (The trousers don\'t fit him.)\n- Blau **steht** **dir** gut. (Blue suits you.)\n\nDative pronouns: **mir, dir, ihm, ihr, uns, euch, ihnen**.',
        'Ces trois verbes se construisent avec le **datif** de la personne — la chose est le sujet :\n\n- Der Mantel **gefällt** **mir**. (Le manteau me plaît → je l’aime.)\n- Die Hose **passt** **ihm** nicht. (Le pantalon ne lui va pas.)\n- Blau **steht** **dir** gut. (Le bleu te va bien.)\n\nPronoms au datif : **mir, dir, ihm, ihr, uns, euch, ihnen**.',
      ],
      [
        ['Der Mantel gefällt mir.', 'I like the coat.', 'J’aime le manteau.'],
        ['Die Schuhe passen ihm nicht.', 'The shoes don’t fit him.', 'Les chaussures ne lui vont pas.'],
        ['Rot steht dir gut.', 'Red suits you.', 'Le rouge te va bien.'],
      ],
    ),
    fb(
      'sp-fk-e15',
      ['Der Mantel gefällt ___. (ich — dative)', 'Der Mantel gefällt ___. (ich — datif)'],
      'mir',
      ['ich → mir in the dative.', 'ich → mir au datif.'],
    ),
    fb(
      'sp-fk-e16',
      ['Blau steht ___ gut. (du — dative)', 'Blau steht ___ gut. (du — datif)'],
      'dir',
      ['du → dir.', 'du → dir.'],
    ),
    mc(
      'sp-fk-e17',
      ['"The trousers don\'t fit me." →', '« Le pantalon ne me va pas. » →'],
      ['Die Hose passt mir nicht.', 'Die Hose passe ich nicht.', 'Ich passe die Hose nicht.'],
      ['Die Hose passt mir nicht.', 'Die Hose passe ich nicht.', 'Ich passe die Hose nicht.'], 0,
      ['The thing is the subject, the person is in the dative.', 'La chose est le sujet, la personne est au datif.'],
    ),
    wo('sp-fk-e18', ['mir', 'Das', 'gefällt', 'Kleid'], ['Das', 'Kleid', 'gefällt', 'mir'], ['Subject, verb, dative pronoun.', 'Sujet, verbe, pronom au datif.']),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'In the shop', 'À la boutique',
      'Sizes, trying on, prices and paying.', 'Tailles, essayage, prix et paiement.',
    ),
    vocab('sp-farben-kleidung-groesse', 'die Größe', 'the size', 'la taille', 'die', 'GRÖ-ße', 'dee GRUH-seh', ['Welche Größe haben Sie?', 'What size are you?', 'Quelle taille faites-vous ?']),
    vocab('sp-farben-kleidung-anprobieren', 'anprobieren', 'to try on', 'essayer', null, 'AN-pro-bie-ren', 'AHN-pro-bee-ren', ['Kann ich das anprobieren?', 'Can I try this on?', 'Puis-je l’essayer ?']),
    vocab('sp-farben-kleidung-kabine', 'die Umkleidekabine', 'the fitting room', 'la cabine d’essayage', 'die', 'UM-klei-de-ka-bi-ne', 'dee OOM-kly-deh-kah-bee-neh', ['Die Umkleidekabine ist dort hinten.', 'The fitting room is back there.', 'La cabine d’essayage est au fond.']),
    vocab('sp-farben-kleidung-kosten', 'kosten', 'to cost', 'coûter', null, 'KOS-ten', 'KOS-ten', ['Was kostet der Mantel?', 'How much is the coat?', 'Combien coûte le manteau ?']),
    vocab('sp-farben-kleidung-reduziert', 'reduziert', 'reduced, on sale', 'soldé', null, 're-du-ZIERT', 'reh-doo-TSEERT', ['Die Jacke ist reduziert.', 'The jacket is on sale.', 'La veste est en solde.']),
    vocab('sp-farben-kleidung-kassa', 'die Kasse', 'the checkout', 'la caisse', 'die', 'KAS-se', 'dee KAH-seh', ['Die Kasse ist dort vorne.', 'The checkout is up front.', 'La caisse est devant.']),
    grammar(
      'sp-fk-shop',
      ['Useful shop phrases', 'Phrases utiles en boutique'],
      [
        'Four situations in a clothes shop:\n\n- **Looking**: *Ich suche eine Jacke.* · *Ich schaue nur.* (I am just looking.)\n- **Size / trying on**: *Haben Sie das in Größe M?* · *Kann ich das anprobieren?*\n- **Price**: *Was kostet das?* · *Das ist zu teuer.* · *Das ist reduziert.*\n- **Paying**: *Ich nehme das.* · *Kann ich mit Karte zahlen?*\n\nRemember **Haben Sie …?** and **Könnten Sie …?** to stay polite.',
        'Quatre situations dans une boutique :\n\n- **Regarder** : *Ich suche eine Jacke.* · *Ich schaue nur.* (Je regarde seulement.)\n- **Taille / essayage** : *Haben Sie das in Größe M?* · *Kann ich das anprobieren?*\n- **Prix** : *Was kostet das?* · *Das ist zu teuer.* · *Das ist reduziert.*\n- **Payer** : *Ich nehme das.* · *Kann ich mit Karte zahlen?*\n\nRetiens **Haben Sie …?** et **Könnten Sie …?** pour rester poli.',
      ],
      [
        ['Ich suche eine Jacke in Größe M.', 'I am looking for a jacket in size M.', 'Je cherche une veste en taille M.'],
        ['Kann ich das anprobieren?', 'Can I try it on?', 'Puis-je l’essayer ?'],
        ['Das ist zu teuer. Haben Sie etwas Günstigeres?', 'That is too expensive. Do you have something cheaper?', 'C’est trop cher. Avez-vous quelque chose de moins cher ?'],
        ['Ich nehme das. Kann ich mit Karte zahlen?', 'I will take it. Can I pay by card?', 'Je le prends. Puis-je payer par carte ?'],
      ],
    ),
    wo('sp-fk-e19', ['anprobieren', 'ich', 'Kann', 'das'], ['Kann', 'ich', 'das', 'anprobieren'], ['Modal question, infinitive at the end.', 'Question avec modal, infinitif à la fin.']),
    mc(
      'sp-fk-e20',
      ['You want to know the price. What do you ask?', 'Tu veux connaître le prix. Que demandes-tu ?'],
      ['Was kostet das?', 'Wie heißt das?', 'Wo ist das?'], ['Was kostet das?', 'Wie heißt das?', 'Wo ist das?'], 0,
      ['kosten = to cost.', 'kosten = coûter.'],
    ),
    mc(
      'sp-fk-e21',
      ['The jacket is too expensive. What can you say?', 'La veste est trop chère. Que peux-tu dire ?'],
      ['Das ist zu teuer.', 'Das ist zu klein.', 'Das ist zu laut.'], ['Das ist zu teuer.', 'Das ist zu klein.', 'Das ist zu laut.'], 0,
      ['teuer = expensive.', 'teuer = cher.'],
    ),
    lc(
      'sp-fk-e22',
      ['Listen. What does the customer ask?', 'Écoute. Que demande le client ?'],
      'Haben Sie das in Größe M?',
      ['If they have it in size M', 'If the shop is open', 'Where the checkout is'], ['S’ils l’ont en taille M', 'Si le magasin est ouvert', 'Où est la caisse'], 0,
      ['Listen for "Größe M".', 'Écoute « Größe M ».'],
    ),

    wrapup(
      '**Colours** — rot, blau, gelb, grün, schwarz, weiß, grau, braun, orange, rosa, lila. After *sein* no ending.\n\n**Clothes with articles** — das Hemd, die Hose, der Pullover, das Kleid, die Jacke, der Schuh, die Socke, der Mantel, die Mütze.\n\n**Ending before a noun** — ein blauer Pullover, eine rote Jacke, ein grünes Hemd; rosa, lila, orange, beige never change.\n\n**Opinions** — gefallen, passen, stehen + dative (mir, dir …).\n\n**Shop** — Haben Sie …? · Kann ich das anprobieren? · Was kostet das? · Ich nehme das.',
      '**Couleurs** — rot, blau, gelb, grün, schwarz, weiß, grau, braun, orange, rosa, lila. Après *sein* pas de terminaison.\n\n**Vêtements avec leurs articles** — das Hemd, die Hose, der Pullover, das Kleid, die Jacke, der Schuh, die Socke, der Mantel, die Mütze.\n\n**Terminaison devant un nom** — ein blauer Pullover, eine rote Jacke, ein grünes Hemd ; rosa, lila, orange, beige ne changent jamais.\n\n**Opinions** — gefallen, passen, stehen + datif (mir, dir …).\n\n**Boutique** — Haben Sie … ? · Kann ich das anprobieren ? · Was kostet das ? · Ich nehme das.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Colours & clothes', 'Quiz final : couleurs & vêtements'),
    match(
      'sp-fk-q1',
      [
        ['blau', 'blue', 'bleu'],
        ['gelb', 'yellow', 'jaune'],
        ['braun', 'brown', 'marron'],
        ['schwarz', 'black', 'noir'],
        ['grün', 'green', 'vert'],
      ],
      ['Match each colour with its translation.', 'Associe chaque couleur à sa traduction.'],
    ),
    ap('sp-fk-q2', 'Kleid', 'das', ['Kleid is neuter.', 'Kleid est neutre.']),
    ap('sp-fk-q3', 'Mantel', 'der', ['Mantel is masculine.', 'Mantel est masculin.']),
    ap('sp-fk-q4', 'Jacke', 'die', ['Jacke is feminine.', 'Jacke est féminin.']),
    fb(
      'sp-fk-q5',
      ['Das Hemd ist ___. (white)', 'Das Hemd ist ___. (blanc)'],
      'weiß',
      ['After sein, no ending.', 'Après sein, pas de terminaison.'],
    ),
    fb(
      'sp-fk-q6',
      ['Ich trage einen ___ Mantel. (schwarz — accusative masculine)', 'Ich trage einen ___ Mantel. (schwarz — accusatif masculin)'],
      'schwarzen',
      ['einen → -en.', 'einen → -en.'],
    ),
    fb(
      'sp-fk-q7',
      ['Sie trägt ein ___ Kleid. (grün — neuter)', 'Sie trägt ein ___ Kleid. (grün — neutre)'],
      'grünes',
      ['ein + neuter → -es.', 'ein + neutre → -es.'],
    ),
    mc(
      'sp-fk-q8',
      ['Which colour never takes an ending?', 'Quelle couleur ne prend jamais de terminaison ?'],
      ['rosa', 'rot', 'blau'], ['rosa', 'rot', 'blau'], 0,
      ['rosa, lila, orange, beige are invariable.', 'rosa, lila, orange, beige sont invariables.'],
    ),
    fb(
      'sp-fk-q9',
      ['Der Pullover gefällt ___. (ich)', 'Der Pullover gefällt ___. (ich)'],
      'mir',
      ['gefallen + dative: mir.', 'gefallen + datif : mir.'],
    ),
    mc(
      'sp-fk-q10',
      ['"Blue suits you." →', '« Le bleu te va bien. » →'],
      ['Blau steht dir gut.', 'Blau stehst du gut.', 'Du stehst blau gut.'],
      ['Blau steht dir gut.', 'Blau stehst du gut.', 'Du stehst blau gut.'], 0,
      ['stehen + dative.', 'stehen + datif.'],
    ),
    wo('sp-fk-q11', ['Kann', 'anprobieren', 'ich', 'die', 'Hose'], ['Kann', 'ich', 'die', 'Hose', 'anprobieren'], ['Modal first; infinitive last.', 'Modal en premier ; infinitif en dernier.']),
    mc(
      'sp-fk-q12',
      ['You ask the price. Which sentence?', 'Tu demandes le prix. Quelle phrase ?'],
      ['Was kostet der Pullover?', 'Wer kostet der Pullover?', 'Wo kostet der Pullover?'],
      ['Was kostet der Pullover?', 'Wer kostet der Pullover?', 'Wo kostet der Pullover?'], 0,
      ['Was kostet …? = How much is …?', 'Was kostet … ? = Combien coûte … ?'],
    ),
    lc(
      'sp-fk-q13',
      ['Listen. What colour is the jacket?', 'Écoute. De quelle couleur est la veste ?'],
      'Die Jacke ist rot.',
      ['Red', 'Blue', 'Green'], ['Rouge', 'Bleue', 'Verte'], 0,
      ['Listen for "rot".', 'Écoute « rot ».'],
    ),
    mc(
      'sp-fk-q14',
      ['What is the plural of "die Socke"?', 'Quel est le pluriel de « die Socke » ?'],
      ['die Socken', 'die Sockes', 'die Söcke'], ['die Socken', 'die Sockes', 'die Söcke'], 0,
      ['Feminine nouns in -e take -n.', 'Les noms féminins en -e prennent -n.'],
    ),
  ],
});

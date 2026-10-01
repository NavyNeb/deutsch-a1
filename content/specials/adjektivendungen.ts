import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const adjektivendungen = defineSpecial({
  slug: 'adjektivendungen',
  number: 12,
  group: 'cases',
  levels: ['A2', 'B1'],
  related: ['a2-l11', 'a2-l15', 'a2-l16', 'b1-l17', 'b1-l19'],
  title: ['Adjektivendungen', 'Adjective endings', 'Les terminaisons des adjectifs'],
  theme: [
    'Why adjectives take endings, and the three tables (definite, indefinite, no article) that give you the right one',
    'Pourquoi les adjectifs prennent des terminaisons, et les trois tableaux (défini, indéfini, sans article) qui donnent la bonne',
  ],
  goals: [
    'Know when an adjective takes an ending and when it stays bare',
    'Use the -e / -en pattern after der, die, das',
    'Use -er / -e / -es after ein-, mein-, kein- in the nominative and accusative',
    'Use the "article-ending" pattern when there is no article',
  ],
  goalsFr: [
    'Savoir quand un adjectif prend une terminaison et quand il reste nu',
    'Utiliser le schéma -e / -en après der, die, das',
    'Utiliser -er / -e / -es après ein-, mein-, kein- au nominatif et à l’accusatif',
    'Utiliser le schéma « terminaison de l’article » quand il n’y a pas d’article',
  ],
  steps: [
    intro(
      'Ein großer, alter Baum', 'Un grand et vieil arbre',
      'The German adjective changes its ending according to gender, number and case, and also according to the article in front of it. It looks like a maze, but there are only three tables and a clear logic: the ending carries the information the article did not carry. This special gives you that logic.',
      'L’adjectif allemand change de terminaison selon le genre, le nombre et le cas, et aussi selon l’article qui le précède. Ça ressemble à un labyrinthe, mais il n’y a que trois tableaux et une logique claire : la terminaison porte l’information que l’article n’a pas portée. Ce spécial te donne cette logique.',
      [
        'When the adjective has an ending and when it does not',
        'Endings after the definite article: -e and -en',
        'Endings after ein-, mein-, kein-: the "missing signal" rule',
        'Endings without an article',
        'Special adjectives and a quick strategy',
      ],
      [
        'Quand l’adjectif a une terminaison et quand il n’en a pas',
        'Terminaisons après l’article défini : -e et -en',
        'Terminaisons après ein-, mein-, kein- : la règle du « signal manquant »',
        'Terminaisons sans article',
        'Adjectifs particuliers et stratégie rapide',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Ending or no ending?', 'Terminaison ou pas ?',
      'Predicative and attributive adjectives.', 'Adjectifs attributs et épithètes.',
    ),
    grammar(
      'sp-adj-basics',
      ['Before a noun: ending. After sein: none.', 'Devant un nom : terminaison. Après sein : aucune.'],
      [
        'The adjective takes an **ending only when it stands before a noun**:\n\n- **Predicate (after sein, werden, bleiben): no ending.** Das Haus ist **groß**. Der Kaffee wird **kalt**.\n- **Attribute (before a noun): ending.** Das **große** Haus. Ein **kalter** Kaffee.\n\nThree tables decide which ending to use:\n\n- 1. After the **definite article** (der, die, das, dieser, jeder…)\n- 2. After the **indefinite article** (ein, kein, mein, dein, sein, ihr, unser…)\n- 3. With **no article** (e.g. before plurals or uncountable nouns)\n\nThe **logic:** each noun phrase must show gender, number and case **once**. If the article shows it, the adjective takes a weak ending (**-e / -en**). If the article does not show it, the adjective takes the strong ending (**-er, -es, -em…**) and shows it for the article.',
        'L’adjectif ne prend une **terminaison que devant un nom** :\n\n- **Attribut (après sein, werden, bleiben) : pas de terminaison.** Das Haus ist **groß**. Der Kaffee wird **kalt**.\n- **Épithète (devant un nom) : terminaison.** Das **große** Haus. Ein **kalter** Kaffee.\n\nTrois tableaux décident de la terminaison :\n\n- 1. Après l’**article défini** (der, die, das, dieser, jeder…)\n- 2. Après l’**article indéfini** (ein, kein, mein, dein, sein, ihr, unser…)\n- 3. **Sans article** (par ex. devant un pluriel ou un nom indénombrable)\n\n**La logique :** chaque groupe nominal doit montrer genre, nombre et cas **une seule fois**. Si l’article le montre, l’adjectif prend une terminaison faible (**-e / -en**). Si l’article ne le montre pas, l’adjectif prend la terminaison forte (**-er, -es, -em…**) et le montre à sa place.',
      ],
      [
        ['Das Wetter ist schön.', 'The weather is nice.', 'Il fait beau.'],
        ['Wir haben schönes Wetter.', 'We have nice weather.', 'Nous avons du beau temps.'],
        ['Der neue Lehrer ist sehr nett.', 'The new teacher is very kind.', 'Le nouvel enseignant est très gentil.'],
      ],
    ),
    vocab('sp-adjektivendungen-neu', 'neu', 'new', 'nouveau', null, 'NOY', 'NOY', ['Ich brauche ein neues Handy.', 'I need a new mobile phone.', 'J’ai besoin d’un nouveau téléphone.']),
    vocab('sp-adjektivendungen-alt', 'alt', 'old', 'vieux, âgé', null, 'ALT', 'AHLT', ['Der alte Mann sitzt im Park.', 'The old man is sitting in the park.', 'Le vieil homme est assis dans le parc.']),
    mc(
      'sp-adj-e1',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Der Tisch ist groß.', 'Der Tisch ist großer.', 'Der Tisch ist große.'],
      ['Der Tisch ist groß.', 'Der Tisch ist großer.', 'Der Tisch ist große.'], 0,
      ['After sein the adjective has no ending.', 'Après sein, l’adjectif n’a pas de terminaison.'],
    ),
    mc(
      'sp-adj-e2',
      ['"Das ___ Haus ist teuer." (groß)', '« Das ___ Haus ist teuer. » (groß)'],
      ['große', 'großes', 'großen'], ['große', 'großes', 'großen'], 0,
      ['After das (nominative neuter) the ending is -e.', 'Après das (nominatif neutre), la terminaison est -e.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'After der, die, das', 'Après der, die, das',
      'The easiest table: -e or -en.', 'Le tableau le plus facile : -e ou -en.',
    ),
    grammar(
      'sp-adj-definite',
      ['Table 1: the definite article', 'Tableau 1 : l’article défini'],
      [
        'After **der, die, das** (and dieser, jeder, welcher, alle, diese…) the ending is **-e or -en**:\n\n- **Nominative:** m **-e** (der große Mann) · f **-e** (die große Frau) · n **-e** (das große Kind) · pl **-en** (die großen Kinder)\n- **Accusative:** m **-en** (den großen Mann) · f **-e** · n **-e** · pl **-en**\n- **Dative:** **-en** everywhere (dem großen Mann, der großen Frau, dem großen Kind, den großen Kindern)\n- **Genitive:** **-en** everywhere (des großen Mannes, der großen Frau)\n\n**Memory trick:** the endings are **-e** in the nominative singular and in the accusative feminine/neuter. **Everything else is -en**.\n\nTwo forms to remember: the **accusative masculine** is **-en**, and all **plural** forms are **-en**.',
        'Après **der, die, das** (et dieser, jeder, welcher, alle, diese…), la terminaison est **-e ou -en** :\n\n- **Nominatif :** m **-e** (der große Mann) · f **-e** (die große Frau) · n **-e** (das große Kind) · pl **-en** (die großen Kinder)\n- **Accusatif :** m **-en** (den großen Mann) · f **-e** · n **-e** · pl **-en**\n- **Datif :** **-en** partout (dem großen Mann, der großen Frau, dem großen Kind, den großen Kindern)\n- **Génitif :** **-en** partout (des großen Mannes, der großen Frau)\n\n**Astuce :** les terminaisons sont **-e** au nominatif singulier et à l’accusatif féminin/neutre. **Tout le reste est -en**.\n\nDeux formes à retenir : l’**accusatif masculin** est **-en**, et tout le **pluriel** est **-en**.',
      ],
      [
        ['Der junge Lehrer erklärt die neue Regel.', 'The young teacher explains the new rule.', 'Le jeune enseignant explique la nouvelle règle.'],
        ['Ich kaufe den roten Mantel.', 'I am buying the red coat.', 'J’achète le manteau rouge.'],
        ['Wir wohnen in der kleinen Stadt.', 'We live in the small town.', 'Nous habitons dans la petite ville.'],
        ['Die alten Häuser sind schön.', 'The old houses are beautiful.', 'Les vieilles maisons sont belles.'],
      ],
      'conjugation-table',
    ),
    fb(
      'sp-adj-e3',
      ['Der ___ Mann kommt aus Berlin. (alt)', 'Der ___ Mann kommt aus Berlin. (alt)'],
      'alte',
      ['Nominative masculine after der: -e.', 'Nominatif masculin après der : -e.'],
    ),
    fb(
      'sp-adj-e4',
      ['Ich sehe den ___ Hund. (klein)', 'Ich sehe den ___ Hund. (klein)'],
      'kleinen',
      ['Accusative masculine after den: -en.', 'Accusatif masculin après den : -en.'],
    ),
    fb(
      'sp-adj-e5',
      ['Wir kaufen die ___ Lampe. (neu)', 'Wir kaufen die ___ Lampe. (neu)'],
      'neue',
      ['Accusative feminine after die: -e.', 'Accusatif féminin après die : -e.'],
    ),
    fb(
      'sp-adj-e6',
      ['Er hilft dem ___ Mädchen. (klein)', 'Er hilft dem ___ Mädchen. (klein)'],
      'kleinen',
      ['Dative always takes -en.', 'Le datif prend toujours -en.'],
    ),
    mc(
      'sp-adj-e7',
      ['"Die ___ Kinder spielen draußen." (klein)', '« Die ___ Kinder spielen draußen. » (klein)'],
      ['kleinen', 'kleine', 'kleiner'], ['kleinen', 'kleine', 'kleiner'], 0,
      ['Plural after die: -en.', 'Pluriel après die : -en.'],
    ),
    wo('sp-adj-e8', ['den', 'Ich', 'roten', 'Mantel', 'kaufe'], ['Ich', 'kaufe', 'den', 'roten', 'Mantel'], ['Subject, verb, then the accusative object.', 'Sujet, verbe, puis l’objet à l’accusatif.']),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'After ein, mein, kein', 'Après ein, mein, kein',
      'The article is missing a signal — the adjective supplies it.', 'L’article n’a pas de signal — l’adjectif le fournit.',
    ),
    grammar(
      'sp-adj-indefinite',
      ['Table 2: ein-words', 'Tableau 2 : les mots en ein-'],
      [
        'After **ein, kein, mein, dein, sein, ihr, unser, euer** the article has **no ending** in the masculine nominative (*ein*) and the neuter nominative/accusative (*ein*). The adjective takes the missing signal:\n\n- **Nominative:** m ein gut**er** Freund · f eine gut**e** Freundin · n ein gut**es** Buch\n- **Accusative:** m einen gut**en** Freund · f eine gut**e** Freundin · n ein gut**es** Buch\n- **Dative:** **-en** (einem guten Freund, einer guten Freundin, einem guten Buch)\n- **Genitive:** **-en** (eines guten Freundes, einer guten Freundin)\n- **Plural (kein-, mein-…):** **-en** (meine guten Freunde, keine guten Ideen)\n\n**Memory trick:** only **three** places differ from table 1: **nominative masculine -er**, **nominative neuter -es**, **accusative neuter -es**. Everything else is the same as after *der*.',
        'Après **ein, kein, mein, dein, sein, ihr, unser, euer**, l’article **n’a pas de terminaison** au nominatif masculin (*ein*) et au nominatif/accusatif neutre (*ein*). L’adjectif prend le signal manquant :\n\n- **Nominatif :** m ein gut**er** Freund · f eine gut**e** Freundin · n ein gut**es** Buch\n- **Accusatif :** m einen gut**en** Freund · f eine gut**e** Freundin · n ein gut**es** Buch\n- **Datif :** **-en** (einem guten Freund, einer guten Freundin, einem guten Buch)\n- **Génitif :** **-en** (eines guten Freundes, einer guten Freundin)\n- **Pluriel (kein-, mein-…) :** **-en** (meine guten Freunde, keine guten Ideen)\n\n**Astuce :** seulement **trois** endroits diffèrent du tableau 1 : **nominatif masculin -er**, **nominatif neutre -es**, **accusatif neutre -es**. Tout le reste est identique à celui après *der*.',
      ],
      [
        ['Das ist ein interessanter Film.', 'That is an interesting film.', 'C’est un film intéressant.'],
        ['Sie hat ein neues Fahrrad.', 'She has a new bike.', 'Elle a un nouveau vélo.'],
        ['Ich habe keinen großen Hunger.', 'I am not very hungry.', 'Je n’ai pas très faim.'],
        ['Mit meinem alten Handy telefoniere ich nicht mehr.', 'I no longer phone with my old mobile.', 'Je ne téléphone plus avec mon vieux portable.'],
      ],
      'conjugation-table',
    ),
    fb(
      'sp-adj-e9',
      ['Das ist ein ___ Auto. (neu, nominative neuter)', 'Das ist ein ___ Auto. (neu, nominatif neutre)'],
      'neues',
      ['ein has no ending, so the adjective takes -es.', 'ein n’a pas de terminaison, donc l’adjectif prend -es.'],
    ),
    fb(
      'sp-adj-e10',
      ['Er ist ein ___ Lehrer. (gut, nominative masculine)', 'Er ist ein ___ Lehrer. (gut, nominatif masculin)'],
      'guter',
      ['ein has no ending, so the adjective takes -er.', 'ein n’a pas de terminaison, donc l’adjectif prend -er.'],
    ),
    fb(
      'sp-adj-e11',
      ['Ich habe einen ___ Bruder. (klein, accusative masculine)', 'Ich habe einen ___ Bruder. (klein, accusatif masculin)'],
      'kleinen',
      ['The article shows the case (einen), so the adjective takes -en.', 'L’article montre le cas (einen), donc l’adjectif prend -en.'],
    ),
    fb(
      'sp-adj-e12',
      ['Sie trägt ein ___ Kleid. (rot, accusative neuter)', 'Sie trägt ein ___ Kleid. (rot, accusatif neutre)'],
      'rotes',
      ['Accusative neuter after ein: -es.', 'Accusatif neutre après ein : -es.'],
    ),
    mc(
      'sp-adj-e13',
      ['"Wir haben keine ___ Ideen." (gut)', '« Wir haben keine ___ Ideen. » (gut)'],
      ['guten', 'gute', 'guter'], ['guten', 'gute', 'guter'], 0,
      ['Plural after kein-: -en.', 'Pluriel après kein- : -en.'],
    ),
    mc(
      'sp-adj-e14',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich habe einen neuen Computer.', 'Ich habe einen neuer Computer.', 'Ich habe einen neues Computer.'],
      ['Ich habe einen neuen Computer.', 'Ich habe einen neuer Computer.', 'Ich habe einen neues Computer.'], 0,
      ['Accusative masculine after einen: -en.', 'Accusatif masculin après einen : -en.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'No article', 'Sans article',
      'When the adjective carries the full signal.', 'Quand l’adjectif porte tout le signal.',
    ),
    grammar(
      'sp-adj-noarticle',
      ['Table 3: no article', 'Tableau 3 : sans article'],
      [
        'When there is **no article** (before plurals, uncountable nouns, or after numbers and quantity words), the adjective takes the **ending the article would have had**:\n\n- **Nominative:** m kalt**er** Kaffee · f frisch**e** Milch · n kalt**es** Wasser · pl nett**e** Leute\n- **Accusative:** m kalt**en** Kaffee · f frisch**e** Milch · n kalt**es** Wasser · pl nett**e** Leute\n- **Dative:** m kalt**em** Kaffee · f frisch**er** Milch · n kalt**em** Wasser · pl nett**en** Leuten\n- **Genitive:** m kalt**en** Kaffees · f frisch**er** Milch · n kalt**en** Wassers · pl nett**er** Leute\n\n**Where you meet it:** food and drinks (**frisches Brot**, **kalte Milch**), plurals (**gute Freunde**), and after numbers (**zwei kleine Kinder**).\n\n**Memory trick:** the endings are almost the endings of **der, die, das**: -er (der), -e (die), -es (das), -e (plural), -em (dem), -er (der), -en (den).',
        'Quand il n’y a **pas d’article** (devant les pluriels, les indénombrables, ou après un nombre ou un quantificateur), l’adjectif prend la **terminaison que l’article aurait eue** :\n\n- **Nominatif :** m kalt**er** Kaffee · f frisch**e** Milch · n kalt**es** Wasser · pl nett**e** Leute\n- **Accusatif :** m kalt**en** Kaffee · f frisch**e** Milch · n kalt**es** Wasser · pl nett**e** Leute\n- **Datif :** m kalt**em** Kaffee · f frisch**er** Milch · n kalt**em** Wasser · pl nett**en** Leuten\n- **Génitif :** m kalt**en** Kaffees · f frisch**er** Milch · n kalt**en** Wassers · pl nett**er** Leute\n\n**Où tu le rencontres :** nourriture et boissons (**frisches Brot**, **kalte Milch**), pluriels (**gute Freunde**) et après les nombres (**zwei kleine Kinder**).\n\n**Astuce :** les terminaisons sont presque celles de **der, die, das** : -er (der), -e (die), -es (das), -e (pluriel), -em (dem), -er (der), -en (den).',
      ],
      [
        ['Ich trinke gern kalten Tee.', 'I like drinking cold tea.', 'J’aime boire du thé froid.'],
        ['Wir essen frisches Brot.', 'We eat fresh bread.', 'Nous mangeons du pain frais.'],
        ['Er hat nette Kollegen.', 'He has nice colleagues.', 'Il a des collègues sympathiques.'],
        ['Mit kaltem Wasser wasche ich mein Gesicht.', 'I wash my face with cold water.', 'Je me lave le visage à l’eau froide.'],
      ],
      'conjugation-table',
    ),
    vocab('sp-adjektivendungen-frisch', 'frisch', 'fresh', 'frais', null, 'FRISCH', 'FRISH', ['Das Brot ist ganz frisch.', 'The bread is really fresh.', 'Le pain est tout frais.']),
    fb(
      'sp-adj-e15',
      ['Ich trinke gern ___ Wasser. (kalt)', 'Ich trinke gern ___ Wasser. (kalt)'],
      'kaltes',
      ['Neuter, no article: -es.', 'Neutre, sans article : -es.'],
    ),
    fb(
      'sp-adj-e16',
      ['Sie hat ___ Freunde. (nett)', 'Sie hat ___ Freunde. (nett)'],
      'nette',
      ['Plural, no article, accusative: -e.', 'Pluriel, sans article, accusatif : -e.'],
    ),
    fb(
      'sp-adj-e17',
      ['Wir essen ___ Brot. (frisch)', 'Wir essen ___ Brot. (frisch)'],
      'frisches',
      ['Neuter, no article: -es.', 'Neutre, sans article : -es.'],
    ),
    mc(
      'sp-adj-e18',
      ['"Ich trinke Kaffee mit ___ Milch." (kalt, dative feminine, no article)', '« Ich trinke Kaffee mit ___ Milch. » (kalt, datif féminin, sans article)'],
      ['kalter', 'kalte', 'kalten'], ['kalter', 'kalte', 'kalten'], 0,
      ['Dative feminine without article: -er.', 'Datif féminin sans article : -er.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Special cases and strategy', 'Cas particuliers et stratégie',
      'A few irregular adjectives and a three-question method.', 'Quelques adjectifs irréguliers et une méthode en trois questions.',
    ),
    grammar(
      'sp-adj-special',
      ['Irregular adjectives and the 3-step method', 'Adjectifs irréguliers et méthode en 3 étapes'],
      [
        '**Adjectives that lose or change a letter:**\n\n- **hoch → hoh-:** ein hoher Berg (not *hocher*)\n- **teuer → teur-:** ein teures Auto\n- **dunkel → dunkl-:** eine dunkle Nacht\n- **flexibel → flexibl-:** eine flexible Lösung\n\n**Never an ending:** a few colour and borrowed words such as **lila, rosa, super, prima**: eine lila Jacke, ein super Tag. (Most colours do take endings: ein roter Mantel.)\n\n**Several adjectives:** all take the same ending: ein **großes, altes** Haus.\n\n**After etwas, nichts, viel, wenig:** capitalised, neuter ending -es: **etwas Neues**, **nichts Gutes**, **viel Schönes**.\n\n**Three-step method:**\n\n- 1. Is there a noun directly after the adjective? If not, **no ending**.\n- 2. What is in front of the adjective: **der-word, ein-word or nothing**?\n- 3. Find the **gender and case** and read the table.',
        '**Adjectifs qui perdent ou changent une lettre :**\n\n- **hoch → hoh- :** ein hoher Berg (et non *hocher*)\n- **teuer → teur- :** ein teures Auto\n- **dunkel → dunkl- :** eine dunkle Nacht\n- **flexibel → flexibl- :** eine flexible Lösung\n\n**Jamais de terminaison :** quelques couleurs et mots empruntés comme **lila, rosa, super, prima** : eine lila Jacke, ein super Tag. (La plupart des couleurs prennent une terminaison : ein roter Mantel.)\n\n**Plusieurs adjectifs :** tous prennent la même terminaison : ein **großes, altes** Haus.\n\n**Après etwas, nichts, viel, wenig :** majuscule, terminaison neutre -es : **etwas Neues**, **nichts Gutes**, **viel Schönes**.\n\n**Méthode en trois étapes :**\n\n- 1. Y a-t-il un nom juste après l’adjectif ? Sinon, **pas de terminaison**.\n- 2. Qu’y a-t-il devant l’adjectif : **un mot en der-, un mot en ein- ou rien** ?\n- 3. Trouve **le genre et le cas** et lis le tableau.',
      ],
      [
        ['Das ist ein hoher Berg.', 'That is a high mountain.', 'C’est une haute montagne.'],
        ['Wir haben ein teures Auto gekauft.', 'We bought an expensive car.', 'Nous avons acheté une voiture chère.'],
        ['Sie trägt eine lila Jacke.', 'She is wearing a purple jacket.', 'Elle porte une veste violette.'],
        ['Hast du etwas Neues gelernt?', 'Did you learn something new?', 'As-tu appris quelque chose de nouveau ?'],
      ],
    ),
    vocab('sp-adjektivendungen-teuer', 'teuer', 'expensive', 'cher', null, 'TOY-er', 'TOY-er', ['Das Hotel ist zu teuer.', 'The hotel is too expensive.', 'L’hôtel est trop cher.']),
    vocab('sp-adjektivendungen-hoch', 'hoch', 'high, tall', 'haut', null, 'HOHKH', 'HOHKH', ['Der Berg ist sehr hoch.', 'The mountain is very high.', 'La montagne est très haute.']),
    mc(
      'sp-adj-e19',
      ['"Das ist ein ___ Berg." (hoch)', '« Das ist ein ___ Berg. » (hoch)'],
      ['hoher', 'hocher', 'hoch'], ['hoher', 'hocher', 'hoch'], 0,
      ['hoch loses the c: hoher.', 'hoch perd le c : hoher.'],
    ),
    mc(
      'sp-adj-e20',
      ['"Ein ___ Auto ist nicht billig." (teuer)', '« Ein ___ Auto ist nicht billig. » (teuer)'],
      ['teures', 'teueres', 'teuer'], ['teures', 'teueres', 'teuer'], 0,
      ['teuer loses the e: teures.', 'teuer perd le e : teures.'],
    ),
    match(
      'sp-adj-e21',
      [
        ['der große Mann', 'nominative, after der', 'nominatif, après der'],
        ['einen großen Mann', 'accusative, after ein', 'accusatif, après ein'],
        ['ein großer Mann', 'nominative, after ein', 'nominatif, après ein'],
        ['großer Mann', 'nominative, no article', 'nominatif, sans article'],
      ],
      ['Match each phrase with the table it comes from.', 'Associe chaque groupe au tableau dont il vient.'],
    ),
    wo('sp-adj-e22', ['ein', 'Sie', 'Kleid', 'trägt', 'rotes'], ['Sie', 'trägt', 'ein', 'rotes', 'Kleid'], ['Subject, verb, then article + adjective + noun.', 'Sujet, verbe, puis article + adjectif + nom.']),

    wrapup(
      '**No noun after it → no ending**: Das Haus ist groß.\n\n**After der / die / das** (table 1): nominative -e, accusative masculine -en, accusative feminine/neuter -e, dative -en, genitive -en, plural -en.\n\n**After ein-, mein-, kein-** (table 2): same as table 1, except nominative masculine **-er**, nominative neuter **-es**, accusative neuter **-es**.\n\n**No article** (table 3): the adjective takes the article’s ending (-er, -e, -es, -e / -em, -er, -em, -en).\n\n**Special:** hoch → hoher · teuer → teures · dunkel → dunkle · lila, rosa, super never change · etwas Neues.',
      '**Pas de nom derrière → pas de terminaison** : Das Haus ist groß.\n\n**Après der / die / das** (tableau 1) : nominatif -e, accusatif masculin -en, accusatif féminin/neutre -e, datif -en, génitif -en, pluriel -en.\n\n**Après ein-, mein-, kein-** (tableau 2) : comme le tableau 1, sauf nominatif masculin **-er**, nominatif neutre **-es**, accusatif neutre **-es**.\n\n**Sans article** (tableau 3) : l’adjectif prend la terminaison de l’article (-er, -e, -es, -e / -em, -er, -em, -en).\n\n**Particuliers :** hoch → hoher · teuer → teures · dunkel → dunkle · lila, rosa, super ne changent jamais · etwas Neues.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: adjective endings', 'Quiz final : les terminaisons des adjectifs'),
    fb(
      'sp-adj-q1',
      ['Der ___ Student kommt aus Spanien. (jung)', 'Der ___ Student kommt aus Spanien. (jung)'],
      'junge',
      ['Nominative masculine after der: -e.', 'Nominatif masculin après der : -e.'],
    ),
    fb(
      'sp-adj-q2',
      ['Ich kaufe einen ___ Pullover. (warm)', 'Ich kaufe einen ___ Pullover. (warm)'],
      'warmen',
      ['Accusative masculine after einen: -en.', 'Accusatif masculin après einen : -en.'],
    ),
    fb(
      'sp-adj-q3',
      ['Das ist ein ___ Haus. (schön)', 'Das ist ein ___ Haus. (schön)'],
      'schönes',
      ['Nominative neuter after ein: -es.', 'Nominatif neutre après ein : -es.'],
    ),
    fb(
      'sp-adj-q4',
      ['Er wohnt in einem ___ Dorf. (klein)', 'Er wohnt in einem ___ Dorf. (klein)'],
      'kleinen',
      ['Dative: -en.', 'Datif : -en.'],
    ),
    fb(
      'sp-adj-q5',
      ['Wir trinken gern ___ Tee. (heiß, accusative masculine, no article)', 'Wir trinken gern ___ Tee. (heiß, accusatif masculin, sans article)'],
      'heißen',
      ['Accusative masculine without article: -en.', 'Accusatif masculin sans article : -en.'],
    ),
    fb(
      'sp-adj-q6',
      ['Sie hat ___ Haare. (lang, plural, no article)', 'Sie hat ___ Haare. (lang, pluriel, sans article)'],
      'lange',
      ['Plural without article: -e.', 'Pluriel sans article : -e.'],
    ),
    mc(
      'sp-adj-q7',
      ['"Das Auto ist ___." Which form is correct?', '« Das Auto ist ___. » Quelle forme est correcte ?'],
      ['teuer', 'teure', 'teures'], ['teuer', 'teure', 'teures'], 0,
      ['After sein: no ending.', 'Après sein : aucune terminaison.'],
    ),
    mc(
      'sp-adj-q8',
      ['"Ein ___ Tag!" (super)', '« Ein ___ Tag ! » (super)'],
      ['super', 'supere', 'superer'], ['super', 'supere', 'superer'], 0,
      ['super never changes.', 'super ne change jamais.'],
    ),
    mc(
      'sp-adj-q9',
      ['Which phrase is correct?', 'Quel groupe est correct ?'],
      ['die roten Blumen', 'die rote Blumen', 'die roter Blumen'], ['die roten Blumen', 'die rote Blumen', 'die roter Blumen'], 0,
      ['Plural after die: -en.', 'Pluriel après die : -en.'],
    ),
    mc(
      'sp-adj-q10',
      ['Which phrase is correct?', 'Quel groupe est correct ?'],
      ['mit meinem alten Freund', 'mit meinem alter Freund', 'mit meinem altem Freund'], ['mit meinem alten Freund', 'mit meinem alter Freund', 'mit meinem altem Freund'], 0,
      ['Dative after mein-: -en.', 'Datif après mein- : -en.'],
    ),
    match(
      'sp-adj-q11',
      [
        ['der neue Computer', 'nominative masculine', 'nominatif masculin'],
        ['den neuen Computer', 'accusative masculine', 'accusatif masculin'],
        ['ein neuer Computer', 'nominative, after ein', 'nominatif, après ein'],
        ['neues Papier', 'no article, neuter', 'sans article, neutre'],
      ],
      ['Match each phrase with its description.', 'Associe chaque groupe à sa description.'],
    ),
    wo('sp-adj-q12', ['kauft', 'Er', 'ein', 'neues', 'Handy'], ['Er', 'kauft', 'ein', 'neues', 'Handy'], ['Subject, verb, then the object.', 'Sujet, verbe, puis l’objet.']),
    wo('sp-adj-q13', ['alte', 'Der', 'Mann', 'liest', 'die', 'Zeitung'], ['Der', 'alte', 'Mann', 'liest', 'die', 'Zeitung'], ['Article + adjective + noun, then the verb.', 'Article + adjectif + nom, puis le verbe.']),
    lc(
      'sp-adj-q14',
      ['Listen. Which form of "groß" do you hear?', 'Écoute. Quelle forme de « groß » entends-tu ?'],
      'Ich habe einen großen Hund.',
      ['großen', 'großer', 'großes'], ['großen', 'großer', 'großes'], 0,
      ['Accusative masculine after einen: großen.', 'Accusatif masculin après einen : großen.'],
    ),
  ],
});

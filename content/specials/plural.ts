import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const plural = defineSpecial({
  slug: 'plural',
  number: 10,
  group: 'cases',
  levels: ['A1', 'A2'],
  related: ['l13', 'l3', 'l8', 'a2-l13'],
  title: ['Der Plural', 'Plural forms', 'Le pluriel'],
  theme: [
    'The five plural types, the rules that predict them, and how plurals behave in a sentence',
    'Les cinq types de pluriel, les règles qui les prédisent et le comportement du pluriel dans la phrase',
  ],
  goals: [
    'Know the five plural endings and which nouns usually take them',
    'Predict the plural of feminine nouns almost every time',
    'Know when the vowel changes to an umlaut',
    'Use the dative plural -n and the singular after measure words',
  ],
  goalsFr: [
    'Connaître les cinq terminaisons du pluriel et les noms qui les prennent généralement',
    'Prédire presque à coup sûr le pluriel des noms féminins',
    'Savoir quand la voyelle prend un tréma',
    'Utiliser le -n du datif pluriel et le singulier après les mesures',
  ],
  steps: [
    intro(
      'Ein Kind, zwei Kinder', 'Un enfant, deux enfants',
      'In English you add -s. In German there are five different plural types, plus an umlaut that sometimes appears. It looks chaotic, but there are strong tendencies: feminine nouns nearly always add -n or -en, and many masculine and neuter nouns follow clear patterns. Learn them and your plurals become reliable.',
      'En français, on ajoute -s. En allemand, il y a cinq types de pluriel, plus un tréma qui apparaît parfois. Ça paraît chaotique, mais il y a de fortes tendances : les noms féminins prennent presque toujours -n ou -en, et beaucoup de noms masculins et neutres suivent des schémas clairs. Apprends-les et tes pluriels deviendront fiables.',
      [
        'The five plural types: -e, -er, -(e)n, -s and no ending',
        'The umlaut and when it appears',
        'Feminine nouns: -n / -en and -nen for -in',
        'Masculine and neuter patterns',
        'Dative plural and measure words',
      ],
      [
        'Les cinq types de pluriel : -e, -er, -(e)n, -s et sans terminaison',
        'Le tréma et quand il apparaît',
        'Noms féminins : -n / -en et -nen pour -in',
        'Schémas masculins et neutres',
        'Datif pluriel et mesures',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'The five plural types', 'Les cinq types de pluriel',
      'An overview before the rules.', 'Un aperçu avant les règles.',
    ),
    grammar(
      'sp-plural-types',
      ['Five endings (and an umlaut)', 'Cinq terminaisons (et un tréma)'],
      [
        'Every German plural uses one of these five patterns. The article is always **die**.\n\n- **-e** (often with umlaut ¨): der Tag → die **Tage**, der Stuhl → die **Stühle**\n- **-er** (always with umlaut if possible ¨): das Kind → die **Kinder**, das Haus → die **Häuser**\n- **-n / -en:** die Lampe → die **Lampen**, die Frau → die **Frauen**\n- **-s:** das Auto → die **Autos**, das Handy → die **Handys**\n- **no ending** (sometimes with umlaut): der Lehrer → die **Lehrer**, der Apfel → die **Äpfel**\n\nThe **umlaut** (a→ä, o→ö, u→ü, au→äu) only appears with a, o, u, au. It is never added to e or i.\n\nThat is why a dictionary writes a noun like this: **Tag, -e** · **Haus, ¨er** · **Frau, -en**. Learn the plural **with** the noun.',
        'Tout pluriel allemand utilise l’un de ces cinq schémas. L’article est toujours **die**.\n\n- **-e** (souvent avec tréma ¨) : der Tag → die **Tage**, der Stuhl → die **Stühle**\n- **-er** (toujours avec tréma si possible ¨) : das Kind → die **Kinder**, das Haus → die **Häuser**\n- **-n / -en :** die Lampe → die **Lampen**, die Frau → die **Frauen**\n- **-s :** das Auto → die **Autos**, das Handy → die **Handys**\n- **sans terminaison** (parfois avec tréma) : der Lehrer → die **Lehrer**, der Apfel → die **Äpfel**\n\nLe **tréma** (a→ä, o→ö, u→ü, au→äu) n’apparaît qu’avec a, o, u, au. On ne l’ajoute jamais à e ou i.\n\nC’est pourquoi un dictionnaire écrit un nom ainsi : **Tag, -e** · **Haus, ¨er** · **Frau, -en**. Apprends le pluriel **avec** le nom.',
      ],
      [
        ['Der Tag, die Tage.', 'The day, the days.', 'Le jour, les jours.'],
        ['Das Haus, die Häuser.', 'The house, the houses.', 'La maison, les maisons.'],
        ['Die Lampe, die Lampen.', 'The lamp, the lamps.', 'La lampe, les lampes.'],
        ['Das Auto, die Autos.', 'The car, the cars.', 'La voiture, les voitures.'],
        ['Der Lehrer, die Lehrer.', 'The teacher, the teachers.', 'L’enseignant, les enseignants.'],
      ],
      'conjugation-table',
    ),
    vocab('sp-plural-kind', 'das Kind', 'the child', 'l’enfant', 'das', 'KIND', 'dahs KINT', ['Die Kinder spielen im Park.', 'The children are playing in the park.', 'Les enfants jouent dans le parc.']),
    vocab('sp-plural-auto', 'das Auto', 'the car', 'la voiture', 'das', 'AU-to', 'dahs OW-toh', ['Wir haben zwei Autos.', 'We have two cars.', 'Nous avons deux voitures.']),
    mc(
      'sp-plural-e1',
      ['What is the plural of "das Haus"?', 'Quel est le pluriel de « das Haus » ?'],
      ['die Häuser', 'die Hause', 'die Hausen'], ['die Häuser', 'die Hause', 'die Hausen'], 0,
      ['Haus → Häuser: -er plus an umlaut (au → äu).', 'Haus → Häuser : -er plus un tréma (au → äu).'],
    ),
    fb(
      'sp-plural-e2',
      ['Im Garten spielen drei ___. (das Kind)', 'Im Garten spielen drei ___. (das Kind)'],
      'Kinder',
      ['das Kind → die Kinder.', 'das Kind → die Kinder.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Feminine nouns: the easiest rule', 'Les noms féminins : la règle la plus simple',
      'Most feminine nouns add -n or -en.', 'La plupart des noms féminins prennent -n ou -en.',
    ),
    grammar(
      'sp-plural-fem',
      ['Feminine: -n, -en, -nen', 'Féminin : -n, -en, -nen'],
      [
        'For **feminine** nouns the rule is simple:\n\n- Noun ends in **-e** → add **-n**: die Lampe → die Lampe**n**, die Schule → die Schule**n**\n- Noun ends in a consonant → add **-en**: die Frau → die Frau**en**, die Uhr → die Uhr**en**, die Zeitung → die Zeitung**en**\n- Female persons in **-in** → **-innen** (double n): die Lehrerin → die Lehrer**innen**\n\n**A few short feminine nouns** take an umlaut plus -e instead (learn them as a group): die Stadt → die **Städte**, die Hand → die **Hände**, die Nacht → die **Nächte**, die Wurst → die **Würste**, die Kuh → die **Kühe**. And two family words: die Mutter → die **Mütter**, die Tochter → die **Töchter**.',
        'Pour les noms **féminins**, la règle est simple :\n\n- Nom en **-e** → ajoute **-n** : die Lampe → die Lampe**n**, die Schule → die Schule**n**\n- Nom en consonne → ajoute **-en** : die Frau → die Frau**en**, die Uhr → die Uhr**en**, die Zeitung → die Zeitung**en**\n- Personnes féminines en **-in** → **-innen** (double n) : die Lehrerin → die Lehrer**innen**\n\n**Quelques noms féminins courts** prennent plutôt un tréma plus -e (à apprendre en groupe) : die Stadt → die **Städte**, die Hand → die **Hände**, die Nacht → die **Nächte**, die Wurst → die **Würste**, die Kuh → die **Kühe**. Et deux mots de famille : die Mutter → die **Mütter**, die Tochter → die **Töchter**.',
      ],
      [
        ['Ich habe zwei Schwestern.', 'I have two sisters.', 'J’ai deux sœurs.'],
        ['In Deutschland gibt es viele schöne Städte.', 'There are many beautiful cities in Germany.', 'Il y a beaucoup de belles villes en Allemagne.'],
        ['Die Lehrerinnen sind sehr nett.', 'The (female) teachers are very kind.', 'Les enseignantes sont très gentilles.'],
        ['Meine Hände sind kalt.', 'My hands are cold.', 'Mes mains sont froides.'],
      ],
    ),
    vocab('sp-plural-stadt', 'die Stadt', 'the city', 'la ville', 'die', 'STADT', 'dee SHTAHT', ['Es gibt viele schöne Städte in Deutschland.', 'There are many beautiful cities in Germany.', 'Il y a beaucoup de belles villes en Allemagne.']),
    fb(
      'sp-plural-e3',
      ['Wir haben zwei ___ in der Küche. (die Lampe)', 'Wir haben zwei ___ in der Küche. (die Lampe)'],
      'Lampen',
      ['Feminine on -e → add -n.', 'Féminin en -e → ajoute -n.'],
    ),
    fb(
      'sp-plural-e4',
      ['Die ___ im Kurs kommen aus Japan. (die Studentin)', 'Die ___ im Kurs kommen aus Japan. (die Studentin)'],
      'Studentinnen',
      ['-in → -innen.', '-in → -innen.'],
    ),
    fb(
      'sp-plural-e5',
      ['In Bayern gibt es viele alte ___. (die Stadt)', 'In Bayern gibt es viele alte ___. (die Stadt)'],
      'Städte',
      ['Stadt → Städte (umlaut + -e).', 'Stadt → Städte (tréma + -e).'],
    ),
    mc(
      'sp-plural-e6',
      ['What is the plural of "die Zeitung"?', 'Quel est le pluriel de « die Zeitung » ?'],
      ['die Zeitungen', 'die Zeitunge', 'die Zeitungs'], ['die Zeitungen', 'die Zeitunge', 'die Zeitungs'], 0,
      ['A feminine noun ending in a consonant adds -en.', 'Un nom féminin se terminant par une consonne ajoute -en.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Masculine and neuter nouns', 'Noms masculins et neutres',
      'Fewer rules, but clear tendencies.', 'Moins de règles, mais des tendances claires.',
    ),
    grammar(
      'sp-plural-masc-neut',
      ['Masculine and neuter tendencies', 'Tendances des masculins et neutres'],
      [
        '**Masculine nouns**\n\n- Many add **-e** (often with an umlaut): der Tag → die Tage, der Hund → die Hunde, der Stuhl → die Stühle, der Sohn → die Söhne.\n- Masculine nouns in **-e** (people and animals) add **-n**: der Junge → die Jungen, der Kollege → die Kollegen.\n- Nouns ending in **-er, -el, -en** stay **unchanged**: der Lehrer → die Lehrer, der Computer → die Computer. Some get an umlaut: der Apfel → die Äpfel, der Vater → die Väter, der Garten → die Gärten.\n\n**Neuter nouns**\n\n- Many one-syllable neuter nouns add **-er** (with an umlaut when the vowel allows it): das Kind → die Kinder, das Haus → die Häuser, das Buch → die Bücher, das Bild → die Bilder.\n- Others add **-e**: das Jahr → die Jahre, das Heft → die Hefte.\n- Neuter nouns ending in **-chen, -lein, -er, -el** stay unchanged: das Mädchen → die Mädchen, das Zimmer → die Zimmer, das Fenster → die Fenster.\n- Neuter in **-nis** double the s: das Ergebnis → die Ergebnisse.',
        '**Noms masculins**\n\n- Beaucoup ajoutent **-e** (souvent avec tréma) : der Tag → die Tage, der Hund → die Hunde, der Stuhl → die Stühle, der Sohn → die Söhne.\n- Les noms masculins en **-e** (personnes et animaux) ajoutent **-n** : der Junge → die Jungen, der Kollege → die Kollegen.\n- Les noms en **-er, -el, -en** restent **inchangés** : der Lehrer → die Lehrer, der Computer → die Computer. Certains prennent un tréma : der Apfel → die Äpfel, der Vater → die Väter, der Garten → die Gärten.\n\n**Noms neutres**\n\n- Beaucoup de neutres d’une syllabe ajoutent **-er** (avec tréma si la voyelle le permet) : das Kind → die Kinder, das Haus → die Häuser, das Buch → die Bücher, das Bild → die Bilder.\n- D’autres ajoutent **-e** : das Jahr → die Jahre, das Heft → die Hefte.\n- Les neutres en **-chen, -lein, -er, -el** restent inchangés : das Mädchen → die Mädchen, das Zimmer → die Zimmer, das Fenster → die Fenster.\n- Les neutres en **-nis** doublent le s : das Ergebnis → die Ergebnisse.',
      ],
      [
        ['Die Hunde laufen im Park.', 'The dogs run in the park.', 'Les chiens courent dans le parc.'],
        ['Ich kaufe fünf Äpfel.', 'I buy five apples.', 'J’achète cinq pommes.'],
        ['Auf dem Regal stehen viele Bücher.', 'There are many books on the shelf.', 'Il y a beaucoup de livres sur l’étagère.'],
        ['Unsere Zimmer sind klein.', 'Our rooms are small.', 'Nos chambres sont petites.'],
      ],
    ),
    vocab('sp-plural-apfel', 'der Apfel', 'the apple', 'la pomme', 'der', 'AP-fel', 'dair AHP-fel', ['Ich kaufe drei Äpfel.', 'I buy three apples.', 'J’achète trois pommes.']),
    fb(
      'sp-plural-e7',
      ['Auf dem Regal stehen viele ___. (das Buch)', 'Auf dem Regal stehen viele ___. (das Buch)'],
      'Bücher',
      ['Buch → Bücher (-er + umlaut).', 'Buch → Bücher (-er + tréma).'],
    ),
    fb(
      'sp-plural-e8',
      ['Die ___ spielen Fußball. (der Junge)', 'Die ___ spielen Fußball. (der Junge)'],
      'Jungen',
      ['Der Junge belongs to the -n group: die Jungen.', 'Der Junge fait partie du groupe en -n : die Jungen.'],
    ),
    mc(
      'sp-plural-e9',
      ['What is the plural of "der Lehrer"?', 'Quel est le pluriel de « der Lehrer » ?'],
      ['die Lehrer', 'die Lehrers', 'die Lehrern'], ['die Lehrer', 'die Lehrers', 'die Lehrern'], 0,
      ['Masculine nouns in -er stay unchanged.', 'Les noms masculins en -er restent inchangés.'],
    ),
    mc(
      'sp-plural-e10',
      ['Which plural is correct for "das Mädchen"?', 'Quel pluriel est correct pour « das Mädchen » ?'],
      ['die Mädchen', 'die Mädchens', 'die Mädchener'], ['die Mädchen', 'die Mädchens', 'die Mädchener'], 0,
      ['-chen nouns stay unchanged in the plural.', 'Les noms en -chen restent inchangés au pluriel.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Foreign words and special cases', 'Mots étrangers et cas particuliers',
      'The -s plural and a few irregular patterns.', 'Le pluriel en -s et quelques schémas irréguliers.',
    ),
    grammar(
      'sp-plural-foreign',
      ['The -s plural and irregular endings', 'Le pluriel en -s et les terminaisons irrégulières'],
      [
        'The **-s plural** is rare in German: it is used for **foreign words, short words and abbreviations**:\n\n- das Auto → die **Autos**, das Handy → die **Handys**, das Foto → die **Fotos**\n- das Kino → die **Kinos**, das Hotel → die **Hotels**, das Café → die **Cafés**\n- der Park → die **Parks**, der Pkw → die **Pkws**\n\n**Irregular patterns** to learn as groups:\n\n- **-um → -en:** das Museum → die **Museen**, das Zentrum → die **Zentren**, das Studium → die **Studien**\n- **-a → -en:** das Thema → die **Themen**, die Firma → die **Firmen**\n- **-s → -sse:** der Bus → die **Busse**, das Ergebnis → die **Ergebnisse**\n- **Plural only:** die Eltern, die Leute, die Ferien, die Geschwister\n- **Singular only:** das Obst, das Gemüse, die Milch (use *Sorten* or a measure word for variety)',
        'Le **pluriel en -s** est rare en allemand : il sert pour les **mots étrangers, les mots courts et les abréviations** :\n\n- das Auto → die **Autos**, das Handy → die **Handys**, das Foto → die **Fotos**\n- das Kino → die **Kinos**, das Hotel → die **Hotels**, das Café → die **Cafés**\n- der Park → die **Parks**, der Pkw → die **Pkws**\n\n**Schémas irréguliers** à apprendre en groupes :\n\n- **-um → -en :** das Museum → die **Museen**, das Zentrum → die **Zentren**, das Studium → die **Studien**\n- **-a → -en :** das Thema → die **Themen**, die Firma → die **Firmen**\n- **-s → -sse :** der Bus → die **Busse**, das Ergebnis → die **Ergebnisse**\n- **Seulement au pluriel :** die Eltern, die Leute, die Ferien, die Geschwister\n- **Seulement au singulier :** das Obst, das Gemüse, die Milch (utilise *Sorten* ou une mesure pour la variété)',
      ],
      [
        ['Wir haben zwei Handys.', 'We have two mobile phones.', 'Nous avons deux téléphones portables.'],
        ['In Berlin gibt es viele Museen.', 'There are many museums in Berlin.', 'Il y a beaucoup de musées à Berlin.'],
        ['Die Busse fahren alle zehn Minuten.', 'The buses run every ten minutes.', 'Les bus passent toutes les dix minutes.'],
        ['Meine Eltern wohnen in Hamburg.', 'My parents live in Hamburg.', 'Mes parents habitent à Hambourg.'],
      ],
    ),
    vocab('sp-plural-eltern', 'die Eltern', 'the parents', 'les parents', 'die', 'EL-tern', 'dee EL-tern', ['Meine Eltern wohnen in Hamburg.', 'My parents live in Hamburg.', 'Mes parents habitent à Hambourg.']),
    vocab('sp-plural-bus', 'der Bus', 'the bus', 'le bus', 'der', 'BUS', 'dair BOOS', ['Die Busse fahren alle zehn Minuten.', 'The buses run every ten minutes.', 'Les bus passent toutes les dix minutes.']),
    mc(
      'sp-plural-e11',
      ['What is the plural of "das Museum"?', 'Quel est le pluriel de « das Museum » ?'],
      ['die Museen', 'die Museums', 'die Musea'], ['die Museen', 'die Museums', 'die Musea'], 0,
      ['-um becomes -en: das Museum → die Museen.', '-um devient -en : das Museum → die Museen.'],
    ),
    mc(
      'sp-plural-e12',
      ['Which plural is correct for "der Bus"?', 'Quel pluriel est correct pour « der Bus » ?'],
      ['die Busse', 'die Buse', 'die Bussen'], ['die Busse', 'die Buse', 'die Bussen'], 0,
      ['Bus → Busse (the s is doubled).', 'Bus → Busse (le s est doublé).'],
    ),
    match(
      'sp-plural-e13',
      [
        ['die Kinos', 'the cinemas', 'les cinémas'],
        ['die Museen', 'the museums', 'les musées'],
        ['die Ferien', 'the holidays', 'les vacances'],
        ['die Eltern', 'the parents', 'les parents'],
        ['die Städte', 'the cities', 'les villes'],
      ],
      ['Match each plural with its meaning.', 'Associe chaque pluriel à son sens.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Plurals in the sentence', 'Le pluriel dans la phrase',
      'The dative -n, numbers and measure words.', 'Le -n du datif, les nombres et les mesures.',
    ),
    grammar(
      'sp-plural-use',
      ['Dative plural and measure words', 'Datif pluriel et mesures'],
      [
        '**Dative plural:** add **-n** to the noun, unless it already ends in -n or -s:\n\n- mit den Kinder**n** · bei den Freunde**n** · aus den Häuser**n**\n- But: mit den Frauen (already -n) · mit den Autos (-s).\n\n**Measure words** (units, weights, containers) stay in the **singular** after a number when they are masculine or neuter. Feminine ones take the plural:\n\n- zwei **Glas** Wasser · drei **Kilo** Äpfel · zehn **Euro** · fünf **Stück** Kuchen\n- zwei **Flaschen** Wasser · drei **Tassen** Kaffee (feminine → plural)\n\n**After numbers** there is no article: drei Kinder, fünf Bücher.',
        '**Datif pluriel :** ajoute **-n** au nom, sauf s’il se termine déjà par -n ou -s :\n\n- mit den Kinder**n** · bei den Freunde**n** · aus den Häuser**n**\n- Mais : mit den Frauen (déjà -n) · mit den Autos (-s).\n\n**Les mesures** (unités, poids, contenants) restent au **singulier** après un nombre quand elles sont masculines ou neutres. Les féminines prennent le pluriel :\n\n- zwei **Glas** Wasser · drei **Kilo** Äpfel · zehn **Euro** · fünf **Stück** Kuchen\n- zwei **Flaschen** Wasser · drei **Tassen** Kaffee (féminin → pluriel)\n\n**Après un nombre**, pas d’article : drei Kinder, fünf Bücher.',
      ],
      [
        ['Ich spiele mit den Kindern.', 'I play with the children.', 'Je joue avec les enfants.'],
        ['Wir haben bei den Nachbarn gegessen.', 'We ate at the neighbours’.', 'Nous avons mangé chez les voisins.'],
        ['Ich möchte zwei Glas Wasser, bitte.', 'I would like two glasses of water, please.', 'Je voudrais deux verres d’eau, s’il vous plaît.'],
        ['Das kostet zehn Euro.', 'That costs ten euros.', 'Cela coûte dix euros.'],
      ],
    ),
    fb(
      'sp-plural-e14',
      ['Ich spiele gern mit den ___. (das Kind, dative plural)', 'Ich spiele gern mit den ___. (das Kind, datif pluriel)'],
      'Kindern',
      ['Dative plural: add -n to Kinder.', 'Datif pluriel : ajoute -n à Kinder.'],
    ),
    fb(
      'sp-plural-e15',
      ['Das Brot kostet drei ___. (der Euro)', 'Das Brot kostet drei ___. (der Euro)'],
      'Euro',
      ['Masculine measure words stay singular after a number.', 'Les mesures masculines restent au singulier après un nombre.'],
    ),
    mc(
      'sp-plural-e16',
      ['Which sentence is correct in standard German?', 'Quelle phrase est correcte en allemand standard ?'],
      ['Wir bringen zwei Kilo Äpfel mit.', 'Wir bringen zwei Kilos Äpfel mit.', 'Wir bringen zwei Kiloen Äpfel mit.'],
      ['Wir bringen zwei Kilo Äpfel mit.', 'Wir bringen zwei Kilos Äpfel mit.', 'Wir bringen zwei Kiloen Äpfel mit.'], 0,
      ['Kilo is a neuter measure word and stays singular.', 'Kilo est une mesure neutre et reste au singulier.'],
    ),
    wo('sp-plural-e17', ['mit', 'Er', 'den', 'spielt', 'Kindern'], ['Er', 'spielt', 'mit', 'den', 'Kindern'], ['Subject, verb, then mit + dative plural.', 'Sujet, verbe, puis mit + datif pluriel.']),

    wrapup(
      '**Five types:** -e (¨e), -er (¨er), -(e)n, -s, no ending (¨). The article is always **die**.\n\n**Feminine:** -e → -n · consonant → -en · -in → -innen · short ones with umlaut (Städte, Hände, Nächte, Mütter).\n\n**Masculine:** often -e (¨) · in -e → -n (Junge → Jungen) · -er/-el/-en unchanged (Lehrer, Apfel → Äpfel).\n\n**Neuter:** one-syllable often -er (¨): Kinder, Häuser, Bücher · -chen/-lein/-er/-el unchanged.\n\n**-s plural:** foreign words (Auto, Handy, Hotel). **Special:** Museum → Museen · Bus → Busse.\n\n**In use:** dative plural +n (mit den Kindern) · measure words stay singular (zwei Glas, zehn Euro).',
      '**Cinq types :** -e (¨e), -er (¨er), -(e)n, -s, sans terminaison (¨). L’article est toujours **die**.\n\n**Féminin :** -e → -n · consonne → -en · -in → -innen · les courts avec tréma (Städte, Hände, Nächte, Mütter).\n\n**Masculin :** souvent -e (¨) · en -e → -n (Junge → Jungen) · -er/-el/-en inchangés (Lehrer, Apfel → Äpfel).\n\n**Neutre :** souvent -er (¨) pour une syllabe : Kinder, Häuser, Bücher · -chen/-lein/-er/-el inchangés.\n\n**Pluriel en -s :** mots étrangers (Auto, Handy, Hotel). **Spéciaux :** Museum → Museen · Bus → Busse.\n\n**À l’emploi :** datif pluriel +n (mit den Kindern) · mesures au singulier (zwei Glas, zehn Euro).',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: plural forms', 'Quiz final : le pluriel'),
    mc(
      'sp-plural-q1',
      ['What is the plural of "das Haus"?', 'Quel est le pluriel de « das Haus » ?'],
      ['die Häuser', 'die Hause', 'die Hauser'], ['die Häuser', 'die Hause', 'die Hauser'], 0,
      ['-er with umlaut: Häuser.', '-er avec tréma : Häuser.'],
    ),
    mc(
      'sp-plural-q2',
      ['What is the plural of "die Lampe"?', 'Quel est le pluriel de « die Lampe » ?'],
      ['die Lampen', 'die Lampe', 'die Lampes'], ['die Lampen', 'die Lampe', 'die Lampes'], 0,
      ['Feminine on -e adds -n.', 'Un féminin en -e ajoute -n.'],
    ),
    mc(
      'sp-plural-q3',
      ['What is the plural of "das Auto"?', 'Quel est le pluriel de « das Auto » ?'],
      ['die Autos', 'die Autoen', 'die Auter'], ['die Autos', 'die Autoen', 'die Auter'], 0,
      ['Foreign words take -s.', 'Les mots étrangers prennent -s.'],
    ),
    mc(
      'sp-plural-q4',
      ['What is the plural of "der Lehrer"?', 'Quel est le pluriel de « der Lehrer » ?'],
      ['die Lehrer', 'die Lehrers', 'die Lehrere'], ['die Lehrer', 'die Lehrers', 'die Lehrere'], 0,
      ['Masculine on -er stays unchanged.', 'Un masculin en -er reste inchangé.'],
    ),
    fb(
      'sp-plural-q5',
      ['Wir haben zwei ___ zu Hause. (die Katze)', 'Wir haben zwei ___ zu Hause. (die Katze)'],
      'Katzen',
      ['Feminine on -e adds -n.', 'Féminin en -e : ajoute -n.'],
    ),
    fb(
      'sp-plural-q6',
      ['Auf dem Tisch liegen drei ___. (der Apfel)', 'Auf dem Tisch liegen drei ___. (der Apfel)'],
      'Äpfel',
      ['Apfel → Äpfel (umlaut).', 'Apfel → Äpfel (tréma).'],
    ),
    fb(
      'sp-plural-q7',
      ['Das sind meine ___ aus Italien. (die Studentin)', 'Das sind meine ___ aus Italien. (die Studentin)'],
      'Studentinnen',
      ['-in → -innen.', '-in → -innen.'],
    ),
    fb(
      'sp-plural-q8',
      ['Das Brett ist zwei ___ lang. (der Meter)', 'Das Brett ist zwei ___ lang. (der Meter)'],
      'Meter',
      ['Measure words stay singular.', 'Les mesures restent au singulier.'],
    ),
    fb(
      'sp-plural-q9',
      ['Er hilft den ___. (das Kind, dative plural)', 'Er hilft den ___. (das Kind, datif pluriel)'],
      'Kindern',
      ['Dative plural +n.', 'Datif pluriel +n.'],
    ),
    match(
      'sp-plural-q10',
      [
        ['die Städte', 'the cities', 'les villes'],
        ['die Äpfel', 'the apples', 'les pommes'],
        ['die Bücher', 'the books', 'les livres'],
        ['die Busse', 'the buses', 'les bus'],
        ['die Eltern', 'the parents', 'les parents'],
      ],
      ['Match each plural with its meaning.', 'Associe chaque pluriel à son sens.'],
    ),
    wo('sp-plural-q11', ['Kinder', 'Die', 'spielen', 'im', 'Garten'], ['Die', 'Kinder', 'spielen', 'im', 'Garten'], ['Subject + verb + place.', 'Sujet + verbe + lieu.']),
    lc(
      'sp-plural-q12',
      ['Listen. Which plural form do you hear?', 'Écoute. Quelle forme de pluriel entends-tu ?'],
      'Die Kinder spielen im Park.',
      ['Kinder', 'Kinde', 'Kinden'], ['Kinder', 'Kinde', 'Kinden'], 0,
      ['The plural of Kind is Kinder.', 'Le pluriel de Kind est Kinder.'],
    ),
    mc(
      'sp-plural-q13',
      ['Which noun is normally used only in the singular?', 'Quel nom s’emploie normalement uniquement au singulier ?'],
      ['das Obst', 'das Auto', 'das Kind'], ['das Obst', 'das Auto', 'das Kind'], 0,
      ['Obst (fruit as a group) has no plural.', 'Obst (les fruits en général) n’a pas de pluriel.'],
    ),
    mc(
      'sp-plural-q14',
      ['What is the plural of "der Bus"?', 'Quel est le pluriel de « der Bus » ?'],
      ['die Busse', 'die Buse', 'die Bus'], ['die Busse', 'die Buse', 'die Bus'], 0,
      ['Bus → Busse.', 'Bus → Busse.'],
    ),
  ],
});

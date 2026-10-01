import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const genus = defineSpecial({
  slug: 'genus',
  number: 9,
  group: 'cases',
  levels: ['A1', 'A2'],
  related: ['l3', 'l6', 'l9', 'l13', 'a2-l5'],
  title: ['Der, die, das: das Genus', 'Noun gender: der, die, das', 'Le genre des noms : der, die, das'],
  theme: [
    'How to guess der, die or das from meaning, endings and compound words — and which traps to watch for',
    'Comment deviner der, die ou das grâce au sens, aux terminaisons et aux mots composés — et quels pièges éviter',
  ],
  goals: [
    'Understand why every noun has a gender and why you learn it with its article',
    'Recognise the masculine, feminine and neuter endings that work almost every time',
    'Find the gender of a compound word in one second',
    'Spot the common exceptions and the words with two genders',
  ],
  goalsFr: [
    'Comprendre pourquoi chaque nom a un genre et pourquoi on l’apprend avec son article',
    'Reconnaître les terminaisons masculines, féminines et neutres qui marchent presque toujours',
    'Trouver le genre d’un mot composé en une seconde',
    'Repérer les exceptions courantes et les mots à deux genres',
  ],
  steps: [
    intro(
      'Der, die oder das?', 'Der, die ou das ?',
      'Every German noun is masculine, feminine or neuter, and the gender decides the article, the adjective ending and the pronoun. Nobody can guess all of them, but a handful of patterns cover most nouns you will meet. In this special you learn those patterns, so that you stop guessing and start predicting.',
      'Chaque nom allemand est masculin, féminin ou neutre, et le genre détermine l’article, la terminaison de l’adjectif et le pronom. Personne ne peut tout deviner, mais une poignée de schémas couvre la plupart des noms que tu rencontreras. Dans ce spécial, tu apprends ces schémas pour ne plus deviner, mais prédire.',
      [
        'Why you always learn a noun with its article',
        'Masculine patterns: days, seasons, -er, -ling, -ismus',
        'Feminine patterns: -ung, -heit, -keit, -schaft, -ion, -tät, -ei, -in',
        'Neuter patterns: -chen, -lein, -ment, -um and nominalised verbs',
        'Compound words, exceptions and double genders',
      ],
      [
        'Pourquoi on apprend toujours un nom avec son article',
        'Schémas masculins : jours, saisons, -er, -ling, -ismus',
        'Schémas féminins : -ung, -heit, -keit, -schaft, -ion, -tät, -ei, -in',
        'Schémas neutres : -chen, -lein, -ment, -um et verbes substantivés',
        'Mots composés, exceptions et doubles genres',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Three genders, one habit', 'Trois genres, une habitude',
      'Why the article is part of the word.', 'Pourquoi l’article fait partie du mot.',
    ),
    grammar(
      'sp-genus-basics',
      ['Der, die, das — and always die in the plural', 'Der, die, das — et toujours die au pluriel'],
      [
        'German has three genders: **der** (masculine), **die** (feminine) and **das** (neuter). In the **plural**, all three become **die**.\n\nThe gender is only partly logical:\n\n- People and animals usually follow nature: **der** Mann, **die** Frau, **der** Bruder, **die** Schwester.\n- But grammatical gender wins over nature in a few words: **das** Mädchen (girl), **das** Kind (child), **das** Baby.\n- Most objects have an arbitrary gender: **der** Tisch, **die** Lampe, **das** Buch.\n\n**Golden habit:** never learn *Tisch* — learn **der Tisch, die Tische**. The article is part of the word.',
        'L’allemand a trois genres : **der** (masculin), **die** (féminin) et **das** (neutre). Au **pluriel**, les trois deviennent **die**.\n\nLe genre n’est que partiellement logique :\n\n- Les personnes et les animaux suivent généralement la nature : **der** Mann, **die** Frau, **der** Bruder, **die** Schwester.\n- Mais le genre grammatical l’emporte sur la nature dans quelques mots : **das** Mädchen (la fille), **das** Kind (l’enfant), **das** Baby.\n- La plupart des objets ont un genre arbitraire : **der** Tisch, **die** Lampe, **das** Buch.\n\n**Réflexe d’or :** n’apprends jamais *Tisch* — apprends **der Tisch, die Tische**. L’article fait partie du mot.',
      ],
      [
        ['Der Mann und die Frau sind Lehrer.', 'The man and the woman are teachers.', 'L’homme et la femme sont enseignants.'],
        ['Das Mädchen spielt im Garten.', 'The girl plays in the garden.', 'La fille joue dans le jardin.'],
        ['Die Kinder sind müde.', 'The children are tired.', 'Les enfants sont fatigués.'],
      ],
    ),
    vocab('sp-genus-maedchen', 'das Mädchen', 'the girl', 'la fille', 'das', 'MÄD-chen', 'dahs MAYD-khen', ['Das Mädchen liest ein Buch.', 'The girl is reading a book.', 'La fille lit un livre.']),
    mc(
      'sp-genus-e1',
      ['Which article does "Mädchen" take, even though it means a female person?', 'Quel article prend « Mädchen », bien qu’il désigne une personne de sexe féminin ?'],
      ['das', 'die', 'der'], ['das', 'die', 'der'], 0,
      ['Every noun ending in -chen is neuter: das Mädchen.', 'Tous les noms en -chen sont neutres : das Mädchen.'],
      ['Think about the ending -chen.', 'Pense à la terminaison -chen.'],
    ),
    mc(
      'sp-genus-e2',
      ['What is the plural article of "der Tisch", "die Lampe" and "das Buch"?', 'Quel est l’article pluriel de « der Tisch », « die Lampe » et « das Buch » ?'],
      ['die', 'das', 'der'], ['die', 'das', 'der'], 0,
      ['In the plural the article is always die.', 'Au pluriel, l’article est toujours die.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Masculine patterns', 'Les schémas masculins',
      'Time words, people and a few reliable endings.', 'Les mots de temps, les personnes et quelques terminaisons fiables.',
    ),
    grammar(
      'sp-genus-masc',
      ['Typically masculine (der)', 'Typiquement masculin (der)'],
      [
        'These groups are masculine in the great majority of cases:\n\n- **Days, months, seasons:** der Montag, der Juli, der Frühling, der Winter\n- **Many weather words and the compass points:** der Regen, der Schnee, der Wind, der Norden (but das Wetter, das Gewitter)\n- **Male people and job words in -er:** der Lehrer, der Fahrer, der Verkäufer\n- **-ling:** der Frühling, der Lehrling, der Liebling\n- **-ismus:** der Tourismus, der Optimismus\n- **-ist, -ent, -ant (people):** der Journalist, der Student, der Elefant\n- **-or:** der Motor, der Autor (but das Labor)\n\n**Careful:** *-er* is only reliable for people. Many things in *-er* are neuter or feminine: **das** Zimmer, **das** Fenster, **die** Mutter.',
        'Ces groupes sont masculins dans l’immense majorité des cas :\n\n- **Jours, mois, saisons :** der Montag, der Juli, der Frühling, der Winter\n- **Beaucoup de mots de météo et les points cardinaux :** der Regen, der Schnee, der Wind, der Norden (mais das Wetter, das Gewitter)\n- **Personnes masculines et métiers en -er :** der Lehrer, der Fahrer, der Verkäufer\n- **-ling :** der Frühling, der Lehrling, der Liebling\n- **-ismus :** der Tourismus, der Optimismus\n- **-ist, -ent, -ant (personnes) :** der Journalist, der Student, der Elefant\n- **-or :** der Motor, der Autor (mais das Labor)\n\n**Attention :** *-er* n’est fiable que pour les personnes. Beaucoup de choses en *-er* sont neutres ou féminines : **das** Zimmer, **das** Fenster, **die** Mutter.',
      ],
      [
        ['Am Montag habe ich frei.', 'On Monday I am off.', 'Lundi, je ne travaille pas.'],
        ['Im Winter gibt es oft Schnee.', 'In winter there is often snow.', 'En hiver, il y a souvent de la neige.'],
        ['Der Student lernt Deutsch.', 'The student is learning German.', 'L’étudiant apprend l’allemand.'],
        ['Mein Lehrer kommt aus Wien.', 'My teacher comes from Vienna.', 'Mon professeur vient de Vienne.'],
      ],
    ),
    vocab('sp-genus-fruehling', 'der Frühling', 'the spring', 'le printemps', 'der', 'FRÜH-ling', 'dair FREW-ling', ['Im Frühling blühen die Blumen.', 'In spring the flowers bloom.', 'Au printemps, les fleurs éclosent.']),
    vocab('sp-genus-lehrer', 'der Lehrer', 'the teacher (male)', 'l’enseignant', 'der', 'LEH-rer', 'dair LAY-rer', ['Der Lehrer erklärt die Grammatik.', 'The teacher explains the grammar.', 'L’enseignant explique la grammaire.']),
    ap('sp-genus-e3', 'Dienstag', 'der', ['Days of the week are masculine.', 'Les jours de la semaine sont masculins.']),
    ap('sp-genus-e4', 'Tourismus', 'der', ['-ismus is always masculine.', '-ismus est toujours masculin.']),
    ap('sp-genus-e5', 'Journalist', 'der', ['People in -ist are masculine; the woman is die Journalistin.', 'Les personnes en -ist sont masculines ; la femme est die Journalistin.']),
    ap('sp-genus-e6', 'Zimmer', 'das', ['A trap! -er is only masculine for people. Zimmer is neuter.', 'Un piège ! -er n’est masculin que pour les personnes. Zimmer est neutre.']),
    fb(
      'sp-genus-e7',
      ['Im Juli ist es heiß. — "Juli" takes which article? Answer: ___ Juli', 'Im Juli ist es heiß. — « Juli » prend quel article ? Réponse : ___ Juli'],
      'der',
      ['Months are masculine.', 'Les mois sont masculins.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Feminine patterns', 'Les schémas féminins',
      'The most reliable endings in German.', 'Les terminaisons les plus fiables de l’allemand.',
    ),
    grammar(
      'sp-genus-fem',
      ['Typically feminine (die)', 'Typiquement féminin (die)'],
      [
        'These endings are **feminine without exception** (or nearly):\n\n- **-ung:** die Zeitung, die Wohnung, die Meinung\n- **-heit / -keit:** die Gesundheit, die Möglichkeit, die Freundlichkeit\n- **-schaft:** die Freundschaft, die Gesellschaft\n- **-ion / -tät:** die Information, die Universität\n- **-ei:** die Bäckerei, die Polizei\n- **-ie / -ik:** die Familie, die Musik\n- **-in (female people):** die Lehrerin, die Ärztin\n- **-e** (most nouns, with exceptions such as der Name, der Junge, das Ende): die Lampe, die Straße, die Schule\n\nThese endings are the best investment in this whole special: learn them first.',
        'Ces terminaisons sont **féminines sans exception** (ou presque) :\n\n- **-ung :** die Zeitung, die Wohnung, die Meinung\n- **-heit / -keit :** die Gesundheit, die Möglichkeit, die Freundlichkeit\n- **-schaft :** die Freundschaft, die Gesellschaft\n- **-ion / -tät :** die Information, die Universität\n- **-ei :** die Bäckerei, die Polizei\n- **-ie / -ik :** die Familie, die Musik\n- **-in (personnes féminines) :** die Lehrerin, die Ärztin\n- **-e** (la plupart des noms, avec des exceptions comme der Name, der Junge, das Ende) : die Lampe, die Straße, die Schule\n\nCes terminaisons sont le meilleur investissement de tout ce spécial : apprends-les en premier.',
      ],
      [
        ['Die Wohnung ist hell und groß.', 'The flat is bright and big.', 'L’appartement est lumineux et grand.'],
        ['Gesundheit ist sehr wichtig.', 'Health is very important.', 'La santé est très importante.'],
        ['Die Bäckerei öffnet um sieben Uhr.', 'The bakery opens at seven.', 'La boulangerie ouvre à sept heures.'],
        ['Meine Lehrerin heißt Frau Weber.', 'My teacher (female) is called Ms Weber.', 'Mon enseignante s’appelle Mme Weber.'],
      ],
    ),
    vocab('sp-genus-wohnung', 'die Wohnung', 'the flat, apartment', 'l’appartement', 'die', 'WOH-nung', 'dee VOH-noong', ['Meine Wohnung hat drei Zimmer.', 'My flat has three rooms.', 'Mon appartement a trois pièces.']),
    vocab('sp-genus-freundschaft', 'die Freundschaft', 'the friendship', 'l’amitié', 'die', 'FREUND-schaft', 'dee FROYNT-shahft', ['Unsere Freundschaft ist sehr alt.', 'Our friendship is very old.', 'Notre amitié est très ancienne.']),
    vocab('sp-genus-moeglichkeit', 'die Möglichkeit', 'the possibility, option', 'la possibilité', 'die', 'MÖG-lich-keit', 'dee MUHG-likh-kite', ['Es gibt zwei Möglichkeiten.', 'There are two options.', 'Il y a deux possibilités.']),
    ap('sp-genus-e8', 'Zeitung', 'die', ['-ung is always feminine.', '-ung est toujours féminin.']),
    ap('sp-genus-e9', 'Gesundheit', 'die', ['-heit is always feminine.', '-heit est toujours féminin.']),
    ap('sp-genus-e10', 'Universität', 'die', ['-tät is always feminine.', '-tät est toujours féminin.']),
    ap('sp-genus-e11', 'Bäckerei', 'die', ['-ei is feminine.', '-ei est féminin.']),
    fb(
      'sp-genus-e12',
      ['Hier ist ___ Lösung. (der, die or das? Lösung ends in -ung.)', 'Hier ist ___ Lösung. (der, die ou das ? Lösung se termine en -ung.)'],
      'die',
      ['-ung → die.', '-ung → die.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Neuter patterns', 'Les schémas neutres',
      'Diminutives, foreign endings and verbs used as nouns.', 'Diminutifs, terminaisons étrangères et verbes employés comme noms.',
    ),
    grammar(
      'sp-genus-neut',
      ['Typically neuter (das)', 'Typiquement neutre (das)'],
      [
        'Neuter is the smallest group, but its patterns are clear:\n\n- **Diminutives -chen, -lein:** das Mädchen, das Brötchen, das Büchlein\n- **-ment:** das Medikament, das Instrument, das Dokument (but der Moment, der Zement)\n- **-um:** das Datum, das Museum, das Zentrum\n- **Infinitives used as nouns:** das Essen, das Lernen, das Schwimmen\n- **Adjectives used as nouns:** das Gute, das Neue, das Blau\n- **Most metals and chemical elements:** das Gold, das Eisen, das Silber\n- **Many young loanwords:** das Handy, das Hotel, das Internet\n\nA useful reminder: **-chen turns any noun into a neuter word** — der Hund → **das** Hündchen.',
        'Le neutre est le plus petit groupe, mais ses schémas sont nets :\n\n- **Diminutifs -chen, -lein :** das Mädchen, das Brötchen, das Büchlein\n- **-ment :** das Medikament, das Instrument, das Dokument (mais der Moment, der Zement)\n- **-um :** das Datum, das Museum, das Zentrum\n- **Infinitifs employés comme noms :** das Essen, das Lernen, das Schwimmen\n- **Adjectifs employés comme noms :** das Gute, das Neue, das Blau\n- **La plupart des métaux et éléments chimiques :** das Gold, das Eisen, das Silber\n- **Beaucoup d’emprunts récents :** das Handy, das Hotel, das Internet\n\nUn rappel utile : **-chen transforme n’importe quel nom en mot neutre** — der Hund → **das** Hündchen.',
      ],
      [
        ['Das Medikament liegt auf dem Tisch.', 'The medicine is on the table.', 'Le médicament est sur la table.'],
        ['Das Essen schmeckt sehr gut.', 'The food tastes very good.', 'Le repas est très bon.'],
        ['Das Datum steht oben auf dem Brief.', 'The date is at the top of the letter.', 'La date est en haut de la lettre.'],
        ['Ich möchte ein Brötchen mit Käse.', 'I would like a bread roll with cheese.', 'Je voudrais un petit pain au fromage.'],
      ],
    ),
    vocab('sp-genus-datum', 'das Datum', 'the date', 'la date', 'das', 'DAH-tum', 'dahs DAH-toom', ['Welches Datum haben wir heute?', 'What is the date today?', 'Quelle est la date aujourd’hui ?']),
    vocab('sp-genus-zimmer', 'das Zimmer', 'the room', 'la pièce, la chambre', 'das', 'ZIM-mer', 'dahs TSIM-mer', ['Mein Zimmer ist klein, aber gemütlich.', 'My room is small but cosy.', 'Ma chambre est petite mais confortable.']),
    ap('sp-genus-e13', 'Medikament', 'das', ['-ment is neuter.', '-ment est neutre.']),
    ap('sp-genus-e14', 'Museum', 'das', ['-um is neuter.', '-um est neutre.']),
    ap('sp-genus-e15', 'Brötchen', 'das', ['-chen is always neuter.', '-chen est toujours neutre.']),
    mc(
      'sp-genus-e16',
      ['"essen" is a verb. What is the noun "Essen" (food, meal)?', '« essen » est un verbe. Que donne le nom « Essen » (nourriture, repas) ?'],
      ['das Essen', 'der Essen', 'die Essen'], ['das Essen', 'der Essen', 'die Essen'], 0,
      ['Infinitives used as nouns are always neuter.', 'Les infinitifs employés comme noms sont toujours neutres.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Compounds and traps', 'Mots composés et pièges',
      'The last word decides — and a few words with two genders.', 'Le dernier mot décide — et quelques mots à deux genres.',
    ),
    grammar(
      'sp-genus-compound',
      ['Compound words: the last part decides', 'Mots composés : le dernier élément décide'],
      [
        'In a compound noun the **last word** decides the gender and the plural, no matter what the first words are:\n\n- das Haus + die Tür = **die** Haustür\n- die Küche + der Tisch = **der** Küchentisch\n- der Wein + das Glas = **das** Weinglas\n- die Straße + die Bahn = **die** Straßenbahn\n\nSo a long word is easy: read it from the right.\n\n**Words with two genders** — the meaning changes:\n\n- **der** See (lake) · **die** See (sea)\n- **der** Leiter (leader) · **die** Leiter (ladder)\n- **der** Band (volume) · **das** Band (ribbon) · **die** Band (music group)\n- **der** Teil (a part of a whole) · **das** Teil (a piece, a component)',
        'Dans un nom composé, c’est le **dernier mot** qui décide du genre et du pluriel, quels que soient les premiers :\n\n- das Haus + die Tür = **die** Haustür\n- die Küche + der Tisch = **der** Küchentisch\n- der Wein + das Glas = **das** Weinglas\n- die Straße + die Bahn = **die** Straßenbahn\n\nUn mot long est donc facile : lis-le de droite à gauche.\n\n**Mots à deux genres** — le sens change :\n\n- **der** See (le lac) · **die** See (la mer)\n- **der** Leiter (le chef) · **die** Leiter (l’échelle)\n- **der** Band (le volume) · **das** Band (le ruban) · **die** Band (le groupe de musique)\n- **der** Teil (une partie d’un tout) · **das** Teil (une pièce, un composant)',
      ],
      [
        ['Die Haustür ist grün.', 'The front door is green.', 'La porte d’entrée est verte.'],
        ['Wir fahren mit der Straßenbahn.', 'We go by tram.', 'Nous prenons le tramway.'],
        ['Im Sommer schwimmen wir im See.', 'In summer we swim in the lake.', 'En été, nous nageons dans le lac.'],
        ['Die Band spielt heute Abend.', 'The band plays tonight.', 'Le groupe joue ce soir.'],
      ],
    ),
    vocab('sp-genus-see', 'der See', 'the lake', 'le lac', 'der', 'ZEH', 'dair ZAY', ['Der See ist im Winter zugefroren.', 'The lake is frozen in winter.', 'Le lac est gelé en hiver.']),
    mc(
      'sp-genus-e17',
      ['"Kaffee" (der) + "Tasse" (die) = ?', '« Kaffee » (der) + « Tasse » (die) = ?'],
      ['die Kaffeetasse', 'der Kaffeetasse', 'das Kaffeetasse'], ['die Kaffeetasse', 'der Kaffeetasse', 'das Kaffeetasse'], 0,
      ['The last word Tasse is feminine, so the whole word is feminine.', 'Le dernier mot Tasse est féminin, donc tout le mot est féminin.'],
    ),
    mc(
      'sp-genus-e18',
      ['"Tasche" (die) + "Buch" (das) = ?', '« Tasche » (die) + « Buch » (das) = ?'],
      ['das Taschenbuch', 'die Taschenbuch', 'der Taschenbuch'], ['das Taschenbuch', 'die Taschenbuch', 'der Taschenbuch'], 0,
      ['Buch is neuter and comes last: das Taschenbuch.', 'Buch est neutre et vient en dernier : das Taschenbuch.'],
    ),
    match(
      'sp-genus-e19',
      [
        ['der See', 'the lake', 'le lac'],
        ['die See', 'the sea', 'la mer'],
        ['die Leiter', 'the ladder', 'l’échelle'],
        ['die Band', 'the music band', 'le groupe de musique'],
        ['das Band', 'the ribbon', 'le ruban'],
      ],
      ['Same word, different gender, different meaning.', 'Même mot, genre différent, sens différent.'],
    ),
    wo('sp-genus-e20', ['See', 'am', 'Der', 'liegt', 'Stadtrand'], ['Der', 'See', 'liegt', 'am', 'Stadtrand'], ['Subject + verb + place.', 'Sujet + verbe + lieu.']),

    wrapup(
      '**Always learn der / die / das with the noun**, plural included.\n\n**Masculine:** days, months, seasons, many weather words, compass points · persons in -er, -ling, -ist, -ent, -or · -ismus.\n\n**Feminine:** -ung, -heit, -keit, -schaft, -ion, -tät, -ei, -ie, -ik, -in · most nouns in -e.\n\n**Neuter:** -chen, -lein, -ment, -um · infinitives and adjectives used as nouns · most metals · many loanwords.\n\n**Compounds:** the last word decides. **Double genders:** der See / die See, der Leiter / die Leiter, der Band / das Band / die Band.',
      '**Apprends toujours der / die / das avec le nom**, pluriel compris.\n\n**Masculin :** jours, mois, saisons, beaucoup de mots de météo, points cardinaux · personnes en -er, -ling, -ist, -ent, -or · -ismus.\n\n**Féminin :** -ung, -heit, -keit, -schaft, -ion, -tät, -ei, -ie, -ik, -in · la plupart des noms en -e.\n\n**Neutre :** -chen, -lein, -ment, -um · infinitifs et adjectifs employés comme noms · la plupart des métaux · beaucoup d’emprunts.\n\n**Composés :** le dernier mot décide. **Doubles genres :** der See / die See, der Leiter / die Leiter, der Band / das Band / die Band.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: noun gender', 'Quiz final : le genre des noms'),
    ap('sp-genus-q1', 'Zeitung', 'die', ['-ung → die.', '-ung → die.']),
    ap('sp-genus-q2', 'Mädchen', 'das', ['-chen → das.', '-chen → das.']),
    ap('sp-genus-q3', 'Dienstag', 'der', ['Days → der.', 'Jours → der.']),
    ap('sp-genus-q4', 'Freundschaft', 'die', ['-schaft → die.', '-schaft → die.']),
    ap('sp-genus-q5', 'Medikament', 'das', ['-ment → das.', '-ment → das.']),
    ap('sp-genus-q6', 'Zimmer', 'das', ['An exception to the -er rule.', 'Une exception à la règle des -er.']),
    mc(
      'sp-genus-q7',
      ['Which noun is feminine because of its ending?', 'Quel nom est féminin à cause de sa terminaison ?'],
      ['Gesundheit', 'Frühling', 'Medikament'], ['Gesundheit', 'Frühling', 'Medikament'], 0,
      ['-heit is feminine; -ling is masculine; -ment is neuter.', '-heit est féminin ; -ling est masculin ; -ment est neutre.'],
    ),
    mc(
      'sp-genus-q8',
      ['What is the gender of "Haustür" (Haus = das, Tür = die)?', 'Quel est le genre de « Haustür » (Haus = das, Tür = die) ?'],
      ['die Haustür', 'das Haustür', 'der Haustür'], ['die Haustür', 'das Haustür', 'der Haustür'], 0,
      ['The last word decides: die Tür → die Haustür.', 'Le dernier mot décide : die Tür → die Haustür.'],
    ),
    mc(
      'sp-genus-q9',
      ['Which article means "the sea" (not the lake)?', 'Quel article signifie « la mer » (et non le lac) ?'],
      ['die See', 'der See', 'das See'], ['die See', 'der See', 'das See'], 0,
      ['die See = sea; der See = lake.', 'die See = la mer ; der See = le lac.'],
    ),
    fb(
      'sp-genus-q10',
      ['Hier ist ___ Information. (der, die or das? Information ends in -ion.)', 'Hier ist ___ Information. (der, die ou das ? Information se termine en -ion.)'],
      'die',
      ['-ion → die.', '-ion → die.'],
    ),
    fb(
      'sp-genus-q11',
      ['Wo ist ___ Mädchen? Es spielt im Garten. (der, die or das?)', 'Wo ist ___ Mädchen ? Es spielt im Garten. (der, die ou das ?)'],
      'das',
      ['Mädchen is neuter (-chen).', 'Mädchen est neutre (-chen).'],
    ),
    match(
      'sp-genus-q12',
      [
        ['die Zeitung', 'the newspaper', 'le journal'],
        ['das Datum', 'the date', 'la date'],
        ['der Frühling', 'the spring', 'le printemps'],
        ['die Möglichkeit', 'the possibility', 'la possibilité'],
        ['das Zimmer', 'the room', 'la pièce'],
      ],
      ['Match each noun with its meaning.', 'Associe chaque nom à son sens.'],
    ),
    wo('sp-genus-q13', ['Datum', 'steht', 'auf', 'Das', 'dem', 'Brief'], ['Das', 'Datum', 'steht', 'auf', 'dem', 'Brief'], ['Subject, verb, then place.', 'Sujet, verbe, puis lieu.']),
    lc(
      'sp-genus-q14',
      ['Listen. Which article comes before "Mädchen"?', 'Écoute. Quel article précède « Mädchen » ?'],
      'Das Mädchen liest ein Buch.',
      ['das', 'die', 'der'], ['das', 'die', 'der'], 0,
      ['Mädchen is neuter.', 'Mädchen est neutre.'],
    ),
  ],
});

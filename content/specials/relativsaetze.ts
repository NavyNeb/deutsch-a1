import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const relativsaetze = defineSpecial({
  slug: 'relativsaetze',
  number: 17,
  group: 'sentences',
  levels: ['A2', 'B1'],
  related: ['b1-l3', 'b1-l15'],
  title: ['Relativsätze', 'Relative clauses', 'Les propositions relatives'],
  theme: [
    'der Mann, der … — relative pronouns by gender, number and case, with prepositions, dessen / deren, was and wo',
    'der Mann, der … — pronoms relatifs selon le genre, le nombre et le cas, avec prépositions, dessen / deren, was et wo',
  ],
  goals: [
    'Build a relative clause: comma, relative pronoun, verb at the end',
    'Pick the pronoun: gender and number from the noun, case from its role',
    'Use the relative pronoun with a preposition (mit dem, für die, in der)',
    'Express "whose" with dessen and deren',
    'Use was and wo for things, ideas and places',
  ],
  goalsFr: [
    'Construire une relative : virgule, pronom relatif, verbe à la fin',
    'Choisir le pronom : genre et nombre du nom, cas selon son rôle',
    'Utiliser le pronom relatif avec une préposition (mit dem, für die, in der)',
    'Exprimer « dont » avec dessen et deren',
    'Utiliser was et wo pour les choses, les idées et les lieux',
  ],
  steps: [
    intro(
      'Der Mann, der …', 'L’homme qui …',
      'A relative clause adds information about a noun without starting a new sentence: *Der Mann, **der** dort steht, ist mein Lehrer.* It is the tool that turns short sentences into rich, natural German. The good news: the relative pronoun is almost always the **article you already know**.',
      'Une relative ajoute une information sur un nom sans ouvrir une nouvelle phrase : *Der Mann, **der** dort steht, ist mein Lehrer.* C’est l’outil qui transforme des phrases courtes en allemand riche et naturel. Bonne nouvelle : le pronom relatif est presque toujours **l’article que tu connais déjà**.',
      [
        'Spot the noun the clause refers to',
        'Choose the right pronoun in two steps',
        'Handle prepositions and "whose"',
        'Write and read longer sentences with confidence',
      ],
      [
        'Repérer le nom auquel la proposition se rapporte',
        'Choisir le bon pronom en deux étapes',
        'Gérer les prépositions et « dont »',
        'Écrire et lire des phrases plus longues avec assurance',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Building a relative clause', 'Construire une relative',
      'Comma, pronoun, verb at the end, comma.', 'Virgule, pronom, verbe à la fin, virgule.',
    ),
    grammar(
      'sp-rel-build',
      ['The shape of a relative clause', 'La forme d’une relative'],
      [
        'A relative clause **follows the noun** it describes and is always set off by **commas**. It is a **subordinate clause**, so the **conjugated verb goes to the end**.\n\nTwo short sentences:\n- Das ist der Mann. + Der Mann wohnt neben mir.\n\nbecome one:\n- Das ist der Mann, **der neben mir wohnt**.\n\nThe relative pronoun does two jobs at once:\n\n1. **Gender and number** come from the **noun it refers to** (the antecedent): *der Mann → der*, *die Frau → die*, *das Kind → das*, *die Leute → die*.\n2. **Case** comes from the **role of the pronoun inside the relative clause** (subject? object? after a preposition?).\n\nIf the relative clause sits in the middle of the main clause, a comma stands on **both sides**:\n- Der Mann**,** der neben mir wohnt**,** ist sehr nett.',
        'Une relative **suit le nom** qu’elle décrit et est toujours entre **virgules**. C’est une **subordonnée**, donc le **verbe conjugué va à la fin**.\n\nDeux phrases courtes :\n- Das ist der Mann. + Der Mann wohnt neben mir.\n\ndeviennent une seule :\n- Das ist der Mann, **der neben mir wohnt**.\n\nLe pronom relatif fait deux choses à la fois :\n\n1. **Genre et nombre** viennent du **nom auquel il se rapporte** (l’antécédent) : *der Mann → der*, *die Frau → die*, *das Kind → das*, *die Leute → die*.\n2. **Le cas** vient du **rôle du pronom dans la relative** (sujet ? objet ? après une préposition ?).\n\nSi la relative est au milieu de la principale, une virgule est placée **de chaque côté** :\n- Der Mann**,** der neben mir wohnt**,** ist sehr nett.',
      ],
      [
        ['Das ist der Mann, der neben mir wohnt.', 'That is the man who lives next to me.', 'Voilà l’homme qui habite à côté de moi.'],
        ['Die Frau, die dort sitzt, ist meine Lehrerin.', 'The woman who is sitting there is my teacher.', 'La femme qui est assise là est ma professeure.'],
        ['Das Kind, das schläft, heißt Lena.', 'The child who is sleeping is called Lena.', 'L’enfant qui dort s’appelle Lena.'],
      ],
      'satzklammer',
    ),
    vocab('sp-relativsaetze-relativsatz', 'der Relativsatz', 'the relative clause', 'la proposition relative', 'der', 're-la-TIV-satz', 'dair reh-lah-TEEF-zats', ['Ein Relativsatz steht hinter dem Nomen.', 'A relative clause stands after the noun.', 'Une relative se place après le nom.']),
    vocab('sp-relativsaetze-nachbar', 'der Nachbar', 'the neighbour', 'le voisin', 'der', 'NACH-bar', 'dair NAKH-bar', ['Der Nachbar, der unten wohnt, ist nett.', 'The neighbour who lives downstairs is nice.', 'Le voisin qui habite en bas est sympa.']),
    mc(
      'sp-rel-e1',
      ['"Das ist der Mann, ___ neben mir wohnt." (subject of the clause)', '« Das ist der Mann, ___ neben mir wohnt. » (sujet de la relative)'],
      ['der', 'den', 'dem'], ['der', 'den', 'dem'], 0,
      ['Masculine noun + subject of "wohnt" (nominative): der.', 'Nom masculin + sujet de « wohnt » (nominatif) : der.'],
    ),
    fb(
      'sp-rel-e2',
      ['Die Frau, ___ dort sitzt, ist meine Lehrerin. (relative pronoun)', 'Die Frau, ___ dort sitzt, ist meine Lehrerin. (pronom relatif)'],
      'die',
      ['Feminine, subject → die.', 'Féminin, sujet → die.'],
    ),
    wo('sp-rel-e3', ['wohnt', 'Das', 'ist', 'der', 'Mann,', 'der', 'neben', 'mir'], ['Das', 'ist', 'der', 'Mann,', 'der', 'neben', 'mir', 'wohnt'], ['The verb of the relative clause is last.', 'Le verbe de la relative est en dernier.']),
    mc(
      'sp-rel-e4',
      ['Where does the conjugated verb stand in a relative clause?', 'Où se place le verbe conjugué dans une relative ?'],
      ['At the end', 'In position 2', 'Right after the pronoun, before the subject'],
      ['À la fin', 'En position 2', 'Juste après le pronom, avant le sujet'], 0,
      ['A relative clause is a subordinate clause: verb last.', 'Une relative est une subordonnée : verbe en dernier.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Nominative & accusative', 'Nominatif et accusatif',
      'Subject or object inside the clause? Then look at the table.', 'Sujet ou objet dans la proposition ? Alors regarde le tableau.',
    ),
    grammar(
      'sp-rel-table',
      ['The relative pronoun table', 'Le tableau du pronom relatif'],
      [
        'Relative pronouns look like the **definite articles**, with only **three** exceptions (marked below).\n\nOrder: **masculine · feminine · neuter · plural**\n\n- **Nominative:** der · die · das · die\n- **Accusative:** **den** · die · das · die\n- **Dative:** dem · der · dem · **denen**\n- **Genitive:** **dessen** · **deren** · **dessen** · **deren**\n\n**How to choose in two steps**\n\n1. What is the **gender and number** of the noun before the comma? → column\n2. What does the pronoun **do** in its own clause: subject, direct object, indirect object? → row\n\n- Der Film, **den** ich gestern gesehen habe, war toll. (masculine; direct object of *gesehen habe*)\n- Die Frau, **die** ich gestern gesehen habe, ist Ärztin. (feminine; direct object)\n- Die Frau, **die** gestern angerufen hat, ist Ärztin. (feminine; **subject**)\n\n**Nominative and accusative differ only in the masculine** (*der* / *den*).',
        'Les pronoms relatifs ressemblent aux **articles définis**, avec seulement **trois** exceptions (en gras).\n\nOrdre : **masculin · féminin · neutre · pluriel**\n\n- **Nominatif :** der · die · das · die\n- **Accusatif :** **den** · die · das · die\n- **Datif :** dem · der · dem · **denen**\n- **Génitif :** **dessen** · **deren** · **dessen** · **deren**\n\n**Comment choisir en deux étapes**\n\n1. Quel est le **genre et le nombre** du nom avant la virgule ? → colonne\n2. Que **fait** le pronom dans sa propre proposition : sujet, COD, COI ? → ligne\n\n- Der Film, **den** ich gestern gesehen habe, war toll. (masculin ; COD de *gesehen habe*)\n- Die Frau, **die** ich gestern gesehen habe, ist Ärztin. (féminin ; COD)\n- Die Frau, **die** gestern angerufen hat, ist Ärztin. (féminin ; **sujet**)\n\n**Nominatif et accusatif ne diffèrent qu’au masculin** (*der* / *den*).',
      ],
      [
        ['Der Film, den ich gestern gesehen habe, war toll.', 'The film that I saw yesterday was great.', 'Le film que j’ai vu hier était super.'],
        ['Das Buch, das auf dem Tisch liegt, gehört mir.', 'The book that is lying on the table belongs to me.', 'Le livre qui est sur la table m’appartient.'],
        ['Die Kinder, die im Garten spielen, sind meine Neffen.', 'The children who are playing in the garden are my nephews.', 'Les enfants qui jouent dans le jardin sont mes neveux.'],
      ],
    ),
    vocab('sp-relativsaetze-relativpronomen', 'das Relativpronomen', 'the relative pronoun', 'le pronom relatif', 'das', 're-la-TIV-pro-no-men', 'dahs reh-lah-TEEF-proh-noh-men', ['Das Relativpronomen heißt oft der, die oder das.', 'The relative pronoun is often der, die or das.', 'Le pronom relatif est souvent der, die ou das.']),
    vocab('sp-relativsaetze-schluessel', 'der Schlüssel', 'the key', 'la clé', 'der', 'SCHLÜS-sel', 'dair SHLEWS-sel', ['Der Schlüssel, den ich suche, ist weg.', 'The key I am looking for is gone.', 'La clé que je cherche a disparu.']),
    mc(
      'sp-rel-e5',
      ['"Der Film, ___ ich gestern gesehen habe, war toll."', '« Der Film, ___ ich gestern gesehen habe, war toll. »'],
      ['der', 'den', 'dem'], ['der', 'den', 'dem'], 1,
      ['Masculine noun; inside the clause it is the direct object (ich sehe den Film): den.', 'Nom masculin ; dans la relative c’est le COD (ich sehe den Film) : den.'],
    ),
    fb(
      'sp-rel-e6',
      ['Das Buch, ___ auf dem Tisch liegt, gehört mir. (relative pronoun)', 'Das Buch, ___ auf dem Tisch liegt, gehört mir. (pronom relatif)'],
      'das',
      ['Neuter, subject → das.', 'Neutre, sujet → das.'],
    ),
    wo('sp-rel-e7', ['den', 'Der', 'Schlüssel,', 'ich', 'suche,', 'ist', 'weg'], ['Der', 'Schlüssel,', 'den', 'ich', 'suche,', 'ist', 'weg'], ['Relative clause inside the main clause, commas on both sides.', 'Relative au milieu de la principale, virgules des deux côtés.']),
    match(
      'sp-rel-e8',
      [
        ['masculine · nominative', 'der', 'der'],
        ['masculine · accusative', 'den', 'den'],
        ['neuter · dative', 'dem', 'dem'],
        ['plural · dative', 'denen', 'denen'],
        ['feminine · genitive', 'deren', 'deren'],
      ],
      ['Match each noun type and case with its relative pronoun.', 'Associe chaque type de nom et cas à son pronom relatif.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Dative & prepositions', 'Datif et prépositions',
      'The preposition comes first, the pronoun follows in the case it demands.', 'La préposition vient en premier, le pronom suit au cas qu’elle exige.',
    ),
    grammar(
      'sp-rel-prep',
      ['Preposition + relative pronoun', 'Préposition + pronom relatif'],
      [
        'A relative pronoun can be an **indirect object** (dative) or follow a **preposition**. The preposition stands **right in front of the pronoun** at the beginning of the clause, and it decides the case.\n\n- **Dative verbs** (helfen, gehören, danken …): Das Kind, **dem** ich helfe, ist neun. · Die Leute, **denen** ich helfe, sind alt.\n- **mit** + dative: Die Frau, **mit der** ich arbeite, ist nett.\n- **für** + accusative: Der Freund, **für den** ich das kaufe, hat Geburtstag.\n- **in / auf / an** + dative (position): Die Stadt, **in der** ich wohne, ist klein.\n\nThe **form** comes from the table; the **case** from the preposition (and for *two-way prepositions*, from position vs. direction).\n\nThe dative plural is the only truly new form: **denen** (not *den*): Die Nachbarn, **denen** ich helfe, …',
        'Un pronom relatif peut être un **COI** (datif) ou suivre une **préposition**. La préposition se place **juste devant le pronom**, au début de la proposition, et c’est elle qui décide du cas.\n\n- **Verbes à datif** (helfen, gehören, danken …) : Das Kind, **dem** ich helfe, ist neun. · Die Leute, **denen** ich helfe, sind alt.\n- **mit** + datif : Die Frau, **mit der** ich arbeite, ist nett.\n- **für** + accusatif : Der Freund, **für den** ich das kaufe, hat Geburtstag.\n- **in / auf / an** + datif (position) : Die Stadt, **in der** ich wohne, ist klein.\n\nLa **forme** vient du tableau ; le **cas** vient de la préposition (et pour les *prépositions mixtes*, de la position ou de la direction).\n\nLe datif pluriel est la seule vraie forme nouvelle : **denen** (pas *den*) : Die Nachbarn, **denen** ich helfe, …',
      ],
      [
        ['Die Frau, mit der ich arbeite, ist sehr nett.', 'The woman I work with is very nice.', 'La femme avec qui je travaille est très gentille.'],
        ['Die Stadt, in der ich wohne, ist klein.', 'The city where I live is small.', 'La ville où j’habite est petite.'],
        ['Der Freund, für den ich das kaufe, hat Geburtstag.', 'The friend I am buying this for has a birthday.', 'L’ami pour qui j’achète cela a son anniversaire.'],
        ['Die Leute, denen ich helfe, sind alt.', 'The people I am helping are old.', 'Les gens que j’aide sont âgés.'],
      ],
    ),
    vocab('sp-relativsaetze-kollege', 'der Kollege', 'the colleague', 'le collègue', 'der', 'kol-LE-ge', 'dair kol-LAY-geh', ['Der Kollege, mit dem ich arbeite, ist neu.', 'The colleague I work with is new.', 'Le collègue avec qui je travaille est nouveau.']),
    vocab('sp-relativsaetze-stadt', 'die Stadt', 'the city', 'la ville', 'die', 'STADT', 'dee SHTAT', ['Die Stadt, in der ich wohne, ist schön.', 'The city I live in is beautiful.', 'La ville où j’habite est belle.']),
    mc(
      'sp-rel-e9',
      ['"Die Frau, mit ___ ich arbeite, ist nett."', '« Die Frau, mit ___ ich arbeite, ist nett. »'],
      ['die', 'der', 'den'], ['die', 'der', 'den'], 1,
      ['mit + dative; feminine dative: der.', 'mit + datif ; datif féminin : der.'],
    ),
    fb(
      'sp-rel-e10',
      ['Das Kind, ___ ich helfe, ist neun. (dative, neuter)', 'Das Kind, ___ ich helfe, ist neun. (datif, neutre)'],
      'dem',
      ['helfen + dative; neuter dative: dem.', 'helfen + datif ; datif neutre : dem.'],
    ),
    mc(
      'sp-rel-e11',
      ['"Die Leute, ___ ich helfe, sind alt."', '« Die Leute, ___ ich helfe, sind alt. »'],
      ['die', 'den', 'denen'], ['die', 'den', 'denen'], 2,
      ['Dative plural relative pronoun: denen.', 'Pronom relatif au datif pluriel : denen.'],
    ),
    wo('sp-rel-e12', ['in', 'der', 'Die', 'Stadt,', 'wohne,', 'ich', 'ist', 'klein'], ['Die', 'Stadt,', 'in', 'der', 'ich', 'wohne,', 'ist', 'klein'], ['Preposition before the pronoun, verb last in the clause.', 'Préposition avant le pronom, verbe en dernier dans la relative.']),
    lc(
      'sp-rel-e13',
      ['Listen. Where does the speaker live?', 'Écoute. Où habite la personne ?'],
      'Die Stadt, in der ich wohne, ist klein.',
      ['In a small city', 'In a big city', 'In a village'],
      ['Dans une petite ville', 'Dans une grande ville', 'Dans un village'], 0,
      ['"klein" = small.', '« klein » = petit.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Genitive: dessen & deren', 'Génitif : dessen et deren',
      '"Whose" — and a trap with the article.', '« Dont » — et un piège avec l’article.',
    ),
    grammar(
      'sp-rel-gen',
      ['dessen and deren', 'dessen et deren'],
      [
        'To say **"whose"** (possession), German uses the genitive forms **dessen** and **deren**.\n\n- **dessen** → masculine and neuter noun: Der Mann, **dessen** Auto dort steht, …\n- **deren** → feminine and plural noun: Die Frau, **deren** Sohn Arzt ist, …\n\nThe form depends on the **owner** (the noun before the comma), **not** on the thing owned. And **no article** follows *dessen* / *deren*: **dessen Auto**, not *dessen das Auto*.\n\n- Das ist der Mann, **dessen** Auto gestohlen wurde.\n- Das ist die Frau, **deren** Sohn Arzt ist.\n- Das sind die Leute, **deren** Haus zu verkaufen ist.\n\nIn everyday speech, *dessen/deren* are rare. You will meet them mostly in writing — but you must be able to **recognise** them.',
        'Pour dire **« dont / dont le … »** (possession), l’allemand utilise le génitif **dessen** et **deren**.\n\n- **dessen** → nom masculin et neutre : Der Mann, **dessen** Auto dort steht, …\n- **deren** → nom féminin et pluriel : Die Frau, **deren** Sohn Arzt ist, …\n\nLa forme dépend du **possesseur** (le nom avant la virgule), **pas** de la chose possédée. Et **aucun article** ne suit *dessen* / *deren* : **dessen Auto**, pas *dessen das Auto*.\n\n- Das ist der Mann, **dessen** Auto gestohlen wurde.\n- Das ist die Frau, **deren** Sohn Arzt ist.\n- Das sind die Leute, **deren** Haus zu verkaufen ist.\n\nÀ l’oral, *dessen/deren* sont rares. Tu les rencontreras surtout à l’écrit — mais tu dois savoir les **reconnaître**.',
      ],
      [
        ['Der Mann, dessen Auto dort steht, ist mein Chef.', 'The man whose car is parked there is my boss.', 'L’homme dont la voiture est garée là est mon chef.'],
        ['Die Frau, deren Sohn Arzt ist, wohnt neben uns.', 'The woman whose son is a doctor lives next to us.', 'La femme dont le fils est médecin habite à côté de chez nous.'],
        ['Das Kind, dessen Mutter krank ist, bleibt zu Hause.', 'The child whose mother is ill stays at home.', 'L’enfant dont la mère est malade reste à la maison.'],
      ],
    ),
    vocab('sp-relativsaetze-besitzer', 'der Besitzer', 'the owner', 'le propriétaire', 'der', 'be-SIT-zer', 'dair beh-ZIT-tser', ['Der Besitzer, dessen Hund bellt, ist nicht da.', 'The owner whose dog is barking is not here.', 'Le propriétaire dont le chien aboie n’est pas là.']),
    mc(
      'sp-rel-e14',
      ['"Die Frau, ___ Sohn Arzt ist, wohnt neben uns."', '« Die Frau, ___ Sohn Arzt ist, wohnt neben uns. »'],
      ['dessen', 'deren', 'der'], ['dessen', 'deren', 'der'], 1,
      ['The owner is "die Frau" (feminine): deren.', 'Le possesseur est « die Frau » (féminin) : deren.'],
    ),
    fb(
      'sp-rel-e15',
      ['Der Mann, ___ Auto dort steht, ist mein Chef. (whose)', 'Der Mann, ___ Auto dort steht, ist mein Chef. (dont le)'],
      'dessen',
      ['The owner is masculine: dessen.', 'Le possesseur est masculin : dessen.'],
    ),
    mc(
      'sp-rel-e16',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Das Kind, dessen Mutter krank ist, bleibt zu Hause.', 'Das Kind, dessen die Mutter krank ist, bleibt zu Hause.', 'Das Kind, das Mutter krank ist, bleibt zu Hause.'],
      ['Das Kind, dessen Mutter krank ist, bleibt zu Hause.', 'Das Kind, dessen die Mutter krank ist, bleibt zu Hause.', 'Das Kind, das Mutter krank ist, bleibt zu Hause.'], 0,
      ['dessen replaces the article: no extra "die".', 'dessen remplace l’article : pas de « die » en plus.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'was and wo', 'was et wo',
      'When there is no noun with a gender to refer to.', 'Quand il n’y a pas de nom avec un genre auquel se référer.',
    ),
    grammar(
      'sp-rel-was-wo',
      ['was, wo and the "wh-" relatives', 'was, wo et les relatifs en « w- »'],
      [
        '**was** is the relative pronoun when it refers to **no specific noun**, but to:\n\n- **alles, nichts, etwas, vieles** and other indefinite words: Alles, **was** du sagst, ist richtig.\n- **a superlative neuter adjective**: Das ist das Beste, **was** ich je gegessen habe.\n- **a whole sentence**: Er hat die Prüfung bestanden, **was** mich sehr freut.\n\n**wo** is the relative for **places** and sometimes **times**, replacing *in dem / in der*:\n\n- Die Stadt, **wo** ich wohne, … (= *in der* ich wohne)\n- Ich fahre nach Berlin, **wo** mein Bruder arbeitet.\n\nNote: with a **neuter noun** like *das Haus* or *das Auto*, use **das**, **not was**: Das Auto, **das** ich gekauft habe, … The word **was** after *das Auto* is wrong.',
        '**was** est le pronom relatif quand il ne se rapporte à **aucun nom précis**, mais à :\n\n- **alles, nichts, etwas, vieles** et autres mots indéfinis : Alles, **was** du sagst, ist richtig.\n- **un adjectif neutre au superlatif** : Das ist das Beste, **was** ich je gegessen habe.\n- **toute une phrase** : Er hat die Prüfung bestanden, **was** mich sehr freut.\n\n**wo** est le relatif pour les **lieux** et parfois le **temps**, à la place de *in dem / in der* :\n\n- Die Stadt, **wo** ich wohne, … (= *in der* ich wohne)\n- Ich fahre nach Berlin, **wo** mein Bruder arbeitet.\n\nAttention : avec un **nom neutre** comme *das Haus* ou *das Auto*, on emploie **das**, **pas was** : Das Auto, **das** ich gekauft habe, … **was** après *das Auto* est faux.',
      ],
      [
        ['Alles, was du sagst, ist richtig.', 'Everything you say is right.', 'Tout ce que tu dis est juste.'],
        ['Das ist das Schönste, was ich je gesehen habe.', 'That is the most beautiful thing I have ever seen.', 'C’est la plus belle chose que j’aie jamais vue.'],
        ['Ich fahre nach Berlin, wo mein Bruder arbeitet.', 'I am going to Berlin, where my brother works.', 'Je vais à Berlin, où travaille mon frère.'],
      ],
    ),
    vocab('sp-relativsaetze-alles', 'alles', 'everything', 'tout', null, 'AL-les', 'AL-les', ['Alles, was er sagt, stimmt.', 'Everything he says is true.', 'Tout ce qu’il dit est vrai.']),
    mc(
      'sp-rel-e17',
      ['"Alles, ___ du sagst, ist richtig."', '« Alles, ___ du sagst, ist richtig. »'],
      ['das', 'was', 'wo'], ['das', 'was', 'wo'], 1,
      ['After alles / nichts / etwas: was.', 'Après alles / nichts / etwas : was.'],
    ),
    mc(
      'sp-rel-e18',
      ['"Das Auto, ___ ich gekauft habe, ist rot."', '« Das Auto, ___ ich gekauft habe, ist rot. »'],
      ['was', 'das', 'wo'], ['was', 'das', 'wo'], 1,
      ['A neuter noun (das Auto) needs "das", not "was".', 'Un nom neutre (das Auto) demande « das », pas « was ».'],
    ),
    fb(
      'sp-rel-e19',
      ['Ich fahre nach Berlin, ___ mein Bruder arbeitet. (place)', 'Ich fahre nach Berlin, ___ mein Bruder arbeitet. (lieu)'],
      'wo',
      ['A place + "where": wo.', 'Un lieu + « où » : wo.'],
    ),

    wrapup(
      '**Shape:** , relative pronoun … verb last, — commas on both sides.\n\n**Pronoun:** gender and number from the noun before the comma; case from its role in the clause.\n\n**Table:** der/die/das/die · den/die/das/die · dem/der/dem/**denen** · **dessen/deren/dessen/deren**.\n\n**Prepositions:** first in the clause, they set the case: *mit der*, *für den*, *in der*.\n\n**Genitive:** dessen (m/n), deren (f/pl); no article after them.\n\n**was / wo:** after alles, nichts, etwas, superlatives and whole sentences use was; for places use wo (or preposition + pronoun).',
      '**Forme :** , pronom relatif … verbe en dernier, — virgules des deux côtés.\n\n**Pronom :** genre et nombre du nom avant la virgule ; cas selon son rôle dans la proposition.\n\n**Tableau :** der/die/das/die · den/die/das/die · dem/der/dem/**denen** · **dessen/deren/dessen/deren**.\n\n**Prépositions :** en premier dans la proposition, elles fixent le cas : *mit der*, *für den*, *in der*.\n\n**Génitif :** dessen (m/n), deren (f/pl) ; pas d’article après.\n\n**was / wo :** après alles, nichts, etwas, les superlatifs et les phrases entières on emploie was ; pour les lieux wo (ou préposition + pronom).',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Relative clauses', 'Quiz final : les relatives'),
    mc(
      'sp-rel-q1',
      ['"Der Mann, ___ dort steht, ist mein Lehrer."', '« Der Mann, ___ dort steht, ist mein Lehrer. »'],
      ['der', 'den', 'dem'], ['der', 'den', 'dem'], 0,
      ['Masculine, subject: der.', 'Masculin, sujet : der.'],
    ),
    mc(
      'sp-rel-q2',
      ['"Der Film, ___ ich gestern gesehen habe, war toll."', '« Der Film, ___ ich gestern gesehen habe, war toll. »'],
      ['der', 'den', 'dem'], ['der', 'den', 'dem'], 1,
      ['Masculine, direct object: den.', 'Masculin, COD : den.'],
    ),
    fb(
      'sp-rel-q3',
      ['Die Kinder, ___ im Garten spielen, sind meine Neffen. (relative pronoun)', 'Die Kinder, ___ im Garten spielen, sind meine Neffen. (pronom relatif)'],
      'die',
      ['Plural, subject: die.', 'Pluriel, sujet : die.'],
    ),
    fb(
      'sp-rel-q4',
      ['Der Kollege, mit ___ ich arbeite, ist neu. (dative, masculine)', 'Der Kollege, mit ___ ich arbeite, ist neu. (datif, masculin)'],
      'dem',
      ['mit + dative masculine: dem.', 'mit + datif masculin : dem.'],
    ),
    wo('sp-rel-q5', ['Mann,', 'wohnt', 'Das', 'ist', 'der', 'neben', 'mir', 'der'], ['Das', 'ist', 'der', 'Mann,', 'der', 'neben', 'mir', 'wohnt'], ['Verb last in the relative clause.', 'Verbe en dernier dans la relative.']),
    wo('sp-rel-q6', ['mit', 'Die', 'der', 'Frau,', 'arbeite,', 'ich', 'ist', 'nett'], ['Die', 'Frau,', 'mit', 'der', 'ich', 'arbeite,', 'ist', 'nett'], ['mit der at the beginning of the relative clause.', 'mit der au début de la relative.']),
    mc(
      'sp-rel-q7',
      ['"Die Leute, ___ ich helfe, sind alt."', '« Die Leute, ___ ich helfe, sind alt. »'],
      ['die', 'den', 'denen'], ['die', 'den', 'denen'], 2,
      ['Dative plural: denen.', 'Datif pluriel : denen.'],
    ),
    mc(
      'sp-rel-q8',
      ['"Die Frau, ___ Sohn Arzt ist, wohnt neben uns."', '« Die Frau, ___ Sohn Arzt ist, wohnt neben uns. »'],
      ['dessen', 'deren', 'der'], ['dessen', 'deren', 'der'], 1,
      ['Owner feminine: deren.', 'Possesseur féminin : deren.'],
    ),
    fb(
      'sp-rel-q9',
      ['Alles, ___ er sagt, stimmt. (relative pronoun)', 'Alles, ___ er sagt, stimmt. (pronom relatif)'],
      'was',
      ['After alles: was.', 'Après alles : was.'],
    ),
    mc(
      'sp-rel-q10',
      ['"Das Auto, ___ ich gekauft habe, ist rot."', '« Das Auto, ___ ich gekauft habe, ist rot. »'],
      ['was', 'das', 'wo'], ['was', 'das', 'wo'], 1,
      ['Neuter noun: das, not was.', 'Nom neutre : das, pas was.'],
    ),
    match(
      'sp-rel-q11',
      [
        ['dative plural', 'denen', 'denen'],
        ['genitive, masculine owner', 'dessen', 'dessen'],
        ['genitive, feminine owner', 'deren', 'deren'],
        ['after alles / nichts', 'was', 'was'],
        ['place', 'wo', 'wo'],
      ],
      ['Match each situation with its relative pronoun.', 'Associe chaque situation à son pronom relatif.'],
    ),
    lc(
      'sp-rel-q12',
      ['Listen. Where does the speaker live?', 'Écoute. Où habite la personne ?'],
      'Die Stadt, in der ich wohne, ist klein.',
      ['In a small city', 'In a big city', 'In the country'],
      ['Dans une petite ville', 'Dans une grande ville', 'À la campagne'], 0,
      ['"klein" = small.', '« klein » = petit.'],
    ),
    mc(
      'sp-rel-q13',
      ['Where does the verb go in a relative clause?', 'Où va le verbe dans une relative ?'],
      ['At the end', 'In position 2', 'In position 1'],
      ['À la fin', 'En position 2', 'En position 1'], 0,
      ['It is a subordinate clause: verb last.', 'C’est une subordonnée : verbe en dernier.'],
    ),
    fb(
      'sp-rel-q14',
      ['Die Stadt, in ___ ich wohne, ist klein. (dative, feminine)', 'Die Stadt, in ___ ich wohne, ist klein. (datif, féminin)'],
      'der',
      ['in + dative (position), feminine: der.', 'in + datif (position), féminin : der.'],
    ),
  ],
});

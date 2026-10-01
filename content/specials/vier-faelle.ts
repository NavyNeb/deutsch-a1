import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const vierFaelle = defineSpecial({
  slug: 'vier-faelle',
  number: 11,
  group: 'cases',
  levels: ['A1', 'B1'],
  related: ['l15', 'a2-l5', 'a2-l21', 'b1-l4'],
  title: ['Die vier Fälle', 'The four cases', 'Les quatre cas'],
  theme: [
    'Nominative, accusative, dative and genitive: what each case does, which articles change, and the signal words that trigger them',
    'Nominatif, accusatif, datif et génitif : le rôle de chaque cas, les articles qui changent et les mots-signaux qui les déclenchent',
  ],
  goals: [
    'Understand what each case expresses: subject, direct object, indirect object, possession',
    'Know the article tables for der, die, das and ein-',
    'Recognise the prepositions and verbs that demand the accusative, dative or genitive',
    'Ask the right question (wer / wen / wem / wessen) to find any case',
  ],
  goalsFr: [
    'Comprendre ce qu’exprime chaque cas : sujet, COD, COI, possession',
    'Connaître les tableaux d’articles pour der, die, das et ein-',
    'Reconnaître les prépositions et verbes qui exigent l’accusatif, le datif ou le génitif',
    'Poser la bonne question (wer / wen / wem / wessen) pour trouver chaque cas',
  ],
  steps: [
    intro(
      'Wer macht was mit wem?', 'Qui fait quoi à qui ?',
      'In German the role of a noun in the sentence is shown by its case, not by its position. "Der Mann sieht den Hund" and "Den Hund sieht der Mann" mean exactly the same, because the articles tell you who sees whom. Master the four cases and word order becomes free and expressive.',
      'En allemand, le rôle d’un nom dans la phrase est marqué par son cas, pas par sa position. « Der Mann sieht den Hund » et « Den Hund sieht der Mann » veulent dire exactement la même chose, car les articles disent qui voit qui. Maîtrise les quatre cas et l’ordre des mots devient libre et expressif.',
      [
        'The four case questions: wer, wen, wem, wessen',
        'Nominative and accusative: subject and direct object',
        'Dative: the indirect object, with its verbs and prepositions',
        'Genitive: possession and a few prepositions',
        'Signal words that trigger each case',
      ],
      [
        'Les quatre questions : wer, wen, wem, wessen',
        'Nominatif et accusatif : sujet et COD',
        'Datif : le COI, avec ses verbes et prépositions',
        'Génitif : possession et quelques prépositions',
        'Mots-signaux qui déclenchent chaque cas',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Four cases, four questions', 'Quatre cas, quatre questions',
      'The map before the details.', 'La carte avant les détails.',
    ),
    grammar(
      'sp-vf-overview',
      ['What each case does', 'Le rôle de chaque cas'],
      [
        'A case tells you the **job** of a noun in the sentence. Ask the question and you find the case:\n\n- **Nominativ — wer? / was?** The subject, the one who does the action: **Der Lehrer** liest.\n- **Akkusativ — wen? / was?** The direct object: Ich sehe **den Lehrer**.\n- **Dativ — wem?** The indirect object, the receiver: Ich gebe **dem Lehrer** das Buch.\n- **Genitiv — wessen?** Possession: das Buch **des Lehrers**.\n\nIn English the position of the word shows the job; in German the **article** does. Only the **masculine** changes a lot in the accusative: der → **den**. Feminine, neuter and plural look the same in nominative and accusative.',
        'Un cas indique le **rôle** d’un nom dans la phrase. Pose la question et tu trouves le cas :\n\n- **Nominativ — wer ? / was ?** Le sujet, celui qui fait l’action : **Der Lehrer** liest.\n- **Akkusativ — wen ? / was ?** Le COD : Ich sehe **den Lehrer**.\n- **Dativ — wem ?** Le COI, le destinataire : Ich gebe **dem Lehrer** das Buch.\n- **Genitiv — wessen ?** La possession : das Buch **des Lehrers**.\n\nEn français, la position du mot montre le rôle ; en allemand, c’est l’**article**. Seul le **masculin** change beaucoup à l’accusatif : der → **den**. Le féminin, le neutre et le pluriel sont identiques au nominatif et à l’accusatif.',
      ],
      [
        ['Der Hund beißt den Mann.', 'The dog bites the man.', 'Le chien mord l’homme.'],
        ['Den Mann beißt der Hund.', 'The dog bites the man. (same meaning, different order)', 'Le chien mord l’homme. (même sens, autre ordre)'],
        ['Ich schenke meiner Mutter eine Blume.', 'I give my mother a flower.', 'J’offre une fleur à ma mère.'],
      ],
    ),
    vocab('sp-vier-faelle-der-hund', 'der Hund', 'the dog', 'le chien', 'der', 'HUND', 'dair HOONT', ['Der Hund schläft unter dem Tisch.', 'The dog sleeps under the table.', 'Le chien dort sous la table.']),
    mc(
      'sp-vf-e1',
      ['"Der Hund sieht den Mann." Who does the seeing?', '« Der Hund sieht den Mann. » Qui voit ?'],
      ['the dog', 'the man', 'both'], ['le chien', 'l’homme', 'les deux'], 0,
      ['The subject is in the nominative: der Hund. The man is in the accusative: den Mann.', 'Le sujet est au nominatif : der Hund. L’homme est à l’accusatif : den Mann.'],
    ),
    mc(
      'sp-vf-e2',
      ['Which question finds the direct object?', 'Quelle question trouve le COD ?'],
      ['wen / was?', 'wem?', 'wessen?'], ['wen / was ?', 'wem ?', 'wessen ?'], 0,
      ['Accusative = wen? or was?', 'Accusatif = wen ? ou was ?'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Nominative and accusative', 'Nominatif et accusatif',
      'Subject and direct object.', 'Sujet et complément d’objet direct.',
    ),
    grammar(
      'sp-vf-nom-akk',
      ['Nominative vs accusative articles', 'Articles au nominatif et à l’accusatif'],
      [
        '**Articles table (nominative → accusative):**\n\n- **masculine:** der → **den** · ein → **einen** · mein → **meinen** · kein → **keinen**\n- **feminine:** die → die · eine → eine · meine → meine\n- **neuter:** das → das · ein → ein · mein → mein\n- **plural:** die → die · (no article) · meine → meine\n\nOnly **masculine singular** changes. A trick: *"The masculine gets an -n in the accusative"*.\n\n**Verbs with the accusative:** most verbs take an accusative object: haben, sehen, kaufen, essen, trinken, lesen, brauchen, suchen, lieben.\n\n**Verbs with a second nominative:** sein, werden, bleiben: Er **ist ein** Lehrer (not *einen*).\n\n**Time and measure** also use the accusative: **jeden Tag**, **einen Monat** lang, **diesen Sommer**.',
        '**Tableau des articles (nominatif → accusatif) :**\n\n- **masculin :** der → **den** · ein → **einen** · mein → **meinen** · kein → **keinen**\n- **féminin :** die → die · eine → eine · meine → meine\n- **neutre :** das → das · ein → ein · mein → mein\n- **pluriel :** die → die · (sans article) · meine → meine\n\nSeul le **masculin singulier** change. Astuce : *« Le masculin prend un -n à l’accusatif »*.\n\n**Verbes à l’accusatif :** la plupart des verbes prennent un COD à l’accusatif : haben, sehen, kaufen, essen, trinken, lesen, brauchen, suchen, lieben.\n\n**Verbes avec un second nominatif :** sein, werden, bleiben : Er **ist ein** Lehrer (et non *einen*).\n\n**Le temps et la mesure** utilisent aussi l’accusatif : **jeden Tag**, **einen Monat** lang, **diesen Sommer**.',
      ],
      [
        ['Ich brauche einen Stuhl.', 'I need a chair.', 'J’ai besoin d’une chaise.'],
        ['Wir suchen eine Wohnung.', 'We are looking for a flat.', 'Nous cherchons un appartement.'],
        ['Er ist ein guter Freund.', 'He is a good friend.', 'C’est un bon ami.'],
        ['Ich arbeite jeden Tag.', 'I work every day.', 'Je travaille tous les jours.'],
      ],
      'conjugation-table',
    ),
    vocab('sp-vier-faelle-stuhl', 'der Stuhl', 'the chair', 'la chaise', 'der', 'STUHL', 'dair SHTOOL', ['Ich brauche einen neuen Stuhl.', 'I need a new chair.', 'J’ai besoin d’une nouvelle chaise.']),
    fb(
      'sp-vf-e3',
      ['Ich kaufe ___ Tisch. (ein, masculine, accusative)', 'Ich kaufe ___ Tisch. (ein, masculin, accusatif)'],
      'einen',
      ['Masculine accusative: ein → einen.', 'Masculin à l’accusatif : ein → einen.'],
    ),
    fb(
      'sp-vf-e4',
      ['Siehst du ___ Mann dort? (der Mann, accusative)', 'Siehst du ___ Mann dort ? (der Mann, accusatif)'],
      'den',
      ['Masculine accusative: der → den.', 'Masculin à l’accusatif : der → den.'],
    ),
    fb(
      'sp-vf-e5',
      ['Er ist ___ Arzt. (sein takes the nominative: ein)', 'Er ist ___ Arzt. (sein prend le nominatif : ein)'],
      'ein',
      ['After sein: nominative → ein Arzt.', 'Après sein : nominatif → ein Arzt.'],
    ),
    mc(
      'sp-vf-e6',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich habe einen Bruder.', 'Ich habe ein Bruder.', 'Ich habe einer Bruder.'],
      ['Ich habe einen Bruder.', 'Ich habe ein Bruder.', 'Ich habe einer Bruder.'], 0,
      ['haben + masculine object → accusative einen.', 'haben + objet masculin → accusatif einen.'],
    ),
    wo('sp-vf-e7', ['kauft', 'Der', 'einen', 'Mann', 'Mantel'], ['Der', 'Mann', 'kauft', 'einen', 'Mantel'], ['Subject, verb, then the accusative object.', 'Sujet, verbe, puis l’objet à l’accusatif.']),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'The dative', 'Le datif',
      'The receiver: to whom, for whom.', 'Le destinataire : à qui, pour qui.',
    ),
    grammar(
      'sp-vf-dativ',
      ['Dative: articles, verbs and prepositions', 'Datif : articles, verbes et prépositions'],
      [
        '**Dative articles:**\n\n- **masculine:** dem · einem · meinem\n- **feminine:** der · einer · meiner\n- **neuter:** dem · einem · meinem\n- **plural:** **den** + **-n** on the noun · meinen\n\n**Verbs that take only the dative:** helfen, danken, gehören, gefallen, antworten, schmecken, passen, fehlen: Ich helfe **dem Mann**. Das Buch gehört **meiner Schwester**.\n\n**Two objects:** geben, schenken, zeigen, schicken, erklären, empfehlen: dative = person, accusative = thing: Ich gebe **dem Kind einen Apfel**.\n\n**Dative prepositions (always):** **aus, bei, mit, nach, seit, von, zu, gegenüber** — memorise: *"aus-bei-mit-nach, seit-von-zu"*: mit **dem** Bus, bei **meiner** Oma, zu **den** Freunden.',
        '**Articles au datif :**\n\n- **masculin :** dem · einem · meinem\n- **féminin :** der · einer · meiner\n- **neutre :** dem · einem · meinem\n- **pluriel :** **den** + **-n** sur le nom · meinen\n\n**Verbes qui ne prennent que le datif :** helfen, danken, gehören, gefallen, antworten, schmecken, passen, fehlen : Ich helfe **dem Mann**. Das Buch gehört **meiner Schwester**.\n\n**Deux compléments :** geben, schenken, zeigen, schicken, erklären, empfehlen : datif = la personne, accusatif = la chose : Ich gebe **dem Kind einen Apfel**.\n\n**Prépositions toujours suivies du datif :** **aus, bei, mit, nach, seit, von, zu, gegenüber** — à mémoriser : *« aus-bei-mit-nach, seit-von-zu »* : mit **dem** Bus, bei **meiner** Oma, zu **den** Freunden.',
      ],
      [
        ['Ich helfe meinem Vater im Garten.', 'I help my father in the garden.', 'J’aide mon père dans le jardin.'],
        ['Das Essen schmeckt den Kindern.', 'The children like the food.', 'Le repas plaît aux enfants.'],
        ['Wir fahren mit dem Zug nach Berlin.', 'We travel to Berlin by train.', 'Nous allons à Berlin en train.'],
        ['Sie schenkt ihrer Schwester ein Buch.', 'She gives her sister a book.', 'Elle offre un livre à sa sœur.'],
      ],
      'conjugation-table',
    ),
    vocab('sp-vier-faelle-helfen', 'helfen', 'to help', 'aider', null, 'HEL-fen', 'HEL-fen', ['Kannst du mir bitte helfen?', 'Can you please help me?', 'Peux-tu m’aider, s’il te plaît ?']),
    vocab('sp-vier-faelle-gehoeren', 'gehören', 'to belong to', 'appartenir à', null, 'ge-HÖ-ren', 'guh-HUH-ren', ['Das Fahrrad gehört meinem Bruder.', 'The bike belongs to my brother.', 'Le vélo appartient à mon frère.']),
    fb(
      'sp-vf-e8',
      ['Ich fahre mit ___ Bus. (der Bus)', 'Ich fahre mit ___ Bus. (der Bus)'],
      'dem',
      ['mit + dative; masculine → dem.', 'mit + datif ; masculin → dem.'],
    ),
    fb(
      'sp-vf-e9',
      ['Das Buch gehört ___ Lehrerin. (die Lehrerin)', 'Das Buch gehört ___ Lehrerin. (die Lehrerin)'],
      'der',
      ['gehören + dative; feminine → der.', 'gehören + datif ; féminin → der.'],
    ),
    fb(
      'sp-vf-e10',
      ['Wir gratulieren den ___. (die Freunde, dative plural)', 'Wir gratulieren den ___. (die Freunde, datif pluriel)'],
      'Freunden',
      ['Dative plural adds -n to the noun.', 'Le datif pluriel ajoute -n au nom.'],
    ),
    mc(
      'sp-vf-e11',
      ['Which preposition does NOT take the dative?', 'Quelle préposition NE prend PAS le datif ?'],
      ['für', 'mit', 'bei'], ['für', 'mit', 'bei'], 0,
      ['für always takes the accusative.', 'für prend toujours l’accusatif.'],
    ),
    mc(
      'sp-vf-e12',
      ['Choose the correct sentence.', 'Choisis la phrase correcte.'],
      ['Ich gebe dem Kind einen Apfel.', 'Ich gebe das Kind einen Apfel.', 'Ich gebe dem Kind einem Apfel.'],
      ['Ich gebe dem Kind einen Apfel.', 'Ich gebe das Kind einen Apfel.', 'Ich gebe dem Kind einem Apfel.'], 0,
      ['Person = dative (dem Kind), thing = accusative (einen Apfel).', 'Personne = datif (dem Kind), chose = accusatif (einen Apfel).'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'The genitive', 'Le génitif',
      'Possession and formal prepositions.', 'La possession et les prépositions formelles.',
    ),
    grammar(
      'sp-vf-genitiv',
      ['Genitive: whose is it?', 'Génitif : à qui est-ce ?'],
      [
        '**Genitive articles:**\n\n- **masculine:** des + **-(e)s** on the noun: das Auto **des Mannes**, der Name **des Lehrers**\n- **feminine:** der: die Tasche **der Frau**\n- **neuter:** des + **-(e)s**: das Dach **des Hauses**\n- **plural:** der: die Bücher **der Kinder**\n\nThe genitive noun comes **after** the noun it belongs to. For names: **Annas Auto** (no article, -s before the noun).\n\n**Genitive prepositions:** **wegen** (because of), **trotz** (despite), **während** (during), **statt / anstatt** (instead of): **trotz des Regens**, **während der Ferien**.\n\nIn everyday spoken German, many speakers use the dative with these (*wegen dem Regen*). In writing and exams, use the genitive. A frequent alternative to the genitive is **von + dative**: das Auto **von meinem Vater**.',
        '**Articles au génitif :**\n\n- **masculin :** des + **-(e)s** sur le nom : das Auto **des Mannes**, der Name **des Lehrers**\n- **féminin :** der : die Tasche **der Frau**\n- **neutre :** des + **-(e)s** : das Dach **des Hauses**\n- **pluriel :** der : die Bücher **der Kinder**\n\nLe nom au génitif vient **après** le nom auquel il se rapporte. Pour les prénoms : **Annas Auto** (sans article, -s avant le nom).\n\n**Prépositions au génitif :** **wegen** (à cause de), **trotz** (malgré), **während** (pendant), **statt / anstatt** (au lieu de) : **trotz des Regens**, **während der Ferien**.\n\nÀ l’oral courant, beaucoup de locuteurs utilisent le datif avec elles (*wegen dem Regen*). À l’écrit et aux examens, utilise le génitif. Une alternative fréquente au génitif est **von + datif** : das Auto **von meinem Vater**.',
      ],
      [
        ['Das ist das Auto meines Vaters.', 'That is my father’s car.', 'C’est la voiture de mon père.'],
        ['Die Farbe des Hauses ist weiß.', 'The colour of the house is white.', 'La couleur de la maison est blanche.'],
        ['Trotz des Regens gehen wir spazieren.', 'Despite the rain we go for a walk.', 'Malgré la pluie, nous allons nous promener.'],
        ['Annas Bruder wohnt in Köln.', 'Anna’s brother lives in Cologne.', 'Le frère d’Anna habite à Cologne.'],
      ],
      'conjugation-table',
    ),
    vocab('sp-vier-faelle-wegen', 'wegen', 'because of (+ genitive)', 'à cause de (+ génitif)', null, 'WEH-gen', 'VAY-gen', ['Wegen des Wetters bleiben wir zu Hause.', 'Because of the weather we stay at home.', 'À cause du temps, nous restons à la maison.']),
    vocab('sp-vier-faelle-trotz', 'trotz', 'despite (+ genitive)', 'malgré (+ génitif)', null, 'TROTS', 'TROTS', ['Trotz der Kälte schwimmt er im See.', 'Despite the cold he swims in the lake.', 'Malgré le froid, il nage dans le lac.']),
    fb(
      'sp-vf-e13',
      ['Das ist das Haus ___ Lehrers. (der Lehrer, genitive)', 'Das ist das Haus ___ Lehrers. (der Lehrer, génitif)'],
      'des',
      ['Masculine genitive: des + noun + -s.', 'Masculin au génitif : des + nom + -s.'],
    ),
    fb(
      'sp-vf-e14',
      ['Die Tasche ___ Frau ist schwarz. (die Frau, genitive)', 'Die Tasche ___ Frau ist schwarz. (die Frau, génitif)'],
      'der',
      ['Feminine genitive: der.', 'Féminin au génitif : der.'],
    ),
    mc(
      'sp-vf-e15',
      ['Which is correct?', 'Laquelle est correcte ?'],
      ['trotz des Regens', 'trotz der Regen', 'trotz den Regens'], ['trotz des Regens', 'trotz der Regen', 'trotz den Regens'], 0,
      ['trotz + genitive: des Regens (masculine, -s on the noun).', 'trotz + génitif : des Regens (masculin, -s sur le nom).'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Signal words and strategy', 'Mots-signaux et stratégie',
      'How to find the case in any sentence.', 'Comment trouver le cas dans toute phrase.',
    ),
    grammar(
      'sp-vf-signals',
      ['Prepositions and a three-step strategy', 'Prépositions et stratégie en trois étapes'],
      [
        '**Prepositions and their case:**\n\n- **Accusative:** **durch, für, gegen, ohne, um** — *"durch-für-gegen-ohne-um"*: **für den** Lehrer, **ohne meinen** Bruder.\n- **Dative:** **aus, bei, mit, nach, seit, von, zu, gegenüber**.\n- **Genitive:** **wegen, trotz, während, (an)statt**.\n- **Two-way (Wechsel):** in, an, auf, über, unter, vor, hinter, neben, zwischen — accusative for direction (wohin?), dative for location (wo?).\n\n**Three-step strategy for any sentence:**\n\n- 1. Find the **verb** — does it need a special case (helfen → dative)?\n- 2. Look for a **preposition** — it decides the case of what follows.\n- 3. Otherwise: subject = nominative, first object = accusative, the receiver = dative.',
        '**Prépositions et leur cas :**\n\n- **Accusatif :** **durch, für, gegen, ohne, um** — *« durch-für-gegen-ohne-um »* : **für den** Lehrer, **ohne meinen** Bruder.\n- **Datif :** **aus, bei, mit, nach, seit, von, zu, gegenüber**.\n- **Génitif :** **wegen, trotz, während, (an)statt**.\n- **À double régime (Wechsel) :** in, an, auf, über, unter, vor, hinter, neben, zwischen — accusatif pour la direction (wohin ?), datif pour le lieu (wo ?).\n\n**Stratégie en trois étapes pour toute phrase :**\n\n- 1. Trouve le **verbe** — exige-t-il un cas particulier (helfen → datif) ?\n- 2. Cherche une **préposition** — elle décide du cas de ce qui suit.\n- 3. Sinon : sujet = nominatif, premier objet = accusatif, le destinataire = datif.',
      ],
      [
        ['Das Geschenk ist für dich.', 'The present is for you.', 'Le cadeau est pour toi.'],
        ['Ich gehe zu meiner Tante.', 'I am going to my aunt’s.', 'Je vais chez ma tante.'],
        ['Wir gehen ohne den Hund spazieren.', 'We go for a walk without the dog.', 'Nous nous promenons sans le chien.'],
        ['Seit einem Jahr lerne ich Deutsch.', 'I have been learning German for a year.', 'J’apprends l’allemand depuis un an.'],
      ],
    ),
    vocab('sp-vier-faelle-geschenk', 'das Geschenk', 'the present, gift', 'le cadeau', 'das', 'ge-SCHENK', 'dahs guh-SHENK', ['Das Geschenk ist für meine Mutter.', 'The present is for my mother.', 'Le cadeau est pour ma mère.']),
    match(
      'sp-vf-e16',
      [
        ['für', 'accusative', 'accusatif'],
        ['mit', 'dative', 'datif'],
        ['wegen', 'genitive', 'génitif'],
        ['ohne', 'accusative', 'accusatif'],
        ['bei', 'dative', 'datif'],
      ],
      ['Match each preposition with its case.', 'Associe chaque préposition à son cas.'],
    ),
    mc(
      'sp-vf-e17',
      ['"Ich gehe ohne ___ Bruder." Which article fits?', '« Ich gehe ohne ___ Bruder. » Quel article convient ?'],
      ['meinen', 'meinem', 'mein'], ['meinen', 'meinem', 'mein'], 0,
      ['ohne + accusative; masculine → meinen.', 'ohne + accusatif ; masculin → meinen.'],
    ),
    wo('sp-vf-e18', ['mit', 'Ich', 'dem', 'fahre', 'Zug'], ['Ich', 'fahre', 'mit', 'dem', 'Zug'], ['Subject, verb, then mit + dative.', 'Sujet, verbe, puis mit + datif.']),

    wrapup(
      '**Questions:** wer? = nominative · wen? = accusative · wem? = dative · wessen? = genitive.\n\n**Articles (m / f / n / pl):**\n\n- Nominative: der / die / das / die\n- Accusative: **den** / die / das / die\n- Dative: **dem** / **der** / **dem** / **den + -n**\n- Genitive: **des + -s** / **der** / **des + -s** / **der**\n\n**Triggers:** durch, für, gegen, ohne, um → accusative · aus, bei, mit, nach, seit, von, zu → dative · wegen, trotz, während, statt → genitive · helfen, danken, gehören, gefallen → dative.\n\n**Strategy:** verb → preposition → default (subject, object, receiver).',
      '**Questions :** wer ? = nominatif · wen ? = accusatif · wem ? = datif · wessen ? = génitif.\n\n**Articles (m / f / n / pl) :**\n\n- Nominatif : der / die / das / die\n- Accusatif : **den** / die / das / die\n- Datif : **dem** / **der** / **dem** / **den + -n**\n- Génitif : **des + -s** / **der** / **des + -s** / **der**\n\n**Déclencheurs :** durch, für, gegen, ohne, um → accusatif · aus, bei, mit, nach, seit, von, zu → datif · wegen, trotz, während, statt → génitif · helfen, danken, gehören, gefallen → datif.\n\n**Stratégie :** verbe → préposition → par défaut (sujet, objet, destinataire).',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: the four cases', 'Quiz final : les quatre cas'),
    mc(
      'sp-vf-q1',
      ['"Ich sehe ___ Mann." (der Mann)', '« Ich sehe ___ Mann. » (der Mann)'],
      ['den', 'dem', 'der'], ['den', 'dem', 'der'], 0,
      ['sehen + accusative: den Mann.', 'sehen + accusatif : den Mann.'],
    ),
    mc(
      'sp-vf-q2',
      ['"Ich helfe ___ Frau." (die Frau)', '« Ich helfe ___ Frau. » (die Frau)'],
      ['der', 'die', 'den'], ['der', 'die', 'den'], 0,
      ['helfen + dative; feminine → der.', 'helfen + datif ; féminin → der.'],
    ),
    mc(
      'sp-vf-q3',
      ['"Das ist das Auto ___ Vaters." (der Vater)', '« Das ist das Auto ___ Vaters. » (der Vater)'],
      ['des', 'dem', 'den'], ['des', 'dem', 'den'], 0,
      ['Genitive masculine: des Vaters.', 'Génitif masculin : des Vaters.'],
    ),
    mc(
      'sp-vf-q4',
      ['Which case does "für" take?', 'Quel cas prend « für » ?'],
      ['accusative', 'dative', 'genitive'], ['accusatif', 'datif', 'génitif'], 0,
      ['für belongs to durch-für-gegen-ohne-um.', 'für fait partie de durch-für-gegen-ohne-um.'],
    ),
    fb(
      'sp-vf-q5',
      ['Wir fahren mit ___ Auto nach Wien. (das Auto)', 'Wir fahren mit ___ Auto nach Wien. (das Auto)'],
      'dem',
      ['mit + dative; neuter → dem.', 'mit + datif ; neutre → dem.'],
    ),
    fb(
      'sp-vf-q6',
      ['Hast du ___ Bruder? (ein, accusative)', 'Hast du ___ Bruder ? (ein, accusatif)'],
      'einen',
      ['Masculine accusative: einen.', 'Masculin à l’accusatif : einen.'],
    ),
    fb(
      'sp-vf-q7',
      ['Er schenkt ___ Mutter Blumen. (meine Mutter, dative)', 'Er schenkt ___ Mutter Blumen. (meine Mutter, datif)'],
      'meiner',
      ['Feminine dative: meiner.', 'Féminin au datif : meiner.'],
    ),
    fb(
      'sp-vf-q8',
      ['Trotz ___ Regens bleiben wir draußen. (der Regen, genitive)', 'Trotz ___ Regens bleiben wir draußen. (der Regen, génitif)'],
      'des',
      ['trotz + genitive: des Regens.', 'trotz + génitif : des Regens.'],
    ),
    match(
      'sp-vf-q9',
      [
        ['wer?', 'nominative', 'nominatif'],
        ['wen?', 'accusative', 'accusatif'],
        ['wem?', 'dative', 'datif'],
        ['wessen?', 'genitive', 'génitif'],
      ],
      ['Match each question with its case.', 'Associe chaque question à son cas.'],
    ),
    wo('sp-vf-q10', ['gehört', 'Das', 'Buch', 'meinem', 'Bruder'], ['Das', 'Buch', 'gehört', 'meinem', 'Bruder'], ['Subject, verb, then the dative.', 'Sujet, verbe, puis le datif.']),
    wo('sp-vf-q11', ['für', 'Das', 'ist', 'Geschenk', 'dich'], ['Das', 'Geschenk', 'ist', 'für', 'dich'], ['Subject, verb, then für + accusative.', 'Sujet, verbe, puis für + accusatif.']),
    lc(
      'sp-vf-q12',
      ['Listen. Which article do you hear after "mit"?', 'Écoute. Quel article entends-tu après « mit » ?'],
      'Wir fahren mit dem Zug nach Berlin.',
      ['dem', 'den', 'der'], ['dem', 'den', 'der'], 0,
      ['mit + dative: dem Zug.', 'mit + datif : dem Zug.'],
    ),
    mc(
      'sp-vf-q13',
      ['Which verb takes only the dative?', 'Quel verbe ne prend que le datif ?'],
      ['danken', 'kaufen', 'sehen'], ['danken', 'kaufen', 'sehen'], 0,
      ['danken + dative: Ich danke dir.', 'danken + datif : Ich danke dir.'],
    ),
    mc(
      'sp-vf-q14',
      ['"Er ist ___ Lehrer." Which form is correct?', '« Er ist ___ Lehrer. » Quelle forme est correcte ?'],
      ['ein', 'einen', 'einem'], ['ein', 'einen', 'einem'], 0,
      ['After sein: nominative.', 'Après sein : nominatif.'],
    ),
  ],
});

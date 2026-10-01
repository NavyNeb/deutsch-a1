import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const familie = defineSpecial({
  slug: 'familie',
  number: 21,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['l3', 'a2-l13'],
  title: ['Familie & Beziehungen', 'Family & relationships', 'Famille & relations'],
  theme: [
    'Family members, family status, possessives (mein, dein, sein, ihr …) and the genitive -s with names',
    'Membres de la famille, situation familiale, possessifs (mein, dein, sein, ihr …) et le -s du génitif avec les prénoms',
  ],
  goals: [
    'Name close and extended family members with their articles and plurals',
    'Talk about civil status: ledig, verheiratet, geschieden',
    'Use possessives correctly: mein, dein, sein, ihr, unser, euer',
    'Say whose something is with Annas Mutter and von-phrases',
    'Introduce your family in a short conversation',
  ],
  goalsFr: [
    'Nommer les membres de la famille proche et élargie avec leurs articles et pluriels',
    'Parler de la situation familiale : ledig, verheiratet, geschieden',
    'Utiliser correctement les possessifs : mein, dein, sein, ihr, unser, euer',
    'Dire à qui appartient quelque chose avec Annas Mutter et les tournures en von',
    'Présenter sa famille dans une courte conversation',
  ],
  steps: [
    intro(
      'Das ist meine Familie', 'Voici ma famille',
      'Almost every first conversation in German ends up at the family: Hast du Geschwister? Wo wohnen deine Eltern? In this special you learn the people words, their plurals, and the little words (mein, dein, sein, ihr) that tell us who belongs to whom.',
      'Presque toute première conversation en allemand finit par la famille : Hast du Geschwister ? Wo wohnen deine Eltern ? Dans ce spécial, tu apprends les mots pour les personnes, leurs pluriels et les petits mots (mein, dein, sein, ihr) qui disent qui appartient à qui.',
      [
        'Family words with der/die/das and plural',
        'Civil status and relationships',
        'Possessive articles and their endings',
        'The genitive -s with first names',
        'A short “introduce your family” dialogue',
      ],
      [
        'Les mots de la famille avec der/die/das et le pluriel',
        'Situation familiale et relations',
        'Les articles possessifs et leurs terminaisons',
        'Le -s du génitif avec les prénoms',
        'Un court dialogue « présenter sa famille »',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Close family', 'La famille proche',
      'Parents, children and siblings — the core vocabulary.', 'Parents, enfants et frères et sœurs — le vocabulaire de base.',
    ),
    vocab('sp-familie-familie', 'die Familie', 'the family', 'la famille', 'die', 'fa-MI-li-e', 'dee fah-MEE-lee-eh', ['Meine Familie ist groß.', 'My family is big.', 'Ma famille est grande.']),
    vocab('sp-familie-eltern', 'die Eltern', 'the parents', 'les parents', 'die', 'EL-tern', 'dee EL-tern', ['Meine Eltern wohnen in Kribi.', 'My parents live in Kribi.', 'Mes parents habitent à Kribi.']),
    vocab('sp-familie-mutter', 'die Mutter', 'the mother', 'la mère', 'die', 'MUT-ter', 'dee MOOT-er', ['Meine Mutter arbeitet im Krankenhaus.', 'My mother works in the hospital.', 'Ma mère travaille à l’hôpital.']),
    vocab('sp-familie-vater', 'der Vater', 'the father', 'le père', 'der', 'VA-ter', 'dair FAH-ter', ['Mein Vater kocht gern.', 'My father likes to cook.', 'Mon père aime cuisiner.']),
    vocab('sp-familie-bruder', 'der Bruder', 'the brother', 'le frère', 'der', 'BRU-der', 'dair BROO-der', ['Mein Bruder heißt Paul.', 'My brother is called Paul.', 'Mon frère s’appelle Paul.']),
    vocab('sp-familie-schwester', 'die Schwester', 'the sister', 'la sœur', 'die', 'SCHWES-ter', 'dee SHVES-ter', ['Meine Schwester ist Lehrerin.', 'My sister is a teacher.', 'Ma sœur est enseignante.']),
    vocab('sp-familie-geschwister', 'die Geschwister', 'the siblings', 'les frères et sœurs', 'die', 'ge-SCHWIS-ter', 'dee geh-SHVIS-ter', ['Hast du Geschwister?', 'Do you have siblings?', 'As-tu des frères et sœurs ?']),
    vocab('sp-familie-sohn', 'der Sohn', 'the son', 'le fils', 'der', 'SOHN', 'dair ZOHN', ['Ihr Sohn ist acht Jahre alt.', 'Her son is eight years old.', 'Son fils a huit ans.']),
    vocab('sp-familie-tochter', 'die Tochter', 'the daughter', 'la fille', 'die', 'TOCH-ter', 'dee TOKH-ter', ['Seine Tochter geht zur Schule.', 'His daughter goes to school.', 'Sa fille va à l’école.']),
    vocab('sp-familie-kind', 'das Kind', 'the child', 'l’enfant', 'das', 'KIND', 'dahs KINT', ['Das Kind spielt im Garten.', 'The child is playing in the garden.', 'L’enfant joue dans le jardin.']),
    ap('sp-fam-e1', 'Mutter', 'die', ['Mutter is feminine: die Mutter.', 'Mutter est féminin : die Mutter.']),
    ap('sp-fam-e2', 'Vater', 'der', ['Male people are usually masculine: der Vater.', 'Les personnes de sexe masculin sont en général masculines : der Vater.']),
    ap('sp-fam-e3', 'Kind', 'das', ['Kind is neuter, whatever the sex of the child: das Kind.', 'Kind est neutre, quel que soit le sexe de l’enfant : das Kind.']),
    ap('sp-fam-e4', 'Familie', 'die', ['Words ending in -ie, -ei and -ung are almost always feminine.', 'Les mots en -ie, -ei et -ung sont presque toujours féminins.']),
    match(
      'sp-fam-e5',
      [
        ['die Mutter', 'the mother', 'la mère'],
        ['der Vater', 'the father', 'le père'],
        ['der Bruder', 'the brother', 'le frère'],
        ['die Schwester', 'the sister', 'la sœur'],
        ['der Sohn', 'the son', 'le fils'],
        ['die Tochter', 'the daughter', 'la fille'],
      ],
      ['Match each family word with its translation.', 'Associe chaque mot de la famille à sa traduction.'],
    ),
    grammar(
      'sp-fam-dialogue-geschwister',
      ['Do you have siblings?', 'As-tu des frères et sœurs ?'],
      [
        'To ask about siblings and children, use **haben** + the **accusative**. To say “none”, use the **kein-** forms: **keinen** (masculine), **keine** (feminine and plural), **kein** (neuter):\n\n- **Hast du Geschwister?** — Ja, ich habe **einen Bruder** und **eine Schwester**.\n- **Hast du Kinder?** — Nein, ich habe **keine** Kinder.\n- Wie **viele** Geschwister hast du? — Ich habe **drei**.\n\nNote that the masculine form changes in the accusative: **ein Bruder** → **einen Bruder**.',
        'Pour demander des frères et sœurs ou des enfants, on emploie **haben** + l’**accusatif**. Pour dire « aucun », utilise les formes de **kein-** : **keinen** (masculin), **keine** (féminin et pluriel), **kein** (neutre) :\n\n- **Hast du Geschwister ?** — Ja, ich habe **einen Bruder** und **eine Schwester**.\n- **Hast du Kinder ?** — Nein, ich habe **keine** Kinder.\n- Wie **viele** Geschwister hast du ? — Ich habe **drei**.\n\nAttention : le masculin change à l’accusatif : **ein Bruder** → **einen Bruder**.',
      ],
      [
        ['Hast du Geschwister?', 'Do you have siblings?', 'As-tu des frères et sœurs ?'],
        ['Ja, ich habe einen Bruder und eine Schwester.', 'Yes, I have a brother and a sister.', 'Oui, j’ai un frère et une sœur.'],
        ['Nein, ich habe keine Geschwister.', 'No, I have no siblings.', 'Non, je n’ai pas de frères et sœurs.'],
        ['Wie viele Kinder hat sie?', 'How many children does she have?', 'Combien d’enfants a-t-elle ?'],
      ],
    ),
    fb(
      'sp-fam-e6',
      ['Ich habe ___ Bruder. (ein — accusative masculine)', 'Ich habe ___ Bruder. (ein — accusatif masculin)'],
      'einen',
      ['Masculine accusative: ein → einen.', 'Accusatif masculin : ein → einen.'],
    ),
    fb(
      'sp-fam-e7',
      ['Hast du Kinder? — Nein, ich habe ___ Kinder.', 'Hast du Kinder ? — Nein, ich habe ___ Kinder.'],
      'keine',
      ['Plural negation: keine.', 'Négation au pluriel : keine.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Extended family and status', 'Famille élargie et situation',
      'Grandparents, aunts, uncles, cousins — and who is married to whom.', 'Grands-parents, oncles, tantes, cousins — et qui est marié avec qui.',
    ),
    vocab('sp-familie-grosseltern', 'die Großeltern', 'the grandparents', 'les grands-parents', 'die', 'GROSS-el-tern', 'dee GROHS-el-tern', ['Meine Großeltern besuchen uns am Sonntag.', 'My grandparents visit us on Sunday.', 'Mes grands-parents nous rendent visite le dimanche.']),
    vocab('sp-familie-oma', 'die Oma', 'grandma', 'mamie', 'die', 'O-ma', 'dee OH-mah', ['Meine Oma backt sehr gut.', 'My grandma bakes very well.', 'Ma mamie fait très bien la pâtisserie.']),
    vocab('sp-familie-opa', 'der Opa', 'grandpa', 'papi', 'der', 'O-pa', 'dair OH-pah', ['Mein Opa liest die Zeitung.', 'My grandpa is reading the newspaper.', 'Mon papi lit le journal.']),
    vocab('sp-familie-tante', 'die Tante', 'the aunt', 'la tante', 'die', 'TAN-te', 'dee TAN-teh', ['Meine Tante wohnt in Berlin.', 'My aunt lives in Berlin.', 'Ma tante habite à Berlin.']),
    vocab('sp-familie-onkel', 'der Onkel', 'the uncle', 'l’oncle', 'der', 'ON-kel', 'dair ON-kel', ['Mein Onkel hat ein Restaurant.', 'My uncle has a restaurant.', 'Mon oncle a un restaurant.']),
    vocab('sp-familie-cousin', 'der Cousin', 'the (male) cousin', 'le cousin', 'der', 'ku-SENG', 'dair koo-ZANG', ['Mein Cousin ist so alt wie ich.', 'My cousin is as old as I am.', 'Mon cousin a le même âge que moi.']),
    vocab('sp-familie-cousine', 'die Cousine', 'the (female) cousin', 'la cousine', 'die', 'ku-SI-ne', 'dee koo-ZEE-neh', ['Meine Cousine studiert Medizin.', 'My cousin studies medicine.', 'Ma cousine étudie la médecine.']),
    vocab('sp-familie-enkel', 'das Enkelkind', 'the grandchild', 'le petit-enfant', 'das', 'EN-kel-kind', 'dahs EN-kel-kint', ['Das Enkelkind besucht die Großmutter.', 'The grandchild visits the grandmother.', 'Le petit-enfant rend visite à sa grand-mère.']),
    vocab('sp-familie-mann', 'der Mann', 'the husband, the man', 'le mari, l’homme', 'der', 'MAN', 'dair MAHN', ['Ihr Mann arbeitet bei einer Bank.', 'Her husband works at a bank.', 'Son mari travaille dans une banque.']),
    vocab('sp-familie-frau', 'die Frau', 'the wife, the woman', 'la femme, l’épouse', 'die', 'FRAU', 'dee FROW', ['Seine Frau ist Ärztin.', 'His wife is a doctor.', 'Sa femme est médecin.']),
    vocab('sp-familie-freund', 'der Freund', 'the friend, boyfriend', 'l’ami, le petit ami', 'der', 'FREUND', 'dair FROYNT', ['Mein Freund kommt aus Spanien.', 'My boyfriend comes from Spain.', 'Mon petit ami vient d’Espagne.']),
    vocab('sp-familie-freundin', 'die Freundin', 'the (female) friend, girlfriend', 'l’amie, la petite amie', 'die', 'FREUN-din', 'dee FROYN-din', ['Meine Freundin ist sehr nett.', 'My friend is very nice.', 'Mon amie est très gentille.']),
    vocab('sp-familie-verheiratet', 'verheiratet', 'married', 'marié(e)', null, 'ver-HEI-ra-tet', 'fair-HY-rah-tet', ['Sie sind seit zehn Jahren verheiratet.', 'They have been married for ten years.', 'Ils sont mariés depuis dix ans.']),
    vocab('sp-familie-ledig', 'ledig', 'single (unmarried)', 'célibataire', null, 'LE-dig', 'LAY-dikh', ['Mein Bruder ist noch ledig.', 'My brother is still single.', 'Mon frère est encore célibataire.']),
    vocab('sp-familie-geschieden', 'geschieden', 'divorced', 'divorcé(e)', null, 'ge-SCHIE-den', 'geh-SHEE-den', ['Meine Tante ist geschieden.', 'My aunt is divorced.', 'Ma tante est divorcée.']),
    vocab('sp-familie-heiraten', 'heiraten', 'to marry', 'se marier', null, 'HEI-ra-ten', 'HY-rah-ten', ['Sie heiraten im Mai.', 'They are getting married in May.', 'Ils se marient en mai.']),
    grammar(
      'sp-fam-plural',
      ['Plural of family words', 'Pluriel des mots de la famille'],
      [
        'Many family words have an irregular plural — learn them with the noun:\n\n- die Mutter → **die Mütter** (umlaut)\n- der Vater → **die Väter** (umlaut)\n- der Bruder → **die Brüder** (umlaut)\n- die Tochter → **die Töchter** (umlaut)\n- der Sohn → **die Söhne** (umlaut + -e)\n- die Schwester → **die Schwestern** (-n)\n- der Onkel → **die Onkel** (no change)\n- die Tante → **die Tanten** (-n)\n- das Kind → **die Kinder** (-er)\n- der Freund → **die Freunde** (-e)\n\n**Eltern, Großeltern, Geschwister** exist only in the **plural**: there is no *der Elter*. To say one sibling, use **der Bruder / die Schwester**.',
        'Beaucoup de mots de la famille ont un pluriel irrégulier — apprends-les avec le nom :\n\n- die Mutter → **die Mütter** (tréma)\n- der Vater → **die Väter** (tréma)\n- der Bruder → **die Brüder** (tréma)\n- die Tochter → **die Töchter** (tréma)\n- der Sohn → **die Söhne** (tréma + -e)\n- die Schwester → **die Schwestern** (-n)\n- der Onkel → **die Onkel** (inchangé)\n- die Tante → **die Tanten** (-n)\n- das Kind → **die Kinder** (-er)\n- der Freund → **die Freunde** (-e)\n\n**Eltern, Großeltern, Geschwister** n’existent qu’au **pluriel** : il n’y a pas de *der Elter*. Pour un seul frère ou une seule sœur, dis **der Bruder / die Schwester**.',
      ],
      [
        ['Ich habe zwei Brüder und drei Schwestern.', 'I have two brothers and three sisters.', 'J’ai deux frères et trois sœurs.'],
        ['Die Kinder spielen im Garten.', 'The children are playing in the garden.', 'Les enfants jouent dans le jardin.'],
        ['Meine Onkel und Tanten kommen zur Feier.', 'My uncles and aunts are coming to the party.', 'Mes oncles et tantes viennent à la fête.'],
      ],
    ),
    grammar(
      'sp-fam-status',
      ['Civil status and relationships', 'Situation familiale et relations'],
      [
        'To say your status, use **sein** + adjective. The adjective never takes an ending after *sein*:\n\n- Ich **bin** ledig. · Er **ist** verheiratet. · Sie **sind** geschieden.\n\nFor relationships you also need three verbs:\n\n- **heiraten** (to marry) — *Sie heiraten im Sommer.*\n- **sich verlieben in** (to fall in love with) — *Er verliebt sich in sie.*\n- **sich trennen** (to separate) — *Sie trennen sich.*\n\n**Mein Freund / meine Freundin** can mean “my friend” or “my boyfriend / girlfriend”. The context tells you which; for a platonic friend you can say **ein guter Freund**.',
        'Pour dire ta situation, utilise **sein** + adjectif. L’adjectif ne prend jamais de terminaison après *sein* :\n\n- Ich **bin** ledig. · Er **ist** verheiratet. · Sie **sind** geschieden.\n\nPour les relations, trois verbes sont utiles :\n\n- **heiraten** (se marier) — *Sie heiraten im Sommer.*\n- **sich verlieben in** (tomber amoureux de) — *Er verliebt sich in sie.*\n- **sich trennen** (se séparer) — *Sie trennen sich.*\n\n**Mein Freund / meine Freundin** peut signifier « mon ami(e) » ou « mon petit ami / ma petite amie ». Le contexte le précise ; pour un ami sans connotation amoureuse, dis **ein guter Freund**.',
      ],
      [
        ['Ich bin ledig, aber meine Schwester ist verheiratet.', 'I am single, but my sister is married.', 'Je suis célibataire, mais ma sœur est mariée.'],
        ['Meine Eltern sind seit zwanzig Jahren verheiratet.', 'My parents have been married for twenty years.', 'Mes parents sont mariés depuis vingt ans.'],
        ['Sie heiraten im Sommer.', 'They are getting married in the summer.', 'Ils se marient cet été.'],
      ],
    ),
    match(
      'sp-fam-e8',
      [
        ['die Großeltern', 'the grandparents', 'les grands-parents'],
        ['die Tante', 'the aunt', 'la tante'],
        ['der Onkel', 'the uncle', 'l’oncle'],
        ['die Cousine', 'the (female) cousin', 'la cousine'],
        ['verheiratet', 'married', 'marié(e)'],
        ['geschieden', 'divorced', 'divorcé(e)'],
      ],
      ['Match the extended family and status words.', 'Associe les mots de la famille élargie et de la situation.'],
    ),
    mc(
      'sp-fam-e9',
      ['What is the plural of "die Tochter"?', 'Quel est le pluriel de « die Tochter » ?'],
      ['die Töchter', 'die Tochters', 'die Töchtern'], ['die Töchter', 'die Tochters', 'die Töchtern'], 0,
      ['Tochter → Töchter: umlaut, no ending.', 'Tochter → Töchter : tréma, pas de terminaison.'],
    ),
    mc(
      'sp-fam-e10',
      ['What is the plural of "das Kind"?', 'Quel est le pluriel de « das Kind » ?'],
      ['die Kinder', 'die Kinds', 'die Kinden'], ['die Kinder', 'die Kinds', 'die Kinden'], 0,
      ['Kind → Kinder (-er).', 'Kind → Kinder (-er).'],
    ),
    ap('sp-fam-e11', 'Tante', 'die', ['Words ending in -e are mostly feminine.', 'Les mots en -e sont majoritairement féminins.']),
    ap('sp-fam-e12', 'Onkel', 'der', ['Male relatives take der.', 'Les parents de sexe masculin prennent der.']),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Possessives: mein, dein, sein, ihr', 'Les possessifs : mein, dein, sein, ihr',
      'Who does it belong to? The owner picks the stem, the noun picks the ending.', 'À qui est-ce ? Le possesseur choisit le radical, le nom choisit la terminaison.',
    ),
    grammar(
      'sp-fam-possessive-stems',
      ['The possessive stems', 'Les radicaux possessifs'],
      [
        'Each person has its own possessive stem:\n\n- ich → **mein**\n- du → **dein**\n- er / es → **sein**\n- sie (she) → **ihr**\n- wir → **unser**\n- ihr (you, plural) → **euer**\n- sie (they) → **ihr**\n- Sie (formal) → **Ihr** (capital)\n\nThe stem depends on the **owner**, not on the noun: *Paul und seine Mutter* (his mother), *Anna und ihre Mutter* (her mother).',
        'Chaque personne a son radical possessif :\n\n- ich → **mein**\n- du → **dein**\n- er / es → **sein**\n- sie (elle) → **ihr**\n- wir → **unser**\n- ihr (vous, pluriel) → **euer**\n- sie (ils) → **ihr**\n- Sie (politesse) → **Ihr** (majuscule)\n\nLe radical dépend du **possesseur**, pas du nom : *Paul und seine Mutter* (sa mère à lui), *Anna und ihre Mutter* (sa mère à elle).',
      ],
      [
        ['Das ist mein Vater.', 'That is my father.', 'Voici mon père.'],
        ['Wie heißt deine Schwester?', 'What is your sister called?', 'Comment s’appelle ta sœur ?'],
        ['Paul liebt seine Familie.', 'Paul loves his family.', 'Paul aime sa famille.'],
        ['Anna besucht ihren Bruder.', 'Anna visits her brother.', 'Anna rend visite à son frère.'],
      ],
    ),
    grammar(
      'sp-fam-possessive-endings',
      ['The possessive endings', 'Les terminaisons des possessifs'],
      [
        'Possessives take the **same endings as ein / kein**:\n\n- **masculine**: nominative **mein Vater** (no ending) · accusative **meinen Vater** (-en)\n- **feminine**: **meine Mutter** (-e) in both cases\n- **neuter**: **mein Kind** (no ending) in both cases\n- **plural**: **meine Eltern** (-e) in both cases\n\nSo only the **masculine accusative** changes: *Ich besuche **meinen** Onkel.* Careful with **euer**: it drops its second *e* before an ending (**eure** Tante, **euren** Onkel), while **unser** keeps its letters (**unsere** Tante, **unseren** Onkel).',
        'Les possessifs prennent les **mêmes terminaisons que ein / kein** :\n\n- **masculin** : nominatif **mein Vater** (sans terminaison) · accusatif **meinen Vater** (-en)\n- **féminin** : **meine Mutter** (-e) aux deux cas\n- **neutre** : **mein Kind** (sans terminaison) aux deux cas\n- **pluriel** : **meine Eltern** (-e) aux deux cas\n\nSeul le **masculin à l’accusatif** change donc : *Ich besuche **meinen** Onkel.* Attention à **euer** : il perd son deuxième *e* devant une terminaison (**eure** Tante, **euren** Onkel), alors que **unser** garde ses lettres (**unsere** Tante, **unseren** Onkel).',
      ],
      [
        ['Mein Bruder wohnt in Hamburg.', 'My brother lives in Hamburg.', 'Mon frère habite à Hambourg.'],
        ['Ich besuche meinen Bruder.', 'I am visiting my brother.', 'Je rends visite à mon frère.'],
        ['Unsere Eltern sind zu Hause.', 'Our parents are at home.', 'Nos parents sont à la maison.'],
        ['Wo ist euer Kind?', 'Where is your child?', 'Où est votre enfant ?'],
      ],
    ),
    fb(
      'sp-fam-e13',
      ['Das ist ___ Mutter. (ich → my)', 'Das ist ___ Mutter. (ich → mon/ma)'],
      'meine',
      ['Mutter is feminine → mein + e.', 'Mutter est féminin → mein + e.'],
    ),
    fb(
      'sp-fam-e14',
      ['Ich besuche ___ Onkel. (ich — accusative masculine)', 'Ich besuche ___ Onkel. (ich — accusatif masculin)'],
      'meinen',
      ['Masculine accusative: -en.', 'Accusatif masculin : -en.'],
    ),
    fb(
      'sp-fam-e15',
      ['Wie alt ist ___ Bruder? (du)', 'Wie alt ist ___ Bruder ? (du)'],
      'dein',
      ['du → dein; masculine nominative has no ending.', 'du → dein ; le masculin nominatif n’a pas de terminaison.'],
    ),
    fb(
      'sp-fam-e16',
      ['Paul besucht ___ Eltern. (er → his)', 'Paul besucht ___ Eltern. (er → ses)'],
      'seine',
      ['er → sein; plural takes -e.', 'er → sein ; le pluriel prend -e.'],
    ),
    mc(
      'sp-fam-e17',
      ['Anna visits her mother. Which sentence?', 'Anna rend visite à sa mère. Quelle phrase ?'],
      ['Anna besucht ihre Mutter.', 'Anna besucht seine Mutter.', 'Anna besucht ihr Mutter.'],
      ['Anna besucht ihre Mutter.', 'Anna besucht seine Mutter.', 'Anna besucht ihr Mutter.'], 0,
      ['The owner is a woman → ihr; feminine noun → ihre.', 'La possesseuse est une femme → ihr ; nom féminin → ihre.'],
    ),
    mc(
      'sp-fam-e18',
      ['"We love our children." →', '« Nous aimons nos enfants. » →'],
      ['Wir lieben unsere Kinder.', 'Wir lieben unser Kinder.', 'Wir lieben uns Kinder.'],
      ['Wir lieben unsere Kinder.', 'Wir lieben unser Kinder.', 'Wir lieben uns Kinder.'], 0,
      ['Plural takes -e: unsere Kinder.', 'Le pluriel prend -e : unsere Kinder.'],
    ),
    wo('sp-fam-e19', ['Mutter', 'Meine', 'Lehrerin', 'ist'], ['Meine', 'Mutter', 'ist', 'Lehrerin'], ['Subject, verb, then the job.', 'Sujet, verbe, puis le métier.']),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Whose is it? The genitive -s', 'À qui est-ce ? Le -s du génitif',
      'Annas Mutter, Toms Bruder — the easy way to show belonging.', 'Annas Mutter, Toms Bruder — la façon simple d’exprimer l’appartenance.',
    ),
    grammar(
      'sp-fam-genitive-s',
      ['First name + -s', 'Prénom + -s'],
      [
        'With first names, German adds **-s** to the owner and **puts it before** the noun — **no apostrophe**:\n\n- **Annas** Mutter (Anna’s mother)\n- **Toms** Bruder (Tom’s brother)\n- **Evas** Kinder (Eva’s children)\n\nWhen a name already ends in **-s, -ß, -x or -z**, add an **apostrophe** only: **Max’** Schwester, **Hans’** Vater.\n\nThe **spoken** alternative is **von + dative**: *die Mutter **von** Anna*. It is also the usual choice for common nouns in everyday speech: *der Bruder **von** meinem Freund*.',
        'Avec les prénoms, l’allemand ajoute **-s** au possesseur et le **place avant** le nom — **sans apostrophe** :\n\n- **Annas** Mutter (la mère d’Anna)\n- **Toms** Bruder (le frère de Tom)\n- **Evas** Kinder (les enfants d’Eva)\n\nQuand le prénom se termine déjà par **-s, -ß, -x ou -z**, on met seulement une **apostrophe** : **Max’** Schwester, **Hans’** Vater.\n\nL’alternative **orale** est **von + datif** : *die Mutter **von** Anna*. C’est aussi le choix habituel à l’oral pour les noms communs : *der Bruder **von** meinem Freund*.',
      ],
      [
        ['Das ist Annas Mutter.', 'That is Anna’s mother.', 'C’est la mère d’Anna.'],
        ['Toms Schwester wohnt in Wien.', 'Tom’s sister lives in Vienna.', 'La sœur de Tom habite à Vienne.'],
        ['Max’ Vater ist Arzt.', 'Max’s father is a doctor.', 'Le père de Max est médecin.'],
        ['Die Mutter von Anna ist nett.', 'Anna’s mother is nice.', 'La mère d’Anna est gentille.'],
      ],
    ),
    mc(
      'sp-fam-e20',
      ['"Tom’s brother" in German is…', '« Le frère de Tom » en allemand, c’est…'],
      ['Toms Bruder', 'Tom’s Bruder', 'der Bruder Tom'], ['Toms Bruder', 'Tom’s Bruder', 'der Bruder Tom'], 0,
      ['Name + -s, no apostrophe, before the noun.', 'Prénom + -s, sans apostrophe, avant le nom.'],
    ),
    mc(
      'sp-fam-e21',
      ['"Max’s sister" — the name ends in -x. Which is correct?', '« La sœur de Max » — le prénom finit par -x. Laquelle est correcte ?'],
      ['Max’ Schwester', 'Maxs Schwester', 'Max’s Schwester'], ['Max’ Schwester', 'Maxs Schwester', 'Max’s Schwester'], 0,
      ['After -s, -ß, -x, -z: only an apostrophe.', 'Après -s, -ß, -x, -z : seulement une apostrophe.'],
    ),
    fb(
      'sp-fam-e22',
      ['Das ist ___ Bruder. (Peter + -s)', 'Das ist ___ Bruder. (Peter + -s)'],
      'Peters',
      ['Name + s: Peters.', 'Prénom + s : Peters.'],
    ),
    fb(
      'sp-fam-e23',
      ['Das ist die Schwester ___ Anna. (von-phrase)', 'Das ist die Schwester ___ Anna. (tournure en von)'],
      'von',
      ['The spoken alternative: von + name.', 'L’alternative orale : von + prénom.'],
    ),
    wo('sp-fam-e24', ['Annas', 'wohnt', 'Mutter', 'in', 'Köln'], ['Annas', 'Mutter', 'wohnt', 'in', 'Köln'], ['Owner + -s comes before the noun.', 'Possesseur + -s avant le nom.']),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Talking about your family', 'Parler de sa famille',
      'Put everything together in a real conversation.', 'Rassemble tout dans une vraie conversation.',
    ),
    grammar(
      'sp-fam-dialogue',
      ['Dialogue: Meine Familie', 'Dialogue : Meine Familie'],
      [
        'A short conversation between **Lena** and **Samuel**. Read it aloud and notice the possessives and the accusative:\n\n- **Lena:** Hast du Geschwister, Samuel?\n- **Samuel:** Ja, ich habe **eine** Schwester und **einen** Bruder. Und du?\n- **Lena:** Ich habe nur **einen** Bruder. **Er** heißt Jonas.\n- **Samuel:** Wohnen **deine** Eltern auch in Berlin?\n- **Lena:** Nein, **meine** Eltern wohnen in Leipzig. **Meine** Oma lebt auch dort.\n- **Samuel:** Und **dein** Bruder? Ist **er** verheiratet?\n- **Lena:** Nein, **er** ist noch ledig, aber **seine** Freundin ist sehr nett.\n\nUseful questions: **Wie viele …?**, **Wie alt ist …?**, **Was ist … von Beruf?**',
        'Une courte conversation entre **Lena** et **Samuel**. Lis-la à voix haute et observe les possessifs et l’accusatif :\n\n- **Lena :** Hast du Geschwister, Samuel ?\n- **Samuel :** Ja, ich habe **eine** Schwester und **einen** Bruder. Und du ?\n- **Lena :** Ich habe nur **einen** Bruder. **Er** heißt Jonas.\n- **Samuel :** Wohnen **deine** Eltern auch in Berlin ?\n- **Lena :** Nein, **meine** Eltern wohnen in Leipzig. **Meine** Oma lebt auch dort.\n- **Samuel :** Und **dein** Bruder ? Ist **er** verheiratet ?\n- **Lena :** Nein, **er** ist noch ledig, aber **seine** Freundin ist sehr nett.\n\nQuestions utiles : **Wie viele …?**, **Wie alt ist …?**, **Was ist … von Beruf?**',
      ],
      [
        ['Hast du Geschwister, Samuel?', 'Do you have siblings, Samuel?', 'As-tu des frères et sœurs, Samuel ?'],
        ['Ich habe eine Schwester und einen Bruder.', 'I have a sister and a brother.', 'J’ai une sœur et un frère.'],
        ['Meine Eltern wohnen in Leipzig.', 'My parents live in Leipzig.', 'Mes parents habitent à Leipzig.'],
        ['Er ist noch ledig, aber seine Freundin ist sehr nett.', 'He is still single, but his girlfriend is very nice.', 'Il est encore célibataire, mais sa copine est très gentille.'],
      ],
    ),
    wo('sp-fam-e25', ['du', 'Hast', 'Geschwister'], ['Hast', 'du', 'Geschwister'], ['A yes/no question starts with the verb.', 'Une question fermée commence par le verbe.']),
    wo('sp-fam-e26', ['Eltern', 'wohnen', 'Meine', 'in', 'Leipzig'], ['Meine', 'Eltern', 'wohnen', 'in', 'Leipzig'], ['Possessive + noun, then verb in 2nd position.', 'Possessif + nom, puis verbe en 2e position.']),
    lc(
      'sp-fam-e27',
      ['Listen. How many siblings does the speaker have?', 'Écoute. Combien de frères et sœurs la personne a-t-elle ?'],
      'Ich habe zwei Brüder und eine Schwester.',
      ['Three', 'Two', 'One'], ['Trois', 'Deux', 'Un'], 0,
      ['Count: zwei Brüder + eine Schwester.', 'Compte : zwei Brüder + eine Schwester.'],
    ),

    wrapup(
      '**Family words** — die Mutter, der Vater, der Bruder, die Schwester, der Sohn, die Tochter, das Kind; die Eltern, die Großeltern and die Geschwister are plural only.\n\n**Plurals** — Mutter → Mütter, Bruder → Brüder, Tochter → Töchter, Sohn → Söhne, Kind → Kinder, Tante → Tanten, Onkel → Onkel.\n\n**Status** — ledig, verheiratet, geschieden with sein; heiraten.\n\n**Possessives** — mein, dein, sein, ihr, unser, euer, Ihr. Endings like ein: only the masculine accusative changes (meinen Bruder).\n\n**Belonging** — Annas Mutter (no apostrophe), Max’ Schwester (after -s/-x/-z), or die Mutter von Anna.',
      '**Mots de la famille** — die Mutter, der Vater, der Bruder, die Schwester, der Sohn, die Tochter, das Kind ; die Eltern, die Großeltern et die Geschwister n’existent qu’au pluriel.\n\n**Pluriels** — Mutter → Mütter, Bruder → Brüder, Tochter → Töchter, Sohn → Söhne, Kind → Kinder, Tante → Tanten, Onkel → Onkel.\n\n**Situation** — ledig, verheiratet, geschieden avec sein ; heiraten.\n\n**Possessifs** — mein, dein, sein, ihr, unser, euer, Ihr. Terminaisons comme ein : seul le masculin à l’accusatif change (meinen Bruder).\n\n**Appartenance** — Annas Mutter (sans apostrophe), Max’ Schwester (après -s/-x/-z), ou die Mutter von Anna.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Family & relationships', 'Quiz final : famille & relations'),
    match(
      'sp-fam-q1',
      [
        ['die Eltern', 'the parents', 'les parents'],
        ['der Sohn', 'the son', 'le fils'],
        ['die Tante', 'the aunt', 'la tante'],
        ['ledig', 'single', 'célibataire'],
        ['verheiratet', 'married', 'marié(e)'],
      ],
      ['Match each word with its translation.', 'Associe chaque mot à sa traduction.'],
    ),
    ap('sp-fam-q2', 'Schwester', 'die', ['Schwester is feminine.', 'Schwester est féminin.']),
    ap('sp-fam-q3', 'Bruder', 'der', ['Bruder is masculine.', 'Bruder est masculin.']),
    mc(
      'sp-fam-q4',
      ['What is the plural of "der Vater"?', 'Quel est le pluriel de « der Vater » ?'],
      ['die Väter', 'die Vater', 'die Vätern'], ['die Väter', 'die Vater', 'die Vätern'], 0,
      ['Vater → Väter (umlaut).', 'Vater → Väter (tréma).'],
    ),
    fb(
      'sp-fam-q5',
      ['Ich habe ___ Schwester. (ein — feminine)', 'Ich habe ___ Schwester. (ein — féminin)'],
      'eine',
      ['Feminine: eine.', 'Féminin : eine.'],
    ),
    fb(
      'sp-fam-q6',
      ['Hast du Kinder? — Nein, ich habe ___ Kinder.', 'Hast du Kinder ? — Nein, ich habe ___ Kinder.'],
      'keine',
      ['Plural negation: keine.', 'Négation au pluriel : keine.'],
    ),
    fb(
      'sp-fam-q7',
      ['Ich besuche ___ Großmutter. (ich — feminine)', 'Ich besuche ___ Großmutter. (ich — féminin)'],
      'meine',
      ['Feminine: mein + e.', 'Féminin : mein + e.'],
    ),
    fb(
      'sp-fam-q8',
      ['Ich liebe ___ Bruder. (ich — accusative masculine)', 'Ich liebe ___ Bruder. (ich — accusatif masculin)'],
      'meinen',
      ['Masculine accusative: -en.', 'Accusatif masculin : -en.'],
    ),
    mc(
      'sp-fam-q9',
      ['Eva and her father. Which sentence?', 'Eva et son père. Quelle phrase ?'],
      ['Eva besucht ihren Vater.', 'Eva besucht seinen Vater.', 'Eva besucht ihre Vater.'],
      ['Eva besucht ihren Vater.', 'Eva besucht seinen Vater.', 'Eva besucht ihre Vater.'], 0,
      ['Female owner → ihr; masculine accusative → ihren.', 'Possesseuse → ihr ; masculin accusatif → ihren.'],
    ),
    mc(
      'sp-fam-q10',
      ['"Anna’s mother" →', '« La mère d’Anna » →'],
      ['Annas Mutter', 'Anna’s Mutter', 'Anna Mutter'], ['Annas Mutter', 'Anna’s Mutter', 'Anna Mutter'], 0,
      ['Name + -s, no apostrophe.', 'Prénom + -s, sans apostrophe.'],
    ),
    mc(
      'sp-fam-q11',
      ['Which person is not a blood relative of yours?', 'Quelle personne n’est pas de ta famille de sang ?'],
      ['der Mann (husband)', 'die Mutter', 'der Bruder'], ['der Mann (mari)', 'die Mutter', 'der Bruder'], 0,
      ['A husband joins the family by marriage.', 'Un mari entre dans la famille par le mariage.'],
    ),
    wo('sp-fam-q12', ['Eltern', 'Meine', 'in', 'wohnen', 'Kribi'], ['Meine', 'Eltern', 'wohnen', 'in', 'Kribi'], ['Verb in 2nd position.', 'Verbe en 2e position.']),
    wo('sp-fam-q13', ['Bruder', 'Toms', 'ledig', 'ist'], ['Toms', 'Bruder', 'ist', 'ledig'], ['Name + s comes before the noun.', 'Prénom + s avant le nom.']),
    lc(
      'sp-fam-q14',
      ['Listen. Who is the speaker talking about?', 'Écoute. De qui parle la personne ?'],
      'Meine Großeltern wohnen auf dem Land.',
      ['Her grandparents', 'Her parents', 'Her cousins'], ['Ses grands-parents', 'Ses parents', 'Ses cousins'], 0,
      ['Listen for "Großeltern".', 'Écoute « Großeltern ».'],
    ),
  ],
});

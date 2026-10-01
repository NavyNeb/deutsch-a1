import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const negation = defineSpecial({
  slug: 'negation',
  number: 15,
  group: 'sentences',
  levels: ['A1', 'B1'],
  related: ['l8', 'l15', 'b1-l12', 'b1-l20'],
  title: ['Verneinung', 'Negation', 'La négation'],
  theme: [
    'nicht or kein, where nicht goes, nie / niemand / nichts, noch nicht / nicht mehr and answering with doch',
    'nicht ou kein, place de nicht, nie / niemand / nichts, noch nicht / nicht mehr et réponse avec doch',
  ],
  goals: [
    'Choose between nicht and kein-',
    'Put nicht in the right place in the sentence',
    'Use nie, niemand, nichts, nirgendwo and weder … noch',
    'Say "not yet", "no longer" and "not … but …"',
    'Answer negative questions with doch or nein',
  ],
  goalsFr: [
    'Choisir entre nicht et kein-',
    'Placer nicht au bon endroit dans la phrase',
    'Utiliser nie, niemand, nichts, nirgendwo et weder … noch',
    'Dire « pas encore », « plus » et « non pas … mais … »',
    'Répondre aux questions négatives avec doch ou nein',
  ],
  steps: [
    intro(
      'Nein, das stimmt nicht!', 'Non, ce n’est pas vrai !',
      'Saying "no" in German is easy — saying it **correctly** takes a little method. Two small words, **nicht** and **kein-**, do most of the work, and a family of "never / nobody / nothing" words does the rest.',
      'Dire « non » en allemand est facile — le dire **correctement** demande un peu de méthode. Deux petits mots, **nicht** et **kein-**, font l’essentiel du travail, et une famille de mots « jamais / personne / rien » fait le reste.',
      [
        'Decide between nicht and kein- in two seconds',
        'Know exactly where nicht stands',
        'Use the negative words nie, niemand, nichts',
        'Contradict politely with doch',
      ],
      [
        'Décider entre nicht et kein- en deux secondes',
        'Savoir exactement où se place nicht',
        'Utiliser les mots négatifs nie, niemand, nichts',
        'Contredire poliment avec doch',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'nicht or kein-?', 'nicht ou kein- ?',
      'One question decides: is there a noun without an article, or with ein-?', 'Une seule question décide : y a-t-il un nom sans article, ou avec ein- ?',
    ),
    grammar(
      'sp-neg-kein',
      ['kein- negates the noun', 'kein- nie le nom'],
      [
        '**kein-** negates a **noun** that has **no article** or the **indefinite article** (*ein-*). Everything else is negated with **nicht**.\n\n- Hast du **einen** Bruder? — Nein, ich habe **keinen** Bruder.\n- Sie hat **Zeit**. → Sie hat **keine** Zeit.\n- Ich habe **Hunger**. → Ich habe **keinen** Hunger.\n\n**kein-** takes the same endings as *ein-*: **kein** Mann / **keinen** Mann (accusative) · **keine** Frau · **kein** Kind · **keine** Kinder.\n\nWith the **definite article** or a **possessive** the noun is *not* negated by kein-: use **nicht**.\n\n- Das ist **das** Buch. → Das ist **nicht** das Buch.\n- Das ist **mein** Handy. → Das ist **nicht** mein Handy.',
        '**kein-** nie un **nom** qui n’a **pas d’article** ou qui a l’**article indéfini** (*ein-*). Tout le reste se nie avec **nicht**.\n\n- Hast du **einen** Bruder ? — Nein, ich habe **keinen** Bruder.\n- Sie hat **Zeit**. → Sie hat **keine** Zeit.\n- Ich habe **Hunger**. → Ich habe **keinen** Hunger.\n\n**kein-** prend les mêmes terminaisons que *ein-* : **kein** Mann / **keinen** Mann (accusatif) · **keine** Frau · **kein** Kind · **keine** Kinder.\n\nAvec l’**article défini** ou un **possessif**, le nom n’est *pas* nié par kein- : on emploie **nicht**.\n\n- Das ist **das** Buch. → Das ist **nicht** das Buch.\n- Das ist **mein** Handy. → Das ist **nicht** mein Handy.',
      ],
      [
        ['Ich habe keinen Bruder.', 'I do not have a brother.', 'Je n’ai pas de frère.'],
        ['Wir haben heute keine Zeit.', 'We have no time today.', 'Nous n’avons pas le temps aujourd’hui.'],
        ['Das ist nicht mein Handy.', 'That is not my phone.', 'Ce n’est pas mon portable.'],
        ['Kinder? Nein, wir haben keine Kinder.', 'Children? No, we have no children.', 'Des enfants ? Non, nous n’avons pas d’enfants.'],
      ],
    ),
    vocab('sp-negation-kein', 'kein', 'no, not a, not any', 'aucun, pas de', null, 'KEIN', 'KINE', ['Ich habe kein Auto.', 'I do not have a car.', 'Je n’ai pas de voiture.']),
    vocab('sp-negation-nicht', 'nicht', 'not', 'ne … pas', null, 'NICHT', 'NIKHT', ['Das ist nicht teuer.', 'That is not expensive.', 'Ce n’est pas cher.']),
    mc(
      'sp-neg-e1',
      ['"Ich habe ___ Auto." (neuter noun, no article)', '« Ich habe ___ Auto. » (nom neutre, sans article)'],
      ['kein', 'keinen', 'nicht'], ['kein', 'keinen', 'nicht'], 0,
      ['Das Auto is neuter: nominative and accusative are both "kein".', 'Das Auto est neutre : nominatif et accusatif font tous deux « kein ».'],
    ),
    fb(
      'sp-neg-e2',
      ['Er hat ___ Bruder. (kein-, masculine accusative)', 'Er hat ___ Bruder. (kein-, accusatif masculin)'],
      'keinen',
      ['Accusative masculine: kein + en.', 'Accusatif masculin : kein + en.'],
    ),
    mc(
      'sp-neg-e3',
      ['"Das ist ___ mein Handy."', '« Das ist ___ mein Handy. »'],
      ['kein', 'nicht', 'keine'], ['kein', 'nicht', 'keine'], 1,
      ['After a possessive (mein-) you negate with nicht.', 'Après un possessif (mein-), on nie avec nicht.'],
    ),
    fb(
      'sp-neg-e4',
      ['Wir haben heute ___ Zeit. (kein-)', 'Wir haben heute ___ Zeit. (kein-)'],
      'keine',
      ['Zeit is feminine: keine.', 'Zeit est féminin : keine.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Where does nicht go?', 'Où se place nicht ?',
      'Before the word it negates — or at the end for the whole sentence.', 'Devant le mot qu’il nie — ou à la fin pour toute la phrase.',
    ),
    grammar(
      'sp-neg-nicht',
      ['The position of nicht', 'La place de nicht'],
      [
        '**nicht** stands **in front of the word or group it negates**. Three situations cover almost everything:\n\n1. **The whole sentence** (the verb is negated): **nicht** goes to the **end**.\n   - Ich kenne ihn **nicht**. · Er arbeitet **nicht**.\n2. **Adjective, adverb, place or prepositional phrase**: **nicht** stands **before** it.\n   - Das ist **nicht** gut. · Ich wohne **nicht** in Berlin. · Wir fahren **nicht** nach Paris.\n3. **Sentence bracket** (modal + infinitive, Perfekt, separable verb): **nicht** stands **before the second part** of the bracket.\n   - Ich kann heute **nicht** kommen. · Ich habe das **nicht** verstanden. · Er steht **nicht** auf.\n\nTo negate **only one part**, put **nicht** right before it: Ich fahre **nicht heute**, sondern morgen.',
        '**nicht** se place **devant le mot ou le groupe qu’il nie**. Trois situations couvrent presque tout :\n\n1. **Toute la phrase** (le verbe est nié) : **nicht** va à la **fin**.\n   - Ich kenne ihn **nicht**. · Er arbeitet **nicht**.\n2. **Adjectif, adverbe, lieu ou groupe prépositionnel** : **nicht** se place **devant**.\n   - Das ist **nicht** gut. · Ich wohne **nicht** in Berlin. · Wir fahren **nicht** nach Paris.\n3. **Cadre de la phrase** (modal + infinitif, Perfekt, verbe séparable) : **nicht** se place **devant la 2e partie** du cadre.\n   - Ich kann heute **nicht** kommen. · Ich habe das **nicht** verstanden. · Er steht **nicht** auf.\n\nPour nier **une seule partie**, mets **nicht** juste devant : Ich fahre **nicht heute**, sondern morgen.',
      ],
      [
        ['Ich kenne ihn nicht.', 'I do not know him.', 'Je ne le connais pas.'],
        ['Das Essen ist nicht gut.', 'The food is not good.', 'La nourriture n’est pas bonne.'],
        ['Ich kann heute nicht kommen.', 'I cannot come today.', 'Je ne peux pas venir aujourd’hui.'],
        ['Er hat das nicht verstanden.', 'He did not understand that.', 'Il n’a pas compris cela.'],
      ],
      'satzklammer',
    ),
    vocab('sp-negation-verneinen', 'verneinen', 'to negate, to deny', 'nier', null, 'ver-NEI-nen', 'fer-NYE-nen', ['Du musst den Satz verneinen.', 'You have to negate the sentence.', 'Tu dois nier la phrase.']),
    vocab('sp-negation-verstehen', 'verstehen', 'to understand', 'comprendre', null, 'ver-STE-hen', 'fer-SHTAY-en', ['Ich verstehe das nicht.', 'I do not understand that.', 'Je ne comprends pas cela.']),
    wo('sp-neg-e5', ['nicht', 'Ich', 'ihn', 'kenne'], ['Ich', 'kenne', 'ihn', 'nicht'], ['Whole sentence negated: nicht goes last.', 'Toute la phrase est niée : nicht va à la fin.']),
    wo('sp-neg-e6', ['kann', 'Ich', 'kommen', 'nicht', 'heute'], ['Ich', 'kann', 'heute', 'nicht', 'kommen'], ['nicht stands before the infinitive at the end of the bracket.', 'nicht se place devant l’infinitif à la fin du cadre.']),
    mc(
      'sp-neg-e7',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Das Essen ist nicht gut.', 'Das Essen nicht ist gut.', 'Das Essen ist gut nicht.'],
      ['Das Essen ist nicht gut.', 'Das Essen nicht ist gut.', 'Das Essen ist gut nicht.'], 0,
      ['nicht stands before the adjective, and the verb stays in position 2.', 'nicht se place devant l’adjectif, et le verbe reste en position 2.'],
    ),
    fb(
      'sp-neg-e8',
      ['Er steht heute ___ auf. (not)', 'Er steht heute ___ auf. (pas)'],
      'nicht',
      ['nicht goes before the separable prefix at the end.', 'nicht va devant le préfixe séparable à la fin.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'never, nobody, nothing', 'jamais, personne, rien',
      'Negative words that already contain the "no".', 'Des mots négatifs qui contiennent déjà le « non ».',
    ),
    grammar(
      'sp-neg-words',
      ['The negative word family', 'La famille des mots négatifs'],
      [
        'Each positive word has a negative partner:\n\n- **immer** (always) ↔ **nie / niemals** (never)\n- **jemand** (somebody) ↔ **niemand** (nobody)\n- **etwas** (something) ↔ **nichts** (nothing)\n- **irgendwo** (somewhere) ↔ **nirgends / nirgendwo** (nowhere)\n- **sowohl … als auch** (both … and) ↔ **weder … noch** (neither … nor)\n\n**niemand** declines: **niemand** (nom.), **niemanden** (acc.), **niemandem** (dat.).\n\nThese words already carry the negation, so **never add nicht or kein-**:\n\n- Ich habe **nichts** gekauft. (not "nicht nichts")\n- **Niemand** ist zu Hause.\n- Ich war **nie** in Wien.\n- Ich mag **weder** Fisch **noch** Fleisch.',
        'Chaque mot positif a un partenaire négatif :\n\n- **immer** (toujours) ↔ **nie / niemals** (jamais)\n- **jemand** (quelqu’un) ↔ **niemand** (personne)\n- **etwas** (quelque chose) ↔ **nichts** (rien)\n- **irgendwo** (quelque part) ↔ **nirgends / nirgendwo** (nulle part)\n- **sowohl … als auch** (aussi bien … que) ↔ **weder … noch** (ni … ni)\n\n**niemand** se décline : **niemand** (nom.), **niemanden** (acc.), **niemandem** (dat.).\n\nCes mots portent déjà la négation, donc **n’ajoute jamais nicht ni kein-** :\n\n- Ich habe **nichts** gekauft. (pas « nicht nichts »)\n- **Niemand** ist zu Hause.\n- Ich war **nie** in Wien.\n- Ich mag **weder** Fisch **noch** Fleisch.',
      ],
      [
        ['Ich war noch nie in Wien.', 'I have never been to Vienna.', 'Je ne suis encore jamais allé à Vienne.'],
        ['Niemand hat angerufen.', 'Nobody called.', 'Personne n’a appelé.'],
        ['Im Kühlschrank ist nichts.', 'There is nothing in the fridge.', 'Il n’y a rien dans le frigo.'],
        ['Ich finde meinen Schlüssel nirgendwo.', 'I cannot find my key anywhere.', 'Je ne trouve ma clé nulle part.'],
      ],
    ),
    vocab('sp-negation-nie', 'nie', 'never', 'jamais', null, 'NIE', 'NEE', ['Ich trinke nie Kaffee.', 'I never drink coffee.', 'Je ne bois jamais de café.']),
    vocab('sp-negation-niemand', 'niemand', 'nobody', 'personne', null, 'NIE-mand', 'NEE-mahnt', ['Niemand weiß es.', 'Nobody knows.', 'Personne ne le sait.']),
    vocab('sp-negation-nichts', 'nichts', 'nothing', 'rien', null, 'NICHTS', 'NIKHTS', ['Ich habe nichts gehört.', 'I heard nothing.', 'Je n’ai rien entendu.']),
    vocab('sp-negation-nirgendwo', 'nirgendwo', 'nowhere', 'nulle part', null, 'NIR-gend-wo', 'NEER-gent-voh', ['Er ist nirgendwo zu finden.', 'He is nowhere to be found.', 'Il est introuvable.']),
    match(
      'sp-neg-e9',
      [
        ['nie', 'never', 'jamais'],
        ['niemand', 'nobody', 'personne'],
        ['nichts', 'nothing', 'rien'],
        ['nirgendwo', 'nowhere', 'nulle part'],
        ['weder … noch', 'neither … nor', 'ni … ni'],
      ],
      ['Match each negative word with its meaning.', 'Associe chaque mot négatif à son sens.'],
    ),
    fb(
      'sp-neg-e10',
      ['Ich habe heute ___ gegessen. (nothing)', 'Ich habe heute ___ gegessen. (rien)'],
      'nichts',
      ['The negative partner of "etwas".', 'Le partenaire négatif de « etwas ».'],
    ),
    mc(
      'sp-neg-e11',
      ['"___ ist im Büro. Alle sind im Urlaub."', '« ___ ist im Büro. Alle sind im Urlaub. »'],
      ['Niemand', 'Nichts', 'Nie'], ['Niemand', 'Nichts', 'Nie'], 0,
      ['Persons → niemand.', 'Des personnes → niemand.'],
    ),
    mc(
      'sp-neg-e12',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich habe niemanden gesehen.', 'Ich habe nicht niemanden gesehen.', 'Ich habe nicht jemanden nicht gesehen.'],
      ['Ich habe niemanden gesehen.', 'Ich habe nicht niemanden gesehen.', 'Ich habe nicht jemanden nicht gesehen.'], 0,
      ['"niemand" is already negative — no extra nicht.', '« niemand » est déjà négatif — pas de nicht en plus.'],
    ),
    fb(
      'sp-neg-e13',
      ['Ich sehe ___. (niemand — accusative)', 'Ich sehe ___. (niemand — accusatif)'],
      'niemanden',
      ['Accusative: niemand + en.', 'Accusatif : niemand + en.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'not yet, no longer, not … but', 'pas encore, plus, non pas … mais',
      'Small combinations that change the meaning.', 'De petites combinaisons qui changent le sens.',
    ),
    grammar(
      'sp-neg-time',
      ['noch nicht · nicht mehr · noch kein-', 'noch nicht · nicht mehr · noch kein-'],
      [
        'Time words combine with the negation:\n\n- **noch nicht** — *not yet* (the answer to **schon**): Hast du schon gegessen? — Nein, **noch nicht**.\n- **nicht mehr** — *no longer*: Er wohnt **nicht mehr** hier.\n- **noch kein-** — *not any yet*: Ich habe **noch keinen** Hunger.\n- **kein- … mehr** — *no more*: Wir haben **keine** Milch **mehr**.\n\nThey follow the normal rules: **nicht mehr** and **noch nicht** go where **nicht** would go; **kein-** replaces ein-/no article.',
        'Les mots de temps se combinent avec la négation :\n\n- **noch nicht** — *pas encore* (réponse à **schon**) : Hast du schon gegessen ? — Nein, **noch nicht**.\n- **nicht mehr** — *ne … plus* : Er wohnt **nicht mehr** hier.\n- **noch kein-** — *pas encore de* : Ich habe **noch keinen** Hunger.\n- **kein- … mehr** — *plus de* : Wir haben **keine** Milch **mehr**.\n\nIls suivent les règles normales : **nicht mehr** et **noch nicht** vont là où irait **nicht** ; **kein-** remplace ein-/pas d’article.',
      ],
      [
        ['Ich habe noch nicht gegessen.', 'I have not eaten yet.', 'Je n’ai pas encore mangé.'],
        ['Er wohnt nicht mehr hier.', 'He no longer lives here.', 'Il n’habite plus ici.'],
        ['Wir haben keine Milch mehr.', 'We have no milk left.', 'Nous n’avons plus de lait.'],
      ],
    ),
    grammar(
      'sp-neg-sondern',
      ['sondern or aber?', 'sondern ou aber ?'],
      [
        '**sondern** corrects a negated statement: *not X, but Y*. **aber** only adds a contrast.\n\n- Er ist **nicht** Arzt, **sondern** Lehrer.\n- Wir fahren **nicht** heute, **sondern** morgen.\n- Er ist müde, **aber** er arbeitet weiter.\n\nBoth are conjunctions of **position 0** (no change in word order). For emphasis: **nicht nur … sondern auch** (not only … but also).',
        '**sondern** corrige une affirmation niée : *non pas X, mais Y*. **aber** ajoute seulement un contraste.\n\n- Er ist **nicht** Arzt, **sondern** Lehrer.\n- Wir fahren **nicht** heute, **sondern** morgen.\n- Er ist müde, **aber** er arbeitet weiter.\n\nLes deux sont des conjonctions de **position 0** (pas de changement d’ordre des mots). Pour insister : **nicht nur … sondern auch** (non seulement … mais aussi).',
      ],
      [
        ['Das ist nicht Zucker, sondern Salz.', 'That is not sugar but salt.', 'Ce n’est pas du sucre, mais du sel.'],
        ['Sie spricht nicht nur Deutsch, sondern auch Französisch.', 'She speaks not only German but also French.', 'Elle parle non seulement allemand, mais aussi français.'],
      ],
    ),
    fb(
      'sp-neg-e14',
      ['Ich habe ___ nicht gegessen. (not yet — one word)', 'Ich habe ___ nicht gegessen. (pas encore — un mot)'],
      'noch',
      ['noch nicht = not yet.', 'noch nicht = pas encore.'],
    ),
    mc(
      'sp-neg-e15',
      ['"Das ist nicht Zucker, ___ Salz."', '« Das ist nicht Zucker, ___ Salz. »'],
      ['aber', 'sondern', 'oder'], ['aber', 'sondern', 'oder'], 1,
      ['Correcting a negated statement: sondern.', 'Correction d’une affirmation niée : sondern.'],
    ),
    mc(
      'sp-neg-e16',
      ['"We have no milk left."', '« Nous n’avons plus de lait. »'],
      ['Wir haben keine Milch mehr.', 'Wir haben nicht Milch mehr.', 'Wir haben keine Milch noch.'],
      ['Wir haben keine Milch mehr.', 'Wir haben nicht Milch mehr.', 'Wir haben keine Milch noch.'], 0,
      ['kein- … mehr = no more.', 'kein- … mehr = plus de.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Negative questions: doch!', 'Questions négatives : doch !',
      'German has a special word for "yes, it IS so".', 'L’allemand a un mot spécial pour « si, c’est bien ainsi ».',
    ),
    grammar(
      'sp-neg-doch',
      ['ja, nein, doch', 'ja, nein, doch'],
      [
        'After a **positive question**: **Ja** (yes) or **Nein** (no).\n\n- Kommst du? — **Ja**, ich komme. / **Nein**, ich komme nicht.\n\nAfter a **negative question**, German has two answers:\n\n- **Doch** — contradicts the negative: *yes, I do!*\n- **Nein** — agrees with the negative: *no, I don\'t.*\n\n- Kommst du **nicht**? — **Doch**, ich komme. (I do come.)\n- Kommst du **nicht**? — **Nein**, ich komme nicht. (I don\'t come.)\n\nNever answer a negative question with *ja* — use **doch**.',
        'Après une **question positive** : **Ja** (oui) ou **Nein** (non).\n\n- Kommst du ? — **Ja**, ich komme. / **Nein**, ich komme nicht.\n\nAprès une **question négative**, l’allemand a deux réponses :\n\n- **Doch** — contredit la négation : *si, je viens !*\n- **Nein** — confirme la négation : *non, je ne viens pas.*\n\n- Kommst du **nicht** ? — **Doch**, ich komme. (Si, je viens.)\n- Kommst du **nicht** ? — **Nein**, ich komme nicht. (Non, je ne viens pas.)\n\nNe réponds jamais *ja* à une question négative — utilise **doch**.',
      ],
      [
        ['Hast du keinen Hunger? — Doch, ich habe Hunger!', 'Aren’t you hungry? — Yes, I am!', 'Tu n’as pas faim ? — Si, j’ai faim !'],
        ['Kommt er nicht? — Nein, er kommt nicht.', 'Isn’t he coming? — No, he isn’t.', 'Il ne vient pas ? — Non, il ne vient pas.'],
      ],
    ),
    vocab('sp-negation-doch', 'doch', 'yes (contradicting a negative)', 'si (contredit une négation)', null, 'DOCH', 'DOKH', ['Du kommst nicht? — Doch!', 'You are not coming? — Yes, I am!', 'Tu ne viens pas ? — Si !']),
    mc(
      'sp-neg-e17',
      ['"Hast du keine Zeit?" — "___, ich habe Zeit."', '« Hast du keine Zeit ? » — « ___, ich habe Zeit. »'],
      ['Doch', 'Ja', 'Nein'], ['Doch', 'Ja', 'Nein'], 0,
      ['You contradict the negative question: doch.', 'Tu contredis la question négative : doch.'],
    ),
    mc(
      'sp-neg-e18',
      ['"Kommt er nicht?" — "___, er kommt nicht."', '« Kommt er nicht ? » — « ___, er kommt nicht. »'],
      ['Doch', 'Nein', 'Ja'], ['Doch', 'Nein', 'Ja'], 1,
      ['You agree with the negative: nein.', 'Tu confirmes la négation : nein.'],
    ),
    lc(
      'sp-neg-e19',
      ['Listen. What does the speaker say?', 'Écoute. Que dit la personne ?'],
      'Ich habe noch keine Zeit.',
      ['I do not have time yet', 'I have no time anymore', 'I have a lot of time'],
      ['Je n’ai pas encore le temps', 'Je n’ai plus le temps', 'J’ai beaucoup de temps'], 0,
      ['Listen for "noch keine".', 'Écoute « noch keine ».'],
    ),

    wrapup(
      '**nicht or kein-** — kein- for nouns without article or with ein-; nicht for everything else (also after der/mein-).\n\n**Position** — nicht at the end for the whole sentence; before adjectives, places and the second part of the bracket.\n\n**Negative words** — nie, niemand(-en), nichts, nirgendwo, weder … noch. No extra nicht.\n\n**Combinations** — noch nicht (not yet), nicht mehr (no longer), kein- … mehr (no more); nicht … sondern (not … but).\n\n**Answers** — Doch contradicts a negative question; Nein agrees with it.',
      '**nicht ou kein-** — kein- pour les noms sans article ou avec ein- ; nicht pour tout le reste (aussi après der/mein-).\n\n**Place** — nicht à la fin pour toute la phrase ; devant les adjectifs, les lieux et la 2e partie du cadre.\n\n**Mots négatifs** — nie, niemand(-en), nichts, nirgendwo, weder … noch. Pas de nicht en plus.\n\n**Combinaisons** — noch nicht (pas encore), nicht mehr (plus), kein- … mehr (plus de) ; nicht … sondern (non pas … mais).\n\n**Réponses** — Doch contredit une question négative ; Nein la confirme.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Negation', 'Quiz final : la négation'),
    mc(
      'sp-neg-q1',
      ['"Ich habe ___ Hunger."', '« Ich habe ___ Hunger. »'],
      ['kein', 'keinen', 'nicht'], ['kein', 'keinen', 'nicht'], 1,
      ['Hunger is masculine, accusative: keinen.', 'Hunger est masculin, accusatif : keinen.'],
    ),
    mc(
      'sp-neg-q2',
      ['"Das ist ___ meine Tasche."', '« Das ist ___ meine Tasche. »'],
      ['kein', 'keine', 'nicht'], ['kein', 'keine', 'nicht'], 2,
      ['After a possessive: nicht.', 'Après un possessif : nicht.'],
    ),
    fb(
      'sp-neg-q3',
      ['Sie hat ___ Kinder. (kein-)', 'Sie hat ___ Kinder. (kein-)'],
      'keine',
      ['Plural: keine.', 'Pluriel : keine.'],
    ),
    wo('sp-neg-q4', ['verstanden', 'Ich', 'habe', 'nicht', 'das'], ['Ich', 'habe', 'das', 'nicht', 'verstanden'], ['nicht before the participle at the end.', 'nicht devant le participe à la fin.']),
    wo('sp-neg-q5', ['sondern', 'Er', 'Lehrer', 'ist', 'nicht', 'Arzt,'], ['Er', 'ist', 'nicht', 'Arzt,', 'sondern', 'Lehrer'], ['not … but: nicht … sondern.', 'non pas … mais : nicht … sondern.']),
    fb(
      'sp-neg-q6',
      ['Ich war ___ in Japan. (never)', 'Ich war ___ in Japan. (jamais)'],
      'nie',
      ['The opposite of "immer".', 'Le contraire de « immer ».'],
    ),
    mc(
      'sp-neg-q7',
      ['"___ hat angerufen. Das Telefon war still."', '« ___ hat angerufen. Das Telefon war still. »'],
      ['Niemand', 'Nichts', 'Nie'], ['Niemand', 'Nichts', 'Nie'], 0,
      ['A person who calls → niemand.', 'Une personne qui appelle → niemand.'],
    ),
    fb(
      'sp-neg-q8',
      ['Im Kühlschrank ist ___. (nothing)', 'Im Kühlschrank ist ___. (rien)'],
      'nichts',
      ['The opposite of "etwas".', 'Le contraire de « etwas ».'],
    ),
    match(
      'sp-neg-q9',
      [
        ['nie', 'never', 'jamais'],
        ['niemand', 'nobody', 'personne'],
        ['nichts', 'nothing', 'rien'],
        ['noch nicht', 'not yet', 'pas encore'],
        ['nicht mehr', 'no longer', 'ne … plus'],
      ],
      ['Match each expression with its meaning.', 'Associe chaque expression à son sens.'],
    ),
    mc(
      'sp-neg-q10',
      ['"Er wohnt ___ hier." (no longer)', '« Er wohnt ___ hier. » (ne … plus)'],
      ['nicht mehr', 'noch nicht', 'kein mehr'], ['nicht mehr', 'noch nicht', 'kein mehr'], 0,
      ['nicht mehr = no longer.', 'nicht mehr = ne … plus.'],
    ),
    mc(
      'sp-neg-q11',
      ['"Hast du nicht geschlafen?" — "___, ich habe gut geschlafen."', '« Hast du nicht geschlafen ? » — « ___, ich habe gut geschlafen. »'],
      ['Doch', 'Nein', 'Ja'], ['Doch', 'Nein', 'Ja'], 0,
      ['Contradicting a negative question: doch.', 'Contredire une question négative : doch.'],
    ),
    lc(
      'sp-neg-q12',
      ['Listen. What does the speaker say?', 'Écoute. Que dit la personne ?'],
      'Ich habe keinen Hunger.',
      ['I am not hungry', 'I am very hungry', 'I have no time'],
      ['Je n’ai pas faim', 'J’ai très faim', 'Je n’ai pas le temps'], 0,
      ['Listen for "keinen Hunger".', 'Écoute « keinen Hunger ».'],
    ),
    mc(
      'sp-neg-q13',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich gehe nicht ins Kino.', 'Ich gehe ins Kino nicht.', 'Ich nicht gehe ins Kino.'],
      ['Ich gehe nicht ins Kino.', 'Ich gehe ins Kino nicht.', 'Ich nicht gehe ins Kino.'], 0,
      ['nicht stands before the place phrase.', 'nicht se place devant le complément de lieu.'],
    ),
    mc(
      'sp-neg-q14',
      ['"Ich mag weder Tee ___ Kaffee."', '« Ich mag weder Tee ___ Kaffee. »'],
      ['noch', 'oder', 'und'], ['noch', 'oder', 'und'], 0,
      ['weder … noch = neither … nor.', 'weder … noch = ni … ni.'],
    ),
  ],
});

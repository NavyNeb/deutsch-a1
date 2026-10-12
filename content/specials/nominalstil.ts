import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const nominalstil = defineSpecial({
  slug: 'nominalstil',
  number: 34,
  group: 'sentences',
  levels: ['B1', 'B2'],
  related: ['b2-l3', 'b2-l11', 'b2-l12'],
  title: ['Nominalstil', 'Nominal style', 'Le style nominal'],
  theme: [
    'Turning verbs and clauses into noun phrases: the compact style of news, reports and formal writing',
    'Transformer verbes et propositions en groupes nominaux : le style compact de la presse, des rapports et de l’écrit formel',
  ],
  goals: [
    'Form nouns from verbs and adjectives (-ung, -heit, -keit, infinitive nouns)',
    'Replace weil, obwohl, nachdem and wenn clauses with prepositions',
    'Read dense formal sentences by unpacking them',
    'Know when nominal style helps and when it hurts',
  ],
  goalsFr: [
    'Former des noms à partir de verbes et d’adjectifs (-ung, -heit, -keit, infinitif substantivé)',
    'Remplacer les propositions en weil, obwohl, nachdem et wenn par des prépositions',
    'Lire des phrases formelles denses en les décomposant',
    'Savoir quand le style nominal aide et quand il gêne',
  ],
  steps: [
    intro(
      'Wegen der Verspätung …', 'À cause du retard …',
      'A news report says “Wegen der Verspätung des Zuges kam es zu Beschwerden.” The same information in spoken German would be: “Weil der Zug zu spät war, haben sich die Leute beschwert.” The first style is nominal: it packs actions into nouns. It is typical of newspapers, official letters and academic texts.',
      'Un article dit « Wegen der Verspätung des Zuges kam es zu Beschwerden. » La même information à l’oral : « Weil der Zug zu spät war, haben sich die Leute beschwert. » Le premier style est nominal : il condense les actions en noms. Il est typique des journaux, des courriers officiels et des textes universitaires.',
      [
        'Turn verbs into nouns',
        'Replace subordinate clauses with prepositions',
        'Unpack long noun phrases when reading',
        'Choose the right style for the situation',
      ],
      [
        'Transformer des verbes en noms',
        'Remplacer des subordonnées par des prépositions',
        'Décomposer de longs groupes nominaux à la lecture',
        'Choisir le bon style selon la situation',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'From verb to noun', 'Du verbe au nom',
      'The endings that build nouns and tell you the gender.', 'Les terminaisons qui forment des noms et indiquent le genre.',
    ),
    vocab('sp-nominalstil-entwicklung', 'die Entwicklung', 'the development', 'le développement', 'die', 'ent-WICK-lung', 'ent-VIK-loong', ['Die Entwicklung der Preise macht Sorgen.', 'The development of prices causes worry.', 'L’évolution des prix inquiète.']),
    vocab('sp-nominalstil-moeglichkeit', 'die Möglichkeit', 'the possibility', 'la possibilité', 'die', 'MOEG-lich-keit', 'MOEG-likh-kite', ['Es gibt mehrere Möglichkeiten.', 'There are several possibilities.', 'Il y a plusieurs possibilités.']),
    vocab('sp-nominalstil-ankunft', 'die Ankunft', 'the arrival', 'l’arrivée', 'die', 'AN-kunft', 'AHN-koonft', ['Nach der Ankunft rufe ich an.', 'After arrival I will call.', 'Après l’arrivée, j’appellerai.']),
    grammar(
      'sp-ns-forms',
      ['Building nouns', 'Former des noms'],
      [
        'Common patterns:\n\n| From | Pattern | Example | Gender |\n|---|---|---|---|\n| verb | stem + **-ung** | entwickeln → **die Entwicklung** | die |\n| adjective | + **-heit / -keit** | gesund → **die Gesundheit**, möglich → **die Möglichkeit** | die |\n| verb | infinitive | lesen → **das Lesen** | das |\n| verb | stem only | ankommen → **die Ankunft**, fahren → **die Fahrt** | often die |\n\nAlmost all **-ung, -heit, -keit** nouns are **feminine**.',
        'Schémas courants :\n\n| À partir de | Schéma | Exemple | Genre |\n|---|---|---|---|\n| verbe | radical + **-ung** | entwickeln → **die Entwicklung** | die |\n| adjectif | + **-heit / -keit** | gesund → **die Gesundheit**, möglich → **die Möglichkeit** | die |\n| verbe | infinitif | lesen → **das Lesen** | das |\n| verbe | radical seul | ankommen → **die Ankunft**, fahren → **die Fahrt** | souvent die |\n\nPresque tous les noms en **-ung, -heit, -keit** sont **féminins**.',
      ],
      [
        ['Die Entwicklung ist positiv.', 'The development is positive.', 'L’évolution est positive.'],
        ['Beim Lesen entspanne ich mich.', 'When reading I relax.', 'En lisant, je me détends.'],
      ],
    ),
    ap('sp-ns-e1', 'Möglichkeit', 'die', ['-keit nouns are feminine.', 'Les noms en -keit sont féminins.']),
    fb(
      'sp-ns-e2',
      ['gesund → die ___ (health)', 'gesund → die ___ (santé)'],
      'Gesundheit',
      ['adjective + -heit', 'adjectif + -heit'],
    ),
    mc(
      'sp-ns-e3',
      ['Which noun is neuter?', 'Quel nom est neutre ?'],
      ['die Entwicklung', 'das Lesen', 'die Möglichkeit'], ['die Entwicklung', 'das Lesen', 'die Möglichkeit'], 1,
      ['Infinitives used as nouns are neuter.', 'Les infinitifs substantivés sont neutres.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Clauses become prepositions', 'Les propositions deviennent des prépositions',
      'weil → wegen, obwohl → trotz, nachdem → nach, wenn → bei.', 'weil → wegen, obwohl → trotz, nachdem → nach, wenn → bei.',
    ),
    vocab('sp-nominalstil-wegen', 'wegen + Genitiv', 'because of', 'à cause de', null, 'WE-gen', 'VAY-gen', ['Wegen des Regens bleiben wir zu Hause.', 'Because of the rain we stay home.', 'À cause de la pluie, nous restons chez nous.']),
    vocab('sp-nominalstil-trotz', 'trotz + Genitiv', 'despite', 'malgré', null, 'TROTZ', 'trots', ['Trotz der Kälte gehen wir schwimmen.', 'Despite the cold we go swimming.', 'Malgré le froid, nous allons nager.']),
    vocab('sp-nominalstil-aufgrund', 'aufgrund + Genitiv', 'on the basis of / because of', 'en raison de', null, 'AUF-grund', 'OWF-groont', ['Aufgrund des Unwetters fällt der Zug aus.', 'Because of the storm the train is cancelled.', 'En raison de l’orage, le train est supprimé.']),
    grammar(
      'sp-ns-prep',
      ['Clause → noun phrase', 'Proposition → groupe nominal'],
      [
        '| Clause (verbal) | Noun phrase (nominal) |\n|---|---|\n| **Weil** die Preise steigen, … | **Wegen** der Preissteigerung … / **Aufgrund** der Preissteigerung … |\n| **Obwohl** er krank war, … | **Trotz** seiner Krankheit … |\n| **Nachdem** er angekommen war, … | **Nach** seiner Ankunft … |\n| **Bevor** sie ging, … | **Vor** ihrem Weggang … |\n| **Wenn** man das Gesetz ändert, … | **Bei** einer Änderung des Gesetzes … |\n| **Während** der Film lief, … | **Während** des Films … |\n\nThe **subject** of the verb usually becomes a **genitive** or a **possessive**: *er ist angekommen* → *seine Ankunft*; *die Preise steigen* → *der Anstieg der Preise*.',
        '| Proposition (verbale) | Groupe nominal (nominal) |\n|---|---|\n| **Weil** die Preise steigen, … | **Wegen** der Preissteigerung … / **Aufgrund** der Preissteigerung … |\n| **Obwohl** er krank war, … | **Trotz** seiner Krankheit … |\n| **Nachdem** er angekommen war, … | **Nach** seiner Ankunft … |\n| **Bevor** sie ging, … | **Vor** ihrem Weggang … |\n| **Wenn** man das Gesetz ändert, … | **Bei** einer Änderung des Gesetzes … |\n| **Während** der Film lief, … | **Während** des Films … |\n\nLe **sujet** du verbe devient généralement un **génitif** ou un **possessif** : *er ist angekommen* → *seine Ankunft* ; *die Preise steigen* → *der Anstieg der Preise*.',
      ],
      [
        ['Nach seiner Ankunft rief er an.', 'After his arrival he called.', 'Après son arrivée, il a appelé.'],
        ['Trotz seiner Krankheit arbeitet er weiter.', 'Despite his illness he keeps working.', 'Malgré sa maladie, il continue à travailler.'],
      ],
    ),
    mc(
      'sp-ns-e4',
      ['Nominal form of "Obwohl er krank war, …"', 'Forme nominale de « Obwohl er krank war, … »'],
      ['Trotz seiner Krankheit …', 'Wegen seiner Krankheit …', 'Nach seiner Krankheit …'], ['Trotz seiner Krankheit …', 'Wegen seiner Krankheit …', 'Nach seiner Krankheit …'], 0,
      ['obwohl → trotz.', 'obwohl → trotz.'],
    ),
    fb(
      'sp-ns-e5',
      ['___ seiner Ankunft rief er an. (After)', '___ seiner Ankunft rief er an. (Après)'],
      'Nach',
      ['nachdem → nach', 'nachdem → nach'],
    ),
    wo(
      'sp-ns-e6',
      ['Regens', 'bleiben', 'des', 'Wegen', 'wir', 'zu Hause'],
      ['Wegen', 'des', 'Regens', 'bleiben', 'wir', 'zu Hause'],
      ['Noun phrase first, verb in position 2.', 'Groupe nominal d’abord, verbe en 2e position.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Reading dense sentences', 'Lire des phrases denses',
      'How to unpack a long noun phrase without getting lost.', 'Comment décomposer un long groupe nominal sans se perdre.',
    ),
    vocab('sp-nominalstil-veraenderung', 'die Veränderung', 'the change', 'le changement', 'die', 've-ÄN-de-rung', 'fer-EN-de-roong', ['Die Veränderung kam schnell.', 'The change came quickly.', 'Le changement est venu vite.']),
    vocab('sp-nominalstil-erhoehung', 'die Erhöhung', 'the increase', 'l’augmentation', 'die', 'er-HÖ-hung', 'er-HOE-oong', ['Die Erhöhung der Mieten ärgert viele.', 'The rent increase annoys many.', 'L’augmentation des loyers énerve beaucoup de gens.']),
    grammar(
      'sp-ns-unpack',
      ['Unpacking a noun phrase', 'Décomposer un groupe nominal'],
      [
        'Take the sentence apart in **three steps**:\n\n1. **Find the head noun** (the nominalised action): *die Erhöhung*\n2. **Turn it back into a verb**: *erhöhen*\n3. **Find who/what** (genitive or *durch/von*): *der Mieten* = die Mieten werden erhöht\n\n*Die **Erhöhung der Mieten durch die Stadt** ärgert viele.*\n→ *Dass die Stadt die Mieten **erhöht**, ärgert viele.*\n\nGenitive = **object** (what is increased); **von / durch** = **subject** (who does it).',
        'Décompose la phrase en **trois étapes** :\n\n1. **Trouve le nom noyau** (l’action nominalisée) : *die Erhöhung*\n2. **Retransforme-le en verbe** : *erhöhen*\n3. **Trouve qui/quoi** (génitif ou *durch/von*) : *der Mieten* = die Mieten werden erhöht\n\n*Die **Erhöhung der Mieten durch die Stadt** ärgert viele.*\n→ *Dass die Stadt die Mieten **erhöht**, ärgert viele.*\n\nLe génitif = **objet** (ce qui est augmenté) ; **von / durch** = **sujet** (qui agit).',
      ],
      [
        ['Die Verbesserung der Lage freut uns.', 'The improvement of the situation pleases us.', 'L’amélioration de la situation nous réjouit.'],
        ['Die Erhöhung der Preise durch den Staat ist umstritten.', 'The increase of prices by the state is controversial.', 'L’augmentation des prix par l’État est controversée.'],
      ],
    ),
    mc(
      'sp-ns-e7',
      ['"Die Erhöhung der Mieten" unpacked as a clause:', '« Die Erhöhung der Mieten » décomposé en proposition :'],
      ['dass die Mieten erhöht werden', 'dass die Mieten erhöhen', 'ob die Mieten erhöht'], ['dass die Mieten erhöht werden', 'dass die Mieten erhöhen', 'ob die Mieten erhöht'], 0,
      ['The genitive is the object → passive clause.', 'Le génitif est l’objet → proposition passive.'],
    ),
    lc(
      'sp-ns-e8',
      ['Listen. What is the topic?', 'Écoute. Quel est le sujet ?'],
      'Die Erhöhung der Mieten ärgert viele Menschen in der Stadt.',
      ['Rent increases', 'Train delays', 'School fees'], ['Les hausses de loyers', 'Les retards de train', 'Les frais de scolarité'], 0,
      ['Erhöhung der Mieten = rent increase.', 'Erhöhung der Mieten = hausse des loyers.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'When to use it', 'Quand l’utiliser',
      'Nominal style in writing, verbal style in speech.', 'Style nominal à l’écrit, style verbal à l’oral.',
    ),
    vocab('sp-nominalstil-verstaendlich', 'verständlich', 'understandable', 'compréhensible', null, 'ver-STÄND-lich', 'fer-SHTEND-likh', ['Der Text ist gut verständlich.', 'The text is easy to understand.', 'Le texte est facile à comprendre.']),
    grammar(
      'sp-ns-use',
      ['Nominal vs. verbal style', 'Style nominal et style verbal'],
      [
        '| Nominal style | Verbal style |\n|---|---|\n| compact, formal, impersonal | clearer, more natural, personal |\n| news, reports, official letters, academic texts | conversation, e-mails to friends, stories |\n| *Nach Prüfung der Unterlagen erfolgt die Zahlung.* | *Wenn wir die Unterlagen geprüft haben, zahlen wir.* |\n\n**Rules of thumb:** in an **exam**, use nominal style in formal tasks and verbal style in informal ones. If a nominal sentence is **hard to read**, rewrite it with verbs. Too many genitives in a row (*die Verbesserung der Einführung der Regelung*) make a text heavy.',
        '| Style nominal | Style verbal |\n|---|---|\n| compact, formel, impersonnel | plus clair, plus naturel, personnel |\n| presse, rapports, courriers officiels, textes universitaires | conversation, e-mails à des amis, récits |\n| *Nach Prüfung der Unterlagen erfolgt die Zahlung.* | *Wenn wir die Unterlagen geprüft haben, zahlen wir.* |\n\n**Règles pratiques :** à l’**examen**, utilise le style nominal dans les tâches formelles et le style verbal dans les tâches informelles. Si une phrase nominale est **difficile à lire**, réécris-la avec des verbes. Trop de génitifs à la suite (*die Verbesserung der Einführung der Regelung*) alourdissent un texte.',
      ],
      [
        ['Nach Prüfung der Unterlagen erfolgt die Zahlung.', 'After the documents are checked, payment is made.', 'Après vérification des documents, le paiement est effectué.'],
        ['Wenn wir die Unterlagen geprüft haben, zahlen wir.', 'When we have checked the documents, we pay.', 'Quand nous aurons vérifié les documents, nous paierons.'],
      ],
    ),
    mc(
      'sp-ns-e9',
      ['Where is nominal style most typical?', 'Où le style nominal est-il le plus typique ?'],
      ['Official letters', 'Chats with friends', 'Jokes'], ['Courriers officiels', 'Chats entre amis', 'Blagues'], 0,
      ['Formal, written contexts.', 'Contextes formels et écrits.'],
    ),
    mc(
      'sp-ns-e10',
      ['Which sentence is nominal?', 'Quelle phrase est nominale ?'],
      ['Nach der Prüfung erfolgt die Zahlung.', 'Wenn wir prüfen, zahlen wir.', 'Wir prüfen und zahlen.'], ['Nach der Prüfung erfolgt die Zahlung.', 'Wenn wir prüfen, zahlen wir.', 'Wir prüfen und zahlen.'], 0,
      ['Nouns instead of verbs and clauses.', 'Des noms à la place de verbes et de propositions.'],
    ),

    wrapup(
      '**Build nouns:** -ung (die), -heit/-keit (die), infinitive (das), stem nouns (die Ankunft).\n\n**Clauses → prepositions:** weil → wegen/aufgrund · obwohl → trotz · nachdem → nach · bevor → vor · wenn → bei · während → während.\n\n**Reading:** find the head noun, turn it back into a verb, find who and what (genitive = object, von/durch = subject).\n\n**Use it** in formal writing; choose verbs when clarity matters.',
      '**Former des noms :** -ung (die), -heit/-keit (die), infinitif (das), noms sur radical (die Ankunft).\n\n**Propositions → prépositions :** weil → wegen/aufgrund · obwohl → trotz · nachdem → nach · bevor → vor · wenn → bei · während → während.\n\n**Lecture :** trouve le nom noyau, retransforme-le en verbe, trouve qui et quoi (génitif = objet, von/durch = sujet).\n\n**Emploie-le** à l’écrit formel ; choisis les verbes quand la clarté prime.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Nominal style', 'Quiz final : style nominal'),
    match(
      'sp-ns-q1',
      [
        ['weil', 'wegen / aufgrund', 'wegen / aufgrund'],
        ['obwohl', 'trotz', 'trotz'],
        ['nachdem', 'nach', 'nach'],
        ['bevor', 'vor', 'vor'],
        ['wenn', 'bei', 'bei'],
      ],
      ['Match each conjunction with its preposition.', 'Associe chaque conjonction à sa préposition.'],
    ),
    ap('sp-ns-q2', 'Entwicklung', 'die', ['-ung → die', '-ung → die']),
    ap('sp-ns-q3', 'Gesundheit', 'die', ['-heit → die', '-heit → die']),
    mc(
      'sp-ns-q4',
      ['Nominal form of "Nachdem er angekommen war"', 'Forme nominale de « Nachdem er angekommen war »'],
      ['Nach seiner Ankunft', 'Vor seiner Ankunft', 'Seit seiner Ankunft sein'], ['Nach seiner Ankunft', 'Vor seiner Ankunft', 'Seit seiner Ankunft sein'], 0,
      ['nachdem → nach + noun.', 'nachdem → nach + nom.'],
    ),
    mc(
      'sp-ns-q5',
      ['Nominal form of "Wenn man das Gesetz ändert, …"', 'Forme nominale de « Wenn man das Gesetz ändert, … »'],
      ['Bei einer Änderung des Gesetzes …', 'Nach einer Änderung des Gesetzes …', 'Trotz einer Änderung des Gesetzes …'], ['Bei einer Änderung des Gesetzes …', 'Nach einer Änderung des Gesetzes …', 'Trotz einer Änderung des Gesetzes …'], 0,
      ['wenn → bei.', 'wenn → bei.'],
    ),
    fb(
      'sp-ns-q6',
      ['___ des Regens bleiben wir zu Hause. (Because of)', '___ des Regens bleiben wir zu Hause. (À cause de)'],
      'Wegen',
      ['Cause → wegen', 'Cause → wegen'],
    ),
    fb(
      'sp-ns-q7',
      ['___ seiner Krankheit arbeitet er weiter. (Despite)', '___ seiner Krankheit arbeitet er weiter. (Malgré)'],
      'Trotz',
      ['Concession → trotz', 'Concession → trotz'],
    ),
    wo(
      'sp-ns-q8',
      ['der', 'Mieten', 'Die', 'ärgert', 'Erhöhung', 'viele'],
      ['Die', 'Erhöhung', 'der', 'Mieten', 'ärgert', 'viele'],
      ['Noun + genitive, then the verb.', 'Nom + génitif, puis le verbe.'],
    ),
    mc(
      'sp-ns-q9',
      ['In "die Erhöhung der Mieten durch die Stadt", who raises the rent?', 'Dans « die Erhöhung der Mieten durch die Stadt », qui augmente les loyers ?'],
      ['die Stadt', 'die Mieten', 'niemand'], ['die Stadt', 'die Mieten', 'niemand'], 0,
      ['durch = the agent (subject).', 'durch = l’agent (sujet).'],
    ),
    lc(
      'sp-ns-q10',
      ['Listen. Why do people protest?', 'Écoute. Pourquoi les gens protestent-ils ?'],
      'Wegen der Erhöhung der Mieten protestieren viele Menschen.',
      ['Rents are rising', 'Trains are late', 'Schools are closed'], ['Les loyers augmentent', 'Les trains sont en retard', 'Les écoles sont fermées'], 0,
      ['Erhöhung der Mieten = rent increase.', 'Erhöhung der Mieten = hausse des loyers.'],
    ),
    lc(
      'sp-ns-q11',
      ['Listen. What happens after arrival?', 'Écoute. Que se passe-t-il après l’arrivée ?'],
      'Nach seiner Ankunft rief er sofort seine Familie an.',
      ['He phones his family', 'He goes to sleep', 'He goes shopping'], ['Il appelle sa famille', 'Il va dormir', 'Il fait des courses'], 0,
      ['Nach seiner Ankunft = after arriving.', 'Nach seiner Ankunft = après son arrivée.'],
    ),
    mc(
      'sp-ns-q12',
      ['When should you avoid heavy nominal style?', 'Quand faut-il éviter un style nominal lourd ?'],
      ['In informal messages', 'In official reports', 'In news articles'], ['Dans des messages informels', 'Dans des rapports officiels', 'Dans des articles de presse'], 0,
      ['Informal contexts need verbs.', 'Les contextes informels demandent des verbes.'],
    ),
    mc(
      'sp-ns-q13',
      ['Which noun is neuter?', 'Quel nom est neutre ?'],
      ['das Lesen', 'die Entwicklung', 'die Möglichkeit'], ['das Lesen', 'die Entwicklung', 'die Möglichkeit'], 0,
      ['Nominalised infinitive → das.', 'Infinitif substantivé → das.'],
    ),
  ],
});

import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const wortstellung = defineSpecial({
  slug: 'wortstellung',
  number: 14,
  group: 'sentences',
  levels: ['A1', 'B1'],
  related: ['l7', 'l14', 'l16', 'a2-l7'],
  bookRefs: [
    { book: 'daf-grammatiktrainer', start: 118, end: 132 },
    { book: 'daf-grammatiktrainer', start: 145, end: 150 },
    { book: 'easy-german', start: 282, end: 285 },
  ],
  title: ['Wortstellung', 'Word order', 'L’ordre des mots'],
  theme: [
    'Verb second, questions, the sentence bracket, TeKaMoLo and verb-last clauses',
    'Verbe en 2e position, questions, cadre de la phrase, TeKaMoLo et verbe en dernier',
  ],
  goals: [
    'Place the verb in position 2 in statements',
    'Build yes/no and W-questions',
    'Use the sentence bracket with modals, Perfekt and separable verbs',
    'Order time, cause, manner and place (TeKaMoLo)',
    'Send the verb to the end in subordinate clauses',
  ],
  goalsFr: [
    'Placer le verbe en 2e position dans les affirmations',
    'Construire des questions fermées et des questions en W',
    'Utiliser le cadre de la phrase avec modaux, Perfekt et verbes séparables',
    'Ordonner temps, cause, manière et lieu (TeKaMoLo)',
    'Envoyer le verbe à la fin dans les subordonnées',
  ],
  steps: [
    intro(
      'Das Verb ist der Boss', 'Le verbe est le chef',
      'German word order looks free, but it follows strict rules about where the **verb** goes. Learn the verb positions and you can build almost any sentence correctly.',
      'L’ordre des mots allemand semble libre, mais il suit des règles strictes sur la place du **verbe**. Apprends les positions du verbe et tu pourras construire presque n’importe quelle phrase.',
      [
        'Verb in position 2 in main clauses',
        'Verb in position 1 in yes/no questions and commands',
        'Verb at the end in subordinate clauses',
        'Order of details inside the sentence',
      ],
      [
        'Verbe en 2e position dans les principales',
        'Verbe en 1re position dans les questions fermées et les ordres',
        'Verbe en dernier dans les subordonnées',
        'Ordre des compléments dans la phrase',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'The verb in second place', 'Le verbe en 2e position',
      'The golden rule of the German main clause.', 'La règle d’or de la proposition principale allemande.',
    ),
    grammar(
      'sp-ws-v2',
      ['Position 2 — not word 2', 'Position 2 — pas le 2e mot'],
      [
        'In a statement the conjugated verb is always in **position 2**. Position 1 can be the subject, but also a time word, a place or an object — then the **subject moves behind the verb**.\n\n- **Ich** **gehe** heute ins Kino.\n- **Heute** **gehe** ich ins Kino.\n- **Ins Kino** **gehe** ich heute.\n\nPosition 2 means the second *element*, not the second *word*: *Am Samstagabend* is one element.',
        'Dans une affirmation, le verbe conjugué est toujours en **2e position**. La position 1 peut être le sujet, mais aussi un mot de temps, un lieu ou un objet — alors le **sujet passe derrière le verbe** :\n\n- **Ich** **gehe** heute ins Kino.\n- **Heute** **gehe** ich ins Kino.\n- **Ins Kino** **gehe** ich heute.\n\nPosition 2 signifie le deuxième *élément*, pas le deuxième *mot* : *Am Samstagabend* est un seul élément.',
      ],
      [
        ['Ich gehe heute ins Kino.', 'I am going to the cinema today.', 'Je vais au cinéma aujourd’hui.'],
        ['Heute gehe ich ins Kino.', 'Today I am going to the cinema.', 'Aujourd’hui, je vais au cinéma.'],
        ['Am Samstagabend gehe ich ins Kino.', 'On Saturday evening I go to the cinema.', 'Samedi soir, je vais au cinéma.'],
      ],
      'verb-second',
    ),
    grammar(
      'sp-ws-conj',
      ['The conjunctions that do not count', 'Les conjonctions qui ne comptent pas'],
      [
        'Five little conjunctions connect two main clauses and take **position 0** — they do not change the word order after them:\n\n- **und** (and), **aber** (but), **oder** (or), **denn** (because), **sondern** (but rather)\n\n- Ich lerne Deutsch, **denn** ich **wohne** in Wien.\n- Er ist müde, **aber** er **arbeitet** weiter.\n\nCompare with *weil* (chapter 5), which pushes the verb to the end.',
        'Cinq petites conjonctions relient deux principales et occupent la **position 0** — elles ne changent pas l’ordre des mots qui suit :\n\n- **und** (et), **aber** (mais), **oder** (ou), **denn** (car), **sondern** (mais plutôt)\n\n- Ich lerne Deutsch, **denn** ich **wohne** in Wien.\n- Er ist müde, **aber** er **arbeitet** weiter.\n\nÀ comparer avec *weil* (chapitre 5), qui envoie le verbe à la fin.',
      ],
      [
        ['Ich lerne Deutsch, denn ich wohne in Wien.', 'I learn German because I live in Vienna.', 'J’apprends l’allemand car j’habite à Vienne.'],
        ['Er ist müde, aber er arbeitet weiter.', 'He is tired, but he keeps working.', 'Il est fatigué, mais il continue à travailler.'],
      ],
    ),
    vocab('sp-wortstellung-satz', 'der Satz', 'the sentence', 'la phrase', 'der', 'SATZ', 'dair ZATS', ['Der Satz ist zu lang.', 'The sentence is too long.', 'La phrase est trop longue.']),
    vocab('sp-wortstellung-reihenfolge', 'die Reihenfolge', 'the order, sequence', 'l’ordre, la séquence', 'die', 'REI-hen-fol-ge', 'dee RYE-en-fol-geh', ['Die Reihenfolge ist wichtig.', 'The order is important.', 'L’ordre est important.']),
    vocab('sp-wortstellung-nebensatz', 'der Nebensatz', 'the subordinate clause', 'la subordonnée', 'der', 'NE-ben-satz', 'dair NAY-ben-zats', ['Im Nebensatz steht das Verb am Ende.', 'In a subordinate clause the verb is at the end.', 'Dans une subordonnée, le verbe est à la fin.']),
    mc(
      'sp-ws-e1',
      ['"Morgen ___ wir nach Berlin." Which verb form fits position 2?', '« Morgen ___ wir nach Berlin. » Quelle forme verbale va en position 2 ?'],
      ['fahren', 'fahre', 'fährt'], ['fahren', 'fahre', 'fährt'], 0,
      ['wir → fahren, and it stands right after "Morgen" (position 2).', 'wir → fahren, et il est juste après « Morgen » (position 2).'],
    ),
    wo('sp-ws-e2', ['gehe', 'Heute', 'ich', 'ins', 'Kino'], ['Heute', 'gehe', 'ich', 'ins', 'Kino'], ['Time word first, then verb, then subject.', 'Complément de temps, puis verbe, puis sujet.']),
    wo('sp-ws-e3', ['Wir', 'Berlin', 'wohnen', 'in'], ['Wir', 'wohnen', 'in', 'Berlin'], ['Subject, verb, rest.', 'Sujet, verbe, le reste.']),
    mc(
      'sp-ws-e4',
      ['Which sentence is wrong?', 'Quelle phrase est fausse ?'],
      ['Heute ich gehe ins Kino.', 'Heute gehe ich ins Kino.', 'Ich gehe heute ins Kino.'],
      ['Heute ich gehe ins Kino.', 'Heute gehe ich ins Kino.', 'Ich gehe heute ins Kino.'], 0,
      ['The verb must stay in position 2; after "Heute" it comes before the subject.', 'Le verbe doit rester en 2e position ; après « Heute », il précède le sujet.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Questions', 'Les questions',
      'Yes/no questions start with the verb; W-questions start with the question word.', 'Les questions fermées commencent par le verbe ; les questions en W par le mot interrogatif.',
    ),
    grammar(
      'sp-ws-q',
      ['Two types of questions', 'Deux types de questions'],
      [
        '**Yes/no questions**: the verb is in **position 1**, the subject follows.\n\n- **Kommst** du morgen?\n- **Hast** du Zeit?\n\n**W-questions**: question word in **position 1**, verb in **position 2**.\n\n- **Wann** kommst du?\n- **Wo** wohnst du?\n- **Was** machst du am Wochenende?\n\nThe W-words: *wer, was, wo, wohin, woher, wann, warum, wie, welch-, wie viel*.',
        '**Questions fermées** : le verbe est en **position 1**, le sujet suit.\n\n- **Kommst** du morgen ?\n- **Hast** du Zeit ?\n\n**Questions en W** : mot interrogatif en **position 1**, verbe en **position 2**.\n\n- **Wann** kommst du ?\n- **Wo** wohnst du ?\n- **Was** machst du am Wochenende ?\n\nLes mots en W : *wer, was, wo, wohin, woher, wann, warum, wie, welch-, wie viel*.',
      ],
      [
        ['Kommst du morgen?', 'Are you coming tomorrow?', 'Viens-tu demain ?'],
        ['Wann kommst du?', 'When are you coming?', 'Quand viens-tu ?'],
        ['Was machst du am Wochenende?', 'What are you doing at the weekend?', 'Que fais-tu ce week-end ?'],
      ],
    ),
    grammar(
      'sp-ws-imp',
      ['Commands also start with the verb', 'Les ordres commencent aussi par le verbe'],
      [
        'The **imperative** puts the verb in position 1 as well:\n\n- **Komm** bitte pünktlich!\n- **Öffnen** Sie das Fenster!\n- **Seid** leise!\n\nThe subject is dropped for **du** and **ihr**, but kept for **Sie**.',
        'L’**impératif** place aussi le verbe en position 1 :\n\n- **Komm** bitte pünktlich !\n- **Öffnen** Sie das Fenster !\n- **Seid** leise !\n\nLe sujet disparaît pour **du** et **ihr**, mais reste pour **Sie**.',
      ],
      [
        ['Komm bitte pünktlich!', 'Please come on time!', 'Viens à l’heure, s’il te plaît !'],
        ['Öffnen Sie das Fenster!', 'Open the window!', 'Ouvrez la fenêtre !'],
      ],
    ),
    wo('sp-ws-e5', ['du', 'Wann', 'kommst'], ['Wann', 'kommst', 'du'], ['W-word first, verb second.', 'Mot en W d’abord, verbe en 2e position.']),
    wo('sp-ws-e6', ['du', 'Zeit', 'Hast'], ['Hast', 'du', 'Zeit'], ['A yes/no question starts with the verb.', 'Une question fermée commence par le verbe.']),
    mc(
      'sp-ws-e7',
      ['Which is a correct W-question?', 'Quelle est une question en W correcte ?'],
      ['Wo wohnst du?', 'Wo du wohnst?', 'Wohnst wo du?'], ['Wo wohnst du?', 'Wo du wohnst?', 'Wohnst wo du?'], 0,
      ['W-word + verb + subject.', 'Mot en W + verbe + sujet.'],
    ),
    fb(
      'sp-ws-e8',
      ['___ du morgen Zeit? (haben)', '___ du morgen Zeit ? (haben)'],
      'Hast',
      ['The yes/no question starts with the verb: Hast du …?', 'La question fermée commence par le verbe : Hast du … ?'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'The sentence bracket', 'Le cadre de la phrase',
      'Modal, Perfekt and separable verbs split into a frame.', 'Modal, Perfekt et verbes séparables forment un cadre.',
    ),
    grammar(
      'sp-ws-bracket',
      ['Two verb parts, one frame', 'Deux parties verbales, un cadre'],
      [
        'When the verb has **two parts**, the conjugated part stays in position 2 and the other part goes to the **very end**. The middle of the sentence sits between them:\n\n- **Modal verb**: Ich **muss** heute viel **lernen**.\n- **Perfekt**: Ich **habe** gestern einen Film **gesehen**.\n- **Separable verb**: Ich **stehe** jeden Tag früh **auf**.\n- **Future**: Wir **werden** morgen nach Wien **fahren**.\n\nThis frame is called the *Satzklammer*.',
        'Quand le verbe a **deux parties**, la partie conjuguée reste en 2e position et l’autre part tout à la **fin**. Le milieu de la phrase se trouve entre les deux :\n\n- **Verbe modal** : Ich **muss** heute viel **lernen**.\n- **Perfekt** : Ich **habe** gestern einen Film **gesehen**.\n- **Verbe séparable** : Ich **stehe** jeden Tag früh **auf**.\n- **Futur** : Wir **werden** morgen nach Wien **fahren**.\n\nCe cadre s’appelle la *Satzklammer*.',
      ],
      [
        ['Ich muss heute viel lernen.', 'I have to study a lot today.', 'Je dois beaucoup étudier aujourd’hui.'],
        ['Ich habe gestern einen Film gesehen.', 'I watched a film yesterday.', 'J’ai regardé un film hier.'],
        ['Ich stehe jeden Tag früh auf.', 'I get up early every day.', 'Je me lève tôt tous les jours.'],
        ['Wir werden morgen nach Wien fahren.', 'We will go to Vienna tomorrow.', 'Nous irons à Vienne demain.'],
      ],
      'satzklammer',
    ),
    grammar(
      'sp-ws-bracket-2',
      ['Negation and other tricky spots', 'Négation et autres pièges'],
      [
        '**nicht** usually stands **before the second verb part** or at the end of the sentence if nothing else is in the bracket:\n\n- Ich habe das Buch **nicht** gelesen.\n- Ich kann heute **nicht** kommen.\n- Ich kenne ihn **nicht**.\n\nA **pronoun object** comes before a noun object:\n\n- Ich gebe **es dem Mann**. · Ich gebe **ihm das Buch**.',
        '**nicht** se place généralement **avant la seconde partie verbale**, ou à la fin de la phrase si rien d’autre n’est dans le cadre :\n\n- Ich habe das Buch **nicht** gelesen.\n- Ich kann heute **nicht** kommen.\n- Ich kenne ihn **nicht**.\n\nUn **pronom complément** passe avant un complément nominal :\n\n- Ich gebe **es dem Mann**. · Ich gebe **ihm das Buch**.',
      ],
      [
        ['Ich habe das Buch nicht gelesen.', 'I have not read the book.', 'Je n’ai pas lu le livre.'],
        ['Ich kann heute nicht kommen.', 'I can’t come today.', 'Je ne peux pas venir aujourd’hui.'],
        ['Ich gebe ihm das Buch.', 'I give him the book.', 'Je lui donne le livre.'],
      ],
    ),
    wo('sp-ws-e9', ['viel', 'muss', 'Ich', 'lernen', 'heute'], ['Ich', 'muss', 'heute', 'viel', 'lernen'], ['Modal in position 2, infinitive at the end.', 'Modal en 2e position, infinitif à la fin.']),
    wo('sp-ws-e10', ['gesehen', 'habe', 'Ich', 'einen', 'Film', 'gestern'], ['Ich', 'habe', 'gestern', 'einen', 'Film', 'gesehen'], ['The participle goes last.', 'Le participe va en dernier.']),
    wo('sp-ws-e11', ['jeden', 'Ich', 'auf', 'stehe', 'Tag', 'früh'], ['Ich', 'stehe', 'jeden', 'Tag', 'früh', 'auf'], ['The separable prefix goes to the end.', 'Le préfixe séparable va à la fin.']),
    mc(
      'sp-ws-e12',
      ['Where does "nicht" go? "Ich habe das Buch ___ gelesen."', 'Où va « nicht » ? « Ich habe das Buch ___ gelesen. »'],
      ['before "gelesen" → nicht gelesen', 'after "gelesen" → gelesen nicht', 'at the start of the sentence'],
      ['avant « gelesen » → nicht gelesen', 'après « gelesen » → gelesen nicht', 'au début de la phrase'], 0,
      ['nicht stands just before the final verb part.', 'nicht se place juste avant la dernière partie verbale.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Order in the middle: TeKaMoLo', 'L’ordre au milieu : TeKaMoLo',
      'Time, cause, manner, place — and where objects fit.', 'Temps, cause, manière, lieu — et la place des compléments.',
    ),
    grammar(
      'sp-ws-tekamolo',
      ['TeKaMoLo', 'TeKaMoLo'],
      [
        'Details in the middle field follow a default order, remembered as **TeKaMoLo**:\n\n- **Te**mporal — when? (*heute, am Montag*)\n- **Ka**usal — why? (*wegen des Wetters*)\n- **Mo**dal — how? (*mit dem Bus, schnell*)\n- **Lo**kal — where? (*in die Stadt*)\n\n- Ich fahre **heute** **mit dem Bus** **in die Stadt**.\n- Wir bleiben **wegen des Regens** **zu Hause**.\n\nIt is a default, not a law: you can move an element to position 1 for emphasis.',
        'Les compléments du champ central suivent un ordre par défaut, retenu comme **TeKaMoLo** :\n\n- **Te**mporel — quand ? (*heute, am Montag*)\n- **Ka**usal — pourquoi ? (*wegen des Wetters*)\n- **Mo**dal — comment ? (*mit dem Bus, schnell*)\n- **Lo**kal — où ? (*in die Stadt*)\n\n- Ich fahre **heute** **mit dem Bus** **in die Stadt**.\n- Wir bleiben **wegen des Regens** **zu Hause**.\n\nC’est un ordre par défaut, pas une loi : on peut placer un élément en position 1 pour l’insister.',
      ],
      [
        ['Ich fahre heute mit dem Bus in die Stadt.', 'I am going into town by bus today.', 'Je vais en ville en bus aujourd’hui.'],
        ['Wir bleiben wegen des Regens zu Hause.', 'We are staying at home because of the rain.', 'Nous restons à la maison à cause de la pluie.'],
        ['Mit dem Bus fahre ich heute in die Stadt.', 'I am going into town by bus today. (emphasis on the bus)', 'C’est en bus que je vais en ville aujourd’hui.'],
      ],
    ),
    grammar(
      'sp-ws-objects',
      ['Dative before accusative', 'Datif avant accusatif'],
      [
        'With two noun objects, the **dative** (person) normally comes before the **accusative** (thing):\n\n- Ich gebe **dem Kind** **den Ball**.\n\nBut with **pronouns**, the accusative comes first if it is a pronoun and the dative is a noun:\n\n- Ich gebe **ihn dem Kind**.\n- Ich gebe **ihm den Ball**.\n- Ich gebe **ihn ihm**. (both pronouns: accusative first)',
        'Avec deux compléments nominaux, le **datif** (personne) précède normalement l’**accusatif** (chose) :\n\n- Ich gebe **dem Kind** **den Ball**.\n\nMais avec des **pronoms**, l’accusatif passe en premier s’il est pronom et que le datif est un nom :\n\n- Ich gebe **ihn dem Kind**.\n- Ich gebe **ihm den Ball**.\n- Ich gebe **ihn ihm**. (deux pronoms : accusatif d’abord)',
      ],
      [
        ['Ich gebe dem Kind den Ball.', 'I give the child the ball.', 'Je donne le ballon à l’enfant.'],
        ['Ich gebe ihn dem Kind.', 'I give it to the child.', 'Je le donne à l’enfant.'],
        ['Ich gebe ihm den Ball.', 'I give him the ball.', 'Je lui donne le ballon.'],
      ],
    ),
    wo('sp-ws-e13', ['mit', 'heute', 'Ich', 'dem', 'fahre', 'Bus', 'in', 'die', 'Stadt'], ['Ich', 'fahre', 'heute', 'mit', 'dem', 'Bus', 'in', 'die', 'Stadt'], ['Time, manner, place.', 'Temps, manière, lieu.']),
    wo('sp-ws-e14', ['Wir', 'wegen', 'zu', 'bleiben', 'Hause', 'des', 'Regens'], ['Wir', 'bleiben', 'wegen', 'des', 'Regens', 'zu', 'Hause'], ['Cause comes before place.', 'La cause précède le lieu.']),
    mc(
      'sp-ws-e15',
      ['"Ich gebe ___." Which is correct?', '« Ich gebe ___. » Quelle réponse est correcte ?'],
      ['dem Kind den Ball', 'den Ball dem Kind', 'dem Ball den Kind'],
      ['dem Kind den Ball', 'den Ball dem Kind', 'dem Ball den Kind'], 0,
      ['Two nouns: dative first, accusative second.', 'Deux noms : datif d’abord, accusatif ensuite.'],
    ),
    match(
      'sp-ws-e16',
      [
        ['heute', 'Te — when', 'Te — quand'],
        ['wegen des Regens', 'Ka — why', 'Ka — pourquoi'],
        ['mit dem Bus', 'Mo — how', 'Mo — comment'],
        ['in die Stadt', 'Lo — where', 'Lo — où'],
      ],
      ['Match each detail with its TeKaMoLo letter.', 'Associe chaque complément à sa lettre TeKaMoLo.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Verb at the end: subordinate clauses', 'Verbe à la fin : les subordonnées',
      'weil, dass, wenn, obwohl … and the case of sentence-initial clauses.', 'weil, dass, wenn, obwohl … et le cas des subordonnées en début de phrase.',
    ),
    grammar(
      'sp-ws-sub',
      ['Subordinate clauses send the verb to the end', 'Les subordonnées envoient le verbe à la fin'],
      [
        'After a subordinating conjunction the **conjugated verb goes to the end** of the clause:\n\n- **weil** (because) · **dass** (that) · **wenn** (if, when) · **obwohl** (although) · **ob** (whether)\n\n- Ich bleibe zu Hause, **weil** ich krank **bin**.\n- Ich glaube, **dass** er heute nicht **kommt**.\n- Ich weiß nicht, **ob** sie Zeit **hat**.\n\nWith a two-part verb, the conjugated part is the very last word: *…, weil ich heute arbeiten **muss**.*',
        'Après une conjonction de subordination, le **verbe conjugué va à la fin** de la proposition :\n\n- **weil** (parce que) · **dass** (que) · **wenn** (si, quand) · **obwohl** (bien que) · **ob** (si, interrogatif)\n\n- Ich bleibe zu Hause, **weil** ich krank **bin**.\n- Ich glaube, **dass** er heute nicht **kommt**.\n- Ich weiß nicht, **ob** sie Zeit **hat**.\n\nAvec un verbe en deux parties, la partie conjuguée est le tout dernier mot : *…, weil ich heute arbeiten **muss**.*',
      ],
      [
        ['Ich bleibe zu Hause, weil ich krank bin.', 'I am staying at home because I am ill.', 'Je reste à la maison parce que je suis malade.'],
        ['Ich glaube, dass er heute nicht kommt.', 'I think that he is not coming today.', 'Je crois qu’il ne vient pas aujourd’hui.'],
        ['Ich weiß nicht, ob sie Zeit hat.', 'I don’t know whether she has time.', 'Je ne sais pas si elle a le temps.'],
      ],
    ),
    grammar(
      'sp-ws-sub-first',
      ['When the subordinate clause comes first', 'Quand la subordonnée vient en premier'],
      [
        'If the subordinate clause stands at the **beginning**, it counts as **position 1**, so the main verb comes **right after the comma** (position 2):\n\n- **Weil ich krank bin**, **bleibe** ich zu Hause.\n- **Wenn es regnet**, **nehme** ich einen Schirm.\n\nWatch for the pattern **verb, verb**: *…bin, bleibe …*.',
        'Si la subordonnée est au **début**, elle compte pour la **position 1**, donc le verbe principal vient **juste après la virgule** (position 2) :\n\n- **Weil ich krank bin**, **bleibe** ich zu Hause.\n- **Wenn es regnet**, **nehme** ich einen Schirm.\n\nRepère le motif **verbe, verbe** : *…bin, bleibe …*.',
      ],
      [
        ['Weil ich krank bin, bleibe ich zu Hause.', 'Because I am ill, I am staying at home.', 'Parce que je suis malade, je reste à la maison.'],
        ['Wenn es regnet, nehme ich einen Schirm.', 'If it rains, I take an umbrella.', 'S’il pleut, je prends un parapluie.'],
      ],
    ),
    wo('sp-ws-e17', ['weil', 'ich', 'Ich', 'krank', 'bleibe', 'bin', 'zu', 'Hause,'], ['Ich', 'bleibe', 'zu', 'Hause,', 'weil', 'ich', 'krank', 'bin'], ['The verb "bin" goes last in the weil-clause.', 'Le verbe « bin » est en dernier dans la proposition en weil.']),
    wo('sp-ws-e18', ['regnet,', 'Wenn', 'es', 'ich', 'nehme', 'einen', 'Schirm'], ['Wenn', 'es', 'regnet,', 'nehme', 'ich', 'einen', 'Schirm'], ['After a leading clause, the main verb comes next.', 'Après une subordonnée initiale, le verbe principal suit.']),
    fb(
      'sp-ws-e19',
      ['Ich glaube, dass er heute nicht ___. (kommen)', 'Ich glaube, dass er heute nicht ___. (kommen)'],
      'kommt',
      ['The verb goes to the end of the dass-clause.', 'Le verbe va à la fin de la proposition en dass.'],
    ),
    mc(
      'sp-ws-e20',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Weil ich müde bin, gehe ich schlafen.', 'Weil ich müde bin, ich gehe schlafen.', 'Weil bin ich müde, gehe ich schlafen.'],
      ['Weil ich müde bin, gehe ich schlafen.', 'Weil ich müde bin, ich gehe schlafen.', 'Weil bin ich müde, gehe ich schlafen.'], 0,
      ['The weil-clause fills position 1, so the main verb comes right after the comma.', 'La proposition en weil occupe la position 1, donc le verbe principal suit directement la virgule.'],
    ),
    lc(
      'sp-ws-e21',
      ['Listen. Why is the speaker at home?', 'Écoute. Pourquoi la personne est-elle à la maison ?'],
      'Ich bleibe zu Hause, weil ich krank bin.',
      ['She is ill.', 'She is tired.', 'It is raining.'], ['Elle est malade.', 'Elle est fatiguée.', 'Il pleut.'], 0,
      ['Listen for "krank".', 'Écoute « krank ».'],
    ),

    wrapup(
      '**Position 2** — the conjugated verb is the second element of a statement; the subject follows if something else is first.\n\n**Position 1** — yes/no questions and commands start with the verb; W-questions start with the W-word, then the verb.\n\n**Bracket** — modal, Perfekt, future and separable verbs: finite verb second, the rest at the end.\n\n**TeKaMoLo** — Time, Cause, Manner, Place; dative before accusative; pronouns first.\n\n**Verb last** — weil, dass, wenn, obwohl, ob send the verb to the end; a leading clause is position 1.',
      '**Position 2** — le verbe conjugué est le deuxième élément d’une affirmation ; le sujet suit si autre chose est en tête.\n\n**Position 1** — les questions fermées et les ordres commencent par le verbe ; les questions en W par le mot en W, puis le verbe.\n\n**Cadre** — modal, Perfekt, futur et verbes séparables : verbe conjugué en 2e, le reste à la fin.\n\n**TeKaMoLo** — Temps, Cause, Manière, Lieu ; datif avant accusatif ; pronoms d’abord.\n\n**Verbe en dernier** — weil, dass, wenn, obwohl, ob envoient le verbe à la fin ; une subordonnée initiale compte pour la position 1.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Word order', 'Quiz final : l’ordre des mots'),
    mc(
      'sp-ws-q1',
      ['Where is the conjugated verb in a German statement?', 'Où se trouve le verbe conjugué dans une affirmation allemande ?'],
      ['Position 2', 'Position 1', 'The end'], ['Position 2', 'Position 1', 'À la fin'], 0,
      ['Verb second is the golden rule.', 'Le verbe en 2e position est la règle d’or.'],
    ),
    wo('sp-ws-q2', ['gehe', 'Morgen', 'ich', 'schwimmen'], ['Morgen', 'gehe', 'ich', 'schwimmen'], ['Time first, then verb, then subject.', 'Temps d’abord, puis verbe, puis sujet.']),
    wo('sp-ws-q3', ['wohnst', 'Wo', 'du'], ['Wo', 'wohnst', 'du'], ['W-question.', 'Question en W.']),
    wo('sp-ws-q4', ['du', 'Spielst', 'Fußball'], ['Spielst', 'du', 'Fußball'], ['Yes/no question: verb first.', 'Question fermée : verbe en premier.']),
    mc(
      'sp-ws-q5',
      ['Which conjunction does NOT change the word order?', 'Quelle conjonction ne change PAS l’ordre des mots ?'],
      ['denn', 'weil', 'dass'], ['denn', 'weil', 'dass'], 0,
      ['denn, aber, und, oder, sondern are on position 0.', 'denn, aber, und, oder, sondern sont en position 0.'],
    ),
    fb(
      'sp-ws-q6',
      ['Ich weiß, dass sie heute nicht ___. (kommen)', 'Ich weiß, dass sie heute nicht ___. (kommen)'],
      'kommt',
      ['Verb at the end of the dass-clause.', 'Verbe à la fin de la proposition en dass.'],
    ),
    wo('sp-ws-q7', ['habe', 'Ich', 'gesehen', 'Film', 'einen'], ['Ich', 'habe', 'einen', 'Film', 'gesehen'], ['Perfekt bracket.', 'Cadre du Perfekt.']),
    wo('sp-ws-q8', ['Ich', 'auf', 'früh', 'stehe'], ['Ich', 'stehe', 'früh', 'auf'], ['Separable prefix at the end.', 'Préfixe séparable à la fin.']),
    mc(
      'sp-ws-q9',
      ['TeKaMoLo: which order is right?', 'TeKaMoLo : quel ordre est correct ?'],
      ['Ich fahre heute mit dem Zug nach Köln.', 'Ich fahre nach Köln mit dem Zug heute.', 'Ich fahre mit dem Zug heute nach Köln.'],
      ['Ich fahre heute mit dem Zug nach Köln.', 'Ich fahre nach Köln mit dem Zug heute.', 'Ich fahre mit dem Zug heute nach Köln.'], 0,
      ['Time, manner, place.', 'Temps, manière, lieu.'],
    ),
    mc(
      'sp-ws-q10',
      ['Complete: "Wenn es regnet, ___ ich zu Hause."', 'Complète : « Wenn es regnet, ___ ich zu Hause. »'],
      ['bleibe', 'ich bleibe', 'bleiben'], ['bleibe', 'ich bleibe', 'bleiben'], 0,
      ['Main verb right after the comma.', 'Verbe principal juste après la virgule.'],
    ),
    wo('sp-ws-q11', ['er', 'Er', 'ist', 'krank', 'weil', 'bleibt', 'zu', 'Hause,'], ['Er', 'bleibt', 'zu', 'Hause,', 'weil', 'er', 'krank', 'ist'], ['Verb at the end after weil.', 'Verbe à la fin après weil.']),
    match(
      'sp-ws-q12',
      [
        ['Wann kommst du?', 'W-question', 'question en W'],
        ['Kommst du heute?', 'yes/no question', 'question fermée'],
        ['Komm bitte!', 'command', 'ordre'],
        ['Ich kann gut kochen.', 'statement with modal', 'affirmation avec modal'],
      ],
      ['Match each sentence with its type.', 'Associe chaque phrase à son type.'],
    ),
    lc(
      'sp-ws-q13',
      ['Listen. Which word order does the sentence use?', 'Écoute. Quel ordre des mots la phrase utilise-t-elle ?'],
      'Weil ich müde bin, gehe ich schlafen.',
      ['Subordinate clause first, then main verb', 'Main verb in position 1', 'Question word first'],
      ['Subordonnée d’abord, puis verbe principal', 'Verbe principal en position 1', 'Mot interrogatif en premier'], 0,
      ['Listen for "bin, gehe".', 'Écoute « bin, gehe ».'],
    ),
    fb(
      'sp-ws-q14',
      ['___ wohnst du? (where)', '___ wohnst du ? (où)'],
      'Wo',
      ['A W-question about place.', 'Une question en W sur le lieu.'],
    ),
  ],
});

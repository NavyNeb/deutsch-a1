import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const trennbareVerben = defineSpecial({
  slug: 'trennbare-verben',
  number: 2,
  group: 'verbs',
  levels: ['A1', 'B1'],
  related: ['l5', 'l17', 'a2-l2', 'b1-l7'],
  title: ['Trennbare Verben', 'Separable verbs', 'Verbes à particule séparable'],
  theme: [
    'Verbs whose prefix jumps to the end of the sentence: recognising them, splitting them, and using them in every tense',
    'Les verbes dont la particule saute en fin de phrase : les reconnaître, les séparer et les employer à tous les temps',
  ],
  goals: [
    'Tell separable from inseparable prefixes by sound and by list',
    'Split the verb correctly in main clauses and questions',
    'Keep the verb together with modals, in subordinate clauses and with zu',
    'Build the imperative and the Perfekt (ge- in the middle)',
    'Use the most frequent prefixes and their meanings',
  ],
  goalsFr: [
    'Distinguer particules séparables et inséparables par le son et par la liste',
    'Séparer correctement le verbe dans les phrases principales et les questions',
    'Garder le verbe groupé avec les modaux, dans les subordonnées et avec zu',
    'Former l’impératif et le Perfekt (ge- au milieu)',
    'Employer les particules les plus fréquentes et leur sens',
  ],
  steps: [
    intro(
      'Ich stehe um sieben Uhr auf', 'Je me lève à sept heures',
      'In German a verb can break in two: the main part stays in second position while the little prefix runs to the very end of the sentence. It looks strange at first, but once you see the pattern you will use it for half of your daily routine.',
      'En allemand, un verbe peut se couper en deux : la partie principale reste en 2e position, tandis que la petite particule court tout à la fin de la phrase. C’est étrange au début, mais une fois le schéma compris, tu l’utiliseras pour la moitié de ton quotidien.',
      [
        'Recognise separable and inseparable verbs',
        'Split the verb in statements and questions',
        'Keep it whole with modals, zu and subordinate clauses',
        'Form the imperative and the Perfekt',
      ],
      [
        'Reconnaître les verbes séparables et inséparables',
        'Séparer le verbe dans les phrases et les questions',
        'Le garder entier avec les modaux, zu et les subordonnées',
        'Former l’impératif et le Perfekt',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Separable or inseparable?', 'Séparable ou inséparable ?',
      'The first question for every prefix verb.', 'La première question pour chaque verbe à préfixe.',
    ),
    grammar(
      'sp-tv-what',
      ['What is a separable verb?', 'Qu’est-ce qu’un verbe séparable ?'],
      [
        'A **separable verb** is made of a **prefix** + a **base verb**: **auf** + stehen = **aufstehen**. In a main clause the base verb is conjugated and stays in **position 2**; the prefix goes to the **end**.\n\n- **aufstehen** → Ich **stehe** um sieben Uhr **auf**.\n- **ankommen** → Der Zug **kommt** um acht Uhr **an**.\n\nThe key sign: the prefix is **stressed** when you say the word: **AUF**stehen, **AN**kommen, **EIN**kaufen.',
        'Un **verbe séparable** se compose d’une **particule** + d’un **verbe de base** : **auf** + stehen = **aufstehen**. Dans une phrase principale, le verbe de base est conjugué et reste en **2e position** ; la particule part à la **fin**.\n\n- **aufstehen** → Ich **stehe** um sieben Uhr **auf**.\n- **ankommen** → Der Zug **kommt** um acht Uhr **an**.\n\nLe signe clé : la particule est **accentuée** quand on prononce le mot : **AUF**stehen, **AN**kommen, **EIN**kaufen.',
      ],
      [
        ['Ich stehe um sieben Uhr auf.', 'I get up at seven o’clock.', 'Je me lève à sept heures.'],
        ['Der Zug kommt um acht Uhr an.', 'The train arrives at eight o’clock.', 'Le train arrive à huit heures.'],
        ['Wir kaufen am Samstag ein.', 'We go shopping on Saturday.', 'Nous faisons les courses samedi.'],
      ],
      'satzklammer',
    ),
    grammar(
      'sp-tv-list',
      ['Prefix lists: who can separate?', 'Listes de particules : qui se sépare ?'],
      [
        'Some prefixes **always separate**: **ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, weg-, fern-, fest-, nach-, teil-**.\n\nOther prefixes **never separate** and are **never stressed**: **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**.\n\n- Separable: **an**rufen, **mit**bringen, **ab**holen, **fern**sehen\n- Inseparable: be**su**chen, ver**ste**hen, er**zäh**len, ent**schei**den\n\nA few prefixes (**über-, um-, unter-, durch-, wieder-**) can go either way: learn the verb together with its meaning, for example **umsteigen** (to change trains) is separable, **übersetzen** (to translate) is inseparable.',
        'Certaines particules **se séparent toujours** : **ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-, weg-, fern-, fest-, nach-, teil-**.\n\nD’autres **ne se séparent jamais** et ne sont **jamais accentuées** : **be-, emp-, ent-, er-, ge-, miss-, ver-, zer-**.\n\n- Séparables : **an**rufen, **mit**bringen, **ab**holen, **fern**sehen\n- Inséparables : be**su**chen, ver**ste**hen, er**zäh**len, ent**schei**den\n\nQuelques particules (**über-, um-, unter-, durch-, wieder-**) fonctionnent dans les deux sens : apprends le verbe avec son sens, par exemple **umsteigen** (changer de train) est séparable, **übersetzen** (traduire) est inséparable.',
      ],
      [
        ['Ich bringe dir ein Buch mit.', 'I bring you a book.', 'Je t’apporte un livre.'],
        ['Ich besuche meine Oma.', 'I visit my grandmother.', 'Je rends visite à ma grand-mère.'],
        ['Verstehst du das?', 'Do you understand that?', 'Comprends-tu cela ?'],
        ['Wir steigen in Köln um.', 'We change trains in Cologne.', 'Nous changeons de train à Cologne.'],
      ],
    ),
    vocab('sp-trennbare-verben-aufstehen', 'aufstehen', 'to get up', 'se lever', null, 'AUF-ste-hen', 'OWF-shtay-en', ['Ich stehe jeden Tag früh auf.', 'I get up early every day.', 'Je me lève tôt chaque jour.']),
    vocab('sp-trennbare-verben-ankommen', 'ankommen', 'to arrive', 'arriver', null, 'AN-kom-men', 'AHN-kom-en', ['Wann kommst du in Berlin an?', 'When do you arrive in Berlin?', 'Quand arrives-tu à Berlin ?']),
    vocab('sp-trennbare-verben-abholen', 'abholen', 'to pick up, to collect', 'aller chercher', null, 'AB-ho-len', 'AHP-hoh-len', ['Ich hole dich am Bahnhof ab.', 'I will pick you up at the station.', 'Je viens te chercher à la gare.']),
    vocab('sp-trennbare-verben-einkaufen', 'einkaufen', 'to shop', 'faire les courses', null, 'EIN-kau-fen', 'INE-kow-fen', ['Wir kaufen im Supermarkt ein.', 'We shop at the supermarket.', 'Nous faisons les courses au supermarché.']),
    vocab('sp-trennbare-verben-fernsehen', 'fernsehen', 'to watch TV', 'regarder la télé', null, 'FERN-se-hen', 'FAIRN-zay-en', ['Abends sehen wir oft fern.', 'In the evening we often watch TV.', 'Le soir, nous regardons souvent la télé.']),
    mc(
      'sp-tv-e1',
      ['Which verb is separable?', 'Quel verbe est séparable ?'],
      ['besuchen', 'ankommen', 'verstehen'], ['besuchen', 'ankommen', 'verstehen'], 1,
      ['**an-** is a separable prefix: AN-kommen. **be-** and **ver-** never separate.', '**an-** est une particule séparable : AN-kommen. **be-** et **ver-** ne se séparent jamais.'],
    ),
    mc(
      'sp-tv-e2',
      ['Which verb is stressed on the BASE (ver-STE-hen) and is therefore inseparable?', 'Quel verbe est accentué sur la BASE (ver-STE-hen) et donc inséparable ?'],
      ['aufstehen', 'verstehen', 'mitkommen'], ['aufstehen', 'verstehen', 'mitkommen'], 1,
      ['Stress on the prefix = separable (AUFstehen). Stress on the base = inseparable (verSTEhen).', 'Accent sur la particule = séparable (AUFstehen). Accent sur la base = inséparable (verSTEhen).'],
    ),
    match(
      'sp-tv-e3',
      [
        ['aufstehen', 'to get up', 'se lever'],
        ['ankommen', 'to arrive', 'arriver'],
        ['abholen', 'to pick up', 'aller chercher'],
        ['einkaufen', 'to shop', 'faire les courses'],
        ['fernsehen', 'to watch TV', 'regarder la télé'],
      ],
      ['Match each separable verb with its meaning.', 'Associe chaque verbe séparable à son sens.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Splitting in main clauses', 'Séparer dans les phrases principales',
      'Base verb in position 2, prefix at the end — in statements and in questions.', 'Verbe de base en 2e position, particule à la fin — dans les phrases et les questions.',
    ),
    grammar(
      'sp-tv-conj',
      ['Conjugation: aufstehen', 'Conjugaison : aufstehen'],
      [
        'Conjugate the **base verb** as usual and put the **prefix at the end**:\n\n- ich stehe **auf**, du stehst **auf**, er steht **auf**\n- wir stehen **auf**, ihr steht **auf**, sie stehen **auf**\n\nIrregular base verbs keep their irregularity: **anfangen** → er f**ä**ngt **an**; **einladen** → sie l**ä**dt **ein**; **fernsehen** → er s**ie**ht **fern**.',
        'Conjugue le **verbe de base** comme d’habitude et place la **particule à la fin** :\n\n- ich stehe **auf**, du stehst **auf**, er steht **auf**\n- wir stehen **auf**, ihr steht **auf**, sie stehen **auf**\n\nLes verbes de base irréguliers gardent leur irrégularité : **anfangen** → er f**ä**ngt **an** ; **einladen** → sie l**ä**dt **ein** ; **fernsehen** → er s**ie**ht **fern**.',
      ],
      [
        ['ich stehe auf', 'I get up', 'je me lève'],
        ['du stehst auf', 'you get up', 'tu te lèves'],
        ['er / sie / es steht auf', 'he / she / it gets up', 'il / elle se lève'],
        ['wir stehen auf', 'we get up', 'nous nous levons'],
        ['ihr steht auf', 'you (pl.) get up', 'vous vous levez'],
        ['sie / Sie stehen auf', 'they / you (formal) get up', 'ils / vous vous levez'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-tv-questions',
      ['Questions and extra information', 'Questions et compléments'],
      [
        'In **yes/no questions** the base verb comes first and the prefix still goes to the end. In **W-questions** the question word comes first, the verb is second:\n\n- **Rufst** du mich morgen **an**?\n- **Wann kommt** der Zug **an**?\n\nAll other information (time, place, objects) sits **between** the verb and the prefix. That is why the prefix feels so far away.',
        'Dans les **questions fermées**, le verbe de base vient en premier et la particule reste à la fin. Dans les **questions ouvertes**, le mot interrogatif ouvre la phrase, le verbe est en 2e position :\n\n- **Rufst** du mich morgen **an** ?\n- **Wann kommt** der Zug **an** ?\n\nToutes les autres informations (temps, lieu, compléments) se placent **entre** le verbe et la particule. C’est pourquoi la particule paraît si loin.',
      ],
      [
        ['Rufst du mich morgen an?', 'Will you call me tomorrow?', 'Tu m’appelleras demain ?'],
        ['Wann kommt der Zug in München an?', 'When does the train arrive in Munich?', 'Quand le train arrive-t-il à Munich ?'],
        ['Holst du die Kinder heute von der Schule ab?', 'Are you picking up the children from school today?', 'Vas-tu chercher les enfants à l’école aujourd’hui ?'],
      ],
    ),
    wo('sp-tv-e4', ['stehe', 'Ich', 'um', 'sieben', 'Uhr', 'auf'], ['Ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf'], ['Verb in position 2, prefix at the very end.', 'Verbe en 2e position, particule tout à la fin.']),
    wo('sp-tv-e5', ['an?', 'Zug', 'Wann', 'der', 'kommt'], ['Wann', 'kommt', 'der', 'Zug', 'an?'], ['W-question: question word, verb, subject … prefix.', 'Question ouverte : mot interrogatif, verbe, sujet … particule.']),
    fb(
      'sp-tv-e6',
      ['Ich rufe dich morgen ___. (anrufen)', 'Ich rufe dich morgen ___. (anrufen)'],
      'an',
      ['The prefix of anrufen is an-.', 'La particule de anrufen est an-.'],
    ),
    fb(
      'sp-tv-e7',
      ['Wir kaufen am Samstag ___. (einkaufen)', 'Wir kaufen am Samstag ___. (einkaufen)'],
      'ein',
      ['The prefix of einkaufen is ein-.', 'La particule de einkaufen est ein-.'],
    ),
    fb(
      'sp-tv-e8',
      ['Sie holt ihre Tochter vom Kindergarten ___. (abholen)', 'Sie holt ihre Tochter vom Kindergarten ___. (abholen)'],
      'ab',
      ['The prefix of abholen is ab-.', 'La particule de abholen est ab-.'],
    ),
    mc(
      'sp-tv-e9',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich rufe dich morgen an.', 'Ich anrufe dich morgen.', 'Ich rufe an dich morgen.'],
      ['Ich rufe dich morgen an.', 'Ich anrufe dich morgen.', 'Ich rufe an dich morgen.'], 0,
      ['The prefix goes to the very end of a main clause.', 'La particule va tout à la fin d’une phrase principale.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Staying together', 'Rester ensemble',
      'Modals, subordinate clauses, zu and the imperative.', 'Modaux, subordonnées, zu et impératif.',
    ),
    grammar(
      'sp-tv-together',
      ['Modals and subordinate clauses', 'Modaux et subordonnées'],
      [
        'The verb **only splits when it is the conjugated verb of a main clause**. In every other situation the prefix stays attached:\n\n- With a **modal verb**: the separable verb is an **infinitive at the end** → Ich muss früh **aufstehen**.\n- In a **subordinate clause** (weil, dass, wenn …) the conjugated verb goes to the end and **rejoins its prefix** → …, weil ich früh **aufstehe**.',
        'Le verbe **ne se sépare que lorsqu’il est le verbe conjugué d’une phrase principale**. Dans tous les autres cas, la particule reste collée :\n\n- Avec un **verbe modal** : le verbe séparable est un **infinitif à la fin** → Ich muss früh **aufstehen**.\n- Dans une **subordonnée** (weil, dass, wenn …), le verbe conjugué va à la fin et **retrouve sa particule** → …, weil ich früh **aufstehe**.',
      ],
      [
        ['Ich muss morgen früh aufstehen.', 'I have to get up early tomorrow.', 'Je dois me lever tôt demain.'],
        ['Ich bin müde, weil ich früh aufstehe.', 'I am tired because I get up early.', 'Je suis fatigué parce que je me lève tôt.'],
        ['Weißt du, wann der Film anfängt?', 'Do you know when the film starts?', 'Sais-tu quand le film commence ?'],
      ],
    ),
    grammar(
      'sp-tv-imp-zu',
      ['Imperative and infinitive with zu', 'Impératif et infinitif avec zu'],
      [
        'In the **imperative** the verb splits like in a main clause: the prefix goes to the end.\n\n- **Steh** früh **auf**! · **Ruf** mich **an**! · **Macht** die Tür **zu**!\n- Formal: **Setzen** Sie sich! · **Kommen** Sie bitte **mit**!\n\nWith an **infinitive with zu**, the **zu is inserted between the prefix and the verb**: **auf·zu·stehen**, **an·zu·rufen**, **ein·zu·kaufen**.\n\n- Ich habe keine Lust, früh **aufzustehen**.',
        'À l’**impératif**, le verbe se sépare comme dans une phrase principale : la particule va à la fin.\n\n- **Steh** früh **auf** ! · **Ruf** mich **an** ! · **Macht** die Tür **zu** !\n- Forme polie : **Setzen** Sie sich ! · **Kommen** Sie bitte **mit** !\n\nAvec un **infinitif avec zu**, **zu s’insère entre la particule et le verbe** : **auf·zu·stehen**, **an·zu·rufen**, **ein·zu·kaufen**.\n\n- Ich habe keine Lust, früh **aufzustehen**.',
      ],
      [
        ['Steh bitte auf!', 'Please get up!', 'Lève-toi, s’il te plaît !'],
        ['Mach das Licht aus!', 'Turn off the light!', 'Éteins la lumière !'],
        ['Ich habe vergessen, dich anzurufen.', 'I forgot to call you.', 'J’ai oublié de t’appeler.'],
        ['Es ist nicht leicht, früh aufzustehen.', 'It is not easy to get up early.', 'Ce n’est pas facile de se lever tôt.'],
      ],
    ),
    wo('sp-tv-e10', ['muss', 'Ich', 'früh', 'aufstehen', 'morgen'], ['Ich', 'muss', 'morgen', 'früh', 'aufstehen'], ['With a modal the separable verb stays whole at the end.', 'Avec un modal, le verbe séparable reste entier à la fin.']),
    wo('sp-tv-e11', ['weil', 'früh', 'Ich', 'aufstehe', 'bin', 'ich', 'müde,'], ['Ich', 'bin', 'müde,', 'weil', 'ich', 'früh', 'aufstehe'], ['After weil the verb goes last and the prefix rejoins it.', 'Après weil, le verbe part à la fin et retrouve sa particule.']),
    fb(
      'sp-tv-e12',
      ['Mach bitte das Licht ___! (ausmachen)', 'Mach bitte das Licht ___ ! (ausmachen)'],
      'aus',
      ['Imperative: the prefix goes to the end.', 'Impératif : la particule va à la fin.'],
    ),
    mc(
      'sp-tv-e13',
      ['"Ich habe keine Lust, früh ___."', '« Ich habe keine Lust, früh ___. »'],
      ['aufzustehen', 'zu aufstehen', 'aufstehen zu'], ['aufzustehen', 'zu aufstehen', 'aufstehen zu'], 0,
      ['**zu** goes between the prefix and the base verb: auf-zu-stehen.', '**zu** se place entre la particule et le verbe de base : auf-zu-stehen.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'The Perfekt', 'Le Perfekt',
      'Where does the ge- go? In the middle!', 'Où va le ge- ? Au milieu !',
    ),
    grammar(
      'sp-tv-perfekt',
      ['Participle: prefix + ge + base', 'Participe : particule + ge + base'],
      [
        'In the **Perfekt**, the participle of a separable verb takes **ge- in the middle**, between the prefix and the base:\n\n- aufstehen → **auf·ge·standen**\n- anrufen → **an·ge·rufen**\n- einkaufen → **ein·ge·kauft**\n- mitbringen → **mit·ge·bracht**\n- fernsehen → **fern·ge·sehen**\n\nThe participle itself goes to the **end** of the sentence, with **haben** or **sein** in position 2.\n\n- Ich **habe** dich gestern **angerufen**.\n- Er **ist** um sieben Uhr **aufgestanden**.',
        'Au **Perfekt**, le participe d’un verbe séparable prend **ge- au milieu**, entre la particule et la base :\n\n- aufstehen → **auf·ge·standen**\n- anrufen → **an·ge·rufen**\n- einkaufen → **ein·ge·kauft**\n- mitbringen → **mit·ge·bracht**\n- fernsehen → **fern·ge·sehen**\n\nLe participe lui-même va à la **fin** de la phrase, avec **haben** ou **sein** en 2e position.\n\n- Ich **habe** dich gestern **angerufen**.\n- Er **ist** um sieben Uhr **aufgestanden**.',
      ],
      [
        ['Ich habe dich gestern angerufen.', 'I called you yesterday.', 'Je t’ai appelé hier.'],
        ['Er ist um sieben Uhr aufgestanden.', 'He got up at seven o’clock.', 'Il s’est levé à sept heures.'],
        ['Wir haben im Supermarkt eingekauft.', 'We shopped at the supermarket.', 'Nous avons fait les courses au supermarché.'],
        ['Sie ist gestern in Wien angekommen.', 'She arrived in Vienna yesterday.', 'Elle est arrivée à Vienne hier.'],
      ],
    ),
    grammar(
      'sp-tv-insep-perfekt',
      ['Inseparable verbs: no ge-', 'Verbes inséparables : pas de ge-'],
      [
        'Inseparable verbs (be-, ver-, er-, ent-, ge-, zer-, emp-, miss-) **never add ge-**. Their participle is simply the base form with the prefix:\n\n- besuchen → **besucht**\n- verstehen → **verstanden**\n- erzählen → **erzählt**\n- vergessen → **vergessen**\n\nBecause the stress is on the base, the verb has no room for another ge-.',
        'Les verbes inséparables (be-, ver-, er-, ent-, ge-, zer-, emp-, miss-) **n’ajoutent jamais ge-**. Leur participe est simplement la forme de base avec la particule :\n\n- besuchen → **besucht**\n- verstehen → **verstanden**\n- erzählen → **erzählt**\n- vergessen → **vergessen**\n\nComme l’accent est sur la base, le verbe n’a pas de place pour un autre ge-.',
      ],
      [
        ['Ich habe meine Oma besucht.', 'I visited my grandmother.', 'J’ai rendu visite à ma grand-mère.'],
        ['Hast du das verstanden?', 'Did you understand that?', 'As-tu compris cela ?'],
        ['Er hat seinen Schlüssel vergessen.', 'He forgot his key.', 'Il a oublié sa clé.'],
      ],
    ),
    fb(
      'sp-tv-e14',
      ['Ich bin um sieben Uhr ___. (aufstehen — Partizip)', 'Ich bin um sieben Uhr ___. (aufstehen — participe)'],
      'aufgestanden',
      ['auf + ge + standen.', 'auf + ge + standen.'],
    ),
    fb(
      'sp-tv-e15',
      ['Hast du Oma schon ___? (anrufen — Partizip)', 'Hast du Oma schon ___ ? (anrufen — participe)'],
      'angerufen',
      ['an + ge + rufen.', 'an + ge + rufen.'],
    ),
    fb(
      'sp-tv-e16',
      ['Wir haben im Supermarkt ___. (einkaufen — Partizip)', 'Wir haben im Supermarkt ___. (einkaufen — participe)'],
      'eingekauft',
      ['ein + ge + kauft (regular: ends in -t).', 'ein + ge + kauft (régulier : finit en -t).'],
    ),
    mc(
      'sp-tv-e17',
      ['What is the participle of "besuchen"?', 'Quel est le participe de « besuchen » ?'],
      ['besucht', 'gebesucht', 'begesucht'], ['besucht', 'gebesucht', 'begesucht'], 0,
      ['be- is inseparable, so no ge-.', 'be- est inséparable, donc pas de ge-.'],
    ),
    match(
      'sp-tv-e18',
      [
        ['ankommen', 'angekommen', 'angekommen'],
        ['mitbringen', 'mitgebracht', 'mitgebracht'],
        ['fernsehen', 'ferngesehen', 'ferngesehen'],
        ['abholen', 'abgeholt', 'abgeholt'],
      ],
      ['Match each infinitive with its participle.', 'Associe chaque infinitif à son participe.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Prefixes with a meaning', 'Des particules qui ont un sens',
      'Learn the logic of the prefixes and your vocabulary doubles.', 'Comprends la logique des particules et ton vocabulaire double.',
    ),
    grammar(
      'sp-tv-meaning',
      ['The most useful prefixes', 'Les particules les plus utiles'],
      [
        'Many prefixes carry a clear idea. Once you know it, new verbs become easy to guess:\n\n- **auf-** open, up: aufmachen, aufstehen, aufräumen\n- **zu-** close: zumachen · **ein-** in: einsteigen, einladen\n- **aus-** out, off: aussteigen, ausgehen, ausmachen\n- **an-** arrive, start, on: ankommen, anfangen, anmachen\n- **ab-** away, off: abfahren, abholen\n- **mit-** along with: mitkommen, mitnehmen\n- **zurück-** back: zurückkommen, zurückgeben\n- **vor-** before, forward: vorbereiten, vorstellen',
        'Beaucoup de particules portent une idée claire. Une fois qu’on la connaît, les nouveaux verbes deviennent faciles à deviner :\n\n- **auf-** ouvrir, vers le haut : aufmachen, aufstehen, aufräumen\n- **zu-** fermer : zumachen · **ein-** dans : einsteigen, einladen\n- **aus-** dehors, éteint : aussteigen, ausgehen, ausmachen\n- **an-** arriver, commencer, allumer : ankommen, anfangen, anmachen\n- **ab-** loin de, départ : abfahren, abholen\n- **mit-** avec, en plus : mitkommen, mitnehmen\n- **zurück-** en retour : zurückkommen, zurückgeben\n- **vor-** avant, vers l’avant : vorbereiten, vorstellen',
      ],
      [
        ['Der Bus fährt um neun Uhr ab.', 'The bus leaves at nine o’clock.', 'Le bus part à neuf heures.'],
        ['Kommst du heute Abend mit?', 'Are you coming along tonight?', 'Tu viens avec nous ce soir ?'],
        ['Wir steigen am Hauptbahnhof aus.', 'We get off at the main station.', 'Nous descendons à la gare centrale.'],
        ['Ich gebe dir das Buch morgen zurück.', 'I will give the book back to you tomorrow.', 'Je te rendrai le livre demain.'],
      ],
    ),
    grammar(
      'sp-tv-pairs',
      ['Opposite pairs', 'Paires d’opposés'],
      [
        'Prefixes often form **opposite pairs**. Learn them together:\n\n- **aufmachen** ↔ **zumachen** (open ↔ close)\n- **einsteigen** ↔ **aussteigen** (get on ↔ get off)\n- **ankommen** ↔ **abfahren** (arrive ↔ depart)\n- **einschalten / anmachen** ↔ **ausschalten / ausmachen** (switch on ↔ off)\n- **einschlafen** ↔ **aufwachen** (fall asleep ↔ wake up)\n- **hingehen** ↔ **zurückkommen** (go there ↔ come back)',
        'Les particules forment souvent des **paires d’opposés**. Apprends-les ensemble :\n\n- **aufmachen** ↔ **zumachen** (ouvrir ↔ fermer)\n- **einsteigen** ↔ **aussteigen** (monter ↔ descendre)\n- **ankommen** ↔ **abfahren** (arriver ↔ partir)\n- **einschalten / anmachen** ↔ **ausschalten / ausmachen** (allumer ↔ éteindre)\n- **einschlafen** ↔ **aufwachen** (s’endormir ↔ se réveiller)\n- **hingehen** ↔ **zurückkommen** (y aller ↔ revenir)',
      ],
      [
        ['Mach bitte das Fenster auf.', 'Please open the window.', 'Ouvre la fenêtre, s’il te plaît.'],
        ['Mach bitte die Tür zu.', 'Please close the door.', 'Ferme la porte, s’il te plaît.'],
        ['Ich schlafe immer sofort ein und wache um sechs Uhr auf.', 'I always fall asleep at once and wake up at six.', 'Je m’endors toujours tout de suite et me réveille à six heures.'],
      ],
    ),
    vocab('sp-trennbare-verben-mitkommen', 'mitkommen', 'to come along', 'venir avec', null, 'MIT-kom-men', 'MIT-kom-en', ['Kommst du mit ins Kino?', 'Are you coming along to the cinema?', 'Tu viens avec nous au cinéma ?']),
    vocab('sp-trennbare-verben-anfangen', 'anfangen', 'to begin, to start', 'commencer', null, 'AN-fan-gen', 'AHN-fahng-en', ['Der Kurs fängt um neun Uhr an.', 'The course starts at nine o’clock.', 'Le cours commence à neuf heures.']),
    vocab('sp-trennbare-verben-einsteigen', 'einsteigen', 'to get on, to board', 'monter (dans un véhicule)', null, 'EIN-stei-gen', 'INE-shty-gen', ['Bitte alle einsteigen!', 'Everyone please get on!', 'Tout le monde monte, s’il vous plaît !']),
    mc(
      'sp-tv-e19',
      ['What is the opposite of "aufmachen"?', 'Quel est l’opposé de « aufmachen » ?'],
      ['zumachen', 'mitmachen', 'einmachen'], ['zumachen', 'mitmachen', 'einmachen'], 0,
      ['auf- (open) ↔ zu- (close).', 'auf- (ouvrir) ↔ zu- (fermer).'],
    ),
    mc(
      'sp-tv-e20',
      ['What is the opposite of "einsteigen"?', 'Quel est l’opposé de « einsteigen » ?'],
      ['umsteigen', 'aussteigen', 'einkaufen'], ['umsteigen', 'aussteigen', 'einkaufen'], 1,
      ['ein- (in) ↔ aus- (out). Umsteigen means "to change".', 'ein- (dans) ↔ aus- (dehors). Umsteigen signifie « changer ».'],
    ),
    mc(
      'sp-tv-e21',
      ['What is the opposite of "ankommen" (for a train)?', 'Quel est l’opposé de « ankommen » (pour un train) ?'],
      ['abfahren', 'aufstehen', 'mitkommen'], ['abfahren', 'aufstehen', 'mitkommen'], 0,
      ['an- (arrive) ↔ ab- (depart).', 'an- (arriver) ↔ ab- (partir).'],
    ),

    wrapup(
      '**Idea** — prefix + base verb. Separable prefixes are stressed (AUFstehen); be-, ver-, er-, ent-, ge-, zer-, emp-, miss- never separate.\n\n**Main clause** — base verb in position 2, prefix at the end: Ich stehe um sieben auf. Questions too: Rufst du mich an?\n\n**Stays together** — with modals (muss aufstehen), in subordinate clauses (weil ich aufstehe), with zu (aufzustehen).\n\n**Imperative** — Steh auf! Ruf an!\n\n**Perfekt** — ge- in the middle: aufgestanden, angerufen, eingekauft. Inseparable: no ge-: besucht, verstanden.\n\n**Meaning** — auf/zu, ein/aus, an/ab are often opposite pairs.',
      '**Idée** — particule + verbe de base. Les particules séparables sont accentuées (AUFstehen) ; be-, ver-, er-, ent-, ge-, zer-, emp-, miss- ne se séparent jamais.\n\n**Phrase principale** — verbe de base en 2e position, particule à la fin : Ich stehe um sieben auf. Les questions aussi : Rufst du mich an ?\n\n**Reste groupé** — avec les modaux (muss aufstehen), dans les subordonnées (weil ich aufstehe), avec zu (aufzustehen).\n\n**Impératif** — Steh auf ! Ruf an !\n\n**Perfekt** — ge- au milieu : aufgestanden, angerufen, eingekauft. Inséparables : pas de ge- : besucht, verstanden.\n\n**Sens** — auf/zu, ein/aus, an/ab forment souvent des paires d’opposés.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Separable verbs', 'Quiz final : les verbes séparables'),
    mc(
      'sp-tv-q1',
      ['Which verb is separable?', 'Quel verbe est séparable ?'],
      ['verstehen', 'abholen', 'bestellen'], ['verstehen', 'abholen', 'bestellen'], 1,
      ['ab- separates; ver- and be- never do.', 'ab- se sépare ; ver- et be- jamais.'],
    ),
    mc(
      'sp-tv-q2',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Der Film fängt um acht Uhr an.', 'Der Film anfängt um acht Uhr.', 'Der Film fängt an um acht Uhr.'],
      ['Der Film fängt um acht Uhr an.', 'Der Film anfängt um acht Uhr.', 'Der Film fängt an um acht Uhr.'], 0,
      ['The prefix goes to the end of the clause.', 'La particule va à la fin de la proposition.'],
    ),
    fb(
      'sp-tv-q3',
      ['Er lädt uns zum Geburtstag ___. (einladen)', 'Er lädt uns zum Geburtstag ___. (einladen)'],
      'ein',
      ['The prefix of einladen is ein-.', 'La particule de einladen est ein-.'],
    ),
    fb(
      'sp-tv-q4',
      ['Mach bitte die Tür ___! (zumachen)', 'Mach bitte die Tür ___ ! (zumachen)'],
      'zu',
      ['Imperative: prefix at the end.', 'Impératif : particule à la fin.'],
    ),
    wo('sp-tv-q5', ['mit?', 'du', 'Kommst', 'Abend', 'heute'], ['Kommst', 'du', 'heute', 'Abend', 'mit?'], ['Yes/no question: verb first, prefix last.', 'Question fermée : verbe d’abord, particule à la fin.']),
    wo('sp-tv-q6', ['einkaufen', 'Ich', 'noch', 'heute', 'muss'], ['Ich', 'muss', 'heute', 'noch', 'einkaufen'], ['Modal in position 2, whole infinitive at the end.', 'Modal en 2e position, infinitif entier à la fin.']),
    fb(
      'sp-tv-q7',
      ['Gestern bin ich spät ___. (aufstehen — Partizip)', 'Gestern bin ich spät ___. (aufstehen — participe)'],
      'aufgestanden',
      ['auf + ge + standen, with sein.', 'auf + ge + standen, avec sein.'],
    ),
    fb(
      'sp-tv-q8',
      ['Sie hat mir ein Geschenk ___. (mitbringen — Partizip)', 'Sie hat mir ein Geschenk ___. (mitbringen — participe)'],
      'mitgebracht',
      ['mit + ge + bracht.', 'mit + ge + bracht.'],
    ),
    mc(
      'sp-tv-q9',
      ['What is the participle of "verstehen"?', 'Quel est le participe de « verstehen » ?'],
      ['verstanden', 'geverstanden', 'verstehen'], ['verstanden', 'geverstanden', 'verstehen'], 0,
      ['ver- is inseparable: no ge-.', 'ver- est inséparable : pas de ge-.'],
    ),
    mc(
      'sp-tv-q10',
      ['Which sentence uses zu correctly?', 'Quelle phrase utilise zu correctement ?'],
      ['Ich habe vergessen, dich anzurufen.', 'Ich habe vergessen, dich zu anrufen.', 'Ich habe vergessen, dich anrufen zu.'],
      ['Ich habe vergessen, dich anzurufen.', 'Ich habe vergessen, dich zu anrufen.', 'Ich habe vergessen, dich anrufen zu.'], 0,
      ['zu goes between the prefix and the base: an-zu-rufen.', 'zu se place entre la particule et la base : an-zu-rufen.'],
    ),
    mc(
      'sp-tv-q11',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich bin müde, weil ich früh aufstehe.', 'Ich bin müde, weil ich stehe früh auf.', 'Ich bin müde, weil ich früh stehe auf.'],
      ['Ich bin müde, weil ich früh aufstehe.', 'Ich bin müde, weil ich stehe früh auf.', 'Ich bin müde, weil ich früh stehe auf.'], 0,
      ['In a weil-clause the verb goes last and the prefix rejoins it.', 'Dans une proposition en weil, le verbe va à la fin et retrouve sa particule.'],
    ),
    match(
      'sp-tv-q12',
      [
        ['abfahren', 'to depart', 'partir'],
        ['mitnehmen', 'to take along', 'emporter'],
        ['zurückkommen', 'to come back', 'revenir'],
        ['ausgehen', 'to go out', 'sortir'],
      ],
      ['Match each verb with its meaning.', 'Associe chaque verbe à son sens.'],
    ),
    lc(
      'sp-tv-q13',
      ['Listen. What does the speaker do every morning?', 'Écoute. Que fait la personne chaque matin ?'],
      'Ich stehe jeden Morgen um sechs Uhr auf.',
      ['Gets up at six', 'Goes to bed at six', 'Arrives at six'], ['Se lève à six heures', 'Se couche à six heures', 'Arrive à six heures'], 0,
      ['Listen for the prefix "auf" at the end.', 'Écoute la particule « auf » à la fin.'],
    ),
    lc(
      'sp-tv-q14',
      ['Listen. What happened to the train?', 'Écoute. Qu’est-il arrivé au train ?'],
      'Der Zug ist schon abgefahren.',
      ['It has already left', 'It is arriving now', 'It is late'], ['Il est déjà parti', 'Il arrive maintenant', 'Il a du retard'], 0,
      ['abgefahren = left (ab + ge + fahren).', 'abgefahren = parti (ab + ge + fahren).'],
    ),
  ],
});

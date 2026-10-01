import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const verbenPraepositionen = defineSpecial({
  slug: 'verben-praepositionen',
  number: 8,
  group: 'verbs',
  levels: ['A2', 'B1'],
  related: ['b1-l10', 'a2-l7', 'a2-l9'],
  title: ['Verben mit Präpositionen', 'Verbs with prepositions', 'Les verbes avec prépositions'],
  theme: [
    'Fixed verb + preposition pairs, their case, wo(r)- questions and da(r)- replacements',
    'Couples verbe + préposition, leur cas, questions en wo(r)- et remplacement par da(r)-',
  ],
  goals: [
    'Learn verbs together with their fixed preposition',
    'Know whether the preposition takes accusative or dative',
    'Ask questions with wo(r)- and with preposition + wen / wem',
    'Replace a prepositional object with da(r)-',
    'Connect da(r)- with dass-clauses and zu-infinitives',
    'Avoid classic confusions such as freuen auf / über',
  ],
  goalsFr: [
    'Apprendre les verbes avec leur préposition fixe',
    'Savoir si la préposition demande l’accusatif ou le datif',
    'Poser des questions avec wo(r)- et avec préposition + wen / wem',
    'Remplacer un complément prépositionnel par da(r)-',
    'Relier da(r)- à une subordonnée en dass ou à un infinitif avec zu',
    'Éviter les confusions classiques comme freuen auf / über',
  ],
  steps: [
    intro(
      'Worauf wartest du?', 'Qu’attends-tu ?',
      'In German, many verbs come with a **fixed preposition** that you cannot guess from English or French: **warten auf** (wait for), **denken an** (think of), **Angst haben vor** (be afraid of). Learn the pair as one unit, plus its case. This course gives you the most useful pairs, the question words and the little words **darauf, daran, davon…** that replace them.',
      'En allemand, beaucoup de verbes s’accompagnent d’une **préposition fixe** impossible à deviner à partir de l’anglais ou du français : **warten auf** (attendre), **denken an** (penser à), **Angst haben vor** (avoir peur de). Apprends le couple comme un bloc, avec son cas. Ce cours te donne les couples les plus utiles, les mots interrogatifs et les petits mots **darauf, daran, davon…** qui les remplacent.',
      [
        'Learn about 30 high-frequency verb + preposition pairs',
        'Use accusative or dative correctly after the preposition',
        'Ask about things with wo(r)- and about people with preposition + wen / wem',
        'Answer with da(r)- and link it to dass / zu',
      ],
      [
        'Apprendre une trentaine de couples verbe + préposition très fréquents',
        'Employer correctement l’accusatif ou le datif après la préposition',
        'Interroger sur les choses avec wo(r)- et sur les personnes avec préposition + wen / wem',
        'Répondre avec da(r)- et le relier à dass / zu',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Verb + preposition as a unit', 'Verbe + préposition comme un bloc',
      'The pairs you meet every day.', 'Les couples que tu rencontres chaque jour.',
    ),
    grammar(
      'sp-vp-idea',
      ['Why prepositions are fixed', 'Pourquoi les prépositions sont fixes'],
      [
        'The preposition is **not** chosen by its literal meaning. It belongs to the verb, just like **à** in French (penser **à**, parler **de**). It is therefore best to learn the whole unit: **warten auf** + accusative, **teilnehmen an** + dative.\n\nThe prepositional object answers a question with **wo(r)-** (for things) or **preposition + wen / wem** (for people):\n\n- Ich warte **auf den Bus**. → **Worauf** wartest du?\n- Ich warte **auf meinen Bruder**. → **Auf wen** wartest du?\n\nA good habit: write verb + preposition + case in your vocabulary list: *warten auf + Akk.*',
        'La préposition n’est **pas** choisie selon son sens littéral. Elle appartient au verbe, comme **à** en français (penser **à**, parler **de**). Le mieux est donc d’apprendre le bloc entier : **warten auf** + accusatif, **teilnehmen an** + datif.\n\nLe complément prépositionnel répond à une question en **wo(r)-** (pour les choses) ou **préposition + wen / wem** (pour les personnes) :\n\n- Ich warte **auf den Bus**. → **Worauf** wartest du ?\n- Ich warte **auf meinen Bruder**. → **Auf wen** wartest du ?\n\nBonne habitude : note verbe + préposition + cas dans ton vocabulaire : *warten auf + Akk.*',
      ],
      [
        ['Ich warte auf den Bus.', 'I am waiting for the bus.', 'J’attends le bus.'],
        ['Er denkt an seine Familie.', 'He is thinking of his family.', 'Il pense à sa famille.'],
        ['Wir sprechen über das Wetter.', 'We are talking about the weather.', 'Nous parlons de la météo.'],
      ],
    ),
    grammar(
      'sp-vp-core',
      ['Core pairs for A2', 'Couples de base pour A2'],
      [
        'These pairs are used constantly, all with the **accusative**:\n\n- **warten auf** (wait for) · **hoffen auf** (hope for) · **achten auf** (pay attention to)\n- **denken an** (think of) · **glauben an** (believe in) · **sich erinnern an** (remember)\n- **sprechen / reden über** (talk about) · **sich ärgern über** (be annoyed about)\n- **sich freuen auf** (look forward to) · **sich freuen über** (be happy about)\n- **sich interessieren für** (be interested in) · **sich entscheiden für** (decide on)\n- **sich kümmern um** (take care of) · **bitten um** (ask for) · **sich bewerben um** (apply for)',
        'Ces couples sont employés tout le temps, tous avec l’**accusatif** :\n\n- **warten auf** (attendre) · **hoffen auf** (espérer) · **achten auf** (faire attention à)\n- **denken an** (penser à) · **glauben an** (croire à) · **sich erinnern an** (se souvenir de)\n- **sprechen / reden über** (parler de) · **sich ärgern über** (se fâcher de)\n- **sich freuen auf** (se réjouir de, futur) · **sich freuen über** (se réjouir de, présent / passé)\n- **sich interessieren für** (s’intéresser à) · **sich entscheiden für** (opter pour)\n- **sich kümmern um** (s’occuper de) · **bitten um** (demander) · **sich bewerben um** (postuler à)',
      ],
      [
        ['Ich hoffe auf gutes Wetter.', 'I am hoping for good weather.', 'J’espère du beau temps.'],
        ['Sie kümmert sich um ihre Oma.', 'She looks after her grandma.', 'Elle s’occupe de sa grand-mère.'],
        ['Wir haben uns für das Hotel entschieden.', 'We decided on the hotel.', 'Nous avons opté pour cet hôtel.'],
      ],
    ),
    vocab('sp-verben-praepositionen-warten-auf', 'warten auf', 'to wait for', 'attendre', null, 'WAR-ten auf', 'VAR-ten owf', ['Ich warte auf den Zug.', 'I am waiting for the train.', 'J’attends le train.']),
    vocab('sp-verben-praepositionen-denken-an', 'denken an', 'to think of', 'penser à', null, 'DEN-ken an', 'DEN-ken ahn', ['Ich denke oft an dich.', 'I often think of you.', 'Je pense souvent à toi.']),
    vocab('sp-verben-praepositionen-sich-kuemmern-um', 'sich kümmern um', 'to take care of', 's’occuper de', null, 'sich KÜM-mern um', 'zikh KUEM-ern oom', ['Er kümmert sich um die Kinder.', 'He looks after the children.', 'Il s’occupe des enfants.']),
    vocab('sp-verben-praepositionen-sich-bewerben-um', 'sich bewerben um', 'to apply for', 'postuler à', null, 'sich be-WER-ben um', 'zikh beh-VER-ben oom', ['Sie bewirbt sich um eine Stelle.', 'She is applying for a job.', 'Elle postule à un emploi.']),
    mc(
      'sp-vp-e1',
      ['"Ich warte ___ den Bus."', '« Ich warte ___ den Bus. »'],
      ['auf', 'an', 'für'], ['auf', 'an', 'für'], 0,
      ['warten auf + Akkusativ.', 'warten auf + accusatif.'],
    ),
    mc(
      'sp-vp-e2',
      ['"Er denkt oft ___ seine Familie."', '« Er denkt oft ___ seine Familie. »'],
      ['an', 'über', 'auf'], ['an', 'über', 'auf'], 0,
      ['denken an + Akkusativ.', 'denken an + accusatif.'],
    ),
    fb(
      'sp-vp-e3',
      ['Wir sprechen ___ das Wetter.', 'Wir sprechen ___ das Wetter.'],
      'über',
      ['sprechen über + Akkusativ.', 'sprechen über + accusatif.'],
    ),
    fb(
      'sp-vp-e4',
      ['Sie interessiert sich ___ Kunst.', 'Sie interessiert sich ___ Kunst.'],
      'für',
      ['sich interessieren für + Akkusativ.', 'sich interessieren für + accusatif.'],
    ),
    match(
      'sp-vp-e5',
      [
        ['warten auf', 'to wait for', 'attendre'],
        ['denken an', 'to think of', 'penser à'],
        ['sich kümmern um', 'to take care of', 's’occuper de'],
        ['sich bewerben um', 'to apply for', 'postuler à'],
      ],
      ['Match each verb + preposition with its meaning.', 'Associe chaque verbe + préposition à son sens.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Accusative or dative?', 'Accusatif ou datif ?',
      'The preposition fixes the verb, the case follows.', 'Le verbe fixe la préposition, le cas suit.',
    ),
    grammar(
      'sp-vp-dative',
      ['Pairs with the dative', 'Couples avec le datif'],
      [
        'Some pairs take the **dative**. Learn them as a group:\n\n- **teilnehmen an** + Dat. (take part in) · **sich beteiligen an** + Dat.\n- **träumen von** + Dat. (dream of) · **erzählen von** · **hören von** · **halten von** (think of)\n- **abhängen von** + Dat. (depend on) · **bestehen aus** + Dat. (consist of)\n- **Angst haben vor** + Dat. (be afraid of) · **sich fürchten vor** + Dat.\n- **fragen nach** + Dat. (ask about) · **suchen nach** + Dat. (look for)\n- **leiden unter** + Dat. · **sich unterhalten mit** + Dat. · **zweifeln an** + Dat.\n\n**Tip:** **an** is accusative in **denken an**, **glauben an**, but dative in **teilnehmen an**, **zweifeln an**. There is no shortcut — learn the case with the verb.',
        'Certains couples demandent le **datif**. Apprends-les en groupe :\n\n- **teilnehmen an** + Dat. (participer à) · **sich beteiligen an** + Dat.\n- **träumen von** + Dat. (rêver de) · **erzählen von** · **hören von** · **halten von** (penser de)\n- **abhängen von** + Dat. (dépendre de) · **bestehen aus** + Dat. (se composer de)\n- **Angst haben vor** + Dat. (avoir peur de) · **sich fürchten vor** + Dat.\n- **fragen nach** + Dat. (demander) · **suchen nach** + Dat. (chercher)\n- **leiden unter** + Dat. · **sich unterhalten mit** + Dat. · **zweifeln an** + Dat.\n\n**Astuce :** **an** est accusatif dans **denken an**, **glauben an**, mais datif dans **teilnehmen an**, **zweifeln an**. Pas de raccourci : apprends le cas avec le verbe.',
      ],
      [
        ['Ich nehme an einem Kurs teil.', 'I am taking part in a course.', 'Je participe à un cours.'],
        ['Er träumt von einem Haus am Meer.', 'He dreams of a house by the sea.', 'Il rêve d’une maison au bord de la mer.'],
        ['Das Kind hat Angst vor dem Hund.', 'The child is afraid of the dog.', 'L’enfant a peur du chien.'],
        ['Es hängt vom Wetter ab.', 'It depends on the weather.', 'Cela dépend du temps.'],
      ],
    ),
    grammar(
      'sp-vp-check',
      ['Check the article', 'Vérifier l’article'],
      [
        'After the preposition, the **noun phrase** takes the case the verb requires. Look at the article:\n\n- warten **auf** + Akk.: Ich warte auf **den** Bus (m) · auf **die** Bahn (f) · auf **das** Taxi (n) · auf **die** Gäste (Pl.)\n- träumen **von** + Dat.: Ich träume von **dem** Urlaub = **vom** Urlaub · von **der** Reise · von **dem** Meer = **vom** Meer · von **den** Ferien\n\nContractions: **von dem → vom**, **an dem → am**, **zu dem → zum**. **vor dem → vorm** is informal.',
        'Après la préposition, le **groupe nominal** prend le cas exigé par le verbe. Regarde l’article :\n\n- warten **auf** + Akk. : Ich warte auf **den** Bus (m) · auf **die** Bahn (f) · auf **das** Taxi (n) · auf **die** Gäste (pl.)\n- träumen **von** + Dat. : Ich träume von **dem** Urlaub = **vom** Urlaub · von **der** Reise · von **dem** Meer = **vom** Meer · von **den** Ferien\n\nContractions : **von dem → vom**, **an dem → am**, **zu dem → zum**. **vor dem → vorm** est familier.',
      ],
      [
        ['Ich warte auf den Bus.', 'I am waiting for the bus.', 'J’attends le bus.'],
        ['Ich träume vom Urlaub.', 'I dream of the holiday.', 'Je rêve des vacances.'],
        ['Sie hat Angst vor der Prüfung.', 'She is afraid of the exam.', 'Elle a peur de l’examen.'],
      ],
    ),
    vocab('sp-verben-praepositionen-traeumen-von', 'träumen von', 'to dream of', 'rêver de', null, 'TRÄU-men fon', 'TROY-men fon', ['Sie träumt von einer Weltreise.', 'She dreams of a trip around the world.', 'Elle rêve d’un tour du monde.']),
    vocab('sp-verben-praepositionen-teilnehmen-an', 'teilnehmen an', 'to take part in', 'participer à', null, 'TEIL-neh-men an', 'TILE-nay-men ahn', ['Ich nehme am Kurs teil.', 'I am taking part in the course.', 'Je participe au cours.']),
    vocab('sp-verben-praepositionen-angst-haben-vor', 'Angst haben vor', 'to be afraid of', 'avoir peur de', null, 'ANGST HA-ben for', 'ahngst HAH-ben for', ['Ich habe Angst vor Spinnen.', 'I am afraid of spiders.', 'J’ai peur des araignées.']),
    vocab('sp-verben-praepositionen-fragen-nach', 'fragen nach', 'to ask about', 'demander (des nouvelles de)', null, 'FRA-gen nach', 'FRAH-gen nakh', ['Er fragt nach dem Weg.', 'He asks the way.', 'Il demande son chemin.']),
    mc(
      'sp-vp-e6',
      ['"Ich nehme ___ dem Kurs teil."', '« Ich nehme ___ dem Kurs teil. »'],
      ['an', 'auf', 'bei'], ['an', 'auf', 'bei'], 0,
      ['teilnehmen an + Dativ.', 'teilnehmen an + datif.'],
    ),
    mc(
      'sp-vp-e7',
      ['"Ich träume ___ einem Urlaub am Meer."', '« Ich träume ___ einem Urlaub am Meer. »'],
      ['von', 'auf', 'über'], ['von', 'auf', 'über'], 0,
      ['träumen von + Dativ.', 'träumen von + datif.'],
    ),
    mc(
      'sp-vp-e8',
      ['"Ich warte auf ___ Freund."', '« Ich warte auf ___ Freund. »'],
      ['meinen', 'meinem', 'meiner'], ['meinen', 'meinem', 'meiner'], 0,
      ['warten auf + Akkusativ: masculine → meinen.', 'warten auf + accusatif : masculin → meinen.'],
    ),
    fb(
      'sp-vp-e9',
      ['Sie bewirbt sich ___ die Stelle.', 'Sie bewirbt sich ___ die Stelle.'],
      'um',
      ['sich bewerben um + Akkusativ.', 'sich bewerben um + accusatif.'],
    ),
    fb(
      'sp-vp-e10',
      ['Er hat Angst ___ dem Hund.', 'Er hat Angst ___ dem Hund.'],
      'vor',
      ['Angst haben vor + Dativ.', 'Angst haben vor + datif.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Questions with wo(r)- and da(r)-', 'Questions en wo(r)- et da(r)-',
      'Ask about things, answer with one word.', 'Poser la question sur les choses, répondre en un mot.',
    ),
    grammar(
      'sp-vp-wor',
      ['wo(r)- for things, preposition + wen / wem for people', 'wo(r)- pour les choses, préposition + wen / wem pour les personnes'],
      [
        'To ask about a **thing**, glue **wo-** to the preposition. Before a **vowel** add **-r-**: **wo + auf = worauf**, **wo + an = woran**, **wo + über = worüber**, **wo + um = worum**. Before a consonant: **wofür**, **womit**, **wovon**, **wovor**, **wonach**.\n\nTo ask about a **person**, keep the preposition and use **wen** (Akk.) or **wem** (Dat.): **Auf wen** wartest du? **Mit wem** sprichst du? **An wen** denkst du?\n\n- thing: **Worauf** wartest du? — Auf den Bus.\n- person: **Auf wen** wartest du? — Auf meinen Bruder.',
        'Pour interroger sur une **chose**, colle **wo-** à la préposition. Devant une **voyelle**, ajoute **-r-** : **wo + auf = worauf**, **wo + an = woran**, **wo + über = worüber**, **wo + um = worum**. Devant une consonne : **wofür**, **womit**, **wovon**, **wovor**, **wonach**.\n\nPour interroger sur une **personne**, garde la préposition et emploie **wen** (Akk.) ou **wem** (Dat.) : **Auf wen** wartest du ? **Mit wem** sprichst du ? **An wen** denkst du ?\n\n- chose : **Worauf** wartest du ? — Auf den Bus.\n- personne : **Auf wen** wartest du ? — Auf meinen Bruder.',
      ],
      [
        ['Worüber sprecht ihr?', 'What are you talking about?', 'De quoi parlez-vous ?'],
        ['Wovor hast du Angst?', 'What are you afraid of?', 'De quoi as-tu peur ?'],
        ['Mit wem sprichst du?', 'Who are you talking to?', 'Avec qui parles-tu ?'],
        ['An wen denkst du?', 'Who are you thinking of?', 'À qui penses-tu ?'],
      ],
    ),
    grammar(
      'sp-vp-dar',
      ['da(r)- replaces preposition + thing', 'da(r)- remplace préposition + chose'],
      [
        'To avoid repeating a **thing**, replace **preposition + noun** by **da(r)- + preposition**: **darauf**, **daran**, **darüber**, **dafür**, **damit**, **davon**, **davor**.\n\n- Ich freue mich **auf den Urlaub**. → Ich freue mich **darauf**.\n- Er interessiert sich **für Musik**. → Er interessiert sich **dafür**.\n\n**Do not use it for people.** Use the preposition + pronoun instead: Ich warte **auf ihn**. (not *darauf*). Ich freue mich **auf sie**.',
        'Pour ne pas répéter une **chose**, remplace **préposition + nom** par **da(r)- + préposition** : **darauf**, **daran**, **darüber**, **dafür**, **damit**, **davon**, **davor**.\n\n- Ich freue mich **auf den Urlaub**. → Ich freue mich **darauf**.\n- Er interessiert sich **für Musik**. → Er interessiert sich **dafür**.\n\n**Pas pour les personnes.** Emploie préposition + pronom : Ich warte **auf ihn**. (pas *darauf*). Ich freue mich **auf sie**.',
      ],
      [
        ['Ich freue mich darauf.', 'I am looking forward to it.', 'Je m’en réjouis d’avance.'],
        ['Wir sprechen morgen darüber.', 'We will talk about it tomorrow.', 'Nous en parlerons demain.'],
        ['Ich warte auf ihn.', 'I am waiting for him.', 'Je l’attends.'],
      ],
    ),
    vocab('sp-verben-praepositionen-woruber', 'worüber', 'about what', 'à propos de quoi', null, 'wo-RÜ-ber', 'voh-RUE-ber', ['Worüber sprecht ihr?', 'What are you talking about?', 'De quoi parlez-vous ?']),
    vocab('sp-verben-praepositionen-darauf', 'darauf', 'for it / to it', 'là-dessus, y', null, 'da-RAUF', 'dah-ROWF', ['Ich warte schon lange darauf.', 'I have been waiting for it for a long time.', 'J’attends cela depuis longtemps.']),
    mc(
      'sp-vp-e11',
      ['"___ wartest du? — Auf den Bus."', '« ___ wartest du ? — Auf den Bus. »'],
      ['Worauf', 'Auf wen', 'Womit'], ['Worauf', 'Auf wen', 'Womit'], 0,
      ['A thing → wo(r)-: worauf.', 'Une chose → wo(r)- : worauf.'],
    ),
    mc(
      'sp-vp-e12',
      ['"___ wartest du? — Auf meinen Bruder."', '« ___ wartest du ? — Auf meinen Bruder. »'],
      ['Worauf', 'Auf wen', 'Wofür'], ['Worauf', 'Auf wen', 'Wofür'], 1,
      ['A person → preposition + wen.', 'Une personne → préposition + wen.'],
    ),
    fb(
      'sp-vp-e13',
      ['___ interessierst du dich? — Für Musik.', '___ interessierst du dich ? — Für Musik.'],
      'Wofür',
      ['wo + für = wofür (no -r- before a consonant).', 'wo + für = wofür (pas de -r- devant une consonne).'],
    ),
    fb(
      'sp-vp-e14',
      ['Ich freue mich auf den Urlaub. → Ich freue mich ___.', 'Ich freue mich auf den Urlaub. → Ich freue mich ___.'],
      'darauf',
      ['da + r + auf = darauf.', 'da + r + auf = darauf.'],
    ),
    wo('sp-vp-e15', ['du', 'Worüber', 'sprichst', 'gerade?'], ['Worüber', 'sprichst', 'du', 'gerade?'], ['Question word, verb, subject.', 'Mot interrogatif, verbe, sujet.']),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'da(r)- with dass and zu', 'da(r)- avec dass et zu',
      'Connect a verb + preposition to a whole clause.', 'Relier un couple verbe + préposition à une proposition entière.',
    ),
    grammar(
      'sp-vp-dass',
      ['darauf, dass … / darauf, … zu …', 'darauf, dass … / darauf, … zu …'],
      [
        'When the thing you wait for, hope for or think of is a **whole clause**, the verb keeps its preposition and uses **da(r)-** as a **pointer word**:\n\n- **different subjects** → **dass**-clause: Ich warte **darauf**, **dass** du kommst.\n- **same subject** → **zu-infinitive**: Ich freue mich **darauf**, dich **zu** sehen.\n\nThe comma comes right **after da(r)-**. With separable verbs, **zu** goes inside: Er denkt **daran**, den Termin **abzusagen**.\n\nThe **da(r)-** word is usually **required** after verbs with a prepositional object: Ich ärgere mich **darüber**, dass ... (not *Ich ärgere mich, dass …*).',
        'Quand ce que tu attends, espères ou penses est une **proposition entière**, le verbe garde sa préposition et utilise **da(r)-** comme **mot annonciateur** :\n\n- **sujets différents** → subordonnée en **dass** : Ich warte **darauf**, **dass** du kommst.\n- **même sujet** → **infinitif avec zu** : Ich freue mich **darauf**, dich **zu** sehen.\n\nLa virgule vient juste **après da(r)-**. Avec les verbes séparables, **zu** s’insère : Er denkt **daran**, den Termin **abzusagen**.\n\nLe mot **da(r)-** est en général **obligatoire** après les verbes à complément prépositionnel : Ich ärgere mich **darüber**, dass … (pas *Ich ärgere mich, dass …*).',
      ],
      [
        ['Ich warte darauf, dass du anrufst.', 'I am waiting for you to call.', 'J’attends que tu appelles.'],
        ['Ich freue mich darauf, dich zu sehen.', 'I am looking forward to seeing you.', 'Je me réjouis de te voir.'],
        ['Denk daran, die Tür abzuschließen.', 'Remember to lock the door.', 'Pense à fermer la porte à clé.'],
      ],
    ),
    grammar(
      'sp-vp-forms',
      ['Useful pairs with da(r)- + clause', 'Couples utiles avec da(r)- + proposition'],
      [
        '- **sich freuen auf / über**: Ich freue mich **darauf / darüber**, dass …\n- **warten auf**: Wir warten **darauf**, dass es aufhört zu regnen.\n- **denken an**: Ich denke **daran**, ihn anzurufen.\n- **sich erinnern an**: Ich erinnere mich **daran**, dass wir uns schon kannten.\n- **sich verlassen auf**: Du kannst dich **darauf** verlassen, dass ich komme.\n- **Angst haben vor**: Er hat Angst **davor**, allein zu sein.\n- **sich entscheiden für**: Sie hat sich **dafür** entschieden, das Haus zu kaufen.\n- **bestehen auf**: Er besteht **darauf**, dass wir pünktlich sind.',
        '- **sich freuen auf / über** : Ich freue mich **darauf / darüber**, dass …\n- **warten auf** : Wir warten **darauf**, dass es aufhört zu regnen.\n- **denken an** : Ich denke **daran**, ihn anzurufen.\n- **sich erinnern an** : Ich erinnere mich **daran**, dass wir uns schon kannten.\n- **sich verlassen auf** : Du kannst dich **darauf** verlassen, dass ich komme.\n- **Angst haben vor** : Er hat Angst **davor**, allein zu sein.\n- **sich entscheiden für** : Sie hat sich **dafür** entschieden, das Haus zu kaufen.\n- **bestehen auf** : Er besteht **darauf**, dass wir pünktlich sind.',
      ],
      [
        ['Du kannst dich darauf verlassen, dass ich komme.', 'You can rely on me coming.', 'Tu peux compter sur le fait que je viendrai.'],
        ['Sie hat sich dafür entschieden, das Haus zu kaufen.', 'She decided to buy the house.', 'Elle a décidé d’acheter la maison.'],
        ['Er besteht darauf, dass wir pünktlich sind.', 'He insists that we are on time.', 'Il insiste pour que nous soyons à l’heure.'],
      ],
    ),
    vocab('sp-verben-praepositionen-sich-verlassen-auf', 'sich verlassen auf', 'to rely on', 'compter sur', null, 'sich fer-LAS-sen auf', 'zikh fer-LAS-en owf', ['Ich verlasse mich auf dich.', 'I rely on you.', 'Je compte sur toi.']),
    vocab('sp-verben-praepositionen-sich-entscheiden-fuer', 'sich entscheiden für', 'to decide on', 'opter pour', null, 'sich ent-SCHEI-den fyr', 'zikh ent-SHY-den fuer', ['Wir haben uns für das Rote entschieden.', 'We decided on the red one.', 'Nous avons opté pour le rouge.']),
    mc(
      'sp-vp-e16',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich freue mich darauf, dich zu sehen.', 'Ich freue mich darauf, du zu sehen.', 'Ich freue mich darauf, dass dich sehen.'],
      ['Ich freue mich darauf, dich zu sehen.', 'Ich freue mich darauf, du zu sehen.', 'Ich freue mich darauf, dass dich sehen.'],
      0,
      ['Same subject: da(r)- + zu-infinitive; dich is the object.', 'Même sujet : da(r)- + infinitif avec zu ; dich est l’objet.'],
    ),
    wo('sp-vp-e17', ['dass', 'Ich', 'du', 'warte', 'darauf,', 'kommst'], ['Ich', 'warte', 'darauf,', 'dass', 'du', 'kommst'], ['Different subjects → dass-clause.', 'Sujets différents → subordonnée en dass.']),
    fb(
      'sp-vp-e18',
      ['Denk ___, die Tür abzuschließen!', 'Denk ___, die Tür abzuschließen !'],
      'daran',
      ['denken an → daran.', 'denken an → daran.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Common confusions', 'Confusions courantes',
      'Pairs that look alike but differ in meaning.', 'Couples proches qui diffèrent par le sens.',
    ),
    grammar(
      'sp-vp-confusion',
      ['Same verb, different preposition', 'Même verbe, autre préposition'],
      [
        'Some verbs change meaning with the preposition:\n\n- sich **freuen auf** (future) ≠ sich **freuen über** (now / past): Ich freue mich **auf** das Fest / **über** das Geschenk.\n- **denken an** (think of someone) ≠ **denken über** (have an opinion): Ich denke **an** dich. Was denkst du **über** den Film?\n- **sprechen mit** (a person) + **über** (the topic): Ich spreche **mit** dem Chef **über** das Projekt.\n- **erzählen von** (tell about) ≈ **erzählen über**: Er erzählt **von** seiner Reise.\n- **halten von** (opinion): Was hältst du **von** dem Plan?',
        'Certains verbes changent de sens avec la préposition :\n\n- sich **freuen auf** (futur) ≠ sich **freuen über** (présent / passé) : Ich freue mich **auf** das Fest / **über** das Geschenk.\n- **denken an** (penser à quelqu’un) ≠ **denken über** (avoir un avis) : Ich denke **an** dich. Was denkst du **über** den Film ?\n- **sprechen mit** (une personne) + **über** (le sujet) : Ich spreche **mit** dem Chef **über** das Projekt.\n- **erzählen von** (raconter) ≈ **erzählen über** : Er erzählt **von** seiner Reise.\n- **halten von** (opinion) : Was hältst du **von** dem Plan ?',
      ],
      [
        ['Ich freue mich auf das Fest.', 'I am looking forward to the party.', 'Je me réjouis de la fête à venir.'],
        ['Was denkst du über den Film?', 'What do you think about the film?', 'Que penses-tu du film ?'],
        ['Ich spreche mit dem Chef über das Projekt.', 'I am talking to the boss about the project.', 'Je parle du projet avec le chef.'],
      ],
    ),
    grammar(
      'sp-vp-tips',
      ['How to learn them', 'Comment les apprendre'],
      [
        '- Learn in **sentences**: *Ich warte auf den Bus.*\n- Group by **preposition**: all **auf**-verbs, all **über**-verbs …\n- Write the **case** next to every pair.\n- Notice the **reflexive** ones: sich freuen, sich kümmern, sich verlassen.\n- Use the **wo(r)-** question as a test: if you can ask **Worauf…?**, the verb uses **auf**.',
        '- Apprends en **phrases** : *Ich warte auf den Bus.*\n- Regroupe par **préposition** : tous les verbes avec **auf**, tous ceux avec **über** …\n- Note le **cas** à côté de chaque couple.\n- Repère les verbes **réfléchis** : sich freuen, sich kümmern, sich verlassen.\n- Utilise la question en **wo(r)-** comme test : si tu peux demander **Worauf … ?**, le verbe utilise **auf**.',
      ],
      [
        ['Worauf wartest du? — Ich warte auf den Zug.', 'What are you waiting for? — I am waiting for the train.', 'Qu’attends-tu ? — J’attends le train.'],
        ['Wovon träumst du? — Von einem Haus am Meer.', 'What do you dream of? — Of a house by the sea.', 'De quoi rêves-tu ? — D’une maison au bord de la mer.'],
        ['Womit beschäftigst du dich?', 'What are you occupied with?', 'De quoi t’occupes-tu ?'],
      ],
    ),
    mc(
      'sp-vp-e19',
      ['"Was hältst du ___ dem Plan?"', '« Was hältst du ___ dem Plan ? »'],
      ['von', 'über', 'auf'], ['von', 'über', 'auf'], 0,
      ['halten von + Dativ.', 'halten von + datif.'],
    ),
    mc(
      'sp-vp-e20',
      ['"Ich spreche ___ meinem Chef ___ das Projekt."', '« Ich spreche ___ meinem Chef ___ das Projekt. »'],
      ['mit / über', 'über / mit', 'an / für'], ['mit / über', 'über / mit', 'an / für'], 0,
      ['mit + person, über + topic.', 'mit + personne, über + sujet.'],
    ),

    wrapup(
      '**Learn as a unit** — warten auf + Akk., denken an + Akk., teilnehmen an + Dat., träumen von + Dat.\n\n**Cases** — most common pairs take the accusative (auf, an, über, für, um); dative pairs: von, vor, aus, nach, mit, and some with an (teilnehmen, zweifeln).\n\n**Questions** — thing: **wo(r)-** (worauf, wofür, womit); person: **preposition + wen / wem** (Auf wen? Mit wem?).\n\n**Replacement** — **da(r)-** for things (darauf, dafür), never for people (auf ihn).\n\n**Clauses** — da(r)- + **dass** (different subjects) or + **zu-infinitive** (same subject): Ich freue mich darauf, dich zu sehen.\n\n**Watch out** — freuen auf / über, denken an / über, sprechen mit … über.',
      '**À apprendre en bloc** — warten auf + Akk., denken an + Akk., teilnehmen an + Dat., träumen von + Dat.\n\n**Cas** — la plupart des couples courants prennent l’accusatif (auf, an, über, für, um) ; couples au datif : von, vor, aus, nach, mit, et certains avec an (teilnehmen, zweifeln).\n\n**Questions** — chose : **wo(r)-** (worauf, wofür, womit) ; personne : **préposition + wen / wem** (Auf wen ? Mit wem ?).\n\n**Remplacement** — **da(r)-** pour les choses (darauf, dafür), jamais pour les personnes (auf ihn).\n\n**Propositions** — da(r)- + **dass** (sujets différents) ou + **infinitif avec zu** (même sujet) : Ich freue mich darauf, dich zu sehen.\n\n**Attention** — freuen auf / über, denken an / über, sprechen mit … über.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Verbs with prepositions', 'Quiz final : les verbes avec prépositions'),
    mc(
      'sp-vp-q1',
      ['"Ich warte ___ meine Freundin."', '« Ich warte ___ meine Freundin. »'],
      ['auf', 'an', 'für'], ['auf', 'an', 'für'], 0,
      ['warten auf + Akkusativ.', 'warten auf + accusatif.'],
    ),
    mc(
      'sp-vp-q2',
      ['"Sie hat sich ___ die Stelle beworben."', '« Sie hat sich ___ die Stelle beworben. »'],
      ['um', 'auf', 'für'], ['um', 'auf', 'für'], 0,
      ['sich bewerben um.', 'sich bewerben um.'],
    ),
    mc(
      'sp-vp-q3',
      ['"Er hat Angst ___ Spinnen."', '« Er hat Angst ___ Spinnen. »'],
      ['vor', 'an', 'auf'], ['vor', 'an', 'auf'], 0,
      ['Angst haben vor + Dativ.', 'Angst haben vor + datif.'],
    ),
    fb(
      'sp-vp-q4',
      ['Wir freuen uns ___ die Ferien. (they are coming)', 'Wir freuen uns ___ die Ferien. (elles arrivent)'],
      'auf',
      ['future → freuen auf.', 'futur → freuen auf.'],
    ),
    fb(
      'sp-vp-q5',
      ['___ träumst du? — Von einem Haus am Meer.', '___ träumst du ? — Von einem Haus am Meer.'],
      'Wovon',
      ['wo + von = wovon.', 'wo + von = wovon.'],
    ),
    fb(
      'sp-vp-q6',
      ['Ich warte schon lange ___, dass er anruft.', 'Ich warte schon lange ___, dass er anruft.'],
      'darauf',
      ['warten auf → darauf + dass.', 'warten auf → darauf + dass.'],
    ),
    fb(
      'sp-vp-q7',
      ['Ich habe mich ___ den Lärm geärgert.', 'Ich habe mich ___ den Lärm geärgert.'],
      'über',
      ['sich ärgern über + Akkusativ.', 'sich ärgern über + accusatif.'],
    ),
    wo('sp-vp-q8', ['du', 'Worauf', 'so', 'wartest', 'lange?', 'schon'], ['Worauf', 'wartest', 'du', 'schon', 'so', 'lange?'], ['Question word first, then verb and subject.', 'Mot interrogatif d’abord, puis verbe et sujet.']),
    wo('sp-vp-q9', ['mich', 'Ich', 'für', 'interessiere', 'Geschichte', 'sehr'], ['Ich', 'interessiere', 'mich', 'sehr', 'für', 'Geschichte'], ['sich interessieren für.', 'sich interessieren für.']),
    wo('sp-vp-q10', ['die', 'kümmert', 'Er', 'um', 'sich', 'Kinder'], ['Er', 'kümmert', 'sich', 'um', 'die', 'Kinder'], ['sich kümmern um + Akkusativ.', 'sich kümmern um + accusatif.']),
    match(
      'sp-vp-q11',
      [
        ['Worüber?', 'About what?', 'À propos de quoi ?'],
        ['Womit?', 'With what?', 'Avec quoi ?'],
        ['Wovor?', 'Afraid of what?', 'De quoi (peur) ?'],
        ['Wofür?', 'For what?', 'Pour quoi ?'],
        ['Woran?', 'Of / about what?', 'À quoi ?'],
      ],
      ['Match each question word with its meaning.', 'Associe chaque mot interrogatif à son sens.'],
    ),
    mc(
      'sp-vp-q12',
      ['"Ich freue mich ___, dich bald zu sehen."', '« Ich freue mich ___, dich bald zu sehen. »'],
      ['darauf', 'dafür', 'daran'], ['darauf', 'dafür', 'daran'], 0,
      ['sich freuen auf → darauf.', 'sich freuen auf → darauf.'],
    ),
    lc(
      'sp-vp-q13',
      ['Listen. What is the person waiting for?', 'Écoute. Qu’attend la personne ?'],
      'Worauf wartest du? Ich warte auf den Zug.',
      ['The train', 'The bus', 'A friend'], ['Le train', 'Le bus', 'Un ami'], 0,
      ['den Zug = the train.', 'den Zug = le train.'],
    ),
    lc(
      'sp-vp-q14',
      ['Listen. What does the person dream of?', 'Écoute. De quoi la personne rêve-t-elle ?'],
      'Ich träume von einem Haus am Meer.',
      ['A house by the sea', 'A trip to the mountains', 'A new car'], ['Une maison au bord de la mer', 'Un voyage à la montagne', 'Une nouvelle voiture'], 0,
      ['Haus am Meer = house by the sea.', 'Haus am Meer = maison au bord de la mer.'],
    ),
  ],
});

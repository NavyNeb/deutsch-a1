import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const reflexiveVerben = defineSpecial({
  slug: 'reflexive-verben',
  number: 7,
  group: 'verbs',
  levels: ['A2', 'B1'],
  related: ['l5', 'a2-l9', 'a2-l5'],
  title: ['Reflexive Verben', 'Reflexive verbs', 'Les verbes pronominaux (réfléchis)'],
  theme: [
    'Verbs with sich: accusative and dative reflexive pronouns, word order, tenses and the most useful verbs',
    'Les verbes avec sich : pronoms réfléchis à l’accusatif et au datif, ordre des mots, temps et verbes les plus utiles',
  ],
  goals: [
    'Recognise a reflexive verb and its pronoun',
    'Use the accusative reflexive pronouns mich, dich, sich, uns, euch',
    'Use the dative reflexive pronouns mir and dir when there is another object',
    'Place sich correctly in statements, questions, subordinate clauses and imperatives',
    'Form the Perfekt of reflexive verbs',
    'Know the most frequent reflexive verbs and their prepositions',
  ],
  goalsFr: [
    'Reconnaître un verbe réfléchi et son pronom',
    'Employer les pronoms réfléchis à l’accusatif : mich, dich, sich, uns, euch',
    'Employer les pronoms réfléchis au datif mir et dir quand il y a un autre objet',
    'Placer sich correctement dans les phrases, questions, subordonnées et impératifs',
    'Former le Perfekt des verbes réfléchis',
    'Connaître les verbes réfléchis les plus fréquents et leurs prépositions',
  ],
  steps: [
    intro(
      'Ich freue mich auf das Wochenende', 'Je me réjouis du week-end',
      'You already say "Ich stehe auf" and "Ich wasche mich" every morning. In German many everyday verbs need a little pronoun that points back to the subject: **sich**. Some feel natural to a French speaker (se laver), but others are surprising (sich freuen, sich beeilen). This course gives you the system and the verbs.',
      'Tu dis déjà « Ich stehe auf » et « Ich wasche mich » chaque matin. En allemand, de nombreux verbes du quotidien demandent un petit pronom qui renvoie au sujet : **sich**. Certains paraissent naturels à un francophone (se laver), d’autres surprennent (sich freuen, sich beeilen). Ce cours te donne le système et les verbes.',
      [
        'Use the right reflexive pronoun for every person',
        'Distinguish accusative and dative pronouns',
        'Place sich in the sentence',
        'Form the Perfekt, the imperative and the infinitive with zu',
      ],
      [
        'Employer le bon pronom réfléchi pour chaque personne',
        'Distinguer pronoms à l’accusatif et au datif',
        'Placer sich dans la phrase',
        'Former le Perfekt, l’impératif et l’infinitif avec zu',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'What is a reflexive verb?', 'Qu’est-ce qu’un verbe réfléchi ?',
      'The pronoun that refers back to the subject.', 'Le pronom qui renvoie au sujet.',
    ),
    grammar(
      'sp-rv-idea',
      ['The idea and the accusative pronouns', 'L’idée et les pronoms à l’accusatif'],
      [
        'A **reflexive verb** needs a **reflexive pronoun** that refers back to the **subject**: **Ich** wasche **mich**. The pronoun is in the **accusative** and has the same form as the personal pronoun, except in the **3rd person: sich** (all genders, singular and plural).\n\n- ich → **mich** · du → **dich** · er/sie/es → **sich**\n- wir → **uns** · ihr → **euch** · sie/Sie → **sich**\n\nThe verb is conjugated as usual: ich freue **mich**, du freust **dich**, er freut **sich**, wir freuen **uns**, ihr freut **euch**, sie freuen **sich**.',
        'Un **verbe réfléchi** demande un **pronom réfléchi** qui renvoie au **sujet** : **Ich** wasche **mich**. Le pronom est à l’**accusatif** et a la même forme que le pronom personnel, sauf à la **3e personne : sich** (tous genres, singulier et pluriel).\n\n- ich → **mich** · du → **dich** · er/sie/es → **sich**\n- wir → **uns** · ihr → **euch** · sie/Sie → **sich**\n\nLe verbe se conjugue normalement : ich freue **mich**, du freust **dich**, er freut **sich**, wir freuen **uns**, ihr freut **euch**, sie freuen **sich**.',
      ],
      [
        ['ich freue mich', 'I am pleased', 'je me réjouis'],
        ['du freust dich', 'you are pleased', 'tu te réjouis'],
        ['er / sie / es freut sich', 'he / she / it is pleased', 'il / elle se réjouit'],
        ['wir freuen uns', 'we are pleased', 'nous nous réjouissons'],
        ['ihr freut euch', 'you (pl.) are pleased', 'vous vous réjouissez'],
        ['sie / Sie freuen sich', 'they / you are pleased', 'ils / vous vous réjouissent'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-rv-kinds',
      ['Three kinds of reflexive verbs', 'Trois sortes de verbes réfléchis'],
      [
        '1. **Always reflexive**: the verb makes no sense without **sich**: sich **beeilen** (hurry), sich **erholen** (relax), sich **freuen** (be glad), sich **entschuldigen** (apologise).\n2. **Optionally reflexive**: the action can be done to **yourself** or to **someone else**: Ich wasche **mich**. / Ich wasche **das Auto**. Ich ziehe **mich** an. / Ich ziehe **das Kind** an.\n3. **Reciprocal**: **uns / euch / sich** can mean "each other": Wir sehen **uns** morgen. Sie lieben **sich**. Wir treffen **uns** am Bahnhof.\n\nHelpful: German and French often agree (se laver / sich waschen), but not always (sich freuen / être content, sich beeilen / se dépêcher).',
        '1. **Toujours réfléchis** : le verbe n’a pas de sens sans **sich** : sich **beeilen** (se dépêcher), sich **erholen** (se reposer), sich **freuen** (se réjouir), sich **entschuldigen** (s’excuser).\n2. **Facultativement réfléchis** : l’action peut porter sur **soi** ou sur **quelqu’un d’autre** : Ich wasche **mich**. / Ich wasche **das Auto**. Ich ziehe **mich** an. / Ich ziehe **das Kind** an.\n3. **Réciproques** : **uns / euch / sich** peuvent signifier « l’un l’autre » : Wir sehen **uns** morgen. Sie lieben **sich**. Wir treffen **uns** am Bahnhof.\n\nUtile : l’allemand et le français concordent souvent (se laver / sich waschen), mais pas toujours (sich freuen / être content, sich beeilen / se dépêcher).',
      ],
      [
        ['Ich beeile mich.', 'I am hurrying.', 'Je me dépêche.'],
        ['Ich wasche das Auto.', 'I wash the car.', 'Je lave la voiture.'],
        ['Wir treffen uns am Bahnhof.', 'We meet at the station.', 'Nous nous retrouvons à la gare.'],
      ],
    ),
    vocab('sp-reflexive-verben-sich-freuen', 'sich freuen', 'to be glad, to look forward', 'se réjouir', null, 'sich FREU-en', 'zikh FROY-en', ['Ich freue mich auf den Urlaub.', 'I am looking forward to the holiday.', 'Je me réjouis des vacances.']),
    vocab('sp-reflexive-verben-sich-beeilen', 'sich beeilen', 'to hurry', 'se dépêcher', null, 'sich be-EI-len', 'zikh beh-Y-len', ['Beeil dich, wir kommen zu spät!', 'Hurry up, we are going to be late!', 'Dépêche-toi, nous allons être en retard !']),
    vocab('sp-reflexive-verben-sich-treffen', 'sich treffen', 'to meet', 'se retrouver', null, 'sich TREF-fen', 'zikh TREF-en', ['Wir treffen uns um acht Uhr.', 'We meet at eight o’clock.', 'Nous nous retrouvons à huit heures.']),
    vocab('sp-reflexive-verben-sich-erholen', 'sich erholen', 'to relax, to recover', 'se reposer', null, 'sich er-HO-len', 'zikh er-HOH-len', ['Am Wochenende erhole ich mich.', 'At the weekend I relax.', 'Le week-end, je me repose.']),
    mc(
      'sp-rv-e1',
      ['Reflexive pronoun for "ich"?', 'Pronom réfléchi pour « ich » ?'],
      ['mich', 'sich', 'dich'], ['mich', 'sich', 'dich'], 0,
      ['ich → mich.', 'ich → mich.'],
    ),
    mc(
      'sp-rv-e2',
      ['Reflexive pronoun for "er / sie / es / sie (Pl.)"?', 'Pronom réfléchi pour « er / sie / es / sie (pl.) » ?'],
      ['ihn', 'sich', 'ihm'], ['ihn', 'sich', 'ihm'], 1,
      ['3rd person: always sich.', '3e personne : toujours sich.'],
    ),
    fb(
      'sp-rv-e3',
      ['Du freust ___ auf das Wochenende. (du)', 'Du freust ___ auf das Wochenende. (du)'],
      'dich',
      ['du → dich.', 'du → dich.'],
    ),
    fb(
      'sp-rv-e4',
      ['Wir treffen ___ um acht Uhr. (wir)', 'Wir treffen ___ um acht Uhr. (wir)'],
      'uns',
      ['wir → uns.', 'wir → uns.'],
    ),
    fb(
      'sp-rv-e5',
      ['Er beeilt ___ jeden Morgen. (er)', 'Er beeilt ___ jeden Morgen. (er)'],
      'sich',
      ['er → sich.', 'er → sich.'],
    ),
    match(
      'sp-rv-e6',
      [
        ['sich freuen', 'to be glad', 'se réjouir'],
        ['sich beeilen', 'to hurry', 'se dépêcher'],
        ['sich treffen', 'to meet', 'se retrouver'],
        ['sich erholen', 'to relax', 'se reposer'],
      ],
      ['Match each reflexive verb with its meaning.', 'Associe chaque verbe réfléchi à son sens.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Accusative or dative?', 'Accusatif ou datif ?',
      'When mir / dir replace mich / dich.', 'Quand mir / dir remplacent mich / dich.',
    ),
    grammar(
      'sp-rv-dative',
      ['The dative reflexive pronoun', 'Le pronom réfléchi au datif'],
      [
        'If the verb already has an **accusative object**, the reflexive pronoun is in the **dative**. Only **ich** and **du** change:\n\n- ich → **mir** · du → **dir** · er/sie/es → **sich**\n- wir → **uns** · ihr → **euch** · sie/Sie → **sich**\n\n- Ich wasche **mich**. (no other object → accusative)\n- Ich wasche **mir** die Hände. (die Hände = accusative → dative pronoun)\n- Ich putze **mir** die Zähne. · Er kämmt **sich** die Haare.\n\nThis is very frequent with **body parts** and clothing: German says **mir** die Hände (not "meine Hände").',
        'Si le verbe a déjà un **COD à l’accusatif**, le pronom réfléchi est au **datif**. Seuls **ich** et **du** changent :\n\n- ich → **mir** · du → **dir** · er/sie/es → **sich**\n- wir → **uns** · ihr → **euch** · sie/Sie → **sich**\n\n- Ich wasche **mich**. (pas d’autre objet → accusatif)\n- Ich wasche **mir** die Hände. (die Hände = accusatif → pronom au datif)\n- Ich putze **mir** die Zähne. · Er kämmt **sich** die Haare.\n\nC’est très fréquent avec les **parties du corps** et les vêtements : l’allemand dit **mir** die Hände (et non « meine Hände »).',
      ],
      [
        ['Ich wasche mich.', 'I wash (myself).', 'Je me lave.'],
        ['Ich wasche mir die Hände.', 'I wash my hands.', 'Je me lave les mains.'],
        ['Putzt du dir die Zähne?', 'Do you brush your teeth?', 'Te brosses-tu les dents ?'],
        ['Er zieht sich die Jacke an.', 'He puts on his jacket.', 'Il enfile sa veste.'],
      ],
    ),
    grammar(
      'sp-rv-dative-verbs',
      ['Verbs that often take a dative pronoun', 'Verbes qui prennent souvent un pronom au datif'],
      [
        'Some verbs use the **dative reflexive pronoun** to express "for myself" or "in my mind":\n\n- sich (D) etwas **kaufen**: Ich kaufe **mir** ein Buch.\n- sich (D) etwas **vorstellen**: Das kann ich **mir** nicht vorstellen.\n- sich (D) etwas **merken**: Das merke ich **mir**.\n- sich (D) etwas **ansehen**: Wir sehen **uns** den Film an.\n- sich (D) etwas **überlegen**: Ich überlege **mir** das.\n\nWith **nothing else** in the sentence, the same verb is accusative: Ich stelle **mich** vor (I introduce myself).',
        'Certains verbes emploient le **pronom réfléchi au datif** pour exprimer « pour soi » ou « dans sa tête » :\n\n- sich (D) etwas **kaufen** : Ich kaufe **mir** ein Buch.\n- sich (D) etwas **vorstellen** : Das kann ich **mir** nicht vorstellen.\n- sich (D) etwas **merken** : Das merke ich **mir**.\n- sich (D) etwas **ansehen** : Wir sehen **uns** den Film an.\n- sich (D) etwas **überlegen** : Ich überlege **mir** das.\n\nSi la phrase n’a **pas d’autre complément**, le même verbe est à l’accusatif : Ich stelle **mich** vor (je me présente).',
      ],
      [
        ['Ich kaufe mir ein neues Handy.', 'I am buying myself a new phone.', 'Je m’achète un nouveau portable.'],
        ['Das kann ich mir nicht vorstellen.', 'I cannot imagine that.', 'Je ne peux pas l’imaginer.'],
        ['Ich stelle mich vor: Ich heiße Anna.', 'Let me introduce myself: I’m Anna.', 'Je me présente : je m’appelle Anna.'],
      ],
    ),
    vocab('sp-reflexive-verben-sich-die-haende-waschen', 'sich die Hände waschen', 'to wash one’s hands', 'se laver les mains', null, 'sich dee HEN-de VA-schen', 'zikh dee HEN-deh VASH-en', ['Wasch dir die Hände vor dem Essen!', 'Wash your hands before eating!', 'Lave-toi les mains avant de manger !']),
    vocab('sp-reflexive-verben-sich-die-zaehne-putzen', 'sich die Zähne putzen', 'to brush one’s teeth', 'se brosser les dents', null, 'sich dee TSÄ-ne PUT-zen', 'zikh dee TSAY-neh POOT-sen', ['Ich putze mir zweimal täglich die Zähne.', 'I brush my teeth twice a day.', 'Je me brosse les dents deux fois par jour.']),
    vocab('sp-reflexive-verben-sich-etwas-kaufen', 'sich etwas kaufen', 'to buy oneself something', 's’acheter quelque chose', null, 'sich ET-vas KAU-fen', 'zikh ET-vahs KOW-fen', ['Ich kaufe mir einen neuen Mantel.', 'I am buying myself a new coat.', 'Je m’achète un nouveau manteau.']),
    mc(
      'sp-rv-e7',
      ['"Ich wasche ___ die Hände."', '« Ich wasche ___ die Hände. »'],
      ['mich', 'mir', 'sich'], ['mich', 'mir', 'sich'], 1,
      ['An accusative object (die Hände) is present → dative pronoun: mir.', 'Il y a un COD à l’accusatif (die Hände) → pronom au datif : mir.'],
    ),
    mc(
      'sp-rv-e8',
      ['"Ich wasche ___." (nothing else)', '« Ich wasche ___. » (rien d’autre)'],
      ['mich', 'mir', 'sich'], ['mich', 'mir', 'sich'], 0,
      ['No other object → accusative: mich.', 'Pas d’autre objet → accusatif : mich.'],
    ),
    fb(
      'sp-rv-e9',
      ['Putzt du ___ die Zähne? (du — Dativ)', 'Putzt du ___ die Zähne ? (du — datif)'],
      'dir',
      ['du → dir (dative).', 'du → dir (datif).'],
    ),
    fb(
      'sp-rv-e10',
      ['Ich kaufe ___ ein neues Handy. (ich — Dativ)', 'Ich kaufe ___ ein neues Handy. (ich — datif)'],
      'mir',
      ['ich → mir (dative).', 'ich → mir (datif).'],
    ),
    fb(
      'sp-rv-e11',
      ['Er kämmt ___ die Haare. (er)', 'Er kämmt ___ die Haare. (er)'],
      'sich',
      ['In the 3rd person, accusative and dative are both sich.', 'À la 3e personne, accusatif et datif sont tous deux sich.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Word order and tenses', 'Ordre des mots et temps',
      'Where does sich go?', 'Où placer sich ?',
    ),
    grammar(
      'sp-rv-order',
      ['Position of sich', 'Place de sich'],
      [
        '**Main clause:** sich comes right **after the conjugated verb** (position 3 when the subject is first): Er **freut sich** auf den Urlaub.\n\nWhen **another element starts the sentence**, a **pronoun subject** comes first, then sich: **Heute** freut **er sich**. With a **noun subject**, sich usually comes before it: Heute freut **sich** **Anna** sehr.\n\n**Questions:** Freust **du dich** auf das Wochenende? **Wann** triffst **du dich** mit Jonas?\n\n**Subordinate clause:** sich comes **after the conjunction and after a pronoun subject** (before a noun subject): …, weil **ich mich** freue. …, weil **sich** Anna freut. …, dass **er sich** beeilt.',
        '**Phrase principale :** sich vient juste **après le verbe conjugué** (3e position quand le sujet est en tête) : Er **freut sich** auf den Urlaub.\n\nQuand **un autre élément ouvre la phrase**, un **sujet pronom** vient d’abord, puis sich : **Heute** freut **er sich**. Avec un **sujet nominal**, sich vient en général avant lui : Heute freut **sich** **Anna** sehr.\n\n**Questions :** Freust **du dich** auf das Wochenende ? **Wann** triffst **du dich** mit Jonas ?\n\n**Subordonnée :** sich vient **après la conjonction**, en général **après le pronom sujet** : …, weil **ich mich** freue. …, dass **er sich** beeilt.',
      ],
      [
        ['Er freut sich auf den Urlaub.', 'He is looking forward to the holiday.', 'Il se réjouit des vacances.'],
        ['Freust du dich auf das Wochenende?', 'Are you looking forward to the weekend?', 'Te réjouis-tu du week-end ?'],
        ['Ich bin glücklich, weil ich mich freue.', 'I am happy because I am glad.', 'Je suis heureux parce que je me réjouis.'],
      ],
    ),
    grammar(
      'sp-rv-forms',
      ['Perfekt, imperative, infinitive with zu, modals', 'Perfekt, impératif, infinitif avec zu, modaux'],
      [
        '**Perfekt**: **haben** + participle; sich stays after the helper: Ich **habe mich** sehr **gefreut**. Wir **haben uns** gestern **getroffen**.\n\n**Imperative**: the pronoun follows the verb: **Beeil dich!** · **Beeilt euch!** · **Beeilen Sie sich!**\n\n**Modals**: Ich **will mich** erholen. Du **musst dich** beeilen.\n\n**Infinitive with zu**: Ich habe vergessen, **mich** anzumelden. Er hat keine Lust, **sich** zu beeilen.',
        '**Perfekt** : **haben** + participe ; sich reste après l’auxiliaire : Ich **habe mich** sehr **gefreut**. Wir **haben uns** gestern **getroffen**.\n\n**Impératif** : le pronom suit le verbe : **Beeil dich !** · **Beeilt euch !** · **Beeilen Sie sich !**\n\n**Modaux** : Ich **will mich** erholen. Du **musst dich** beeilen.\n\n**Infinitif avec zu** : Ich habe vergessen, **mich** anzumelden. Er hat keine Lust, **sich** zu beeilen.',
      ],
      [
        ['Wir haben uns gestern getroffen.', 'We met yesterday.', 'Nous nous sommes retrouvés hier.'],
        ['Beeil dich!', 'Hurry up!', 'Dépêche-toi !'],
        ['Du musst dich ausruhen.', 'You need to rest.', 'Tu dois te reposer.'],
      ],
    ),
    vocab('sp-reflexive-verben-sich-ausruhen', 'sich ausruhen', 'to rest', 'se reposer', null, 'sich AUS-ru-hen', 'zikh OWS-roo-en', ['Nach der Arbeit ruhe ich mich aus.', 'After work I rest.', 'Après le travail, je me repose.']),
    vocab('sp-reflexive-verben-sich-anmelden', 'sich anmelden', 'to register, to sign up', 's’inscrire', null, 'sich AN-mel-den', 'zikh AHN-mel-den', ['Ich möchte mich für den Kurs anmelden.', 'I would like to sign up for the course.', 'Je voudrais m’inscrire au cours.']),
    wo('sp-rv-e12', ['sich', 'Er', 'auf', 'freut', 'den', 'Urlaub'], ['Er', 'freut', 'sich', 'auf', 'den', 'Urlaub'], ['sich directly after the conjugated verb.', 'sich juste après le verbe conjugué.']),
    wo('sp-rv-e13', ['du', 'auf', 'dich', 'Freust', 'das', 'Wochenende?'], ['Freust', 'du', 'dich', 'auf', 'das', 'Wochenende?'], ['Question: verb, subject, sich.', 'Question : verbe, sujet, sich.']),
    wo('sp-rv-e14', ['gestern', 'getroffen', 'Wir', 'haben', 'uns'], ['Wir', 'haben', 'uns', 'gestern', 'getroffen'], ['Perfekt: helper, sich, time, participle.', 'Perfekt : auxiliaire, sich, temps, participe.']),
    fb(
      'sp-rv-e15',
      ['Ich habe ___ sehr gefreut. (ich)', 'Ich habe ___ sehr gefreut. (ich)'],
      'mich',
      ['Perfekt: Ich habe mich gefreut.', 'Perfekt : Ich habe mich gefreut.'],
    ),
    fb(
      'sp-rv-e16',
      ['Beeil ___, wir kommen zu spät! (du)', 'Beeil ___, wir kommen zu spät ! (du)'],
      'dich',
      ['Imperative: Beeil dich!', 'Impératif : Beeil dich !'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Everyday reflexive verbs', 'Les verbes réfléchis du quotidien',
      'Routine, feelings and prepositions.', 'Routine, sentiments et prépositions.',
    ),
    grammar(
      'sp-rv-routine',
      ['Daily routine', 'Routine quotidienne'],
      [
        'These verbs describe your morning routine:\n\n- sich **waschen** · sich **duschen** · sich **anziehen** · sich **umziehen**\n- sich **rasieren** · sich **kämmen** · sich **schminken**\n- sich **hinlegen** (lie down) · sich **hinsetzen** (sit down) · sich **ausruhen**\n- sich **die Zähne putzen** · sich **die Haare waschen**\n\nMany are **separable**: Ich ziehe **mich** an. Er legt **sich** hin. Wir setzen **uns** hin.',
        'Ces verbes décrivent ta routine du matin :\n\n- sich **waschen** · sich **duschen** · sich **anziehen** · sich **umziehen**\n- sich **rasieren** · sich **kämmen** · sich **schminken**\n- sich **hinlegen** (s’allonger) · sich **hinsetzen** (s’asseoir) · sich **ausruhen**\n- sich **die Zähne putzen** · sich **die Haare waschen**\n\nBeaucoup sont **séparables** : Ich ziehe **mich** an. Er legt **sich** hin. Wir setzen **uns** hin.',
      ],
      [
        ['Ich dusche mich jeden Morgen.', 'I shower every morning.', 'Je prends une douche chaque matin.'],
        ['Sie zieht sich schnell an.', 'She gets dressed quickly.', 'Elle s’habille rapidement.'],
        ['Setz dich bitte hin.', 'Please sit down.', 'Assieds-toi, s’il te plaît.'],
      ],
    ),
    grammar(
      'sp-rv-prep',
      ['Reflexive verbs with prepositions', 'Verbes réfléchis avec prépositions'],
      [
        'Many reflexive verbs combine with a **fixed preposition**. Learn them together:\n\n- sich **freuen auf** + Akk. (future): Ich freue mich **auf** den Urlaub.\n- sich **freuen über** + Akk. (present, past): Ich freue mich **über** das Geschenk.\n- sich **interessieren für** + Akk.: Er interessiert sich **für** Musik.\n- sich **ärgern über** + Akk.: Wir ärgern uns **über** den Lärm.\n- sich **erinnern an** + Akk.: Ich erinnere mich **an** meine Kindheit.\n- sich **treffen mit** + Dat.: Ich treffe mich **mit** Freunden.',
        'Beaucoup de verbes réfléchis se combinent avec une **préposition fixe**. Apprends-les ensemble :\n\n- sich **freuen auf** + Akk. (futur) : Ich freue mich **auf** den Urlaub.\n- sich **freuen über** + Akk. (présent, passé) : Ich freue mich **über** das Geschenk.\n- sich **interessieren für** + Akk. : Er interessiert sich **für** Musik.\n- sich **ärgern über** + Akk. : Wir ärgern uns **über** den Lärm.\n- sich **erinnern an** + Akk. : Ich erinnere mich **an** meine Kindheit.\n- sich **treffen mit** + Dat. : Ich treffe mich **mit** Freunden.',
      ],
      [
        ['Ich freue mich auf den Urlaub.', 'I am looking forward to the holiday.', 'Je me réjouis des vacances à venir.'],
        ['Ich freue mich über das Geschenk.', 'I am happy about the present.', 'Je suis content du cadeau.'],
        ['Er interessiert sich für Musik.', 'He is interested in music.', 'Il s’intéresse à la musique.'],
        ['Ich erinnere mich an meine Kindheit.', 'I remember my childhood.', 'Je me souviens de mon enfance.'],
      ],
    ),
    vocab('sp-reflexive-verben-sich-interessieren', 'sich interessieren für', 'to be interested in', 's’intéresser à', null, 'sich in-te-res-SIE-ren fyr', 'zikh in-teh-reh-SEE-ren fuer', ['Ich interessiere mich für Geschichte.', 'I am interested in history.', 'Je m’intéresse à l’histoire.']),
    vocab('sp-reflexive-verben-sich-aergern', 'sich ärgern über', 'to be annoyed about', 'se fâcher de', null, 'sich Ä-gern Ü-ber', 'zikh ER-gern UE-ber', ['Ich ärgere mich über den Lärm.', 'I am annoyed about the noise.', 'Je suis agacé par le bruit.']),
    vocab('sp-reflexive-verben-sich-erinnern', 'sich erinnern an', 'to remember', 'se souvenir de', null, 'sich er-IN-nern an', 'zikh er-IN-ern ahn', ['Erinnerst du dich an mich?', 'Do you remember me?', 'Te souviens-tu de moi ?']),
    mc(
      'sp-rv-e17',
      ['"Ich freue mich ___ den Urlaub (next month)."', '« Ich freue mich ___ den Urlaub (le mois prochain). »'],
      ['über', 'auf', 'an'], ['über', 'auf', 'an'], 1,
      ['A future event → sich freuen auf.', 'Un événement futur → sich freuen auf.'],
    ),
    mc(
      'sp-rv-e18',
      ['"Ich freue mich ___ das Geschenk (I received it)."', '« Ich freue mich ___ das Geschenk (je l’ai reçu). »'],
      ['über', 'auf', 'für'], ['über', 'auf', 'für'], 0,
      ['A present or past reason → sich freuen über.', 'Une raison présente ou passée → sich freuen über.'],
    ),
    mc(
      'sp-rv-e19',
      ['"Er interessiert sich ___ Musik."', '« Er interessiert sich ___ Musik. »'],
      ['für', 'auf', 'an'], ['für', 'auf', 'an'], 0,
      ['sich interessieren für.', 'sich interessieren für.'],
    ),
    mc(
      'sp-rv-e20',
      ['"Ich erinnere mich ___ meine Kindheit."', '« Ich erinnere mich ___ meine Kindheit. »'],
      ['an', 'über', 'für'], ['an', 'über', 'für'], 0,
      ['sich erinnern an + Akkusativ.', 'sich erinnern an + accusatif.'],
    ),

    wrapup(
      '**Pronouns (accusative)** — mich, dich, sich, uns, euch, sich. **Dative** (with another accusative object) — mir, dir, sich, uns, euch, sich: Ich wasche mir die Hände.\n\n**Three kinds** — always reflexive (sich freuen, beeilen), optionally reflexive (waschen), reciprocal (wir treffen uns).\n\n**Order** — sich right after the conjugated verb: Er freut sich. Questions: Freust du dich? Subordinate: …, weil ich mich freue.\n\n**Forms** — Perfekt: Ich habe mich gefreut. Imperative: Beeil dich! Modals: Du musst dich beeilen. With zu: …, sich anzumelden.\n\n**Prepositions** — sich freuen auf / über, interessieren für, ärgern über, erinnern an.',
      '**Pronoms (accusatif)** — mich, dich, sich, uns, euch, sich. **Datif** (avec un autre COD à l’accusatif) — mir, dir, sich, uns, euch, sich : Ich wasche mir die Hände.\n\n**Trois sortes** — toujours réfléchis (sich freuen, beeilen), facultativement réfléchis (waschen), réciproques (wir treffen uns).\n\n**Ordre** — sich juste après le verbe conjugué : Er freut sich. Questions : Freust du dich ? Subordonnée : …, weil ich mich freue.\n\n**Formes** — Perfekt : Ich habe mich gefreut. Impératif : Beeil dich ! Modaux : Du musst dich beeilen. Avec zu : …, sich anzumelden.\n\n**Prépositions** — sich freuen auf / über, interessieren für, ärgern über, erinnern an.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Reflexive verbs', 'Quiz final : les verbes réfléchis'),
    mc(
      'sp-rv-q1',
      ['"Wir treffen ___ morgen."', '« Wir treffen ___ morgen. »'],
      ['uns', 'sich', 'mich'], ['uns', 'sich', 'mich'], 0,
      ['wir → uns.', 'wir → uns.'],
    ),
    mc(
      'sp-rv-q2',
      ['"Ich putze ___ die Zähne."', '« Ich putze ___ die Zähne. »'],
      ['mich', 'mir', 'sich'], ['mich', 'mir', 'sich'], 1,
      ['An accusative object is present → mir.', 'Un COD à l’accusatif est présent → mir.'],
    ),
    mc(
      'sp-rv-q3',
      ['"Ihr beeilt ___ nicht."', '« Ihr beeilt ___ nicht. »'],
      ['euch', 'sich', 'uns'], ['euch', 'sich', 'uns'], 0,
      ['ihr → euch.', 'ihr → euch.'],
    ),
    fb(
      'sp-rv-q4',
      ['Sie freut ___ auf die Party. (sie, Singular)', 'Sie freut ___ auf die Party. (sie, singulier)'],
      'sich',
      ['3rd person: sich.', '3e personne : sich.'],
    ),
    fb(
      'sp-rv-q5',
      ['Ich kaufe ___ ein Buch. (ich — Dativ)', 'Ich kaufe ___ ein Buch. (ich — datif)'],
      'mir',
      ['dative of ich: mir.', 'datif de ich : mir.'],
    ),
    fb(
      'sp-rv-q6',
      ['Hast du ___ schon angemeldet? (du)', 'Hast du ___ schon angemeldet ? (du)'],
      'dich',
      ['Perfekt: Hast du dich angemeldet?', 'Perfekt : Hast du dich angemeldet ?'],
    ),
    fb(
      'sp-rv-q7',
      ['Er interessiert sich ___ Politik. (Präposition)', 'Er interessiert sich ___ Politik. (préposition)'],
      'für',
      ['sich interessieren für.', 'sich interessieren für.'],
    ),
    wo('sp-rv-q8', ['mich', 'Ich', 'beeile', 'jeden', 'Morgen'], ['Ich', 'beeile', 'mich', 'jeden', 'Morgen'], ['sich after the conjugated verb.', 'sich après le verbe conjugué.']),
    wo('sp-rv-q9', ['mir', 'wasche', 'Ich', 'die', 'Hände'], ['Ich', 'wasche', 'mir', 'die', 'Hände'], ['Dative pronoun before the accusative object.', 'Pronom au datif avant le COD à l’accusatif.']),
    wo('sp-rv-q10', ['weil', 'Ich', 'bin', 'glücklich,', 'ich', 'mich', 'freue'], ['Ich', 'bin', 'glücklich,', 'weil', 'ich', 'mich', 'freue'], ['In the subordinate clause: conjunction, subject, sich, verb.', 'Dans la subordonnée : conjonction, sujet, sich, verbe.']),
    wo('sp-rv-q11', ['uns', 'haben', 'Wir', 'gestern', 'getroffen'], ['Wir', 'haben', 'uns', 'gestern', 'getroffen'], ['Perfekt of a reflexive verb.', 'Perfekt d’un verbe réfléchi.']),
    mc(
      'sp-rv-q12',
      ['Which is correct?', 'Quelle phrase est correcte ?'],
      ['Beeil dich!', 'Beeil mich!', 'Beeil sich!'], ['Beeil dich!', 'Beeil mich!', 'Beeil sich!'], 0,
      ['Imperative singular: Beeil dich!', 'Impératif singulier : Beeil dich !'],
    ),
    lc(
      'sp-rv-q13',
      ['Listen. What is the person looking forward to?', 'Écoute. À quoi la personne se réjouit-elle ?'],
      'Ich freue mich auf das Wochenende.',
      ['The weekend', 'The holiday', 'The party'], ['Le week-end', 'Les vacances', 'La fête'], 0,
      ['das Wochenende = the weekend.', 'das Wochenende = le week-end.'],
    ),
    lc(
      'sp-rv-q14',
      ['Listen. When do they meet?', 'Écoute. Quand se retrouvent-ils ?'],
      'Wir treffen uns um acht Uhr am Bahnhof.',
      ['At eight o’clock', 'At nine o’clock', 'At noon'], ['À huit heures', 'À neuf heures', 'À midi'], 0,
      ['um acht Uhr = at eight o’clock.', 'um acht Uhr = à huit heures.'],
    ),
  ],
});

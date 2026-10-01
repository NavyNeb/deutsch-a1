import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const modalverben = defineSpecial({
  slug: 'modalverben',
  number: 1,
  group: 'verbs',
  levels: ['A1', 'B1'],
  related: ['l7', 'l10', 'l16', 'a2-l3', 'b1-l23'],
  bookRefs: [{ book: 'daf-grammatiktrainer', start: 206, end: 210 }, { book: 'easy-german', start: 274, end: 281 }],
  title: ['Modalverben', 'Modal verbs', 'Verbes modaux'],
  theme: [
    'The six modal verbs: forms, sentence frame, meanings, past tense and polite requests',
    'Les six verbes modaux : formes, structure de la phrase, sens, passé et demandes polies',
  ],
  goals: [
    'Know the six modal verbs and what each one expresses',
    'Conjugate them, including the ich/er forms without an ending',
    'Build sentences with the modal in position 2 and the infinitive at the end',
    'Tell müssen nicht from nicht dürfen, and wollen from möchten',
    'Use the past tense (konnte, musste …) and polite requests',
  ],
  goalsFr: [
    'Connaître les six verbes modaux et ce que chacun exprime',
    'Les conjuguer, y compris les formes ich/er sans terminaison',
    'Construire des phrases avec le modal en 2e position et l’infinitif à la fin',
    'Distinguer müssen nicht de nicht dürfen, et wollen de möchten',
    'Utiliser le passé (konnte, musste …) et les demandes polies',
  ],
  steps: [
    intro(
      'Ich muss, ich kann, ich will …', 'Je dois, je peux, je veux …',
      'Modal verbs are the small helpers you use every single day: to ask permission, to say what you must do, and to be polite. Master these six and your German instantly sounds more natural.',
      'Les verbes modaux sont les petits auxiliaires du quotidien : demander la permission, dire ce qu’on doit faire, rester poli. Maîtrise ces six verbes et ton allemand sonnera tout de suite plus naturel.',
      [
        'Know the six modal verbs and what each one expresses',
        'Conjugate them correctly',
        'Build the sentence frame: modal + … + infinitive',
        'Avoid the classic traps (müssen nicht, wollen vs. möchten)',
      ],
      [
        'Connaître les six verbes modaux et leur sens',
        'Les conjuguer correctement',
        'Construire le cadre : modal + … + infinitif',
        'Éviter les pièges classiques (müssen nicht, wollen vs möchten)',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'The six modal verbs', 'Les six verbes modaux',
      'What they mean and when you reach for each one.', 'Ce qu’ils signifient et quand utiliser chacun.',
    ),
    grammar(
      'sp-mv-overview',
      ['What a modal verb does', 'Le rôle d’un verbe modal'],
      [
        'A modal verb **modifies** another verb: it tells us whether the action is *possible, necessary, allowed, wanted, advised* or *liked*. The other verb stays in the **infinitive**.\n\n- **können** — ability or possibility (can)\n- **müssen** — necessity (must, have to)\n- **dürfen** — permission (may, be allowed to)\n- **wollen** — a firm wish or plan (want to)\n- **sollen** — a duty set by someone else, or advice (should, be supposed to)\n- **mögen / möchten** — liking / a polite wish (like / would like)',
        'Un verbe modal **modifie** un autre verbe : il dit si l’action est *possible, nécessaire, permise, voulue, conseillée* ou *aimée*. L’autre verbe reste à l’**infinitif**.\n\n- **können** — capacité ou possibilité (pouvoir, savoir)\n- **müssen** — nécessité (devoir, falloir)\n- **dürfen** — permission (avoir le droit de)\n- **wollen** — un souhait ferme ou un projet (vouloir)\n- **sollen** — un devoir imposé par quelqu’un d’autre, ou un conseil (devoir, être censé)\n- **mögen / möchten** — goût / souhait poli (aimer / vouloir bien, aimerais)',
      ],
      [
        ['Ich kann Auto fahren.', 'I can drive a car.', 'Je sais conduire.'],
        ['Wir müssen heute lernen.', 'We have to study today.', 'Nous devons étudier aujourd’hui.'],
        ['Hier darf man nicht rauchen.', 'You may not smoke here.', 'Il est interdit de fumer ici.'],
        ['Sie will Ärztin werden.', 'She wants to become a doctor.', 'Elle veut devenir médecin.'],
        ['Du sollst mehr schlafen.', 'You should sleep more.', 'Tu devrais dormir davantage.'],
        ['Ich möchte einen Kaffee.', 'I would like a coffee.', 'Je voudrais un café.'],
      ],
    ),
    vocab('sp-modalverben-koennen', 'können', 'can, to be able to', 'pouvoir, savoir', null, 'KÖN-nen', 'KOEN-en', ['Kannst du schwimmen?', 'Can you swim?', 'Sais-tu nager ?']),
    vocab('sp-modalverben-muessen', 'müssen', 'must, to have to', 'devoir, falloir', null, 'MÜS-sen', 'MUESS-en', ['Ich muss früh aufstehen.', 'I have to get up early.', 'Je dois me lever tôt.']),
    vocab('sp-modalverben-duerfen', 'dürfen', 'may, to be allowed to', 'avoir le droit de', null, 'DÜR-fen', 'DUER-fen', ['Darf ich hier sitzen?', 'May I sit here?', 'Puis-je m’asseoir ici ?']),
    vocab('sp-modalverben-wollen', 'wollen', 'to want to', 'vouloir', null, 'WOL-len', 'VOL-en', ['Wir wollen nach Berlin fahren.', 'We want to go to Berlin.', 'Nous voulons aller à Berlin.']),
    vocab('sp-modalverben-sollen', 'sollen', 'should, to be supposed to', 'devoir (conseil, ordre)', null, 'SOL-len', 'ZOL-en', ['Du sollst zum Arzt gehen.', 'You should go to the doctor.', 'Tu devrais aller chez le médecin.']),
    vocab('sp-modalverben-moechten', 'möchten', 'would like to', 'vouloir bien, aimerais', null, 'MÖCH-ten', 'MOEKH-ten', ['Ich möchte bitte zahlen.', 'I would like to pay, please.', 'Je voudrais payer, s’il vous plaît.']),
    mc(
      'sp-mv-e1',
      ['Which modal verb fits? "In the library you ___ not talk loudly." (it is forbidden)', 'Quel verbe modal convient ? « À la bibliothèque, on ___ pas parler fort. » (c’est interdit)'],
      ['darf', 'kann', 'will'], ['darf', 'kann', 'will'], 0,
      ['**dürfen** expresses permission; with **nicht** it means "is not allowed".', '**dürfen** exprime la permission ; avec **nicht** il signifie « n’a pas le droit ».'],
    ),
    mc(
      'sp-mv-e2',
      ['"Du sollst mehr Wasser trinken." — what does it express?', '« Du sollst mehr Wasser trinken. » — qu’est-ce que cela exprime ?'],
      ['Advice or an instruction from someone else', 'Your own strong wish', 'An ability'],
      ['Un conseil ou une consigne venant de quelqu’un d’autre', 'Ton propre souhait ferme', 'Une capacité'], 0,
      ['**sollen** reports what someone else wants or recommends (a doctor, a parent, a rule).', '**sollen** rapporte ce que quelqu’un d’autre veut ou recommande (médecin, parent, règle).'],
    ),
    match(
      'sp-mv-e3',
      [
        ['können', 'can / ability', 'pouvoir / capacité'],
        ['müssen', 'must / necessity', 'devoir / nécessité'],
        ['dürfen', 'may / permission', 'avoir le droit / permission'],
        ['wollen', 'want / firm wish', 'vouloir / souhait ferme'],
      ],
      ['Match each modal verb with its core idea.', 'Associe chaque verbe modal à son idée centrale.'],
    ),
    fb(
      'sp-mv-e4',
      ['Wir ___ morgen arbeiten. (müssen — wir-form)', 'Wir ___ morgen arbeiten. (müssen — forme wir)'],
      'müssen',
      ['For wir the modal keeps the infinitive form.', 'Avec wir, le modal garde la forme de l’infinitif.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Conjugation', 'Conjugaison',
      'Irregular singular, regular plural — and one very helpful shortcut.', 'Singulier irrégulier, pluriel régulier — et un raccourci très pratique.',
    ),
    grammar(
      'sp-mv-conj-1',
      ['The pattern: ich = er/sie/es', 'Le schéma : ich = er/sie/es'],
      [
        'Modal verbs follow one pattern. In the singular the **stem changes** (or is shortened) and **ich** and **er/sie/es** have **no ending** — they are identical. The **wir / sie / Sie** forms equal the infinitive.\n\n- ich **kann**, du **kannst**, er **kann**\n- wir **können**, ihr **könnt**, sie **können**\n\nSo you only need to learn *one* singular stem per verb.',
        'Les verbes modaux suivent un seul schéma. Au singulier, le **radical change** (ou se raccourcit) et **ich** et **er/sie/es** n’ont **aucune terminaison** : ils sont identiques. Les formes **wir / sie / Sie** sont égales à l’infinitif.\n\n- ich **kann**, du **kannst**, er **kann**\n- wir **können**, ihr **könnt**, sie **können**\n\nIl suffit donc d’apprendre *un seul* radical du singulier par verbe.',
      ],
      [
        ['ich kann', 'I can', 'je peux'],
        ['du kannst', 'you can', 'tu peux'],
        ['er / sie / es kann', 'he / she / it can', 'il / elle / on peut'],
        ['wir können', 'we can', 'nous pouvons'],
        ['ihr könnt', 'you (pl.) can', 'vous pouvez'],
        ['sie / Sie können', 'they / you (formal) can', 'ils / vous pouvez'],
      ],
      'conjugation-table',
    ),
    grammar(
      'sp-mv-conj-2',
      ['Singular stems of all six', 'Les radicaux du singulier des six verbes'],
      [
        'Here are the singular forms side by side. Notice the missing **-t** in **ich/er**:\n\n- **können**: ich kann · du kannst\n- **müssen**: ich muss · du musst\n- **dürfen**: ich darf · du darfst\n- **wollen**: ich will · du willst\n- **sollen**: ich soll · du sollst\n- **mögen**: ich mag · du magst\n- **möchten**: ich möchte · du möchtest\n\n**möchten** is the odd one out: it keeps a regular **-e** in ich/er (ich möchte, er möchte).',
        'Voici les formes du singulier côte à côte. Remarque l’absence de **-t** à **ich/er** :\n\n- **können** : ich kann · du kannst\n- **müssen** : ich muss · du musst\n- **dürfen** : ich darf · du darfst\n- **wollen** : ich will · du willst\n- **sollen** : ich soll · du sollst\n- **mögen** : ich mag · du magst\n- **möchten** : ich möchte · du möchtest\n\n**möchten** fait exception : il garde un **-e** régulier à ich/er (ich möchte, er möchte).',
      ],
      [
        ['Er muss gehen. (nicht: er musst)', 'He has to go.', 'Il doit partir.'],
        ['Sie darf das nicht.', 'She is not allowed to do that.', 'Elle n’a pas le droit de faire ça.'],
        ['Ich mag Tee.', 'I like tea.', 'J’aime le thé.'],
        ['Er möchte einen Tisch.', 'He would like a table.', 'Il voudrait une table.'],
      ],
    ),
    fb(
      'sp-mv-e5',
      ['Ich ___ heute nicht kommen. (können — ich-form)', 'Ich ___ heute nicht kommen. (können — forme ich)'],
      'kann',
      ['ich has no ending: ich kann.', 'ich n’a pas de terminaison : ich kann.'],
    ),
    fb(
      'sp-mv-e6',
      ['Du ___ jetzt schlafen. (müssen — du-form)', 'Du ___ jetzt schlafen. (müssen — forme du)'],
      'musst',
      ['du always takes -st: du musst.', 'du prend toujours -st : du musst.'],
    ),
    fb(
      'sp-mv-e7',
      ['Er ___ hier nicht parken. (dürfen — er-form)', 'Er ___ hier nicht parken. (dürfen — forme er)'],
      'darf',
      ['The vowel loses its umlaut in the singular: darf.', 'La voyelle perd son tréma au singulier : darf.'],
    ),
    mc(
      'sp-mv-e8',
      ['Which form is correct?', 'Quelle forme est correcte ?'],
      ['Er will ein Eis.', 'Er willt ein Eis.', 'Er wollt ein Eis.'], ['Er will ein Eis.', 'Er willt ein Eis.', 'Er wollt ein Eis.'], 0,
      ['**er/sie/es** has no ending with modal verbs: er will.', 'Avec les verbes modaux, **er/sie/es** n’a pas de terminaison : er will.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'The sentence frame', 'Le cadre de la phrase',
      'Modal in position 2, infinitive at the very end.', 'Modal en 2e position, infinitif tout à la fin.',
    ),
    grammar(
      'sp-mv-frame',
      ['The Satzklammer: modal … infinitive', 'La Satzklammer : modal … infinitif'],
      [
        'The conjugated modal sits in **position 2**; the **infinitive** goes to the **end**. Everything else is squeezed in between, like a sentence bracket (*Satzklammer*).\n\n- Ich **kann** heute Abend im Café **arbeiten**.\n- Am Samstag **müssen** wir früh **aufstehen**.\n\nIn **questions** the modal moves to position 1: **Kannst** du mir **helfen**? With a **separable verb**, the verb stays in one piece at the end: Ich **muss** früh **aufstehen**.',
        'Le modal conjugué occupe la **2e position** ; l’**infinitif** va à la **fin**. Tout le reste se glisse entre les deux, comme une parenthèse (*Satzklammer*).\n\n- Ich **kann** heute Abend im Café **arbeiten**.\n- Am Samstag **müssen** wir früh **aufstehen**.\n\nDans les **questions**, le modal passe en 1re position : **Kannst** du mir **helfen** ? Avec un **verbe séparable**, le verbe reste d’un seul bloc à la fin : Ich **muss** früh **aufstehen**.',
      ],
      [
        ['Ich kann gut kochen.', 'I can cook well.', 'Je sais bien cuisiner.'],
        ['Kannst du mir bitte helfen?', 'Can you help me, please?', 'Peux-tu m’aider, s’il te plaît ?'],
        ['Heute müssen wir lange arbeiten.', 'Today we have to work late.', 'Aujourd’hui, nous devons travailler tard.'],
        ['Ich muss früh aufstehen.', 'I have to get up early.', 'Je dois me lever tôt.'],
      ],
      'satzklammer',
    ),
    grammar(
      'sp-mv-sub',
      ['In subordinate clauses and without an infinitive', 'Dans les subordonnées et sans infinitif'],
      [
        'In a **subordinate clause** (after *weil, dass, wenn …*) the conjugated verb goes to the end — so the **modal comes last**, after the infinitive:\n\n- Ich bleibe zu Hause, weil ich arbeiten **muss**.\n\nModals can also stand **alone** when the action is obvious:\n\n- Ich **kann** Deutsch. · Er **muss** nach Hause. · Sie **will** ein Eis.',
        'Dans une **subordonnée** (après *weil, dass, wenn …*), le verbe conjugué part à la fin — le **modal est donc en dernier**, après l’infinitif :\n\n- Ich bleibe zu Hause, weil ich arbeiten **muss**.\n\nLes modaux peuvent aussi s’employer **seuls** quand l’action est évidente :\n\n- Ich **kann** Deutsch. · Er **muss** nach Hause. · Sie **will** ein Eis.',
      ],
      [
        ['Ich bleibe hier, weil ich lernen muss.', 'I am staying here because I have to study.', 'Je reste ici parce que je dois étudier.'],
        ['Ich weiß, dass du schwimmen kannst.', 'I know that you can swim.', 'Je sais que tu sais nager.'],
        ['Ich kann Deutsch.', 'I speak German. (lit. I can German)', 'Je parle allemand.'],
      ],
    ),
    wo('sp-mv-e9', ['kann', 'gut', 'Ich', 'tanzen'], ['Ich', 'kann', 'gut', 'tanzen'], ['Modal in position 2, infinitive last.', 'Modal en 2e position, infinitif en dernier.']),
    wo('sp-mv-e10', ['du', 'Kannst', 'helfen', 'mir'], ['Kannst', 'du', 'mir', 'helfen'], ['A yes/no question starts with the modal.', 'Une question fermée commence par le modal.']),
    wo('sp-mv-e11', ['müssen', 'wir', 'Heute', 'arbeiten'], ['Heute', 'müssen', 'wir', 'arbeiten'], ['After a time word the verb still comes second.', 'Après un complément de temps, le verbe reste en 2e position.']),
    wo('sp-mv-e12', ['weil', 'ich', 'Ich', 'bleibe', 'arbeiten', 'muss', 'hier,'], ['Ich', 'bleibe', 'hier,', 'weil', 'ich', 'arbeiten', 'muss'], ['In the weil-clause the modal goes last.', 'Dans la proposition en weil, le modal est en dernier.']),
    mc(
      'sp-mv-e13',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich muss um sechs Uhr aufstehen.', 'Ich muss um sechs Uhr stehen auf.', 'Ich stehe um sechs Uhr auf müssen.'],
      ['Ich muss um sechs Uhr aufstehen.', 'Ich muss um sechs Uhr stehen auf.', 'Ich stehe um sechs Uhr auf müssen.'], 0,
      ['With a modal, a separable verb is NOT split: it stays together as an infinitive at the end.', 'Avec un modal, un verbe séparable n’est PAS séparé : il reste groupé à l’infinitif, à la fin.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Meaning traps', 'Les pièges de sens',
      'Three pairs that French speakers (and English speakers) mix up.', 'Trois paires que l’on confond souvent.',
    ),
    grammar(
      'sp-mv-neg',
      ['müssen nicht ≠ nicht dürfen', 'müssen nicht ≠ nicht dürfen'],
      [
        'With **nicht**, two modals change meaning in a surprising way:\n\n- **nicht müssen** = it is *not necessary* (you don\'t have to) → **Du musst nicht kommen.**\n- **nicht dürfen** = it is *forbidden* (you must not) → **Du darfst nicht kommen.**\n\nFor "must not" never use *müssen nicht*; use **nicht dürfen**.',
        'Avec **nicht**, deux modaux changent de sens de façon surprenante :\n\n- **nicht müssen** = ce n’est *pas nécessaire* (tu n’es pas obligé) → **Du musst nicht kommen.**\n- **nicht dürfen** = c’est *interdit* (tu ne dois pas) → **Du darfst nicht kommen.**\n\nPour « ne pas devoir (interdit) », n’emploie jamais *müssen nicht* ; utilise **nicht dürfen**.',
      ],
      [
        ['Du musst nicht kommen. Es ist freiwillig.', 'You don\'t have to come. It\'s voluntary.', 'Tu n’es pas obligé de venir. C’est facultatif.'],
        ['Du darfst nicht kommen. Es ist privat.', 'You must not come. It\'s private.', 'Tu ne dois pas venir. C’est privé.'],
        ['Hier dürfen Kinder nicht rauchen.', 'Children are not allowed to smoke here.', 'Les enfants n’ont pas le droit de fumer ici.'],
      ],
    ),
    grammar(
      'sp-mv-wollen',
      ['wollen vs. möchten, sollen vs. müssen', 'wollen vs möchten, sollen vs müssen'],
      [
        '**wollen** is direct and strong — it can sound demanding. For polite requests use **möchten**.\n\n- Ich **will** ein Eis. (blunt, like a child)\n- Ich **möchte** ein Eis. (polite)\n\n**müssen** is an inner or objective necessity; **sollen** is an obligation or advice that comes from **someone else**.\n\n- Ich **muss** lernen. (the exam is tomorrow)\n- Ich **soll** lernen. (my teacher said so)',
        '**wollen** est direct et fort — il peut paraître exigeant. Pour une demande polie, utilise **möchten**.\n\n- Ich **will** ein Eis. (sec, comme un enfant)\n- Ich **möchte** ein Eis. (poli)\n\n**müssen** est une nécessité interne ou objective ; **sollen** est une obligation ou un conseil qui vient de **quelqu’un d’autre**.\n\n- Ich **muss** lernen. (l’examen est demain)\n- Ich **soll** lernen. (mon professeur l’a dit)',
      ],
      [
        ['Ich möchte bitte einen Tee.', 'I would like a tea, please.', 'Je voudrais un thé, s’il vous plaît.'],
        ['Der Arzt sagt, ich soll mehr schlafen.', 'The doctor says I should sleep more.', 'Le médecin dit que je dois dormir davantage.'],
        ['Ich muss mehr schlafen, sonst bin ich krank.', 'I have to sleep more, otherwise I get ill.', 'Je dois dormir davantage, sinon je tombe malade.'],
      ],
    ),
    mc(
      'sp-mv-e14',
      ['You tell a friend the party is optional: "Du ___ nicht kommen."', 'Tu dis à un ami que la fête est facultative : « Du ___ nicht kommen. »'],
      ['musst', 'darfst', 'sollst'], ['musst', 'darfst', 'sollst'], 0,
      ['"Nicht müssen" = no obligation. "Nicht dürfen" would mean it is forbidden.', '« Nicht müssen » = pas d’obligation. « Nicht dürfen » signifierait que c’est interdit.'],
    ),
    mc(
      'sp-mv-e15',
      ['A sign says "Hier ___ man nicht parken." What does it mean?', 'Un panneau dit « Hier ___ man nicht parken. » Que signifie-t-il ?'],
      ['It is forbidden to park here', 'You do not need to park here', 'You cannot park (no space)'],
      ['Il est interdit de se garer ici', 'Tu n’as pas besoin de te garer ici', 'Tu ne peux pas te garer (pas de place)'], 0,
      ['The sign uses **darf**: nicht dürfen = forbidden.', 'Le panneau utilise **darf** : nicht dürfen = interdit.'],
    ),
    mc(
      'sp-mv-e16',
      ['In a restaurant you politely order. Which sentence is best?', 'Au restaurant, tu commandes poliment. Quelle phrase est la meilleure ?'],
      ['Ich möchte die Suppe, bitte.', 'Ich will die Suppe.', 'Ich muss die Suppe.'],
      ['Ich möchte die Suppe, bitte.', 'Ich will die Suppe.', 'Ich muss die Suppe.'], 0,
      ['**möchten** is the polite form for wishes and orders.', '**möchten** est la forme polie pour les souhaits et les commandes.'],
    ),
    fb(
      'sp-mv-e17',
      ['Mein Chef sagt: Ich ___ den Bericht heute fertig machen. (sollen — ich-form)', 'Mein Chef sagt: Ich ___ den Bericht heute fertig machen. (sollen — forme ich)'],
      'soll',
      ['An order from someone else = sollen; ich has no ending.', 'Un ordre venant d’un autre = sollen ; ich sans terminaison.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Past tense and politeness', 'Passé et politesse',
      'Say what you had to do, and ask for things like a native.', 'Dire ce qu’on devait faire, et demander poliment.',
    ),
    grammar(
      'sp-mv-past',
      ['The past with Präteritum', 'Le passé au Präteritum'],
      [
        'For modal verbs, Germans prefer the **Präteritum** even in conversation. Drop the umlaut and add **-te** (+ the usual endings; **ich** and **er** are again identical):\n\n- können → ich **konnte**\n- müssen → ich **musste**\n- dürfen → ich **durfte**\n- wollen → ich **wollte**\n- sollen → ich **sollte**\n- mögen → ich **mochte**\n\nThe frame stays the same: **Gestern musste ich lange arbeiten.**',
        'Pour les verbes modaux, les Allemands préfèrent le **Präteritum**, même à l’oral. On supprime le tréma et on ajoute **-te** (+ les terminaisons habituelles ; **ich** et **er** restent identiques) :\n\n- können → ich **konnte**\n- müssen → ich **musste**\n- dürfen → ich **durfte**\n- wollen → ich **wollte**\n- sollen → ich **sollte**\n- mögen → ich **mochte**\n\nLe cadre reste le même : **Gestern musste ich lange arbeiten.**',
      ],
      [
        ['Gestern konnte ich nicht kommen.', 'Yesterday I could not come.', 'Hier, je n’ai pas pu venir.'],
        ['Als Kind durfte ich nicht fernsehen.', 'As a child I was not allowed to watch TV.', 'Enfant, je n’avais pas le droit de regarder la télé.'],
        ['Wir mussten lange warten.', 'We had to wait a long time.', 'Nous avons dû attendre longtemps.'],
      ],
    ),
    grammar(
      'sp-mv-polite',
      ['Polite requests with könnten and dürfte', 'Demandes polies avec könnten et dürfte'],
      [
        'To sound polite, use the **subjunctive forms** **könnten** and **dürfte**. They are fixed phrases you can already use at A2:\n\n- **Könnten Sie** mir bitte helfen?\n- **Könntest du** das Fenster öffnen?\n- **Dürfte ich** kurz stören?\n\nThe full subjunctive (Konjunktiv II) is covered in its own special.',
        'Pour paraître poli, utilise les **formes du subjonctif** **könnten** et **dürfte**. Ce sont des tournures figées que tu peux déjà employer dès l’A2 :\n\n- **Könnten Sie** mir bitte helfen ?\n- **Könntest du** das Fenster öffnen ?\n- **Dürfte ich** kurz stören ?\n\nLe subjonctif complet (Konjunktiv II) a son propre spécial.',
      ],
      [
        ['Könnten Sie mir bitte helfen?', 'Could you please help me?', 'Pourriez-vous m’aider, s’il vous plaît ?'],
        ['Könntest du das Fenster öffnen?', 'Could you open the window?', 'Pourrais-tu ouvrir la fenêtre ?'],
        ['Dürfte ich kurz stören?', 'Might I disturb you briefly?', 'Puis-je vous déranger un instant ?'],
      ],
    ),
    fb(
      'sp-mv-e18',
      ['Gestern ___ ich lange arbeiten. (müssen — Präteritum)', 'Gestern ___ ich lange arbeiten. (müssen — Präteritum)'],
      'musste',
      ['müssen → musste (no umlaut, add -te).', 'müssen → musste (sans tréma, + -te).'],
    ),
    fb(
      'sp-mv-e19',
      ['Als Kind ___ ich nicht fernsehen. (dürfen — Präteritum)', 'Als Kind ___ ich nicht fernsehen. (dürfen — Präteritum)'],
      'durfte',
      ['dürfen → durfte.', 'dürfen → durfte.'],
    ),
    lc(
      'sp-mv-e20',
      ['Listen. What does the speaker ask for?', 'Écoute. Que demande la personne ?'],
      'Könnten Sie mir bitte helfen?',
      ['A polite request for help', 'A demand to leave', 'A question about the time'],
      ['Une demande d’aide polie', 'Un ordre de partir', 'Une question sur l’heure'], 0,
      ['Listen for "Könnten Sie … helfen".', 'Écoute « Könnten Sie … helfen ».'],
    ),

    wrapup(
      '**The six** — können (ability), müssen (necessity), dürfen (permission), wollen (wish), sollen (others\' duty), möchten (polite wish).\n\n**Forms** — ich and er are identical, no ending: ich kann, er kann. wir/sie = infinitive.\n\n**Frame** — modal in position 2, infinitive at the end (modal last in weil-clauses).\n\n**Traps** — nicht müssen = not necessary; nicht dürfen = forbidden. Politeness: möchten, könnten, dürfte.\n\n**Past** — konnte, musste, durfte, wollte, sollte, mochte.',
      '**Les six** — können (capacité), müssen (nécessité), dürfen (permission), wollen (souhait), sollen (devoir imposé), möchten (souhait poli).\n\n**Formes** — ich et er sont identiques, sans terminaison : ich kann, er kann. wir/sie = infinitif.\n\n**Cadre** — modal en 2e position, infinitif à la fin (modal en dernier dans une subordonnée en weil).\n\n**Pièges** — nicht müssen = pas nécessaire ; nicht dürfen = interdit. Politesse : möchten, könnten, dürfte.\n\n**Passé** — konnte, musste, durfte, wollte, sollte, mochte.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Modal verbs', 'Quiz final : les verbes modaux'),
    mc(
      'sp-mv-q1',
      ['Which verb expresses permission?', 'Quel verbe exprime la permission ?'],
      ['dürfen', 'sollen', 'wollen'], ['dürfen', 'sollen', 'wollen'], 0,
      ['**dürfen** = to be allowed to.', '**dürfen** = avoir le droit de.'],
    ),
    fb(
      'sp-mv-q2',
      ['Er ___ gut Klavier spielen. (können)', 'Er ___ gut Klavier spielen. (können)'],
      'kann',
      ['er has no ending.', 'er n’a pas de terminaison.'],
    ),
    fb(
      'sp-mv-q3',
      ['Ihr ___ leise sein. (müssen)', 'Ihr ___ leise sein. (müssen)'],
      'müsst',
      ['ihr takes -t: ihr müsst.', 'ihr prend -t : ihr müsst.'],
    ),
    wo('sp-mv-q4', ['will', 'Ärztin', 'werden', 'Sie'], ['Sie', 'will', 'Ärztin', 'werden'], ['Modal 2nd, infinitive last.', 'Modal 2e, infinitif en dernier.']),
    mc(
      'sp-mv-q5',
      ['"Du musst nicht warten." means …', '« Du musst nicht warten. » signifie …'],
      ['You do not have to wait.', 'You are not allowed to wait.', 'You cannot wait.'],
      ['Tu n’es pas obligé d’attendre.', 'Tu n’as pas le droit d’attendre.', 'Tu ne peux pas attendre.'], 0,
      ['nicht müssen = no obligation.', 'nicht müssen = pas d’obligation.'],
    ),
    mc(
      'sp-mv-q6',
      ['"Man ___ hier nicht fotografieren." (forbidden)', '« Man ___ hier nicht fotografieren. » (interdit)'],
      ['darf', 'muss', 'soll'], ['darf', 'muss', 'soll'], 0,
      ['nicht dürfen = forbidden.', 'nicht dürfen = interdit.'],
    ),
    match(
      'sp-mv-q7',
      [
        ['ich kann', 'I can', 'je peux'],
        ['du musst', 'you must', 'tu dois'],
        ['er darf', 'he may', 'il a le droit'],
        ['wir wollen', 'we want', 'nous voulons'],
        ['sie sollen', 'they should', 'ils doivent'],
      ],
      ['Match the form with its meaning.', 'Associe chaque forme à son sens.'],
    ),
    wo('sp-mv-q8', ['ich', 'sitzen', 'Kann', 'hier'], ['Kann', 'ich', 'hier', 'sitzen'], ['Question: modal first.', 'Question : modal en premier.']),
    mc(
      'sp-mv-q9',
      ['Which request is the most polite?', 'Quelle demande est la plus polie ?'],
      ['Könnten Sie mir bitte helfen?', 'Hilf mir!', 'Ich will Hilfe.'],
      ['Könnten Sie mir bitte helfen?', 'Hilf mir!', 'Ich will Hilfe.'], 0,
      ['**Könnten Sie …?** is the standard polite request.', '**Könnten Sie …?** est la demande polie standard.'],
    ),
    fb(
      'sp-mv-q10',
      ['Wir ___ lange warten. (müssen — Präteritum)', 'Wir ___ lange warten. (müssen — Präteritum)'],
      'mussten',
      ['Präteritum of müssen: musste, mussten.', 'Préterit de müssen : musste, mussten.'],
    ),
    fb(
      'sp-mv-q11',
      ['Ich bleibe zu Hause, weil ich lernen ___. (müssen)', 'Ich bleibe zu Hause, weil ich lernen ___. (müssen)'],
      'muss',
      ['The modal goes last in the weil-clause.', 'Le modal est en dernier dans la proposition en weil.'],
    ),
    lc(
      'sp-mv-q12',
      ['Listen. What is the person not allowed to do?', 'Écoute. Qu’est-ce que la personne n’a pas le droit de faire ?'],
      'Hier darf man nicht rauchen.',
      ['Smoke', 'Park', 'Take photos'], ['Fumer', 'Se garer', 'Prendre des photos'], 0,
      ['Listen for "rauchen".', 'Écoute « rauchen ».'],
    ),
    mc(
      'sp-mv-q13',
      ['"Der Lehrer sagt, wir ___ mehr lesen." (advice from someone else)', '« Der Lehrer sagt, wir ___ mehr lesen. » (conseil d’un tiers)'],
      ['sollen', 'können', 'dürfen'], ['sollen', 'können', 'dürfen'], 0,
      ['sollen = what someone else wants.', 'sollen = ce que quelqu’un d’autre veut.'],
    ),
    wo('sp-mv-q14', ['mussten', 'wir', 'Gestern', 'arbeiten'], ['Gestern', 'mussten', 'wir', 'arbeiten'], ['Time word first, verb second.', 'Complément de temps en premier, verbe en 2e position.']),
  ],
});

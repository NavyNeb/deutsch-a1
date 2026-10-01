import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const indirekteRede = defineSpecial({
  slug: 'indirekte-rede',
  number: 19,
  group: 'sentences',
  levels: ['B1', 'B1'],
  related: ['b1-l9', 'b1-l2', 'b1-l11'],
  title: ['Indirekte Rede', 'Reported speech', 'Le discours indirect'],
  theme: [
    'indirect questions with ob and W-words, reporting with dass, Konjunktiv I (er sei, sie habe) and the Konjunktiv II substitute',
    'questions indirectes avec ob et mots en W, rapporter avec dass, Konjunktiv I (er sei, sie habe) et le substitut au Konjunktiv II',
  ],
  goals: [
    'Turn direct questions into indirect questions with ob and W-words',
    'Report what someone said with dass and pronoun changes',
    'Recognise and form Konjunktiv I (er sei, sie habe, er komme)',
    'Know when to switch to Konjunktiv II (hätten, wären, würden)',
    'Report past and future statements and commands (sollen, zu + infinitive)',
  ],
  goalsFr: [
    'Transformer des questions directes en questions indirectes avec ob et les mots en W',
    'Rapporter les paroles de quelqu’un avec dass et le changement de pronoms',
    'Reconnaître et former le Konjunktiv I (er sei, sie habe, er komme)',
    'Savoir quand passer au Konjunktiv II (hätten, wären, würden)',
    'Rapporter le passé, le futur et les ordres (sollen, zu + infinitif)',
  ],
  steps: [
    intro(
      'Er sagt, er sei müde', 'Il dit qu’il est fatigué',
      'Everyday German reports speech with an ordinary **dass-clause**. News, reports and exams add the **Konjunktiv I**: *Er sagt, er **sei** müde.* The subjunctive shows that you are only **passing on** what somebody else claimed — you do not vouch for it. This special walks you from the easy part (indirect questions) to the formal part.',
      'L’allemand courant rapporte les paroles avec une simple **subordonnée en dass**. Les journaux, rapports et examens ajoutent le **Konjunktiv I** : *Er sagt, er **sei** müde.* Le subjonctif montre que tu ne fais que **transmettre** ce qu’un autre a affirmé — tu n’en réponds pas. Ce special te mène de la partie facile (les questions indirectes) à la partie formelle.',
      [
        'Ask and report questions indirectly',
        'Use dass and the right pronouns',
        'Read and write Konjunktiv I in the 3rd person',
        'Use Konjunktiv II when Konjunktiv I looks like the indicative',
      ],
      [
        'Poser et rapporter des questions indirectement',
        'Utiliser dass et les bons pronoms',
        'Lire et écrire le Konjunktiv I à la 3e personne',
        'Utiliser le Konjunktiv II quand le Konjunktiv I ressemble à l’indicatif',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Indirect questions', 'Questions indirectes',
      'ob for yes/no questions, the W-word for the rest — verb at the end.', 'ob pour oui/non, le mot en W pour le reste — verbe à la fin.',
    ),
    grammar(
      'sp-ir-questions',
      ['ob and W-words', 'ob et mots en W'],
      [
        'To report or politely ask a question, make it a **subordinate clause**: the **conjugated verb goes to the end**.\n\n- **Yes/no question** → **ob** (whether):\n  - „Kommst du morgen?“ → Er fragt, **ob** ich morgen **komme**.\n- **W-question** → the **W-word stays** (wo, wann, wie, was, warum, wer …):\n  - „Wo wohnst du?“ → Sie fragt, **wo** ich **wohne**.\n  - „Warum bist du müde?“ → Er will wissen, **warum** ich müde **bin**.\n\n**Pronouns and possessives change** with the speaker: *du → ich*, *dein → mein*.\n\n**Polite requests** use indirect questions: **Können Sie mir sagen, wo der Bahnhof ist?** sounds softer than *„Wo ist der Bahnhof?“*\n\nTypical **opening phrases**: **fragen, wissen wollen, wissen, sagen können, nicht wissen, sich fragen**.',
        'Pour rapporter ou poser poliment une question, fais-en une **subordonnée** : le **verbe conjugué va à la fin**.\n\n- **Question oui/non** → **ob** (si) :\n  - „Kommst du morgen?“ → Er fragt, **ob** ich morgen **komme**.\n- **Question en W** → le **mot en W reste** (wo, wann, wie, was, warum, wer …) :\n  - „Wo wohnst du?“ → Sie fragt, **wo** ich **wohne**.\n  - „Warum bist du müde?“ → Er will wissen, **warum** ich müde **bin**.\n\n**Les pronoms et possessifs changent** selon le locuteur : *du → ich*, *dein → mein*.\n\n**Les demandes polies** utilisent des questions indirectes : **Können Sie mir sagen, wo der Bahnhof ist ?** sonne plus doux que *„Wo ist der Bahnhof?“*\n\n**Amorces typiques :** **fragen, wissen wollen, wissen, sagen können, nicht wissen, sich fragen**.',
      ],
      [
        ['Er fragt, ob ich morgen komme.', 'He asks whether I am coming tomorrow.', 'Il demande si je viens demain.'],
        ['Sie fragt, wo ich wohne.', 'She asks where I live.', 'Elle demande où j’habite.'],
        ['Können Sie mir sagen, wie spät es ist?', 'Can you tell me what time it is?', 'Pouvez-vous me dire quelle heure il est ?'],
      ],
      'satzklammer',
    ),
    vocab('sp-indirekte-rede-fragen', 'fragen', 'to ask', 'demander', null, 'FRA-gen', 'FRAH-gen', ['Er fragt, ob ich Zeit habe.', 'He asks whether I have time.', 'Il demande si j’ai le temps.']),
    vocab('sp-indirekte-rede-antworten', 'antworten', 'to answer', 'répondre', null, 'ANT-wor-ten', 'ANT-vor-ten', ['Sie antwortet, dass sie kommt.', 'She answers that she is coming.', 'Elle répond qu’elle vient.']),
    mc(
      'sp-ir-e1',
      ['"Er fragt, ___ ich morgen komme." (yes/no question)', '« Er fragt, ___ ich morgen komme. » (question oui/non)'],
      ['ob', 'dass', 'wenn'], ['ob', 'dass', 'wenn'], 0,
      ['Yes/no question → ob.', 'Question oui/non → ob.'],
    ),
    fb(
      'sp-ir-e2',
      ['Sie fragt, wo ich ___. (wohnen)', 'Sie fragt, wo ich ___. (wohnen)'],
      'wohne',
      ['The verb goes to the end: "wohne".', 'Le verbe va à la fin : « wohne ».'],
    ),
    wo('sp-ir-e3', ['ich', 'Er', 'ob', 'Hunger', 'fragt,', 'habe'], ['Er', 'fragt,', 'ob', 'ich', 'Hunger', 'habe'], ['ob sends the verb to the end.', 'ob envoie le verbe à la fin.']),
    mc(
      'sp-ir-e4',
      ['Direct: „Wann kommt der Zug?“ — Indirect:', 'Direct : „Wann kommt der Zug ?“ — Indirect :'],
      ['Er fragt, wann der Zug kommt.', 'Er fragt, wann kommt der Zug.', 'Er fragt, ob wann der Zug kommt.'],
      ['Er fragt, wann der Zug kommt.', 'Er fragt, wann kommt der Zug.', 'Er fragt, ob wann der Zug kommt.'], 0,
      ['The W-word stays; the verb moves to the end; no ob.', 'Le mot en W reste ; le verbe passe à la fin ; pas de ob.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Reporting with dass', 'Rapporter avec dass',
      'The everyday way — and what must change.', 'La méthode courante — et ce qui doit changer.',
    ),
    grammar(
      'sp-ir-dass',
      ['dass-clauses and pronoun shifts', 'Subordonnées en dass et changement de pronoms'],
      [
        'In **everyday German** you report with **sagen / meinen / erzählen + dass**, using the **normal indicative**:\n\n- Anna sagt: „Ich **bin** müde.“ → Anna sagt, **dass sie** müde **ist**.\n\nYou can also **drop dass** — then the clause keeps **verb-second** order:\n\n- Anna sagt, **sie ist** müde.\n\n**What changes when you report:**\n\n- **Pronouns / possessives:** *ich → sie/er*, *mein → ihr/sein*, *wir → sie*\n- **Place and time** (sometimes): *hier → dort*, *heute → an dem Tag*, *morgen → am nächsten Tag*\n- **Tense:** none in the colloquial indicative version\n\n- Tom: „**Mein** Bruder kommt **heute**.“ → Tom sagt, dass **sein** Bruder **heute** kommt. (same day)',
        'Dans l’**allemand courant**, on rapporte avec **sagen / meinen / erzählen + dass**, à l’**indicatif normal** :\n\n- Anna sagt: „Ich **bin** müde.“ → Anna sagt, **dass sie** müde **ist**.\n\nOn peut aussi **omettre dass** — la proposition garde alors l’ordre du **verbe en 2e position** :\n\n- Anna sagt, **sie ist** müde.\n\n**Ce qui change quand on rapporte :**\n\n- **Pronoms / possessifs :** *ich → sie/er*, *mein → ihr/sein*, *wir → sie*\n- **Lieu et temps** (parfois) : *hier → dort*, *heute → an dem Tag*, *morgen → am nächsten Tag*\n- **Temps verbal :** aucun dans la version indicatif familier\n\n- Tom : „**Mein** Bruder kommt **heute**.“ → Tom sagt, dass **sein** Bruder **heute** kommt. (même jour)',
      ],
      [
        ['Anna sagt, dass sie müde ist.', 'Anna says that she is tired.', 'Anna dit qu’elle est fatiguée.'],
        ['Tom meint, dass sein Bruder heute kommt.', 'Tom thinks that his brother is coming today.', 'Tom pense que son frère vient aujourd’hui.'],
        ['Sie erzählt, sie wohnt jetzt in Wien.', 'She says she now lives in Vienna.', 'Elle raconte qu’elle habite maintenant à Vienne.'],
      ],
    ),
    vocab('sp-indirekte-rede-meinen', 'meinen', 'to think, to mean', 'penser, vouloir dire', null, 'MEI-nen', 'MY-nen', ['Er meint, dass es regnet.', 'He thinks that it is raining.', 'Il pense qu’il pleut.']),
    mc(
      'sp-ir-e5',
      ['Anna: „Ich bin müde.“ → Anna sagt, dass ___ müde ist.', 'Anna : „Ich bin müde.“ → Anna sagt, dass ___ müde ist.'],
      ['ich', 'sie', 'du'], ['ich', 'sie', 'du'], 1,
      ['The speaker is Anna, a woman: ich → sie.', 'La locutrice est Anna, une femme : ich → sie.'],
    ),
    fb(
      'sp-ir-e6',
      ['Tom: „Mein Bruder kommt.“ → Tom sagt, dass ___ Bruder kommt. (sein / ihr)', 'Tom : „Mein Bruder kommt.“ → Tom sagt, dass ___ Bruder kommt. (sein / ihr)'],
      'sein',
      ['Tom is male: mein → sein.', 'Tom est un homme : mein → sein.'],
    ),
    wo('sp-ir-e7', ['müde', 'Anna', 'dass', 'sagt,', 'sie', 'ist'], ['Anna', 'sagt,', 'dass', 'sie', 'müde', 'ist'], ['dass sends the verb to the end.', 'dass envoie le verbe à la fin.']),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Konjunktiv I', 'Konjunktiv I',
      'The formal subjunctive: "he says he be tired".', 'Le subjonctif formel : « il dit qu’il soit fatigué ».',
    ),
    grammar(
      'sp-ir-k1',
      ['Forming Konjunktiv I', 'Former le Konjunktiv I'],
      [
        'The **Konjunktiv I** is built from the **infinitive stem + -e endings**:\n\n- **er / sie / es** → stem + **-e**: er **komme**, sie **gehe**, er **habe**, er **werde**, er **könne**, sie **müsse**, er **wisse**\n- **sein** is the **only** irregular verb: **ich sei, du seist, er sei, wir seien, ihr seiet, sie seien**\n\nIn practice, **only the 3rd person singular** (er / sie / es) matters, because it **differs from the indicative**: *er kommt* (Ind.) → *er **komme*** (K I); *er ist* → *er **sei***.\n\nUse it in **news, reports, essays and exams** to show distance: *Der Minister sagte, die Lage **sei** ernst.* In everyday talk, the **indicative** is perfectly fine.\n\n**Present Konjunktiv I** reports present-time statements: Er sagt, er **habe** keine Zeit.',
        'Le **Konjunktiv I** se forme avec le **radical de l’infinitif + terminaisons en -e** :\n\n- **er / sie / es** → radical + **-e** : er **komme**, sie **gehe**, er **habe**, er **werde**, er **könne**, sie **müsse**, er **wisse**\n- **sein** est le **seul** verbe irrégulier : **ich sei, du seist, er sei, wir seien, ihr seiet, sie seien**\n\nEn pratique, **seule la 3e personne du singulier** (er / sie / es) compte, car elle **diffère de l’indicatif** : *er kommt* (Ind.) → *er **komme*** (K I) ; *er ist* → *er **sei***.\n\nOn l’emploie dans les **journaux, rapports, rédactions et examens** pour marquer la distance : *Der Minister sagte, die Lage **sei** ernst.* À l’oral courant, l’**indicatif** convient parfaitement.\n\n**Konjunktiv I présent** rapporte des affirmations au présent : Er sagt, er **habe** keine Zeit.',
      ],
      [
        ['Er sagt, er habe keine Zeit.', 'He says he has no time.', 'Il dit qu’il n’a pas le temps.'],
        ['Sie sagt, sie sei krank.', 'She says she is ill.', 'Elle dit qu’elle est malade.'],
        ['Der Chef meint, er komme später.', 'The boss says he will come later.', 'Le chef dit qu’il viendra plus tard.'],
        ['Er sagt, er könne nicht kommen.', 'He says he cannot come.', 'Il dit qu’il ne peut pas venir.'],
      ],
      'conjugation-table',
    ),
    vocab('sp-indirekte-rede-behaupten', 'behaupten', 'to claim', 'prétendre', null, 'be-HAUP-ten', 'beh-HOWP-ten', ['Er behauptet, er sei unschuldig.', 'He claims he is innocent.', 'Il prétend être innocent.']),
    vocab('sp-indirekte-rede-berichten', 'berichten', 'to report', 'rapporter, faire un reportage', null, 'be-RICH-ten', 'beh-RIKH-ten', ['Die Zeitung berichtet, der Zug sei spät.', 'The newspaper reports that the train is late.', 'Le journal rapporte que le train est en retard.']),
    mc(
      'sp-ir-e8',
      ['"Er sagt, er ___ keine Zeit." (Konjunktiv I of haben)', '« Er sagt, er ___ keine Zeit. » (Konjunktiv I de haben)'],
      ['hat', 'habe', 'hätte'], ['hat', 'habe', 'hätte'], 1,
      ['K I: stem hab- + e = habe.', 'K I : radical hab- + e = habe.'],
    ),
    fb(
      'sp-ir-e9',
      ['Sie sagt, sie ___ krank. (sein — Konjunktiv I)', 'Sie sagt, sie ___ krank. (sein — Konjunktiv I)'],
      'sei',
      ['The irregular K I of sein: sei.', 'Le K I irrégulier de sein : sei.'],
    ),
    fb(
      'sp-ir-e10',
      ['Der Chef meint, er ___ später. (kommen — Konjunktiv I)', 'Der Chef meint, er ___ später. (kommen — Konjunktiv I)'],
      'komme',
      ['stem komm- + e.', 'radical komm- + e.'],
    ),
    match(
      'sp-ir-e11',
      [
        ['er ist → K I', 'er sei', 'er sei'],
        ['er hat → K I', 'er habe', 'er habe'],
        ['er kommt → K I', 'er komme', 'er komme'],
        ['er kann → K I', 'er könne', 'er könne'],
        ['er wird → K I', 'er werde', 'er werde'],
      ],
      ['Match each indicative form with its Konjunktiv I.', 'Associe chaque forme de l’indicatif à son Konjunktiv I.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Konjunktiv II as a substitute', 'Konjunktiv II en remplacement',
      'When K I looks exactly like the indicative, use Konjunktiv II instead.', 'Quand le K I ressemble exactement à l’indicatif, utilise le Konjunktiv II à la place.',
    ),
    grammar(
      'sp-ir-k2',
      ['When Konjunktiv I is not enough', 'Quand le Konjunktiv I ne suffit pas'],
      [
        'Many Konjunktiv I forms are **identical to the indicative** (*ich habe*, *wir haben*, *sie haben*, *sie kommen*). In these cases, **Konjunktiv II** shows clearly that it is reported speech:\n\n- Direct: „Wir **haben** keine Zeit.“\n- ✗ Sie sagen, sie **haben** keine Zeit. (could be indicative)\n- ✓ Sie sagen, sie **hätten** keine Zeit.\n\nSimilarly:\n- Sie sagen, sie **kämen** morgen. / Sie sagen, sie **würden** morgen **kommen**. (K I *kommen* = indicative; **würde + infinitive** is the safe, common choice)\n- **sein** is the exception: *seien* differs from *sind*, so Konjunktiv I works: Sie sagen, sie **seien** müde.\n\n**Past and future** in reported speech:\n\n- **Past:** **sei / habe + Partizip II** — Er sagt, er **sei** gestern im Kino **gewesen**. · Sie sagt, sie **habe** das Buch **gelesen**. · Er sagt, er **sei** nach Wien **gefahren**.\n- **Future:** **werde + infinitive** — Er sagt, er **werde** morgen **kommen**.\n\nWith **plural** subjects (*sie, wir, ihr*), K I = indicative, so **use K II** (hätten, kämen, würden) — except *sein* (*seien*).',
        'Beaucoup de formes du Konjunktiv I sont **identiques à l’indicatif** (*ich habe*, *wir haben*, *sie haben*, *sie kommen*). Dans ces cas, le **Konjunktiv II** montre clairement qu’il s’agit du discours rapporté :\n\n- Direct : „Wir **haben** keine Zeit.“\n- ✗ Sie sagen, sie **haben** keine Zeit. (pourrait être de l’indicatif)\n- ✓ Sie sagen, sie **hätten** keine Zeit.\n\nDe même :\n- Sie sagen, sie **kämen** morgen. / Sie sagen, sie **würden** morgen **kommen**. (le K I *kommen* = indicatif ; **würde + infinitif** est le choix sûr et courant)\n- **sein** est l’exception : *seien* diffère de *sind*, donc le Konjunktiv I fonctionne : Sie sagen, sie **seien** müde.\n\n**Passé et futur** dans le discours rapporté :\n\n- **Passé :** **sei / habe + Partizip II** — Er sagt, er **sei** gestern im Kino **gewesen**. · Sie sagt, sie **habe** das Buch **gelesen**. · Er sagt, er **sei** nach Wien **gefahren**.\n- **Futur :** **werde + infinitif** — Er sagt, er **werde** morgen **kommen**.\n\nAvec des sujets au **pluriel** (*sie, wir, ihr*), K I = indicatif, donc **utilise le K II** (hätten, kämen, würden) — sauf *sein* (*seien*).',
      ],
      [
        ['Sie sagen, sie hätten keine Zeit.', 'They say they have no time.', 'Ils disent qu’ils n’ont pas le temps.'],
        ['Er sagt, er sei gestern im Kino gewesen.', 'He says he was at the cinema yesterday.', 'Il dit qu’il était au cinéma hier.'],
        ['Sie sagt, sie habe das Buch gelesen.', 'She says she has read the book.', 'Elle dit qu’elle a lu le livre.'],
        ['Er sagt, er werde morgen kommen.', 'He says he will come tomorrow.', 'Il dit qu’il viendra demain.'],
      ],
    ),
    vocab('sp-indirekte-rede-meldung', 'die Meldung', 'the report, the news item', 'l’information, la dépêche', 'die', 'MEL-dung', 'dee MEL-doong', ['Laut Meldung sei der Zug verspätet.', 'According to the report, the train is delayed.', 'Selon l’information, le train est en retard.']),
    mc(
      'sp-ir-e12',
      ['Direct: „Wir haben keine Zeit.“ — Reported:', 'Direct : „Wir haben keine Zeit.“ — Rapporté :'],
      ['Sie sagen, sie haben keine Zeit.', 'Sie sagen, sie hätten keine Zeit.', 'Sie sagen, sie habe keine Zeit.'],
      ['Sie sagen, sie haben keine Zeit.', 'Sie sagen, sie hätten keine Zeit.', 'Sie sagen, sie habe keine Zeit.'], 1,
      ['Plural: K I = indicative, so K II "hätten".', 'Pluriel : K I = indicatif, donc K II « hätten ».'],
    ),
    mc(
      'sp-ir-e13',
      ['"Er sagt, er ___ gestern im Kino gewesen." (past)', '« Er sagt, er ___ gestern im Kino gewesen. » (passé)'],
      ['ist', 'sei', 'wäre'], ['ist', 'sei', 'wäre'], 1,
      ['Past in K I: sei + Partizip II.', 'Passé au K I : sei + participe II.'],
    ),
    fb(
      'sp-ir-e14',
      ['Sie sagt, sie ___ das Buch gelesen. (haben — Konjunktiv I)', 'Sie sagt, sie ___ das Buch gelesen. (haben — Konjunktiv I)'],
      'habe',
      ['Past: habe + Partizip II.', 'Passé : habe + participe II.'],
    ),
    wo('sp-ir-e15', ['gelesen', 'Sie', 'sagt,', 'habe', 'sie', 'das', 'Buch'], ['Sie', 'sagt,', 'sie', 'habe', 'das', 'Buch', 'gelesen'], ['Verb-second order without dass: habe in position 2 of the reported clause.', 'Ordre verbe en 2e position sans dass : habe en 2e position de la proposition rapportée.']),
    mc(
      'sp-ir-e16',
      ['"Er sagt, er ___ morgen kommen." (future in K I)', '« Er sagt, er ___ morgen kommen. » (futur au K I)'],
      ['wird', 'werde', 'würde'], ['wird', 'werde', 'würde'], 1,
      ['Future: werde + infinitive.', 'Futur : werde + infinitif.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Reporting verbs and commands', 'Verbes de report et ordres',
      'sagen, behaupten, berichten … and how to report an order.', 'sagen, behaupten, berichten … et comment rapporter un ordre.',
    ),
    grammar(
      'sp-ir-verbs',
      ['Reporting verbs, commands and requests', 'Verbes de report, ordres et demandes'],
      [
        '**Choose the reporting verb for the tone:**\n\n- **sagen, meinen, erzählen** — neutral\n- **berichten, mitteilen, erklären** — formal, news\n- **behaupten** — *claim* (you doubt it)\n- **antworten, fragen** — answer, ask\n\n**Reporting commands and requests** has two options:\n\n1. **sollen** in **Konjunktiv I** (**ich solle, er solle, sie solle**):\n   - „Schlafen Sie mehr!“ → Der Arzt sagt, ich **solle** mehr schlafen.\n   - „Komm früh!“ → Meine Mutter sagt, ich **solle** früh kommen.\n2. **bitten / auffordern + zu-infinitive**:\n   - „Hilf mir bitte!“ → Er bat mich, ihm **zu helfen**.\n\n**Typical newspaper pattern:**\n- Der Politiker **behauptet**, er **habe** nichts gewusst.\n- Die Zeitung **berichtet**, der Zug **sei** zu spät **gekommen**.\n\nThe **news style** uses **K I** (or **K II** when needed) throughout the report, even after a long sentence.',
        '**Choisis le verbe de report selon le ton :**\n\n- **sagen, meinen, erzählen** — neutre\n- **berichten, mitteilen, erklären** — formel, presse\n- **behaupten** — *prétendre* (tu en doutes)\n- **antworten, fragen** — répondre, demander\n\n**Rapporter ordres et demandes** : deux possibilités :\n\n1. **sollen** au **Konjunktiv I** (**ich solle, er solle, sie solle**) :\n   - „Schlafen Sie mehr!“ → Der Arzt sagt, ich **solle** mehr schlafen.\n   - „Komm früh!“ → Meine Mutter sagt, ich **solle** früh kommen.\n2. **bitten / auffordern + infinitif en zu** :\n   - „Hilf mir bitte!“ → Er bat mich, ihm **zu helfen**.\n\n**Schéma typique de presse :**\n- Der Politiker **behauptet**, er **habe** nichts gewusst.\n- Die Zeitung **berichtet**, der Zug **sei** zu spät **gekommen**.\n\nLe **style journalistique** emploie **K I** (ou **K II** si besoin) tout au long du compte rendu, même après une longue phrase.',
      ],
      [
        ['Der Arzt sagt, ich solle mehr schlafen.', 'The doctor says I should sleep more.', 'Le médecin dit que je devrais dormir plus.'],
        ['Er bat mich, ihm zu helfen.', 'He asked me to help him.', 'Il m’a demandé de l’aider.'],
        ['Der Politiker behauptet, er habe nichts gewusst.', 'The politician claims he knew nothing.', 'Le politicien prétend qu’il n’a rien su.'],
      ],
    ),
    mc(
      'sp-ir-e17',
      ['Direct: „Schlafen Sie mehr!“ → Der Arzt sagt, ich ___ mehr schlafen.', 'Direct : „Schlafen Sie mehr !“ → Der Arzt sagt, ich ___ mehr schlafen.'],
      ['soll', 'solle', 'sollte'], ['soll', 'solle', 'sollte'], 1,
      ['Command in reported speech: sollen in K I → solle.', 'Ordre au discours rapporté : sollen au K I → solle.'],
    ),
    mc(
      'sp-ir-e18',
      ['Which reporting verb expresses a claim you doubt?', 'Quel verbe de report exprime une affirmation dont tu doutes ?'],
      ['behaupten', 'sagen', 'fragen'], ['behaupten', 'sagen', 'fragen'], 0,
      ['behaupten = to claim.', 'behaupten = prétendre.'],
    ),
    lc(
      'sp-ir-e19',
      ['Listen. What does the speaker ask?', 'Écoute. Que demande la personne ?'],
      'Er fragt, ob ich morgen komme.',
      ['Whether I come tomorrow', 'Where I live', 'When I come'],
      ['Si je viens demain', 'Où j’habite', 'Quand je viens'], 0,
      ['"ob" = whether.', '« ob » = si.'],
    ),

    wrapup(
      '**Indirect questions:** ob for yes/no, W-word for the rest — verb last. *Er fragt, ob ich komme. Sie fragt, wo ich wohne.*\n\n**dass-clauses:** colloquial reporting with the indicative — pronouns change. *Anna sagt, dass sie müde ist.*\n\n**Konjunktiv I:** stem + -e; sein = **sei**. Only er/sie/es differs. *Er sagt, er habe keine Zeit. Sie sagt, sie sei krank.*\n\n**Konjunktiv II substitute:** plural/other forms where K I = indicative → hätten, kämen, würden (sein: seien).\n\n**Past:** sei/habe + Partizip II · **Future:** werde + infinitive.\n\n**Commands:** sollen in K I or bitten + zu.',
      '**Questions indirectes :** ob pour oui/non, mot en W pour le reste — verbe à la fin. *Er fragt, ob ich komme. Sie fragt, wo ich wohne.*\n\n**Subordonnées en dass :** rapport familier à l’indicatif — les pronoms changent. *Anna sagt, dass sie müde ist.*\n\n**Konjunktiv I :** radical + -e ; sein = **sei**. Seul er/sie/es diffère. *Er sagt, er habe keine Zeit. Sie sagt, sie sei krank.*\n\n**Substitut Konjunktiv II :** pluriel/autres formes où K I = indicatif → hätten, kämen, würden (sein : seien).\n\n**Passé :** sei/habe + participe II · **Futur :** werde + infinitif.\n\n**Ordres :** sollen au K I ou bitten + zu.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Reported speech', 'Quiz final : le discours indirect'),
    mc(
      'sp-ir-q1',
      ['"Er fragt, ___ ich Hunger habe." (yes/no)', '« Er fragt, ___ ich Hunger habe. » (oui/non)'],
      ['ob', 'dass', 'was'], ['ob', 'dass', 'was'], 0,
      ['Yes/no question → ob.', 'Question oui/non → ob.'],
    ),
    fb(
      'sp-ir-q2',
      ['Sie fragt, wann der Zug ___. (kommen)', 'Sie fragt, wann der Zug ___. (kommen)'],
      'kommt',
      ['Verb last; Indicative present.', 'Verbe en dernier ; indicatif présent.'],
    ),
    wo('sp-ir-q3', ['Hunger', 'Er', 'ich', 'fragt,', 'habe', 'ob'], ['Er', 'fragt,', 'ob', 'ich', 'Hunger', 'habe'], ['ob + subject + … + verb.', 'ob + sujet + … + verbe.']),
    mc(
      'sp-ir-q4',
      ['Tom: „Mein Bruder kommt.“ → Tom sagt, dass ___ Bruder kommt.', 'Tom : „Mein Bruder kommt.“ → Tom sagt, dass ___ Bruder kommt.'],
      ['mein', 'sein', 'ihr'], ['mein', 'sein', 'ihr'], 1,
      ['Tom is male: sein.', 'Tom est un homme : sein.'],
    ),
    fb(
      'sp-ir-q5',
      ['Sie sagt, sie ___ krank. (sein — Konjunktiv I)', 'Sie sagt, sie ___ krank. (sein — Konjunktiv I)'],
      'sei',
      ['K I of sein: sei.', 'K I de sein : sei.'],
    ),
    mc(
      'sp-ir-q6',
      ['"Er sagt, er ___ keine Zeit." (K I of haben)', '« Er sagt, er ___ keine Zeit. » (K I de haben)'],
      ['hat', 'habe', 'hätte'], ['hat', 'habe', 'hätte'], 1,
      ['er habe.', 'er habe.'],
    ),
    mc(
      'sp-ir-q7',
      ['Direct: „Wir haben keine Zeit.“ → Sie sagen, sie ___ keine Zeit.', 'Direct : „Wir haben keine Zeit.“ → Sie sagen, sie ___ keine Zeit.'],
      ['haben', 'hätten', 'habe'], ['haben', 'hätten', 'habe'], 1,
      ['Plural K I = indicative, use K II.', 'K I pluriel = indicatif, utilise le K II.'],
    ),
    wo('sp-ir-q8', ['gewesen', 'Er', 'sagt,', 'er', 'sei', 'gestern', 'krank'], ['Er', 'sagt,', 'er', 'sei', 'gestern', 'krank', 'gewesen'], ['Past in K I: sei + Partizip II.', 'Passé au K I : sei + participe II.']),
    mc(
      'sp-ir-q9',
      ['"Er sagt, er ___ morgen kommen." (future)', '« Er sagt, er ___ morgen kommen. » (futur)'],
      ['wird', 'werde', 'wäre'], ['wird', 'werde', 'wäre'], 1,
      ['werde + infinitive.', 'werde + infinitif.'],
    ),
    match(
      'sp-ir-q10',
      [
        ['er ist → K I', 'er sei', 'er sei'],
        ['er hat → K I', 'er habe', 'er habe'],
        ['er kommt → K I', 'er komme', 'er komme'],
        ['sie haben → K II', 'sie hätten', 'sie hätten'],
        ['sie sind → K I', 'sie seien', 'sie seien'],
      ],
      ['Match each form with its reported-speech subjunctive.', 'Associe chaque forme à son subjonctif.'],
    ),
    mc(
      'sp-ir-q11',
      ['Direct: „Komm früh!“ → Meine Mutter sagt, ich ___ früh kommen.', 'Direct : „Komm früh !“ → Meine Mutter sagt, ich ___ früh kommen.'],
      ['soll', 'solle', 'sollte'], ['soll', 'solle', 'sollte'], 1,
      ['Command → sollen in K I: solle.', 'Ordre → sollen au K I : solle.'],
    ),
    lc(
      'sp-ir-q12',
      ['Listen. What does the speaker say?', 'Écoute. Que dit la personne ?'],
      'Sie sagt, sie sei krank.',
      ['She says she is ill', 'She asks whether she is ill', 'She says she was ill'],
      ['Elle dit qu’elle est malade', 'Elle demande si elle est malade', 'Elle dit qu’elle était malade'], 0,
      ['"sei" = K I of sein; present.', '« sei » = K I de sein ; présent.'],
    ),
    lc(
      'sp-ir-q13',
      ['Listen. What does the doctor advise?', 'Écoute. Que conseille le médecin ?'],
      'Der Arzt sagt, ich solle mehr schlafen.',
      ['Sleep more', 'Eat less', 'Work more'],
      ['Dormir plus', 'Manger moins', 'Travailler plus'], 0,
      ['"schlafen" = to sleep.', '« schlafen » = dormir.'],
    ),
    mc(
      'sp-ir-q14',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Sie fragt, ob ich Zeit habe.', 'Sie fragt, ob habe ich Zeit.', 'Sie fragt, ob ich habe Zeit.'],
      ['Sie fragt, ob ich Zeit habe.', 'Sie fragt, ob habe ich Zeit.', 'Sie fragt, ob ich habe Zeit.'], 0,
      ['Verb at the end after ob.', 'Verbe à la fin après ob.'],
    ),
  ],
});

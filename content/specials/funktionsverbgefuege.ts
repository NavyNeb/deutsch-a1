import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const funktionsverbgefuege = defineSpecial({
  slug: 'funktionsverbgefuege',
  number: 36,
  group: 'verbs',
  levels: ['B2', 'B2'],
  related: ['b2-l4', 'b2-l3', 'b1-l10'],
  title: ['Funktionsverbgefüge', 'Noun–verb phrases', 'Locutions verbe + nom'],
  theme: [
    'Fixed noun–verb combinations such as in Frage stellen, zur Verfügung stehen, Rücksicht nehmen',
    'Locutions verbe + nom figées comme in Frage stellen, zur Verfügung stehen, Rücksicht nehmen',
  ],
  goals: [
    'Recognise a Funktionsverbgefüge: noun + weak verb',
    'Know the preposition and article of the most common phrases',
    'Turn a simple verb into a phrase and back',
    'Use them in formal writing without overdoing it',
  ],
  goalsFr: [
    'Reconnaître un Funktionsverbgefüge : nom + verbe faible',
    'Connaître la préposition et l’article des locutions les plus courantes',
    'Transformer un verbe simple en locution et inversement',
    'Les employer à l’écrit formel sans en abuser',
  ],
  steps: [
    intro(
      'Zur Verfügung stehen', 'Être à disposition',
      'An official letter says: “Ein Raum steht Ihnen zur Verfügung.” The verb “stehen” hardly means “to stand” here. The noun “Verfügung” carries the meaning. These fixed phrases are called Funktionsverbgefüge and appear everywhere in formal German.',
      'Un courrier officiel dit : « Ein Raum steht Ihnen zur Verfügung. » Le verbe « stehen » ne signifie presque plus « être debout ». C’est le nom « Verfügung » qui porte le sens. Ces locutions figées s’appellent Funktionsverbgefüge et sont partout dans l’allemand formel.',
      [
        'Spot noun–verb phrases in texts',
        'Learn them with preposition and article',
        'Paraphrase them with a simple verb',
        'Write more formally',
      ],
      [
        'Repérer les locutions verbe + nom dans les textes',
        'Les apprendre avec préposition et article',
        'Les paraphraser avec un verbe simple',
        'Écrire de façon plus formelle',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'What they are', 'Ce que c’est',
      'A noun that carries the meaning and a verb that just conjugates.', 'Un nom qui porte le sens et un verbe qui ne fait que se conjuguer.',
    ),
    vocab('sp-funktionsverbgefuege-entscheidung', 'eine Entscheidung treffen', 'to make a decision', 'prendre une décision', null, 'ei-ne ent-SCHEI-dung TREF-fen', 'eye-ne ent-SHY-doong TREF-fen', ['Wir müssen heute eine Entscheidung treffen.', 'We have to make a decision today.', 'Nous devons prendre une décision aujourd’hui.']),
    vocab('sp-funktionsverbgefuege-frage', 'in Frage stellen', 'to question, to call into doubt', 'remettre en question', null, 'in FRA-ge SHTEL-len', 'in FRAH-ge SHTEL-len', ['Der Chef stellt den Plan in Frage.', 'The boss questions the plan.', 'Le chef remet le plan en question.']),
    grammar(
      'sp-fvg-what',
      ['Noun + verb with little meaning', 'Nom + verbe au sens faible'],
      [
        'In a **Funktionsverbgefüge** the **noun carries the meaning**; the verb (*treffen, stellen, nehmen, kommen, stehen, bringen*) is only the “motor”.\n\n| Phrase | Simple verb |\n|---|---|\n| **eine Entscheidung treffen** | entscheiden |\n| **in Frage stellen** | bezweifeln |\n| **zur Verfügung stehen** | verfügbar sein |\n| **in Kraft treten** | gelten ab |\n| **Kritik üben an** | kritisieren |\n\nYou **cannot** swap the verb freely: *eine Entscheidung machen* is wrong. Learn the **whole phrase** with its preposition and article.',
        'Dans un **Funktionsverbgefüge**, le **nom porte le sens** ; le verbe (*treffen, stellen, nehmen, kommen, stehen, bringen*) n’est que le « moteur ».\n\n| Locution | Verbe simple |\n|---|---|\n| **eine Entscheidung treffen** | entscheiden |\n| **in Frage stellen** | bezweifeln |\n| **zur Verfügung stehen** | verfügbar sein |\n| **in Kraft treten** | gelten ab |\n| **Kritik üben an** | kritisieren |\n\nTu **ne peux pas** changer librement le verbe : *eine Entscheidung machen* est faux. Apprends la **locution entière** avec préposition et article.',
      ],
      [
        ['Das Unternehmen trifft heute eine Entscheidung.', 'The company makes a decision today.', 'L’entreprise prend une décision aujourd’hui.'],
        ['Viele üben Kritik an der Regierung.', 'Many criticise the government.', 'Beaucoup critiquent le gouvernement.'],
      ],
    ),
    fb(
      'sp-fvg-e1',
      ['Wir müssen eine Entscheidung ___ . (treffen)', 'Wir müssen eine Entscheidung ___ . (treffen)'],
      'treffen',
      ['eine Entscheidung treffen', 'eine Entscheidung treffen'],
    ),
    mc(
      'sp-fvg-e2',
      ['Which is the simple verb for "eine Entscheidung treffen"?', 'Quel est le verbe simple de « eine Entscheidung treffen » ?'],
      ['entscheiden', 'bezweifeln', 'kritisieren'], ['entscheiden', 'bezweifeln', 'kritisieren'], 0,
      ['Same word family: Entscheidung / entscheiden.', 'Même famille : Entscheidung / entscheiden.'],
    ),
    mc(
      'sp-fvg-e3',
      ['Which phrase is correct?', 'Quelle locution est correcte ?'],
      ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung stellen'], ['eine Entscheidung treffen', 'eine Entscheidung machen', 'eine Entscheidung stellen'], 0,
      ['The verb is fixed.', 'Le verbe est fixe.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Phrases with in, zu, unter', 'Locutions avec in, zu, unter',
      'The most frequent patterns in news and official texts.', 'Les schémas les plus fréquents dans la presse et les textes officiels.',
    ),
    vocab('sp-funktionsverbgefuege-verfuegung', 'zur Verfügung stehen', 'to be available', 'être à disposition', null, 'tsoor fer-FÜ-gung SHTE-hen', 'tsoor fer-FUE-goong SHTAY-en', ['Ein Auto steht Ihnen zur Verfügung.', 'A car is at your disposal.', 'Une voiture est à votre disposition.']),
    vocab('sp-funktionsverbgefuege-kraft', 'in Kraft treten', 'to come into force', 'entrer en vigueur', null, 'in KRAFT TRE-ten', 'in KRAFT TRAY-ten', ['Das Gesetz tritt morgen in Kraft.', 'The law comes into force tomorrow.', 'La loi entre en vigueur demain.']),
    vocab('sp-funktionsverbgefuege-kenntnis', 'zur Kenntnis nehmen', 'to take note of', 'prendre connaissance de', null, 'tsoor KENT-nis NE-men', 'tsoor KENT-nis NAY-men', ['Bitte nehmen Sie die Änderung zur Kenntnis.', 'Please take note of the change.', 'Veuillez prendre connaissance du changement.']),
    grammar(
      'sp-fvg-patterns',
      ['Common patterns by preposition', 'Schémas courants par préposition'],
      [
        '| Preposition | Phrases |\n|---|---|\n| **in** | in Kraft treten · in Frage stellen · in Anspruch nehmen · in Betracht kommen · in Erfüllung gehen |\n| **zu(r)** | zur Verfügung stehen/stellen · zur Kenntnis nehmen · zur Folge haben · zur Sprache bringen · zum Ausdruck bringen |\n| **unter** | unter Beweis stellen · unter Druck setzen · unter Kontrolle haben |\n| **auf / an / bei** | Rücksicht nehmen **auf** · Kritik üben **an** · Wert legen **auf** · Abstand nehmen **von** |\n\n**stellen** (to put) = *zur Verfügung stellen* (make available, active) and **stehen** = *zur Verfügung stehen* (be available, state).',
        '| Préposition | Locutions |\n|---|---|\n| **in** | in Kraft treten · in Frage stellen · in Anspruch nehmen · in Betracht kommen · in Erfüllung gehen |\n| **zu(r)** | zur Verfügung stehen/stellen · zur Kenntnis nehmen · zur Folge haben · zur Sprache bringen · zum Ausdruck bringen |\n| **unter** | unter Beweis stellen · unter Druck setzen · unter Kontrolle haben |\n| **auf / an / bei** | Rücksicht nehmen **auf** · Kritik üben **an** · Wert legen **auf** · Abstand nehmen **von** |\n\n**stellen** (mettre) = *zur Verfügung stellen* (mettre à disposition, actif) et **stehen** = *zur Verfügung stehen* (être disponible, état).',
      ],
      [
        ['Wir stellen Ihnen einen Raum zur Verfügung.', 'We make a room available to you.', 'Nous mettons une salle à votre disposition.'],
        ['Sie legt großen Wert auf Pünktlichkeit.', 'She places great value on punctuality.', 'Elle attache une grande importance à la ponctualité.'],
      ],
    ),
    fb(
      'sp-fvg-e4',
      ['Das Gesetz tritt morgen in ___ . (force)', 'Das Gesetz tritt morgen in ___ . (vigueur)'],
      'Kraft',
      ['in Kraft treten', 'in Kraft treten'],
    ),
    mc(
      'sp-fvg-e5',
      ['"Ein Raum steht Ihnen ___ Verfügung."', '« Ein Raum steht Ihnen ___ Verfügung. »'],
      ['zur', 'in', 'unter'], ['zur', 'in', 'unter'], 0,
      ['zur Verfügung stehen', 'zur Verfügung stehen'],
    ),
    wo(
      'sp-fvg-e6',
      ['zur', 'Bitte', 'Sie', 'nehmen', 'Kenntnis', 'die Änderung'],
      ['Bitte', 'nehmen', 'Sie', 'die Änderung', 'zur', 'Kenntnis'],
      ['Imperative: verb – Sie – object – phrase.', 'Impératif : verbe – Sie – complément – locution.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Phrases with nehmen, üben, legen', 'Locutions avec nehmen, üben, legen',
      'Attitudes, criticism and values.', 'Attitudes, critiques et valeurs.',
    ),
    vocab('sp-funktionsverbgefuege-ruecksicht', 'Rücksicht nehmen auf', 'to show consideration for', 'tenir compte de', null, 'RÜCK-sicht NE-men auf', 'RUEK-zikht NAY-men owf', ['Wir nehmen Rücksicht auf die Nachbarn.', 'We show consideration for the neighbours.', 'Nous tenons compte des voisins.']),
    vocab('sp-funktionsverbgefuege-kritik', 'Kritik üben an', 'to criticise', 'critiquer', null, 'kri-TIK Ü-ben an', 'kri-TEEK UE-ben ahn', ['Viele üben Kritik an der Entscheidung.', 'Many criticise the decision.', 'Beaucoup critiquent la décision.']),
    vocab('sp-funktionsverbgefuege-wert', 'Wert legen auf', 'to attach importance to', 'attacher de l’importance à', null, 'WERT LE-gen auf', 'vert LAY-gen owf', ['Ich lege Wert auf gute Qualität.', 'I attach importance to good quality.', 'J’attache de l’importance à la bonne qualité.']),
    grammar(
      'sp-fvg-prep',
      ['Verb + noun + fixed preposition', 'Verbe + nom + préposition fixe'],
      [
        'Many phrases have an **extra preposition** that links to another noun:\n\n- **Rücksicht nehmen auf** + Akk.: *Rücksicht auf die Nachbarn nehmen*\n- **Kritik üben an** + Dat.: *Kritik an der Regierung üben*\n- **Wert legen auf** + Akk.: *Wert auf Qualität legen*\n- **Abstand nehmen von** + Dat.: *von einem Plan Abstand nehmen*\n\nUse **da(r)-** for things: *Darauf lege ich Wert.* / **wo(r)-** in questions: *Worauf legen Sie Wert?*\n\nTip: the noun usually takes **no article** (*Rücksicht, Kritik, Wert*).',
        'Beaucoup de locutions ont une **préposition supplémentaire** qui les relie à un autre nom :\n\n- **Rücksicht nehmen auf** + acc. : *Rücksicht auf die Nachbarn nehmen*\n- **Kritik üben an** + dat. : *Kritik an der Regierung üben*\n- **Wert legen auf** + acc. : *Wert auf Qualität legen*\n- **Abstand nehmen von** + dat. : *von einem Plan Abstand nehmen*\n\nUtilise **da(r)-** pour les choses : *Darauf lege ich Wert.* / **wo(r)-** dans les questions : *Worauf legen Sie Wert ?*\n\nAstuce : le nom est le plus souvent **sans article** (*Rücksicht, Kritik, Wert*).',
      ],
      [
        ['Worauf legen Sie bei einer Wohnung Wert?', 'What do you value in a flat?', 'À quoi attachez-vous de l’importance pour un logement ?'],
        ['Die Opposition übt scharfe Kritik an dem Plan.', 'The opposition sharply criticises the plan.', 'L’opposition critique vivement le plan.'],
      ],
    ),
    fb(
      'sp-fvg-e7',
      ['Viele üben Kritik ___ der Entscheidung. (an)', 'Viele üben Kritik ___ der Entscheidung. (an)'],
      'an',
      ['Kritik üben an', 'Kritik üben an'],
    ),
    mc(
      'sp-fvg-e8',
      ['"Wir nehmen Rücksicht ___ die Nachbarn."', '« Wir nehmen Rücksicht ___ die Nachbarn. »'],
      ['auf', 'an', 'von'], ['auf', 'an', 'von'], 0,
      ['Rücksicht nehmen auf', 'Rücksicht nehmen auf'],
    ),
    lc(
      'sp-fvg-e9',
      ['Listen. What does the speaker value?', 'Écoute. Qu’est-ce qui compte pour le locuteur ?'],
      'Ich lege großen Wert auf gute Qualität.',
      ['Quality', 'Low prices', 'Speed'], ['La qualité', 'Les prix bas', 'La rapidité'], 0,
      ['Wert legen auf = to value.', 'Wert legen auf = accorder de l’importance à.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Using them well', 'Bien les employer',
      'Why they sound formal, and when a simple verb is better.', 'Pourquoi elles sonnent formelles, et quand un verbe simple est meilleur.',
    ),
    vocab('sp-funktionsverbgefuege-verantwortung', 'Verantwortung übernehmen', 'to take responsibility', 'assumer la responsabilité', null, 'fer-ANT-wor-tung ü-ber-NE-men', 'fer-AHNT-vor-toong ue-ber-NAY-men', ['Er übernimmt die Verantwortung für das Team.', 'He takes responsibility for the team.', 'Il assume la responsabilité de l’équipe.']),
    grammar(
      'sp-fvg-use',
      ['Why use them?', 'Pourquoi les employer ?'],
      [
        '1. **Formal register** — official letters, news, contracts: *Wir bitten um Kenntnisnahme.* vs. *Bitte lest das.*\n2. **Adjectives on the noun:** *eine **schwierige** Entscheidung treffen* (you cannot add an adjective to a bare verb).\n3. **Fixed expressions** with no simple equivalent: *in Kraft treten.*\n\n**Do not overuse them.** A text full of *zur Anwendung bringen, in Erwägung ziehen, Berücksichtigung finden* sounds stiff. Prefer **anwenden, erwägen, berücksichtigen** when you want clarity.',
        '1. **Registre formel** — courriers officiels, presse, contrats : *Wir bitten um Kenntnisnahme.* au lieu de *Bitte lest das.*\n2. **Adjectifs sur le nom :** *eine **schwierige** Entscheidung treffen* (on ne peut pas ajouter d’adjectif à un verbe nu).\n3. **Expressions figées** sans équivalent simple : *in Kraft treten.*\n\n**N’en abuse pas.** Un texte plein de *zur Anwendung bringen, in Erwägung ziehen, Berücksichtigung finden* paraît guindé. Préfère **anwenden, erwägen, berücksichtigen** quand tu veux la clarté.',
      ],
      [
        ['Wir treffen eine schwierige Entscheidung.', 'We make a difficult decision.', 'Nous prenons une décision difficile.'],
        ['Wir erwägen eine Änderung.', 'We consider a change.', 'Nous envisageons un changement.'],
      ],
    ),
    mc(
      'sp-fvg-e10',
      ['Why are noun–verb phrases useful?', 'Pourquoi les locutions verbe + nom sont-elles utiles ?'],
      ['They sound formal and let you add adjectives', 'They are shorter', 'They are only spoken'], ['Elles sonnent formelles et permettent d’ajouter des adjectifs', 'Elles sont plus courtes', 'Elles sont seulement orales'], 0,
      ['Formal register and flexibility.', 'Registre formel et souplesse.'],
    ),

    wrapup(
      '**Funktionsverbgefüge** = **noun + weak verb**; the noun carries the meaning.\n\n**Learn whole:** eine Entscheidung treffen · in Frage stellen · zur Verfügung stehen · in Kraft treten · zur Kenntnis nehmen · Rücksicht nehmen auf · Kritik üben an · Wert legen auf · Verantwortung übernehmen.\n\n**Use** them in formal writing, but prefer a simple verb for clarity.',
      '**Funktionsverbgefüge** = **nom + verbe faible** ; le nom porte le sens.\n\n**À apprendre en bloc :** eine Entscheidung treffen · in Frage stellen · zur Verfügung stehen · in Kraft treten · zur Kenntnis nehmen · Rücksicht nehmen auf · Kritik üben an · Wert legen auf · Verantwortung übernehmen.\n\n**Emploie-les** à l’écrit formel, mais préfère un verbe simple pour la clarté.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Noun–verb phrases', 'Quiz final : locutions verbe + nom'),
    match(
      'sp-fvg-q1',
      [
        ['in Kraft treten', 'to come into force', 'entrer en vigueur'],
        ['in Frage stellen', 'to call into doubt', 'remettre en question'],
        ['zur Kenntnis nehmen', 'to take note of', 'prendre connaissance de'],
        ['zur Verfügung stehen', 'to be available', 'être à disposition'],
      ],
      ['Match each phrase with its meaning.', 'Associe chaque locution à sa signification.'],
    ),
    fb(
      'sp-fvg-q2',
      ['Das Gesetz tritt im Mai in ___ . (force)', 'Das Gesetz tritt im Mai in ___ . (vigueur)'],
      'Kraft',
      ['in Kraft treten', 'in Kraft treten'],
    ),
    fb(
      'sp-fvg-q3',
      ['Wir müssen heute eine Entscheidung ___ . (make)', 'Wir müssen heute eine Entscheidung ___ . (prendre)'],
      'treffen',
      ['eine Entscheidung treffen', 'eine Entscheidung treffen'],
    ),
    mc(
      'sp-fvg-q4',
      ['"Er legt Wert ___ Qualität."', '« Er legt Wert ___ Qualität. »'],
      ['auf', 'an', 'zu'], ['auf', 'an', 'zu'], 0,
      ['Wert legen auf', 'Wert legen auf'],
    ),
    mc(
      'sp-fvg-q5',
      ['"Sie üben Kritik ___ der Firma."', '« Sie üben Kritik ___ der Firma. »'],
      ['an', 'auf', 'bei'], ['an', 'auf', 'bei'], 0,
      ['Kritik üben an', 'Kritik üben an'],
    ),
    wo(
      'sp-fvg-q6',
      ['stellt', 'Der', 'in Frage', 'Chef', 'den Plan'],
      ['Der', 'Chef', 'stellt', 'den Plan', 'in Frage'],
      ['Verb in position 2, phrase at the end.', 'Verbe en position 2, locution à la fin.'],
    ),
    mc(
      'sp-fvg-q7',
      ['Which sentence is more formal?', 'Quelle phrase est plus formelle ?'],
      ['Wir treffen morgen eine Entscheidung.', 'Wir entscheiden das morgen.', 'Wir sagen es morgen.'], ['Wir treffen morgen eine Entscheidung.', 'Wir entscheiden das morgen.', 'Wir sagen es morgen.'], 0,
      ['Noun–verb phrase = formal.', 'Locution verbe + nom = formel.'],
    ),
    mc(
      'sp-fvg-q8',
      ['Which preposition? "___ Verfügung stehen"', 'Quelle préposition ? « ___ Verfügung stehen »'],
      ['zur', 'in', 'an'], ['zur', 'in', 'an'], 0,
      ['zur Verfügung stehen', 'zur Verfügung stehen'],
    ),
    lc(
      'sp-fvg-q9',
      ['Listen. What happens tomorrow?', 'Écoute. Que se passe-t-il demain ?'],
      'Das neue Gesetz tritt morgen in Kraft.',
      ['A law takes effect', 'An election', 'A strike'], ['Une loi entre en vigueur', 'Une élection', 'Une grève'], 0,
      ['in Kraft treten.', 'in Kraft treten.'],
    ),
    lc(
      'sp-fvg-q10',
      ['Listen. What does the speaker offer?', 'Écoute. Qu’offre le locuteur ?'],
      'Wir stellen Ihnen gern einen Raum zur Verfügung.',
      ['A room', 'A car', 'A ticket'], ['Une salle', 'Une voiture', 'Un billet'], 0,
      ['zur Verfügung stellen.', 'zur Verfügung stellen.'],
    ),
    mc(
      'sp-fvg-q11',
      ['The simple verb for "in Frage stellen" is …', 'Le verbe simple de « in Frage stellen » est …'],
      ['bezweifeln', 'entscheiden', 'kritisieren'], ['bezweifeln', 'entscheiden', 'kritisieren'], 0,
      ['in Frage stellen = bezweifeln.', 'in Frage stellen = bezweifeln.'],
    ),
    mc(
      'sp-fvg-q12',
      ['Which is NOT a valid phrase?', 'Laquelle n’est PAS une locution valide ?'],
      ['eine Entscheidung machen', 'eine Entscheidung treffen', 'zur Entscheidung kommen'], ['eine Entscheidung machen', 'eine Entscheidung treffen', 'zur Entscheidung kommen'], 0,
      ['The verb is fixed: treffen.', 'Le verbe est fixe : treffen.'],
    ),
  ],
});

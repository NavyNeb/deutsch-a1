import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const partizipialattribute = defineSpecial({
  slug: 'partizipialattribute',
  number: 37,
  group: 'sentences',
  levels: ['B1', 'B2'],
  related: ['b2-l5', 'b1-l19', 'b1-l3'],
  title: ['Partizipialattribute', 'Participle phrases before nouns', 'Les participes épithètes développés'],
  theme: [
    'Partizip I and II as adjectives, zu + Partizip I, and unpacking long participle phrases in formal texts',
    'Partizip I et II comme adjectifs, zu + Partizip I, et décomposition des longs participes dans les textes formels',
  ],
  goals: [
    'Form Partizip I and Partizip II with adjective endings',
    'Understand the zu + Partizip I form (die zu lösende Aufgabe)',
    'Unpack a long attribute into a relative clause',
    'Read news and academic texts with confidence',
  ],
  goalsFr: [
    'Former le Partizip I et le Partizip II avec les terminaisons d’adjectifs',
    'Comprendre la forme zu + Partizip I (die zu lösende Aufgabe)',
    'Retransformer un long épithète en proposition relative',
    'Lire presse et textes universitaires avec assurance',
  ],
  steps: [
    intro(
      'Das gestern veröffentlichte Buch', 'Le livre publié hier',
      'A newspaper writes: “Das gestern von der Redaktion veröffentlichte Buch überrascht.” The sentence looks scary, but it hides a simple relative clause: “Das Buch, das gestern veröffentlicht wurde, überrascht.” Participle attributes are a typical trait of formal German.',
      'Un journal écrit : « Das gestern von der Redaktion veröffentlichte Buch überrascht. » La phrase fait peur, mais cache une simple relative : « Das Buch, das gestern veröffentlicht wurde, überrascht. » Les participes épithètes sont un trait typique de l’allemand formel.',
      [
        'Form the participles as adjectives',
        'Decode long phrases',
        'Rewrite them as relative clauses',
        'Use short ones in your own writing',
      ],
      [
        'Former les participes comme adjectifs',
        'Décoder les longues expressions',
        'Les réécrire en relatives',
        'En employer de courtes dans tes textes',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Partizip I: active and simultaneous', 'Partizip I : actif et simultané',
      'Infinitive + d + adjective ending.', 'Infinitif + d + terminaison d’adjectif.',
    ),
    vocab('sp-partizipialattribute-lachend', 'lachend', 'laughing', 'qui rit', null, 'LA-chend', 'LAH-khent', ['Der lachende Mann winkt uns zu.', 'The laughing man waves at us.', 'L’homme qui rit nous fait signe.']),
    vocab('sp-partizipialattribute-steigend', 'steigend', 'rising', 'en hausse', null, 'SHTEI-gend', 'SHTY-gent', ['Die steigenden Preise machen Sorgen.', 'The rising prices cause worry.', 'La hausse des prix inquiète.']),
    grammar(
      'sp-pa-p1',
      ['Partizip I', 'Partizip I'],
      [
        '**Partizip I** = **infinitive + d**: *lachen → lachend*, *steigen → steigend*, *überzeugen → überzeugend*.\n\nAs an attribute it takes **adjective endings**: *der lachend**e** Mann, die steigend**en** Preise, ein überzeugend**es** Argument.*\n\nMeaning: **active and simultaneous** — *der lachende Mann* = *der Mann, der lacht*. The action happens **at the same time** as the main verb.',
        '**Partizip I** = **infinitif + d** : *lachen → lachend*, *steigen → steigend*, *überzeugen → überzeugend*.\n\nEn épithète, il prend les **terminaisons d’adjectif** : *der lachend**e** Mann, die steigend**en** Preise, ein überzeugend**es** Argument.*\n\nSens : **actif et simultané** — *der lachende Mann* = *l’homme qui rit*. L’action a lieu **en même temps** que le verbe principal.',
      ],
      [
        ['Der bellende Hund ist mein Nachbar.', 'The barking dog is my neighbour.', 'Le chien qui aboie est mon voisin.'],
        ['Das war ein überzeugendes Argument.', 'That was a convincing argument.', 'C’était un argument convaincant.'],
      ],
    ),
    fb(
      'sp-pa-e1',
      ['lachen → der ___ Mann (laughing)', 'lachen → der ___ Mann (qui rit)'],
      'lachende',
      ['infinitive + d + ending', 'infinitif + d + terminaison'],
    ),
    mc(
      'sp-pa-e2',
      ['"der bellende Hund" = …', '« der bellende Hund » = …'],
      ['der Hund, der bellt', 'der Hund, der gebellt wurde', 'der Hund, der bellen muss'], ['der Hund, der bellt', 'der Hund, der gebellt wurde', 'der Hund, der bellen muss'], 0,
      ['Partizip I = active, simultaneous.', 'Partizip I = actif, simultané.'],
    ),
    fb(
      'sp-pa-e3',
      ['Die ___ Preise machen Sorgen. (steigen — rising)', 'Die ___ Preise machen Sorgen. (steigen — en hausse)'],
      'steigenden',
      ['plural noun → -en', 'nom pluriel → -en'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Partizip II: passive or completed', 'Partizip II : passif ou accompli',
      'The past participle as an adjective.', 'Le participe passé comme adjectif.',
    ),
    vocab('sp-partizipialattribute-veroeffentlicht', 'veröffentlicht', 'published', 'publié', null, 'fer-Ö-ffent-licht', 'fer-OEF-fent-likht', ['Das veröffentlichte Buch ist spannend.', 'The published book is exciting.', 'Le livre publié est passionnant.']),
    vocab('sp-partizipialattribute-geschlossen', 'geschlossen', 'closed', 'fermé', null, 'ge-SCHLOS-sen', 'ge-SHLOS-sen', ['Das Geschäft ist geschlossen.', 'The shop is closed.', 'Le magasin est fermé.']),
    grammar(
      'sp-pa-p2',
      ['Partizip II', 'Partizip II'],
      [
        '**Partizip II + adjective ending**: *das veröffentlicht**e** Buch, die geschlossen**en** Türen, der gelöst**e** Fall.*\n\nMeaning depends on the verb:\n\n- **transitive verbs** → **passive**: *das veröffentlichte Buch* = *das Buch, das veröffentlicht wurde*\n- **intransitive verbs with sein** → **completed (active)**: *der gestiegene Preis* = *der Preis, der gestiegen ist*\n\nYou can add **time, place and agent** before the participle: *das **gestern von der Redaktion** veröffentlichte Buch*.',
        '**Partizip II + terminaison d’adjectif** : *das veröffentlicht**e** Buch, die geschlossen**en** Türen, der gelöst**e** Fall.*\n\nLe sens dépend du verbe :\n\n- **verbes transitifs** → **passif** : *das veröffentlichte Buch* = *le livre qui a été publié*\n- **verbes intransitifs avec sein** → **accompli (actif)** : *der gestiegene Preis* = *le prix qui a augmenté*\n\nTu peux ajouter **temps, lieu et agent** devant le participe : *das **gestern von der Redaktion** veröffentlichte Buch*.',
      ],
      [
        ['Der gestiegene Preis ärgert viele.', 'The increased price annoys many.', 'Le prix qui a augmenté énerve beaucoup de gens.'],
        ['Das gestern veröffentlichte Buch ist spannend.', 'The book published yesterday is exciting.', 'Le livre publié hier est passionnant.'],
      ],
    ),
    fb(
      'sp-pa-e4',
      ['veröffentlichen → das ___ Buch (published)', 'veröffentlichen → das ___ Buch (publié)'],
      'veröffentlichte',
      ['Partizip II + e', 'Partizip II + e'],
    ),
    mc(
      'sp-pa-e5',
      ['"der gestiegene Preis" = …', '« der gestiegene Preis » = …'],
      ['der Preis, der gestiegen ist', 'der Preis, der gesteigert wurde', 'der Preis, der steigen muss'], ['der Preis, der gestiegen ist', 'der Preis, der gesteigert wurde', 'der Preis, der steigen muss'], 0,
      ['steigen takes sein → completed active.', 'steigen prend sein → accompli actif.'],
    ),
    wo(
      'sp-pa-e6',
      ['ist', 'Das', 'Buch', 'veröffentlichte', 'spannend', 'gestern'],
      ['Das', 'gestern', 'veröffentlichte', 'Buch', 'ist', 'spannend'],
      ['Article – time – participle – noun – verb.', 'Article – temps – participe – nom – verbe.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'zu + Partizip I: must or can be done', 'zu + Partizip I : doit ou peut être fait',
      'A very formal way to express necessity.', 'Une manière très formelle d’exprimer la nécessité.',
    ),
    vocab('sp-partizipialattribute-aufgabe', 'die zu lösende Aufgabe', 'the task to be solved', 'la tâche à résoudre', 'die', 'dee tsoo LÖ-sen-de AUF-ga-be', 'dee tsoo LOE-zen-de OWF-gah-be', ['Die zu lösende Aufgabe ist schwer.', 'The task to be solved is hard.', 'La tâche à résoudre est difficile.']),
    vocab('sp-partizipialattribute-regeln', 'die zu beachtenden Regeln', 'the rules to be observed', 'les règles à respecter', null, 'dee tsoo be-ACH-ten-den RE-geln', 'dee tsoo be-AKH-ten-den RAY-geln', ['Die zu beachtenden Regeln stehen hier.', 'The rules to be observed are listed here.', 'Les règles à respecter sont ici.']),
    grammar(
      'sp-pa-zu',
      ['zu + Partizip I', 'zu + Partizip I'],
      [
        '**zu + Partizip I** before a noun means **“must be … / can be …”** (passive + necessity or possibility):\n\n- *die **zu lösende** Aufgabe* = *die Aufgabe, die gelöst werden **muss***\n- *der **zu erwartende** Erfolg* = *der Erfolg, der erwartet werden **kann***\n- *die **zu beachtenden** Regeln* = *die Regeln, die beachtet werden **müssen***\n\n**Separable verbs:** the *zu* sits **inside**: *die **aus**zu**füllenden** Formulare.*\n\nThis form is typical of **official texts, manuals and exams**.',
        '**zu + Partizip I** devant un nom signifie **« doit être … / peut être … »** (passif + nécessité ou possibilité) :\n\n- *die **zu lösende** Aufgabe* = *la tâche qui doit être résolue*\n- *der **zu erwartende** Erfolg* = *le succès qui peut être attendu*\n- *die **zu beachtenden** Regeln* = *les règles qui doivent être respectées*\n\n**Verbes séparables :** *zu* s’intercale : *die **aus**zu**füllenden** Formulare.*\n\nCette forme est typique des **textes officiels, notices et examens**.',
      ],
      [
        ['Die auszufüllenden Formulare liegen hier.', 'The forms to be filled in are here.', 'Les formulaires à remplir sont ici.'],
        ['Der zu erwartende Gewinn ist gering.', 'The profit to be expected is small.', 'Le bénéfice attendu est faible.'],
      ],
    ),
    mc(
      'sp-pa-e7',
      ['"die zu lösende Aufgabe" means …', '« die zu lösende Aufgabe » signifie …'],
      ['the task that must be solved', 'the task that is solving', 'the task that was solved'], ['la tâche qui doit être résolue', 'la tâche qui résout', 'la tâche qui a été résolue'], 0,
      ['zu + Partizip I = must be done.', 'zu + Partizip I = doit être fait.'],
    ),
    fb(
      'sp-pa-e8',
      ['die ___ Formulare (auszufüllen — to be filled in)', 'die ___ Formulare (auszufüllen — à remplir)'],
      'auszufüllenden',
      ['aus-zu-füllen + d + en', 'aus-zu-füllen + d + en'],
    ),
    lc(
      'sp-pa-e9',
      ['Listen. What does the sentence describe?', 'Écoute. Que décrit la phrase ?'],
      'Die zu beachtenden Regeln stehen auf der letzten Seite.',
      ['The rules to be observed', 'The finished work', 'The last chapter'], ['Les règles à respecter', 'Le travail terminé', 'Le dernier chapitre'], 0,
      ['zu beachtenden = to be observed.', 'zu beachtenden = à respecter.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Unpacking long phrases', 'Décomposer les longues expressions',
      'Turn the attribute back into a relative clause.', 'Retransformer l’épithète en proposition relative.',
    ),
    vocab('sp-partizipialattribute-studie', 'die Studie', 'the study', 'l’étude', 'die', 'STU-die', 'SHTOO-dee-e', ['Die kürzlich veröffentlichte Studie überrascht.', 'The recently published study is surprising.', 'L’étude publiée récemment surprend.']),
    grammar(
      'sp-pa-unpack',
      ['How to unpack', 'Comment décomposer'],
      [
        '**Rule of thumb:** the **article opens** the phrase, the **participle + noun close** it; **everything in between** belongs to the participle.\n\n*Die **in der Stadt lebenden** Menschen sind zufrieden.*\n\n1. Find the **noun**: *Menschen*\n2. Find the **participle** just before it: *lebenden*\n3. Make a **relative clause**: *die Menschen, **die** in der Stadt **leben***\n\nFor **Partizip II**: *das von allen akzeptierte Ergebnis* → *das Ergebnis, **das** von allen **akzeptiert wurde***.\n\nIn **your own writing**, keep attributes **short** (one or two extra words); a relative clause is clearer for long ones.',
        '**Règle pratique :** l’**article ouvre** le groupe, le **participe + nom le ferment** ; **tout ce qui est entre** dépend du participe.\n\n*Die **in der Stadt lebenden** Menschen sind zufrieden.*\n\n1. Trouve le **nom** : *Menschen*\n2. Trouve le **participe** juste avant : *lebenden*\n3. Fais une **relative** : *die Menschen, **die** in der Stadt **leben***\n\nPour le **Partizip II** : *das von allen akzeptierte Ergebnis* → *das Ergebnis, **das** von allen **akzeptiert wurde***.\n\nDans **tes propres textes**, garde les épithètes **courts** (un ou deux mots en plus) ; une relative est plus claire pour les longs.',
      ],
      [
        ['Die in der Stadt lebenden Menschen sind zufrieden.', 'The people living in the city are satisfied.', 'Les gens qui vivent en ville sont satisfaits.'],
        ['Das von allen akzeptierte Ergebnis überrascht uns.', 'The result accepted by everyone surprises us.', 'Le résultat accepté par tous nous surprend.'],
      ],
    ),
    mc(
      'sp-pa-e10',
      ['Unpack: "das von allen akzeptierte Ergebnis"', 'Décompose : « das von allen akzeptierte Ergebnis »'],
      ['das Ergebnis, das von allen akzeptiert wurde', 'das Ergebnis, das alle akzeptieren muss', 'das Ergebnis, das alle akzeptiert'], ['das Ergebnis, das von allen akzeptiert wurde', 'das Ergebnis, das alle akzeptieren muss', 'das Ergebnis, das alle akzeptiert'], 0,
      ['Partizip II → passive relative clause.', 'Partizip II → relative passive.'],
    ),

    wrapup(
      '**Partizip I** = infinitive + d (*lachend*): **active, simultaneous**.\n\n**Partizip II** (*veröffentlicht*): **passive** (transitive) or **completed active** (sein verbs).\n\n**zu + Partizip I** (*die zu lösende Aufgabe*): **must/can be done**.\n\n**Decode:** article → … → participle + noun; make a **relative clause** from the participle outward.',
      '**Partizip I** = infinitif + d (*lachend*) : **actif, simultané**.\n\n**Partizip II** (*veröffentlicht*) : **passif** (transitifs) ou **actif accompli** (verbes en sein).\n\n**zu + Partizip I** (*die zu lösende Aufgabe*) : **doit/peut être fait**.\n\n**Décoder :** article → … → participe + nom ; fais une **relative** en partant du participe.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Participle phrases', 'Quiz final : participes épithètes'),
    match(
      'sp-pa-q1',
      [
        ['lachend', 'laughing (active)', 'qui rit (actif)'],
        ['veröffentlicht', 'published (passive)', 'publié (passif)'],
        ['zu lösend', 'to be solved', 'à résoudre'],
        ['gestiegen', 'risen (completed)', 'monté (accompli)'],
      ],
      ['Match each participle with its meaning.', 'Associe chaque participe à sa signification.'],
    ),
    fb(
      'sp-pa-q2',
      ['der ___ Hund (bellen — barking)', 'der ___ Hund (bellen — qui aboie)'],
      'bellende',
      ['infinitive + d + e', 'infinitif + d + e'],
    ),
    fb(
      'sp-pa-q3',
      ['das ___ Buch (veröffentlichen — published)', 'das ___ Buch (veröffentlichen — publié)'],
      'veröffentlichte',
      ['Partizip II + e', 'Partizip II + e'],
    ),
    mc(
      'sp-pa-q4',
      ['"die zu beachtenden Regeln" =', '« die zu beachtenden Regeln » ='],
      ['die Regeln, die beachtet werden müssen', 'die Regeln, die beachten', 'die Regeln, die beachtet haben'], ['die Regeln, die beachtet werden müssen', 'die Regeln, die beachten', 'die Regeln, die beachtet haben'], 0,
      ['zu + Partizip I = must be done.', 'zu + Partizip I = doit être fait.'],
    ),
    mc(
      'sp-pa-q5',
      ['Which participle is ACTIVE and simultaneous?', 'Quel participe est ACTIF et simultané ?'],
      ['die steigenden Preise', 'das veröffentlichte Buch', 'die geschlossene Tür'], ['die steigenden Preise', 'das veröffentlichte Buch', 'die geschlossene Tür'], 0,
      ['Partizip I.', 'Partizip I.'],
    ),
    wo(
      'sp-pa-q6',
      ['Aufgabe', 'ist', 'schwer', 'zu lösende', 'Die'],
      ['Die', 'zu lösende', 'Aufgabe', 'ist', 'schwer'],
      ['Article – participle phrase – noun – verb.', 'Article – participe – nom – verbe.'],
    ),
    fb(
      'sp-pa-q7',
      ['die ___ Formulare (auszufüllen)', 'die ___ Formulare (auszufüllen)'],
      'auszufüllenden',
      ['zu goes inside the separable verb', 'zu s’intercale dans le verbe séparable'],
    ),
    mc(
      'sp-pa-q8',
      ['Unpack: "die in der Stadt lebenden Menschen"', 'Décompose : « die in der Stadt lebenden Menschen »'],
      ['die Menschen, die in der Stadt leben', 'die Menschen, die in der Stadt gelebt werden', 'die Menschen, die in der Stadt leben müssen'], ['die Menschen, die in der Stadt leben', 'die Menschen, die in der Stadt gelebt werden', 'die Menschen, die in der Stadt leben müssen'], 0,
      ['Partizip I → active relative clause.', 'Partizip I → relative active.'],
    ),
    lc(
      'sp-pa-q9',
      ['Listen. What is the news about?', 'Écoute. De quoi parle l’information ?'],
      'Die steigenden Preise machen vielen Familien Sorgen.',
      ['Rising prices worry families', 'Prices fell', 'Families are moving'], ['La hausse des prix inquiète les familles', 'Les prix ont baissé', 'Les familles déménagent'], 0,
      ['steigend = rising.', 'steigend = en hausse.'],
    ),
    lc(
      'sp-pa-q10',
      ['Listen. What is described?', 'Écoute. Qu’est-ce qui est décrit ?'],
      'Das von allen akzeptierte Ergebnis überrascht uns.',
      ['A result accepted by everyone', 'A result nobody likes', 'A result still to come'], ['Un résultat accepté par tous', 'Un résultat que personne n’aime', 'Un résultat à venir'], 0,
      ['akzeptierte = accepted.', 'akzeptierte = accepté.'],
    ),
    mc(
      'sp-pa-q11',
      ['"der gestiegene Preis" means …', '« der gestiegene Preis » signifie …'],
      ['the price that has risen', 'the price that is rising', 'the price to be raised'], ['le prix qui a augmenté', 'le prix qui augmente', 'le prix à augmenter'], 0,
      ['steigen + sein → completed.', 'steigen + sein → accompli.'],
    ),
    mc(
      'sp-pa-q12',
      ['When should you avoid long participle attributes?', 'Quand faut-il éviter les longs participes épithètes ?'],
      ['In your own writing, if unclear', 'In legal texts', 'In newspapers'], ['Dans tes propres textes, si c’est peu clair', 'Dans les textes juridiques', 'Dans les journaux'], 0,
      ['Prefer a relative clause for clarity.', 'Préfère une relative pour la clarté.'],
    ),
  ],
});

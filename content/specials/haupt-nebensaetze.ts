import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const hauptNebensaetze = defineSpecial({
  slug: 'haupt-nebensaetze',
  number: 33,
  group: 'sentences',
  levels: ['A1', 'A2'],
  related: ['a2-l7', 'a2-l19', 'b1-l6'],
  title: ['Hauptsatz & Nebensatz', 'Main & subordinate clauses', 'Propositions principales et subordonnées'],
  theme: [
    'What a main clause (Hauptsatz) and a subordinate clause (Nebensatz) are — weil vs deshalb, dass, wenn, obwohl … and where the verb goes',
    'Ce que sont la proposition principale (Hauptsatz) et la subordonnée (Nebensatz) — weil vs deshalb, dass, wenn, obwohl … et où va le verbe',
  ],
  goals: [
    'Tell a Hauptsatz from a Nebensatz and know why it matters',
    'Place the verb correctly: position 2 in a Hauptsatz, at the end in a Nebensatz',
    'Use weil and deshalb correctly — and never mix up their word order',
    'Use dass, wenn, ob, obwohl, damit, als, während, bevor, nachdem',
    'Put the comma in the right place and start a sentence with a Nebensatz',
  ],
  goalsFr: [
    'Distinguer un Hauptsatz d’un Nebensatz et comprendre pourquoi c’est important',
    'Placer correctement le verbe : position 2 dans un Hauptsatz, à la fin dans un Nebensatz',
    'Utiliser weil et deshalb correctement — sans jamais confondre leur ordre des mots',
    'Utiliser dass, wenn, ob, obwohl, damit, als, während, bevor, nachdem',
    'Mettre la virgule au bon endroit et commencer une phrase par un Nebensatz',
  ],
  steps: [
    intro(
      'Hauptsatz und Nebensatz', 'Hauptsatz et Nebensatz',
      'Almost every German sentence you will ever build is made of **clauses**. A **Hauptsatz** (main clause) can stand on its own. A **Nebensatz** (subordinate clause) cannot — it needs a main clause to lean on. The big secret of German word order is simple: **the clause type decides where the verb goes**. Once you can see which kind of clause you are writing, the verb places itself.',
      'Presque toutes les phrases allemandes que tu construiras sont faites de **propositions**. Un **Hauptsatz** (principale) peut exister seul. Un **Nebensatz** (subordonnée) ne le peut pas — il s’appuie sur une principale. Le grand secret de l’ordre des mots allemand est simple : **le type de proposition décide de la place du verbe**. Dès que tu vois quel type tu écris, le verbe se place tout seul.',
      [
        'Recognise a Hauptsatz and a Nebensatz',
        'Know where the conjugated verb goes in each',
        'Understand the difference between weil and deshalb',
        'Build longer sentences with the right commas',
      ],
      [
        'Reconnaître un Hauptsatz et un Nebensatz',
        'Savoir où va le verbe conjugué dans chacun',
        'Comprendre la différence entre weil et deshalb',
        'Construire des phrases plus longues avec les bonnes virgules',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'What is a clause?', 'Qu’est-ce qu’une proposition ?',
      'A clause is a group of words with its own conjugated verb. There are two kinds.', 'Une proposition est un groupe de mots avec son propre verbe conjugué. Il en existe deux sortes.',
    ),
    grammar(
      'sp-hn-def',
      ['Hauptsatz vs Nebensatz', 'Hauptsatz vs Nebensatz'],
      [
        `A **clause** (*Satz*) is a group of words around **one conjugated verb**. German has two kinds:

**1. Hauptsatz (main clause)**
- It **can stand alone** — it makes complete sense by itself.
- The conjugated verb is in **position 2**.
- Ich **lerne** Deutsch. · Heute **gehe** ich ins Kino. · Wann **kommst** du?

**2. Nebensatz (subordinate clause)**
- It **cannot stand alone** — it depends on a main clause.
- It starts with a **conjunction** (weil, dass, wenn, ob, obwohl …).
- The conjugated verb goes to the **very end**.
- …weil ich in Berlin **arbeite**. · …dass er morgen **kommt**.

**Test:** try saying the clause on its own. "Ich lerne Deutsch." — fine. "weil ich in Berlin arbeite." — you wait for the rest: *because … what?* That unfinished feeling means it is a Nebensatz.

A **comma** always separates a Nebensatz from the main clause: Ich lerne Deutsch**,** weil ich in Berlin arbeite.`,
        `Une **proposition** (*Satz*) est un groupe de mots autour d’**un verbe conjugué**. L’allemand en connaît deux sortes :

**1. Hauptsatz (principale)**
- Elle **peut exister seule** — elle a un sens complet.
- Le verbe conjugué est en **position 2**.
- Ich **lerne** Deutsch. · Heute **gehe** ich ins Kino. · Wann **kommst** du ?

**2. Nebensatz (subordonnée)**
- Elle **ne peut pas exister seule** — elle dépend d’une principale.
- Elle commence par une **conjonction** (weil, dass, wenn, ob, obwohl …).
- Le verbe conjugué va **tout à la fin**.
- …weil ich in Berlin **arbeite**. · …dass er morgen **kommt**.

**Test :** essaie de dire la proposition seule. « Ich lerne Deutsch. » — correct. « weil ich in Berlin arbeite. » — tu attends la suite : *parce que … quoi ?* Cette impression d’inachevé indique un Nebensatz.

Une **virgule** sépare toujours le Nebensatz de la principale : Ich lerne Deutsch**,** weil ich in Berlin arbeite.`,
      ],
      [
        ['Ich lerne Deutsch.', 'I am learning German. (Hauptsatz)', 'J’apprends l’allemand. (Hauptsatz)'],
        ['Ich lerne Deutsch, weil ich in Berlin arbeite.', 'I am learning German because I work in Berlin.', 'J’apprends l’allemand parce que je travaille à Berlin.'],
        ['Er sagt, dass er morgen kommt.', 'He says that he is coming tomorrow.', 'Il dit qu’il viendra demain.'],
      ],
      'verb-second',
    ),
    vocab('sp-haupt-nebensaetze-hauptsatz', 'der Hauptsatz', 'main clause', 'la proposition principale', 'der', 'HAUPT-satz', 'HOWPT-zats', ['Im Hauptsatz steht das Verb an Position 2.', 'In the main clause the verb is in position 2.', 'Dans la principale, le verbe est en position 2.']),
    vocab('sp-haupt-nebensaetze-nebensatz', 'der Nebensatz', 'subordinate clause', 'la proposition subordonnée', 'der', 'NE-ben-satz', 'NAY-ben-zats', ['Im Nebensatz steht das Verb am Ende.', 'In the subordinate clause the verb is at the end.', 'Dans la subordonnée, le verbe est à la fin.']),
    vocab('sp-haupt-nebensaetze-konjunktion', 'die Konjunktion', 'conjunction', 'la conjonction', 'die', 'Kon-junk-TION', 'kon-yoonk-TSYOHN', ['Weil ist eine Konjunktion.', 'Weil is a conjunction.', 'Weil est une conjonction.']),
    mc(
      'sp-hn-e1',
      ['Which of these is a Hauptsatz (it can stand alone)?', 'Lequel est un Hauptsatz (il peut exister seul) ?'],
      ['Ich bin müde.', 'weil ich müde bin', 'dass er kommt'],
      ['Ich bin müde.', 'weil ich müde bin', 'dass er kommt'], 0,
      ['"Ich bin müde." is complete. The other two start with a conjunction and need a main clause.', '« Ich bin müde. » est complet. Les deux autres commencent par une conjonction et ont besoin d’une principale.'],
    ),
    mc(
      'sp-hn-e2',
      ['Where is the conjugated verb in "weil ich müde bin"?', 'Où est le verbe conjugué dans « weil ich müde bin » ?'],
      ['Position 2', 'At the very end', 'At the start'],
      ['Position 2', 'Tout à la fin', 'Au début'], 1,
      ['After weil (a conjunction) the verb goes to the end: …bin.', 'Après weil (une conjonction) le verbe va à la fin : …bin.'],
    ),
    match(
      'sp-hn-e3',
      [
        ['der Hauptsatz', 'main clause', 'proposition principale'],
        ['der Nebensatz', 'subordinate clause', 'proposition subordonnée'],
        ['die Konjunktion', 'conjunction', 'conjonction'],
        ['das Komma', 'comma', 'virgule'],
      ],
      ['Match the German term with its meaning.', 'Associe le terme allemand à son sens.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Hauptsatz + Hauptsatz', 'Hauptsatz + Hauptsatz',
      'Two main clauses can be joined — by a word in position 0, or by an adverb in position 1.', 'Deux principales peuvent être reliées — par un mot en position 0 ou par un adverbe en position 1.',
    ),
    grammar(
      'sp-hn-hs-pos0',
      ['Position 0: und, aber, oder, denn, sondern', 'Position 0 : und, aber, oder, denn, sondern'],
      [
        `Five small words join **two main clauses** without changing anything. They stand **outside** the clause (**position 0**), so each side keeps its normal order: **verb in position 2**.

- **und** (and): Ich koche, **und** er wäscht ab.
- **aber** (but): Ich bin müde, **aber** ich lerne weiter.
- **oder** (or): Gehst du ins Kino, **oder** bleibst du zu Hause?
- **denn** (because): Ich bleibe hier, **denn** ich bin krank.
- **sondern** (but rather, after a negation): Ich trinke **nicht** Kaffee, **sondern** Tee.

Look at the verbs: *bin*, *bleibe* sit right after their subject — **nothing moved**.

**Comma:** put one before **aber, denn, sondern**. Before **und / oder** it is optional between two full main clauses.`,
        `Cinq petits mots relient **deux principales** sans rien changer. Ils sont **en dehors** de la proposition (**position 0**), donc chaque côté garde son ordre normal : **verbe en position 2**.

- **und** (et) : Ich koche, **und** er wäscht ab.
- **aber** (mais) : Ich bin müde, **aber** ich lerne weiter.
- **oder** (ou) : Gehst du ins Kino, **oder** bleibst du zu Hause ?
- **denn** (car) : Ich bleibe hier, **denn** ich bin krank.
- **sondern** (mais plutôt, après une négation) : Ich trinke **nicht** Kaffee, **sondern** Tee.

Regarde les verbes : *bin*, *bleibe* sont juste après leur sujet — **rien n’a bougé**.

**Virgule :** mets-en une avant **aber, denn, sondern**. Avant **und / oder** elle est facultative entre deux principales complètes.`,
      ],
      [
        ['Ich bin müde, aber ich lerne weiter.', 'I am tired, but I keep learning.', 'Je suis fatigué, mais je continue d’apprendre.'],
        ['Wir bleiben zu Hause, denn es regnet.', 'We stay at home because it is raining.', 'Nous restons à la maison car il pleut.'],
        ['Sie wohnt nicht in Berlin, sondern in Hamburg.', 'She does not live in Berlin but in Hamburg.', 'Elle n’habite pas à Berlin mais à Hambourg.'],
      ],
      'verb-second',
    ),
    grammar(
      'sp-hn-hs-adv',
      ['Position 1: deshalb, deswegen, darum, trotzdem', 'Position 1 : deshalb, deswegen, darum, trotzdem'],
      [
        `**deshalb** (therefore), **deswegen**, **darum**, **daher** and **trotzdem** (nevertheless) look like conjunctions — but they are **adverbs**. They take **position 1** of the second main clause. The verb must be in **position 2**, so it jumps **in front of the subject**.

Ich bin krank. **Deshalb bleibe ich** zu Hause.

→ position 1 = *Deshalb*, position 2 = *bleibe*, then the subject *ich*.

Ich bin müde. **Trotzdem lerne ich** weiter.

**Important:** *deshalb* still starts a **Hauptsatz**. The verb is **not** sent to the end. The sentence can even be split in two with a full stop, because each part can stand alone.

- Ich bin krank**,** deshalb bleibe ich zu Hause. (comma)
- Ich bin krank**.** Deshalb bleibe ich zu Hause. (full stop)

Other adverbs that work the same way: **dann** (then), **außerdem** (besides), **also** (so).`,
        `**deshalb** (c’est pourquoi), **deswegen**, **darum**, **daher** et **trotzdem** (malgré tout) ressemblent à des conjonctions — mais ce sont des **adverbes**. Ils occupent la **position 1** de la deuxième principale. Le verbe doit être en **position 2**, donc il passe **devant le sujet**.

Ich bin krank. **Deshalb bleibe ich** zu Hause.

→ position 1 = *Deshalb*, position 2 = *bleibe*, puis le sujet *ich*.

Ich bin müde. **Trotzdem lerne ich** weiter.

**Important :** *deshalb* commence toujours un **Hauptsatz**. Le verbe n’est **pas** envoyé à la fin. On peut même couper en deux avec un point, car chaque partie peut exister seule.

- Ich bin krank**,** deshalb bleibe ich zu Hause. (virgule)
- Ich bin krank**.** Deshalb bleibe ich zu Hause. (point)

D’autres adverbes fonctionnent pareil : **dann** (ensuite), **außerdem** (en plus), **also** (donc).`,
      ],
      [
        ['Es regnet. Deshalb nehme ich einen Schirm mit.', 'It is raining. That is why I take an umbrella.', 'Il pleut. C’est pourquoi je prends un parapluie.'],
        ['Er ist müde. Trotzdem arbeitet er weiter.', 'He is tired. Nevertheless he keeps working.', 'Il est fatigué. Malgré tout il continue de travailler.'],
        ['Ich habe Hunger, deswegen koche ich.', 'I am hungry, so I cook.', 'J’ai faim, donc je cuisine.'],
      ],
      'verb-second',
    ),
    vocab('sp-haupt-nebensaetze-deswegen', 'deswegen', 'therefore', 'c’est pourquoi, donc', null, 'DES-we-gen', 'DES-vay-gen', ['Ich bin krank, deswegen bleibe ich im Bett.', 'I am ill, therefore I stay in bed.', 'Je suis malade, donc je reste au lit.']),
    vocab('sp-haupt-nebensaetze-sondern', 'sondern', 'but rather', 'mais plutôt', null, 'SON-dern', 'ZON-dern', ['Ich trinke keinen Kaffee, sondern Tee.', 'I do not drink coffee but tea.', 'Je ne bois pas de café mais du thé.']),
    mc(
      'sp-hn-e4',
      ['"Ich bleibe hier, ___ ich bin krank." (the verb "bin" is in position 2)', '« Ich bleibe hier, ___ ich bin krank. » (le verbe « bin » est en position 2)'],
      ['denn', 'weil', 'dass'], ['denn', 'weil', 'dass'], 0,
      ['denn joins two main clauses and does not move the verb. weil would send "bin" to the end.', 'denn relie deux principales et ne déplace pas le verbe. weil enverrait « bin » à la fin.'],
    ),
    wo(
      'sp-hn-e5',
      ['Deshalb', 'bleibe', 'ich', 'zu', 'Hause'],
      ['Deshalb', 'bleibe', 'ich', 'zu', 'Hause'],
      ['After deshalb comes the verb, then the subject.', 'Après deshalb vient le verbe, puis le sujet.'],
    ),
    fb(
      'sp-hn-e6',
      ['Es regnet. ___ nehme ich einen Schirm mit. (that is why)', 'Es regnet. ___ nehme ich einen Schirm mit. (c’est pourquoi)'],
      'Deshalb',
      ['deshalb / deswegen / darum — the verb follows right after.', 'deshalb / deswegen / darum — le verbe suit juste après.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'The Nebensatz: verb at the end', 'Le Nebensatz : verbe à la fin',
      'weil, dass, wenn, ob … push the conjugated verb to the end of their clause.', 'weil, dass, wenn, ob … envoient le verbe conjugué à la fin de leur proposition.',
    ),
    grammar(
      'sp-hn-ns-verb',
      ['Conjunction + subject … + verb', 'Conjonction + sujet … + verbe'],
      [
        `A Nebensatz always follows the same pattern:

**, + conjunction + subject + (rest) + conjugated verb**

- Ich bleibe zu Hause**, weil** ich krank **bin**.
- Ich glaube**, dass** er recht **hat**.
- Ich weiß nicht**, ob** sie heute **kommt**.
- Ich gehe spazieren**, wenn** die Sonne **scheint**.

**With more than one verb**, the whole verb group sits at the end and the **conjugated verb comes last**:

- **Modal verb:** …weil ich früh **aufstehen muss**. (infinitive + conjugated modal)
- **Separable verb:** …weil er morgen **anruft**. (the prefix does **not** split off — *an|ruft* stays together)
- **Perfekt:** …dass sie ihn **gesehen hat**. (participle + conjugated *haben/sein*)

The Nebensatz is **one block**, closed at the back by the conjugated verb. Everything before it keeps the usual German order: subject first, then time, place, object…

**Remember:** the verb falls to the end, **not** the subject. After *weil* you still say "ich", "er", "wir" first.`,
        `Un Nebensatz suit toujours le même schéma :

**, + conjonction + sujet + (reste) + verbe conjugué**

- Ich bleibe zu Hause**, weil** ich krank **bin**.
- Ich glaube**, dass** er recht **hat**.
- Ich weiß nicht**, ob** sie heute **kommt**.
- Ich gehe spazieren**, wenn** die Sonne **scheint**.

**Avec plusieurs verbes**, tout le groupe verbal est à la fin et le **verbe conjugué vient en dernier** :

- **Verbe modal :** …weil ich früh **aufstehen muss**. (infinitif + modal conjugué)
- **Verbe séparable :** …weil er morgen **anruft**. (le préfixe ne se **détache pas** — *an|ruft* reste groupé)
- **Perfekt :** …dass sie ihn **gesehen hat**. (participe + *haben/sein* conjugué)

Le Nebensatz est **un bloc**, fermé à l’arrière par le verbe conjugué. Tout ce qui précède garde l’ordre habituel : sujet d’abord, puis temps, lieu, complément…

**À retenir :** c’est le verbe qui tombe à la fin, **pas** le sujet. Après *weil* on dit toujours d’abord « ich », « er », « wir ».`,
      ],
      [
        ['Ich lerne Deutsch, weil ich in Wien arbeite.', 'I am learning German because I work in Vienna.', 'J’apprends l’allemand parce que je travaille à Vienne.'],
        ['Ich bin müde, weil ich früh aufstehen muss.', 'I am tired because I have to get up early.', 'Je suis fatigué parce que je dois me lever tôt.'],
        ['Er sagt, dass sie ihn gesehen hat.', 'He says that she has seen him.', 'Il dit qu’elle l’a vu.'],
      ],
      'satzklammer',
    ),
    vocab('sp-haupt-nebensaetze-weil', 'weil', 'because (subordinate)', 'parce que', null, 'WEIL', 'VILE', ['Ich lerne, weil ich eine Prüfung habe.', 'I am studying because I have an exam.', 'J’étudie parce que j’ai un examen.']),
    vocab('sp-haupt-nebensaetze-dass', 'dass', 'that', 'que', null, 'DASS', 'DAHSS', ['Ich weiß, dass du müde bist.', 'I know that you are tired.', 'Je sais que tu es fatigué.']),
    vocab('sp-haupt-nebensaetze-ob', 'ob', 'whether, if', 'si (interrogatif)', null, 'OB', 'OP', ['Ich weiß nicht, ob er kommt.', 'I do not know whether he is coming.', 'Je ne sais pas s’il vient.']),
    fb(
      'sp-hn-e7',
      ['Ich bleibe zu Hause, weil ich krank ___. (sein)', 'Ich bleibe zu Hause, weil ich krank ___. (sein)'],
      'bin',
      ['The conjugated verb goes to the very end of the Nebensatz.', 'Le verbe conjugué va tout à la fin du Nebensatz.'],
    ),
    wo(
      'sp-hn-e8',
      ['weil', 'ich', 'müde', 'bin', 'Ich', 'gehe', 'früh', 'schlafen,'],
      ['Ich', 'gehe', 'früh', 'schlafen,', 'weil', 'ich', 'müde', 'bin'],
      ['Hauptsatz first, then the comma and the weil-clause with the verb last.', 'Hauptsatz d’abord, puis la virgule et le weil-Satz avec le verbe en dernier.'],
    ),
    mc(
      'sp-hn-e9',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich glaube, dass er recht hat.', 'Ich glaube, dass er hat recht.', 'Ich glaube, dass hat er recht.'],
      ['Ich glaube, dass er recht hat.', 'Ich glaube, dass er hat recht.', 'Ich glaube, dass hat er recht.'], 0,
      ['After dass the conjugated verb goes last.', 'Après dass, le verbe conjugué va en dernier.'],
    ),
    wo(
      'sp-hn-e10',
      ['aufstehen', 'weil', 'muss', 'Ich', 'bin', 'müde,', 'ich', 'früh'],
      ['Ich', 'bin', 'müde,', 'weil', 'ich', 'früh', 'aufstehen', 'muss'],
      ['Modal verb conjugated at the very end, the infinitive just before it.', 'Le modal conjugué tout à la fin, l’infinitif juste avant.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'weil or deshalb?', 'weil ou deshalb ?',
      'Same meaning, opposite word order. This is the pair almost every learner mixes up.', 'Même sens, ordre des mots opposé. C’est la paire que presque tous les apprenants confondent.',
    ),
    grammar(
      'sp-hn-weil-deshalb',
      ['weil (reason) vs deshalb (result)', 'weil (raison) vs deshalb (résultat)'],
      [
        `Both express **cause and effect**, but they sit on **opposite sides** of the story:

- **weil** introduces the **reason** → it starts a **Nebensatz** (verb at the end).
- **deshalb** introduces the **result** → it starts a **Hauptsatz** (verb in position 2, before the subject).

Take two facts: *Ich bin müde.* (reason) and *Ich gehe ins Bett.* (result).

**With weil** — the reason comes *after* weil:
- Ich gehe ins Bett, **weil ich müde bin**.
- **Weil ich müde bin, gehe ich** ins Bett. (clause in front → "verb, comma, verb")

**With deshalb** — the reason is the *first* sentence, the result follows:
- Ich bin müde, **deshalb gehe ich** ins Bett.
- Ich bin müde. **Deshalb gehe ich** ins Bett.

**Quick check:** after **weil** the verb is *last* · after **deshalb** the verb is *right next to it*.

**Three classic mistakes**
- ✗ *Ich gehe ins Bett, weil ich bin müde.* → ✓ …weil ich müde **bin**.
- ✗ *Ich bin müde, deshalb ich gehe ins Bett.* → ✓ …deshalb **gehe ich**…
- ✗ *Ich bin müde, weil ich gehe ins Bett.* — the reason and the result are swapped: the thing after *weil* must be the **cause**.

**Tip:** **denn** is a third way. It means "because" like *weil*, but it behaves like *und/aber*: **no change in order** → Ich gehe ins Bett, **denn ich bin** müde.`,
        `Les deux expriment la **cause et l’effet**, mais ils sont placés de **côtés opposés** :

- **weil** introduit la **raison** → il ouvre un **Nebensatz** (verbe à la fin).
- **deshalb** introduit le **résultat** → il ouvre un **Hauptsatz** (verbe en position 2, avant le sujet).

Prends deux faits : *Ich bin müde.* (raison) et *Ich gehe ins Bett.* (résultat).

**Avec weil** — la raison vient *après* weil :
- Ich gehe ins Bett, **weil ich müde bin**.
- **Weil ich müde bin, gehe ich** ins Bett. (proposition en tête → « verbe, virgule, verbe »)

**Avec deshalb** — la raison est la *première* phrase, le résultat suit :
- Ich bin müde, **deshalb gehe ich** ins Bett.
- Ich bin müde. **Deshalb gehe ich** ins Bett.

**Vérification rapide :** après **weil** le verbe est *en dernier* · après **deshalb** le verbe est *juste à côté*.

**Trois erreurs classiques**
- ✗ *Ich gehe ins Bett, weil ich bin müde.* → ✓ …weil ich müde **bin**.
- ✗ *Ich bin müde, deshalb ich gehe ins Bett.* → ✓ …deshalb **gehe ich**…
- ✗ *Ich bin müde, weil ich gehe ins Bett.* — raison et résultat sont inversés : ce qui suit *weil* doit être la **cause**.

**Astuce :** **denn** est une troisième voie. Il signifie « parce que » comme *weil*, mais se comporte comme *und/aber* : **aucun changement d’ordre** → Ich gehe ins Bett, **denn ich bin** müde.`,
      ],
      [
        ['Ich gehe ins Bett, weil ich müde bin.', 'I am going to bed because I am tired.', 'Je vais au lit parce que je suis fatigué.'],
        ['Ich bin müde, deshalb gehe ich ins Bett.', 'I am tired, therefore I am going to bed.', 'Je suis fatigué, donc je vais au lit.'],
        ['Weil es regnet, bleiben wir zu Hause.', 'Because it is raining, we stay at home.', 'Comme il pleut, nous restons à la maison.'],
      ],
      'verb-second',
    ),
    grammar(
      'sp-hn-front',
      ['Nebensatz in front: verb – comma – verb', 'Nebensatz en tête : verbe – virgule – verbe'],
      [
        `A Nebensatz can also open the sentence. The whole clause then counts as **position 1** of the main clause — so the **main verb comes straight after the comma** (position 2).

- Ich bleibe zu Hause, **wenn es regnet**.
- **Wenn es regnet, bleibe ich** zu Hause.

Two verbs meet at the comma: *regnet*, **bleibe**. That is the famous **"verb – comma – verb"** pattern.

**Never** say *Wenn es regnet, ich bleibe zu Hause.* — the main clause verb must come first after the comma.

Why choose this order? You put the **most important context first**: *"Because it is raining, …"*, *"If you have time, …"*. It sounds natural in speech and writing.`,
        `Un Nebensatz peut aussi ouvrir la phrase. Toute la proposition compte alors comme la **position 1** de la principale — donc le **verbe principal vient juste après la virgule** (position 2).

- Ich bleibe zu Hause, **wenn es regnet**.
- **Wenn es regnet, bleibe ich** zu Hause.

Deux verbes se rencontrent à la virgule : *regnet*, **bleibe**. C’est le fameux schéma **« verbe – virgule – verbe »**.

Ne dis **jamais** *Wenn es regnet, ich bleibe zu Hause.* — le verbe de la principale doit venir en premier après la virgule.

Pourquoi choisir cet ordre ? On met le **contexte important en premier** : *« Comme il pleut, … »*, *« Si tu as le temps, … »*. C’est naturel à l’oral comme à l’écrit.`,
      ],
      [
        ['Wenn es regnet, bleibe ich zu Hause.', 'If it rains, I stay at home.', 'S’il pleut, je reste à la maison.'],
        ['Weil ich krank bin, gehe ich zum Arzt.', 'Because I am ill, I go to the doctor.', 'Comme je suis malade, je vais chez le médecin.'],
        ['Obwohl er müde ist, arbeitet er weiter.', 'Although he is tired, he keeps working.', 'Bien qu’il soit fatigué, il continue de travailler.'],
      ],
      'verb-second',
    ),
    mc(
      'sp-hn-e11',
      ['"Ich bin krank, ___ bleibe ich zu Hause." (therefore)', '« Ich bin krank, ___ bleibe ich zu Hause. » (donc)'],
      ['deshalb', 'weil', 'dass'], ['deshalb', 'weil', 'dass'], 0,
      ['deshalb gives the result and is followed directly by the verb "bleibe".', 'deshalb donne le résultat et est suivi directement du verbe « bleibe ».'],
    ),
    mc(
      'sp-hn-e12',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil ich bin krank.', 'Ich bleibe zu Hause, weil bin ich krank.'],
      ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil ich bin krank.', 'Ich bleibe zu Hause, weil bin ich krank.'], 0,
      ['Verb last after weil: …ich krank bin.', 'Verbe en dernier après weil : …ich krank bin.'],
    ),
    wo(
      'sp-hn-e13',
      ['bleibe', 'es', 'ich', 'Wenn', 'regnet,', 'zu', 'Hause'],
      ['Wenn', 'es', 'regnet,', 'bleibe', 'ich', 'zu', 'Hause'],
      ['Nebensatz first, then verb – subject (verb, comma, verb).', 'Nebensatz d’abord, puis verbe – sujet (verbe, virgule, verbe).'],
    ),
    fb(
      'sp-hn-e14',
      ['Weil ich müde bin, ___ ich früh ins Bett. (gehen)', 'Weil ich müde bin, ___ ich früh ins Bett. (gehen)'],
      'gehe',
      ['Verb – comma – verb: right after the comma comes the conjugated main verb.', 'Verbe – virgule – verbe : juste après la virgule vient le verbe principal conjugué.'],
    ),
    wo(
      'sp-hn-e15',
      ['Ich', 'müde,', 'bin', 'gehe', 'deshalb', 'ich', 'früh', 'schlafen'],
      ['Ich', 'bin', 'müde,', 'deshalb', 'gehe', 'ich', 'früh', 'schlafen'],
      ['Deshalb takes position 1, then the verb, then the subject.', 'Deshalb prend la position 1, puis le verbe, puis le sujet.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'More conjunctions for the Nebensatz', 'D’autres conjonctions pour le Nebensatz',
      'obwohl, damit, als, wenn, während, bevor, nachdem — all send the verb to the end.', 'obwohl, damit, als, wenn, während, bevor, nachdem — toutes envoient le verbe à la fin.',
    ),
    grammar(
      'sp-hn-conjunctions',
      ['The most useful Nebensatz conjunctions', 'Les conjonctions de Nebensatz les plus utiles'],
      [
        `Every conjunction below works exactly like **weil**: comma, subject, … , **verb last**.

**Reason and contrast**
- **weil** — because: Ich lerne, weil ich Deutsch **brauche**.
- **obwohl** — although: Er geht, obwohl er müde **ist**.
- **damit** — so that (purpose): Ich spreche langsam, damit du mich **verstehst**.

**Content (what someone thinks / says / asks)**
- **dass** — that: Ich glaube, dass es **stimmt**.
- **ob** — whether / if: Ich weiß nicht, ob er **kommt**.

**Condition and time**
- **wenn** — if / whenever: Wenn du willst, **komme** ich mit.
- **als** — when (one single event in the **past**): Als ich klein **war**, wohnte ich in Paris.
- **während** — while: Ich höre Musik, während ich **koche**.
- **bevor** — before: Ruf mich an, bevor du **kommst**.
- **nachdem** — after: Nachdem ich gegessen **habe**, gehe ich spazieren.
- **bis** — until: Ich warte, bis du **kommst**.

**wenn vs als**
- **als** = a **single** event in the **past** (*Als ich 10 war…*).
- **wenn** = **present or future**, or something that happened **again and again** in the past (*Wenn ich Zeit hatte, ging ich schwimmen.* = whenever).

**wenn vs ob**
- **ob** = indirect yes/no question: Ich weiß nicht, **ob** er kommt.
- **wenn** = condition: **wenn** er kommt, sage ich Bescheid.`,
        `Toutes les conjonctions ci-dessous fonctionnent exactement comme **weil** : virgule, sujet, … , **verbe en dernier**.

**Raison et opposition**
- **weil** — parce que : Ich lerne, weil ich Deutsch **brauche**.
- **obwohl** — bien que : Er geht, obwohl er müde **ist**.
- **damit** — pour que (but) : Ich spreche langsam, damit du mich **verstehst**.

**Contenu (ce que l’on pense / dit / demande)**
- **dass** — que : Ich glaube, dass es **stimmt**.
- **ob** — si (interrogatif) : Ich weiß nicht, ob er **kommt**.

**Condition et temps**
- **wenn** — si / quand, chaque fois que : Wenn du willst, **komme** ich mit.
- **als** — quand (un **seul** événement au **passé**) : Als ich klein **war**, wohnte ich in Paris.
- **während** — pendant que : Ich höre Musik, während ich **koche**.
- **bevor** — avant que : Ruf mich an, bevor du **kommst**.
- **nachdem** — après que : Nachdem ich gegessen **habe**, gehe ich spazieren.
- **bis** — jusqu’à ce que : Ich warte, bis du **kommst**.

**wenn vs als**
- **als** = un événement **unique** au **passé** (*Als ich 10 war…*).
- **wenn** = **présent ou futur**, ou quelque chose qui s’est **répété** au passé (*Wenn ich Zeit hatte, ging ich schwimmen.* = chaque fois que).

**wenn vs ob**
- **ob** = question indirecte oui/non : Ich weiß nicht, **ob** er kommt.
- **wenn** = condition : **wenn** er kommt, sage ich Bescheid.`,
      ],
      [
        ['Er geht zur Arbeit, obwohl er krank ist.', 'He goes to work although he is ill.', 'Il va travailler bien qu’il soit malade.'],
        ['Als ich klein war, wohnte ich in Paris.', 'When I was little, I lived in Paris.', 'Quand j’étais petit, j’habitais à Paris.'],
        ['Nachdem ich gegessen habe, gehe ich spazieren.', 'After I have eaten, I go for a walk.', 'Après avoir mangé, je vais me promener.'],
        ['Ich spreche langsam, damit du mich verstehst.', 'I speak slowly so that you understand me.', 'Je parle lentement pour que tu me comprennes.'],
      ],
      'satzklammer',
    ),
    vocab('sp-haupt-nebensaetze-obwohl', 'obwohl', 'although', 'bien que', null, 'ob-WOHL', 'op-VOHL', ['Er bleibt, obwohl es spät ist.', 'He stays although it is late.', 'Il reste bien qu’il soit tard.']),
    vocab('sp-haupt-nebensaetze-damit', 'damit', 'so that', 'pour que', null, 'da-MIT', 'dah-MIT', ['Ich schreibe es auf, damit ich es nicht vergesse.', 'I write it down so that I do not forget it.', 'Je le note pour ne pas l’oublier.']),
    vocab('sp-haupt-nebensaetze-waehrend', 'während', 'while', 'pendant que', null, 'WÄH-rend', 'VAY-rent', ['Ich höre Musik, während ich koche.', 'I listen to music while I cook.', 'J’écoute de la musique pendant que je cuisine.']),
    vocab('sp-haupt-nebensaetze-nachdem', 'nachdem', 'after', 'après que', null, 'nach-DEM', 'nahkh-DAYM', ['Nachdem ich gegessen habe, gehe ich spazieren.', 'After I have eaten, I go for a walk.', 'Après avoir mangé, je vais me promener.']),
    mc(
      'sp-hn-e16',
      ['"Er geht zur Arbeit, ___ er krank ist." (although)', '« Er geht zur Arbeit, ___ er krank ist. » (bien que)'],
      ['obwohl', 'weil', 'damit'], ['obwohl', 'weil', 'damit'], 0,
      ['Going to work while ill is unexpected: obwohl.', 'Aller travailler malade est inattendu : obwohl.'],
    ),
    mc(
      'sp-hn-e17',
      ['"Ich spreche langsam, ___ du mich verstehst." (so that)', '« Ich spreche langsam, ___ du mich verstehst. » (pour que)'],
      ['damit', 'dass', 'ob'], ['damit', 'dass', 'ob'], 0,
      ['A purpose with a different subject: damit.', 'Un but avec un sujet différent : damit.'],
    ),
    mc(
      'sp-hn-e18',
      ['"___ ich klein war, wohnte ich in Paris." (a single time in the past)', '« ___ ich klein war, wohnte ich in Paris. » (une seule fois au passé)'],
      ['Als', 'Wenn', 'Ob'], ['Als', 'Wenn', 'Ob'], 0,
      ['als = one specific time in the past.', 'als = un moment précis du passé.'],
    ),
    match(
      'sp-hn-e19',
      [
        ['weil', 'because', 'parce que'],
        ['obwohl', 'although', 'bien que'],
        ['damit', 'so that', 'pour que'],
        ['während', 'while', 'pendant que'],
        ['bevor', 'before', 'avant que'],
        ['nachdem', 'after', 'après que'],
      ],
      ['Match each conjunction with its meaning.', 'Associe chaque conjonction à son sens.'],
    ),
    wo(
      'sp-hn-e20',
      ['ich', 'koche', 'während', 'Ich', 'Musik,', 'höre'],
      ['Ich', 'höre', 'Musik,', 'während', 'ich', 'koche'],
      ['Hauptsatz first, then ", während ich … verb".', 'Hauptsatz d’abord, puis « , während ich … verbe ».'],
    ),

    // ── Chapter 6 ────────────────────────────────────────────────
    chapter(
      'When to use what', 'Quand utiliser quoi',
      'Three questions, a cheat-sheet and the mistakes to avoid.', 'Trois questions, un aide-mémoire et les erreurs à éviter.',
    ),
    grammar(
      'sp-hn-choose',
      ['Three questions before you write', 'Trois questions avant d’écrire'],
      [
        `Before you build a sentence, ask yourself:

**1. What do I want to say?** — reason, result, contrast, condition, time, purpose, content?

**2. Can the part stand alone?**
- Yes → **Hauptsatz** → verb in **position 2**.
- No, it starts with weil / dass / wenn / ob… → **Nebensatz** → verb at the **end**.

**3. Which word do I use?** Use this cheat-sheet:

**Position 0** (nothing changes): und · aber · oder · denn · sondern
**Position 1** (verb right after): deshalb · deswegen · darum · trotzdem · dann · außerdem
**Verb at the end:** weil · dass · wenn · ob · obwohl · damit · als · während · bevor · nachdem · bis

**By meaning**

- **reason:** denn (Hauptsatz) · weil (Nebensatz)
- **result:** deshalb, darum (Hauptsatz)
- **contrast:** aber, trotzdem (Hauptsatz) · obwohl (Nebensatz)
- **condition:** dann (Hauptsatz) · wenn (Nebensatz)
- **purpose:** damit (Nebensatz)
- **content:** dass, ob (Nebensatz)

**Final checks**
- Is there a **comma** before the Nebensatz (and after it, if it comes first)?
- Is the **conjugated verb last** in the Nebensatz?
- Did I put **verb – comma – verb** when the Nebensatz comes first?
- *dass* (that) is a conjunction; *das* (the / this) is an article or pronoun — two different words.
- Everyday speech often drops the rule (*weil ich habe keine Zeit*), but written German and exams **require verb last**.`,
        `Avant de construire une phrase, pose-toi ces questions :

**1. Que veux-je dire ?** — raison, résultat, opposition, condition, temps, but, contenu ?

**2. La partie peut-elle exister seule ?**
- Oui → **Hauptsatz** → verbe en **position 2**.
- Non, elle commence par weil / dass / wenn / ob… → **Nebensatz** → verbe à la **fin**.

**3. Quel mot choisir ?** Utilise cet aide-mémoire :

**Position 0** (rien ne change) : und · aber · oder · denn · sondern
**Position 1** (verbe juste après) : deshalb · deswegen · darum · trotzdem · dann · außerdem
**Verbe à la fin :** weil · dass · wenn · ob · obwohl · damit · als · während · bevor · nachdem · bis

**Selon le sens**

- **raison :** denn (Hauptsatz) · weil (Nebensatz)
- **résultat :** deshalb, darum (Hauptsatz)
- **opposition :** aber, trotzdem (Hauptsatz) · obwohl (Nebensatz)
- **condition :** dann (Hauptsatz) · wenn (Nebensatz)
- **but :** damit (Nebensatz)
- **contenu :** dass, ob (Nebensatz)

**Dernières vérifications**
- Y a-t-il une **virgule** avant le Nebensatz (et après lui, s’il est en tête) ?
- Le **verbe conjugué est-il en dernier** dans le Nebensatz ?
- Ai-je mis **verbe – virgule – verbe** quand le Nebensatz est en tête ?
- *dass* (que) est une conjonction ; *das* (le / ce) est un article ou un pronom — deux mots différents.
- À l’oral on abandonne souvent la règle (*weil ich habe keine Zeit*), mais l’allemand écrit et les examens **exigent le verbe à la fin**.`,
      ],
      [
        ['Ich bleibe zu Hause, weil ich krank bin.', 'I stay at home because I am ill.', 'Je reste à la maison parce que je suis malade.'],
        ['Ich bin krank, deshalb bleibe ich zu Hause.', 'I am ill, so I stay at home.', 'Je suis malade, donc je reste à la maison.'],
        ['Ich weiß, dass das stimmt.', 'I know that this is true.', 'Je sais que c’est vrai.'],
      ],
    ),
    mc(
      'sp-hn-e21',
      ['"Ich weiß nicht, ___ er morgen kommt." (whether)', '« Ich weiß nicht, ___ er morgen kommt. » (si — interrogatif)'],
      ['ob', 'wenn', 'dass'], ['ob', 'wenn', 'dass'], 0,
      ['ob = whether (indirect yes/no question).', 'ob = si (question indirecte oui/non).'],
    ),
    mc(
      'sp-hn-e22',
      ['Which connector starts a Hauptsatz with the verb right after it?', 'Quel connecteur ouvre un Hauptsatz avec le verbe juste après ?'],
      ['weil', 'deshalb', 'obwohl'], ['weil', 'deshalb', 'obwohl'], 1,
      ['deshalb is an adverb (position 1). weil and obwohl send the verb to the end.', 'deshalb est un adverbe (position 1). weil et obwohl envoient le verbe à la fin.'],
    ),

    wrapup(
      `**Hauptsatz** — can stand alone · verb in **position 2**: *Ich lerne Deutsch.*

**Nebensatz** — cannot stand alone · starts with a conjunction · verb **at the end** · comma before: *…, weil ich in Berlin arbeite.*

**Position 0** (no change): und, aber, oder, denn, sondern.

**Position 1** (verb right after): deshalb, deswegen, darum, trotzdem, dann.

**Verb at the end:** weil, dass, wenn, ob, obwohl, damit, als, während, bevor, nachdem, bis.

**weil vs deshalb:** weil + reason + **verb last** · deshalb + **verb** + subject (result).

**Nebensatz first:** *Weil ich müde bin, gehe ich schlafen.* — verb, comma, verb.

**Traps:** no verb-second after weil in correct German · als (once in the past) ≠ wenn (whenever / future) · ob ≠ wenn · dass ≠ das.`,
      `**Hauptsatz** — peut exister seul · verbe en **position 2** : *Ich lerne Deutsch.*

**Nebensatz** — ne peut pas exister seul · commence par une conjonction · verbe **à la fin** · virgule avant : *…, weil ich in Berlin arbeite.*

**Position 0** (aucun changement) : und, aber, oder, denn, sondern.

**Position 1** (verbe juste après) : deshalb, deswegen, darum, trotzdem, dann.

**Verbe à la fin :** weil, dass, wenn, ob, obwohl, damit, als, während, bevor, nachdem, bis.

**weil vs deshalb :** weil + raison + **verbe en dernier** · deshalb + **verbe** + sujet (résultat).

**Nebensatz en tête :** *Weil ich müde bin, gehe ich schlafen.* — verbe, virgule, verbe.

**Pièges :** pas de verbe en 2e position après weil en allemand correct · als (une fois au passé) ≠ wenn (chaque fois / futur) · ob ≠ wenn · dass ≠ das.`,
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Hauptsatz & Nebensatz', 'Quiz final : Hauptsatz & Nebensatz'),
    mc(
      'sp-hn-q1',
      ['Which of these is a Nebensatz?', 'Lequel est un Nebensatz ?'],
      ['Ich bleibe zu Hause.', 'weil ich krank bin', 'Heute gehe ich ins Kino.'],
      ['Ich bleibe zu Hause.', 'weil ich krank bin', 'Heute gehe ich ins Kino.'], 1,
      ['It starts with a conjunction and cannot stand alone.', 'Il commence par une conjonction et ne peut pas exister seul.'],
    ),
    fb(
      'sp-hn-q2',
      ['Ich lerne Deutsch, weil ich in Berlin ___. (arbeiten)', 'Ich lerne Deutsch, weil ich in Berlin ___. (arbeiten)'],
      'arbeite',
      ['Verb at the very end after weil.', 'Verbe tout à la fin après weil.'],
    ),
    wo(
      'sp-hn-q3',
      ['hat', 'Ich', 'dass', 'glaube,', 'recht', 'er'],
      ['Ich', 'glaube,', 'dass', 'er', 'recht', 'hat'],
      ['dass sends the verb to the end.', 'dass envoie le verbe à la fin.'],
    ),
    wo(
      'sp-hn-q4',
      ['ich', 'Wenn', 'gehe', 'Zeit', 'habe,', 'ins', 'ich', 'Kino'],
      ['Wenn', 'ich', 'Zeit', 'habe,', 'gehe', 'ich', 'ins', 'Kino'],
      ['Verb – comma – verb after a wenn-clause.', 'Verbe – virgule – verbe après une subordonnée en wenn.'],
    ),
    mc(
      'sp-hn-q5',
      ['Es regnet. ___ nehme ich einen Schirm mit.', 'Es regnet. ___ nehme ich einen Schirm mit.'],
      ['Deshalb', 'Weil', 'Dass'], ['Deshalb', 'Weil', 'Dass'], 0,
      ['The verb follows immediately: deshalb (inversion).', 'Le verbe suit immédiatement : deshalb (inversion).'],
    ),
    mc(
      'sp-hn-q6',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich bin müde, deshalb gehe ich ins Bett.', 'Ich bin müde, deshalb ich gehe ins Bett.', 'Ich bin müde, deshalb ich ins Bett gehe.'],
      ['Ich bin müde, deshalb gehe ich ins Bett.', 'Ich bin müde, deshalb ich gehe ins Bett.', 'Ich bin müde, deshalb ich ins Bett gehe.'], 0,
      ['After deshalb: verb first, then the subject.', 'Après deshalb : verbe d’abord, puis le sujet.'],
    ),
    mc(
      'sp-hn-q7',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich gehe ins Bett, weil ich müde bin.', 'Ich gehe ins Bett, weil ich bin müde.', 'Ich gehe ins Bett, weil bin ich müde.'],
      ['Ich gehe ins Bett, weil ich müde bin.', 'Ich gehe ins Bett, weil ich bin müde.', 'Ich gehe ins Bett, weil bin ich müde.'], 0,
      ['Verb last after weil.', 'Verbe en dernier après weil.'],
    ),
    fb(
      'sp-hn-q8',
      ['Ich weiß nicht, ___ er kommt. (whether)', 'Ich weiß nicht, ___ er kommt. (si — interrogatif)'],
      'ob',
      ['Indirect yes/no question: ob.', 'Question indirecte oui/non : ob.'],
    ),
    match(
      'sp-hn-q9',
      [
        ['denn', 'because (verb stays 2nd)', 'car (le verbe reste en 2e)'],
        ['weil', 'because (verb last)', 'parce que (verbe en dernier)'],
        ['deshalb', 'therefore (verb right after)', 'c’est pourquoi (verbe juste après)'],
        ['obwohl', 'although', 'bien que'],
        ['damit', 'so that', 'pour que'],
      ],
      ['Match each connector with its meaning.', 'Associe chaque connecteur à son sens.'],
    ),
    mc(
      'sp-hn-q10',
      ['Weil ich müde bin, ___ ich schlafen.', 'Weil ich müde bin, ___ ich schlafen.'],
      ['gehe', 'ich gehe', 'gehen'], ['gehe', 'ich gehe', 'gehen'], 0,
      ['Verb – comma – verb: the main verb comes first after the comma.', 'Verbe – virgule – verbe : le verbe principal vient en premier après la virgule.'],
    ),
    mc(
      'sp-hn-q11',
      ['"___ ich 10 Jahre alt war, zog meine Familie um." (one event in the past)', '« ___ ich 10 Jahre alt war, zog meine Familie um. » (un événement passé)'],
      ['Als', 'Wenn', 'Ob'], ['Als', 'Wenn', 'Ob'], 0,
      ['als = single past event.', 'als = un événement unique au passé.'],
    ),
    mc(
      'sp-hn-q12',
      ['"Ich lerne viel, ___ ich die Prüfung bestehe." (so that)', '« Ich lerne viel, ___ ich die Prüfung bestehe. » (pour que)'],
      ['damit', 'weil', 'obwohl'], ['damit', 'weil', 'obwohl'], 0,
      ['damit = purpose (so that).', 'damit = but (pour que).'],
    ),
    lc(
      'sp-hn-q13',
      ['Listen. Why is the speaker staying at home?', 'Écoute. Pourquoi la personne reste-t-elle à la maison ?'],
      'Ich bleibe zu Hause, weil ich krank bin.',
      ['She is ill', 'It is raining', 'She has no money'],
      ['Elle est malade', 'Il pleut', 'Elle n’a pas d’argent'], 0,
      ['"krank" = ill.', '« krank » = malade.'],
    ),
    lc(
      'sp-hn-q14',
      ['Listen. What does the speaker do despite the weather?', 'Écoute. Que fait la personne malgré le temps ?'],
      'Es regnet, trotzdem gehen wir spazieren.',
      ['Go for a walk', 'Stay home', 'Go shopping'],
      ['Se promener', 'Rester à la maison', 'Faire les courses'], 0,
      ['"spazieren gehen" = go for a walk.', '« spazieren gehen » = se promener.'],
    ),
  ],
});

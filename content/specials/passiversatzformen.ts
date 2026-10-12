import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, lc, wrapup, quiz } from './kit';

export const passiversatzformen = defineSpecial({
  slug: 'passiversatzformen',
  number: 38,
  group: 'verbs',
  levels: ['B1', 'B2'],
  related: ['b2-l6', 'b2-l19', 'b1-l5'],
  title: ['Passiversatzformen', 'Alternatives to the passive', 'Les équivalents du passif'],
  theme: [
    'Saying “can be done” and “must be done” without werden: man, sich lassen, sein + zu, -bar/-lich, sich + verb',
    'Dire « peut être fait » et « doit être fait » sans werden : man, sich lassen, sein + zu, -bar/-lich, sich + verbe',
  ],
  goals: [
    'Recognise five common passive substitutes',
    'Choose between possibility and necessity',
    'Rewrite passive sentences actively',
    'Vary your style in formal texts',
  ],
  goalsFr: [
    'Reconnaître cinq équivalents courants du passif',
    'Choisir entre possibilité et nécessité',
    'Réécrire des phrases passives de façon active',
    'Varier ton style dans les textes formels',
  ],
  steps: [
    intro(
      'Das lässt sich lösen', 'Cela peut se résoudre',
      'A technician says “Das lässt sich reparieren.” There is no “werden” and no passive participle, and yet the meaning is passive: “It can be repaired.” German has many ways to avoid the passive. They are very common in manuals, reports and exams.',
      'Un technicien dit « Das lässt sich reparieren. » Pas de « werden », pas de participe passif, et pourtant le sens est passif : « Cela peut être réparé. » L’allemand a de nombreuses façons d’éviter le passif. Elles sont très courantes dans les notices, rapports et examens.',
      [
        'Use man, sich lassen, sein + zu, -bar, sich + verb',
        'Express possibility and necessity',
        'Rewrite a passive sentence',
        'Write more elegantly',
      ],
      [
        'Employer man, sich lassen, sein + zu, -bar, sich + verbe',
        'Exprimer possibilité et nécessité',
        'Réécrire une phrase passive',
        'Écrire plus élégamment',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'man and sich + verb', 'man et sich + verbe',
      'The simplest ways to hide the agent.', 'Les manières les plus simples de cacher l’agent.',
    ),
    vocab('sp-passiversatzformen-reparieren', 'reparieren', 'to repair', 'réparer', null, 're-pa-RIE-ren', 're-pah-REE-ren', ['Man kann den Fernseher reparieren.', 'The TV can be repaired.', 'La télé peut être réparée.']),
    vocab('sp-passiversatzformen-verkaufen', 'sich verkaufen', 'to sell (well)', 'se vendre', null, 'zikh fer-KAU-fen', 'zikh fer-KOW-fen', ['Das Buch verkauft sich gut.', 'The book sells well.', 'Le livre se vend bien.']),
    grammar(
      'sp-pe-man',
      ['man and sich + verb', 'man et sich + verbe'],
      [
        '- **man + active verb** — no agent: *Das kann repariert werden.* = ***Man** kann das reparieren.*\n- **sich + verb** — things that “do themselves”: *Das Buch **verkauft sich** gut.* · *Das Fenster **öffnet sich** automatisch.* · *Die Tür **schließt sich**.*\n\nBoth express a **general** statement without naming who acts. *man* is more neutral; *sich + verb* describes **how something behaves**.',
        '- **man + verbe actif** — sans agent : *Das kann repariert werden.* = ***Man** kann das reparieren.*\n- **sich + verbe** — choses qui « se font toutes seules » : *Das Buch **verkauft sich** gut.* · *Das Fenster **öffnet sich** automatisch.* · *Die Tür **schließt sich**.*\n\nLes deux expriment une affirmation **générale** sans nommer qui agit. *man* est plus neutre ; *sich + verbe* décrit **le comportement** d’une chose.',
      ],
      [
        ['Hier spricht man Deutsch.', 'German is spoken here.', 'Ici on parle allemand.'],
        ['Das Fenster öffnet sich automatisch.', 'The window opens automatically.', 'La fenêtre s’ouvre automatiquement.'],
      ],
    ),
    fb(
      'sp-pe-e1',
      ['Das Buch ___ sich gut. (verkaufen)', 'Das Buch ___ sich gut. (verkaufen)'],
      'verkauft',
      ['er/sie/es → verkauft', 'er/sie/es → verkauft'],
    ),
    mc(
      'sp-pe-e2',
      ['"Hier spricht man Deutsch" =', '« Hier spricht man Deutsch » ='],
      ['German is spoken here', 'He speaks German', 'I speak German'], ['On parle allemand ici', 'Il parle allemand', 'Je parle allemand'], 0,
      ['man = people in general.', 'man = les gens en général.'],
    ),
    wo(
      'sp-pe-e3',
      ['sich', 'öffnet', 'Das Fenster', 'automatisch'],
      ['Das Fenster', 'öffnet', 'sich', 'automatisch'],
      ['Subject – verb – sich – adverb.', 'Sujet – verbe – sich – adverbe.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'sich lassen: can be done', 'sich lassen : peut être fait',
      'The most common substitute for können + passive.', 'Le remplacement le plus courant de können + passif.',
    ),
    vocab('sp-passiversatzformen-beweisen', 'beweisen', 'to prove', 'prouver', null, 'be-WEI-sen', 'be-VY-zen', ['Das lässt sich leicht beweisen.', 'That can easily be proved.', 'Cela se prouve facilement.']),
    vocab('sp-passiversatzformen-loesen', 'lösen', 'to solve', 'résoudre', null, 'LÖ-sen', 'LOE-zen', ['Das Problem lässt sich schnell lösen.', 'The problem can be solved quickly.', 'Le problème peut se résoudre vite.']),
    grammar(
      'sp-pe-lassen',
      ['sich lassen + Infinitiv', 'sich lassen + infinitif'],
      [
        '**sich lassen + infinitive** = **can be …** (possibility):\n\n- *Das **kann** repariert **werden**.* → *Das **lässt sich** reparieren.*\n- *Das **konnte** man leicht beweisen.* → *Das **ließ sich** leicht beweisen.*\n\n**Negative:** *Das lässt sich **nicht** machen.* = *That cannot be done.*\n\n**Word order:** *Das Problem **lässt sich** schnell **lösen**.* — **lässt sich** in position 2, the **infinitive at the end**.\n\nThe **verb** conjugates: *lassen* → *ich lasse mich, es lässt sich, es ließ sich*.',
        '**sich lassen + infinitif** = **peut être …** (possibilité) :\n\n- *Das **kann** repariert **werden**.* → *Das **lässt sich** reparieren.*\n- *Das **konnte** man leicht beweisen.* → *Das **ließ sich** leicht beweisen.*\n\n**Négation :** *Das lässt sich **nicht** machen.* = *Cela ne peut pas se faire.*\n\n**Ordre des mots :** *Das Problem **lässt sich** schnell **lösen**.* — **lässt sich** en position 2, **infinitif à la fin**.\n\nC’est le **verbe** qui se conjugue : *lassen* → *ich lasse mich, es lässt sich, es ließ sich*.',
      ],
      [
        ['Der Fernseher lässt sich nicht mehr reparieren.', 'The TV can no longer be repaired.', 'La télé ne peut plus être réparée.'],
        ['Das lässt sich leicht beweisen.', 'That can easily be proved.', 'Cela se prouve facilement.'],
      ],
    ),
    fb(
      'sp-pe-e4',
      ['Das Problem ___ sich lösen. (lassen — er/sie/es)', 'Das Problem ___ sich lösen. (lassen — er/sie/es)'],
      'lässt',
      ['lassen → lässt', 'lassen → lässt'],
    ),
    mc(
      'sp-pe-e5',
      ['Rewrite: "Das kann repariert werden."', 'Réécris : « Das kann repariert werden. »'],
      ['Das lässt sich reparieren.', 'Das repariert sich muss.', 'Das ist reparieren zu.'], ['Das lässt sich reparieren.', 'Das repariert sich muss.', 'Das ist reparieren zu.'], 0,
      ['können + passive = sich lassen.', 'können + passif = sich lassen.'],
    ),
    lc(
      'sp-pe-e6',
      ['Listen. Can the TV be repaired?', 'Écoute. La télé peut-elle être réparée ?'],
      'Der Fernseher lässt sich leider nicht mehr reparieren.',
      ['No', 'Yes', 'Tomorrow'], ['Non', 'Oui', 'Demain'], 0,
      ['lässt sich nicht = cannot be.', 'lässt sich nicht = ne peut pas être.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'sein + zu: can or must', 'sein + zu : peut ou doit',
      'Possibility and necessity with one construction.', 'Possibilité et nécessité avec une seule construction.',
    ),
    vocab('sp-passiversatzformen-erledigen', 'erledigen', 'to take care of', 'régler', null, 'er-LE-di-gen', 'er-LAY-di-gen', ['Das ist bis morgen zu erledigen.', 'That has to be done by tomorrow.', 'Cela doit être réglé d’ici demain.']),
    vocab('sp-passiversatzformen-erkennen', 'erkennen', 'to recognise', 'reconnaître', null, 'er-KEN-nen', 'er-KEN-nen', ['Der Fehler ist leicht zu erkennen.', 'The mistake is easy to spot.', 'L’erreur est facile à repérer.']),
    grammar(
      'sp-pe-zu',
      ['sein + zu + Infinitiv', 'sein + zu + infinitif'],
      [
        '**sein + zu + infinitive** = **can be …** or **must be …** (the context decides):\n\n- **Possibility:** *Der Fehler **ist** leicht **zu erkennen**.* = *can be spotted*\n- **Necessity:** *Das **ist** bis morgen **zu erledigen**.* = *must be done*\n\n**Separable verbs:** *zu* goes **inside**: *Das Formular **ist auszufüllen**.*\n\n**Negative:** *nicht zu* often means **cannot**: *Das **ist nicht zu glauben**.* = *It is unbelievable.*\n\nThis is the **most common** passive substitute in **instructions and rules**: *Die Regeln **sind** zu **beachten**.*',
        '**sein + zu + infinitif** = **peut être …** ou **doit être …** (le contexte décide) :\n\n- **Possibilité :** *Der Fehler **ist** leicht **zu erkennen**.* = peut être repéré\n- **Nécessité :** *Das **ist** bis morgen **zu erledigen**.* = doit être fait\n\n**Verbes séparables :** *zu* s’intercale : *Das Formular **ist auszufüllen**.*\n\n**Négation :** *nicht zu* signifie souvent **ne peut pas** : *Das **ist nicht zu glauben**.* = C’est incroyable.\n\nC’est l’équivalent du passif le **plus courant** dans les **consignes et règlements** : *Die Regeln **sind** zu **beachten**.*',
      ],
      [
        ['Die Unterlagen sind bis Freitag einzureichen.', 'The documents must be submitted by Friday.', 'Les documents doivent être remis d’ici vendredi.'],
        ['Das ist nicht zu glauben!', 'That is unbelievable!', 'C’est incroyable !'],
      ],
    ),
    fb(
      'sp-pe-e7',
      ['Das Formular ist bis Montag ___ . (auszufüllen)', 'Das Formular ist bis Montag ___ . (auszufüllen)'],
      'auszufüllen',
      ['separable verb: zu inside', 'verbe séparable : zu à l’intérieur'],
    ),
    mc(
      'sp-pe-e8',
      ['Which sentence expresses NECESSITY?', 'Quelle phrase exprime la NÉCESSITÉ ?'],
      ['Die Aufgabe ist bis morgen zu erledigen.', 'Die Aufgabe lässt sich erledigen.', 'Die Aufgabe ist erledigbar.'], ['Die Aufgabe ist bis morgen zu erledigen.', 'Die Aufgabe lässt sich erledigen.', 'Die Aufgabe ist erledigbar.'], 0,
      ['Deadline → must be done.', 'Échéance → doit être fait.'],
    ),
    wo(
      'sp-pe-e9',
      ['leicht', 'ist', 'Der Fehler', 'zu erkennen'],
      ['Der Fehler', 'ist', 'leicht', 'zu erkennen'],
      ['sein in position 2; zu + infinitive last.', 'sein en position 2 ; zu + infinitif à la fin.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      '-bar and -lich adjectives', 'Adjectifs en -bar et -lich',
      'One word instead of a whole passive.', 'Un seul mot au lieu d’un passif entier.',
    ),
    vocab('sp-passiversatzformen-erreichbar', 'erreichbar', 'reachable', 'joignable', null, 'er-REICH-bar', 'er-RYKH-bar', ['Ich bin telefonisch erreichbar.', 'I can be reached by phone.', 'Je suis joignable par téléphone.']),
    vocab('sp-passiversatzformen-verstaendlich', 'verständlich', 'understandable', 'compréhensible', null, 'ver-STÄND-lich', 'fer-SHTEND-likh', ['Der Text ist gut verständlich.', 'The text is easy to understand.', 'Le texte est facile à comprendre.']),
    grammar(
      'sp-pe-bar',
      ['-bar, -lich, -fähig', '-bar, -lich, -fähig'],
      [
        '**Verb stem + -bar / -lich** = **“can be …”**:\n\n| Verb | Adjective | Meaning |\n|---|---|---|\n| lösen | **lösbar** | solvable |\n| erreichen | **erreichbar** | reachable |\n| machen | **machbar** | feasible |\n| verstehen | **verständlich** | understandable |\n| essen | **essbar** | edible |\n\nNegation with **un-**: *unlösbar, unerreichbar, unverständlich, unbezahlbar.*\n\nThe adjective replaces **“kann … werden”**: *Das Problem ist **lösbar**.* = *Das Problem kann gelöst werden.*',
        '**Radical du verbe + -bar / -lich** = **« qui peut être … »** :\n\n| Verbe | Adjectif | Sens |\n|---|---|---|\n| lösen | **lösbar** | soluble |\n| erreichen | **erreichbar** | joignable |\n| machen | **machbar** | faisable |\n| verstehen | **verständlich** | compréhensible |\n| essen | **essbar** | comestible |\n\nNégation avec **un-** : *unlösbar, unerreichbar, unverständlich, unbezahlbar.*\n\nL’adjectif remplace **« kann … werden »** : *Das Problem ist **lösbar**.* = *Das Problem kann gelöst werden.*',
      ],
      [
        ['Das Projekt ist machbar.', 'The project is feasible.', 'Le projet est faisable.'],
        ['Die Aufgabe ist unlösbar.', 'The task is unsolvable.', 'La tâche est insoluble.'],
      ],
    ),
    fb(
      'sp-pe-e10',
      ['lösen → ___ (solvable)', 'lösen → ___ (soluble)'],
      'lösbar',
      ['stem + -bar', 'radical + -bar'],
    ),
    mc(
      'sp-pe-e11',
      ['Which is the opposite of "erreichbar"?', 'Quel est le contraire de « erreichbar » ?'],
      ['unerreichbar', 'erreichlos', 'nichterreichbar'], ['unerreichbar', 'erreichlos', 'nichterreichbar'], 0,
      ['un- negates -bar adjectives.', 'un- nie les adjectifs en -bar.'],
    ),

    wrapup(
      '**Five ways** to avoid *werden + Partizip II*:\n\n1. **man** + active: *Man kann das reparieren.*\n2. **sich lassen + Infinitiv** (can): *Das lässt sich lösen.*\n3. **sein + zu + Infinitiv** (can/must): *Das ist zu erledigen.*\n4. **-bar / -lich**: *lösbar, verständlich.*\n5. **sich + Verb**: *Das Buch verkauft sich gut.*',
      '**Cinq façons** d’éviter *werden + Partizip II* :\n\n1. **man** + actif : *Man kann das reparieren.*\n2. **sich lassen + infinitif** (peut) : *Das lässt sich lösen.*\n3. **sein + zu + infinitif** (peut/doit) : *Das ist zu erledigen.*\n4. **-bar / -lich** : *lösbar, verständlich.*\n5. **sich + verbe** : *Das Buch verkauft sich gut.*',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Alternatives to the passive', 'Quiz final : équivalents du passif'),
    match(
      'sp-pe-q1',
      [
        ['lösbar', 'solvable', 'soluble'],
        ['machbar', 'feasible', 'faisable'],
        ['erreichbar', 'reachable', 'joignable'],
        ['verständlich', 'understandable', 'compréhensible'],
      ],
      ['Match each adjective with its meaning.', 'Associe chaque adjectif à sa signification.'],
    ),
    fb(
      'sp-pe-q2',
      ['Das Problem ___ sich schnell lösen. (lassen)', 'Das Problem ___ sich schnell lösen. (lassen)'],
      'lässt',
      ['lässt sich', 'lässt sich'],
    ),
    fb(
      'sp-pe-q3',
      ['Der Fehler ist leicht ___ erkennen. (zu)', 'Der Fehler ist leicht ___ erkennen. (zu)'],
      'zu',
      ['sein + zu', 'sein + zu'],
    ),
    mc(
      'sp-pe-q4',
      ['"Das ist nicht zu glauben" means …', '« Das ist nicht zu glauben » signifie …'],
      ['That is unbelievable', 'That is not allowed', 'That is forbidden'], ['C’est incroyable', 'Ce n’est pas permis', 'C’est interdit'], 0,
      ['nicht zu + infinitive = cannot be.', 'nicht zu + infinitif = ne peut pas être.'],
    ),
    mc(
      'sp-pe-q5',
      ['Rewrite: "Das kann gelöst werden."', 'Réécris : « Das kann gelöst werden. »'],
      ['Das lässt sich lösen.', 'Das löst sich muss.', 'Das ist lösen zu.'], ['Das lässt sich lösen.', 'Das löst sich muss.', 'Das ist lösen zu.'], 0,
      ['sich lassen = can be done.', 'sich lassen = peut être fait.'],
    ),
    mc(
      'sp-pe-q6',
      ['Which expresses NECESSITY?', 'Laquelle exprime la NÉCESSITÉ ?'],
      ['Das ist bis morgen zu erledigen.', 'Das lässt sich erledigen.', 'Das ist erledigbar.'], ['Das ist bis morgen zu erledigen.', 'Das lässt sich erledigen.', 'Das ist erledigbar.'], 0,
      ['Deadline → must.', 'Échéance → doit.'],
    ),
    wo(
      'sp-pe-q7',
      ['sich', 'Das Buch', 'verkauft', 'gut'],
      ['Das Buch', 'verkauft', 'sich', 'gut'],
      ['Subject – verb – sich – adverb.', 'Sujet – verbe – sich – adverbe.'],
    ),
    wo(
      'sp-pe-q8',
      ['lässt', 'Das', 'sich', 'machen', 'nicht'],
      ['Das', 'lässt', 'sich', 'nicht', 'machen'],
      ['nicht before the infinitive.', 'nicht devant l’infinitif.'],
    ),
    fb(
      'sp-pe-q9',
      ['Die Aufgabe ist ___ . (unlösbar — "not solvable")', 'Die Aufgabe ist ___ . (unlösbar — « insoluble »)'],
      'unlösbar',
      ['un- + lösbar', 'un- + lösbar'],
    ),
    lc(
      'sp-pe-q10',
      ['Listen. How is the book doing?', 'Écoute. Comment va le livre ?'],
      'Das Buch verkauft sich sehr gut.',
      ['It sells well', 'It is out of print', 'It is too expensive'], ['Il se vend bien', 'Il est épuisé', 'Il est trop cher'], 0,
      ['sich verkaufen = to sell.', 'sich verkaufen = se vendre.'],
    ),
    lc(
      'sp-pe-q11',
      ['Listen. What must be done by Friday?', 'Écoute. Que faut-il faire d’ici vendredi ?'],
      'Die Unterlagen sind bis Freitag einzureichen.',
      ['Submit the documents', 'Open the shop', 'Pay the bill'], ['Remettre les documents', 'Ouvrir le magasin', 'Payer la facture'], 0,
      ['sind einzureichen = must be submitted.', 'sind einzureichen = doivent être remis.'],
    ),
    mc(
      'sp-pe-q12',
      ['Which has NO passive meaning?', 'Laquelle n’a PAS de sens passif ?'],
      ['Er repariert das Auto.', 'Das lässt sich reparieren.', 'Das ist reparierbar.'], ['Er repariert das Auto.', 'Das lässt sich reparieren.', 'Das ist reparierbar.'], 0,
      ['The first is a normal active sentence.', 'La première est une phrase active normale.'],
    ),
  ],
});

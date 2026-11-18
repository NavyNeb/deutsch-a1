import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b2lektion11: Lesson = {
  id: 'b2-l11', level: 'B2', module: 4, number: 11,
  title: { de: 'Gründe und Ziele', en: 'Reasons and purposes', fr: 'Causes et buts' },
  theme: 'Formal causal and final expressions: aufgrund, infolge, dank, mangels, zwecks, mithilfe, angesichts, zum Zweck', themeFr: 'Expressions causales et finales formelles : aufgrund, infolge, dank, mangels, zwecks, mithilfe, angesichts, zum Zweck',
  goals: ['Use genitive prepositions for reasons', 'Distinguish positive vs. negative cause (dank / wegen)', 'Express purpose formally with "zwecks" and "zum Zweck"', 'Rewrite "weil" clauses as noun phrases'], goalsFr: ['Utiliser les prépositions à génitif pour exprimer la cause', 'Distinguer cause positive/négative (dank / wegen)', 'Exprimer le but de façon formelle avec « zwecks » et « zum Zweck »', 'Réécrire des propositions en « weil » sous forme nominale'],
  canDo: g('Ich kann Gründe und Zwecke formell ausdrücken und weil-Sätze in Nominalgruppen umformen.', 'I can express reasons and purposes formally and rewrite weil-clauses as noun phrases.', 'Je sais exprimer formellement causes et buts et transformer des propositions en weil en groupes nominaux.'),
  steps: [
    { kind: 'intro', title: 'Gründe und Zwecke: formell 📋', titleFr: 'Causes et buts : registre formel 📋',
      scene: 'A railway announcement, a company e-mail and a court report — all use formal prepositions.', sceneFr: 'Une annonce de gare, un e-mail d’entreprise et un compte rendu de tribunal — tous utilisent des prépositions formelles.',
      goals: ['Use aufgrund, infolge, dank, mangels, angesichts', 'Tell positive from negative cause (dank vs. wegen)', 'Express purpose with zwecks, zum Zweck, zur and means with mithilfe'],
      goalsFr: ['Utiliser aufgrund, infolge, dank, mangels, angesichts', 'Distinguer cause positive et négative (dank vs. wegen)', 'Exprimer le but avec zwecks, zum Zweck, zur et le moyen avec mithilfe'] },

    // ───────────── 1 · Reasons ─────────────
    { kind: 'chapter', title: 'Gründe: aufgrund, dank, mangels', titleFr: 'Causes : aufgrund, dank, mangels', blurb: 'All with the genitive.', blurbFr: 'Toutes avec le génitif.' },

    { kind: 'situation', title: 'Durchsage am Bahnhof', titleFr: 'Annonce en gare',
      setting: 'Station announcement.', settingFr: 'Annonce en gare.',
      lines: [
        line('Durchsage', 'Aufgrund des Unwetters fällt der Zug aus. Infolge eines Unfalls blieb die Straße gesperrt. Wegen der Sperrung gibt es einen Umweg.', 'Because of the storm the train is cancelled. As a result of an accident the road remained closed. Because of the closure there is a detour.', 'En raison de l’orage, le train est supprimé. À la suite d’un accident, la route est restée fermée. À cause de la fermeture, il y a une déviation.'),
        line('Chefin', 'Dank deiner Hilfe habe ich es geschafft. Angesichts der Lage sind wir vorsichtig. Aus diesem Grund sagen wir ab.', 'Thanks to your help I managed it. In view of the situation we are cautious. For this reason we cancel.', 'Grâce à ton aide, j’y suis arrivé. Vu la situation, nous sommes prudents. Pour cette raison, nous annulons.'),
        line('Richter', 'Mangels Beweisen wurde er freigesprochen. Dank des guten Wetters war das Fest ein Erfolg.', 'For lack of evidence he was acquitted. Thanks to the good weather the party was a success.', 'Faute de preuves, il a été acquitté. Grâce au beau temps, la fête a été un succès.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l11-e11', prompt: 'Why was the man acquitted?', promptFr: 'Pourquoi l’homme a-t-il été acquitté ?', options: ['For lack of evidence', 'Because of a confession', 'Because of the weather'], optionsFr: ['Faute de preuves', 'À cause d’un aveu', 'À cause du temps'], answer: 0, explain: 'The judge says: “Mangels Beweisen wurde er freigesprochen.”', explainFr: 'Le juge dit : « Mangels Beweisen wurde er freigesprochen. »', hint: 'Look for “mangels”.', hintFr: 'Cherche « mangels ».' } },

    { kind: 'wordgroup', title: 'Präpositionen des Grundes', titleFr: 'Prépositions de cause',
      items: [{ id: 'b2l11-aufgrund', german: 'aufgrund', english: 'because of', french: 'en raison de', gender: null, syllables: ['AUF', 'grund'], pronunciation: 'OWF-groont', example: { de: 'Aufgrund des Unwetters fällt der Zug aus.', en: 'Because of the storm the train is cancelled.', fr: 'En raison de l’orage, le train est supprimé.' } }, { id: 'b2l11-infolge', german: 'infolge', english: 'as a result of', french: 'par suite de', gender: null, syllables: ['in', 'FOL', 'ge'], pronunciation: 'in-FOL-ge', example: { de: 'Infolge eines Unfalls blieb die Straße gesperrt.', en: 'As a result of an accident the road stayed closed.', fr: 'Par suite d’un accident, la route est restée fermée.' } }, { id: 'b2l11-dank', german: 'dank', english: 'thanks to', french: 'grâce à', gender: null, syllables: ['DANK'], pronunciation: 'dahnk', example: { de: 'Dank deiner Hilfe habe ich es geschafft.', en: 'Thanks to your help I managed it.', fr: 'Grâce à ton aide, j’y suis arrivé.' } }, { id: 'b2l11-mangels', german: 'mangels', english: 'for lack of', french: 'faute de', gender: null, syllables: ['MAN', 'gels'], pronunciation: 'MAHN-gels', example: { de: 'Mangels Beweisen wurde er freigesprochen.', en: 'For lack of evidence he was acquitted.', fr: 'Faute de preuves, il a été acquitté.' } }, { id: 'b2l11-angesichts', german: 'angesichts', english: 'in view of', french: 'face à', gender: null, syllables: ['AN', 'ge', 'sichts'], pronunciation: 'AHN-ge-zikhts', example: { de: 'Angesichts der Lage sind wir vorsichtig.', en: 'In view of the situation we are cautious.', fr: 'Face à la situation, nous sommes prudents.' } }] },

    { kind: 'exercise', exercise: { type: 'match', id: 'b2l11-e6', pairs: [{ de: 'angesichts', en: 'in view of', fr: 'face à' }, { de: 'infolge', en: 'as a result of', fr: 'par suite de' }, { de: 'zwecks', en: 'for the purpose of', fr: 'aux fins de' }, { de: 'mithilfe', en: 'by means of', fr: 'à l’aide de' }], hint: 'Match each preposition to its meaning.', hintFr: 'Associe chaque préposition à sa signification.' } },

    { kind: 'grammar', note: {
      id: 'b2l11-gruende', title: 'Formal prepositions of cause', titleFr: 'Prépositions formelles de cause',
      lead: 'wegen, aufgrund, infolge, angesichts + genitive; dank = positive; mangels = lack.',
      leadFr: 'wegen, aufgrund, infolge, angesichts + génitif ; dank = positif ; mangels = manque.',
      explanationMd: 'All take the **genitive** (**dank** also the dative): **wegen** — neutral: **wegen des Regens**. **aufgrund** (+ **von** if no article) — formal: **aufgrund des Unwetters**, **aufgrund von Problemen**. **infolge** — result of an **event**: **infolge eines Unfalls**. **dank** — **positive** cause: **dank deiner Hilfe**. **mangels** — **missing** cause: **mangels Beweisen**. **angesichts** — in view of: **angesichts der Lage**. They **shorten weil-clauses**: **Weil es gestürmt hat** → **Aufgrund des Sturms**. The result is a **noun phrase**, so the sentence gets **more compact** — typical for **formal writing**.',
      explanationMdFr: 'Toutes prennent le **génitif** (**dank** aussi le datif) : **wegen** — neutre : **wegen des Regens**. **aufgrund** (+ **von** sans article) — formel : **aufgrund des Unwetters**, **aufgrund von Problemen**. **infolge** — résultat d’un **événement** : **infolge eines Unfalls**. **dank** — cause **positive** : **dank deiner Hilfe**. **mangels** — cause **manquante** : **mangels Beweisen**. **angesichts** — vu : **angesichts der Lage**. Elles **raccourcissent les propositions en weil** : **Weil es gestürmt hat** → **Aufgrund des Sturms**. Le résultat est un **groupe nominal**, la phrase devient **plus compacte** — typique de l’**écrit formel**.',
      tables: [{ title: 'Prepositions of cause', titleFr: 'Prépositions de cause', headers: ['Preposition', 'Nuance', 'Example'], headersFr: ['Préposition', 'Nuance', 'Exemple'],
        rows: [['wegen', 'neutral', 'wegen des Regens'], ['aufgrund', 'formal', 'aufgrund des Unwetters'], ['infolge', 'result of an event', 'infolge eines Unfalls'], ['dank', 'positive', 'dank deiner Hilfe'], ['mangels', 'lack of', 'mangels Beweisen'], ['angesichts', 'in view of', 'angesichts der Lage']],
        rowsFr: [['wegen', 'neutre', 'wegen des Regens'], ['aufgrund', 'formel', 'aufgrund des Unwetters'], ['infolge', 'résultat d’un événement', 'infolge eines Unfalls'], ['dank', 'positif', 'dank deiner Hilfe'], ['mangels', 'faute de', 'mangels Beweisen'], ['angesichts', 'vu', 'angesichts der Lage']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Aufgrund', role: 'connector' }, { text: 'des Unwetters', role: 'other' }, { text: 'fällt', role: 'verb' }, { text: 'der Zug', role: 'subject' }, { text: 'aus.', role: 'other' }], en: 'Because of the storm the train is cancelled.', fr: 'En raison de l’orage, le train est supprimé.' },
        { parts: [{ text: 'Dank', role: 'connector' }, { text: 'deiner Hilfe', role: 'other' }, { text: 'habe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'es', role: 'accusative' }, { text: 'geschafft.', role: 'verb' }], en: 'Thanks to your help I managed it.', fr: 'Grâce à ton aide, j’y suis arrivé.' },
      ],
      contrast: {
        a: { label: 'weil-clause', labelFr: 'Proposition en weil', note: 'verb at the end', noteFr: 'verbe à la fin', examples: [g('Weil es gestürmt hat, fällt der Zug aus.', 'Because there was a storm the train is cancelled.', 'Parce qu’il y a eu une tempête, le train est supprimé.'), g('Weil du geholfen hast, habe ich es geschafft.', 'Because you helped I managed it.', 'Parce que tu as aidé, j’y suis arrivé.')] },
        b: { label: 'Preposition + genitive', labelFr: 'Préposition + génitif', note: 'noun phrase', noteFr: 'groupe nominal', examples: [g('Aufgrund des Sturms fällt der Zug aus.', 'Because of the storm the train is cancelled.', 'En raison de la tempête, le train est supprimé.'), g('Dank deiner Hilfe habe ich es geschafft.', 'Thanks to your help I managed it.', 'Grâce à ton aide, j’y suis arrivé.')] },
      },
      examples: [
        g('Aufgrund des Unwetters fällt der Zug aus.', 'Because of the storm the train is cancelled.', 'En raison de l’orage, le train est supprimé.'),
        g('Infolge eines Unfalls blieb die Straße gesperrt.', 'As a result of an accident the road stayed closed.', 'À la suite d’un accident, la route est restée fermée.'),
        g('Dank deiner Hilfe habe ich es geschafft.', 'Thanks to your help I managed it.', 'Grâce à ton aide, j’y suis arrivé.'),
        g('Mangels Beweisen wurde er freigesprochen.', 'For lack of evidence he was acquitted.', 'Faute de preuves, il a été acquitté.'),
        g('Angesichts der Lage sind wir vorsichtig.', 'In view of the situation we are cautious.', 'Vu la situation, nous sommes prudents.'),
        g('Dank des guten Wetters war das Fest ein Erfolg.', 'Thanks to the good weather the party was a success.', 'Grâce au beau temps, la fête a été un succès.'),
      ],
      mistakes: [
        { wrong: 'Dank des Unfalls war es schlimm. (negative)', right: 'Wegen des Unfalls war es schlimm.', why: 'dank is positive only: use wegen or infolge for something bad.', whyFr: 'dank est uniquement positif : utilise wegen ou infolge pour quelque chose de négatif.' },
        { wrong: 'Aufgrund Probleme', right: 'Aufgrund von Problemen', why: 'Without an article aufgrund needs von + dative.', whyFr: 'Sans article, aufgrund demande von + datif.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l11-e1', prompt: '___ des Unwetters fällt der Zug aus. (because of — formal)', answer: 'Aufgrund', hint: 'aufgrund + Genitiv', hintFr: 'aufgrund + génitif' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l11-e2', prompt: 'Which preposition expresses a POSITIVE cause?', promptFr: 'Quelle préposition exprime une cause POSITIVE ?', options: ['wegen', 'dank', 'mangels'], answer: 1, explain: '"dank" = thanks to.', explainFr: '« dank » = grâce à.', hint: 'thanks to', hintFr: 'grâce à' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l11-e3', prompt: '___ Beweisen wurde er freigesprochen. (for lack of)', answer: 'Mangels', hint: 'mangels = missing cause', hintFr: 'mangels = cause manquante' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l11-e4', prompt: 'Shorten: "Weil es stürmte, …"', promptFr: 'Raccourcis : « Weil es stürmte, … »', options: ['Aufgrund des Sturms …', 'Zwecks des Sturms …', 'Mithilfe des Sturms …'], answer: 0, explain: 'weil → aufgrund / wegen.', explainFr: 'weil → aufgrund / wegen.', hint: 'cause → aufgrund', hintFr: 'cause → aufgrund' } },

    // ───────────── 2 · Purposes ─────────────
    { kind: 'chapter', title: 'Zwecke: zwecks, zur, mithilfe', titleFr: 'Buts : zwecks, zur, mithilfe', blurb: 'What for — and by what means.', blurbFr: 'Dans quel but — et par quel moyen.' },

    { kind: 'situation', title: 'Eine formelle Mail', titleFr: 'Un e-mail formel',
      setting: 'A company writes to a customer.', settingFr: 'Une entreprise écrit à un client.',
      lines: [
        line('Sachbearbeiter', 'Zwecks Klärung rufe ich Sie an. Zu welchem Zweck brauchen Sie das? Zum Zweck der Prüfung benötigen wir die Unterlagen.', 'For the purpose of clarification I will call you. For what purpose do you need that? For the purpose of the check we need the documents.', 'Afin de clarifier, je vous appelle. Dans quel but en avez-vous besoin ? Aux fins de vérification, nous avons besoin des documents.'),
        line('Sachbearbeiter', 'Zur Sicherheit tragen alle Helme. Mithilfe einer neuen Software lösten wir das Problem schnell. Mithilfe einer App finden wir den Weg.', 'For safety everyone wears helmets. With the help of new software we solved the problem quickly. With the help of an app we find the way.', 'Par sécurité, tout le monde porte un casque. À l’aide d’un nouveau logiciel, nous avons résolu rapidement le problème. À l’aide d’une appli, nous trouvons le chemin.'),
      ],
      words: [] },

    { kind: 'wordgroup', title: 'Zweck und Mittel', titleFr: 'But et moyen',
      items: [{ id: 'b2l11-zwecks', german: 'zwecks', english: 'for the purpose of', french: 'aux fins de', gender: null, syllables: ['ZWECKS'], pronunciation: 'tsvekks', example: { de: 'Zwecks Klärung rufe ich Sie an.', en: 'For clarification I am calling you.', fr: 'Pour clarification, je vous appelle.' } }, { id: 'b2l11-mithilfe', german: 'mithilfe', english: 'by means of', french: 'à l’aide de', gender: null, syllables: ['MIT', 'hil', 'fe'], pronunciation: 'MIT-hil-fe', example: { de: 'Mithilfe eines Tools lösten wir das Problem.', en: 'With the help of a tool we solved the problem.', fr: 'À l’aide d’un outil, nous avons résolu le problème.' } }, { id: 'b2l11-grund', german: 'der Grund', english: 'the reason', french: 'la raison', gender: 'der', syllables: ['GRUND'], pronunciation: 'dair groont', example: { de: 'Aus diesem Grund sagen wir ab.', en: 'For this reason we cancel.', fr: 'Pour cette raison, nous annulons.' } }, { id: 'b2l11-zweck', german: 'der Zweck', english: 'the purpose', french: 'le but', gender: 'der', syllables: ['ZWECK'], pronunciation: 'dair tsvek', example: { de: 'Zu welchem Zweck brauchen Sie das?', en: 'For what purpose do you need that?', fr: 'Dans quel but en avez-vous besoin ?' } }, { id: 'b2l11-sperrung', german: 'die Sperrung', english: 'the closure', french: 'la fermeture', gender: 'die', syllables: ['SPER', 'rung'], pronunciation: 'dee SHPER-roong', example: { de: 'Wegen der Sperrung gibt es einen Umweg.', en: 'Because of the closure there is a detour.', fr: 'À cause de la fermeture, il y a un détour.' } }] },

    { kind: 'grammar', note: {
      id: 'b2l11-zwecke', title: 'Formal purpose and means', titleFr: 'But et moyen au registre formel',
      lead: 'Purpose: zwecks / zum Zweck + genitive, zur + noun. Means: mithilfe / mittels + genitive.',
      leadFr: 'But : zwecks / zum Zweck + génitif, zur + nom. Moyen : mithilfe / mittels + génitif.',
      explanationMd: '**Purpose** (what for): **um … zu**, **damit**, and formally: **zwecks** + Genitiv: **zwecks Klärung des Sachverhalts**; **zum Zweck(e)** + Genitiv: **zum Zweck der Prüfung**; **zur** + noun: **zur Information, zur Sicherheit** (very common). **Means** (how): **mithilfe** + Genitiv (or **von**), **mittels** + Genitiv: **mittels einer Software**. Rewriting: **Wir rufen an, um den Termin zu klären.** → **Wir rufen zwecks Klärung des Termins an.** Note that the **verb becomes a noun** (**klären → Klärung**).',
      explanationMdFr: '**But** (pour quoi faire) : **um … zu**, **damit**, et formellement : **zwecks** + génitif : **zwecks Klärung des Sachverhalts** ; **zum Zweck(e)** + génitif : **zum Zweck der Prüfung** ; **zur** + nom : **zur Information, zur Sicherheit** (très courant). **Moyen** (comment) : **mithilfe** + génitif (ou **von**), **mittels** + génitif : **mittels einer Software**. Réécriture : **Wir rufen an, um den Termin zu klären.** → **Wir rufen zwecks Klärung des Termins an.** Remarque : le **verbe devient un nom** (**klären → Klärung**).',
      tables: [{ title: 'Purpose and means', titleFr: 'But et moyen', headers: ['Clause', 'Noun phrase'], headersFr: ['Proposition', 'Groupe nominal'],
        rows: [['um den Termin zu klären', 'zwecks Klärung des Termins'], ['um die Unterlagen zu prüfen', 'zum Zweck der Prüfung'], ['damit alle sicher sind', 'zur Sicherheit'], ['indem wir eine App nutzen', 'mithilfe einer App']],
        rowsFr: [['um den Termin zu klären', 'zwecks Klärung des Termins'], ['um die Unterlagen zu prüfen', 'zum Zweck der Prüfung'], ['damit alle sicher sind', 'zur Sicherheit'], ['indem wir eine App nutzen', 'mithilfe einer App']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Zwecks', role: 'connector' }, { text: 'Klärung', role: 'other' }, { text: 'rufe', role: 'verb' }, { text: 'ich', role: 'subject' }, { text: 'Sie', role: 'accusative' }, { text: 'an.', role: 'other' }], en: 'For clarification I will call you.', fr: 'Afin de clarifier, je vous appelle.' },
        { parts: [{ text: 'Mithilfe', role: 'connector' }, { text: 'einer App', role: 'other' }, { text: 'finden', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'den Weg.', role: 'accusative' }], en: 'With the help of an app we find the way.', fr: 'À l’aide d’une appli, nous trouvons le chemin.' },
      ],
      contrast: {
        a: { label: 'Everyday', labelFr: 'Courant', note: 'um … zu', noteFr: 'um … zu', examples: [g('Wir rufen an, um den Termin zu klären.', 'We call to clarify the appointment.', 'Nous appelons pour clarifier le rendez-vous.'), g('Alle tragen Helme, damit sie sicher sind.', 'Everyone wears helmets so that they are safe.', 'Tous portent un casque pour être en sécurité.')] },
        b: { label: 'Formal', labelFr: 'Formel', note: 'zwecks / zur', noteFr: 'zwecks / zur', examples: [g('Wir rufen zwecks Klärung des Termins an.', 'We call for clarification of the appointment.', 'Nous appelons afin de clarifier le rendez-vous.'), g('Zur Sicherheit tragen alle Helme.', 'For safety everyone wears helmets.', 'Par sécurité, tout le monde porte un casque.')] },
      },
      examples: [
        g('Zwecks Klärung rufe ich Sie an.', 'For clarification I will call you.', 'Afin de clarifier, je vous appelle.'),
        g('Zum Zweck der Prüfung benötigen wir die Unterlagen.', 'For the purpose of the check we need the documents.', 'Aux fins de vérification, nous avons besoin des documents.'),
        g('Zur Sicherheit tragen alle Helme.', 'For safety everyone wears helmets.', 'Par sécurité, tout le monde porte un casque.'),
        g('Mithilfe einer App finden wir den Weg.', 'With the help of an app we find the way.', 'À l’aide d’une appli, nous trouvons le chemin.'),
        g('Mithilfe eines Tools lösten wir das Problem.', 'With the help of a tool we solved the problem.', 'À l’aide d’un outil, nous avons résolu le problème.'),
        g('Zu welchem Zweck brauchen Sie das?', 'For what purpose do you need that?', 'Dans quel but en avez-vous besoin ?'),
      ],
      mistakes: [
        { wrong: 'Zwecks den Termin zu klären', right: 'Zwecks Klärung des Termins', why: 'zwecks takes a noun phrase, not an infinitive clause.', whyFr: 'zwecks prend un groupe nominal, pas une infinitive.' },
        { wrong: 'Zur Prüfung der Unterlage', right: 'Zur Prüfung der Unterlagen', why: 'Genitive plural: der Unterlagen.', whyFr: 'Génitif pluriel : der Unterlagen.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b2l11-e5', prompt: 'Aus diesem ___ sagen wir ab. (reason)', answer: 'Grund', hint: 'aus diesem Grund', hintFr: 'aus diesem Grund' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b2l11-e8', tokens: ['Dank', 'habe', 'deiner', 'ich', 'Hilfe', 'es', 'geschafft'], answer: ['Dank', 'deiner', 'Hilfe', 'habe', 'ich', 'es', 'geschafft'], hint: 'noun phrase first, then verb in position 2.', hintFr: 'groupe nominal d’abord, puis verbe en 2e position.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b2l11-e9', prompt: 'Which is a formal PURPOSE expression?', promptFr: 'Laquelle est une expression formelle de BUT ?', options: ['zwecks Klärung', 'infolge Klärung', 'mangels Klärung'], answer: 0, explain: 'zwecks = for the purpose of.', explainFr: 'zwecks = aux fins de.', hint: 'purpose', hintFr: 'but' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l11-e7', prompt: 'Listen. Why is the train cancelled?', promptFr: 'Écoute. Pourquoi le train est-il supprimé ?', audio: { ttsText: 'Aufgrund des Unwetters fällt der Zug heute aus.' }, options: ['Because of a storm', 'Because of a strike', 'Because of a holiday'], optionsFr: ['À cause d’un orage', 'À cause d’une grève', 'À cause d’un jour férié'], answer: 0, hint: 'Unwetter = bad weather.', hintFr: 'Unwetter = mauvais temps.' } },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b2l11-e10', prompt: 'Listen. How was the problem solved?', promptFr: 'Écoute. Comment le problème a-t-il été résolu ?', audio: { ttsText: 'Mithilfe einer neuen Software lösten wir das Problem schnell.' }, options: ['With new software', 'With a phone call', 'With a letter'], optionsFr: ['Avec un nouveau logiciel', 'Avec un appel', 'Avec une lettre'], answer: 0, hint: 'mithilfe = by means of.', hintFr: 'mithilfe = à l’aide de.' } },

    { kind: 'pronunciation', focus: 'Stress the first syllable of aufgrund, infolge, mangels: "AUFgrund", "inFOLge" (second), "MANgels", "ANgesichts"', focusFr: 'Accent sur la 1re syllabe de aufgrund, mangels : « AUFgrund », « MANgels », « ANgesichts » ; « inFOLge » sur la 2e', items: [{ id: 'b2l11-aufgrund-pron', german: 'aufgrund', english: 'because of', french: 'en raison de', gender: null, syllables: ['AUF', 'grund'], pronunciation: 'OWF-groont', example: { de: 'Aufgrund der Lage …', en: 'Because of the situation …', fr: 'En raison de la situation …' } }, { id: 'b2l11-angesichts-pron', german: 'angesichts', english: 'in view of', french: 'face à', gender: null, syllables: ['AN', 'ge', 'sichts'], pronunciation: 'AHN-ge-zikhts', example: { de: 'Angesichts der Zahlen …', en: 'In view of the figures …', fr: 'Face aux chiffres …' } }] },

    { kind: 'wrapup',
      summary: 'You can now give **formal reasons** (**aufgrund, infolge, dank, mangels, angesichts**) and **purposes** (**zwecks, zum Zweck, zur, mithilfe**) and rewrite clauses as noun phrases. 🎉',
      summaryFr: 'Tu sais maintenant donner des **causes formelles** (**aufgrund, infolge, dank, mangels, angesichts**) et des **buts** (**zwecks, zum Zweck, zur, mithilfe**) et transformer les propositions en groupes nominaux. 🎉',
      card: { title: 'Formal reasons and purposes', titleFr: 'Causes et buts formels', sections: [
        { heading: 'Cause', headingFr: 'Cause', rows: [g('aufgrund · infolge · angesichts + Gen.', 'aufgrund des Sturms', 'aufgrund des Sturms'), g('dank = positive · mangels = lack', 'dank deiner Hilfe', 'dank deiner Hilfe')] },
        { heading: 'Purpose', headingFr: 'But', rows: [g('zwecks / zum Zweck + Gen.', 'zwecks Klärung', 'zwecks Klärung'), g('zur + noun', 'zur Sicherheit', 'zur Sicherheit')] },
        { heading: 'Means', headingFr: 'Moyen', rows: [g('mithilfe / mittels + Gen.', 'mithilfe einer App', 'mithilfe einer App')] },
      ] } },
  ],
};

import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion19: Lesson = {
  id: 'b1-l19', level: 'B1', module: 5, number: 17,
  title: { de: 'Partizip als Adjektiv', en: 'Participles as adjectives', fr: 'Participes employés comme adjectifs' },
  theme: 'Participles as adjectives: laufend, spannend, geschlossen, gebucht — signs, warnings and activities', themeFr: 'Les participes comme adjectifs : laufend, spannend, geschlossen, gebucht — panneaux, avertissements et activités',
  goals: ['Form the Partizip Präsens (Infinitiv + d) and use it as an adjective', 'Use the Partizip Perfekt as an adjective (die gebuchte Reise)', 'Read and understand signs, rules and warnings', 'Talk about courses, leisure and adventure activities'], goalsFr: ['Former le participe présent (infinitif + d) et l’employer comme adjectif', 'Employer le participe passé comme adjectif (die gebuchte Reise)', 'Lire et comprendre des panneaux, règles et avertissements', 'Parler de cours, de loisirs et d’activités d’aventure'],
  canDo: g('Ich kann Partizipien als Adjektive benutzen und Schilder, Regeln und Warnhinweise verstehen.', 'I can use participles as adjectives and understand signs, rules and warnings.', 'Je sais utiliser les participes comme adjectifs et comprendre panneaux, règles et avertissements.'),
  steps: [
    { kind: 'intro', title: 'Partizipien als Adjektive 🧗', titleFr: 'Les participes comme adjectifs 🧗',
      scene: 'Lena and Tim book an adventure weekend — and have to read every sign, rule and warning.', sceneFr: 'Lena et Tim réservent un week-end d’aventure — et doivent lire chaque panneau, règle et avertissement.',
      goals: ['Form the Partizip Präsens (infinitive + d) and use it as an adjective', 'Use the Partizip Perfekt as an adjective (die gebuchte Reise)', 'Read signs, rules and warnings'],
      goalsFr: ['Former le participe présent (infinitif + d) et l’utiliser comme adjectif', 'Utiliser le participe passé comme adjectif (die gebuchte Reise)', 'Lire panneaux, règles et avertissements'] },

    // ───────────── 1 · Partizip Präsens ─────────────
    { kind: 'chapter', title: 'Partizip Präsens: lachend, steigend', titleFr: 'Participe présent : lachend, steigend', blurb: 'Infinitive + d.', blurbFr: 'Infinitif + d.' },

    { kind: 'situation', title: 'Das steigende Wasser', titleFr: 'L’eau qui monte',
      setting: 'The guide at the rafting centre talks to Lena and Tim.', settingFr: 'Le guide du centre de rafting parle à Lena et Tim.',
      lines: [
        line('Guide', 'Vorsicht! Das kochende Wasser im Camp ist sehr heiß. Und die steigenden Preise machen vielen Familien Sorgen.', 'Careful! The boiling water in the camp is very hot. And the rising prices worry many families.', 'Attention ! L’eau bouillante du camp est très chaude. Et la hausse des prix inquiète beaucoup de familles.'),
        line('Lena', 'Ein lachendes Kind rennt durch den Park. Sie kam lachend aus dem Kurs. Das Ende war überraschend.', 'A laughing child runs through the park. She came laughing out of the course. The ending was surprising.', 'Un enfant qui rit court dans le parc. Elle est sortie du cours en riant. La fin était surprenante.'),
        line('Tim', 'Das Buch ist fesselnd. Eine fesselnde Geschichte! Das laufende Jahr ist fast vorbei.', 'The book is gripping. A gripping story! The current year is almost over.', 'Le livre est captivant. Une histoire captivante ! L’année en cours est presque terminée.'),
        line('Guide', 'Das Rafting war ein echtes Abenteuer. Der Kletterkurs klingt sehr spannend.', 'The rafting was a real adventure. The climbing course sounds very exciting.', 'Le rafting était une vraie aventure. Le cours d’escalade a l’air très passionnant.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l19-e12', prompt: 'What is very hot at the camp?', promptFr: 'Qu’est-ce qui est très chaud au camp ?', options: ['The boiling water', 'The soup', 'The sun'], optionsFr: ['L’eau bouillante', 'La soupe', 'Le soleil'], answer: 0, explain: 'The guide says: “Das kochende Wasser im Camp ist sehr heiß.”', explainFr: 'Le guide dit : « Das kochende Wasser im Camp ist sehr heiß. »', hint: 'Look for “kochende”.', hintFr: 'Cherche « kochende ».' } },

    { kind: 'wordgroup', title: 'Abenteuer und Ausrüstung', titleFr: 'Aventure et équipement',
      items: [{ id: 'b1l19-abenteuer', german: 'das Abenteuer', english: 'the adventure', french: 'l’aventure', gender: 'das', syllables: ['A', 'ben', 'teu', 'er'], pronunciation: 'dahss AH-ben-toy-er', example: { de: 'Das Rafting war ein echtes Abenteuer.', en: 'The rafting was a real adventure.', fr: 'Le rafting a été une vraie aventure.' } }, { id: 'b1l19-ausruestung', german: 'die Ausrüstung', english: 'the equipment / gear', french: 'l’équipement', gender: 'die', syllables: ['AUS', 'rüs', 'tung'], pronunciation: 'dee OWS-rues-toong', example: { de: 'Die Ausrüstung bekommst du vor Ort.', en: 'You get the equipment on site.', fr: 'Tu reçois l’équipement sur place.' } }, { id: 'b1l19-gefahr', german: 'die Gefahr', english: 'the danger / risk', french: 'le danger / le risque', gender: 'die', syllables: ['ge', 'FAHR'], pronunciation: 'dee geh-FAHR', example: { de: 'Bei Nebel besteht Gefahr für Wanderer.', en: 'In fog there is danger for hikers.', fr: 'Par temps de brouillard, les randonneurs courent un danger.' } }, { id: 'b1l19-hinweis', german: 'der Hinweis', english: 'the notice / tip', french: 'l’avis / l’indication', gender: 'der', syllables: ['HIN', 'weis'], pronunciation: 'dair HIN-vice', example: { de: 'Bitte beachten Sie die Hinweise am Eingang.', en: 'Please note the notices at the entrance.', fr: 'Veuillez tenir compte des avis à l’entrée.' } }, { id: 'b1l19-spannend', german: 'spannend', english: 'exciting / thrilling', french: 'passionnant / palpitant', gender: null, syllables: ['SPAN', 'nend'], pronunciation: 'SHPAH-nent', example: { de: 'Der Kletterkurs klingt sehr spannend.', en: 'The climbing course sounds very exciting.', fr: 'Le cours d’escalade a l’air très palpitant.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l19-partizip-praesens', title: 'Partizip Präsens: infinitive + d', titleFr: 'Participe présent : infinitif + d',
      lead: 'lachen → lachend, steigen → steigend. As an adjective it takes the normal adjective ending. It describes something happening now.',
      leadFr: 'lachen → lachend, steigen → steigend. Comme adjectif, il prend la terminaison normale. Il décrit quelque chose qui se passe maintenant.',
      explanationMd: 'Add **-d** to the infinitive and you get the **Partizip Präsens**: **lachen → lachend, steigen → steigend, laufen → laufend**. As an **adjective** it gets the **normal adjective ending**. It describes something that is **happening right now** (**active** meaning, “…ing”): **Das Wasser kocht. → das kochende Wasser.** **Die Preise steigen. → die steigenden Preise.** **Die Geschichte fesselt uns. → eine fesselnde Geschichte.** Endings work as always: **ein lachendes Kind** (n), **der lachende Mann** (m), **die lachenden Kinder** (plural). **sein → seiend** and **tun → tuend** are **rare** — ignore them for now. The ending **-end** is pronounced **“-ent”**.',
      explanationMdFr: 'Ajoute **-d** à l’infinitif et tu obtiens le **participe présent** : **lachen → lachend, steigen → steigend, laufen → laufend**. Comme **adjectif**, il prend la **terminaison normale d’adjectif**. Il décrit quelque chose qui se passe **en ce moment** (sens **actif**, « …ant ») : **Das Wasser kocht. → das kochende Wasser.** **Die Preise steigen. → die steigenden Preise.** **Die Geschichte fesselt uns. → eine fesselnde Geschichte.** Les terminaisons fonctionnent comme d’habitude : **ein lachendes Kind** (n), **der lachende Mann** (m), **die lachenden Kinder** (pluriel). **sein → seiend** et **tun → tuend** sont **rares** — ignore-les pour l’instant. La terminaison **-end** se prononce **« -ent »**.',
      tables: [{ title: 'Partizip Präsens', titleFr: 'Participe présent', headers: ['Verb', 'Participle', 'As adjective'], headersFr: ['Verbe', 'Participe', 'Comme adjectif'],
        rows: [['kochen', 'kochend', 'das kochende Wasser'], ['steigen', 'steigend', 'die steigenden Preise'], ['lachen', 'lachend', 'ein lachendes Kind'], ['fesseln', 'fesselnd', 'eine fesselnde Geschichte'], ['überraschen', 'überraschend', 'ein überraschendes Ende']],
        rowsFr: [['kochen', 'kochend', 'das kochende Wasser'], ['steigen', 'steigend', 'die steigenden Preise'], ['lachen', 'lachend', 'ein lachendes Kind'], ['fesseln', 'fesselnd', 'eine fesselnde Geschichte'], ['überraschen', 'überraschend', 'ein überraschendes Ende']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Ein lachendes Kind', role: 'subject' }, { text: 'rennt', role: 'verb' }, { text: 'durch den Park.', role: 'place' }], en: 'A laughing child runs through the park.', fr: 'Un enfant qui rit court dans le parc.' },
        { parts: [{ text: 'Die steigenden Preise', role: 'subject' }, { text: 'machen', role: 'verb' }, { text: 'vielen Familien', role: 'dative' }, { text: 'Sorgen.', role: 'accusative' }], en: 'The rising prices worry many families.', fr: 'La hausse des prix inquiète beaucoup de familles.' },
      ],
      contrast: {
        a: { label: 'Verb', labelFr: 'Verbe', note: 'something happens', noteFr: 'quelque chose se passe', examples: [g('Das Wasser kocht.', 'The water is boiling.', 'L’eau bout.'), g('Die Preise steigen.', 'Prices are rising.', 'Les prix montent.')] },
        b: { label: 'Participle as adjective', labelFr: 'Participe comme adjectif', note: 'before a noun', noteFr: 'devant un nom', examples: [g('das kochende Wasser', 'the boiling water', 'l’eau bouillante'), g('die steigenden Preise', 'the rising prices', 'la hausse des prix')] },
      },
      examples: [
        g('Vorsicht! Das kochende Wasser ist sehr heiß.', 'Careful! The boiling water is very hot.', 'Attention ! L’eau bouillante est très chaude.'),
        g('Die steigenden Preise machen vielen Familien Sorgen.', 'The rising prices worry many families.', 'La hausse des prix inquiète beaucoup de familles.'),
        g('Ein lachendes Kind rennt durch den Park.', 'A laughing child runs through the park.', 'Un enfant qui rit court dans le parc.'),
        g('Das Ende war überraschend.', 'The ending was surprising.', 'La fin était surprenante.'),
        g('Das Buch ist fesselnd.', 'The book is gripping.', 'Le livre est captivant.'),
        g('Das laufende Jahr ist fast vorbei.', 'The current year is almost over.', 'L’année en cours est presque terminée.'),
      ],
      mistakes: [
        { wrong: 'Ein lachend Kind rennt durch den Park.', right: 'Ein lachendes Kind rennt durch den Park.', why: 'Before a noun the participle needs an adjective ending.', whyFr: 'Devant un nom, le participe a besoin d’une terminaison d’adjectif.' },
        { wrong: 'Die steigende Preise machen Sorgen.', right: 'Die steigenden Preise machen Sorgen.', why: 'Plural after die: -en.', whyFr: 'Pluriel après die : -en.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l19-e1', prompt: 'Das Wasser kocht. → das ___ Wasser (Partizip Präsens + ending)', promptFr: 'Das Wasser kocht. → das ___ Wasser (participe présent + terminaison)', answer: 'kochende', hint: 'kochen + d + e', hintFr: 'kochen + d + e' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l19-e6', prompt: 'Which one is a Partizip Präsens?', promptFr: 'Lequel est un participe présent ?', options: ['gelaufen', 'laufend', 'zu laufen'], answer: 1, explain: 'Infinitive + d = Partizip Präsens: laufen → laufend.', explainFr: 'Infinitif + d = participe présent : laufen → laufend.', hint: 'Look for the -d ending.', hintFr: 'Cherche la terminaison -d.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l19-e8', prompt: 'Ein ___ Kind spielt im Garten. (lachen)', promptFr: 'Ein ___ Kind spielt im Garten. (lachen)', options: ['lachendes', 'lachende', 'gelachtes'], answer: 0, explain: '"Kind" is neuter; after "ein" the nominative ending is -es.', explainFr: '« Kind » est neutre ; après « ein », la terminaison du nominatif est -es.', hint: 'ein + neuter noun → -es', hintFr: 'ein + nom neutre → -es' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l19-e3', tokens: ['beginnt', 'Der', 'um', 'Film', 'acht', 'spannende', 'Uhr'], answer: ['Der', 'spannende', 'Film', 'beginnt', 'um', 'acht', 'Uhr'], hint: 'The participle-adjective stands between article and noun.', hintFr: 'L’adjectif-participe se place entre l’article et le nom.' } },

    // ───────────── 2 · Partizip Perfekt ─────────────
    { kind: 'chapter', title: 'Partizip Perfekt als Adjektiv', titleFr: 'Le participe passé comme adjectif', blurb: 'die gebuchte Reise.', blurbFr: 'die gebuchte Reise.' },

    { kind: 'situation', title: 'Die gebuchte Reise', titleFr: 'Le voyage réservé',
      setting: 'Lena checks the booking.', settingFr: 'Lena vérifie la réservation.',
      lines: [
        line('Lena', 'Die gebuchte Reise war günstig und perfekt organisiert. Die gebuchte Reise beginnt im Mai.', 'The booked trip was cheap and perfectly organised. The booked trip begins in May.', 'Le voyage réservé était bon marché et parfaitement organisé. Le voyage réservé commence en mai.'),
        line('Tim', 'Bitte schließen Sie die geöffnete Tür wieder. Ich suche den verlorenen Schlüssel.', 'Please close the opened door again. I am looking for the lost key.', 'Veuillez refermer la porte ouverte. Je cherche la clé perdue.'),
        line('Lena', 'Ein gebrauchtes Fahrrad kostet weniger als ein neues. Die gefallenen Blätter liegen im Garten.', 'A used bike costs less than a new one. The fallen leaves lie in the garden.', 'Un vélo d’occasion coûte moins qu’un neuf. Les feuilles tombées sont dans le jardin.'),
      ],
      words: [{ id: 'b1l19-gebucht', german: 'gebucht', english: 'booked', french: 'réservé', gender: null, syllables: ['ge', 'BUCHT'], pronunciation: 'geh-BOOKHT', example: { de: 'Die gebuchte Reise beginnt im Mai.', en: 'The booked trip starts in May.', fr: 'Le voyage réservé commence en mai.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l19-partizip-perfekt', title: 'Partizip Perfekt as an adjective', titleFr: 'Le participe passé comme adjectif',
      lead: 'Participle before a noun + adjective ending = result or state, usually passive meaning. Verbs with sein give an active sense.',
      leadFr: 'Participe devant un nom + terminaison d’adjectif = résultat ou état, généralement sens passif. Les verbes avec sein donnent un sens actif.',
      explanationMd: 'You know the **Partizip Perfekt** from the **Perfekt** (**gebucht, geschlossen, verloren**). Put it **before a noun** with an **adjective ending** and it describes the **result or state** — usually with a **passive** meaning: **Die Tür wurde geschlossen. → die geschlossene Tür** (the closed door). **Ich habe die Reise gebucht. → die gebuchte Reise.** **Ich suche den verlorenen Schlüssel.** Verbs with **sein** in the Perfekt give an **active** sense: **Die Blätter sind gefallen. → die gefallenen Blätter.** **Without an article** the ending shows the case: **Geänderte Öffnungszeiten** (changed opening hours), **Geschlossene Gesellschaft** (private party).',
      explanationMdFr: 'Tu connais le **participe passé** du **Perfekt** (**gebucht, geschlossen, verloren**). Place-le **devant un nom** avec une **terminaison d’adjectif** et il décrit le **résultat ou l’état** — généralement avec un sens **passif** : **Die Tür wurde geschlossen. → die geschlossene Tür** (la porte fermée). **Ich habe die Reise gebucht. → die gebuchte Reise.** **Ich suche den verlorenen Schlüssel.** Les verbes avec **sein** au Perfekt donnent un sens **actif** : **Die Blätter sind gefallen. → die gefallenen Blätter.** **Sans article**, la terminaison montre le cas : **Geänderte Öffnungszeiten** (horaires modifiés), **Geschlossene Gesellschaft** (événement privé).',
      tables: [{ title: 'Participle as adjective', titleFr: 'Participe comme adjectif', headers: ['Verb', 'Participle', 'As adjective'], headersFr: ['Verbe', 'Participe', 'Comme adjectif'],
        rows: [['buchen', 'gebucht', 'die gebuchte Reise'], ['schließen', 'geschlossen', 'die geschlossene Tür'], ['verlieren', 'verloren', 'der verlorene Schlüssel'], ['gebrauchen', 'gebraucht', 'ein gebrauchtes Fahrrad'], ['fallen (sein)', 'gefallen', 'die gefallenen Blätter']],
        rowsFr: [['buchen', 'gebucht', 'die gebuchte Reise'], ['schließen', 'geschlossen', 'die geschlossene Tür'], ['verlieren', 'verloren', 'der verlorene Schlüssel'], ['gebrauchen', 'gebraucht', 'ein gebrauchtes Fahrrad'], ['fallen (sein)', 'gefallen', 'die gefallenen Blätter']], highlightCol: 2 }],
      anatomy: [
        { parts: [{ text: 'Die gebuchte Reise', role: 'subject' }, { text: 'war', role: 'verb' }, { text: 'günstig.', role: 'other' }], en: 'The booked trip was cheap.', fr: 'Le voyage réservé était bon marché.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'suche', role: 'verb' }, { text: 'den verlorenen Schlüssel.', role: 'accusative' }], en: 'I am looking for the lost key.', fr: 'Je cherche la clé perdue.' },
      ],
      contrast: {
        a: { label: 'Partizip Präsens', labelFr: 'Participe présent', note: 'active, happening now', noteFr: 'actif, en cours', examples: [g('das kochende Wasser', 'the boiling water', 'l’eau bouillante'), g('ein lachendes Kind', 'a laughing child', 'un enfant qui rit')] },
        b: { label: 'Partizip Perfekt', labelFr: 'Participe passé', note: 'result, usually passive', noteFr: 'résultat, généralement passif', examples: [g('die gebuchte Reise', 'the booked trip', 'le voyage réservé'), g('die geschlossene Tür', 'the closed door', 'la porte fermée')] },
      },
      examples: [
        g('Die gebuchte Reise war günstig und perfekt organisiert.', 'The booked trip was cheap and perfectly organised.', 'Le voyage réservé était bon marché et parfaitement organisé.'),
        g('Bitte schließen Sie die geöffnete Tür wieder.', 'Please close the opened door again.', 'Veuillez refermer la porte ouverte.'),
        g('Ein gebrauchtes Fahrrad kostet weniger als ein neues.', 'A used bike costs less than a new one.', 'Un vélo d’occasion coûte moins qu’un neuf.'),
        g('Ich suche den verlorenen Schlüssel.', 'I am looking for the lost key.', 'Je cherche la clé perdue.'),
        g('Die gefallenen Blätter liegen im Garten.', 'The fallen leaves lie in the garden.', 'Les feuilles tombées sont dans le jardin.'),
        g('Geänderte Öffnungszeiten ab Montag.', 'Changed opening hours from Monday.', 'Horaires modifiés à partir de lundi.'),
      ],
      mistakes: [
        { wrong: 'Die buchte Reise war günstig.', right: 'Die gebuchte Reise war günstig.', why: 'The participle keeps its ge-.', whyFr: 'Le participe garde son ge-.' },
        { wrong: 'Ich suche den verloren Schlüssel.', right: 'Ich suche den verlorenen Schlüssel.', why: 'Masculine accusative after den: -en.', whyFr: 'Masculin accusatif après den : -en.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l19-e2', prompt: 'Choose the correct form: die ___ Tür (schließen, result)', promptFr: 'Choisis la bonne forme : die ___ Tür (schließen, résultat)', options: ['geschlossene', 'schließende', 'geschlossen'], answer: 0, explain: 'A closed door = Partizip Perfekt + ending -e (feminine, nominative).', explainFr: 'Une porte fermée = participe passé + terminaison -e (féminin, nominatif).', hint: 'The door was closed — a result, with an ending.', hintFr: 'La porte a été fermée — un résultat, avec terminaison.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l19-e7', prompt: 'Ich habe die Reise gebucht. Die ___ Reise war günstig.', promptFr: 'Ich habe die Reise gebucht. Die ___ Reise war günstig.', answer: 'gebuchte', hint: 'gebucht + e', hintFr: 'gebucht + e' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l19-e11', tokens: ['Reise', 'war', 'Die', 'wirklich', 'gebuchte', 'günstig'], answer: ['Die', 'gebuchte', 'Reise', 'war', 'wirklich', 'günstig'], hint: 'Article, participle-adjective, noun, then verb.', hintFr: 'Article, adjectif-participe, nom, puis verbe.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l19-e4', pairs: [{ de: 'die gebuchte Reise', en: 'the booked trip', fr: 'le voyage réservé' }, { de: 'der spannende Film', en: 'the exciting film', fr: 'le film palpitant' }, { de: 'die geschlossene Tür', en: 'the closed door', fr: 'la porte fermée' }, { de: 'die steigenden Preise', en: 'the rising prices', fr: 'les prix qui montent' }], hint: 'Match each phrase to its meaning.', hintFr: 'Associe chaque expression à son sens.' } },

    // ───────────── 3 · Signs, rules, warnings ─────────────
    { kind: 'chapter', title: 'Schilder, Regeln, Warnungen', titleFr: 'Panneaux, règles, avertissements', blurb: 'ausgebucht, verboten, erforderlich.', blurbFr: 'ausgebucht, verboten, erforderlich.' },

    { kind: 'situation', title: 'Auf eigene Gefahr', titleFr: 'À ses propres risques',
      setting: 'Notices at the adventure centre.', settingFr: 'Affiches du centre d’aventure.',
      lines: [
        line('Schild', 'Begrenzte Teilnehmerzahl – Anmeldung erforderlich! Die Teilnahme ist kostenlos. Der Fotokurs ist leider ausgebucht.', 'Limited number of participants – registration required! Participation is free. The photo course is unfortunately fully booked.', 'Nombre de participants limité – inscription obligatoire ! La participation est gratuite. Le cours de photo est malheureusement complet.'),
        line('Schild', 'Das Betreten der Baustelle ist verboten. Die Halle ist heute geschlossen. Das Museum bleibt geschlossen.', 'Entering the building site is forbidden. The hall is closed today. The museum stays closed.', 'L’accès au chantier est interdit. La salle est fermée aujourd’hui. Le musée reste fermé.'),
        line('Guide', 'Achtung! Die Teilnahme an der Wanderung erfolgt auf eigene Gefahr. Bitte bringen Sie feste Schuhe und wetterfeste Kleidung mit. Der Klettersteig ist heute wegen des Regens gesperrt.', 'Attention! Participation in the hike is at your own risk. Please bring sturdy shoes and weatherproof clothes. The via ferrata is closed today because of rain.', 'Attention ! La participation à la randonnée se fait à vos propres risques. Apportez de bonnes chaussures et des vêtements imperméables. La via ferrata est fermée aujourd’hui à cause de la pluie.'),
      ],
      words: [{ id: 'b1l19-teilnahme', german: 'die Teilnahme', english: 'the participation', french: 'la participation', gender: 'die', syllables: ['TEIL', 'nah', 'me'], pronunciation: 'dee TILE-nah-meh', example: { de: 'Die Teilnahme ist kostenlos.', en: 'Participation is free of charge.', fr: 'La participation est gratuite.' } }, { id: 'b1l19-anmeldung', german: 'die Anmeldung', english: 'the registration', french: 'l’inscription', gender: 'die', syllables: ['AN', 'mel', 'dung'], pronunciation: 'dee AHN-mel-doong', example: { de: 'Die Anmeldung ist bis Freitag möglich.', en: 'Registration is possible until Friday.', fr: 'L’inscription est possible jusqu’à vendredi.' } }, { id: 'b1l19-ausgebucht', german: 'ausgebucht', english: 'fully booked', french: 'complet', gender: null, syllables: ['AUS', 'ge', 'bucht'], pronunciation: 'OWSS-geh-bookht', example: { de: 'Der Fotokurs ist leider ausgebucht.', en: 'The photography course is unfortunately fully booked.', fr: 'Le cours de photo est malheureusement complet.' } }, { id: 'b1l19-begrenzt', german: 'begrenzt', english: 'limited', french: 'limité', gender: null, syllables: ['be', 'GRENZT'], pronunciation: 'beh-GRENTST', example: { de: 'Die Teilnehmerzahl ist begrenzt.', en: 'The number of participants is limited.', fr: 'Le nombre de participants est limité.' } }, { id: 'b1l19-verboten', german: 'verboten', english: 'forbidden', french: 'interdit', gender: null, syllables: ['ver', 'BO', 'ten'], pronunciation: 'fair-BOH-ten', example: { de: 'Das Betreten der Baustelle ist verboten.', en: 'Entering the building site is forbidden.', fr: 'L’accès au chantier est interdit.' } }, { id: 'b1l19-erforderlich', german: 'erforderlich', english: 'required / necessary', french: 'nécessaire / obligatoire', gender: null, syllables: ['er', 'FOR', 'der', 'lich'], pronunciation: 'air-FOR-der-lish', example: { de: 'Für den Kurs ist eine Anmeldung erforderlich.', en: 'Registration is required for the course.', fr: 'Une inscription est obligatoire pour le cours.' } }, { id: 'b1l19-geschlossen', german: 'geschlossen', english: 'closed', french: 'fermé', gender: null, syllables: ['ge', 'SCHLOS', 'sen'], pronunciation: 'geh-SHLOSS-en', example: { de: 'Die Halle ist heute geschlossen.', en: 'The hall is closed today.', fr: 'La salle est fermée aujourd’hui.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l19-schilder', title: 'Signs, rules and warnings', titleFr: 'Panneaux, règles et avertissements',
      lead: 'After sein / bleiben the participle is a state: no ending. Before a noun it takes an ending. Notices are short and formal.',
      leadFr: 'Après sein / bleiben, le participe est un état : sans terminaison. Devant un nom, il prend une terminaison. Les avis sont courts et formels.',
      explanationMd: 'Notices love participles because they are **short and formal**. After **sein** or **bleiben**, the participle is a **state** and takes **no ending**: **Der Kurs ist ausgebucht. Das Museum bleibt geschlossen. Rauchen ist verboten. Eine Anmeldung ist erforderlich. Die Teilnehmerzahl ist begrenzt.** **Before a noun**, add the ending: **begrenzte Teilnehmerzahl, geänderte Öffnungszeiten, reservierter Tisch.** Typical warnings: **Die Teilnahme erfolgt auf eigene Gefahr.** — participation is at your own risk. **Eltern haften für ihre Kinder.** **Das Betreten der Baustelle ist verboten.**',
      explanationMdFr: 'Les avis adorent les participes parce qu’ils sont **courts et formels**. Après **sein** ou **bleiben**, le participe est un **état** et ne prend **pas de terminaison** : **Der Kurs ist ausgebucht. Das Museum bleibt geschlossen. Rauchen ist verboten. Eine Anmeldung ist erforderlich. Die Teilnehmerzahl ist begrenzt.** **Devant un nom**, ajoute la terminaison : **begrenzte Teilnehmerzahl, geänderte Öffnungszeiten, reservierter Tisch.** Avertissements typiques : **Die Teilnahme erfolgt auf eigene Gefahr.** — la participation se fait à vos propres risques. **Eltern haften für ihre Kinder.** **Das Betreten der Baustelle ist verboten.**',
      tables: [{ title: 'Signs', titleFr: 'Panneaux', headers: ['Sign', 'Meaning'], headersFr: ['Panneau', 'Sens'],
        rows: [['Der Kurs ist ausgebucht.', 'The course is fully booked.'], ['Das Museum bleibt geschlossen.', 'The museum stays closed.'], ['Rauchen ist verboten.', 'Smoking is forbidden.'], ['Anmeldung erforderlich.', 'Registration required.'], ['Begrenzte Teilnehmerzahl.', 'Limited number of participants.'], ['Teilnahme auf eigene Gefahr.', 'Participation at your own risk.']],
        rowsFr: [['Der Kurs ist ausgebucht.', 'Le cours est complet.'], ['Das Museum bleibt geschlossen.', 'Le musée reste fermé.'], ['Rauchen ist verboten.', 'Il est interdit de fumer.'], ['Anmeldung erforderlich.', 'Inscription obligatoire.'], ['Begrenzte Teilnehmerzahl.', 'Nombre de participants limité.'], ['Teilnahme auf eigene Gefahr.', 'Participation à vos risques.']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Der Kurs', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'ausgebucht.', role: 'other' }], en: 'The course is fully booked.', fr: 'Le cours est complet.' },
        { parts: [{ text: 'Die Teilnahme', role: 'subject' }, { text: 'erfolgt', role: 'verb' }, { text: 'auf eigene Gefahr.', role: 'other' }], en: 'Participation is at your own risk.', fr: 'La participation se fait à vos propres risques.' },
      ],
      contrast: {
        a: { label: 'After sein: no ending', labelFr: 'Après sein : sans terminaison', note: 'state', noteFr: 'état', examples: [g('Der Kurs ist ausgebucht.', 'The course is fully booked.', 'Le cours est complet.'), g('Rauchen ist verboten.', 'Smoking is forbidden.', 'Il est interdit de fumer.')] },
        b: { label: 'Before a noun: ending', labelFr: 'Devant un nom : terminaison', note: 'attribute', noteFr: 'épithète', examples: [g('Begrenzte Teilnehmerzahl – Anmeldung erforderlich!', 'Limited number of participants – registration required!', 'Nombre de participants limité – inscription obligatoire !'), g('Reservierter Tisch', 'Reserved table', 'Table réservée')] },
      },
      examples: [
        g('Der Kurs ist leider ausgebucht.', 'The course is unfortunately fully booked.', 'Le cours est malheureusement complet.'),
        g('Das Museum bleibt geschlossen.', 'The museum stays closed.', 'Le musée reste fermé.'),
        g('Das Betreten der Baustelle ist verboten.', 'Entering the building site is forbidden.', 'L’accès au chantier est interdit.'),
        g('Die Teilnahme am Rafting erfolgt auf eigene Gefahr.', 'Participation in the rafting is at your own risk.', 'La participation au rafting se fait à vos propres risques.'),
        g('Begrenzte Teilnehmerzahl – Anmeldung erforderlich!', 'Limited number of participants – registration required!', 'Nombre de participants limité – inscription obligatoire !'),
        g('Der Klettersteig ist heute wegen des Regens gesperrt.', 'The via ferrata is closed today because of rain.', 'La via ferrata est fermée aujourd’hui à cause de la pluie.'),
      ],
      mistakes: [
        { wrong: 'Der Kurs ist ausgebuchte.', right: 'Der Kurs ist ausgebucht.', why: 'After sein the participle has no ending.', whyFr: 'Après sein, le participe n’a pas de terminaison.' },
        { wrong: 'Begrenzt Teilnehmerzahl', right: 'Begrenzte Teilnehmerzahl', why: 'Before a noun it needs an ending.', whyFr: 'Devant un nom, il a besoin d’une terminaison.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l19-e9', prompt: 'Der Kletterkurs ist leider ___. (fully booked)', promptFr: 'Der Kletterkurs ist leider ___. (complet)', answer: 'ausgebucht', hint: 'after "sein" the participle takes no ending', hintFr: 'après « sein », le participe ne prend pas de terminaison' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l19-e5', prompt: 'Listen to the sign. What does it mean?', promptFr: 'Écoute le panneau. Que signifie-t-il ?', audio: { ttsText: 'Achtung! Die Teilnahme an der Wanderung erfolgt auf eigene Gefahr.' }, options: ['You take part at your own risk', 'The hike is cancelled', 'The hike is free'], optionsFr: ['Tu participes à tes risques et périls', 'La randonnée est annulée', 'La randonnée est gratuite'], answer: 0, hint: 'Listen for "auf eigene Gefahr".', hintFr: 'Écoute « auf eigene Gefahr ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l19-e10', prompt: 'Listen. What must you bring?', promptFr: 'Écoute. Que faut-il apporter ?', audio: { ttsText: 'Bitte bringen Sie feste Schuhe und wetterfeste Kleidung mit.' }, options: ['Sturdy shoes and weatherproof clothes', 'A swimsuit and a towel', 'A laptop and a notebook'], optionsFr: ['Des chaussures solides et des vêtements imperméables', 'Un maillot de bain et une serviette', 'Un ordinateur et un cahier'], answer: 0, hint: 'Think of a hiking or climbing course.', hintFr: 'Pense à un cours de randonnée ou d’escalade.' } },

    { kind: 'pronunciation', focus: 'The ending -end is pronounced "-ent": laufend, steigend — stress the verb stem, not the ending', focusFr: 'La terminaison -end se prononce « -ent » : laufend, steigend — accentue le radical, pas la terminaison', items: [{ id: 'b1l19-laufend-pron', german: 'laufend', english: 'running / ongoing', french: 'en cours / qui court', gender: null, syllables: ['LAU', 'fend'], pronunciation: 'LOW-fent', example: { de: 'Das laufende Jahr ist fast vorbei.', en: 'The current year is almost over.', fr: 'L’année en cours est presque terminée.' } }, { id: 'b1l19-steigend-pron', german: 'steigend', english: 'rising', french: 'croissant', gender: null, syllables: ['STEI', 'gend'], pronunciation: 'SHTY-gent', example: { de: 'Die steigenden Preise sind ein Problem.', en: 'The rising prices are a problem.', fr: 'La hausse des prix est un problème.' } }, { id: 'b1l19-lachend-pron', german: 'lachend', english: 'laughing', french: 'riant', gender: null, syllables: ['LA', 'chend'], pronunciation: 'LAH-khent', example: { de: 'Sie kam lachend aus dem Kurs.', en: 'She came out of the course laughing.', fr: 'Elle est sortie du cours en riant.' } }, { id: 'b1l19-ueberraschend-pron', german: 'überraschend', english: 'surprising', french: 'surprenant', gender: null, syllables: ['ü', 'ber', 'RA', 'schend'], pronunciation: 'ew-ber-RAH-shent', example: { de: 'Das Ende war überraschend.', en: 'The ending was surprising.', fr: 'La fin était surprenante.' } }, { id: 'b1l19-fesselnd-pron', german: 'fesselnd', english: 'gripping', french: 'captivant', gender: null, syllables: ['FES', 'selnd'], pronunciation: 'FESS-elnt', example: { de: 'Das Buch ist fesselnd.', en: 'The book is gripping.', fr: 'Le livre est captivant.' } }] },

    { kind: 'wrapup',
      summary: 'You can now use **participles as adjectives** — **kochendes Wasser, die gebuchte Reise** — and read **signs, rules and warnings**. 🎉',
      summaryFr: 'Tu sais maintenant utiliser les **participes comme adjectifs** — **kochendes Wasser, die gebuchte Reise** — et lire **panneaux, règles et avertissements**. 🎉',
      card: { title: 'Participles as adjectives on one page', titleFr: 'Les participes comme adjectifs en une page', sections: [
        { heading: 'Partizip Präsens', headingFr: 'Participe présent', rows: [g('infinitive + d + ending', 'lachend → ein lachendes Kind', 'lachend → ein lachendes Kind'), g('active, happening now', 'das kochende Wasser', 'das kochende Wasser')] },
        { heading: 'Partizip Perfekt', headingFr: 'Participe passé', rows: [g('result / state, usually passive', 'die gebuchte Reise', 'die gebuchte Reise')] },
        { heading: 'Signs', headingFr: 'Panneaux', rows: [g('after sein: no ending', 'ausgebucht · verboten · erforderlich', 'ausgebucht · verboten · erforderlich')] },
      ] } },
  ],
};

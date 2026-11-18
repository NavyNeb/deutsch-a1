import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const a2lektion14: Lesson = {
  id: 'a2-l14', level: 'A2', module: 1, number: 4,
  title: { de: 'Urlaub und Wortbildung', en: 'Holidays and word building', fr: 'Vacances et formation des mots' },
  theme: 'Holiday ads, hotel services, and building new words with -er and -ung', themeFr: 'Annonces de vacances, services d’hôtel et formation de mots avec -er et -ung',
  goals: ['Turn verbs into people with -er (wandern → Wanderer)', 'Turn verbs into nouns with -ung (beraten → Beratung)', 'Express wishes and offers with "würde" + infinitive', 'Understand and describe holiday places and hotel services'], goalsFr: ['Transformer des verbes en personnes avec -er (wandern → Wanderer)', 'Transformer des verbes en noms avec -ung (beraten → Beratung)', 'Exprimer des souhaits et des offres avec « würde » + infinitif', 'Comprendre et décrire des lieux de vacances et des services d’hôtel'],
  canDo: g('Ich kann Urlaubsangebote verstehen, neue Wörter mit -er und -ung bilden und Wünsche mit „würde“ ausdrücken.', 'I can understand holiday offers, build new words with -er and -ung and express wishes with “würde”.', 'Je sais comprendre des offres de vacances, former de nouveaux mots avec -er et -ung et exprimer des souhaits avec « würde ».'),
  steps: [
    { kind: 'intro', title: 'Urlaub und Wortbildung 🏔️', titleFr: 'Vacances et formation des mots 🏔️',
      scene: 'Lara and Tim plan a holiday in the mountains and read the hotel offer.', sceneFr: 'Lara et Tim planifient des vacances à la montagne et lisent l’offre de l’hôtel.',
      goals: ['Talk about holiday places and hotel services', 'Turn verbs into people (-er) and into nouns (-ung)', 'Say what you would like to do with “würde”'],
      goalsFr: ['Parler de lieux de vacances et de services d’hôtel', 'Transformer des verbes en personnes (-er) et en noms (-ung)', 'Dire ce que tu aimerais faire avec « würde »'] },

    // ───────────── 1 · Holiday places ─────────────
    { kind: 'chapter', title: 'Urlaub planen', titleFr: 'Planifier les vacances', blurb: 'Places, offers and bookings.', blurbFr: 'Lieux, offres et réservations.' },

    { kind: 'situation', title: 'Das Angebot', titleFr: 'L’offre',
      setting: 'Lara reads the hotel ad out loud to Tim.', settingFr: 'Lara lit l’annonce de l’hôtel à voix haute à Tim.',
      lines: [
        line('Lara', 'Schau mal: Das Angebot für den Herbst ist wirklich günstig!', 'Look: the offer for autumn is really cheap!', 'Regarde : l’offre pour l’automne est vraiment avantageuse !'),
        line('Tim', 'Was gehört dazu?', 'What is included?', 'Qu’est-ce qui est compris ?'),
        line('Lara', 'Zwei Übernachtungen mit Frühstück, eine Wanderung und eine kostenlose Beratung an der Rezeption.', 'Two overnight stays with breakfast, a hike and free advice at reception.', 'Deux nuits avec petit-déjeuner, une randonnée et un conseil gratuit à la réception.'),
        line('Tim', 'Und wie ist die Landschaft?', 'And what is the scenery like?', 'Et comment est le paysage ?'),
        line('Lara', 'Wunderschön! Hinter dem Hotel beginnt ein großer Wald, und das Zimmer ist ruhig und hell.', 'Beautiful! A big forest begins behind the hotel, and the room is quiet and bright.', 'Magnifique ! Une grande forêt commence derrière l’hôtel, et la chambre est calme et lumineuse.'),
        line('Tim', 'Perfekt für unseren Urlaub. Ich suche Ruhe und Erholung.', 'Perfect for our holiday. I am looking for peace and relaxation.', 'Parfait pour nos vacances. Je cherche le calme et la détente.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l14-e11', prompt: 'What does the offer include?', promptFr: 'Que comprend l’offre ?', options: ['Two nights, breakfast, a hike and free advice', 'Only a hike', 'A flight and a car'], optionsFr: ['Deux nuits, petit-déjeuner, randonnée et conseil gratuit', 'Seulement une randonnée', 'Un vol et une voiture'], answer: 0, explain: 'Lara lists: Übernachtungen, Frühstück, Wanderung, Beratung.', explainFr: 'Lara énumère : Übernachtungen, Frühstück, Wanderung, Beratung.', hint: 'Look at Lara’s third line.', hintFr: 'Regarde la troisième réplique de Lara.' } },

    { kind: 'wordgroup', title: 'Im Hotel', titleFr: 'À l’hôtel',
      items: [{ id: 'a2l14-urlaub', german: 'der Urlaub', english: 'the holiday / vacation', french: 'les vacances', gender: 'der', syllables: ['UR', 'laub'], pronunciation: 'dair OOR-lowp', example: { de: 'Wir machen im Sommer Urlaub am Meer.', en: 'We take a holiday by the sea in summer.', fr: 'En été, nous partons en vacances à la mer.' } }, { id: 'a2l14-gast', german: 'der Gast', english: 'the guest', french: 'l’hôte / le client', gender: 'der', syllables: ['GAST'], pronunciation: 'dair gahst', example: { de: 'Die Gäste frühstücken auf der Terrasse.', en: 'The guests have breakfast on the terrace.', fr: 'Les clients prennent le petit-déjeuner sur la terrasse.' } }, { id: 'a2l14-buchung', german: 'die Buchung', english: 'the booking', french: 'la réservation', gender: 'die', syllables: ['BU', 'chung'], pronunciation: 'dee BOO-khoong', example: { de: 'Ihre Buchung ist bestätigt.', en: 'Your booking is confirmed.', fr: 'Votre réservation est confirmée.' } }, { id: 'a2l14-uebernachtung', german: 'die Übernachtung', english: 'the overnight stay', french: 'la nuitée', gender: 'die', syllables: ['ü', 'ber', 'NACH', 'tung'], pronunciation: 'dee ue-ber-NAHKH-toong', example: { de: 'Die Übernachtung mit Frühstück kostet 80 Euro.', en: 'The overnight stay with breakfast costs 80 euros.', fr: 'La nuitée avec petit-déjeuner coûte 80 euros.' } }, { id: 'a2l14-angebot', german: 'das Angebot', english: 'the offer', french: 'l’offre', gender: 'das', syllables: ['AN', 'ge', 'bot'], pronunciation: 'dahs AHN-ge-boht', example: { de: 'Das Angebot für den Herbst ist günstig.', en: 'The autumn offer is cheap.', fr: 'L’offre pour l’automne est avantageuse.' } }, { id: 'a2l14-erholung', german: 'die Erholung', english: 'the relaxation / rest', french: 'le repos / la détente', gender: 'die', syllables: ['er', 'HO', 'lung'], pronunciation: 'dee er-HOH-loong', example: { de: 'Ich suche Ruhe und Erholung.', en: 'I am looking for peace and relaxation.', fr: 'Je cherche le calme et la détente.' } }] },

    { kind: 'wordgroup', title: 'In der Natur', titleFr: 'Dans la nature',
      items: [{ id: 'a2l14-landschaft', german: 'die Landschaft', english: 'the landscape / scenery', french: 'le paysage', gender: 'die', syllables: ['LAND', 'schaft'], pronunciation: 'dee LAHNT-shahft', example: { de: 'Die Landschaft hier ist wunderschön.', en: 'The scenery here is beautiful.', fr: 'Le paysage ici est magnifique.' } }, { id: 'a2l14-wald', german: 'der Wald', english: 'the forest', french: 'la forêt', gender: 'der', syllables: ['WALD'], pronunciation: 'dair vahlt', example: { de: 'Hinter dem Hotel beginnt ein großer Wald.', en: 'A big forest begins behind the hotel.', fr: 'Derrière l’hôtel commence une grande forêt.' } }, { id: 'a2l14-wiese', german: 'die Wiese', english: 'the meadow', french: 'la prairie', gender: 'die', syllables: ['WIE', 'se'], pronunciation: 'dee VEE-ze', example: { de: 'Auf der Wiese stehen drei Kühe.', en: 'Three cows are standing in the meadow.', fr: 'Trois vaches se tiennent dans la prairie.' } }, { id: 'a2l14-ruhig', german: 'ruhig', english: 'quiet / calm', french: 'calme / tranquille', gender: null, syllables: ['RU', 'hig'], pronunciation: 'ROO-ikh', example: { de: 'Das Zimmer ist ruhig und hell.', en: 'The room is quiet and bright.', fr: 'La chambre est calme et lumineuse.' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l14-e3', prompt: 'Which noun comes from the verb "buchen"?', promptFr: 'Quel nom vient du verbe « buchen » ?', options: ['die Buchung', 'der Bucher', 'das Buchen'], answer: 0, explain: 'buchen + -ung = die Buchung (the booking).', explainFr: 'buchen + -ung = die Buchung (la réservation).', hint: 'The action noun ends in -ung.', hintFr: 'Le nom d’action se termine en -ung.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l14-e8', prompt: 'Which word means "a man who advises"?', promptFr: 'Quel mot signifie « un homme qui conseille » ?', options: ['der Berater', 'die Beratung', 'das Beraten'], answer: 0, explain: 'The person ends in -er; the service ends in -ung.', explainFr: 'La personne se termine en -er ; le service se termine en -ung.', hint: 'A person: verb stem + -er.', hintFr: 'Une personne : radical + -er.' } },

    // ───────────── 2 · Word building ─────────────
    { kind: 'chapter', title: 'Wörter bauen: -er und -ung', titleFr: 'Construire des mots : -er et -ung', blurb: 'One verb, three words.', blurbFr: 'Un verbe, trois mots.' },

    { kind: 'situation', title: 'Wer wandert?', titleFr: 'Qui randonne ?',
      setting: 'At reception a woman explains the hike.', settingFr: 'À la réception, une femme explique la randonnée.',
      lines: [
        line('Beraterin', 'Guten Tag! Möchten Sie eine Beratung zur Wanderung?', 'Good day! Would you like advice on the hike?', 'Bonjour ! Souhaitez-vous un conseil sur la randonnée ?'),
        line('Tim', 'Ja gern. Ich bin kein guter Wanderer.', 'Yes please. I am not a good hiker.', 'Oui, volontiers. Je ne suis pas un bon randonneur.'),
        line('Beraterin', 'Kein Problem. Die Wanderung dauert nur drei Stunden. Der Berater im Büro zeigt Ihnen die Karte.', 'No problem. The hike only takes three hours. The advisor in the office will show you the map.', 'Pas de problème. La randonnée ne dure que trois heures. Le conseiller du bureau vous montre la carte.'),
        line('Lara', 'Und die Buchung?', 'And the booking?', 'Et la réservation ?'),
        line('Beraterin', 'Ihre Buchung ist schon bestätigt.', 'Your booking is already confirmed.', 'Votre réservation est déjà confirmée.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l14-e12', prompt: 'How long does the hike take?', promptFr: 'Combien de temps dure la randonnée ?', options: ['Three hours', 'One day', 'Thirty minutes'], optionsFr: ['Trois heures', 'Une journée', 'Trente minutes'], answer: 0, explain: 'She says: “Die Wanderung dauert nur drei Stunden.”', explainFr: 'Elle dit : « Die Wanderung dauert nur drei Stunden. »', hint: 'Look for “Stunden”.', hintFr: 'Cherche « Stunden ».' } },

    { kind: 'wordgroup', title: 'Verb → Person und Handlung', titleFr: 'Verbe → personne et action',
      items: [{ id: 'a2l14-wanderer', german: 'der Wanderer', english: 'the hiker', french: 'le randonneur', gender: 'der', syllables: ['WAN', 'de', 'rer'], pronunciation: 'dair VAHN-de-rer', example: { de: 'Der Wanderer macht eine Pause im Wald.', en: 'The hiker takes a break in the forest.', fr: 'Le randonneur fait une pause dans la forêt.' } }, { id: 'a2l14-wanderung', german: 'die Wanderung', english: 'the hike', french: 'la randonnée', gender: 'die', syllables: ['WAN', 'de', 'rung'], pronunciation: 'dee VAHN-de-roong', example: { de: 'Morgen machen wir eine lange Wanderung.', en: 'Tomorrow we are going on a long hike.', fr: 'Demain, nous faisons une longue randonnée.' } }, { id: 'a2l14-berater', german: 'der Berater', english: 'the advisor', french: 'le conseiller', gender: 'der', syllables: ['be', 'RA', 'ter'], pronunciation: 'dair be-RAH-ter', example: { de: 'Der Berater zeigt uns viele Angebote.', en: 'The advisor shows us many offers.', fr: 'Le conseiller nous montre beaucoup d’offres.' } }, { id: 'a2l14-beratung', german: 'die Beratung', english: 'the advice / consultation', french: 'le conseil / la consultation', gender: 'die', syllables: ['be', 'RA', 'tung'], pronunciation: 'dee be-RAH-toong', example: { de: 'An der Rezeption gibt es eine kostenlose Beratung.', en: 'There is free advice at the reception.', fr: 'À la réception, il y a un conseil gratuit.' } }] },

    { kind: 'grammar', note: {
      id: 'a2l14-er-ung', title: 'Word building: -er and -ung', titleFr: 'Formation des mots : -er et -ung',
      lead: 'verb + -er = the person (der). verb + -ung = the action (always die).',
      leadFr: 'verbe + -er = la personne (der). verbe + -ung = l’action (toujours die).',
      explanationMd: 'German builds new words from verbs. Add **-er** to the verb stem to name **the person** who does it: **wandern → der Wanderer**. For a woman add **-in**: **die Wanderin**. Add **-ung** to name **the action or its result**: **beraten → die Beratung**. All **-ung** nouns are **feminine (die)**, the plural ends in **-en**. Some verbs change their vowel (**verkaufen → der Verkäufer**). Hotel ads love these words: **Beratung, Buchung, Erholung**.',
      explanationMdFr: 'L’allemand construit de nouveaux mots à partir de verbes. Ajoute **-er** au radical pour nommer **la personne** qui fait l’action : **wandern → der Wanderer**. Pour une femme, ajoute **-in** : **die Wanderin**. Ajoute **-ung** pour nommer **l’action ou son résultat** : **beraten → die Beratung**. Tous les noms en **-ung** sont **féminins (die)**, le pluriel finit en **-en**. Certains verbes changent de voyelle (**verkaufen → der Verkäufer**). Les annonces d’hôtel adorent ces mots : **Beratung, Buchung, Erholung**.',
      tables: [{ title: 'One verb, two nouns', titleFr: 'Un verbe, deux noms', headers: ['Verb', '+ -er (person)', '+ -ung (action)'], headersFr: ['Verbe', '+ -er (personne)', '+ -ung (action)'],
        rows: [['wandern', 'der Wanderer / die Wanderin', 'die Wanderung'], ['beraten', 'der Berater / die Beraterin', 'die Beratung'], ['buchen', 'der Buchende', 'die Buchung'], ['verkaufen', 'der Verkäufer', 'der Verkauf'], ['übernachten', '—', 'die Übernachtung'], ['erholen (sich)', '—', 'die Erholung']],
        rowsFr: [['wandern', 'der Wanderer / die Wanderin', 'die Wanderung'], ['beraten', 'der Berater / die Beraterin', 'die Beratung'], ['buchen', 'der Buchende', 'die Buchung'], ['verkaufen', 'der Verkäufer', 'der Verkauf'], ['übernachten', '—', 'die Übernachtung'], ['erholen (sich)', '—', 'die Erholung']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der Berater', role: 'subject' }, { text: 'zeigt', role: 'verb' }, { text: 'uns', role: 'dative' }, { text: 'die Karte.', role: 'accusative' }], en: 'The advisor shows us the map.', fr: 'Le conseiller nous montre la carte.' },
        { parts: [{ text: 'Die Wanderung', role: 'subject' }, { text: 'dauert', role: 'verb' }, { text: 'drei Stunden.', role: 'time' }], en: 'The hike takes three hours.', fr: 'La randonnée dure trois heures.' },
      ],
      contrast: {
        a: { label: '-er = the person', labelFr: '-er = la personne', note: 'der Wanderer, der Berater', noteFr: 'der Wanderer, der Berater', examples: [g('Der Wanderer macht eine Pause im Wald.', 'The hiker takes a break in the forest.', 'Le randonneur fait une pause dans la forêt.'), g('Die Beraterin hilft mir bei der Buchung.', 'The (female) advisor helps me with the booking.', 'La conseillère m’aide pour la réservation.')] },
        b: { label: '-ung = the action', labelFr: '-ung = l’action', note: 'die Wanderung, die Beratung', noteFr: 'die Wanderung, die Beratung', examples: [g('Die Wanderung dauert drei Stunden.', 'The hike takes three hours.', 'La randonnée dure trois heures.'), g('Die Buchung ist einfach.', 'The booking is easy.', 'La réservation est simple.')] },
      },
      examples: [
        g('Wer wandert, ist ein Wanderer.', 'Someone who hikes is a hiker.', 'Celui qui randonne est un randonneur.'),
        g('Die Beraterin hilft mir bei der Buchung.', 'The advisor helps me with the booking.', 'La conseillère m’aide pour la réservation.'),
        g('Die Wanderungen im Wald sind schön.', 'The hikes in the forest are lovely.', 'Les randonnées dans la forêt sont belles.'),
        g('Die Übernachtung mit Frühstück kostet 80 Euro.', 'The overnight stay with breakfast costs 80 euros.', 'La nuit avec petit-déjeuner coûte 80 euros.'),
        g('Ich brauche Ruhe und Erholung.', 'I need peace and relaxation.', 'J’ai besoin de calme et de détente.'),
        g('Der Verkäufer berät die Gäste.', 'The salesman advises the guests.', 'Le vendeur conseille les clients.'),
      ],
      mistakes: [
        { wrong: 'das Beratung', right: 'die Beratung', why: 'Every noun ending in -ung is feminine.', whyFr: 'Tout nom en -ung est féminin.' },
        { wrong: 'der Verkaufer', right: 'der Verkäufer', why: 'verkaufen takes an umlaut in the -er noun.', whyFr: 'verkaufen prend un tréma dans le nom en -er.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l14-e1', word: 'Beratung', answer: 'die', hint: 'Nouns ending in -ung are always feminine.', hintFr: 'Les noms en -ung sont toujours féminins.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l14-e2', prompt: 'Someone who hikes (wandern) is a ___.', promptFr: 'Une personne qui fait de la randonnée (wandern) est un ___.', answer: 'Wanderer', hint: 'wander + er', hintFr: 'wander + er' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l14-e4', pairs: [{ de: 'wandern', en: 'die Wanderung', fr: 'die Wanderung' }, { de: 'beraten', en: 'die Beratung', fr: 'die Beratung' }, { de: 'erholen', en: 'die Erholung', fr: 'die Erholung' }], hint: 'Match each verb to its -ung noun.', hintFr: 'Associe chaque verbe à son nom en -ung.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l14-e9', prompt: 'verkaufen → der ___ (the seller, with umlaut)', promptFr: 'verkaufen → der ___ (le vendeur, avec tréma)', answer: 'Verkäufer', hint: 'Ver-k-ä-ufer', hintFr: 'Ver-k-ä-ufer' } },

    // ───────────── 3 · würde ─────────────
    { kind: 'chapter', title: 'Wünsche mit „würde“', titleFr: 'Souhaits avec « würde »', blurb: 'What would you like to do?', blurbFr: 'Que ferais-tu volontiers ?' },

    { kind: 'situation', title: 'Was würdest du gern machen?', titleFr: 'Qu’aimerais-tu faire ?',
      setting: 'Lara and Tim dream about their week.', settingFr: 'Lara et Tim rêvent de leur semaine.',
      lines: [
        line('Lara', 'Was würdest du am liebsten machen?', 'What would you like to do most of all?', 'Que ferais-tu le plus volontiers ?'),
        line('Tim', 'Ich würde am liebsten im Wald wandern.', 'I would most like to hike in the forest.', 'Je ferais le plus volontiers des randonnées dans la forêt.'),
        line('Lara', 'Wir würden gern eine Woche am See bleiben und viel schlafen.', 'We would like to stay by the lake for a week and sleep a lot.', 'Nous aimerions rester une semaine au lac et beaucoup dormir.'),
        line('Tim', 'Und ich würde ein ruhiges Zimmer buchen.', 'And I would book a quiet room.', 'Et je réserverais une chambre calme.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l14-e13', prompt: 'What would Tim most like to do?', promptFr: 'Que ferait Tim le plus volontiers ?', options: ['Hike in the forest', 'Sleep all week', 'Go shopping'], optionsFr: ['Faire des randonnées dans la forêt', 'Dormir toute la semaine', 'Faire du shopping'], answer: 0, explain: 'He says: “Ich würde am liebsten im Wald wandern.”', explainFr: 'Il dit : « Ich würde am liebsten im Wald wandern. »', hint: 'Look for “am liebsten”.', hintFr: 'Cherche « am liebsten ».' } },

    { kind: 'grammar', note: {
      id: 'a2l14-wuerde', title: 'Wishes and offers: würde + infinitive', titleFr: 'Souhaits et offres : würde + infinitif',
      lead: 'würde in position 2, the infinitive at the very end.',
      leadFr: 'würde en position 2, l’infinitif tout à la fin.',
      explanationMd: 'To say what you **would like to do**, use **würde** + infinitive. **würde** is in **position 2**, the **infinitive goes to the end** of the sentence. Add **gern** or **am liebsten** (most of all) to make the wish clear. Hotels and shops also use it for **polite offers**: **Wir würden Ihnen gern ein ruhiges Zimmer anbieten.**',
      explanationMdFr: 'Pour dire ce que tu **aimerais faire**, utilise **würde** + infinitif. **würde** est en **position 2**, l’**infinitif va à la fin** de la phrase. Ajoute **gern** ou **am liebsten** (de préférence) pour préciser le souhait. Les hôtels et magasins l’emploient aussi pour des **offres polies** : **Wir würden Ihnen gern ein ruhiges Zimmer anbieten.**',
      tables: [{ title: 'würde in all persons', titleFr: 'würde à toutes les personnes', headers: ['Person', 'würde', 'Example'], headersFr: ['Personne', 'würde', 'Exemple'],
        rows: [['ich', 'würde', 'Ich würde gern wandern.'], ['du', 'würdest', 'Was würdest du machen?'], ['er / sie / es', 'würde', 'Sie würde am liebsten schlafen.'], ['wir', 'würden', 'Wir würden gern bleiben.'], ['ihr', 'würdet', 'Würdet ihr mitkommen?'], ['sie / Sie', 'würden', 'Sie würden ein Zimmer buchen.']],
        rowsFr: [['ich', 'würde', 'Ich würde gern wandern.'], ['du', 'würdest', 'Was würdest du machen?'], ['er / sie / es', 'würde', 'Sie würde am liebsten schlafen.'], ['wir', 'würden', 'Wir würden gern bleiben.'], ['ihr', 'würdet', 'Würdet ihr mitkommen?'], ['sie / Sie', 'würden', 'Sie würden ein Zimmer buchen.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'würde', role: 'verb' }, { text: 'am liebsten', role: 'other' }, { text: 'im Wald', role: 'place' }, { text: 'wandern.', role: 'verb' }], en: 'I would most like to hike in the forest.', fr: 'Je ferais le plus volontiers des randonnées dans la forêt.' },
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'würden', role: 'verb' }, { text: 'gern', role: 'other' }, { text: 'eine Woche', role: 'time' }, { text: 'bleiben.', role: 'verb' }], en: 'We would like to stay for a week.', fr: 'Nous aimerions rester une semaine.' },
      ],
      contrast: {
        a: { label: 'Wish', labelFr: 'Souhait', note: 'gern, am liebsten', noteFr: 'gern, am liebsten', examples: [g('Ich würde gern eine Woche am See bleiben.', 'I would like to stay by the lake for a week.', 'J’aimerais rester une semaine au lac.'), g('Was würdest du am liebsten machen?', 'What would you like to do most of all?', 'Que ferais-tu le plus volontiers ?')] },
        b: { label: 'Polite offer', labelFr: 'Offre polie', note: 'Wir würden Ihnen … anbieten', noteFr: 'Wir würden Ihnen … anbieten', examples: [g('Wir würden Ihnen gern ein ruhiges Zimmer anbieten.', 'We would be glad to offer you a quiet room.', 'Nous serions ravis de vous proposer une chambre calme.'), g('Würden Sie bitte hier unterschreiben?', 'Would you please sign here?', 'Pourriez-vous signer ici, s’il vous plaît ?')] },
      },
      examples: [
        g('Ich würde gern eine Woche am See bleiben.', 'I would like to stay by the lake for a week.', 'J’aimerais rester une semaine au lac.'),
        g('Was würdest du am liebsten machen?', 'What would you like to do most of all?', 'Que ferais-tu le plus volontiers ?'),
        g('Wir würden Ihnen gern ein ruhiges Zimmer anbieten.', 'We would be glad to offer you a quiet room.', 'Nous serions ravis de vous proposer une chambre calme.'),
        g('Würdet ihr mitkommen?', 'Would you come along?', 'Viendriez-vous avec nous ?'),
        g('Er würde am liebsten nur schlafen.', 'He would most like to just sleep.', 'Il aimerait surtout juste dormir.'),
        g('Sie würden ein Zimmer mit Balkon buchen.', 'They would book a room with a balcony.', 'Ils réserveraient une chambre avec balcon.'),
      ],
      mistakes: [
        { wrong: 'Ich würde wandern gern im Wald.', right: 'Ich würde gern im Wald wandern.', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
        { wrong: 'Wir würde gern bleiben.', right: 'Wir würden gern bleiben.', why: 'wir takes würden.', whyFr: 'wir prend würden.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l14-e7', prompt: 'Wir ___ gern ein ruhiges Zimmer buchen. (würde → wir)', promptFr: 'Wir ___ gern ein ruhiges Zimmer buchen. (würde → wir)', answer: 'würden', hint: 'wir → würden', hintFr: 'wir → würden' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l14-e5', tokens: ['wandern', 'Ich', 'würde', 'im', 'am', 'Wald', 'liebsten'], answer: ['Ich', 'würde', 'am', 'liebsten', 'im', 'Wald', 'wandern'], hint: 'The infinitive "wandern" goes to the very end.', hintFr: 'L’infinitif « wandern » va tout à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l14-e6', prompt: 'Listen. What would the couple like to do?', promptFr: 'Écoute. Qu’aimerait faire le couple ?', audio: { ttsText: 'Wir würden gern eine Woche am See bleiben und viel schlafen.' }, options: ['Stay a week at the lake', 'Spend a weekend in the city', 'Hike in the mountains'], optionsFr: ['Rester une semaine au bord du lac', 'Passer un week-end en ville', 'Faire de la randonnée en montagne'], answer: 0, hint: 'Listen for "eine Woche" and "am See".', hintFr: 'Écoute « eine Woche » et « am See ».' } },

    { kind: 'pronunciation', focus: 'The ending -ung sounds like "oong" (short u + ng) — and -er is a soft, unstressed "uh".', focusFr: 'La terminaison -ung se prononce « oung » (u court + ng) — et -er est un « e » doux et non accentué.', items: [{ id: 'a2l14-wanderung-pron', german: 'die Wanderung', english: 'the hike', french: 'la randonnée', gender: 'die', syllables: ['WAN', 'de', 'rung'], pronunciation: 'dee VAHN-de-roong', example: { de: 'Die Wanderung dauert drei Stunden.', en: 'The hike takes three hours.', fr: 'La randonnée dure trois heures.' } }, { id: 'a2l14-beratung-pron', german: 'die Beratung', english: 'the advice', french: 'le conseil', gender: 'die', syllables: ['be', 'RA', 'tung'], pronunciation: 'dee be-RAH-toong', example: { de: 'Die Beratung ist kostenlos.', en: 'The advice is free.', fr: 'Le conseil est gratuit.' } }, { id: 'a2l14-wanderer-pron', german: 'der Wanderer', english: 'the hiker', french: 'le randonneur', gender: 'der', syllables: ['WAN', 'de', 'rer'], pronunciation: 'dair VAHN-de-rer', example: { de: 'Der Wanderer trinkt Wasser.', en: 'The hiker drinks water.', fr: 'Le randonneur boit de l’eau.' } }, { id: 'a2l14-uebernachtung-pron', german: 'die Übernachtung', english: 'the overnight stay', french: 'la nuitée', gender: 'die', syllables: ['ü', 'ber', 'NACH', 'tung'], pronunciation: 'dee ue-ber-NAHKH-toong', example: { de: 'Wir buchen zwei Übernachtungen.', en: 'We book two overnight stays.', fr: 'Nous réservons deux nuitées.' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l14-e10', prompt: 'Listen to the hotel ad. What does the hotel offer?', promptFr: 'Écoute l’annonce de l’hôtel. Qu’offre-t-il ?', audio: { ttsText: 'Unser Hotel bietet Ruhe, Erholung und freundliche Beratung.' }, options: ['Peace, relaxation and friendly advice', 'A big swimming pool and a disco', 'Cheap flights and a rental car'], optionsFr: ['Du calme, de la détente et des conseils aimables', 'Une grande piscine et une discothèque', 'Des vols pas chers et une voiture de location'], answer: 0, hint: 'Listen for the three -ung / noun offers.', hintFr: 'Écoute les trois offres (noms).' } },

    { kind: 'wrapup',
      summary: 'You can now read a holiday offer, build nouns with **-er** and **-ung**, and say what you **würde** like to do. 🎉',
      summaryFr: 'Tu sais maintenant lire une offre de vacances, former des noms en **-er** et **-ung**, et dire ce que tu **würde** aimer faire. 🎉',
      card: { title: 'Word building and wishes on one page', titleFr: 'Formation des mots et souhaits en une page', sections: [
        { heading: 'Word building', headingFr: 'Formation des mots', rows: [g('wandern → der Wanderer (die Wanderin)', 'the person', 'la personne'), g('beraten → die Beratung', 'the action, always die', 'l’action, toujours die'), g('verkaufen → der Verkäufer', 'with umlaut', 'avec tréma')] },
        { heading: 'würde + infinitive', headingFr: 'würde + infinitif', rows: [g('ich würde · du würdest · er würde', 'position 2', 'position 2'), g('wir würden · ihr würdet · sie würden', 'infinitive at the end', 'infinitif à la fin'), g('gern · am liebsten', 'make the wish clear', 'précisent le souhait')] },
      ] } },
  ],
};

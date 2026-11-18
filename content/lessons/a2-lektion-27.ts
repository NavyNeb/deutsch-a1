import type { Lesson } from '../types';
import { g, line, word } from '../author';

// New A2 lesson (Goethe A2 "Reisen und Verkehr"): delays and connections, booking a hotel, wegen / trotz / während.
// Written in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).

export const a2lektion27: Lesson = {
  id: 'a2-l27', level: 'A2', module: 7, number: 27,
  title: { de: 'Reisen: Zug, Hotel, Probleme', en: 'Travel: train, hotel, problems', fr: 'Voyager : train, hôtel, problèmes' },
  theme: 'Delays and connections, booking a hotel, complaining politely and giving causes with obwohl, wegen, trotz',
  themeFr: 'Retards et correspondances, réserver un hôtel, se plaindre poliment et donner des causes avec obwohl, wegen, trotz',
  goals: ['Handle train delays and changes', 'Book a hotel room and complain politely', 'Use obwohl, trotzdem, wegen and trotz'],
  goalsFr: ['Gérer retards et changements de train', 'Réserver une chambre d’hôtel et se plaindre poliment', 'Utiliser obwohl, trotzdem, wegen et trotz'],
  canDo: g('Ich kann auf Reisen Probleme klären, ein Hotelzimmer buchen und mit „obwohl“, „wegen“ und „trotz“ Gründe nennen.', 'I can sort out problems while travelling, book a hotel room and give reasons with “obwohl”, “wegen” and “trotz”.', 'Je sais régler des problèmes en voyage, réserver une chambre d’hôtel et donner des raisons avec « obwohl », « wegen » et « trotz ».'),
  steps: [
    { kind: 'intro', title: 'Auf Reisen 🚆', titleFr: 'En voyage 🚆',
      scene: 'Lara and Tim travel to Munich: the train is late, the hotel room is noisy — and they handle both.', sceneFr: 'Lara et Tim voyagent à Munich : le train a du retard, la chambre d’hôtel est bruyante — et ils gèrent les deux.',
      goals: ['Delays, connections, tickets', 'Book a room and complain politely', 'obwohl / trotzdem and wegen / trotz'],
      goalsFr: ['Retards, correspondances, billets', 'Réserver une chambre et se plaindre poliment', 'obwohl / trotzdem et wegen / trotz'] },

    // ───────────── 1 · Train ─────────────
    { kind: 'chapter', title: 'Verspätung und Anschluss', titleFr: 'Retard et correspondance', blurb: 'umsteigen, Gleis, Verspätung.', blurbFr: 'changer, voie, retard.' },

    { kind: 'situation', title: 'Der Zug hat Verspätung', titleFr: 'Le train a du retard',
      setting: 'At the station, Lara asks an employee for help.', settingFr: 'À la gare, Lara demande de l’aide à un employé.',
      lines: [
        line('Lara', 'Entschuldigung, mein Zug nach München hat Verspätung. Verpasse ich den Anschluss?', 'Excuse me, my train to Munich is late. Will I miss the connection?', 'Excusez-moi, mon train pour Munich a du retard. Vais-je rater la correspondance ?'),
        line('Mitarbeiter', 'Der Zug hat 20 Minuten Verspätung. In Nürnberg müssen Sie umsteigen, auf Gleis 7.', 'The train is 20 minutes late. You have to change in Nuremberg, on platform 7.', 'Le train a 20 minutes de retard. À Nuremberg, vous devez changer, voie 7.'),
        line('Lara', 'Und wenn der Zug ausfällt?', 'And if the train is cancelled?', 'Et si le train est supprimé ?'),
        line('Mitarbeiter', 'Dann können Sie mit Ihrer Fahrkarte den nächsten Zug nehmen. Sie müssen nichts nachzahlen.', 'Then you can take the next train with your ticket. You don’t have to pay extra.', 'Alors vous pouvez prendre le prochain train avec votre billet. Vous n’avez rien à payer en plus.'),
        line('Lara', 'Danke! Obwohl der Zug spät ist, kommen wir noch pünktlich an.', 'Thanks! Although the train is late, we will still arrive on time.', 'Merci ! Bien que le train soit en retard, nous arriverons quand même à l’heure.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l27-e1', prompt: 'Where must Lara change trains?', promptFr: 'Où Lara doit-elle changer de train ?', options: ['In Nuremberg, platform 7', 'In Berlin, platform 3', 'In Munich'], optionsFr: ['À Nuremberg, voie 7', 'À Berlin, voie 3', 'À Munich'], answer: 0, explain: 'The employee says: “In Nürnberg müssen Sie umsteigen, auf Gleis 7.”', explainFr: 'L’employé dit : « In Nürnberg müssen Sie umsteigen, auf Gleis 7. »', hint: 'Look for “umsteigen”.', hintFr: 'Cherche « umsteigen ».' } },

    { kind: 'wordgroup', title: 'Am Bahnhof', titleFr: 'À la gare',
      items: [
        word('a2l27-verspaetung', 'die Verspätung', 'die', 'the delay', 'le retard', ['ver', 'SPÄ', 'tung'], 'fer-SHPAY-toong', g('Der Zug hat zehn Minuten Verspätung.', 'The train is ten minutes late.', 'Le train a dix minutes de retard.')),
        word('a2l27-anschluss', 'der Anschluss', 'der', 'the connection', 'la correspondance', ['AN', 'schluss'], 'AHN-shloos', g('Ich verpasse den Anschluss.', 'I miss the connection.', 'Je rate la correspondance.')),
        word('a2l27-gleis', 'das Gleis', 'das', 'the platform', 'la voie', ['GLEIS'], 'GLYSS', g('Der Zug fährt von Gleis 7.', 'The train leaves from platform 7.', 'Le train part de la voie 7.')),
        word('a2l27-umsteigen', 'umsteigen', null, 'to change (trains)', 'changer (de train)', ['UM', 'stei', 'gen'], 'OOM-shty-gen', g('In Nürnberg steigen wir um.', 'We change in Nuremberg.', 'Nous changeons à Nuremberg.')),
        word('a2l27-ausfallen', 'ausfallen', null, 'to be cancelled', 'être supprimé', ['AUS', 'fal', 'len'], 'OWS-fal-len', g('Der Zug fällt heute aus.', 'The train is cancelled today.', 'Le train est supprimé aujourd’hui.')),
        word('a2l27-fahrkarte', 'die Fahrkarte', 'die', 'the ticket', 'le billet', ['FAHR', 'kar', 'te'], 'FAHR-kar-tuh', g('Ich kaufe eine Fahrkarte.', 'I buy a ticket.', 'J’achète un billet.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l27-obwohl', title: 'obwohl and trotzdem', titleFr: 'obwohl et trotzdem',
      lead: 'obwohl = although: a subordinate clause, verb at the end. trotzdem = nevertheless: main clause, verb in position 2.',
      leadFr: 'obwohl = bien que : subordonnée, verbe à la fin. trotzdem = quand même : principale, verbe en position 2.',
      explanationMd: '**obwohl** (although) starts a **subordinate clause**: the **verb goes to the end**, with a **comma**: **Obwohl der Zug spät ist, kommen wir pünktlich an.** **trotzdem** (nevertheless) is an **adverb** in a **main clause** and takes **position 1**, so the **verb comes second**: **Der Zug ist spät. Trotzdem kommen wir pünktlich an.** Both express a **contrast**; **obwohl** connects the two ideas in one sentence, **trotzdem** starts a new one.',
      explanationMdFr: '**obwohl** (bien que) introduit une **subordonnée** : le **verbe va à la fin**, avec une **virgule** : **Obwohl der Zug spät ist, kommen wir pünktlich an.** **trotzdem** (quand même) est un **adverbe** dans une **principale** et occupe la **position 1**, donc le **verbe vient en deuxième** : **Der Zug ist spät. Trotzdem kommen wir pünktlich an.** Les deux expriment un **contraste** ; **obwohl** relie deux idées dans une phrase, **trotzdem** en ouvre une nouvelle.',
      tables: [{ title: 'obwohl vs trotzdem', titleFr: 'obwohl vs trotzdem', headers: ['', 'obwohl', 'trotzdem'], headersFr: ['', 'obwohl', 'trotzdem'],
        rows: [['Type', 'conjunction', 'adverb'], ['Verb', 'at the end', 'position 2'], ['Example', 'Obwohl der Zug spät ist, kommen wir an.', 'Der Zug ist spät. Trotzdem kommen wir an.']],
        rowsFr: [['Type', 'conjonction', 'adverbe'], ['Verbe', 'à la fin', 'position 2'], ['Exemple', 'Obwohl der Zug spät ist, kommen wir an.', 'Der Zug ist spät. Trotzdem kommen wir an.']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Obwohl', role: 'connector' }, { text: 'der Zug', role: 'subject' }, { text: 'spät', role: 'other' }, { text: 'ist,', role: 'verb' }, { text: 'kommen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'pünktlich', role: 'other' }, { text: 'an.', role: 'verb' }], en: 'Although the train is late, we arrive on time.', fr: 'Bien que le train soit en retard, nous arrivons à l’heure.' },
        { parts: [{ text: 'Der Zug', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'spät.', role: 'other' }, { text: 'Trotzdem', role: 'connector' }, { text: 'kommen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'pünktlich', role: 'other' }, { text: 'an.', role: 'verb' }], en: 'The train is late. Nevertheless we arrive on time.', fr: 'Le train est en retard. Nous arrivons quand même à l’heure.' },
      ],
      contrast: {
        a: { label: 'weil = cause', labelFr: 'weil = cause', note: 'because', noteFr: 'parce que', examples: [g('Ich bleibe zu Hause, weil es regnet.', 'I stay at home because it is raining.', 'Je reste à la maison parce qu’il pleut.'), g('Wir sind spät, weil der Zug Verspätung hat.', 'We are late because the train is delayed.', 'Nous sommes en retard parce que le train a du retard.')] },
        b: { label: 'obwohl = contrast', labelFr: 'obwohl = contraste', note: 'although', noteFr: 'bien que', examples: [g('Ich gehe raus, obwohl es regnet.', 'I go out although it is raining.', 'Je sors bien qu’il pleuve.'), g('Wir sind pünktlich, obwohl der Zug Verspätung hat.', 'We are on time although the train is delayed.', 'Nous sommes à l’heure bien que le train ait du retard.')] },
      },
      examples: [
        g('Obwohl der Zug spät ist, kommen wir pünktlich an.', 'Although the train is late, we arrive on time.', 'Bien que le train soit en retard, nous arrivons à l’heure.'),
        g('Der Zug ist spät. Trotzdem kommen wir pünktlich an.', 'The train is late. Nevertheless we arrive on time.', 'Le train est en retard. Nous arrivons quand même à l’heure.'),
        g('Ich gehe raus, obwohl es regnet.', 'I go out although it is raining.', 'Je sors bien qu’il pleuve.'),
        g('Es regnet. Trotzdem gehe ich raus.', 'It is raining. I go out anyway.', 'Il pleut. Je sors quand même.'),
        g('Obwohl ich müde bin, lerne ich noch Deutsch.', 'Although I am tired, I still study German.', 'Bien que je sois fatigué, j’étudie encore l’allemand.'),
        g('Er hat Hunger, trotzdem isst er nichts.', 'He is hungry, yet he eats nothing.', 'Il a faim, pourtant il ne mange rien.'),
      ],
      mistakes: [
        { wrong: 'Obwohl der Zug ist spät, kommen wir an.', right: 'Obwohl der Zug spät ist, kommen wir an.', why: 'After obwohl the verb goes last.', whyFr: 'Après obwohl, le verbe va en dernier.' },
        { wrong: 'Trotzdem wir kommen pünktlich an.', right: 'Trotzdem kommen wir pünktlich an.', why: 'After trotzdem the verb comes second.', whyFr: 'Après trotzdem, le verbe vient en deuxième.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l27-e2', prompt: '___ der Zug spät ist, kommen wir pünktlich an.', promptFr: '___ der Zug spät ist, kommen wir pünktlich an.', answer: 'Obwohl', hint: 'although', hintFr: 'bien que' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'a2l27-e3', pairs: [{ de: 'die Verspätung', en: 'the delay', fr: 'le retard' }, { de: 'umsteigen', en: 'to change trains', fr: 'changer de train' }, { de: 'das Gleis', en: 'the platform', fr: 'la voie' }, { de: 'die Fahrkarte', en: 'the ticket', fr: 'le billet' }], hint: 'Match each word to its meaning.', hintFr: 'Associe chaque mot à son sens.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l27-e4', tokens: ['Trotzdem', 'pünktlich', 'wir', 'kommen', 'an'], answer: ['Trotzdem', 'kommen', 'wir', 'pünktlich', 'an'], hint: 'Trotzdem is position 1, the verb is second.', hintFr: 'Trotzdem est en position 1, le verbe en deuxième.' } },

    // ───────────── 2 · Hotel ─────────────
    { kind: 'chapter', title: 'Ein Zimmer buchen', titleFr: 'Réserver une chambre', blurb: 'Einzelzimmer, Doppelzimmer, Beschwerde.', blurbFr: 'chambre simple, double, réclamation.' },

    { kind: 'situation', title: 'An der Rezeption', titleFr: 'À la réception',
      setting: 'Lara and Tim check in and then complain about noise.', settingFr: 'Lara et Tim s’enregistrent puis se plaignent du bruit.',
      lines: [
        line('Lara', 'Guten Abend. Wir haben ein Doppelzimmer für zwei Nächte gebucht.', 'Good evening. We booked a double room for two nights.', 'Bonsoir. Nous avons réservé une chambre double pour deux nuits.'),
        line('Rezeption', 'Auf den Namen Mbeki? Frühstück ist inklusive. Hier ist Ihr Schlüssel, Zimmer 12.', 'Under the name Mbeki? Breakfast is included. Here is your key, room 12.', 'Au nom de Mbeki ? Le petit-déjeuner est compris. Voici votre clé, chambre 12.'),
        line('Tim', 'Entschuldigung, das Zimmer ist zu laut. Könnten wir ein ruhigeres Zimmer bekommen?', 'Excuse me, the room is too noisy. Could we get a quieter room?', 'Excusez-moi, la chambre est trop bruyante. Pourrions-nous en avoir une plus calme ?'),
        line('Rezeption', 'Das tut mir leid. Wir haben noch ein Einzelzimmer im vierten Stock, aber kein Doppelzimmer.', 'I am sorry. We still have a single room on the fourth floor, but no double room.', 'Je suis désolé. Il nous reste une chambre simple au quatrième étage, mais pas de chambre double.'),
        line('Lara', 'Dann bleiben wir. Aber die Dusche ist kaputt und es gibt kein Handtuch. Das ist eine Beschwerde.', 'Then we’ll stay. But the shower is broken and there is no towel. That is a complaint.', 'Alors nous restons. Mais la douche est cassée et il n’y a pas de serviette. C’est une réclamation.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l27-e5', prompt: 'What is wrong with the room?', promptFr: 'Qu’est-ce qui ne va pas dans la chambre ?', options: ['It is too noisy', 'It is too small', 'It is too expensive'], optionsFr: ['Elle est trop bruyante', 'Elle est trop petite', 'Elle est trop chère'], answer: 0, explain: 'Tim says: “Das Zimmer ist zu laut.”', explainFr: 'Tim dit : « Das Zimmer ist zu laut. »', hint: 'Look for “zu laut”.', hintFr: 'Cherche « zu laut ».' } },

    { kind: 'wordgroup', title: 'Im Hotel', titleFr: 'À l’hôtel',
      items: [
        word('a2l27-doppelzimmer', 'das Doppelzimmer', 'das', 'the double room', 'la chambre double', ['DOP', 'pel', 'zim', 'mer'], 'DOP-pel-tsim-mer', g('Wir buchen ein Doppelzimmer.', 'We are booking a double room.', 'Nous réservons une chambre double.')),
        word('a2l27-einzelzimmer', 'das Einzelzimmer', 'das', 'the single room', 'la chambre simple', ['EIN', 'zel', 'zim', 'mer'], 'INE-tsel-tsim-mer', g('Ich brauche ein Einzelzimmer.', 'I need a single room.', 'J’ai besoin d’une chambre simple.')),
        word('a2l27-rezeption', 'die Rezeption', 'die', 'the reception', 'la réception', ['re', 'zep', 'ZI', 'on'], 'ray-tsep-tsee-OHN', g('Die Rezeption ist rund um die Uhr offen.', 'Reception is open around the clock.', 'La réception est ouverte 24 h sur 24.')),
        word('a2l27-schluessel', 'der Schlüssel', 'der', 'the key', 'la clé', ['SCHLÜS', 'sel'], 'SHLUES-sel', g('Hier ist Ihr Schlüssel.', 'Here is your key.', 'Voici votre clé.')),
        word('a2l27-beschwerde', 'die Beschwerde', 'die', 'the complaint', 'la réclamation', ['be', 'SCHWER', 'de'], 'buh-SHVAIR-duh', g('Ich habe eine Beschwerde.', 'I have a complaint.', 'J’ai une réclamation.')),
        word('a2l27-kaputt', 'kaputt', null, 'broken', 'cassé', ['ka', 'PUTT'], 'kah-POOT', g('Die Dusche ist kaputt.', 'The shower is broken.', 'La douche est cassée.')),
      ] },

    { kind: 'grammar', note: {
      id: 'a2l27-beschwerde', title: 'Complaining politely', titleFr: 'Se plaindre poliment',
      lead: 'Say what is wrong (zu + adjective, kaputt, kein-), then ask for a solution with Könnten Sie …?',
      leadFr: 'Dis ce qui ne va pas (zu + adjectif, kaputt, kein-), puis demande une solution avec Könnten Sie …?',
      explanationMd: 'A polite complaint has **three steps**: 1) **say what is wrong**: **zu + adjective** (**zu laut, zu kalt, zu klein**), **kaputt**, or **kein / keine** (**Es gibt kein Handtuch.**); 2) **soften with an apology**: **Entschuldigung, … / Es tut mir leid, aber …**; 3) **ask for a solution**: **Könnten Sie das bitte reparieren? Könnten wir ein ruhigeres Zimmer bekommen?** The **comparative** (**ruhigeres, größeres**) gets an **ending** before a noun: **ein ruhigeres Zimmer**. When you book, use **ein Doppelzimmer für zwei Nächte** and ask **Ist das Frühstück inklusive?**',
      explanationMdFr: 'Une réclamation polie se fait en **trois temps** : 1) **dire ce qui ne va pas** : **zu + adjectif** (**zu laut, zu kalt, zu klein**), **kaputt**, ou **kein / keine** (**Es gibt kein Handtuch.**) ; 2) **adoucir avec une excuse** : **Entschuldigung, … / Es tut mir leid, aber …** ; 3) **demander une solution** : **Könnten Sie das bitte reparieren ? Könnten wir ein ruhigeres Zimmer bekommen ?** Le **comparatif** (**ruhigeres, größeres**) prend une **terminaison** devant un nom : **ein ruhigeres Zimmer**. À la réservation, utilise **ein Doppelzimmer für zwei Nächte** et demande **Ist das Frühstück inklusive ?**',
      tables: [{ title: 'Three steps', titleFr: 'Trois temps', headers: ['Step', 'German'], headersFr: ['Étape', 'Allemand'],
        rows: [['1 · Problem', 'Das Zimmer ist zu laut. · Die Dusche ist kaputt. · Es gibt kein Handtuch.'], ['2 · Soften', 'Entschuldigung, … · Es tut mir leid, aber …'], ['3 · Solution', 'Könnten wir ein ruhigeres Zimmer bekommen? · Könnten Sie das bitte reparieren?']],
        rowsFr: [['1 · Problème', 'Das Zimmer ist zu laut. · Die Dusche ist kaputt. · Es gibt kein Handtuch.'], ['2 · Adoucir', 'Entschuldigung, … · Es tut mir leid, aber …'], ['3 · Solution', 'Könnten wir ein ruhigeres Zimmer bekommen ? · Könnten Sie das bitte reparieren ?']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Das Zimmer', role: 'subject' }, { text: 'ist', role: 'verb' }, { text: 'zu laut.', role: 'other' }], en: 'The room is too noisy.', fr: 'La chambre est trop bruyante.' },
        { parts: [{ text: 'Könnten', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'ein ruhigeres Zimmer', role: 'accusative' }, { text: 'bekommen?', role: 'verb' }], en: 'Could we get a quieter room?', fr: 'Pourrions-nous avoir une chambre plus calme ?' },
      ],
      contrast: {
        a: { label: 'Rude', labelFr: 'Impoli', note: 'a command', noteFr: 'un ordre', examples: [g('Geben Sie mir ein anderes Zimmer!', 'Give me another room!', 'Donnez-moi une autre chambre !'), g('Die Dusche ist kaputt!', 'The shower is broken!', 'La douche est cassée !')] },
        b: { label: 'Polite', labelFr: 'Poli', note: 'apology + request', noteFr: 'excuse + demande', examples: [g('Entschuldigung, könnten wir ein ruhigeres Zimmer bekommen?', 'Excuse me, could we get a quieter room?', 'Excusez-moi, pourrions-nous avoir une chambre plus calme ?'), g('Es tut mir leid, aber die Dusche ist kaputt. Könnten Sie das reparieren?', 'I am sorry, but the shower is broken. Could you repair it?', 'Je suis désolé, mais la douche est cassée. Pourriez-vous la réparer ?')] },
      },
      examples: [
        g('Das Zimmer ist zu laut.', 'The room is too noisy.', 'La chambre est trop bruyante.'),
        g('Könnten wir ein ruhigeres Zimmer bekommen?', 'Could we get a quieter room?', 'Pourrions-nous avoir une chambre plus calme ?'),
        g('Die Dusche ist kaputt und es gibt kein Handtuch.', 'The shower is broken and there is no towel.', 'La douche est cassée et il n’y a pas de serviette.'),
        g('Wir haben ein Doppelzimmer für zwei Nächte gebucht.', 'We booked a double room for two nights.', 'Nous avons réservé une chambre double pour deux nuits.'),
        g('Ist das Frühstück inklusive?', 'Is breakfast included?', 'Le petit-déjeuner est-il compris ?'),
        g('Könnten Sie das bitte reparieren?', 'Could you please repair that?', 'Pourriez-vous réparer cela, s’il vous plaît ?'),
      ],
      mistakes: [
        { wrong: 'Das Zimmer ist laut zu.', right: 'Das Zimmer ist zu laut.', why: 'zu comes before the adjective.', whyFr: 'zu vient avant l’adjectif.' },
        { wrong: 'Es gibt nicht Handtuch.', right: 'Es gibt kein Handtuch.', why: 'Negate a noun without an article with kein-.', whyFr: 'On nie un nom sans article avec kein-.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'a2l27-e6', word: 'Schlüssel', answer: 'der', hint: 'Masculine: der Schlüssel.', hintFr: 'Masculin : der Schlüssel.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l27-e7', prompt: 'Das Zimmer ist ___ laut. (too)', promptFr: 'Das Zimmer ist ___ laut. (trop)', answer: 'zu', hint: 'zu + adjective', hintFr: 'zu + adjectif' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l27-e8', prompt: 'Listen. What is the problem?', promptFr: 'Écoute. Quel est le problème ?', audio: { ttsText: 'Entschuldigung, die Dusche ist kaputt. Könnten Sie das bitte reparieren?' }, options: ['The shower is broken', 'The key is lost', 'The bed is too small'], optionsFr: ['La douche est cassée', 'La clé est perdue', 'Le lit est trop petit'], answer: 0, hint: 'kaputt', hintFr: 'kaputt' } },

    // ───────────── 3 · wegen / trotz ─────────────
    { kind: 'chapter', title: 'wegen, trotz, während', titleFr: 'wegen, trotz, während', blurb: 'Prepositions with the genitive.', blurbFr: 'Prépositions avec le génitif.' },

    { kind: 'situation', title: 'Wegen des Wetters', titleFr: 'À cause du temps',
      setting: 'Lara and Tim tell a friend about their trip.', settingFr: 'Lara et Tim racontent leur voyage à une amie.',
      lines: [
        line('Freundin', 'Wie war eure Reise?', 'How was your trip?', 'Comment était votre voyage ?'),
        line('Lara', 'Wegen des Wetters hatte der Zug Verspätung. Trotz des Regens haben wir die Stadt besichtigt.', 'Because of the weather the train was late. Despite the rain we visited the city.', 'À cause du temps, le train a eu du retard. Malgré la pluie, nous avons visité la ville.'),
        line('Tim', 'Während des Urlaubs haben wir viel gesehen. Wegen der Baustelle mussten wir einen Umweg machen.', 'During the holiday we saw a lot. Because of the roadworks we had to take a detour.', 'Pendant les vacances, nous avons beaucoup vu. À cause du chantier, nous avons dû faire un détour.'),
        line('Freundin', 'Und trotz allem war es schön?', 'And despite everything it was lovely?', 'Et malgré tout, c’était bien ?'),
        line('Lara', 'Ja! Trotz der Verspätung war es ein toller Urlaub.', 'Yes! Despite the delay it was a great holiday.', 'Oui ! Malgré le retard, c’étaient de super vacances.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'a2l27-genitiv-praep', title: 'wegen, trotz, während + genitive', titleFr: 'wegen, trotz, während + génitif',
      lead: 'wegen = because of, trotz = despite, während = during. They take the genitive: des / der.',
      leadFr: 'wegen = à cause de, trotz = malgré, während = pendant. Ils prennent le génitif : des / der.',
      explanationMd: 'Three useful prepositions take the **genitive**: **wegen** (because of), **trotz** (despite), **während** (during). Genitive articles: **des** (m, n, + **-(e)s** on the noun), **der** (f and plural): **wegen des Wetters, trotz des Regens, während der Reise, trotz der Verspätung**. In **everyday speech** many people use the **dative** instead (**wegen dem Wetter**), but in **writing and exams** use the **genitive**. Compare with the conjunctions: **obwohl** + clause (**obwohl es regnet**) and **trotz** + noun (**trotz des Regens**).',
      explanationMdFr: 'Trois prépositions utiles prennent le **génitif** : **wegen** (à cause de), **trotz** (malgré), **während** (pendant). Articles au génitif : **des** (m, n, + **-(e)s** sur le nom), **der** (f et pluriel) : **wegen des Wetters, trotz des Regens, während der Reise, trotz der Verspätung**. Dans la **langue courante**, beaucoup utilisent le **datif** (**wegen dem Wetter**), mais à l’**écrit et aux examens**, utilise le **génitif**. Compare avec les conjonctions : **obwohl** + proposition (**obwohl es regnet**) et **trotz** + nom (**trotz des Regens**).',
      tables: [{ title: 'Genitive articles', titleFr: 'Articles au génitif', headers: ['', 'm', 'f', 'n', 'plural'], headersFr: ['', 'm', 'f', 'n', 'pluriel'],
        rows: [['Genitive', 'des Regens', 'der Verspätung', 'des Wetters', 'der Ferien'], ['Example', 'trotz des Regens', 'wegen der Verspätung', 'wegen des Wetters', 'während der Ferien']],
        rowsFr: [['Génitif', 'des Regens', 'der Verspätung', 'des Wetters', 'der Ferien'], ['Exemple', 'trotz des Regens', 'wegen der Verspätung', 'wegen des Wetters', 'während der Ferien']], highlightCol: 0 }],
      anatomy: [
        { parts: [{ text: 'Wegen des Wetters', role: 'other' }, { text: 'hatte', role: 'verb' }, { text: 'der Zug', role: 'subject' }, { text: 'Verspätung.', role: 'accusative' }], en: 'Because of the weather the train was late.', fr: 'À cause du temps, le train a eu du retard.' },
        { parts: [{ text: 'Trotz des Regens', role: 'other' }, { text: 'haben', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'die Stadt', role: 'accusative' }, { text: 'besichtigt.', role: 'verb' }], en: 'Despite the rain we visited the city.', fr: 'Malgré la pluie, nous avons visité la ville.' },
      ],
      contrast: {
        a: { label: 'Conjunction + clause', labelFr: 'Conjonction + proposition', note: 'verb at the end', noteFr: 'verbe à la fin', examples: [g('Obwohl es regnet, gehen wir raus.', 'Although it rains, we go out.', 'Bien qu’il pleuve, nous sortons.'), g('Weil der Zug Verspätung hat, warten wir.', 'Because the train is late, we wait.', 'Parce que le train a du retard, nous attendons.')] },
        b: { label: 'Preposition + noun', labelFr: 'Préposition + nom', note: 'genitive', noteFr: 'génitif', examples: [g('Trotz des Regens gehen wir raus.', 'Despite the rain we go out.', 'Malgré la pluie, nous sortons.'), g('Wegen der Verspätung warten wir.', 'Because of the delay we wait.', 'À cause du retard, nous attendons.')] },
      },
      examples: [
        g('Wegen des Wetters hatte der Zug Verspätung.', 'Because of the weather the train was late.', 'À cause du temps, le train a eu du retard.'),
        g('Trotz des Regens haben wir die Stadt besichtigt.', 'Despite the rain we visited the city.', 'Malgré la pluie, nous avons visité la ville.'),
        g('Während des Urlaubs haben wir viel gesehen.', 'During the holiday we saw a lot.', 'Pendant les vacances, nous avons beaucoup vu.'),
        g('Wegen der Baustelle mussten wir einen Umweg machen.', 'Because of the roadworks we had to take a detour.', 'À cause du chantier, nous avons dû faire un détour.'),
        g('Trotz der Verspätung war es ein toller Urlaub.', 'Despite the delay it was a great holiday.', 'Malgré le retard, c’étaient de super vacances.'),
        g('Während der Fahrt schläft er.', 'During the journey he sleeps.', 'Pendant le trajet, il dort.'),
      ],
      mistakes: [
        { wrong: 'Wegen der Wetter hatte der Zug Verspätung.', right: 'Wegen des Wetters hatte der Zug Verspätung.', why: 'Neuter genitive: des + -s.', whyFr: 'Génitif neutre : des + -s.' },
        { wrong: 'Trotz es regnet gehen wir raus.', right: 'Obwohl es regnet, gehen wir raus. / Trotz des Regens gehen wir raus.', why: 'trotz + noun; obwohl + clause.', whyFr: 'trotz + nom ; obwohl + proposition.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'a2l27-e9', prompt: 'Wegen ___ Wetters hatte der Zug Verspätung. (genitive, das Wetter)', promptFr: 'Wegen ___ Wetters hatte der Zug Verspätung. (génitif, das Wetter)', answer: 'des', hint: 'neuter genitive: des', hintFr: 'génitif neutre : des' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'a2l27-e10', prompt: 'Which sentence is correct?', promptFr: 'Quelle phrase est correcte ?', options: ['Trotz des Regens gehen wir raus.', 'Trotz der Regen gehen wir raus.', 'Trotz dem Regen gehen wir raus (written).'], optionsFr: ['Trotz des Regens gehen wir raus.', 'Trotz der Regen gehen wir raus.', 'Trotz dem Regen gehen wir raus (à l’écrit).'], answer: 0, explain: 'trotz takes the genitive: des Regens.', explainFr: 'trotz prend le génitif : des Regens.', hint: 'masculine genitive: des … -s', hintFr: 'génitif masculin : des … -s' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'a2l27-e11', prompt: 'Listen. Why was the train late?', promptFr: 'Écoute. Pourquoi le train était-il en retard ?', audio: { ttsText: 'Wegen des Wetters hatte der Zug Verspätung.' }, options: ['Because of the weather', 'Because of a strike', 'Because of roadworks'], optionsFr: ['À cause du temps', 'À cause d’une grève', 'À cause d’un chantier'], answer: 0, hint: 'wegen des …', hintFr: 'wegen des …' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'a2l27-e12', tokens: ['Trotz', 'war', 'der Verspätung', 'es', 'toller', 'ein', 'Urlaub'], answer: ['Trotz', 'der Verspätung', 'war', 'es', 'ein', 'toller', 'Urlaub'], hint: 'Trotz der Verspätung = position 1, verb second.', hintFr: 'Trotz der Verspätung = position 1, verbe en deuxième.' } },

    { kind: 'pronunciation', focus: 'The ä in Verspätung, the long ü in Schlüssel and the sch + w in Beschwerde', focusFr: 'Le ä dans Verspätung, le ü long dans Schlüssel et le sch + w dans Beschwerde',
      items: [
        word('a2l27-verspaetung-pron', 'Verspätung', null, 'delay', 'retard', ['ver', 'SPÄ', 'tung'], 'fer-SHPAY-toong', g('Der Zug hat Verspätung.', 'The train is late.', 'Le train a du retard.')),
        word('a2l27-schluessel-pron', 'Schlüssel', null, 'key', 'clé', ['SCHLÜS', 'sel'], 'SHLUES-sel', g('Der Schlüssel ist weg.', 'The key is gone.', 'La clé a disparu.')),
        word('a2l27-beschwerde-pron', 'Beschwerde', null, 'complaint', 'réclamation', ['be', 'SCHWER', 'de'], 'buh-SHVAIR-duh', g('Ich schreibe eine Beschwerde.', 'I am writing a complaint.', 'J’écris une réclamation.')),
        word('a2l27-gleis-pron', 'Gleis', null, 'platform', 'voie', ['GLEIS'], 'GLYSS', g('Gleis zwei, bitte.', 'Platform two, please.', 'Voie deux, s’il vous plaît.')),
      ] },

    { kind: 'wrapup',
      summary: 'You can now handle **delays and connections**, **book a hotel and complain politely**, and give **reasons and contrasts** with **obwohl / trotzdem** and **wegen / trotz / während**. 🎉',
      summaryFr: 'Tu sais maintenant gérer **retards et correspondances**, **réserver un hôtel et te plaindre poliment**, et donner **raisons et contrastes** avec **obwohl / trotzdem** et **wegen / trotz / während**. 🎉',
      card: { title: 'Travel on one page', titleFr: 'Voyager en une page', sections: [
        { heading: 'Contrast', headingFr: 'Contraste', rows: [g('Obwohl …, + verb last', 'subordinate clause', 'subordonnée'), g('Trotzdem + verb 2nd', 'main clause', 'principale')] },
        { heading: 'Complaint', headingFr: 'Réclamation', rows: [g('zu laut · kaputt · kein …', 'say the problem', 'dire le problème'), g('Könnten Sie das bitte …?', 'ask politely', 'demander poliment')] },
        { heading: 'Genitive', headingFr: 'Génitif', rows: [g('wegen · trotz · während + des / der', 'des Wetters · der Reise', 'des Wetters · der Reise')] },
      ] } },
  ],
};

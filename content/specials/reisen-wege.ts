import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const reisenWege = defineSpecial({
  slug: 'reisen-wege',
  number: 26,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['l11', 'l18', 'a2-l2', 'a2-l14'],
  title: ['Reisen & Wege', 'Travel & directions', 'Voyages & itinéraires'],
  theme: [
    'Getting around: transport, tickets and stations, asking the way, airports, hotels and holiday destinations',
    'Se déplacer : transports, billets et gares, demander son chemin, aéroports, hôtels et destinations de vacances',
  ],
  goals: [
    'Name means of transport and say how you travel (mit + dative)',
    'Handle tickets, timetables and delays at the station',
    'Ask for and understand directions',
    'Book a room and talk about holiday destinations (nach, in, an)',
  ],
  goalsFr: [
    'Nommer les moyens de transport et dire comment on voyage (mit + datif)',
    'Se débrouiller avec billets, horaires et retards à la gare',
    'Demander et comprendre un itinéraire',
    'Réserver une chambre et parler de destinations de vacances (nach, in, an)',
  ],
  steps: [
    intro(
      'Entschuldigung, wie komme ich zum Bahnhof?', 'Excusez-moi, comment aller à la gare ?',
      'You arrive in a German city with a suitcase, your phone is almost empty, and you need the station, a ticket and finally your hotel. These are the situations where a few correct sentences save the day. You will learn the words, the small prepositions that always cause trouble, and the typical sentences you hear and say.',
      'Tu arrives dans une ville allemande avec une valise, ton téléphone est presque vide, et il te faut la gare, un billet et enfin ton hôtel. Dans ces situations, quelques phrases correctes sauvent la mise. Tu apprends les mots, les petites prépositions qui posent toujours problème, et les phrases typiques que tu entends et dis.',
      [
        'Transport words and mit + dative',
        'Station life: tickets, platforms, delays, separable verbs',
        'Directions: left, right, straight on, zum / zur',
        'Airport, hotel and holiday: nach, in, an',
      ],
      [
        'Les mots du transport et mit + datif',
        'La vie en gare : billets, quais, retards, verbes séparables',
        'Directions : à gauche, à droite, tout droit, zum / zur',
        'Aéroport, hôtel et vacances : nach, in, an',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Getting around', 'Se déplacer',
      'Means of transport and the small word mit.', 'Les moyens de transport et le petit mot mit.',
    ),
    vocab('sp-reisen-wege-zug', 'der Zug', 'the train', 'le train', 'der', 'ZUG', 'dair TSOOK', ['Der Zug nach Hamburg fährt pünktlich.', 'The train to Hamburg leaves on time.', 'Le train pour Hambourg part à l’heure.']),
    vocab('sp-reisen-wege-bus', 'der Bus', 'the bus', 'le bus', 'der', 'BUS', 'dair BOOS', ['Der Bus kommt alle zehn Minuten.', 'The bus comes every ten minutes.', 'Le bus passe toutes les dix minutes.']),
    vocab('sp-reisen-wege-ubahn', 'die U-Bahn', 'the underground', 'le métro', 'die', 'U-bahn', 'dee OO-bahn', ['Ich nehme die U-Bahn zur Arbeit.', 'I take the underground to work.', 'Je prends le métro pour aller au travail.']),
    vocab('sp-reisen-wege-flugzeug', 'das Flugzeug', 'the aeroplane', 'l’avion', 'das', 'FLUG-zeug', 'dahs FLOOK-tsoyk', ['Das Flugzeug landet um zehn Uhr.', 'The plane lands at ten o’clock.', 'L’avion atterrit à dix heures.']),
    vocab('sp-reisen-wege-fahrrad', 'das Fahrrad', 'the bicycle', 'le vélo', 'das', 'FAHR-rad', 'dahs FAAR-raat', ['Im Sommer fahre ich mit dem Fahrrad.', 'In summer I go by bike.', 'En été, je vais à vélo.']),
    vocab('sp-reisen-wege-bahnhof', 'der Bahnhof', 'the (train) station', 'la gare', 'der', 'BAHN-hof', 'dair BAAN-hohf', ['Der Bahnhof ist im Zentrum.', 'The station is in the centre.', 'La gare est au centre.']),
    vocab('sp-reisen-wege-haltestelle', 'die Haltestelle', 'the stop (bus, tram)', 'l’arrêt', 'die', 'HAL-te-stel-le', 'dee HAL-teh-shtel-eh', ['Die Haltestelle ist gleich um die Ecke.', 'The stop is just around the corner.', 'L’arrêt est juste au coin.']),
    grammar(
      'sp-rw-mit',
      ['Travelling: mit + dative', 'Voyager : mit + datif'],
      [
        'To say **how** you travel, use **mit** + **dative**. The article changes:\n\n- der → **mit dem** Bus, **mit dem** Zug\n- die → **mit der** U-Bahn, **mit der** Straßenbahn\n- das → **mit dem** Auto, **mit dem** Flugzeug\n- plural → **mit den** Kindern\n\nOn foot is the exception: **zu Fuß** (no article). Ask: **Wie** kommst du zur Arbeit? **Womit** fährst du? — Ich fahre **mit dem** Fahrrad.',
        'Pour dire **comment** on voyage, on utilise **mit** + **datif**. L’article change :\n\n- der → **mit dem** Bus, **mit dem** Zug\n- die → **mit der** U-Bahn, **mit der** Straßenbahn\n- das → **mit dem** Auto, **mit dem** Flugzeug\n- pluriel → **mit den** Kindern\n\nÀ pied est l’exception : **zu Fuß** (sans article). Demander : **Wie** kommst du zur Arbeit ? **Womit** fährst du ? — Ich fahre **mit dem** Fahrrad.',
      ],
      [
        ['Ich fahre mit dem Bus zur Schule.', 'I take the bus to school.', 'Je vais à l’école en bus.'],
        ['Sie fährt mit der U-Bahn nach Hause.', 'She goes home by underground.', 'Elle rentre en métro.'],
        ['Wir fliegen mit dem Flugzeug nach Wien.', 'We fly to Vienna by plane.', 'Nous allons à Vienne en avion.'],
        ['Ich gehe gern zu Fuß.', 'I like to walk.', 'J’aime aller à pied.'],
      ],
    ),
    match(
      'sp-rw-e1',
      [
        ['der Zug', 'the train', 'le train'],
        ['der Bus', 'the bus', 'le bus'],
        ['die U-Bahn', 'the underground', 'le métro'],
        ['das Flugzeug', 'the aeroplane', 'l’avion'],
        ['das Fahrrad', 'the bicycle', 'le vélo'],
        ['die Haltestelle', 'the stop', 'l’arrêt'],
      ],
      ['Match the transport words with their translation.', 'Associe les mots de transport à leur traduction.'],
    ),
    fb(
      'sp-rw-e2',
      ['Ich fahre mit ___ U-Bahn. (die)', 'Ich fahre mit ___ U-Bahn. (die)'],
      'der',
      ['mit + dative feminine: der.', 'mit + datif féminin : der.'],
    ),
    mc(
      'sp-rw-e3',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich fahre mit dem Bus.', 'Ich fahre mit der Bus.', 'Ich fahre mit den Bus.'],
      ['Ich fahre mit dem Bus.', 'Ich fahre mit der Bus.', 'Ich fahre mit den Bus.'], 0,
      ['der Bus → mit dem Bus (dative masculine).', 'der Bus → mit dem Bus (datif masculin).'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'At the station', 'À la gare',
      'Tickets, platforms, delays — and verbs that split in two.', 'Billets, quais, retards — et des verbes qui se coupent en deux.',
    ),
    vocab('sp-reisen-wege-fahrkarte', 'die Fahrkarte', 'the ticket', 'le billet', 'die', 'FAHR-kar-te', 'dee FAAR-kar-teh', ['Eine Fahrkarte nach Köln, bitte.', 'One ticket to Cologne, please.', 'Un billet pour Cologne, s’il vous plaît.']),
    vocab('sp-reisen-wege-fahrplan', 'der Fahrplan', 'the timetable', 'l’horaire', 'der', 'FAHR-plan', 'dair FAAR-plaan', ['Im Fahrplan steht die Abfahrtszeit.', 'The departure time is in the timetable.', 'L’heure de départ est dans l’horaire.']),
    vocab('sp-reisen-wege-gleis', 'das Gleis', 'the platform, track', 'le quai, la voie', 'das', 'GLEIS', 'dahs GLICE', ['Der Zug fährt auf Gleis fünf ab.', 'The train leaves from platform five.', 'Le train part de la voie cinq.']),
    vocab('sp-reisen-wege-verspaetung', 'die Verspätung', 'the delay', 'le retard', 'die', 'ver-SPÄ-tung', 'dee fer-SHPAY-toong', ['Der Zug hat zehn Minuten Verspätung.', 'The train is ten minutes late.', 'Le train a dix minutes de retard.']),
    vocab('sp-reisen-wege-abfahren', 'abfahren', 'to depart', 'partir (véhicule)', null, 'AB-fah-ren', 'AHP-faa-ren', ['Wann fährt der Zug ab?', 'When does the train leave?', 'Quand part le train ?']),
    vocab('sp-reisen-wege-ankommen', 'ankommen', 'to arrive', 'arriver', null, 'AN-kom-men', 'AHN-kom-en', ['Der Bus kommt um neun Uhr an.', 'The bus arrives at nine.', 'Le bus arrive à neuf heures.']),
    vocab('sp-reisen-wege-umsteigen', 'umsteigen', 'to change (trains)', 'changer (de train)', null, 'UM-stei-gen', 'OOM-shty-gen', ['In Frankfurt musst du umsteigen.', 'You have to change in Frankfurt.', 'Tu dois changer à Francfort.']),
    grammar(
      'sp-rw-separable',
      ['Separable verbs in travel', 'Verbes séparables en voyage'],
      [
        'Many travel verbs are **separable**: **ab**fahren, **an**kommen, **um**steigen, **ein**steigen, **aus**steigen. In a main clause the verb takes position 2 and the prefix goes **to the end**:\n\n- Der Zug **fährt** um 9 Uhr **ab**.\n- Wann **kommst** du **an**?\n\nWith a modal verb or in the infinitive, the verb stays whole at the end:\n\n- Ich **muss** in Köln **umsteigen**.\n- Wir **wollen** in Bonn **aussteigen**.',
        'Beaucoup de verbes de voyage sont **séparables** : **ab**fahren, **an**kommen, **um**steigen, **ein**steigen, **aus**steigen. Dans une principale, le verbe prend la position 2 et le préfixe va **à la fin** :\n\n- Der Zug **fährt** um 9 Uhr **ab**.\n- Wann **kommst** du **an** ?\n\nAvec un verbe modal ou à l’infinitif, le verbe reste entier à la fin :\n\n- Ich **muss** in Köln **umsteigen**.\n- Wir **wollen** in Bonn **aussteigen**.',
      ],
      [
        ['Der Zug fährt um neun Uhr ab.', 'The train leaves at nine.', 'Le train part à neuf heures.'],
        ['Wann kommt der Bus an?', 'When does the bus arrive?', 'Quand le bus arrive-t-il ?'],
        ['Ich muss in Mainz umsteigen.', 'I have to change in Mainz.', 'Je dois changer à Mayence.'],
      ],
    ),
    ap('sp-rw-e4', 'Fahrkarte', 'die', ['Fahrkarte is feminine.', 'Fahrkarte est féminin.']),
    ap('sp-rw-e5', 'Gleis', 'das', ['Gleis is neuter.', 'Gleis est neutre.']),
    ap('sp-rw-e6', 'Fahrplan', 'der', ['Fahrplan is masculine.', 'Fahrplan est masculin.']),
    fb(
      'sp-rw-e7',
      ['Der Zug fährt um acht Uhr ___. (abfahren)', 'Der Zug fährt um acht Uhr ___. (abfahren)'],
      'ab',
      ['The prefix goes to the end.', 'Le préfixe va à la fin.'],
    ),
    wo(
      'sp-rw-e8',
      ['der', 'an?', 'Wann', 'Zug', 'kommt'],
      ['Wann', 'kommt', 'der', 'Zug', 'an?'],
      ['Question word, verb, subject, prefix last.', 'Mot interrogatif, verbe, sujet, préfixe à la fin.'],
    ),
    lc(
      'sp-rw-e9',
      ['Listen. What is the problem with the train?', 'Écoute. Quel est le problème avec le train ?'],
      'Achtung am Gleis fünf: Der Zug nach München hat zehn Minuten Verspätung.',
      ['It is ten minutes late', 'It has been cancelled', 'It leaves from another platform'], ['Il a dix minutes de retard', 'Il est supprimé', 'Il part d’un autre quai'], 0,
      ['Listen for "Verspätung".', 'Écoute « Verspätung ».'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Asking the way', 'Demander son chemin',
      'Left, right, straight on — and zum / zur.', 'Gauche, droite, tout droit — et zum / zur.',
    ),
    vocab('sp-reisen-wege-links', 'links', 'left', 'à gauche', null, 'LINKS', 'LINKS', ['Biegen Sie links ab.', 'Turn left.', 'Tournez à gauche.']),
    vocab('sp-reisen-wege-rechts', 'rechts', 'right', 'à droite', null, 'RECHTS', 'REKHTS', ['Das Hotel ist rechts.', 'The hotel is on the right.', 'L’hôtel est à droite.']),
    vocab('sp-reisen-wege-geradeaus', 'geradeaus', 'straight ahead', 'tout droit', null, 'ge-ra-de-AUS', 'geh-RAA-deh-ows', ['Gehen Sie geradeaus.', 'Go straight ahead.', 'Allez tout droit.']),
    vocab('sp-reisen-wege-kreuzung', 'die Kreuzung', 'the crossroads', 'le carrefour', 'die', 'KREU-zung', 'dee KROY-tsoong', ['An der Kreuzung gehen Sie links.', 'At the crossroads, go left.', 'Au carrefour, allez à gauche.']),
    vocab('sp-reisen-wege-ampel', 'die Ampel', 'the traffic light', 'le feu de circulation', 'die', 'AM-pel', 'dee AHM-pel', ['An der Ampel müssen Sie rechts abbiegen.', 'At the traffic light you have to turn right.', 'Au feu, vous devez tourner à droite.']),
    vocab('sp-reisen-wege-strasse', 'die Straße', 'the street', 'la rue', 'die', 'STRA-ße', 'dee SHTRAA-seh', ['Nehmen Sie die zweite Straße links.', 'Take the second street on the left.', 'Prenez la deuxième rue à gauche.']),
    grammar(
      'sp-rw-way',
      ['Asking and giving directions', 'Demander et donner un itinéraire'],
      [
        'To ask the way: **Entschuldigung, wo ist …?** or **Wie komme ich zu…?** After **zu** the dative contracts with the article:\n\n- der → **zum** Bahnhof (zu + dem)\n- das → **zum** Hotel\n- die → **zur** Haltestelle (zu + der)\n\nYou will hear instructions in the polite **Sie**-imperative (verb first): **Gehen** Sie geradeaus. **Biegen** Sie links **ab**. **Nehmen** Sie die zweite Straße rechts. With friends: **Geh** geradeaus. **Nimm** die erste Straße links.\n\nOrder words: **dann** (then), **danach**, **bis zur Ampel** (until), **an der Kreuzung** (at the crossing).',
        'Pour demander son chemin : **Entschuldigung, wo ist … ?** ou **Wie komme ich zu … ?** Après **zu**, le datif se contracte avec l’article :\n\n- der → **zum** Bahnhof (zu + dem)\n- das → **zum** Hotel\n- die → **zur** Haltestelle (zu + der)\n\nTu entendras des instructions à l’impératif de politesse **Sie** (verbe en premier) : **Gehen** Sie geradeaus. **Biegen** Sie links **ab**. **Nehmen** Sie die zweite Straße rechts. Entre amis : **Geh** geradeaus. **Nimm** die erste Straße links.\n\nMots d’ordre : **dann** (puis), **danach**, **bis zur Ampel** (jusqu’à), **an der Kreuzung** (au croisement).',
      ],
      [
        ['Entschuldigung, wie komme ich zum Bahnhof?', 'Excuse me, how do I get to the station?', 'Excusez-moi, comment aller à la gare ?'],
        ['Gehen Sie geradeaus und dann links.', 'Go straight ahead and then left.', 'Allez tout droit puis à gauche.'],
        ['Wie komme ich zur Haltestelle?', 'How do I get to the stop?', 'Comment aller à l’arrêt ?'],
        ['Nehmen Sie die zweite Straße rechts.', 'Take the second street on the right.', 'Prenez la deuxième rue à droite.'],
      ],
    ),
    match(
      'sp-rw-e10',
      [
        ['links', 'left', 'à gauche'],
        ['rechts', 'right', 'à droite'],
        ['geradeaus', 'straight ahead', 'tout droit'],
        ['die Kreuzung', 'the crossroads', 'le carrefour'],
        ['die Ampel', 'the traffic light', 'le feu de circulation'],
      ],
      ['Match the direction words.', 'Associe les mots de direction.'],
    ),
    fb(
      'sp-rw-e11',
      ['Wie komme ich ___ Bahnhof? (zu + dem)', 'Wie komme ich ___ Bahnhof ? (zu + dem)'],
      'zum',
      ['zu + dem = zum.', 'zu + dem = zum.'],
    ),
    fb(
      'sp-rw-e12',
      ['Wie komme ich ___ Haltestelle? (zu + der)', 'Wie komme ich ___ Haltestelle ? (zu + der)'],
      'zur',
      ['zu + der = zur.', 'zu + der = zur.'],
    ),
    wo(
      'sp-rw-e13',
      ['links.', 'Gehen', 'dann', 'Sie', 'geradeaus', 'und'],
      ['Gehen', 'Sie', 'geradeaus', 'und', 'dann', 'links.'],
      ['Imperative: verb first, then Sie.', 'Impératif : verbe en premier, puis Sie.'],
    ),
    lc(
      'sp-rw-e14',
      ['Listen. Which way do you turn at the traffic light?', 'Écoute. De quel côté tourne-t-on au feu ?'],
      'Gehen Sie hier geradeaus und an der Ampel rechts.',
      ['Right', 'Left', 'Straight on'], ['À droite', 'À gauche', 'Tout droit'], 0,
      ['Listen for "Ampel rechts".', 'Écoute « Ampel rechts ».'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Airport and hotel', 'Aéroport et hôtel',
      'Checking in, booking a room, breakfast and keys.', 'Enregistrement, réservation, petit-déjeuner et clés.',
    ),
    vocab('sp-reisen-wege-flughafen', 'der Flughafen', 'the airport', 'l’aéroport', 'der', 'FLUG-ha-fen', 'dair FLOOK-haa-fen', ['Der Flughafen ist weit vom Zentrum.', 'The airport is far from the centre.', 'L’aéroport est loin du centre.']),
    vocab('sp-reisen-wege-koffer', 'der Koffer', 'the suitcase', 'la valise', 'der', 'KOF-fer', 'dair KOF-er', ['Mein Koffer ist sehr schwer.', 'My suitcase is very heavy.', 'Ma valise est très lourde.']),
    vocab('sp-reisen-wege-zimmer', 'das Zimmer', 'the room', 'la chambre', 'das', 'ZIM-mer', 'dahs TSIM-er', ['Ich möchte ein Zimmer für zwei Nächte.', 'I would like a room for two nights.', 'Je voudrais une chambre pour deux nuits.']),
    vocab('sp-reisen-wege-fruehstueck', 'das Frühstück', 'the breakfast', 'le petit-déjeuner', 'das', 'FRÜH-stück', 'dahs FRUE-shtuek', ['Das Frühstück ist von sieben bis zehn Uhr.', 'Breakfast is from seven to ten.', 'Le petit-déjeuner est de sept à dix heures.']),
    vocab('sp-reisen-wege-buchen', 'buchen', 'to book', 'réserver', null, 'BU-chen', 'BOO-khen', ['Ich habe ein Hotel gebucht.', 'I have booked a hotel.', 'J’ai réservé un hôtel.']),
    grammar(
      'sp-rw-hotel',
      ['Hotel and airport phrases', 'Phrases pour l’hôtel et l’aéroport'],
      [
        'Polite requests use **ich möchte** (I would like) or **haben Sie …?**:\n\n- **Ich möchte** ein Zimmer **buchen**. / **Haben Sie** ein Zimmer frei?\n- **Ich habe** ein Doppelzimmer **reserviert**. (Perfekt with *haben*)\n- Wie viel kostet das Zimmer **pro Nacht**? Ist **das Frühstück inklusive**?\n- Wo ist **der Check-in**? — Mein Flug geht um 11 Uhr.\n\nRoom words: **das Einzelzimmer** (single), **das Doppelzimmer** (double), **der Schlüssel** (key), **die Rezeption** (reception).',
        'Les demandes polies utilisent **ich möchte** (je voudrais) ou **haben Sie … ?** :\n\n- **Ich möchte** ein Zimmer **buchen**. / **Haben Sie** ein Zimmer frei ?\n- **Ich habe** ein Doppelzimmer **reserviert**. (parfait avec *haben*)\n- Wie viel kostet das Zimmer **pro Nacht** ? Ist **das Frühstück inklusive** ?\n- Wo ist **der Check-in** ? — Mein Flug geht um 11 Uhr.\n\nMots des chambres : **das Einzelzimmer** (simple), **das Doppelzimmer** (double), **der Schlüssel** (clé), **die Rezeption** (réception).',
      ],
      [
        ['Ich möchte ein Zimmer für zwei Nächte buchen.', 'I would like to book a room for two nights.', 'Je voudrais réserver une chambre pour deux nuits.'],
        ['Haben Sie ein Doppelzimmer frei?', 'Do you have a double room available?', 'Avez-vous une chambre double de libre ?'],
        ['Ist das Frühstück inklusive?', 'Is breakfast included?', 'Le petit-déjeuner est-il inclus ?'],
      ],
    ),
    ap('sp-rw-e15', 'Flughafen', 'der', ['Flughafen is masculine.', 'Flughafen est masculin.']),
    ap('sp-rw-e16', 'Zimmer', 'das', ['Zimmer is neuter.', 'Zimmer est neutre.']),
    mc(
      'sp-rw-e17',
      ['You want to book a room. What do you say?', 'Tu veux réserver une chambre. Que dis-tu ?'],
      ['Ich möchte ein Zimmer buchen.', 'Ich möchte ein Zimmer buche.', 'Ich buchen ein Zimmer möchte.'],
      ['Ich möchte ein Zimmer buchen.', 'Ich möchte ein Zimmer buche.', 'Ich buchen ein Zimmer möchte.'], 0,
      ['möchte + infinitive at the end.', 'möchte + infinitif à la fin.'],
    ),
    lc(
      'sp-rw-e18',
      ['Listen. For how long is the room booked?', 'Écoute. Pour combien de temps la chambre est-elle réservée ?'],
      'Guten Tag, ich habe ein Doppelzimmer für drei Nächte reserviert.',
      ['Three nights', 'Two nights', 'Three weeks'], ['Trois nuits', 'Deux nuits', 'Trois semaines'], 0,
      ['Listen for "drei Nächte".', 'Écoute « drei Nächte ».'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Holiday and destinations', 'Vacances et destinations',
      'nach Berlin, in die Schweiz, an den Strand — the right little word.', 'nach Berlin, in die Schweiz, an den Strand — le bon petit mot.',
    ),
    vocab('sp-reisen-wege-urlaub', 'der Urlaub', 'the holiday, leave', 'les vacances, le congé', 'der', 'UR-laub', 'dair OOR-lowp', ['Im Urlaub fahre ich ans Meer.', 'On holiday I go to the sea.', 'En vacances, je vais à la mer.']),
    vocab('sp-reisen-wege-strand', 'der Strand', 'the beach', 'la plage', 'der', 'STRAND', 'dair SHTRANT', ['Wir liegen den ganzen Tag am Strand.', 'We lie on the beach all day.', 'Nous restons toute la journée à la plage.']),
    vocab('sp-reisen-wege-sehenswuerdigkeit', 'die Sehenswürdigkeit', 'the sight, attraction', 'le lieu d’intérêt', 'die', 'SEH-ens-wür-dig-keit', 'dee ZAY-ens-vuer-dikh-kite', ['In Berlin gibt es viele Sehenswürdigkeiten.', 'There are many sights in Berlin.', 'Il y a beaucoup de lieux d’intérêt à Berlin.']),
    grammar(
      'sp-rw-where-to',
      ['Where to? nach, in, an', 'Où aller ? nach, in, an'],
      [
        'The question is **Wohin?** — the answer depends on the destination:\n\n- **nach** + city or country **without article**: *nach Berlin*, *nach Frankreich*, *nach Hause*\n- **in die** + feminine / plural countries (with an article): *in die Schweiz*, *in die Türkei*, *in die USA*\n- **an den / ans** + water or coast: *an den Strand*, *ans Meer*, *an den See*\n- **in die** + the mountains: *in die Berge*\n- **zu** + a person or a building: *zu Freunden*, *zum Arzt*\n\nSay *wo* you are with the dative: *in der Schweiz*, *am Strand*.',
        'La question est **Wohin ?** — la réponse dépend de la destination :\n\n- **nach** + ville ou pays **sans article** : *nach Berlin*, *nach Frankreich*, *nach Hause*\n- **in die** + pays féminins / pluriels (avec article) : *in die Schweiz*, *in die Türkei*, *in die USA*\n- **an den / ans** + eau ou côte : *an den Strand*, *ans Meer*, *an den See*\n- **in die** + les montagnes : *in die Berge*\n- **zu** + une personne ou un lieu : *zu Freunden*, *zum Arzt*\n\nPour dire *où* on est, on utilise le datif : *in der Schweiz*, *am Strand*.',
      ],
      [
        ['Wir fahren im August nach Italien.', 'In August we are going to Italy.', 'En août, nous allons en Italie.'],
        ['Sie fliegt in die Schweiz.', 'She flies to Switzerland.', 'Elle prend l’avion pour la Suisse.'],
        ['Im Sommer fahren wir ans Meer.', 'In summer we go to the seaside.', 'En été, nous allons à la mer.'],
        ['Am Wochenende gehen wir in die Berge.', 'At the weekend we go to the mountains.', 'Le week-end, nous allons à la montagne.'],
      ],
    ),
    fb(
      'sp-rw-e19',
      ['Wir fliegen ___ Spanien. (no article)', 'Wir fliegen ___ Spanien. (sans article)'],
      'nach',
      ['Countries without article: nach.', 'Pays sans article : nach.'],
    ),
    mc(
      'sp-rw-e20',
      ['"She travels to Switzerland." Which is correct?', '« Elle voyage en Suisse. » Laquelle est correcte ?'],
      ['Sie reist in die Schweiz.', 'Sie reist nach Schweiz.', 'Sie reist zu die Schweiz.'],
      ['Sie reist in die Schweiz.', 'Sie reist nach Schweiz.', 'Sie reist zu die Schweiz.'], 0,
      ['die Schweiz has an article → in die.', 'die Schweiz a un article → in die.'],
    ),

    wrapup(
      '**Transport** — der Zug, der Bus, die U-Bahn, das Flugzeug, das Fahrrad. mit + dative: mit dem Bus, mit der U-Bahn; zu Fuß.\n\n**Station** — die Fahrkarte, der Fahrplan, das Gleis, die Verspätung. Separable verbs: Der Zug fährt um 9 Uhr ab · Ich muss umsteigen.\n\n**Directions** — links, rechts, geradeaus; Wie komme ich zum Bahnhof / zur Haltestelle? Gehen Sie geradeaus, dann links.\n\n**Hotel** — Ich möchte ein Zimmer buchen · Haben Sie … frei? · Ist das Frühstück inklusive?\n\n**Destinations** — nach Berlin / Frankreich · in die Schweiz · an den Strand / ans Meer · zu Freunden.',
      '**Transports** — der Zug, der Bus, die U-Bahn, das Flugzeug, das Fahrrad. mit + datif : mit dem Bus, mit der U-Bahn ; zu Fuß.\n\n**Gare** — die Fahrkarte, der Fahrplan, das Gleis, die Verspätung. Verbes séparables : Der Zug fährt um 9 Uhr ab · Ich muss umsteigen.\n\n**Directions** — links, rechts, geradeaus ; Wie komme ich zum Bahnhof / zur Haltestelle ? Gehen Sie geradeaus, dann links.\n\n**Hôtel** — Ich möchte ein Zimmer buchen · Haben Sie … frei ? · Ist das Frühstück inklusive ?\n\n**Destinations** — nach Berlin / Frankreich · in die Schweiz · an den Strand / ans Meer · zu Freunden.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Travel & directions', 'Quiz final : voyages & itinéraires'),
    match(
      'sp-rw-q1',
      [
        ['der Bahnhof', 'the station', 'la gare'],
        ['die Fahrkarte', 'the ticket', 'le billet'],
        ['das Gleis', 'the platform', 'le quai'],
        ['der Koffer', 'the suitcase', 'la valise'],
        ['die Verspätung', 'the delay', 'le retard'],
      ],
      ['Match the words with their translation.', 'Associe les mots à leur traduction.'],
    ),
    mc(
      'sp-rw-q2',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich fahre mit dem Zug.', 'Ich fahre mit der Zug.', 'Ich fahre mit den Zug.'],
      ['Ich fahre mit dem Zug.', 'Ich fahre mit der Zug.', 'Ich fahre mit den Zug.'], 0,
      ['der Zug → mit dem Zug.', 'der Zug → mit dem Zug.'],
    ),
    fb(
      'sp-rw-q3',
      ['Sie fährt mit ___ Straßenbahn. (die)', 'Sie fährt mit ___ Straßenbahn. (die)'],
      'der',
      ['mit + dative feminine: der.', 'mit + datif féminin : der.'],
    ),
    mc(
      'sp-rw-q4',
      ['"Der Zug ___ um neun Uhr ___." Which fits?', '« Der Zug ___ um neun Uhr ___. » Lequel convient ?'],
      ['fährt … ab', 'abfährt … —', 'fahren … ab'], ['fährt … ab', 'abfährt … —', 'fahren … ab'], 0,
      ['abfahren splits: fährt … ab.', 'abfahren se sépare : fährt … ab.'],
    ),
    wo(
      'sp-rw-q5',
      ['Köln', 'in', 'umsteigen', 'Ich', 'muss'],
      ['Ich', 'muss', 'in', 'Köln', 'umsteigen'],
      ['Modal verb in position 2; infinitive last.', 'Verbe modal en position 2 ; infinitif à la fin.'],
    ),
    fb(
      'sp-rw-q6',
      ['Wie komme ich ___ Hotel? (zu + dem)', 'Wie komme ich ___ Hotel ? (zu + dem)'],
      'zum',
      ['das Hotel → zum Hotel.', 'das Hotel → zum Hotel.'],
    ),
    fb(
      'sp-rw-q7',
      ['Wie komme ich ___ Kreuzung? (zu + der)', 'Wie komme ich ___ Kreuzung ? (zu + der)'],
      'zur',
      ['die Kreuzung → zur Kreuzung.', 'die Kreuzung → zur Kreuzung.'],
    ),
    lc(
      'sp-rw-q8',
      ['Listen. Where do you go first?', 'Écoute. Où va-t-on d’abord ?'],
      'Gehen Sie zuerst geradeaus bis zur Kreuzung. Dort biegen Sie links ab.',
      ['Straight on to the crossroads', 'Left immediately', 'Right at the traffic light'], ['Tout droit jusqu’au carrefour', 'Tout de suite à gauche', 'À droite au feu'], 0,
      ['Listen for "geradeaus bis zur Kreuzung".', 'Écoute « geradeaus bis zur Kreuzung ».'],
    ),
    wo(
      'sp-rw-q9',
      ['rechts.', 'die', 'Nehmen', 'Straße', 'zweite', 'Sie'],
      ['Nehmen', 'Sie', 'die', 'zweite', 'Straße', 'rechts.'],
      ['Imperative: verb first, then Sie.', 'Impératif : verbe en premier, puis Sie.'],
    ),
    mc(
      'sp-rw-q10',
      ['You want to book a room. What do you say?', 'Tu veux réserver une chambre. Que dis-tu ?'],
      ['Ich möchte ein Zimmer buchen.', 'Ich möchte ein Zimmer gebucht.', 'Ich möchten ein Zimmer buchen.'],
      ['Ich möchte ein Zimmer buchen.', 'Ich möchte ein Zimmer gebucht.', 'Ich möchten ein Zimmer buchen.'], 0,
      ['möchte + infinitive.', 'möchte + infinitif.'],
    ),
    lc(
      'sp-rw-q11',
      ['Listen. What does the guest ask?', 'Écoute. Que demande le client ?'],
      'Entschuldigung, ist das Frühstück inklusive?',
      ['If breakfast is included', 'What the room costs', 'Where the airport is'], ['Si le petit-déjeuner est inclus', 'Combien coûte la chambre', 'Où est l’aéroport'], 0,
      ['Listen for "Frühstück inklusive".', 'Écoute « Frühstück inklusive ».'],
    ),
    fb(
      'sp-rw-q12',
      ['Im Sommer fahren wir ___ Italien. (nach)', 'Im Sommer fahren wir ___ Italien. (nach)'],
      'nach',
      ['Countries without article take nach.', 'Les pays sans article prennent nach.'],
    ),
    mc(
      'sp-rw-q13',
      ['Where do you go for a day by the sea?', 'Où va-t-on pour une journée à la mer ?'],
      ['ans Meer', 'nach Meer', 'zu Meer'], ['ans Meer', 'nach Meer', 'zu Meer'], 0,
      ['Water and coast: an + accusative → ans Meer.', 'Eau et côte : an + accusatif → ans Meer.'],
    ),
    ap('sp-rw-q14', 'Flughafen', 'der', ['Flughafen is masculine.', 'Flughafen est masculin.']),
  ],
});

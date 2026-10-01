import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const zahlenGeldZeit = defineSpecial({
  slug: 'zahlen-geld-zeit',
  number: 25,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['l4', 'l5', 'l19', 'a2-l17'],
  title: ['Zahlen, Geld & Zeit', 'Numbers, money & time', 'Nombres, argent & heure'],
  theme: [
    'Numbers up to 1000 and beyond, prices in euros and cents, telling the time two ways, and saying dates with ordinals',
    'Les nombres jusqu’à 1000 et au-delà, les prix en euros et centimes, dire l’heure de deux façons, et donner la date avec les ordinaux',
  ],
  goals: [
    'Build any number up to 1000 and read bigger ones',
    'Ask for and say prices in euros and cents',
    'Tell the time formally (24 h) and informally (halb, Viertel)',
    'Say the date with ordinal numbers and the right prepositions',
  ],
  goalsFr: [
    'Construire n’importe quel nombre jusqu’à 1000 et lire les plus grands',
    'Demander et dire des prix en euros et en centimes',
    'Dire l’heure de façon formelle (24 h) et informelle (halb, Viertel)',
    'Donner la date avec les nombres ordinaux et les bonnes prépositions',
  ],
  steps: [
    intro(
      'Wie viel? Wie spät? Wann?', 'Combien ? Quelle heure ? Quand ?',
      'Every day you need numbers: the price at the bakery, the departure time of a train, the date of a doctor’s appointment. German builds numbers in a way that surprises beginners — the units come first (21 = “one-and-twenty”). In this special you learn the system once and then use it for money, clocks and calendars.',
      'Chaque jour, tu as besoin de chiffres : le prix à la boulangerie, l’heure du train, la date d’un rendez-vous chez le médecin. L’allemand construit les nombres d’une façon qui surprend : les unités viennent d’abord (21 = « un-et-vingt »). Dans ce spécial, tu apprends le système une fois, puis tu l’utilises pour l’argent, l’heure et le calendrier.',
      [
        'Numbers: units first, then tens, hundreds, thousands',
        'Money: Euro, Cent, Wechselgeld, paying',
        'Time: 24-hour clock and everyday halb / Viertel',
        'Dates: ordinals, am / im, birthdays and appointments',
      ],
      [
        'Nombres : unités d’abord, puis dizaines, centaines, milliers',
        'Argent : Euro, Cent, Wechselgeld, payer',
        'Heure : horloge de 24 h et halb / Viertel du quotidien',
        'Dates : ordinaux, am / im, anniversaires et rendez-vous',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Numbers up to 1000', 'Les nombres jusqu’à 1000',
      'Units first: einundzwanzig. Learn the pattern and you can say any number.', 'Les unités d’abord : einundzwanzig. Apprends le schéma et tu peux dire n’importe quel nombre.',
    ),
    vocab('sp-zahlen-geld-zeit-zahl', 'die Zahl', 'the number (figure)', 'le nombre', 'die', 'ZAHL', 'dee TSAAL', ['Die Zahl auf dem Schild ist 38.', 'The number on the sign is 38.', 'Le nombre sur le panneau est 38.']),
    vocab('sp-zahlen-geld-zeit-nummer', 'die Nummer', 'the number (phone, house)', 'le numéro', 'die', 'NUM-mer', 'dee NOO-mer', ['Wie ist deine Telefonnummer?', 'What is your phone number?', 'Quel est ton numéro de téléphone ?']),
    vocab('sp-zahlen-geld-zeit-hundert', 'hundert', 'one hundred', 'cent', null, 'HUN-dert', 'HOON-dert', ['Im Saal sind hundert Leute.', 'There are a hundred people in the hall.', 'Il y a cent personnes dans la salle.']),
    vocab('sp-zahlen-geld-zeit-tausend', 'tausend', 'one thousand', 'mille', null, 'TAU-send', 'TOW-zent', ['Das Fahrrad kostet tausend Euro.', 'The bike costs a thousand euros.', 'Le vélo coûte mille euros.']),
    vocab('sp-zahlen-geld-zeit-dreissig', 'dreißig', 'thirty', 'trente', null, 'DREI-ßig', 'DRY-sikh', ['Meine Mutter ist dreißig Jahre alt.', 'My mother is thirty years old.', 'Ma mère a trente ans.']),
    vocab('sp-zahlen-geld-zeit-sechzig', 'sechzig', 'sixty', 'soixante', null, 'SECH-zig', 'ZEKH-tsikh', ['Der Bus fährt sechzig Kilometer pro Stunde.', 'The bus drives sixty kilometres per hour.', 'Le bus roule à soixante kilomètres à l’heure.']),
    grammar(
      'sp-zgz-numbers',
      ['How German builds numbers', 'Comment l’allemand construit les nombres'],
      [
        'Numbers 1–12 are individual words. 13–19 are **unit + zehn** (dreizehn, vierzehn …). Two are irregular: **sechzehn** (not sechszehn) and **siebzehn** (not siebenzehn).\n\nFrom 21 the **unit comes first**, joined with **und**, in one single word:\n\n- 21 = **ein**und**zwanzig**\n- 34 = **vier**und**dreißig**\n- 99 = **neun**und**neunzig**\n\nTens: zwanzig, **dreißig** (ß!), vierzig, fünfzig, **sechzig**, **siebzig**, achtzig, neunzig.\n\nHundreds and thousands are written together too: 342 = **dreihundertzweiundvierzig**, 1 000 = **tausend**, 2 500 = **zweitausendfünfhundert**. Note: no *und* after hundert: *hunderteins*, *hundertzwanzig*.',
        'Les nombres 1–12 sont des mots à part. 13–19 = **unité + zehn** (dreizehn, vierzehn …). Deux sont irréguliers : **sechzehn** (pas sechszehn) et **siebzehn** (pas siebenzehn).\n\nÀ partir de 21, **l’unité vient d’abord**, reliée par **und**, en un seul mot :\n\n- 21 = **ein**und**zwanzig**\n- 34 = **vier**und**dreißig**\n- 99 = **neun**und**neunzig**\n\nDizaines : zwanzig, **dreißig** (ß !), vierzig, fünfzig, **sechzig**, **siebzig**, achtzig, neunzig.\n\nCentaines et milliers s’écrivent aussi d’un bloc : 342 = **dreihundertzweiundvierzig**, 1 000 = **tausend**, 2 500 = **zweitausendfünfhundert**. Attention : pas de *und* après hundert : *hunderteins*, *hundertzwanzig*.',
      ],
      [
        ['Ich bin einundzwanzig Jahre alt.', 'I am twenty-one years old.', 'J’ai vingt et un ans.'],
        ['Die Telefonnummer ist vierunddreißig, sechsundfünfzig, achtundsiebzig.', 'The phone number is 34, 56, 78.', 'Le numéro de téléphone est 34, 56, 78.'],
        ['Das Buch hat dreihundertzweiundvierzig Seiten.', 'The book has 342 pages.', 'Le livre a 342 pages.'],
        ['Die Wohnung kostet zweitausendfünfhundert Euro im Monat.', 'The flat costs 2,500 euros a month.', 'L’appartement coûte 2 500 euros par mois.'],
      ],
    ),
    match(
      'sp-zgz-e1',
      [
        ['einundzwanzig', '21', '21'],
        ['dreißig', '30', '30'],
        ['sechzehn', '16', '16'],
        ['siebzig', '70', '70'],
        ['hundertzwanzig', '120', '120'],
        ['tausend', '1000', '1000'],
      ],
      ['Match each number word with its digits.', 'Associe chaque nombre en lettres à ses chiffres.'],
    ),
    mc(
      'sp-zgz-e2',
      ['How do you say 45?', 'Comment dit-on 45 ?'],
      ['fünfundvierzig', 'vierzigfünf', 'vierundfünfzig'], ['fünfundvierzig', 'vierzigfünf', 'vierundfünfzig'], 0,
      ['Units first: fünf + und + vierzig. (vierundfünfzig is 54.)', 'Unités d’abord : fünf + und + vierzig. (vierundfünfzig = 54.)'],
    ),
    fb(
      'sp-zgz-e3',
      ['Write the number 17 in German: ___', 'Écris le nombre 17 en allemand : ___'],
      'siebzehn',
      ['Irregular: sieb-zehn, without -en.', 'Irrégulier : sieb-zehn, sans -en.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Money and prices', 'L’argent et les prix',
      'Euro, Cent, paying and getting change.', 'Euro, Cent, payer et rendre la monnaie.',
    ),
    vocab('sp-zahlen-geld-zeit-geld', 'das Geld', 'the money', 'l’argent', 'das', 'GELD', 'dahs GELT', ['Ich habe heute kein Geld dabei.', 'I have no money on me today.', 'Je n’ai pas d’argent sur moi aujourd’hui.']),
    vocab('sp-zahlen-geld-zeit-euro', 'der Euro', 'the euro', 'l’euro', 'der', 'EU-ro', 'dair OY-roh', ['Der Kaffee kostet drei Euro.', 'The coffee costs three euros.', 'Le café coûte trois euros.']),
    vocab('sp-zahlen-geld-zeit-cent', 'der Cent', 'the cent', 'le centime', 'der', 'CENT', 'dair TSENT', ['Das Brötchen kostet fünfzig Cent.', 'The bread roll costs fifty cents.', 'Le petit pain coûte cinquante centimes.']),
    vocab('sp-zahlen-geld-zeit-preis', 'der Preis', 'the price', 'le prix', 'der', 'PREIS', 'dair PRICE', ['Der Preis steht auf dem Schild.', 'The price is on the sign.', 'Le prix est sur le panneau.']),
    vocab('sp-zahlen-geld-zeit-bezahlen', 'bezahlen', 'to pay', 'payer', null, 'be-ZAH-len', 'beh-TSAA-len', ['Ich bezahle mit Karte.', 'I pay by card.', 'Je paie par carte.']),
    vocab('sp-zahlen-geld-zeit-wechselgeld', 'das Wechselgeld', 'the change', 'la monnaie (rendue)', 'das', 'WECH-sel-geld', 'dahs VEK-sel-gelt', ['Hier ist Ihr Wechselgeld.', 'Here is your change.', 'Voici votre monnaie.']),
    vocab('sp-zahlen-geld-zeit-guenstig', 'günstig', 'cheap, good value', 'avantageux, bon marché', null, 'GÜNS-tig', 'GUEN-stikh', ['Das Hotel ist sehr günstig.', 'The hotel is very good value.', 'L’hôtel est très avantageux.']),
    vocab('sp-zahlen-geld-zeit-bar', 'bar', 'in cash', 'en espèces', null, 'BAR', 'BAAR', ['Zahlen Sie bar oder mit Karte?', 'Are you paying cash or by card?', 'Vous payez en espèces ou par carte ?']),
    grammar(
      'sp-zgz-prices',
      ['Saying prices', 'Dire les prix'],
      [
        'Write **3,50 €** and say **drei Euro fünfzig** — the word *Cent* is dropped in the spoken form. **Euro** and **Cent** do **not** take an ending in the plural after a number: *zwei Euro*, *zwanzig Cent*.\n\nUseful price sentences:\n\n- **Was kostet** das Brot? — Es **kostet** zwei Euro achtzig.\n- **Wie viel kostet** der Käse? — Der Käse kostet vier Euro.\n- Das **macht** zwölf Euro dreißig. (the total)\n- **Zahlen** wir **zusammen oder getrennt**? (together or separately)\n\nAt the till you hear: *Bar oder mit Karte?* and *Hier ist Ihr Wechselgeld.*',
        'On écrit **3,50 €** et on dit **drei Euro fünfzig** — le mot *Cent* disparaît à l’oral. **Euro** et **Cent** ne prennent **pas** de marque du pluriel après un nombre : *zwei Euro*, *zwanzig Cent*.\n\nPhrases utiles pour les prix :\n\n- **Was kostet** das Brot ? — Es **kostet** zwei Euro achtzig.\n- **Wie viel kostet** der Käse ? — Der Käse kostet vier Euro.\n- Das **macht** zwölf Euro dreißig. (le total)\n- **Zahlen** wir **zusammen oder getrennt** ? (ensemble ou séparément)\n\nÀ la caisse, tu entends : *Bar oder mit Karte ?* et *Hier ist Ihr Wechselgeld.*',
      ],
      [
        ['Was kostet das Brot? — Zwei Euro achtzig.', 'How much is the bread? — Two euros eighty.', 'Combien coûte le pain ? — Deux euros quatre-vingts.'],
        ['Das macht zwölf Euro dreißig, bitte.', 'That comes to twelve euros thirty, please.', 'Cela fait douze euros trente, s’il vous plaît.'],
        ['Zahlen Sie bar oder mit Karte?', 'Are you paying cash or by card?', 'Vous payez en espèces ou par carte ?'],
        ['Stimmt so! Das ist für Sie.', 'Keep the change! That’s for you.', 'Gardez la monnaie ! C’est pour vous.'],
      ],
    ),
    ap('sp-zgz-e4', 'Euro', 'der', ['Euro is masculine: der Euro.', 'Euro est masculin : der Euro.']),
    ap('sp-zgz-e5', 'Geld', 'das', ['Geld is neuter: das Geld.', 'Geld est neutre : das Geld.']),
    ap('sp-zgz-e6', 'Rechnung', 'die', ['Words in -ung are feminine.', 'Les mots en -ung sont féminins.']),
    fb(
      'sp-zgz-e7',
      ['Das macht zwei ___ fünfzig. (€)', 'Das macht zwei ___ fünfzig. (€)'],
      'Euro',
      ['No -s: zwei Euro.', 'Pas de -s : zwei Euro.'],
    ),
    mc(
      'sp-zgz-e8',
      ['How do you say 4,20 €?', 'Comment dit-on 4,20 € ?'],
      ['vier Euro zwanzig', 'vierzig Euro zwei', 'vier Zwanzig Euro'], ['vier Euro zwanzig', 'vierzig Euro zwei', 'vier Zwanzig Euro'], 0,
      ['Euros first, then the cents; the word Cent is dropped.', 'D’abord les euros, puis les centimes ; le mot Cent disparaît.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Telling the time', 'Dire l’heure',
      'Two systems: the 24-hour clock for timetables, halb and Viertel for daily talk.', 'Deux systèmes : l’horloge de 24 h pour les horaires, halb et Viertel pour parler.',
    ),
    vocab('sp-zahlen-geld-zeit-uhr', 'die Uhr', 'the clock, o’clock', 'l’horloge, la montre, l’heure', 'die', 'UHR', 'dee OOR', ['Es ist drei Uhr.', 'It is three o’clock.', 'Il est trois heures.']),
    vocab('sp-zahlen-geld-zeit-minute', 'die Minute', 'the minute', 'la minute', 'die', 'mi-NU-te', 'dee mee-NOO-teh', ['Der Bus kommt in fünf Minuten.', 'The bus comes in five minutes.', 'Le bus arrive dans cinq minutes.']),
    vocab('sp-zahlen-geld-zeit-stunde', 'die Stunde', 'the hour', 'l’heure (durée)', 'die', 'STUN-de', 'dee SHTOON-deh', ['Der Film dauert zwei Stunden.', 'The film lasts two hours.', 'Le film dure deux heures.']),
    vocab('sp-zahlen-geld-zeit-viertel', 'das Viertel', 'the quarter', 'le quart', 'das', 'VIER-tel', 'dahs FEER-tel', ['Es ist Viertel nach acht.', 'It is a quarter past eight.', 'Il est huit heures et quart.']),
    vocab('sp-zahlen-geld-zeit-halb', 'halb', 'half (to the next hour)', 'demi (vers l’heure suivante)', null, 'HALP', 'HALP', ['Wir treffen uns um halb sieben.', 'We meet at half past six.', 'Nous nous retrouvons à six heures et demie.']),
    vocab('sp-zahlen-geld-zeit-puenktlich', 'pünktlich', 'on time', 'à l’heure, ponctuel', null, 'PÜNKT-lich', 'PUENKT-likh', ['Der Zug war nicht pünktlich.', 'The train was not on time.', 'Le train n’était pas à l’heure.']),
    vocab('sp-zahlen-geld-zeit-mitternacht', 'die Mitternacht', 'midnight', 'minuit', 'die', 'MIT-ter-nacht', 'dee MIT-er-nakht', ['Um Mitternacht gehe ich schlafen.', 'At midnight I go to sleep.', 'À minuit, je vais dormir.']),
    grammar(
      'sp-zgz-time-formal',
      ['Formal time: the 24-hour clock', 'L’heure formelle : l’horloge de 24 h'],
      [
        'In timetables, on the radio and at work, you say the hours and minutes just like numbers: **Es ist 14:35 → vierzehn Uhr fünfunddreißig**.\n\n- 08:05 = **acht Uhr fünf**\n- 13:00 = **dreizehn Uhr**\n- 00:15 = **null Uhr fünfzehn**\n\nAsk: **Wie spät ist es?** or **Wie viel Uhr ist es?** — and for an event: **Um wie viel Uhr …?** / **Wann …?** Answer with **um**: *Der Zug fährt um 14:35 Uhr ab.*',
        'Dans les horaires, à la radio et au travail, on dit les heures et les minutes comme des nombres : **Es ist 14:35 → vierzehn Uhr fünfunddreißig**.\n\n- 08:05 = **acht Uhr fünf**\n- 13:00 = **dreizehn Uhr**\n- 00:15 = **null Uhr fünfzehn**\n\nPour demander : **Wie spät ist es ?** ou **Wie viel Uhr ist es ?** — et pour un événement : **Um wie viel Uhr … ?** / **Wann … ?** On répond avec **um** : *Der Zug fährt um 14:35 Uhr ab.*',
      ],
      [
        ['Der Zug fährt um vierzehn Uhr fünfunddreißig ab.', 'The train leaves at 14:35.', 'Le train part à 14 h 35.'],
        ['Das Geschäft öffnet um acht Uhr.', 'The shop opens at eight o’clock.', 'Le magasin ouvre à huit heures.'],
        ['Der Film beginnt um zwanzig Uhr fünfzehn.', 'The film starts at 20:15.', 'Le film commence à 20 h 15.'],
      ],
    ),
    grammar(
      'sp-zgz-time-informal',
      ['Informal time: halb and Viertel', 'L’heure familière : halb et Viertel'],
      [
        'In daily talk you use the 12-hour clock with these words:\n\n- **Viertel nach drei** = 3:15 (a quarter past three)\n- **Viertel vor vier** = 3:45 (a quarter to four)\n- **zehn nach drei** = 3:10 · **zwanzig vor vier** = 3:40\n- **halb vier** = **3:30** (half **to** four!)\n\nThe big trap: **halb** points to the **next** hour. *Halb vier* is 3:30, not 4:30. Around half-past: **fünf vor halb vier** = 3:25 and **fünf nach halb vier** = 3:35.',
        'Au quotidien, on utilise l’horloge de 12 h avec ces mots :\n\n- **Viertel nach drei** = 3:15 (trois heures et quart)\n- **Viertel vor vier** = 3:45 (quatre heures moins le quart)\n- **zehn nach drei** = 3:10 · **zwanzig vor vier** = 3:40\n- **halb vier** = **3:30** (la moitié **vers** quatre !)\n\nLe grand piège : **halb** désigne l’heure **suivante**. *Halb vier* = 3 h 30, pas 4 h 30. Autour de la demie : **fünf vor halb vier** = 3:25 et **fünf nach halb vier** = 3:35.',
      ],
      [
        ['Es ist Viertel nach drei.', 'It is a quarter past three.', 'Il est trois heures et quart.'],
        ['Wir essen um halb eins.', 'We eat at half past twelve.', 'Nous mangeons à midi et demi.'],
        ['Der Unterricht endet um Viertel vor fünf.', 'Class ends at a quarter to five.', 'Le cours finit à cinq heures moins le quart.'],
        ['Es ist fünf vor halb sieben.', 'It is 6:25.', 'Il est six heures vingt-cinq.'],
      ],
    ),
    mc(
      'sp-zgz-e9',
      ['What time is "halb acht"?', 'Quelle heure est « halb acht » ?'],
      ['7:30', '8:30', '8:00'], ['7 h 30', '8 h 30', '8 h 00'], 0,
      ['halb points to the next hour: half to eight = 7:30.', 'halb pointe vers l’heure suivante : la moitié vers huit = 7 h 30.'],
    ),
    fb(
      'sp-zgz-e10',
      ['3:15 → "Es ist Viertel ___ drei."', '3 h 15 → « Es ist Viertel ___ drei. »'],
      'nach',
      ['Past = nach.', 'Après = nach.'],
    ),
    wo(
      'sp-zgz-e11',
      ['ist', 'es', 'Wie', 'spät?'],
      ['Wie', 'ist', 'es', 'spät?'],
      ['Question word, verb, subject.', 'Mot interrogatif, verbe, sujet.'],
    ),
    lc(
      'sp-zgz-e12',
      ['Listen. When does the film start?', 'Écoute. À quelle heure commence le film ?'],
      'Der Film beginnt um zwanzig Uhr fünfzehn.',
      ['At 20:15', 'At 21:15', 'At 20:50'], ['À 20 h 15', 'À 21 h 15', 'À 20 h 50'], 0,
      ['Listen for "zwanzig Uhr fünfzehn".', 'Écoute « zwanzig Uhr fünfzehn ».'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Days, months and the calendar', 'Jours, mois et calendrier',
      'Weeks, months, years — and the little words am, im and um.', 'Semaines, mois, années — et les petits mots am, im et um.',
    ),
    vocab('sp-zahlen-geld-zeit-woche', 'die Woche', 'the week', 'la semaine', 'die', 'WO-che', 'dee VOKH-eh', ['Ich arbeite vier Tage pro Woche.', 'I work four days a week.', 'Je travaille quatre jours par semaine.']),
    vocab('sp-zahlen-geld-zeit-monat', 'der Monat', 'the month', 'le mois', 'der', 'MO-nat', 'dair MOH-naht', ['Der Mai ist mein Lieblingsmonat.', 'May is my favourite month.', 'Mai est mon mois préféré.']),
    vocab('sp-zahlen-geld-zeit-jahr', 'das Jahr', 'the year', 'l’année, l’an', 'das', 'JAHR', 'dahs YAAR', ['Dieses Jahr fahre ich nach Berlin.', 'This year I am going to Berlin.', 'Cette année, je vais à Berlin.']),
    vocab('sp-zahlen-geld-zeit-datum', 'das Datum', 'the date', 'la date', 'das', 'DA-tum', 'dahs DAA-toom', ['Welches Datum haben wir heute?', 'What is today’s date?', 'Quelle est la date aujourd’hui ?']),
    vocab('sp-zahlen-geld-zeit-geburtstag', 'der Geburtstag', 'the birthday', 'l’anniversaire', 'der', 'ge-BURTS-tag', 'dair geh-BOORTS-taak', ['Wann hast du Geburtstag?', 'When is your birthday?', 'Quand est ton anniversaire ?']),
    vocab('sp-zahlen-geld-zeit-termin', 'der Termin', 'the appointment', 'le rendez-vous', 'der', 'ter-MIN', 'dair ter-MEEN', ['Ich habe um drei Uhr einen Termin.', 'I have an appointment at three o’clock.', 'J’ai un rendez-vous à trois heures.']),
    vocab('sp-zahlen-geld-zeit-feiertag', 'der Feiertag', 'the public holiday', 'le jour férié', 'der', 'FEI-er-tag', 'dair FY-er-taak', ['Der erste Mai ist ein Feiertag.', 'The first of May is a public holiday.', 'Le premier mai est un jour férié.']),
    grammar(
      'sp-zgz-calendar',
      ['am, im, um: when does it happen?', 'am, im, um : quand cela se passe-t-il ?'],
      [
        'Three small prepositions answer **Wann?** — and they are fixed:\n\n- **um** + clock time: **um** acht Uhr, **um** halb drei\n- **am** + day, date, part of the day: **am** Montag, **am** Wochenende, **am** Abend, **am** 3. Mai\n- **im** + month, season, year: **im** Mai, **im** Winter, **im** Jahr 2025\n\nException: **in der Nacht** and **um Mitternacht**. The days are all masculine: *der Montag, der Dienstag, der Mittwoch, der Donnerstag, der Freitag, der Samstag, der Sonntag*. The months too: *im Januar, im Februar, im März …*',
        'Trois petites prépositions répondent à **Wann ?** — et elles sont figées :\n\n- **um** + heure : **um** acht Uhr, **um** halb drei\n- **am** + jour, date, moment de la journée : **am** Montag, **am** Wochenende, **am** Abend, **am** 3. Mai\n- **im** + mois, saison, année : **im** Mai, **im** Winter, **im** Jahr 2025\n\nExceptions : **in der Nacht** et **um Mitternacht**. Les jours sont tous masculins : *der Montag, der Dienstag, der Mittwoch, der Donnerstag, der Freitag, der Samstag, der Sonntag*. Les mois aussi : *im Januar, im Februar, im März …*',
      ],
      [
        ['Der Kurs beginnt um neun Uhr.', 'The course starts at nine o’clock.', 'Le cours commence à neuf heures.'],
        ['Am Samstag besuche ich meine Oma.', 'On Saturday I visit my grandma.', 'Samedi, je rends visite à ma grand-mère.'],
        ['Im Sommer ist es hier sehr heiß.', 'In summer it is very hot here.', 'En été, il fait très chaud ici.'],
        ['Am Abend gehen wir ins Kino.', 'In the evening we go to the cinema.', 'Le soir, nous allons au cinéma.'],
      ],
    ),
    ap('sp-zgz-e13', 'Monat', 'der', ['Monat is masculine; so are all months and days.', 'Monat est masculin ; tous les mois et jours aussi.']),
    ap('sp-zgz-e14', 'Woche', 'die', ['Woche is feminine.', 'Woche est féminin.']),
    ap('sp-zgz-e15', 'Datum', 'das', ['Datum is neuter.', 'Datum est neutre.']),
    mc(
      'sp-zgz-e16',
      ['Which preposition? "___ Montag habe ich einen Termin."', 'Quelle préposition ? « ___ Montag habe ich einen Termin. »'],
      ['Am', 'Im', 'Um'], ['Am', 'Im', 'Um'], 0,
      ['Days take am.', 'Les jours prennent am.'],
    ),
    fb(
      'sp-zgz-e17',
      ['Ich habe ___ Mai Geburtstag. (in May)', 'Ich habe ___ Mai Geburtstag. (en mai)'],
      'im',
      ['Months take im.', 'Les mois prennent im.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Dates and ordinal numbers', 'Dates et nombres ordinaux',
      'The first of May, the third of June: ordinals and how to say a date.', 'Le premier mai, le trois juin : les ordinaux et comment dire une date.',
    ),
    grammar(
      'sp-zgz-ordinals',
      ['Ordinal numbers', 'Les nombres ordinaux'],
      [
        'In writing an ordinal is a number followed by a dot: **3.** = *dritte*. Rules:\n\n- 1–19: number + **-te** → **zweite**, **vierte**, **fünfte**, **zehnte**, **neunzehnte**\n- from 20: number + **-ste** → **zwanzigste**, **einunddreißigste**\n- irregular: **erste** (1.), **dritte** (3.), **siebte** (7.), **achte** (8.)\n\nAfter *der / die / das* they end in **-e** (*der dritte Mai*); after **am** they end in **-en** (*am dritten Mai*), because *am* = *an dem* (dative).',
        'À l’écrit, un ordinal est un nombre suivi d’un point : **3.** = *dritte*. Règles :\n\n- 1–19 : nombre + **-te** → **zweite**, **vierte**, **fünfte**, **zehnte**, **neunzehnte**\n- à partir de 20 : nombre + **-ste** → **zwanzigste**, **einunddreißigste**\n- irréguliers : **erste** (1.), **dritte** (3.), **siebte** (7.), **achte** (8.)\n\nAprès *der / die / das*, ils se terminent en **-e** (*der dritte Mai*) ; après **am**, en **-en** (*am dritten Mai*), car *am* = *an dem* (datif).',
      ],
      [
        ['Der erste Januar ist ein Feiertag.', 'The first of January is a public holiday.', 'Le premier janvier est un jour férié.'],
        ['Mein Geburtstag ist der siebte Juli.', 'My birthday is the seventh of July.', 'Mon anniversaire est le sept juillet.'],
        ['Am zwanzigsten August fahren wir in Urlaub.', 'On the 20th of August we go on holiday.', 'Le vingt août, nous partons en vacances.'],
      ],
    ),
    grammar(
      'sp-zgz-dates',
      ['Saying the date', 'Dire la date'],
      [
        'Ask: **Der Wievielte ist heute?** or **Welches Datum haben wir heute?**\n\nAnswer in two ways:\n\n- **Heute ist der 3. Mai.** (nominative: der dritte Mai)\n- **Heute haben wir den 3. Mai.** (accusative: den dritten Mai)\n\nFor an event on a date, use **am**: **Am 3. Mai** habe ich einen Termin. Years are said as hundreds: **1998 = neunzehnhundertachtundneunzig**, **2025 = zweitausendfünfundzwanzig**. The year after *im* needs no ending: *im Jahr 2025*.',
        'On demande : **Der Wievielte ist heute ?** ou **Welches Datum haben wir heute ?**\n\nOn répond de deux façons :\n\n- **Heute ist der 3. Mai.** (nominatif : der dritte Mai)\n- **Heute haben wir den 3. Mai.** (accusatif : den dritten Mai)\n\nPour un événement à une date, on emploie **am** : **Am 3. Mai** habe ich einen Termin. Les années se disent en centaines : **1998 = neunzehnhundertachtundneunzig**, **2025 = zweitausendfünfundzwanzig**. L’année après *im* ne prend pas de terminaison : *im Jahr 2025*.',
      ],
      [
        ['Der Wievielte ist heute? — Heute ist der dritte Mai.', 'What’s the date today? — Today is the third of May.', 'On est le combien ? — Aujourd’hui, on est le trois mai.'],
        ['Heute haben wir den zehnten Juni.', 'Today is the tenth of June.', 'Aujourd’hui, on est le dix juin.'],
        ['Am fünfzehnten März habe ich einen Termin beim Arzt.', 'On the 15th of March I have an appointment at the doctor’s.', 'Le quinze mars, j’ai un rendez-vous chez le médecin.'],
      ],
    ),
    mc(
      'sp-zgz-e18',
      ['What is the ordinal for 7.?', 'Quel est l’ordinal de 7. ?'],
      ['siebte', 'siebente', 'siebende'], ['siebte', 'siebente', 'siebende'], 0,
      ['7. = siebte (irregular, short form).', '7. = siebte (irrégulier, forme courte).'],
    ),
    fb(
      'sp-zgz-e19',
      ['1. Mai → "Der ___ Mai ist ein Feiertag."', '1er mai → « Der ___ Mai ist ein Feiertag. »'],
      'erste',
      ['Irregular: 1. = erste.', 'Irrégulier : 1. = erste.'],
    ),
    wo(
      'sp-zgz-e20',
      ['Mai.', 'Heute', 'dritte', 'ist', 'der'],
      ['Heute', 'ist', 'der', 'dritte', 'Mai.'],
      ['Heute, ist, then the date.', 'Heute, ist, puis la date.'],
    ),
    lc(
      'sp-zgz-e21',
      ['Listen. When is the appointment?', 'Écoute. Quand est le rendez-vous ?'],
      'Mein Termin ist am fünfzehnten März um halb zehn.',
      ['15 March at 9:30', '15 March at 10:30', '5 March at 9:30'], ['15 mars à 9 h 30', '15 mars à 10 h 30', '5 mars à 9 h 30'], 0,
      ['Listen for "fünfzehnten" and "halb zehn".', 'Écoute « fünfzehnten » et « halb zehn ».'],
    ),

    wrapup(
      '**Numbers** — units first and in one word: einundzwanzig, dreihundertzweiundvierzig. sechzehn, siebzehn, sechzig, siebzig are irregular; dreißig has ß.\n\n**Money** — 3,50 € = drei Euro fünfzig; no plural -s after a number; Was kostet …? · Das macht … · Bar oder mit Karte?\n\n**Time** — formal: vierzehn Uhr fünfunddreißig; informal: Viertel nach / vor, **halb** = half *to* the next hour (halb vier = 3:30).\n\n**When?** — um + clock time · am + day/date/part of day · im + month/season/year.\n\n**Dates** — ordinals: -te (1–19), -ste (20+), irregular erste, dritte, siebte, achte; am dritten Mai · Heute ist der dritte Mai.',
      '**Nombres** — unités d’abord et en un mot : einundzwanzig, dreihundertzweiundvierzig. sechzehn, siebzehn, sechzig, siebzig sont irréguliers ; dreißig prend ß.\n\n**Argent** — 3,50 € = drei Euro fünfzig ; pas de -s au pluriel après un nombre ; Was kostet … ? · Das macht … · Bar oder mit Karte ?\n\n**Heure** — formelle : vierzehn Uhr fünfunddreißig ; familière : Viertel nach / vor, **halb** = la moitié *vers* l’heure suivante (halb vier = 3 h 30).\n\n**Quand ?** — um + heure · am + jour/date/moment de la journée · im + mois/saison/année.\n\n**Dates** — ordinaux : -te (1–19), -ste (20+), irréguliers erste, dritte, siebte, achte ; am dritten Mai · Heute ist der dritte Mai.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Numbers, money & time', 'Quiz final : nombres, argent & heure'),
    match(
      'sp-zgz-q1',
      [
        ['dreißig', '30', '30'],
        ['sechzehn', '16', '16'],
        ['fünfundvierzig', '45', '45'],
        ['hundert', '100', '100'],
        ['tausend', '1000', '1000'],
      ],
      ['Match each number word with its digits.', 'Associe chaque nombre en lettres à ses chiffres.'],
    ),
    mc(
      'sp-zgz-q2',
      ['How do you say 21?', 'Comment dit-on 21 ?'],
      ['einundzwanzig', 'zwanzigeins', 'zweiundeins'], ['einundzwanzig', 'zwanzigeins', 'zweiundeins'], 0,
      ['Units first: ein + und + zwanzig.', 'Unités d’abord : ein + und + zwanzig.'],
    ),
    fb(
      'sp-zgz-q3',
      ['Write 16 in German: ___', 'Écris 16 en allemand : ___'],
      'sechzehn',
      ['Irregular: sech-zehn (no s).', 'Irrégulier : sech-zehn (sans s).'],
    ),
    mc(
      'sp-zgz-q4',
      ['How do you say 3,50 €?', 'Comment dit-on 3,50 € ?'],
      ['drei Euro fünfzig', 'dreißig Euro fünf', 'drei Cent fünfzig'], ['drei Euro fünfzig', 'dreißig Euro fünf', 'drei Cent fünfzig'], 0,
      ['Euros, then the cents; Cent is dropped.', 'Euros, puis centimes ; Cent disparaît.'],
    ),
    fb(
      'sp-zgz-q5',
      ['Das macht zwei ___ achtzig. (€)', 'Das macht zwei ___ achtzig. (€)'],
      'Euro',
      ['No plural ending after a number.', 'Pas de marque du pluriel après un nombre.'],
    ),
    mc(
      'sp-zgz-q6',
      ['What time is "halb vier"?', 'Quelle heure est « halb vier » ?'],
      ['3:30', '4:30', '4:00'], ['3 h 30', '4 h 30', '4 h 00'], 0,
      ['halb points to the next hour: half to four = 3:30.', 'halb pointe vers l’heure suivante : la moitié vers quatre = 3 h 30.'],
    ),
    fb(
      'sp-zgz-q7',
      ['2:45 → "Es ist Viertel ___ drei."', '2 h 45 → « Es ist Viertel ___ drei. »'],
      'vor',
      ['A quarter to three = Viertel vor drei.', 'Trois heures moins le quart = Viertel vor drei.'],
    ),
    wo(
      'sp-zgz-q8',
      ['es?', 'Wie', 'spät', 'ist'],
      ['Wie', 'spät', 'ist', 'es?'],
      ['Wie spät ist es?', 'Wie spät ist es ?'],
    ),
    lc(
      'sp-zgz-q9',
      ['Listen. When does the train leave?', 'Écoute. Quand part le train ?'],
      'Der Zug fährt um dreizehn Uhr fünfundvierzig ab.',
      ['At 13:45', 'At 14:45', 'At 13:15'], ['À 13 h 45', 'À 14 h 45', 'À 13 h 15'], 0,
      ['Listen for "dreizehn Uhr fünfundvierzig".', 'Écoute « dreizehn Uhr fünfundvierzig ».'],
    ),
    mc(
      'sp-zgz-q10',
      ['Which is the ordinal for 3.?', 'Quel est l’ordinal de 3. ?'],
      ['dritte', 'dreite', 'drette'], ['dritte', 'dreite', 'drette'], 0,
      ['3. = dritte (irregular).', '3. = dritte (irrégulier).'],
    ),
    fb(
      'sp-zgz-q11',
      ['Ich habe am ___ Mai Geburtstag. (5th)', 'Ich habe am ___ Mai Geburtstag. (5e)'],
      'fünften',
      ['After am: ordinal + -en.', 'Après am : ordinal + -en.'],
    ),
    mc(
      'sp-zgz-q12',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich habe im Mai Geburtstag.', 'Ich habe am Mai Geburtstag.', 'Ich habe um Mai Geburtstag.'],
      ['Ich habe im Mai Geburtstag.', 'Ich habe am Mai Geburtstag.', 'Ich habe um Mai Geburtstag.'], 0,
      ['Months take im.', 'Les mois prennent im.'],
    ),
    wo(
      'sp-zgz-q13',
      ['Mai.', 'Heute', 'dritte', 'ist', 'der'],
      ['Heute', 'ist', 'der', 'dritte', 'Mai.'],
      ['Heute ist der dritte Mai.', 'Heute ist der dritte Mai.'],
    ),
    lc(
      'sp-zgz-q14',
      ['Listen. How much is the bread?', 'Écoute. Combien coûte le pain ?'],
      'Was kostet das Brot? — Das kostet zwei Euro achtzig.',
      ['€2.80', '€2.18', '€12.80'], ['2,80 €', '2,18 €', '12,80 €'], 0,
      ['Listen for "zwei Euro achtzig".', 'Écoute « zwei Euro achtzig ».'],
    ),
  ],
});

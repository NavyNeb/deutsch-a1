import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const falscheFreunde = defineSpecial({
  slug: 'falsche-freunde',
  number: 30,
  group: 'life',
  levels: ['A1', 'B1'],
  related: ['l7', 'a2-l5'],
  title: ['Falsche Freunde', 'False friends', 'Faux amis'],
  theme: [
    'Words that look like English or French but mean something else, plus the true cognates you can trust',
    'Des mots qui ressemblent à l’anglais ou au français mais veulent dire autre chose, et les vrais mots cousins sur lesquels tu peux compter',
  ],
  goals: [
    'Spot the most dangerous false friends for English speakers',
    'Spot the most dangerous false friends for French speakers',
    'Know which look-alikes are safe in one language but not the other',
    'Use true cognates to learn vocabulary faster',
  ],
  goalsFr: [
    'Repérer les faux amis les plus dangereux pour les anglophones',
    'Repérer les faux amis les plus dangereux pour les francophones',
    'Savoir quels mots sont sûrs dans une langue mais pas dans l’autre',
    'Utiliser les vrais mots cousins pour apprendre plus vite',
  ],
  steps: [
    intro(
      'Vorsicht, falsche Freunde!', 'Attention, faux amis !',
      'You see a German word, it looks like an English or French one, and you feel clever. Sometimes you are right. Sometimes it means something completely different: bekommen looks like “become”, yet “Ich bekomme ein Steak” means “I am getting a steak”, not “I am becoming a steak”. This course shows the traps and the safe shortcuts.',
      'Tu vois un mot allemand qui ressemble à un mot anglais ou français, et tu te sens malin. Parfois tu as raison. Parfois il veut dire tout autre chose : bekommen ressemble à l’anglais « become » (devenir), mais « Ich bekomme ein Steak » signifie « je reçois un steak », pas « je deviens un steak ». Ce cours montre les pièges et les raccourcis sûrs.',
      [
        'Avoid the classic English false friends',
        'Avoid the classic French false friends',
        'Know which words are true friends for one language only',
        'Use true cognates to guess new words',
      ],
      [
        'Éviter les faux amis classiques de l’anglais',
        'Éviter les faux amis classiques du français',
        'Savoir quels mots sont de vrais amis pour une seule langue',
        'Utiliser les vrais mots cousins pour deviner de nouveaux mots',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Why look-alikes lie', 'Pourquoi les ressemblances mentent',
      'German, English and French share roots, but meanings drift apart.', 'L’allemand, l’anglais et le français ont des racines communes, mais les sens divergent.',
    ),
    vocab('sp-falsche-freunde-freund', 'der Freund', 'the friend', 'l’ami', 'der', 'FREUND', 'dair FROYNT', ['Er ist mein bester Freund.', 'He is my best friend.', 'C’est mon meilleur ami.']),
    vocab('sp-falsche-freunde-wort', 'das Wort', 'the word', 'le mot', 'das', 'WORT', 'dahs VORT', ['Dieses Wort ist neu für mich.', 'This word is new to me.', 'Ce mot est nouveau pour moi.']),
    grammar(
      'sp-ff-intro',
      ['False friends and true friends', 'Faux amis et vrais amis'],
      [
        'A **false friend** (*falscher Freund*) is a word that looks or sounds like a word you know, but means something different. They exist because the languages are related, but each word has drifted its own way.\n\n- **True cognate**: looks the same and means the same (*Hotel*, *Musik*, *Information*).\n- **False friend**: looks the same, means something else (*Gift* = poison).\n- **Partial friend**: a trap for one language, safe in the other (*aktuell*: false for English “actual”, true for French *actuel*).\n\n**Method:** when a German word looks familiar, check it in a sentence before trusting it. Learn the real meaning together with an example.',
        'Un **faux ami** (*falscher Freund*) est un mot qui ressemble à un mot que tu connais, mais qui a un autre sens. Ils existent parce que les langues sont apparentées, mais chaque mot a dérivé à sa façon.\n\n- **Vrai mot cousin** : même forme, même sens (*Hotel*, *Musik*, *Information*).\n- **Faux ami** : même forme, autre sens (*Gift* = poison).\n- **Faux ami partiel** : un piège pour une langue, sûr dans l’autre (*aktuell* : faux pour l’anglais « actual », vrai pour le français *actuel*).\n\n**Méthode :** quand un mot allemand te semble familier, vérifie-le dans une phrase avant de lui faire confiance. Apprends le vrai sens avec un exemple.',
      ],
      [
        ['Das Hotel ist modern.', 'The hotel is modern. (true friend)', 'L’hôtel est moderne. (vrai ami)'],
        ['Das Gift ist gefährlich.', 'The poison is dangerous. (false friend)', 'Le poison est dangereux. (faux ami)'],
      ],
    ),
    mc(
      'sp-ff-e1',
      ['What is a "falscher Freund"?', 'Qu’est-ce qu’un « falscher Freund » ?'],
      ['A word that looks familiar but means something different', 'A friend who lies', 'A word that is spelled wrongly'],
      ['Un mot qui semble familier mais a un autre sens', 'Un ami qui ment', 'Un mot mal orthographié'], 0,
      ['Same look, different meaning.', 'Même forme, sens différent.'],
    ),
    match(
      'sp-ff-e2',
      [
        ['Hotel', 'true cognate', 'vrai mot cousin'],
        ['Gift', 'false friend', 'faux ami'],
        ['Musik', 'true cognate', 'vrai mot cousin'],
        ['Rat', 'false friend', 'faux ami'],
      ],
      ['Sort each word: true cognate or false friend?', 'Classe chaque mot : vrai cousin ou faux ami ?'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Traps for English speakers', 'Pièges pour les anglophones',
      'Seven words that English speakers misread all the time.', 'Sept mots que les anglophones comprennent de travers en permanence.',
    ),
    vocab('sp-falsche-freunde-bekommen', 'bekommen', 'to get, to receive', 'recevoir, obtenir', null, 'be-KOM-men', 'buh-KOM-en', ['Ich bekomme morgen einen Brief.', 'I will get a letter tomorrow.', 'Je recevrai une lettre demain.']),
    vocab('sp-falsche-freunde-gift', 'das Gift', 'the poison', 'le poison', 'das', 'GIFT', 'dahs GIFT', ['Vorsicht, das ist Gift!', 'Careful, that is poison!', 'Attention, c’est du poison !']),
    vocab('sp-falsche-freunde-rat', 'der Rat', 'the advice', 'le conseil', 'der', 'RAHT', 'dair RAHT', ['Danke für deinen Rat.', 'Thanks for your advice.', 'Merci pour ton conseil.']),
    vocab('sp-falsche-freunde-handy', 'das Handy', 'the mobile phone', 'le téléphone portable', 'das', 'HEN-di', 'dahs HEN-dee', ['Mein Handy ist leer.', 'My phone is out of battery.', 'Mon téléphone n’a plus de batterie.']),
    vocab('sp-falsche-freunde-chef', 'der Chef', 'the boss', 'le patron, le chef', 'der', 'SHEF', 'dair SHEF', ['Mein Chef ist sehr nett.', 'My boss is very nice.', 'Mon patron est très gentil.']),
    vocab('sp-falsche-freunde-rock', 'der Rock', 'the skirt', 'la jupe', 'der', 'ROK', 'dair ROK', ['Sie trägt einen roten Rock.', 'She is wearing a red skirt.', 'Elle porte une jupe rouge.']),
    vocab('sp-falsche-freunde-brav', 'brav', 'well-behaved, good', 'sage, obéissant', null, 'BRAHF', 'BRAHF', ['Das Kind war heute sehr brav.', 'The child was very well-behaved today.', 'L’enfant a été très sage aujourd’hui.']),
    grammar(
      'sp-ff-english',
      ['Seven English traps', 'Sept pièges pour anglophones'],
      [
        '| German | Looks like | Really means |\n|---|---|---|\n| **bekommen** | become | **to get** (*werden* = become) |\n| **das Gift** | gift | **poison** (gift = *das Geschenk*) |\n| **der Rat** | rat | **advice** (rat = *die Ratte*) |\n| **das Handy** | handy | **mobile phone** (handy = *praktisch*) |\n| **der Chef** | chef | **boss** (chef = *der Koch*) |\n| **der Rock** | rock | **skirt** (rock = *der Fels / die Rockmusik*) |\n| **brav** | brave | **well-behaved** (brave = *mutig*) |\n\n**Memory hook:** to say “I become a doctor” use **werden**: *Ich werde Arzt.* **Bekommen** is only for receiving.',
        '| Allemand | Ressemble à | Veut vraiment dire |\n|---|---|---|\n| **bekommen** | become | **recevoir, obtenir** (*werden* = devenir) |\n| **das Gift** | gift | **poison** (gift = *das Geschenk*) |\n| **der Rat** | rat | **conseil** (rat = *die Ratte*) |\n| **das Handy** | handy | **téléphone portable** (handy = *praktisch*) |\n| **der Chef** | chef | **patron** (chef cuisinier = *der Koch*) |\n| **der Rock** | rock | **jupe** (rock = *der Fels / die Rockmusik*) |\n| **brav** | brave | **sage** (brave = *mutig*) |\n\n**Astuce :** pour dire « je deviens médecin », utilise **werden** : *Ich werde Arzt.* **Bekommen** sert seulement à recevoir.',
      ],
      [
        ['Ich werde Arzt.', 'I am going to become a doctor.', 'Je vais devenir médecin.'],
        ['Ich bekomme ein Geschenk.', 'I am getting a present.', 'Je reçois un cadeau.'],
        ['Mein Chef kocht nicht.', 'My boss does not cook.', 'Mon patron ne cuisine pas.'],
      ],
    ),
    mc(
      'sp-ff-e3',
      ['You want to say "I want to become a teacher". Which verb?', 'Tu veux dire « je veux devenir professeur ». Quel verbe ?'],
      ['Ich will Lehrer werden.', 'Ich will Lehrer bekommen.', 'Ich will Lehrer kriegen.'],
      ['Ich will Lehrer werden.', 'Ich will Lehrer bekommen.', 'Ich will Lehrer kriegen.'], 0,
      ['"become" = werden. "bekommen" = to get/receive.', '« devenir » = werden. « bekommen » = recevoir.'],
    ),
    fb(
      'sp-ff-e4',
      ['Ich ___ morgen ein Paket. (I will receive a parcel tomorrow)', 'Ich ___ morgen ein Paket. (Je recevrai un colis demain)'],
      'bekomme',
      ['The verb of this chapter that looks like "become", ich form.', 'Le verbe de ce chapitre qui ressemble à « become », forme ich.'],
    ),
    mc(
      'sp-ff-e5',
      ['"Das ist Gift!" What does the speaker mean?', '« Das ist Gift ! » Que veut dire la personne ?'],
      ['It is poison', 'It is a present', 'It is a gift shop'],
      ['C’est du poison', 'C’est un cadeau', 'C’est une boutique de cadeaux'], 0,
      ['Gift = poison. The German word for a present is Geschenk.', 'Gift = poison. Le mot allemand pour cadeau est Geschenk.'],
    ),
    ap('sp-ff-e6', 'Handy', 'das', ['Das Handy: neuter.', 'Das Handy : neutre.']),
    wo(
      'sp-ff-e7',
      ['Mein', 'ist', 'nett', 'Chef', 'sehr'],
      ['Mein', 'Chef', 'ist', 'sehr', 'nett'],
      ['Subject first, then verb in second position.', 'Sujet d’abord, puis verbe en deuxième position.'],
    ),
    lc(
      'sp-ff-e8',
      ['Listen. What does she wear?', 'Écoute. Que porte-t-elle ?'],
      'Sie trägt einen roten Rock.',
      ['A red skirt', 'A rock band T-shirt', 'A red coat'],
      ['Une jupe rouge', 'Un T-shirt de groupe de rock', 'Un manteau rouge'], 0,
      ['Rock = skirt.', 'Rock = jupe.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Same word, safe for one language', 'Même mot, sûr pour une seule langue',
      'sensibel, aktuell, eventuell: traps for English speakers, friends for French speakers.', 'sensibel, aktuell, eventuell : des pièges pour les anglophones, des amis pour les francophones.',
    ),
    vocab('sp-falsche-freunde-sensibel', 'sensibel', 'sensitive', 'sensible', null, 'sen-ZEE-bel', 'zen-ZEE-bel', ['Er ist ein sehr sensibler Mensch.', 'He is a very sensitive person.', 'C’est une personne très sensible.']),
    vocab('sp-falsche-freunde-aktuell', 'aktuell', 'current, up to date', 'actuel', null, 'ak-tu-EL', 'ak-too-EL', ['Das ist die aktuelle Nachricht.', 'This is the current news.', 'C’est l’information actuelle.']),
    vocab('sp-falsche-freunde-eventuell', 'eventuell', 'possibly, perhaps', 'éventuellement', null, 'e-ven-tu-EL', 'ay-ven-too-EL', ['Wir kommen eventuell später.', 'We may come later.', 'Nous viendrons peut-être plus tard.']),
    vocab('sp-falsche-freunde-schliesslich', 'schließlich', 'eventually, finally', 'finalement, après tout', null, 'SCHLEES-lich', 'SHLEESS-likh', ['Schließlich haben wir es geschafft.', 'Eventually we managed it.', 'Finalement, nous y sommes arrivés.']),
    grammar(
      'sp-ff-partial',
      ['Partial false friends', 'Faux amis partiels'],
      [
        '| German | English trap | French |\n|---|---|---|\n| **sensibel** = sensitive | “sensible” = *vernünftig* | *sensible*: **true friend** |\n| **aktuell** = current | “actual” = *tatsächlich* | *actuel*: **true friend** |\n| **eventuell** = possibly | “eventually” = *schließlich* | *éventuellement*: **true friend** |\n\nIf you speak English: **never** translate “sensible”, “actual”, “eventually” with these words.\n\nIf you speak French: these three are safe. Celebrate, but check the next chapter.',
        '| Allemand | Piège anglais | Français |\n|---|---|---|\n| **sensibel** = sensible (au sens émotionnel) | “sensible” = *vernünftig* | *sensible* : **vrai ami** |\n| **aktuell** = actuel | “actual” = *tatsächlich* | *actuel* : **vrai ami** |\n| **eventuell** = éventuellement | “eventually” = *schließlich* | *éventuellement* : **vrai ami** |\n\nSi tu parles anglais : ne traduis **jamais** « sensible », « actual », « eventually » avec ces mots.\n\nSi tu parles français : ces trois mots sont sûrs. Réjouis-toi, mais lis le chapitre suivant.',
      ],
      [
        ['Das Wetter ist aktuell sehr schlecht.', 'The weather is very bad at the moment.', 'Le temps est actuellement très mauvais.'],
        ['Eventuell regnet es morgen.', 'It may rain tomorrow.', 'Il pleuvra peut-être demain.'],
      ],
    ),
    mc(
      'sp-ff-e9',
      ['"Eventuell" is closest to which meaning?', '« Eventuell » est le plus proche de quel sens ?'],
      ['possibly', 'finally', 'every time'],
      ['éventuellement, peut-être', 'finalement', 'à chaque fois'], 0,
      ['eventuell = possibly. For "eventually" use schließlich.', 'eventuell = possiblement. Pour « finalement » utilise schließlich.'],
    ),
    fb(
      'sp-ff-e10',
      ['___ haben wir es geschafft. (Eventually / in the end)', '___ haben wir es geschafft. (Finalement, au bout du compte)'],
      'Schließlich',
      ['Not "eventuell"! Starts with S.', 'Pas « eventuell » ! Commence par S.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Traps for French speakers', 'Pièges pour les francophones',
      'Four words French speakers often get wrong.', 'Quatre mots que les francophones comprennent souvent mal.',
    ),
    vocab('sp-falsche-freunde-chance', 'die Chance', 'the opportunity', 'l’occasion', 'die', 'SHAN-se', 'dee SHAHN-suh', ['Das ist deine Chance!', 'This is your opportunity!', 'C’est ton occasion !']),
    vocab('sp-falsche-freunde-ignorieren', 'ignorieren', 'to ignore, to deliberately overlook', 'ignorer (volontairement), faire semblant de ne pas voir', null, 'ig-no-REE-ren', 'ig-noh-REE-ren', ['Er ignoriert mich.', 'He is ignoring me.', 'Il m’ignore (il fait exprès de ne pas me voir).']),
    vocab('sp-falsche-freunde-brief', 'der Brief', 'the letter', 'la lettre', 'der', 'BREEF', 'dair BREEF', ['Ich schreibe einen Brief.', 'I am writing a letter.', 'J’écris une lettre.']),
    vocab('sp-falsche-freunde-dose', 'die Dose', 'the can, the tin', 'la boîte de conserve', 'die', 'DO-ze', 'dee DOH-zuh', ['Ich öffne eine Dose Tomaten.', 'I open a can of tomatoes.', 'J’ouvre une boîte de tomates.']),
    grammar(
      'sp-ff-french',
      ['Four French traps', 'Quatre pièges pour francophones'],
      [
        '| German | Looks like (FR) | Really means |\n|---|---|---|\n| **die Chance** | chance (= luck) | **opportunity**. Luck = *das Glück* |\n| **ignorieren** | ignorer (= not know) | **to deliberately overlook**. Not know = *nicht wissen* |\n| **der Brief** | bref (= short) | **letter**. Short = *kurz* |\n| **die Dose** | dose (= amount) | **can / tin**. Dose = *die Dosis* |\n\n**Note:** *Brief* also traps English speakers: “brief” = *kurz*.',
        '| Allemand | Ressemble à (FR) | Veut vraiment dire |\n|---|---|---|\n| **die Chance** | chance (= bonheur) | **occasion**. La chance = *das Glück* |\n| **ignorieren** | ignorer (= ne pas savoir) | **faire semblant de ne pas voir**. Ne pas savoir = *nicht wissen* |\n| **der Brief** | bref (= court) | **lettre**. Court = *kurz* |\n| **die Dose** | dose (= quantité) | **boîte de conserve**. La dose = *die Dosis* |\n\n**Note :** *Brief* piège aussi les anglophones : « brief » = *kurz*.',
      ],
      [
        ['Ich habe Glück gehabt.', 'I was lucky.', 'J’ai eu de la chance.'],
        ['Ich weiß es nicht.', 'I do not know it.', 'Je ne le sais pas.'],
      ],
    ),
    mc(
      'sp-ff-e11',
      ['You want to say "I was lucky". Which noun?', 'Tu veux dire « j’ai eu de la chance ». Quel nom ?'],
      ['das Glück', 'die Chance', 'der Zufall'],
      ['das Glück', 'die Chance', 'der Zufall'], 0,
      ['Luck = Glück. Chance means opportunity.', 'La chance (bonheur) = Glück. Chance en allemand signifie occasion.'],
    ),
    fb(
      'sp-ff-e12',
      ['Ich schreibe einen ___. (a letter)', 'Ich schreibe einen ___. (une lettre)'],
      'Brief',
      ['Five letters, starts with B.', 'Cinq lettres, commence par B.'],
    ),
    wo(
      'sp-ff-e13',
      ['Ich', 'öffne', 'Dose', 'eine', 'Tomaten.'],
      ['Ich', 'öffne', 'eine', 'Dose', 'Tomaten.'],
      ['Verb second, then the article before the noun.', 'Verbe en deuxième position, puis l’article avant le nom.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'True friends', 'Les vrais amis',
      'Words you can trust, and patterns that help you guess more.', 'Des mots sûrs, et des motifs qui aident à deviner davantage.',
    ),
    vocab('sp-falsche-freunde-hotel', 'das Hotel', 'the hotel', 'l’hôtel', 'das', 'ho-TEL', 'dahs hoh-TEL', ['Das Hotel ist in der Stadt.', 'The hotel is in the city.', 'L’hôtel est en ville.']),
    vocab('sp-falsche-freunde-information', 'die Information', 'the information', 'l’information', 'die', 'in-for-ma-tsi-OHN', 'dee in-for-mah-tsee-OHN', ['Ich brauche mehr Informationen.', 'I need more information.', 'J’ai besoin de plus d’informations.']),
    vocab('sp-falsche-freunde-wasser', 'das Wasser', 'the water', 'l’eau', 'das', 'VAS-ser', 'dahs VAHS-ser', ['Ich trinke Wasser.', 'I drink water.', 'Je bois de l’eau.']),
    vocab('sp-falsche-freunde-buch', 'das Buch', 'the book', 'le livre', 'das', 'BOOKH', 'dahs BOOKH', ['Das Buch ist spannend.', 'The book is exciting.', 'Le livre est passionnant.']),
    grammar(
      'sp-ff-cognates',
      ['Cognate patterns that work', 'Les motifs qui fonctionnent'],
      [
        '**With English** (shared Germanic roots): **Wasser** water · **Buch** book · **Haus** house · **Name** name · **Finger** finger · **Winter** winter · **Hand** hand. Typical changes: **pf → p** (*Apfel* – apple), **ss/ß → t** (*Wasser* – water), **ch → k** (*Kuchen* – cake, *machen* – make).\n\n**With French** (Latin and international words): **Hotel**, **Information**, **Musik**, **Restaurant**, **Problem**, **Universität**, **Nation**. Endings **-ion** (*die Nation*) and **-tät** (*die Qualität* – qualité) are friends: the noun is almost always **feminine**.\n\n**Rule of thumb:** clearly international or technical words (*Information*, *Problem*) are usually safe. Short everyday words, and Latin-looking ones like *aktuell* or *ignorieren*, are where false friends hide: check them in a sentence.',
        '**Avec l’anglais** (racines germaniques) : **Wasser** water · **Buch** book · **Haus** house · **Name** name · **Finger** finger · **Winter** winter · **Hand** hand. Changements typiques : **pf → p** (*Apfel* – apple), **ss/ß → t** (*Wasser* – water), **ch → k** (*Kuchen* – cake, *machen* – make).\n\n**Avec le français** (mots latins et internationaux) : **Hotel**, **Information**, **Musik**, **Restaurant**, **Problem**, **Universität**, **Nation**. Les terminaisons **-ion** (*die Nation*) et **-tät** (*die Qualität* – qualité) sont des amies : le nom est presque toujours **féminin**.\n\n**Règle pratique :** les mots nettement internationaux ou techniques (*Information*, *Problem*) sont en général sûrs. Ce sont les mots courts du quotidien, et ceux d’allure latine comme *aktuell* ou *ignorieren*, qui cachent les faux amis : vérifie-les dans une phrase.',
      ],
      [
        ['Das Restaurant ist gut.', 'The restaurant is good.', 'Le restaurant est bon.'],
        ['Die Qualität ist sehr hoch.', 'The quality is very high.', 'La qualité est très élevée.'],
      ],
    ),
    mc(
      'sp-ff-e14',
      ['Which ending almost always signals a feminine noun that looks like French?', 'Quelle terminaison signale presque toujours un nom féminin ressemblant au français ?'],
      ['-ion (die Nation)', '-chen (das Mädchen)', '-er (der Lehrer)'],
      ['-ion (die Nation)', '-chen (das Mädchen)', '-er (der Lehrer)'], 0,
      ['-ion and -tät are feminine.', '-ion et -tät sont féminins.'],
    ),
    ap('sp-ff-e15', 'Information', 'die', ['-ion nouns are feminine.', 'Les noms en -ion sont féminins.']),

    wrapup(
      '**Rule:** a German word that looks familiar must be checked in a sentence.\n\n**English traps:** bekommen = get (not become) · Gift = poison · Rat = advice · Handy = mobile phone · Chef = boss · Rock = skirt · brav = well-behaved · Brief = letter.\n\n**Partial friends:** sensibel, aktuell, eventuell are traps for English but true for French.\n\n**French traps:** Chance = opportunity (luck = Glück) · ignorieren = deliberately overlook · Brief = letter · Dose = can.\n\n**True friends:** Hotel, Information, Musik, Restaurant, Wasser, Buch, Haus. Endings -ion and -tät = feminine.',
      '**Règle :** un mot allemand qui semble familier doit être vérifié dans une phrase.\n\n**Pièges anglais :** bekommen = recevoir (pas devenir) · Gift = poison · Rat = conseil · Handy = téléphone portable · Chef = patron · Rock = jupe · brav = sage · Brief = lettre.\n\n**Faux amis partiels :** sensibel, aktuell, eventuell sont des pièges pour l’anglais mais de vrais amis pour le français.\n\n**Pièges français :** Chance = occasion (la chance = Glück) · ignorieren = faire semblant de ne pas voir · Brief = lettre · Dose = boîte de conserve.\n\n**Vrais amis :** Hotel, Information, Musik, Restaurant, Wasser, Buch, Haus. Terminaisons -ion et -tät = féminin.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: False friends', 'Quiz final : faux amis'),
    mc(
      'sp-ff-q1',
      ['"Ich bekomme ein Geschenk" means…', '« Ich bekomme ein Geschenk » signifie…'],
      ['I am getting a present', 'I am becoming a present', 'I am buying a present'],
      ['Je reçois un cadeau', 'Je deviens un cadeau', 'J’achète un cadeau'], 0,
      ['bekommen = to get.', 'bekommen = recevoir.'],
    ),
    mc(
      'sp-ff-q2',
      ['"Der Rat" means…', '« Der Rat » signifie…'],
      ['advice', 'rat', 'speed'],
      ['conseil', 'rat', 'vitesse'], 0,
      ['Rat = advice. The animal is die Ratte.', 'Rat = conseil. L’animal est die Ratte.'],
    ),
    mc(
      'sp-ff-q3',
      ['Your colleague says "Mein Chef ist nett." Who is nice?', 'Ton collègue dit « Mein Chef ist nett. » Qui est gentil ?'],
      ['The boss', 'The cook', 'The chef de cuisine'],
      ['Le patron', 'Le cuisinier', 'Le chef de cuisine'], 0,
      ['Chef = boss. Cook = Koch.', 'Chef = patron. Cuisinier = Koch.'],
    ),
    fb(
      'sp-ff-q4',
      ['Ich ___ Arzt. (I am going to become a doctor)', 'Ich ___ Arzt. (Je vais devenir médecin)'],
      'werde',
      ['Use the verb for "become".', 'Utilise le verbe pour « devenir ».'],
    ),
    fb(
      'sp-ff-q5',
      ['Vorsicht, das ist ___! (poison)', 'Vorsicht, das ist ___ ! (poison)'],
      'Gift',
      ['Four letters, starts with G.', 'Quatre lettres, commence par G.'],
    ),
    mc(
      'sp-ff-q6',
      ['What does "eventuell" mean?', 'Que signifie « eventuell » ?'],
      ['possibly', 'finally', 'eventually'],
      ['éventuellement', 'finalement', 'en fin de compte'], 0,
      ['eventuell = possibly. Eventually = schließlich.', 'eventuell = éventuellement. En fin de compte = schließlich.'],
    ),
    mc(
      'sp-ff-q7',
      ['You want to say "That is your chance!" (an opportunity). Which is correct?', 'Tu veux dire « C’est ta chance ! » (une occasion). Lequel est correct ?'],
      ['Das ist deine Chance!', 'Das ist dein Glück!', 'Das ist dein Zufall!'],
      ['Das ist deine Chance!', 'Das ist dein Glück!', 'Das ist dein Zufall!'], 0,
      ['Chance = opportunity. Glück = luck.', 'Chance = occasion. Glück = la chance (bonheur).'],
    ),
    mc(
      'sp-ff-q8',
      ['"Er ignoriert mich" means…', '« Er ignoriert mich » signifie…'],
      ['He deliberately overlooks me', 'He does not know me', 'He is lying to me'],
      ['Il fait exprès de ne pas me voir', 'Il ne me connaît pas', 'Il me ment'], 0,
      ['ignorieren = deliberately overlook. Not know = nicht wissen / nicht kennen.', 'ignorieren = faire exprès de ne pas voir. Ne pas savoir = nicht wissen / nicht kennen.'],
    ),
    match(
      'sp-ff-q9',
      [
        ['Gift', 'poison', 'poison'],
        ['Rock', 'skirt', 'jupe'],
        ['Brief', 'letter', 'lettre'],
        ['Dose', 'can, tin', 'boîte de conserve'],
        ['Handy', 'mobile phone', 'téléphone portable'],
      ],
      ['Match each false friend with its real meaning.', 'Associe chaque faux ami à son vrai sens.'],
    ),
    ap('sp-ff-q10', 'Chance', 'die', ['Chance is feminine.', 'Chance est féminin.']),
    wo(
      'sp-ff-q11',
      ['Mein', 'ist', 'leer', 'Handy'],
      ['Mein', 'Handy', 'ist', 'leer'],
      ['Subject, verb, adjective.', 'Sujet, verbe, adjectif.'],
    ),
    wo(
      'sp-ff-q12',
      ['bekomme', 'Ich', 'morgen', 'einen', 'Brief.'],
      ['Ich', 'bekomme', 'morgen', 'einen', 'Brief.'],
      ['Verb in second position.', 'Verbe en deuxième position.'],
    ),
    lc(
      'sp-ff-q13',
      ['Listen. What does the child do?', 'Écoute. Que fait l’enfant ?'],
      'Das Kind war heute sehr brav.',
      ['It behaved well', 'It was very brave', 'It was ill'],
      ['Il a été sage', 'Il a été très courageux', 'Il était malade'], 0,
      ['brav = well-behaved, not brave.', 'brav = sage, pas courageux.'],
    ),
    lc(
      'sp-ff-q14',
      ['Listen. What is the speaker warning about?', 'Écoute. De quoi la personne prévient-elle ?'],
      'Vorsicht, das ist Gift!',
      ['Poison', 'A gift', 'A fast car'],
      ['Du poison', 'Un cadeau', 'Une voiture rapide'], 0,
      ['Gift = poison.', 'Gift = poison.'],
    ),
  ],
});

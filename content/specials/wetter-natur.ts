import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const wetterNatur = defineSpecial({
  slug: 'wetter-natur',
  number: 28,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['l12', 'l18', 'a2-l14'],
  title: ['Wetter & Natur', 'Weather & nature', 'Météo & nature'],
  theme: [
    'Weather, seasons, animals, nature and the language of the forecast — including the impersonal es',
    'La météo, les saisons, les animaux, la nature et le langage des prévisions — y compris le es impersonnel',
  ],
  goals: [
    'Describe the weather with es and the verbs regnen, schneien, scheinen',
    'Name the four seasons, the months and typical temperatures',
    'Talk about animals, plants and nature (including plural forms)',
    'Understand a short weather forecast and make plans around it',
  ],
  goalsFr: [
    'Décrire le temps avec es et les verbes regnen, schneien, scheinen',
    'Nommer les quatre saisons, les mois et les températures typiques',
    'Parler des animaux, des plantes et de la nature (y compris les pluriels)',
    'Comprendre une courte prévision météo et faire des projets en conséquence',
  ],
  steps: [
    intro(
      'Wie ist das Wetter heute?', 'Quel temps fait-il aujourd’hui ?',
      'Germans love to talk about the weather, and it is the perfect small-talk topic. You hear it at the bus stop, on the radio and in every plan: “Wenn es regnet, bleiben wir zu Hause.” This course gives you the weather words, the strange little es, and the vocabulary for seasons, animals and nature.',
      'Les Allemands adorent parler de la météo, et c’est le sujet idéal pour la conversation légère. On l’entend à l’arrêt de bus, à la radio et dans chaque projet : « Wenn es regnet, bleiben wir zu Hause. » Ce cours te donne les mots de la météo, le curieux petit es, et le vocabulaire des saisons, des animaux et de la nature.',
      [
        'Describe the weather with es + verb or es ist + adjective',
        'Name the seasons and say what you do in each',
        'Name common animals and plants with their plurals',
        'Read a forecast: Temperaturen, Wind, Regen, Sonne',
      ],
      [
        'Décrire le temps avec es + verbe ou es ist + adjectif',
        'Nommer les saisons et dire ce qu’on fait dans chacune',
        'Nommer les animaux et plantes courants avec leurs pluriels',
        'Lire une prévision : Temperaturen, Wind, Regen, Sonne',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'The weather', 'Le temps',
      'Sunny, cloudy, rainy — and the little word es.', 'Ensoleillé, nuageux, pluvieux — et le petit mot es.',
    ),
    vocab('sp-wetter-natur-wetter', 'das Wetter', 'the weather', 'le temps (météo)', 'das', 'WE-ter', 'dahs VET-er', ['Das Wetter ist heute schön.', 'The weather is nice today.', 'Il fait beau aujourd’hui.']),
    vocab('sp-wetter-natur-sonne', 'die Sonne', 'the sun', 'le soleil', 'die', 'SO-ne', 'dee ZON-eh', ['Die Sonne scheint den ganzen Tag.', 'The sun shines all day.', 'Le soleil brille toute la journée.']),
    vocab('sp-wetter-natur-regen', 'der Regen', 'the rain', 'la pluie', 'der', 'RE-gen', 'dair RAY-gen', ['Bei Regen bleibe ich zu Hause.', 'When it rains I stay at home.', 'Quand il pleut, je reste à la maison.']),
    vocab('sp-wetter-natur-schnee', 'der Schnee', 'the snow', 'la neige', 'der', 'SCHNEE', 'dair SHNAY', ['Im Winter liegt viel Schnee.', 'In winter there is a lot of snow.', 'En hiver, il y a beaucoup de neige.']),
    vocab('sp-wetter-natur-wind', 'der Wind', 'the wind', 'le vent', 'der', 'WIND', 'dair VINT', ['Heute ist starker Wind.', 'Today there is a strong wind.', 'Aujourd’hui, il y a un vent fort.']),
    vocab('sp-wetter-natur-wolke', 'die Wolke', 'the cloud', 'le nuage', 'die', 'WOL-ke', 'dee VOL-keh', ['Am Himmel sind viele Wolken.', 'There are many clouds in the sky.', 'Il y a beaucoup de nuages dans le ciel.']),
    vocab('sp-wetter-natur-temperatur', 'die Temperatur', 'the temperature', 'la température', 'die', 'tem-pe-ra-TUR', 'dee tem-peh-rah-TOOR', ['Die Temperatur liegt bei zwanzig Grad.', 'The temperature is around twenty degrees.', 'La température est d’environ vingt degrés.']),
    vocab('sp-wetter-natur-grad', 'der Grad', 'the degree', 'le degré', 'der', 'GRAHD', 'dair GRAAT', ['Heute haben wir fünfzehn Grad.', 'Today it is fifteen degrees.', 'Aujourd’hui, il fait quinze degrés.']),
    grammar(
      'sp-wn-weather',
      ['Weather with the impersonal es', 'La météo avec le es impersonnel'],
      [
        'In German the weather has no real subject — we use **es**. Two patterns:\n\n- **es + weather verb**: **Es regnet.** (it rains) · **Es schneit.** (it snows) · **Es blitzt / donnert.** (lightning/thunder)\n- **es ist + adjective**: **Es ist** sonnig, kalt, warm, heiß, windig, bewölkt.\n\nOnly the **sun** is a real subject: **Die Sonne scheint.** Ask: **Wie ist das Wetter?** — **Was ist die Temperatur?** Say the degrees: **Es sind zehn Grad.** / **Es ist minus zwei Grad.** (*Es sind* because the number is plural.)\n\nNever drop **es**: ~~Regnet.~~ **Es regnet.**',
        'En allemand, la météo n’a pas de vrai sujet — on utilise **es**. Deux modèles :\n\n- **es + verbe météo** : **Es regnet.** (il pleut) · **Es schneit.** (il neige) · **Es blitzt / donnert.** (éclairs/tonnerre)\n- **es ist + adjectif** : **Es ist** sonnig, kalt, warm, heiß, windig, bewölkt.\n\nSeul le **soleil** est un vrai sujet : **Die Sonne scheint.** Demander : **Wie ist das Wetter ?** — **Was ist die Temperatur ?** Dire les degrés : **Es sind zehn Grad.** / **Es ist minus zwei Grad.** (*Es sind* car le nombre est au pluriel.)\n\nNe supprime jamais **es** : ~~Regnet.~~ **Es regnet.**',
      ],
      [
        ['Es regnet seit heute Morgen.', 'It has been raining since this morning.', 'Il pleut depuis ce matin.'],
        ['Im Januar schneit es oft.', 'In January it often snows.', 'En janvier, il neige souvent.'],
        ['Heute ist es sonnig und warm.', 'Today it is sunny and warm.', 'Aujourd’hui, il fait ensoleillé et chaud.'],
        ['Es sind nur fünf Grad.', 'It is only five degrees.', 'Il ne fait que cinq degrés.'],
      ],
    ),
    match(
      'sp-wn-e1',
      [
        ['die Sonne', 'the sun', 'le soleil'],
        ['der Regen', 'the rain', 'la pluie'],
        ['der Schnee', 'the snow', 'la neige'],
        ['der Wind', 'the wind', 'le vent'],
        ['die Wolke', 'the cloud', 'le nuage'],
      ],
      ['Match the weather words.', 'Associe les mots de la météo.'],
    ),
    fb(
      'sp-wn-e2',
      ['___ regnet heute. (it)', '___ regnet heute. (il)'],
      'Es',
      ['Weather needs es.', 'La météo demande es.'],
    ),
    mc(
      'sp-wn-e3',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Es schneit im Winter.', 'Schneit im Winter.', 'Er schneit im Winter.'],
      ['Es schneit im Winter.', 'Schneit im Winter.', 'Er schneit im Winter.'], 0,
      ['Impersonal weather always has es.', 'La météo a toujours es.'],
    ),
    ap('sp-wn-e4', 'Wetter', 'das', ['Wetter is neuter.', 'Wetter est neutre.']),
    ap('sp-wn-e5', 'Temperatur', 'die', ['Temperatur is feminine (-ur).', 'Temperatur est féminin (-ur).']),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'The seasons', 'Les saisons',
      'Frühling, Sommer, Herbst, Winter — and what we do in each.', 'Frühling, Sommer, Herbst, Winter — et ce qu’on y fait.',
    ),
    vocab('sp-wetter-natur-fruehling', 'der Frühling', 'the spring', 'le printemps', 'der', 'FRÜH-ling', 'dair FRUE-ling', ['Im Frühling blühen die Blumen.', 'In spring the flowers bloom.', 'Au printemps, les fleurs éclosent.']),
    vocab('sp-wetter-natur-sommer', 'der Sommer', 'the summer', 'l’été', 'der', 'SO-mmer', 'dair ZOM-er', ['Im Sommer schwimme ich gern.', 'In summer I like to swim.', 'En été, j’aime nager.']),
    vocab('sp-wetter-natur-herbst', 'der Herbst', 'the autumn', 'l’automne', 'der', 'HERBST', 'dair HERPST', ['Im Herbst fallen die Blätter.', 'In autumn the leaves fall.', 'En automne, les feuilles tombent.']),
    vocab('sp-wetter-natur-winter', 'der Winter', 'the winter', 'l’hiver', 'der', 'WIN-ter', 'dair VIN-ter', ['Im Winter ist es sehr kalt.', 'In winter it is very cold.', 'En hiver, il fait très froid.']),
    vocab('sp-wetter-natur-kalt', 'kalt', 'cold', 'froid', null, 'KALT', 'KAHLT', ['Heute ist es kalt.', 'It is cold today.', 'Il fait froid aujourd’hui.']),
    vocab('sp-wetter-natur-warm', 'warm', 'warm', 'chaud, doux', null, 'WARM', 'VARM', ['Im Mai ist es schon warm.', 'In May it is already warm.', 'En mai, il fait déjà doux.']),
    grammar(
      'sp-wn-seasons',
      ['Seasons and typical weather', 'Saisons et temps typique'],
      [
        'All four seasons are **masculine**: **der** Frühling, **der** Sommer, **der** Herbst, **der** Winter. To say *in* a season, use **im**:\n\n- **Im Sommer** ist es heiß. · **Im Winter** schneit es.\n- Add the months: **im Dezember**, **im Juli**. (see *Zahlen, Geld & Zeit*)\n\nA few useful adjectives: **kalt** (cold), **kühl** (cool), **warm**, **heiß** (hot), **sonnig**, **regnerisch**, **windig**, **neblig** (foggy), **bewölkt**. They are also used as **es ist + adjective**.\n\nTemperatures: **minus drei Grad** = −3°, **null Grad**, **zwanzig Grad**, **über dreißig Grad**.',
        'Les quatre saisons sont **masculines** : **der** Frühling, **der** Sommer, **der** Herbst, **der** Winter. Pour dire *en* une saison, on utilise **im** :\n\n- **Im Sommer** ist es heiß. · **Im Winter** schneit es.\n- Ajoute les mois : **im Dezember**, **im Juli**. (voir *Zahlen, Geld & Zeit*)\n\nQuelques adjectifs utiles : **kalt** (froid), **kühl** (frais), **warm**, **heiß** (très chaud), **sonnig**, **regnerisch**, **windig**, **neblig** (brumeux), **bewölkt**. On les utilise aussi avec **es ist + adjectif**.\n\nTempératures : **minus drei Grad** = −3°, **null Grad**, **zwanzig Grad**, **über dreißig Grad**.',
      ],
      [
        ['Im Frühling ist es oft regnerisch.', 'In spring it is often rainy.', 'Au printemps, il est souvent pluvieux.'],
        ['Im Sommer sind es über dreißig Grad.', 'In summer it is over thirty degrees.', 'En été, il fait plus de trente degrés.'],
        ['Im Herbst ist es kühl und neblig.', 'In autumn it is cool and foggy.', 'En automne, il fait frais et brumeux.'],
      ],
    ),
    ap('sp-wn-e6', 'Winter', 'der', ['All seasons are masculine.', 'Toutes les saisons sont masculines.']),
    ap('sp-wn-e7', 'Sommer', 'der', ['All seasons are masculine.', 'Toutes les saisons sont masculines.']),
    fb(
      'sp-wn-e8',
      ['___ Winter schneit es oft. (in the)', '___ Winter schneit es oft. (en)'],
      'Im',
      ['in + dem = im.', 'in + dem = im.'],
    ),
    mc(
      'sp-wn-e9',
      ['It is 32° in July. What do you say?', 'Il fait 32° en juillet. Que dis-tu ?'],
      ['Es ist heiß.', 'Es ist kalt.', 'Es schneit.'], ['Es ist heiß.', 'Es ist kalt.', 'Es schneit.'], 0,
      ['32° is hot = heiß.', '32° = très chaud = heiß.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Animals', 'Les animaux',
      'Pets, farm animals and wild animals — with their plurals.', 'Animaux de compagnie, de la ferme et sauvages — avec leurs pluriels.',
    ),
    vocab('sp-wetter-natur-hund', 'der Hund', 'the dog', 'le chien', 'der', 'HUNT', 'dair HOONT', ['Mein Hund heißt Max.', 'My dog is called Max.', 'Mon chien s’appelle Max.']),
    vocab('sp-wetter-natur-katze', 'die Katze', 'the cat', 'le chat', 'die', 'KAT-ze', 'dee KAT-tseh', ['Die Katze schläft auf dem Sofa.', 'The cat is sleeping on the sofa.', 'Le chat dort sur le canapé.']),
    vocab('sp-wetter-natur-vogel', 'der Vogel', 'the bird', 'l’oiseau', 'der', 'FO-gel', 'dair FOH-gel', ['Im Garten singt ein Vogel.', 'A bird is singing in the garden.', 'Un oiseau chante dans le jardin.']),
    vocab('sp-wetter-natur-pferd', 'das Pferd', 'the horse', 'le cheval', 'das', 'PFERT', 'dahs PFAYRT', ['Das Pferd läuft über die Wiese.', 'The horse runs across the meadow.', 'Le cheval court à travers le pré.']),
    vocab('sp-wetter-natur-fisch', 'der Fisch', 'the fish', 'le poisson', 'der', 'FISCH', 'dair FISH', ['Im See gibt es viele Fische.', 'There are many fish in the lake.', 'Il y a beaucoup de poissons dans le lac.']),
    vocab('sp-wetter-natur-tier', 'das Tier', 'the animal', 'l’animal', 'das', 'TIER', 'dahs TEER', ['Welches Tier magst du am liebsten?', 'Which animal do you like best?', 'Quel animal préfères-tu ?']),
    grammar(
      'sp-wn-animals',
      ['Animals: plurals and likes', 'Animaux : pluriels et préférences'],
      [
        'Many animal names follow typical plural patterns:\n\n- **-e**: der Hund → **die Hunde**, das Pferd → **die Pferde**, der Fisch → **die Fische**\n- **-n**: die Katze → **die Katzen**\n- **umlaut + -e**: der Vogel → **die Vögel**\n- **-e**: das Tier → **die Tiere** — always learn the plural **with** the noun!\n\nTo say what you like use **mögen** or **gern**: **Ich mag Hunde.** / **Ich habe gern Katzen.** To say what you have: **Ich habe einen Hund** (accusative: **einen** for masculine) and **eine Katze**. **Haustier** = pet: *Hast du ein Haustier?*',
        'Beaucoup de noms d’animaux suivent des pluriels typiques :\n\n- **-e** : der Hund → **die Hunde**, das Pferd → **die Pferde**, der Fisch → **die Fische**\n- **-n** : die Katze → **die Katzen**\n- **tréma + -e** : der Vogel → **die Vögel**\n- **-e** : das Tier → **die Tiere** — apprends toujours le pluriel **avec** le nom !\n\nPour dire ce qu’on aime : **mögen** ou **gern** : **Ich mag Hunde.** / **Ich habe gern Katzen.** Pour dire ce qu’on a : **Ich habe einen Hund** (accusatif : **einen** au masculin) et **eine Katze**. **Haustier** = animal de compagnie : *Hast du ein Haustier ?*',
      ],
      [
        ['Ich habe einen Hund und zwei Katzen.', 'I have a dog and two cats.', 'J’ai un chien et deux chats.'],
        ['Im Garten leben viele Vögel.', 'Many birds live in the garden.', 'Beaucoup d’oiseaux vivent dans le jardin.'],
        ['Mein Bruder hat gern Pferde.', 'My brother likes horses.', 'Mon frère aime les chevaux.'],
        ['Hast du ein Haustier?', 'Do you have a pet?', 'As-tu un animal de compagnie ?'],
      ],
    ),
    match(
      'sp-wn-e10',
      [
        ['der Hund', 'the dog', 'le chien'],
        ['die Katze', 'the cat', 'le chat'],
        ['der Vogel', 'the bird', 'l’oiseau'],
        ['das Pferd', 'the horse', 'le cheval'],
        ['der Fisch', 'the fish', 'le poisson'],
      ],
      ['Match the animals.', 'Associe les animaux.'],
    ),
    fb(
      'sp-wn-e11',
      ['die Katze → die ___', 'die Katze → die ___'],
      'Katzen',
      ['Feminine on -e: plural -n.', 'Féminin en -e : pluriel -n.'],
    ),
    fb(
      'sp-wn-e12',
      ['der Vogel → die ___', 'der Vogel → die ___'],
      'Vögel',
      ['Umlaut: o → ö.', 'Tréma : o → ö.'],
    ),
    wo(
      'sp-wn-e13',
      ['Hund', 'habe', 'Ich', 'einen'],
      ['Ich', 'habe', 'einen', 'Hund'],
      ['Subject, verb, object.', 'Sujet, verbe, objet.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Nature and landscape', 'Nature et paysage',
      'Trees, rivers, mountains — and where we go for a walk.', 'Arbres, rivières, montagnes — et où on va se promener.',
    ),
    vocab('sp-wetter-natur-baum', 'der Baum', 'the tree', 'l’arbre', 'der', 'BAUM', 'dair BOWM', ['Vor dem Haus steht ein großer Baum.', 'There is a big tree in front of the house.', 'Il y a un grand arbre devant la maison.']),
    vocab('sp-wetter-natur-blume', 'die Blume', 'the flower', 'la fleur', 'die', 'BLU-me', 'dee BLOO-meh', ['Sie kauft Blumen für die Oma.', 'She buys flowers for grandma.', 'Elle achète des fleurs pour sa grand-mère.']),
    vocab('sp-wetter-natur-wald', 'der Wald', 'the forest', 'la forêt', 'der', 'WALT', 'dair VALT', ['Am Sonntag gehen wir im Wald spazieren.', 'On Sunday we go for a walk in the forest.', 'Dimanche, nous nous promenons dans la forêt.']),
    vocab('sp-wetter-natur-berg', 'der Berg', 'the mountain', 'la montagne', 'der', 'BERK', 'dair BERK', ['Der Berg ist dreitausend Meter hoch.', 'The mountain is three thousand metres high.', 'La montagne fait trois mille mètres de haut.']),
    vocab('sp-wetter-natur-see', 'der See', 'the lake', 'le lac', 'der', 'SEE', 'dair ZAY', ['Im Sommer baden wir im See.', 'In summer we swim in the lake.', 'En été, nous nous baignons dans le lac.']),
    vocab('sp-wetter-natur-fluss', 'der Fluss', 'the river', 'le fleuve, la rivière', 'der', 'FLUSS', 'dair FLOOS', ['Der Fluss fließt durch die Stadt.', 'The river flows through the city.', 'Le fleuve traverse la ville.']),
    grammar(
      'sp-wn-nature',
      ['Places in nature: im, am, auf', 'Lieux dans la nature : im, am, auf'],
      [
        'For nature, three prepositions are used with the **dative** (location):\n\n- **im** Wald, **im** Park (in the forest/park) — enclosed spaces\n- **am** See, **am** Fluss, **am** Strand (at the lake/river/beach) — next to water\n- **auf dem** Berg, **auf der** Wiese (on the mountain/meadow) — surfaces and heights\n\nFor movement (Wohin?) use the accusative: **in den** Wald, **an den** See, **auf den** Berg. Typical sentences: **Wir machen einen Spaziergang im Wald.** · **Wir wandern auf dem Berg.** · **Wir grillen am See.**',
        'Pour la nature, trois prépositions s’emploient avec le **datif** (lieu) :\n\n- **im** Wald, **im** Park (dans la forêt/le parc) — espaces clos\n- **am** See, **am** Fluss, **am** Strand (au bord du lac/du fleuve/de la plage) — près de l’eau\n- **auf dem** Berg, **auf der** Wiese (sur la montagne/le pré) — surfaces et hauteurs\n\nPour le mouvement (Wohin ?), on utilise l’accusatif : **in den** Wald, **an den** See, **auf den** Berg. Phrases typiques : **Wir machen einen Spaziergang im Wald.** · **Wir wandern auf dem Berg.** · **Wir grillen am See.**',
      ],
      [
        ['Wir machen einen Spaziergang im Wald.', 'We go for a walk in the forest.', 'Nous faisons une promenade dans la forêt.'],
        ['Am Wochenende grillen wir am See.', 'At the weekend we barbecue by the lake.', 'Le week-end, nous faisons un barbecue au bord du lac.'],
        ['Die Kinder spielen auf der Wiese.', 'The children play on the meadow.', 'Les enfants jouent sur le pré.'],
      ],
    ),
    ap('sp-wn-e14', 'Baum', 'der', ['Baum is masculine.', 'Baum est masculin.']),
    ap('sp-wn-e15', 'Blume', 'die', ['Blume is feminine (-e).', 'Blume est féminin (-e).']),
    mc(
      'sp-wn-e16',
      ['"We swim in the lake." Which preposition?', '« Nous nous baignons dans le lac. » Quelle préposition ?'],
      ['im See', 'am See', 'auf See'], ['im See', 'am See', 'auf See'], 0,
      ['Swimming is in the water: im See.', 'Se baigner se fait dans l’eau : im See.'],
    ),
    lc(
      'sp-wn-e17',
      ['Listen. Where are they walking?', 'Écoute. Où se promènent-ils ?'],
      'Am Sonntag machen wir einen Spaziergang im Wald.',
      ['In the forest', 'By the lake', 'On the mountain'], ['Dans la forêt', 'Au bord du lac', 'Sur la montagne'], 0,
      ['Listen for "im Wald".', 'Écoute « im Wald ».'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'The weather forecast', 'La prévision météo',
      'Listen to the radio and make plans: wenn es regnet…', 'Écoute la radio et fais des projets : wenn es regnet…',
    ),
    vocab('sp-wetter-natur-vorhersage', 'die Wettervorhersage', 'the weather forecast', 'la prévision météo', 'die', 'WE-ter-vor-her-sa-ge', 'dee VET-er-fohr-hair-zaa-geh', ['Die Wettervorhersage sagt Regen voraus.', 'The forecast predicts rain.', 'La prévision annonce de la pluie.']),
    vocab('sp-wetter-natur-gewitter', 'das Gewitter', 'the thunderstorm', 'l’orage', 'das', 'ge-WIT-ter', 'dahs geh-VIT-er', ['Am Abend gibt es ein Gewitter.', 'There will be a thunderstorm this evening.', 'Il y aura un orage ce soir.']),
    vocab('sp-wetter-natur-nebel', 'der Nebel', 'the fog', 'le brouillard', 'der', 'NE-bel', 'dair NAY-bel', ['Morgens gibt es oft Nebel.', 'In the morning there is often fog.', 'Le matin, il y a souvent du brouillard.']),
    vocab('sp-wetter-natur-morgen', 'morgen', 'tomorrow', 'demain', null, 'MOR-gen', 'MOR-gen', ['Morgen scheint die Sonne.', 'Tomorrow the sun will shine.', 'Demain, le soleil brillera.']),
    grammar(
      'sp-wn-forecast',
      ['Forecast language and wenn-clauses', 'Langage des prévisions et phrases en wenn'],
      [
        'Forecasts use the **present tense** with a time word, not a special future form:\n\n- **Morgen** regnet es. · **Am Abend** gibt es ein Gewitter. · **Nachts** sind es nur fünf Grad.\n- **Es gibt** + accusative: *Es gibt Regen / ein Gewitter / Nebel.*\n- Words: **sonnig**, **bewölkt**, **heiter** (fair), **Schauer** (shower), **Frost**, **Höchstwerte / Tiefstwerte** (highs / lows).\n\nPlans with **wenn** (if/when) send the verb to the **end**: **Wenn es regnet, bleiben wir zu Hause.** — the main clause then starts with the verb. **Wenn die Sonne scheint, gehen wir an den See.**',
        'Les prévisions utilisent le **présent** avec un mot de temps, pas de futur spécial :\n\n- **Morgen** regnet es. · **Am Abend** gibt es ein Gewitter. · **Nachts** sind es nur fünf Grad.\n- **Es gibt** + accusatif : *Es gibt Regen / ein Gewitter / Nebel.*\n- Mots : **sonnig**, **bewölkt**, **heiter** (éclaircies), **Schauer** (averse), **Frost**, **Höchstwerte / Tiefstwerte** (maxima / minima).\n\nLes projets avec **wenn** (si/quand) envoient le verbe à la **fin** : **Wenn es regnet, bleiben wir zu Hause.** — la principale commence alors par le verbe. **Wenn die Sonne scheint, gehen wir an den See.**',
      ],
      [
        ['Morgen regnet es im Norden.', 'Tomorrow it rains in the north.', 'Demain, il pleut dans le nord.'],
        ['Am Abend gibt es ein Gewitter.', 'There is a thunderstorm in the evening.', 'Il y a un orage le soir.'],
        ['Wenn es regnet, bleiben wir zu Hause.', 'If it rains, we stay at home.', 'S’il pleut, nous restons à la maison.'],
        ['Wenn die Sonne scheint, gehen wir an den See.', 'If the sun shines, we go to the lake.', 'S’il y a du soleil, nous allons au lac.'],
      ],
    ),
    ap('sp-wn-e18', 'Gewitter', 'das', ['Gewitter is neuter.', 'Gewitter est neutre.']),
    ap('sp-wn-e19', 'Nebel', 'der', ['Nebel is masculine.', 'Nebel est masculin.']),
    wo(
      'sp-wn-e20',
      ['es', 'Morgen', 'regnet'],
      ['Morgen', 'regnet', 'es'],
      ['Time word first, verb second.', 'Mot de temps en premier, verbe en deuxième position.'],
    ),
    lc(
      'sp-wn-e21',
      ['Listen. What is the weather tomorrow?', 'Écoute. Quel temps fera-t-il demain ?'],
      'Morgen ist es bewölkt, und am Abend gibt es ein Gewitter.',
      ['Cloudy with a thunderstorm in the evening', 'Sunny all day', 'Snow in the morning'], ['Nuageux avec un orage le soir', 'Ensoleillé toute la journée', 'Neige le matin'], 0,
      ['Listen for "bewölkt" and "Gewitter".', 'Écoute « bewölkt » et « Gewitter ».'],
    ),

    wrapup(
      '**Weather** — es regnet · es schneit · es ist sonnig / kalt / heiß · Die Sonne scheint · Es sind zehn Grad. Never drop es.\n\n**Seasons** — der Frühling, der Sommer, der Herbst, der Winter: im Sommer, im Winter; months: im Juli.\n\n**Animals** — der Hund(e), die Katze(n), der Vogel/Vögel, das Pferd(e), der Fisch(e), das Tier(e). Ich habe einen Hund · Ich mag Hunde.\n\n**Nature** — im Wald · am See / am Fluss · auf dem Berg / auf der Wiese. Movement: in den Wald, an den See.\n\n**Forecast** — Morgen regnet es · Es gibt ein Gewitter · Wenn es regnet, bleiben wir zu Hause (verb at the end of the wenn-clause).',
      '**Météo** — es regnet · es schneit · es ist sonnig / kalt / heiß · Die Sonne scheint · Es sind zehn Grad. Ne supprime jamais es.\n\n**Saisons** — der Frühling, der Sommer, der Herbst, der Winter : im Sommer, im Winter ; mois : im Juli.\n\n**Animaux** — der Hund(e), die Katze(n), der Vogel/Vögel, das Pferd(e), der Fisch(e), das Tier(e). Ich habe einen Hund · Ich mag Hunde.\n\n**Nature** — im Wald · am See / am Fluss · auf dem Berg / auf der Wiese. Mouvement : in den Wald, an den See.\n\n**Prévisions** — Morgen regnet es · Es gibt ein Gewitter · Wenn es regnet, bleiben wir zu Hause (verbe à la fin de la subordonnée en wenn).',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Weather & nature', 'Quiz final : météo & nature'),
    match(
      'sp-wn-q1',
      [
        ['der Regen', 'the rain', 'la pluie'],
        ['der Schnee', 'the snow', 'la neige'],
        ['die Wolke', 'the cloud', 'le nuage'],
        ['der Wald', 'the forest', 'la forêt'],
        ['der Berg', 'the mountain', 'la montagne'],
      ],
      ['Match the words with their translation.', 'Associe les mots à leur traduction.'],
    ),
    fb(
      'sp-wn-q2',
      ['___ schneit im Januar. (it)', '___ schneit im Januar. (il)'],
      'Es',
      ['Weather needs es.', 'La météo demande es.'],
    ),
    mc(
      'sp-wn-q3',
      ['It is 33° in July. What do you say?', 'Il fait 33° en juillet. Que dis-tu ?'],
      ['Es ist sehr heiß.', 'Es ist sehr kalt.', 'Es schneit sehr.'], ['Es ist sehr heiß.', 'Es ist sehr kalt.', 'Es schneit sehr.'], 0,
      ['33° is very hot.', '33° est très chaud.'],
    ),
    fb(
      'sp-wn-q4',
      ['___ Herbst fallen die Blätter. (in the)', '___ Herbst fallen die Blätter. (en)'],
      'Im',
      ['in + dem = im.', 'in + dem = im.'],
    ),
    mc(
      'sp-wn-q5',
      ['Which season is feminine in German?', 'Quelle saison est féminine en allemand ?'],
      ['None — all four are masculine', 'der Frühling only', 'der Winter only'], ['Aucune — les quatre sont masculines', 'Seulement der Frühling', 'Seulement der Winter'], 0,
      ['der Frühling, Sommer, Herbst, Winter.', 'der Frühling, Sommer, Herbst, Winter.'],
    ),
    fb(
      'sp-wn-q6',
      ['der Hund → die ___', 'der Hund → die ___'],
      'Hunde',
      ['Plural: add -e.', 'Pluriel : ajoute -e.'],
    ),
    wo(
      'sp-wn-q7',
      ['Katzen', 'zwei', 'habe', 'Ich'],
      ['Ich', 'habe', 'zwei', 'Katzen'],
      ['Subject, verb, number, noun.', 'Sujet, verbe, nombre, nom.'],
    ),
    mc(
      'sp-wn-q8',
      ['"We walk in the forest." Which is correct?', '« Nous nous promenons dans la forêt. » Laquelle est correcte ?'],
      ['Wir gehen im Wald spazieren.', 'Wir gehen am Wald spazieren.', 'Wir gehen auf Wald spazieren.'],
      ['Wir gehen im Wald spazieren.', 'Wir gehen am Wald spazieren.', 'Wir gehen auf Wald spazieren.'], 0,
      ['im Wald = in the forest.', 'im Wald = dans la forêt.'],
    ),
    lc(
      'sp-wn-q9',
      ['Listen. What does the speaker do when it rains?', 'Écoute. Que fait la personne quand il pleut ?'],
      'Wenn es regnet, bleibe ich zu Hause und lese ein Buch.',
      ['Stays home and reads', 'Goes to the lake', 'Plays in the garden'], ['Reste à la maison et lit', 'Va au lac', 'Joue dans le jardin'], 0,
      ['Listen for "regnet … zu Hause".', 'Écoute « regnet … zu Hause ».'],
    ),
    wo(
      'sp-wn-q10',
      ['es', 'wir', 'zu', 'Wenn', 'regnet,', 'bleiben', 'Hause.'],
      ['Wenn', 'es', 'regnet,', 'bleiben', 'wir', 'zu', 'Hause.'],
      ['Wenn-clause with the verb at the end.', 'Subordonnée en wenn avec le verbe à la fin.'],
    ),
    mc(
      'sp-wn-q11',
      ['Which gender has "Gewitter"?', 'Quel genre a « Gewitter » ?'],
      ['das', 'der', 'die'], ['das', 'der', 'die'], 0,
      ['It is das Gewitter (neuter) — learn it with its article.', 'C’est das Gewitter (neutre) — apprends-le avec son article.'],
    ),
    lc(
      'sp-wn-q12',
      ['Listen. What is the temperature?', 'Écoute. Quelle est la température ?'],
      'Heute sind es nur fünf Grad, und es schneit.',
      ['Five degrees and snow', 'Fifteen degrees and rain', 'Five degrees and sun'], ['Cinq degrés et neige', 'Quinze degrés et pluie', 'Cinq degrés et soleil'], 0,
      ['Listen for "fünf Grad" and "schneit".', 'Écoute « fünf Grad » et « schneit ».'],
    ),
    ap('sp-wn-q13', 'Vogel', 'der', ['Vogel is masculine.', 'Vogel est masculin.']),
    fb(
      'sp-wn-q14',
      ['Wir grillen ___ See. (am)', 'Wir grillen ___ See. (am)'],
      'am',
      ['Next to water: am.', 'Près de l’eau : am.'],
    ),
  ],
});

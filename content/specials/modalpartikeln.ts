import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const modalpartikeln = defineSpecial({
  slug: 'modalpartikeln',
  number: 29,
  group: 'life',
  levels: ['A2', 'B1'],
  related: ['l18', 'b1-l21'],
  title: ['Modalpartikeln', 'Modal particles', 'Particules modales'],
  theme: [
    'doch, mal, ja, denn, eigentlich, eben, halt, schon, wohl: the small words that give spoken German its tone',
    'doch, mal, ja, denn, eigentlich, eben, halt, schon, wohl : les petits mots qui donnent son ton à l’allemand parlé',
  ],
  goals: [
    'Understand what modal particles are and where they stand',
    'Soften requests and invitations with mal and doch',
    'Ask natural questions with denn and eigentlich',
    'Express “it’s just so”, reassurance and probability with eben/halt, schon and wohl',
    'Avoid the classic traps: stressed doch, denn as a conjunction, overuse',
  ],
  goalsFr: [
    'Comprendre ce que sont les particules modales et où elles se placent',
    'Adoucir demandes et invitations avec mal et doch',
    'Poser des questions naturelles avec denn et eigentlich',
    'Exprimer « c’est comme ça », la réassurance et la probabilité avec eben/halt, schon et wohl',
    'Éviter les pièges classiques : doch accentué, denn conjonction, abus',
  ],
  steps: [
    intro(
      'Komm doch mal rein!', 'Entre donc !',
      'Listen to a German conversation and you will hear tiny words that no dictionary translates cleanly: doch, mal, ja, denn. They carry no new facts. They carry feeling: friendliness, surprise, impatience, reassurance. Learn them and you stop sounding like a textbook.',
      'Écoute une conversation en allemand et tu entendras de minuscules mots qu’aucun dictionnaire ne traduit proprement : doch, mal, ja, denn. Ils n’apportent aucune information. Ils apportent du sentiment : amabilité, surprise, impatience, réassurance. Apprends-les et tu ne parleras plus comme un manuel.',
      [
        'Know what a modal particle is and where it stands',
        'Soften requests with mal and doch',
        'Make questions sound natural with denn and eigentlich',
        'Use eben/halt, schon and wohl in everyday speech',
      ],
      [
        'Savoir ce qu’est une particule modale et où elle se place',
        'Adoucir les demandes avec mal et doch',
        'Rendre les questions naturelles avec denn et eigentlich',
        'Utiliser eben/halt, schon et wohl dans la parole de tous les jours',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Small words, big tone', 'Petits mots, grand effet',
      'What a modal particle is, and why sentences feel different with one.', 'Ce qu’est une particule modale, et pourquoi une phrase change avec elle.',
    ),
    vocab('sp-modalpartikeln-partikel', 'die Partikel', 'the particle', 'la particule', 'die', 'par-TI-kel', 'dee par-TEE-kel', ['Doch ist eine Partikel.', 'Doch is a particle.', 'Doch est une particule.']),
    vocab('sp-modalpartikeln-stimmung', 'die Stimmung', 'the mood, atmosphere', 'l’ambiance, l’humeur', 'die', 'STIM-mung', 'dee SHTIM-oong', ['Die Stimmung auf der Party ist super.', 'The mood at the party is great.', 'L’ambiance à la fête est super.']),
    grammar(
      'sp-mp-what',
      ['What modal particles do', 'Ce que font les particules modales'],
      [
        'Modal particles are short words in the **middle of a sentence**. They add no new information; they add **attitude**: friendliness, surprise, impatience, shared knowledge. They have **no fixed translation**, so a sentence without them is correct but can sound cold.\n\n- They stand **after the verb** (and usually after pronouns), never in first position.\n- They are **unstressed** and never change their form.\n- The same word can also be a normal adverb or conjunction (**denn**, **doch**, **schon**), so look at the position and the melody.\n\nCompare: *Komm rein!* (an order) · *Komm **doch** rein!* (a warm invitation).',
        'Les particules modales sont de petits mots placés **au milieu de la phrase**. Elles n’apportent aucune information nouvelle ; elles apportent une **attitude** : amabilité, surprise, impatience, savoir partagé. Elles n’ont **pas de traduction fixe** : sans elles, la phrase est correcte mais peut sembler froide.\n\n- Elles se placent **après le verbe** (et souvent après les pronoms), jamais en première position.\n- Elles sont **inaccentuées** et ne changent jamais de forme.\n- Le même mot peut aussi être un adverbe ou une conjonction normale (**denn**, **doch**, **schon**) : regarde la position et la mélodie.\n\nCompare : *Komm rein !* (un ordre) · *Komm **doch** rein !* (une invitation chaleureuse).',
      ],
      [
        ['Komm rein!', 'Come in! (an order)', 'Entre ! (un ordre)'],
        ['Komm doch rein!', 'Do come in! (friendly)', 'Entre donc ! (amical)'],
        ['Wie spät ist es?', 'What time is it?', 'Quelle heure est-il ?'],
        ['Wie spät ist es denn?', 'So, what time is it, then?', 'Alors, quelle heure est-il ?'],
      ],
    ),
    mc(
      'sp-mp-e1',
      ['What do modal particles mainly add to a sentence?', 'Qu’ajoutent surtout les particules modales à une phrase ?'],
      ['Attitude and tone', 'The tense', 'A new subject'],
      ['De l’attitude et du ton', 'Le temps', 'Un nouveau sujet'], 0,
      ['They carry feeling (friendliness, surprise, impatience), not facts.', 'Elles portent du sentiment (amabilité, surprise, impatience), pas des faits.'],
    ),
    mc(
      'sp-mp-e2',
      ['Which sentence sounds like the warmest invitation?', 'Quelle phrase sonne comme l’invitation la plus chaleureuse ?'],
      ['Komm rein.', 'Komm doch mal rein.', 'Kommst du rein.'],
      ['Komm rein.', 'Komm doch mal rein.', 'Kommst du rein.'], 1,
      ['doch and mal together soften the order into an invitation.', 'doch et mal ensemble transforment l’ordre en invitation.'],
    ),
    ap('sp-mp-e3', 'Partikel', 'die', ['Partikel is feminine: die Partikel.', 'Partikel est féminin : die Partikel.']),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'mal, doch and ja', 'mal, doch et ja',
      'Soften requests, insist kindly, share what you both know.', 'Adoucir une demande, insister gentiment, partager ce que l’on sait tous les deux.',
    ),
    vocab('sp-modalpartikeln-doch', 'doch', 'do, after all (particle)', 'donc, pourtant (particule)', null, 'DOCH', 'DOKH', ['Setz dich doch!', 'Do sit down!', 'Assieds-toi donc !']),
    vocab('sp-modalpartikeln-mal', 'mal', 'just, for a moment', 'un peu, un instant', null, 'MAL', 'MAHL', ['Schau mal, wer da ist!', 'Look who’s there!', 'Regarde qui est là !']),
    vocab('sp-modalpartikeln-ja', 'ja', 'as you know, how nice (particle)', 'comme tu sais, tiens (particule)', null, 'JA', 'YAH', ['Das ist ja schön!', 'Well, that’s nice!', 'Eh bien, c’est beau !']),
    grammar(
      'sp-mp-mal-doch-ja',
      ['mal, doch and ja in practice', 'mal, doch et ja en pratique'],
      [
        '**mal** (from *einmal*) makes a request lighter and shorter: *Kannst du mir **mal** helfen?* means “could you give me a hand?”, not “once”.\n\n**doch** has two jobs. In an imperative it turns the order into **friendly encouragement**: *Nimm **doch** noch ein Stück!* In a statement it says “but you know this / surely”: *Du hast **doch** ein Auto, oder?*\n\n**ja** marks **shared knowledge** (“as you know”) or **pleasant surprise**: *Du weißt **ja**, dass ich morgen arbeite.* · *Das ist **ja** nett von dir!*\n\nWhen both appear in a request, the order is **doch mal**: *Komm **doch mal** her.*',
        '**mal** (de *einmal*) rend une demande plus légère et plus courte : *Kannst du mir **mal** helfen ?* signifie « peux-tu me donner un coup de main ? », pas « une fois ».\n\n**doch** a deux emplois. À l’impératif, il transforme l’ordre en **encouragement amical** : *Nimm **doch** noch ein Stück !* Dans une affirmation, il dit « mais tu le sais / bien sûr » : *Du hast **doch** ein Auto, oder ?*\n\n**ja** marque un **savoir partagé** (« comme tu sais ») ou une **agréable surprise** : *Du weißt **ja**, dass ich morgen arbeite.* · *Das ist **ja** nett von dir !*\n\nQuand les deux apparaissent dans une demande, l’ordre est **doch mal** : *Komm **doch mal** her.*',
      ],
      [
        ['Kannst du mir mal helfen?', 'Could you give me a hand?', 'Peux-tu me donner un coup de main ?'],
        ['Nimm doch noch ein Stück Kuchen!', 'Do have another piece of cake!', 'Prends donc encore un morceau de gâteau !'],
        ['Du hast doch ein Auto, oder?', 'You do have a car, don’t you?', 'Tu as bien une voiture, non ?'],
        ['Das ist ja nett von dir!', 'Well, that’s nice of you!', 'Eh bien, c’est gentil de ta part !'],
        ['Komm doch mal her.', 'Come over here for a moment.', 'Viens donc un instant.'],
      ],
    ),
    fb(
      'sp-mp-e4',
      ['Kannst du mir ___ helfen? (a light, friendly request)', 'Kannst du mir ___ helfen ? (une demande légère et amicale)'],
      'mal',
      ['The little word that softens a request.', 'Le petit mot qui adoucit une demande.'],
    ),
    mc(
      'sp-mp-e5',
      ['You are pleasantly surprised: "Das ist ___ nett von dir!"', 'Tu es agréablement surpris : « Das ist ___ nett von dir ! »'],
      ['ja', 'halt', 'wohl'], ['ja', 'halt', 'wohl'], 0,
      ['ja expresses pleasant surprise or shared knowledge.', 'ja exprime une agréable surprise ou un savoir partagé.'],
    ),
    wo(
      'sp-mp-e6',
      ['mal', 'Komm', 'her', 'doch'],
      ['Komm', 'doch', 'mal', 'her'],
      ['When both appear, doch comes before mal.', 'Quand les deux apparaissent, doch vient avant mal.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'denn and eigentlich in questions', 'denn et eigentlich dans les questions',
      'Two words that make a question sound curious instead of cold.', 'Deux mots qui rendent une question curieuse plutôt que froide.',
    ),
    vocab('sp-modalpartikeln-denn', 'denn', 'then, so (in questions)', 'alors (dans les questions)', null, 'DENN', 'DEN', ['Was machst du denn da?', 'What are you doing there, then?', 'Qu’est-ce que tu fabriques là, alors ?']),
    vocab('sp-modalpartikeln-eigentlich', 'eigentlich', 'actually, by the way', 'au fait, en réalité', null, 'EI-gent-lich', 'EYE-gent-likh', ['Wie alt bist du eigentlich?', 'How old are you, by the way?', 'Au fait, quel âge as-tu ?']),
    grammar(
      'sp-mp-denn-eigentlich',
      ['denn and eigentlich', 'denn et eigentlich'],
      [
        'In a **question**, **denn** shows interest, surprise or a little impatience: *Wo bist du **denn**?* (“where are you, then?”) · *Was ist **denn** los?* (“what’s going on?”). It stands in the middle field, right after the verb and pronoun.\n\n**Attention:** **denn** is also a **conjunction** (“because”) in first position of a clause, and it then does not affect the verb order: *Ich bleibe zu Hause, **denn** ich bin krank.*\n\n**eigentlich** in a question means “by the way / actually” and opens a side topic: *Hast du **eigentlich** Geschwister?* In a statement it means “really / in fact” or “originally planned”: *Eigentlich wollte ich zu Hause bleiben.*',
        'Dans une **question**, **denn** montre l’intérêt, la surprise ou un peu d’impatience : *Wo bist du **denn** ?* (« mais où es-tu ? ») · *Was ist **denn** los ?* (« que se passe-t-il ? »). Il se place dans le champ du milieu, juste après le verbe et le pronom.\n\n**Attention :** **denn** est aussi une **conjonction** (« car ») en première position d’une proposition ; elle ne change alors pas l’ordre des mots : *Ich bleibe zu Hause, **denn** ich bin krank.*\n\n**eigentlich** dans une question signifie « au fait » et ouvre un sujet annexe : *Hast du **eigentlich** Geschwister ?* Dans une affirmation, il signifie « en réalité » ou « à l’origine » : *Eigentlich wollte ich zu Hause bleiben.*',
      ],
      [
        ['Was ist denn los?', 'What’s going on, then?', 'Qu’est-ce qui se passe, alors ?'],
        ['Warum kommst du denn nicht mit?', 'Why aren’t you coming along, then?', 'Pourquoi ne viens-tu donc pas ?'],
        ['Ich bleibe zu Hause, denn ich bin krank.', 'I’m staying at home because I’m ill.', 'Je reste à la maison car je suis malade.'],
        ['Hast du eigentlich Geschwister?', 'Do you have any siblings, by the way?', 'Au fait, as-tu des frères et sœurs ?'],
        ['Eigentlich wollte ich zu Hause bleiben.', 'Actually, I wanted to stay at home.', 'À l’origine, je voulais rester à la maison.'],
      ],
    ),
    mc(
      'sp-mp-e7',
      ['In which sentence is "denn" a modal particle?', 'Dans quelle phrase « denn » est-il une particule modale ?'],
      ['Wo bist du denn?', 'Ich bleibe hier, denn es regnet.', 'Er schläft, denn er ist müde.'],
      ['Wo bist du denn?', 'Ich bleibe hier, denn es regnet.', 'Er schläft, denn er ist müde.'], 0,
      ['In a question, in the middle field, denn is a particle. In the other two it means "because".', 'Dans une question, au milieu, denn est une particule. Dans les deux autres, il signifie « car ».'],
    ),
    fb(
      'sp-mp-e8',
      ['Hast du ___ Geschwister? (a side question, "by the way")', 'Hast du ___ Geschwister ? (question annexe, « au fait »)'],
      'eigentlich',
      ['It opens a side topic: "by the way".', 'Il ouvre un sujet annexe : « au fait ».'],
    ),
    wo(
      'sp-mp-e9',
      ['denn', 'du', 'Was', 'da', 'machst'],
      ['Was', 'machst', 'du', 'denn', 'da'],
      ['Verb second, then the pronoun, then denn.', 'Verbe en deuxième position, puis le pronom, puis denn.'],
    ),
    lc(
      'sp-mp-e10',
      ['Listen. What does the speaker want to know?', 'Écoute. Que veut savoir la personne ?'],
      'Was ist denn los?',
      ['What is going on', 'What time it is', 'Where the station is'],
      ['Ce qui se passe', 'Quelle heure il est', 'Où est la gare'], 0,
      ['"los" + "denn": a curious "what\'s going on?".', '« los » + « denn » : un « que se passe-t-il ? » curieux.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'eben, halt, schon and wohl', 'eben, halt, schon et wohl',
      'Accepting facts, reassuring someone, guessing.', 'Accepter les faits, rassurer quelqu’un, supposer.',
    ),
    vocab('sp-modalpartikeln-eben', 'eben', 'simply, just (it can’t be changed)', 'justement, tout simplement', null, 'E-ben', 'AY-ben', ['Dann musst du eben warten.', 'Then you simply have to wait.', 'Alors tu dois simplement attendre.']),
    vocab('sp-modalpartikeln-halt', 'halt', 'just, that’s the way it is (spoken)', 'c’est comme ça (oral)', null, 'HALT', 'HALT', ['Das ist halt so.', 'That’s just the way it is.', 'C’est comme ça.']),
    vocab('sp-modalpartikeln-schon', 'schon', 'surely, don’t worry (reassurance)', 'ne t’inquiète pas, ça va aller', null, 'SCHON', 'SHOHN', ['Das wird schon klappen.', 'It will work out, don’t worry.', 'Ça va marcher, ne t’inquiète pas.']),
    vocab('sp-modalpartikeln-wohl', 'wohl', 'probably', 'sans doute, probablement', null, 'WOHL', 'VOHL', ['Er ist wohl krank.', 'He’s probably ill.', 'Il est sans doute malade.']),
    grammar(
      'sp-mp-eben-schon-wohl',
      ['eben/halt, schon, wohl', 'eben/halt, schon, wohl'],
      [
        '**eben** and **halt** both mean “that’s simply how it is, nothing to be done”. **halt** is very common in everyday speech (especially in the south); **eben** sounds a little more neutral.\n\n**schon** can **reassure**: *Das wird **schon** klappen.* (“it’ll work out, don’t worry”). With a concession it says “yes, but…”: *Das ist **schon** schön, aber zu teuer.*\n\n**wohl** marks a **probable guess**: *Er ist **wohl** krank.* (“he’s probably ill”). It is weaker than *sicher* and stronger than *vielleicht*.',
        '**eben** et **halt** signifient tous deux « c’est comme ça, on n’y peut rien ». **halt** est très courant à l’oral (surtout dans le sud) ; **eben** sonne un peu plus neutre.\n\n**schon** peut **rassurer** : *Das wird **schon** klappen.* (« ça va marcher, ne t’inquiète pas »). Avec une concession, il dit « oui, mais… » : *Das ist **schon** schön, aber zu teuer.*\n\n**wohl** marque une **supposition probable** : *Er ist **wohl** krank.* (« il est sans doute malade »). C’est plus faible que *sicher* et plus fort que *vielleicht*.',
      ],
      [
        ['Der Bus ist weg. Dann müssen wir eben warten.', 'The bus has gone. Then we simply have to wait.', 'Le bus est parti. Alors nous devons simplement attendre.'],
        ['Das ist halt so.', 'That’s just the way it is.', 'C’est comme ça.'],
        ['Mach dir keine Sorgen, das wird schon klappen.', 'Don’t worry, it’ll work out.', 'Ne t’inquiète pas, ça va marcher.'],
        ['Sie kommt wohl später.', 'She’s probably coming later.', 'Elle viendra sans doute plus tard.'],
      ],
    ),
    mc(
      'sp-mp-e11',
      ['The bus has gone. "Dann müssen wir ___ warten." (nothing can be done about it)', 'Le bus est parti. « Dann müssen wir ___ warten. » (on n’y peut rien)'],
      ['eben', 'denn', 'ja'], ['eben', 'denn', 'ja'], 0,
      ['eben = "that\'s just how it is".', 'eben = « c’est comme ça ».'],
    ),
    fb(
      'sp-mp-e12',
      ['Mach dir keine Sorgen, das wird ___ klappen. (reassurance)', 'Ne t’inquiète pas, das wird ___ klappen. (réassurance)'],
      'schon',
      ['The particle that calms the listener.', 'La particule qui rassure l’interlocuteur.'],
    ),
    mc(
      'sp-mp-e13',
      ['Sie ist nicht da. "Sie ist ___ noch beim Arzt." (a probable guess)', 'Elle n’est pas là. « Sie ist ___ noch beim Arzt. » (une supposition probable)'],
      ['wohl', 'mal', 'eben'], ['wohl', 'mal', 'eben'], 0,
      ['wohl = probably.', 'wohl = probablement.'],
    ),
    match(
      'sp-mp-e14',
      [
        ['mal', 'softens a request', 'adoucit une demande'],
        ['denn', 'curiosity in a question', 'curiosité dans une question'],
        ['schon', 'reassurance', 'réassurance'],
        ['wohl', 'probability', 'probabilité'],
        ['eben', 'nothing can be done', 'on n’y peut rien'],
      ],
      ['Match each particle with its main job.', 'Associe chaque particule à son rôle principal.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Position, tone and traps', 'Position, ton et pièges',
      'Where they go, when doch is not a particle, and how not to overdo it.', 'Où les placer, quand doch n’est pas une particule, et comment ne pas en abuser.',
    ),
    vocab('sp-modalpartikeln-ton', 'der Ton', 'the tone', 'le ton', 'der', 'TON', 'dair TOHN', ['Der Ton macht die Musik.', 'It’s the tone that makes the music.', 'C’est le ton qui fait la musique.']),
    grammar(
      'sp-mp-traps',
      ['Traps and combinations', 'Pièges et combinaisons'],
      [
        '**1. Stressed doch is not a particle.** As an answer to a **negative question** it means “yes, I do”: *Hast du keinen Hunger? — **Doch!** Ich habe Hunger.* Say it with stress; the particle doch is quiet.\n\n**2. Reproach.** With a stressed tone **doch** can express impatience: *Das habe ich dir **doch** gesagt!* (“I told you that!”).\n\n**3. mal eben** means “quickly, just for a second”: *Kannst du **mal eben** kommen?*\n\n**4. Don’t overuse.** One particle per sentence is usually enough. In formal writing (letters, reports) they are rare; they belong to **speech and informal messages**.',
        '**1. Un doch accentué n’est pas une particule.** En réponse à une **question négative**, il signifie « si, j’en ai » : *Hast du keinen Hunger ? — **Doch !** Ich habe Hunger.* On l’accentue ; la particule doch est discrète.\n\n**2. Reproche.** Avec un ton appuyé, **doch** peut exprimer l’impatience : *Das habe ich dir **doch** gesagt !* (« je te l’avais dit ! »).\n\n**3. mal eben** signifie « rapidement, juste une seconde » : *Kannst du **mal eben** kommen ?*\n\n**4. N’en abuse pas.** Une particule par phrase suffit en général. À l’écrit formel (lettres, rapports) elles sont rares ; elles appartiennent à **l’oral et aux messages informels**.',
      ],
      [
        ['Hast du keinen Hunger? — Doch, ich habe Hunger!', 'Aren’t you hungry? — Yes, I am!', 'Tu n’as pas faim ? — Si, j’ai faim !'],
        ['Das habe ich dir doch gesagt!', 'I did tell you that!', 'Mais je te l’avais dit !'],
        ['Kannst du mal eben kommen?', 'Can you come over for a second?', 'Peux-tu venir une seconde ?'],
      ],
    ),
    mc(
      'sp-mp-e15',
      ['"Hast du keine Lust? — ___, ich komme gern mit!" Which word correctly contradicts a negative question (like French "si")?', '« Hast du keine Lust ? — ___, ich komme gern mit ! » Quel mot contredit correctement une question négative (comme « si ») ?'],
      ['Doch', 'Ja', 'Nein'], ['Doch', 'Ja', 'Nein'], 0,
      ['A stressed doch contradicts a negative question.', 'Un doch accentué contredit une question négative.'],
    ),
    wo(
      'sp-mp-e16',
      ['eigentlich', 'du', 'Wie', 'bist', 'alt'],
      ['Wie', 'alt', 'bist', 'du', 'eigentlich'],
      ['The particle comes after the verb and the pronoun.', 'La particule vient après le verbe et le pronom.'],
    ),
    ap('sp-mp-e17', 'Stimmung', 'die', ['Words ending in -ung are feminine.', 'Les mots en -ung sont féminins.']),

    wrapup(
      '**What they are** — short, unstressed words in the middle of the sentence, after the verb. They add attitude, not information.\n\n**mal / doch / ja** — *mal* softens (*Kannst du mir mal helfen?*), *doch* invites or reminds (*Komm doch rein*), *ja* = shared knowledge or surprise. Together: **doch mal**.\n\n**denn / eigentlich** — curious questions (*Was ist denn los? Hast du eigentlich Geschwister?*). *denn* as a conjunction means “because”.\n\n**eben / halt / schon / wohl** — “just so”, reassurance, probable guess.\n\n**Traps** — stressed **Doch!** answers a negative question; **mal eben** = quickly; don’t overuse; rare in formal writing.',
      '**Ce qu’elles sont** — de petits mots inaccentués au milieu de la phrase, après le verbe. Elles ajoutent de l’attitude, pas de l’information.\n\n**mal / doch / ja** — *mal* adoucit (*Kannst du mir mal helfen ?*), *doch* invite ou rappelle (*Komm doch rein*), *ja* = savoir partagé ou surprise. Ensemble : **doch mal**.\n\n**denn / eigentlich** — questions curieuses (*Was ist denn los ? Hast du eigentlich Geschwister ?*). *denn* conjonction signifie « car ».\n\n**eben / halt / schon / wohl** — « c’est comme ça », réassurance, supposition probable.\n\n**Pièges** — **Doch !** accentué répond à une question négative ; **mal eben** = rapidement ; n’en abuse pas ; rares à l’écrit formel.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Modal particles', 'Quiz final : particules modales'),
    match(
      'sp-mp-q1',
      [
        ['mal', 'softens a request', 'adoucit une demande'],
        ['denn', 'curiosity in a question', 'curiosité dans une question'],
        ['schon', 'reassurance', 'réassurance'],
        ['wohl', 'probability', 'probabilité'],
        ['eben', 'nothing can be done', 'on n’y peut rien'],
      ],
      ['Match each particle with its main job.', 'Associe chaque particule à son rôle principal.'],
    ),
    mc(
      'sp-mp-q2',
      ['Where does a modal particle usually stand?', 'Où se place d’ordinaire une particule modale ?'],
      ['In the middle of the sentence, after the verb', 'At the very start of the sentence', 'Always at the end'],
      ['Au milieu de la phrase, après le verbe', 'Tout au début de la phrase', 'Toujours à la fin'], 0,
      ['They live in the middle field.', 'Elles vivent dans le champ du milieu.'],
    ),
    fb(
      'sp-mp-q3',
      ['Kannst du mir ___ helfen? (a light request)', 'Kannst du mir ___ helfen ? (une demande légère)'],
      'mal',
      ['It softens requests.', 'Il adoucit les demandes.'],
    ),
    fb(
      'sp-mp-q4',
      ['Wie alt bist du ___? (by the way)', 'Wie alt bist du ___ ? (au fait)'],
      'eigentlich',
      ['It introduces a side question.', 'Il introduit une question annexe.'],
    ),
    fb(
      'sp-mp-q5',
      ['Das wird ___ gut gehen. (don’t worry)', 'Das wird ___ gut gehen. (ne t’inquiète pas)'],
      'schon',
      ['Reassurance.', 'Réassurance.'],
    ),
    mc(
      'sp-mp-q6',
      ['"Hast du keine Zeit? — ___, ich habe Zeit!" (contradict the negative question)', '« Hast du keine Zeit ? — ___, ich habe Zeit ! » (contredis la question négative)'],
      ['Doch', 'Ja', 'Eben'], ['Doch', 'Ja', 'Eben'], 0,
      ['A stressed doch answers a negative question affirmatively.', 'Un doch accentué répond affirmativement à une question négative.'],
    ),
    wo(
      'sp-mp-q7',
      ['ist', 'Das', 'nicht', 'doch', 'Ernst', 'dein'],
      ['Das', 'ist', 'doch', 'nicht', 'dein', 'Ernst'],
      ['doch comes right after the verb.', 'doch vient juste après le verbe.'],
    ),
    wo(
      'sp-mp-q8',
      ['wohl', 'Er', 'im', 'noch', 'ist', 'Büro'],
      ['Er', 'ist', 'wohl', 'noch', 'im', 'Büro'],
      ['The particle follows verb and pronoun.', 'La particule suit le verbe et le pronom.'],
    ),
    lc(
      'sp-mp-q9',
      ['Listen. What is the speaker saying?', 'Écoute. Que dit la personne ?'],
      'Das wird schon klappen.',
      ['Don’t worry, it will work out', 'It will definitely fail', 'It worked yesterday'],
      ['Ne t’inquiète pas, ça va marcher', 'Ça va sûrement échouer', 'Ça a marché hier'], 0,
      ['Listen for "schon klappen".', 'Écoute « schon klappen ».'],
    ),
    lc(
      'sp-mp-q10',
      ['Listen. What kind of question is this?', 'Écoute. Quel genre de question est-ce ?'],
      'Wie heißt du eigentlich?',
      ['A side question about your name', 'An angry complaint', 'A request for directions'],
      ['Une question annexe sur ton prénom', 'Une plainte fâchée', 'Une demande d’itinéraire'], 0,
      ['"eigentlich" means "by the way".', '« eigentlich » signifie « au fait ».'],
    ),
    mc(
      'sp-mp-q11',
      ['Which "denn" is a modal particle?', 'Quel « denn » est une particule modale ?'],
      ['Wo bist du denn?', 'Ich bleibe hier, denn es regnet.', 'Er schläft, denn er ist müde.'],
      ['Wo bist du denn?', 'Ich bleibe hier, denn es regnet.', 'Er schläft, denn er ist müde.'], 0,
      ['Only in the question is it a particle.', 'Seulement dans la question c’est une particule.'],
    ),
    mc(
      'sp-mp-q12',
      ['"Der Zug ist weg. Dann müssen wir ___ warten." (nothing to be done)', '« Der Zug ist weg. Dann müssen wir ___ warten. » (on n’y peut rien)'],
      ['eben', 'denn', 'mal'], ['eben', 'denn', 'mal'], 0,
      ['eben = "that\'s just how it is".', 'eben = « c’est comme ça ».'],
    ),
    ap('sp-mp-q13', 'Stimmung', 'die', ['-ung nouns are feminine.', 'Les noms en -ung sont féminins.']),
    mc(
      'sp-mp-q14',
      ['"Das ist ja schön!" mostly expresses…', '« Das ist ja schön ! » exprime surtout…'],
      ['Pleasant surprise', 'A command', 'A complaint about the price'],
      ['Une agréable surprise', 'Un ordre', 'Une plainte sur le prix'], 0,
      ['ja often signals pleasant surprise.', 'ja signale souvent une agréable surprise.'],
    ),
  ],
});

import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const redewendungen = defineSpecial({
  slug: 'redewendungen',
  number: 32,
  group: 'life',
  levels: ['A2', 'B1'],
  related: ['b1-l21', 'l19'],
  title: ['Redewendungen', 'Idioms and fixed phrases', 'Expressions idiomatiques'],
  theme: [
    'Common German idioms with their literal and real meaning, plus the fixed phrases for toasts, wishes and thanks',
    'Des expressions allemandes courantes avec leur sens littéral et réel, plus les formules toutes faites pour trinquer, souhaiter et remercier',
  ],
  goals: [
    'Understand why idioms cannot be translated word for word',
    'Recognise and use about fifteen very common German idioms',
    'Use the fixed phrases for meals, illness, birthdays and thanks',
    'Choose idioms that fit the situation and the register',
  ],
  goalsFr: [
    'Comprendre pourquoi les expressions idiomatiques ne se traduisent pas mot à mot',
    'Reconnaître et utiliser une quinzaine d’expressions allemandes très courantes',
    'Utiliser les formules toutes faites pour les repas, la maladie, les anniversaires et les remerciements',
    'Choisir des expressions adaptées à la situation et au registre',
  ],
  steps: [
    intro(
      'Ich verstehe nur Bahnhof', 'Je n’y comprends rien',
      'A colleague says “Ich verstehe nur Bahnhof” and you look around for a train station. Idioms are phrases whose meaning is not the sum of their words. Germans use them every day, so learning the most common ones is the fastest way to understand real conversations.',
      'Un collègue dit « Ich verstehe nur Bahnhof » et tu cherches une gare des yeux. Les expressions idiomatiques sont des phrases dont le sens n’est pas la somme des mots. Les Allemands les utilisent tous les jours : apprendre les plus courantes est le moyen le plus rapide de comprendre les vraies conversations.',
      [
        'Understand literal versus real meaning',
        'Use common idioms for luck, confusion and opinions',
        'Use the fixed phrases for meals, health and celebrations',
        'Know when an idiom is too informal',
      ],
      [
        'Comprendre le sens littéral et le sens réel',
        'Utiliser des expressions courantes pour la chance, la confusion et les opinions',
        'Utiliser les formules toutes faites pour les repas, la santé et les fêtes',
        'Savoir quand une expression est trop familière',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'What is an idiom?', 'Qu’est-ce qu’une expression idiomatique ?',
      'Literal meaning versus real meaning, and why you must learn them whole.', 'Sens littéral et sens réel, et pourquoi il faut les apprendre en entier.',
    ),
    vocab('sp-redewendungen-redewendung', 'die Redewendung', 'the idiom, the set expression', 'l’expression idiomatique', 'die', 'RAY-de-ven-dung', 'dee RAY-duh-ven-doong', ['Diese Redewendung kenne ich noch nicht.', 'I do not know this idiom yet.', 'Je ne connais pas encore cette expression.']),
    vocab('sp-redewendungen-bahnhof', 'der Bahnhof', 'the railway station', 'la gare', 'der', 'BAHN-hof', 'dair BAHN-hohf', ['Der Bahnhof ist nicht weit.', 'The station is not far.', 'La gare n’est pas loin.']),
    grammar(
      'sp-rw-what',
      ['Literal and real meaning', 'Sens littéral et sens réel'],
      [
        'An **idiom** (*Redewendung*) is a fixed group of words with a meaning that you cannot work out from the individual words. You must learn it **as a whole**.\n\n- *Ich verstehe nur Bahnhof.*  literally “I only understand station”, really **“I do not understand a thing”**.\n- You cannot change the words: *Ich verstehe nur Zug* is not an idiom.\n- Many have an English or French cousin, but the image is usually different. The meaning is what counts.\n\n**Register:** many idioms are informal or spoken. They are great with friends and colleagues, risky in a formal letter.\n\n**Caution:** use only idioms you have seen in context. A wrong idiom sounds funnier than a missing one.',
        'Une **expression idiomatique** (*Redewendung*) est un groupe de mots figé dont le sens ne se déduit pas des mots pris séparément. Il faut l’apprendre **en bloc**.\n\n- *Ich verstehe nur Bahnhof.* littéralement « je ne comprends que gare », en réalité **« je n’y comprends rien »**.\n- On ne peut pas changer les mots : *Ich verstehe nur Zug* n’est pas une expression.\n- Beaucoup ont un cousin en anglais ou en français, mais l’image est souvent différente. Seul le sens compte.\n\n**Registre :** beaucoup d’expressions sont familières ou orales. Elles sont idéales entre amis et collègues, risquées dans une lettre formelle.\n\n**Prudence :** n’emploie que des expressions vues en contexte. Une mauvaise expression fait plus rire qu’une expression absente.',
      ],
      [
        ['Ich verstehe nur Bahnhof.', 'I do not understand a thing.', 'Je n’y comprends rien.'],
        ['Das ist nicht mein Bier.', 'That is not my business.', 'Ce n’est pas mon affaire.'],
      ],
    ),
    mc(
      'sp-rw-e1',
      ['"Ich verstehe nur Bahnhof" really means…', '« Ich verstehe nur Bahnhof » signifie en réalité…'],
      ['I do not understand anything', 'I am at the station', 'I love trains'],
      ['Je n’y comprends rien', 'Je suis à la gare', 'J’adore les trains'], 0,
      ['Idiom: literal meaning is not the real one.', 'Expression : le sens littéral n’est pas le sens réel.'],
    ),
    mc(
      'sp-rw-e2',
      ['Why can you not translate idioms word for word?', 'Pourquoi ne peut-on pas traduire les expressions mot à mot ?'],
      ['Their meaning is not the sum of the words', 'They are always rude', 'They have no verbs'],
      ['Leur sens n’est pas la somme des mots', 'Elles sont toujours grossières', 'Elles n’ont pas de verbes'], 0,
      ['Learn idioms as a whole.', 'Apprends les expressions en bloc.'],
    ),
    ap('sp-rw-e3', 'Redewendung', 'die', ['-ung nouns are feminine.', 'Les noms en -ung sont féminins.']),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Luck and understanding', 'Chance et compréhension',
      'Five idioms you will hear constantly.', 'Cinq expressions que tu entendras constamment.',
    ),
    vocab('sp-redewendungen-bahnhof-idiom', 'Ich verstehe nur Bahnhof.', 'I do not understand a thing.', 'Je n’y comprends rien.', null, 'ikh fer-SHTAY-e noor BAHN-hof', 'ikh fair-SHTAY-uh noor BAHN-hohf', ['Bei dem Text verstehe ich nur Bahnhof.', 'I do not understand a thing of this text.', 'Je ne comprends rien à ce texte.']),
    vocab('sp-redewendungen-daumen', 'Ich drücke dir die Daumen.', 'I keep my fingers crossed for you.', 'Je croise les doigts pour toi.', null, 'ikh DRUE-ke deer dee DOW-men', 'ikh DRUEK-uh deer dee DOW-men', ['Morgen ist deine Prüfung. Ich drücke dir die Daumen!', 'Your exam is tomorrow. Fingers crossed for you!', 'Ton examen est demain. Je croise les doigts pour toi !']),
    vocab('sp-redewendungen-schwein', 'Schwein haben', 'to be lucky (informal)', 'avoir de la chance (familier)', null, 'SHVINE HAH-ben', 'SHVINE HAH-ben', ['Ich habe Schwein gehabt: Der Bus kam sofort.', 'I was lucky: the bus came straight away.', 'J’ai eu de la chance : le bus est venu tout de suite.']),
    vocab('sp-redewendungen-hals-beinbruch', 'Hals- und Beinbruch!', 'Break a leg! (good luck)', 'Bonne chance ! (avant une épreuve)', null, 'HALS unt BINE-brukh', 'HAHLS oont BINE-brookh', ['Viel Spaß beim Auftritt. Hals- und Beinbruch!', 'Have fun at the performance. Break a leg!', 'Amuse-toi bien à ton spectacle. Bonne chance !']),
    vocab('sp-redewendungen-schlauch', 'auf dem Schlauch stehen', 'to be slow on the uptake', 'ne pas comprendre sur le moment', null, 'owf dem SHLOWKH SHTAY-en', 'owf dem SHLOWKH SHTAY-en', ['Entschuldigung, ich stehe gerade auf dem Schlauch.', 'Sorry, I am being slow right now.', 'Désolé, je ne percute pas là.']),
    grammar(
      'sp-rw-luck',
      ['Five idioms for luck and understanding', 'Cinq expressions pour la chance et la compréhension'],
      [
        '| Idiom | Literal | Real meaning |\n|---|---|---|\n| **Ich verstehe nur Bahnhof.** | I only understand station | I understand nothing |\n| **Ich drücke dir die Daumen.** | I press the thumbs for you | I keep my fingers crossed |\n| **Schwein haben** | to have pig | to be lucky (informal) |\n| **Hals- und Beinbruch!** | neck and leg break | good luck (before a performance or exam) |\n| **auf dem Schlauch stehen** | to stand on the hose | to not get it for a moment |\n\n**Tip:** *Daumen drücken* uses the **thumbs**, not the fingers. Fingers crossed is a different gesture in Germany. Use *drücken* with **dir/Ihnen**: *Ich drücke Ihnen die Daumen.*',
        '| Expression | Littéral | Sens réel |\n|---|---|---|\n| **Ich verstehe nur Bahnhof.** | je ne comprends que gare | je n’y comprends rien |\n| **Ich drücke dir die Daumen.** | je presse les pouces pour toi | je croise les doigts |\n| **Schwein haben** | avoir cochon | avoir de la chance (familier) |\n| **Hals- und Beinbruch !** | cou et jambe cassés | bonne chance (avant une épreuve) |\n| **auf dem Schlauch stehen** | être debout sur le tuyau | ne pas comprendre sur le moment |\n\n**Astuce :** *Daumen drücken* utilise les **pouces**, pas les doigts. Utilise *drücken* avec **dir/Ihnen** : *Ich drücke Ihnen die Daumen.*',
      ],
      [
        ['Ich drücke dir die Daumen!', 'Fingers crossed for you!', 'Je croise les doigts pour toi !'],
        ['Heute habe ich echt Schwein gehabt.', 'I was really lucky today.', 'Aujourd’hui j’ai vraiment eu de la chance.'],
      ],
    ),
    mc(
      'sp-rw-e4',
      ['Your friend has an exam tomorrow. What do you say?', 'Ton ami a un examen demain. Que dis-tu ?'],
      ['Ich drücke dir die Daumen!', 'Ich verstehe nur Bahnhof.', 'Das ist mir Wurst.'],
      ['Ich drücke dir die Daumen !', 'Ich verstehe nur Bahnhof.', 'Das ist mir Wurst.'], 0,
      ['Daumen drücken = fingers crossed.', 'Daumen drücken = croiser les doigts.'],
    ),
    fb(
      'sp-rw-e5',
      ['Ich habe ___ gehabt: Der Bus kam sofort. (I was lucky)', 'Ich habe ___ gehabt : Der Bus kam sofort. (j’ai eu de la chance)'],
      'Schwein',
      ['The animal in the idiom.', 'L’animal de l’expression.'],
    ),
    wo(
      'sp-rw-e6',
      ['Daumen', 'drücke', 'Ich', 'dir', 'die'],
      ['Ich', 'drücke', 'dir', 'die', 'Daumen'],
      ['Subject, verb, dative, accusative object.', 'Sujet, verbe, datif, objet accusatif.'],
    ),
    lc(
      'sp-rw-e7',
      ['Listen. What does the speaker want?', 'Écoute. Que veut la personne ?'],
      'Ich drücke dir die Daumen!',
      ['Wish good luck', 'Say goodbye', 'Ask the way'],
      ['Souhaiter bonne chance', 'Dire au revoir', 'Demander son chemin'], 0,
      ['Daumen drücken = good luck.', 'Daumen drücken = bonne chance.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Opinions and feelings', 'Opinions et sentiments',
      'Not caring, being fed up, and things that are easy.', 'S’en moquer, en avoir assez, et les choses faciles.',
    ),
    vocab('sp-redewendungen-wurst', 'Das ist mir Wurst.', 'I do not care. (informal)', 'Ça m’est égal. (familier)', null, 'das ist meer VURST', 'dahs ist meer VOORST', ['Welches Restaurant? Das ist mir Wurst.', 'Which restaurant? I do not care.', 'Quel restaurant ? Ça m’est égal.']),
    vocab('sp-redewendungen-nase', 'die Nase voll haben', 'to be fed up', 'en avoir assez', null, 'dee NAH-ze fol HAH-ben', 'dee NAH-zuh fol HAH-ben', ['Ich habe die Nase voll von diesem Lärm.', 'I am fed up with this noise.', 'J’en ai assez de ce bruit.']),
    vocab('sp-redewendungen-bier', 'Das ist nicht mein Bier.', 'That is not my business.', 'Ce n’est pas mon problème.', null, 'das ist nikht mine BEER', 'dahs ist nikht mine BEER', ['Der Streit ist nicht mein Bier.', 'The quarrel is not my business.', 'Cette dispute n’est pas mon problème.']),
    vocab('sp-redewendungen-kinderspiel', 'ein Kinderspiel', 'child’s play, very easy', 'un jeu d’enfant', null, 'ine KIN-der-shpeel', 'ine KIN-der-shpeel', ['Die Aufgabe war ein Kinderspiel.', 'The task was child’s play.', 'La tâche était un jeu d’enfant.']),
    grammar(
      'sp-rw-feelings',
      ['Idioms for opinions', 'Expressions pour les opinions'],
      [
        '| Idiom | Meaning | Register |\n|---|---|---|\n| **Das ist mir Wurst.** | I do not care. | informal, may sound rude |\n| **die Nase voll haben** (von) | to be fed up (with) | informal |\n| **Das ist nicht mein Bier.** | That is not my concern. | informal |\n| **ein Kinderspiel** | very easy | neutral |\n\n**Politer alternatives:** *Das ist mir egal.* · *Ich habe genug von …* · *Das geht mich nichts an.* · *Das ist ganz einfach.*\n\n**Tip:** with your boss or a customer, avoid *Das ist mir Wurst*. It is playful among friends but dismissive in formal situations.',
        '| Expression | Sens | Registre |\n|---|---|---|\n| **Das ist mir Wurst.** | Ça m’est égal. | familier, peut paraître grossier |\n| **die Nase voll haben** (von) | en avoir assez (de) | familier |\n| **Das ist nicht mein Bier.** | Ce n’est pas mon affaire. | familier |\n| **ein Kinderspiel** | très facile | neutre |\n\n**Alternatives plus polies :** *Das ist mir egal.* · *Ich habe genug von …* · *Das geht mich nichts an.* · *Das ist ganz einfach.*\n\n**Astuce :** avec ton chef ou un client, évite *Das ist mir Wurst*. C’est amical entre amis mais dédaigneux dans une situation formelle.',
      ],
      [
        ['Ich habe die Nase voll von dem Wetter.', 'I am fed up with the weather.', 'J’en ai assez de ce temps.'],
        ['Die Prüfung war ein Kinderspiel.', 'The exam was child’s play.', 'L’examen était un jeu d’enfant.'],
      ],
    ),
    mc(
      'sp-rw-e8',
      ['Which idiom means "I am fed up"?', 'Quelle expression signifie « j’en ai assez » ?'],
      ['Ich habe die Nase voll.', 'Ich habe Schwein.', 'Ich stehe auf dem Schlauch.'],
      ['Ich habe die Nase voll.', 'Ich habe Schwein.', 'Ich stehe auf dem Schlauch.'], 0,
      ['die Nase voll haben = fed up.', 'die Nase voll haben = en avoir assez.'],
    ),
    mc(
      'sp-rw-e9',
      ['With your boss, which is the politer choice?', 'Avec ton chef, quel est le choix le plus poli ?'],
      ['Das ist mir egal.', 'Das ist mir Wurst.', 'Das ist nicht mein Bier.'],
      ['Das ist mir egal.', 'Das ist mir Wurst.', 'Das ist nicht mein Bier.'], 0,
      ['Neutral egal is safer than informal idioms.', 'egal, neutre, est plus sûr que les expressions familières.'],
    ),
    fb(
      'sp-rw-e10',
      ['Die Aufgabe war ein ___. (child’s play)', 'Die Aufgabe war ein ___. (jeu d’enfant)'],
      'Kinderspiel',
      ['One word: a children’s game.', 'Un seul mot : un jeu d’enfants.'],
    ),
    wo(
      'sp-rw-e11',
      ['die', 'Ich', 'habe', 'voll', 'Nase'],
      ['Ich', 'habe', 'die', 'Nase', 'voll'],
      ['Subject, verb, article + noun, then voll.', 'Sujet, verbe, article + nom, puis voll.'],
    ),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'Fixed phrases for every occasion', 'Formules pour toutes les occasions',
      'Meals, toasts, health, birthdays and thanks.', 'Repas, toasts, santé, anniversaires et remerciements.',
    ),
    vocab('sp-redewendungen-appetit', 'Guten Appetit!', 'Enjoy your meal!', 'Bon appétit !', null, 'GOO-ten a-pe-TEET', 'GOO-ten ah-peh-TEET', ['Das Essen ist fertig. Guten Appetit!', 'The meal is ready. Enjoy!', 'Le repas est prêt. Bon appétit !']),
    vocab('sp-redewendungen-prost', 'Prost!', 'Cheers!', 'Santé !', null, 'PROHST', 'PROHST', ['Auf dein Wohl! Prost!', 'To your health! Cheers!', 'À ta santé ! Santé !']),
    vocab('sp-redewendungen-gesundheit', 'Gesundheit!', 'Bless you! (after a sneeze)', 'À tes souhaits !', null, 'ge-ZUNT-hite', 'guh-ZOONT-hyte', ['Hatschi! — Gesundheit!', 'Achoo! — Bless you!', 'Atchoum ! — À tes souhaits !']),
    vocab('sp-redewendungen-besserung', 'Gute Besserung!', 'Get well soon!', 'Bon rétablissement !', null, 'GOO-te BES-se-rung', 'GOO-tuh BES-uh-roong', ['Du bist krank? Gute Besserung!', 'You are ill? Get well soon!', 'Tu es malade ? Bon rétablissement !']),
    vocab('sp-redewendungen-glueckwunsch', 'Herzlichen Glückwunsch!', 'Congratulations!', 'Félicitations !', null, 'HERTS-li-khen GLUEK-vunsh', 'HAIRTS-likh-en GLUEK-voonsh', ['Zum Geburtstag: Herzlichen Glückwunsch!', 'For your birthday: Congratulations!', 'Pour ton anniversaire : félicitations !']),
    vocab('sp-redewendungen-ursache', 'Keine Ursache!', 'You are welcome! / Do not mention it.', 'Il n’y a pas de quoi !', null, 'KINE-e UR-za-khe', 'KINE-uh OOR-zakh-uh', ['Danke für die Hilfe! — Keine Ursache!', 'Thanks for the help! — You are welcome!', 'Merci pour l’aide ! — Il n’y a pas de quoi !']),
    grammar(
      'sp-rw-phrases',
      ['Fixed phrases', 'Formules figées'],
      [
        '| Situation | Phrase |\n|---|---|\n| Before eating | **Guten Appetit!** (at work also **Mahlzeit!**) |\n| Toast | **Prost!** · **Zum Wohl!** |\n| After a sneeze | **Gesundheit!** |\n| Someone is ill | **Gute Besserung!** |\n| Birthday, wedding, success | **Herzlichen Glückwunsch!** · **Alles Gute!** |\n| Thanks | **Danke schön.** → **Bitte schön.** · **Keine Ursache.** · **Gern geschehen.** |\n| Before a trip or exam | **Viel Glück!** · **Viel Erfolg!** |\n\nThese phrases are **fixed**: you cannot rearrange them. Learn them as blocks: the endings look odd on purpose (*Guten Appetit*, *Gute Besserung*, *Herzlichen Glückwunsch*) because each is a shortened wish such as "[Ich wünsche dir einen] guten Appetit".',
        '| Situation | Formule |\n|---|---|\n| Avant de manger | **Guten Appetit !** (au travail aussi **Mahlzeit !**) |\n| Toast | **Prost !** · **Zum Wohl !** |\n| Après un éternuement | **Gesundheit !** |\n| Quelqu’un est malade | **Gute Besserung !** |\n| Anniversaire, mariage, réussite | **Herzlichen Glückwunsch !** · **Alles Gute !** |\n| Remerciements | **Danke schön.** → **Bitte schön.** · **Keine Ursache.** · **Gern geschehen.** |\n| Avant un voyage ou un examen | **Viel Glück !** · **Viel Erfolg !** |\n\nCes formules sont **figées** : on ne peut pas les réarranger. Apprends-les en bloc : les terminaisons semblent étranges à dessein (*Guten Appetit*, *Gute Besserung*, *Herzlichen Glückwunsch*), car chacune est un souhait abrégé comme « [Ich wünsche dir einen] guten Appetit ».',
      ],
      [
        ['Danke schön! — Gern geschehen!', 'Thank you! — My pleasure!', 'Merci beaucoup ! — Avec plaisir !'],
        ['Viel Erfolg bei der Prüfung!', 'Good luck with the exam!', 'Bonne réussite pour l’examen !'],
      ],
    ),
    match(
      'sp-rw-e12',
      [
        ['Guten Appetit!', 'before eating', 'avant de manger'],
        ['Gesundheit!', 'after a sneeze', 'après un éternuement'],
        ['Gute Besserung!', 'for someone ill', 'pour quelqu’un de malade'],
        ['Herzlichen Glückwunsch!', 'for a birthday', 'pour un anniversaire'],
        ['Keine Ursache!', 'answer to thanks', 'réponse à un merci'],
      ],
      ['Match each phrase with its situation.', 'Associe chaque formule à sa situation.'],
    ),
    mc(
      'sp-rw-e13',
      ['Your friend has the flu. What do you say?', 'Ton ami a la grippe. Que dis-tu ?'],
      ['Gute Besserung!', 'Guten Appetit!', 'Prost!'],
      ['Gute Besserung !', 'Guten Appetit !', 'Prost !'], 0,
      ['Gute Besserung = get well soon.', 'Gute Besserung = bon rétablissement.'],
    ),
    fb(
      'sp-rw-e14',
      ['Danke für die Hilfe! — Keine ___! (You are welcome)', 'Danke für die Hilfe ! — Keine ___ ! (Il n’y a pas de quoi)'],
      'Ursache',
      ['Fixed answer to thanks.', 'Réponse figée à un merci.'],
    ),
    lc(
      'sp-rw-e15',
      ['Listen. What is the occasion?', 'Écoute. Quelle est l’occasion ?'],
      'Herzlichen Glückwunsch zum Geburtstag!',
      ['A birthday', 'A meal', 'An illness'],
      ['Un anniversaire', 'Un repas', 'Une maladie'], 0,
      ['Glückwunsch = congratulations.', 'Glückwunsch = félicitations.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Everyday images', 'Images du quotidien',
      'Short distances, things that go well, privacy and suspicion.', 'Courtes distances, choses qui vont bien, intimité et soupçon.',
    ),
    vocab('sp-redewendungen-katzensprung', 'ein Katzensprung', 'a stone’s throw (very close)', 'à deux pas', null, 'ine KAT-sen-shprung', 'ine KAHT-sen-shproong', ['Der Supermarkt ist nur ein Katzensprung entfernt.', 'The supermarket is only a stone’s throw away.', 'Le supermarché est à deux pas.']),
    vocab('sp-redewendungen-butter', 'Alles in Butter!', 'Everything is fine!', 'Tout va bien !', null, 'A-les in BUT-ter', 'AH-les in BOOT-er', ['Wie läuft es? — Alles in Butter!', 'How is it going? — All good!', 'Comment ça va ? — Tout va bien !']),
    vocab('sp-redewendungen-vieraugen', 'unter vier Augen', 'in private, face to face', 'en tête-à-tête', null, 'UN-ter feer OW-gen', 'OON-ter feer OW-gen', ['Kann ich Sie unter vier Augen sprechen?', 'Can I speak to you in private?', 'Puis-je vous parler en tête-à-tête ?']),
    vocab('sp-redewendungen-spanisch', 'Das kommt mir spanisch vor.', 'That seems odd to me.', 'Ça me paraît bizarre.', null, 'das komt meer SHPA-nish for', 'dahs komt meer SHPAH-nish for', ['Die E-Mail kommt mir spanisch vor.', 'This email seems odd to me.', 'Cet e-mail me paraît bizarre.']),
    grammar(
      'sp-rw-images',
      ['Four more everyday idioms', 'Quatre autres expressions courantes'],
      [
        '| Idiom | Literal | Real meaning |\n|---|---|---|\n| **ein Katzensprung** | a cat’s jump | very close |\n| **Alles in Butter!** | everything in butter | all is fine |\n| **unter vier Augen** | under four eyes | in private (two people) |\n| **Das kommt mir spanisch vor.** | That seems Spanish to me | That seems strange/suspicious |\n\n**Notes:** *unter vier Augen* is neutral and polite, also in formal speech. *Das kommt mir spanisch vor* often signals **suspicion**. If you want to say “Spanish” the language, use *Das ist Spanisch.*',
        '| Expression | Littéral | Sens réel |\n|---|---|---|\n| **ein Katzensprung** | un saut de chat | très proche |\n| **Alles in Butter !** | tout dans le beurre | tout va bien |\n| **unter vier Augen** | sous quatre yeux | en privé (à deux) |\n| **Das kommt mir spanisch vor.** | Ça me semble espagnol | Ça me semble étrange/suspect |\n\n**Notes :** *unter vier Augen* est neutre et poli, y compris à l’oral formel. *Das kommt mir spanisch vor* exprime souvent un **soupçon**. Pour parler de la langue espagnole, dis *Das ist Spanisch.*',
      ],
      [
        ['Bis zum Bahnhof ist es nur ein Katzensprung.', 'It is only a stone’s throw to the station.', 'Jusqu’à la gare, c’est à deux pas.'],
        ['Kann ich dich unter vier Augen sprechen?', 'Can I talk to you in private?', 'Puis-je te parler en tête-à-tête ?'],
      ],
    ),
    mc(
      'sp-rw-e16',
      ['"Das kommt mir spanisch vor" means…', '« Das kommt mir spanisch vor » signifie…'],
      ['That seems strange to me', 'That sounds like Spanish', 'I want to learn Spanish'],
      ['Ça me paraît bizarre', 'Ça ressemble à de l’espagnol', 'Je veux apprendre l’espagnol'], 0,
      ['Idiom for suspicion.', 'Expression de soupçon.'],
    ),
    wo(
      'sp-rw-e17',
      ['Katzensprung', 'nur', 'ein', 'Es', 'ist'],
      ['Es', 'ist', 'nur', 'ein', 'Katzensprung'],
      ['Subject, verb, nur, article, noun.', 'Sujet, verbe, nur, article, nom.'],
    ),

    wrapup(
      '**Idioms:** learn them whole. Meaning is not the sum of the words.\n\n**Luck and understanding:** *Ich verstehe nur Bahnhof* · *Ich drücke dir die Daumen* · *Schwein haben* (informal) · *Hals- und Beinbruch!* · *auf dem Schlauch stehen*.\n\n**Opinions:** *Das ist mir Wurst* (informal) · *die Nase voll haben* · *Das ist nicht mein Bier* · *ein Kinderspiel*. In formal situations choose *egal* or *genug*.\n\n**Fixed phrases:** *Guten Appetit! · Prost! · Gesundheit! · Gute Besserung! · Herzlichen Glückwunsch! · Keine Ursache!*\n\n**Everyday images:** *ein Katzensprung* · *Alles in Butter!* · *unter vier Augen* · *Das kommt mir spanisch vor.*',
      '**Expressions :** apprends-les en bloc. Le sens n’est pas la somme des mots.\n\n**Chance et compréhension :** *Ich verstehe nur Bahnhof* · *Ich drücke dir die Daumen* · *Schwein haben* (familier) · *Hals- und Beinbruch !* · *auf dem Schlauch stehen*.\n\n**Opinions :** *Das ist mir Wurst* (familier) · *die Nase voll haben* · *Das ist nicht mein Bier* · *ein Kinderspiel*. En situation formelle, choisis *egal* ou *genug*.\n\n**Formules figées :** *Guten Appetit ! · Prost ! · Gesundheit ! · Gute Besserung ! · Herzlichen Glückwunsch ! · Keine Ursache !*\n\n**Images du quotidien :** *ein Katzensprung* · *Alles in Butter !* · *unter vier Augen* · *Das kommt mir spanisch vor.*',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Idioms and fixed phrases', 'Quiz final : expressions et formules'),
    match(
      'sp-rw-q1',
      [
        ['Ich verstehe nur Bahnhof.', 'I understand nothing', 'Je n’y comprends rien'],
        ['Ich drücke dir die Daumen.', 'fingers crossed', 'je croise les doigts'],
        ['die Nase voll haben', 'to be fed up', 'en avoir assez'],
        ['ein Kinderspiel', 'very easy', 'très facile'],
        ['ein Katzensprung', 'very close', 'tout près'],
      ],
      ['Match each idiom with its real meaning.', 'Associe chaque expression à son sens réel.'],
    ),
    mc(
      'sp-rw-q2',
      ['What do you say before a meal?', 'Que dis-tu avant un repas ?'],
      ['Guten Appetit!', 'Gute Besserung!', 'Gesundheit!'],
      ['Guten Appetit !', 'Gute Besserung !', 'Gesundheit !'], 0,
      ['Appetit = meal.', 'Appetit = repas.'],
    ),
    mc(
      'sp-rw-q3',
      ['Someone sneezes. You say…', 'Quelqu’un éternue. Tu dis…'],
      ['Gesundheit!', 'Prost!', 'Guten Appetit!'],
      ['Gesundheit !', 'Prost !', 'Guten Appetit !'], 0,
      ['Gesundheit = bless you.', 'Gesundheit = à tes souhaits.'],
    ),
    mc(
      'sp-rw-q4',
      ['Before a performance you say…', 'Avant un spectacle tu dis…'],
      ['Hals- und Beinbruch!', 'Gute Besserung!', 'Keine Ursache!'],
      ['Hals- und Beinbruch !', 'Gute Besserung !', 'Keine Ursache !'], 0,
      ['Good-luck wish for a performance.', 'Souhait de bonne chance pour un spectacle.'],
    ),
    fb(
      'sp-rw-q5',
      ['Das ist nicht mein ___. (not my business)', 'Das ist nicht mein ___. (pas mon affaire)'],
      'Bier',
      ['A drink.', 'Une boisson.'],
    ),
    fb(
      'sp-rw-q6',
      ['Ich habe die ___ voll. (fed up)', 'Ich habe die ___ voll. (j’en ai assez)'],
      'Nase',
      ['A body part on the face.', 'Une partie du visage.'],
    ),
    mc(
      'sp-rw-q7',
      ['Which idiom would be risky in a formal letter?', 'Quelle expression serait risquée dans une lettre formelle ?'],
      ['Das ist mir Wurst.', 'Herzlichen Glückwunsch!', 'Unter vier Augen'],
      ['Das ist mir Wurst.', 'Herzlichen Glückwunsch !', 'Unter vier Augen'], 0,
      ['Wurst is informal and can sound dismissive.', 'Wurst est familier et peut paraître dédaigneux.'],
    ),
    mc(
      'sp-rw-q8',
      ['"Keine Ursache!" is the answer to…', '« Keine Ursache ! » répond à…'],
      ['Danke!', 'Prost!', 'Gute Nacht!'],
      ['Danke !', 'Prost !', 'Gute Nacht !'], 0,
      ['A reply to thanks.', 'Une réponse à un merci.'],
    ),
    ap('sp-rw-q9', 'Redewendung', 'die', ['-ung nouns are feminine.', 'Les noms en -ung sont féminins.']),
    wo(
      'sp-rw-q10',
      ['die', 'dir', 'drücke', 'Daumen!', 'Ich'],
      ['Ich', 'drücke', 'dir', 'die', 'Daumen!'],
      ['Subject, verb, dative, accusative.', 'Sujet, verbe, datif, accusatif.'],
    ),
    wo(
      'sp-rw-q11',
      ['ein', 'Das', 'Kinderspiel!', 'ist', 'doch'],
      ['Das', 'ist', 'doch', 'ein', 'Kinderspiel!'],
      ['Verb in second position.', 'Verbe en deuxième position.'],
    ),
    lc(
      'sp-rw-q12',
      ['Listen. How is the speaker?', 'Écoute. Comment va la personne ?'],
      'Alles in Butter!',
      ['Everything is fine', 'She is angry', 'She is lost'],
      ['Tout va bien', 'Elle est en colère', 'Elle est perdue'], 0,
      ['Alles in Butter = all fine.', 'Alles in Butter = tout va bien.'],
    ),
    lc(
      'sp-rw-q13',
      ['Listen. What does the speaker say about the distance?', 'Écoute. Que dit la personne sur la distance ?'],
      'Der Supermarkt ist nur ein Katzensprung entfernt.',
      ['It is very close', 'It is very far', 'It is closed'],
      ['C’est très proche', 'C’est très loin', 'C’est fermé'], 0,
      ['Katzensprung = very close.', 'Katzensprung = tout près.'],
    ),
    mc(
      'sp-rw-q14',
      ['You are slow on the uptake. Which idiom fits?', 'Tu ne percutes pas. Quelle expression convient ?'],
      ['Ich stehe auf dem Schlauch.', 'Ich habe Schwein.', 'Das ist ein Kinderspiel.'],
      ['Ich stehe auf dem Schlauch.', 'Ich habe Schwein.', 'Das ist ein Kinderspiel.'], 0,
      ['auf dem Schlauch stehen = not getting it.', 'auf dem Schlauch stehen = ne pas comprendre.'],
    ),
  ],
});

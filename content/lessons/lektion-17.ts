import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const lektion17: Lesson = {
  id: 'l17', level: 'A1', module: 4, number: 20,
  title: { de: 'Imperativ: Tipps und Anweisungen', en: 'Imperative: tips and instructions', fr: 'L’impératif : conseils et consignes' },
  theme: 'Giving tips, advice and instructions with the imperative', themeFr: 'Donner des conseils et des consignes avec l’impératif',
  goals: ['Give polite commands with Sie', 'Give commands to friends and family with du and ihr', 'Use the irregular imperative sei / seid', 'Give advice with "sollen" and the particle "doch"', 'Use "ihm / ihr" in short commands'], goalsFr: ['Donner des ordres polis avec Sie', 'Donner des consignes à un ami ou à la famille avec du et ihr', 'Utiliser l’impératif irrégulier sei / seid', 'Donner des conseils avec « sollen » et la particule « doch »', 'Utiliser « ihm / ihr » dans des ordres courts'],
  canDo: g('Ich kann Tipps und Anweisungen geben, höflich mit Sie und direkt mit du und ihr.', 'I can give tips and instructions, politely with Sie and directly with du and ihr.', 'Je sais donner des conseils et des instructions, poliment avec Sie et directement avec du et ihr.'),
  steps: [
    { kind: 'intro', title: 'Tipps und Anweisungen 💊', titleFr: 'Conseils et instructions 💊',
      scene: 'At the pharmacy and at home, people give advice and orders.', sceneFr: 'À la pharmacie et à la maison, on donne des conseils et des ordres.',
      goals: ['Give polite commands with Sie', 'Give commands with du and ihr, including sei and seid', 'Give advice with sollen and doch', 'Use ihm and ihr in short commands'],
      goalsFr: ['Donner des ordres polis avec Sie', 'Donner des ordres avec du et ihr, y compris sei et seid', 'Donner des conseils avec sollen et doch', 'Utiliser ihm et ihr dans de courts ordres'] },

    // ───────────── 1 · Polite commands ─────────────
    { kind: 'chapter', title: 'Höfliche Anweisungen mit Sie', titleFr: 'Ordres polis avec Sie', blurb: 'Verb first, then Sie.', blurbFr: 'Le verbe d’abord, puis Sie.' },

    { kind: 'situation', title: 'In der Apotheke', titleFr: 'À la pharmacie',
      setting: 'A customer has a cold and asks the pharmacist for help.', settingFr: 'Une cliente est enrhumée et demande de l’aide au pharmacien.',
      lines: [
        line('Kundin', 'Guten Tag. Ich habe eine Erkältung. Ich habe Husten und Kopfschmerzen.', 'Good day. I have a cold. I have a cough and a headache.', 'Bonjour. J’ai un rhume. J’ai de la toux et mal à la tête.'),
        line('Apotheker', 'Nehmen Sie eine Tablette. Trinken Sie viel Tee.', 'Take a tablet. Drink plenty of tea.', 'Prenez un comprimé. Buvez beaucoup de thé.'),
        line('Kundin', 'Muss ich zum Arzt gehen?', 'Do I have to go to the doctor?', 'Dois-je aller chez le médecin ?'),
        line('Apotheker', 'Gehen Sie doch am Montag zum Arzt.', 'Why don’t you go to the doctor on Monday?', 'Allez donc chez le médecin lundi.'),
        line('Kundin', 'Danke für den Tipp!', 'Thanks for the tip!', 'Merci pour le conseil !'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l17-e13', prompt: 'What does the pharmacist tell the customer to take and drink?', promptFr: 'Que dit le pharmacien à la cliente de prendre et de boire ?', options: ['A tablet and plenty of tea', 'Cough syrup and water', 'Nothing'], optionsFr: ['Un comprimé et beaucoup de thé', 'Du sirop et de l’eau', 'Rien'], answer: 0, explain: 'He says: “Nehmen Sie eine Tablette. Trinken Sie viel Tee.”', explainFr: 'Il dit : « Nehmen Sie eine Tablette. Trinken Sie viel Tee. »', hint: 'Look at the verbs “nehmen” and “trinken”.', hintFr: 'Regarde les verbes « nehmen » et « trinken ».' } },

    { kind: 'wordgroup', title: 'Krankheit', titleFr: 'La maladie',
      items: [{ id: 'l17-erkaeltung', german: 'die Erkältung', english: 'the cold (illness)', french: 'le rhume', gender: 'die', syllables: ['er', 'KÄL', 'tung'], pronunciation: 'dee air-KELL-toong', example: { de: 'Ich habe eine Erkältung.', en: 'I have a cold.', fr: 'J’ai un rhume.' } }, { id: 'l17-fieber', german: 'das Fieber', english: 'the fever', french: 'la fièvre', gender: 'das', syllables: ['FIE', 'ber'], pronunciation: 'dahs FEE-ber', example: { de: 'Mein Sohn hat Fieber.', en: 'My son has a fever.', fr: 'Mon fils a de la fièvre.' } }, { id: 'l17-husten', german: 'der Husten', english: 'the cough', french: 'la toux', gender: 'der', syllables: ['HUS', 'ten'], pronunciation: 'dair HOOS-ten', example: { de: 'Ich habe Husten.', en: 'I have a cough.', fr: 'J’ai de la toux.' } }, { id: 'l17-kopfschmerzen', german: 'die Kopfschmerzen (Pl.)', english: 'the headache', french: 'le mal de tête', gender: 'die', syllables: ['KOPF', 'schmer', 'zen'], pronunciation: 'dee KOPF-shmair-tsen', example: { de: 'Sie hat Kopfschmerzen.', en: 'She has a headache.', fr: 'Elle a mal à la tête.' } }] },

    { kind: 'wordgroup', title: 'Apotheke und Tipp', titleFr: 'Pharmacie et conseil',
      items: [{ id: 'l17-tipp', german: 'der Tipp', english: 'the tip / piece of advice', french: 'le conseil', gender: 'der', syllables: ['TIPP'], pronunciation: 'dair tip', example: { de: 'Hier ist ein guter Tipp.', en: 'Here is a good tip.', fr: 'Voici un bon conseil.' } }, { id: 'l17-tablette', german: 'die Tablette', english: 'the tablet / pill', french: 'le comprimé', gender: 'die', syllables: ['ta', 'BLET', 'te'], pronunciation: 'dee tah-BLET-teh', example: { de: 'Nehmen Sie eine Tablette.', en: 'Take a tablet.', fr: 'Prenez un comprimé.' } }, { id: 'l17-apotheke', german: 'die Apotheke', english: 'the pharmacy', french: 'la pharmacie', gender: 'die', syllables: ['a', 'po', 'THE', 'ke'], pronunciation: 'dee ah-poh-TAY-keh', example: { de: 'Gehen Sie in die Apotheke.', en: 'Go to the pharmacy.', fr: 'Allez à la pharmacie.' } }, { id: 'l17-tee', german: 'der Tee', english: 'the tea', french: 'le thé', gender: 'der', syllables: ['TEE'], pronunciation: 'dair tay', example: { de: 'Trink bitte einen Tee.', en: 'Please drink a tea.', fr: 'Bois un thé, s’il te plaît.' } }] },

    { kind: 'grammar', note: {
      id: 'l17-sie-imperativ', title: 'Polite commands: the Sie-imperative', titleFr: 'Les ordres polis : l’impératif avec Sie',
      lead: 'Verb first, Sie right after it. A separable prefix goes to the end. Only sein is irregular: Seien Sie.',
      leadFr: 'Le verbe d’abord, Sie juste après. Un préfixe séparable va à la fin. Seul sein est irrégulier : Seien Sie.',
      explanationMd: 'To give a command or a tip to someone you call **Sie**, put the **verb first** (in the infinitive form) and **Sie** right after it: **Trinken Sie** viel Wasser! With a **separable verb** the prefix goes to the **end**: **Stehen Sie** früh **auf**! The only irregular verb is **sein**: **Seien Sie** leise! Add **bitte** to be extra polite.',
      explanationMdFr: 'Pour donner un ordre ou un conseil à quelqu’un que tu vouvoies (**Sie**), mets le **verbe en premier** (à la forme de l’infinitif) et **Sie** juste après : **Trinken Sie** viel Wasser ! Avec un **verbe séparable**, le préfixe va à la **fin** : **Stehen Sie** früh **auf** ! Le seul verbe irrégulier est **sein** : **Seien Sie** leise ! Ajoute **bitte** pour être encore plus poli.',
      tables: [{ title: 'Sie-imperative', titleFr: 'Impératif avec Sie', headers: ['Infinitive', 'Command'], headersFr: ['Infinitif', 'Ordre'],
        rows: [['trinken', 'Trinken Sie viel Wasser!'], ['gehen', 'Gehen Sie zum Arzt!'], ['nehmen', 'Nehmen Sie eine Tablette!'], ['aufstehen', 'Stehen Sie früh auf!'], ['sein', 'Seien Sie bitte leise!']],
        rowsFr: [['trinken', 'Trinken Sie viel Wasser!'], ['gehen', 'Gehen Sie zum Arzt!'], ['nehmen', 'Nehmen Sie eine Tablette!'], ['aufstehen', 'Stehen Sie früh auf!'], ['sein', 'Seien Sie bitte leise!']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Trinken', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'viel Tee!', role: 'accusative' }], en: 'Drink plenty of tea!', fr: 'Buvez beaucoup de thé !' },
        { parts: [{ text: 'Stehen', role: 'verb' }, { text: 'Sie', role: 'subject' }, { text: 'früh', role: 'time' }, { text: 'auf!', role: 'verb' }], en: 'Get up early!', fr: 'Levez-vous tôt !' },
      ],
      contrast: {
        a: { label: 'Statement', labelFr: 'Affirmation', note: 'Sie first', noteFr: 'Sie en premier', examples: [g('Sie trinken viel Wasser.', 'You drink a lot of water.', 'Vous buvez beaucoup d’eau.'), g('Sie gehen zum Arzt.', 'You go to the doctor.', 'Vous allez chez le médecin.')] },
        b: { label: 'Command', labelFr: 'Ordre', note: 'verb first', noteFr: 'verbe en premier', examples: [g('Trinken Sie viel Wasser!', 'Drink a lot of water!', 'Buvez beaucoup d’eau !'), g('Gehen Sie zum Arzt!', 'Go to the doctor!', 'Allez chez le médecin !')] },
      },
      examples: [
        g('Trinken Sie viel Wasser!', 'Drink a lot of water!', 'Buvez beaucoup d’eau !'),
        g('Gehen Sie in die Apotheke!', 'Go to the pharmacy!', 'Allez à la pharmacie !'),
        g('Rufen Sie mich bitte morgen an!', 'Please call me tomorrow!', 'Appelez-moi demain, s’il vous plaît !'),
        g('Seien Sie bitte leise!', 'Please be quiet!', 'Soyez silencieux, s’il vous plaît !'),
        g('Nehmen Sie eine Tablette!', 'Take a tablet!', 'Prenez un comprimé !'),
        g('Bleiben Sie im Bett!', 'Stay in bed!', 'Restez au lit !'),
        g('Stehen Sie früh auf!', 'Get up early!', 'Levez-vous tôt !'),
      ],
      mistakes: [
        { wrong: 'Sie trinken viel Wasser! (as a command)', right: 'Trinken Sie viel Wasser!', why: 'In a command the verb comes first.', whyFr: 'Dans un ordre, le verbe vient en premier.' },
        { wrong: 'Sind Sie bitte leise!', right: 'Seien Sie bitte leise!', why: 'sein is irregular: Seien Sie.', whyFr: 'sein est irrégulier : Seien Sie.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l17-e4', tokens: ['Sie', 'viel', 'Trinken', 'Tee'], answer: ['Trinken', 'Sie', 'viel', 'Tee'], hint: 'Verb first, then "Sie".', hintFr: 'Verbe en premier, puis « Sie ».' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l17-e6', prompt: 'Listen. What does the pharmacist advise?', promptFr: 'Écoute. Que conseille le pharmacien ?', audio: { ttsText: 'Trinken Sie viel Tee und bleiben Sie im Bett.' }, options: ['Drink tea and stay in bed', 'Go to work and drink coffee', 'Take a tablet and go outside'], optionsFr: ['Boire du thé et rester au lit', 'Aller travailler et boire du café', 'Prendre un comprimé et sortir'], answer: 0, hint: 'Listen for "Tee" and "Bett".', hintFr: 'Écoute « Tee » et « Bett ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l17-e12', word: 'Apotheke', answer: 'die', hint: 'Many words ending in -e are feminine.', hintFr: 'Beaucoup de mots en -e sont féminins.' } },

    // ───────────── 2 · du and ihr ─────────────
    { kind: 'chapter', title: 'Befehle mit du und ihr', titleFr: 'Ordres avec du et ihr', blurb: 'Among friends and family you drop the pronoun.', blurbFr: 'Entre amis et en famille, on supprime le pronom.' },

    { kind: 'situation', title: 'Zu Hause', titleFr: 'À la maison',
      setting: 'A mother gives instructions to her children, Tom and Lea.', settingFr: 'Une mère donne des instructions à ses enfants, Tom et Lea.',
      lines: [
        line('Mutter', 'Tom, räum bitte dein Zimmer auf!', 'Tom, please tidy up your room!', 'Tom, range ta chambre, s’il te plaît !'),
        line('Tom', 'Okay, Mama.', 'Okay, Mum.', 'D’accord, maman.'),
        line('Mutter', 'Und bring bitte den Müll raus. Lea, spül das Geschirr!', 'And please take out the rubbish. Lea, wash the dishes!', 'Et sors la poubelle, s’il te plaît. Lea, fais la vaisselle !'),
        line('Mutter', 'Kinder, seid bitte leise. Ich telefoniere.', 'Children, please be quiet. I’m on the phone.', 'Les enfants, soyez silencieux, s’il vous plaît. Je téléphone.'),
        line('Mutter', 'Tom, komm sofort her!', 'Tom, come here right away!', 'Tom, viens tout de suite !'),
        line('Tom', 'Ich komme!', 'I’m coming!', 'J’arrive !'),
      ],
      words: [{ id: 'l17-aufraeumen', german: 'aufräumen', english: 'to tidy up', french: 'ranger', gender: null, syllables: ['AUF', 'räu', 'men'], pronunciation: 'OWF-roy-men', example: { de: 'Räum bitte dein Zimmer auf!', en: 'Please tidy your room!', fr: 'Range ta chambre, s’il te plaît !' } }, { id: 'l17-muell', german: 'der Müll', english: 'the rubbish / trash', french: 'les ordures / la poubelle', gender: 'der', syllables: ['MÜLL'], pronunciation: 'dair mewl', example: { de: 'Bring bitte den Müll raus!', en: 'Please take out the rubbish!', fr: 'Sors la poubelle, s’il te plaît !' } }, { id: 'l17-geschirr', german: 'das Geschirr', english: 'the dishes', french: 'la vaisselle', gender: 'das', syllables: ['ge', 'SCHIRR'], pronunciation: 'dahs geh-SHEER', example: { de: 'Spült bitte das Geschirr!', en: 'Please wash the dishes!', fr: 'Faites la vaisselle, s’il vous plaît !' } }, { id: 'l17-sofort', german: 'sofort', english: 'right away', french: 'tout de suite', gender: null, syllables: ['so', 'FORT'], pronunciation: 'zo-FORT', example: { de: 'Komm sofort her!', en: 'Come here right now!', fr: 'Viens ici tout de suite !' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l17-e14', prompt: 'What must Tom do first?', promptFr: 'Que doit faire Tom en premier ?', options: ['Tidy his room', 'Wash the dishes', 'Take a tablet'], optionsFr: ['Ranger sa chambre', 'Faire la vaisselle', 'Prendre un comprimé'], answer: 0, explain: 'His mother says: “Tom, räum bitte dein Zimmer auf!”', explainFr: 'Sa mère dit : « Tom, räum bitte dein Zimmer auf ! »', hint: 'Look at the first line.', hintFr: 'Regarde la première réplique.' } },

    { kind: 'grammar', note: {
      id: 'l17-du-ihr', title: 'Commands with du and ihr', titleFr: 'Ordres avec du et ihr',
      lead: 'du: take the du-form without -st and without du. ihr: take the ihr-form without ihr. sein: sei! / seid!',
      leadFr: 'du : prends la forme du sans -st et sans du. ihr : prends la forme ihr sans ihr. sein : sei ! / seid !',
      explanationMd: 'With friends and family you drop the pronoun. **du**: take the du-form and remove **-st** and **du**: du kommst → **Komm!** Verbs with **e → i** keep the change: **Nimm! Gib! Lies!** The **a → ä** change does **not** appear: **Schlaf! Fahr!** **ihr**: take the ihr-form without **ihr**: ihr kommt → **Kommt!** **sein** is irregular: **Sei!** and **Seid!** Separable verbs still split: **Räum** dein Zimmer **auf**!',
      explanationMdFr: 'Entre amis et en famille, on supprime le pronom. **du** : prends la forme du et enlève **-st** et **du** : du kommst → **Komm !** Les verbes à changement **e → i** le gardent : **Nimm ! Gib ! Lies !** Le changement **a → ä** n’apparaît **pas** : **Schlaf ! Fahr !** **ihr** : prends la forme ihr sans **ihr** : ihr kommt → **Kommt !** **sein** est irrégulier : **Sei !** et **Seid !** Les verbes séparables se séparent toujours : **Räum** dein Zimmer **auf** !',
      tables: [{ title: 'du and ihr commands', titleFr: 'Ordres avec du et ihr', headers: ['Infinitive', 'du', 'ihr'], headersFr: ['Infinitif', 'du', 'ihr'],
        rows: [['kommen', 'Komm!', 'Kommt!'], ['trinken', 'Trink!', 'Trinkt!'], ['nehmen', 'Nimm!', 'Nehmt!'], ['schlafen', 'Schlaf!', 'Schlaft!'], ['sein', 'Sei!', 'Seid!'], ['aufräumen', 'Räum auf!', 'Räumt auf!']],
        rowsFr: [['kommen', 'Komm!', 'Kommt!'], ['trinken', 'Trink!', 'Trinkt!'], ['nehmen', 'Nimm!', 'Nehmt!'], ['schlafen', 'Schlaf!', 'Schlaft!'], ['sein', 'Sei!', 'Seid!'], ['aufräumen', 'Räum auf!', 'Räumt auf!']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Räum', role: 'verb' }, { text: 'dein Zimmer', role: 'accusative' }, { text: 'auf!', role: 'verb' }], en: 'Tidy up your room!', fr: 'Range ta chambre !' },
        { parts: [{ text: 'Kommt', role: 'verb' }, { text: 'bitte', role: 'connector' }, { text: 'mit!', role: 'verb' }], en: 'Please come along! (to several people)', fr: 'Venez avec nous, s’il vous plaît ! (à plusieurs)' },
      ],
      contrast: {
        a: { label: 'du: one person', labelFr: 'du : une personne', note: 'stem: Komm! Nimm! Sei!', noteFr: 'radical : Komm ! Nimm ! Sei !', examples: [g('Komm her, Tom!', 'Come here, Tom!', 'Viens ici, Tom !'), g('Nimm einen Tee und schlaf viel!', 'Have a tea and sleep a lot!', 'Prends un thé et dors beaucoup !')] },
        b: { label: 'ihr: several people', labelFr: 'ihr : plusieurs personnes', note: 'Kommt! Nehmt! Seid!', noteFr: 'Kommt ! Nehmt ! Seid !', examples: [g('Kommt bitte mit!', 'Please come along!', 'Venez avec nous, s’il vous plaît !'), g('Seid bitte leise, Kinder!', 'Please be quiet, children!', 'Soyez silencieux, les enfants !')] },
      },
      examples: [
        g('Komm her, Tom!', 'Come here, Tom!', 'Viens ici, Tom !'),
        g('Kommt bitte mit!', 'Please come along!', 'Venez avec nous, s’il vous plaît !'),
        g('Nimm einen Tee und schlaf viel!', 'Have a tea and sleep a lot!', 'Prends un thé et dors beaucoup !'),
        g('Seid bitte leise, Kinder!', 'Please be quiet, children!', 'Soyez silencieux, les enfants !'),
        g('Bring bitte den Müll raus!', 'Please take out the rubbish!', 'Sors la poubelle, s’il te plaît !'),
        g('Räum dein Zimmer auf!', 'Tidy up your room!', 'Range ta chambre !'),
        g('Sei bitte leise, Lea!', 'Please be quiet, Lea!', 'Sois silencieuse, Lea !'),
      ],
      mistakes: [
        { wrong: 'Du komm!', right: 'Komm!', why: 'Drop the pronoun in a command.', whyFr: 'Supprime le pronom dans un ordre.' },
        { wrong: 'Nehm einen Tee!', right: 'Nimm einen Tee!', why: 'nehmen keeps its e → i change: nimm.', whyFr: 'nehmen garde son changement e → i : nimm.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l17-e1', prompt: 'You say to your friend Lea: "Come here!" Which is correct?', promptFr: 'Tu dis à ton amie Lea : « Viens ici ! » Laquelle est correcte ?', options: ['Kommst her!', 'Komm her!', 'Kommt her!'], answer: 1, explain: 'For du, use the stem without -st: Komm her!', explainFr: 'Pour du, on utilise le radical sans -st : Komm her !', hint: 'One person, informal: drop -st.', hintFr: 'Une personne, tutoiement : enlève -st.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e2', prompt: 'Bitte ___ leise, Lea! (sei / seid)', promptFr: 'Bitte ___ leise, Lea ! (sei / seid)', answer: 'sei', hint: 'Lea is one person — du-form of sein.', hintFr: 'Lea est une seule personne — forme du de sein.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e3', prompt: 'Kinder, ___ bitte leise! (sei / seid)', promptFr: 'Les enfants, ___ bitte leise ! (sei / seid)', answer: 'seid', hint: 'Several people — ihr-form of sein.', hintFr: 'Plusieurs personnes — forme ihr de sein.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l17-e5', pairs: [{ de: 'Nimm!', en: 'Take! (to a friend)', fr: 'Prends ! (à un ami)' }, { de: 'Nehmt!', en: 'Take! (to several friends)', fr: 'Prenez ! (à plusieurs amis)' }, { de: 'Nehmen Sie!', en: 'Take! (formal)', fr: 'Prenez ! (vouvoiement)' }], hint: 'du → no ending, ihr → -t, Sie → -en Sie.', hintFr: 'du → sans terminaison, ihr → -t, Sie → -en Sie.' } },

    // ───────────── 3 · sollen, doch, ihm/ihr ─────────────
    { kind: 'chapter', title: 'sollen, doch und ihm / ihr', titleFr: 'sollen, doch et ihm / ihr', blurb: 'Softer advice and giving things to people.', blurbFr: 'Un conseil plus doux et donner des choses aux gens.' },

    { kind: 'situation', title: 'Gib ihm einen Tee', titleFr: 'Donne-lui un thé',
      setting: 'A father asks the pharmacist about his sick children.', settingFr: 'Un père interroge la pharmacienne sur ses enfants malades.',
      lines: [
        line('Vater', 'Tom hat Fieber. Was soll ich machen?', 'Tom has a fever. What should I do?', 'Tom a de la fièvre. Que dois-je faire ?'),
        line('Apothekerin', 'Gib ihm einen Tee und eine Tablette.', 'Give him a tea and a tablet.', 'Donne-lui un thé et un comprimé.'),
        line('Vater', 'Und seine Schwester? Sie hat Kopfschmerzen.', 'And his sister? She has a headache.', 'Et sa sœur ? Elle a mal à la tête.'),
        line('Apothekerin', 'Gib ihr doch auch eine Tablette. Sie soll viel schlafen.', 'Why not give her a tablet too? She should sleep a lot.', 'Donne-lui donc aussi un comprimé. Elle doit beaucoup dormir.'),
      ],
      words: [{ id: 'l17-sollen', german: 'sollen', english: 'should / to be supposed to', french: 'devoir (conseil, consigne)', gender: null, syllables: ['SOL', 'len'], pronunciation: 'ZOL-len', example: { de: 'Du sollst mehr schlafen.', en: 'You should sleep more.', fr: 'Tu devrais dormir plus.' } }, { id: 'l17-doch', german: 'doch (Partikel)', english: 'do / why don’t you (softens a command)', french: 'donc (adoucit un conseil)', gender: null, syllables: ['DOCH'], pronunciation: 'dokh', example: { de: 'Komm doch mit!', en: 'Do come along!', fr: 'Viens donc avec nous !' } }] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l17-e15', prompt: 'What should the girl get, and what should she do?', promptFr: 'Que doit recevoir la fille, et que doit-elle faire ?', options: ['A tablet, and sleep a lot', 'A tea, and go to school', 'Nothing'], optionsFr: ['Un comprimé, et dormir beaucoup', 'Un thé, et aller à l’école', 'Rien'], answer: 0, explain: 'The pharmacist says: “Gib ihr doch auch eine Tablette. Sie soll viel schlafen.”', explainFr: 'La pharmacienne dit : « Gib ihr doch auch eine Tablette. Sie soll viel schlafen. »', hint: 'ihr = her.', hintFr: 'ihr = à elle.' } },

    { kind: 'grammar', note: {
      id: 'l17-sollen-doch', title: 'sollen, doch, ihm and ihr', titleFr: 'sollen, doch, ihm et ihr',
      lead: 'sollen passes on advice, doch makes a command friendlier, ihm / ihr say “to him / to her”.',
      leadFr: 'sollen transmet un conseil, doch adoucit un ordre, ihm / ihr signifient « à lui / à elle ».',
      explanationMd: '**sollen** (should, to be supposed to) gives **advice** or passes on an **instruction**; it is a modal verb, so the second verb goes to the **end**: **Du sollst mehr schlafen.** The little word **doch** makes a tip friendlier: **Gehen Sie doch zum Arzt!** After a command you can add a person: **ihm** (to him), **ihr** (to her), **mir** (to me): **Gib ihm einen Tee!**',
      explanationMdFr: '**sollen** (devoir, être censé) donne un **conseil** ou transmet une **instruction** ; c’est un verbe modal, donc le deuxième verbe va à la **fin** : **Du sollst mehr schlafen.** Le petit mot **doch** adoucit un conseil : **Gehen Sie doch zum Arzt !** Après un ordre, tu peux ajouter une personne : **ihm** (à lui), **ihr** (à elle), **mir** (à moi) : **Gib ihm einen Tee !**',
      tables: [
        { title: 'sollen (should)', titleFr: 'sollen (devoir)', headers: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], headersFr: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'], rows: [['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen']], rowsFr: [['soll', 'sollst', 'soll', 'sollen', 'sollt', 'sollen']], highlightCol: 1 },
        { title: 'To him, to her, to me', titleFr: 'À lui, à elle, à moi', headers: ['Person', 'Form', 'Example'], headersFr: ['Personne', 'Forme', 'Exemple'], rows: [['er', 'ihm', 'Gib ihm einen Tee!'], ['sie', 'ihr', 'Gib ihr eine Tablette!'], ['ich', 'mir', 'Bring mir bitte das Geschirr!']], rowsFr: [['er', 'ihm', 'Gib ihm einen Tee!'], ['sie', 'ihr', 'Gib ihr eine Tablette!'], ['ich', 'mir', 'Bring mir bitte das Geschirr!']], highlightCol: 1 },
      ],
      anatomy: [
        { parts: [{ text: 'Gib', role: 'verb' }, { text: 'ihm', role: 'dative' }, { text: 'einen Tee!', role: 'accusative' }], en: 'Give him a tea!', fr: 'Donne-lui un thé !' },
        { parts: [{ text: 'Du', role: 'subject' }, { text: 'sollst', role: 'verb' }, { text: 'mehr', role: 'other' }, { text: 'schlafen.', role: 'verb' }], en: 'You should sleep more.', fr: 'Tu devrais dormir davantage.' },
      ],
      contrast: {
        a: { label: 'Direct command', labelFr: 'Ordre direct', note: 'short and firm', noteFr: 'court et ferme', examples: [g('Gehen Sie zum Arzt!', 'Go to the doctor!', 'Allez chez le médecin !'), g('Gib ihr eine Tablette!', 'Give her a tablet!', 'Donne-lui un comprimé !')] },
        b: { label: 'With doch or sollen', labelFr: 'Avec doch ou sollen', note: 'friendlier advice', noteFr: 'conseil plus aimable', examples: [g('Gehen Sie doch zum Arzt!', 'Why don’t you go to the doctor?', 'Allez donc chez le médecin !'), g('Du sollst mehr Wasser trinken.', 'You should drink more water.', 'Tu devrais boire plus d’eau.')] },
      },
      examples: [
        g('Du sollst mehr Wasser trinken.', 'You should drink more water.', 'Tu devrais boire plus d’eau.'),
        g('Gehen Sie doch zum Arzt!', 'Why don’t you go to the doctor?', 'Allez donc chez le médecin !'),
        g('Er hat Fieber. Gib ihm einen Tee!', 'He has a fever. Give him a tea!', 'Il a de la fièvre. Donne-lui un thé !'),
        g('Sie hat Kopfschmerzen. Gib ihr doch eine Tablette!', 'She has a headache. Why not give her a tablet?', 'Elle a mal à la tête. Donne-lui donc un comprimé !'),
        g('Bring mir bitte das Geschirr!', 'Please bring me the dishes!', 'Apporte-moi la vaisselle, s’il te plaît !'),
        g('Sie soll viel schlafen.', 'She should sleep a lot.', 'Elle doit beaucoup dormir.'),
        g('Ihr sollt leise sein.', 'You (pl.) should be quiet.', 'Vous devez être silencieux.'),
      ],
      mistakes: [
        { wrong: 'Gib er einen Tee!', right: 'Gib ihm einen Tee!', why: 'To him is ihm, not er.', whyFr: 'À lui se dit ihm, pas er.' },
        { wrong: 'Du sollst schlafen mehr.', right: 'Du sollst mehr schlafen.', why: 'The infinitive goes to the very end.', whyFr: 'L’infinitif va tout à la fin.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e7', prompt: 'Du ___ mehr Wasser trinken. (sollen)', promptFr: 'Du ___ mehr Wasser trinken. (sollen)', answer: 'sollst', hint: 'du → ends in -st', hintFr: 'du → se termine par -st' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e8', prompt: 'Gehen Sie ___ zum Arzt! (makes the advice friendlier)', promptFr: 'Gehen Sie ___ zum Arzt ! (rend le conseil plus aimable)', answer: 'doch', hint: 'The little particle "why don’t you…"', hintFr: 'La petite particule « pourquoi ne pas… »' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e9', prompt: 'Tom hat Fieber. Gib ___ einen Tee! (to him)', promptFr: 'Tom a de la fièvre. Gib ___ einen Tee ! (à lui)', answer: 'ihm', hint: 'Tom is "he" — dative: ihm.', hintFr: 'Tom est « il » — datif : ihm.' } },

    { kind: 'pronunciation', focus: 'Commands are short and punchy: stress the verb', focusFr: 'Les ordres sont courts et nets : accentue le verbe', items: [{ id: 'l17-komm-pron', german: 'Komm!', english: 'Come!', french: 'Viens !', gender: null, syllables: ['KOMM'], pronunciation: 'kohm', example: { de: 'Komm her!', en: 'Come here!', fr: 'Viens ici !' } }, { id: 'l17-seid-pron', german: 'Seid!', english: 'Be! (to several people)', french: 'Soyez !', gender: null, syllables: ['SEID'], pronunciation: 'zite', example: { de: 'Seid leise!', en: 'Be quiet!', fr: 'Soyez silencieux !' } }, { id: 'l17-nimm-pron', german: 'Nimm!', english: 'Take!', french: 'Prends !', gender: null, syllables: ['NIMM'], pronunciation: 'nim', example: { de: 'Nimm einen Tee!', en: 'Have a tea!', fr: 'Prends un thé !' } }, { id: 'l17-trinkensie-pron', german: 'Trinken Sie!', english: 'Drink! (formal)', french: 'Buvez !', gender: null, syllables: ['TRIN', 'ken', 'Sie'], pronunciation: 'TRING-ken zee', example: { de: 'Trinken Sie Wasser!', en: 'Drink water!', fr: 'Buvez de l’eau !' } }, { id: 'l17-bleibensie-pron', german: 'Bleiben Sie!', english: 'Stay! (formal)', french: 'Restez !', gender: null, syllables: ['BLEI', 'ben', 'Sie'], pronunciation: 'BLY-ben zee', example: { de: 'Bleiben Sie im Bett!', en: 'Stay in bed!', fr: 'Restez au lit !' } }] },

    // ───────────── Mixed review ─────────────
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l17-e10', tokens: ['auf', 'Zimmer', 'Räum', 'dein'], answer: ['Räum', 'dein', 'Zimmer', 'auf'], hint: 'Separable verb: "auf" goes to the end.', hintFr: 'Verbe séparable : « auf » va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l17-e11', prompt: 'Listen. Which chore is it?', promptFr: 'Écoute. De quelle tâche s’agit-il ?', audio: { ttsText: 'Bring bitte den Müll raus!' }, options: ['Take out the rubbish', 'Wash the dishes', 'Tidy the room'], optionsFr: ['Sortir la poubelle', 'Faire la vaisselle', 'Ranger la chambre'], answer: 0, hint: 'Listen for "Müll".', hintFr: 'Écoute « Müll ».' } },

    { kind: 'wrapup',
      summary: 'You can now give polite commands with **Sie**, direct ones with **du** and **ihr** (**Komm! Kommt! Sei! Seid!**), and friendlier advice with **sollen** and **doch**. 🎉',
      summaryFr: 'Tu sais maintenant donner des ordres polis avec **Sie**, des ordres directs avec **du** et **ihr** (**Komm ! Kommt ! Sei ! Seid !**), et des conseils plus aimables avec **sollen** et **doch**. 🎉',
      card: { title: 'Lesson 20 on one page', titleFr: 'La leçon 20 en une page', sections: [
        { heading: 'Sie', headingFr: 'Sie', rows: [g('Trinken Sie viel Wasser!', 'verb first, then Sie', 'verbe d’abord, puis Sie'), g('Stehen Sie früh auf!', 'prefix at the end', 'préfixe à la fin'), g('Seien Sie leise!', 'sein is irregular', 'sein est irrégulier')] },
        { heading: 'du and ihr', headingFr: 'du et ihr', rows: [g('Komm! / Kommt!', 'du / ihr', 'du / ihr'), g('Nimm! Gib! Lies!', 'e → i stays', 'e → i reste'), g('Sei! / Seid!', 'sein', 'sein')] },
        { heading: 'Softer advice', headingFr: 'Conseils plus doux', rows: [g('Du sollst mehr schlafen.', 'sollen + infinitive', 'sollen + infinitif'), g('Gehen Sie doch zum Arzt!', 'doch = friendlier', 'doch = plus aimable'), g('Gib ihm / ihr einen Tee!', 'to him / to her', 'à lui / à elle')] },
      ] } },
  ],
};

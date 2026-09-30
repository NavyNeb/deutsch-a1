import type { Lesson } from '../types';

export const lektion17: Lesson = {
  id: 'l17', level: 'A1', module: 4, number: 16,
  title: { de: 'Imperativ: Tipps und Anweisungen', en: 'Imperative: tips and instructions', fr: 'L’impératif : conseils et consignes' },
  theme: 'Giving tips, advice and instructions with the imperative',
  themeFr: 'Donner des conseils et des consignes avec l’impératif',
  goals: ['Give polite commands with Sie', 'Give commands to friends and family with du and ihr', 'Use the irregular imperative sei / seid', 'Give advice with "sollen" and the particle "doch"', 'Use "ihm / ihr" in short commands'],
  goalsFr: ['Donner des ordres polis avec Sie', 'Donner des consignes à un ami ou à la famille avec du et ihr', 'Utiliser l’impératif irrégulier sei / seid', 'Donner des conseils avec « sollen » et la particule « doch »', 'Utiliser « ihm / ihr » dans des ordres courts'],
  steps: [
    { kind: 'intro', title: 'Tipps für jeden Tag 💡', titleFr: 'Des conseils pour chaque jour 💡',
      scene: 'Your flatmate has a cold, the pharmacist has advice, and the kitchen needs tidying. Everybody tells everybody what to do!', sceneFr: 'Ton colocataire est enrhumé, le pharmacien a des conseils et la cuisine doit être rangée. Tout le monde dit à tout le monde quoi faire !',
      goals: ['Say "Trinken Sie viel Wasser!" to a stranger', 'Say "Komm her!" to a friend and "Kommt mit!" to a group', 'Use "sei" and "seid"', 'Give advice: "Du sollst mehr schlafen."'],
      goalsFr: ['Dire « Trinken Sie viel Wasser ! » à un inconnu', 'Dire « Komm her ! » à un ami et « Kommt mit ! » à un groupe', 'Utiliser « sei » et « seid »', 'Donner un conseil : « Du sollst mehr schlafen. »'] },

    { kind: 'vocab', item: { id: 'l17-tipp', german: 'der Tipp', english: 'the tip / piece of advice', french: 'le conseil', gender: 'der', syllables: ['TIPP'], pronunciation: 'dair tip', example: { de: 'Hier ist ein guter Tipp.', en: 'Here is a good tip.', fr: 'Voici un bon conseil.' } } },
    { kind: 'vocab', item: { id: 'l17-erkaeltung', german: 'die Erkältung', english: 'the cold (illness)', french: 'le rhume', gender: 'die', syllables: ['er', 'KÄL', 'tung'], pronunciation: 'dee air-KELL-toong', example: { de: 'Ich habe eine Erkältung.', en: 'I have a cold.', fr: 'J’ai un rhume.' } } },
    { kind: 'vocab', item: { id: 'l17-fieber', german: 'das Fieber', english: 'the fever', french: 'la fièvre', gender: 'das', syllables: ['FIE', 'ber'], pronunciation: 'dahs FEE-ber', example: { de: 'Mein Sohn hat Fieber.', en: 'My son has a fever.', fr: 'Mon fils a de la fièvre.' } } },
    { kind: 'vocab', item: { id: 'l17-husten', german: 'der Husten', english: 'the cough', french: 'la toux', gender: 'der', syllables: ['HUS', 'ten'], pronunciation: 'dair HOOS-ten', example: { de: 'Ich habe Husten.', en: 'I have a cough.', fr: 'J’ai de la toux.' } } },
    { kind: 'vocab', item: { id: 'l17-kopfschmerzen', german: 'die Kopfschmerzen (Pl.)', english: 'the headache', french: 'le mal de tête', gender: 'die', syllables: ['KOPF', 'schmer', 'zen'], pronunciation: 'dee KOPF-shmair-tsen', example: { de: 'Sie hat Kopfschmerzen.', en: 'She has a headache.', fr: 'Elle a mal à la tête.' } } },
    { kind: 'vocab', item: { id: 'l17-tablette', german: 'die Tablette', english: 'the tablet / pill', french: 'le comprimé', gender: 'die', syllables: ['ta', 'BLET', 'te'], pronunciation: 'dee tah-BLET-teh', example: { de: 'Nehmen Sie eine Tablette.', en: 'Take a tablet.', fr: 'Prenez un comprimé.' } } },
    { kind: 'vocab', item: { id: 'l17-apotheke', german: 'die Apotheke', english: 'the pharmacy', french: 'la pharmacie', gender: 'die', syllables: ['a', 'po', 'THE', 'ke'], pronunciation: 'dee ah-poh-TAY-keh', example: { de: 'Gehen Sie in die Apotheke.', en: 'Go to the pharmacy.', fr: 'Allez à la pharmacie.' } } },
    { kind: 'vocab', item: { id: 'l17-tee', german: 'der Tee', english: 'the tea', french: 'le thé', gender: 'der', syllables: ['TEE'], pronunciation: 'dair tay', example: { de: 'Trink bitte einen Tee.', en: 'Please drink a tea.', fr: 'Bois un thé, s’il te plaît.' } } },
    { kind: 'vocab', item: { id: 'l17-aufraeumen', german: 'aufräumen', english: 'to tidy up', french: 'ranger', gender: null, syllables: ['AUF', 'räu', 'men'], pronunciation: 'OWF-roy-men', example: { de: 'Räum bitte dein Zimmer auf!', en: 'Please tidy your room!', fr: 'Range ta chambre, s’il te plaît !' } } },
    { kind: 'vocab', item: { id: 'l17-muell', german: 'der Müll', english: 'the rubbish / trash', french: 'les ordures / la poubelle', gender: 'der', syllables: ['MÜLL'], pronunciation: 'dair mewl', example: { de: 'Bring bitte den Müll raus!', en: 'Please take out the rubbish!', fr: 'Sors la poubelle, s’il te plaît !' } } },
    { kind: 'vocab', item: { id: 'l17-geschirr', german: 'das Geschirr', english: 'the dishes', french: 'la vaisselle', gender: 'das', syllables: ['ge', 'SCHIRR'], pronunciation: 'dahs geh-SHEER', example: { de: 'Spült bitte das Geschirr!', en: 'Please wash the dishes!', fr: 'Faites la vaisselle, s’il vous plaît !' } } },
    { kind: 'vocab', item: { id: 'l17-sofort', german: 'sofort', english: 'right away', french: 'tout de suite', gender: null, syllables: ['so', 'FORT'], pronunciation: 'zo-FORT', example: { de: 'Komm sofort her!', en: 'Come here right now!', fr: 'Viens ici tout de suite !' } } },
    { kind: 'vocab', item: { id: 'l17-doch', german: 'doch (Partikel)', english: 'do / why don’t you (softens a command)', french: 'donc (adoucit un conseil)', gender: null, syllables: ['DOCH'], pronunciation: 'dokh', example: { de: 'Komm doch mit!', en: 'Do come along!', fr: 'Viens donc avec nous !' } } },
    { kind: 'vocab', item: { id: 'l17-sollen', german: 'sollen', english: 'should / to be supposed to', french: 'devoir (conseil, consigne)', gender: null, syllables: ['SOL', 'len'], pronunciation: 'ZOL-len', example: { de: 'Du sollst mehr schlafen.', en: 'You should sleep more.', fr: 'Tu devrais dormir plus.' } } },

    { kind: 'grammar', note: {
      id: 'l17-imperativ-sie', title: 'Polite commands: the Sie-imperative', titleFr: 'Les ordres polis : l’impératif avec Sie',
      explanationMd: 'To give a command or a tip to someone you call **Sie**, put the **verb first** and **Sie** right after it:\n\n- trinken → **Trinken Sie** viel Wasser!\n- gehen → **Gehen Sie** zum Arzt!\n- nehmen → **Nehmen Sie** eine Tablette!\n\nWith a **separable verb**, the prefix goes to the end: aufstehen → **Stehen Sie** früh **auf**!\n\nThe only irregular verb is **sein**: **Seien Sie** bitte leise!\n\nAdd **bitte** to be extra polite. In writing, use "!" after a command.',
      explanationMdFr: 'Pour donner un ordre ou un conseil à quelqu’un que tu vouvoies (**Sie**), place le **verbe en premier** et **Sie** juste après :\n\n- trinken → **Trinken Sie** viel Wasser !\n- gehen → **Gehen Sie** zum Arzt !\n- nehmen → **Nehmen Sie** eine Tablette !\n\nAvec un **verbe séparable**, le préfixe passe à la fin : aufstehen → **Stehen Sie** früh **auf** !\n\nLe seul verbe irrégulier est **sein** : **Seien Sie** bitte leise !\n\nAjoute **bitte** pour être encore plus poli. À l’écrit, on met « ! » après un ordre.',
      examples: [
        { de: 'Trinken Sie viel Wasser!', en: 'Drink a lot of water!', fr: 'Buvez beaucoup d’eau !' },
        { de: 'Gehen Sie in die Apotheke!', en: 'Go to the pharmacy!', fr: 'Allez à la pharmacie !' },
        { de: 'Rufen Sie mich bitte morgen an!', en: 'Please call me tomorrow!', fr: 'Appelez-moi demain, s’il vous plaît !' },
        { de: 'Seien Sie bitte leise!', en: 'Please be quiet!', fr: 'Soyez silencieux, s’il vous plaît !' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l17-imperativ-du-ihr', title: 'Commands with du and ihr', titleFr: 'Les ordres avec du et ihr',
      explanationMd: 'Among friends and family you drop the pronoun too.\n\n**du**: take the du-form and **remove -st** (and "du"):\n- du kommst → **Komm!**\n- du trinkst → **Trink!**\n- Verbs with e → i/ie keep the change: du nimmst → **Nimm!**, du gibst → **Gib!**, du liest → **Lies!**\n- a → ä does **not** appear: du schläfst → **Schlaf!**, du fährst → **Fahr!**\n\n**ihr**: take the ihr-form without "ihr":\n- ihr kommt → **Kommt!**\n- ihr trinkt → **Trinkt!**\n\n**sein** is irregular: du → **Sei!** · ihr → **Seid!**\n\nSeparable verbs again split: **Komm** her! · **Kommt** mit!',
      explanationMdFr: 'Entre amis et en famille, on supprime aussi le pronom.\n\n**du** : prends la forme en du et **enlève -st** (et « du ») :\n- du kommst → **Komm !**\n- du trinkst → **Trink !**\n- Les verbes avec e → i/ie gardent le changement : du nimmst → **Nimm !**, du gibst → **Gib !**, du liest → **Lies !**\n- a → ä **n’apparaît pas** : du schläfst → **Schlaf !**, du fährst → **Fahr !**\n\n**ihr** : prends la forme en ihr sans « ihr » :\n- ihr kommt → **Kommt !**\n- ihr trinkt → **Trinkt !**\n\n**sein** est irrégulier : du → **Sei !** · ihr → **Seid !**\n\nLes verbes séparables se séparent aussi : **Komm** her ! · **Kommt** mit !',
      examples: [
        { de: 'Komm her, Tom!', en: 'Come here, Tom!', fr: 'Viens ici, Tom !' },
        { de: 'Kommt bitte mit!', en: 'Please come along! (to several people)', fr: 'Venez avec nous, s’il vous plaît ! (à plusieurs)' },
        { de: 'Nimm einen Tee und schlaf viel!', en: 'Have a tea and sleep a lot!', fr: 'Prends un thé et dors beaucoup !' },
        { de: 'Seid bitte leise, Kinder!', en: 'Please be quiet, children!', fr: 'Soyez silencieux, les enfants !' },
      ] } },

    { kind: 'grammar', note: {
      id: 'l17-sollen-doch', title: '"sollen", "doch" and "ihm / ihr"', titleFr: '« sollen », « doch » et « ihm / ihr »',
      explanationMd: '**sollen** (should / be supposed to) gives advice or passes on an instruction. The second verb goes to the **end**:\n\n- ich **soll** · du **sollst** · er/sie/es **soll**\n- wir **sollen** · ihr **sollt** · sie/Sie **sollen**\n\nDu **sollst** mehr schlafen. — Sie **sollen** viel Tee trinken.\n\nThe little word **doch** makes a tip friendlier, like "why don’t you…": Gehen Sie **doch** zum Arzt!\n\nIn commands you can also add a person. **ihm** = (to) him, **ihr** = (to) her, **mir** = (to) me:\n- Gib **ihm** einen Tee!\n- Gib **ihr** eine Tablette!\n- Bring **mir** bitte das Geschirr!',
      explanationMdFr: '**sollen** (devoir, être censé) sert à conseiller ou à transmettre une consigne. Le deuxième verbe va à la **fin** :\n\n- ich **soll** · du **sollst** · er/sie/es **soll**\n- wir **sollen** · ihr **sollt** · sie/Sie **sollen**\n\nDu **sollst** mehr schlafen. — Sie **sollen** viel Tee trinken.\n\nLe petit mot **doch** rend un conseil plus aimable, comme « pourquoi ne pas… » : Gehen Sie **doch** zum Arzt !\n\nDans un ordre, on peut aussi ajouter une personne. **ihm** = (à) lui, **ihr** = (à) elle, **mir** = (à) moi :\n- Gib **ihm** einen Tee !\n- Gib **ihr** eine Tablette !\n- Bring **mir** bitte das Geschirr !',
      examples: [
        { de: 'Du sollst mehr Wasser trinken.', en: 'You should drink more water.', fr: 'Tu devrais boire plus d’eau.' },
        { de: 'Gehen Sie doch zum Arzt!', en: 'Why don’t you go to the doctor?', fr: 'Allez donc chez le médecin !' },
        { de: 'Er hat Fieber. Gib ihm einen Tee!', en: 'He has a fever. Give him a tea!', fr: 'Il a de la fièvre. Donne-lui un thé !' },
        { de: 'Sie hat Kopfschmerzen. Gib ihr doch eine Tablette!', en: 'She has a headache. Why not give her a tablet?', fr: 'Elle a mal à la tête. Donne-lui donc un comprimé !' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'l17-e1', prompt: 'You say to your friend Lea: "Come here!" Which is correct?', promptFr: 'Tu dis à ton amie Lea : « Viens ici ! » Laquelle est correcte ?', options: ['Kommst her!', 'Komm her!', 'Kommt her!'], answer: 1, explain: 'For du, use the stem without -st: Komm her!', explainFr: 'Pour du, on utilise le radical sans -st : Komm her !', hint: 'One person, informal: drop -st.', hintFr: 'Une personne, tutoiement : enlève -st.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e2', prompt: 'Bitte ___ leise, Lea! (sei / seid)', promptFr: 'Bitte ___ leise, Lea ! (sei / seid)', answer: 'sei', hint: 'Lea is one person — du-form of sein.', hintFr: 'Lea est une seule personne — forme du de sein.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e3', prompt: 'Kinder, ___ bitte leise! (sei / seid)', promptFr: 'Les enfants, ___ bitte leise ! (sei / seid)', answer: 'seid', hint: 'Several people — ihr-form of sein.', hintFr: 'Plusieurs personnes — forme ihr de sein.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l17-e4', tokens: ['Sie', 'viel', 'Trinken', 'Tee'], answer: ['Trinken', 'Sie', 'viel', 'Tee'], hint: 'Verb first, then "Sie".', hintFr: 'Verbe en premier, puis « Sie ».' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'l17-e5', pairs: [ { de: 'Nimm!', en: 'Take! (to a friend)', fr: 'Prends ! (à un ami)' }, { de: 'Nehmt!', en: 'Take! (to several friends)', fr: 'Prenez ! (à plusieurs amis)' }, { de: 'Nehmen Sie!', en: 'Take! (formal)', fr: 'Prenez ! (vouvoiement)' } ], hint: 'du → no ending, ihr → -t, Sie → -en Sie.', hintFr: 'du → sans terminaison, ihr → -t, Sie → -en Sie.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l17-e6', prompt: 'Listen. What does the pharmacist advise?', promptFr: 'Écoute. Que conseille le pharmacien ?', audio: { ttsText: 'Trinken Sie viel Tee und bleiben Sie im Bett.' }, options: ['Drink tea and stay in bed', 'Go to work and drink coffee', 'Take a tablet and go outside'], optionsFr: ['Boire du thé et rester au lit', 'Aller travailler et boire du café', 'Prendre un comprimé et sortir'], answer: 0, hint: 'Listen for "Tee" and "Bett".', hintFr: 'Écoute « Tee » et « Bett ».' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e7', prompt: 'Du ___ mehr Wasser trinken. (sollen)', promptFr: 'Du ___ mehr Wasser trinken. (sollen)', answer: 'sollst', hint: 'du → ends in -st', hintFr: 'du → se termine par -st' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e8', prompt: 'Gehen Sie ___ zum Arzt! (makes the advice friendlier)', promptFr: 'Gehen Sie ___ zum Arzt ! (rend le conseil plus aimable)', answer: 'doch', hint: 'The little particle "why don’t you…"', hintFr: 'La petite particule « pourquoi ne pas… »' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'l17-e9', prompt: 'Tom hat Fieber. Gib ___ einen Tee! (to him)', promptFr: 'Tom a de la fièvre. Gib ___ einen Tee ! (à lui)', answer: 'ihm', hint: 'Tom is "he" — dative: ihm.', hintFr: 'Tom est « il » — datif : ihm.' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'l17-e10', tokens: ['auf', 'Zimmer', 'Räum', 'dein'], answer: ['Räum', 'dein', 'Zimmer', 'auf'], hint: 'Separable verb: "auf" goes to the end.', hintFr: 'Verbe séparable : « auf » va à la fin.' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'l17-e11', prompt: 'Listen. Which chore is it?', promptFr: 'Écoute. De quelle tâche s’agit-il ?', audio: { ttsText: 'Bring bitte den Müll raus!' }, options: ['Take out the rubbish', 'Wash the dishes', 'Tidy the room'], optionsFr: ['Sortir la poubelle', 'Faire la vaisselle', 'Ranger la chambre'], answer: 0, hint: 'Listen for "Müll".', hintFr: 'Écoute « Müll ».' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'l17-e12', word: 'Apotheke', answer: 'die', hint: 'Many words ending in -e are feminine.', hintFr: 'Beaucoup de mots en -e sont féminins.' } },

    { kind: 'pronunciation', focus: 'Commands are short and punchy: stress the verb', focusFr: 'Les ordres sont courts et nets : accentue le verbe', items: [
      { id: 'l17-komm-pron', german: 'Komm!', english: 'Come!', french: 'Viens !', gender: null, syllables: ['KOMM'], pronunciation: 'kohm', example: { de: 'Komm her!', en: 'Come here!', fr: 'Viens ici !' } },
      { id: 'l17-seid-pron', german: 'Seid!', english: 'Be! (to several people)', french: 'Soyez !', gender: null, syllables: ['SEID'], pronunciation: 'zite', example: { de: 'Seid leise!', en: 'Be quiet!', fr: 'Soyez silencieux !' } },
      { id: 'l17-nimm-pron', german: 'Nimm!', english: 'Take!', french: 'Prends !', gender: null, syllables: ['NIMM'], pronunciation: 'nim', example: { de: 'Nimm einen Tee!', en: 'Have a tea!', fr: 'Prends un thé !' } },
      { id: 'l17-trinkensie-pron', german: 'Trinken Sie!', english: 'Drink! (formal)', french: 'Buvez !', gender: null, syllables: ['TRIN', 'ken', 'Sie'], pronunciation: 'TRING-ken zee', example: { de: 'Trinken Sie Wasser!', en: 'Drink water!', fr: 'Buvez de l’eau !' } },
      { id: 'l17-bleibensie-pron', german: 'Bleiben Sie!', english: 'Stay! (formal)', french: 'Restez !', gender: null, syllables: ['BLEI', 'ben', 'Sie'], pronunciation: 'BLY-ben zee', example: { de: 'Bleiben Sie im Bett!', en: 'Stay in bed!', fr: 'Restez au lit !' } },
    ] },

    { kind: 'wrapup', summary: 'You can now give tips and instructions: **Trinken Sie …!** (Sie), **Komm …! / Nimm …!** (du), **Kommt …!** (ihr) and the irregular **sei / seid / Seien Sie**. Use **sollen** for advice, **doch** to sound friendly, and short pronouns like **ihm / ihr** (Gib ihm einen Tee!). 🎉',
      summaryFr: 'Tu sais maintenant donner des conseils et des consignes : **Trinken Sie … !** (Sie), **Komm … ! / Nimm … !** (du), **Kommt … !** (ihr) et l’irrégulier **sei / seid / Seien Sie**. Utilise **sollen** pour conseiller, **doch** pour rester aimable, et de petits pronoms comme **ihm / ihr** (Gib ihm einen Tee !). 🎉' },
  ],
};

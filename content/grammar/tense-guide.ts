import { z } from 'zod';
import type { TenseId } from '@/lib/conjugate';

const Bilingual = z.object({ en: z.string().min(1), fr: z.string().min(1) });

export const SPECIAL_SLUGS = ['perfekt', 'praeteritum', 'konjunktiv-2', 'passiv', 'modalverben', 'indirekte-rede'] as const;

export const TenseGuideEntrySchema = z.object({
  how: Bilingual,
  when: Bilingual,
  examples: z.array(z.object({ de: z.string().min(1), en: z.string().min(1), fr: z.string().min(1) })).length(2),
  specialSlug: z.enum(SPECIAL_SLUGS).optional(),
});
export type TenseGuideEntry = z.infer<typeof TenseGuideEntrySchema>;

export const TENSE_GUIDE: Record<TenseId, TenseGuideEntry> = {
  praesens: {
    how: {
      en: 'Verb stem + personal ending: ich mache, du machst, er macht. Many strong verbs change their vowel for du and er/sie/es (fahren → du fährst).',
      fr: 'Radical du verbe + terminaison personnelle : ich mache, du machst, er macht. Beaucoup de verbes forts changent de voyelle à la 2e et 3e personne du singulier (fahren → du fährst).',
    },
    when: {
      en: 'The everyday workhorse. It describes what is true now, what happens regularly, and, with a time word, what will happen soon: "Morgen fahre ich nach Berlin." German has no separate "I am doing" form.',
      fr: 'Le temps du quotidien. Il exprime ce qui est vrai maintenant, ce qui se répète et, avec un mot de temps, ce qui va arriver bientôt : « Morgen fahre ich nach Berlin. » L’allemand n’a pas de forme distincte pour « je suis en train de faire ».',
    },
    examples: [
      { de: 'Ich lerne jeden Tag Deutsch.', en: 'I learn German every day.', fr: 'J’apprends l’allemand tous les jours.' },
      { de: 'Nächste Woche fliege ich nach Wien.', en: 'Next week I am flying to Vienna.', fr: 'La semaine prochaine, je prends l’avion pour Vienne.' },
    ],
  },
  praeteritum: {
    how: {
      en: 'Weak verbs add -te to the stem (machte). Strong verbs change the stem vowel (ging, fuhr) and take no ending for ich and er/sie/es.',
      fr: 'Les verbes faibles ajoutent -te au radical (machte). Les verbes forts changent la voyelle du radical (ging, fuhr) et n’ont pas de terminaison à ich et er/sie/es.',
    },
    when: {
      en: 'The written past: novels, news reports, stories. In speech it is mostly limited to sein, haben, the modal verbs and a few common verbs (war, hatte, konnte, ging).',
      fr: 'Le passé de l’écrit : romans, articles, récits. À l’oral, il se limite surtout à sein, haben, aux verbes de modalité et à quelques verbes courants (war, hatte, konnte, ging).',
    },
    examples: [
      { de: 'Als Kind wohnte ich in einem kleinen Dorf.', en: 'As a child I lived in a small village.', fr: 'Enfant, j’habitais dans un petit village.' },
      { de: 'Gestern war ich müde, deshalb blieb ich zu Hause.', en: 'Yesterday I was tired, so I stayed at home.', fr: 'Hier, j’étais fatigué, alors je suis resté à la maison.' },
    ],
    specialSlug: 'praeteritum',
  },
  perfekt: {
    how: {
      en: 'haben or sein in the present + the past participle at the end of the clause: ich habe gemacht, ich bin gegangen. Verbs of movement and change of state usually take sein.',
      fr: 'haben ou sein au présent + le participe passé en fin de proposition : ich habe gemacht, ich bin gegangen. Les verbes de mouvement et de changement d’état se conjuguent en général avec sein.',
    },
    when: {
      en: 'The spoken past. Use it in conversation, messages and emails to talk about anything finished: "Ich habe gestern Pizza gegessen." It also links a past event to the present.',
      fr: 'Le passé de l’oral. On l’emploie dans la conversation, les messages et les e-mails pour tout ce qui est terminé : « Ich habe gestern Pizza gegessen. » Il relie aussi un événement passé au présent.',
    },
    examples: [
      { de: 'Hast du schon gegessen?', en: 'Have you eaten yet?', fr: 'Tu as déjà mangé ?' },
      { de: 'Wir sind gestern nach Hause gefahren.', en: 'We drove home yesterday.', fr: 'Nous sommes rentrés hier en voiture.' },
    ],
    specialSlug: 'perfekt',
  },
  plusquamperfekt: {
    how: {
      en: 'hatte or war + the past participle: ich hatte gemacht, ich war gegangen. It is the Perfekt with the auxiliary moved into the past.',
      fr: 'hatte ou war + le participe passé : ich hatte gemacht, ich war gegangen. C’est le Perfekt avec l’auxiliaire mis au passé.',
    },
    when: {
      en: 'The "past of the past": an action that was already finished before another past action. Often introduced by nachdem, bevor or als: "Nachdem ich gegessen hatte, ging ich spazieren."',
      fr: 'Le « passé du passé » : une action déjà terminée avant une autre action passée. Souvent introduit par nachdem, bevor ou als : « Nachdem ich gegessen hatte, ging ich spazieren. »',
    },
    examples: [
      { de: 'Ich hatte den Zug schon verpasst, als sie anrief.', en: 'I had already missed the train when she called.', fr: 'J’avais déjà raté le train quand elle a appelé.' },
      { de: 'Nachdem wir angekommen waren, riefen wir unsere Eltern an.', en: 'After we had arrived, we called our parents.', fr: 'Après être arrivés, nous avons appelé nos parents.' },
    ],
  },
  futur1: {
    how: {
      en: 'werden in the present + the infinitive at the end: ich werde machen, du wirst gehen.',
      fr: 'werden au présent + l’infinitif en fin de proposition : ich werde machen, du wirst gehen.',
    },
    when: {
      en: 'Predictions, promises, firm intentions and guesses about the present ("Er wird zu Hause sein"). For plans, the Präsens with a time word is more common: "Morgen gehe ich ins Kino."',
      fr: 'Prévisions, promesses, intentions fermes et suppositions sur le présent (« Er wird zu Hause sein »). Pour les projets, le Präsens avec un mot de temps est plus courant : « Morgen gehe ich ins Kino. »',
    },
    examples: [
      { de: 'Es wird morgen regnen.', en: 'It will rain tomorrow.', fr: 'Il pleuvra demain.' },
      { de: 'Ich werde dich nie vergessen.', en: 'I will never forget you.', fr: 'Je ne t’oublierai jamais.' },
    ],
  },
  futur2: {
    how: {
      en: 'werden in the present + past participle + haben or sein: ich werde gemacht haben, er wird gegangen sein.',
      fr: 'werden au présent + participe passé + haben ou sein : ich werde gemacht haben, er wird gegangen sein.',
    },
    when: {
      en: 'Rare. It expresses an action that will be completed by a point in the future, or, much more often, an assumption about something already past: "Er wird wohl schon abgereist sein."',
      fr: 'Rare. Il exprime une action qui sera terminée à un moment futur ou, bien plus souvent, une supposition sur le passé : « Er wird wohl schon abgereist sein. »',
    },
    examples: [
      { de: 'Bis Freitag werde ich das Buch gelesen haben.', en: 'By Friday I will have read the book.', fr: 'D’ici vendredi, j’aurai lu le livre.' },
      { de: 'Sie wird den Bus verpasst haben.', en: 'She must have missed the bus.', fr: 'Elle aura raté le bus.' },
    ],
  },
  konj1: {
    how: {
      en: 'Infinitive stem + -e, -est, -e, -en, -et, -en: er mache, sie gehe. Only sein is irregular (er sei).',
      fr: 'Radical de l’infinitif + -e, -est, -e, -en, -et, -en : er mache, sie gehe. Seul sein est irrégulier (er sei).',
    },
    when: {
      en: 'Reported speech, mostly in the news and in writing: "Der Minister sagte, er sei krank." When the Konjunktiv I looks like the normal Präsens, Konjunktiv II takes over.',
      fr: 'Le discours rapporté, surtout dans la presse et à l’écrit : « Der Minister sagte, er sei krank. » Quand le Konjunktiv I est identique au Präsens, on emploie le Konjunktiv II à la place.',
    },
    examples: [
      { de: 'Sie sagt, sie habe keine Zeit.', en: 'She says she has no time.', fr: 'Elle dit qu’elle n’a pas le temps.' },
      { de: 'Er behauptet, er sei zu Hause gewesen.', en: 'He claims he was at home.', fr: 'Il prétend avoir été chez lui.' },
    ],
    specialSlug: 'indirekte-rede',
  },
  konj2: {
    how: {
      en: 'Strong verbs: Präteritum stem + umlaut + -e (käme, wäre, hätte). Weak verbs look like the Präteritum (machte). In everyday German most verbs use würde + infinitive instead.',
      fr: 'Verbes forts : radical du Präteritum + tréma + -e (käme, wäre, hätte). Les verbes faibles ressemblent au Präteritum (machte). Dans la langue courante, la plupart des verbes utilisent würde + infinitif.',
    },
    when: {
      en: 'Polite requests ("Könnten Sie mir helfen?"), wishes, advice, and unreal or hypothetical situations: "Wenn ich Zeit hätte, würde ich reisen."',
      fr: 'Demandes polies (« Könnten Sie mir helfen ? »), souhaits, conseils et situations irréelles ou hypothétiques : « Wenn ich Zeit hätte, würde ich reisen. »',
    },
    examples: [
      { de: 'Könnten Sie mir bitte helfen?', en: 'Could you please help me?', fr: 'Pourriez-vous m’aider, s’il vous plaît ?' },
      { de: 'Wenn ich reich wäre, würde ich ein Haus kaufen.', en: 'If I were rich, I would buy a house.', fr: 'Si j’étais riche, j’achèterais une maison.' },
    ],
    specialSlug: 'konjunktiv-2',
  },
  imperativ: {
    how: {
      en: 'du: stem (geh!, mach!); strong e → i verbs keep the change (gib!, lies!). ihr: same as the ihr form (geht!). Sie: infinitive + Sie (gehen Sie!). Separable prefixes go to the end (ruf an!).',
      fr: 'du : le radical (geh !, mach !) ; les verbes forts e → i gardent le changement (gib !, lies !). ihr : comme la forme en ihr (geht !). Sie : infinitif + Sie (gehen Sie !). Les préfixes séparables passent à la fin (ruf an !).',
    },
    when: {
      en: 'Commands, instructions, invitations and advice. Add bitte or doch to soften: "Komm doch herein!" Use du for a friend, ihr for several friends, Sie for formal address.',
      fr: 'Ordres, consignes, invitations et conseils. Ajoutez bitte ou doch pour adoucir : « Komm doch herein ! » Utilisez du pour un ami, ihr pour plusieurs amis, Sie pour le vouvoiement.',
    },
    examples: [
      { de: 'Mach bitte das Fenster zu!', en: 'Please close the window!', fr: 'Ferme la fenêtre, s’il te plaît !' },
      { de: 'Nehmen Sie bitte Platz.', en: 'Please take a seat.', fr: 'Asseyez-vous, je vous prie.' },
    ],
  },
  passiv: {
    how: {
      en: 'werden + past participle: das Haus wird gebaut. Past: wurde gebaut. Perfect: ist gebaut worden. The doer, if named, follows von (+ dative).',
      fr: 'werden + participe passé : das Haus wird gebaut. Passé : wurde gebaut. Parfait : ist gebaut worden. L’agent, s’il est cité, est introduit par von (+ datif).',
    },
    when: {
      en: 'When the action matters more than who does it: instructions, news, rules, processes. "Hier wird Deutsch gesprochen." Only verbs with an accusative object normally have a personal passive.',
      fr: 'Quand l’action compte plus que son auteur : consignes, actualités, règlements, processus. « Hier wird Deutsch gesprochen. » Seuls les verbes avec un complément à l’accusatif ont normalement un passif personnel.',
    },
    examples: [
      { de: 'Das Brot wird jeden Morgen gebacken.', en: 'The bread is baked every morning.', fr: 'Le pain est cuit tous les matins.' },
      { de: 'Der Brief wurde gestern geschickt.', en: 'The letter was sent yesterday.', fr: 'La lettre a été envoyée hier.' },
    ],
    specialSlug: 'passiv',
  },
};

// Exam phrases (Redemittel) for the Speaking trainer. Plain .mjs so scripts/prepare-audio.mjs can read it.
// fn: what the phrase does; level: 'B1' | 'B2'; gap: the word to hide in the fill-the-gap drill.

export const PHRASE_FUNCTIONS = [
  { id: 'opinion', en: 'Give your opinion', fr: 'Donner son avis' },
  { id: 'agree', en: 'Agree', fr: 'Être d’accord' },
  { id: 'disagree', en: 'Disagree politely', fr: 'Ne pas être d’accord poliment' },
  { id: 'suggest', en: 'Make a suggestion', fr: 'Faire une proposition' },
  { id: 'react', en: 'React to a suggestion', fr: 'Réagir à une proposition' },
  { id: 'askback', en: 'Ask your partner', fr: 'Relancer son partenaire' },
  { id: 'time', en: 'Gain time', fr: 'Gagner du temps' },
  { id: 'example', en: 'Give an example', fr: 'Donner un exemple' },
  { id: 'structure', en: 'Structure a talk', fr: 'Structurer un exposé' },
  { id: 'contrast', en: 'Pros, cons and contrast', fr: 'Pour, contre et contraste' },
  { id: 'experience', en: 'Personal experience', fr: 'Expérience personnelle' },
  { id: 'conclude', en: 'Conclude', fr: 'Conclure' },
];

export const PHRASES = [
  // opinion
  { id: 'op1', fn: 'opinion', level: 'B1', de: 'Meiner Meinung nach ist das eine gute Lösung.', en: 'In my opinion this is a good solution.', fr: 'À mon avis, c’est une bonne solution.', gap: 'Meinung' },
  { id: 'op2', fn: 'opinion', level: 'B1', de: 'Ich finde, dass man viel Zeit sparen kann.', en: 'I think that you can save a lot of time.', fr: 'Je trouve qu’on peut gagner beaucoup de temps.', gap: 'finde' },
  { id: 'op3', fn: 'opinion', level: 'B1', de: 'Ich bin der Meinung, dass das wichtig ist.', en: 'I am of the opinion that this is important.', fr: 'Je suis d’avis que c’est important.', gap: 'Meinung' },
  { id: 'op4', fn: 'opinion', level: 'B2', de: 'Ich vertrete die Ansicht, dass die Vorteile überwiegen.', en: 'I take the view that the advantages outweigh.', fr: 'Je défends l’idée que les avantages l’emportent.', gap: 'Ansicht' },
  { id: 'op5', fn: 'opinion', level: 'B2', de: 'Aus meiner Sicht spricht vieles für diesen Vorschlag.', en: 'From my point of view much speaks for this proposal.', fr: 'De mon point de vue, beaucoup d’arguments plaident pour cette proposition.', gap: 'Sicht' },
  // agree
  { id: 'ag1', fn: 'agree', level: 'B1', de: 'Da stimme ich Ihnen zu.', en: 'I agree with you there.', fr: 'Là, je suis d’accord avec vous.', gap: 'stimme' },
  { id: 'ag2', fn: 'agree', level: 'B1', de: 'Das sehe ich genauso.', en: 'I see it exactly the same way.', fr: 'Je vois les choses de la même façon.', gap: 'genauso' },
  { id: 'ag3', fn: 'agree', level: 'B1', de: 'Da haben Sie recht.', en: 'You are right there.', fr: 'Là, vous avez raison.', gap: 'recht' },
  { id: 'ag4', fn: 'agree', level: 'B2', de: 'Dem kann ich nur zustimmen.', en: 'I can only agree with that.', fr: 'Je ne peux qu’être d’accord avec cela.', gap: 'zustimmen' },
  { id: 'ag5', fn: 'agree', level: 'B2', de: 'Das ist ein stichhaltiges Argument.', en: 'That is a sound argument.', fr: 'C’est un argument solide.', gap: 'stichhaltiges' },
  // disagree
  { id: 'di1', fn: 'disagree', level: 'B1', de: 'Da bin ich anderer Meinung.', en: 'I am of a different opinion there.', fr: 'Là, je ne suis pas du même avis.', gap: 'anderer' },
  { id: 'di2', fn: 'disagree', level: 'B1', de: 'Das sehe ich anders.', en: 'I see that differently.', fr: 'Je vois cela autrement.', gap: 'anders' },
  { id: 'di3', fn: 'disagree', level: 'B1', de: 'Da muss ich Ihnen leider widersprechen.', en: 'I am afraid I have to contradict you there.', fr: 'Là, je dois malheureusement vous contredire.', gap: 'widersprechen' },
  { id: 'di4', fn: 'disagree', level: 'B2', de: 'Das mag stimmen, aber man sollte auch bedenken, dass es Nachteile gibt.', en: 'That may be true, but you should also consider that there are disadvantages.', fr: 'C’est peut-être vrai, mais il faut aussi considérer qu’il y a des inconvénients.', gap: 'bedenken' },
  { id: 'di5', fn: 'disagree', level: 'B2', de: 'Ich kann Ihre Argumentation nur teilweise nachvollziehen.', en: 'I can only partly follow your argument.', fr: 'Je ne peux suivre votre argumentation que partiellement.', gap: 'teilweise' },
  // suggest
  { id: 'su1', fn: 'suggest', level: 'B1', de: 'Wie wäre es, wenn wir uns am Samstag treffen?', en: 'How about meeting on Saturday?', fr: 'Et si on se retrouvait samedi ?', gap: 'wäre' },
  { id: 'su2', fn: 'suggest', level: 'B1', de: 'Ich schlage vor, dass wir zusammen kochen.', en: 'I suggest that we cook together.', fr: 'Je propose qu’on cuisine ensemble.', gap: 'schlage' },
  { id: 'su3', fn: 'suggest', level: 'B1', de: 'Wir könnten ins Kino gehen.', en: 'We could go to the cinema.', fr: 'On pourrait aller au cinéma.', gap: 'könnten' },
  { id: 'su4', fn: 'suggest', level: 'B2', de: 'Ich würde vorschlagen, zuerst die Kosten zu klären.', en: 'I would suggest clarifying the costs first.', fr: 'Je proposerais de clarifier d’abord les coûts.', gap: 'vorschlagen' },
  { id: 'su5', fn: 'suggest', level: 'B2', de: 'Es wäre sinnvoll, einen Kompromiss zu finden.', en: 'It would make sense to find a compromise.', fr: 'Il serait judicieux de trouver un compromis.', gap: 'sinnvoll' },
  // react
  { id: 're1', fn: 'react', level: 'B1', de: 'Das ist eine gute Idee!', en: 'That is a good idea!', fr: 'C’est une bonne idée !', gap: 'Idee' },
  { id: 're2', fn: 'react', level: 'B1', de: 'Da habe ich leider keine Zeit.', en: 'Unfortunately I have no time then.', fr: 'Là, je n’ai malheureusement pas le temps.', gap: 'leider' },
  { id: 're3', fn: 'react', level: 'B1', de: 'Das passt mir gut. Und was meinen Sie?', en: 'That suits me well. And what do you think?', fr: 'Ça me convient bien. Et vous, qu’en pensez-vous ?', gap: 'passt' },
  { id: 're4', fn: 'react', level: 'B2', de: 'Das ist zwar verlockend, aber leider nicht umsetzbar.', en: 'That is tempting, but unfortunately not feasible.', fr: 'C’est tentant, mais malheureusement irréalisable.', gap: 'umsetzbar' },
  { id: 're5', fn: 'react', level: 'B2', de: 'Ich bin einverstanden, wenn wir das Budget nicht überschreiten.', en: 'I agree, as long as we do not exceed the budget.', fr: 'Je suis d’accord, tant que nous ne dépassons pas le budget.', gap: 'einverstanden' },
  // askback
  { id: 'as1', fn: 'askback', level: 'B1', de: 'Und wie sehen Sie das?', en: 'And how do you see it?', fr: 'Et vous, comment voyez-vous cela ?', gap: 'sehen' },
  { id: 'as2', fn: 'askback', level: 'B1', de: 'Was halten Sie davon?', en: 'What do you think of it?', fr: 'Qu’en pensez-vous ?', gap: 'halten' },
  { id: 'as3', fn: 'askback', level: 'B1', de: 'Haben Sie das auch schon erlebt?', en: 'Have you experienced that too?', fr: 'Avez-vous déjà vécu cela aussi ?', gap: 'erlebt' },
  { id: 'as4', fn: 'askback', level: 'B2', de: 'Wie stehen Sie zu dieser Frage?', en: 'Where do you stand on this question?', fr: 'Quelle est votre position sur cette question ?', gap: 'stehen' },
  { id: 'as5', fn: 'askback', level: 'B2', de: 'Könnten Sie das bitte genauer erklären?', en: 'Could you explain that in more detail?', fr: 'Pourriez-vous expliquer cela plus précisément ?', gap: 'genauer' },
  // time
  { id: 'ti1', fn: 'time', level: 'B1', de: 'Moment, ich muss kurz überlegen.', en: 'One moment, I need to think briefly.', fr: 'Un instant, je dois réfléchir un peu.', gap: 'überlegen' },
  { id: 'ti2', fn: 'time', level: 'B1', de: 'Das ist eine interessante Frage.', en: 'That is an interesting question.', fr: 'C’est une question intéressante.', gap: 'interessante' },
  { id: 'ti3', fn: 'time', level: 'B1', de: 'Wie soll ich sagen … ich meine …', en: 'How shall I put it … I mean …', fr: 'Comment dire … je veux dire …', gap: 'meine' },
  { id: 'ti4', fn: 'time', level: 'B2', de: 'Darüber muss ich einen Augenblick nachdenken.', en: 'I have to think about that for a moment.', fr: 'Je dois y réfléchir un instant.', gap: 'nachdenken' },
  { id: 'ti5', fn: 'time', level: 'B2', de: 'Anders gesagt: Es kommt auf die Situation an.', en: 'In other words: it depends on the situation.', fr: 'Autrement dit : cela dépend de la situation.', gap: 'gesagt' },
  // example
  { id: 'ex1', fn: 'example', level: 'B1', de: 'Zum Beispiel arbeite ich oft von zu Hause.', en: 'For example I often work from home.', fr: 'Par exemple, je travaille souvent de chez moi.', gap: 'Beispiel' },
  { id: 'ex2', fn: 'example', level: 'B1', de: 'Ein Beispiel dafür ist mein Bruder.', en: 'An example of this is my brother.', fr: 'Mon frère en est un exemple.', gap: 'Beispiel' },
  { id: 'ex3', fn: 'example', level: 'B2', de: 'Das lässt sich am Beispiel der Großstädte gut zeigen.', en: 'This can be shown well using big cities as an example.', fr: 'Cela se montre bien à l’exemple des grandes villes.', gap: 'Beispiel' },
  { id: 'ex4', fn: 'example', level: 'B2', de: 'Nehmen wir an, jemand zieht in eine fremde Stadt.', en: 'Let us assume someone moves to a strange city.', fr: 'Admettons que quelqu’un déménage dans une ville inconnue.', gap: 'Nehmen' },
  // structure
  { id: 'st1', fn: 'structure', level: 'B1', de: 'Ich möchte heute über das Thema Reisen sprechen.', en: 'Today I would like to talk about the topic of travel.', fr: 'Aujourd’hui, je voudrais parler du thème du voyage.', gap: 'möchte' },
  { id: 'st2', fn: 'structure', level: 'B1', de: 'Zuerst erzähle ich von meinen Erfahrungen.', en: 'First I will tell you about my experiences.', fr: 'D’abord, je vais raconter mes expériences.', gap: 'Zuerst' },
  { id: 'st3', fn: 'structure', level: 'B1', de: 'Zum Schluss möchte ich mich für Ihre Aufmerksamkeit bedanken.', en: 'Finally I would like to thank you for your attention.', fr: 'Pour finir, je voudrais vous remercier de votre attention.', gap: 'Schluss' },
  { id: 'st4', fn: 'structure', level: 'B2', de: 'Mein Vortrag besteht aus drei Teilen.', en: 'My talk consists of three parts.', fr: 'Mon exposé se compose de trois parties.', gap: 'besteht' },
  { id: 'st5', fn: 'structure', level: 'B2', de: 'Im ersten Teil gehe ich auf die Situation in meinem Heimatland ein.', en: 'In the first part I will look at the situation in my home country.', fr: 'Dans la première partie, j’aborde la situation dans mon pays.', gap: 'ein' },
  // contrast
  { id: 'co1', fn: 'contrast', level: 'B1', de: 'Einerseits spart man Geld, andererseits fehlt der Kontakt.', en: 'On the one hand you save money, on the other hand contact is missing.', fr: 'D’un côté, on économise de l’argent ; de l’autre, le contact manque.', gap: 'andererseits' },
  { id: 'co2', fn: 'contrast', level: 'B1', de: 'Ein Vorteil ist, dass es billiger ist. Ein Nachteil ist die Zeit.', en: 'One advantage is that it is cheaper. A disadvantage is the time.', fr: 'Un avantage est que c’est moins cher. Un inconvénient est le temps.', gap: 'Nachteil' },
  { id: 'co3', fn: 'contrast', level: 'B1', de: 'Trotzdem würde ich es empfehlen.', en: 'Nevertheless I would recommend it.', fr: 'Malgré cela, je le recommanderais.', gap: 'Trotzdem' },
  { id: 'co4', fn: 'contrast', level: 'B2', de: 'Zum einen spricht die Umwelt dafür, zum anderen die Kosten dagegen.', en: 'On the one hand the environment speaks for it, on the other hand the costs speak against it.', fr: 'D’une part l’environnement plaide pour, d’autre part les coûts plaident contre.', gap: 'anderen' },
  { id: 'co5', fn: 'contrast', level: 'B2', de: 'Im Gegensatz dazu sehen viele Menschen darin eine Chance.', en: 'In contrast, many people see an opportunity in it.', fr: 'À l’inverse, beaucoup de gens y voient une chance.', gap: 'Gegensatz' },
  // experience
  { id: 'xp1', fn: 'experience', level: 'B1', de: 'In meinem Heimatland ist das ganz anders.', en: 'In my home country this is quite different.', fr: 'Dans mon pays, c’est tout à fait différent.', gap: 'anders' },
  { id: 'xp2', fn: 'experience', level: 'B1', de: 'Ich habe selbst schon ähnliche Erfahrungen gemacht.', en: 'I have had similar experiences myself.', fr: 'J’ai moi-même déjà fait des expériences similaires.', gap: 'Erfahrungen' },
  { id: 'xp3', fn: 'experience', level: 'B2', de: 'Aus eigener Erfahrung kann ich sagen, dass es nicht einfach ist.', en: 'From my own experience I can say that it is not easy.', fr: 'D’après ma propre expérience, je peux dire que ce n’est pas facile.', gap: 'Erfahrung' },
  { id: 'xp4', fn: 'experience', level: 'B2', de: 'Bei uns zu Hause spielt die Familie eine große Rolle.', en: 'Where I come from, the family plays a big role.', fr: 'Chez nous, la famille joue un grand rôle.', gap: 'Rolle' },
  // conclude
  { id: 'cl1', fn: 'conclude', level: 'B1', de: 'Zusammenfassend kann ich sagen, dass es sich lohnt.', en: 'To sum up, I can say that it is worth it.', fr: 'En résumé, je peux dire que cela en vaut la peine.', gap: 'Zusammenfassend' },
  { id: 'cl2', fn: 'conclude', level: 'B1', de: 'Ich hoffe, dass wir eine Lösung gefunden haben.', en: 'I hope that we have found a solution.', fr: 'J’espère que nous avons trouvé une solution.', gap: 'Lösung' },
  { id: 'cl3', fn: 'conclude', level: 'B2', de: 'Abschließend lässt sich festhalten, dass beide Seiten gute Argumente haben.', en: 'In conclusion it can be said that both sides have good arguments.', fr: 'Pour conclure, on peut retenir que les deux côtés ont de bons arguments.', gap: 'festhalten' },
  { id: 'cl4', fn: 'conclude', level: 'B2', de: 'Alles in allem halte ich den Vorschlag für sinnvoll.', en: 'All in all I consider the proposal sensible.', fr: 'Tout bien considéré, je trouve la proposition judicieuse.', gap: 'allem' },
];

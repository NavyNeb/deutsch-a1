import type { Lesson } from '../types';
import { g, line } from '../author';

// Rebuilt in the redesigned format (see docs/superpowers/specs/2026-11-18-lesson-redesign-design.md).
// Ids of the words and exercises that existed before are kept.

export const b1lektion17: Lesson = {
  id: 'b1-l17', level: 'B1', module: 4, number: 16,
  title: { de: 'Adjektive im Komparativ und Superlativ', en: 'Attributive comparatives and superlatives', fr: 'Comparatifs et superlatifs devant le nom' },
  theme: 'Using comparatives and superlatives in front of a noun, with health, sport and well-being', themeFr: 'Utiliser le comparatif et le superlatif devant un nom, autour de la santé, du sport et du bien-être',
  goals: ['Put comparatives in front of nouns (ein größeres Haus)', 'Use superlatives with an article (der schnellste Läufer)', 'Add the right adjective ending in every case', 'Talk about sport, health and fitness habits'], goalsFr: ['Placer des comparatifs devant des noms (ein größeres Haus)', 'Utiliser des superlatifs avec un article (der schnellste Läufer)', 'Ajouter la bonne terminaison d’adjectif à chaque cas', 'Parler de sport, de santé et d’habitudes de forme'],
  canDo: g('Ich kann Komparativ und Superlativ vor einem Nomen mit der richtigen Endung benutzen und über Sport und Gesundheit sprechen.', 'I can use comparatives and superlatives in front of a noun with the right ending and talk about sport and health.', 'Je sais utiliser le comparatif et le superlatif devant un nom avec la bonne terminaison et parler de sport et de santé.'),
  steps: [
    { kind: 'intro', title: 'Fit und gesund 🏃', titleFr: 'En forme et en bonne santé 🏃',
      scene: 'Lena and her sister compare gyms, habits and diets — with bigger, healthier and best.', sceneFr: 'Lena et sa sœur comparent salles de sport, habitudes et alimentation — avec plus grand, plus sain et le meilleur.',
      goals: ['Put comparatives in front of nouns (ein größeres Haus)', 'Use superlatives with an article (der schnellste Läufer)', 'Add the right ending in every case and learn irregular stems'],
      goalsFr: ['Mettre des comparatifs devant des noms (ein größeres Haus)', 'Utiliser des superlatifs avec un article (der schnellste Läufer)', 'Ajouter la bonne terminaison à tous les cas et apprendre les radicaux irréguliers'] },

    // ───────────── 1 · Comparative before a noun ─────────────
    { kind: 'chapter', title: 'Komparativ vor dem Nomen', titleFr: 'Le comparatif devant le nom', blurb: 'ein größeres Haus, eine gesündere Ernährung.', blurbFr: 'ein größeres Haus, eine gesündere Ernährung.' },

    { kind: 'situation', title: 'Ein größeres Fitnessstudio', titleFr: 'Une salle de sport plus grande',
      setting: 'Lena talks with her sister about sport.', settingFr: 'Lena parle de sport avec sa sœur.',
      lines: [
        line('Lena', 'Wir suchen ein größeres Fitnessstudio. Das neue Fitnessstudio hat längere Öffnungszeiten.', 'We are looking for a bigger gym. The new gym has longer opening hours.', 'Nous cherchons une salle de sport plus grande. La nouvelle salle a des horaires d’ouverture plus longs.'),
        line('Schwester', 'Meine Schwester hat einen gesünderen Lebensstil als ich. Sie wünscht sich eine gesündere Ernährung.', 'My sister has a healthier lifestyle than I do. She wishes for a healthier diet.', 'Ma sœur a un mode de vie plus sain que moi. Elle souhaite une alimentation plus saine.'),
        line('Lena', 'Er hat einen längeren Weg zur Arbeit als ich. Mehr Bewegung im Alltag tut gut. Weniger Stress macht müde.', 'He has a longer way to work than I do. More exercise in everyday life does good. Less stress makes you tired.', 'Il a un trajet plus long pour aller au travail que moi. Plus de mouvement au quotidien fait du bien. Moins de stress fatigue.'),
        line('Schwester', 'Heute hatte ich ein besseres Training als gestern. Ich habe ein besseres Gefühl als früher.', 'Today I had a better workout than yesterday. I have a better feeling than before.', 'Aujourd’hui, j’ai eu un meilleur entraînement qu’hier. J’ai un meilleur sentiment qu’avant.'),
      ],
      words: [] },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l17-e14', prompt: 'What do Lena and her sister look for?', promptFr: 'Que cherchent Lena et sa sœur ?', options: ['A bigger gym', 'A cheaper flat', 'A new job'], optionsFr: ['Une salle de sport plus grande', 'Un appartement moins cher', 'Un nouveau travail'], answer: 0, explain: 'Lena says: “Wir suchen ein größeres Fitnessstudio.”', explainFr: 'Lena dit : « Wir suchen ein größeres Fitnessstudio. »', hint: 'Look for “größeres”.', hintFr: 'Cherche « größeres ».' } },

    { kind: 'wordgroup', title: 'Gesundheit und Bewegung', titleFr: 'Santé et mouvement',
      items: [{ id: 'b1l17-wohlbefinden', german: 'das Wohlbefinden', english: 'the well-being', french: 'le bien-être', gender: 'das', syllables: ['WOHL', 'be', 'fin', 'den'], pronunciation: 'dahs VOHL-be-fin-den', example: { de: 'Bewegung steigert das Wohlbefinden.', en: 'Exercise increases well-being.', fr: 'Le mouvement augmente le bien-être.' } }, { id: 'b1l17-gesundheit', german: 'die Gesundheit', english: 'the health', french: 'la santé', gender: 'die', syllables: ['ge', 'SUND', 'heit'], pronunciation: 'dee ge-ZOONT-hite', example: { de: 'Gesundheit ist das größte Gut.', en: 'Health is the greatest asset.', fr: 'La santé est le bien le plus précieux.' } }, { id: 'b1l17-bewegung', german: 'die Bewegung', english: 'the movement / exercise', french: 'le mouvement / l’activité physique', gender: 'die', syllables: ['be', 'WE', 'gung'], pronunciation: 'dee be-VAY-goong', example: { de: 'Mehr Bewegung im Alltag tut gut.', en: 'More exercise in everyday life does you good.', fr: 'Plus de mouvement au quotidien fait du bien.' } }, { id: 'b1l17-ausdauer', german: 'die Ausdauer', english: 'the stamina / endurance', french: 'l’endurance', gender: 'die', syllables: ['AUS', 'dau', 'er'], pronunciation: 'dee OWS-dow-er', example: { de: 'Für mehr Ausdauer laufe ich dreimal pro Woche.', en: 'For more stamina I run three times a week.', fr: 'Pour plus d’endurance, je cours trois fois par semaine.' } }, { id: 'b1l17-kraft', german: 'die Kraft', english: 'the strength', french: 'la force', gender: 'die', syllables: ['KRAFT'], pronunciation: 'dee krahft', example: { de: 'Nach dem Krafttraining fühle ich mich stärker.', en: 'After strength training I feel stronger.', fr: 'Après la musculation, je me sens plus fort.' } }, { id: 'b1l17-entspannung', german: 'die Entspannung', english: 'the relaxation', french: 'la détente', gender: 'die', syllables: ['ent', 'SPAN', 'nung'], pronunciation: 'dee ent-SHPAH-noong', example: { de: 'Yoga ist eine gute Entspannung nach der Arbeit.', en: 'Yoga is a good way to relax after work.', fr: 'Le yoga est une bonne détente après le travail.' } }] },

    { kind: 'wordgroup', title: 'Alltag und Gewohnheiten', titleFr: 'Quotidien et habitudes',
      items: [{ id: 'b1l17-ernaehrung', german: 'die Ernährung', english: 'the nutrition / diet', french: 'l’alimentation', gender: 'die', syllables: ['er', 'NÄH', 'rung'], pronunciation: 'dee er-NAIR-roong', example: { de: 'Eine gesündere Ernährung beginnt beim Einkaufen.', en: 'A healthier diet starts at the supermarket.', fr: 'Une alimentation plus saine commence aux courses.' } }, { id: 'b1l17-stress', german: 'der Stress', english: 'the stress', french: 'le stress', gender: 'der', syllables: ['STRESS'], pronunciation: 'dair shtress', example: { de: 'Stress im Büro macht müde.', en: 'Stress at the office makes you tired.', fr: 'Le stress au bureau fatigue.' } }, { id: 'b1l17-gewohnheit', german: 'die Gewohnheit', english: 'the habit', french: 'l’habitude', gender: 'die', syllables: ['ge', 'WOHN', 'heit'], pronunciation: 'dee ge-VOHN-hite', example: { de: 'Jeden Morgen zu laufen ist eine gute Gewohnheit.', en: 'Running every morning is a good habit.', fr: 'Courir tous les matins est une bonne habitude.' } }, { id: 'b1l17-fitnessstudio', german: 'das Fitnessstudio', english: 'the gym', french: 'la salle de sport', gender: 'das', syllables: ['FIT', 'ness', 'stu', 'di', 'o'], pronunciation: 'dahs FIT-ness-shtoo-dee-oh', example: { de: 'Das neue Fitnessstudio hat längere Öffnungszeiten.', en: 'The new gym has longer opening hours.', fr: 'La nouvelle salle de sport a des horaires d’ouverture plus longs.' } }, { id: 'b1l17-beitragen', german: 'beitragen (zu)', english: 'to contribute (to)', french: 'contribuer (à)', gender: null, syllables: ['BEI', 'tra', 'gen'], pronunciation: 'BY-trah-gen', example: { de: 'Sport trägt zu einem größeren Wohlbefinden bei.', en: 'Sport contributes to greater well-being.', fr: 'Le sport contribue à un plus grand bien-être.' } }, { id: 'b1l17-gesund', german: 'gesund', english: 'healthy', french: 'sain / en bonne santé', gender: null, syllables: ['ge', 'SUND'], pronunciation: 'ge-ZOONT', example: { de: 'Ich möchte einen gesünderen Lebensstil.', en: 'I would like a healthier lifestyle.', fr: 'Je voudrais un mode de vie plus sain.' } }, { id: 'b1l17-laeufer', german: 'der Läufer', english: 'the runner', french: 'le coureur', gender: 'der', syllables: ['LÄU', 'fer'], pronunciation: 'dair LOY-fer', example: { de: 'Der schnellste Läufer gewinnt das Rennen.', en: 'The fastest runner wins the race.', fr: 'Le coureur le plus rapide gagne la course.' } }] },

    { kind: 'grammar', note: {
      id: 'b1l17-komparativ-nomen', title: 'The comparative in front of a noun', titleFr: 'Le comparatif devant un nom',
      lead: 'The comparative keeps -er and then takes the normal adjective ending: ein größeres Haus.',
      leadFr: 'Le comparatif garde -er puis prend la terminaison normale d’adjectif : ein größeres Haus.',
      explanationMd: 'In front of a noun the **comparative** keeps its **-er** and then takes the **normal adjective ending**: **schneller + ending → ein schnellerer Läufer (m), eine schnellere Läuferin (f), ein schnelleres Tempo (n)**; **groß → größer: ein größeres Haus**; **gesund → gesünder: eine gesündere Ernährung**. After **der / die / das**: **-e / -en** (**der größere Raum, mit dem größeren Raum**). After **ein-**: **-er / -e / -es** (nominative), **-en / -e / -es** (accusative), **-en** (dative). Adjectives in **-el** and **-er** drop the **e**: **dunkel → ein dunkleres Zimmer, teuer → ein teureres Auto**. There is **no “am”** in front of a noun, and **mehr / weniger** take **no ending**: **mehr Bewegung, weniger Stress**.',
      explanationMdFr: 'Devant un nom, le **comparatif** garde son **-er** puis prend la **terminaison normale d’adjectif** : **schneller + terminaison → ein schnellerer Läufer (m), eine schnellere Läuferin (f), ein schnelleres Tempo (n)** ; **groß → größer : ein größeres Haus** ; **gesund → gesünder : eine gesündere Ernährung**. Après **der / die / das** : **-e / -en** (**der größere Raum, mit dem größeren Raum**). Après **ein-** : **-er / -e / -es** (nominatif), **-en / -e / -es** (accusatif), **-en** (datif). Les adjectifs en **-el** et **-er** perdent le **e** : **dunkel → ein dunkleres Zimmer, teuer → ein teureres Auto**. Il n’y a **pas de « am »** devant un nom, et **mehr / weniger** ne prennent **pas de terminaison** : **mehr Bewegung, weniger Stress**.',
      tables: [{ title: 'Comparative + ending (after ein-)', titleFr: 'Comparatif + terminaison (après ein-)', headers: ['Case', 'm', 'f', 'n'], headersFr: ['Cas', 'm', 'f', 'n'],
        rows: [['Nominative', 'ein größerer Raum', 'eine größere Wohnung', 'ein größeres Haus'], ['Accusative', 'einen größeren Raum', 'eine größere Wohnung', 'ein größeres Haus'], ['Dative', 'einem größeren Raum', 'einer größeren Wohnung', 'einem größeren Haus']],
        rowsFr: [['Nominatif', 'ein größerer Raum', 'eine größere Wohnung', 'ein größeres Haus'], ['Accusatif', 'einen größeren Raum', 'eine größere Wohnung', 'ein größeres Haus'], ['Datif', 'einem größeren Raum', 'einer größeren Wohnung', 'einem größeren Haus']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Wir', role: 'subject' }, { text: 'suchen', role: 'verb' }, { text: 'ein größeres Fitnessstudio.', role: 'accusative' }], en: 'We are looking for a bigger gym.', fr: 'Nous cherchons une salle de sport plus grande.' },
        { parts: [{ text: 'Sie', role: 'subject' }, { text: 'wünscht sich', role: 'verb' }, { text: 'eine gesündere Ernährung.', role: 'accusative' }], en: 'She wishes for a healthier diet.', fr: 'Elle souhaite une alimentation plus saine.' },
      ],
      contrast: {
        a: { label: 'After sein: no ending', labelFr: 'Après sein : sans terminaison', note: 'größer', noteFr: 'größer', examples: [g('Das Fitnessstudio ist größer.', 'The gym is bigger.', 'La salle de sport est plus grande.'), g('Obst ist gesünder als Kuchen.', 'Fruit is healthier than cake.', 'Les fruits sont plus sains que le gâteau.')] },
        b: { label: 'Before a noun: ending', labelFr: 'Devant un nom : terminaison', note: 'größeres', noteFr: 'größeres', examples: [g('Wir suchen ein größeres Fitnessstudio.', 'We are looking for a bigger gym.', 'Nous cherchons une salle de sport plus grande.'), g('Sie wünscht sich eine gesündere Ernährung.', 'She wishes for a healthier diet.', 'Elle souhaite une alimentation plus saine.')] },
      },
      examples: [
        g('Wir suchen ein größeres Fitnessstudio.', 'We are looking for a bigger gym.', 'Nous cherchons une salle de sport plus grande.'),
        g('Sie wünscht sich eine gesündere Ernährung.', 'She wishes for a healthier diet.', 'Elle souhaite une alimentation plus saine.'),
        g('Er hat einen längeren Weg zur Arbeit als ich.', 'He has a longer way to work than I do.', 'Il a un trajet plus long pour aller au travail que moi.'),
        g('Ich möchte einen gesünderen Lebensstil.', 'I would like a healthier lifestyle.', 'Je voudrais un mode de vie plus sain.'),
        g('Eine längere Pause tut gut.', 'A longer break does good.', 'Une pause plus longue fait du bien.'),
        g('Ein größeres Zimmer, bitte.', 'A bigger room, please.', 'Une chambre plus grande, s’il vous plaît.'),
      ],
      mistakes: [
        { wrong: 'Wir suchen ein größer Fitnessstudio.', right: 'Wir suchen ein größeres Fitnessstudio.', why: 'Before a noun the comparative needs an ending.', whyFr: 'Devant un nom, le comparatif a besoin d’une terminaison.' },
        { wrong: 'Ich möchte mehr Bewegungen.', right: 'Ich möchte mehr Bewegung.', why: 'mehr takes no ending; Bewegung is used in the singular.', whyFr: 'mehr n’a pas de terminaison ; Bewegung s’emploie au singulier.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l17-e1', prompt: 'Wir suchen ein ___ Fitnessstudio. (groß → comparative, n accusative)', promptFr: 'Wir suchen ein ___ Fitnessstudio. (groß → comparatif, n accusatif)', answer: 'größeres', hint: 'größer + -es after "ein" (neuter)', hintFr: 'größer + -es après « ein » (neutre)' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l17-e3', prompt: 'Choose: "Heute hatte ich ein ___ Training als gestern."', promptFr: 'Choisis : « Heute hatte ich ein ___ Training als gestern. »', options: ['besser', 'besseres', 'bessere'], answer: 1, explain: 'Neuter accusative after "ein": comparative besser + -es.', explainFr: 'Neutre accusatif après « ein » : comparatif besser + -es.', hint: 'Training is neuter; "ein" → -es.', hintFr: 'Training est neutre ; « ein » → -es.' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l17-e5', prompt: 'Sie wünscht sich eine ___ Ernährung. (gesund → comparative, f accusative)', promptFr: 'Sie wünscht sich eine ___ Ernährung. (gesund → comparatif, f accusatif)', answer: 'gesündere', hint: 'umlaut + -er + ending -e', hintFr: 'tréma + -er + terminaison -e' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b1l17-e13', word: 'Ausdauer', answer: 'die', hint: 'a feminine noun', hintFr: 'un nom féminin' } },

    // ───────────── 2 · Superlative before a noun ─────────────
    { kind: 'chapter', title: 'Superlativ vor dem Nomen', titleFr: 'Le superlatif devant le nom', blurb: 'der schnellste Läufer, das größte Studio.', blurbFr: 'der schnellste Läufer, das größte Studio.' },

    { kind: 'situation', title: 'Der schnellste Läufer', titleFr: 'Le coureur le plus rapide',
      setting: 'Lena tells about her club.', settingFr: 'Lena parle de son club.',
      lines: [
        line('Lena', 'Der schnellste Läufer gewinnt das Rennen. Das ist das größte Fitnessstudio der Stadt.', 'The fastest runner wins the race. That is the biggest gym in the city.', 'Le coureur le plus rapide gagne la course. C’est la plus grande salle de sport de la ville.'),
        line('Schwester', 'Ich gehe mit meinem besten Freund joggen. Die gesündeste Gewohnheit ist ein regelmäßiger Spaziergang.', 'I go jogging with my best friend. The healthiest habit is a regular walk.', 'Je vais courir avec mon meilleur ami. L’habitude la plus saine est une promenade régulière.'),
        line('Lena', 'Ich kenne den schnellsten Läufer. Ich trainiere mit dem schnellsten Läufer. Das ist der älteste Verein, der höchste Berg und das nächste Schwimmbad.', 'I know the fastest runner. I train with the fastest runner. That is the oldest club, the highest mountain and the nearest swimming pool.', 'Je connais le coureur le plus rapide. Je m’entraîne avec le coureur le plus rapide. C’est le plus ancien club, la plus haute montagne et la piscine la plus proche.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l17-superlativ-nomen', title: 'The superlative in front of a noun', titleFr: 'Le superlatif devant un nom',
      lead: 'superlative -st + adjective ending, nearly always with a definite article: der schnellste Läufer.',
      leadFr: 'superlatif -st + terminaison d’adjectif, presque toujours avec un article défini : der schnellste Läufer.',
      explanationMd: 'In front of a noun the **superlative** ends in **-st** plus the **adjective ending**, and is almost always used with a **definite article** (or a possessive): **der schnellste Läufer, die schnellste Läuferin, das schnellste Auto**; **accusative**: **den schnellsten Läufer**; **dative**: **mit dem schnellsten Läufer**. After **d, t, s, ß, z, sch** add **-est**: **alt → der älteste, gesund → der gesündeste, heiß → der heißeste**. Exception: **groß → der größte**. Compare with the **predicative** form from A2: **Er läuft am schnellsten.** — but with a noun: **Er ist der schnellste Läufer.**',
      explanationMdFr: 'Devant un nom, le **superlatif** se termine par **-st** plus la **terminaison d’adjectif**, et s’emploie presque toujours avec un **article défini** (ou un possessif) : **der schnellste Läufer, die schnellste Läuferin, das schnellste Auto** ; **accusatif** : **den schnellsten Läufer** ; **datif** : **mit dem schnellsten Läufer**. Après **d, t, s, ß, z, sch**, ajoute **-est** : **alt → der älteste, gesund → der gesündeste, heiß → der heißeste**. Exception : **groß → der größte**. Compare avec la forme **attribut** vue en A2 : **Er läuft am schnellsten.** — mais avec un nom : **Er ist der schnellste Läufer.**',
      tables: [{ title: 'Superlative before a noun', titleFr: 'Superlatif devant un nom', headers: ['Case', 'm', 'f', 'n'], headersFr: ['Cas', 'm', 'f', 'n'],
        rows: [['Nominative', 'der schnellste Läufer', 'die schnellste Läuferin', 'das schnellste Auto'], ['Accusative', 'den schnellsten Läufer', 'die schnellste Läuferin', 'das schnellste Auto'], ['Dative', 'mit dem schnellsten Läufer', 'mit der schnellsten Läuferin', 'mit dem schnellsten Auto']],
        rowsFr: [['Nominatif', 'der schnellste Läufer', 'die schnellste Läuferin', 'das schnellste Auto'], ['Accusatif', 'den schnellsten Läufer', 'die schnellste Läuferin', 'das schnellste Auto'], ['Datif', 'mit dem schnellsten Läufer', 'mit der schnellsten Läuferin', 'mit dem schnellsten Auto']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Der schnellste Läufer', role: 'subject' }, { text: 'gewinnt', role: 'verb' }, { text: 'das Rennen.', role: 'accusative' }], en: 'The fastest runner wins the race.', fr: 'Le coureur le plus rapide gagne la course.' },
        { parts: [{ text: 'Ich', role: 'subject' }, { text: 'gehe', role: 'verb' }, { text: 'mit meinem besten Freund', role: 'dative' }, { text: 'joggen.', role: 'verb' }], en: 'I go jogging with my best friend.', fr: 'Je vais courir avec mon meilleur ami.' },
      ],
      contrast: {
        a: { label: 'am …-sten (predicative)', labelFr: 'am …-sten (attribut)', note: 'after a verb', noteFr: 'après un verbe', examples: [g('Er läuft am schnellsten.', 'He runs fastest.', 'Il court le plus vite.'), g('Dieses Studio ist am größten.', 'This gym is the biggest.', 'Cette salle est la plus grande.')] },
        b: { label: 'der …-ste (before a noun)', labelFr: 'der …-ste (devant un nom)', note: 'with an article', noteFr: 'avec un article', examples: [g('Er ist der schnellste Läufer.', 'He is the fastest runner.', 'C’est le coureur le plus rapide.'), g('Das ist das größte Fitnessstudio der Stadt.', 'That is the biggest gym in the city.', 'C’est la plus grande salle de sport de la ville.')] },
      },
      examples: [
        g('Der schnellste Läufer gewinnt das Rennen.', 'The fastest runner wins the race.', 'Le coureur le plus rapide gagne la course.'),
        g('Das ist das größte Fitnessstudio der Stadt.', 'That is the biggest gym in the city.', 'C’est la plus grande salle de sport de la ville.'),
        g('Ich gehe mit meinem besten Freund joggen.', 'I go jogging with my best friend.', 'Je vais courir avec mon meilleur ami.'),
        g('Die gesündeste Gewohnheit ist ein regelmäßiger Spaziergang.', 'The healthiest habit is a regular walk.', 'L’habitude la plus saine est une promenade régulière.'),
        g('Das nächste Schwimmbad ist zehn Minuten entfernt.', 'The nearest swimming pool is ten minutes away.', 'La piscine la plus proche est à dix minutes.'),
        g('Das ist der höchste Berg.', 'That is the highest mountain.', 'C’est la plus haute montagne.'),
      ],
      mistakes: [
        { wrong: 'Er ist der am schnellsten Läufer.', right: 'Er ist der schnellste Läufer.', why: 'Before a noun there is no “am”.', whyFr: 'Devant un nom, il n’y a pas de « am ».' },
        { wrong: 'Das ist das gesündste Essen.', right: 'Das ist das gesündeste Essen.', why: 'After d / t / s / ß / z add -est.', whyFr: 'Après d / t / s / ß / z, ajoute -est.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l17-e2', prompt: 'Das ist der ___ Läufer im Verein. (schnell → superlative)', promptFr: 'Das ist der ___ Läufer im Verein. (schnell → superlatif)', answer: 'schnellste', hint: 'schnell + st + e', hintFr: 'schnell + st + e' } },
    { kind: 'exercise', exercise: { type: 'fillBlank', id: 'b1l17-e4', prompt: 'Ich gehe mit meinem ___ Freund joggen. (gut → superlative)', promptFr: 'Ich gehe mit meinem ___ Freund joggen. (gut → superlatif)', answer: 'besten', hint: 'dative after "mit": ending -en', hintFr: 'datif après « mit » : terminaison -en' } },
    { kind: 'exercise', exercise: { type: 'wordOrder', id: 'b1l17-e7', tokens: ['gewinnt', 'Der', 'Läufer', 'das', 'schnellste', 'Rennen'], answer: ['Der', 'schnellste', 'Läufer', 'gewinnt', 'das', 'Rennen'], hint: 'Article, superlative with ending, noun, then verb.', hintFr: 'Article, superlatif avec terminaison, nom, puis verbe.' } },
    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l17-e11', prompt: 'Which form is correct in front of the noun?', promptFr: 'Quelle forme est correcte devant le nom ?', options: ['der schnellste Läufer', 'der am schnellsten Läufer', 'der schnellster Läufer'], answer: 0, explain: 'Superlative + -ste after the definite article; no "am" in front of a noun.', explainFr: 'Superlatif + -ste après l’article défini ; pas de « am » devant un nom.', hint: 'No "am" before a noun; der → -e ending.', hintFr: 'Pas de « am » devant un nom ; der → terminaison -e.' } },

    // ───────────── 3 · All cases and irregular forms ─────────────
    { kind: 'chapter', title: 'Alle Fälle und unregelmäßige Formen', titleFr: 'Tous les cas et formes irrégulières', blurb: 'besser, höher, näher, mehr.', blurbFr: 'besser, höher, näher, mehr.' },

    { kind: 'situation', title: 'Ein besserer Plan', titleFr: 'Un meilleur plan',
      setting: 'Lena and her sister make a fitness plan.', settingFr: 'Lena et sa sœur établissent un plan de remise en forme.',
      lines: [
        line('Lena', 'Das ist der beste Plan. Mit dem besten Plan fangen wir an. Ein besserer Plan wäre ein längeres Training.', 'That is the best plan. We start with the best plan. A better plan would be a longer workout.', 'C’est le meilleur plan. Nous commençons avec le meilleur plan. Un meilleur plan serait un entraînement plus long.'),
        line('Schwester', 'Sport trägt zu einem größeren Wohlbefinden bei. Mit einem intensiveren Training steigt auch die Kraft.', 'Sport contributes to greater well-being. With more intense training strength also rises.', 'Le sport contribue à un plus grand bien-être. Avec un entraînement plus intense, la force augmente aussi.'),
        line('Lena', 'Die meisten Menschen brauchen mehr Entspannung. Die besten Ideen kommen beim Laufen. Für mehr Ausdauer laufe ich dreimal pro Woche.', 'Most people need more relaxation. The best ideas come while running. For more stamina I run three times a week.', 'La plupart des gens ont besoin de plus de détente. Les meilleures idées viennent en courant. Pour plus d’endurance, je cours trois fois par semaine.'),
      ],
      words: [] },

    { kind: 'grammar', note: {
      id: 'b1l17-alle-faelle', title: 'All cases and irregular forms', titleFr: 'Tous les cas et formes irrégulières',
      lead: 'Dative is always -en. Learn irregular stems: gut → besser → best-, hoch → höher → höchst-, nah → näher → nächst-, viel → mehr → meist-.',
      leadFr: 'Le datif est toujours -en. Apprends les radicaux irréguliers : gut → besser → best-, hoch → höher → höchst-, nah → näher → nächst-, viel → mehr → meist-.',
      explanationMd: 'Comparative and superlative endings follow the **usual pattern** — the **dative is always -en**: **Nom**: **der beste Plan, ein besserer Plan**; **Akk**: **den besten Plan, einen besseren Plan**; **Dat**: **mit dem besten Plan, mit einem besseren Plan, mit der besseren Idee**; **plural**: **die besten Ideen, mit besseren Ideen**. **Memorise these irregular stems:** **gut → besser → der best-**; **hoch → höher → der höchst-** (**ein höherer Preis, der höchste Berg**); **nah → näher → der nächst-** (**das nächste Fitnessstudio**); **viel → mehr → die meist-** (**die meisten Menschen**). **Sport trägt zu einem größeren Wohlbefinden bei.** — **zu + dative → einem (n) → größeren**.',
      explanationMdFr: 'Les terminaisons du comparatif et du superlatif suivent le **schéma habituel** — le **datif est toujours -en** : **Nom** : **der beste Plan, ein besserer Plan** ; **Akk** : **den besten Plan, einen besseren Plan** ; **Dat** : **mit dem besten Plan, mit einem besseren Plan, mit der besseren Idee** ; **pluriel** : **die besten Ideen, mit besseren Ideen**. **Mémorise ces radicaux irréguliers :** **gut → besser → der best-** ; **hoch → höher → der höchst-** (**ein höherer Preis, der höchste Berg**) ; **nah → näher → der nächst-** (**das nächste Fitnessstudio**) ; **viel → mehr → die meist-** (**die meisten Menschen**). **Sport trägt zu einem größeren Wohlbefinden bei.** — **zu + datif → einem (n) → größeren**.',
      tables: [{ title: 'Irregular forms', titleFr: 'Formes irrégulières', headers: ['Basic', 'Comparative', 'Superlative', 'Example'], headersFr: ['Base', 'Comparatif', 'Superlatif', 'Exemple'],
        rows: [['gut', 'besser', 'best-', 'der beste Plan'], ['hoch', 'höher', 'höchst-', 'der höchste Berg'], ['nah', 'näher', 'nächst-', 'das nächste Studio'], ['viel', 'mehr', 'meist-', 'die meisten Menschen'], ['groß', 'größer', 'größt-', 'das größte Haus']],
        rowsFr: [['gut', 'besser', 'best-', 'der beste Plan'], ['hoch', 'höher', 'höchst-', 'der höchste Berg'], ['nah', 'näher', 'nächst-', 'das nächste Studio'], ['viel', 'mehr', 'meist-', 'die meisten Menschen'], ['groß', 'größer', 'größt-', 'das größte Haus']], highlightCol: 1 }],
      anatomy: [
        { parts: [{ text: 'Mit dem besten Plan', role: 'dative' }, { text: 'fangen', role: 'verb' }, { text: 'wir', role: 'subject' }, { text: 'an.', role: 'verb' }], en: 'We start with the best plan.', fr: 'Nous commençons avec le meilleur plan.' },
        { parts: [{ text: 'Sport', role: 'subject' }, { text: 'trägt', role: 'verb' }, { text: 'zu einem größeren Wohlbefinden', role: 'dative' }, { text: 'bei.', role: 'verb' }], en: 'Sport contributes to greater well-being.', fr: 'Le sport contribue à un plus grand bien-être.' },
      ],
      contrast: {
        a: { label: 'Comparative', labelFr: 'Comparatif', note: 'ein besserer Plan', noteFr: 'ein besserer Plan', examples: [g('Sie hat ein besseres Gefühl als früher.', 'She has a better feeling than before.', 'Elle a un meilleur sentiment qu’avant.'), g('Mit einem intensiveren Training steigt auch die Kraft.', 'With more intense training strength also rises.', 'Avec un entraînement plus intense, la force augmente aussi.')] },
        b: { label: 'Superlative', labelFr: 'Superlatif', note: 'der beste Plan', noteFr: 'der beste Plan', examples: [g('Das ist der beste Plan.', 'That is the best plan.', 'C’est le meilleur plan.'), g('Die meisten Menschen brauchen mehr Entspannung.', 'Most people need more relaxation.', 'La plupart des gens ont besoin de plus de détente.')] },
      },
      examples: [
        g('Das ist der beste Plan.', 'That is the best plan.', 'C’est le meilleur plan.'),
        g('Sie hat ein besseres Gefühl als früher.', 'She has a better feeling than before.', 'Elle a un meilleur sentiment qu’avant.'),
        g('Das nächste Schwimmbad ist zehn Minuten entfernt.', 'The nearest swimming pool is ten minutes away.', 'La piscine la plus proche est à dix minutes.'),
        g('Mit einem intensiveren Training steigt auch die Kraft.', 'With more intense training strength also rises.', 'Avec un entraînement plus intense, la force augmente aussi.'),
        g('Sport trägt zu einem größeren Wohlbefinden bei.', 'Sport contributes to greater well-being.', 'Le sport contribue à un plus grand bien-être.'),
        g('Die meisten Menschen brauchen mehr Entspannung.', 'Most people need more relaxation.', 'La plupart des gens ont besoin de plus de détente.'),
      ],
      mistakes: [
        { wrong: 'Der beste Plan wäre ein gut Training.', right: 'Der beste Plan wäre ein besseres Training.', why: 'gut → besser in the comparative.', whyFr: 'gut → besser au comparatif.' },
        { wrong: 'Mit dem besten Plan fangen wir an', right: 'Mit dem besten Plan fangen wir an.', why: 'End the sentence with a full stop.', whyFr: 'Termine la phrase par un point.' },
      ] } },

    { kind: 'exercise', exercise: { type: 'multipleChoice', id: 'b1l17-e6', prompt: 'Choose: "Sport trägt zu einem ___ Wohlbefinden bei."', promptFr: 'Choisis : « Sport trägt zu einem ___ Wohlbefinden bei. »', options: ['größeren', 'größere', 'größeres'], answer: 0, explain: '"zu" takes the dative; after "einem" the ending is -en.', explainFr: '« zu » demande le datif ; après « einem » la terminaison est -en.', hint: 'Dative singular → -en.', hintFr: 'Datif singulier → -en.' } },
    { kind: 'exercise', exercise: { type: 'match', id: 'b1l17-e8', pairs: [{ de: 'gut', en: 'der beste', fr: 'der beste' }, { de: 'hoch', en: 'der höchste', fr: 'der höchste' }, { de: 'nah', en: 'der nächste', fr: 'der nächste' }, { de: 'groß', en: 'der größte', fr: 'der größte' }], hint: 'Match each adjective with its superlative (masculine nominative).', hintFr: 'Associe chaque adjectif à son superlatif (masculin nominatif).' } },
    { kind: 'exercise', exercise: { type: 'articlePicker', id: 'b1l17-e12', word: 'Wohlbefinden', answer: 'das', hint: 'a nominalised verb (befinden) is neuter', hintFr: 'un verbe substantivé (befinden) est neutre' } },
    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l17-e9', prompt: 'Listen. Who lives healthier?', promptFr: 'Écoute. Qui vit plus sainement ?', audio: { ttsText: 'Meine Schwester hat einen gesünderen Lebensstil als ich.' }, options: ['The sister', 'The speaker', 'Both the same'], optionsFr: ['La sœur', 'La personne qui parle', 'Les deux pareil'], answer: 0, hint: 'Listen for "gesünderen … als ich".', hintFr: 'Écoute « gesünderen … als ich ».' } },

    { kind: 'pronunciation', focus: 'The umlauts ä, ö, ü in comparatives: größer, gesünder, längere (rounded and fronted vowels)', focusFr: 'Les trémas ä, ö, ü dans les comparatifs : größer, gesünder, längere (voyelles arrondies et antérieures)', items: [{ id: 'b1l17-groesseres-pron', german: 'größeres', english: 'bigger (n)', french: 'plus grand (n)', gender: null, syllables: ['GRÖ', 'se', 'res'], pronunciation: 'GROE-se-res', example: { de: 'Ein größeres Zimmer, bitte.', en: 'A bigger room, please.', fr: 'Une chambre plus grande, s’il vous plaît.' } }, { id: 'b1l17-gesuender-pron', german: 'gesünder', english: 'healthier', french: 'plus sain', gender: null, syllables: ['ge', 'SÜN', 'der'], pronunciation: 'ge-ZUEN-der', example: { de: 'Obst ist gesünder als Kuchen.', en: 'Fruit is healthier than cake.', fr: 'Les fruits sont plus sains que le gâteau.' } }, { id: 'b1l17-laengere-pron', german: 'längere', english: 'longer', french: 'plus longue', gender: null, syllables: ['LÄN', 'ge', 're'], pronunciation: 'LENG-e-re', example: { de: 'Eine längere Pause tut gut.', en: 'A longer break does you good.', fr: 'Une pause plus longue fait du bien.' } }, { id: 'b1l17-wohlbefinden-pron', german: 'Wohlbefinden', english: 'well-being', french: 'bien-être', gender: 'das', syllables: ['WOHL', 'be', 'fin', 'den'], pronunciation: 'VOHL-be-fin-den', example: { de: 'Mein Wohlbefinden ist wichtig.', en: 'My well-being is important.', fr: 'Mon bien-être est important.' } }, { id: 'b1l17-entspannung-pron', german: 'Entspannung', english: 'relaxation', french: 'détente', gender: 'die', syllables: ['ent', 'SPAN', 'nung'], pronunciation: 'ent-SHPAH-noong', example: { de: 'Ich brauche Entspannung.', en: 'I need some relaxation.', fr: 'J’ai besoin de détente.' } }] },

    { kind: 'exercise', exercise: { type: 'listenChoose', id: 'b1l17-e10', prompt: 'Listen. What is special about the gym?', promptFr: 'Écoute. Qu’a de spécial la salle de sport ?', audio: { ttsText: 'Das ist das größte Fitnessstudio der Stadt.' }, options: ['It is the biggest in the city', 'It is the cheapest', 'It is the newest'], optionsFr: ['C’est la plus grande de la ville', 'C’est la moins chère', 'C’est la plus récente'], answer: 0, hint: 'Listen to the adjective before "Fitnessstudio".', hintFr: 'Écoute l’adjectif avant « Fitnessstudio ».' } },

    { kind: 'wrapup',
      summary: 'You can now use **comparatives and superlatives in front of nouns** — **ein größeres Haus, der schnellste Läufer** — with the right ending in every case and the irregular forms. 🎉',
      summaryFr: 'Tu sais maintenant utiliser des **comparatifs et superlatifs devant des noms** — **ein größeres Haus, der schnellste Läufer** — avec la bonne terminaison à tous les cas et les formes irrégulières. 🎉',
      card: { title: 'Comparatives before nouns on one page', titleFr: 'Comparatifs devant les noms en une page', sections: [
        { heading: 'Comparative', headingFr: 'Comparatif', rows: [g('-er + ending', 'ein größeres Haus', 'ein größeres Haus'), g('mehr / weniger: no ending', 'mehr Bewegung', 'mehr Bewegung')] },
        { heading: 'Superlative', headingFr: 'Superlatif', rows: [g('der -ste + ending (-est after d / t / s / z)', 'der schnellste Läufer', 'der schnellste Läufer')] },
        { heading: 'Irregular', headingFr: 'Irréguliers', rows: [g('gut besser best- · hoch höher höchst-', 'nah näher nächst- · viel mehr meist-', 'nah näher nächst- · viel mehr meist-')] },
      ] } },
  ],
};

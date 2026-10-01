import { defineSpecial, intro, chapter, vocab, grammar, mc, fb, wo, match, ap, lc, wrapup, quiz } from './kit';

export const essenRestaurant = defineSpecial({
  slug: 'essen-restaurant',
  number: 23,
  group: 'words',
  levels: ['A1', 'A2'],
  related: ['l6', 'l8'],
  title: ['Essen & Restaurant', 'Food & restaurant', 'Repas & restaurant'],
  theme: [
    'Meals, food and drink, ordering with “Ich möchte / Ich hätte gern”, restaurant dialogue and paying the bill',
    'Repas, nourriture et boissons, commander avec « Ich möchte / Ich hätte gern », dialogue au restaurant et addition',
  ],
  goals: [
    'Name meals, drinks and everyday food with article and plural',
    'Order politely: Ich möchte …, Ich hätte gern …, Ich nehme …',
    'Use the accusative when ordering: einen Kaffee, den Fisch',
    'Say what you like to eat: gern, lieber, am liebsten',
    'Follow a restaurant dialogue from the menu to the bill',
  ],
  goalsFr: [
    'Nommer repas, boissons et aliments courants avec article et pluriel',
    'Commander poliment : Ich möchte …, Ich hätte gern …, Ich nehme …',
    'Utiliser l’accusatif pour commander : einen Kaffee, den Fisch',
    'Dire ce qu’on aime manger : gern, lieber, am liebsten',
    'Suivre un dialogue au restaurant, de la carte à l’addition',
  ],
  steps: [
    intro(
      'Guten Appetit!', 'Bon appétit !',
      'Eating together is an important part of life in German-speaking countries. You will meet the three meals, the most common food and drinks, the polite ways to order, and everything you need to ask for the bill — and maybe leave a tip.',
      'Manger ensemble tient une grande place dans les pays germanophones. Tu vas découvrir les trois repas, les aliments et boissons les plus courants, les façons polies de commander et tout ce qu’il faut pour demander l’addition — et peut-être laisser un pourboire.',
      [
        'Meals, drinks and food with der/die/das',
        'Quantities: ein Glas Wasser, eine Tasse Kaffee',
        'Polite ordering with möchte / hätte gern / nehme',
        'gern, lieber, am liebsten',
        'A full restaurant dialogue and paying',
      ],
      [
        'Repas, boissons et aliments avec der/die/das',
        'Quantités : ein Glas Wasser, eine Tasse Kaffee',
        'Commander poliment avec möchte / hätte gern / nehme',
        'gern, lieber, am liebsten',
        'Un dialogue complet au restaurant et le paiement',
      ],
    ),

    // ── Chapter 1 ────────────────────────────────────────────────
    chapter(
      'Meals and drinks', 'Repas et boissons',
      'Three meals a day and what you drink with them.', 'Trois repas par jour et ce qu’on boit avec.',
    ),
    vocab('sp-essen-restaurant-fruehstueck', 'das Frühstück', 'breakfast', 'le petit-déjeuner', 'das', 'FRÜH-stück', 'dahs FRUE-shtuek', ['Zum Frühstück esse ich Brot mit Käse.', 'For breakfast I eat bread with cheese.', 'Au petit-déjeuner, je mange du pain avec du fromage.']),
    vocab('sp-essen-restaurant-mittagessen', 'das Mittagessen', 'lunch', 'le déjeuner', 'das', 'MIT-tags-es-sen', 'dahs MIT-tahks-es-sen', ['Das Mittagessen ist um zwölf Uhr.', 'Lunch is at twelve o’clock.', 'Le déjeuner est à midi.']),
    vocab('sp-essen-restaurant-abendessen', 'das Abendessen', 'dinner, supper', 'le dîner', 'das', 'A-bend-es-sen', 'dahs AH-bent-es-sen', ['Wir kochen das Abendessen zusammen.', 'We cook dinner together.', 'Nous préparons le dîner ensemble.']),
    vocab('sp-essen-restaurant-wasser', 'das Wasser', 'the water', 'l’eau', 'das', 'WAS-ser', 'dahs VAH-ser', ['Ich trinke Wasser ohne Kohlensäure.', 'I drink still water.', 'Je bois de l’eau plate.']),
    vocab('sp-essen-restaurant-kaffee', 'der Kaffee', 'the coffee', 'le café', 'der', 'KAF-fee', 'dair KAH-fay', ['Möchtest du einen Kaffee?', 'Would you like a coffee?', 'Veux-tu un café ?']),
    vocab('sp-essen-restaurant-tee', 'der Tee', 'the tea', 'le thé', 'der', 'TEE', 'dair TAY', ['Ein Tee mit Zitrone, bitte.', 'A tea with lemon, please.', 'Un thé au citron, s’il vous plaît.']),
    vocab('sp-essen-restaurant-saft', 'der Saft', 'the juice', 'le jus', 'der', 'SAFT', 'dair ZAHFT', ['Die Kinder trinken Apfelsaft.', 'The children drink apple juice.', 'Les enfants boivent du jus de pomme.']),
    vocab('sp-essen-restaurant-bier', 'das Bier', 'the beer', 'la bière', 'das', 'BIER', 'dahs BEER', ['Ein Bier, bitte.', 'A beer, please.', 'Une bière, s’il vous plaît.']),
    ap('sp-er-e1', 'Kaffee', 'der', ['Kaffee is masculine: der Kaffee.', 'Kaffee est masculin : der Kaffee.']),
    ap('sp-er-e2', 'Wasser', 'das', ['Wasser is neuter: das Wasser.', 'Wasser est neutre : das Wasser.']),
    ap('sp-er-e3', 'Frühstück', 'das', ['The three meals are all neuter: das Frühstück.', 'Les trois repas sont neutres : das Frühstück.']),
    grammar(
      'sp-er-mengen',
      ['Quantities: Glas, Tasse, Flasche, Stück', 'Quantités : Glas, Tasse, Flasche, Stück'],
      [
        'To order a measured amount, put the **container** first and the drink or food right after it — **no “of”**, no case change:\n\n- **ein Glas** Wasser (a glass of water)\n- **eine Tasse** Kaffee (a cup of coffee)\n- **eine Flasche** Wein (a bottle of wine)\n- **ein Stück** Kuchen (a piece of cake)\n- **eine Portion** Pommes (a portion of fries)\n\nThe container takes **ein / eine**, the second noun takes **no article**. After a number the container often stays singular: **zwei Glas** Bier, **zwei Tassen** Tee (feminine nouns take -n).\n\n**Gender of containers:** das Glas, die Tasse, die Flasche, das Stück, die Portion.',
        'Pour commander une quantité, mets le **contenant** en premier et la boisson ou l’aliment juste après — **sans « de »**, sans changement de cas :\n\n- **ein Glas** Wasser (un verre d’eau)\n- **eine Tasse** Kaffee (une tasse de café)\n- **eine Flasche** Wein (une bouteille de vin)\n- **ein Stück** Kuchen (un morceau de gâteau)\n- **eine Portion** Pommes (une portion de frites)\n\nLe contenant prend **ein / eine**, le second nom ne prend **aucun article**. Après un nombre, le contenant reste souvent au singulier : **zwei Glas** Bier, **zwei Tassen** Tee (les féminins prennent -n).\n\n**Genre des contenants :** das Glas, die Tasse, die Flasche, das Stück, die Portion.',
      ],
      [
        ['Ich möchte ein Glas Wasser.', 'I would like a glass of water.', 'Je voudrais un verre d’eau.'],
        ['Eine Tasse Kaffee, bitte.', 'A cup of coffee, please.', 'Une tasse de café, s’il vous plaît.'],
        ['Wir nehmen zwei Stück Kuchen.', 'We’ll have two pieces of cake.', 'Nous prenons deux morceaux de gâteau.'],
      ],
    ),
    match(
      'sp-er-e4',
      [
        ['das Frühstück', 'breakfast', 'le petit-déjeuner'],
        ['das Mittagessen', 'lunch', 'le déjeuner'],
        ['das Abendessen', 'dinner', 'le dîner'],
        ['der Saft', 'the juice', 'le jus'],
        ['der Tee', 'the tea', 'le thé'],
        ['das Bier', 'the beer', 'la bière'],
      ],
      ['Match meals and drinks with their translation.', 'Associe repas et boissons à leur traduction.'],
    ),

    // ── Chapter 2 ────────────────────────────────────────────────
    chapter(
      'Food from A to Z', 'Les aliments de A à Z',
      'Bread, cheese, meat, vegetables — the everyday basics.', 'Pain, fromage, viande, légumes — les basiques du quotidien.',
    ),
    vocab('sp-essen-restaurant-brot', 'das Brot', 'the bread', 'le pain', 'das', 'BROT', 'dahs BROHT', ['In Deutschland gibt es über 3000 Brotsorten.', 'In Germany there are over 3,000 kinds of bread.', 'En Allemagne, il existe plus de 3000 sortes de pain.']),
    vocab('sp-essen-restaurant-broetchen', 'das Brötchen', 'the bread roll', 'le petit pain', 'das', 'BRÖT-chen', 'dahs BRUET-khen', ['Ich hole frische Brötchen vom Bäcker.', 'I am getting fresh rolls from the baker.', 'Je vais chercher des petits pains frais chez le boulanger.']),
    vocab('sp-essen-restaurant-kaese', 'der Käse', 'the cheese', 'le fromage', 'der', 'KÄ-se', 'dair KAY-zeh', ['Der Käse schmeckt sehr gut.', 'The cheese tastes very good.', 'Le fromage est très bon.']),
    vocab('sp-essen-restaurant-ei', 'das Ei', 'the egg', 'l’œuf', 'das', 'EI', 'dahs EYE', ['Zum Frühstück esse ich zwei Eier.', 'For breakfast I eat two eggs.', 'Au petit-déjeuner, je mange deux œufs.']),
    vocab('sp-essen-restaurant-fleisch', 'das Fleisch', 'the meat', 'la viande', 'das', 'FLEISCH', 'dahs FLYSH', ['Sie isst kein Fleisch.', 'She does not eat meat.', 'Elle ne mange pas de viande.']),
    vocab('sp-essen-restaurant-fisch', 'der Fisch', 'the fish', 'le poisson', 'der', 'FISCH', 'dair FISH', ['Freitags essen wir oft Fisch.', 'On Fridays we often eat fish.', 'Le vendredi, nous mangeons souvent du poisson.']),
    vocab('sp-essen-restaurant-gemuese', 'das Gemüse', 'the vegetables', 'les légumes', 'das', 'ge-MÜ-se', 'dahs geh-MUE-zeh', ['Gemüse ist gesund.', 'Vegetables are healthy.', 'Les légumes, c’est bon pour la santé.']),
    vocab('sp-essen-restaurant-obst', 'das Obst', 'the fruit', 'les fruits', 'das', 'OBST', 'dahs OHPST', ['Ich esse jeden Tag Obst.', 'I eat fruit every day.', 'Je mange des fruits tous les jours.']),
    vocab('sp-essen-restaurant-kartoffel', 'die Kartoffel', 'the potato', 'la pomme de terre', 'die', 'kar-TOF-fel', 'dee kar-TOF-el', ['Zum Fisch gibt es Kartoffeln.', 'There are potatoes with the fish.', 'Il y a des pommes de terre avec le poisson.']),
    vocab('sp-essen-restaurant-suppe', 'die Suppe', 'the soup', 'la soupe', 'die', 'SUP-pe', 'dee ZOOP-eh', ['Die Suppe ist noch heiß.', 'The soup is still hot.', 'La soupe est encore chaude.']),
    grammar(
      'sp-er-artikel',
      ['Countable vs. uncountable food', 'Aliments dénombrables et indénombrables'],
      [
        'Foods you cannot count (**Brot, Fleisch, Käse, Obst, Gemüse, Wasser**) are used **without an article** when you talk about them in general, and they are normally used **only in the singular**:\n\n- Ich esse gern **Käse**. · Er trinkt **Wasser**.\n- Ich esse **kein** Fleisch. (negation with **kein**, not *nicht*)\n\nCountable foods have a **plural** and take **ein / eine** in the singular:\n\n- das Ei → **die Eier** · die Kartoffel → **die Kartoffeln** · die Suppe → **die Suppen**\n- der Fisch → **die Fische** · das Brötchen → **die Brötchen**\n- Ich möchte **ein Ei** / **zwei Eier**.\n\nA useful pattern: **Ich esse kein …** (I don’t eat … ), **Ich esse gern …** (I like eating …).',
        'Les aliments qu’on ne peut pas compter (**Brot, Fleisch, Käse, Obst, Gemüse, Wasser**) s’emploient **sans article** quand on en parle en général et s’emploient normalement **seulement au singulier** :\n\n- Ich esse gern **Käse**. · Er trinkt **Wasser**.\n- Ich esse **kein** Fleisch. (négation avec **kein**, pas *nicht*)\n\nLes aliments dénombrables ont un **pluriel** et prennent **ein / eine** au singulier :\n\n- das Ei → **die Eier** · die Kartoffel → **die Kartoffeln** · die Suppe → **die Suppen**\n- der Fisch → **die Fische** · das Brötchen → **die Brötchen**\n- Ich möchte **ein Ei** / **zwei Eier**.\n\nUne tournure utile : **Ich esse kein …** (je ne mange pas de …), **Ich esse gern …** (j’aime manger …).',
      ],
      [
        ['Ich esse gern Käse und Brot.', 'I like eating cheese and bread.', 'J’aime manger du fromage et du pain.'],
        ['Meine Schwester isst kein Fleisch.', 'My sister does not eat meat.', 'Ma sœur ne mange pas de viande.'],
        ['Zwei Eier und drei Brötchen, bitte.', 'Two eggs and three rolls, please.', 'Deux œufs et trois petits pains, s’il vous plaît.'],
      ],
    ),
    ap('sp-er-e5', 'Käse', 'der', ['Käse is masculine: der Käse.', 'Käse est masculin : der Käse.']),
    ap('sp-er-e6', 'Suppe', 'die', ['Suppe ends in -e and is feminine.', 'Suppe finit par -e et est féminin.']),
    ap('sp-er-e7', 'Fleisch', 'das', ['Fleisch is neuter: das Fleisch.', 'Fleisch est neutre : das Fleisch.']),
    mc(
      'sp-er-e8',
      ['What is the plural of "das Ei"?', 'Quel est le pluriel de « das Ei » ?'],
      ['die Eier', 'die Eis', 'die Eien'], ['die Eier', 'die Eis', 'die Eien'], 0,
      ['Ei → Eier (-er).', 'Ei → Eier (-er).'],
    ),
    fb(
      'sp-er-e9',
      ['Ich esse ___ Fleisch. (negation: not any)', 'Ich esse ___ Fleisch. (négation : pas de)'],
      'kein',
      ['Fleisch is neuter: kein.', 'Fleisch est neutre : kein.'],
    ),
    match(
      'sp-er-e10',
      [
        ['das Brot', 'the bread', 'le pain'],
        ['der Käse', 'the cheese', 'le fromage'],
        ['das Fleisch', 'the meat', 'la viande'],
        ['der Fisch', 'the fish', 'le poisson'],
        ['das Gemüse', 'the vegetables', 'les légumes'],
        ['das Obst', 'the fruit', 'les fruits'],
      ],
      ['Match the food words.', 'Associe les noms d’aliments.'],
    ),

    // ── Chapter 3 ────────────────────────────────────────────────
    chapter(
      'Ordering politely', 'Commander poliment',
      'möchte, hätte gern, nehme — and the accusative.', 'möchte, hätte gern, nehme — et l’accusatif.',
    ),
    vocab('sp-essen-restaurant-speisekarte', 'die Speisekarte', 'the menu', 'la carte', 'die', 'SPEI-se-kar-te', 'dee SHPY-zeh-kar-teh', ['Können wir bitte die Speisekarte haben?', 'Could we have the menu, please?', 'Pouvons-nous avoir la carte, s’il vous plaît ?']),
    vocab('sp-essen-restaurant-kellner', 'der Kellner', 'the waiter', 'le serveur', 'der', 'KEL-lner', 'dair KEL-ner', ['Der Kellner bringt die Getränke.', 'The waiter brings the drinks.', 'Le serveur apporte les boissons.']),
    vocab('sp-essen-restaurant-bestellen', 'bestellen', 'to order', 'commander', null, 'be-STEL-len', 'beh-SHTEL-en', ['Wir möchten bestellen.', 'We would like to order.', 'Nous voudrions commander.']),
    grammar(
      'sp-er-bestellen',
      ['Ich möchte / Ich hätte gern / Ich nehme', 'Ich möchte / Ich hätte gern / Ich nehme'],
      [
        'Three polite ways to order — all followed by the **accusative**:\n\n- **Ich möchte** + accusative: *Ich möchte einen Kaffee.*\n- **Ich hätte gern** + accusative: *Ich hätte gern eine Suppe.* (very polite, typical in restaurants)\n- **Ich nehme** + accusative: *Ich nehme den Fisch.* (I’ll take …)\n\nTo ask for something: **Haben Sie …?** · **Könnte ich … haben?** · **Bringen Sie mir bitte …**\n\n**Accusative reminder** (only the masculine changes):\n\n| | nominative | accusative |\n|---|---|---|\n| masculine | der / ein Kaffee | **den / einen** Kaffee |\n| feminine | die / eine Suppe | die / eine Suppe |\n| neuter | das / ein Brot | das / ein Brot |\n| plural | die Brötchen | die Brötchen |\n\n**möchte** is the polite form of *mögen*; **hätte** comes from *haben*. Learn both as fixed phrases at A1.',
        'Trois façons polies de commander — toutes suivies de l’**accusatif** :\n\n- **Ich möchte** + accusatif : *Ich möchte einen Kaffee.*\n- **Ich hätte gern** + accusatif : *Ich hätte gern eine Suppe.* (très poli, typique au restaurant)\n- **Ich nehme** + accusatif : *Ich nehme den Fisch.* (je prends …)\n\nPour demander quelque chose : **Haben Sie …?** · **Könnte ich … haben?** · **Bringen Sie mir bitte …**\n\n**Rappel de l’accusatif** (seul le masculin change) :\n\n| | nominatif | accusatif |\n|---|---|---|\n| masculin | der / ein Kaffee | **den / einen** Kaffee |\n| féminin | die / eine Suppe | die / eine Suppe |\n| neutre | das / ein Brot | das / ein Brot |\n| pluriel | die Brötchen | die Brötchen |\n\n**möchte** est la forme polie de *mögen* ; **hätte** vient de *haben*. Apprends les deux comme des formules figées à ce niveau.',
      ],
      [
        ['Ich möchte einen Kaffee, bitte.', 'I would like a coffee, please.', 'Je voudrais un café, s’il vous plaît.'],
        ['Ich hätte gern eine Suppe.', 'I would like a soup.', 'J’aimerais une soupe.'],
        ['Ich nehme den Fisch mit Kartoffeln.', 'I’ll have the fish with potatoes.', 'Je prends le poisson avec des pommes de terre.'],
        ['Haben Sie auch vegetarische Gerichte?', 'Do you also have vegetarian dishes?', 'Avez-vous aussi des plats végétariens ?'],
      ],
    ),
    fb(
      'sp-er-e11',
      ['Ich möchte ___ Kaffee. (ein — accusative masculine)', 'Ich möchte ___ Kaffee. (ein — accusatif masculin)'],
      'einen',
      ['Masculine accusative: ein → einen.', 'Accusatif masculin : ein → einen.'],
    ),
    fb(
      'sp-er-e12',
      ['Ich nehme ___ Fisch. (der — accusative)', 'Ich nehme ___ Fisch. (der — accusatif)'],
      'den',
      ['Masculine accusative: der → den.', 'Accusatif masculin : der → den.'],
    ),
    fb(
      'sp-er-e13',
      ['Ich hätte ___ eine Suppe. (I would like)', 'Ich hätte ___ eine Suppe. (je voudrais bien)'],
      'gern',
      ['Ich hätte gern … is the fixed phrase.', 'Ich hätte gern … est la formule figée.'],
    ),
    mc(
      'sp-er-e14',
      ['Which order sounds most polite?', 'Quelle commande est la plus polie ?'],
      ['Ich hätte gern einen Tee, bitte.', 'Einen Tee!', 'Ich will einen Tee.'],
      ['Ich hätte gern einen Tee, bitte.', 'Einen Tee !', 'Ich will einen Tee.'], 0,
      ['“hätte gern” + bitte is the politest.', '« hätte gern » + bitte est le plus poli.'],
    ),
    wo('sp-er-e15', ['Ich', 'einen', 'möchte', 'Saft'], ['Ich', 'möchte', 'einen', 'Saft'], ['Verb in second position.', 'Verbe en deuxième position.']),
    grammar(
      'sp-er-gern',
      ['gern, lieber, am liebsten', 'gern, lieber, am liebsten'],
      [
        'To say what you like, use **gern** with an ordinary verb — it goes **after the verb**:\n\n- Ich esse **gern** Pizza. (I like eating pizza.)\n- Ich trinke **lieber** Tee. (I prefer tea.)\n- Ich esse **am liebsten** Fisch. (I like fish best.)\n\nThe three forms **gern – lieber – am liebsten** form a comparison scale. To say what you don’t like: **nicht gern** or **ungern**. A stronger statement: **Ich liebe …** (I love …), **Ich hasse …**.\n\nTo say a dish tastes good: **Das schmeckt (mir) gut / lecker.** — **Das schmeckt mir nicht.**',
        'Pour dire ce que tu aimes, utilise **gern** avec un verbe ordinaire — il se place **après le verbe** :\n\n- Ich esse **gern** Pizza. (J’aime manger de la pizza.)\n- Ich trinke **lieber** Tee. (Je préfère le thé.)\n- Ich esse **am liebsten** Fisch. (Ce que je préfère, c’est le poisson.)\n\nLes trois formes **gern – lieber – am liebsten** forment une échelle de comparaison. Pour ce qu’on n’aime pas : **nicht gern** ou **ungern**. Plus fort : **Ich liebe …** (j’adore …), **Ich hasse …**.\n\nPour dire qu’un plat est bon : **Das schmeckt (mir) gut / lecker.** — **Das schmeckt mir nicht.**',
      ],
      [
        ['Ich esse gern Reis mit Gemüse.', 'I like eating rice with vegetables.', 'J’aime manger du riz avec des légumes.'],
        ['Mein Vater trinkt lieber Tee als Kaffee.', 'My father prefers tea to coffee.', 'Mon père préfère le thé au café.'],
        ['Am liebsten esse ich Fisch.', 'I like fish best.', 'Ce que j’aime le plus, c’est le poisson.'],
        ['Das schmeckt sehr lecker!', 'That tastes delicious!', 'C’est délicieux !'],
      ],
    ),
    vocab('sp-essen-restaurant-lecker', 'lecker', 'tasty, delicious', 'délicieux', null, 'LEK-ker', 'LEK-er', ['Die Suppe schmeckt lecker.', 'The soup tastes delicious.', 'La soupe est délicieuse.']),
    wo('sp-er-e16', ['trinke', 'Ich', 'gern', 'Kaffee'], ['Ich', 'trinke', 'gern', 'Kaffee'], ['gern comes right after the verb.', 'gern se place juste après le verbe.']),

    // ── Chapter 4 ────────────────────────────────────────────────
    chapter(
      'In the restaurant', 'Au restaurant',
      'A complete dialogue, from the menu to the dessert.', 'Un dialogue complet, de la carte au dessert.',
    ),
    vocab('sp-essen-restaurant-hunger', 'der Hunger', 'the hunger', 'la faim', 'der', 'HUN-ger', 'dair HOONG-er', ['Ich habe großen Hunger.', 'I am very hungry.', 'J’ai très faim.']),
    vocab('sp-essen-restaurant-durst', 'der Durst', 'the thirst', 'la soif', 'der', 'DURST', 'dair DOORST', ['Ich habe Durst — ich brauche Wasser.', 'I am thirsty — I need water.', 'J’ai soif — j’ai besoin d’eau.']),
    grammar(
      'sp-er-dialog',
      ['Dialogue: Im Restaurant', 'Dialogue : Im Restaurant'],
      [
        '**Anna** and **Tom** are at a restaurant. The waiter comes:\n\n- **Kellner:** Guten Abend! Hier ist die **Speisekarte**. **Was möchten Sie trinken?**\n- **Anna:** Ich **hätte gern** ein **Glas Wasser**, bitte.\n- **Tom:** Und ich **nehme** ein **Bier**.\n- **Kellner:** Gern. **Haben Sie schon gewählt?**\n- **Anna:** Ja, ich **nehme die Suppe** und dann **den Fisch mit Kartoffeln**.\n- **Tom:** Ich **möchte** das **Hähnchen mit Reis**, bitte.\n- **Kellner:** **Sonst noch etwas?**\n- **Tom:** Nein, danke. … *(later)* Das **schmeckt** sehr **lecker**!\n\nUseful phrases: **Haben Sie schon gewählt?** (Have you decided?) · **Sonst noch etwas?** (Anything else?) · **Guten Appetit!** · **Danke, gleichfalls!**\n\nTo say you are hungry or thirsty: **Ich habe Hunger / Durst.**',
        '**Anna** et **Tom** sont au restaurant. Le serveur arrive :\n\n- **Kellner :** Guten Abend ! Hier ist die **Speisekarte**. **Was möchten Sie trinken ?**\n- **Anna :** Ich **hätte gern** ein **Glas Wasser**, bitte.\n- **Tom :** Und ich **nehme** ein **Bier**.\n- **Kellner :** Gern. **Haben Sie schon gewählt ?**\n- **Anna :** Ja, ich **nehme die Suppe** und dann **den Fisch mit Kartoffeln**.\n- **Tom :** Ich **möchte** das **Hähnchen mit Reis**, bitte.\n- **Kellner :** **Sonst noch etwas ?**\n- **Tom :** Nein, danke. … *(plus tard)* Das **schmeckt** sehr **lecker** !\n\nExpressions utiles : **Haben Sie schon gewählt ?** (Avez-vous choisi ?) · **Sonst noch etwas ?** (Autre chose ?) · **Guten Appetit !** · **Danke, gleichfalls !**\n\nPour dire que tu as faim ou soif : **Ich habe Hunger / Durst.**',
      ],
      [
        ['Was möchten Sie trinken?', 'What would you like to drink?', 'Que désirez-vous boire ?'],
        ['Haben Sie schon gewählt?', 'Have you decided?', 'Avez-vous choisi ?'],
        ['Ich nehme die Suppe und dann den Fisch.', 'I’ll have the soup and then the fish.', 'Je prends la soupe, puis le poisson.'],
        ['Sonst noch etwas?', 'Anything else?', 'Autre chose ?'],
      ],
    ),
    mc(
      'sp-er-e17',
      ['The waiter asks: "Haben Sie schon gewählt?" He wants to know…', 'Le serveur demande : « Haben Sie schon gewählt ? » Il veut savoir…'],
      ['if you have decided what to eat', 'if you have paid', 'if you are hungry'],
      ['si vous avez choisi ce que vous allez manger', 'si vous avez payé', 'si vous avez faim'], 0,
      ['wählen = to choose.', 'wählen = choisir.'],
    ),
    mc(
      'sp-er-e18',
      ['How do you say "I am thirsty"?', 'Comment dit-on « J’ai soif » ?'],
      ['Ich habe Durst.', 'Ich bin Durst.', 'Mir ist Durst.'], ['Ich habe Durst.', 'Ich bin Durst.', 'Mir ist Durst.'], 0,
      ['Hunger and Durst take haben.', 'Hunger et Durst se construisent avec haben.'],
    ),
    lc(
      'sp-er-e19',
      ['Listen. What does the guest order?', 'Écoute. Que commande le client ?'],
      'Ich nehme den Fisch mit Kartoffeln, bitte.',
      ['Fish with potatoes', 'Chicken with rice', 'Soup'], ['Du poisson avec des pommes de terre', 'Du poulet avec du riz', 'De la soupe'], 0,
      ['Listen for Fisch and Kartoffeln.', 'Écoute Fisch et Kartoffeln.'],
    ),

    // ── Chapter 5 ────────────────────────────────────────────────
    chapter(
      'Paying the bill', 'Payer l’addition',
      'Ask for the bill, split it, and tip the German way.', 'Demander l’addition, la partager et laisser un pourboire à l’allemande.',
    ),
    vocab('sp-essen-restaurant-rechnung', 'die Rechnung', 'the bill', 'l’addition, la facture', 'die', 'RECH-nung', 'dee REKH-noong', ['Die Rechnung, bitte!', 'The bill, please!', 'L’addition, s’il vous plaît !']),
    vocab('sp-essen-restaurant-trinkgeld', 'das Trinkgeld', 'the tip', 'le pourboire', 'das', 'TRINK-geld', 'dahs TRINK-gelt', ['Das Trinkgeld ist nicht obligatorisch.', 'Tipping is not compulsory.', 'Le pourboire n’est pas obligatoire.']),
    vocab('sp-essen-restaurant-bezahlen', 'bezahlen', 'to pay', 'payer', null, 'be-ZAH-len', 'beh-TSAH-len', ['Kann ich mit Karte bezahlen?', 'Can I pay by card?', 'Puis-je payer par carte ?']),
    grammar(
      'sp-er-bezahlen',
      ['Paying: Zahlen, bitte!', 'Payer : Zahlen, bitte !'],
      [
        'In Germany you usually **call the waiter** and pay **at the table**. The typical phrases:\n\n- **Zahlen, bitte!** / **Die Rechnung, bitte!** (The bill, please)\n- **Zusammen oder getrennt?** (Together or separately?) — **Getrennt, bitte.** / **Zusammen.**\n- **Kann ich mit Karte bezahlen?** · **Nur bar, leider.** (cash only)\n- **Das macht 24,50 Euro.** (That makes 24.50 euros.)\n\n**Tip (das Trinkgeld):** it is polite to round up by about **5–10 %**. You say the **total you want to pay** while handing over the money: **Stimmt so.** (Keep the change) or **Machen Sie 26.** (Make it 26.)\n\nAmounts: **24,50 Euro** = *vierundzwanzig Euro fünfzig*.',
        'En Allemagne, on **appelle le serveur** et on paie **à table**. Les phrases typiques :\n\n- **Zahlen, bitte !** / **Die Rechnung, bitte !** (L’addition, s’il vous plaît)\n- **Zusammen oder getrennt ?** (Ensemble ou séparément ?) — **Getrennt, bitte.** / **Zusammen.**\n- **Kann ich mit Karte bezahlen ?** · **Nur bar, leider.** (espèces uniquement)\n- **Das macht 24,50 Euro.** (Cela fait 24,50 euros.)\n\n**Le pourboire (das Trinkgeld) :** il est poli d’arrondir de **5 à 10 %** environ. On annonce **la somme totale qu’on veut payer** en tendant l’argent : **Stimmt so.** (Gardez la monnaie) ou **Machen Sie 26.** (Faites 26.)\n\nMontants : **24,50 Euro** = *vierundzwanzig Euro fünfzig*.',
      ],
      [
        ['Zahlen, bitte!', 'The bill, please!', 'L’addition, s’il vous plaît !'],
        ['Zusammen oder getrennt?', 'Together or separately?', 'Ensemble ou séparément ?'],
        ['Das macht vierundzwanzig Euro fünfzig.', 'That makes 24.50 euros.', 'Cela fait 24,50 euros.'],
        ['Stimmt so!', 'Keep the change!', 'Gardez la monnaie !'],
      ],
    ),
    fb(
      'sp-er-e20',
      ['Zusammen oder ___? (separately)', 'Zusammen oder ___ ? (séparément)'],
      'getrennt',
      ['“getrennt” = separately.', '« getrennt » = séparément.'],
    ),
    mc(
      'sp-er-e21',
      ['You say "Stimmt so!" when paying. This means…', 'Tu dis « Stimmt so ! » en payant. Cela signifie…'],
      ['Keep the change.', 'The bill is wrong.', 'I want a receipt.'],
      ['Gardez la monnaie.', 'L’addition est fausse.', 'Je veux un reçu.'], 0,
      ['Stimmt so = that’s right as it is, keep the change.', 'Stimmt so = c’est bon comme ça, gardez la monnaie.'],
    ),
    wo('sp-er-e22', ['bitte', 'Die', 'Rechnung'], ['Die', 'Rechnung', 'bitte'], ['A fixed phrase.', 'Une formule figée.']),

    wrapup(
      '**Meals & drinks** — das Frühstück, das Mittagessen, das Abendessen; der Kaffee, der Tee, der Saft, das Bier, das Wasser.\n\n**Food** — das Brot, das Brötchen, der Käse, das Ei, das Fleisch, der Fisch, das Gemüse, das Obst, die Kartoffel, die Suppe. Uncountable food usually has no article and no plural in everyday use: *Ich esse gern Käse.*\n\n**Quantities** — ein Glas Wasser, eine Tasse Kaffee, ein Stück Kuchen (no “of”).\n\n**Ordering** — Ich möchte / Ich hätte gern / Ich nehme + accusative (einen Kaffee, den Fisch).\n\n**Preferences** — gern, lieber, am liebsten; Das schmeckt lecker.\n\n**Paying** — Zahlen, bitte! · Zusammen oder getrennt? · Stimmt so.',
      '**Repas & boissons** — das Frühstück, das Mittagessen, das Abendessen ; der Kaffee, der Tee, der Saft, das Bier, das Wasser.\n\n**Aliments** — das Brot, das Brötchen, der Käse, das Ei, das Fleisch, der Fisch, das Gemüse, das Obst, die Kartoffel, die Suppe. Les aliments indénombrables s’emploient en général sans article et sans pluriel : *Ich esse gern Käse.*\n\n**Quantités** — ein Glas Wasser, eine Tasse Kaffee, ein Stück Kuchen (sans « de »).\n\n**Commander** — Ich möchte / Ich hätte gern / Ich nehme + accusatif (einen Kaffee, den Fisch).\n\n**Préférences** — gern, lieber, am liebsten ; Das schmeckt lecker.\n\n**Payer** — Zahlen, bitte ! · Zusammen oder getrennt ? · Stimmt so.',
    ),

    // ── Quiz ─────────────────────────────────────────────────────
    quiz('Final quiz: Food & restaurant', 'Quiz final : repas & restaurant'),
    match(
      'sp-er-q1',
      [
        ['die Speisekarte', 'the menu', 'la carte'],
        ['der Kellner', 'the waiter', 'le serveur'],
        ['die Rechnung', 'the bill', 'l’addition'],
        ['bestellen', 'to order', 'commander'],
        ['lecker', 'delicious', 'délicieux'],
      ],
      ['Match each word with its translation.', 'Associe chaque mot à sa traduction.'],
    ),
    ap('sp-er-q2', 'Brot', 'das', ['Brot is neuter.', 'Brot est neutre.']),
    ap('sp-er-q3', 'Kartoffel', 'die', ['Kartoffel is feminine.', 'Kartoffel est féminin.']),
    mc(
      'sp-er-q4',
      ['What is the plural of "die Kartoffel"?', 'Quel est le pluriel de « die Kartoffel » ?'],
      ['die Kartoffeln', 'die Kartoffeler', 'die Kartoffelen'], ['die Kartoffeln', 'die Kartoffeler', 'die Kartoffelen'], 0,
      ['Feminine nouns in -el add -n in the plural.', 'Les noms féminins en -el ajoutent -n au pluriel.'],
    ),
    mc(
      'sp-er-q5',
      ['Which sentence is correct?', 'Quelle phrase est correcte ?'],
      ['Ich möchte einen Kaffee.', 'Ich möchte ein Kaffee.', 'Ich möchte der Kaffee.'],
      ['Ich möchte einen Kaffee.', 'Ich möchte ein Kaffee.', 'Ich möchte der Kaffee.'], 0,
      ['Masculine accusative: einen.', 'Masculin à l’accusatif : einen.'],
    ),
    mc(
      'sp-er-q6',
      ['"Ich esse kein Fleisch" means…', '« Ich esse kein Fleisch » signifie…'],
      ['I don’t eat meat.', 'I eat a lot of meat.', 'I eat a piece of meat.'],
      ['Je ne mange pas de viande.', 'Je mange beaucoup de viande.', 'Je mange un morceau de viande.'], 0,
      ['kein negates a noun without article.', 'kein nie un nom sans article.'],
    ),
    fb(
      'sp-er-q7',
      ['Ich nehme ___ Fisch. (der — accusative)', 'Ich nehme ___ Fisch. (der — accusatif)'],
      'den',
      ['Masculine accusative: den.', 'Accusatif masculin : den.'],
    ),
    fb(
      'sp-er-q8',
      ['Ich hätte ___ eine Suppe. (I would like)', 'Ich hätte ___ eine Suppe. (je voudrais)'],
      'gern',
      ['Ich hätte gern …', 'Ich hätte gern …'],
    ),
    fb(
      'sp-er-q9',
      ['Eine ___ Kaffee, bitte. (a cup of)', 'Eine ___ Kaffee, bitte. (une tasse de)'],
      'Tasse',
      ['die Tasse = the cup.', 'die Tasse = la tasse.'],
    ),
    fb(
      'sp-er-q10',
      ['Ich habe ___. (I am hungry)', 'Ich habe ___. (J’ai faim)'],
      'Hunger',
      ['Ich habe Hunger.', 'Ich habe Hunger.'],
    ),
    wo('sp-er-q11', ['Fisch', 'nehme', 'den', 'Ich'], ['Ich', 'nehme', 'den', 'Fisch'], ['Subject, verb, object.', 'Sujet, verbe, complément.']),
    wo('sp-er-q12', ['trinkt', 'gern', 'Er', 'Tee'], ['Er', 'trinkt', 'gern', 'Tee'], ['gern comes right after the verb.', 'gern se place juste après le verbe.']),
    lc(
      'sp-er-q13',
      ['Listen. What does the guest ask for?', 'Écoute. Que demande le client ?'],
      'Zahlen, bitte! Getrennt, bitte.',
      ['To pay separately', 'To order dessert', 'To see the menu'], ['Payer séparément', 'Commander un dessert', 'Voir la carte'], 0,
      ['Zahlen = pay; getrennt = separately.', 'Zahlen = payer ; getrennt = séparément.'],
    ),
    lc(
      'sp-er-q14',
      ['Listen. What does the speaker want to drink?', 'Écoute. Que veut boire la personne ?'],
      'Ich hätte gern ein Glas Wasser, bitte.',
      ['A glass of water', 'A cup of tea', 'A beer'], ['Un verre d’eau', 'Une tasse de thé', 'Une bière'], 0,
      ['Glas Wasser = a glass of water.', 'Glas Wasser = un verre d’eau.'],
    ),
  ],
});

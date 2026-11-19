// Minimal pairs for the Sounds trainer: two real German words that differ in one sound.
// Plain .mjs so scripts/prepare-audio.mjs can generate the audio.

export const SOUND_GROUPS = [
  { id: 'umlaut-u', en: 'u / ü', fr: 'u / ü', tip: { en: 'For ü round your lips as for u, but say ee.', fr: 'Pour ü, arrondis les lèvres comme pour u, mais dis i.' } },
  { id: 'umlaut-o', en: 'o / ö', fr: 'o / ö', tip: { en: 'For ö round your lips as for o, but say e.', fr: 'Pour ö, arrondis les lèvres comme pour o, mais dis é.' } },
  { id: 'length', en: 'long / short vowel', fr: 'voyelle longue / brève', tip: { en: 'A long vowel is held; a short one is cut off by two consonants.', fr: 'Une voyelle longue se tient ; une brève est coupée par deux consonnes.' } },
  { id: 'ei-ie', en: 'ei / ie', fr: 'ei / ie', tip: { en: 'ei sounds like “eye”, ie like “ee”.', fr: 'ei se prononce « aï », ie se prononce « i ».' } },
  { id: 'ch', en: 'ch / sch', fr: 'ch / sch', tip: { en: 'ch is a soft hiss at the front of the mouth; sch is “sh”.', fr: 'ch est un souffle doux à l’avant de la bouche ; sch est « ch » français.' } },
  { id: 'voice', en: 'voiced / voiceless', fr: 'sonore / sourde', tip: { en: 'Put your hand on your throat: b, d, g, w buzz; p, t, k, f do not.', fr: 'Pose la main sur la gorge : b, d, g, w vibrent ; p, t, k, f non.' } },
  { id: 'z-s', en: 's / z', fr: 's / z', tip: { en: 'German z is “ts”; a single s before a vowel is voiced like English z.', fr: 'Le z allemand est « ts » ; un s seul devant une voyelle est sonore comme z français.' } },
  { id: 'r-l', en: 'r / l', fr: 'r / l', tip: { en: 'l touches the tongue tip behind the teeth; r is made in the throat or rolled.', fr: 'l touche le bout de la langue derrière les dents ; r se fait dans la gorge ou roulé.' } },
];

export const MINIMAL_PAIRS = [
  { id: 'mp01', group: 'umlaut-u', a: 'Mutter', b: 'Mütter', ea: 'mother', eb: 'mothers', fa: 'mère', fb: 'mères' },
  { id: 'mp02', group: 'umlaut-u', a: 'Bruder', b: 'Brüder', ea: 'brother', eb: 'brothers', fa: 'frère', fb: 'frères' },
  { id: 'mp03', group: 'umlaut-u', a: 'Buch', b: 'Bücher', ea: 'book', eb: 'books', fa: 'livre', fb: 'livres' },
  { id: 'mp04', group: 'umlaut-o', a: 'Ofen', b: 'Öfen', ea: 'oven', eb: 'ovens', fa: 'four', fb: 'fours' },
  { id: 'mp05', group: 'umlaut-o', a: 'Sohn', b: 'Söhne', ea: 'son', eb: 'sons', fa: 'fils', fb: 'fils (pl.)' },
  { id: 'mp06', group: 'umlaut-o', a: 'Bogen', b: 'Bögen', ea: 'arch', eb: 'arches', fa: 'arc', fb: 'arcs' },
  { id: 'mp07', group: 'length', a: 'Staat', b: 'Stadt', ea: 'state', eb: 'town', fa: 'État', fb: 'ville' },
  { id: 'mp08', group: 'length', a: 'Miete', b: 'Mitte', ea: 'rent', eb: 'middle', fa: 'loyer', fb: 'milieu' },
  { id: 'mp09', group: 'length', a: 'bieten', b: 'bitten', ea: 'to offer', eb: 'to ask', fa: 'offrir', fb: 'demander' },
  { id: 'mp10', group: 'length', a: 'Ofen', b: 'offen', ea: 'oven', eb: 'open', fa: 'four', fb: 'ouvert' },
  { id: 'mp11', group: 'length', a: 'Beet', b: 'Bett', ea: 'flower bed', eb: 'bed', fa: 'parterre', fb: 'lit' },
  { id: 'mp12', group: 'length', a: 'Hüte', b: 'Hütte', ea: 'hats', eb: 'hut', fa: 'chapeaux', fb: 'cabane' },
  { id: 'mp13', group: 'ei-ie', a: 'Wein', b: 'Wien', ea: 'wine', eb: 'Vienna', fa: 'vin', fb: 'Vienne' },
  { id: 'mp14', group: 'ei-ie', a: 'Leid', b: 'Lied', ea: 'sorrow', eb: 'song', fa: 'peine', fb: 'chanson' },
  { id: 'mp15', group: 'ei-ie', a: 'Reise', b: 'Riese', ea: 'journey', eb: 'giant', fa: 'voyage', fb: 'géant' },
  { id: 'mp16', group: 'ch', a: 'Kirche', b: 'Kirsche', ea: 'church', eb: 'cherry', fa: 'église', fb: 'cerise' },
  { id: 'mp17', group: 'ch', a: 'mich', b: 'misch', ea: 'me', eb: 'mix (imperative)', fa: 'me', fb: 'mélange' },
  { id: 'mp18', group: 'ch', a: 'Küche', b: 'Kuchen', ea: 'kitchen', eb: 'cake', fa: 'cuisine', fb: 'gâteau' },
  { id: 'mp19', group: 'voice', a: 'Tank', b: 'Dank', ea: 'tank', eb: 'thanks', fa: 'réservoir', fb: 'remerciement' },
  { id: 'mp20', group: 'voice', a: 'Pier', b: 'Bier', ea: 'pier', eb: 'beer', fa: 'jetée', fb: 'bière' },
  { id: 'mp21', group: 'voice', a: 'Kasse', b: 'Gasse', ea: 'till', eb: 'alley', fa: 'caisse', fb: 'ruelle' },
  { id: 'mp22', group: 'voice', a: 'Wein', b: 'Bein', ea: 'wine', eb: 'leg', fa: 'vin', fb: 'jambe' },
  { id: 'mp23', group: 'z-s', a: 'Sinn', b: 'Zinn', ea: 'sense', eb: 'tin', fa: 'sens', fb: 'étain' },
  { id: 'mp24', group: 'z-s', a: 'Seit', b: 'Zeit', ea: 'since', eb: 'time', fa: 'depuis', fb: 'temps' },
  { id: 'mp25', group: 'r-l', a: 'Rand', b: 'Land', ea: 'edge', eb: 'country', fa: 'bord', fb: 'pays' },
  { id: 'mp26', group: 'r-l', a: 'Rose', b: 'Lose', ea: 'rose', eb: 'lots', fa: 'rose', fb: 'billets' },
];

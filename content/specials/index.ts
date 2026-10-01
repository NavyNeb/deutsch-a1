import { parseSpecial, type Special, type SpecialGroup } from '../types';
import { GROUP_ORDER } from './meta';

import { modalverben } from './modalverben';
import { trennbareVerben } from './trennbare-verben';
import { perfekt } from './perfekt';
import { praeteritum } from './praeteritum';
import { konjunktiv2 } from './konjunktiv-2';
import { passiv } from './passiv';
import { reflexiveVerben } from './reflexive-verben';
import { verbenPraepositionen } from './verben-praepositionen';
import { genus } from './genus';
import { plural } from './plural';
import { vierFaelle } from './vier-faelle';
import { adjektivendungen } from './adjektivendungen';
import { wechselpraepositionen } from './wechselpraepositionen';
import { wortstellung } from './wortstellung';
import { negation } from './negation';
import { konnektoren } from './konnektoren';
import { hauptNebensaetze } from './haupt-nebensaetze';
import { relativsaetze } from './relativsaetze';
import { infinitivZu } from './infinitiv-zu';
import { indirekteRede } from './indirekte-rede';
import { farbenKleidung } from './farben-kleidung';
import { familie } from './familie';
import { koerperGesundheit } from './koerper-gesundheit';
import { essenRestaurant } from './essen-restaurant';
import { wohnenMoebel } from './wohnen-moebel';
import { zahlenGeldZeit } from './zahlen-geld-zeit';
import { reisenWege } from './reisen-wege';
import { arbeitBerufe } from './arbeit-berufe';
import { wetterNatur } from './wetter-natur';
import { modalpartikeln } from './modalpartikeln';
import { falscheFreunde } from './falsche-freunde';
import { briefeEmails } from './briefe-emails';
import { redewendungen } from './redewendungen';

const raw: unknown[] = [
  modalverben, trennbareVerben, perfekt, praeteritum, konjunktiv2, passiv, reflexiveVerben, verbenPraepositionen,
  genus, plural, vierFaelle, adjektivendungen, wechselpraepositionen,
  wortstellung, negation, konnektoren, relativsaetze, infinitivZu, indirekteRede,
  farbenKleidung, familie, koerperGesundheit, essenRestaurant, wohnenMoebel,
  zahlenGeldZeit, reisenWege, arbeitBerufe, wetterNatur,
  modalpartikeln, falscheFreunde, briefeEmails, redewendungen, hauptNebensaetze,
];

export const specials: Special[] = raw.map(parseSpecial).sort((a, b) => a.number - b.number);

export function getSpecial(slug: string): Special | undefined {
  return specials.find((s) => s.special.slug === slug);
}

export function specialsByGroup(): { group: SpecialGroup; items: Special[] }[] {
  return GROUP_ORDER
    .map((group) => ({ group, items: specials.filter((s) => s.special.group === group) }))
    .filter((g) => g.items.length > 0);
}

// Reverse lookup: the specials that list this lesson under `related`.
export function relatedSpecials(lessonId: string): Special[] {
  return specials.filter((s) => s.special.related.includes(lessonId));
}

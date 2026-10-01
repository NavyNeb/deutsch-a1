import { parseSpecial, type Special, type SpecialGroup } from '../types';
import { GROUP_ORDER } from './meta';

import { modalverben } from './modalverben';
import { konjunktiv2 } from './konjunktiv-2';
import { wortstellung } from './wortstellung';
import { farbenKleidung } from './farben-kleidung';

const raw: unknown[] = [modalverben, konjunktiv2, wortstellung, farbenKleidung];

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

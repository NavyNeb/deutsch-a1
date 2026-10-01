import { parseSpecial, type Special, type SpecialGroup } from '../types';
import { GROUP_ORDER } from './meta';

const raw: unknown[] = [];

export const specials: Special[] = raw.map(parseSpecial).sort((a, b) => a.number - b.number);

export function getSpecial(slug: string): Special | undefined {
  return specials.find((s) => s.special.slug === slug);
}

export function specialsByGroup(): { group: SpecialGroup; items: Special[] }[] {
  return GROUP_ORDER
    .map((group) => ({ group, items: specials.filter((s) => s.special.group === group) }))
    .filter((g) => g.items.length > 0);
}

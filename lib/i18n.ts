import type { Locale } from './locale-store';

// Picks the French value when locale is 'fr' and a French value was authored,
// else falls back to English. Pure — no hooks — so it can be called from
// anywhere (components, lib code) with whatever locale they already have.
export const pick = (en: string, fr: string | undefined, locale: Locale) => (locale === 'fr' && fr ? fr : en);

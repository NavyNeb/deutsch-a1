export const KUMPEL_EVENT = 'open-kumpel';

/** `tour: true` tours the current page; `tour: 'app'` is the first-time shell tour, which goes to Heute. */
export type KumpelOpenDetail = { tab?: 'here' | 'ask'; tour?: boolean | 'app' };

/** Opens Kumpel from anywhere (the palette, Settings). Mirrors the `open-palette` event. */
export function openKumpel(detail?: KumpelOpenDetail): void {
  window.dispatchEvent(new CustomEvent(KUMPEL_EVENT, { detail }));
}

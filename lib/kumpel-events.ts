export const KUMPEL_EVENT = 'open-kumpel';

export type KumpelOpenDetail = { tab?: 'here' | 'ask'; tour?: boolean };

/** Opens Kumpel from anywhere (the palette, Settings). Mirrors the `open-palette` event. */
export function openKumpel(detail?: KumpelOpenDetail): void {
  window.dispatchEvent(new CustomEvent(KUMPEL_EVENT, { detail }));
}

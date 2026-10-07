/* Deutsch service worker — offline shell + runtime caching.
 *
 * Strategies
 *  - /_next/static/*  cache-first   (content-hashed, immutable)
 *  - /audio/*         cache-first   (Range-aware so iOS/Safari <audio> works from cache)
 *  - /dict, /fonts, /illustrations, /icons, /pdfjs, /_next/image   stale-while-revalidate
 *  - navigations      network-first, falling back to the cached page, then /offline
 * Never touched: /api/*, /account, non-GET, cross-origin (Supabase, LanguageTool), RSC fetches.
 * Bump VERSION to drop every cache on the next activate.
 */
const VERSION = 'v1';
const C = {
  static: `deutsch-static-${VERSION}`,
  assets: `deutsch-assets-${VERSION}`,
  media: `deutsch-media-${VERSION}`,
  pages: `deutsch-pages-${VERSION}`,
};
const LIMITS = { [C.static]: 400, [C.assets]: 300, [C.media]: 1500, [C.pages]: 80 };
const OFFLINE_URL = '/offline';
const PRECACHE_PAGES = [OFFLINE_URL, '/', '/textbook', '/specials', '/games', '/dictionary', '/speak', '/write', '/statistics'];
const PRECACHE_ASSETS = ['/icons/icon-192.png', '/icons/icon-512.png', '/icons/apple-touch-icon.png'];
const NEVER_CACHE = [/^\/api\//, /^\/account/, /^\/auth/];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const pages = await caches.open(C.pages);
      // The offline page must succeed; the rest are best-effort warm-ups.
      await pages.add(new Request(OFFLINE_URL, { cache: 'reload' }));
      await Promise.allSettled(PRECACHE_PAGES.filter((u) => u !== OFFLINE_URL).map((u) => pages.add(new Request(u, { cache: 'reload' }))));
      const assets = await caches.open(C.assets);
      await Promise.allSettled(PRECACHE_ASSETS.map((u) => assets.add(u)));
      await self.skipWaiting();
    })(),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set(Object.values(C));
      const names = await caches.keys();
      await Promise.all(names.filter((n) => n.startsWith('deutsch-') && !keep.has(n)).map((n) => caches.delete(n)));
      await self.clients.claim();
    })(),
  );
});

self.addEventListener('message', (event) => {
  if (event.data === 'SKIP_WAITING') self.skipWaiting();
});

async function trim(cacheName) {
  const max = LIMITS[cacheName];
  if (!max) return;
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - max; i++) await cache.delete(keys[i]);
}

const cacheable = (res) => res && res.ok && res.status === 200 && res.type === 'basic';

async function put(cacheName, request, response) {
  const cache = await caches.open(cacheName);
  await cache.put(request, response);
  trim(cacheName);
}

async function cacheFirst(request, cacheName) {
  const hit = await caches.match(request, { cacheName });
  if (hit) return hit;
  const res = await fetch(request);
  if (cacheable(res)) await put(cacheName, request, res.clone());
  return res;
}

async function staleWhileRevalidate(request, cacheName) {
  const hit = await caches.match(request, { cacheName });
  const refresh = fetch(request)
    .then(async (res) => {
      if (cacheable(res)) await put(cacheName, request, res.clone());
      return res;
    })
    .catch(() => undefined);
  if (hit) return hit;
  return (await refresh) || Response.error();
}

// <audio> on Safari always sends Range requests and rejects a 200 for them, so slice cached files into a 206.
async function rangeFromCache(request, hit) {
  const header = request.headers.get('range');
  const m = /^bytes=(\d*)-(\d*)$/.exec(header || '');
  if (!m) return hit;
  const buf = await hit.arrayBuffer();
  const size = buf.byteLength;
  const start = m[1] === '' ? Math.max(0, size - Number(m[2])) : Number(m[1]);
  const end = m[1] === '' || m[2] === '' ? size - 1 : Math.min(Number(m[2]), size - 1);
  if (start >= size || start > end) return new Response(null, { status: 416, headers: { 'Content-Range': `bytes */${size}` } });
  return new Response(buf.slice(start, end + 1), {
    status: 206,
    statusText: 'Partial Content',
    headers: {
      'Content-Type': hit.headers.get('Content-Type') || 'audio/mpeg',
      'Content-Length': String(end - start + 1),
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
    },
  });
}

async function audio(event) {
  const { request } = event;
  const url = new URL(request.url);
  const key = new Request(url.origin + url.pathname); // ignore Range / query when keying
  const hit = await caches.match(key, { cacheName: C.media });
  if (hit) return rangeFromCache(request, hit);

  const res = await fetch(request);
  if (res.status === 200) {
    await put(C.media, key, res.clone());
  } else if (res.status === 206) {
    // A partial response cannot be cached; pull the whole file in the background for next time.
    event.waitUntil(
      fetch(key)
        .then((full) => (full.status === 200 ? put(C.media, key, full) : undefined))
        .catch(() => undefined),
    );
  }
  return res;
}

async function navigation(request) {
  const pages = await caches.open(C.pages);
  try {
    const res = await fetch(request);
    if (cacheable(res) && !res.redirected) await put(C.pages, request, res.clone());
    return res;
  } catch {
    const hit = (await pages.match(request, { ignoreSearch: true })) || (await pages.match(OFFLINE_URL));
    return hit || Response.error();
  }
}

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const path = url.pathname;
  if (NEVER_CACHE.some((re) => re.test(path))) return;

  if (request.mode === 'navigate') {
    event.respondWith(navigation(request));
  } else if (path.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request, C.static));
  } else if (path.startsWith('/audio/')) {
    event.respondWith(audio(event));
  } else if (/^\/(dict|fonts|illustrations|icons|pdfjs)\//.test(path) || path.startsWith('/_next/image')) {
    event.respondWith(staleWhileRevalidate(request, C.assets));
  }
});

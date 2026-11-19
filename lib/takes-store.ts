// The learner's own recordings, kept on this device (IndexedDB; plain memory where that is not available,
// e.g. a private window). Nothing is uploaded.

export type TakeMeta = {
  id: string;
  at: number;        // when it was recorded (ms)
  kind: string;      // 'talk' | 'exam' | 'repeat' | 'roleplay' …
  label: string;     // e.g. the topic or sentence
  seconds: number;
  words: number;
  wordsPerMinute: number;
};
export type Take = TakeMeta & { blob: Blob };

export const MAX_TAKES = 30;

export interface TakeBackend {
  put(take: Take): Promise<void>;
  get(id: string): Promise<Take | undefined>;
  all(): Promise<Take[]>;
  remove(id: string): Promise<void>;
}

export function memoryBackend(): TakeBackend {
  const m = new Map<string, Take>();
  return {
    put: async (t) => { m.set(t.id, t); },
    get: async (id) => m.get(id),
    all: async () => [...m.values()],
    remove: async (id) => { m.delete(id); },
  };
}

const DB = 'deutsch-a1-takes';
const STORE = 'takes';

function idbBackend(): TakeBackend | null {
  if (typeof indexedDB === 'undefined') return null;
  const open = () => new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => { req.result.createObjectStore(STORE, { keyPath: 'id' }); };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
  const run = async <T>(mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> => {
    const db = await open();
    return new Promise<T>((resolve, reject) => {
      const tx = db.transaction(STORE, mode);
      const req = fn(tx.objectStore(STORE));
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
      tx.oncomplete = () => db.close();
    });
  };
  return {
    put: async (t) => { await run('readwrite', (s) => s.put(t)); },
    get: (id) => run('readonly', (s) => s.get(id)) as Promise<Take | undefined>,
    all: () => run('readonly', (s) => s.getAll()) as Promise<Take[]>,
    remove: async (id) => { await run('readwrite', (s) => s.delete(id)); },
  };
}

let shared: TakeBackend | null = null;
function backend(): TakeBackend {
  if (!shared) shared = idbBackend() ?? memoryBackend();
  return shared;
}

/** For tests: use a fresh backend. */
export function useBackendForTests(b: TakeBackend | null) { shared = b; }

export async function saveTake(take: Take, b: TakeBackend = backend()): Promise<void> {
  try {
    await b.put(take);
    // Keep the newest MAX_TAKES; old recordings are not worth the disk space.
    const all = (await b.all()).sort((x, y) => y.at - x.at);
    for (const old of all.slice(MAX_TAKES)) await b.remove(old.id);
  } catch { /* storage full or blocked: the learner just loses the replay */ }
}

export async function listTakes(b: TakeBackend = backend()): Promise<TakeMeta[]> {
  try {
    return (await b.all()).sort((x, y) => y.at - x.at).map(({ blob: _blob, ...meta }) => { void _blob; return meta; });
  } catch { return []; }
}

export async function getTake(id: string, b: TakeBackend = backend()): Promise<Take | undefined> {
  try { return await b.get(id); } catch { return undefined; }
}

export async function deleteTake(id: string, b: TakeBackend = backend()): Promise<void> {
  try { await b.remove(id); } catch { /* ignore */ }
}

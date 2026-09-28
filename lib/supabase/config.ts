// Auth/sync are optional: if these env vars aren't set, the app still works
// fully on localStorage and simply hides the account UI (same philosophy as the
// optional Claude assist feature).
export const supabaseConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

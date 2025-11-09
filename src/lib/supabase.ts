import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as
  | string
  | undefined;

if (!supabaseUrl) {
  throw new Error("VITE_SUPABASE_URL is missing. Add it to .env or .env.local");
}
if (!supabaseAnonKey) {
  throw new Error(
    "VITE_SUPABASE_ANON_KEY is missing. Add it to .env or .env.local"
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

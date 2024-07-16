
import { createBrowserClient } from "@supabase/ssr";

export const createClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Add null/undefined checks for the environment variables
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing necessary environment variables: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey);
};


import { createServerClient } from "@supabase/ssr";

export const createClient = (cookieStore) => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Add null/undefined checks for the environment variables
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing necessary environment variables: NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.');
  }

  return createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            console.error(`Failed to set cookie: ${name}`, error);
            // Additional handling logic if necessary
          }
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            console.error(`Failed to remove cookie: ${name}`, error);
            // Additional handling logic if necessary
          }
        },
      },
    },
  );
};

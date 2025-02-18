import { createClient } from "@supabase/supabase-js";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.supaBaseUrl,
    config.public.supaBaseKey
  );

  return {
    provide: {
      supabase,
    },
  };
});

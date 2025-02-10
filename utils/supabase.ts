import { createClient, SupabaseClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const apiKey = config.public.supaBaseKey;
const supabaseUrl: string = "https://nacxpfuwluqkropjezyu.supabase.co"; // Replace with your Supabase URL
const supabaseKey: string = apiKey; // Replace with your Supabase Key
export const supabase = createClient(supabaseUrl, supabaseKey);
// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo, useCookie } from "#app";

export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie("user");
  if (!user.value && to.path.startsWith("/admin")) {
    return navigateTo("/admin/login");
  }
});

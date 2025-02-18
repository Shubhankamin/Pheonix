import { ref } from "vue";

export function useAuth() {
  const supabase = useNuxtApp().$supabase as any; // Use Supabase from Nuxt Plugin
  const email = ref<string>("");
  const password = ref<string>("");
  const loading = ref<boolean>(false);

  const login = async (): Promise<any> => {
    loading.value = true;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    loading.value = false;

    if (error) {
      console.error("Login error:", error.message);
      return { error: error.message };
    }

    return { session: data.session };
  };

  const logout = async (): Promise<void> => {
    await supabase.auth.signOut();
  };

  return { email, password, loading, login, logout };
}

import { ref } from "vue";
import { supabase } from "~/plugins/supabase";
import { useCookie, navigateTo } from "#app";

export function Login() {
  const email = ref<string>("");
  const password = ref<string>("");
  const loading = ref<boolean>(false);
  const user = useCookie<any>("user");

  const login = async (): Promise<void> => {
    loading.value = true;
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    loading.value = false;
    if (error) return alert(error.message);
    user.value = data.session;
    navigateTo("/admin");
  };

  const logout = async (): Promise<void> => {
    await supabase.auth.signOut();
    user.value = null;
    navigateTo("/admin/login");
  };

  return { email, password, loading, login, logout };
}

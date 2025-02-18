<template>
  <div>
    <Nav />
    <div
      class="login-container d-flex flex-column align-center justify-center"
      style="height: 100vh"
    >
      <v-container fluid>
        <v-row class="justify-center">
          <v-col cols="12" md="6">
            <v-card class="card text-white">
              <v-row class="justify-center pt-5">
                <v-col cols="10" md="4" class="d-flex justify-center">
                  <v-img src="/images/logo/logo-pheo-2.png"></v-img>
                </v-col>
              </v-row>
              <v-card-title class="text-center text-h5 py-6"
                >Admin</v-card-title
              >
              <v-card-text>
                <v-form @submit.prevent="handleLogin">
                  <v-row class="justify-center">
                    <v-col cols="8">
                      <v-text-field
                        v-model="email"
                        density="compact"
                        placeholder="Email Address"
                        prepend-inner-icon="mdi-email-outline"
                        variant="outlined"
                        label="Email Address"
                        :rules="[emailRule]"
                        required
                      />
                      <v-text-field
                        v-model="password"
                        density="compact"
                        placeholder="Password"
                        type="password"
                        variant="outlined"
                        label="Password"
                        :rules="[passwordRule]"
                        required
                        class="mt-4"
                      />
                    </v-col>
                  </v-row>
                  <v-row class="justify-center">
                    <v-col cols="4" class="py-5">
                      <v-btn
                        type="submit"
                        color="white"
                        block
                        :loading="loading"
                        :disabled="!isFormValid"
                        class="py-5 text-black"
                        >Login</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Snackbar for Success & Error Messages -->
      <v-snackbar
        v-model="snackbar"
        :timeout="3000"
        :color="snackbarColor"
        location="top right"
      >
        {{ snackbarMessage }}
      </v-snackbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useAuth } from "../../composables/auth";
import { useCookie, navigateTo } from "#app";

const { email, password, loading, login } = useAuth();
const user = useCookie<any>("user");

const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("error");

const emailRule = (v: string) =>
  (!!v && /.+@.+\..+/.test(v)) || "Enter a valid email address";
const passwordRule = (v: string) =>
  (!!v && v.length >= 6) || "Password must be at least 6 characters";

const isFormValid = computed(() => {
  return /.+@.+\..+/.test(email.value) && password.value.length >= 6;
});

const handleLogin = async () => {
  const { session, error } = await login();

  if (error) {
    snackbarMessage.value = error;
    snackbarColor.value = "error";
    snackbar.value = true;
    return;
  }

  snackbarMessage.value = "Login successful!";
  snackbarColor.value = "success";
  snackbar.value = true;

  user.value = session;
  setTimeout(() => {
    navigateTo("/admin");
  }, 500);
};
</script>
<style scoped>
.card {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), black);
}
</style>

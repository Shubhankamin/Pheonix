<template>
  <div
    class="login-container d-flex flex-column align-center justify-center"
    style="height: 100vh"
  >
    <v-container fluid>
      <v-row class="justify-center">
        <v-col cols="6">
          <v-card>
            <v-row class="justify-center pt-5">
              <v-col cols="4">
                <v-img src="/images/logo/logo-pheo-2.png"></v-img>
              </v-col>
            </v-row>
            <v-card-title class="text-center text-h5 py-6">Admin</v-card-title>
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
                    />
                    <v-text-field
                      v-model="password"
                      density="compact"
                      placeholder="Password"
                      type="password"
                      variant="outlined"
                      label="Password"
                    />
                  </v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col cols="4" class="py-5">
                    <v-btn
                      type="submit"
                      color="black"
                      block
                      :loading="loading"
                      class="py-5"
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
  </div>
</template>

<script setup lang="ts">
import { useAuth } from "../../composables/auth";
import { useCookie, navigateTo } from "#app";

const { email, password, loading, login } = useAuth();
const user = useCookie<any>("user");

const handleLogin = async () => {
  const { session, error } = await login();
  if (error) return alert(error);
  user.value = session;
  navigateTo("/admin");
};
</script>

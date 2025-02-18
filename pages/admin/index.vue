<template>
  <v-container class="admin-panel">
    <h2>Admin Panel</h2>
    <v-file-input label="Upload Image" @change="handleFileUpload" />
    <v-btn @click="uploadImage" :loading="loading" color="primary"
      >Upload</v-btn
    >

    <v-container class="gallery">
      <v-row>
        <v-col v-for="image in images" :key="image" cols="12" md="4">
          <v-card>
            <v-img :src="image" height="200px"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-btn @click="handleLogout" color="error">Logout</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuth } from "~/composables/auth";
import { useNuxtApp, useCookie, useRouter } from "#app";

import { createClient } from "@supabase/supabase-js";
const config = useRuntimeConfig();
const key = config.public.supaBaseKey;
const bkUrl = config.public.supaBaseUrl;
const supabaseUrl = bkUrl;
const supabaseKey = key;
const supabase = createClient(supabaseUrl, supabaseKey);
const images = ref<string[]>([]);
const file = ref<File | null>(null);
const loading = ref<boolean>(false);
const user = useCookie<any>("user");
const { logout } = useAuth();
const router = useRouter();

const handleFileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  if (target.files) file.value = target.files[0];
};

const uploadImage = async (): Promise<void> => {
  if (!file.value) return;
  loading.value = true;

  const fileName = `${Date.now()}-${file.value.name}`;
  const BUCKET_NAME = "pheonix";

  const { error } = await supabase?.storage
    .from(BUCKET_NAME)
    .upload(fileName, file.value);

  if (error) {
    loading.value = false;
    console.error("Upload error:", error.message);
    return alert(error.message);
  }

  // Fetch the new image URL and add it to the images list
  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);
  images.value.unshift(data.publicUrl); // Add newly uploaded image to the start of the array

  loading.value = false;
};

const fetchImages = async (): Promise<void> => {
  const BUCKET_NAME = "pheonix";

  const { data, error } = await supabase.storage.from(BUCKET_NAME).list();
  if (error) {
    console.error("Error fetching images:", error.message);
    return;
  }

  const signedUrls = await Promise.all(
    data.map(async (img) => {
      const { data: signedUrlData, error: signedUrlError } =
        await supabase.storage
          .from(BUCKET_NAME)
          .createSignedUrl(img.name, 60 * 60 * 24); // 24-hour expiry

      if (signedUrlError) {
        console.error("Error generating signed URL:", signedUrlError.message);
        return null;
      }

      return signedUrlData.signedUrl;
    })
  );

  images.value = signedUrls.filter((url) => url !== null);
};

const handleLogout = async (): Promise<void> => {
  await logout();
  user.value = null;
  router.push("/admin/login");
};

onMounted(fetchImages);
</script>

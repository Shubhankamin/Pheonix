<template>
  <v-container class="admin-panel">
    <h2>Admin Panel</h2>
    <v-file-input
      label="Upload Image"
      @change="handleFileUpload"
      ref="fileInput"
    />

    <div class="d-flex justify-space-between">
      <v-btn @click="uploadImage" :loading="loading" color="primary"
        >Upload</v-btn
      >
      <v-btn @click="openLogoutDialog" color="error">Logout</v-btn>
    </div>

    <v-container class="gallery mt-5">
      <v-row>
        <v-col v-for="image in images" :key="image" cols="12" md="4">
          <v-card>
            <v-img :src="image" height="200px"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Snackbar for Upload Success/Error Messages -->
    <v-snackbar
      v-model="snackbar"
      :timeout="3000"
      :color="snackbarColor"
      location="top right"
    >
      {{ snackbarMessage }}
    </v-snackbar>

    <!-- Logout Confirmation Dialog -->
    <v-dialog v-model="logoutDialog" max-width="400px">
      <v-card>
        <p class="text-center my-5 ubuntu-regular-h3">
          Are you sure you want to log out?
        </p>
        <v-card-actions class="mb-2 px-4">
          <v-btn @click="closeLogoutDialog" color="white" class="bg-black"
            >Cancel</v-btn
          >
          <v-btn
            @click="handleLogout"
            color="black"
            class="bg-white"
            style="border: 1px solid black"
            >Yes</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useAuth } from "~/composables/auth";
import { useCookie, useRouter } from "#app";
import { createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabase = createClient(
  config.public.supaBaseUrl,
  config.public.supaBaseKey
);

const images = ref<string[]>([]);
const file = ref<File | null>(null);
const fileInput = ref<HTMLElement | null>(null);
const loading = ref<boolean>(false);
const user = useCookie<any>("user");
const { logout } = useAuth();
const router = useRouter();
const MAX_FILE_SIZE = 1 * 1024 * 1024;

const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("error");

const logoutDialog = ref(false);

const handleFileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  if (target.files) {
    const selectedFile = target.files[0];

    if (selectedFile.size > MAX_FILE_SIZE) {
      snackbarMessage.value = "File size must be less than 1MB.";
      snackbarColor.value = "error";
      snackbar.value = true;
      return;
    }

    file.value = selectedFile;
  }
};

const uploadImage = async (): Promise<void> => {
  if (!file.value) {
    snackbarMessage.value = "Please select an image to upload.";
    snackbarColor.value = "error";
    snackbar.value = true;

    if (fileInput.value) {
      fileInput.value.$el.querySelector("input")?.focus();
    }

    return;
  }

  loading.value = true;

  const fileName = `${Date.now()}-${file.value.name}`;
  const BUCKET_NAME = "pheonix";

  const { error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file.value);

  if (error) {
    loading.value = false;
    snackbarMessage.value = `Upload error: ${error.message}`;
    snackbarColor.value = "error";
    snackbar.value = true;
    return;
  }

  const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);
  images.value.unshift(data.publicUrl);

  loading.value = false;
  snackbarMessage.value = "Image uploaded successfully!";
  snackbarColor.value = "success";
  snackbar.value = true;

  // Refresh images list without reloading the entire page
  await fetchImages();
};

const fetchImages = async (): Promise<void> => {
  const BUCKET_NAME = "pheonix";

  const { data, error } = await supabase.storage.from(BUCKET_NAME).list();
  if (error) {
    snackbarMessage.value = `Error fetching images: ${error.message}`;
    snackbarColor.value = "error";
    snackbar.value = true;
    return;
  }

  const signedUrls = await Promise.all(
    data.map(async (img) => {
      const { data: signedUrlData, error: signedUrlError } =
        await supabase.storage
          .from(BUCKET_NAME)
          .createSignedUrl(img.name, 60 * 60 * 24);

      if (signedUrlError) {
        console.error("Error generating signed URL:", signedUrlError.message);
        return null;
      }

      return signedUrlData.signedUrl;
    })
  );

  images.value = signedUrls.filter((url) => url !== null);
};

const openLogoutDialog = () => {
  logoutDialog.value = true;
};

const closeLogoutDialog = () => {
  logoutDialog.value = false;
};

const handleLogout = async () => {
  await logout();
  user.value = null;
  snackbarMessage.value = "Logout successfull!";
  snackbarColor.value = "success";
  snackbar.value = true;
  router.push("/admin/login");
  closeLogoutDialog();
};

onMounted(fetchImages);
</script>

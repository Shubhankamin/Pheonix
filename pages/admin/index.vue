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

    <v-btn @click="logout" color="error">Logout</v-btn>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "~/utils/supabase"; // Manually import Supabase
import { useCookie, navigateTo } from "#app";

const images = ref<string[]>([]);
const file = ref<File | null>(null);
const loading = ref<boolean>(false);
const user = useCookie<any>("user");

const handleFileUpload = (event: Event): void => {
  const target = event.target as HTMLInputElement;
  if (target.files) file.value = target.files[0];
};

const uploadImage = async (): Promise<void> => {
  if (!file.value) return;
  loading.value = true;

  const fileName = `${Date.now()}-${file.value.name}`;
  const BUCKET_NAME = "pheonix"; // Ensure this matches your Supabase bucket

  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .upload(fileName, file.value);

  if (error) {
    loading.value = false;
    console.error("Upload error:", error.message);
    return alert(error.message);
  }

  const publicUrl = supabase.storage.from(BUCKET_NAME).getPublicUrl(fileName);
  images.value.push(publicUrl.publicUrl);
  loading.value = false;
};


const fetchImages = async (): Promise<void> => {
  const BUCKET_NAME = "pheonix";
  const S3_BASE_URL = "https://nacxpfuwluqkropjezyu.supabase.co/storage/v1/s3";

  const { data, error } = await supabase.storage.from(BUCKET_NAME).list();
  if (error) {
    console.error("Error fetching images:", error.message);
    return;
  }

  images.value = data.map((img) => `${S3_BASE_URL}/${img.name}`);
  console.log(images.value, "feyched images");
};

const logout = async (): Promise<void> => {
  await supabase.auth.signOut();
  user.value = null;
  navigateTo("/admin/login");
};

onMounted(fetchImages);
</script>

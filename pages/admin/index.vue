<template>
  <div class="admin-panel">
    <h2>Admin Panel</h2>
    <input type="file" @change="handleFileUpload" />
    <button @click="uploadImage" :disabled="loading">Upload</button>
    <div class="gallery">
      <img v-for="image in images" :src="image" :key="image" />
    </div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { supabase } from "~/utils/supabase";
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
  const { data, error } = await supabase.storage
    .from("gallery")
    .upload(fileName, file.value);
  loading.value = false;
  if (error) return alert(error.message);
  const { publicURL } = supabase.storage.from("gallery").getPublicUrl(fileName);
  images.value.push(publicURL);
};

const fetchImages = async (): Promise<void> => {
  const { data, error } = await supabase.storage.from("gallery").list();
  if (error) return;
  images.value = data.map(
    (img) => supabase.storage.from("gallery").getPublicUrl(img.name).publicURL
  );
};

const logout = async (): Promise<void> => {
  await supabase.auth.signOut();
  user.value = null;
  navigateTo("/admin/login");
};

onMounted(fetchImages);
</script>

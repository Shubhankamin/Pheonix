<template>
  <div>
    <form @submit.prevent="uploadImage">
      <input type="file" @change="onFileChange" />
      <button type="submit">Upload</button>
    </form>

    <div v-if="uploadedUrl">
      <h3>Uploaded Image:</h3>
      <img :src="uploadedUrl" alt="Uploaded image" />
    </div>

    <h3>Gallery:</h3>
    <div v-if="images.length">
      <div v-for="image in images" :key="image.name">
        <img :src="image.url" :alt="image.name" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

// State variables
const uploadedUrl = ref("");
const images = ref([]);
const selectedFile = ref(null);

// File selection handler
const onFileChange = (event) => {
  selectedFile.value = event.target.files[0];
  if (selectedFile.value) {
    console.log("File selected:", selectedFile.value.name);
  } else {
    console.log("No file selected.");
  }
};

// File upload handler
const uploadImage = async () => {
  if (!selectedFile.value) {
    console.log("No file chosen for upload.");
    return;
  }

  console.log("Preparing to upload file:", selectedFile.value.name);

  const formData = new FormData();
  formData.append("image", selectedFile.value);

  try {
    console.log("Uploading file...");
    const response = await $fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    uploadedUrl.value = response.url;
    console.log("File uploaded successfully:", response.url);

    fetchImages(); // Refresh the gallery after uploading
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};

// Fetch gallery images
const fetchImages = async () => {
  try {
    console.log("Fetching images from gallery...");
    images.value = await $fetch("/api/images");
    console.log("Fetched images:", images.value);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

// Fetch images on component mount
onMounted(() => {
  console.log("Component mounted. Fetching initial images...");
  fetchImages();
});
</script>

<style scoped>
img {
  max-width: 200px;
  margin: 10px;
}
</style>

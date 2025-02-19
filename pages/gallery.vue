<template>
  <div>
    <!-- Loader -->
    <div v-if="isLoading" class="loading-spinner">
      <div class="loading-spinner-inner">
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
      </div>
    </div>

    <!-- Gallery -->
    <v-container fluid v-show="!isLoading">
      <v-row class="pa-0">
        <v-col class="pa-0">
          <Nav />
          <v-row class="pa-5">
            <v-col
              v-for="(image, index) in images"
              :key="index"
              cols="6"
              md="3"
            >
              <v-card class="image-card" @click="show(image.url, index)">
                <v-img
                  :src="image.url"
                  class="image"
                  height="200px"
                  cover
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-0">
              <Footer />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { api as viewerApi } from "v-viewer";
import "viewerjs/dist/viewer.css";
import { useGallery } from "~/composables/useGallery";

// Get the fetchImages function from the composable
const { images, fetchImages } = useGallery();

const isLoading = ref(true);

// Fetch images on mount
onMounted(async () => {
  isLoading.value = true;
  try {
    // Fetch images and store them in images.value
    await fetchImages();
    console.log("Fetched Images:", images.value); // Debugging log to verify
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    isLoading.value = false;
  }
});

// Function to show images using Viewer.js
const show = (imageUrl, index) => {
  if (!imageUrl) return; // Check if imageUrl exists

  // Debugging the clicked image URL
  console.log("Clicked image URL:", imageUrl);

  const viewerInstance = viewerApi({
    images: images.value.map((img) => img.url), // Ensure it's an array of URLs
    options: {
      zIndex: 9999,
      toolbar: true,
      title: true,
      loading: true,
    },
  });

  viewerInstance.view(index);
};
</script>

<style scoped>
.image-card {
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 9999;
}

.loading-spinner-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner-circle {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: red;
  margin: 0 5px;
  animation: loading-spinner 1s ease-in-out infinite;
}

@keyframes loading-spinner {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

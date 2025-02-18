<template>
  <div>
    <div v-if="isLoading" class="loading-spinner">
      <div class="loading-spinner-inner">
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
      </div>
    </div>
    <v-container fluid v-show="!isLoading">
      <v-row class="pa-0">
        <v-col class="pa-0">
          <Nav />
          <v-row class="pa-5">
            <v-col v-for="(image, index) in images" :key="index" cols="6" md="3">
              <v-card class="image-card" @click="show(image, images, index)">
                <v-img :src="image" class="image" height="200px" cover></v-img>
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
import { useGallery } from "~/composables/useGallery";

const { images, fetchImages } = useGallery();
const isLoading = ref(true);

const show = (src, itemsImage, index) => {
  viewerApi({
    images: itemsImage,
    options: { zIndex: 9999, toolbar: true, title: true, loading: true },
  }).view(index);
};

onMounted(async () => {
  isLoading.value = true;
  try {
    await fetchImages();
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    isLoading.value = false;
  }
});
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
  background-color: black; /* Change as needed */
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

.loading-spinner-circle:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-spinner-circle:nth-child(3) {
  animation-delay: 0.4s;
}

.loading-spinner-circle:nth-child(4) {
  animation-delay: 0.6s;
}

.loading-spinner-circle:nth-child(5) {
  animation-delay: 0.8s;
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

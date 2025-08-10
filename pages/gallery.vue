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

    <v-container fluid v-else class="overflow-x-hidden">
      <v-row class="pa-0">
        <v-col class="pa-0">
          <Nav />

          <v-alert
            v-if="showTip"
            type="info"
            variant="tonal"
            border="start"
            border-color="primary"
            closable
            @click:close="showTip = false"
            class=" mt-3 pb-10 text-white ubuntu-regular-h4 align-center"
            style="position:absolute; height: 6vh; z-index:99999999 ; right:0.5%; background: linear-gradient(to right, #2196f3, #21cbf3); opacity: 80%;
"
          >
            💡 Click on any image to view it in full size!
          </v-alert>

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

const { images, fetchImages } = useGallery();

const isLoading = ref(true);
const showTip = ref(true);
onMounted(async () => {
  try {
    await fetchImages();
    console.log("Fetched Images:", images.value);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay for 2 seconds
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
  }
  setTimeout(() => {
    isLoading.value = false;
  }, 1500);
});

const show = (imageUrl, index) => {
  if (!imageUrl) return;
  console.log("Clicked image URL:", imageUrl);

  const viewerInstance = viewerApi({
    images: images.value.map((img) => img.url),
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

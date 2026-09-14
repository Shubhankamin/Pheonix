<template>
  <div class="gallery-page">
    <div v-if="isLoading" class="loading-spinner">
      <div class="loading-content">
        <div class="loading-spinner-inner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <p class="loading-title">Loading Gallery...</p>

        <p class="loading-message">Please wait while we load the images.</p>
      </div>
    </div>

    <v-container v-else fluid class="gallery-container pa-0">
      <Nav />

      <v-alert
        v-if="showTip"
        closable
        class="gallery-tip"
        @click:close="showTip = false"
      >
        <div class="tip-content">
          <v-icon class="tip-icon"> mdi-information-outline </v-icon>

          <span class="tip-text">
            Click any image to view it in full size.
          </span>
        </div>
      </v-alert>

      <section class="gallery-header">
        <h1 class="ubuntu-regular-h1">Gallery</h1>
        <p class="ubuntu-regular-h4">
          Explore moments from Phoenix Academy India.
        </p>
      </section>

      <v-row class="gallery-grid ma-0">
        <v-col
          v-for="(image, index) in images"
          :key="index"
          cols="6"
          sm="6"
          md="4"
          lg="3"
          class="gallery-column"
        >
          <v-card
            class="image-card"
            elevation="0"
            @click="show(image.url, index)"
          >
            <v-img
              :src="image.url"
              :lazy-src="image.url"
              height="220"
              cover
              class="gallery-image"
            />

            <div class="image-overlay">
              <v-icon> mdi-magnify-plus-outline </v-icon>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <Footer />
    </v-container>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { api as viewerApi } from "v-viewer";
import "viewerjs/dist/viewer.css";
import { useGallery } from "~/composables/useGallery";

const { images, fetchImages } = useGallery();

const isLoading = ref(true);
const showTip = ref(true);

onMounted(async () => {
  const startTime = Date.now();

  try {
    await fetchImages();
  } catch (error) {
    console.error("Error fetching images:", error);
  } finally {
    const elapsedTime = Date.now() - startTime;
    const minimumLoadingTime = 800;
    const remainingTime = Math.max(0, minimumLoadingTime - elapsedTime);

    setTimeout(() => {
      isLoading.value = false;
    }, remainingTime);
  }
});

const show = (imageUrl, index) => {
  if (!imageUrl || !images.value.length) return;

  const viewerInstance = viewerApi({
    images: images.value.map((image) => image.url),
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
.gallery-page {
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
}

.gallery-container {
  min-height: 100vh;
  background-color: #000000;
}

.gallery-header {
  padding: 55px 25px 35px;
  text-align: center;
}

.gallery-header h1 {
  margin: 0 0 10px;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.gallery-header p {
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
}

.gallery-grid {
  padding: 0 30px 55px;
}

.gallery-column {
  padding: 8px;
}

.image-card {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 180, 0, 0.15);
  background-color: #1d1d2b;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.gallery-image {
  transition: transform 0.4s ease;
}

.image-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(79, 0, 11, 0.65);
  color: #ffb400;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-overlay .v-icon {
  font-size: 38px;
}

.image-card:hover {
  transform: translateY(-5px);
  border-color: #ffb400;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.image-card:hover .gallery-image {
  transform: scale(1.05);
}

.image-card:hover .image-overlay {
  opacity: 1;
}

.gallery-tip {
  position: fixed;
  top: 100px;
  right: 25px;
  z-index: 1001;
  width: auto;
  max-width: 380px;
  padding: 12px 45px 12px 16px;
  border: 1px solid rgba(255, 180, 0, 0.7);
  border-radius: 4px;
  background-color: #1d1d2b !important;
  color: #ffffff !important;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.45);
}

.tip-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.tip-icon {
  flex-shrink: 0;
  color: #ffb400 !important;
  font-size: 24px;
}

.tip-text {
  color: #ffffff !important;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
}

:deep(.gallery-tip .v-alert__close) {
  color: #ffffff !important;
  opacity: 0.8;
}

:deep(.gallery-tip .v-alert__close:hover) {
  color: #ffb400 !important;
  opacity: 1;
}

.loading-spinner {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
}

.loading-spinner-inner {
  display: flex;
  align-items: center;
  gap: 8px;
}

.loading-spinner-inner span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #ffb400;
  animation: loading 1s ease-in-out infinite;
}

.loading-spinner-inner span:nth-child(2) {
  animation-delay: 0.1s;
}

.loading-spinner-inner span:nth-child(3) {
  animation-delay: 0.2s;
}

.loading-spinner-inner span:nth-child(4) {
  animation-delay: 0.3s;
}

.loading-spinner-inner span:nth-child(5) {
  animation-delay: 0.4s;
}

@keyframes loading {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.5;
  }

  50% {
    transform: translateY(-8px);
    opacity: 1;
  }
}

@media (max-width: 959px) {
  .gallery-header {
    padding: 45px 20px 30px;
  }

  .gallery-grid {
    padding: 0 20px 45px;
  }

  .gallery-column {
    padding: 6px;
  }

  .gallery-image {
    height: 200px !important;
  }
}

@media (max-width: 600px) {
  .gallery-header {
    padding: 35px 20px 25px;
  }

  .gallery-header h1 {
    font-size: 34px;
  }

  .gallery-grid {
    padding: 0 12px 35px;
  }

  .gallery-column {
    padding: 5px;
  }

  .gallery-image {
    height: 160px !important;
  }

  @media (max-width: 600px) {
    .gallery-tip {
      top: 80px;
      right: 12px;
      left: 12px;
      width: auto;
      max-width: none;
      padding: 11px 42px 11px 14px;
    }

    .tip-content {
      gap: 10px;
    }

    .tip-icon {
      font-size: 21px;
    }

    .tip-text {
      font-size: 13px;
    }
  }

  .image-card:hover {
    transform: none;
  }

  .image-overlay {
    display: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .image-card,
  .gallery-image,
  .image-overlay {
    transition: none;
  }

  .loading-spinner-inner span {
    animation: none;
  }
}
</style>

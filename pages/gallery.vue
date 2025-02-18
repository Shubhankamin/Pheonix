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
    <v-container fluid class="" v-show="!isLoading">
      <v-row class="pa-0">
        <v-col class="pa-0">
          <Nav />
          <v-row>
            <v-col class="px-0">
              <div class="image-grid">
                <div
                  v-for="(row, rowIndex) in imageRows"
                  :key="rowIndex"
                  class="image-row"
                >
                  <div
                    v-for="(image, imageIndex) in row"
                    :key="imageIndex"
                    class="image"
                    :style="{
                      backgroundImage: `url(${image.url})`,
                      flex: image.flex,
                      backgroundPositionY: top,
                    }"
                    @click="show(image, flatImageList, getImageIndex(image))"
                  ></div>
                </div>
              </div>
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
useSeoMeta({
  title: "GALLERY | PHEONIX ACADEMY",
  ogTitle: "GALLERY | PHEONIX ACADEMY",
  description: "where timeless craftsmanship meets unmatched purity",
  ogDescription: "where timeless craftsmanship meets unmatched purity",
  ogImage: "https://sustainability.manipal.edu//images/seo/logo-og.png",
  twitterCard: "summary_large_image",
});

import { api as viewerApi } from "v-viewer";
import "viewerjs/dist/viewer.css";
import { ref, computed } from "vue";

const viewerInstance = ref(null);
const viewerOptions = {
  zIndex: 9999,
  toolbar: true,
  title: true,
  loading: true,
};

const show = (src, itemsImage, index) => {
  viewerInstance.value = null;
  if (itemsImage) {
    viewerInstance.value = viewerApi({
      images: itemsImage.map((img) => img.url),
      options: viewerOptions,
    });
    viewerInstance.value.view(index);
  }
};
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); // Adjust time as needed
});

const flatImageList = computed(() =>
  imageRows.flat().map((image) => ({
    url: image.url,
    category: image.category || null,
  }))
);

const getImageIndex = (image) =>
  flatImageList.value.findIndex((img) => img.url === image.url);

const imageRows = [
  [
    { url: "/images/gallery/gal-1.jpeg", flex: 1 },
    { url: "/images/gallery/gal-2.jpeg", flex: 1 },
    { url: "/images/gallery/gal-3.jpeg", flex: 1 },
    {
      url: "/images/gallery/gal-4.jpeg",
      flex: 1,
    },
  ],
  [
    {
      url: "/images/gallery/gal-5.jpeg",
      flex: 1,
    },
    { url: "/images/gallery/gal-6.jpeg", flex: 1 },
    { url: "/images/gallery/gal-7.jpeg", flex: 1 },
    { url: "/images/gallery/gal-8.jpeg", flex: 1 },
  ],
  [
    { url: "/images/gallery/gal-9.jpeg", flex: 1 },
    { url: "/images/gallery/gal-10.jpeg", flex: 1 },
    { url: "/images/gallery/gal-11.jpeg", flex: 1 },
    { url: "/images/gallery/gal-12.jpeg", flex: 1 },
    { url: "/images/gallery/gal-13.jpeg", flex: 1 },
  ],
  // [{ url: "/images/gallery/gal-13.jpeg", flex: 1 }],
];
</script>

<style scoped>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: #171414;
}

.image-grid {
  padding: 12px;
}

.image-row {
  display: flex;
  
}

.image-row .image {
  margin: 12px;
  height: 270px;
  background-size: cover;
  background-position-y: center;
}

.image {
  cursor: pointer;
}

.image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.7);
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

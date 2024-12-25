<template>
  <div>
    <v-container fluid class="mx-0 px-0">
      <Nav />
      <v-row>
        <v-col>
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
                }"
                @click="show(image, flatImageList, getImageIndex(image))"
              ></div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
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
    { url: "/images/hero/hero-2.jpg", flex: 1 },
    { url: "/images/kid-karate.jpeg", flex: 1 },
    { url: "/images/slider-karate.jpeg", flex: 2 },
  ],
  [
    {
      url: "https://images.unsplash.com/photo-1568602048381-2285db7095c6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      flex: 1,
    },
    { url: "/images/hero/hero-1.jpg", flex: 2 },
  ],
  [
    { url: "/images/slider-karate.jpeg", flex: 2 },
    { url: "/images/hero/hero-1.jpg", flex: 1 },
    { url: "/images/hero/hero-2.jpg", flex: 3 },
    { url: "/images/slider-karate.jpeg", flex: 1 },
  ],
  [
    { url: "/images/hero/hero-1.jpg", flex: 1 },
    {
      url: "https://images.unsplash.com/photo-1616418672515-1c2b39e219d3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5N3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      flex: 1,
    },
    { url: "/images/slider-karate.jpeg", flex: 1 },
  ],
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
  height: 240px;
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

@media screen and (max-width: 400px) {
  .image-row {
    flex-direction: column;
  }

  .image-row .image {
    flex-basis: auto;
  }
}
</style>

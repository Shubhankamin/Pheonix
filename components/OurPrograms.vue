<template>
  <div style="background-color: #000000">
    <v-row>
      <v-col cols="12" class="">
        <h1
          style="text-transform: uppercase"
          class="text-center text-white mb-2 pb-2 ubuntu-regular-h1"
        >
          Our programs
        </h1>
      </v-col>
    </v-row>
    <swiper
      :modules="swiperModules"
      :pagination="{ clickable: true }"
      :loop="true"
      :slides-per-view="3"
      :breakpoints="{
        2560: { slidesPerView: 3 },
        1440: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        767: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      }"
      :space-between="10"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="mySwiper mb-10"
    >
      <swiper-slide v-for="(item, i) in sliderImages" :key="i">
        <v-img
          class="bg-image"
          height="400"
          width="100%"
          style="position: relative"
          cover
          :src="item.src"
        >
          <v-card
            style="position: absolute; bottom: 5%; left: 5%"
            min-width="300"
            class="px-4 py-2 image-card"
            elevation="0"
          >
            <div class="d-flex justify-space-between">
              <p style="text-transform: uppercase" class="ubuntu-regular-h3">
                {{ item.title }}
              </p>
              <v-icon color="#ffb400">mdi-arrow-top-right-thin</v-icon>
            </div>
            <p class="ubuntu-regular-h4">{{ item.description }}</p>
            <p class="ubuntu-regular-h4">{{ item.description2 }}</p>
          </v-card>
        </v-img>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperModules = [Autoplay];

const sliderImages = [
  {
    src: "/images/slider-karate.jpeg",
    title: "Private Lessons",
    description: "View your current schedule",
    description2: "Today!! Check out now",
  },
  {
    src: "/images/slider-karate.jpeg",
    title: "Wallowing Breeze",
    description: "View your current schedule",
    description2: "Today!! Check out now",
  },
  {
    src: "/images/slider-karate.jpeg",
    title: "Private Lessons",
    description: "View your current schedule",
    description2: "Today!! Check out now",
  },
  {
    src: "/images/slider-karate.jpeg",
    title: "Special Offers",
    description: "View your current schedule",
    description2: "Today!! Check out now",
  },
  {
    src: "/images/slider-karate.jpeg",
    title: "Current Schedule",
    description: "View your current schedule",
    description2: "Today!! Check out now",
  },
];
</script>

<style scoped>
.gold-title {
  font-weight: 600;
}
:deep(.swiper-button-prev) {
  color: #000;
}

:deep(.swiper-button-next) {
  color: #000;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #4f000b !important;
}

:deep(.swiper-pagination-bullet) {
  color: #000;
}

:deep(:root) {
  color: #000;
}

.show-now {
  font-weight: 600;
}
:deep(
    .swiper-pagination-bullets,
    .swiper-pagination-bullets.swiper-pagination-horizontal
  ) {
  position: absolute;
  bottom: 40px !important;
}

.image-card {
  background-color: #333344;
  color: white;
}

.recent {
  position: absolute;
  bottom: 0%;
  right: 1%;
  z-index: 99999;
}

.card {
  border: 1px solid #d1a651;
}
</style>

<template>
  <div style="background-color: #000000" class="mt-md-5 mt-2">
    <v-container fluid>
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
        loop="true"
        :space-between="10"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="mySwiper mb-5"
      >
        <swiper-slide v-for="(item, i) in sliderImages" :key="i">
          <v-img
            class="bg-image"
            height="400"
            width="100%"
            style="position: relative; object-position: top"
            cover
            :src="item.src"
          >
            <v-card
              style="position: absolute; bottom: 5%; right: 5%; left: 5%"
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
    </v-container>
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
    src: "/images/prog-4.jpeg",
    title: "Monthly 8 Class",
    description:
      "Stay consistent and dedicated in your martial arts journey with 8 expertly designed karate classes offered every month.",
  },

  {
    src: "/images/prog-4.jpeg",
    title: "Saturday 10-11",
    description:
      "Kickstart your weekend with karate training every Saturday from 10 to 11 AM.",
  },

  {
    src: "/images/prog-4.jpeg",
    title: "Sunday 10-11",
    description:
      "Wrap up your weekend with a dynamic karate session every Sunday, 10 to 11 AM.",
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

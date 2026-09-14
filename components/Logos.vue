<template>
  <div class="logos-section">
    <v-container fluid class="pb-0">
      <v-row class="pt-md-0">
        <v-col cols="12" class="pa-0 bg-black">
          <swiper
            :modules="swiperModules"
            :pagination="{ clickable: true }"
            :loop="true"
            :breakpoints="{
              2560: { slidesPerView: 4 },
              1440: { slidesPerView: 4 },
              1024: { slidesPerView: 3 },
              767: { slidesPerView: 3 },
              320: { slidesPerView: 1 },
            }"
            :space-between="50"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            class="mySwiper"
          >
            <swiper-slide
              v-for="(item, i) in sliderImages"
              :key="i"
              class="logo-slide"
            >
              <v-img :src="item.src" :lazy-src="item.src" class="logo-image" />
            </swiper-slide>
          </swiper>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const swiperModules = [Autoplay];

const sliderImages = [
  {
    src: "/images/slider/wkf.png",
  },
  {
    src: "/images/slider/akf.png",
  },
  {
    src: "/images/slider/kio.png",
  },
  {
    src: "/images/slider/seiko-2.png",
  },
  {
    src: "/images/slider/wkf.png",
  },
  {
    src: "/images/slider/akf.png",
  },
  {
    src: "/images/slider/kio.png",
  },
  {
    src: "/images/slider/seiko-2.png",
  },
];
</script>

<style scoped>
.logos-section {
  background-color: #000000;
}

.logo-slide {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 100%;
  height: 350px;
  object-fit: contain;
}

@media (max-width: 767px) {
  .logo-image {
    height: 300px;
  }
}
</style>

<template>
  <div style="background-color: #4f000b" class="mt-2">
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="">
          <h1
            style="text-transform: uppercase"
            class="text-center text-white ubuntu-regular-h1"
          >
            SEE OUR MASTERS
          </h1>
        </v-col>
      </v-row>
      <!-- <div class="d-none d-md-flex justify-end mb-5 pr-5">
      <div class="custom-navigation">
        <v-btn icon @click="slidePrev" class="custom-prev custom-button">
          <v-icon color="#ffb400">mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn icon @click="slideNext" class="custom-next custom-button">
          <v-icon color="black">mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div> -->

      <swiper
        :modules="swiperModules"
        :pagination="{ clickable: true }"
        :navigation="true"
        :loop="true"
        :breakpoints="{
          2560: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          767: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }"
        loop="true"
        :slides-per-view="3"
        :space-between="10"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        class="mySwiper mb-2 mt-5 mt-md-3"
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
              style="position: absolute; bottom: 5%; right: 2%"
              min-width="200"
              class="px-4 py-2 image-card d-flex justify-center"
              elevation="0"
            >
              <div class="d-flex ga-5">
                <p
                  style="text-transform: uppercase; color: #ffb400"
                  class="ubuntu-regular-h3"
                >
                  {{ item.name }}
                </p>
                <p style="text-transform: uppercase" class="ubuntu-regular-h3">
                  {{ item.subName }}
                </p>
              </div>
            </v-card>
          </v-img>
        </swiper-slide>
      </swiper>
    </v-container>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const swiperModules = [Autoplay, Navigation];

const sliderImages = [
  {
    src: "/images/masters/master-3.jpeg",
    name: "Keerthi G K",
    subName: "5th Dan Black Belt",
  },
  {
    src: "/images/masters/mast-2.jpg",
    name: "Vijay Achar",
    subName: "3rd Dan Black Belt",
  },
  {
    src: "/images/masters/mast-1.JPG",
    name: "Rajshejkar",
    subName: "5rd Dan Black Belt",
  },
];

const slidePrev = () => {
  document.querySelector(".swiper-button-prev").click();
};

const slideNext = () => {
  document.querySelector(".swiper-button-next").click();
};
</script>

<style scoped>
.gold-title {
  font-weight: 600;
}
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}

.custom-navigation {
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
  z-index: 99;
}

.custom-button {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  transform: skew(-18deg);
  border-radius: 0;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.3);
}

.custom-prev {
  background-color: #333344;
  transform: skew(-20deg) rotate(-2deg);
}

.custom-next {
  background-color: #ffb400;
  transform: skew(-18deg) rotate(2deg);
}
.image-card {
  background-color: #333344;
  color: white;
}

.swiper-slide {
  position: relative;
}
</style>

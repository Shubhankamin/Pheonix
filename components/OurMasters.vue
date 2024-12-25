<template>
  <div style="background-color: #4f000b">
    <v-row>
      <v-col cols="12" class="">
        <h1
          style=" text-transform: uppercase"
          class="text-center text-white ubuntu-regular-h1"
        >
          SEE OUR MASTERS
        </h1>
      </v-col>
    </v-row>
    <div class="d-flex justify-end mb-5 pr-5">
      <div class="custom-navigation">
        <v-btn icon @click="slidePrev" class="custom-prev custom-button">
          <v-icon color="#ffb400">mdi-arrow-left</v-icon>
        </v-btn>
        <v-btn icon @click="slideNext" class="custom-next custom-button">
          <v-icon color="black">mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </div>

    <swiper
      :modules="swiperModules"
      :pagination="{ clickable: true }"
      :navigation="true"
      :loop="true"
      :slides-per-view="3"
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
            min-width="350"
            class="px-4 py-2 image-card"
            elevation="0"
          >
            <div class="d-flex justify-space-between">
              <p style="text-transform: uppercase; color: #ffb400" class="ubuntu-regular-h3">
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
    src: "/images/slider-karate.jpeg",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/slider-karate.jpeg",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/slider-karate.jpeg",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/slider-karate.jpeg",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/slider-karate.jpeg",
    name: "name",
    subName: "subname",
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

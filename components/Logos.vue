<template>
  <div>
    <v-container fluid class="pt-16 mt-8" >
      <v-row class="pt-12">
        <v-col cols="12 bg-black ">
          <swiper
            :modules="swiperModules"
            :pagination="{ clickable: true }"
            :loop="true"
            :breakpoints="{
              2560: { slidesPerView: 4 },
              1440: { slidesPerView: 4 },
              1024: { slidesPerView: 4 },
              767: { slidesPerView: 3 },
              320: { slidesPerView: 1 },
            }"
            loop="true"
            :slides-per-view="3"
            :space-between="10"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            class="mySwiper mb-5 mt-5 mt-md-0"
          >
            <swiper-slide v-for="(item, i) in sliderImages" :key="i">
              <v-img
                class="bg-image"
                style="position: relative"
                cover
                :src="item.src"
              >
              </v-img>
            </swiper-slide>
          </swiper>
        </v-col>
      </v-row>
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
    src: "/images/sak-1.png",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/kai-1.png",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/wkf-1.png",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/ckf-1.png",
    name: "name",
    subName: "subname",
  },
  {
    src: "/images/akf.png",
    name: "name",
    subName: "subname",
  },
];
</script>

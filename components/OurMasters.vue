<template>
  <div style="background-color: #ffff" class="mt-1">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <h1
            style="text-transform: uppercase"
            class="text-center text-black ubuntu-regular-h1"
          >
            OUR MASTERS
          </h1>
        </v-col>
      </v-row>

      <swiper
        :modules="swiperModules"
        :navigation="true"
        :pagination="{ clickable: true }"
        :loop="true"
        :breakpoints="{
          2560: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2,
          },
          767: {
            slidesPerView: 2,
          },
          320: {
            slidesPerView: 1,
          },
        }"
        :space-between="10"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="mySwiper mb-2 mt-5 mt-md-3"
      >
        <swiper-slide v-for="(item, i) in sliderImages" :key="i">
          <div class="master-slide">
            <img class="master-image" :src="item.src" :alt="item.name" />

            <v-card class="image-card" elevation="0">
              <div class="d-flex ga-5 align-center">
                <p class="master-name ubuntu-regular-h3">
                  {{ item.name }}
                </p>

                <p class="master-rank ubuntu-regular-h3">
                  {{ item.subName }}
                </p>
              </div>
            </v-card>
          </div>
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
  // {
  //   src: "/images/masters/mast-1.JPG",
  //   name: "Rajshejkar",
  //   subName: "3rd Dan Black Belt",
  // },
];

const slidePrev = () => {
  document.querySelector(".swiper-button-prev").click();
};

const slideNext = () => {
  document.querySelector(".swiper-button-next").click();
};
</script>

<style scoped>
.master-slide {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  background-color: #ffff;
}

.master-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
}

.image-card {
  position: absolute;
  bottom: 5%;
  right: 2%;
  min-width: 200px;
  padding: 8px 16px;
  background-color: #333344;
  color: #ffffff;
}

.master-name,
.master-rank {
  margin: 0;
  text-transform: uppercase;
}

.master-name {
  color: #ffb400;
}

.master-rank {
  color: #ffffff;
}

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  display: none;
}

:deep(.swiper-pagination) {
  position: relative;
  margin-top: 15px;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  opacity: 1;
  background-color: #ffffff;
}

:deep(.swiper-pagination-bullet-active) {
  background-color: #ffb400;
}
</style>

<template>
  <div style="background-color: #000000">
    <v-row>
      <v-col cols="12" class="">
        <h1
          style="text-transform: uppercase"
          class="text-center text-white ubuntu-regular-h1"
        >
          SEE WHAT STUDENT SAYS
        </h1>
        <div class="d-flex justify-end px-4">
          <p class="mb-2 ubuntu-regular-h3" style="color: #ffb400">
            See All <v-icon size="18">mdi-arrow-top-right-thin</v-icon>
          </p>
        </div>
      </v-col>
    </v-row>
    <!-- <div class="d-flex justify-end mb-5 pr-5">
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
      :slides-per-view="3"
      :space-between="10"
      :breakpoints="{
        2560: { slidesPerView: 3 },
        1440: { slidesPerView: 3 },
        1024: { slidesPerView: 3 },
        767: { slidesPerView: 2 },
        320: { slidesPerView: 1 },
      }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      class="mySwiper mb-10"
    >
      <swiper-slide v-for="(item, i) in sliderImages" :key="i">
        <v-card
          style=""
          min-width="350"
          class="px-4 py-2 image-card"
          elevation="0"
        >
          <v-row>
            <v-col cols="6" md="2" >
              <div>
                <v-img :src="item.src" />
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="d-flex flex-column justify-end pt-14">
                <p class="ubuntu-regular-h3">{{ item.name }}</p>
                <p class="ubuntu-regular-h3">{{ item.subName }}</p>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <p class="mx-2 mb-4 ubuntu-regular-h3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                dicta obcaecati voluptatum laborum mollitia, quos inventore
                alias recusandae eius, exercitationem, fugiat odit minima culpa
                maxime architecto neque facere quia quas.
              </p>
            </v-col>
          </v-row>
        </v-card>
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
  z-index: 9999999;
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

<template>
  <section class="programs-section">
    <v-container fluid class="pa-0">
      <div class="section-heading">
        <h2 class="ubuntu-regular-h1">Our Programs</h2>
      </div>

      <swiper
        :modules="swiperModules"
        :pagination="{ clickable: true }"
        :loop="true"
        :breakpoints="{
          2560: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          767: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }"
        :space-between="10"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="programs-swiper desktop-swiper"
      >
        <swiper-slide v-for="(item, i) in sliderImages" :key="i">
          <div class="program-slide">
            <v-img
              :src="item.src"
              :lazy-src="item.src"
              height="400"
              cover
              class="program-image"
            >
              <div class="program-card">
                <div class="program-card-header">
                  <h3 class="ubuntu-regular-h3">
                    {{ item.title }}
                  </h3>

                  <v-icon class="program-icon">
                    mdi-arrow-top-right-thin
                  </v-icon>
                </div>

                <p class="ubuntu-regular-h4">
                  {{ item.description }}
                </p>

                <p v-if="item.description2" class="ubuntu-regular-h4">
                  {{ item.description2 }}
                </p>
              </div>
            </v-img>
          </div>
        </swiper-slide>
      </swiper>

      <swiper
        :modules="swiperModules"
        :pagination="{ clickable: true }"
        :loop="true"
        :breakpoints="{
          2560: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
          767: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
        }"
        :space-between="10"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="programs-swiper mobile-swiper"
      >
        <swiper-slide v-for="(item, i) in sliderImagesMob" :key="i">
          <div class="program-slide">
            <v-img
              :src="item.src"
              :lazy-src="item.src"
              height="400"
              cover
              class="program-image"
            >
              <div class="program-card">
                <div class="program-card-header">
                  <h3 class="ubuntu-regular-h3">
                    {{ item.title }}
                  </h3>

                  <v-icon class="program-icon">
                    mdi-arrow-top-right-thin
                  </v-icon>
                </div>

                <p class="ubuntu-regular-h4">
                  {{ item.description }}
                </p>

                <p v-if="item.description2" class="ubuntu-regular-h4">
                  {{ item.description2 }}
                </p>
              </div>
            </v-img>
          </div>
        </swiper-slide>
      </swiper>
    </v-container>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const swiperModules = [Autoplay];

const sliderImages = [
  {
    src: "/images/slider-1.png",
    title: "Monthly 8 Class",
    description:
      "Stay consistent and dedicated in your martial arts journey with 8 expertly designed karate classes offered every month.",
  },
  {
    src: "/images/prog-2.png",
    title: "Saturday 10-11",
    description:
      "Kickstart your weekend with karate training every Saturday from 10 to 11 AM.",
  },
  {
    src: "/images/prog-1.jpg",
    title: "Sunday 10-11",
    description:
      "Wrap up your weekend with a dynamic karate session every Sunday, 10 to 11 AM.",
  },
];

const sliderImagesMob = [
  {
    src: "/images/prog-5.jpeg",
    title: "Monthly 8 Class",
    description:
      "Stay consistent and dedicated in your martial arts journey with 8 expertly designed karate classes offered every month.",
  },
  {
    src: "/images/prog-2.png",
    title: "Saturday 10-11",
    description:
      "Kickstart your weekend with karate training every Saturday from 10 to 11 AM.",
  },
  {
    src: "/images/prog-1.jpg",
    title: "Sunday 10-11",
    description:
      "Wrap up your weekend with a dynamic karate session every Sunday, 10 to 11 AM.",
  },
];
</script>

<style scoped>
.programs-section {
  background-color: #000000;
  color: #ffffff;
  padding-top: 5px;
}

.section-heading {
  padding: 45px 20px 35px;
  text-align: center;
}

.section-heading h2 {
  margin: 0;
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.programs-swiper {
  width: 100%;
  padding-bottom: 55px;
}

.program-slide {
  position: relative;
  width: 100%;
}

.program-image {
  width: 100%;
}

.program-card {
  position: absolute;
  right: 5%;
  bottom: 5%;
  left: 5%;
  padding: 18px 20px;
  background-color: rgba(51, 51, 68, 0.95);
  color: #ffffff;
}

.program-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 10px;
}

.program-card-header h3 {
  margin: 0;
  color: #ffffff;
  font-weight: 600;
  text-transform: uppercase;
}

.program-icon {
  flex-shrink: 0;
  color: #ffb400;
  font-size: 28px;
}

.program-card p {
  margin: 0 0 8px;
  color: rgba(255, 255, 255, 0.85);
  font-size: 14px;
  line-height: 1.5;
}

.program-card p:last-child {
  margin-bottom: 0;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.5);
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  width: 22px;
  border-radius: 5px;
  background-color: #ffb400;
}

.desktop-swiper {
  display: block;
}

.mobile-swiper {
  display: none;
}

@media (max-width: 767px) {
  .section-heading {
    padding: 35px 20px 25px;
  }

  .section-heading h2 {
    font-size: 32px;
    line-height: 1.1;
  }

  .desktop-swiper {
    display: none;
  }

  .mobile-swiper {
    display: block;
  }

  .programs-swiper {
    padding-bottom: 45px;
  }

  .program-card {
    right: 4%;
    bottom: 5%;
    left: 4%;
    padding: 15px 16px;
  }

  .program-card-header {
    gap: 10px;
  }

  .program-card-header h3 {
    font-size: 16px;
  }

  .program-icon {
    font-size: 24px;
  }

  .program-card p {
    font-size: 13px;
    line-height: 1.45;
  }
}
</style>

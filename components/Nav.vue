<template>
  <div class="w-100 bg-black">
    <v-container fluid>
      <v-row class="py-0 ">
        <v-col cols="3" class="d-flex justify-space-around align-center py-0">
          <p class="ubuntu-regular-h3">HOME</p>
          <NuxtLink to="/gallery" style="text-decoration: none; color: white">
            <p class="ubuntu-regular-h3">GALLERY</p>
          </NuxtLink>
        </v-col>
        <!-- <v-col cols="2">
                    <v-img src="/images/logo/karate-logo.png"></v-img>
                </v-col> -->
        <v-col cols="6" class="d-flex justify-center align-center py-0">
          <NuxtLink to="/" style="text-decoration: none; color: white">
            <v-img src="public/images/logo/logo-pheo-2.png" width="300"></v-img>
          </NuxtLink>
        </v-col>
        <v-col cols="3" class="d-flex justify-space-around align-center py-0">
          <NuxtLink to="/about-us" style="text-decoration: none; color: white">
            <p class="ubuntu-regular-h3">ABOUT US</p>
          </NuxtLink>
          <NuxtLink
            to="/contact-us"
            style="text-decoration: none; color: white"
          >
            <p  class="ubuntu-regular-h3">CONTACT US</p>
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

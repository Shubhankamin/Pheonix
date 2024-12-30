<template>
  <div class="w-100 bg-black">
    <v-container fluid>
      <v-row class="py-0 d-none d-md-flex">
        <v-col cols="3" class="d-flex justify-space-around align-center py-0">
          <p class="ubuntu-regular-h3">HOME</p>
          <NuxtLink to="/gallery" style="text-decoration: none; color: white">
            <p class="ubuntu-regular-h3">GALLERY</p>
          </NuxtLink>
        </v-col>
        <!-- <v-col cols="2">
                    <v-img src="/images/logo/karate-logo-1.png"></v-img>
                </v-col> -->
        <v-col cols="6" class="d-flex justify-center align-center py-0">
          <NuxtLink to="/" style="text-decoration: none; color: white">
            <!-- <v-img src="public/images/logo/logo-pheo-2.png" width="300"></v-img> -->
            <v-img src="public/images/logo/pheo-3.png" width="100"></v-img>
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
            <p class="ubuntu-regular-h3">CONTACT US</p>
          </NuxtLink>
        </v-col>
      </v-row>
      <v-row class="pa-0 ma-0 d-flex d-md-none align-center">
        <v-col class="pa-0 ma-0" cols="2" @click="gotToHome">
          <v-img src="/images/logo/karate-logo-1.png" height="50"></v-img>
        </v-col>
        <v-col cols="8">
          <p class="ubuntu-regular-h2 text-center">PHEONIX KARATE</p>
        </v-col>
        <v-col cols="2">
          <v-icon @click="drawer = !drawer">mdi-menu</v-icon>
        </v-col>
      </v-row>
      <v-navigation-drawer v-model="drawer" temporary location="right">
        <div>
          <v-img src="/images/logo/karate-logo-1.png" height="100"></v-img>
        </div>

        <div class="close-btn" style="position: absolute; top: 2%; right: 5%">
          <v-icon @click="drawer = !drawer">mdi-close</v-icon>
        </div>

        <div class="text-center pt-4">
          <v-divider :thickness="2"></v-divider>

          <p class="poppins-regular-h2 py-4">Home</p>
          <v-divider :thickness="2"></v-divider>
          <p class="poppins-regular-h2 py-4">GALLERY</p>
          <v-divider :thickness="2"></v-divider>
          <p class="poppins-regular-h2 py-4">ABOUT US</p>
          <v-divider :thickness="2"></v-divider>
          <p class="poppins-regular-h2 py-4">CONTACT US</p>
        </div>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>
<script setup>
const drawer = ref(false);
const router = useRouter;
const gotToHome = () => {
  router.push("/");
};
</script>

<template>
  <div class="w-100 bg-black">
    <v-container fluid>
      <v-row>
        <v-col cols="3" class="d-flex ga-10 align-center">
          <p>HOME</p>
          <p>CLASS</p>
        </v-col>
        <!-- <v-col cols="2">
                    <v-img src="/images/logo/karate-logo.png"></v-img>
                </v-col> -->
        <v-col cols="6" class="d-flex justify-center align-center">
          <NuxtLink to="/" style="text-decoration: none; color: white">
            <h2>PHEONIX KARATE ACADEMY</h2>
          </NuxtLink>
        </v-col>
        <v-col cols="3" class="d-flex justify-space-between align-center">
          <NuxtLink to="/gallery" style="text-decoration: none; color: white">
            <p>GALLERY</p>
          </NuxtLink>
          <p>ABOUT US</p>
          <p>CONTACT US</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<template>
  <div>
    <v-container fluid class="pt-16 mt-4 px-0">
      <v-row>
        <v-col class="bg-black text-white mt-10" cols="12">
          <!-- <h1
            class="text-center mt-2 acme-bold-h1"
            style="font-weight: bolder; font-size: 50px"
          >
            THE KARATE CLASS
          </h1> -->
        </v-col>
        <v-col class="pl-5">
          <v-img
            src="/images/hero/hero-2.jpg"
            height="70vh"
            width="100vw"
            cover
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="px-3 background-black text-white">
        <v-col cols="6">
          <p class="ubuntu-regular-h1 ml-2" style="font-weight:800">CHANGE <br />YOUR LIFE</p>
        </v-col>
        <v-col cols="6">
          <p class="mt-4 ubuntu-regular-h3">
            A gentle art karate kick florida, we believe that karate kick
            training can help every child and adult develop mental and physical
            skills they need to succeed in life.
          </p>
          <button class="custom-button mt-10 ubuntu-regular-h3">START NOW</button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.custom-button {
  background-color: #1d1d2b; /* Dark background color */
  color: #ffb400; /* Gold text color */
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transform: skewX(-10deg); /* Adds angled effect */
  transition: background-color 0.3s ease;
}

.custom-button:hover {
  background-color: #333344; /* Darker shade on hover */
}
.background-black {
  background-color: #000000; /* Dark background color */
}
</style>

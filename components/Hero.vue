<template>
  <div>
    <v-container fluid class=" px-0">
      <v-row>
        <v-col class="pl-5 " cols="12">
          <v-img
            src="/images/hero/hero-3.jpg"
            height="70vh"
            width="100vw"
            cover
          ></v-img>
        </v-col>
      </v-row>
      <v-row class="px-md-3 px-5 py-0 background-black text-white">
        <v-col cols="12" md="6">
          <p class="ubuntu-regular-h1 ml-2" style="font-weight: 800">
            CHANGE <br />YOUR LIFE
          </p>
        </v-col>
        <v-col cols="12" md="6" class="py-0 my-0 py-md-2">
          <p class="my-2 ubuntu-regular-h3">
            A gentle art karate kick florida, we believe that karate kick
            training can help every child and adult develop mental and physical
            skills they need to succeed in life.
          </p>
          <button
            class="custom-button mt-md-10 mb-0 mb-5 mt-5 ubuntu-regular-h3"
            @click="goToContacts"
          >
            CONTACT NOW
          </button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
const router = useRouter();
const goToContacts = () => {
  router.push("/contact-us");
};
</script>
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

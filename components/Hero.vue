<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col class="px-0" cols="12">
          <v-img src="/images/hero/hero-3.jpg" height="70vh" cover></v-img>
        </v-col>
      </v-row>
      <v-row class="px-md-3 px-5 py-0 background-black text-white mt-2">
        <v-col cols="12" md="6" class="">
          <p class="ubuntu-regular-h1 ml-2" style="font-weight: 800">
            CHANGE <br />YOUR LIFE
          </p>
        </v-col>
        <v-col cols="12" md="6" class="py-0 my-0 py-md-2">
          <p class="my-2 ubuntu-regular-h3">
            Pheonix Academy provide Karate training for Physical , Mental and
            Self-defence .Karate training can help develop
            strength,speed,agility and endurance.
          </p>
          <a href="https://wa.me/9686860582" target="_blank">
            <button
              class="custom-button mt-md-10 mb-0 mb-5 mt-5 ubuntu-regular-h3"
            >
              CONTACT NOW
            </button>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
const router = useRouter();
// const goToContacts = () => {
//   router.push("/contact-us");
// };
const whatsappLink = "https://wa.me/9686860582";
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

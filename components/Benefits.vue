<template>
  <div>
    <v-container fluid class="background-red">
      <v-row>
        <v-col cols="12" class="">
          <h1
            style="font-size: 50px; text-transform: uppercase"
            class="text-center text-white"
          >
            Benefits of Karate Kick
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6" class="px-1">
          <v-img src="/images/kid-karate.jpeg"></v-img>
        </v-col>
        <v-col cols="6" class="confidence-section pl-10 d-flex flex-column justify-space-between pt-5 ">
          <div
            v-for="(content, index) in contents"
            :key="index"
            class="content-wrapper "
          >
            <v-icon class="icon" color="white">{{ content.icon }}</v-icon>
            <h2 class="title">{{ content.title }}</h2>
            <p class="description mb-5">{{ content.description }}</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>
import { ref } from "vue";

const contents = ref([
  {
    icon: "mdi-karate",
    iconColor: "white",
    title: "BUILD CONFIDENCE",
    description: `Our programs are dedicated to empowering you with the confidence
      and self-esteem needed to get yourself out of a dangerous situation.`,
  },
  {
    icon: "mdi-shield-account",
    iconColor: "white",
    title: "SELF DEFENSE",
    description: `We provide skills to help protect yourself and others in critical situations.`,
  },
  {
    icon: "mdi-shield-account",
    iconColor: "white",
    title: "SELF DEFENSE",
    description: `We provide skills to help protect yourself and others in critical situations.`,
  },
  {
    icon: "mdi-shield-account",
    iconColor: "white",
    title: "SELF DEFENSE",
    description: `We provide skills to help protect yourself and others in critical situations.`,
  },
]);
</script>
<style scoped>
.background-red {
  background-color: #4f000b;
}
.confidence-section {
  color: white;
  text-align: left;
}

.content-wrapper {
  max-width: 500px; /* Adjust width as needed */
}

.icon {
  font-size: 48px;
  margin-bottom: 10px;
  border: 2px solid white;
  padding: 10px;
  border-radius: 4px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
}

.description {
  font-size: 14px;
  line-height: 1.5;
}
</style>

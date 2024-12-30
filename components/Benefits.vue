<template>
  <div>
    <v-container fluid class="background-red">
      <v-row>
        <v-col cols="12" class="">
          <p
            style="text-transform: uppercase"
            class="text-center text-white ubuntu-regular-h1"
          >
            Benefits of Karate Kick
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" class="px-1 pb-8">
          <v-img src="/images/benefit.png" cover height="100%"></v-img>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="confidence-section pl-10 d-flex flex-column justify-space-between pt-5"
        >
          <div
            v-for="(content, index) in contents"
            :key="index"
            class="content-wrapper"
          >
            <v-icon class="icon" color="white">{{ content.icon }}</v-icon>
            <h2 class="title ubuntu-regular-h2">{{ content.title }}</h2>
            <p class="description mb-5 ubuntu-regular-h3">
              {{ content.description }}
            </p>
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
    description: `Building confidence involves developing self-belief through consistent effort, embracing challenges, and celebrating progress, fostering a positive and resilient mindset`,
  },
  {
    icon: "mdi-karate",
    iconColor: "white",
    title: "SELF DEFENSE",
    description: `Self-defense is the ability to protect oneself from physical harm, a crucial skill in today’s world. It encompasses techniques, awareness, and strategies to prevent and respond to threats effectively`,
  },
  {
    icon: "mdi-karate",
    iconColor: "white",
    title: "DISCIPLINE",
    description: `Discipline is the bridge between goals and achievement, fostering focus, consistency, and self-control`,
  },
  {
    icon: "mdi-karate",
    iconColor: "white",
    title: "RESPECT",
    description: `Respect in karate is a fundamental principle, emphasizing humility, courtesy, and honor towards instructors, peers, and oneself, fostering a positive and disciplined learning environment`,
  },
  {
    icon: "mdi-karate",
    iconColor: "white",
    title: "CO-ORDINATION",
    description: `Coordination is the harmonious integration of body and mind, enabling precise, efficient, and balanced movements essential for physical activities and daily tasks.`,
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
  font-weight: bold;
  margin: 10px 0;
}

.description {
  font-size: 14px;
  line-height: 1.5;
}
</style>

<template >
  <div >
    <!-- Loader -->
    <div v-if="isLoading" class="loading-spinner">
      <div class="loading-spinner-inner">
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
        <div class="loading-spinner-circle"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-show="!isLoading" class="overflow-y-hidden">
      <Nav />
      <Logos />
      <Hero />
      <Benefits />
      <OurPrograms />
      <OurMasters />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  // Simulate a delay (e.g., waiting for API calls or page content to load)
  setTimeout(() => {
    isLoading.value = false;
  }, 1000); // Adjust time as needed
});

useSeoMeta({
  title: "HOME | PHEONIX ACADEMY",
  ogTitle: "HOME | PHEONIX ACADEMY",
  description: "where timeless craftsmanship meets unmatched purity",
  ogDescription: "where timeless craftsmanship meets unmatched purity",
  ogImage: "https://sustainability.manipal.edu//images/seo/logo-og.png",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
/* Loader Styles */
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: black; /* Change as needed */
  z-index: 9999;
}

.loading-spinner-inner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.loading-spinner-circle {
  width: 1em;
  height: 1em;
  border-radius: 50%;
  background-color: red;
  margin: 0 5px;
  animation: loading-spinner 1s ease-in-out infinite;
}

.loading-spinner-circle:nth-child(2) {
  animation-delay: 0.2s;
}

.loading-spinner-circle:nth-child(3) {
  animation-delay: 0.4s;
}

.loading-spinner-circle:nth-child(4) {
  animation-delay: 0.6s;
}

.loading-spinner-circle:nth-child(5) {
  animation-delay: 0.8s;
}

@keyframes loading-spinner {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  20% {
    transform: scale(1.5);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>

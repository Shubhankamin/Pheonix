<template>
  <div class="home-page">
    <Nav />
    <Logos />
    <Hero />
    <Benefits />
    <OurPrograms />
    <OurMasters />
    <Footer />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "PHOENIX ACADEMY INDIA | Martial Arts Academy",
  ogTitle: "PHOENIX ACADEMY INDIA | Martial Arts Academy",
  description:
    "Phoenix Academy India offers professional karate and martial arts training focused on discipline, strength, fitness, and personal development.",
  ogDescription:
    "Phoenix Academy India offers professional karate and martial arts training focused on discipline, strength, fitness, and personal development.",
  ogImage: "/images/cover/cover-5.jpeg",
  twitterCard: "summary_large_image",
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #ffffff;
}
</style>

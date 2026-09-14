<template>
  <div class="about-page">
    <!-- Loading Screen -->
    <div v-if="isLoading" class="loading-screen">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div v-else>
      <v-container fluid class="pa-0">
        <!-- Navigation + Hero -->
        <section>
          <Nav />

          <v-img
            src="/images/cover-final.jpeg"
            class="cover-img cover-desktop"
            cover
            alt="Phoenix Academy India"
          />

          <v-img
            src="/images/cover/cover-4.jpg"
            class="cover-img cover-mobile"
            cover
            alt="Phoenix Academy India"
          />
        </section>

        <!-- Page Title -->
        <section class="page-title">
          <v-container>
            <h1 class="ubuntu-regular-h1">ABOUT US</h1>
          </v-container>
        </section>

        <!-- About Content -->
        <main class="about-content">
          <v-container>
            <!-- Introduction -->
            <section class="intro-section">
              <p class="ubuntu-regular-h3 intro-text">
                <span class="drop-cap">P</span>hoenix Academy India cultivates
                both physical and mental strength through focused training,
                promoting concentration, discipline, and integrity. Participants
                develop increased self-confidence, motivation, and team-building
                skills while honing speed, coordination, and a strong mind-body
                connection.
              </p>

              <p class="ubuntu-regular-h3 branch-text">
                <strong>Phoenix Academy India</strong> has multiple branches in
                Bangalore such as <strong>Belathur-Kadugodi</strong>,
                <strong>Channasandra-Whitefield</strong>,
                <strong>HSR Layout</strong> and <strong>Hosur Road</strong>.
              </p>
            </section>

            <!-- Masters Heading -->
            <section class="masters-heading">
              <p class="ubuntu-regular-h1 title">OUR MASTERS</p>
            </section>

            <!-- Keerthi G K -->
            <section class="master-section">
              <div class="master-header">
                <h2 class="ubuntu-regular-h2">KEERTHI G K</h2>

                <p class="ubuntu-regular-h3 master-subtitle">
                  President of Phoenix Academy India
                </p>

                <div class="master-details">
                  <span> TOURNAMENT COMMISSION SECRETARY - KIO </span>

                  <span>
                    Chief Representative of Seiko Kai Karate International India
                    Karnataka
                  </span>

                  <span> 4th Dan Black Belt (WKF) · 5th Dan Black Belt </span>
                </div>
              </div>

              <v-row class="master-content">
                <v-col cols="12" md="4" lg="3" class="pa-0">
                  <div class="master-image-wrapper">
                    <v-img
                      src="/images/masters/master-3.jpeg"
                      class="master-image"
                      cover
                      alt="Keerthi G K"
                    />
                  </div>
                </v-col>

                <v-col cols="12" md="8" lg="9" class="master-description">
                  <p class="ubuntu-regular-h3">
                    Passionate and proficient martial arts instructor with 20
                    years of expertise in instructing diverse martial arts
                    styles. Wholeheartedly dedicated to fostering physical
                    fitness, self-discipline, and personal growth among students
                    spanning different age groups. Eagerly pursuing a chance to
                    impart my love for martial arts and make a valuable impact
                    on the advancement and triumph of Phoenix Martial Arts
                    Academy.
                  </p>
                </v-col>
              </v-row>
            </section>

            <v-divider class="master-divider" />

            <!-- Vijay Achar -->
            <section class="master-section">
              <div class="master-header">
                <h2 class="ubuntu-regular-h2">VIJAY ACHAR</h2>

                <p class="ubuntu-regular-h3 master-subtitle">
                  Black Belt · 3rd Dan
                </p>
              </div>

              <v-row class="master-content">
                <v-col cols="12" md="4" lg="3" class="pa-0">
                  <div class="master-image-wrapper">
                    <v-img
                      src="/images/masters/mast-2.jpg"
                      class="master-image"
                      cover
                      alt="Vijay Achar"
                    />
                  </div>
                </v-col>

                <v-col cols="12" md="8" lg="9" class="master-description">
                  <p class="ubuntu-regular-h3">
                    15 years of dynamic and results-oriented experience as a
                    Karate Instructor, with a solid history of outstanding
                    accomplishments. Skilled in creating personalized training
                    programs, delivering exceptional individual and group
                    lessons, tracking student progress, and executing effective
                    marketing strategies.
                  </p>
                </v-col>
              </v-row>
            </section>

            <!-- <v-divider class="master-divider" />

            <section class="master-section">
              <div class="master-header">
                <h2 class="ubuntu-regular-h2">RAJSHEKAR</h2>

                <p class="ubuntu-regular-h3 master-subtitle">
                  Black Belt · 3rd Dan
                </p>
              </div>

              <v-row class="master-content">
                <v-col cols="12" md="4" lg="3" class="pa-0">
                  <div class="master-image-wrapper">
                    <v-img
                      src="/images/masters/mast-1.JPG"
                      class="master-image"
                      cover
                      alt="Rajshekar"
                    />
                  </div>
                </v-col>

                <v-col cols="12" md="8" lg="9" class="master-description">
                  <p class="ubuntu-regular-h3">
                    10 years of experience in assessing and monitoring students'
                    progress, providing feedback, and setting goals for skill
                    advancement and belt promotions. Demonstrates karate
                    techniques and forms to illustrate proper execution and
                    form. Supervises sparring sessions and practices drills to
                    enhance students' combat skills and self-defense.
                  </p>
                </v-col>
              </v-row>
            </section> -->
          </v-container>
        </main>

        <!-- Footer -->
        <Footer />
      </v-container>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "ABOUT US | PHOENIX ACADEMY INDIA",
  ogTitle: "ABOUT US | PHOENIX ACADEMY INDIA",
  description:
    "Learn about Phoenix Academy India, our martial arts training, masters, branches, and commitment to discipline, fitness, and personal growth.",
  ogDescription:
    "Learn about Phoenix Academy India, our martial arts training, masters, branches, and commitment to discipline, fitness, and personal growth.",
  ogImage: "/images/cover-final.jpeg",
  twitterCard: "summary_large_image",
});

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
});
</script>

<style scoped>
/* =========================
   PAGE
========================= */

.about-page {
  background-color: #ffffff;
  color: #111111;
}

/* =========================
   LOADER
========================= */

.loading-screen {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #4f000b;
}

.loader {
  display: flex;
  align-items: center;
  gap: 7px;
}

.loader span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ffb400;

  animation: loader-animation 1s ease-in-out infinite;
}

.loader span:nth-child(2) {
  animation-delay: 0.15s;
}

.loader span:nth-child(3) {
  animation-delay: 0.3s;
}

.loader span:nth-child(4) {
  animation-delay: 0.45s;
}

.loader span:nth-child(5) {
  animation-delay: 0.6s;
}

@keyframes loader-animation {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }

  50% {
    transform: scale(1.7);
    opacity: 1;
  }
}

/* =========================
   COVER IMAGE
========================= */

.cover-img {
  width: 100%;
}

.cover-desktop {
  height: 550px;
}

.cover-mobile {
  display: none;
  height: 400px;
}

/* =========================
   PAGE TITLE
========================= */

.page-title {
  background-color: #000000;
  color: #ffffff;
}

.page-title h1 {
  margin: 0;
  padding: 22px 0;
  letter-spacing: 1px;
}

/* =========================
   MAIN CONTENT
========================= */

.about-content {
  padding: 55px 0 80px;
}

.intro-section {
  max-width: 1200px;
  margin: 0 auto;
}

.intro-text,
.branch-text,
.master-description p {
  color: #666666;
  line-height: 1.7;
}

.intro-text {
  margin-bottom: 25px;
}

.branch-text {
  margin-bottom: 0;
}

.intro-text strong,
.branch-text strong {
  color: #111111;
}

.drop-cap {
  color: #4f000b;
  font-size: 55px;
  font-weight: 700;
  line-height: 0;
}

/* =========================
   MASTERS HEADING
========================= */

.masters-heading {
  max-width: 1200px;
  margin: 70px auto 35px;
}

.title {
  margin: 0;
  color: #4f000b;
  font-weight: 700;
  letter-spacing: 1px;
}

/* =========================
   MASTER SECTION
========================= */

.master-section {
  max-width: 1200px;
  margin: 0 auto;
}

.master-header {
  margin-bottom: 30px;
}

.master-header h2 {
  margin: 0 0 8px;
  color: #111111;
  font-weight: 700;
}

.master-subtitle {
  margin: 0 0 18px;
  color: #4f000b;
  font-weight: 600;
}

.master-details {
  display: flex;
  flex-direction: column;
  gap: 6px;

  color: #777777;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.5;
}

.master-content {
  margin: 0;
}

.master-image-wrapper {
  width: 100%;
  height: 300px;
  overflow: hidden;
  background-color: #eeeeee;
}

.master-image {
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease;
}

.master-image-wrapper:hover .master-image {
  transform: scale(1.03);
}

.master-description {
  display: flex;
  align-items: center;
  padding: 30px 40px;
}

.master-description p {
  margin: 0;
}

/* =========================
   DIVIDER
========================= */

.master-divider {
  max-width: 1200px;
  margin: 65px auto;
  border-color: #4f000b !important;
  opacity: 0.35;
}

/* =========================
   TABLET
========================= */

@media (max-width: 960px) {
  .cover-desktop {
    height: 450px;
  }

  .about-content {
    padding: 45px 25px 60px;
  }

  .master-description {
    padding: 25px;
  }

  .master-image-wrapper {
    height: 280px;
  }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 767px) {
  .cover-desktop {
    display: none;
  }

  .cover-mobile {
    display: block;
  }

  .cover-img {
    height: 360px;
  }

  .page-title h1 {
    padding: 18px 0;
    font-size: 28px;
  }

  .about-content {
    padding: 35px 16px 50px;
  }

  .intro-text,
  .branch-text,
  .master-description p {
    font-size: 17px;
    line-height: 1.6;
  }

  .drop-cap {
    font-size: 42px;
  }

  .masters-heading {
    margin: 50px auto 30px;
  }

  .title {
    font-size: 28px;
  }

  .master-header {
    margin-bottom: 20px;
  }

  .master-header h2 {
    font-size: 25px;
  }

  .master-subtitle {
    font-size: 17px;
  }

  .master-details {
    font-size: 14px;
  }

  .master-image-wrapper {
    height: 320px;
  }

  .master-description {
    padding: 25px 5px 10px;
  }

  .master-divider {
    margin: 45px auto;
  }
}

/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 480px) {
  .cover-img {
    height: 300px;
  }

  .about-content {
    padding-left: 14px;
    padding-right: 14px;
  }

  .master-image-wrapper {
    height: 280px;
  }

  .master-description {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>

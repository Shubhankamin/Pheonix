<template>
  <section class="hero-section">
    <v-container fluid class="pa-0">
      <v-row class="ma-0">
        <v-col cols="12" class="pa-0 d-none d-md-block">
          <v-img
            src="/images/hero/latest.jpg"
            lazy-src="/images/hero/hero-3.jpg"
            height="70vh"
            cover
            class="hero-image"
          />
        </v-col>

        <v-col cols="12" class="pa-0 d-block d-md-none">
          <v-img
            src="/images/hero/hero-8.JPG"
            lazy-src="/images/hero/hero-3.jpg"
            height="70vh"
            cover
            class="hero-image"
          />
        </v-col>
      </v-row>

      <v-row class="hero-content ma-0 px-5 px-md-8">
        <v-col cols="12" md="6" class="hero-title d-flex align-center">
          <h1 class="ubuntu-regular-h1">
            CHANGE <br />
            YOUR LIFE
          </h1>
        </v-col>

        <v-col
          cols="12"
          md="6"
          class="hero-description d-flex flex-column justify-center"
        >
          <p class="ubuntu-regular-h3">
            Phoenix Academy provides Karate training for Physical, Mental and
            Self-defence. Karate training can help develop strength, speed,
            agility and endurance.
          </p>

          <a
            href="https://wa.me/9686860582"
            target="_blank"
            rel="noopener noreferrer"
            class="contact-link"
          >
            <button type="button" class="custom-button ubuntu-regular-h3">
              CONTACT NOW
            </button>
          </a>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
const whatsappLink = "https://wa.me/9686860582";
</script>

<style scoped>
.hero-section {
  width: 100%;
  background-color: #000000;
}

.hero-image {
  width: 100%;
}

.hero-content {
  min-height: 230px;
  background-color: #000000;
  color: #ffffff;
  border-top: 2px solid #4f000b;
}

.hero-title {
  padding-top: 30px;
  padding-bottom: 30px;
}

.hero-title h1 {
  margin: 0;
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: 1px;
}

.hero-description {
  padding-top: 30px;
  padding-bottom: 30px;
}

.hero-description p {
  max-width: 650px;
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  font-weight: 400;
}

.contact-link {
  display: inline-block;
  width: fit-content;
  margin-top: 28px;
  text-decoration: none;
}

.custom-button {
  position: relative;
  display: inline-block;
  padding: 13px 28px;
  border: 1px solid #ffb400;
  background-color: #1d1d2b;
  color: #ffb400;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.8px;
  cursor: pointer;
  transform: skewX(-10deg);
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.custom-button:hover {
  background-color: #ffb400;
  color: #000000;
  transform: skewX(-10deg) translateY(-3px);
  box-shadow: 0 8px 20px rgba(255, 180, 0, 0.2);
}

@media (max-width: 959px) {
  .hero-content {
    min-height: auto;
  }

  .hero-title {
    padding-top: 35px;
    padding-bottom: 10px;
  }

  .hero-description {
    padding-top: 10px;
    padding-bottom: 35px;
  }

  .contact-link {
    margin-top: 25px;
  }
}

@media (max-width: 600px) {
  .hero-content {
    padding-left: 25px !important;
    padding-right: 25px !important;
  }

  .hero-title {
    padding-top: 30px;
  }

  .hero-title h1 {
    font-size: 38px;
    line-height: 1;
  }

  .hero-description p {
    font-size: 16px;
    line-height: 1.55;
  }

  .contact-link {
    margin-top: 22px;
  }

  .custom-button {
    padding: 12px 24px;
    font-size: 14px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .custom-button {
    transition: none;
  }
}
</style>

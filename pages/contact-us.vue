<template>
  <div class="contact-page">
    <!-- Loading -->
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
      <!-- Hero -->
      <section class="hero-section">
        <Nav />

        <v-img
          src="/images/cover/cover-5.jpeg"
          class="hero-image hero-desktop"
          cover
          alt="Phoenix Academy India"
        />

        <v-img
          src="/images/cover/cover2.jpeg"
          class="hero-image hero-mobile"
          cover
          alt="Phoenix Academy India"
        />
      </section>

      <!-- Page Title -->
      <section class="page-title">
        <v-container>
          <h1 class="ubuntu-regular-h1">CONTACT US</h1>
        </v-container>
      </section>

      <!-- Contact Content -->
      <main class="contact-content">
        <v-container>
          <v-row class="contact-grid">
            <!-- Left Side -->
            <v-col cols="12" md="6" class="contact-left">
              <!-- Section Heading -->
              <div class="section-heading">
                <span class="heading-line"></span>

                <div>
                  <p class="heading-label">GET IN TOUCH</p>

                  <h2 class="ubuntu-regular-h2">FIND US</h2>
                </div>
              </div>

              <!-- Social Media -->
              <div class="social-section">
                <p class="ubuntu-regular-h3 section-description">
                  Connect with Phoenix Academy India through our social
                  channels.
                </p>

                <ul class="social-links">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/vijay-achari-419b4415"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      class="social-link linkedin"
                    >
                      <v-icon>mdi-linkedin</v-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.facebook.com/share/1EgdDCL2mp/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      class="social-link facebook"
                    >
                      <v-icon>mdi-facebook</v-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      :href="whatsappLink"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      class="social-link whatsapp"
                    >
                      <v-icon>mdi-whatsapp</v-icon>
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.instagram.com/vachar80/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      class="social-link instagram"
                    >
                      <v-icon>mdi-instagram</v-icon>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Map -->
              <div class="map-section">
                <div class="map-wrapper">
                  <iframe
                    :src="currentMapSrc"
                    class="map-iframe"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <!-- Locations -->
              <div class="locations-section">
                <div
                  v-for="(address, index) in addresses"
                  :key="index"
                  class="location-card"
                  :class="{
                    selected: selectedAddressIndex === index,
                  }"
                  @click="selectAddress(index)"
                >
                  <div class="location-icon">
                    <v-icon>mdi-map-marker</v-icon>
                  </div>

                  <div class="location-info">
                    <p class="location-label">TRAINING LOCATION</p>

                    <p class="location-name ubuntu-regular-h3">
                      {{ address.text }}
                    </p>
                  </div>

                  <v-icon class="location-arrow"> mdi-arrow-right </v-icon>
                </div>
              </div>
            </v-col>

            <!-- Right Side -->
            <v-col cols="12" md="6" class="contact-right">
              <div class="form-card">
                <div class="section-heading form-heading">
                  <span class="heading-line"></span>

                  <div>
                    <p class="heading-label">SEND A MESSAGE</p>

                    <h2 class="ubuntu-regular-h2">CONTACT US</h2>
                  </div>
                </div>

                <p class="form-intro ubuntu-regular-h3">
                  Have a question about our classes, training programs, or
                  locations? Send us a message and our team will get back to
                  you.
                </p>

                <form @submit.prevent="submitForm" class="contact-form">
                  <!-- Name -->
                  <div class="form-group">
                    <label for="name"> Name </label>

                    <input
                      id="name"
                      v-model="form.name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      autocomplete="name"
                    />
                  </div>

                  <!-- Email -->
                  <div class="form-group">
                    <label for="email"> Email </label>

                    <input
                      id="email"
                      v-model="form.email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      autocomplete="email"
                    />
                  </div>

                  <!-- Subject -->
                  <div class="form-group">
                    <label for="subject"> Subject </label>

                    <input
                      id="subject"
                      v-model="form.subject"
                      type="text"
                      placeholder="Enter subject"
                      required
                    />
                  </div>

                  <!-- Message -->
                  <div class="form-group">
                    <label for="message"> Message </label>

                    <textarea
                      id="message"
                      v-model="form.message"
                      placeholder="Write your message..."
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <!-- Submit -->
                  <button
                    type="submit"
                    class="submit-button"
                    :disabled="isBtnLoading"
                  >
                    <span v-if="!isBtnLoading"> SEND MESSAGE </span>

                    <span v-else class="button-loading">
                      <v-progress-circular indeterminate size="20" width="2" />
                      SENDING...
                    </span>

                    <v-icon v-if="!isBtnLoading"> mdi-arrow-right </v-icon>
                  </button>
                </form>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </main>

      <Footer />

      <!-- Snackbar -->
      <v-snackbar
        v-model="snackbar.show"
        :color="snackbar.color"
        timeout="3000"
        location="bottom right"
      >
        {{ snackbar.message }}
      </v-snackbar>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "CONTACT US | PHOENIX ACADEMY INDIA",
  ogTitle: "CONTACT US | PHOENIX ACADEMY INDIA",
  description:
    "Contact Phoenix Academy India for martial arts training, classes, locations, and enquiries.",
  ogDescription:
    "Contact Phoenix Academy India for martial arts training, classes, locations, and enquiries.",
  ogImage: "/images/cover/cover-5.jpeg",
  twitterCard: "summary_large_image",
});

const isLoading = ref(true);
const isBtnLoading = ref(false);

const snackbar = ref({
  show: false,
  message: "",
  color: "success",
});

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const whatsappLink = "https://wa.me/9686860582";

const addresses = [
  {
    text: "Belathur - Kadugodi",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5673550784536!2d77.75019304044993!3d12.999500787371248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f0017e1aaad%3A0x134ff725f8ffb1fb!2sBelathur!5e0!3m2!1sen!2sin!4v1735978887710!5m2!1sen!2sin",
  },
  {
    text: "Channasandra - Whitefield",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.834666807302!2d77.75492764044974!3d12.982424387386711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0f5bb6cd77%3A0x9c2ad8af90920046!2sWhitefield%20Global%20School!5e0!3m2!1sen!2sin!4v1735978947926!5m2!1sen!2sin",
  },
  {
    text: "HSR Layout and Hosur Road",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.844028490846!2d77.66404964044807!3d12.853348687503495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14494a8943f7%3A0x768d0f9874c48675!2sHosur%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1735979047830!5m2!1sen!2sin",
  },
];

const selectedAddressIndex = ref(0);

const currentMapSrc = computed(() => {
  return addresses[selectedAddressIndex.value].mapSrc;
});

const selectAddress = (index) => {
  selectedAddressIndex.value = index;
};

const submitForm = async () => {
  try {
    isBtnLoading.value = true;

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form.value),
    });

    if (!response.ok) {
      let errorMessage = "Failed to send message.";

      try {
        const errorResponse = await response.json();
        errorMessage = errorResponse?.message || errorMessage;
      } catch {
        // Keep default error message
      }

      snackbar.value = {
        show: true,
        message: errorMessage,
        color: "error",
      };

      return;
    }

    snackbar.value = {
      show: true,
      message: "Message sent successfully!",
      color: "success",
    };

    form.value = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  } catch (error) {
    console.error("Form submission error:", error);

    snackbar.value = {
      show: true,
      message: "Unable to send message. Please try again.",
      color: "error",
    };
  } finally {
    isBtnLoading.value = false;
  }
};

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 800);
});
</script>

<style scoped>
/* ========================================
   PAGE
======================================== */

.contact-page {
  background-color: #ffffff;
  color: #111111;
}

/* ========================================
   LOADING
======================================== */

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
    opacity: 0.4;
  }

  50% {
    transform: scale(1.6);
    opacity: 1;
  }
}

/* ========================================
   HERO
======================================== */

.hero-image {
  width: 100%;
}

.hero-desktop {
  height: 550px;
}

.hero-mobile {
  display: none;
  height: 360px;
}

/* ========================================
   PAGE TITLE
======================================== */

.page-title {
  background-color: #000000;
  color: #ffffff;
}

.page-title h1 {
  margin: 0;
  padding: 22px 0;

  font-weight: 700;
  letter-spacing: 1px;
}

/* ========================================
   CONTENT
======================================== */

.contact-content {
  padding: 70px 0 90px;
}

.contact-grid {
  max-width: 1250px;
  margin: 0 auto;
}

/* ========================================
   SECTION HEADINGS
======================================== */

.section-heading {
  display: flex;
  align-items: flex-start;
  gap: 16px;

  margin-bottom: 30px;
}

.heading-line {
  width: 5px;
  min-width: 5px;
  height: 58px;

  background-color: #ffb400;
}

.heading-label {
  margin: 0 0 4px;

  color: #4f000b;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin: 0;
  color: #111111;
  font-weight: 700;
}

/* ========================================
   LEFT SIDE
======================================== */

.contact-left {
  padding-right: 45px;
}

.section-description {
  margin: 0 0 22px;

  color: #666666;
  line-height: 1.6;
}

/* ========================================
   SOCIAL LINKS
======================================== */

.social-section {
  margin-bottom: 35px;
}

.social-links {
  display: flex;
  align-items: center;
  gap: 12px;

  margin: 0;
  padding: 0;

  list-style: none;
}

.social-link {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;

  overflow: hidden;

  border: 1px solid #dddddd;
  border-radius: 50%;

  background-color: #ffffff;
  color: #4f000b;

  text-decoration: none;

  transition:
    color 0.3s ease,
    background-color 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;
}

.social-link:hover {
  color: #ffffff;
  border-color: transparent;
  transform: translateY(-4px);
}

.social-link.linkedin:hover {
  background-color: #0a66c2;
}

.social-link.facebook:hover {
  background-color: #1877f2;
}

.social-link.whatsapp:hover {
  background-color: #25d366;
}

.social-link.instagram:hover {
  background-color: #d62976;
}

/* ========================================
   MAP
======================================== */

.map-section {
  margin-bottom: 25px;
}

.map-wrapper {
  width: 100%;
  height: 390px;

  overflow: hidden;

  border-radius: 4px;
  background-color: #eeeeee;

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.map-iframe {
  display: block;

  width: 100%;
  height: 100%;

  border: 0;
}

/* ========================================
   LOCATIONS
======================================== */

.locations-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.location-card {
  display: flex;
  align-items: center;
  gap: 15px;

  min-height: 75px;
  padding: 12px 16px;

  border: 1px solid #e4e4e4;
  border-left: 4px solid transparent;

  background-color: #ffffff;

  cursor: pointer;

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    transform 0.3s ease;
}

.location-card:hover {
  background-color: #fafafa;
  transform: translateX(4px);
}

.location-card.selected {
  border-left-color: #ffb400;
  background-color: #f7f7f7;
}

.location-icon {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 42px;
  min-width: 42px;
  height: 42px;

  border-radius: 50%;

  background-color: #4f000b;
  color: #ffb400;
}

.location-info {
  flex: 1;
}

.location-label {
  margin: 0 0 2px;

  color: #999999;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
}

.location-name {
  margin: 0;
  color: #222222;
}

.location-arrow {
  color: #999999;
  transition: transform 0.3s ease;
}

.location-card:hover .location-arrow {
  transform: translateX(4px);
}

/* ========================================
   FORM CARD
======================================== */

.contact-right {
  padding-left: 45px;
}

.form-card {
  padding: 45px;

  border-top: 5px solid #4f000b;

  background-color: #f7f7f7;
}

.form-heading {
  margin-bottom: 20px;
}

.form-intro {
  margin: 0 0 35px;

  color: #777777;
  line-height: 1.6;
}

/* ========================================
   FORM
======================================== */

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 23px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  color: #222222;
  font-size: 14px;
  font-weight: 700;
}

.form-group input,
.form-group textarea {
  width: 100%;

  padding: 14px 16px;

  border: 1px solid #d6d6d6;
  border-radius: 2px;

  background-color: #ffffff;
  color: #222222;

  outline: none;

  font-family: inherit;
  font-size: 15px;

  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.form-group input {
  height: 50px;
}

.form-group textarea {
  min-height: 145px;
  resize: vertical;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #aaaaaa;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #4f000b;
  box-shadow: 0 0 0 3px rgba(79, 0, 11, 0.08);
}

/* ========================================
   SUBMIT BUTTON
======================================== */

.submit-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 100%;
  min-height: 52px;

  margin-top: 8px;

  border: none;

  background-color: #4f000b;
  color: #ffffff;

  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;

  cursor: pointer;

  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
}

.submit-button:hover:not(:disabled) {
  background-color: #68000f;
  transform: translateY(-2px);
}

.submit-button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.button-loading {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 960px) {
  .contact-left {
    padding-right: 20px;
  }

  .contact-right {
    padding-left: 20px;
  }

  .form-card {
    padding: 30px;
  }

  .map-wrapper {
    height: 350px;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 767px) {
  .hero-desktop {
    display: none;
  }

  .hero-mobile {
    display: block;
  }

  .hero-image {
    height: 350px;
  }

  .page-title h1 {
    padding: 18px 0;
    font-size: 28px;
  }

  .contact-content {
    padding: 45px 16px 60px;
  }

  .contact-grid {
    margin: 0;
  }

  .contact-left,
  .contact-right {
    padding: 0;
  }

  .contact-right {
    margin-top: 45px;
  }

  .section-heading {
    margin-bottom: 25px;
  }

  .heading-line {
    height: 50px;
  }

  .heading-label {
    font-size: 11px;
  }

  .section-heading h2 {
    font-size: 25px;
  }

  .section-description {
    font-size: 16px;
  }

  .social-links {
    gap: 10px;
  }

  .social-link {
    width: 45px;
    height: 45px;
  }

  .map-wrapper {
    height: 300px;
  }

  .location-card {
    min-height: 70px;
  }

  .location-name {
    font-size: 16px;
  }

  .form-card {
    padding: 28px 20px;
  }

  .form-intro {
    font-size: 16px;
  }

  .form-group input {
    height: 48px;
  }
}

/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 480px) {
  .hero-image {
    height: 300px;
  }

  .contact-content {
    padding-left: 14px;
    padding-right: 14px;
  }

  .map-wrapper {
    height: 280px;
  }

  .form-card {
    padding: 25px 16px;
  }

  .location-card {
    padding: 10px 12px;
  }

  .location-icon {
    width: 38px;
    min-width: 38px;
    height: 38px;
  }
}
</style>

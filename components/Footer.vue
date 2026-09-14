<template>
  <footer class="footer">
    <v-container fluid class="pa-0">
      <div class="footer-container">
        <!-- Top Section -->
        <div class="footer-top">
          <!-- Logo -->
          <div class="footer-brand">
            <NuxtLink to="/">
              <img
                src="/images/logo/logo-footer.png"
                alt="Phoenix Academy India"
                class="footer-logo"
              />
            </NuxtLink>

            <p class="footer-tagline">Discipline. Strength. Excellence.</p>
          </div>

          <!-- Navigation -->
          <nav class="footer-navigation">
            <p class="footer-heading">QUICK LINKS</p>

            <NuxtLink to="/" class="footer-link"> HOME </NuxtLink>

            <NuxtLink to="/gallery" class="footer-link"> GALLERY </NuxtLink>

            <NuxtLink to="/about-us" class="footer-link"> ABOUT US </NuxtLink>

            <NuxtLink to="/contact-us" class="footer-link">
              CONTACT US
            </NuxtLink>
          </nav>

          <!-- Social -->
          <div class="footer-social">
            <p class="footer-heading">FOLLOW US</p>

            <div class="social-links">
              <a
                href="https://www.facebook.com/share/1EgdDCL2mp/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                class="social-link"
              >
                <v-icon>mdi-facebook</v-icon>
              </a>

              <a
                href="https://www.linkedin.com/in/vijay-achari-419b4415"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                class="social-link"
              >
                <v-icon>mdi-linkedin</v-icon>
              </a>

              <a
                href="https://www.instagram.com/vachar80/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                class="social-link"
              >
                <v-icon>mdi-instagram</v-icon>
              </a>
            </div>
          </div>
        </div>

        <!-- Divider -->
        <div class="footer-divider"></div>

        <!-- Bottom -->
        <div class="footer-bottom">
          <p>
            © {{ new Date().getFullYear() }} Phoenix Academy India. All Rights
            Reserved.
          </p>

          <p>Martial Arts Academy</p>
        </div>
      </div>
    </v-container>
  </footer>
</template>

<script setup></script>

<style scoped>
/* ========================================
   FOOTER
======================================== */

.footer {
  background-color: #4f000b;
  color: #ffffff;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 70px 25px;
}

/* ========================================
   TOP SECTION
======================================== */

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 70px;
  align-items: start;
}

/* ========================================
   BRAND
======================================== */

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-brand a {
  display: inline-block;
}

.footer-logo {
  display: block;
  width: 190px;
  max-width: 100%;
  cursor: pointer;

  transition: transform 0.3s ease;
}

.footer-logo:hover {
  transform: translateY(-3px);
}

.footer-tagline {
  margin: 18px 0 0;

  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  letter-spacing: 1px;
}

/* ========================================
   HEADINGS
======================================== */

.footer-heading {
  position: relative;

  margin: 0 0 22px;

  color: #ffb400;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
}

.footer-heading::after {
  content: "";

  display: block;

  width: 35px;
  height: 2px;

  margin-top: 8px;

  background-color: #ffb400;
}

/* ========================================
   NAVIGATION
======================================== */

.footer-navigation {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-link {
  position: relative;

  margin-bottom: 13px;

  color: rgba(255, 255, 255, 0.85);

  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.5px;

  text-decoration: none;

  transition:
    color 0.3s ease,
    transform 0.3s ease;
}

.footer-link:hover {
  color: #ffb400;
  transform: translateX(5px);
}

/* ========================================
   SOCIAL
======================================== */

.footer-social {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 46px;
  height: 46px;

  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;

  background-color: transparent;
  color: #ffffff;

  text-decoration: none;

  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease;
}

.social-link:hover {
  background-color: #ffb400;
  border-color: #ffb400;
  color: #4f000b;

  transform: translateY(-4px);
}

/* ========================================
   DIVIDER
======================================== */

.footer-divider {
  width: 100%;
  height: 1px;

  margin: 45px 0 22px;

  background-color: rgba(255, 255, 255, 0.25);
}

/* ========================================
   BOTTOM
======================================== */

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.footer-bottom p {
  margin: 0;

  color: rgba(255, 255, 255, 0.6);

  font-size: 12px;
  letter-spacing: 0.3px;
}

/* ========================================
   TABLET
======================================== */

@media (max-width: 900px) {
  .footer-container {
    padding: 50px 40px 25px;
  }

  .footer-top {
    grid-template-columns: 1.3fr 1fr 1fr;
    gap: 35px;
  }

  .footer-logo {
    width: 160px;
  }
}

/* ========================================
   MOBILE
======================================== */

@media (max-width: 600px) {
  .footer-container {
    padding: 45px 25px 20px;
  }

  .footer-top {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .footer-brand {
    width: 100%;
    align-items: center;
    text-align: center;
  }

  .footer-logo {
    width: 175px;
  }

  .footer-tagline {
    margin-top: 12px;
  }

  .footer-navigation,
  .footer-social {
    width: 100%;
    align-items: center;
  }

  .footer-heading {
    text-align: center;
  }

  .footer-heading::after {
    margin-left: auto;
    margin-right: auto;
  }

  .footer-link {
    margin-bottom: 14px;
  }

  .social-links {
    gap: 14px;
  }

  .social-link {
    width: 44px;
    height: 44px;
  }

  .footer-divider {
    margin: 40px 0 20px;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: 8px;
  }
}
</style>

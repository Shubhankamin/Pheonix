<template>
  <header class="navbar">
    <v-container fluid class="pa-0">
      <div class="desktop-navbar">
        <nav class="nav-section nav-left">
          <NuxtLink
            to="/"
            class="nav-link"
            :class="{ active: route.path === '/' }"
          >
            HOME
          </NuxtLink>

          <NuxtLink
            to="/gallery"
            class="nav-link"
            :class="{ active: route.path === '/gallery' }"
          >
            GALLERY
          </NuxtLink>
        </nav>

        <NuxtLink to="/" class="nav-logo">
          <img src="/images/logo/pheo-3.png" alt="Phoenix Academy India" />
        </NuxtLink>

        <nav class="nav-section nav-right">
          <NuxtLink
            to="/about-us"
            class="nav-link"
            :class="{ active: route.path === '/about-us' }"
          >
            ABOUT US
          </NuxtLink>

          <NuxtLink
            to="/contact-us"
            class="nav-link"
            :class="{ active: route.path === '/contact-us' }"
          >
            CONTACT US
          </NuxtLink>
        </nav>
      </div>

      <div class="mobile-navbar">
        <NuxtLink to="/" class="mobile-logo">
          <img src="/images/logo/pheo-3.png" alt="Phoenix Academy India" />
        </NuxtLink>

        <NuxtLink to="/" class="mobile-title"> PHOENIX ACADEMY </NuxtLink>

        <button
          type="button"
          class="menu-button"
          aria-label="Open navigation menu"
          @click="drawer = true"
        >
          <v-icon>mdi-menu</v-icon>
        </button>
      </div>

      <v-navigation-drawer
        v-model="drawer"
        temporary
        location="right"
        class="mobile-drawer"
      >
        <div class="drawer-header">
          <NuxtLink to="/" class="drawer-logo" @click="drawer = false">
            <img src="/images/logo/pheo-3.png" alt="Phoenix Academy India" />
          </NuxtLink>

          <button
            type="button"
            class="close-button"
            aria-label="Close navigation menu"
            @click="drawer = false"
          >
            <v-icon>mdi-close</v-icon>
          </button>
        </div>

        <nav class="drawer-navigation">
          <NuxtLink
            to="/"
            class="drawer-link"
            :class="{ active: route.path === '/' }"
            @click="drawer = false"
          >
            HOME
          </NuxtLink>

          <NuxtLink
            to="/gallery"
            class="drawer-link"
            :class="{ active: route.path === '/gallery' }"
            @click="drawer = false"
          >
            GALLERY
          </NuxtLink>

          <NuxtLink
            to="/about-us"
            class="drawer-link"
            :class="{ active: route.path === '/about-us' }"
            @click="drawer = false"
          >
            ABOUT US
          </NuxtLink>

          <NuxtLink
            to="/contact-us"
            class="drawer-link"
            :class="{ active: route.path === '/contact-us' }"
            @click="drawer = false"
          >
            CONTACT US
          </NuxtLink>
        </nav>
      </v-navigation-drawer>
    </v-container>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const drawer = ref(false);
const route = useRoute();
</script>

<style scoped>
.navbar {
  position: relative;
  z-index: 1000;
  background-color: #4f000b;
  color: #ffffff;
}

.desktop-navbar {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 90px;
  padding: 0 60px;
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 50px;
}

.nav-right {
  justify-content: flex-end;
}

.nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.9);
  font-family: "Ubuntu", sans-serif;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1.2px;
  text-decoration: none;
  transition: color 0.25s ease;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -8px;
  width: 0;
  height: 2px;
  background-color: #ffb400;
  transition: width 0.25s ease;
}

.nav-link:hover,
.nav-link.active {
  color: #ffb400;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.nav-logo img {
  display: block;
  width: 95px;
  height: 75px;
  object-fit: contain;
}

.mobile-navbar {
  display: none;
}

.mobile-drawer {
  background-color: #ffffff;
}

.drawer-header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 130px;
  background-color: #4f000b;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.drawer-logo img {
  display: block;
  width: 105px;
  height: 100px;
  object-fit: contain;
}

.close-button {
  position: absolute;
  top: 18px;
  right: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.25s ease;
}

.close-button:hover {
  background-color: #ffb400;
  border-color: #ffb400;
  color: #4f000b;
}

.drawer-navigation {
  display: flex;
  flex-direction: column;
}

.drawer-link {
  padding: 22px 25px;
  border-bottom: 1px solid #eeeeee;
  color: #4f000b;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.drawer-link:hover,
.drawer-link.active {
  padding-left: 32px;
  background-color: #4f000b;
  color: #ffb400;
}

.menu-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 50%;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.25s ease;
}

.menu-button:hover {
  background-color: #ffb400;
  border-color: #ffb400;
  color: #4f000b;
}

@media (max-width: 960px) {
  .desktop-navbar {
    padding: 0 30px;
  }

  .nav-section {
    gap: 25px;
  }

  .nav-link {
    font-size: 13px;
  }
}

@media (max-width: 767px) {
  .desktop-navbar {
    display: none;
  }

  .mobile-navbar {
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    align-items: center;
    min-height: 68px;
    padding: 0 15px;
  }

  .mobile-logo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .mobile-logo img {
    display: block;
    width: 45px;
    height: 50px;
    object-fit: contain;
  }

  .mobile-title {
    color: #ffffff;
    font-family: "Ubuntu", sans-serif;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.8px;
    text-align: center;
    text-decoration: none;
  }

  .menu-button {
    justify-self: end;
  }
}
</style>

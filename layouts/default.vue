<template>
  <div class="layout-wrapper">
    <!-- Slot for page content -->
    <slot />

    <!-- WhatsApp Floating Button -->
    <a
      :href="whatsappLink"
      target="_blank"
      class="float d-flex justify-center align-center"
      aria-label="Chat on WhatsApp"
    >
      <v-icon>mdi-whatsapp</v-icon>
    </a>
  </div>
</template>
<script setup>
const whatsappLink = "https://wa.me/9686860582";
</script>
<style scoped>
.layout-wrapper {
  min-height: 100vh;
  width: 100%;
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 10%;
  right: 40px;
  background-color: #25d366;
  color: #fff;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
  box-shadow: 2px 2px 3px #999;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
}

.float:hover {
  transform: scale(1.1);
}

.my-float {
  margin-top: 16px;
}
</style>

<!-- Font Awesome CSS -->
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
/>

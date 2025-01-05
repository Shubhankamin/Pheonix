<template>
  <div>
    <v-container fluid class="py-0">
      <v-row>
        <v-col class="px-0 mx-0">
          <v-row class="py-0 px-0 py-0">
            <v-col class="px-0 mx-0" cols="12">
              <Nav />
<div class="cover-image">

</div>
            </v-col>
            <v-col cols="12" class="px-0 py-0">
              <div class="bg-black px-5 py-2">
                <p style="font-weight: 700" class="ubuntu-regular-h1">
                  CONTACT US
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row class="px-md-10 pt-md-10" data-aos="fade-up">
            <v-col cols="12" md="6" class="pb-10">
              <ul class="example-2 pb-5">
                <li class="icon-content">
                  <a
                    href="https://www.linkedin.com/in/vijay-achari-419b4415?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    aria-label="LinkedIn"
                    target="_blank"
                    data-social="LinkedIn"
                  >
                    <div class="filled"></div>
                    <v-icon>mdi-linkedin</v-icon>
                  </a>
                  <div class="tooltip">LinkedIn</div>
                </li>
                <li class="icon-content">
                  <a
                    href="https://www.facebook.com/share/1EgdDCL2mp/"
                    aria-label="github"
                    data-social="github"
                    target="_blank"
                  >
                    <div class="filled"></div>
                    <v-icon>mdi-facebook</v-icon>
                  </a>
                  <div class="tooltip">Facebook</div>
                </li>
                <li class="icon-content">
                  <a
                    :href="whatsappLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="neon pointer"
                    aria-label="whatsapp"
                    data-social="whatsapp"
                  >
                    <div class="filled"></div>
                    <v-icon>mdi-whatsapp</v-icon>
                  </a>
                  <div class="tooltip">WhatsApp</div>
                </li>
                <li class="icon-content">
                  <a
                    href="https://www.instagram.com/vachar80/profilecard/?igsh=MTlqZzFva29raTFvZg=="
                    aria-label="Instagram"
                    target="_blank"
                    data-social="instagram"
                  >
                    <div class="filled"></div>
                    <v-icon>mdi-instagram</v-icon>
                  </a>
                  <div class="tooltip">Instagram</div>
                </li>
              </ul>
              <div class="">
                <div class="mapouter">
                    <div class="gmap_canvas">
                    <iframe
                      class="gmap_iframe"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      :src="currentMapSrc"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div>
                <v-row>
                  <v-col cols="12" v-for="(address, index) in addresses" :key="index">
                    <div
                      :class="['address-div', { 'selected': selectedAddressIndex === index }]"
                      @click="selectAddress(index)"
                    >
                      <p class="d-flex align-center ga-2">
                        <v-icon>mdi-map-marker</v-icon>
                        <div>
                          <span class="ubuntu-regular-h3">Address: &nbsp;</span>
                          <span class="ubuntu-regular-h3">{{ address.text }}</span>
                        </div>
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-10 px-md-5">
              <form
                action="https://formsubmit.co/vijh45@gmail.com"
                method="POST"
              >
                <div>
                  <p class="pb-5 ubuntu-regular-h3">Name</p>

                  <input
                    placeholder="Enter your Name"
                    class="input w-100 py-1"
                    type="text"
                    name="name"
                  />
                </div>
                <div>
                  <p class="py-5 ubuntu-regular-h3">Email</p>

                  <input
                    class="input w-100 py-1"
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                  />
                </div>
                <div>
                  <p class="py-5 ubuntu-regular-h3">Subject</p>

                  <input
                    class="input w-100 py-1"
                    placeholder=" Enter Subject"
                    name="subject"
                  />
                </div>
                <div>
                  <p class="py-5 ubuntu-regular-h3">Message</p>

                  <textarea
                    class="input w-100"
                    placeholder="Message"
                    name="message"
                  />
                </div>
                <input type="hidden" name="_captcha" value="false" />
                <button
                  class="submit py-2 px-12 mt-md-16 mt-4 mb-md-0 mb-4 ubuntu-regular-h3"
                >
                  Submit
                </button>
              </form>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="pa-0">
              <Footer />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script setup>

useSeoMeta({
  title: "CONTACT US | PHEONIX ACADEMY",
  ogTitle: "CONTACT US | PHEONIX ACADEMY",
  description: "where timeless craftsmanship meets unmatched purity",
  ogDescription: "where timeless craftsmanship meets unmatched purity",
  ogImage: "https://sustainability.manipal.edu//images/seo/logo-og.png",
  twitterCard: "summary_large_image",
});

const whatsappLink = "https://wa.me/9686860582";
const addresses = ref([
  {
    text: "Belathur-Kadugodi",
    mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5673550784536!2d77.75019304044993!3d12.999500787371248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f0017e1aaad%3A0x134ff725f8ffb1fb!2sBelathur!5e0!3m2!1sen!2sin!4v1735978887710!5m2!1sen!2sin" 
  },
  {
    text: "Channasandra-whitefield",
    mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.834666807302!2d77.75492764044974!3d12.982424387386711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0e0f5bb6cd77%3A0x9c2ad8af90920046!2sWhitefield%20Global%20School!5e0!3m2!1sen!2sin!4v1735978947926!5m2!1sen!2sin" 
  },
  {
    text: " HSR Layout and Hosur road",
    mapSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.844028490846!2d77.66404964044807!3d12.853348687503495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14494a8943f7%3A0x768d0f9874c48675!2sHosur%20Rd%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1735979047830!5m2!1sen!2sin" 
  },
]);

const selectedAddressIndex = ref(null); // Index of selected address
const currentMapSrc = ref(addresses.value[0].mapSrc); // Default map source

// Function to handle address selection
const selectAddress = (index) => {
  selectedAddressIndex.value = index;
  currentMapSrc.value = addresses.value[index].mapSrc; // Update map source
};
</script>

<style scoped>
.heading {
  text-transform: uppercase;
}

.cover-image{
  background-position-y: center;
  background-image: url("/images/hero/hero-2.jpg");
  height: 40vh;
}
.address-div {
  border: 1px solid red;
  width: 50%;
  margin-top: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.address-div.selected {
  background-color: rgba(128, 128, 128, 0.192); /* Grey with 50% opacity */
}

.neon {
  color: #d3f576;
}
.neon:hover {
  color: #0077b5;
}
/* From Uiverse.io by xueyuantan */
button {
  width: 9em;
  height: 3em;
  font-size: 15px;
  font-family: inherit;
  border: 1px solid white;
  position: relative;
  overflow: hidden;
  z-index: 1;
  background-color: black;
  color: red;
  font-weight: 600;
}

.main {
  background-image: url("images/meteor.svg");
  background-size: cover;
}

button::before {
  content: "";
  width: 0;
  height: 3em;
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(to right, #da1904 0%, #020000 100%);
  transition: 0.5s ease;
  display: block;
  color: white !important;

  z-index: -1;
}

button:hover::before {
  width: 9em;
  color: white !important;
}

.mapouter {
  position: relative;
  text-align: right;
  width: 100%;
  height: 450px;
}
.gmap_canvas {
  overflow: hidden;
  background: none !important;
  width: 100%;
  height: 450px;
}
.gmap_iframe {
  width: 100% !important;
  height: 450px !important;
}

/* From Uiverse.io by SSpisso */
.input {
  background-color: #383838;
  border: 1ex solid none;
  border-top-width: 1.7em;
  margin: 0;
  padding: 0;
  color: #383838;
  word-wrap: break-word;
  outline: 7px solid #383838;
  font-size: 17px;
  text-align: center;
  transition: all 0.5s;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
}

.input:hover {
  border-top-width: 0.2em;
  background-color: #f1e8e8;
}

.input:focus {
  border-top-width: 0.2em;
  background-color: #f1e8e8;
}

/* From Uiverse.io by Artahs */
ul {
  list-style: none;
}

.example-2 {
  display: flex;
}
.example-2 .icon-content {
  margin: 0 10px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 10px;
  border-radius: 5px;
  opacity: 0;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  top: -50px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 30px;
  height: 30px;
}
.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}

.example-2 .icon-content a[data-social="LinkedIn"] .filled,
.example-2 .icon-content a[data-social="LinkedIn"] ~ .tooltip {
  background-color: #1343f2;
}

.example-2 .icon-content a[data-social="whatsapp"] .filled,
.example-2 .icon-content a[data-social="whatsapp"] ~ .tooltip {
  background-color: #03f930;
}

.example-2 .icon-content a[data-social="github"] .filled,
.example-2 .icon-content a[data-social="github"] ~ .tooltip {
  background-color: #171d25;
}
.example-2 .icon-content a[data-social="instagram"] .filled,
.example-2 .icon-content a[data-social="instagram"] ~ .tooltip {
  background: linear-gradient(
    45deg,
    #405de6,
    #5b51db,
    #b33ab4,
    #c135b4,
    #e1306c,
    #fd1f1f
  );
}
.example-2 .icon-content a[data-social="youtube"] .filled,
.example-2 .icon-content a[data-social="youtube"] ~ .tooltip {
  background-color: #ff0000;
}
</style>

// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

const myTheme = {
  dark: false,
  colors: {
    primary: "#161412",
    background: "#FFFFFF",
    navBar: "#FCFCFC",
    background_grey: "#F4F4F4",
    icon: "#D1A651",
    icon2: "#603813",
    reject: "#DF1919",
    success: "#169A4B",
    link: "#0400C2",
    greytext: "#65635F",
    secondary: "#65635F",
    grey: "#363636",
    bgBlack: "#1d1d2b",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});

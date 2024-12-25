<template>
  <div>
    <v-container fluid class="mx-0 px-0">
      <Nav  />
      <v-row class="">
        <v-col>
          <div class="image-grid">
            <div class="image-row">
              <div class="image image-01"></div>
              <div class="image image-02"></div>
              <div class="image image-03"></div>
            </div>
            <div class="image-row">
              <div class="image image-04"></div>
              <div class="image image-05"></div>
            </div>
            <div class="image-row">
              <div class="image image-06"></div>
              <div class="image image-07"></div>
              <div class="image image-08"></div>
              <div class="image image-09"></div>
            </div>
            <div class="image-row">
              <div class="image image-10"></div>
              <div class="image image-11"></div>
              <div class="image image-12"></div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  background-color: #171414;
}

.image-grid {
  padding: 12px;
}

.image-row {
  display: flex;
}

.image-row .image {
  margin: 12px;
  height: 240px;
}

.image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.15),
    0 6px 20px rgba(0, 0, 0, 0.7);
}

.image-01 {
  background-image: url("/images/hero/hero-2.jpg");
  flex: 1;
}

.image-02 {
  background-image: url("/images/kid-karate.jpeg");
  flex: 1;
}

.image-03 {
  background-image: url("/images/slider-karate.jpeg");
  flex: 2;
}

.image-04 {
  background-image: url("https://images.unsplash.com/photo-1568602048381-2285db7095c6?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
  flex: 1;
}

.image-05 {
  background-image: url("/images/hero/hero-1.jpg");
  flex: 2;
}

.image-06 {
  background-image: url("/images/slider-karate.jpeg");
  flex: 2;
}

.image-07 {
  background-image: url("/images/hero/hero-1.jpg");
  flex: 1;
}

.image-08 {
    background-image: url("/images/hero/hero-2.jpg");
    flex: 3;
}

.image-09 {
  background-image: url("/images/slider-karate.jpeg");
  flex: 1;
}

.image-10 {
    background-image: url("/images/hero/hero-1.jpg");
    flex: 1;
}

.image-11 {
  background-image: url("https://images.unsplash.com/photo-1616418672515-1c2b39e219d3?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5N3w2c01WalRMU2tlUXx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60");
  flex: 1;
}

.image-12 {
  background-image: url("/images/slider-karate.jpeg");
  flex: 1;
}

@media screen and (max-width: 400px) {
  .image-row {
    flex-direction: column;
  }

  .image-row .image {
    flex-basis: auto;
  }
}
</style>

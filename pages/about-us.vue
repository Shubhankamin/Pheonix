<template>
  <div>
    <v-container fluid class="">
      <v-row>
        <v-col>
          <v-row class="py-0 px-0">
            <v-col class="py-0 px-0" cols="12">
              <Nav />

              <v-img src="/images/hero/hero-2.jpg" cover height="250"> </v-img>
            </v-col>
            <v-col cols="12" class="mx-0 px-0">
              <div class="bg-black px-10">
                <h1 class="ubuntu-regular-h1" style="">ABOUT US</h1>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="px-0">
              <div class="px-5 pb-10">
                <v-row class="ga-10 justify-center">
                  <v-col class="mx-0 px-0" cols="12" md="5">
                    <v-img src="/images/hero/hero-2.jpg" cover height="250">
                    </v-img>
                  </v-col>
                  <v-col class="mx-0 px-0 d-none d-md-block" cols="12" md="5">
                    <v-img src="/images/hero/hero-2.jpg" cover height="250">
                    </v-img>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12" class="px-4">
                    <div>
                      <p class="ubuntu-regular-h3 text-grey">
                        <b class="text-black"
                          ><span style="font-size: 35px">P</span>hoenix Academy
                          India</b
                        >
                        cultivates both physical and mental strength through
                        focused training, promoting concentration, discipline,
                        and integrity. Participants develop increased
                        self-confidence, motivation, and team-building skills
                        while honing speed, coordination, and a strong mind-body
                        connection.
                      </p>
                      <p class="ubuntu-regular-h3 text-grey">
                        <b class="text-black">Phoenix Academy India</b> has
                        multiple branches in bangalore such as
                        <b class="text-black">Belathur-Kadugodi,</b>
                        <b class="text-black">Channasandra-whitefield,</b>
                        <b class="text-black">HSR Layout and Hosur road.</b>
                      </p>
                    </div>
                  </v-col>
                </v-row>
                <div>
                  <v-row>
                    <v-col>
                      <p class="ubuntu-regular-h1 font-weight-bold text-grey">
                        OUR MASTERS
                      </p>
                      <p class="ubuntu-regular-h2 text-black mt-5">
                        KEERTHI G K
                      </p>
                      <p class="ubuntu-regular-h3 text-grey">
                        President of PHOENIX ACADEMY INDIA
                      </p>

                      <p class="ubuntu-regular-h3 text-grey">
                        TOURNAMENT COMMISSION SECRETARY-KIO
                      </p>
                      <p class="ubuntu-regular-h3 text-grey">
                        Chief Representative of Seiko Kai Karate International
                        India Karnataka
                      </p>

                      <p class="ubuntu-regular-h3 text-grey">
                        4th Dan Black Belt(WKF) <br />5th Dan Black Belt
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="mx-0 px-0 py-0" cols="12" md="3">
                      <v-img src="/images/masters/master-3.jpeg" cover> </v-img>
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex align-center">
                      <div>
                        <p class="ubuntu-regular-h3 text-grey">
                          Passionate and proficient martial arts instructor with
                          20 years of expertise in instructing diverse martial
                          arts styles. Wholeheartedly dedicated to fostering
                          physical fitness, self- discipline, and personal
                          growth among students spanning different age groups.
                          Eagerly pursuing a chance to impart my love for
                          martial arts and make a valuable impact on the
                          advancement and triumph of a phoenix martial arts
                          academy.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-divider
                  :thickness="3"
                  class="border-opacity-50 mt-5 mt-md-10"
                ></v-divider>
                <div>
                  <v-row>
                    <v-col>
                      <p class="ubuntu-regular-h2 text-black mt-5">
                        VIJAY ACHAR
                      </p>
                      <p class="ubuntu-regular-h3 text-grey">
                        Black belt 3rd Dan
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="mx-0 px-0 py-0" cols="12" md="3">
                      <v-img src="/images/masters/mast-2.jpg" cover> </v-img>
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex align-center">
                      <div>
                        <p class="ubuntu-regular-h3 text-grey">
                          15 years of Dynamic and results-oriented Karate
                          Instructor with a wealth of experience and a solid
                          history of outstanding accomplishments. Skilled in
                          creating personalized training programs, delivering
                          exceptional individual and group lessons, tracking
                          student progress, and executing effective marketing
                          strategies.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
                <v-divider
                  :thickness="3"
                  class="border-opacity-50 mt-5 mt-md-10"
                ></v-divider>
                <div>
                  <v-row>
                    <v-col>
                      <p class="ubuntu-regular-h2 text-black mt-5">RAJSHEKAR</p>
                      <p class="ubuntu-regular-h3 text-grey">
                        Black belt 3rd Dan
                      </p>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col class="mx-0 px-0 py-0" cols="12" md="3">
                      <v-img src="/images/masters/mast-1.JPG" cover> </v-img>
                    </v-col>
                    <v-col cols="12" md="6" class="d-flex align-center">
                      <div>
                        <p class="ubuntu-regular-h3 text-grey">
                          10 Years of experience in Assessing and monitoring
                          students' progress, providing feedback, and setting
                          goals for skill advancement and belt promotions.
                          Demonstrating karate techniques and forms to
                          illustrate proper execution and form. Supervising
                          sparring sessions and practicing drills to enhance
                          students' combat skills and self-defense.
                        </p>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
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
  title: "ABOUT US | PHEONIX ACADEMY",
  ogTitle: "ABOUT US | PHEONIX ACADEMY",
  description: "where timeless craftsmanship meets unmatched purity",
  ogDescription: "where timeless craftsmanship meets unmatched purity",
  ogImage: "https://sustainability.manipal.edu//images/seo/logo-og.png",
  twitterCard: "summary_large_image",
});
</script>

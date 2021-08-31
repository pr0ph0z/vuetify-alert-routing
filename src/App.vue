<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
          @click="home"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn @click="about">
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <Snackbar />
  </v-app>
</template>

<script>
import Snackbar from "./components/Snackbar";
export default {
  name: "App",
  components: {
    Snackbar,
  },
  methods: {
    home() {
      this.$snackbar.showMessage({
        content: "Move to Home",
        variant: "success",
      });
      this.$router.push({ name: "Home" });
    },
    about() {
      this.$snackbar.showMessage({
        content: "Move to About",
        variant: "success",
      });
      this.$router.push({ name: "About" });
    },
  },
};
</script>

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import snackbarPlugin from "./plugins/snackbar";

Vue.config.productionTip = false;
Vue.use(snackbarPlugin, { store });

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

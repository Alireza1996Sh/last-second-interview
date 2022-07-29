import Vue from "vue";
import VueMq from "vue-mq";

import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import { initBootstrapVue } from "@/config/bootstrap";
import "@/assets/scss/bootstrap.scss";

Vue.use(VueMq);
initBootstrapVue(Vue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

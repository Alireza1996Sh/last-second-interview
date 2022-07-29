// global bootstrap components and icons (tree-shaking)
import { BButton, BIconCart } from "bootstrap-vue";

export function initBootstrapVue(Vue) {
  Vue.component("BButton", BButton);
  Vue.component("BIconCart", BIconCart);
}

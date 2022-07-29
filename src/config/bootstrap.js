// global bootstrap components and icons (tree-shaking)
import {
  BButton,
  BFormInput,
  BIconBag,
  BIconList,
  BIconPerson,
  BIconQuestionCircle,
  BIconSearch,
  BImg,
  BInputGroup,
  BInputGroupText,
  LayoutPlugin,
} from "bootstrap-vue";

export function initBootstrapVue(Vue) {
  // plugins
  Vue.use(LayoutPlugin);

  // components
  Vue.component("BButton", BButton);
  Vue.component("BImg", BImg);
  Vue.component("BFormInput", BFormInput);
  Vue.component("BInputGroup", BInputGroup);
  Vue.component("BInputGroupText", BInputGroupText);

  // icons
  Vue.component("BIconList", BIconList);
  Vue.component("BIconQuestionCircle", BIconQuestionCircle);
  Vue.component("BIconPerson", BIconPerson);
  Vue.component("BIconBag", BIconBag);
  Vue.component("BIconSearch", BIconSearch);
}

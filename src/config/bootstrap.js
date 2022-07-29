// global bootstrap components and icons (tree-shaking)
import {
  BBreadcrumb,
  BButton,
  BFormInput,
  BIconBag,
  BIconBell,
  BIconHandThumbsDown,
  BIconHandThumbsUp,
  BIconList,
  BIconPerson,
  BIconQuestionCircle,
  BIconSearch,
  BIconShare,
  BIconStar,
  BIconStarFill,
  BImg,
  BInputGroup,
  BInputGroupText,
  CarouselPlugin,
  LayoutPlugin,
} from "bootstrap-vue";

export function initBootstrapVue(Vue) {
  // plugins
  Vue.use(LayoutPlugin);
  Vue.use(CarouselPlugin);

  // components
  Vue.component("BButton", BButton);
  Vue.component("BImg", BImg);
  Vue.component("BFormInput", BFormInput);
  Vue.component("BInputGroup", BInputGroup);
  Vue.component("BInputGroupText", BInputGroupText);
  Vue.component("BBreadcrumb", BBreadcrumb);

  // icons
  Vue.component("BIconList", BIconList);
  Vue.component("BIconQuestionCircle", BIconQuestionCircle);
  Vue.component("BIconPerson", BIconPerson);
  Vue.component("BIconBag", BIconBag);
  Vue.component("BIconSearch", BIconSearch);
  Vue.component("BIconStarFill", BIconStarFill);
  Vue.component("BIconStar", BIconStar);
  Vue.component("BIconShare", BIconShare);
  Vue.component("BIconBell", BIconBell);
  Vue.component("BIconHandThumbsUp", BIconHandThumbsUp);
  Vue.component("BIconHandThumbsDown", BIconHandThumbsDown);
}

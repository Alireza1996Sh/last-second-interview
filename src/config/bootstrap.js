// global bootstrap components and icons (tree-shaking)
import {
  BAvatar,
  BBreadcrumb,
  BButton,
  BFormInput,
  BIconBag,
  BIconBell,
  BIconHandThumbsDown,
  BIconHandThumbsUp,
  BIconList,
  BIconPerson,
  BIconQuestion,
  BIconQuestionCircle,
  BIconReply,
  BIconSearch,
  BIconShare,
  BIconStar,
  BIconStarFill,
  BImg,
  BInputGroup,
  BInputGroupText,
  CardPlugin,
  CarouselPlugin,
  LayoutPlugin,
} from "bootstrap-vue";

export function initBootstrapVue(Vue) {
  // plugins
  Vue.use(LayoutPlugin);
  Vue.use(CarouselPlugin);
  Vue.use(CardPlugin);

  // components
  Vue.component("BButton", BButton);
  Vue.component("BImg", BImg);
  Vue.component("BFormInput", BFormInput);
  Vue.component("BInputGroup", BInputGroup);
  Vue.component("BInputGroupText", BInputGroupText);
  Vue.component("BBreadcrumb", BBreadcrumb);
  Vue.component("BAvatar", BAvatar);

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
  Vue.component("BIconReply", BIconReply);
  Vue.component("BIconQuestion", BIconQuestion);
}

import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product-detail",
    name: "product-detail",
    meta: { name: "جزییات محصول" },
    component: () =>
      import(
        /* webpackChunkName: "product-detail" */ "../views/ProductDetailView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

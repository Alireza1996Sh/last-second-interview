import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "product-detail" },
  },
  {
    path: "/product-detail",
    name: "product-detail",
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

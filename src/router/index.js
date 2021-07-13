import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 一级重定向
  {
    path: "/",
    redirect: "/home",
  },
  // 首页
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      // 二级重定向
      {
        path: "/",
        redirect: "/home/index",
      },
      {
        path: "/home/index",
        component: () => import("../views/home/Index.vue"),
      },
      {
        path: "/home/classify",
        component: () => import("../views/home/Classify.vue"),
      },
      {
        path: "/home/cart",
        component: () => import("../views/home/Cart.vue"),
      },
      {
        path: "/home/mine",
        component: () => import("../views/home/Mine.vue"),
      },
    ],
  },
  // 登录页
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/service-product",
      name: "service-product",
      component: () => import("../views/SerProdView.vue"),
    },
    {
      path: "/portfolio-case-studies",
      name: "porfolio-cs",
      component: () => import("../views/PortfolioView.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/blog-news",
      name: "blog-news",
      component: () => import("../views/BlogNewsView.vue"),
    },
  ],

  // Classe da applicare ai link attivi
  linkActiveClass: "selected",
});

export default router;

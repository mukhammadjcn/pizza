import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheCart from "../views/TheCart.vue";
import TheOrdered from "../views/TheOrdered.vue";
import NotFound from "../views/NotFound.vue";
import store from "../store/index.js";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cart",
    name: "cart",
    component: TheCart,
  },
  {
    path: "/ordered",
    name: "order",
    component: TheOrdered,
    beforeEnter: () => {
      if (!store.getters.ordered) {
        router.replace("/");
      }
    },
  },
  {
    path: "/404",
    name: "notFound",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

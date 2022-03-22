import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TheCart from "../views/TheCart.vue";
import TheOrdered from "../views/TheOrdered.vue";

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
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createWebHistory, createRouter } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Home from "../views/Home.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/welcome/:name", component: Welcome },
    { path: "/", component: Home },
  ],
});
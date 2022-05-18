import { createWebHistory,  createRouter } from 'vue-router';
import NotFound from '../views/NotFound.vue';
import Welcome from '../views/Welcome.vue';
import Home from '../views/Home.vue';

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/welcome/:name', name: 'Welcome', component: Welcome },
    { path: '/', name: 'Home', component: Home },
  ],
});
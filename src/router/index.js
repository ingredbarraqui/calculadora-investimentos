import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Resultado from '../views/Resultado.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/resultado',
    name: 'Resultado',
    component: Resultado,
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
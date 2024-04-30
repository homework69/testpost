import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomePage from '../pages/HomePage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/testpost/', name: 'home', component: HomePage },
  { path: '/post/:id', name: 'post', component: () => import('../pages/PostsDescr.vue') },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
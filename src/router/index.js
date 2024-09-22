import { createRouter, createWebHistory } from 'vue-router';
import Auth from './auth/authRoutes.js';
import Profile from './profile/profileRoutes.js';
import HomeView from '../views/HomeView.vue';
import StatisticsView from '../views/StatisticsView.vue';
import StartFishingView from '../views/StartFishingView.vue'
import Waters from './waters/watersRoutes.js';
import Fishes from './fishes/fishesRoutes.js';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },

    {
      path: '/statistics',
      name: 'Statistics',
      component: StatisticsView
    },

    {
      path: '/fishing',
      name: 'Fishing',
      component: StartFishingView
    },

    ...Auth,
    ...Profile,
    ...Waters,
    ...Fishes,
    {
      // path: '/about',
      // name: 'about',
      // // route level code-splitting
      // // this generates a separate chunk (About.[hash].js) for this route
      // // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router

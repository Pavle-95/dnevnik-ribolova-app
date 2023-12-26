import { createRouter, createWebHistory } from 'vue-router'
import Auth from './auth/authRoutes.js'
import Profile from './profile/profileRoutes.js';
import HomeView from '../views/HomeView.vue'
import StatisticsView from '../views/StatisticsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/statistics',
      name: 'Statiscis',
      component: StatisticsView
    },

    ...Auth,
    ...Profile,
    
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

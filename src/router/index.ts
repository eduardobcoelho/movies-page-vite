import { createRouter, createWebHistory } from 'vue-router'
import AppMovies from '../views/movies/AppMovies.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppMovies,
    },
  ],
})

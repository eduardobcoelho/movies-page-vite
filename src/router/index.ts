import { createRouter, createWebHistory } from 'vue-router'
import AppMovies from '../views/movies/AppMovies.vue'
import AppDirector from '../views/director/AppDirector.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      component: AppMovies,
    },
    {
      name: 'director',
      path: '/director/:name',
      component: AppDirector,
    },
  ],
})

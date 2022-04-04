import { createRouter, createWebHistory } from 'vue-router'
import AppMovies from '../views/movies/AppMovies.vue'
import AppDirector from '../views/director/AppDirector.vue'
import AppActors from '../views/actors/AppActors.vue'

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
    {
      name: 'actors',
      path: '/movie/actors/:movie_name',
      component: AppActors,
    },
  ],
})

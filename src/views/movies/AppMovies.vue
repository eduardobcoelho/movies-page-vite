<template>
  <div class="bg-background">
    <app-movie
      v-for="movie in movies"
      :key="movie.name"
      :name="movie.name"
      :sinope="movie.sinopse"
      :year="movie.year"
      :imdb="movie.imdb"
      :actors="movie.actors"
      :poster="movie.poster"
      :director="movie.director"
    ></app-movie>
  </div>
</template>

<script setup lang="ts">
  // state management
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  // components
  import AppMovie from '../../components/movies/AppMovie.vue'
  // interfaces
  import { IMovie } from '../../store/movie/types'
  // setup
  const store = useStore()
  const getMovies = (): any => {
    store.dispatch('getMovies')
  }
  getMovies()
  const movies: IMovie[] = <any>computed(() => store.getters.movies)
</script>

<template>
  <div class="bg-background">
    <app-movie
      v-for="movie in movies"
      :key="movie.name"
      :name="movie.name"
      :sinopse="movie.sinopse"
      :year="movie.year"
      :imdb="movie.imdb"
      :actors="movie.actors"
      :poster="movie.poster"
      :director="movie.director"
    ></app-movie>
    <app-movies-scroll :movies="movies"></app-movies-scroll>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { IMovie } from '../../store/movie/types'
  import AppMovie from '../../components/movies/AppMovie.vue'
  import AppMoviesScroll from '../../components/movies/AppMoviesScroll.vue'

  const store = useStore()
  const getMovies = (): any => {
    store.dispatch('getMovies')
  }
  getMovies()
  const movies: IMovie[] = <any>computed(() => store.getters.movies)
</script>

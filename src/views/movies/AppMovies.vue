<template>
  <base-structure
    v-for="movie in movies"
    entity="movie"
    :key="movie.name"
    :name="movie.name"
  >
    <template #image>
      <img
        :src="`${movie.poster}`"
        :alt="`${movie.name} poster`"
        :title="`${movie.name} poster`"
        class="default-image-size transition-all cursor-pointer hover:rounded-lg"
      />
    </template>
    <template #description>
      <app-movie-description
        :key="`${movie.name} description`"
        :name="movie.name"
        :sinopse="movie.sinopse"
        :year="movie.year"
        :imdb="movie.imdb"
        :imdbLink="movie.imdbLink"
        :director="movie.director"
      ></app-movie-description>
    </template>
  </base-structure>
  <app-scroll entity="movie" :data="movies"></app-scroll>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { IMovie } from 'src/store/movie/types'
  import AppMovieDescription from '/src/components/movies/AppMovieDescription.vue'

  const store = useStore()
  const getMovies = (): any => {
    store.dispatch('getMovies')
  }
  getMovies()
  const movies: IMovie[] = <any>computed(() => store.getters.movies)
</script>

<template>
  <div class="bg-background">
    <base-structure
      v-for="movie in movies"
      isMovie
      :key="movie.name"
      :name="movie.name"
    >
      <template #image>
        <img
          :src="`${movie.poster}`"
          :alt="`${movie.name} poster`"
          :title="`${movie.name} poster`"
          width="350"
          class="transition-all cursor-pointer hover:rounded-lg"
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
    <app-movies-scroll :movies="movies"></app-movies-scroll>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { IMovie } from '../../store/movie/types'
  import AppMovieDescription from '../../components/movies/AppMovieDescription.vue'
  import AppMoviesScroll from '../../components/movies/AppMoviesScroll.vue'

  const store = useStore()
  const getMovies = (): any => {
    store.dispatch('getMovies')
  }
  getMovies()
  const movies: IMovie[] = <any>computed(() => store.getters.movies)
</script>

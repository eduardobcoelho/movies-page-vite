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
  <div class="button-redirect-bottom-default-position">
    <button-redirect direction="top" @click="toTop"></button-redirect>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { IMovie } from '../../store/movie/types'
  import AppMovieDescription from '/src/components/movies/AppMovieDescription.vue'

  const store = useStore()
  const router = useRouter()
  const movies: IMovie[] = <any>computed(() => store.getters.movies)
  const getMovies = (): any => {
    store.dispatch('getMovies')
  }
  const toTop = () => {
    let movies = store.getters.movies
    router.push(
      movies.length
        ? `/#movie-${movies[0].name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`
        : '/'
    )
    window.scrollTo({ top: 0 })
  }
  getMovies()
  toTop()
</script>

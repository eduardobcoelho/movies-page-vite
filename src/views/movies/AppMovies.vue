<template>
  <div class="font-bold">{{ movies }}</div>
</template>

<script setup lang="ts">
  import { useStore } from 'vuex'
  import { IMovie } from '../../store/movie/types'

  const store = useStore()
  const getMovies = (): any => {
    store.dispatch('getMovies')
  }
  getMovies()
  const movies: IMovie = store.getters.movies
</script>

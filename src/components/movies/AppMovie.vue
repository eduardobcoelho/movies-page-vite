<template>
  <div
    :id="`movie-${getMovieSectionId()}`"
    class="app-movie flex flex-col justify-center items-center"
  >
    <div class="app-movie__content w-full grid grid-cols-2">
      <div
        class="app-movie__poster flex flex-row justify-center items-center col-span-2 sm:col-span-1"
      >
        <img
          :src="`${poster}`"
          :alt="`${name} poster`"
          :title="`${name} poster`"
          width="350"
          class="transition-all cursor-pointer hover:rounded-lg"
        />
      </div>
      <div
        class="app-movie__description flex flex-col justify-center items-start"
      >
        <app-movie-description
          :name="name"
          :sinopse="sinopse"
          :year="year"
          :imdb="imdb"
          :director="director"
        ></app-movie-description>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IActor } from 'src/store/actor/types'
  import { IDirector } from 'src/store/director/types'
  import AppMovieDescription from './AppMovieDescription.vue'

  const { name } = defineProps<{
    name: string
    sinopse: string
    year: number
    imdb: number
    actors: IActor[]
    poster?: URL
    director: IDirector
  }>()
  const getMovieSectionId = (): string => name.replace(/[^a-zA-Z0-9]/g, '')
</script>

<style scoped>
  .app-movie {
    width: 100%;
    min-height: 100vh;
    background: transparent;
    box-shadow: 0 0 200px #131313 inset;
  }

  .app-movie__content {
    max-width: 1366px;
  }

  .app-movie .app-movie__poster {
    height: 100%;
  }
</style>

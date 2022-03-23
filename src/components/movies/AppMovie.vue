<template>
  <div class="app-movie grid grid-cols-2">
    <div
      class="app-movie__poster flex flex-row justify-center items-center col-span-2 sm:col-span-1"
    >
      <img
        :src="`${poster}`"
        :alt="`${name} poster`"
        :title="`${name} poster`"
        width="400"
      />
    </div>
    <div class="app-movie__description flex justify-start items-center">
      <span class="text-6xl text-white">{{ name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  // interfaces
  import { IActor } from 'src/store/actor/types'
  import { IDirector } from 'src/store/director/types'

  // setup
  defineProps<{
    name: string
    sinope: string
    year: number
    imdb: number
    actors: IActor[]
    poster?: URL
    director: IDirector
  }>()
</script>

<style scoped>
  .app-movie {
    width: 100%;
    height: 100vh;
    background: transparent;
    box-shadow: 0 0 200px #131313 inset;
  }

  .app-movie .app-movie__poster {
    height: 100%;
  }
</style>

<template>
  <div class="flex items-center">
    <span v-text="name" class="text-6xl font-bold text-white"></span>
    <span class="text-yellow font-semibold ml-3"> {{ imdb }} / 10.0 </span>
    <div
      class="bg-yellow rounded-xl border-2 border-black pt-1 pr-2 pb-1 pl-2 ml-3"
    >
      <span class="font-semibold">imdb</span>
    </div>
  </div>

  <div class="mt-2">
    <span v-text="year" class="text-md font-semibold text-white"></span>
  </div>

  <div class="text-white max-w-lg mt-4">
    <span v-text="sinopse"></span>
  </div>
</template>

<script setup lang="ts">
  import { IDirector } from 'src/store/director/types'
  defineProps<{
    name: string
    sinopse: string
    year: number
    imdb: number
    director: IDirector
  }>()
</script>

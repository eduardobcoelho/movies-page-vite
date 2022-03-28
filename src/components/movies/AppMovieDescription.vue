<template>
  <div class="flex items-center">
    <span v-text="name" class="text-6xl font-bold text-white"></span>
    <span class="text-yellow font-semibold ml-3"> {{ imdb }} / 10.0 </span>
    <a
      :href="`${imdbLink}`"
      target="_blank"
      class="bg-yellow rounded-xl border-2 border-black pt-1 pr-2 pb-1 pl-2 ml-3"
    >
      <span class="font-semibold">imdb</span>
    </a>
  </div>

  <div class="mt-2">
    <span v-text="year" class="text-md font-semibold text-white"></span>
  </div>

  <div class="text-white max-w-lg mt-4">
    <span class="text-md font-bold text-white">Sinopse</span>
    <div class="mt-1">
      <span v-text="sinopse"> </span>
    </div>
  </div>

  <div class="flex flex-col mt-4">
    <span class="text-md font-bold text-white"> Diretor </span>
    <div @click="toDirectorDetails" class="mt-1">
      <span
        v-text="director.name"
        class="text-red font-medium cursor-pointer hover:underline hover:font-bold"
      ></span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { IDirector } from 'src/store/director/types'
  import { useRouter } from 'vue-router'

  const router = useRouter()
  const props = defineProps<{
    name: string
    sinopse: string
    year: number
    imdb: number
    imdbLink: URL
    director: IDirector
  }>()
  const toDirectorDetails = (): void => {
    router.push(`/director/${props.director.name}`)
  }
</script>

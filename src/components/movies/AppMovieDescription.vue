<template>
  <div class="flex flex-col items-center md:flex-row">
    <span
      v-text="name"
      class="text-xl font-bold text-white mt-4 lg:mt-0 md:text-4xl lg:text-6xl"
    ></span>
    <div class="flex items-center mt-4 lg:mt-0">
      <span class="text-yellow font-semibold ml-3"> {{ imdb }} / 10.0 </span>
      <a
        :href="`${imdbLink}`"
        target="_blank"
        class="bg-yellow rounded-xl border-2 border-black pt-1 pr-2 pb-1 pl-2 ml-3"
      >
        <span class="font-semibold">imdb</span>
      </a>
    </div>
  </div>

  <div class="mt-4 lg:mt-2">
    <span v-text="year" class="text-md font-semibold text-white"></span>
  </div>

  <div class="text-white max-w-lg mt-4">
    <span class="text-md font-bold text-white">Sinopse</span>
    <div class="mt-1">
      <span v-text="sinopse"> </span>
    </div>
  </div>

  <div class="flex flex-col mt-4">
    <span class="text-md font-bold text-white hidden lg:inline"> Diretor </span>
    <div @click="toDirectorDetails" class="mt-1">
      <span class="text-white font-bold inline lg:hidden mr-3">Diretor:</span>
      <span
        v-text="director.name"
        class="text-red font-medium cursor-pointer hover:underline hover:font-bold"
      ></span>
    </div>
  </div>

  <div class="w-full flex justify-center mt-4">
    <button
      @click="$router.push(`/movie/actors/${name}`)"
      class="rounded-lg px-3 py-2"
      :class="`bg-red`"
    >
      <span class="text-white font-semibold">Atores</span>
    </button>
  </div>
</template>

<script setup lang="ts">
  import { IDirector } from '../../store/director/types'
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

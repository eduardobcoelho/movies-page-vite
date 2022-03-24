<template>
  <div class="movies-scroll">
    <div
      v-for="(movie, i) in movies"
      :key="`${i}-${getMovieSectionId(movie.name)}`"
      class="mt-3"
    >
      <a :href="`#movie-${getMovieSectionId(movie.name)}`">
        <div
          :class="[
            'movies-scroll__ball',
            route.hash.includes(getMovieSectionId(movie.name))
              ? 'bg-white'
              : 'border-2 border-white',
          ]"
        ></div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { IMovie } from '../../store/movie/types'
  import { reactive } from 'vue'

  const route = reactive(useRoute())

  withDefaults(
    defineProps<{
      movies: IMovie[]
    }>(),
    {
      movies: () => [],
    }
  )
  const getMovieSectionId = (id: string): string =>
    id.replace(/[^a-zA-Z0-9]/g, '')
</script>

<style scoped>
  .movies-scroll {
    position: fixed;
    top: 50%;
    right: 20px;
  }

  .movies-scroll__ball {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
</style>

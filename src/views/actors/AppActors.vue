<template>
  <div class="app-actors text-white">{{ actors }}</div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  import { IActor } from 'src/store/actor/types'

  const store = useStore()
  const route = useRoute()
  const movieName = ref(route.params.movie_name)
  const getActors = () => store.dispatch('getMovieActors', movieName.value)
  getActors()
  const actors: IActor[] = <any>computed(() => store.getters.currentActors)
</script>

<template>
  <div class="mh-100vh flex flex-col justify-center items-center">
    <span class="font-bold text-red text-3xl md:text-6xl">{{ movieName }}</span>
    <span class="font-bold text-white text-xl mt-2 md:text-3xl">Atores</span>
  </div>
  <app-actor
    v-for="(actor, i) in actors"
    :key="`${actor.name}-${i}`"
    :name="actor.name"
    :birthday="actor.birthday"
    :photo="actor.photo"
    :age="actor.age"
  >
  </app-actor>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  import { IActor } from 'src/store/actor/types'
  import AppActor from '../../components/actor/AppActor.vue'

  const store = useStore()
  const route = useRoute()
  const movieName = ref(route.params.movie_name)
  const getActors = () => store.dispatch('getMovieActors', movieName.value)
  getActors()
  const actors: IActor[] = <any>computed(() => store.getters.currentActors)
</script>

<style>
  .mh-100vh {
    min-height: 100vh;
  }
</style>

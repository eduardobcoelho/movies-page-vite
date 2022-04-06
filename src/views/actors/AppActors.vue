<template>
  <div class="mh-100vh flex flex-col justify-center items-center">
    <span class="font-bold text-red text-3xl md:text-6xl">{{ movieName }}</span>
    <span class="font-bold text-white text-xl mt-2 md:text-3xl">Atores</span>
    <span v-if="actors.length" class="mt-4">
      <button-redirect @click="downToFirst"></button-redirect>
    </span>
    <span v-else class="text-white text-md mt-2 md:text-lg">
      Nenhum ator para o filme <strong>{{ movieName }}</strong> foi encontrado!
    </span>
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
  <app-scroll :data="actors" entity="actor"></app-scroll>
  <div class="button-redirect-bottom-default-position">
    <button-redirect direction="top" @click="toTop"></button-redirect>
  </div>
</template>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'
  import { useStore } from 'vuex'
  import { IActor } from 'src/store/actor/types'
  import AppActor from '/src/components/actor/AppActor.vue'

  const store = useStore()
  const route = useRoute()

  const movieName = ref(route.params.movie_name)
  let actors: IActor[] = <any>computed(() => store.getters.currentActors)
  const getActors = () => store.dispatch('getMovieActors', movieName.value)
  const downToFirst = () => {
    const aTag = document.createElement('a')
    aTag.href = `#actor-${store.getters.currentActors[0].name
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]/g, '')}`
    aTag.click()
  }
  const toTop = () => {
    window.scrollTo({ top: 0 })
  }
  getActors()
</script>

<style scoped>
  .mh-100vh {
    min-height: 100vh;
  }
</style>

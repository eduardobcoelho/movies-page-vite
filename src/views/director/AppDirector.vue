<template>
  <div class="bg-background">
    <!--<base-structure> </base-structure>-->
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'
  import { IDirector } from 'src/store/director/types'
  const store = useStore()
  const getDirectorByName = (): void => {
    store.dispatch('getDirectorByName', useRoute().params.name)
  }
  getDirectorByName()
  const director: IDirector | null = <any>(
    computed(() => store.getters.currentDirector)
  )
  console.log('director', director)
</script>

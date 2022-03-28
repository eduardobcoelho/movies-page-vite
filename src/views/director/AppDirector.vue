<template>
  <div v-if="director" class="bg-background">
    <base-structure :name="director.name">
      <template #image>
        <img
          :src="`${director.photo}`"
          :alt="`${director.name} image`"
          :title="`${director.name} image`"
          width="350"
          class="transition-all cursor-pointer hover:rounded-lg"
        />
      </template>
    </base-structure>
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
</script>

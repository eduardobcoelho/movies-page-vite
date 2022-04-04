<template>
  <div v-if="director">
    <div class="button-back-default-position">
      <button-back></button-back>
    </div>

    <base-structure :name="director.name">
      <template #image>
        <img
          :src="`${director.photo}`"
          :alt="`${director.name} image`"
          :title="`${director.name} image`"
          class="default-image-size transition-all cursor-pointer hover:rounded-lg"
        />
      </template>
      <template #description>
        <app-director-description
          :name="director.name"
          :age="director.age"
          :birthday="director.birthday"
        ></app-director-description>
      </template>
    </base-structure>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'
  import { IDirector } from 'src/store/director/types'
  import AppDirectorDescription from '../../components/director/AppDirectorDescription.vue'

  const store = useStore()
  const getDirectorByName = (): void => {
    store.dispatch('getDirectorByName', useRoute().params.name)
  }
  getDirectorByName()
  const director: IDirector | null = <any>(
    computed(() => store.getters.currentDirector)
  )
</script>

<template>
  <div v-if="director">
    <div class="button-back-default-position">
      <button-back></button-back>
    </div>

    <base-structure :name="director.name" entity="director">
      <template #image>
        <img
          :src="`${director.photo}`"
          :alt="`${director.name} image`"
          :title="`${director.name} image`"
          class="default-image-size transition-all cursor-pointer hover:rounded-lg"
        />
      </template>
      <template #description>
        <general-description
          :name="director.name"
          :age="director.age"
          :birthday="director.birthday"
        ></general-description>
      </template>
    </base-structure>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'
  import { IDirector } from '../../store/director/types'

  const store = useStore()
  const getDirectorByName = (): void => {
    store.dispatch('getDirectorByName', useRoute().params.name)
  }
  getDirectorByName()
  const director: IDirector | null = <any>(
    computed(() => store.getters.currentDirector)
  )
</script>

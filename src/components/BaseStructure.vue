<template>
  <div
    :id="getSectionId()"
    class="app-structure flex flex-col justify-center items-center p-4"
  >
    <div class="app-structure__content w-full grid grid-cols-2">
      <div
        class="app-structure__image flex flex-row justify-center items-center col-span-2 lg:col-span-1"
      >
        <slot name="image"></slot>
      </div>
      <div
        class="app-structure__description col-span-2 flex flex-col items-center lg:col-span-1 lg:flex lg:flex-col lg:justify-center lg:items-start"
      >
        <slot name="description"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue'

  const props = defineProps<{ name: string; entity: string }>()
  const { name, entity } = toRefs(props)

  const getSectionId = (): string =>
    `${entity}-${name.value.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')}`
</script>

<style scoped>
  .app-structure {
    width: 100%;
    min-height: 100vh;
  }
  .app-structure__content {
    max-width: 1366px;
  }
  .app-structure .app-structure__image {
    height: 100%;
  }
</style>

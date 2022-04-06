<template>
  <div class="app-scroll">
    <div
      v-for="(item, i) in data"
      :key="`${i}-${getSectionId(item.name)}`"
      class="mt-3"
    >
      <a :href="`#${entity}-${getSectionId(item.name)}`">
        <div
          :class="[
            'app-scroll__ball',
            route.hash.includes(getSectionId(item.name))
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
  import { reactive } from 'vue'

  const route = reactive(useRoute())

  withDefaults(
    defineProps<{
      data: any[]
      entity: string
    }>(),
    {
      data: () => [],
    }
  )
  const getSectionId = (name: string): string =>
    name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')
</script>

<style scoped>
  .app-scroll {
    position: fixed;
    top: 50%;
    right: 20px;
  }

  .app-scroll__ball {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
</style>

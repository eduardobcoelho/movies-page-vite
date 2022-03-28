<template>
  <button @click="router.back()" :class="`rounded-lg bg-${color} px-3 py-2`">
    <span class="text-white font-semibold">{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()

  withDefaults(
    defineProps<{
      color?: string
      text?: string
    }>(),
    {
      color: 'red',
      text: 'Voltar',
    }
  )
</script>

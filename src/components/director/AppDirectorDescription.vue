<template>
  <div class="flex items-center">
    <span v-text="name" class="text-5xl font-bold text-white"></span>
    <span class="text-yellow font-semibold ml-3"> 2 </span>
    <span>
      <img
        src="../../assets/icon-oscar.png"
        title="Oscar icon"
        alt="Oscar icon"
        class="oscar-icon"
      />
    </span>
  </div>

  <div class="mt-2">
    <span class="text-md font-semibold text-white">{{ age }} anos</span>
  </div>

  <div class="text-white max-w-lg mt-4">
    <span class="text-md font-bold text-white">Data de nascimento</span>
    <div class="mt-1">
      <span v-text="birthday"> </span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue'

  const props = defineProps<{
    name: string
    age: number
    birthday: string
  }>()
  const { name, age } = toRefs(props)
</script>

<style>
  .oscar-icon {
    width: 30px;
  }
</style>

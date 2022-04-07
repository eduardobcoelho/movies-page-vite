<template>
  <div class="flex items-center">
    <span
      v-text="name"
      class="text-xl font-bold text-white mt-4 lg:mt-0 md:text-4xl lg:text-5xl"
    ></span>
    <div class="ml-3 mt-4 lg:mt-0 flex items-center">
      <span class="text-yellow font-semibold"> 2 </span>
      <span>
        <img
          src="/src/assets/icon-oscar.png"
          title="Oscar icon"
          alt="Oscar icon"
          class="oscar-icon"
        />
      </span>
    </div>
  </div>

  <div class="mt-2">
    <span class="text-md font-semibold text-white">{{ age }} anos</span>
  </div>

  <div class="text-white max-w-lg mt-2 lg:mt-4">
    <span class="text-md font-bold text-white hidden lg:inline"
      >Data de nascimento</span
    >
    <div class="lg:mt-1">
      <span class="font-bold inline lg:hidden">Data de nascimento: </span>
      <span>{{ birthday }}</span>
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

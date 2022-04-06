<template>
  <div class="button-back-default-position">
    <button-back></button-back>
  </div>

  <base-structure :name="name" entity="actor">
    <template #image>
      <img
        :src="`${photo}`"
        :alt="`${name} image`"
        :title="`${name} image`"
        class="default-image-size transition-all cursor-pointer hover:rounded-lg"
      />
    </template>
    <template #description>
      <general-description
        :name="name"
        :age="age"
        :birthday="birthday"
      ></general-description>
    </template>
  </base-structure>
</template>

<script setup lang="ts">
  import { toRefs } from 'vue'

  const props = defineProps<{
    name: string
    age: number
    birthday: string
    photo: URL
  }>()

  const { name, age, birthday, photo } = toRefs(props)
</script>

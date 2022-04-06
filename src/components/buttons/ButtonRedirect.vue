<template>
  <div
    @click="$emit('click')"
    class="button-redirect bg-red rounded-full cursor-pointer p-2"
  >
    <img
      src="/src/assets/arrow_down.svg"
      :class="direction === 'top' ? 'button-redirect__top' : ''"
    />
  </div>
</template>

<script setup lang="ts">
  withDefaults(
    defineProps<{
      direction?: string
    }>(),
    {
      direction: 'bottom',
    }
  )
</script>

<style>
  .button-redirect {
    width: 40px;
    height: 40px;
    box-shadow: 0px 0px 12px rgb(255, 1, 1);
    transition: all 0.2s ease-in;
  }

  .button-redirect:hover {
    box-shadow: 0px 0px 20px rgb(255, 1, 1);
  }

  .button-redirect__top {
    transform: rotate(180deg);
  }
</style>

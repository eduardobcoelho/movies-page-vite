<template>
  <div class="app-actors text-white">{{ movieName }}</div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'

  const route = useRoute()
  const movieName = ref(route.params.movie_name)
</script>

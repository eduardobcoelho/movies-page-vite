<template>
  <div id="app" class="bg-background">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  const appContent = document.getElementById('app')
  const MouseWheelHandler = (e: any) => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }
  if (appContent) {
    appContent.addEventListener('mousewheel', MouseWheelHandler, false)
    appContent.addEventListener('DOMMouseScroll', MouseWheelHandler, false)
  }
</script>

<style>
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  #app {
    width: 100%;
    min-height: 100vh;
  }
</style>

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
    position: relative;
    box-shadow: 0 0 200px #131313 inset;
  }
</style>

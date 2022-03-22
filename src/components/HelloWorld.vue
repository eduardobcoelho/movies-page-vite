<template>
  <h1>teste</h1>
</template>

<script>
  import store from '../store/index'

  export default {
    name: 'HelloWorld',
    setup() {
      console.log('store', store)
    },
  }
</script>

<style scoped>
  a {
    color: #42b983;
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }

  code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
  }
</style>

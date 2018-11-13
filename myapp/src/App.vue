<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  /*留出手机自带状态栏的空*/
  #app {
    height: 100%;
    padding-top: 0.4rem;
  }
</style>

<template>
  <div class="main">
    <router-view></router-view>
    <footer-com></footer-com>
  </div>
</template>

<script>
  /*引入底部*/
  import Footer from './main/common/footer'

  export default {
    components: {
      'footer-com': Footer
    }
  }
</script>

<style scoped>
  .page {
    margin-bottom: 49px;
    overflow-y: auto !important;
  }
</style>

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
  .main{
    height: 100%;
  }
  .page {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: .98rem;
  }
</style>

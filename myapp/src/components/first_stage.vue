<template>
  <div class="first_stage">
    <h2>第一级页面</h2>
    <footer-com></footer-com>
    <router-view></router-view>
  </div>
</template>

<script>
  import Footer from './first_stage/common/footer'

  export default {
    components:{
      'footer-com':Footer
    }
  }
</script>

<style scoped>

</style>

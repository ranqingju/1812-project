<template>
  <div class="first_stage">
    <router-view></router-view>
    <footer-com></footer-com>
  </div>
</template>

<script>
  import Footer from './main/common/footer'

  export default {
    components:{
      'footer-com':Footer
    }
  }
</script>

<style scoped>

</style>

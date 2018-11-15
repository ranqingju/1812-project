<template>
  <div class="page login">
    <header-com></header-com>
    <footer-com></footer-com>
  </div>
</template>

<script>
  import Header from './login/header'
  import Footer from './login/footer'

  export default {
    name: "login",
    components: {
      'header-com': Header,
      'footer-com': Footer
    }
  }
</script>

<style scoped>
  .login {
    width: 100%;
    height: 100%;
    background: rgba(243, 242, 240, 1);
  }
</style>

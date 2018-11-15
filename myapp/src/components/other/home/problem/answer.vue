<template>
  <div class="answer">
    <header-com></header-com>
    <content-com></content-com>
  </div>
</template>

<script>
  import Header from './answer/header'
  import Content from './answer/content'

  export default {
    name: "answer",
    components: {
      'header-com': Header,
      'content-com': Content
    }
  }
</script>

<style scoped>
  .answer {
    height: 100%;
  }
</style>

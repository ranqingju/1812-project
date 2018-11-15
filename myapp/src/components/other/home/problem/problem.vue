<template>
  <div class="problem">
    <header-com></header-com>
    <content-com></content-com>
  </div>
</template>

<script>
  import Header from './problem/header'
  import Content from './problem/content'

  export default {
    name: "problem",
    components: {
      'header-com': Header,
      'content-com': Content
    }
  }
</script>

<style scoped>
.problem{
  height: 100%;
  overflow: auto;
  background: rgba(243, 242, 240, 1);
}
</style>

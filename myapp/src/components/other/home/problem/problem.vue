<template>
  <div class="problem">
    <header-com></header-com>
    <content-com></content-com>
  </div>
</template>

<script>
  import Header from './problem/header'
  import Content from './problem/content'
  import Vuex from 'vuex'

  export default {
    name: "problem",
    components: {
      'header-com': Header,
      'content-com': Content
    },
    methods:{
      ...Vuex.mapActions({
        getProblem:'Problem/getProblem'
      })
    },
    created(){
      this.getProblem();
    }
  }
</script>

<style scoped>
  .problem {
    height: 100%;
    background: rgba(243, 242, 240, 1);
    display: flex;
    flex-direction: column;
  }
</style>

<template>
  <div class="answer">
    <header-com></header-com>
    <content-com></content-com>
  </div>
</template>

<script>
  import Header from './answer/header'
  import Content from './answer/content'
  import Vuex from 'vuex'
  export default {
    name: "answer",
    components: {
      'header-com': Header,
      'content-com': Content
    },
    methods:{
      ...Vuex.mapActions({
        getProblem:'Problem/getProblem',
        getAnswer:'Problem/getAnswer'
      })
    },
    created(){
      if(this.$route.query.id!==undefined){
        this.getAnswer(this.$route.query.id);
      }else{
        this.getProblem();
      }
    }
  }
</script>

<style scoped>
  .answer {
    height: 100%;
    background: rgba(255,255,255,1);
  }
</style>

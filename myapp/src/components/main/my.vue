<template>
  <div class="page my">
    <component :is="headCom.log">
      <nologin-com></nologin-com>
      <headertop-com></headertop-com>
    </component>
    <headerfoot-com></headerfoot-com>
    <list-com></list-com>
  </div>
</template>

<script>
  import headernologin from './my/headerNoLogin';
  import headertop from "./my/headerTop";
  import headerfoot from "./my/headerFoot";
  import list from "./my/list";

  export default {
    name: "my",
    data(){
      return {
        headCom:{
          log:'headertop-com',
          nolog:'nologin-com'
        }
      }
    },
    components: {
      'nologin-com': headernologin,
      "headertop-com": headertop,
      "headerfoot-com": headerfoot,
      "list-com": list
    }
  }
</script>

<style scoped>
  .my {
    background: #feda44 url("/static/my/userHr.png") 0 0.5rem no-repeat;
  }
</style>

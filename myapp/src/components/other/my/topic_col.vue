<template>
  <!--话题收藏-->
  <div class="topic_col">
    <header-com></header-com>
    <div class="topic_bot">
      <span class="iconfont">&#xe841;</span>
      <span>空空如也!</span>
    </div>
  </div>
</template>

<script>
  import Header from './common/header'

  export default {
    name: "topic_col",
    components: {
      'header-com': Header
    }
  }
</script>

<style scoped>
  .topic_col {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F3F2F0;
  }

  .topic_col > .topic_bot {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .topic_col > .topic_bot > span {
    font-size: 140px;
    color: #adadad;
  }

  .topic_col > .topic_bot > span:nth-of-type(2) {
    font-size: 40px;
    font-weight: bold;
  }
</style>

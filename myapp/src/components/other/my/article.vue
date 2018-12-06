<template>
  <!--我的文章-->
  <div class="article">
    <header-com></header-com>
    <div class="article_bot">
      <span class="iconfont">&#xe841;</span>
      <span>您还没有添加，快去添加！</span>
    </div>
  </div>
</template>

<script>
  import Header from './common/header'

  export default {
    components: {
      'header-com': Header
    }
  }
</script>

<style scoped>
  .article {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F3F2F0;
  }

  .article > .article_bot {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .article > .article_bot > span {
    font-size: 140px;
    color: #adadad;
  }

  .article > .article_bot > span:nth-of-type(2) {
    font-size: 30px;
    font-weight: bold;
  }
</style>

<template>
  <!--我的试用-->
  <div class="trial">
    <header-com></header-com>
    <div class="trial_bot">
      <span class="iconfont">&#xe841;</span>
      <span>您还没有添加试用，快去添加！</span>
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
  .trial {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #F3F2F0;
  }

  .trial > .trial_bot {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .trial > .trial_bot > span {
    font-size: 140px;
    color: #adadad;
  }

  .trial > .trial_bot > span:nth-of-type(2) {
    font-size: 30px;
    font-weight: bold;
  }
</style>

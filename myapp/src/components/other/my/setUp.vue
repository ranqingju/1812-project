<template>
  <!--设置-->
  <div class="setUp">
    <header-com></header-com>
    <div class="setUp_bot">
      <div class="form">
        <p>
          <span>QQ账号</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <p>
          <span>新浪账号</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <p>
          <span>更改头像</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <p>
          <span>免费订阅</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <p>
          <span>清理杂志</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <p>
          <span>下载模式</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <p>
          <span>意见反馈</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <p>
          <span>关于我们</span>
          <span class="iconfont">&#xe665;</span>
        </p>
        <button>退出登录</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './common/header'

  export default {
    name: "setUp",
    components: {
      'header-com': Header
    }
  }
</script>

<style scoped>
  .setUp {
    height: 100%;
    overflow: hidden;
    background: #F3F2F0;
  }

  input, button {
    /*取消表单控件样式*/
    outline: none;
    -webkit-appearance: none;
  }

  .setUp > .setUp_bot {
    height: 100%;
  }

  .setUp > .setUp_bot > .form {
    display: flex;
    flex-direction: column;
  }

  .setUp > .setUp_bot > .form > p {
    height: 1.08rem;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.24rem;
  }

  .setUp > .setUp_bot > .form > p > span:nth-of-type(1) {
    font-size: 30px;
    color: #34343D;
  }

  .setUp > .setUp_bot > .form > p > span:nth-of-type(2) {
    font-size: 32px;
    color: #6D6D6C;
  }

  .setUp > .setUp_bot > .form > button {
    width: 2.76rem;
    height: 0.8rem;
    border: 0;
    font-size: 30px;
    color: #34343D;
    align-self: center;
    margin-top: 0.2rem;
    background: transparent;
  }
</style>

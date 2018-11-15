<template>
  <!--我的小区-->
  <div class="house_area">
    <header-com></header-com>
    <div class="area_bottom">
      <div class="form">
        <p>
          <span class="iconfont">&#xe62c;</span>
          <input type="text" placeholder="广州">
        </p>
        <p>
          <input type="text" placeholder="输入小区名字">
        </p>
        <button>保存</button>
        <button>暂未购房</button>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './common/header'

  export default {
    name: "house_area",
    components: {
      'header-com': Header
    }
  }
</script>

<style scoped>
  .house_area {
    height: 100%;
    overflow: hidden;
    background: #F3F2F0;
  }

  input, button {
    /*取消表单控件样式*/
    outline: none;
    -webkit-appearance: none;
  }

  .house_area > .area_bottom {
    height: 100%;
  }

  .house_area > .area_bottom > .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 1rem;
  }

  .house_area > .area_bottom > .form > p {
    width: 6.6rem;
    height: 0.7rem;
    border-bottom: 2px solid #B5B5B5;
    display: flex;
    align-items: center;
  }

  .house_area > .area_bottom > .form > p:nth-of-type(2) {
    margin-top: 1rem;
  }

  .house_area > .area_bottom > .form > p > span {
    font-size: 40px;
    padding-right: 0.23rem;
  }

  .house_area > .area_bottom > .form > p > input {
    flex: 1;
    height: 0.3rem;
    font-size: 26px;
    border: 0;
    background: transparent;
  }

  .house_area > .area_bottom > .form > button {
    width: 2.76rem;
    height: 0.8rem;
    background: #FEDA44;
    border-radius: 40px;
    border: 0;
    font-size: 32px;
    color: #999;
    margin-top: 1rem;
  }

  .house_area > .area_bottom > .form > button:nth-of-type(2) {
    font-size: 24px;
    background: transparent;
    margin-top: 0.27rem;
  }
</style>

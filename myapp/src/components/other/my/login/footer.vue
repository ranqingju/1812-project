<template>
  <div class="footer">
    <div class="third-title">
      <i></i>
      <span>第三方登录</span>
      <i></i>
    </div>
    <div class="third-login">
      <img src="static/login/dl_icon_wb.png"/>
      <img src="static/login/di_icon_qq.png"/>
      <img src="static/login/dl_icon_wx.png"/>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .footer {
    padding-top: 1.49rem;
  }

  .footer > .third-title {
    display: flex;
    height: 0.3rem;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }

  .footer > .third-title > span {
    padding: 0 .11rem;
  }

  .footer > .third-title > i {
    display: block;
    width: 2rem;
    height: 0.02rem;
    background: #BFBFBF;
  }

  .footer > .third-login {
    display: flex;
    justify-content: space-between;
    width: 3.25rem;
    margin: 0.6rem auto 0;
  }

  .footer > .third-login > img:nth-of-type(1) {
    width: 0.43rem;
    height: 0.38rem;
  }

  .footer > .third-login > img:nth-of-type(2) {
    width: 0.41rem;
    height: 0.47rem;
  }

  .footer > .third-login > img:nth-of-type(3) {
    width: 0.46rem;
    height: 0.37rem;
  }
</style>

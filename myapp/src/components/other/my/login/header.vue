<template>
  <div class="header">
    <div class="user-img">
      <img src="static/login/img_login.jpg" />
    </div>
    <div class="form">
      <p>
        <span class="iconfont">&#xe649;</span>
        <input type="text" v-model="user_login" placeholder="用户名">
      </p>
      <p>
        <span class="iconfont">&#xe619;</span>
        <input :type="pwd_txt" v-model="pwd_login" placeholder="密码">
        <span class="iconfont" v-html="pwd_show_hide" @click="handleChangePwd()"></span>
      </p>
      <button @click="handleLogin()">登录</button>
      <button @click="handleGoTo()">注册</button>
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  export default {
    data() {
      return {
        pwd_show_hide: '&#xe609;',
        pwd_txt: 'password',
        user_login:"",
        pwd_login:''
      }
    },
    methods: {
      /*密码显示与隐藏*/
      handleChangePwd() {
        if (this.pwd_show_hide === '&#xe609;') {
          this.pwd_show_hide = '&#xe602;';
          this.pwd_txt = 'text'
        } else {
          this.pwd_show_hide = '&#xe609;';
          this.pwd_txt = 'password'
        }
      },
      /*跳转到注册页面*/
      handleGoTo() {
        this.$router.push('/register');
      },
      ...Vuex.mapActions({
        handleLogin:'login/handleLogin'
      })
    }
  }
</script>

<style scoped>
  .header {
    padding-top: 1.76rem;
  }

  input, button {
    /*取消表单控件样式*/
    outline: none;
    -webkit-appearance: none;
  }

  .header > .user-img {
    width: 1.8rem;
    height: 1.8rem;
    background: #fff;
    border-radius: 50%;
    margin: 0 auto;
    overflow: hidden;
  }

  .header > .user-img > img{
    width: 100%;
    height: 100%;
  }

  .header > .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.52rem;
  }

  .header > .form > p {
    width: 5.86rem;
    height: 0.74rem;
    border-bottom: 2px solid #B6B3B3;
    display: flex;
    align-items: center;
    margin-bottom: 0.16rem;
  }

  .header > .form > p > span {
    font-size: 32px;
  }

  .header > .form > p > input {
    flex: 1;
    height: 80%;
    font-size: 36px;
    border: 0;
    background: transparent;
    padding-left: 0.21rem;
    color: #000;
  }

  .header > .form > button {
    width: 4.36rem;
    height: .6rem;
    font-size: 36px;
  }

  .header > .form > button:nth-of-type(1) {
    border: 0;
    border-radius: 10px;
    background: #D5D4D4;
    margin-top: 0.56rem;
  }

  .header > .form > button:nth-of-type(2) {
    border: 0;
    background: transparent;
    margin-top: 0.26rem;
  }
</style>

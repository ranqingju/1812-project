<template>
  <!--注册-->
  <div class="page register">
    <div class="return">
      <span class="iconfont" @click="handleGoTo()">&#xe631;</span>
    </div>
    <div class="user-img">
      <img src="static/login/img_login.jpg"/>
    </div>
    <div class="form">
      <div class="ipt">
        <label for="phone">手机号</label>
        <p>
          <input type="text" id="phone" placeholder="请输入您的手机号码" v-model="phone_reg"
                 @input="changeInput({val:phone_reg,index:0})">
          <a href="javascript:;" @click="handleGetCode()">获取验证码</a>
        </p>
      </div>
      <div class="ipt">
        <label for="verification_Code">验证码</label>
        <p>
          <input type="text" id="verification_Code" placeholder="请输入您的验证码" v-model="vcCode"
                 @input="changeInput({val:vcCode,index:1})">
        </p>
      </div>
      <div class="ipt">
        <label for="set_pwd">设置密码</label>
        <p>
          <input type="text" id="set_pwd" placeholder="请输入6~18位数字加字母组合" v-model="pwd_reg"
                 @input="changeInput({val:pwd_reg,index:2})">
        </p>
      </div>
      <button @click="handleRegister()">注册</button>
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'

  export default {
    name: "register",
    data() {
      return {
        /*手机号*/
        phone_reg: '',
        /*验证码*/
        vcCode: '',
        /*设置密码*/
        pwd_reg: ''
      }
    },
    methods: {
      /*返回上一页*/
      handleGoTo() {
        this.$router.back();
      },
      ...Vuex.mapActions({
        /*更新表单*/
        changeInput: 'Register/changeInput',
        /*获取验证码*/
        handleGetCode: 'Register/handleGetCode',
        /*注册*/
        handleRegister: 'Register/handleRegister'
      })
    }
  }
</script>

<style scoped>
  .register {
    width: 100%;
    height: 100%;
    background: rgba(243, 242, 240, 1);
    font-family: "微软雅黑", "宋体", "arial", "Hiragino Sans GB", "Microsoft Yahei", "Tahoma", "Helvetica", "STHeiti";
  }

  input, button {
    /*取消表单控件样式*/
    outline: none;
    -webkit-appearance: none;
  }

  .register > .return {
    padding-top: 0.29rem;
    padding-left: 0.26rem;
  }

  /*返回按钮*/
  .register > .return > span {
    font-size: 30px;
  }

  /*头像框*/
  .register > .user-img {
    width: 1.8rem;
    height: 1.8rem;
    background-size: cover;
    border-radius: 50%;
    margin: 0.26rem auto 0;
    overflow: hidden;
  }

  /*头像*/
  .register > .user-img > img {
    width: 100%;
    height: 100%;
  }

  .register > .form {
    margin-top: 0.58rem;
  }

  .register > .form > .ipt {
    width: 6.98rem;
    height: 1.06rem;
    border-bottom: 1px solid #CDD2D3;
    margin: 0 auto 0.59rem;
  }

  .register > .form > .ipt:nth-child(3) {
    margin-bottom: 0;
  }

  .register > .form > .ipt > label {
    font-size: 34px;
    color: #0D0F0F;
    line-height: 34px;
  }

  .register > .form > .ipt > p {
    width: 100%;
    height: 0.55rem;
    display: flex;
    align-items: center;
  }

  .register > .form > .ipt > p > input {
    flex: 1;
    height: 0.55rem;
    font-size: 30px;
    color: #000;
    border: 0;
    background: transparent;
  }

  /*获取验证码按钮*/
  .register > .form > .ipt > p:nth-of-type(1) > a {
    width: 1.68rem;
    height: 0.5rem;
    border: 1px solid #D2D2D2;
    font-size: 30px;
    color: #0D0F0F;
    text-align: center;
    line-height: 0.5rem;
  }

  /*注册按钮*/
  .register > .form > button {
    width: 6.98rem;
    height: .9rem;
    display: block;
    background: #DADCDC;
    border: 0;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    margin: 1.1rem auto 0;
    font-size: 44px;
    color: #141515;
  }
</style>

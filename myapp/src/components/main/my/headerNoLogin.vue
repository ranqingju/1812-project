<template>
    <div class="no_login">
      <div class="headImg" @click="handleGoto()">
        <img src="" alt="">
      </div>
      <h2 @click="handleGoto()">去登录</h2>
    </div>
</template>

<script>
    export default {
      methods:{
        handleGoto(){
          this.$router.push('/my/login');
        }
      }
    }
</script>

<style scoped>
  .no_login{
    height: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.67rem;
  }

  .no_login > .headImg{
    width: 1.3rem;
    height: 1.3rem;
    background: #e2e2e2;
    border-radius: 50%;
    border: 10px solid #FFFFFF;
  }

  .no_login > .headImg > img{
    width: 100%;
  }

  .no_login > h2{
    margin-top: 0.39rem;
    font-size: 36px;
    color: #34343D;
  }
</style>

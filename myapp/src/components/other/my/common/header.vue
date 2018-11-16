<template>
  <div id="header">
    <span class="iconfont" @click="handleGoTo()">&#xe631;</span>
    <span>{{headName}}</span>
    <span></span>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        headName:''
      }
    },
    methods:{
      handleGoTo(){
        this.$router.back();
      }
    },
    created(){
      this.headName = this.$route.query.headName;
    }
  }
</script>

<style scoped>
  #header {
    height: .88rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FEDA44;
    padding: 0 0.24rem;
  }

  #header > span:nth-of-type(1) {
    font-size: 40px;
    color: #6D6D6C;
  }

  #header > span:nth-of-type(2) {
    font-size: 36px;
    color: #34343D;
    font-weight:bold;
  }
</style>

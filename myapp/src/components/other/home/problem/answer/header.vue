<template>
  <div class="answer">
    <span class="iconfont" @click="handleGoTo()">&#xe631;</span>
    <img :src="answerObj.bigImg" alt="">
  </div>
</template>

<script>
  import Vuex from 'vuex'
  export default {
    computed:{
      ...Vuex.mapState({
        answerObj:state=>state.Problem.answerObj
      })
    },
    methods:{
      handleGoTo(){
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .answer {
    height: 4rem;
    position: relative;
    font-family: "微软雅黑", "宋体", "arial", "Hiragino Sans GB", "Microsoft Yahei", "Tahoma", "Helvetica", "STHeiti";
  }

  /*返回按钮icon*/
  .answer > span {
    font-size: 34px;
    /*color: #a1a1a1;*/
    color: #000;
    position: absolute;
    left: 0.24rem;
    top: 0.37rem;
    background: rgba(255,255,255,0.9);
    border-radius: 17px;
  }

  .answer>img{
    width: 100%;
    height: 100%;
  }
</style>

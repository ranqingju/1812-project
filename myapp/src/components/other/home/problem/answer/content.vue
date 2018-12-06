<template>
  <div class="content">
    <h2>{{answerObj.title}}</h2>
    <p>
      <span class="iconfont">&#xe752;</span>
      <span>日期：{{answerObj.time}}</span>
    </p>
    <p v-html="answerObj.answer">

    </p>
  </div>
</template>

<script>
  import Vuex from 'vuex'
  export default {
    computed:{
      ...Vuex.mapState({
        answerObj:state=>state.Problem.answerObj
      })
    }
  }
</script>

<style scoped>
  .content {
    padding: 0.4rem 0.24rem 0;
    font-family: "微软雅黑", "宋体", "arial", "Hiragino Sans GB", "Microsoft Yahei", "Tahoma", "Helvetica", "STHeiti";
  }

  /*标题*/
  .content > h2 {
    font-size: 36px;
    color: #161717;
  }

  /*日期*/
  .content > p:nth-of-type(1) {
    display: flex;
    margin-top: 0.41rem;
  }

  /*日期icon*/
  .content > p:nth-of-type(1) > span {
    font-size: 20px;
    color: #989A9A;
  }

  /*内容*/
  .content > p:nth-of-type(2) {
    margin-top: 0.17rem;
    font-size: 26px;
    line-height: 0.42rem;
  }
</style>

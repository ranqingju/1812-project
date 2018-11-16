<template>
  <div class="answer">
    <span class="iconfont" @click="handleGoTo()">&#xe631;</span>
  </div>
</template>

<script>
  export default {
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
    background: url("/static/home/zj01.jpg");
    background-size: cover;
    padding: 0.37rem 0 0 0.24rem;
    position: relative;
    font-family: "微软雅黑", "宋体", "arial", "Hiragino Sans GB", "Microsoft Yahei", "Tahoma", "Helvetica", "STHeiti";
  }

  /*返回按钮icon*/
  .answer > span {
    font-size: 34px;
    color: #a1a1a1;
  }
</style>

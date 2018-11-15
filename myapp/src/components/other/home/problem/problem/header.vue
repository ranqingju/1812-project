<template>
  <div class="header">
    <span class="iconfont">&#xe631;</span>
    <div class="title">
      <h2>这些设计方案 总有一款满足你</h2>
      <p>无论你对家装问题有多挑剔在，这些设计方案总有一款满足你。关键字：设计 风格 配色</p>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style scoped>
  .header {
    height: 4.6rem;
    background: url("/static/home/zj01.jpg");
    background-size: cover;
    padding: 0.37rem 0 0 0.24rem;
    position: relative;
    font-family: "微软雅黑", "宋体", "arial", "Hiragino Sans GB", "Microsoft Yahei", "Tahoma", "Helvetica", "STHeiti";
  }

  .header > span {
    font-size: 34px;
    color: #000;
  }

  .header > .title {
    width: 7.02rem;
    height: 2rem;
    background: #fff;
    box-shadow: 0px 2px 4px 4px rgba(0, 0, 0, 0.11);
    position: absolute;
    bottom: -1.52rem;
    padding: 0.1rem 0 0 0.26rem;
  }

  .header > .title > h2 {
    font-size: 36px;
    color: #242526;
    line-height: 0.76rem;
  }

  .header > .title > p {
    width: 5.68rem;
    font-size: 28px;
    line-height: 0.42rem;
  }
</style>

<template>
  <div class="content">
    <h2>可不可以不吊顶？</h2>
    <p>
      <span class="iconfont">&#xe752;</span>
      <span>日期：2018-08-06</span>
    </p>
    <p>
      最近很多朋友都跑来问大叔同样的问题，那就是：我家能不能不装吊顶？<br/>
      确实，随着现在人们审美的变化，这个问题在最近还是比较存在争议的。其实，装不装修取决于你们房子的特色和你自己的需求。<br/>
      首先，厨房和卫生间是必须装吊顶的。<br/>
      厨房：因为抽烟很大，如果没有吊顶，时间一长天花板会被有油烟熏成黄色，再久一点还会变黑相信没人愿意住在看起来脏不拉几的地方吧？而且，厨房要安装抽烟机、灯具等、还有一些水电线要走在顶上，做了吊顶就能挡住这些裸露的电线。
    </p>
  </div>
</template>

<script>
  export default {}
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

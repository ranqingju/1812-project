<template>
  <!--点赞-->
  <div class="thumbs">
    <header-com></header-com>
    <div class="thumbs_bottom">

      <div class="list">
        <div class="list_l">
          <span>
            <img src="static/login/img_login.jpg"/>
          </span>
          <span>
            <i>一个人攒了你的文章</i>
            <i>
              <em>今天</em>
              <em>16:23</em>
            </i>
          </span>
        </div>
        <div class="list_r">
          <img src=""/>
        </div>
      </div>

      <div class="list">
        <div class="list_l">
          <span>
            <img src="static/login/img_login.jpg"/>
          </span>
          <span>
            <i>一个人攒了你的文章</i>
            <i>
              <em>今天</em>
              <em>16:23</em>
            </i>
          </span>
        </div>
        <div class="list_r">
          <img src=""/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import Header from './common/header'

  export default {
    name: "thumbs",
    components: {
      'header-com': Header
    }
  }
</script>

<style scoped>
  .thumbs {
    height: 100%;
    background: #F3F2F0;
  }

  .thumbs > .thumbs_bottom {
    display: flex;
    flex-direction: column;
  }

  .thumbs > .thumbs_bottom > .list {
    height: 1.7rem;
    background: #fff;
    padding: 0 0.24rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.2rem;
  }

  .thumbs > .thumbs_bottom > .list > .list_l {
    display: flex;
    align-items: center;
  }

  .thumbs > .thumbs_bottom > .list > .list_l > span:nth-of-type(1) {
    display: block;
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    overflow: hidden;
  }

  .thumbs > .thumbs_bottom > .list > .list_l > span:nth-of-type(1) > img {
    width: 100%;
  }

  .thumbs > .thumbs_bottom > .list > .list_l > span:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    margin-left: 0.2rem;
  }

  .thumbs > .thumbs_bottom > .list > .list_l > span:nth-of-type(2) > i {
    font-size: 26px;
    color: #272727;
    line-height: 0.5rem;
  }

  .thumbs > .thumbs_bottom > .list > .list_l > span:nth-of-type(2) > i:nth-of-type(2) {
    color: #666666;
  }

  .thumbs > .thumbs_bottom > .list > .list_r{
    width: 2rem;
    height: 1.3rem;
    overflow: hidden;
    background: red;
  }

  .thumbs > .thumbs_bottom > .list > .list_r >img{
    width: 100%;
  }
</style>

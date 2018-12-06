<template>
  <div class="content">

    <div class="proList" v-for="(item,index) in problemList" @click="goToAnswer(item.id)">
      <img :src="item.bigImg"/>
      <div class="list_r">
        <h3>{{item.title}}</h3>
        <p>{{item.desc}}</p>
        <div class="list_b">
          <em>
            <span>
              <img :src="item.smallImg"/>
            </span>
            <span>来自：{{item.name}}</span>
          </em>
          <em>
            <i>立即查看</i>
            <i class="iconfont">&#xe665;</i>
          </em>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import Vuex from 'vuex'
  export default {
    methods:{
      goToAnswer(val){
        this.$router.push({
          name:'answer',
          query:{id:val}
        });
      }
    },
    computed:{
      ...Vuex.mapState({
        problemList:state=>state.Problem.problemList
      })
    }
  }
</script>

<style scoped>
  .content {
    padding: 1.52rem 0.24rem 0;
    font-family: "微软雅黑", "宋体", "arial", "Hiragino Sans GB", "Microsoft Yahei", "Tahoma", "Helvetica", "STHeiti";
    flex: 1;
    overflow: auto;
  }

  /*列表*/
  .content > .proList {
    height: 2.59rem;
    padding: 0.39rem 0;
    border-bottom: 1px solid #C2C1C0;
    display: flex;
  }

  /*列表大图*/
  .content > .proList > img {
    width: 2.4rem;
    margin-right: 0.24rem;
  }

  .content > .proList > .list_r {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  /*列表标题*/
  .content > .proList > .list_r > h3 {
    font-size: 28px;
    color: #242526;
  }

  /*列表备注*/
  .content > .proList > .list_r > p {
    font-size: 24px;
    color: #60605F;
    height: 0.6rem;
  }

  .content > .proList > .list_r > .list_b {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .content > .proList > .list_r > .list_b > em {
    display: flex;
    align-items: center;
  }

  /*列表头像外边框*/
  .content > .proList > .list_r > .list_b > em:nth-of-type(1) > span:nth-of-type(1) {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 0.23rem;
  }

  /*列表头像图片*/
  .content > .proList > .list_r > .list_b > em:nth-of-type(1) > span:nth-of-type(1) > img {
    width: 100%;
  }

  .content > .proList > .list_r > .list_b > em:nth-of-type(1) > span:nth-of-type(2) {
    font-size: 22px;
    color: #727271;
  }

  .content > .proList > .list_r > .list_b > em:nth-of-type(2) i {
    font-size: 22px;
    color: #F98509;
  }

  /*立即查看按钮*/
  .content > .proList > .list_r > .list_b > em:nth-of-type(2) i:nth-of-type(2) {
    margin-left: 0.1rem;
  }
</style>

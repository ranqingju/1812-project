<template>
  <div id="content">
    <div class="content_list" v-for="(item,index) in desList">
      <div class="content_list_up">
        <div>
          <img :src="'http://ceshi.qfjava.cn/' + item.headportrait"/>
        </div>
        <div>
          <p>{{item.username}}</p>
          <p>
            <span>{{item.address}}</span>
            <span>{{item.quotation}}</span><span></span>
          </p>
        </div>
      </div>
      <div class="content_list_down">
        <div>
          <img :src="'http://ceshi.qfjava.cn/' + item.img1">
        </div>
        <div>
          <img :src="'http://ceshi.qfjava.cn/' + item.img2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Vuex from 'vuex'

  export default {
    data() {
      return {
        lists: [{
          img: "static/designer/bg1.jpg"
        },
          {
            img: "static/designer/bg1.jpg"
          },
          {
            img: "static/designer/bg1.jpg"
          },
          {
            img: "static/designer/bg1.jpg"
          }
        ]
      }
    },
    computed:{
      ...Vuex.mapState({
        desList:state=>state.Designer.desList
      })
    },
    methods: {
      ...Vuex.mapActions({
        getDesigner: 'Designer/getDesigner'
      })
    },
    created() {
      this.getDesigner();
    }
  }
</script>

<style>
  /* 设计师中间内容区样式 */
  #content {
    width: 100%;
    flex: 1;
    overflow: auto;
    background: rgba(243, 242, 240, 1);
    display: flex;
    flex-direction: column;
    padding-left: .23rem;
  }

  #content > .content_list {
    height: 3.38rem;
  }

  #content > .content_list > .content_list_up {
    height: 1.6rem;
    width: 100%;
    display: flex;
    align-items: center;
  }

  #content > .content_list > .content_list_up > div:nth-child(1) {
    width: 100px;
    height: 100px;
    margin-right: .2rem;
  }

  /* 圆形头像样式 */
  #content > .content_list > .content_list_up > div:nth-child(1) > img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  /*姓名样式 */
  #content > .content_list > .content_list_up > div:nth-child(2) > p {
    font-size: 24px;
    line-height: 24px;
    color: #34343D;
    padding-bottom: 14px;
  }

  /* 地区  价格样式 */
  #content > .content_list > .content_list_up > div:nth-child(2) > p > span {
    font-size: 22px;
    line-height: 22px;
    color: #BDBDBE;
  }

  #content > .content_list > .content_list_down {
    width: 100%;
    height: 1.78rem;
    display: flex;
    flex-direction: row;
  }

  /* 展示图样式 */
  #content > .content_list > .content_list_down > div {
    width: 46.6%;
    margin-right: .25rem;
    height: 100%;
  }

  #content > .content_list > .content_list_down > div > img {
    width: 100%;
    height: 100%;
  }
</style>

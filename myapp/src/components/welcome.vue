<template>
  <div id="welcome">
    <div class="swiper-container oBox">
      <div class="swiper-wrapper oUl">
        <div class="swiper-slide oLi" v-for="(item,index) in imgList">
          <img :src="item.url" alt="">
        </div>
        <div class="swiper-slide oLi">
          <img src="static/welcome/guide_6.png" alt="">
          <div class="openRouter" @click="handleToMain()">
            开始旅程
          </div>
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  export default {
    name: "welcome",
    data() {
      return {
        imgList: [
          {
            url: 'static/welcome/guide_1.png'
          },
          {
            url: 'static/welcome/guide_2.png'
          },
          {
            url: 'static/welcome/guide_3.png'
          },
          {
            url: 'static/welcome/guide_4.png'
          },
          {
            url: 'static/welcome/guide_5.png'
          }
        ]
      }
    },
    mounted() {
      new Swiper('.oBox',{
        pagination: {
          el: '.swiper-pagination'
        }
      });
    },
    methods:{
      handleToMain(){
        this.$router.push('/main');
      }
    },
    beforeRouteEnter(to,from,next){

      if(localStorage.flag){
        next((vm)=>{
          vm.$router.push('/main');
        })
      }else{
        localStorage.flag=true;
        next();
      }
    }
  }
</script>

<style scoped>
  #welcome {
    width: 100%;
    height: 100%;
  }

  #welcome > .oBox {
    height: 100%;
  }

  #welcome > .oBox > .oUl{
    height: 100%;
  }

  #welcome > .oBox > .oUl > .oLi{
    height: 100%;
  }

  #welcome > .oBox > .oUl > .oLi > img{
    width: 100%;
    height: 100%;
  }

  .openRouter{
    width: 2.8rem;
    height: 0.8rem;
    background: rgba(255,255,255,1);
    line-height: 0.8rem;
    text-align: center;
    font-size: 36px;
    color: #ff6c0d;
    font-weight: bolder;
    border-radius: 0.4rem;
    box-shadow: 1px 1px 5px 1px #000;
    position: absolute;
    bottom: 1.2rem;
    left: 50%;
    margin-left: -1.4rem;
  }
</style>

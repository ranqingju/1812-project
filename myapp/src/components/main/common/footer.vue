<template>
    <div id="footer">
      <ul>
        <li v-for="(item,index) in navigations">
          <router-link  :to="item.name">
            <span class="iconfont" v-html="item.icon"></span>
            <span>{{item.title}}</span>
          </router-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default{
  data(){
    return {
      navigations:[
        {
          title:"首页",
          name:'home',
          icon:'&#xe600;'
        },
        {
          title:'杂志',
          name:'magazine',
          icon:'&#xe75f;'
        },
        {
          title:'设计师',
          name:'designer',
          icon:'&#xe612;'
        },
        {
          title:'我的',
          name:'my',
          icon:'&#xe601;'
        }
      ]
    }
  }
}
</script>

<style scoped>
  #footer{
    width: 100%;
    height: 0.98rem;
    background: rgba(239,239,236,1);
    border-top: 2px solid rgba(203,203,201,1);
    position: fixed;
    left: 0;
    bottom: 0;
  }
  #footer>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-conent: space-around;
    align-items: center;
  }
  #footer>ul>li{
    width: 100%;
    height: 100%;
  }
  #footer>ul>li>a{
    width: 100%;
    height: 100%;
    text-align: center;
    font-family:PingFang-SC-Regular;
    font-size: 12px;
    font-weight:400;
    color: #0F0F0D;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #footer>ul>li>a>span:nth-child(1){
    font-size: 25px;
    color: #949494;
  }
  #footer>ul>li>.router-link-active{
    color: #FDD758;
  }
  #footer>ul>li>.router-link-active>span:nth-child(1){
    color: #FDD758;
  }
</style>

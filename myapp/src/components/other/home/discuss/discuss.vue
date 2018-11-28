<template>
  <div class="discuss">
      
        <div class="header">
            <i class="iconfont" @click="handleBack()">&#xe631;</i>
            <p>话题讨论</p>
            <span></span>
        </div>
        
            <div class="navs">
                <ul>
                    <li class="nav-li" v-for="(val,index) in navs" :key="index" @click="handleClick()">
                        <router-link to="/discuss/discuss">{{val.title}}</router-link>
                    </li>
                </ul>
            </div>
            
                <div class="center">
                    <div class="content" v-for="(val,index) in info" :key="index" @click="handleGo()">
                        <span>{{val.title}}</span>
                        <div class="message">
                            <p>{{val.message}}</p>
                        </div>
                        <div class="img-out">
                            <div class="img" v-for="(val,index) in navs" :key="index"></div>
                        </div>
                        <div class="taolun">
                            <p>{{val.msg}}</p>
                        </div>
                    </div>
                </div>
            
        
    <router-view></router-view>
  </div>
</template>

<script>

import Vuex from 'vuex';
  export default {
    name:'discuss',
    data(){
        return{
            
        }
    },
    computed:{
        ...Vuex.mapState({
            info:state=>state.Discuss.info,
            navs:state=>state.Discuss.navs,
            imgs:state=>state.Discuss.imgs
        })
    },
    methods:{
        ...Vuex.mapActions({
            handleToList:"Discuss/handleToList",
            handleToNavs:"Discuss/handleToNavs",
            handleToImgs:"Discuss/handleToImgs"
        }),
        handleClick(){
            
        },
        // handleGO(){
        //     this.$router.push("/discuss/details")
        // }
        handleGo(){
            this.$router.push('/discuss/discussdetails')
        },
        handleBack(){
            this.$router.push('/home')
        }
    }
  }
</script>

<style scoped>
.discuss{
    height: 100%;
    background: #F3F2F0;
    display: flex;
    flex-direction: column;
}

.header{
    width: 100%;
    height: .88rem;
    background: #fff;
    line-height: .88rem;
    display: flex;
    justify-content: space-between;
}
 .header>.iconfont{
    font-size: .43rem;
    color: #313131;
    
}
.header>p{
    font-size: .34rem;
    font-weight: bolder;
}

.navs{
    width: 100%;
    height: .7rem;
    background: #fff;
    border-top: 2px solid #D0D0CE;
    
}
.navs>ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    
}
.navs>ul>li{
    display: block;
    width: 100%;
    text-align: center;
    line-height: .7rem;
}
.navs>ul>li>a{
    font-size: .25rem;
    color: #34343D;
}
/* .navs>ul>li:nth-child(1){
    border-bottom: 6px solid #FDD768;
} */
.navs>ul>li:hover{
    border-bottom: 6px solid #FDD768;
}

.center{
    width: 100%;
    padding: 0 .25rem;
    padding-top: .3rem;  
    flex:1;
    overflow: auto;
}
.center>.content{
    width: 7rem;
    height: 3.08rem;
    background: #fff;
    margin-bottom: .3rem;
    padding-top: .34rem;
}
.center>.content>span{
    font-size: .3rem;
    color: #34343D;
    margin-left: .48rem;
    font-weight: 500;
}
.center>.content>.message{
    width: 4.43rem;
    height: .72rem;




    margin-left: .48rem;
    margin-top: .36rem;
}
.center>.content>.message>p{
    font-size: .26rem;
    color: #A0A0A0;
}
.center>.content>.img-out{
    width: 1.65rem;
    height: .54rem;

    position: relative;
    float: left;
    margin-left: .48rem;
    margin-top: .35rem;
}
.center>.content>.img-out>.img:first-child{
    width: .54rem;
    height: .54rem;
    border-radius: 50%;
    background: purple;
    position:absolute;
    right: 0;
}
.center>.content>.img-out>.img:nth-child(2){
    width: .54rem;
    height: .54rem;
    border-radius: 50%;
    background: orange;
    position:absolute;
    right: .39rem;
}
.center>.content>.img-out>.img:nth-child(3){
    width: .54rem;
    height: .54rem;
    border-radius: 50%;
    background: red;
    position:absolute;
    right: .78rem;
}
.center>.content>.img-out>.img:last-child{
    width: .54rem;
    height: .54rem;
    border-radius: 50%;
    background: pink;
    position:absolute;
    right: 1.2rem;
}
.center>.content>.taolun{
    width: 1.84rem;
    height: .25rem;
    
    float: left;
    margin-left: .24rem;
    margin-top: .48rem;
}
.center>.content>.taolun>p{
    color: #BFBFBE;
    font-size: .26rem;
}
</style>

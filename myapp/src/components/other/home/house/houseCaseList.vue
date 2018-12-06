<template>
    <div id="houseCaseList">
        <header>
            <span class="iconfont back" @click="handleGo()">&#xe631;</span>
            <h2>案例详情</h2>
            <span></span>
        </header>

        <section>
            <img :src=" 'http://ceshi.qfjava.cn/' + (houseList.bimg? houseList.bimg : '/group1/M00/00/00/rB8xvlvpIDCARlIgAAFmRuqQoeU871.jpg') ">
            <div class="main">
                <div class="user">
                    <img :src=" 'http://ceshi.qfjava.cn/' + (houseList.simg?houseList.simg : '/group1/M00/00/00/rB8xvlvpIDCARlIgAAFmRuqQoeU871.jpg') ">
                    <p>{{houseList.caseauthor}}</p>
                </div>

                <h2>房屋信息</h2>
                <div class="info">
                    <li><span class="iconfont houseicon1">&#xe674;</span>三室</li>
                    <li><span class="iconfont houseicon2">&#xea3c;</span>120平方米</li>
                    <li><span class="iconfont houseicon1">&#xe62d;</span>72万元</li>
                </div>

                <h2>前言</h2>
                <p>{{houseList.title}}</p>
                <p>{{houseList.content}}</p>

            </div>
        </section>

        <footer>
            <li :class="collectStatus? 'collectStyle' : '' "  @click="handleCollect(houseList.id)"><span class="iconfont houseicon1" >&#xe633;</span><b>收藏</b></li>
            <li @click='handleToCollection()'><span class="iconfont houseicon1">&#xe66a;</span><b>我的收藏</b></li>
        </footer>


        <transition name="send">
            <div class="collect" v-show="status">
                <h2>收藏成功</h2>
            </div>
        </transition>
    </div>
</template>

<script>
    import Vuex from 'vuex';

    export default {
        data(){
            return{
    
            }
        },
        created(){
            this.Init();
        },
        computed:{
            ...Vuex.mapState({
                houseList:state=>state.HouseCase.houseList,
                collectStatus:state=>state.HouseCase.collectStatus,
                status:state=>state.HouseCase.status
            })
        },
        methods:{
            ...Vuex.mapActions({
                handleCollect:'HouseCase/handleCollect',
                Init:'HouseCase/Init'
            }),
            handleGo:function(){
                 this.$router.push('/home/house/houseCase');
            },
            handleToCollection:function(){
                this.$router.push('/home/house/houseCollect');
            }
        }
    }
</script>

<style scoped>
    #houseCaseList{
        height:100%;
        width:100%;
        display: flex;
        flex-direction: column;
        font-family: '宋体';
        background: #fff;
    }
    #houseCaseList>header{
        height:0.88rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 0.28rem;
        background: #fff;
        letter-spacing: .1rem;
        background: #FEDA44;
    }
    #houseCaseList>header>.back{
        color:#000;
        font-size:.35rem!important;
    }
    #houseCaseList>section{
        flex:1;
        overflow: auto;
    }
    #houseCaseList>section>img{
        width:100%;
        height:500px;
    }
    #houseCaseList>section>.main{
        padding: 0 0.28rem;
    }
    #houseCaseList>section>.main>.user{
        width:100%;
        height:1.5rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    #houseCaseList>section>.main>.user>img{
        height:0.5rem;
        width:0.5rem;
        margin-right:.4rem;
        border-radius: 50%;
    }
    #houseCaseList>section>.main>h2{
        display: inline;
        font-size: .3rem;
        font-weight: normal;
        border-bottom:1px solid yellowgreen;
    }
    #houseCaseList>section>.main>.info{
        margin-top: .15rem;
        height:1.4rem;
        width:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    #houseCaseList>section>.main>.info>li{
        height:100%;
        width:30%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    #houseCaseList>section>.main>p{
        margin:.1rem;
    }

    #houseCaseList .houseicon1{
        font-size:.65rem;
    }
    #houseCaseList .houseicon2{
        font-size:.5rem;
        margin-top:.1rem;
    }

    #houseCaseList>footer{
        position: fixed;
        left:0;bottom:0;
        height:0.98rem;
        width: 100%;
        /* padding: 0 0.28rem; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-top:1px solid #000;
    }
    #houseCaseList>footer>li{
        height: 100%;
        width:50%;
        display: flex;
        justify-content:center;
        align-items: center;
    }
    #houseCaseList>footer>li:nth-of-type(1){
        border-right: 1px solid #000;
    }
    #houseCaseList>footer>li>span{
        margin-right:.12rem;
    }
    #houseCaseList>footer>li>b{
        font-size:.35rem;
        letter-spacing:.05rem;
    }
    #houseCaseList>footer>.collectStyle{
        color:yellow;
    }
    /* 提示信息 */
    #houseCaseList .collect{
        width:2rem;
        height:1rem;
        background:orangered;
        color:#fff;
        position: fixed;
        top:0;bottom: 0;
        left:0;right:0;
        margin:auto;
        text-align: center;
        line-height: 1rem;
        border-radius: .2rem;
    }
     /* 动画 */
    .send-enter{
        /* bottom:0;
        left:50%;
        margin-left:-1rem; */
        opacity: 0;
    }
    .send-enter-active{
        transition: all 2s;
    }
    .send-enter-to{
        /* bottom:50%;
        left:50%;
        margin-left:-1rem;
        margin-bottom:-0.5rem; */
        opacity: 1;
    }
</style>

<template>
    <div id="houseCaseList">
        <header>
            <span class="iconfont back" @click="handleGo()">&#xe631;</span>
            <h2>案例详情</h2>
            <span></span>
        </header>
        
        <section>
            <img :src="houseList.bimg">
            <div class="main">
                <div class="user">
                    <img :src="houseList.simg">
                    <p>{{houseList.tit}}</p>
                </div>

                <h2>房屋信息</h2>  
                <div class="info">
                    <li><span class="iconfont houseicon1">&#xe674;</span>三室</li>
                    <li><span class="iconfont houseicon2">&#xea3c;</span>120平方米</li>
                    <li><span class="iconfont houseicon1">&#xe62d;</span>72万元</li>
                </div>

                <h2>前言</h2>
                <p>1按时打算打算的啊实打实大师大师的</p>
                <p>按时打算打算打算打算打算打打</p>
            </div>
        </section>

        <footer>
            <li :class="collectStatus? 'collectStyle' : '' "  @click="handleCollect()"><span class="iconfont houseicon1" >&#xe633;</span><b>收藏</b></li>
            <li><span class="iconfont houseicon1">&#xe66a;</span><b>42</b></li>
        </footer>
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
                collectStatus:state=>state.HouseCase.collectStatus
            })
        },
        methods:{
            ...Vuex.mapActions({
                handleCollect:'HouseCase/handleCollect',
                Init:'HouseCase/Init'
            }),
            handleGo:function(){
                // this.$router.push('/home/house/houseCase');
                 this.$router.back();
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
    }
    #houseCaseList>header{
        height:0.88rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:0 0.28rem;
        background: #fff;
        letter-spacing: .1rem;
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
</style>

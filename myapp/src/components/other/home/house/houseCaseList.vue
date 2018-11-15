<template>
    <div id="houseCaseList">
        <header>
            <span class="iconfont back" @click="handleGo()">&#xe631;</span>
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
                    <li><span class="iconfont">1</span>三室</li>
                    <li><span class="iconfont">2</span>120平方米</li>
                    <li><span class="iconfont">3</span>72万元</li>
                </div>

                <h2>前言</h2>
                <p>1按时打算打算的啊实打实大师大师的</p>
                <p>按时打算打算打算打算打算打打</p>
            </div>
        </section>

        <footer>
            <li><span class="iconfont">&#xe633;</span>收藏</li>
            <li><span class="iconfont">&#xe66a;</span>42</li>
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
        computed:{
            ...Vuex.mapState({
                houseList:state=>state.HouseCase.houseList
            })
        },
        methods:{
            ...Vuex.mapActions({
                
            }),
            handleGo:function(){
                this.$router.push('/home/house/houseCase');
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
    }
    #houseCaseList>header{
        height:0.88rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding:0 0.28rem;
        background: #fff;
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
        margin-top: .2rem;
        height:1rem;
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


    #houseCaseList>footer{
        position: fixed;
        left:0;bottom:0;
        height:0.98rem;
        width: 100%;
        /* padding: 0 0.28rem; */
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
</style>

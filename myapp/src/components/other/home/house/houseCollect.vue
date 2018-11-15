<template>
    <div id="house-collect">

        <div class="house-top">
            <span class="iconfont back">&#xe631;</span>
            <h2>我的收藏</h2>
            <span class="iconfont search"></span>
        </div>

        <div class='border'></div>

        <div class="house-center">

            <div class="house-cont" v-for="(val,index) in houseCollect" :key="index">
                <div class="cont-top">
                    <div>
                        <img :src="val.simg" @click="handleToList(index),handleGo()">
                        <p>{{val.tit}}</p>
                    </div>

                    <p>{{val.mes}}</p>
                </div>
                
                <div class="cont-bottom">
                    <img :src="val.bimg" @click="handleToList(index),handleGo()">
                </div>
            </div>

        </div>

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
            
        },
        computed:{
            ...Vuex.mapState({
                houseCollect:state=>state.HouseCase.houseCollect
            })
        },
        methods:{
            ...Vuex.mapActions({
                handleCollectToList:'HouseCase/handleToList'
            }),
            handleGo:function(){
                this.$router.push('/home/house/houseCaseList');
            }
        }
    }   
</script>

<style scoped>
    #house-collect{
        display: flex;
        flex-direction: column;
        height:100%;
        font-family:'宋体';
        letter-spacing: .1rem;
    }
    #house-collect>.house-top{
        padding: 0 0.28rem;
        height: .88rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #house-collect>.border{
        border-bottom:1px solid #C9C9C9;
    }
     #house-collect>.house-center{
        padding: 0 0.28rem;
        flex:1;
        overflow: auto;
    }
    #house-collect>.house-center>.house-cont{
        height:4.74rem;
        width:100%;
    }
    #house-collect>.house-center>.house-cont>.cont-top{
        width:100%;
        height:1.34rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #house-collect>.house-center>.house-cont>.cont-top>div{
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #house-collect>.house-center>.house-cont>.cont-top>div>img{
        border-radius:50%;
        width: 1rem;
        height: 1rem;
        display: block;
        margin-right:.17rem;
    }
    #house-collect>.house-center>.house-cont>.cont-top>div>p{
        font-size:30px;
        font-weight:400;
        color:rgba(23,23,23,1);
    }
    #house-collect>.house-center>.house-cont>.cont-top>p{
        font-size:24px;
        font-weight:400;
        color:rgba(23,23,23,1);
    }
    #house-collect>.house-center>.house-cont>.cont-bottom{
        flex: 1;
        border-radius:.1rem;
    }
    #house-collect>.house-center>.house-cont>.cont-bottom>img{
         width:100%;
         height:100%;
         border-radius:.1rem;
    }


    #house-collect>.house-top>.back{
        font-size:.34rem;
    }
    #house-collect>.house-top>.search{
        font-size:.48rem;
    }
    #house-collect>.house-top>h2{
        font-size:.36rem;
        font-weight:bold;
        color:rgba(23,23,23,1);
    }
    
</style>

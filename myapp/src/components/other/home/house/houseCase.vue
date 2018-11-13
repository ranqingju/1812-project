<template>
    <div id="house-case">
        <div class="house-top">
            <span>1</span>
            <h2>整屋案例</h2>
            <span>2</span>
        </div>

        <div class="house-center">
            <div class="house-cont" v-for="(val,index) in info" :key="index">
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
        computed:{
            ...Vuex.mapState({
                info:state=>state.HouseCase.info
            })
        },
        methods:{
            ...Vuex.mapActions({
                handleToList:'HouseCase/handleToList'
            }),
            handleGo:function(){
                this.$router.push('/house/houseCaseList');
            }
        }
    }
</script>

<style scoped>
    #house-case{
        padding: 0 0.28rem;
        display: flex;
        flex-direction: column;
        height:100%
    }
    #house-case>.house-top{
        height: .88rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom:1px solid #C9C9C9;
        /* position:fixed;
        top:0;left:0; */
    }
     #house-case>.house-center{
        flex:1;
        overflow: auto;
    }
    #house-case>.house-center>.house-cont{
        height:4.74rem;
        width:100%;
        /* display: flex;
        flex-direction: column; */
    }
    #house-case>.house-center>.house-cont>.cont-top{
        width:100%;
        height:1.34rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #house-case>.house-center>.house-cont>.cont-top>div{
        /* width: 2.36rem; */
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #house-case>.house-center>.house-cont>.cont-top>div>img{
        width: 1rem;
        height: 1rem;
        display: block;
        margin-right:.17rem;
    }
    #house-case>.house-center>.house-cont>.cont-bottom{
        flex: 1;
        border-radius:.1rem;
    }
    #house-case>.house-center>.house-cont>.cont-bottom>img{
         width:100%;
         height:100%;
         border-radius:.1rem;
    }
</style>


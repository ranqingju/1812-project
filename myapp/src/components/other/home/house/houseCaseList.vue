<template>
    <div id="houseCaseList">
        <div @click="handleGo()">返回</div>
        <img :src="houseList.bimg">
        <p>{{houseList.tit}}</p>
        <p>{{houseList.mes}}</p>
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
                this.$router.push('/house/houseCase');
            }
        }
    }
</script>

<style scoped>

</style>

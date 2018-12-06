<template>
    <div id="drafts">
        <div class="drafts-top">

            <span class="iconfont back" @click="handleBack()">&#xe631;</span>
            <h2>我的草稿</h2>
            <span class="iconfont search"></span>
        </div>

        <div class='border'></div>

        <div class="drafts-center">

            <div class="drafts-cont" v-for="(val,index) in drafts" :key="index">
                <div class="cont-top">
                    <div>
                        <img :src=" 'http://ceshi.qfjava.cn/' + val.headportrait">
                        <p>{{val.casecontent}}</p>
                    </div>

                    <p>{{val.theme}}</p>
                </div>
                
                <div class="cont-bottom">
                    <img :src=" 'http://ceshi.qfjava.cn/' +val.themeimg">
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
            this.getDraft();
        },
        computed:{
            ...Vuex.mapState({
                drafts:state=>state.HouseCase.drafts
            })
        },
        methods:{
            ...Vuex.mapActions({
               getDraft:'HouseCase/getDraft'
            }),
            handleBack:function(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    #drafts{
        display: flex;
        flex-direction: column;
        height:100%;
        font-family:'宋体';
        letter-spacing: .1rem;
    }
    #drafts>.drafts-top{
        padding: 0 0.28rem;
        height: .88rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FEDA44;
    }
    #drafts>.border{
        border-bottom:1px solid #C9C9C9;
    }
     #drafts>.drafts-center{
        padding: 0 0.28rem;
        flex:1;
        overflow: auto;
    }
    #drafts>.drafts-center>.drafts-cont{
        height:4.74rem;
        width:100%;
    }
    #drafts>.drafts-center>.drafts-cont>.cont-top{
        width:100%;
        height:1.34rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #drafts>.drafts-center>.drafts-cont>.cont-top>div{
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    #drafts>.drafts-center>.drafts-cont>.cont-top>div>img{
        border-radius:50%;
        width: 1rem;
        height: 1rem;
        display: block;
        margin-right:.17rem;
    }
    #drafts>.drafts-center>.drafts-cont>.cont-top>div>p{
        font-size:.26rem;
        font-weight:400;
        width:3rem;
        color:rgba(23,23,23,1);
    }
    #drafts>.drafts-center>.drafts-cont>.cont-top>p{
        font-size:.24rem;
        font-weight:400;
        color:rgba(23,23,23,1);
    }
    #drafts>.drafts-center>.drafts-cont>.cont-bottom{
        flex: 1;
        border-radius:.1rem;
    }
    #drafts>.drafts-center>.drafts-cont>.cont-bottom>img{
         width:100%;
         height:3.3rem;
         border-radius:.1rem;
    }


    #drafts>.drafts-top>.back{
        font-size:.34rem;
    }
    #drafts>.drafts-top>.search{
        font-size:.48rem;
    }
    #drafts>.drafts-top>h2{
        font-size:.36rem;
        font-weight:bold;
        color:rgba(23,23,23,1);
    }
</style>

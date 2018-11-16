<template>
    <div id="newAddCase">
        <div class="newAdd-top">
            <span class="iconfont back" @click="handleBack()">&#xe631;</span>
            <h2>新增案例</h2>
            <div>
                <span @click="handleSave()">保存</span>
                <span @click="handleSend()">发布</span>
            </div>
        </div>

        <div class="border"></div>

        <div class="main">
            <p><span>标题:</span><input type="text" v-model="info.tit"></p>
            <div><p>前言:</p><textarea v-model="info.msg"></textarea></div>
            <div>
                <span>户型:</span>
                <p><a href="##" :class="Index==1? 'active' :'' " @click="handleType([1,'一室'])">一室</a><a href="##" :class="Index==2? 'active' :'' " @click="handleType([2,'二室'])">二室</a></p>
                <p><a href="##" :class="Index==3? 'active' :'' " @click="handleType([3,'三室'])">三室</a><a href="##" :class="Index==4? 'active' :'' " @click="handleType([4,'四室'])">四室</a></p>
                <p><a href="##" :class="Index==5? 'active' :'' " @click="handleType([5,'五室'])">五室</a><a href="##" :class="Index==6? 'active' :'' " @click="handleType([6,'五室以上'])">五室以上</a></p>
            </div>
            <p><span>面积:</span><input type="text" v-model="info.m2"></p>
            <p><span>城市:</span><input type="text" v-model="info.city"></p>
            <p><span>花费:</span><input type="text" v-model="info.price"></p>
        </div>
        <transition name="save">
            <div class="save" v-show="flag">
                <h2>保存成功</h2>
            </div>
        </transition>

        <transition name="send">
            <div class="send" v-show="flag2">
                <h2>发布成功</h2>
            </div>
        </transition>
       
    </div>
</template>

<script>
    import Vuex from 'vuex';

    export default {
         data(){
            return{
                info:{
                    tit:'',
                    msg:'',
                    type:'一室',
                    m2:'',
                    city:'',
                    price:'',
                    time:''
                },
                Index:1,
                flag:false,
                flag2:false
            }
        },
        created(){
         
        },
        computed:{
            ...Vuex.mapState({
               
            })
        },
        methods:{
            ...Vuex.mapActions({
                
            }),
            handleGo:function(){
               
            },
            handleBack:function(){
                
            },
            handleType:function(data){
                this.Index = data[0];
                this.info.type = data[1];
            },
            handleSave:function(){
                let date = new Date();
                this.info.time = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + '\t' + date.getHours() + ':' + date.getMinutes();
               
                this.flag = !this.flag;

                setTimeout(()=>{
                    this.flag = !this.flag;
                },2000)
            },
            handleSend:function(){
                this.flag2 = !this.flag2;

                setTimeout(()=>{
                    this.flag2 = !this.flag2;
                },2000)
            }
        }
    }
</script>

<style scoped>
    #newAddCase{
        display: flex;
        flex-direction: column;
        height:100%;
        font-family:'宋体';
        color:#000;
        width: 100%;
        overflow: hidden;
    }
    #newAddCase>.newAdd-top{
        padding: 0 0.28rem;
        height: .88rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        letter-spacing:.1rem;
    }
    #newAddCase>.newAdd-top>.back{
        font-size:.35rem;
    }
    #newAddCase>.newAdd-top>h2{
        margin-left:1.2rem;
    }
    #newAddCase>.newAdd-top>div>span{
         font-size:.3rem;
    }

    #newAddCase>.border{
        width: 100%;
        border-bottom: 1px solid #000;
        margin-bottom: .2rem;
    }

    #newAddCase>.main{
        display: flex;
        flex-direction: column;
        padding: 0 0.28rem;
    }
    #newAddCase>.main>p{
        width:100%;
        height:.5rem;
        display: flex;
        justify-content: center;
        margin:.4rem 0.2rem;
        align-items: center;
    }
    #newAddCase>.main>p>span{
        margin-right: .3rem;
    }
    #newAddCase>.main>p>input{
        width:5rem;
        height:98%;
        padding-left:.2rem;
        border:1px solid #000;
        font-size:.25rem;
    }
    #newAddCase>.main>div:nth-of-type(1){
         width:100%;
         height:1.2rem;
         display: flex;
         margin-left:.77rem;
         padding-top:.2rem;
    }
    #newAddCase>.main>div:nth-of-type(1)>textarea{
        width:5rem;
        height:.78rem;
        padding: .1rem;
        margin-left:.25rem;
        border:1px solid #000;
        font-size:.25rem;
    }
    #newAddCase>.main>div:nth-of-type(2){
        width: 100%;
        height:2rem;
        display: flex;
        margin-left:.77rem;
        flex-direction: column;
    }
    #newAddCase>.main>div:nth-of-type(2)>p{
        display: flex;
        height:.5rem;
        width:5rem;
        justify-content: space-between;
        margin-left:.88rem;
        margin-top:.1rem;
    }
    #newAddCase>.main>div:nth-of-type(2)>p>a{
        display: block;
        height:100%;
        width:45%;
        border:1px solid #000;
        text-align: center;
        line-height: .4rem;
        margin-right:.5rem;
    }

    #newAddCase>.main>div:nth-of-type(2)>p>.active{
        color:orangered;
        border-color:orangered;
    }
    /* 提示信息 */
    #newAddCase>.send,#newAddCase>.save{
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
    .save-enter,.send-enter{
        /* bottom:0;
        left:50%;
        margin-left:-1rem; */
        opacity: 0;
    }
    .save-enter-active,.send-enter-active{
        transition: all 2s;
    }
    .save-enter-to,.send-enter-to{
        /* bottom:50%;
        left:50%;
        margin-left:-1rem;
        margin-bottom:-0.5rem; */
        opacity: 1;
    }
</style>

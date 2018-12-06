<template>
    <div class="case">
        <div class="title-out">
            <div class="title">
                用电脑写案例
            </div>
        </div>
        <div class="anniu">
             <div class="anniu1">
                 <span class="iconfont" @click="handleAdd()">&#xe625;</span>
             </div>
             <div class="anniu2">
                 <span @click="handleDrafs()" class="iconfont">&#xe613;</span>
             </div>
             
        </div>
        <div class="msg-out">
            <div class="msg">
                <p @click="handleAdd()">新建案例</p>
                <p @click="handleDrafs()">草稿箱</p>
            </div>
        </div>
        <div class="cha">
            <span class="iconfont" @click="handleBack()">&#xe658;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'case',
    methods:{
        handleBack(){
            this.$router.push('/home')
        },
        handleAdd(){
            this.$router.push('/home/house/add/newAddCase');
        },
        handleDrafs(){
            this.$router.push('/home/house/add/drafts');
        }
    }
}
</script>

<style scoped>
.case{
    width: 100%;
    height: 100%;
    background: #F3F2F0;
}
.title-out{
    width: 100%;
    height: 1.23rem;
}
.title{
    width: 2.12rem;
    height: .34rem;
    
    padding-top: .89rem;
    font-size: .35rem;
    line-height: .34rem;
    color: #030303;
    margin-left: 2.68rem;
}
.anniu{
    width: 4.52rem;
    height: 1.5rem;
    
    margin-top: 3.81rem;
    margin-left: 1.49rem;
    
}
.anniu1{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    float: left;
    border: 1px solid #030303;
}
.anniu2{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    float: right;
    border: 1px solid #030303;
}
.anniu1>span{
    font-size: .7rem;
    margin-left: .38rem;
    line-height: 1.5rem;
}
.anniu2>span{
    font-size: .7rem;
    margin-left: .38rem;
    line-height: 1.5rem;
}
.msg{
    width:4.05rem;
    height: .29rem;

    margin-top: .69rem;
    margin-left: 1.64rem;
    display: flex;
    justify-content: space-between
}
.msg>p{
    font-size: .29rem;
    line-height: .29rem;
    
}
.cha{
    width: .4rem;
    height: .4rem;
   
    margin-left: 3.56rem;
    margin-top: 4.39rem;
}
.cha>span{
    font-size: .4rem;
    color: #ccc;
    line-height: .4rem;
}
</style>

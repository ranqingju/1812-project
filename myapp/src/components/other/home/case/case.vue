<template>
    <div class="case">
        <div class="title-out">
            <div class="title">
                用电脑写案例
            </div>
        </div>
        <div class="anniu">
             <div class="anniu1">
                 <span class="iconfont">&#xe625;</span>
             </div>
             <div class="anniu2">
                 <span class="iconfont">&#xe613;</span>
             </div>
             
        </div>
        <div class="cha">
            <span class="iconfont">&#xe658;</span>
        </div>
    </div>
</template>

<script>
export default {
    name:'case',
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
    display: flex;
    justify-content: space-between;
}
.anniu1{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    
    border: 1px solid #030303;
}
.anniu2{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
   
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
.cha{
    width: .4rem;
    height: .4rem;
   
    margin-left: 3.56rem;
    margin-top: 5.28rem;
}
.cha>span{
    font-size: .4rem;
    color: #ccc;
    line-height: .4rem;
}
</style>

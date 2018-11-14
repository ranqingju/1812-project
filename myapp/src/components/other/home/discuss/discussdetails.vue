<template>
    <div id="discussdetails">
        <div class="banner">

        </div>
        <div class="qingdan">
            <h2>双十一剁手清单：你最想买的家居用品是什么</h2>
            <p>这个双十一你准备买什么？是屯点日常用品秒杀小家电，还是给家里添加家具呢?</p>
            <h3>分享你的剁手清单，也说说你的购物心得吧</h3>
        </div>
        <div class="center">

        </div>
    </div>
</template>

<script>
import Vuex from 'vuex';
export default {
    name:'discussdetails'
}
</script>

<style scoped>
.banner{
    width: 100%;
    height: 3.6rem;
    position: relative;
    background: orange;
}
.qingdan{
    width: 7.01rem;
    height: 5.08rem;
    background: pink;
    padding: .46rem 1rem .42rem .99rem;
    position: absolute;
    left: .25rem;
    top: 2.38rem;
}
.qingdan>h2{
    color: #34343D;
    font-size: .36rem;
}
.qingdan>p{
    color: #34343D;
    font-size:.24rem;
    margin-top: .37rem
}
.qingdan>h3{
    color: #34343D;
    font-size: .24rem;
    margin-top: .87rem;
}
.center{

}
</style>

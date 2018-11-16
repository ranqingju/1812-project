<template>
    <div id="discussdetails">
        <div class="banner">

        </div>
        <div class="qingdan">
            <h2>双十一剁手清单：你最想买的家居用品是什么</h2>
            <p>这个双十一你准备买什么？是屯点日常用品秒杀小家电，还是给家里添加家具呢?</p>
            <h3>分享你的剁手清单，也说说你的购物心得吧</h3>
            <div class="xian"></div>
            <div class="reply">
              <span>回答</span>
              <span>172</span>
            </div>
            <button class="focus">+关注</button>
        </div>
        <div class="center">
            <div class="center-c">
                <div class="center-c-top">
                    <h3>精彩回答</h3>
                    <div class="toggle">
                        <span>默认</span>
                        <div class="bang"></div>
                        <span>时间</span>
                    </div>
                </div>
                <div class="center-c-mid">
                    <div class="tx">

                    </div>
                    <div class="msg">
                        <p>蒙娜丽莎</p>
                        <span>2018-08-11</span>
                    </div>
                    <p class="iconfont icon1">&#xe871;</p>
                    <p class="num">2</p>
                    <p class="iconfont icon2">&#xe607;</p>
                    <p class="huifu">回复</p>
                </div>
                <div class="center-c-bottom">
                    <p>不错的效果图！有个客户用这种牌子的油烟机哈哈哈！</p>
                </div>
                <div class="xx"></div>
                <button class="ask">发布问答</button>
            </div>
             <div class="center-c-mid">
                    <div class="tx">

                    </div>
                    <div class="msg">
                        <p>蒙娜丽莎</p>
                        <span>2018-08-11</span>
                    </div>
                    <p class="iconfont icon1">&#xe871;</p>
                    <p class="num">2</p>
                    <p class="iconfont icon2">&#xe607;</p>
                    <p class="huifu">回复</p>
                </div>
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
    background: pink;
}
.qingdan{
    width: 7.01rem;
    height: 5.08rem;
    background: yellow;
    padding: .46rem 1rem .42rem .99rem;
    position: absolute;
    left: .25rem;
    top: 2.38rem;
    border: 1px solid #ccc;
    
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
    float: left;
    margin-top: .87rem;
}
.qingdan>.xian{
    width:5rem;
    height: .02rem;
    background: #DCDCDC;
    margin-top: .35rem;
}
.qingdan>.reply{
    width: .83rem;
    height: .2rem;
    background: ;
    float: left;
    margin-top: .4rem;
    display: flex;
    justify-content: space-between;
}
.qingdan>.reply>span{
    font-size: .2rem;
    line-height: .2rem;
    
}
.qingdan>.focus{
    width: 1.15rem;
    height: .45rem;
    background: #F8B551;
    float: left;
    margin-top: .27rem;
    margin-left: 3rem;
    border-radius: .22rem;
    font-size: .19rem;
    color:#434343
    
}
.center{
    width: 100%;
    height: 9.74rem;
    background: ;
    padding: 0 .23rem 0 .24rem;
}
.center>.center-c{
    width: 100%;
    height: 2.97rem;
    background: ;
    margin-top: 4.36rem;
    position: relative;
}
.center>.center-c>.center-c-top{
    width: 100%;
    height: .28rem;
    background: ;
}
.center-c>.center-c-top>h3{
    font-size: .28rem;
    line-height: .28rem;
    color: #434343;
    float: left;
}
.toggle{
    width: 1.21rem;
    height: .26rem;
    background: #fff;
    float:right;
    display:flex;
    justify-content: space-between
}
.toggle>span{
    font-size: .2rem;
    color: #7D7D7D;
}
.toggle>.bang{
    width: .01rem;
    height: .16rem;
    background: #D2D2D2;
}
.center-c-mid{
    width: 100%;
    height: .64rem;
    background: ;
    position: relative;
    margin-top: .52rem;
}
.center-c-mid>.tx{
    width: .64rem;
    height: .64rem;
    background: purple;
    border-radius: 50%;
    float: left;
}
.center-c-mid>.msg{
    width: 1.26rem;
    height: 100%;
    background: ;
    margin-left: .31rem;
    float: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.msg>p{
    font-size: .24rem;
    color: #34343D;
}
.msg>span{
    font-size: .24rem;
    color: #A0A0A0;
}
.center-c-mid>.icon1{
    font-size: .3rem;
    position: absolute;
    left: 5.05rem;
    top: .17rem;
}
.center-c-mid>.num{
    font-size: .23rem;
    color: #BFBFBE;
    position: absolute;
    left: 5.51rem;
    top: .25rem;
}
.center-c-mid>.icon2{
    font-size: .28rem;
    position: absolute;
    left: 6.01rem;
    top: .17rem;
}
.center-c-mid>.huifu{
    font-size: .28rem;
    color: #BFBFBE;
    position: absolute;
    left: 6.44rem;
    top: .19rem;
}
.center-c-bottom{
    width: 6rem;
    height: .82rem;
    background:;
    margin-left: .91rem;
    margin-top: .33rem;
}
.center-c-bottom>p{
    font-size: .3rem;
    color: #313131;

}
.center-c>.xx{
    width: 7.02rem;
    height: .02rem;
    background: #DCDCDC;
    position:absolute;
    top: 2.97rem;
}
.center-c>.ask{
    width: 2.75rem;
    height: 1.11rem;
    position: absolute;
    left: 2.14rem;
    top: 2.51rem;
    background: #F8B551;
    border-radius: .55rem;
    font-size: .34rem;
    color: #434343;
}
</style>

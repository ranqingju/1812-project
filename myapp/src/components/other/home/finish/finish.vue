<template>
	<div class="zhuang">
		<div id="zhuangxiu">
			<p class="iconfont" @click="hand()">&#xe631;</p><h2>装修攻略</h2>
		</div>
		<section>
			
		<!-- <div id="banner">
			<img src="../../../../../static/images/1.jpg" alt="">
		</div>
		 -->
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide banner">
					<img src="../../../../../static/images/1.jpg" alt="">
				</div>
				<div class="swiper-slide banner">
					<img src="../../../../../static/images/1.jpg" alt="">
				</div>
				<div class="swiper-slide banner">
					<img src="../../../../../static/images/1.jpg" alt="">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		
		<div id="zhuangqian" v-for="(item,index) in nab">
			<p>{{item.p}}</p>
			<div id="img">
				<div class='com'>
					<!-- <img src="../../../../../static/images/2_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/3_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/4_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/4_03.jpg" alt="" @click="handa()"> -->
					<img :src="item.img" @click="handa()"></img>
					<img :src="item.img1"@click="handa()"></img>
					<img :src="item.img2"@click="handa()"></img>
					<img :src="item.img3"@click="handa()"></img>
				</div>
			</div>
		</div>
<!-- 		<div id="zhuangqian">
			<p>装修中</p>
			<div id="img">
				<div class='com'>
					<img src="../../../../../static/images/2_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/3_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/4_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/4_03.jpg" alt="" @click="handa()">
				</div>
			</div>
		</div>
		<div id="zhuangqian">
			<p>装修后</p>
			<div id="img">
				<div class='com'>
					<img src="../../../../../static/images/2_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/3_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/4_03.jpg" alt="" @click="handa()">
					<img src="../../../../../static/images/4_03.jpg" alt="" @click="handa()">
				</div>
			</div>
		</div> -->
		</section>
	</div>
</template>

<script>
import '../../../../../node_modules/swiper/dist/css/swiper.css';
import Swiper from 'swiper';
export default {
	data() {
		return {
			nab:[
				{
					img:"../../../../../static/images/2_03.jpg",
					img1:"../../../../../static/images/3_03.jpg",
					img2:"../../../../../static/images/4_03.jpg",
					img3:"../../../../../static/images/2_03.jpg",
					p:"装修前"
				},
				{
					img:"../../../../../static/images/a_03.jpg",
					img1:"../../../../../static/images/b_03.jpg",
					img2:"../../../../../static/images/c_03.jpg",
					img3:"../../../../../static/images/a_03.jpg",
					p:"装修中"
				},
				{
					img:"../../../../../static/images/aa_03.jpg",
					img1:"../../../../../static/images/bb_03.jpg",
					img2:"../../../../../static/images/cc_03.jpg",
					img3:"../../../../../static/images/aa_03.jpg",
					p:"装修后"
				},
			]
		}
	},
    methods: {
        hand() {
            this.$router.back();
        },
        handa() {
            this.$router.push('/previous');
        }
    },
    mounted() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 2000,
                stopOnLastSlide: false,
                disableOnInteraction: true
            },
            pagination: {
                el: '.swiper-pagination',
				// bulletClass:'swiper-pagination-bullet my-bullet'
            }
        });
    }
};
</script>

<style scoped>
.zhuang {
    background: #f3f2f0;
    height: 100%;
    display: flex;
    flex-direction: column;
}
#zhuangxiu {
    width: 100%;
    height: 0.5rem;
    display: flex;
    align-items: center;
}
#zhuangxiu > h2 {
    font-size: 34px;
    margin: 15px auto;
    line-height: 44px;
}
#zhuangxiu > p {
    font-size: 30px;
    position: relative;
    left: 20px;
    color: #666666;
}

.zhuang > section {
    flex: 1;
    overflow: auto;
}

/* banner */
.banner {
    display: flex;
    justify-content: center;
}
.banner > img {
    width: 7.02rem;
    height: 3.14rem;
    padding-top: 30px;
}

#zhuangqian {
    width: 100%;
    height: 3.26rem;
}
#zhuangqian > p {
    font-size: 34px;
    padding-top: 69px;
    padding-left: 24px;
    display: block;
    font-weight: 900;
    color: #000000;
}
#zhuangqian > #img {
    padding-top: 42px;
    display: flex;
    overflow-x: auto;
    /* justify-content: space-around; */
}
#zhuangqian > #img > .com {
    display: flex;
    justify-content: space-around;
}
#zhuangqian > #img > .com > img {
    margin: 0 0.17rem;
}
.swiper-container {
    width: 100%;
    height: 3.14rem;
}
.swiper-pagination>span{
	width: 40px !important;
    height: 8px;
    display: inline-block;
    border-radius: 0;
    background: #000;
    opacity: 0.2;
}
</style>

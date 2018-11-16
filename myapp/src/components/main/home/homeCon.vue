<template>
	<div id="homeCon">
		<div class="nav">
				<ul>
					<li @click="handleGoToCa()">
						<img src="static/home/icon_sy_zw.png" alt="">
						<p>整屋案例</p>
					</li>
					<li @click="handleGoToFin()">
						<img src="static/home/icon_sy_zx.png" alt="">
						<p>装修攻略</p>
					</li>
					<li @click='handleGoToDw()'>
						<img src="static/home/icon_sy_jz.png" alt="">
						<p>居住升级</p>
					</li>
					<li @click="handleGoToAc()">
						<img src="static/home/icon_sy-mf.png" alt="">
						<p>免费试用</p>
					</li>
				</ul>
		</div>
		<div class="topic">
			<div class="topic_l" @click="handleGoToDi()">
				<h2>话题</h2>
				<p>大家都在讨论</p>
				<i></i>
				<span></span>
				<em></em>
			</div>
			<div class="topic_r" @click="handleGoToVi()">
				<h3>视频</h3>
				<p>分享体验</p>
				<img src="static/images/shipin1.png" alt="">
			</div>			
		</div>
		<div class="family">
			
			<p>DIY</p>
			<span>我的</span>
			<p>理想家</p>
			
		</div>
	</div>
</template>

<script>
export default {
    methods: {
        handleGoToDw() {
            this.$router.push('/home/dwell/dwell');
        },
        handleGoToFin() {
            this.$router.push('/finish');
        },
        handleGoToAc() {
            this.$router.push('/freetrial/activity');
        },
        handleGoToCa() {
            this.$router.push('/home/house/houseCase');
        },
        handleGoToDi() {
            this.$router.push('/discuss/discuss');
        },
        handleGoToVi() {
            this.$router.push('/video/videolive');
        }
    }
};
</script>

<style scoped>
#homeCon {
    width: 100%;
    background: #f3f2f0;
}
/* 导航 */

.nav {
    width: 100%;
    height: 2.18rem;
    display: flex;
    background: #f3f2f0;
}
.nav > ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.9rem;
}
/* .nav>ul>li{

	width: 1rem;
	height: 1rem;
} */
.nav > ul > li > img {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    padding-bottom: 0.11rem;
    padding-left: 0.17rem;
}
.nav > ul > li > p {
    font-size: 26px;
    color: #0f0f0d;
}

.topic {
    width: 100%;
    height: 2.28rem;
    display: flex;
    padding: 0 0.24rem;
    justify-content: space-between;
    margin-bottom: 0.3rem;
    position: relative;
}

.topic > .topic_l > i {
    display: block;
    width: 0.93rem;
    height: 0.93rem;
    border-radius: 50%;
    background: #f0bd14;
    box-shadow: 5px 5px 3px #deb947;
    position: absolute;
    left: 2.6rem;
    top: 1.3rem;
}
.topic > .topic_l > span {
    display: block;
    width: 1.7rem;
    border-bottom: 2px solid #313131;
    padding-top: 0.7rem;
}
.topic > .topic_l > em {
    display: block;
    width: 0.93rem;
    height: 0.93rem;
    border: 4px solid #e4b415;
    border-radius: 50%;
    position: absolute;
    left: 2.6rem;
    top: 1rem;
}
.topic > .topic_l {
    width: 3.36rem;
    height: 2.28rem;
    background: #fdd758;
    border-radius: 10%;
    padding-top: 0.32rem;
    padding-left: 0.45rem;
}
.topic > .topic_l > h2 {
    font-size: 30px;
    color: #0f0f0d;
}
.topic > .topic_l > p {
    font-size: 24px;
    color: #0f0f0d;
    padding-top: 0.18rem;
}
.topic > .topic_r {
    width: 3.36rem;
    height: 2.28rem;
    background: #c8e2f3;
    border-radius: 10%;
    padding-top: 0.32rem;
    padding-left: 0.45rem;
    position: relative;
}
.topic > .topic_r > h3 {
    font-size: 30px;
    color: #0f0f0d;
}
.topic > .topic_r > p {
    font-size: 24px;
    color: #0f0f0d;
    padding-top: 0.18rem;
}
.topic_r > img {
    display: block;
    width: 1.4rem;
    height: 1.35rem;
    position: absolute;
    left: 1.8rem;
    top: 0.89rem;
}

.family {
    width: 7rem;
    height: 2.58rem;
    background: url(../../../../static/images/family.png) no-repeat;
    margin-left: 0.24rem;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.64rem;
}
.family > p {
    font-size: 36px;
    color: #efefec;
    line-height: 36px;
}
.family > span {
    font-size: 24px;
    color: #efefec;
    line-height: 24px;
}
</style>

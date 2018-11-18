<template>
	<div class="aaa">
		<div class="header">
			<span class="iconfont" @click="hannnnnd()">&#xe631;</span>
			<p>兑换积分</p>
		</div>
		
		<div class="lipin">
			<div class="L">
				<img src="../../../../../static/home/icon_sy-mf.png" alt="">
				<p>我的礼品</p>
			</div>
			<div class="R">
				<img src="../../../../../static/home/icon_sy_zx.png" alt="">
				<p>新手指南</p>
			</div>
		</div>
		
		<div class='footer-box'>
			<div class="footer">
				<div class="xiangqing" v-for="(item,index) in ye">
					<img :src="item.img" alt="">
					<p v-html="item.name"></p>
					<i>{{item.i}}</i>
				</div>
			</div>
		</div>	
			
	</div>
</template>

<script>
export default {
    data() {
        return {
            ye: [
                {
                    img: '../../../../../static/images/tupian1@3x.png',
                    name: '赛嘉（seago）<br> 紫外线牙刷消毒器 家庭款',
										i:"$500"
                },
                {
                    img: '../../../../../static/images/tupian2.png',
                    name: 'Comper智能体脂<br> 秤249元代金券',
										i:"$50"
                },
                {
                    img: '../../../../../static/images/tupian3@3x.png',
                    name: '门店20元<br>代金券',
										i:"$20"
                },
                {
                    img: '../../../../../static/images/tupian4.png',
                    name: 'E宠商城新客35元 <br>优惠券',
										i:"$40"
                },
								{
										img: '../../../../../static/images/tupian5@3x.png',
										name: '赛嘉（seago）<br> 紫外线牙刷消毒器 社交款',
										i:"$20"
								},
								{
										img: '../../../../../static/images/tupian6.png',
										name: '浓缩机<br>洗至尊',
										i:"$40"
								},
								{
										img: '../../../../../static/images/tupian7@3x.png',
										name: '限量定制款毛<br> 毡包',
										i:"$40"
								},
								{
										img: '../../../../../static/images/tupian8.png',
										name: '免费领5双红木 <br>筷子',
										i:"$40"
								}
            ]
        };
				
    },
		methods:{
					hannnnnd(){
					this.$router.back();
					}
				}
};
</script>

<style>
.aaa{
	background: #f3f2f0;
	display: flex;
	height:100%;
	flex-direction: column;
}
.header {
    width: 100%;
    height: 0.5rem;
		line-height: 0.5rem;


    display: flex;
    justify-content: center;
}
.header > span {
    font-size: 20px;
    position: relative;
    left: -290px;
}
.header > p {
    font-size: 30px;
}

.lipin {
    /* margin-top: 10px; */
    width: 100%;
    height: 1.53rem;

    border-top: 1px solid black;
    border-bottom: 1px dashed black;
    display: flex;
    justify-content: space-around;
}
/* .L{
	width: 0.3rem;
} */
.lipin > .L > img {
    width: 0.8rem;
    height: 0.8rem;
}
.lipin > .R > img {
    width: 0.8rem;
    height: 0.8rem;
}
.lipin > .L {
    padding-top: 10px;
}
.lipin > .R {
    padding-top: 10px;
}
.lipin > .L > p {
    font-size: 30px;
    margin-top: 10px;
    margin-left: -20px;
}
.lipin > .R > p {
    font-size: 30px;
    margin-top: 10px;
    margin-left: -20px; 
	 
}
.xiangqing {
    width: 3.29rem;
    height: 4.28rem;
		margin-top: 20px;
		
    
}
.xiangqing > img {
    width: 3.29rem;
    height: 3.42rem;
		
}
.xiangqing > p {
    font-size: 28px;
    line-height: 40px;
}
.xiangqing > i{
	position: relative;
	left: 265px;
	top: -80px;
	color: darkred;
	font-size: 30px;
}
/* .xiangqing > i:nth-child(3) {
	position: relative;
	left: 265px;
	top: -70px;
	color: darkred;
	font-size: 30px;
} */
.footer {
    display: flex;
    justify-content: space-around;
	flex-wrap: wrap;
}
.footer-box{
	flex:1;
	overflow: auto;
}
</style>

<template>
	<div>
		<div class="header">
			<span class="iconfont">&#xe631;</span>
			<p>兑换积分</p>
		</div>
		<div class="lipin">
			<div class="L">
				<img src="../../../../../static/home/icon_sy-mf.png" alt="">
				<p>我的礼品</p>
			</div>
			<div class="R">
				<img src="../../../../../static/home/icon_sy-mf.png" alt="">
				<p>我的礼品</p>
			</div>
		</div>
		<div class="footer">
		<div class="xiangqing" v-for="(item,index) in ye">
			<img :src="item.img" alt="">
			<p>{{item.name}}</p>
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
                    img: '../../../../../static/designer/bg1.jpg',
                    name: '赛嘉（seago）<br> 紫外线牙刷消毒器 家庭款'
                },
                {
                    img: '../../../../../static/designer/bg1.jpg',
                    name: '赛嘉（seago）<br> 紫外线牙刷消毒器 家庭款'
                },
                {
                    img: '../../../../../static/designer/bg1.jpg',
                    name: '赛嘉（seago）<br> 紫外线牙刷消毒器 家庭款'
                },
                {
                    img: '../../../../../static/designer/bg1.jpg',
                    name: '赛嘉（seago）<br> 紫外线牙刷消毒器 家庭款'
                }
            ]
        };
    }
};
</script>

<style>
.header {
    width: 100%;
    height: 0.4rem;

    display: flex;
    justify-content: center;
}
.header > span {
    font-size: 15px;
    position: relative;
    left: -290px;
}
.header > p {
    font-size: 20px;
}

.lipin {
    margin-top: 10px;
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
    width: 0.6rem;
    height: 0.6rem;
}
.lipin > .R > img {
    width: 0.6rem;
    height: 0.6rem;
}
.lipin > .L {
    padding-top: 10px;
}
.lipin > .R {
    padding-top: 10px;
}
.lipin > .L > p {
    font-size: 20px;
    margin-top: 10px;
    margin-left: -25px;
}
.lipin > .R > p {
    font-size: 20px;
    margin-top: 10px;
    margin-left: -25px;
}
.xiangqing {
    width: 3.29rem;
    height: 4.28rem;
    background: pink;
}
.xiangqing > img {
    width: 3.29rem;
    height: 3.42rem;
}
.xiangqing > p {
    font-size: 30px;
    line-height: 40px;
}
.footer {
    display: flex;
    justify-content: space-around;
	flex-wrap: wrap;
}
</style>

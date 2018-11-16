<template>
	<div id="activity">
		<div class="act_header">
			<span class="iconfont @click='handleReturn()">&#xe631;</span>
			<h2>试用</h2>
		</div>
		<div class="act_content">
			<div class="act_cont_title">
				<p class="action">活动</p>
				<p @click='handleGoReport()'>报告</p>
			</div>
			<div class="act_cont_flex">
				<div class="act_cont_details">
					<div>
						<img src="../../../../../static/designer/bg1.jpg">
					</div>
					<div>我的家具我做主，优主意定制家具体验</div>
					<div>
						<div>
							<img src="../../../../../static/designer/bg1.jpg">
							<p>ide0007</p>
						</div>
						<div>
							<p>体验评分：</p>
							<span class="iconfont">&#xe676; &#xe676; &#xe676; &#xe676; &#xe676;</span>
						</div>
					</div>
				</div>
				<div class="act_cont_details">
					<div>
						<img src="../../../../../static/designer/bg1.jpg">
					</div>
					<div>我的家具我做主，优主意定制家具体验</div>
					<div>
						<div>
							<img src="../../../../../static/designer/bg1.jpg">
							<p>ide0007</p>
						</div>
						<div>
							<p>体验评分：</p>
							<span class="iconfont">&#xe676; &#xe676; &#xe676; &#xe676; &#xe676;</span>
						</div>
					</div>
				</div>
				<div class="act_cont_details">
					<div>
						<img src="../../../../../static/designer/bg1.jpg">
					</div>
					<div>我的家具我做主，优主意定制家具体验</div>
					<div>
						<div>
							<img src="../../../../../static/designer/bg1.jpg">
							<p>ide0007</p>
						</div>
						<div>
							<p>体验评分：</p>
							<span class="iconfont">&#xe676; &#xe676; &#xe676; &#xe676; &#xe676;</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			handleReturn(){
				this.$router.back();
			},
			handleGoReport(){
				this.$router.push('./report');
			}
		}
	}
</script>

<style scoped>
	/* 免费试用活动样式 */
		#activity {
			background: RGBA(243, 242, 240, 1);
			height: 100%;
			overflow: hidden;
		}	
	
		.act_header {
			width: 100%;
			height: .88rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		
		.act_header>.iconfont {
			font-size: 31px;
			position: fixed;
			top:60px;
			left:28px
		}
		
		.act_header>h2 {
			font-size: 36px;
			line-height: 88px;
		}
		
		.act_content {
			width: 100%;
			height: 12.1rem;
			display: flex;
			flex-direction: column;
		}
		/* 内容区标题 */
		.act_content>.act_cont_title {
			width: 100%;
			height: .72rem;
			display: flex;
			align-items: center;
			
		}
		
		.act_content>.act_cont_title>p {
			line-height: 72px;
			font-size:36px ;
			color:rgba(0,0,0,1);
			margin-left: 50px;
		}
		
		.act_content>.act_cont_title>.action {
			border-bottom: 3px solid orange;
		}
		
		.act_content>.act_cont_flex {
			width: 100%;
			flex: 1;
			overflow: auto;
		}
		/* 内容区图片 */
		.act_content>.act_cont_flex>.act_cont_details {
			width: 100%;
			height: 5rem;
			display: flex;
			flex-direction: column;
			padding: 34px 28px 0 28px;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(1) {
			width: 100%;
			height: 3.3rem;
			margin-bottom: 42px;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(1)>img {
			width: 100%;
			height: 100%;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(2) {
			width: 100%;
			font-size: 30px;
			line-height: 40px;
			color:rgba(15,15,13,1);
			margin-bottom: 24px;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(3) {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(3)>div {
			height:.32rem;
			display: flex;
			align-items: center;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(3)>div:nth-child(1)>img {
			width: .32rem;
			height: .32rem;
			border-radius:50%;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(3)>div:nth-child(1)>p {
			font-size: 20px;
			line-height: 20px;
			margin-left: 20px;
		}
		
		.act_content>.act_cont_flex>.act_cont_details>div:nth-child(3)>div:nth-child(2)>p{
			font-size: 22px;
			line-height: 22px;
		}
</style>

<template>
	<div id="report">
		<div class="header">
			<span class="iconfont">&#xe631;</span>
			<h2>试用</h2>
		</div>
		<div class="content">
			<div class="cont_title">
				<p>活动</p>
				<p class="action">报告</p>
			</div>
			<div class="cont_flex">
				<div>
					<div>
						<img src="../../../../../static/designer/bg1.jpg">
					</div>		
					<p>卓力增压智能挂烫机试用</p>
					<p>价值: <span>2499</span>元 名额/: <span>2</span> 申请: <span>2</span></p>
					<p>立即申请</p>
					<p>距申请结束<span>13</span>天</p>
				</div>
				<div>
					<div>
						<img src="../../../../../static/designer/bg1.jpg">
					</div>		
					<p>卓力增压智能挂烫机试用</p>
					<p>价值: <span>2499</span>元 名额/: <span>2</span> 申请: <span>2</span></p>
					<p>立即申请</p>
					<p>距申请结束<span>13</span>天</p>
				</div>
				<div>
					<div>
						<img src="../../../../../static/designer/bg1.jpg">
					</div>		
					<p>卓力增压智能挂烫机试用</p>
					<p>价值: <span>2499</span>元 名额/: <span>2</span> 申请: <span>2</span></p>
					<p>立即申请</p>
					<p>距申请结束<span>13</span>天</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style scoped>
		/* 免费试用报告样式 */
			#report {
				background: RGBA(243, 242, 240, 1);
				height: 100%;
				overflow: hidden;
			}	
		/* 头部 */
			.header {
				width: 100%;
				height: .88rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			
			.header>.iconfont {
				font-size: 31px;
				position: fixed;
				top:60px;
				left:28px
			}
			
			.act_header>h2 {
				font-size: 36px;
				line-height: 88px;
			}
			
			.content {
				width: 100%;
				height: 12.1rem;
				display: flex;
				flex-direction: column;
			}
			/* 内容区标题 */
			.content>.cont_title {
				width: 100%;
				height: .72rem;
				display: flex;
				align-items: center;
				
			}
			
			.content>.cont_title>p {
				line-height: 72px;
				font-size:36px ;
				color:rgba(0,0,0,1);
				margin-left: 50px;
			}
			
			.content>.cont_title>.action {
				border-bottom: 3px solid orange;
			}
			
			.content>.cont_flex {
				width: 100%;
				flex: 1;
				overflow: auto;
			}
			
			.content>.cont_flex>div {
				width: 100%;
				height: 4.8rem;
				display: flex;
				flex-direction: column;
				padding: 34px 28px 0 28px;
				position: relative;
			}
			
			.content>.cont_flex>div>div {
				width: 100%;
				height: 3.3rem;
				margin-bottom: 42px;
			}
			/* 内容区图片 */
			.content>.cont_flex>div>div>img {
				width: 100%;
				height: 100%;
				border-radius:10px;
				margin-bottom: 45px;
			}
			
			.content>.cont_flex>div>p:nth-of-type(1) {
				font-size: 30px;
				line-height: 30px;
				margin-bottom: 16px;
				color: RGBA(3, 3, 3, 1)
			}
			
			.content>.cont_flex>div>p:nth-of-type(2) {
				font-size: 26px;
				line-height: 26px;
				color: #FF91908E;
			}
			
			.content>.cont_flex>div>p:nth-of-type(3) {
				width: 1.66rem;
				height: .56rem;
				line-height: 56px;
				background:rgba(255,150,47,1);
				border-radius:10px;
				text-align: center;
				position: absolute;
				right: 28px;
				bottom: 0;
			}
			
			.content>.cont_flex>div>p:nth-of-type(4) {
				width: 2.12rem;
				height: .56rem;
				line-height: 56px;
				background:rgba(255,150,47,1);
				border-radius:10px;
				text-align: center;
				position: absolute;
				top: 34px;
				left: 28px;
			}
</style>

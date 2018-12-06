<template>
	<div class="choiceT">
		<div class="choice">
			<h2>为你精选</h2>
		</div>
		<div class="choBotom">
			<img src="../../../../static/images/choe.png" alt="">
			<p>泡沫房价计算器，立即测试！</p>
		</div>

		<div class="debate">
			<h3>大家都在讨论</h3>
			<i class="iconfont" @click="handleGoToPr()">查看更多 &#xe665;</i>
		</div>
		<div class="debate-n" @click="handleGoToPr()">
			<div class="debate-r" >
				<img src="../../../../static/images/chh.png" alt="">
				<div class="debate_bot">
					<p>687人参与讨论</p>
				</div>
			</div>
			<div class="debate-r">
				<img src="../../../../static/images/chh.png" alt="">
				<div class="debate_bot">
					<p>687人参与讨论</p>
				</div>
			</div>
			<div class="debate-r">
				<img src="../../../../static/images/chh.png" alt="">
				<div class="debate_bot">
					<p>687人参与讨论</p>
				</div>
			</div>
		</div>

		<!-- 话题讨论 -->
		<div class="topic1" @click="handleGoToDis()">
			<h3>话题讨论</h3>
			<p>空调+净化器VS净界空调,你会怎么选？</p>
			<div class="take">
				<img src="static/images/take4.png">
				<img src="static/images/take3.png">
				<img src="static/images/take4.png">
				<img src="static/images/take1.png">
				<span>他们在参与</span>
			</div>
		</div>
		
		<!-- 详情 -->
		<div class="action">
			<img src="../../../../static/images/action.png">
			<p>有奖调查 整屋装修您经历了哪些坑？</p>
		</div>
		
		<div class="action1">
			<img src="../../../../static/images/action1.png">
			<p>为什么开方式厨房如此受欢迎？</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			handleGoToDis(){
				this.$router.push({
          name:'answer'
        })
			},
			
			handleGoToPr(){
				this.$router.push('/home/problem')
			},
		}
	}
</script>

<style scoped>
	.choiceT {
		padding: 0.64rem .25rem 0;
		background:#f3f2f0 ;
	}

	.choice {
		width: 1.9rem;
		height: .38rem;
		margin-bottom: .29rem;
	}

	.choice>h2 {
		font-size: 36px;
		color: #0F0F0D;
		line-height: 36px;
	}

	.choBotom {
		width: 7rem;
		height: 2.58rem;

		/* margin-left: .24rem; */
		border-radius: 5%;
		margin-bottom: .64rem;
	}

	.choBotom>img {
		display: block;
		width: 7rem;
		height: 2.58rem;
		border-radius: 5%;
		padding-bottom: .2rem;
	}

	.choBotom>p {
		display: block;
		font-size: 30px;
		color: #2E2E2B;
		padding-bottom: .54rem;
	}

	.debate {
		display: flex;
		justify-content: space-between;
	}

	.debate>h3 {
		font-size: 36px;
		color: #0F0F0D;
	}

	.debate>i {
		color: #2E2E2B;
		font-size: 24px;
	}

	.debate-n {
		display: flex;
		margin-top: .29rem;
		width: 7rem;
		height: 1.6rem;

		display: flex;
		justify-content: space-between;
	}

	.debate-r {
		position: relative;

	}

	.debate_bot {
		display: flex;
		width: 2.17rem;
		height: .33rem;
		background: #666666;
		opacity: 0.5;
		position: absolute;
		left: 0;
		top: 1.26rem;
		justify-content: center;
		align-items: center;
		border-radius: 5%;
	}

	.debate_bot>p {

		font-size: 20px;
		color: #FCFCF9;
	}


	/* 话题讨论 */
	.topic1 {
		width: 7rem;
		height: 2.58rem;
		display: flex;
		margin-top: .58rem;
		border: 8px solid #f0d7d2;
		border-radius: 3%;
		align-items: center;
		flex-direction: column;
		padding-top: .31rem;
	}

	.topic1>h3 {
		display: block;
		font-size: 24px;
		color: #0F0F0D;
		padding-bottom: .2rem;
	}

	.topic1>p {
		font-size: 22px;
		color: #0F0F0D;
		display: block;
		padding-bottom: 0.5rem;

	}
	.topic1>.take{
		display: flex;
		
	}
	.topic1>.take>img{
		display: block;
		width: .48rem;
		height: .48rem;
	}
	.topic1>.take>span{
		display: block;
		font-size: 22px;
		color: #0F0F0D;
		padding: .1rem .2rem;
	}
	
	
	/* 详情 */
	.action{
		width: 7rem;
		height: 2.58rem;
		margin-top: .56rem;
	}
	.action>p{
		height: .34rem;
		display: block;
		font-size: 30px;
		color: #0F0F0D;
		margin-top: .2rem;
	}
	.action1{
		width: 7rem;
		height: 2.58rem;
		margin-top:1.3rem;
	}
	.action1>p{
		height: .34rem;
		display: block;
		font-size: 30px;
		color: #0F0F0D;
		margin-top: .2rem;
	}
</style>

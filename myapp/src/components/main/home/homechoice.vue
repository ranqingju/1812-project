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
			<i class="iconfont">查看更多 &#xe665;</i>
		</div>
		<div class="debate-n">
			<div class="debate-r">
				<img src="../../../../static/images/chh.png" alt="">
				<p>687人参与讨论</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	.choiceT {
		padding: 0 .25rem;
	}

	.choice {
		width: 1.9rem;
		height: .38rem;
		margin-bottom: .29rem;
	}

	.choice>h2 {
		/* padding-left: .25rem; */
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
		height:1.6rem;
		background: red;
	}
</style>

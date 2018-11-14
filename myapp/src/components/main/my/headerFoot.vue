<template>
	<div id="header_f">
		<div @click='handleGoToWe()'>
			<span class="iconfont">&#xe603;</span>
			<p>会员福利</p>
		</div>
		<div>
			<span class="iconfont">&#xe61c;</span>
			<p>获取积分</p>
		</div>
		<div>
			<span class="iconfont">&#xe604;</span>
			<p>兑换积分</p>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			handleGoToWe() {
				this.$router.push('/my/weal');
			}
		}
	}
</script>

<style scoped>
	#header_f {
		width: 100%;
		height: 2.2rem;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	#header_f>div {
		width: .96rem;
		height: 1.02rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between
	}

	#header_f>div>.iconfont {
		font-size: 66px;
		line-height: 66px;
	}

	#header_f>div>span {
		width: .66rem;
		height: .66rem;
	}

	#header_f>div>p {
		font-size: 24px;
		line-height: 24px;
		color: #34343D
	}
</style>

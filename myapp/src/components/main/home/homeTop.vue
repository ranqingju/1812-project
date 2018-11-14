<template>
	<div class="home_top">
		<div class="logo">
			<img src="static/images/logo.png" alt="">
		</div>
		<div class="logo_r">
			<span class="iconfont">&#xe606;</span>
			<span class="iconfont">&#xe652;</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped>
	.home_top {
		width: 100%;
		height: .88rem;
		display: flex;
		justify-content: space-between;
		padding: 0 .55rem;
		align-items: center;
		border-bottom: 2px solid #E6E6E3;
		/* position: fixed;
	left: 0;
	top: .4rem; */
		background: #f3f2f0;
	}

	.home_top>.logo {
		display: flex;
		height: .88rem;
		width: 3rem;
		align-items: center;
	}

	.home_top>.logo>img {
		width: 2rem;
		height: .4rem;
	}

	.home_top>.logo_r>span:nth-child(1) {
		font-size: 36px;
		margin-right: .2rem;
	}

	.home_top>.logo_r>span:nth-child(2) {
		font-size: 30px;
	}
</style>

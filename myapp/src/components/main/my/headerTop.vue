<template>
	<div id="header_t">
		<div>
			<div>
				<span></span>
				<p>关注</p>
				<span></span>
			</div>
			<p>20</p>
		</div>
		<div>
			<img src="static/login/img_login.jpg">
			<h2>一枚小匠</h2>
		</div>
		<div>
			<div>
				<span></span>
				<p>积分</p>
				<span></span>
			</div>
			<p>20</p>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	#header_t {
		width: 100%;
		height: 3rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#header_t>div:nth-child(1) {
		width: .86rem;
		height: .58rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-right: .6rem;

	}

	#header_t>div:nth-child(1)>div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}

	#header_t>div>div>span {
		display: block;
		width: .04rem;
		height: .04rem;
		background: rgba(55, 54, 53, 1);
		border-radius: 50%;
	}

	#header_t>div>div>p {
		color: #34343D;
		font-size: 28px;
		line-height: 28px;
	}

	#header_t>div>p {
		font-size: 24px;
		line-height: 24px;
		color: #666666
	}

	#header_t>div:nth-child(2) {
		width: 1.3rem;
		height: 1.3rem;
	}

	#header_t>div:nth-child(2)>img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		border: 5px solid #FFFFFF;
	}

	#header_t>div:nth-child(2)>h2 {
		width: 1.41rem;
		height: .34rem;
		font-size: 34px;
		line-height: 34px;
		font-weight: 500;
		color: rgba(52, 52, 61, 1);
		position: fixed;
		top: 3.04rem;
		left: 3.05rem;
	}

	#header_t>div:nth-child(3) {
		width: .86rem;
		height: .58rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		margin-left: .6rem;
	}

	#header_t>div:nth-child(3)>div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
</style>

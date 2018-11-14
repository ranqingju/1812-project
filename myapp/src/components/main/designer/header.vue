<template>
	<div id="header">
		<div class="header_up">
			<div>设计师</div>
			<div class="iconfont">
				&#xe606;
			</div>
		</div>
		<div class="header_down">
			<div>
				<p>设计报价</p>
				<span class="iconfont">
					&#xe653;
				</span>
			</div>
			<div>
				<p>所在地区</p>
				<span class="iconfont">
					&#xe653;
				</span>
			</div>
			<div>
				<p>只看同城</p>
				<input type="checkbox" value=""></input>
			</div>
		</div>
	</div>
</template>

<script>

</script>

<style scoped>
	/* 设计师头部整体样式 */
	#header {
		width: 100%;
		height: 1.84rem;
		background: rgba(243, 242, 240, 1);
		display: flex;
		flex-direction: column;
	}

	/* 上半部样式 */
	#header>.header_up {
		width: 100%;
		height: .88rem;
		justify-content: center;
		display: flex;
		font-size: 36px;
		position: relative;
	}

	#header>.header_up>div:nth-child(1) {
		color: #34343D;
		line-height: 88px;
		font-weight: 600;
	}

	#header>.header_up>div:nth-child(2) {
		position: absolute;
		left: 6.89rem;
		top: .26rem;

	}

	#header>.header_up>.iconfont {
		font-size: 44px;
		line-height: .44rem;

	}

	/* 下半部样式 */
	#header>.header_down {
		width: 100%;
		height: .96rem;
		display: flex;
		justify-content: space-around;
		border-bottom: 1px solid #C6C6C6;

	}

	#header>.header_down>div {
		display: flex;
		align-items: center;
	}

	#header>.header_down>div>p {
		font-size: 26px;
		color: #000
	}

	#header>.header_down>div:nth-child(3)>input {
		width: 18px;
		height: 18px;
	}
</style>

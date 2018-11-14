<template>
	<div id="lists">
		<div>
			<div>
				<span class="iconfont">&#xe613;</span>
				<p>草稿箱</p>
			</div>
			<div>
				<span class="iconfont">&#xe625;</span>
				<p>我的整屋案例</p>
			</div>
			<div>
				<span class="iconfont">&#xe63d;</span>
				<p>我的话题讨论</p>
			</div>
		</div>
		<div>
			<div>
				<span class="iconfont">&#xe633;</span>
				<p>我的收藏</p>
			</div>
			<div>
				<span class="iconfont">&#xe608;</span>
				<p>我的试用</p>
			</div>
			<div>
				<span class="iconfont">&#xe66a;</span>
				<p>我的文章</p>
			</div>
		</div>
		<div>
			<div>
				<span class="iconfont">&#xe644;</span>
				<p>我的小区</p>
			</div>
			<div>
				<span class="iconfont">&#xe6ee;</span>
				<p>设置</p>
			</div>
			<div>
				<span class="iconfont">&#xe624;</span>
				<p>申请设计师认证</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped>
	/* 我的页面样式 */
	#lists {
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: column;
		background: #fff;
	}

	#lists>div {
		width: 100%;
		height: 2rem;
		display: flex;
		justify-content: space-around;
		align-items: flex-end;
	}

	#lists>div>div {
		height: 1.02rem;
		width: 1.8rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}

	#lists>div>div>span {
		width: .6rem;
		height: .6rem;
	}

	#lists>div>div>.iconfont {
		font-size: 60px;
		line-height: 60px;
	}

	#lists>div>div>p {
		color: #34343D;
		font-size: 24px;
	}
</style>

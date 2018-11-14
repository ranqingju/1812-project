<template>
	<div class="wealTop">
		<i class="iconfont"  @click='handleReturn()'>&#xe631;</i>
		<h2>会员福利</h2>
	</div>
</template>

<script>
	export default {
		methods:{
			handleReturn(){
				this.$router.back();
			}
		}
	}
</script>

<style scoped>
	/* 顶部 */
	.wealTop{
		width: 100%;
		height: .88rem;
		background:#f3f2f0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		border-bottom: 2px solid #969494;
		
	}
	.wealTop>h2{
		font-size: 36px;
		color: #34343D;
	}
	.wealTop>i{
		font-size: 30px;
		display: block;
		position: absolute;
		left:.25rem
	}
</style>

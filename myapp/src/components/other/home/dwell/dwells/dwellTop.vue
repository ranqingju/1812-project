<template>
	<div class="dwellTop">
		<i class="iconfont" @click='handleReturn()'>&#xe631;</i>
		<h2>居住升级</h2>
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

<style>
	.dwellTop{
		height: .88rem;
		display: flex;
		justify-content: center;
		position: relative;
		align-items: center;
		background:#f3f2f0
	}
	.dwellTop>i{
		display: block;
		font-size: 30px;
		position: absolute;
		left:.28rem ;
		color: #6D6D6C;
	}
	.dwellTop>p{
		font-size: 36px;
		color: #030303;
	}
</style>

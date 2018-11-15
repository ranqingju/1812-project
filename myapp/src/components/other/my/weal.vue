<template>
	<div class="weal">
		<wealTop-com></wealTop-com>
		
		<div class="wealss">
			<wealBot-com></wealBot-com>
		</div>
	</div>
</template>

<script>
	import wealTop from "./weals/wealTop"
	import wealBot from "./weals/wealBot"
	export default {
		components:{
			"wealTop-com":wealTop,
			"wealBot-com":wealBot
		}
		
	}
</script>

<style scoped>
	.weal{
		display: flex;
		height: 100%;
		flex-direction: column;
	}
	.wealss{
		flex: 1;
		overflow: auto;
		background:#f3f2f0
	}
</style>

<template>
	<div class="page home">
		<homeTop-com></homeTop-com>
		<div class='home_center'>
			<homeCon-com></homeCon-com>
			<homechoice-com></homechoice-com>
		</div>

	</div>
</template>

<script>
	import homeTop from "./home/homeTop"
	import homeCon from "./home/homeCon"
	import homechoice from "./home/homechoice"
	export default {
		components: {
			"homeTop-com": homeTop,
			"homeCon-com": homeCon,
			"homechoice-com": homechoice
		}
	}
</script>

<style scoped>
	.home_center {
		flex: 1;
		overflow: auto;
		background:#f3f2f0
	}
</style>

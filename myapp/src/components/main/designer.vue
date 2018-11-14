<template>
	<div class='page designer'>
		<header-com></header-com>
		<center-com></center-com>
	</div>
</template>

<script>
	import header from "./designer/header";
	import center from "./designer/center";
	export default {
		name: "designer",
		components:{
			"header-com":header,
			"center-com":center
		}
	}
</script>

<style scoped>

</style>

<template>
  <div class="page my">
		<headertop-com></headertop-com>
		<headerfoot-com></headerfoot-com>
		<list-com></list-com>
  </div>
</template>

<script>
	import headertop from "./my/headerTop";
	import headerfoot from "./my/headerFoot";
	import list from "./my/list";
  export default {
    name: "my",
		components:{
			"headertop-com":headertop,
			"headerfoot-com":headerfoot,
			"list-com":list
		}
  }
</script>

<style scoped>
	.my{
		background: #feda44;
	}
</style>

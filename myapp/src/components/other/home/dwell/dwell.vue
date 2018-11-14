<template>
	<div class="dwell">
		<dwellTop-com></dwellTop-com>
		<div class="dwell_bom">
			<bannav-com></bannav-com>
		</div>
	</div>
</template>

<script>
	import dwellTop from "./dwells/dwellTop"
	import bannav from "./dwells/bannav"
	
	export default {
		components:{
			"dwellTop-com":dwellTop,
			"bannav-com":bannav,
		}
	}
</script>

<style>
	.dwell{
		display: flex;
		height: 100%;
		flex-direction: column;
	}
	.dwell_bom{
		flex: 1;
		overflow: auto;
		background:#f3f2f0
	}
</style>

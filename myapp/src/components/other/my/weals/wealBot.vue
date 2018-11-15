<template>
	<div class="wealBot">
		<div class="headline">
			<h3>精选权益</h3>
		</div>


		<div class="matterT">
			<div class="matter" v-for="(item,index) in Mat">
				<img :src="item.img">
				<span>{{item.name}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				Mat: [{
						img: "static/designer/mat_03.jpg",
						name: "恒洁智能 卫浴升级改造招募令"
					},
					{
						img: "static/designer/mat_03.jpg",
						name: "恒洁智能 卫浴升级改造招募令"
					},
					{
						img: "static/designer/mat_03.jpg",
						name: "恒洁智能 卫浴升级改造招募令"
					},
					{
						img: "static/designer/mat_03.jpg",
						name: "恒洁智能 卫浴升级改造招募令"
					},
					{
						img: "static/designer/mat_03.jpg",
						name: "恒洁智能 卫浴升级改造招募令"
					},
					
					{
						img: "static/designer/mat_03.jpg",
						name: "恒洁智能 卫浴升级改造招募令"
					},
				]
			}
		}
	}
</script>

<style>
	.wealBot {
		padding: 0 .24rem;
		height: 100%;
		background: #f3f2f0;

	}

	.wealBot>.headline {
		padding-top: .32rem;
		padding-bottom: .19rem;
	}

	.wealBot>h2 {
		display: block;
		font-size: 30px;
		color: #34343D;
	}

	.wealBot>.matterT {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	.matterT>.matter>img {
		display: block;
		width: 3.3rem;
		height: 2rem;
		padding-bottom: .32rem;
		position: relative;
	}
	.matterT>.matter{
		position: relative;
	}
	.matterT>.matter>span{
		display: block;
		width: 3.3rem;
		height: .38rem;
		line-height: .38rem;
		font-size: 22px;
		text-align: center;
		color: #fff;
		background: #4b4b48;
		opacity: 0.7;
		position: absolute;
		top:1.28rem
	}
	
</style>

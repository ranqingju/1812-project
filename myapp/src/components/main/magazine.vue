<template>
	<div id="notes" class='page'>

		<div class="notes_top">
			<span>杂志</span>
		</div>

		<div class="wyx">

			<div class="notes_bom">
				<!-- <h2>2018</h2> -->
				<div class="notes_n" v-for="(item,index) in navNot">
					<img :src="item.img">
					<p>{{item.title}}</p>
				</div>
			</div>

		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				navNot: [{
						img: "../../static/img/maga1.jpg",
						title: "11月上刊"
					},
					{
						img: "../../static/img/maga1.jpg",
						title: "11月上刊"
					},
					{
						img: "../../static/img/maga1.jpg",
						title: "11月上刊"
					},
					{
						img: "../../static/img/maga1.jpg",
						title: "11月上刊"
					},
					{
						img: "../../static/img/maga1.jpg",
						title: "11月上刊"
					},
					{
						img: "../../static/img/maga1.jpg",
						title: "11月上刊"
					}
				]
			}
		}
	}
</script>

<style scoped>
	/* 大盒子 */
	#notes {
		background: rgba(243, 242, 240, 1);
	}


	/* 头部文字 */
	#notes>.notes_top {
		width: 100%;
		height: .88rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.notes_top>span {
		font-size: 36px;
		font-weight: 800;
		color: #0F0F0D;
	}


	#notes>.wyx {
		flex: 1;

		/* height: 1100px; */
		overflow: auto;
		/* width:100%; */

	}

	/* #notes>.wyx>.notes_bom>h2{
	position: fixed;
	left: .62rem;
	top: 1.07rem;
	color: #BDBDBE;
	font-size: 36px;
} */
	/* 杂志内容大盒子 */
	#notes>.wyx>.notes_bom {
		padding-top: .66rem;
		padding-left: .6rem;
		padding-right: .6rem;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;

	}

	/* 单块内容盒子 */
	.notes_bom>.notes_n {
		width: 2.4rem;
		height: 3.78rem;
		box-shadow: 8px 5px 3px #d7d2c8;
		margin-bottom: .6rem;
	}

	/* 图片宽高 */
	.notes_bom>.notes_n>img {
		width: 2.4rem;
		height: 3.1rem;
		padding-bottom: .2rem;
	}

	.notes_bom>.notes_n>p {
		display: block;
		font-size: 30px;
		color: #0F0F0D;
	}
</style>

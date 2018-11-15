<template>
	<div class="bann">
		<div class="banner">
			<img src="static/home/banner.png">
		</div>

		<div class="navss">
			<div class="navs">
				<ul>
					<li :class="index==0?'active':''" 
					v-for="(item,index) in navsR">
						<span>{{item.name}}</span>
					</li>
				</ul>
			</div>
		</div>
		
		<div class="casus" v-for="(item,index) in casusR">
			<div class="casus_bom">
				<img :src="item.img">
				<p>{{item.name}}</p>
				<span>{{item.title}}</span>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				navsR: [{
						name: "全部"
					},
					{
						name: "好物种草"
					},
					{
						name: "收纳支招"
					},
					{
						name: "细节控"
					},
					{
						name: "小改造"
					}
				],
				casusR:[
					{
						img:"static/home/dewll1.png",
						name:"一千个家庭，就有一千种阳台",
						title:"一千个读者就有一千个哈姆雷特。一千个家庭就有一千个阳..."
					},
					{
						img:"static/home/dewll1.png",
						name:"一千个家庭，就有一千种阳台",
						title:"一千个读者就有一千个哈姆雷特。一千个家庭就有一千个阳..."
					}
				],
				
			}
		}
	}
</script>

<style>
	.bann {
		width: 100%;
	}

	.banner {
		width: 100%;
		height: 3.2rem;
	}

	.navss {
		padding: 0 .28rem;
	}

	.navs {
		width: 7rem;
		height: .6rem;
		margin-top: .31rem;
	}

	.navs>ul {
		display: flex;
		justify-content: space-between;
	}

	.navs>ul>li {
		height: 0.5rem;
	}

	.navs>ul>.active {
		border-bottom: 4px dashed orange;
	}

	.navs>ul>li>span {
		font-size: 30px;
		color: #020202;
	}
	
	
	.casus{
		display: flex;
		margin: .5rem .28rem;
	}
	.casus>.casus_bom>img{
		width: 7rem;
		height: 3.96rem;
		
	}
	.casus>.casus_bom>p{
		padding-top: .31rem;
		font-size: 28px;
		color:#0f0f0d ;
	}
	.casus>.casus_bom>span{
		display: block;
		font-size: 22px;
		color:#a09f9d;
		padding-top: .19rem;
	}
</style>

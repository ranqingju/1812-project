<template>
	<div class="previous">
		
		<div class="header">
			<i class="iconfont" @click="hannd()">&#xe631;</i>
			<img src="static/home/timg.jpg" alt="">
			<p>前期准备</p>
		</div>
		<p class="pp">装修前需要准备什么？前期需做足功课，选定设计方案，了解合同 
		流程,合理安排各种材料的购买顺序，只有做好充分的准备， 施工才不会</p>
		<p class="ppp">必看</p>
		
		<div class="look-box">
			<div class="look" v-for="(item,index) in mustreadList">
				
				<img :src="'http://ceshi.qfjava.cn/'+item.icon" />
				
				<div class="you">
					<h2>{{item.description}}</h2>
					<p>{{item.title}}<i class="iconfont">&#xe665;</i></p>
					<div>
						<img :src="'http://ceshi.qfjava.cn/'+item.image" />
						<i>{{item.ready}}</i>
					</div>
				</div>
				
			</div>
		</div>
		
	</div>
</template>

<script>
import Vuex from 'vuex'
export default {
	data() {
		return {
			navLok:[
				{
					img:"../../../../../static/images/1-2.jpg",
					h2:"有谁比我惨",
					h3:"大叔可以说这两天sky烦",
					i:"热家居"
				},{
					img:"../../../../../static/images/1-2.jpg",
					h2:"有谁比我帅",
					h3:"大叔可以说这两天sky烦",
					i:"冷家居"
					
				},{
					img:"../../../../../static/images/1-2.jpg",
					h2:"有谁比我酷",
					h3:"小哥哥帅帅哒",
					i:"冷兵器"
				}
			]
		}
	},
	computed:{
		...Vuex.mapState({
			mustreadList:state=>state.Finish.mustreadList
		})
	},
	methods:{
		hannd(){
			this.$router.back();
		},
		...Vuex.mapActions({
			getmustread:'Finish/getmustread'
		})
	},
	created(){
		this.getmustread();
	}
};
</script>

<style scoped>
	.previous{
		background: #f3f2f0;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.header{
		height: 3.6rem;
		overflow: hidden;
	}
	.header>img{
    width: 100%;
	}	
	.header>i{
		font-size: 30px;
		color: #000;
		position: absolute;
		left: 25px;
		top: 50px;
    background: rgba(255,255,255,.9);
    border-radius: 50%;
	}
	.header>p{
		font-size: 33px;
		font-weight:900;
		position: absolute;
		left: 40px;
		top: 335px;
    color: #000;
	}
	.pp{
		display: block;
		font-size:24px;
    color: #171717;
		width: 6.9rem;
		padding-left: 33px;
		padding-top:57px ;
	}
	.ppp{
		font-size: 36px;
    color: #171717;
		font-weight: 900;
		padding-left: 30px;
		padding-top: 42px;
	}
	.look{
		width: 100%;
		height: 2rem;
		display: flex;
	}
	
	.look-box{
		flex:1;
		overflow: auto;
	}
	.look-box>.look{
		height:2.85rem;
		width:100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding:0 .24rem;
	}
	.look-box>.look>img{
		margin-right:.4rem;
	}
	.look-box>.look>.you{
		flex:1;
		/* padding-top: .20rem; */
	}
	.look-box>.look>.you>h2{
		padding-bottom: .2rem;;
		font-size:.22rem;
	}
	.look-box>.look>.you>p{
		display: flex;
		font-size: .16rem;
		padding-bottom: .1rem;
		justify-content: space-between;
	}
	.look-box>.look>.you>div{
		display: flex;
		align-items: center;
	}
	.look-box>.look>.you>div>img{
		width:.6rem;
		height:.6rem;
		border-radius: 50%;
	}
</style>

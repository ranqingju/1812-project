<template>
	<div class="zhuang">
		<div id="zhuangxiu">
			<p class="iconfont">&#xe628;</p><h2>装修攻略</h2>
			 
		</div>
		<div id="banner">
			<img src="../../../../../static/images/1.jpg" alt="">
		</div>
		
		<div id="zhuangqian">
			<p>装修前</p>
			<div id="img">
			<img src="../../../../../static/images/2_03.jpg" alt="">
			<img src="../../../../../static/images/3_03.jpg" alt="">
			<img src="../../../../../static/images/4_03.jpg" alt="">
			
		</div>
		
		
		</div>
		<div id="zhuangqian">
			<p>装修中</p>
			<div id="img">
			<img src="../../../../../static/images/2_03.jpg" alt="">
			<img src="../../../../../static/images/3_03.jpg" alt="">
			<img src="../../../../../static/images/4_03.jpg" alt="">
			
		</div>
		
		
		</div>
		<div id="zhuangqian">
			<p>装修后</p>
			<div id="img">
			<img src="../../../../../static/images/2_03.jpg" alt="">
			<img src="../../../../../static/images/3_03.jpg" alt="">
			<img src="../../../../../static/images/4_03.jpg" alt="">
			
		</div>
		
		
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
	.zhuang{
		background: 
#F3F2F0;
		height: 100%;
	}
	#zhuangxiu{
		width: 100%;
		height: 0.5rem;
		background: pink;
		display: flex;
		
		
	}
	#zhuangxiu > h2{
		font-size: 34px;
		margin: 0 auto;
		line-height: 44px;
		
	}
	#zhuangxiu > p{
		font-size: 40px;
		position: relative;
		left: 10px;
		color:#666666 ;
	}
	/* banner */
	#banner{
		display: flex;
		justify-content: center;
		
	}
	#banner> img{
		width: 7.02rem;
		height:3.14rem;
		padding-top: 30px;
		
	}
	
	#zhuangqian{
		width: 100%;
		height: 3.26rem;
		
		
	}
	#zhuangqian> p{
		font-size: 34px;
		padding-top: 69px;
		 padding-left: 24px;
		 display: block;
		 font-weight: 900;
		 color: #000000;
	}
	#zhuangqian>#img{
		padding-top:42px ;
		display: flex;
		justify-content: space-around;
	}
</style>

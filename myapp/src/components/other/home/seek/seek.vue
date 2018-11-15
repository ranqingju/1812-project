<template>
	<div>
		<div class="header">
			<i class="iconfont">&#xe628;</i>
			<img src="../../../../../static/images/1.jpg" alt="">
		
		</div>
		<div class="sk">
				
				
				<div class="fd">
					<span class="iconfont">&#xe606;</span>
					<input type="text" name="" id="" value="点击搜索的内容" >
					<button>搜索</button>
				</div>
				
		</div >
		<h2 class="dj">大家都在搜</h2>
		
		<ul class="navss">
			<li v-for="(item,index) in nav">
				<span>{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
    data() {
		return {
			
		
        nav: [
            {
                title: '床'
            },
            {
                title: '北欧风格'
            },
            {
                title: '台灯'
            },
            {
                title: '卫生间'
            }
        ]
     }
   }
};
</script>

<style scoped>
.header {
    background: #f3f2f0;
    position: relative;
}
.header > img {
    width: 100%;
    height: 4.12rem;
}
.header > i {
    font-size: 30px;

    position: absolute;
    left: 20px;
    top: 10px;
}
.sk {
    display: flex;
    justify-content: center;
}
.fd {
    width: 6.46rem;
    height: 0.88rem;
    margin-top: 7px;
    border: 1px solid #000000;
    position: relative;
    border-radius: 10px;
}
.fd > span {
    font-size: 0.4rem;
    position: absolute;
    left: 20px;
    top: 15px;
}
.fd > input {
    width: 5rem;
    height: 0.86rem;
    margin-left: 60px;
    font-size: 40px;
    border: none;
    color: #bdbdbd;
}
.fd > button {
    width: 0.8rem;
    height: 0.8rem;
    font-size: 0.3rem;
    position: absolute;
    left: 560px;
    top: 4px;
}
.dj {
    margin-top: 40px;
    margin-left: 20px;
    font-size: 42px;
}

.navss{
	
	display: flex;
	justify-content: space-between;
	padding: .37rem .32rem;
}
.navss>li{
	width: 1.57rem;
	height: .6rem;
	background: #F3F2F0;
	border-radius: 5%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.navss>li>span{
	font-size: 24px;
	color: #000;
}
</style>

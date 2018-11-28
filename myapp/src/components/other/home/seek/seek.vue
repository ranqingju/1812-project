<template>
	<div id="b">
		<div class="header">
			<i class="iconfont" @click="hannnd()">&#xe631;</i>
			<img src="../../../../../static/images/1.jpg" alt="">
		</div>
		<div class="sk">
				
				<div class="fd">
					<span class="iconfont">&#xe606;</span>
					<input type="text" name="" id="" placeholder="点击搜索的内容" >
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
        };
    },
    methods: {
        hannnd() {
            this.$router.back();
        }
    }
};
</script>

<style scoped>
#b {
    height: 100%;
    background: #f3f2f0;
}
.header {
    background: #f3f2f0;
    position: relative;
}
input,button{
	outline: none;
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
    border-bottom: 1px solid #000000;
    position: relative;
    border-radius: 10px;
    background: rgba(255,255,255,1);
		top: -0.4rem;
}
.fd > span {
    font-size: 0.4rem;
    position: absolute;
    left: 10px;
    top: 13px;
}
.fd > input {
    width: 5rem;
    height: 0.86rem;
    margin-left: 60px;
    font-size: 30px;
    border: 0;
    outline: none;
		background: transparent;
}
.fd > button {
		border: 0;
    width: 0.8rem;
    height: 0.8rem;
    font-size: 30px;
		color: rgba(30,30,30,1);
    position: absolute;
    left: 560px;
    top: 4px;
		background: transparent;
}
.dj {
    margin-top: 40px;
    margin-left: 20px;
    font-size: 42px;
}

.navss {
    display: flex;
    justify-content: space-between;
    padding: 0.37rem 0.32rem;
}
.navss > li {
    width: 1.57rem;
    height: 0.6rem;
    background: rgba(255,255,255,0.8);
		border: 1px solid #CCCCCC;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.navss > li > span {
    font-size: 24px;
    color: #000;
}
</style>

<template>
	<div id="video">
		<div class="video_name">
			<span class="iconfont" @click='handleReturn()'>&#xe631;</span>
			<h2>视频与直播</h2>
		</div>
		<div class="videos">
			<div class="videos_h">
				<p class="action">视频</p>
				<p>直播</p>
			</div>
			<div class="videos_flex">
				<div class="videos_c" v-for="(item,index) in videoList">
					<video class="myvideo" :src="'http://ceshi.qfjava.cn/'+item.url" controls="controls">
					</video>
					<p>{{item.style}}</p>
				</div>
				<!-- <div class="videos_c">
					<video class="myvideo" src="http://bevavideo-web.beva.cn/a9ad30b1d8a3c25b3e2788ef048e4fe5/5bef6741/abb80adcaf/h480/video.mp4" controls="controls">
					</video>
					<p>读书郎</p>
				</div>
				<div class="videos_c">
					<video class="myvideo" src="http://bevavideo-web.beva.cn/53c9dd765a4565c1a4a90decc04d9231/5bef6848/e18db7b000/h480/video.mp4" controls="controls">
					</video>
					<p>一分钱</p>
				</div>
				<div class="videos_c">
					<video class="myvideo" src="http://bevavideo-web.beva.cn/6372547b9aba419a7ff21e21aa451e12/5bef66e0/275073596f/h480/video.mp4" controls="controls">
					</video>
					<p>小兔子乖乖</p>
				</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import Vuex from 'vuex'
	export default {
		computed:{
			...Vuex.mapState({
				videoList:state=>state.Video.videoList
			})
		},
		methods:{
			handleReturn(){
				this.$router.back();
			},
			...Vuex.mapActions({
				getvideo:'Video/getvideo'
			})
		},
		data(){
			return {
				navs:[
					{
						src:"http://bevavideo-web.beva.cn/c068affe1500ab4a90462e7581e9df91/5bef848d/df8babe8c1/h720/video.mp4",
						p:"小毛驴"
					},
					{
						src:"http://bevavideo-web.beva.cn/a9ad30b1d8a3c25b3e2788ef048e4fe5/5bef6741/abb80adcaf/h480/video.mp4",
						p:"读书郎"
					},
					{
						src:"http://bevavideo-web.beva.cn/53c9dd765a4565c1a4a90decc04d9231/5bef6848/e18db7b000/h480/video.mp4",
						p:"一分钱"
					},
					{
						src:"http://bevavideo-web.beva.cn/6372547b9aba419a7ff21e21aa451e12/5bef66e0/275073596f/h480/video.mp4",
						p:"小兔子乖乖"
					}
				]
			}
		},
		created(){
			this.getvideo();
		}
	}
</script>

<style scoped>
	
		.video_name {
			width: 100%;
			height: .88rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid #666666;
			background: RGBA(255, 255, 255, 1);
		}
		/* iconfont样式 */
		.video_name>.iconfont {
			font-size: 44px;
			line-height: 44px;
			position: fixed;
			top:62px;
			left:25px;
		}
		
		.video_name>h2 {
			font-size: 36px;
			line-height: 36px;
			font-weight:600;
			color:rgba(52,52,61,1);
		}
		
		.videos {
			width: 100%;
			 height: 12.04rem; 
			display: flex;
			flex-direction: column;
			background: RGBA(255, 255, 255, 1);
		}
		
		.videos>.videos_h {
			width: 100%;
			height: .7rem;
			display: flex;
			justify-content: space-around;
			align-items: center;
			
		}
		
		.videos>.videos_h>p {
			width: 1.1rem;
			height: .7rem;
			font-size: 26px;
			line-height: 70px;
			text-align: center;
		}
		
		.videos>.videos_h>.action {
			border-bottom: 5px solid orange;
			color:orange
		}
		
		.videos>.videos_flex {
			flex: 1;
			width: 100%;
			background: RGBA(243, 242, 240, 1);
			overflow: auto;
		}
		/* 视频/直播样式 */
		.videos>.videos_flex>.videos_c {
			width: 100%;
			height: 4.56rem;
			display: flex;
			flex-direction: column;
			padding: 36px 25px 0 25px;
		}
		/* 视频播放器 */
		.videos>.videos_flex>.videos_c>video {
			width: 100%;
			height: 3.2rem;
			object-fit: fill
		}
		
		.videos>.videos_flex>.videos_c>p {
			width: 100%;
			height: 1rem;
			background: rgba(255,255,255,1);
			font-size: 30px;
			line-height: 100px;
	
		}
</style>

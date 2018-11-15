<template>
	<div id="video">
		<div class="video_name">
			<sapn class="iconfont">&#xe631;</sapn>
			<h2>视频与直播</h2>
		</div>
		<div class="videos">
			<div class="videos_h">
				<p class="action">视频</p>
				<p>直播</p>
			</div>
			<div class="videos_flex">
				<div class="videos_c">
					<video class="myvideo" src="http://www.w3school.com.cn/i/movie.ogg" controls="controls">
					</video>
					<p>从前慢</p>
				</div>
				<div class="videos_c">
					<video class="myvideo" src="http://www.w3school.com.cn/i/movie.ogg" controls="controls">
					</video>
					<p>从前慢</p>
				</div>
				<div class="videos_c">
					<video class="myvideo" src="http://www.w3school.com.cn/i/movie.ogg" controls="controls">
					</video>
					<p>从前慢</p>
				</div>
				<div class="videos_c">
					<video class="myvideo" src="http://www.w3school.com.cn/i/movie.ogg" controls="controls">
					</video>
					<p>从前慢</p>
				</div>
				
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		
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
			background: #CACACA;
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
		.videos>.videos_flex>.videos_c>.myvideo {
			width: 100%;
			height: 3.2rem;
		}
		
		.videos>.videos_flex>.videos_c>p {
			width: 100%;
			height: 1rem;
			background: rgba(255,255,255,1);
			font-size: 30px;
			line-height: 100px;
			color:#CCCCCC;
	
		}
</style>

<template>
	<div id="content">
		<div class="content_list" v-for="(item,index) in lists">
			<div class="content_list_up">
				<div>
					<img :src="item.img" />
				</div>
				<div>
					<p>杨冬冬</p>
					<p>
						<span>杭州市</span>
						<span>500-1000</span><span>元/平方米</span>
					</p>
				</div>
			</div>
			<div class="content_list_down">
				<div>
					<img :src="item.img">
				</div>
				<div>
					<img :src="item.img">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				lists: [{
						img: "static/designer/bg1.jpg"
					},
					{
						img: "static/designer/bg1.jpg"
					},
					{
						img: "static/designer/bg1.jpg"
					},
					{
						img: "static/designer/bg1.jpg"
					}
				]
			}
		}
	}
</script>

<style>
	/* 设计师中间内容区样式 */
	#content {
		width: 100%;
		flex: 1;
		overflow: auto;
		background: rgba(243, 242, 240, 1);
		display: flex;
		flex-direction: column;
		padding-left: .23rem;
	}

	#content>.content_list {
		height: 3.38rem;
	}

	#content>.content_list>.content_list_up {
		height: 1.6rem;
		width: 100%;
		display: flex;
		align-items: center;

	}

	#content>.content_list>.content_list_up>div:nth-child(1) {
		width: 100px;
		height: 100px;
		margin-right: .2rem;

	}

	/* 圆形头像样式 */
	#content>.content_list>.content_list_up>div:nth-child(1)>img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	/*姓名样式 */
	#content>.content_list>.content_list_up>div:nth-child(2)>p {
		font-size: 24px;
		line-height: 24px;
		color: #34343D;
		padding-bottom: 14px;
	}

	/* 地区  价格样式 */
	#content>.content_list>.content_list_up>div:nth-child(2)>p>span {
		font-size: 22px;
		line-height: 22px;
		color: #BDBDBE;
	}

	#content>.content_list>.content_list_down {
		width: 100%;
		height: 1.78rem;
		display: flex;
		flex-direction: row;
	}

	/* 展示图样式 */
	#content>.content_list>.content_list_down>div {
		width: 46.6%;
		margin-right: .25rem;
		height: 100%;
	}

	#content>.content_list>.content_list_down>div>img {
		width: 100%;
		height: 100%;
	}
</style>

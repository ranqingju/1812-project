import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/main';
/*首页*/
import Home from '@/components/main/home';
/*杂志*/
import Magazine from '@/components/main/magazine';
/*设计者*/
import Designer from '@/components/main/designer';
/*我的*/
import My from '@/components/main/my';
/*登录*/
import Login from '@/components/other/my/login';
/*注册*/
import Register from '@/components/other/my/register';

/*整屋案例*/
import houseCase from '@/components/other/home/house/houseCase';
/*案列详情页*/ 
import houseCaseList from '@/components/other/home/house/houseCaseList';
/*我的收藏*/
import houseCollect from '@/components/other/home/house/houseCollect';
/*新增案列*/
import newAddCase from '@/components/other/home/house/add/newAddCase';
/*草稿箱*/
import drafts from '@/components/other/home/house/add/drafts';  

/*话题讨论*/
import Discuss from '@/components/other/home/discuss/discuss';
import Discussdetails from '@/components/other/home/discuss/discussdetails';
import Dwell from '@/components/other/home/dwell/dwell';
import Weal from '@/components/other/my/weal';

/*话题收藏*/
import Topic_col from '@/components/other/my/topic_col';

/*我的小区*/
import House_area from '@/components/other/my/house_area';

/*设置*/
import SetUp from '@/components/other/my/setUp';

/*点赞*/
import Thumbs from '@/components/other/my/thumbs';

/*问题*/
import Problem from '@/components/other/home/problem/problem';

/*回答*/
import Answer from '@/components/other/home/problem/answer';

/*电脑做案列*/
import Case from '@/components/other/home/case/case';

/* 视频与直播 */
import VideoLive from '@/components/other/home/video/videolive';

/* 免费试用 */
import Activity from '@/components/other/home/freetrial/activity';
import Report from '@/components/other/home/freetrial/report';

/* 装修攻略 */
import Finish from '@/components/other/home/finish/finish';
// 前期准备
import previous from '@/components/other/home/finish/previous';
// 二级搜索
import seek from '@/components/other/home/seek/seek';

// 积分兑换
import credits from '@/components/other/home/credits/credits';
Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/',
			component: Main,
			children: [{
					path: 'home',
					name: 'home',
					component: Home
				},
				{
					path: 'magazine',
					name: 'magazine',
					component: Magazine
				},
				{
					path: 'designer',
					name: 'designer',
					component: Designer
				},
				{
					path: 'my',
					name: 'my',
					component: My
				}
			]
		},
		{
			path: '/my/login',
			name: 'login',
			component: Login
		},
		{
			path: '/my/register',
			name: 'register',
			component: Register
		},
		{
			path: '/home/house/houseCase',
			name: 'houseCase',
			component: houseCase
		},
		{
			path: '/home/house/houseCaseList',
			name: 'houseCaseList',
			component: houseCaseList
		},
		{
			path:'/home/house/add/newAddCase',
			name:'newAddCase',
			component:newAddCase
		},
		{
			path:'/home/house/add/drafts',
			name:'drafts',
			component:drafts
		},
		{
			path: '/discuss/discuss',
			name: 'discuss',
			component: Discuss
		},
		{
			path: '/discuss/discussdetails',
			name: 'discussdetails',
			component: Discussdetails
		},
		{
			path: '/my/topic_col',
			name: 'topic_col',
			component: Topic_col
		},
		{
			path: '/my/house_area',
			name: 'house_area',
			component: House_area
		},
		{
			path: '/my/setUp',
			name: 'setUp',
			component: SetUp
		},
		{
			path: '/my/thumbs',
			name: 'thumbs',
			component: Thumbs
		},
		{
			path: "/home/problem",
			name: 'problem',
			component: Problem
		},
		{
			path: '/home/house/houseCollect',
			name: 'houseCollect',
			component: houseCollect
		},
		{
			path: '/home/problem/answer',
			name: 'answer',
			component: Answer
		},
		{
			path: '/case/case',
			name: 'case',
			component: Case
		},
		{
			path: '/video/videolive',
			name: 'videolive',
			component: VideoLive
		},
		{
			path: '/freetrial/activity',
			name: 'activity',
			component: Activity
		},
		{
			path: '/freetrial/report',
			name: 'report',
			component: Report
		},
		{
			path: '/home/dwell/dwell',
			name: 'dwell',
			component: Dwell
		},
		{
			path: '/my/weal',
			name: 'weal',
			component: Weal
		},
		{
			path: '/previous',
			name: 'previous',
			component: previous
		},
		{
			path: '/credits',
			name: 'credits',
			component: credits
		},
		{
			path: '/seek',
			name: 'seek',
			component: seek
		},
		{
			path: '/finish',
			name: 'finish',
			component: Finish
		},
		{
			path: '**',
			redirect: '/home'
		}
	]
})

import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
/*首页*/
import Home from '@/components/main/home'
/*杂志*/
import Magazine from '@/components/main/magazine'
/*设计者*/
import Designer from '@/components/main/designer'
/*我的*/
import My from '@/components/main/my'
/*登录*/
import Login from '@/components/other/my/login'
/*注册*/
import Register from '@/components/other/my/register'

/*整屋案例*/
import houseCase from '@/components/other/home/house/houseCase';
import houseCaseList from '@/components/other/home/house/houseCaseList';

/*话题讨论*/
import Discuss from '@/components/other/home/discuss/discuss'
import Discussdetails from '@/components/other/home/discuss/discussdetails'

/*话题收藏*/
import Topic_col from '@/components/other/my/topic_col'

/*我的小区*/
import House_area from '@/components/other/my/house_area'

/*设置*/
import SetUp from '@/components/other/my/setUp'

/*点赞*/
import Thumbs from '@/components/other/my/thumbs'

/*问题*/
import Problem from '@/components/other/home/problem/problem'

/*回答*/
import Answer from '@/components/other/home/problem/answer'


/*电脑做案列*/
import Case from '@/components/other/home/case/case'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      component: Main,
      children: [
        {
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
      path: '/house/houseCase',
      name: 'houseCase',
      component: houseCase
    },
    {
      path: '/home/house/houseCaseList',
      name: 'houseCaseList',
      component: houseCaseList
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
      path: '/home/problem/answer',
      name: 'answer',
      component: Answer
    },
    {
      path:'/case/case',
      name:'case',
      component:Case
    },
    {
      path: '**',
      redirect: '/home'
    },
    
  ]
})

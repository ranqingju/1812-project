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
import houseCaseList from '@/components/other/home/house/houseCaseList';
/*我的收藏*/
import houseCollect from '@/components/other/home/house/houseCollect';

/*话题讨论*/
import Discuss from '@/components/other/home/discuss/discuss';
import Discussdetails from '@/components/other/home/discuss/discussdetails';


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
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home/house/houseCase',
      name: 'houseCase',
      component: houseCase
    },
    {
      path:'/home/house/houseCaseList',
      name:'houseCaseList',
      component:houseCaseList
    },
    {
      path:'/home/house/houseCollect',
      name:'houseCollect',
      component:houseCollect
    },
    {
      path:'/discuss/discuss',
      name:'discuss',
      component:Discuss
    },
    {
      path:'/discuss/discussdetails',
      name:'discussdetails',
      component:Discussdetails
    }
  ]
})

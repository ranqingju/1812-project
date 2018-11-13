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

import houseCase from '@/components/other/home/house/houseCase';
import houseCaseList from '@/components/other/home/house/houseCaseList';


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
      path: '/house/houseCase',
      name: 'houseCase',
      component: houseCase
    },
    {
      path:'/house/houseCaseList',
      name:'houseCaseList',
      component:houseCaseList
    }
  ]
})

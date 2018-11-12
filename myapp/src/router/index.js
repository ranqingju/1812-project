import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Home from '@/components/main/home'
import Magazine from '@/components/main/magazine'
import Designer from '@/components/main/designer'
import My from '@/components/main/my'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
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
    }
  ]
})

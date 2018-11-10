import Vue from 'vue'
import Router from 'vue-router'
import First_stage from '@/components/first_stage'
import Home from '@/components/first_stage/home'
import Magazine from '@/components/first_stage/magazine'
import Designer from '@/components/first_stage/designer'
import My from '@/components/first_stage/my'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/',
      component: First_stage,
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

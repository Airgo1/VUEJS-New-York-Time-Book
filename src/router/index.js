import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Home'
import OneListPage from '@/pages/OneList'
import StorePage from '@/pages/Store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/lists/:date/:name',
      name: 'OneList',
      component: OneListPage,
      props: true
    },
    {
      path: '/store',
      name: 'Store',
      component: StorePage,
      props: true
    }
  ]
})

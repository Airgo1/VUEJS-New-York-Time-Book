import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/Home'
import OneListPage from '@/pages/OneList'
import CartPage from '@/pages/Cart'
//import CheckoutPage from '@/pages/Checkout'

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
      path: '/cart',
      name: 'Cart',
      component: CartPage,
      props: true
    }/*,
    {
      path: '/checkout',
      name: 'Checkout',
      component: CheckoutPage,
      props: true
    }*/
  ]
})

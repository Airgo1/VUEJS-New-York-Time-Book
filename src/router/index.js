import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home.vue'
import OneListPage from '@/views/OneList'
import CartPage from '@/views/Cart'
import CheckoutPage from '@/views/Checkout'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutPage,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router

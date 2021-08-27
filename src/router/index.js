import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/views/Home.vue'
import OneListPage from '@/views/OneList'
import CartPage from '@/views/Cart'

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
  }
]

const router = new VueRouter({
  routes
})

export default router

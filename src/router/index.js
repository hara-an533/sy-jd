import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Category from '../views/category/Category.vue'
import ShopCart from "../views/shopcart/ShopCart.vue"
import Surprise from '../views/surprise/Surprise.vue'
import Profile from "../views/personal/Profile.vue"
import GoodsDetail from '../views/category/GoodsDetail'
import FrontView from '../views/FrontView'
import {
  Main
} from 'element-ui'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/main'
  },
  {
    path: '/main',
    component: FrontView,
    redirect: "/main/home",
    children: [{
        path: "home",
        name: 'Home',
        component: Home
      },
      {
        path: 'category',
        name: 'Category',
        component: Category,
      },
      {
        path: 'surprise',
        name: 'Surprise',
        component: Surprise
      },
      {
        path: 'shopcart',
        name: 'ShopCart',
        component: ShopCart
      },
      {
        path: '/profile',
        name: 'Profile',
        component: Profile
      }
    ]
  },
  {
    path: "/main/category/:produts",
    name:'GoodsDetail',
    component: GoodsDetail
  },



]

const router = new VueRouter({
  routes
})

export default router
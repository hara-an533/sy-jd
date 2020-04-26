import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Category from '../views/category/Category.vue'
import ShopCart from "../views/shopcart/ShopCart.vue"
import Surprise from '../views/surprise/Surprise.vue'
import Profile from "../views/personal/Profile.vue"
import Login from '../views/personal/Login'
import GoodsDetail from '../views/category/GoodsDetail'
import FrontView from '../views/FrontView'
import SearchFunction from "../views/home/childComps/search/SearchFunction.vue"
import ProductDetails from "../views/home/childComps/ProductDetails/ProductDetails.vue"
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
    path:'/login',
    name:"Login",
    component:Login
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
        path:'profile',
        name:'Profile',
        component:Profile
      }
    ] 
  },
  {
    path: "/main/category/:produts",
    name:'GoodsDetail',
    component: GoodsDetail
  },
  {
    path: "/main/home/SearchFunction",
    name:'SearchFunction',
    component: SearchFunction
  },
  {
    path: "/main/home/ProductDetails",
    name:'ProductDetails',
    component: ProductDetails
  },


]

const router = new VueRouter({
  routes
})

export default router
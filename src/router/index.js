import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Category from '../views/category/Category.vue'
import ShopCart from "../views/shopcart/ShopCart.vue"
import Surprise from '../views/surprise/Surprise.vue'
import Profile from "../views/profile/Profile.vue"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:"/home",
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path:'/surprise',
    name:'Surprise',
    component:Surprise
  },
  {
    path:'/shopcart',
    name:'ShopCart',
    component:ShopCart 
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile
  }
]

const router = new VueRouter({
  routes
})

export default router

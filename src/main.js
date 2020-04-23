import Vue from 'vue'
import VueRouter from "vue-router"
import App from './App.vue'

import router from "./router/index.js"
// import store from "./store/index.js"


import Category from './views/category/Category.vue'
import Home from './views/home/Home.vue'
import ShopCart from "./views/shopcart/ShopCart.vue"
import Surprise from './views/surprise/Surprise.vue'
import Profile from "./views/personal/Profile.vue"
// import countdown from "./views/home/childComps/SecKill.vue";

// 饿了么
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import 'swiper/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false


Vue.use(VueRouter)

new Vue({
    router: router,
    // store: store,
    components: {
        'home': Home,
        'category':  Category,
        'shop-cart': ShopCart,
        'surprise': Surprise,
        'profile':Profile,
        // "countdown":countdown
    },
    render: h => h(App),
}).$mount('#app')
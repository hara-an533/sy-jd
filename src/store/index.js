import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'unLogin',
    tabBarName: "main-tab-bar",
    telephoneNumber:'15828518276',
    code:'123456',
    shopCart:[],
  },
  mutations: {
    changeStatus(state) {
      state.status = "login",
      state.tabBarName = "tab-bar-login-after"
    },
    shopCartPush(state,item){
      state.shopCart.push(item);
      console.log(state.shopCart);
      
    }
  },
  actions: {},
  modules: {}
})
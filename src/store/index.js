import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'unLogin',
    tabBarName: "main-tab-bar",
    telephoneNumber: '15828518276',
    code: '123456',
    shopCart: [],
    total: 0,
    number:0,
  },
  mutations: {
    changeStatus(state) {
      state.status = "login",
        state.tabBarName = "tab-bar-login-after"
    },
    shopCartPush(state, item) {
      let index = state.shopCart.findIndex(function (i) {
        return i.detail == item.detail;
      })
      if (index >= 0) {
        console.log(index);
        state.shopCart[index].num += 1;
      } else {
        state.shopCart.push(item);
        console.log(state.shopCart);
      }
    },
    plus(state, index) {
      state.shopCart[index].num += 1;
    },
    minus(state, index) {
      if (state.shopCart[index].num >= 1) {
        state.shopCart[index].num -= 1;
      }
    },
    getTotal(state) {
      state.total = 0;
      state.shopCart.forEach(item => {
        state.total = item.price * item.num;
      });
    },
    getNum(state){
      state.number=0;
      state.shopCart.forEach(item => {
        state.number +=item.num;
      });
    },
    delItem(state,index){
      state.shopCart.splice(index,1)
    }
  },
  actions: {},
  modules: {}
})
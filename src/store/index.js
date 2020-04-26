import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'unLogin',
    tabBarName: "main-tab-bar",
    telephoneNumber:'15828518276',
    code:'123456'
  },
  mutations: {
    changeStatus(state) {
      state.status = "login",
      state.tabBarName = "tab-bar-login-after"
    }
  },
  actions: {},
  modules: {}
})
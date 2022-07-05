import Vue from 'vue'
import Vuex from 'vuex'
import emails from './modules/emails'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    emails
  }
})
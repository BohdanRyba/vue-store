import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    locale: ''
  },
  mutations: {
    setLocale(state, locale) {
      state.locale = locale
    }
  },
  actions: {

  }
})

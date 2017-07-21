import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import * as mutations from './mutations'
import storeIndexPage from './modules/storeIndexPage'
import storeHomePage from './modules/storeHomePage'
import storeReadPage from './modules/storeReadPage'
import storeMoviePage from './modules/storeMoviePage'
import storeMusicPage from './modules/storeMusicPage'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  modules: {
    storeMoviePage,
    storeReadPage,
    storeIndexPage,
    storeMusicPage,
    storeHomePage
  },
  strict: process.env.NODE_ENV !== 'production'
})

import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  asideSearchShowFlag: false,
  asideShowFlag: false,
  footerTabbarIndex: 0
}

// getters
const getters = {
  getAsideSearchShowFlag: state => state.asideSearchShowFlag,
  getAsideShowFlag: state => state.asideShowFlag,
  getFooterTabbarIndex: state => state.footerTabbarIndex
}

// actions
const actions = {
  changeAsideSearchShowFlag ({commit}, stat) {
    if (typeof stat === 'boolean') {
      commit(types.CHANGE_ASIDE_SEARCH_SHOW_FLAG, stat)
    }
  },
  changeAsideShowFlag ({commit}, stat) {
    if (typeof stat === 'boolean') {
      commit(types.CHANGE_ASIDE_SHOW_FLAG, stat)
    }
  },
  changeFooterTabbarIndex ({commit}, index) {
    if (index <= 3 && index >= 0) {
      commit(types.CHANGE_FOOTER_TABBAR_INDEX, index)
    }
  }
}

// mutations
const mutations = {
  [types.CHANGE_ASIDE_SEARCH_SHOW_FLAG] (state, stat) {
    state.asideSearchShowFlag = stat
  },
  [types.CHANGE_ASIDE_SHOW_FLAG] (state, stat) {
    state.asideShowFlag = stat
  },
  [types.CHANGE_FOOTER_TABBAR_INDEX] (state, index) {
    state.footerTabbarIndex = index
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

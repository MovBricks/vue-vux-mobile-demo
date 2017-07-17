import * as types from '../mutation-types'

// initial state
// shape: [{ id, quantity }]
const state = {
  asideShowFlag: false
}

// getters
const getters = {
  getAsideShowFlag: state => state.asideShowFlag
}

// actions
const actions = {
  changeAsideShowFlag ({commit}, stat) {
    console.log('vuex typeof stat:' + typeof stat)
    if (typeof stat === 'boolean') {
      commit(types.CHANGE_ASIDE_SHOW_FLAG, stat)
    }
  }
}

// mutations
const mutations = {
  [types.CHANGE_ASIDE_SHOW_FLAG] (state, stat) {
    state.asideShowFlag = stat
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}

import server from '../../api/axios-instance/music'
import * as types from '../mutation-types.js'

const state = {
  loading: false, // 无限下拉是否在加载中
  musicCover: '',
  musicUrl: '',
  topten: [],
  article: {},
  author: {}, // 音乐人
  storyAuthor: {} // 文章作者
}

const getters = {
  loading: state => {
    return state.loading
  },
  musicCover: state => state.musicCover,
  musicUrl: state => state.musicUrl,
  topten: state => state.topten,
  article: state => state.article,
  author: state => state.author,
  storyAuthor: state => state.storyAuthor
}

const actions = {
  getTopTen ({ commit }) {
    server.getToptenMusic().then(response => {
      commit(types.RECEIVE_TOPTEN, response.data.data)
    })
  },
  getNextPageById ({ commit }, id) {
    server.getNextPageById(id).then(response => {
      commit(types.RECEIVE_NEXTPAGE, response.data.data)
    })
  },
  getMusicById ({ dispatch, commit }, id) {
    server.getMusicById(id).then(response => {
      commit(types.RECEIVE_MUSIC, response.data.data)
      dispatch('getMusicUrlById', response.data.data.music_id)
    })
  },
  getMusicUrlById ({ commit }, id) {
    server.getMusicUrlById(id).then(response => {
      server.getMusicUrlByIdDone()
      commit(types.RECEIVE_MUSIC_URL, response.data)
    })
  }
}

const mutations = {
  [types.RECEIVE_TOPTEN] (state, data) {
    state.topten.splice(0, state.topten.length)
    state.topten = data
  },
  [types.RECEIVE_NEXTPAGE] (state, data) {
    state.topten = state.topten.concat(data)
  },
  [types.RECEIVE_MUSIC] (state, data) {
    state.article = data
    state.author = data.author
    state.storyAuthor = data.story_author
    state.musicCover = data.cover
  },
  [types.RECEIVE_MUSIC_URL] (state, data) {
    if (data.success === true) {
      state.musicUrl = data.url
    } else {
      state.musicUrl = ''
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

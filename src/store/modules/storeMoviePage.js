import server from '../../api/axios-instance/movie'
import * as types from '../mutation-types.js'

const state = {
  topten: [],
  article: {}, // 文章
  author: {}, // 文章作者
  detail: {}, // 电影介绍
  photos: [] // 电影照片
}

const getters = {
  topten: state => state.topten,
  article: state => state.article,
  author: state => state.author,
  detail: state => state.detail,
  photos: state => state.photos
}

const actions = {
  getTopTen ({ commit }) {
    server.getToptenMovie().then(response => {
      commit(types.RECEIVE_TOPTEN, response.data.data)
    })
  },
  getNextPageById ({ commit }, id) {
    server.getNextPageById(id).then(response => {
      commit(types.RECEIVE_NEXTPAGE, response.data.data)
    })
  },
  getMovieById ({ commit }, id) {
    server.getMovieById(id).then(response => {
      commit(types.RECEIVE_MOVIE, response.data.data.data[0])
    })
  },
  getMoviePhotosById ({ commit }, id) {
    // server.getMoviePhotosById(id, data => {
    //   commit(types.RECEIVE_MOVIE_PHOTOS, data)
    // })
    commit(types.CLEAN_MOVIE_PHOTOS)
    server.getMoviePhotosById(id).then(response => {
      if (typeof response.data.data.data !== 'undefined') {
        commit(types.RECEIVE_MOVIE_PHOTOS, response.data.data.data)
      } else {
        commit(types.RECEIVE_MOVIE_PHOTOS, response.data.data)
      }
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
  [types.RECEIVE_MOVIE] (state, data) {
    state.article = data
    state.author = data.user
  },
  [types.CLEAN_MOVIE_PHOTOS] (state) {
    state.photos.splice(0, state.photos.length)
  },
  [types.RECEIVE_MOVIE_PHOTOS] (state, data) {
    state.detail = data
    console.log(data.photo)
    state.photos.splice(0, state.photos.length)
    state.photos = state.photos.concat(data.detailcover)
    state.photos = state.photos.concat(data.photo)
    console.log(JSON.stringify(state.photos))
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

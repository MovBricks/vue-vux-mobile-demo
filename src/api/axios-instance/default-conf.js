import axios from 'axios'
import api from '../api'

// axios 配置

// axios.defaults.withCredentials = true

// create axios instance
var instance = axios.create({
  baseURL: api.baseURL
})

instance.defaults.timeout = 5000
instance.defaults.headers.post['Content-Type'] = 'application/json'

// http request 拦截器
instance.interceptors.request.use(
  config => {
    // console.log('request:' + JSON.stringify(config))
    return config
  },
  err => {
    console.log('request err: ' + JSON.stringify(err))
    return Promise.reject(err)
  })

// http response 拦截器
instance.interceptors.response.use(
  response => {
    // console.log('response:' + JSON.stringify(response.data))
    return response
  },
  err => {
    console.log('response err: ' + JSON.stringify(err))
    return Promise.reject(err)
  })

export default {
  instance
}

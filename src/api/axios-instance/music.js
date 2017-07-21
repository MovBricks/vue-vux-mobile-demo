import instance from './default-conf'
import api from '../api'

const reg = /\{(.+)\}/ig

export default {
  getToptenMusic () {
    return instance.get(api.getToptenMusic)
  },
  getNextPageById (id) {
    return instance.get(api.getNextMusic.replace(reg, id))
  },
  getMusicById (id) {
    return instance.get(api.getMusicById.replace(reg, id))
  },
  getMusicUrlById (id) {
    instance.defaults.baseURL = ''
    return instance.get(api.getMusicUrlById.replace(reg, id))
  },
  getMusicUrlByIdDone () {
    instance.defaults.baseURL = api.baseURL
  }
}

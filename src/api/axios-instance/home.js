import instance from './default-conf'
import api from '../api'

const reg = /\{(.+)\}/ig

export default {
  /**
   * 获取首页idlist
   */
  getIdlist () {
    return instance.get(api.idlist)
  },
  getHpById (id) {
    return instance.get(api.getHpById.replace(reg, id))
  }
}

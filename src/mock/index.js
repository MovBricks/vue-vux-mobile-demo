import Mock from 'mockjs'
import onelistObj from './database/onelist'
import essayObj from './database/essay'
import onereadlistObj from './database/one-read-list'
import onemovielistObj from './database/one-movie-list'
import movieObj from './database/movie'
import moviepictureObj from './database/movie-picture'

var mockstart = function () {
  // console.log('mockinit!!')
  Mock.mock('http://v3.wufazhuce.com:8000/api/onelist/idlist', {
    'res': '@natural(0, 0)',
    'data|1-1': [
      '4308',
      '4312',
      '4287',
      '4286',
      '4285',
      '4284',
      '4283',
      '4281',
      '4277',
      '4202'
    ]
  })
  Mock.mock('http://v3.wufazhuce.com:8000/api/onelist/4308/0', onelistObj)
  Mock.mock('http://v3.wufazhuce.com:8000/api/essay/2632', essayObj)
  Mock.mock('http://v3.wufazhuce.com:8000/api/channel/reading/more/0', onereadlistObj)
  Mock.mock('http://v3.wufazhuce.com:8000/api/channel/movie/more/0', onemovielistObj)
  Mock.mock('http://v3.wufazhuce.com:8000/api/movie/917/story/1/0', movieObj)
  Mock.mock('http://v3.wufazhuce.com:8000/api/movie/detail/917', moviepictureObj)
  Mock.mock('/sendcomment', {
    'weightmonth|5-12': [
      '@natural(60, 120)'
    ]
  })
  Mock.mock('/settargetcalorie', {
  })
}

// mockstart()

export default mockstart

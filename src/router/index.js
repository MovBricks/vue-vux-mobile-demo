import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/404Hello.vue'
import Index from '../pages/indexPage.vue'

import EssayDetail from '../pages/details/read/essay.vue'
import MovieDetail from '../pages/details/movie.vue'
import QuestionDetail from '../pages/details/read/question.vue'
import SerialDetail from '../pages/details/read/serial.vue'
import MusicDetail from '../pages/details/music.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      name: 'EssayDetail',
      path: '/reading/essay/:id',
      component: EssayDetail
    },
    {
      name: 'SerialDetail',
      path: '/reading/serial/:id',
      component: SerialDetail
    },
    {
      name: 'QuestionDetail',
      path: '/reading/question/:id',
      component: QuestionDetail
    },
    {
      name: 'MusicDetail',
      path: '/music/:id',
      component: MusicDetail
    },
    {
      name: 'MovieDetail',
      path: '/movie/:id',
      component: MovieDetail
    },
    {
      path: '*',
      name: '404',
      component: Hello
    }
  ]
})

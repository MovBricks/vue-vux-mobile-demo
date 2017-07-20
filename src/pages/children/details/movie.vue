<template>
  <div class="movie">
    <com-detail-header :title="headerTitle" class="movieHeader"></com-detail-header>
    <section class="movieScroll">
      <!--头部滚动图片-->
      <section class="movieScrollTopRoll">
        <swiper :loop="true" :aspect-ratio="600/1080" class="swiperImgsWrapper">
          <swiper-item v-for="(item, index) in photos" :key="index">
            <img :src="item" class="swiperImg"/>
          </swiper-item>
        </swiper>
        <h2 class="movieScrollSubtitle">《{{detail.title}}》</h2>
      </section>
      <article>
        <!--标题-->
        <header class="movieScrollHeader">
          <h1 class="movieScrollTitle">{{article.title}}</h1>
          <hr />
          <p class="movieScrollAuthor">文&nbsp/&nbsp{{author.user_name}}</p>
        </header>
        <!--正文-->
        <p class="movieScrollContent" v-html="article.content"></p>
        <footer class="movieScrollFooter">
          <!--编辑-->
          <div v-if="article.charge_edt" class="editorIntroduce">
              {{ article.charge_edt.replace(/（|）/g, '') }}&nbsp{{article.editor_email}}
          </div>
          <!--copyright-->
          <div v-if="article.copyright">{{article.copyright}}</div>
          <!--作者-->
          <section v-else class="authorInfo">
            <h2 class="authorInfoTitle">作者</h2>
            <hr />
            <ul class="authorInfoContent">
              <li class="authorInfoContentIcon">
                <img :src="author.web_url"/>
              </li>
              <li class="authorInfoContentName">
                <p>{{ author.user_name }}&nbsp{{ author.wb_name }}</p>
                <small>{{ author.summary }}</small>
              </li>
              <li class="followButton">
                <x-button :mini="true" :plain="true">关注</x-button>
              </li>
            </ul>
          </section>
        </footer>
      </article>
    </section>
    <com-detail-footer
      :likeCount="article.praisenum"
      :commentNum="detail.commentnum"
      class="movieFooter"></com-detail-footer>
  </div>
</template>

<script>
  import { SwiperItem, Swiper, XButton } from 'vux'
  import comDetailHeader from '../../../components/header/headDetailNavBar.vue'
  import comDetailFooter from '../../../components/footer/footDetailNavBar.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'movieDetail',
    components: {
      XButton,
      Swiper,
      SwiperItem,
      'com-detail-header': comDetailHeader,
      'com-detail-footer': comDetailFooter
    },
    computed: {
      ...mapGetters('storeMoviePage', [
        'article',
        'author',
        'detail',
        'photos'
      ]),
      headerTitle: function () {
        return this.tag ? this.tag : '一个影视'
      }
    },
    created () {
      console.log(this.$route.params)
      window.scrollTo(0, 0)
      let id = this.$route.params.id
      this.subtitle = this.$route.params.subtitle
      this.getMoviePhotosById(id)
      this.getMovieById(id)
    },
    data: function () {
      return {
        subtitle: ''
      }
    },
    methods: {
      ...mapActions('storeMoviePage', [
        'getMovieById',
        'getMoviePhotosById'
      ])
    }
  }
</script>

<style scoped>
  .movieHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .movieScroll{
    background-color: white;
    padding: 50px 20px;
  }
  .movieScrollTopRoll{
    margin: 0 -20px;
  }
  .swiperImgsWrapper{
    /*height: 210px;*/
    width: 100%;
  }
  .swiperImg{
    width: 100%;
  }
  .movieScrollSubtitle{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    color: #808080;
    padding: 10px 0;
  }
  hr{
    margin: 15px 0;
    border: 2px solid #000;
    width: 70px;
  }
  .movieScrollTitle{
    font-size: 2.8rem;
    font-weight: bold;
  }
  .movieScrollAuthor{
    padding-bottom: 20px;
    font-size: 1.3rem;
  }
  .movieScrollContent{
    font-family: "PingFangSC-Light",sans-serif;
    font-size: 1.6rem;
    text-shadow: none;
  }
  .movieScrollFooter{
    margin-bottom: 20px;
  }
  .editorIntroduce{
    color: #808080;
    text-shadow: none;
    font-size: 1.2rem;
    margin: 20px 0;
  }
  .authorInfo{
    margin-top: 60px;
  }
  .authorInfoContent{
    display: flex;
  }
  .authorInfoContentIcon{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
  }
  .authorInfoContentIcon>img{
    width: 100%;
    height: 100%;
  }
  .authorInfoContentName{
    font-size: 1.4rem;
    padding-left: 10px;
    flex: 1;
  }
  .authorInfoContentName>small{
    color: #808080;
    font-size: 1rem;
  }
  .followButton{
    align-self:center;
  }
  .movieFooter{
    position: fixed;
    bottom:0;
    width: 100%;
    z-index: 10;
  }
</style>

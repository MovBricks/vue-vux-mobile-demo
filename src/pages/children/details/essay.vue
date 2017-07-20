<template>
  <div class="essay">
    <com-detail-header :title="headerTitle" class="essayHeader"></com-detail-header>
    <section class="essayScroll">
      <article>
        <!--标题-->
        <header class="essayScrollHeader">
          <h1 class="essayScrollTitle">{{article.hp_title}}</h1>
          <hr />
          <p class="essayScrollAuthor">文&nbsp/&nbsp{{author.user_name}}</p>
        </header>
        <!--正文-->
        <p class="essayScrollContent" v-html="article.hp_content"></p>
        <footer class="essayScrollFooter">
          <!--编辑-->
          <div v-if="article.hp_author_introduce" class="editorIntroduce">
              {{ article.hp_author_introduce.replace(/（|）/g, '') }}
          </div>
          <!--作者-->
          <section class="authorInfo">
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
      :commentNum="article.commentnum"
      class="essayFooter"></com-detail-footer>
  </div>
</template>

<script>
  import { XButton } from 'vux'
  import comDetailHeader from '../../../components/header/headDetailNavBar.vue'
  import comDetailFooter from '../../../components/footer/footDetailNavBar.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'essayPage',
    components: {
      XButton,
      'com-detail-header': comDetailHeader,
      'com-detail-footer': comDetailFooter
    },
    computed: {
      ...mapGetters('storeReadPage', [
        'article',
        'tag',
        'author'
      ]),
      headerTitle: function () {
        return this.tag ? this.tag : '一个阅读'
      }
    },
    created () {
      console.log(this.$route.params)
      window.scrollTo(0, 0)
      this.getEssayById(this.$route.params.id)
//      this.getEssayById(2632)
    },
    data: function () {
      return {
      }
    },
    methods: {
      ...mapActions('storeReadPage', [
        'getEssayById'
      ])
    }
  }
</script>

<style scoped>
  .essayHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .essayScroll{
    background-color: white;
    padding: 50px 20px;
  }
  hr{
    margin: 15px 0;
    border: 2px solid #000;
    width: 70px;
  }
  .essayScrollTitle{
    font-size: 2.8rem;
    font-weight: bold;
  }
  .essayScrollAuthor{
    padding-bottom: 20px;
    font-size: 1.3rem;
  }
  .essayScrollContent{
    font-family: "PingFangSC-Light",sans-serif;
    font-size: 1.6rem;
    text-shadow: none;
  }
  .essayScrollFooter{
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
  .essayFooter{
    position: fixed;
    bottom:0;
    width: 100%;
    z-index: 10;
  }
</style>

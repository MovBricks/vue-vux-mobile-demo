<template>
  <div class="question">
    <com-detail-header :title="headerTitle" class="questionHeader"></com-detail-header>
    <section class="questionScroll">
      <article>
        <!--标题-->
        <header class="questionScrollHeader">
          <h1 class="questionScrollTitle">{{question.question_title}}</h1>
          <h2 class="questionScrollAsk">{{question.question_content}}</h2>
          <p>— — {{asker.user_name}}问道</p>
        </header>
        <load-more :show-loading="false" background-color="#fbf9fe" class="questionScrollDivider"></load-more>
        <!--正文-->
        <h3 class="questionScrollAnswerer">{{answerer.user_name}}答:</h3>
        <p class="questionScrollContent" v-html="question.answer_content"></p>
        <footer class="questionScrollFooter">
          <!--编辑-->
          <div v-if="question.charge_edt" class="editorIntroduce">
              {{ question.charge_edt.replace(/（|）/g, '') }}
          </div>
          <!--回答者-->
          <section class="authorInfo">
            <h2 class="authorInfoTitle">回答者</h2>
            <hr />
            <ul class="authorInfoContent">
              <li class="authorInfoContentIcon">
                <img :src="answerer.web_url"/>
              </li>
              <li class="authorInfoContentName">
                <p>{{ answerer.user_name }}&nbsp{{ answerer.wb_name }}</p>
                <small>{{ answerer.summary }}</small>
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
      :likeCount="question.praisenum"
      :commentNum="question.commentnum"
      class="questionFooter"></com-detail-footer>
  </div>
</template>

<script>
  import { LoadMore, XButton } from 'vux'
  import comDetailHeader from '../../../components/header/headDetailNavBar.vue'
  import comDetailFooter from '../../../components/footer/footDetailNavBar.vue'
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'questionDetail',
    components: {
      LoadMore,
      XButton,
      'com-detail-header': comDetailHeader,
      'com-detail-footer': comDetailFooter
    },
    computed: {
      ...mapGetters('storeReadPage', [
        'question',
        'asker',
        'answerer'
      ]),
      headerTitle: function () {
        return this.tag ? this.tag : '阅读.问答'
      }
    },
    created () {
      console.log(this.$route.params)
      window.scrollTo(0, 0)
      this.getQuestionById(this.$route.params.id)
    },
    data: function () {
      return {
      }
    },
    methods: {
      ...mapActions('storeReadPage', [
        'getQuestionById'
      ])
    }
  }
</script>

<style scoped>
  .questionHeader{
    position: fixed;
    top:0;
    width: 100%;
    z-index: 10;
  }
  .questionScroll{
    background-color: white;
    padding: 50px 20px;
  }
  .questionScrollDivider{
    width: 100%;
  }
  hr{
    margin: 15px 0;
    border: 2px solid #000;
    width: 70px;
  }
  .questionScrollTitle{
    font-size: 2.8rem;
    font-weight: bold;
  }
  .questionScrollAsk{
    padding: 20px 0;
    font-weight: normal;
    font-size: 1.3rem;
  }
  .questionScrollAnswerer{
    font-size: 1.8rem;
    font-weight: normal;
    margin: 20px 0;
  }
  .questionScrollContent{
    font-family: "PingFangSC-Light",sans-serif;
    font-size: 1.6rem;
    text-shadow: none;
  }
  .questionScrollFooter{
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
  .questionFooter{
    position: fixed;
    bottom:0;
    width: 100%;
    z-index: 10;
  }
</style>
